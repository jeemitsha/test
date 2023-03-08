"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [98850], {
        971417: (t, e, i) => {
            function n(t) {
                return t === r(t)
            }

            function r(t) {
                const e = t.indexOf("$"),
                    i = t.indexOf("@");
                return e < 0 && i >= 0 ? null : t.substring(Math.max(e + 1, 0), i >= 0 ? i : t.length)
            }

            function s(t) {
                return t.startsWith("PUB;")
            }

            function o(t) {
                return t.startsWith("USER;")
            }

            function a(t) {
                return t.startsWith("STD;")
            }

            function l(t) {
                return t.includes("Candlestick%1Pattern%1")
            }

            function u(t) {
                return t.startsWith("EDGR_")
            }
            i.d(e, {
                isPineIdString: () => n,
                extractPineId: () => r,
                isPublishedPineId: () => s,
                isCustomPineId: () => o,
                isStandardPineId: () => a,
                isCandleStickId: () => l,
                isEdgrPineId: () => u
            })
        },
        223616: (t, e, i) => {
            i.d(e, {
                Version: () => r
            });
            var n = i(650151);
            class r {
                constructor(t, e) {
                    this._major = t, this._minor = e
                }
                major() {
                    return this._major
                }
                minor() {
                    return this._minor
                }
                isZero() {
                    return 0 === this._major && 0 === this._minor
                }
                toString() {
                    return this._major + "." + this._minor
                }
                compareTo(t) {
                    return this._major < t._major ? -1 : this._major > t._major ? 1 : this._minor < t._minor ? -1 : this._minor > t._minor ? 1 : 0
                }
                isLess(t) {
                    return this.compareTo(t) < 0
                }
                isLessOrEqual(t) {
                    return this.compareTo(t) <= 0
                }
                isEqual(t) {
                    return 0 === this.compareTo(t)
                }
                isGreater(t) {
                    return this.compareTo(t) > 0
                }
                isGreaterOrEqual(t) {
                    return this.compareTo(t) >= 0
                }
                static parse(t) {
                    if (t instanceof r) return new r(t.major(), t.minor());
                    if ("number" == typeof t) return (0, n.assert)(Math.floor(t) === t, "Version should not be a float number"), new r(t, 0);
                    if ("string" == typeof t) {
                        const e = t.split(".");
                        if (1 === e.length) {
                            const i = parseInt(e[0], 10);
                            return (0, n.assert)(!isNaN(i), "Bad version string: " + t), new r(i, 0)
                        }
                        if (2 === e.length) {
                            const i = parseInt(e[0], 10);
                            (0, n.assert)(!isNaN(i), "Bad version string: " + t);
                            const s = parseInt(e[1], 10);
                            return (0, n.assert)(!isNaN(s), "Bad version string: " + t), new r(i, s)
                        }
                        throw new Error("Bad version string (one dot expected): " + t)
                    }
                    throw new Error("Bad version: " + t)
                }
            }
            r.ZERO = new r(0, 0)
        },
        100393: (t, e, i) => {
            i.d(e, {
                patchSourceState: () => r
            });
            var n = i(777754);

            function r(t) {
                const e = {
                    palettes: {},
                    inputs: [{
                        defval: 2,
                        id: "upper diviation",
                        max: 500,
                        min: -500,
                        name: n.t(null, void 0, i(572894)),
                        type: "integer"
                    }, {
                        defval: -2,
                        id: "lower diviation",
                        max: 500,
                        min: -500,
                        name: n.t(null, void 0, i(696882)),
                        type: "integer"
                    }, {
                        defval: !0,
                        id: "use upper diviation",
                        name: n.t(null, void 0, i(36834)),
                        type: "bool"
                    }, {
                        defval: !0,
                        id: "use lower diviation",
                        name: n.t(null, void 0, i(14072)),
                        type: "bool"
                    }, {
                        defval: 0,
                        id: "first bar time",
                        max: 253370764800,
                        min: 0,
                        name: n.t(null, void 0, i(312541)),
                        type: "time"
                    }, {
                        defval: 0,
                        id: "last bar time",
                        max: 253370764800,
                        min: 0,
                        name: n.t(null, void 0, i(955034)),
                        type: "time"
                    }, {
                        defval: "close",
                        id: "source",
                        name: n.t(null, void 0, i(746147)),
                        options: ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"],
                        type: "text"
                    }],
                    plots: [],
                    graphics: {},
                    defaults: {
                        inputs: {
                            "first bar time": 0,
                            "last bar time": 0,
                            "lower diviation": -2,
                            source: "close",
                            "upper diviation": 2,
                            "use lower diviation": !0,
                            "use upper diviation": !0
                        }
                    },
                    _metainfoVersion: 6,
                    description: "Regression Trend",
                    id: "RegressionTrend@tv-basicstudies",
                    is_price_study: !0,
                    shortDescription: "Reg Trend",
                    shortId: "RegressionTrend",
                    version: "2",
                    fullId: "RegressionTrend@tv-basicstudies-2",
                    name: "RegressionTrend@tv-basicstudies"
                };
                return t.metaInfo || (t.metaInfo = e), t
            }
        },
        212110: (t, e, i) => {
            var n = i(418147);

            function r(t) {
                var e = JSON.stringify(t);
                return e = e.replace(/'/g, "\\'")
            }
            t.exports = {
                formatCallstudyArg: r,
                prepareCallStudyArgs: function(t, e) {
                    var i = {};
                    if (e.isTVScript) {
                        var s = e.defaults.inputs.text;
                        i.text = n.patchILTemplate(s, e, t)
                    } else
                        for (var o = Object.keys(t), a = o.length - 1; a >= 0; a--) {
                            var l = o[a],
                                u = t[l] ? t[l].id : null;
                            u && t[u] && (i[u] = t[u])
                        }
                    return r(i)
                }
            }
        },
        924529: (t, e, i) => {
            i.d(e, {
                generateSplitTitleForGui: () => a,
                generateTitleForGui: () => l
            });
            var n = i(650151),
                r = i(777754),
                s = i(256489);

            function o(t, e) {
                return (Math.round(t * Math.pow(10, e)) / Math.pow(10, e)).toString() || ""
            }

            function a(t) {
                const e = "QUANDL" === (t = t || {}).exchange,
                    a = {
                        title: "",
                        description: "",
                        interval: "",
                        exchange: "",
                        provider: "",
                        chartStyle: "",
                        sessionDescription: ""
                    };
                let l = "";
                if (t.description && e)
                    if (2 === t.description.split("/").length) l = t.description.split("/")[1];
                    else {
                        t.description.split("'").filter((t => t.length)).forEach((t => {
                            let e = [];
                            e = t && ("/" === t[0] || /\d+\/\(?/.test(t)) ? [t] : t.split("/").filter((t => t.length)), l += e[2 === e.length ? 1 : 0]
                        }))
                    }
                else l = t.description ? t.description : t.symbol;
                if (t.ticker ? (a.title = t.ticker, a.description = u(l)) : a.title = u(l), t.interval && (a.interval = (0, s.translatedIntervalString)(t.interval)), e && t.description) {
                    const e = /[\w_]+\/[\w_]+/.exec(t.description);
                    e && e[0] ? a.provider = u(e[0].split("/")[0]) : a.provider = u(t.description.split("/")[0])
                }
                return t.exchange && (a.exchange = u(t.exchange)), a.chartStyle = u(function(t) {
                    const e = t.inputs;
                    switch (t.style) {
                        case 4:
                            const s = e.style + ("ATR" === e.style ? `(${e.atrLength})` : ""),
                                a = (0, n.ensureDefined)(t.boxSize || e.boxSize);
                            return `${r.t(null,void 0,i(20801))} [${s}, ${o(a,4)}]`;
                        case 7:
                            return `${r.t(null,void 0,i(717558))} [${e.lb}]`;
                        case 5:
                            const l = e.style + ("ATR" === e.style ? `(${e.atrLength})` : ""),
                                u = t.reversalAmount || e.reversalAmount,
                                d = void 0 !== u ? `, ${o(u,8)}` : "";
                            return `${r.t(null,void 0,i(292901))} [${l}${d}]`;
                        case 6:
                            const p = `${e.style}${"ATR"===e.style?"("+e.atrLength+")":""}`,
                                c = t.boxSize || e.boxSize;
                            return `${r.t(null,void 0,i(145113))} [${p}, ${o((0,n.ensureDefined)(c),8)}, ${e.reversalAmount}]`
                    }
                    return 11 === t.style ? r.t(null, void 0, i(490357)) : 8 === t.style ? r.t(null, void 0, i(240530)) : ""
                }(t)), t.sessionDescription && (a.sessionDescription = u(t.sessionDescription)), a
            }

            function l(t) {
                const e = a(t);
                return (t.ticker ? e.description : e.title) + (e.interval ? ", " + e.interval : "") + function(t, e = ", ") {
                    return (t.provider ? `${e}${t.provider}` : "") + (t.exchange ? `${e}${t.exchange}` : "") + (t.chartStyle ? `${e}${t.chartStyle}` : "") + (t.branding ? `${e}${t.branding}` : "") + (t.sessionDescription ? `${e}${t.sessionDescription}` : "")
                }(e)
            }

            function u(t) {
                return t.replace(/'/g, "")
            }
        },
        343102: (t, e, i) => {
            i.d(e, {
                migrateMetaInfoAndPropState: () => d
            });
            var n = i(650151),
                r = i(108184),
                s = i(758337);
            const o = ["PennantCP@tv-basicstudies", "WedgeCP@tv-basicstudies"],
                a = ["DoubleTopCP@tv-basicstudies", "BullishFlagCP@tv-basicstudies", "HeadAndShouldersCP@tv-basicstudies", "TripleTopCP@tv-basicstudies"];
            class l {
                targetMetaInfoVersion() {
                    return 53
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 53,
                        void 0 !== e.defaults && void 0 !== e.defaults.inputs && (o.includes(e.id) || a.includes(e.id) && Number(e.version) < 156)) {
                        const t = e.defaults.inputs["Invert Pattern"];
                        i.id = this._getNewIdStudies(e.id, t)
                    }
                }
                migratePropState(t) {}
                _getNewIdStudies(t, e) {
                    return t.startsWith("WedgeCP") ? e ? "WedgeFallingCP@tv-basicstudies" : "WedgeRisingCP@tv-basicstudies" : t.startsWith("PennantCP") ? e ? "PennantBearishCP@tv-basicstudies" : "PennantBullishCP@tv-basicstudies" : t.startsWith("DoubleTopCP") && e ? "DoubleBottomCP@tv-basicstudies" : t.startsWith("BullishFlagCP") && e ? "BearishFlagCP@tv-basicstudies" : t.startsWith("HeadAndShouldersCP") && e ? "HeadAndShouldersInverseCP@tv-basicstudies" : t.startsWith("TripleTopCP") && e ? "TripleBottomCP@tv-basicstudies" : t
                }
            }
            const u = [new class {
                targetMetaInfoVersion() {
                    return 47
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 47, !e.defaults || void 0 === e.defaults.precision) return void(i.format = {
                        type: "inherit"
                    });
                    const n = e.defaults && e.defaults.precision,
                        r = (0, s.isNumber)(n) ? n : parseInt(n);
                    0 === r ? i.format = {
                        type: "volume"
                    } : isFinite(r) ? i.format = {
                        type: "price",
                        precision: r
                    } : i.format = {
                        type: "inherit"
                    }, delete e.defaults.precision
                }
                migratePropState(t) {}
            }, new class {
                targetMetaInfoVersion() {
                    return 50
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 50, void 0 === e.defaults || void 0 === e.defaults.ohlcPlots || void 0 === e.ohlcPlots) return;
                    const r = e.ohlcPlots,
                        s = e.defaults.ohlcPlots,
                        o = (0, n.ensureDefined)((0, n.ensureDefined)(i.defaults).ohlcPlots);
                    for (const t of Object.keys(s)) {
                        const e = s[t];
                        if ("ohlc_candles" === e.plottype) {
                            let i = !1;
                            const n = r[t];
                            void 0 !== n && (i = !!n.drawBorder, delete n.drawBorder), o[t] = {
                                borderColor: "#000000",
                                drawBorder: i,
                                ...e
                            }
                        }
                    }
                }
                migratePropState(t) {}
            }, new class {
                targetMetaInfoVersion() {
                    return 53
                }
                migrateMetaInfo(t) {
                    const e = t,
                        i = t;
                    if (i._metainfoVersion = 53, void 0 !== e.defaults) {
                        if (void 0 !== e.defaults.ohlcPlots && void 0 !== e.ohlcPlots) {
                            const t = Object.keys(e.ohlcPlots),
                                r = e.defaults.ohlcPlots,
                                s = (0, n.ensureDefined)((0, n.ensureDefined)(i.defaults).ohlcPlots);
                            for (const e of t) {
                                const t = r[e];
                                if (void 0 === t || void 0 === t.visible) continue;
                                const i = t.visible ? 15 : 0;
                                delete t.visible, s[e] = {
                                    display: i,
                                    ...t
                                }
                            }
                        }
                        if (void 0 !== e.defaults.styles && void 0 !== e.plots) {
                            const t = e.plots.map((t => t.id)),
                                r = e.defaults.styles,
                                s = (0, n.ensureDefined)((0, n.ensureDefined)(i.defaults).styles);
                            for (const e of t) {
                                const t = r[e];
                                if (void 0 === t || void 0 === t.visible) continue;
                                const i = t.visible ? 15 : 0;
                                delete t.visible, s[e] = {
                                    display: i,
                                    ...t
                                }
                            }
                        }
                    }
                }
                migratePropState(t) {
                    if (t.ohlcPlots)
                        for (const e of Object.keys(t.ohlcPlots)) {
                            const i = (0, n.ensureDefined)(t.ohlcPlots[e]);
                            void 0 !== i.visible && (i.display = i.visible ? 15 : 0, delete i.visible)
                        }
                    if (t.styles)
                        for (const e of Object.keys(t.styles)) {
                            const i = (0, n.ensureDefined)(t.styles[e]);
                            void 0 !== i.visible && (i.display = i.visible ? 15 : 0, delete i.visible)
                        }
                }
            }];

            function d(t, e) {
                const i = r.StudyMetaInfo.versionOf(t),
                    s = t;
                void 0 === s._serverMetaInfoVersion && (s._serverMetaInfoVersion = i);
                const o = ["PennantCP@tv-basicstudies", "WedgeCP@tv-basicstudies"].includes(t.id);
                u.forEach((r => {
                    (i < 0 || i >= r.targetMetaInfoVersion()) && !o || (r.migrateMetaInfo(t), void 0 !== e && r.migratePropState(e), (0,
                        n.assert)(t._metainfoVersion === r.targetMetaInfoVersion()))
                }))
            }
            u.push(new l), u.sort((function(t, e) {
                return t.targetMetaInfoVersion() - e.targetMetaInfoVersion()
            }))
        },
        619276: (t, e, i) => {
            function n(t, e) {
                return `${t}@${e}`
            }

            function r(t) {
                return t.replace(/(@[^-]+-[^-]+).*$/, "$1")
            }
            i.d(e, {
                studyIdString: () => n,
                extractStudyId: () => r
            })
        },
        573774: (t, e, i) => {
            i.d(e, {
                isExtendedInput: () => s,
                isExtendedInputSource: () => o,
                getInputValue: () => a,
                isStudyInputOptionsInfo: () => l,
                areStudyInputsEqual: () => u,
                RangeDependentStudyInputNames: () => n,
                rangeDependentStudyInputsToTimeRange: () => d,
                isTimeOrPriceNotHiddenInput: () => p,
                editableStudyInputs: () => c
            });
            var n, r = i(598279);

            function s(t) {
                return (0, r.default)(t)
            }

            function o(t) {
                return "source" === t.t
            }

            function a(t) {
                return s(t) ? t.v : t
            }

            function l(t) {
                return ["text", "integer", "float", "price", "session", "resolution"].includes(t.type) && t.hasOwnProperty("options")
            }

            function u(t, e, i) {
                for (const n of t)
                    if (e[n.id] !== i[n.id]) return !1;
                return !0
            }

            function d(t) {
                return {
                    from: Math.round(t.first_visible_bar_time / 1e3),
                    to: Math.round(t.last_visible_bar_time / 1e3)
                }
            }

            function p(t) {
                return ("time" === t.type || "price" === t.type) && !0 !== t.isHidden
            }

            function c(t) {
                const e = t.filter(p);
                if (0 === e.length) return [];
                const i = new Map,
                    n = [];
                e.forEach((t => {
                    var e;
                    const {
                        group: r,
                        inline: s
                    } = t;
                    if (void 0 === s) return void n.push(t);
                    const o = s + (r || "");
                    if (i.has(o)) null === (e = i.get(o)) || void 0 === e || e.push(t);
                    else {
                        const e = [t];
                        i.set(o, e), n.push(e)
                    }
                }));
                const r = [];
                for (let t = 0; t < n.length; t++) {
                    const e = n[t];
                    Array.isArray(e) ? 2 === e.length && e[0].type !== e[1].type ? r.push(e) : r.push(...e) : r.push(e)
                }
                return r
            }! function(t) {
                t.FirstBar = "first_visible_bar_time", t.LastBar = "last_visible_bar_time", t.Realtime = "subscribeRealtime"
            }(n || (n = {}))
        },
        933024: (t, e, i) => {
            i.r(e), i.d(e, {
                collectDepsForAlert: () => y,
                dependenciesForAlerts: () => g,
                idForAlert: () => v,
                patchChildIdInInputs: () => f,
                plotsForAlert: () => h
            });
            var n = i(650151),
                r = i(272001),
                s = i(948723);
            var o = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                },
                a = Object.keys || function(t) {
                    var e = Object.prototype.hasOwnProperty || function() {
                            return !0
                        },
                        i = [];
                    for (var n in t) e.call(t, n) && i.push(n);
                    return i
                },
                l = i(619276),
                u = i(108184),
                d = i(519872),
                p = i(758337);
            const c = (0, r.getLogger)("Chart.Study");

            function f(t, e, i) {
                void 0 !== e && void 0 !== i && i.forEach((i => {
                    const n = t[i];
                    if ("string" == typeof n) {
                        const r = n.split("$")[1];
                        t[i] = e + (void 0 === r ? "" : "$" + r)
                    } else if ((0, p.isObject)(n) && "source" === n.t) {
                        const t = n.v.split("$")[1];
                        n.v = e + (void 0 === t ? "" : "$" + t)
                    } else c.logError(`Cannot patch source input, its type is not source: ${JSON.stringify(n)}`)
                }))
            }

            function v(t, e, i) {
                return (0, s.hash)(t + function(t, e) {
                    e || (e = {}), "function" == typeof e && (e = {
                        cmp: e
                    });
                    var i = e.space || "";
                    "number" == typeof i && (i = Array(i + 1).join(" "));
                    var n, r = "boolean" == typeof e.cycles && e.cycles,
                        s = e.replacer || function(t, e) {
                            return e
                        },
                        l = e.cmp && (n = e.cmp, function(t) {
                            return function(e, i) {
                                var r = {
                                        key: e,
                                        value: t[e]
                                    },
                                    s = {
                                        key: i,
                                        value: t[i]
                                    };
                                return n(r, s)
                            }
                        }),
                        u = [];
                    return function t(e, n, d, p) {
                        var c = i ? "\n" + new Array(p + 1).join(i) : "",
                            f = i ? ": " : ":";
                        if (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = s.call(e, n, d))) {
                            if ("object" != typeof d || null === d) return JSON.stringify(d);
                            if (o(d)) {
                                for (var v = [], h = 0; h < d.length; h++) {
                                    var y = t(d, h, d[h], p + 1) || JSON.stringify(null);
                                    v.push(c + i + y)
                                }
                                return "[" + v.join(",") + c + "]"
                            }
                            if (-1 !== u.indexOf(d)) {
                                if (r) return JSON.stringify("__cycle__");
                                throw new TypeError("Converting circular structure to JSON")
                            }
                            u.push(d);
                            var g = a(d).sort(l && l(d));
                            for (v = [], h = 0; h < g.length; h++) {
                                var S = t(d, n = g[h], d[n], p + 1);
                                if (S) {
                                    var I = JSON.stringify(n) + f + S;
                                    v.push(c + i + I)
                                }
                            }
                            return u.splice(u.indexOf(d), 1), "{" + v.join(",") + c + "}"
                        }
                    }({
                        "": t
                    }, "", t, 0)
                }(e) + (null != i ? i : "")).toString()
            }

            function h(t, e, i) {
                const r = [d.isLinePlot, d.isShapesPlot, d.isCharsPlot, d.isArrowsPlot, d.isOhlcPlot, d.isAlertConditionPlot];
                return t.plots.map(((t, e) => ({ ...t,
                    pinePlotIndex: e
                }))).filter((t => !(void 0 !== i && !i.includes(t.id)) && r.some((e => e(t))))).map((i => {
                    const r = {
                        id: i.id,
                        type: i.type,
                        pinePlotIndex: i.pinePlotIndex,
                        offset: e(i.id)
                    };
                    if (t.styles && void 0 !== t.styles[i.id]) {
                        const e = (0, n.ensureDefined)((0, n.ensureDefined)(t.styles)[i.id]);
                        r.title = e.title || "", r.text = e.text || ""
                    }
                    return (0, d.isOhlcPlot)(i) && i.target && t.ohlcPlots && t.ohlcPlots[i.target] && (r.ohlcTitle = (0, n.ensureDefined)((0, n.ensureDefined)(t.ohlcPlots)[i.target]).title), r
                }))
            }

            function y(t, e) {
                const i = [];
                let r, s;
                for (let n = t.length - 1; n >= 0; n--) {
                    const o = t[n],
                        a = (0, l.extractStudyId)(o.metaInfo().id),
                        d = u.StudyMetaInfo.getStudyIdWithLatestVersion(o.metaInfo());
                    s = o.inputsForAlertState();
                    f(s, r, o.metaInfo().inputs.filter((t => "source" === t.type)).map((t => t.id)));
                    const p = Object.assign({}, s);
                    o.metaInfo().isTVScript && delete p.text;
                    const c = v(a, p, e);
                    i.push({
                        id: c,
                        study: d,
                        inputs: s
                    }), r = c
                }
                return {
                    idForAlert: (0, n.ensureDefined)(r),
                    inputsForAlert: (0, n.ensureDefined)(s),
                    studyDependencies: i.reverse()
                }
            }

            function g(t, e) {
                return t.map((t => {
                    const i = t.inputs(),
                        n = t.metaInfo();
                    let r = u.StudyMetaInfo.cutDollarHash(n.fullId);
                    if ("tv-scripting" === n.productId) {
                        const t = e.findByIdSync({
                            type: "java",
                            studyId: "Script@tv-scripting"
                        });
                        null !== t && (r = t.fullId)
                    }
                    const s = {
                        id: t.sourceId(),
                        study: r,
                        inputs: i,
                        scriptIdPart: void 0,
                        scriptVersion: void 0
                    };
                    return n.pine ? { ...s,
                        scriptIdPart: n.scriptIdPart,
                        scriptVersion: n.pine.version
                    } : s
                }))
            }
        },
        211800: (t, e, i) => {
            i.d(e, {
                applyOverridesToStudy: () => u,
                applyOverridesToStudyDefaults: () => d
            });
            var n = i(650151),
                r = i(519872);
            const s = (0, i(272001).getLogger)("Chart.Model.StudyPropertiesOverrider");
            var o, a;

            function l(t, e, i, n) {
                const r = i.split(".");
                if (0 === r.length || 0 === r[0].length) return;
                const l = function(t) {
                        const e = t.split(":");
                        return {
                            name: e[0],
                            type: 2 === e.length ? e[1] : null
                        }
                    }(r[0]),
                    u = l.name,
                    d = l.type,
                    p = null !== d,
                    c = !p || "band" === d,
                    f = !p || "area" === d,
                    v = !p || "input" === d,
                    h = !p || "plot" === d ? a.getPlotIdByTitle(t, u) : null,
                    y = c ? a.getBandIndexByName(t, u) : null,
                    g = f ? a.getFilledAreaIdByTitle(t, u) : null,
                    S = v ? a.getInputByName(t, u) : null,
                    I = e.hasOwnProperty(u);
                if ((null !== h ? 1 : 0) + (null !== y ? 1 : 0) + (null !== g ? 1 : 0) + (null !== S ? 1 : 0) + (I ? 1 : 0) > 1) return void s.logWarn(`Study '${t.description}' has ambiguous identifier '${u}'`);
                const m = r[1];
                if (null !== h) {
                    if (1 === r.length) return void s.logWarn(`Path of sub-property of '${u}' plot for study '${t.description}' must be not empty`);
                    const i = r.slice(1);
                    o.applyPlotProperty(t, e, h, i, n)
                } else if (null !== S) o.applyInputValue(e, S, n);
                else if (null !== y) {
                    if (void 0 === m) return void s.logWarn(`Property name of '${u}' band for study '${t.description}' must be set`);
                    o.applyBandProperty(e, y, m, n)
                } else if (null !== g) {
                    if (void 0 === m) return void s.logWarn(`Property name of '${u}' area for study '${t.description}' must be set`);
                    o.applyFilledAreaProperty(e, g, m, n)
                } else I ? o.setRootProperty(e, r, n) : s.logWarn(`Study '${t.description}' has no plot or input '${u}'`)
            }

            function u(t, e) {
                const i = t.properties(),
                    n = i.state();
                for (const i in e) e.hasOwnProperty(i) && l(t.metaInfo(), n, i, e[i]);
                i.mergeAndFire(n)
            }

            function d(t, e, i) {
                for (const n in t) {
                    if (!t.hasOwnProperty(n)) continue;
                    const r = n.indexOf(".");
                    if (-1 === r) continue;
                    const o = n.substring(0, r),
                        u = a.getMetaInfoByDescription(e, o);
                    if (null === u) {
                        s.logWarn(`There is no such study ${o}`);
                        continue
                    }
                    const d = i(u);
                    null !== d ? l(u, d, n.substring(r + 1), t[n]) : s.logWarn(`Cannot apply overrides for study ${o}`)
                }
            }! function(t) {
                const e = {
                    line: r.LineStudyPlotStyle.Line,
                    histogram: r.LineStudyPlotStyle.Histogram,
                    cross: r.LineStudyPlotStyle.Cross,
                    area: r.LineStudyPlotStyle.Area,
                    columns: r.LineStudyPlotStyle.Columns,
                    circles: r.LineStudyPlotStyle.Circles,
                    line_with_breaks: r.LineStudyPlotStyle.LineWithBreaks,
                    area_with_breaks: r.LineStudyPlotStyle.AreaWithBreaks,
                    step_line: r.LineStudyPlotStyle.StepLine,
                    step_line_with_breaks: r.LineStudyPlotStyle.StepLineWithBreaks
                };
                t.applyPlotProperty = function(t, i, o, a, l) {
                    if (void 0 === i.styles) return void s.logWarn("Study does not have styles");
                    const u = a[0];
                    if ("color" === u) {
                        const e = function(t, e, i) {
                            if (void 0 === t.plots) return null;
                            for (const n of t.plots) {
                                if (!(0, r.isPaletteColorerPlot)(n) || void 0 === e.palettes) continue;
                                const t = e.palettes[n.palette];
                                if (n.target === i && void 0 !== t) return t
                            }
                            return null
                        }(t, i, o);
                        return void
                        function(t, e, i, r, o) {
                            var a;
                            void 0 !== t.styles ? null === e && !isNaN(r) && r > 0 ? s.logWarn(`Study plot does not have color #${r}`) : ((0 === r || isNaN(r)) && ((0, n.ensureDefined)(t.styles[i]).color = String(o), r = 0), null !== e && ((0, n.ensureDefined)(null === (a = e.colors) || void 0 === a ? void 0 : a[r]).color = String(o))) : s.logWarn("Study does not have styles")
                        }(i, e, o, a.length > 1 ? parseInt(a[1]) : NaN, l)
                    }
                    const d = i.styles[o];
                    if (void 0 !== d && d.hasOwnProperty(u)) {
                        if ("plottype" === u) {
                            const t = e[String(l)];
                            if (void 0 === t) return void s.logWarn(`Unsupported plot type for plot: ${l}`);
                            l = t
                        }
                        d[u] = l
                    } else s.logWarn(`Study plot does not have property '${u}'`)
                }, t.applyBandProperty = function(t, i, n, r) {
                    if (void 0 === t.bands) return void s.logWarn("Study does not have bands");
                    const o = t.bands[i];
                    if (void 0 !== o && o.hasOwnProperty(n)) {
                        if ("plottype" === n) {
                            const t = e[String(r)];
                            if (void 0 === t) return void s.logWarn(`Unsupported plot type for band: ${r}`);
                            r = t
                        }
                        o[n] = r
                    } else s.logWarn(`Study band does not have property '${n}'`)
                }, t.applyFilledAreaProperty = function(t, e, i, n) {
                    if (void 0 === t.filledAreasStyle) return void s.logWarn("Study does not have areas");
                    const r = t.filledAreasStyle[e];
                    void 0 !== r && r.hasOwnProperty(i) ? r[i] = n : s.logWarn(`Study area does not have property '${i}'`)
                }, t.applyInputValue = function(t, e, i) {
                    void 0 !== t.inputs && t.inputs.hasOwnProperty(e) ? t.inputs[e] = i : s.logWarn(`Study does not have input '${e}'`)
                }, t.setRootProperty = function(t, e, i) {
                    if (0 === e.length) return;
                    let n = t;
                    for (const t of e.slice(0, -1)) {
                        if (null == n || !n.hasOwnProperty(t)) break;
                        n = n[t]
                    }
                    const r = e[e.length - 1];
                    null != n && n.hasOwnProperty(r) ? n[r] = i : s.logWarn(`Study does not have property ${e.join(".")}`)
                }
            }(o || (o = {})),
            function(t) {
                t.getInputByName = function(t, e) {
                    if (void 0 === t.inputs) return null;
                    e = e.toLowerCase();
                    for (const i of t.inputs)
                        if (i.name.toLowerCase() === e) return i.id;
                    return null
                }, t.getPlotIdByTitle = function(t, e) {
                    if (void 0 === t.styles) return null;
                    e = e.toLowerCase();
                    for (const i in t.styles) {
                        const n = t.styles[i];
                        if ((void 0 !== n && void 0 !== n.title ? n.title : i).toLowerCase() === e) return i
                    }
                    return null
                }, t.getFilledAreaIdByTitle = function(t, e) {
                    if (void 0 === t.filledAreas) return null;
                    e = e.toLowerCase();
                    for (const i of t.filledAreas)
                        if (i.title.toLowerCase() === e) return i.id;
                    return null
                }, t.getBandIndexByName = function(t, e) {
                    if (void 0 === t.bands) return null;
                    e = e.toLowerCase();
                    for (let i = 0; i < t.bands.length; ++i)
                        if (t.bands[i].name.toLowerCase() === e) return i;
                    return null
                }, t.getMetaInfoByDescription = function(t, e) {
                    e = e.toLowerCase();
                    for (const i of t)
                        if (i.description.toLowerCase() === e || i.shortDescription.toLowerCase() === e) return i;
                    return null
                }
            }(a || (a = {}))
        },
        429767: (t, e, i) => {
            var n = i(223616).Version,
                r = i(272001).getLogger("Chart.StudyMigration");

            function s(t) {
                this._studyId = t, this._maxToVers = n.ZERO, this._maxFromVers = n.ZERO, this._migrs = []
            }
            s.prototype.addMigration = function(t, e, i) {
                var r = n.parse(t),
                    s = n.parse(e);
                r.isGreater(this._maxFromVers) && (this._maxFromVers = r), s.isGreater(this._maxToVers) && (this._maxToVers = s), this._migrs.push({
                    fromVers: r,
                    toVers: s,
                    rules: i
                })
            }, s.prototype.updateInputs = function(t, e, i) {
                if (!i) return i;
                for (var n = TradingView.clone(i), s = t; s.isLess(e);) {
                    var o = this._findMigration(s);
                    if (null == o) break;
                    if (r.logNormal("Migrating study inputs from " + o.fromVers + " to " + o.toVers + " version, studyId: " + this._studyId + ", migration: " + JSON.stringify(o) + ", inputs: " + JSON.stringify(i)), n = this._applyMigration(n, o), !s.isLess(o.toVers)) throw new Error("Problems in study migration process... Possible infinite cycle has been detected and stopped.");
                    s = o.toVers
                }
                return s > t && r.logNormal("Study inputs migration is done, studyId: " + this._studyId + ", inputs: " + JSON.stringify(n)), n
            }, s.prototype._findMigration = function(t) {
                for (var e = -1, i = this._maxFromVers, n = 0; n < this._migrs.length; n++) {
                    var r = this._migrs[n];
                    r.fromVers.isLess(t) || r.fromVers.isLessOrEqual(i) && (i = r.fromVers, e = n)
                }
                return e < 0 ? null : this._migrs[e]
            }, s.prototype._applyMigration = function(t, e) {
                for (var i = t, n = 0; n < e.rules.length; n++) {
                    var r = e.rules[n];
                    i = this._getApplyRuleFun(r.type)(i, r)
                }
                return i
            }, s.prototype._getApplyRuleFun = function(t) {
                if ("inputRemoved" === t) return s._applyInputRemovedRule;
                if ("inputChangedType" === t) return s._applyInputChangedTypeRule;
                if ("inputChangedMinMax" === t) return s._applyInputChangedMinMaxRule;
                if ("inputChangedOptions" === t) return s._applyInputChangedOptionsRule;
                throw new Error("Unknown migration rule type: " + t)
            }, s._applyInputRemovedRule = function(t, e) {
                if (!(e.inputId in t)) return t;
                if ("removeVal" !== e.action) throw new Error("Unexpected rule.action=" + e.action + " in rule.type=" + e.type);
                var i = t[e.inputId];
                return delete t[e.inputId], r.logNormal("Input " + e.inputId + "=" + i + " removed"), t
            }, s._applyInputChangedTypeRule = function(t, e) {
                var i = t[e.inputId];
                if ("resetToDefVal" === e.action) return t[e.inputId] = e.defVal, r.logNormal("Input " + e.inputId + "=" + i + " reset to default value " + e.defVal), t;
                if ("convertVal" === e.action) {
                    if (null == i) return t;
                    if ("float" === e.inputTypeFrom && "integer" === e.inputType) return t[e.inputId] = Math.round(t[e.inputId]), r.logNormal("Input " + e.inputId + "=" + i + " converted to value " + t[e.inputId]), t;
                    if ("integer" === e.inputTypeFrom && "float" === e.inputType) return t;
                    if ("text" === e.inputTypeFrom && "source" === e.inputType) return s._isValidSource(i, e.options) || (t[e.inputId] = e.defVal), t;
                    throw new Error("Cannot convertVal from " + e.inputTypeFrom + " to " + e.inputType)
                }
                throw new Error("Unknown action " + e.action + " for rule with type " + e.type)
            }, s._isValidSource = function(t, e) {
                return t.indexOf("$") >= 0 || e.indexOf(t) >= 0
            }, s._applyInputChangedMinMaxRule = function(t, e) {
                if ("adjustValIfNeeded" !== e.action) throw new Error("Unknown action " + e.action + " for rule with type " + e.type);
                var i = t[e.inputId];
                return i < e.minVal ? t[e.inputId] = e.minVal : i > e.maxVal && (t[e.inputId] = e.maxVal), r.logNormal("Input " + e.inputId + "=" + i + " adjusted to value " + t[e.inputId]), t
            }, s._applyInputChangedOptionsRule = function(t, e) {
                if (!(["text"].indexOf(e.inputType) >= 0 && "resetToDefValIfNeeded" === e.action)) throw new Error("Unexpected rule.inputType=" + e.inputType + " in rule.action=" + e.action);
                var i = t[e.inputId];
                return e.options.indexOf(i) < 0 && (t[e.inputId] = e.defVal, r.logNormal("Input " + e.inputId + "=" + i + " reset to default value " + e.defVal)), t
            }, t.exports = s
        },
        309123: (t, e, i) => {
            i.d(e, {
                StudyVersioning: () => h
            });
            var n = i(429767),
                r = i.n(n);
            const s = (0, i(272001).getLogger)("Chart.Study.Versioning");
            var o = i(650151).assert,
                a = i(100393).patchSourceState,
                l = i(293689),
                u = i(223616).Version,
                d = i(66974),
                p = i(108184).StudyMetaInfo,
                c = i(971417).extractPineId,
                f = i(343102).migrateMetaInfoAndPropState;
            const v = 1e12;
            class h extends class {
                constructor(t, e) {
                    if (this._migrations = {}, !t) throw new Error("No studies metainfo");
                    if (this._studiesMetainfo = t, !e) throw new Error("No studies migrations");
                    this._studiesMigrations = e;
                    for (let t = 0; t < this._studiesMigrations.length; t++) {
                        const e = this._studiesMigrations[t],
                            i = e.versFrom,
                            n = e.versTo;
                        for (let t = 0; t < e.studyMigrations.length; t++) {
                            const o = e.studyMigrations[t],
                                a = o.studyId;
                            if (0 === o.rules.length) {
                                s.logError("Study Migration should have at least one convertion rule");
                                continue
                            }
                            const l = a in this._migrations ? this._migrations[a] : new(r())(a);
                            l.addMigration(i, n, o.rules), this._migrations[a] = l
                        }
                    }
                    this._clientMigrations = [(t, e) => {
                        if (0 === this._studiesMetainfo.length || !t.isTVScript || t.version >= 22) return e;
                        const i = {};
                        let n = 0,
                            r = 0,
                            s = e[r];
                        for (; void 0 !== s;) {
                            const t = e[s.id];
                            s.isFake && (s.id = "in_" + n++), i[r] = s, i[s.id] = t, r++, s = e[r]
                        }
                        return i
                    }]
                }
            } {
                updateMetaInfo(t) {
                    if (!t) return t;
                    o(!t.isTVScript, "This method should update only built-in java indicators metaInfo. For Pine indicators use updateMetaInfoAsync");
                    for (var e = null, i = this._studiesMetainfo, n = 0; n < i.length; n++)
                        if (i[n].id === t.id) {
                            e = i[n];
                            break
                        }
                    return TradingView.clone(e)
                }
                updateMetaInfoAsync(t) {
                    if (!t) return {
                        sync: !1,
                        result: Promise.reject("No old metaInfo was given")
                    };
                    var e = new p(t),
                        i = p.versionOf(t);
                    if (t.isTVScript && !t.pine && i < p.VERSION_PINE_PROTECT_TV_4164) {
                        o(TradingView.isExistent(t.scriptIdPart), "scriptIdPart is missing, study " + JSON.stringify(t));
                        var n = t.scriptIdPart,
                            r = new Promise((function(i, r) {
                                l.processLegacy(n, t.TVScriptSourceCode).done((function(t) {
                                    e.removeDefaults();
                                    var n = new p(t);
                                    n.createDefaults(), f(n), i(n)
                                })).fail((function(t, e) {
                                    r(t)
                                }))
                            }));
                        return {
                            sync: !1,
                            result: r
                        }
                    }
                    if (t.isTVScript && t.pine) {
                        if ((t._serverMetaInfoVersion || i) < p.CURRENT_METAINFO_FORMAT_VERSION) {
                            r = new Promise((function(i, n) {
                                l.translateScriptAsync2(t.scriptIdPart, t.pine.version).done((function(t) {
                                    e.removeDefaults();
                                    var n = new p(t);
                                    n.createDefaults(), f(n), i(n)
                                })).fail((function(t, e) {
                                    n(t)
                                }))
                            }));
                            return {
                                sync: !1,
                                result: r
                            }
                        }
                        return e.createDefaults(), {
                            sync: !0,
                            result: e
                        }
                    }
                    for (var s = null, a = this._studiesMetainfo, u = 0; u < a.length; u++)
                        if (a[u].id === t.id) {
                            s = a[u];
                            break
                        }
                    return {
                        sync: !0,
                        result: s ? TradingView.clone(s) : null
                    }
                }
                lastVersionOfStudy(t) {
                    return this._studiesMetainfo.find((function(e) {
                        return e.id === t
                    })).version
                }
                updateStudyInputs(t, e, i, n, r) {
                    var o = TradingView.clone(n);
                    if (t in this._migrations) {
                        var a, l = u.parse(e);
                        if ("last" === i) {
                            var d = this.lastVersionOfStudy(t);
                            a = u.parse(d)
                        } else a = u.parse(i);
                        o = this._migrations[t].updateInputs(l, a, o)
                    }
                    if (null == r) return o;
                    for (var p in r) p in o || (o[p] = r[p]);
                    for (var p in o)
                        if (!(p in r)) {
                            var c = o[p];
                            s.logWarn("Extra input detected, studyId=" + t + ", versionFrom=" + e + ", inputId=" + p + ", inputValue=" + c + ", removing it and continue..."), delete o[p]
                        }
                    return o
                }
                updateStudyState(t, e, i) {
                    if (null == t || null == e || null == i) return t;
                    if (t = TradingView.clone(t), !(e.isTVScript || !!e.pine) && e.version !== i.version) {
                        var n = i && i.defaults.inputs,
                            r = this.updateStudyInputs(e.id, e.version, i.version, t.inputs, n);
                        t.inputs = r
                    }
                    for (var o = 0; o < this._clientMigrations.length; ++o) {
                        r = this._clientMigrations[o].call(this, e, t.inputs);
                        Object.keys(r).length === Object.keys(t.inputs).length ? t.inputs = r : s.logWarn("StudyVersioning._clientMigrations application returned bad result. Skipping it...")
                    }
                    var a = p.versionOf(e);
                    if (e.isTVScript && e.TVScriptSourceCode && a >= 12 && a <= 26) {
                        var l = {};
                        for (o = 0; o < e.plots.length; ++o) {
                            var u = e.plots[o],
                                d = i.plots[o];
                            l[u.id] = d.id
                        }
                        var c = Object.keys(t.styles);
                        for (o = 0; o < c.length; ++o) {
                            var f = c[o],
                                v = t.styles[f];
                            delete t.styles[f];
                            var h = l[f];
                            t.styles[h] = v
                        }
                        var y = Object.keys(t.plots);
                        for (o = 0; o < y.length; ++o) {
                            var g = y[o];
                            f = t.plots[g].id;
                            t.plots[g].id = l[f]
                        }
                    }
                    return t
                }
                patchPointsBasedStudyState(t) {
                    return h._fixInputsMaxValue(t.state, t.metaInfo), "LineToolRegressionTrend" === t.type && (t = a(t)), t
                }
                patchPointsBasedStudyData(t, e) {
                    if (!d.isProd()) return e;
                    if (!t || !e) return e;
                    var i = TradingView.clone(e);
                    return "VbPFixed@tv-volumebyprice" === t.id && t.version && t.version <= 4 && h._patchOldVolumeProfiles(0, i), i
                }
                patchStudyData(t, e, i, n) {
                    if (!d.isProd()) return {
                        data: e,
                        nsData: i,
                        indexes: n
                    };
                    var r = TradingView.clone(e),
                        s = TradingView.clone(i),
                        o = TradingView.clone(n);
                    "VbPVisible@tv-volumebyprice" === t.id && t.version && t.version <= 4 && h._patchOldVolumeProfiles(0, r.graphics), "VbPSessions@tv-volumebyprice" === t.id && t.version && t.version <= 4 && h._patchOldVolumeProfiles(0, r.graphics);
                    var a = p.versionOf(t);
                    if (t.isTVScript && t.TVScriptSourceCode && a >= 12 && a <= 26) {
                        var l = r.columns;
                        r.columns = [];
                        for (var u = 0; u < l.length; ++u) {
                            var c = "plot_" + u;
                            r.columns.push(c)
                        }
                    }
                    return {
                        data: r,
                        nsData: s,
                        indexes: o
                    }
                }
                static _patchOldVolumeProfiles(t, e) {
                    var i = e.hhists[t].data,
                        n = [];
                    for (var r in i) n = n.concat(i[r]);
                    e.hhists[0].data = n
                }
                static _fixInputsOrder(t, e) {
                    for (var i = p.getOrderedInputIds(e), n = h.splitInputs(t.inputs), r = n.arr, s = n.obj, o = TradingView.merge({}, s), a = 0; a < i.length; ++a) {
                        var l = i[a],
                            u = h.findInputKeyById(r, l);
                        if (null !== u) {
                            var d = r[u];
                            o[a] = d
                        }
                    }
                    t.inputs = o
                }
                static _verifyInputsMaxValue(t) {
                    if (t.inputs)
                        for (var e = 0; e < t.inputs.length; e++) {
                            var i = t.inputs[e];
                            "integer" === i.type && (i.max && i.max > 1e12 && s.logWarn("Bad integer input max value in metaInfo id=" + t.id + " title=" + t.description))
                        }
                }
                static _fixInputsMaxValue(t, e) {
                    if (!TradingView.isAbsent(e)) {
                        var i = v;
                        if (e.inputs)
                            for (var n = 0; n < e.inputs.length; n++) {
                                "integer" === (a = e.inputs[n]).type && (a.max && a.max > i && (a.max = i))
                            }
                        if (t && t.inputs) {
                            var r = h.splitInputs(t.inputs),
                                s = r.arr;
                            for (var o in s) {
                                var a;
                                "integer" === (a = s[o]).type && (a.max && a.max > i && (a.max = i))
                            }
                            t.inputs = TradingView.merge(r.obj, r.arr)
                        }
                    }
                }
                patchPropsStateAndMetaInfo(t, e, i) {
                    "Script$BOOKER" !== e.productId || e.alerts || delete t.alerts, h._fixInputsOrder(t, e), h._fixInputsMaxValue(t, e);
                    var n = h.splitInputs(t.inputs);
                    t.inputs = n.obj;
                    var r = p.versionOf(e);
                    r < p.METAINFO_FORMAT_VERSION_SOS_V2 && e.isChildStudy && (t.isChildStudy = e.isChildStudy);
                    if (e.isTVScript && e.version < 60 && ("Script$TV_EARNINGS@tv-scripting" !== e.id && "Script$TV_DIVIDENDS@tv-scripting" !== e.id && "Script$TV_SPLITS@tv-scripting" !== e.id || delete e.TVScriptSourceCode), "Volume" !== e.id && "Volume@tv-basicstudies" !== e.id || 0 !== e.inputs.length || (e.inputs = [{
                            id: "length",
                            type: "integer",
                            defval: 20,
                            min: 1,
                            max: 1e3
                        }], e.plots.push({
                            id: "vol_ma",
                            type: "line"
                        })), "Volume@tv-basicstudies" === e.id && e.version && e.version <= 46 && void 0 === t.styles.vol.transparency && (t.styles.vol.transparency = t.transparency || 87), "PivotPointsStandard@tv-basicstudies" === e.id && (0 === e.inputs.length ? (t.inputs = {
                            kind: "Traditional",
                            showHistoricalPivots: !0
                        }, e.inputs = [{
                            defval: "Traditional",
                            id: "kind",
                            type: "text",
                            options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
                        }, {
                            id: "showHistoricalPivots",
                            type: "bool",
                            defval: !0
                        }]) : 1 === e.inputs.length && (t.inputs = {
                            kind: "Traditional"
                        }, e.inputs = [{
                            defval: "Traditional",
                            id: "kind",
                            type: "text",
                            options: ["Traditional", "Fibonacci", "Woodie", "Classic", "DeMark", "Camarilla"]
                        }, {
                            id: "showHistoricalPivots",
                            type: "bool",
                            defval: !0
                        }]), void 0 === t._hardCodedDefaultsVersion)) {
                        t._hardCodedDefaultsVersion = 1;
                        var s = t.color;
                        delete t.color, t.levelsStyle = {
                            colors: {
                                P: s,
                                "S1/R1": s,
                                "S2/R2": s,
                                "S3/R3": s,
                                "S4/R4": s,
                                "S5/R5": s
                            }
                        }
                    }
                    "CMF" === e.shortId && 2 === e.inputs.length && (t.inputs = {
                            length: t.inputs["length fast"]
                        },
                        e.inputs = e.inputs.splice(0, 1), e.inputs[0].id = "length"), e.defaults && void 0 === e.defaults.precision && r < p.VERSION_NEW_STUDY_PRECISION_FORMAT && (-1 !== ["Volume@tv-basicstudies", "VbPVisible@tv-volumebyprice", "VbPSessions@tv-volumebyprice"].indexOf(e.id) ? e.defaults.precision = 0 : e.defaults.precision = 4);
                    if (e.version < 60)
                        for (var o = ["TV_DIVIDENDS", "TV_SPLITS", "TV_EARNINGS"], a = "Script".length, l = 0; l < o.length; l++) e.id.startsWith("Script$" + o[l] + "@tv-scripting") && (e.fullId = "ESD" + e.fullId.substring(a), e.id = "ESD" + e.id.substring(a), e.name = "ESD" + e.name.substring(a), e.shortId = "ESD" + e.shortId.substring(a), e.productId = "ESD" + e.productId.substring(a));
                    var u = {
                        "ESD$TV_EARNINGS@tv-scripting": {
                            fullId: "Earnings@tv-basicstudies-129!",
                            id: "Earnings@tv-basicstudies",
                            name: "Earnings@tv-basicstudies",
                            shortId: "Earnings",
                            productId: "tv-basicstudies"
                        },
                        "ESD$TV_SPLITS@tv-scripting": {
                            fullId: "Splits@tv-basicstudies-129!",
                            id: "Splits@tv-basicstudies",
                            name: "Splits@tv-basicstudies",
                            shortId: "Splits",
                            productId: "tv-basicstudies"
                        },
                        "ESD$TV_DIVIDENDS@tv-scripting": {
                            fullId: "Dividends@tv-basicstudies-129!",
                            id: "Dividends@tv-basicstudies",
                            name: "Dividends@tv-basicstudies",
                            shortId: "Dividends",
                            productId: "tv-basicstudies"
                        }
                    };
                    if (e.id in u && Object.assign(e, u[e.id]), r < p.VERSION_PINE_PROTECT_TV_4164) {
                        var d = {
                            "StrategyScript$STD;Consecutive%1Ups/Downs%1Strategy": {
                                pineId: "STD;Consecutive%1Ups%1Downs%1Strategy",
                                className: "StrategyScript"
                            },
                            Script$EDGR_NET_INCOME_FROM_CONTINUING_OPERATIONS_APPLICABLE_TO_COMMON_V2: {
                                pineId: "Script$EDGR_NET_INCOME_FROM_CONTINUING_OPS_APPLICABLE_TO_COMMON_V2",
                                className: "Script"
                            }
                        };
                        if (e.shortId in d) {
                            var v = d[e.shortId].className + "$" + d[e.shortId].pineId,
                                y = {
                                    scriptIdPart: d[e.shortId].pineId,
                                    fullId: e.fullId.replace(e.shortId, v),
                                    id: e.id.replace(e.shortId, v),
                                    name: e.name.replace(e.shortId, v),
                                    shortId: v
                                };
                            TradingView.merge(e, y), TradingView.merge(t, y)
                        }
                        var g = c(e.fullId),
                            S = g && g.match(/^(USER)(_\d+)(;)(.*)$/);
                        if (S) {
                            var I = S[0],
                                m = S[1] + S[3] + S[2] + S[4];
                            y = {
                                scriptIdPart: m,
                                fullId: e.fullId.replace(I, m),
                                id: e.id.replace(I, m),
                                name: e.name.replace(I, m),
                                shortId: e.shortId.replace(I, m)
                            };
                            TradingView.merge(e, y), TradingView.merge(t, y)
                        }
                    }
                    if ("MA" === e.id) {
                        var _ = new p({
                                id: "MAExp",
                                properties: [{
                                    id: "is_price_study",
                                    type: "bool",
                                    value: "true"
                                }],
                                inputs: [{
                                    id: "length",
                                    type: "integer",
                                    defval: 20,
                                    min: 1,
                                    max: 500
                                }, {
                                    id: "source",
                                    type: "text",
                                    defval: "close",
                                    options: ["open", "high", "low", "close"]
                                }],
                                plots: [{
                                    id: "MovAvgExp",
                                    type: "line"
                                }],
                                palettes: {}
                            }),
                            b = new p({
                                id: "MASimple",
                                properties: [{
                                    id: "is_price_study",
                                    type: "bool",
                                    value: "true"
                                }],
                                inputs: [{
                                    id: "length",
                                    type: "integer",
                                    defval: 20,
                                    min: 1,
                                    max: 500
                                }, {
                                    id: "source",
                                    type: "text",
                                    defval: "close",
                                    options: ["open", "high", "low", "close"]
                                }],
                                plots: [{
                                    id: "MovAvgSimple",
                                    type: "line"
                                }],
                                palettes: {}
                            }),
                            P = new p({
                                id: "MAVolumeWeighted",
                                properties: [{
                                    id: "is_price_study",
                                    type: "bool",
                                    value: "true"
                                }],
                                inputs: [{
                                    id: "length",
                                    type: "integer",
                                    defval: 20,
                                    min: 1,
                                    max: 500
                                }, {
                                    id: "source",
                                    type: "text",
                                    defval: "close",
                                    options: ["open", "high", "low", "close"]
                                }],
                                plots: [{
                                    id: "MovAvgVolumeWeighted",
                                    type: "line"
                                }],
                                palettes: {}
                            }),
                            T = new p({
                                id: "MAWeighted",
                                properties: [{
                                    id: "is_price_study",
                                    type: "bool",
                                    value: "true"
                                }],
                                inputs: [{
                                    id: "length",
                                    type: "integer",
                                    defval: 20,
                                    min: 1,
                                    max: 500
                                }, {
                                    id: "source",
                                    type: "text",
                                    defval: "close",
                                    options: ["open", "high", "low", "close"]
                                }],
                                plots: [{
                                    id: "MovAvgWeighted",
                                    type: "line"
                                }],
                                palettes: {}
                            });
                        switch (t.inputs.type) {
                            case "exp":
                                e = _;
                                break;
                            case "simple":
                                e = b;
                                break;
                            case "weighted":
                                e = T;
                                break;
                            case "volume weighted":
                                e = P
                        }
                        t.styles[e.plots[0].id] = t.styles.MovAvg, delete t.styles.MovAvg, delete t.inputs.type
                    }
                    return i.oldShowStudyLastValueProperty && (t.oldShowLastValue = t.showLastValue), delete t.showLastValue, delete t.showStudyArguments, f(e, t), {
                        propsState: t,
                        metaInfo: e
                    }
                }
                static mergeInputs(t, e) {
                    h.mergeInputsArrPart(t, e), h.mergeInputsObjPart(t, e)
                }
                static mergeInputsArrPart(t, e) {
                    var i = h.splitInputs(e);
                    for (var n in i.arr) {
                        var r = h.findInputKeyById(t, i.arr[n].id);
                        r ? TradingView.merge(t[r], i.arr[n]) : h.appendInputInfoToArr(t, i.arr[n])
                    }
                }
                static mergeInputsObjPart(t, e) {
                    var i = h.splitInputs(e);
                    TradingView.merge(t, i.obj)
                }
                static appendInputInfoToArr(t, e) {
                    var i = -1;
                    for (var n in t) {
                        var r = parseInt(n, 10);
                        isNumber(r) && (r > i && (i = r))
                    }
                    t[i + 1] = e
                }
                static splitInputs(t) {
                    var e = {},
                        i = {};
                    for (var n in t) isNumber(parseInt(n, 10)) ? e[n] = t[n] : i[n] = t[n];
                    return {
                        arr: e,
                        obj: i
                    }
                }
                static findInputKeyById(t, e) {
                    var i = null;
                    for (var n in t)
                        if (isNumber(parseInt(n, 10)) && t[n].id === e) {
                            i = n;
                            break
                        }
                    return i
                }
                static getInputKeyById(t, e) {
                    var i = h.findInputKeyById(t, e);
                    if (!i) throw new Error("Cannot find input with id: " + e);
                    return i
                }
            }
        },
        256489: (t, e, i) => {
            i.d(e, {
                translatedIntervalString: () => r
            });
            var n = i(991826);

            function r(t) {
                const e = (0, n.getTranslatedResolutionModel)(t, !0);
                return null === e ? t : e.multiplier + (e.mayOmitShortKind ? "" : e.shortKind)
            }
        },
        214582: (t, e, i) => {
            i.d(e, {
                StudyMetaInfoBase: () => v
            });
            var n = i(827147),
                r = i(650151),
                s = i(573774),
                o = i(418147),
                a = i(125226);
            const l = new Set(["CorrelationCoefficient@tv-basicstudies", "Correlation - Log@tv-basicstudies-1"]),
                u = (0, a.isFeatureEnabled)("multiple_SoS"),
                d = new Set([]),
                p = new Set(["line"]),
                c = new Map([
                    ["AnchoredVWAP@tv-basicstudies", "linetoolanchoredvwap"],
                    ["RegressionTrend@tv-basicstudies", "linetoolregressiontrend"]
                ]),
                f = /^([^\$]+)\$\d+$/;
            class v {
                static getSourceIdsByInputs(t, e) {
                    if (!Array.isArray(t) || !e) return [];
                    const i = [];
                    for (const r of t)
                        if (v.isSourceInput(r) && (0, n.default)(e[r.id])) {
                            const t = e[r.id];
                            t.includes("$") && i.push(t.split("$")[0])
                        }
                    return i
                }
                static isSourceInput(t) {
                    return Boolean(t.id && (("source" === t.id || "src" === t.id) && ("text" === t.type || "source" === t.type) || "source" === t.type))
                }
                static getSourceInputIds(t) {
                    const e = [];
                    for (const i of t.inputs) v.isSourceInput(i) && e.push(i.id);
                    return e
                }
                static setChildStudyMetaInfoPropertiesSourceId(t, e, i) {
                    for (const n of t.inputs) {
                        if (!v.isSourceInput(n)) continue;
                        const t = i.childs().inputs && i.childs().inputs.childs()[n.id];
                        if (t) {
                            const i = t.value(),
                                n = f.exec(i);
                            if (2 === (null == n ? void 0 : n.length)) {
                                if ("{pid}" === n[1]) {
                                    const n = i.replace(/^[^\$]+/, e);
                                    t.setValue(n)
                                }
                            }
                        }
                    }
                }
                static patchSoSInputs(t, e) {
                    const i = t => {
                        const i = f.exec(t);
                        if (2 === (null == i ? void 0 : i.length)) {
                            const n = i[1],
                                s = `${(0,r.ensureNotNull)(e(n))}`;
                            return t.replace(/^[^\$]+/, s)
                        }
                        return t
                    };
                    for (const e in t)
                        if (/in_[\d+]/.test(e) || "source" === e) {
                            const r = t[e];
                            (0, n.default)(r) ? t[e] = i(r): (0, s.isExtendedInput)(r) && (0,
                                s.isExtendedInputSource)(r) && (r.v = i(r.v))
                        }
                }
                static canBeChild(t) {
                    if ((0, n.default)(t)) return !0;
                    if (!t) return !1;
                    if (t.extra && !v.isAllowedSourceInputsCount(t.extra.sourceInputsCount) || !0 === t.canNotBeChild || !1 === t.canBeChild || l.has(t.id)) return !1;
                    let e = 0;
                    for (const i of t.inputs) v.isSourceInput(i) && (e += 1);
                    return v.isAllowedSourceInputsCount(e)
                }
                static isAllowedSourceInputsCount(t) {
                    return u && t > 0 || 1 === t
                }
                static canHaveChildren(t) {
                    if (t) {
                        if (t.isTVScriptStrategy || t.TVScriptSourceCode && (0, o.isStrategy)(t.TVScriptSourceCode)) return !1;
                        if (t.id && !d.has(t.id) && Array.isArray(t.plots))
                            for (const e of t.plots)
                                if (p.has(e.type)) return !0
                    }
                    return !1
                }
                static getChildSourceInputTitles(t, e, i) {
                    var n;
                    const r = {};
                    if (e.plots && e.plots.length && t.options && t.options.length)
                        for (const s of t.options) {
                            const t = s ? +s.split("$")[1] : NaN,
                                o = isFinite(t) && e.plots[t];
                            o && p.has(o.type) && (r[s] = e.styles && e.styles[o.id] && (null === (n = e.styles[o.id]) || void 0 === n ? void 0 : n.title) || o.id, i && (r[s] = i + ": " + r[s]))
                        }
                    return r
                }
                static canPlotBeSourceOfChildStudy(t) {
                    return p.has(t)
                }
                static getStudyPropertyRootName(t) {
                    const e = c.get(t.id);
                    if (void 0 !== e) return e;
                    let i = "study_" + t.id;
                    return t.pine && t.pine.version && (i += "_" + t.pine.version.replace(".", "_")), i
                }
                static getStudyPropertyRootNameById(t) {
                    const e = c.get(t);
                    return void 0 !== e ? e : "study_" + t
                }
            }
        },
        108184: (t, e, i) => {
            i.r(e), i.d(e, {
                StudyMetaInfo: () => l
            });
            var n = i(272001).getLogger("Chart.Study.MetaInfo"),
                r = i(211800).applyOverridesToStudyDefaults,
                s = i(214582).StudyMetaInfoBase,
                o = i(520533).PineKind,
                a = {};
            class l extends s {
                constructor(t) {
                    super(), TradingView.merge(this, {
                        palettes: {},
                        inputs: [],
                        plots: [],
                        graphics: {},
                        defaults: {}
                    }), TradingView.merge(this, t);
                    var e = t.fullId || t.id;
                    TradingView.merge(this, l.parseIdString(e))
                }
                static versionOf(t) {
                    var e = "_metainfoVersion" in t && isNumber(t._metainfoVersion) ? t._metainfoVersion : 0;
                    return e < 0 && n.logError("Metainfo format version cannot be negative: " + e), e
                }
                static parseIdString(t) {
                    var e = {};
                    if (-1 === t.indexOf("@")) e.shortId = t, e.packageId = "tv-basicstudies", e.id = t + "@" + e.packageId, e.version = 1;
                    else {
                        var i = t.split("@");
                        e.shortId = i[0];
                        var n = i[1].split("-");
                        if (3 === n.length) e.packageId = n.slice(0, 2).join("-"), e.id = e.shortId + "@" + e.packageId, e.version = n[2];
                        else if (1 === n.length && "decisionbar" === n[0]) e.packageId = "les-" + n[0], e.id = e.shortId + "@" + e.packageId, e.version = 1;
                        else {
                            if (1 !== n.length) throw new Error("unexpected study id:" + t);
                            e.packageId = "tv-" + n[0], e.id = e.shortId + "@" + e.packageId, e.version = 1
                        }
                    }
                    if (e.fullId = e.id + "-" + e.version, "tv-scripting" === e.packageId) {
                        var r = e.shortId;
                        if (0 === r.indexOf("Script$") || 0 === r.indexOf("StrategyScript$")) {
                            var s = r.indexOf("_");
                            e.productId = s >= 0 ? r.substring(0, s) : e.packageId
                        } else e.productId = e.packageId
                    } else e.productId = e.packageId;
                    return e
                }
                static getPackageName(t) {
                    return (/^[^@]+@([^-]+-[^-]+)/.exec(t || "") || [0, "tv-basicstudies"])[1]
                }
                static cutDollarHash(t) {
                    var e = t.indexOf("$"),
                        i = t.indexOf("@");
                    return -1 === e ? t : t.substring(0, e) + (i >= 0 ? t.substring(i) : "")
                }
                static hasUserIdSuffix(t) {
                    return /^USER;[\d\w]+;\d+$/.test(t)
                }
                static hasPubSuffix(t) {
                    return /^PUB;.+$/.test(t)
                }
                static hasStdSuffix(t) {
                    return /^STD;.+$/.test(t)
                }
                static isStandardPine(t) {
                    return /^(Strategy)?Script\$STD;.*@tv-scripting$/.test(t)
                }
                static getStudyIdWithLatestVersion(t) {
                    const e = l.cutDollarHash(t.id);
                    let i = e;
                    return e.indexOf("@tv-scripting") >= 0 ? i += "-101!" : e.endsWith("CP@tv-basicstudies") ? i += "-" + Math.max(t.version, 207) : e.endsWith("CP@tv-chartpatterns") ? i += "-" + Math.max(t.version, 9) : i += "-" + t.version, i
                }
                defaultInputs() {
                    for (var t = [], e = 0; e < this.inputs.length; e++) t.push(this.inputs[e].defval);
                    return t
                }
                state(t) {
                    var e = {};
                    for (var i in this) this.hasOwnProperty(i) && (e[i] = this[i], !0 !== t && "id" === i && (e[i] += "-" + this.version));
                    return e
                }
                symbolInputId() {
                    var t = this.inputs.filter((function(t) {
                        return "symbol" === t.type
                    }));
                    return t.length > 0 ? t[0].id : null
                }
                createDefaults() {
                    if (this.defaults) {
                        var t = TradingView.clone(this.defaults);
                        t.precision = "default";
                        var e = l.getStudyPropertyRootName(this);
                        defaults.create(e, t)
                    }
                }
                removeDefaults() {
                    defaults.remove(l.getStudyPropertyRootName(this))
                }
                static findStudyMetaInfoByDescription(t, e) {
                    if (t) {
                        for (var i = 0; i < t.length; ++i)
                            if (t[i].description.toLowerCase() === e.toLowerCase()) return t[i];
                        throw new Error("unexpected study id:" + e)
                    }
                    throw new Error("There is no studies metainfo")
                }
                static isParentSourceId(t) {
                    return "string" == typeof t && /^[^\$]+\$\d+$/.test(t)
                }
                static overrideDefaults(t) {
                    0 !== t.length && r(a, t, (function(t) {
                        return TradingView.defaultProperties[l.getStudyPropertyRootName(t)] || null
                    }))
                }
                static mergeDefaultsOverrides(t) {
                    TradingView.merge(a, t)
                }
                static isScriptStrategy(t) {
                    if (t.extra && t.extra.kind) return t.extra.kind === o.Strategy;
                    if (!0 === t.isTVScriptStrategy) return !0;
                    var e = t.TVScriptSourceCode || t.scriptSource;
                    return !!e && TVScript.isStrategy(e)
                }
                static getOrderedInputIds(t) {
                    for (var e = [], i = t.inputs, n = 0; n < i.length; ++n) {
                        var r = i[n];
                        e.push(r.id)
                    }
                    return e
                }
            }
            l.VERSION_STUDY_ARG_SOURCE = 41, l.METAINFO_FORMAT_VERSION_SOS_V2 = 42, l.VERSION_PINE_PROTECT_TV_4164 = 43, l.CURRENT_METAINFO_FORMAT_VERSION = 52, l.VERSION_NEW_STUDY_PRECISION_FORMAT = 46, l.FilledArea = {}, l.FilledArea.TYPE_PLOTS = "plot_plot", l.FilledArea.TYPE_HLINES = "hline_hline", TradingView.StudyMetaInfo = l
        },
        26045: (t, e, i) => {
            var n;
            i.d(e, {
                    DataSourceDangerReason: () => n
                }),
                function(t) {
                    t.Spread = "spread", t.PineRepainting = "pine-repainting", t.CryptoCap = "cryptocap"
                }(n || (n = {}))
        },
        921303: (t, e, i) => {
            var n = i(925622).isStudyStateForAlertType,
                r = i(519872),
                s = i(924529).generateTitleForGui,
                o = i(272001).getLogger("Alerts.Band"),
                a = i(720444),
                l = i(768038),
                u = i(51782).lineToolsLocalizedNames;
            TradingView = "object" == typeof i.g ? i.g.TradingView : TradingView || {};
            var d = {
                create: function(t) {
                    var e, i = t || {},
                        r = i.type;
                    if ("MainSeries" === r) e = c;
                    else if (n(r, !0)) e = f;
                    else if ("Value" === r) e = v;
                    else {
                        if (!/^LineTool.*/i.test(r)) return o.logError("Unknown alert band type " + r), null;
                        e = h
                    }
                    return new e(i)
                }
            };

            function p(t) {
                this._band = t || {}
            }

            function c() {
                p.apply(this, arguments)
            }

            function f() {
                p.apply(this, arguments)
            }

            function v() {
                p.apply(this, arguments)
            }

            function h() {
                p.apply(this, arguments)
            }
            p.prototype.id = function() {
                    return this._band.id
                }, p.prototype.type = function() {
                    return this._band.type
                }, p.prototype.title = function() {
                    return this._band.title
                }, p.prototype.hasPlots = function() {
                    return this._band.plots && this._band.plots.length
                },
                p.prototype.getActualSymbol = function() {
                    return this._band.actualSymbol
                }, p.prototype.getSymbolString = function() {
                    return this._band.symbolString
                }, p.prototype.getPlotTitle = function(t) {
                    return t.title ? t.title : r.isOhlcOpenPlot(t) ? t.ohlcTitle + " " + i(777754).t(null, void 0, i(539280)) : r.isOhlcHighPlot(t) ? t.ohlcTitle + " " + i(777754).t(null, void 0, i(330777)) : r.isOhlcLowPlot(t) ? t.ohlcTitle + " " + i(777754).t(null, void 0, i(608136)) : r.isOhlcClosePlot(t) ? t.ohlcTitle + " " + i(777754).t(null, void 0, i(931691)) : "vol" === t.id ? i(777754).t(null, void 0, i(101111)) : "vol_ma" === t.id ? i(777754).t(null, void 0, i(932998)) : "open" === t.id ? i(777754).t(null, void 0, i(539280)) : "high" === t.id ? i(777754).t(null, void 0, i(330777)) : "low" === t.id ? i(777754).t(null, void 0, i(608136)) : "close" === t.id ? i(777754).t(null, void 0, i(931691)) : t.id
                }, p.prototype.getPlots = function(t) {
                    var e = t || {};
                    if (!this._band.plots || !this._band.plots.length) return this._band.plots;
                    if ("inputSelect" === e.format) {
                        var i = -1;
                        return this._band.plots.map((function(t) {
                            return {
                                value: ++i,
                                title: this.getPlotTitle(t)
                            }
                        }), this)
                    }
                    return this._band.plots
                }, p.prototype.hasUsualPlots = function() {
                    var t = this._band.plots;
                    return !t || t.filter(r.isAlertConditionPlot).length < t.length
                }, p.prototype.getInputs = function() {
                    return {}
                }, inherit(c, p), c.prototype.title = function(t) {
                    var e = i(696828),
                        n = t || {},
                        r = !!n.withInterval,
                        o = this._band.actualSymbol;
                    return e && (o = e.shortName(o)), s({
                        symbol: o,
                        interval: r ? this._band.interval : null,
                        style: this._band.style,
                        inputs: this._band.styleInputs || {},
                        boxSize: this._band.boxSize,
                        reversalAmount: this._band.reversalAmount,
                        sessionDescription: n.sessionDescription
                    })
                }, c.prototype.getInterval = function() {
                    return this._band.interval
                }, c.prototype.getStyle = function() {
                    return this._band.style
                }, c.prototype.getStyleInputs = function() {
                    return this._band.styleInputs
                }, c.prototype.isRangeBasedStyle = function() {
                    return a.isRangeBasedStyle(this._band.style)
                }, c.prototype.isSpread = function() {
                    return this._band.isSpread
                }, c.prototype.sessionId = function() {
                    return this._band.sessionId
                }, c.prototype.sessionDescription = function() {
                    return this._band.sessionDescription
                }, c.prototype.getDividendsAdjustment = function() {
                    return this._band.dividendsAdjustment
                }, c.prototype.getBackAdjustment = function() {
                    return this._band.backAdjustment
                }, c.prototype.getSettlementAsClose = function() {
                    return this._band.settlementAsClose
                }, inherit(f, p), f.prototype.title = function(t) {
                    var e, n, r, s = t || {},
                        o = s.withPlotTitle,
                        a = this._band;
                    return s.short && a.shortTitle ? e = a.shortTitle : a.title ? e = a.title : (e = a.shortDescription || "Study", n = [], Object.keys(a.inputs).forEach((function(t) {
                        var e = a.inputs[t] && a.inputs[t].id;
                        e && !a.inputs[t].isHidden && void 0 !== a.inputs[e] && n.push(a.inputs[e])
                    })), n.length && (e += " (" + n.join(", ") + ")")), o && (r = this.selectedPlot()) && (e += " " + (r.title || i(777754).t(null, void 0, i(886950)))), l.isRtl() && (e = l.forceLTRStr(e)), e
                }, f.prototype.selectedPlot = function() {
                    var t = this._band;
                    return void 0 === t.plotIndex ? null : this.getPlots().filter((function(e) {
                        return e.value === t.plotIndex
                    }))[0] || null
                }, f.prototype.getInputs = function() {
                    return this._band.inputs || {}
                }, f.prototype.isTVLibrary = function() {
                    return this._band.isTVLibrary || !1
                }, inherit(v, p), v.prototype.title = function(t) {
                    var e = this._band.value || 0;
                    return t.formatter ? t.formatter.format(parseFloat(e)) : parseFloat(e).toString()
                }, inherit(h, p), h.prototype.title = function() {
                    return u[this._band.type] || this.title()
                }, t.exports.AlertBandAbstract = p, t.exports.AlertBandValue = v, t.exports.AlertBandStudy = f, t.exports.alertBandFactory = d
        },
        925622: (t, e, i) => {
            var n;

            function r(t, e) {
                let i = "Study" === t || t === n.StudyLineTool || /^study_\w+/.test(t);
                return e && (i = i || "StudyStrategy" === t), i
            }
            i.r(e), i.d(e, {
                    StateForAlertType: () => n,
                    isStudyStateForAlertType: () => r
                }),
                function(t) {
                    t.StudyLineTool = "StudyLineTool"
                }(n || (n = {}))
        },
        948723: (t, e, i) => {
            function n(t) {
                let e, i = 0;
                if (0 === t.length) return i;
                for (var n = 0; n < t.length; n++) e = t.charCodeAt(n), i = (i << 5) - i + e, i &= i;
                return i
            }
            i.r(e), i.d(e, {
                hash: () => n
            })
        }
    }
]);
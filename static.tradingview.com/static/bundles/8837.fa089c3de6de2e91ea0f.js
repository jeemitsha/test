(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [8837], {
        520533: (e, n, t) => {
            "use strict";

            function i(e) {
                return "scriptTitle" in e && "modified" in e
            }

            function r(e) {
                return "userId" in e && "scriptAccess" in e
            }

            function o(e) {
                return "strategy" === e.kind
            }

            function s(e) {
                return "library" === e.kind
            }
            t.d(n, {
                isSavedPineInfo: () => i,
                isPubPineInfo: () => r,
                isScriptStrategy: () => o,
                isScriptLibrary: () => s
            })
        },
        51782: (e, n, t) => {
            "use strict";
            t.d(n, {
                lineToolsLocalizedNames: () => o
            });
            var i = t(125226),
                r = t(777754);
            const o = {
                LineTool5PointsPattern: r.t(null, void 0, t(566527)),
                LineToolABCD: r.t(null, void 0, t(532852)),
                LineToolArc: r.t(null, void 0, t(745104)),
                LineToolArrow: r.t(null, void 0, t(696237)),
                LineToolArrowMarkDown: r.t(null, void 0, t(908738)),
                LineToolArrowMarkLeft: r.t(null, void 0, t(835062)),
                LineToolArrowMarkRight: r.t(null, void 0, t(192163)),
                LineToolArrowMarkUp: r.t(null, void 0, t(633196)),
                LineToolBalloon: r.t(null, void 0, t(40664)),
                LineToolComment: r.t(null, void 0, t(119372)),
                LineToolBarsPattern: r.t(null, void 0, t(98838)),
                LineToolBezierCubic: r.t(null, void 0, t(59368)),
                LineToolBezierQuadro: r.t(null, void 0, t(517206)),
                LineToolBrush: r.t(null, void 0, t(530251)),
                LineToolCallout: r.t(null, void 0, t(764149)),
                LineToolCircleLines: r.t(null, void 0, t(587761)),
                LineToolCypherPattern: r.t(null, void 0, t(927891)),
                LineToolDateAndPriceRange: r.t(null, void 0, t(379859)),
                LineToolDateRange: r.t(null, void 0, t(660222)),
                LineToolDisjointAngle: r.t(null, void 0, t(603556)),
                LineToolElliottCorrection: r.t(null, void 0, t(291215)),
                LineToolElliottDoubleCombo: r.t(null, void 0, t(180983)),
                LineToolElliottImpulse: r.t(null, void 0, t(674118)),
                LineToolElliottTriangle: r.t(null, void 0, t(95840)),
                LineToolElliottTripleCombo: r.t(null, void 0, t(866637)),
                LineToolEllipse: r.t(null, void 0, t(469418)),
                LineToolExtended: r.t(null, void 0, t(302578)),
                LineToolFibChannel: r.t(null, void 0, t(482719)),
                LineToolFibCircles: r.t(null, void 0, t(464192)),
                LineToolFibRetracement: r.t(null, void 0, t(463835)),
                LineToolFibSpeedResistanceArcs: r.t(null, void 0, t(418072)),
                LineToolFibSpeedResistanceFan: r.t(null, void 0, t(220877)),
                LineToolFibSpiral: r.t(null, void 0, t(476783)),
                LineToolFibTimeZone: r.t(null, void 0, t(489037)),
                LineToolFibWedge: r.t(null, void 0, t(472489)),
                LineToolFlagMark: r.t(null, void 0, t(155678)),
                LineToolImage: r.t(null, void 0, t(223450)),
                LineToolFlatBottom: r.t(null, void 0, t(829230)),
                LineToolAnchoredVWAP: r.t(null, void 0, t(961704)),
                LineToolGannComplex: r.t(null, void 0, t(366321)),
                LineToolGannFixed: r.t(null, void 0, t(887107)),
                LineToolGannFan: r.t(null, void 0, t(168102)),
                LineToolGannSquare: r.t(null, void 0, t(981180)),
                LineToolHeadAndShoulders: r.t(null, void 0, t(742616)),
                LineToolHorzLine: r.t(null, void 0, t(160049)),
                LineToolHorzRay: r.t(null, void 0, t(76604)),
                LineToolIcon: r.t(null, void 0, t(326579)),
                LineToolEmoji: r.t(null, void 0, t(285223)),
                LineToolSticker: r.t(null, void 0, t(184573)),
                LineToolInsidePitchfork: r.t(null, void 0, t(312354)),
                LineToolNote: r.t(null, void 0, t(275549)),
                LineToolNoteAbsolute: r.t(null, void 0, t(366828)),
                LineToolSignpost: r.t(null, void 0, t(368161)),
                LineToolParallelChannel: r.t(null, void 0, t(670394)),
                LineToolPitchfan: r.t(null, void 0, t(422293)),
                LineToolPitchfork: r.t(null, void 0, t(143852)),
                LineToolPolyline: r.t(null, void 0, t(953047)),
                LineToolPath: r.t(null, void 0, t(234402)),
                LineToolPrediction: r.t(null, void 0, t(436972)),
                LineToolPriceLabel: r.t(null, void 0, t(495921)),
                LineToolArrowMarker: r.t(null, void 0, t(982473)),
                LineToolPriceRange: r.t(null, void 0, t(102032)),
                LineToolProjection: r.t(null, void 0, t(187086)),
                LineToolRay: r.t(null, void 0, t(50470)),
                LineToolRectangle: r.t(null, void 0, t(200328)),
                LineToolCircle: r.t(null, void 0, t(490068)),
                LineToolRegressionTrend: r.t(null, void 0, t(435001)),
                LineToolRiskRewardLong: r.t(null, void 0, t(844604)),
                LineToolRiskRewardShort: r.t(null, void 0, t(937819)),
                LineToolFixedRangeVolumeProfile: r.t(null, {
                    context: "study"
                }, t(40434)),
                LineToolRotatedRectangle: r.t(null, void 0, t(409998)),
                LineToolSchiffPitchfork: r.t(null, void 0, t(518559)),
                LineToolSchiffPitchfork2: r.t(null, void 0, t(298114)),
                LineToolSineLine: r.t(null, void 0, t(369502)),
                LineToolText: r.t(null, {
                    context: "tool"
                }, t(20936)),
                LineToolTextAbsolute: r.t(null, void 0, t(694782)),
                LineToolThreeDrivers: r.t(null, void 0, t(298538)),
                LineToolTimeCycles: r.t(null, void 0, t(395005)),
                LineToolTrendAngle: r.t(null, void 0, t(294770)),
                LineToolTrendBasedFibExtension: r.t(null, void 0, t(715501)),
                LineToolTrendBasedFibTime: r.t(null, void 0, t(931196)),
                LineToolTrendLine: r.t(null, void 0, t(423104)),
                LineToolInfoLine: r.t(null, void 0, t(627677)),
                LineToolTriangle: r.t(null, void 0, t(729245)),
                LineToolTrianglePattern: r.t(null, void 0, t(112390)),
                LineToolVertLine: r.t(null, void 0, t(156211)),
                LineToolCrossLine: r.t(null, void 0, t(260997)),
                LineToolHighlighter: r.t(null, void 0, t(831895)),
                LineToolPriceNote: r.t(null, void 0, t(328625)),
                LineToolVbPFixed: r.t(null, void 0, t(518426))
            };
            (0, i.isFeatureEnabled)("remove-line-tool-ghost-feed") || (o.LineToolGhostFeed = r.t(null, void 0, t(807914))), o.LineToolTweet = r.t(null, void 0, t(100970)), o.LineToolIdea = r.t(null, void 0, t(241246))
        },
        991826: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                normalizeIntervalString: () => R,
                isAvailable: () => h,
                setLastUsedResolution: () => g,
                getRangeResolution: () => y,
                getTimeBasedResolution: () => A,
                getDefaultResolution: () => L,
                getResolutionByChartStyle: () => P,
                getApplicableIntervalForFrequency: () => w,
                getServerInterval: () => I,
                isResolutionMultiplierValid: () => b,
                getMaxResolutionValue: () => x,
                getResolutionsFromSettings: () => D,
                convertResolutionsFromSettings: () => E,
                mergeResolutions: () => F,
                sortResolutions: () => U,
                compareResolutions: () => q,
                getCustomResolutions: () => O,
                getTranslatedResolution: () => j,
                getTranslatedResolutionModel: () => V,
                isSecondsEnabled: () => M,
                isTicksEnabled: () => K,
                isIntervalEnabled: () => B,
                parseIntervalValue: () => G,
                intervalIsSupported: () => H
            });
            var i = t(777754),
                r = t(568450),
                o = t(720444),
                s = t(62802),
                l = t(583912),
                a = t(588565),
                u = t(638456),
                c = t(125226),
                d = t(758337),
                p = t(495046);
            const f = [1, 5, 10, 15, 30],
                v = [1, 10, 100, 1e3],
                T = (0, c.isFeatureEnabled)("tick_intervals") && !(0, u.onWidget)(),
                _ = {
                    [r.ResolutionKind.Ticks]: 1,
                    [r.ResolutionKind.Seconds]: 60,
                    [r.ResolutionKind.Minutes]: 1440,
                    [r.SpecialResolutionKind.Hours]: 24,
                    [r.ResolutionKind.Days]: 365,
                    [r.ResolutionKind.Weeks]: 52,
                    [r.ResolutionKind.Months]: 12,
                    [r.ResolutionKind.Range]: 1e6,
                    [r.ResolutionKind.Invalid]: NaN
                },
                m = {
                    [r.ResolutionKind.Ticks]: 0,
                    [r.ResolutionKind.Seconds]: 1,
                    [r.ResolutionKind.Minutes]: 2,
                    [r.SpecialResolutionKind.Hours]: 3,
                    [r.ResolutionKind.Days]: 4,
                    [r.ResolutionKind.Weeks]: 5,
                    [r.ResolutionKind.Months]: 6,
                    [r.ResolutionKind.Range]: 7,
                    [r.ResolutionKind.Invalid]: 8
                },
                S = {
                    [r.ResolutionKind.Invalid]: "",
                    [r.ResolutionKind.Ticks]: i.t(null, {
                        context: "interval_short"
                    }, t(959231)),
                    [r.ResolutionKind.Seconds]: i.t(null, {
                        context: "interval_short"
                    }, t(2949)),
                    [r.ResolutionKind.Minutes]: i.t(null, {
                        context: "interval_short"
                    }, t(806791)),
                    [r.SpecialResolutionKind.Hours]: i.t(null, {
                        context: "interval_short"
                    }, t(113994)),
                    [r.ResolutionKind.Days]: i.t(null, {
                        context: "interval_short"
                    }, t(713395)),
                    [r.ResolutionKind.Weeks]: i.t(null, {
                        context: "interval_short"
                    }, t(185521)),
                    [r.ResolutionKind.Months]: i.t(null, {
                        context: "interval_short"
                    }, t(137720)),
                    [r.ResolutionKind.Range]: i.t(null, {
                        context: "interval_short"
                    }, t(269838))
                };

            function R(e) {
                return r.Interval.parse(e).value()
            }

            function h(e) {
                const n = r.Interval.parse(e);
                if (n.isRange()) return l.linking.range.value();
                const t = n.value(),
                    i = l.linking.dataFrequencyResolution.value();
                if (void 0 !== i && q(t, i) < 0) return !1;
                const o = l.linking.supportedResolutions.value();
                return void 0 !== o ? void 0 !== o.find((e => R(e) === t)) : n.isIntraday() ? Boolean(l.linking.intraday.value()) : n.isDWM()
            }

            function g(e) {
                r.Interval.isValid(e) && (r.Interval.isRange(e) ? s.setValue("chart.lastUsedRangeResolution", e) : s.setValue("chart.lastUsedTimeBasedResolution", e))
            }

            function y(e) {
                const n = s.getValue("chart.lastUsedRangeResolution");
                if (void 0 !== n && r.Interval.isRange(n)) return n;
                let t = "100R";
                for (const n of e) {
                    const e = r.Interval.parse(n);
                    if (e.isRange()) {
                        const n = e.value();
                        if ("100R" === n) return n;
                        t = n
                    }
                }
                return t
            }

            function A(e) {
                const n = s.getValue("chart.lastUsedTimeBasedResolution");
                if (void 0 !== n && r.Interval.isTimeBased(n)) return n;
                let t = "1D";
                for (const n of e) {
                    const e = r.Interval.parse(n);
                    if (e.isTimeBased()) {
                        const n = e.value();
                        if ("1D" === n) return n;
                        t = n
                    }
                }
                return t
            }

            function L(e) {
                return e ? "100R" : "1D"
            }

            function P(e, n, t) {
                const i = o.isRangeStyle(e),
                    s = r.Interval.isRange(n);
                return !i && s ? A(t) : i && !s ? y(t) : n
            }

            function w(e, n) {
                return q(n, e) >= 0 ? n : e
            }

            function I(e) {
                return r.Interval.isRange(e) ? "1" : e
            }

            function b(e) {
                const {
                    interval: n,
                    guiResolutionKind: t
                } = r.Interval.parseExt(e);
                if (!n.isValid()) return !1;
                const i = n.multiplier();
                if (t === r.ResolutionKind.Seconds) return f.includes(i);
                if (T && t === r.ResolutionKind.Ticks) return v.includes(i);
                return (t === r.SpecialResolutionKind.Hours ? i / 60 : i) <= C(t)
            }

            function C(e) {
                const n = _[e];
                return Number.isNaN(n) ? 1 : n
            }

            function x(e) {
                return C(r.Interval.parseExt(e).guiResolutionKind)
            }

            function D(e) {
                const n = E(s.getJSON(e, []));
                return (0, a.uniq)(n.filter(b).map(R))
            }

            function E(e) {
                return Array.isArray(e) ? e : Object.keys(e).map(r.Interval.normalize).filter(d.notNull)
            }

            function F(...e) {
                let n = [].concat(...e);
                return n = (0, a.uniq)(n.filter(b).map(R)), U(n)
            }

            function U(e) {
                return e.sort(q)
            }

            function N(e) {
                const n = r.Interval.parse(e),
                    t = n.multiplier() || 1;
                return n.isMinuteHours() ? [r.SpecialResolutionKind.Hours, t / 60] : [n.kind(), t]
            }

            function q(e, n) {
                if (e === n) return 0;
                const [t, i] = N(e), [r, o] = N(n);
                return t !== r ? m[t] - m[r] : i - o
            }

            function O() {
                let e = [];
                return window.user.is_pro && (e = D("IntervalWidget.intervals")), e
            }

            function j(e) {
                const {
                    multiplier: n,
                    shortKind: t
                } = V(e);
                return `${n}${t}`
            }

            function V(e, n) {
                const t = r.Interval.parse(e);
                let i = t.multiplier(),
                    o = t.kind();
                if (!t.isValid()) {
                    if (n) return null;
                    throw new TypeError("Can't translate invalid interval")
                }
                return t.isMinuteHours() && (i = Math.floor(i / 60), o = r.SpecialResolutionKind.Hours), {
                    multiplier: i.toString(),
                    shortKind: k(o),
                    hint: `${i} ${k(o,i)}`,
                    mayOmitMultiplier: t.isDWM() && 1 === i,
                    mayOmitShortKind: t.isMinutes() && !t.isMinuteHours()
                }
            }

            function k(e, n) {
                if (!n) return S[e];
                switch (e) {
                    case r.ResolutionKind.Ticks:
                        return i.t(null, {
                            plural: "ticks",
                            count: n
                        }, t(699136));
                    case r.ResolutionKind.Days:
                        return i.t(null, {
                            plural: "days",
                            count: n
                        }, t(730572));
                    case r.ResolutionKind.Weeks:
                        return i.t(null, {
                            plural: "weeks",
                            count: n
                        }, t(947966));
                    case r.ResolutionKind.Months:
                        return i.t(null, {
                            plural: "months",
                            count: n
                        }, t(99062));
                    case r.ResolutionKind.Seconds:
                        return i.t(null, {
                            plural: "seconds",
                            count: n
                        }, t(671787));
                    case r.ResolutionKind.Minutes:
                        return i.t(null, {
                            plural: "minutes",
                            count: n
                        }, t(569143));
                    case r.SpecialResolutionKind.Hours:
                        return i.t(null, {
                            plural: "hours",
                            count: n
                        }, t(52254));
                    case r.ResolutionKind.Range:
                        return i.t(null, {
                            plural: "ranges",
                            count: n
                        }, t(682797));
                    default:
                        return e
                }
            }

            function M() {
                return !0
            }

            function K() {
                return T
            }

            function B(e) {
                return !0
            }

            function G(e) {
                let n;
                n = T ? /^[,\s]*(^[1-9][0-9]*)?\s*([hdwmsrt]?)\s*$/i : /^[,\s]*(^[1-9][0-9]*)?\s*([hdwmsr]?)\s*$/i;
                const t = n.exec(e) || [],
                    i = ~~t[1],
                    r = t[2] && t[2].toUpperCase() || null,
                    o = {
                        qty: !i && r ? 1 : i,
                        unit: r
                    };
                return o.error = !i && !r, o.intraday = !(o.error || o.unit && "H" !== o.unit && "S" !== o.unit && "T" !== o.unit), o.range = "R" === o.unit, o
            }

            function H(e) {
                if (p.enabled("allow_supported_resolutions_set_only")) {
                    const n = r.Interval.normalize(e);
                    return null !== n && h(n)
                } {
                    const n = G(e);
                    if (n.error) return !1;
                    if (!p.enabled("custom_resolutions")) {
                        const n = r.Interval.normalize(e),
                            t = window.ChartApiInstance.defaultResolutions().filter(B);
                        if (!n || -1 === t.indexOf(n)) return !1
                    }
                    const t = l.linking.dataFrequencyResolution.value();
                    if (void 0 !== t && null !== n.unit && w(t, n.unit) !== n.unit) return !1;
                    if (n.range) return l.linking.range.value();
                    if (n.intraday) return l.linking.intraday.value(); {
                        const e = l.linking.supportedResolutions.value();
                        return !e || null !== n.unit && !!~e.indexOf(n.unit)
                    }
                }
            }
        },
        293689: (e, n, t) => {
            "use strict";
            var i = t(869403),
                r = t(823127),
                o = t(650151).assert,
                s = t(345848).trackEvent,
                l = t(226722).TVXWindowEvents,
                a = t(272001).getLogger("Pine.ScriptLib"),
                u = t(175203).telemetry,
                c = t(251954),
                d = {
                    fast: ["delete", "get", "is_auth_to_get", "is_auth_to_write", "parse_title", "rename", "lib_list"],
                    medium: ["list", "eval_pine_ex", "translate_light"],
                    slow: ["process_legacy", "publish", "save", "translate", "translate_source", "gen_alert"]
                },
                p = /[l|L]ines? (\d*)/;

            function f(e) {
                if ("object" == typeof e.reason) return e.reason;
                if (e.reason2) return e.reason2;
                const n = {
                        errors: [],
                        warnings: []
                    },
                    t = e.result && e.result.metaInfo;
                if (t && void 0 !== t.warnings && t.warnings.forEach((e => n.warnings.push({
                        message: e
                    }))), e.reason) {
                    (Array.isArray(e.reason) ? e.reason : e.reason.split("\n")).forEach((e => {
                        const t = e.match(p),
                            i = t && t.length && Number(t[1]),
                            r = {
                                message: e
                            };
                        if ("number" == typeof i) {
                            r.start = {
                                line: i,
                                column: 0
                            };
                            const e = r.message.split(": ");
                            e.shift(), r.message = e.join(": ")
                        }
                        n.errors.push(r)
                    }))
                }
                return n
            }
            var v = {};

            function T() {
                v._cache = {}
            }
            v._isAuthCache = new T, v._pineDeleted = new i, l.on("TVScriptModified", (function(e) {
                    v.clearSavedScriptsCache(), v.scriptUpdater() && v.scriptUpdater().onTVScriptModified(JSON.parse(e))
                })), l.on("TVScriptDeleted", (function(e) {
                    v.clearAllCaches(), v.scriptUpdater() && v.scriptUpdater().onTVScriptDeleted(JSON.parse(e))
                })), l.on("TVScriptRenamed", (function(e) {
                    v.clearSavedScriptsCache(), v.scriptUpdater() && v.scriptUpdater().onTVScriptRenamed(JSON.parse(e))
                })), l.on("TVScriptLegacyPineProcessed", (function(e) {
                    v.clearSavedScriptsCache(), v.scriptUpdater() && v.scriptUpdater().onTVScriptLegacyPineProcessed(JSON.parse(e))
                })), v.getPineFacadeUrl = function() {
                    return window.PINE_URL
                }, v.PINE_FACADE_URL = function() {
                    return window.PINE_URL
                }, v.onPineDeleted = function() {
                    return v._pineDeleted
                }, v._pineFacadeAjax = function(e, n, t, i) {
                    a.logNormal("Requesting pine facade scripts, url: " + n);
                    var o = function(e, n) {
                            for (var t = Object.keys(d), i = 0; i < t.length; i++) {
                                var r = d[t[i]].filter((function(n) {
                                    return -1 !== e.indexOf(n)
                                }));
                                if (Boolean(r.length)) return t[i]
                            }
                            return !1
                        }(n),
                        s = Date.now(),
                        l = i ? void 0 : {
                            withCredentials: !0
                        };
                    return r.ajax({
                        url: v.PINE_FACADE_URL() + n,
                        type: e,
                        data: t || {},
                        dataType: "json",
                        xhrFields: l
                    }).done((function() {
                        var e = Date.now() - s;
                        u.sendReport("pine", o + "_group_time_frame", {
                            value: e
                        }), u.sendReport("pine", o + "_group_ok"), a.logNormal("Requesting pine facade scripts finished, url: " + n)
                    })).fail((function() {
                        var e = Date.now() - s;
                        u.sendReport("pine", o + "_group_time_frame", {
                            value: e
                        }), u.sendReport("pine", o + "_group_error"), a.logError("Requesting pine facade scripts failed, url: " + n)
                    }))
                }, v.convertScript = function(e, n) {
                    var t = r.Deferred(),
                        i = {
                            source: e,
                            version_to: n
                        };
                    return v._pineFacadeAjax("POST", "/convert/", i).done((function(e, n, i) {
                        e.error ? t.reject(v._readableError(e.error)) : t.resolve(e)
                    })).fail((function(e, n, i) {
                        v._anyRequestAsyncFail(t, e)
                    })), t.promise()
                }, v.translateScriptAsync = function(e, n, t, i) {
                    s("Pine", "ScriptLib.translateScript"), i = !!i;
                    var o = r.Deferred(),
                        l = "/translate_source/" + encodeURIComponent(n) + "/?is_pine_ex=" + i,
                        a = {
                            user_name: window.user && window.user.username,
                            source: e,
                            inputs: JSON.stringify(t || {})
                        };
                    return v._pineFacadeAjax("POST", l, a).done((function(e, n, t) {
                        v._translateScriptAsyncDone(o, e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail(o, e)
                    })), o.promise()
                }, v.translateScriptAsync2 = function(e, n) {
                    a.logNormal("translateScriptAsync2, pineId=" + e + " pineVersion=" + n), s("Pine", "ScriptLib.translateScript");
                    var t = r.Deferred(),
                        i = 0 !== e.indexOf("USER"),
                        o = window.user && window.user.username,
                        u = "?user_name=" + encodeURIComponent(o),
                        d = "/translate/" + encodeURIComponent(e) + "/" + n + "/";
                    return i || null == o || (d += u), v._pineFacadeAjax("GET", d, void 0, i).done((function(e, i, r) {
                        if (v._translateScriptAsyncDone(t, e), n < 0) {
                            v.clearSavedScriptsCache();
                            var o = {
                                scriptMetaInfo: e.result.metaInfo
                            };
                            l.emit("TVScriptLegacyPineProcessed", JSON.stringify(o)), c.emit("TVScriptLegacyPineProcessed", o), setTimeout((function() {
                                o.isSelfCall = !0,
                                    null != v.scriptUpdater() && v.scriptUpdater().onTVScriptLegacyPineProcessed(o)
                            }), 0)
                        }
                    })).fail((function(e, n, i) {
                        v._anyRequestAsyncFail(t, e)
                    })), t.promise()
                }, v._translateScriptAsyncDone = function(e, n) {
                    if (n.error) e.reject(v._readableError(n.error));
                    else if (n.success) e.resolve(n.result.metaInfo, f(n));
                    else {
                        var t = n.result ? n.result.metaInfo : null;
                        e.reject(f(n), t)
                    }
                }, v._saveScriptAsyncDone = function(e, n) {
                    if (n.error) e.reject(v._readableError(n.error));
                    else if (n.success) e.resolve(n.result.metaInfo, f(n));
                    else {
                        var t = n.result ? n.result.metaInfo : null;
                        e.resolve(t, f(n))
                    }
                }, v._generateAlertAsyncDone = function(e, n) {
                    if (n.error) e.reject(v._readableError(n.error));
                    else if (n.success) e.resolve(n.result.metaInfo, n.result.IL, n.result.inputs || null, n.result.gen_alert_data || null);
                    else {
                        var t = n.result ? n.result.metaInfo : null;
                        e.reject(f(n), t)
                    }
                }, v._readableError = function(e, n) {
                    return n
                }, v._anyRequestAsyncFail = function(e, n) {
                    try {
                        const t = f(JSON.parse(n.responseText));
                        if (t) return e.reject(t)
                    } catch (e) {}
                    0 === v.PINE_FACADE_URL().indexOf("http") && a.logError(n.responseText), e.reject(v._readableError(n.status, n.statusText))
                }, v.isAuthToWritePineScript = function(e) {
                    var n = "write_" + e,
                        t = v._isAuthCache.getPromise(n);
                    if (null !== t) return t;
                    s("Pine", "ScriptLib.isAuthToWritePineScript");
                    var i = r.Deferred(),
                        o = "/is_auth_to_write/" + encodeURIComponent(e);
                    return v._pineFacadeAjax("GET", o).done((function(e, n, t) {
                        i.resolve(e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail(i, e)
                    })), v._isAuthCache.setPromise(n, i.promise())
                }, v.isAuthToGetPineSourceCode = function(e, n) {
                    var t = "get_" + e + "_" + n,
                        i = v._isAuthCache.getPromise(t);
                    if (null !== i) return i;
                    s("Pine", "ScriptLib.isAuthToGetPineSourceCode");
                    var o = r.Deferred(),
                        l = "/is_auth_to_get/" + encodeURIComponent(e) + "/" + n;
                    return v._pineFacadeAjax("GET", l).done((function(e, n, t) {
                        o.resolve(e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail(o, e)
                    })), v._isAuthCache.setPromise(t, o.promise())
                }, T.prototype.getPromise = function(e) {
                    var n = v._cache[e];
                    return void 0 === n ? null : void 0 !== n.value ? r.Deferred().resolve(n.value) : void 0 !== n.promise ? n.promise : null
                }, T.prototype.setPromise = function(e, n) {
                    return v._cache[e] = {
                        promise: n
                    }, n.done((function(n) {
                        v._cache[e] = {
                            value: n
                        }
                    })).fail((function(n) {
                        delete v._cache[e]
                    })), n
                }, v.getPineSourceCode = function(e, n, t) {
                    s("Pine", "ScriptLib.getPineSourceCode");
                    var i = r.Deferred(),
                        o = "?no_4xx=" + !!t,
                        l = "/get/" + encodeURIComponent(e) + "/" + n + o;
                    return v._pineFacadeAjax("GET", l).done((function(e, n, t) {
                        !1 === e.success ? i.reject(f(e)) : i.resolve(e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail(i, e)
                    })), i.promise()
                }, v.saveNewDraft = function(e) {
                    s("Pine", "ScriptLib.saveNewDraft");
                    var n = r.Deferred();
                    if (null == e || "" === e) return n.reject(t(777754).t(null, void 0, t(914002)));
                    var i = window.user && window.user.username,
                        o = "/save/new_draft/?user_name=" + encodeURIComponent(i) + "&allow_use_existing_draft=true",
                        l = {
                            source: e
                        };
                    return v._pineFacadeAjax("POST", o, l).done((function(e, t, i) {
                        v._translateScriptAsyncDone(n, e)
                    })).fail((function(e, t, i) {
                        v._anyRequestAsyncFail(n, e)
                    })), n.promise()
                }, v.saveNextDraft = function(e, n, i) {
                    s("Pine", "ScriptLib.saveNextDraft");
                    var o = r.Deferred();
                    if (null == n || "" === n) return o.reject(t(777754).t(null, void 0, t(914002)));
                    var l = window.user && window.user.username,
                        a = (i = !!i, "/save/next_draft/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(l) + "&allow_create_new=" + i),
                        u = {
                            source: n
                        };
                    return v._pineFacadeAjax("POST", a, u).done((function(e, n, t) {
                        v._translateScriptAsyncDone(o, e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail(o, e)
                    })), o.promise()
                }, v.processLegacy = function(e, n) {
                    s("Pine", "ScriptLib.processLegacy");
                    var t = r.Deferred(),
                        i = window.user && window.user.username,
                        o = "/process_legacy/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(i),
                        l = {};
                    return null != n && "" !== n && (l.source = n), v._pineFacadeAjax("POST", o, l).done((function(e, n, i) {
                        v._translateScriptAsyncDone(t, e)
                    })).fail((function(e, n, i) {
                        v._anyRequestAsyncFail(t, e)
                    })), t.promise()
                }, v.generateAlert = function(e) {
                    s("Pine", "ScriptLib.generateAlert");
                    var n = r.Deferred(),
                        t = window.user && window.user.username,
                        i = "/gen_alert/?user_name=" + encodeURIComponent(t),
                        o = {
                            alert_info: e
                        },
                        l = Date.now();
                    return v._pineFacadeAjax("POST", i, o).done((function(e, t, i) {
                        u.sendReport("alerts", "compilation_ok"), v._generateAlertAsyncDone(n, e)
                    })).fail((function(e, t, i) {
                        u.sendReport("alerts", "compilation_error"), v._anyRequestAsyncFail(n, e)
                    })).always((function() {
                        var e = Date.now() - l;
                        u.sendReport("alerts", "compilation_time_frame", {
                            value: e
                        })
                    })), n.promise()
                }, v.parseScriptTitleAsync = function(e) {
                    s("Pine", "ScriptLib.parseScriptTitle");
                    var n = r.Deferred();
                    if (null == e || "" === e) return n.reject(t(777754).t(null, void 0, t(914002)));
                    var i = {
                        user_name: window.user && window.user.username,
                        source: e
                    };
                    return v._pineFacadeAjax("POST", "/parse_title/", i).done((function(e, t, i) {
                        e.error ? n.reject(v._readableError(e.error)) : e.success ? n.resolve(e.result) : n.reject(f(e))
                    })).fail((function(e) {
                        v._anyRequestAsyncFail(n, e)
                    })), n.promise()
                }, v.evalMetaInfoExprsAsync = function(e, n) {
                    s("Pine", "ScriptLib.evalMetaInfoExprs");
                    var t = r.Deferred(),
                        i = {
                            username: window.user && window.user.username,
                            source: e,
                            inputs: JSON.stringify(n || {})
                        };
                    return v._pineFacadeAjax("POST", "/eval_pine_ex/", i).done((function(e, n, i) {
                        e.error ? t.reject(v._readableError(e.error)) : e.success ? t.resolve(e.result) : t.reject(f(e))
                    })).fail((function(e) {
                        v._anyRequestAsyncFail(t, e)
                    })), t.promise()
                }, v.patchPropertiesAsync = function(e, n, t) {
                    return a.logNormal("patchPropertiesAsync"), new Promise((function(i, r) {
                        if (n.TVScriptMetaInfoExprs) {
                            var s = n.TVScriptMetaInfoExprs.tree,
                                l = n.TVScriptMetaInfoExprs.patchMap;
                            v.evalMetaInfoExprsAsync(s, t).done((function(n) {
                                for (var t = n.rootValues, r = Object.keys(l), s = 0; s < r.length; s++) {
                                    var a = r[s],
                                        u = t[l[a]],
                                        c = a.split(".");
                                    "defaults" === c[0] && c.splice(0, 1), o(c.length > 1, "Unexpectedly short json path");
                                    for (var d = e, p = 0; p < c.length - 1; ++p) d = d[c[p]];
                                    d[c[c.length - 1]].setValue(u)
                                }
                                i(e)
                            })).fail((function(e) {
                                r(e)
                            }))
                        } else i(e)
                    }))
                }, v.scriptUpdater = function() {
                    return window.scriptUpdater
                }, v.clearAllCaches = function() {
                    v.clearIsAuthToCaches(), v.clearSavedScriptsCache()
                }, v.clearIsAuthToCaches = function(e) {
                    e ? Object.keys(v._cache).filter((function(n) {
                        return n.indexOf(e) >= 0
                    })).forEach((function(e) {
                        delete v._cache[e]
                    })) : v._isAuthCache = new T
                },
                v.clearSavedScriptsCache = function(e) {
                    delete v._userScriptsDfd
                }, v.requestUserScripts = function(e) {
                    if (s("Pine", "ScriptLib.requestUserScripts"), window.is_authenticated) {
                        if (!v._userScriptsDfd) {
                            v._userScriptsDfd = r.Deferred();
                            var n = v._userScriptsDfd;
                            v._pineFacadeAjax("GET", "/list?filter=saved").done((function(e, t, i) {
                                n.resolve(e)
                            })).fail((function(e) {
                                v._anyRequestAsyncFail(n, e)
                            }))
                        }
                        n = v._userScriptsDfd
                    } else n = r.Deferred().resolve([]);
                    return "function" == typeof e && n.done(e), n.promise()
                }, v.setUserScripts = function(e) {
                    v._userScriptsDfd || (v._userScriptsDfd = r.Deferred().resolve(e))
                }, v.requestUserPublishedScripts = function(e, n) {
                    if (s("Pine", "ScriptLib.requestUserPublishedScripts"), window.is_authenticated) {
                        if (n || !v._userPublishedScriptsDfd) {
                            v._userPublishedScriptsDfd = r.Deferred();
                            var t = v._userPublishedScriptsDfd;
                            v._pineFacadeAjax("GET", "/list?filter=published").done((function(e, n, i) {
                                t.resolve(e)
                            })).fail((function(e) {
                                v._anyRequestAsyncFail(t, e)
                            }))
                        }
                        t = v._userPublishedScriptsDfd
                    } else t = r.Deferred().resolve([]);
                    return "function" == typeof e && t.done(e), t.promise()
                }, v.requestPineEditorNewTemplateScripts = function(e) {
                    s("Pine", "ScriptLib.requestPineEditorNewTemplateScripts");
                    var n = r.Deferred();
                    return v._pineFacadeAjax("GET", "/list/?filter=template", void 0, !0).done((function(e, t, i) {
                        n.resolve(e)
                    })).fail((function(e) {
                        v._anyRequestAsyncFail(n, e)
                    })), "function" == typeof e && n.done(e), n.promise()
                }, v.requestInfoForScripts = function(e) {
                    return Promise.all([v._pineFacadeAjax("GET", "/list?filter=saved"), v._pineFacadeAjax("GET", "/list?filter=addon", void 0, !0)]).then((function(n) {
                        var t = n[0],
                            i = n[1];
                        return t.concat(i).filter((function(n) {
                            return e.includes(n.scriptIdPart)
                        }))
                    }))
                }, v.requestBuiltinScripts = function() {
                    s("Pine", "ScriptLib.requestBuiltinScripts"), a.logNormal("Request built-in scripts");
                    var e = r.Deferred();
                    return v._pineFacadeAjax("GET", "/list/?filter=standard", void 0, !0).done((function(n, t, i) {
                        a.logNormal("Request built-in scripts finished"), e.resolve(n)
                    })).fail((function(n) {
                        a.logWarn("Request built-in scripts finished with fail"), v._anyRequestAsyncFail(e, n)
                    })), e.promise()
                }, v.requestBuiltinAndUserScripts = function() {
                    s("Pine", "ScriptLib.requestBuiltinAndUserScripts"), a.logNormal("Request built-in and user scripts");
                    var e, n = window.user && window.user.username,
                        t = {},
                        i = new Promise((function(n, i) {
                            e = n, t.reject = i
                        }));
                    return Promise.all([v._pineFacadeAjax("GET", "/list?filter=saved&user_name=" + encodeURIComponent(n), void 0, !1), v._pineFacadeAjax("GET", "/list?filter=standard", void 0, !0)]).then((function(n) {
                        a.logNormal("Request built-in and user scripts finished");
                        var t = n[0],
                            i = n[1];
                        e(t.concat(i))
                    })).catch((function(e) {
                        a.logWarn("Request built-in and user scripts finished with fail"), v._anyRequestAsyncFail(t, e)
                    })), i
                }, v.requestScriptInfo = function(e) {
                    s("Pine", "ScriptLib.requestBuiltinAndUserScripts"), a.logNormal("Request public/user script info");
                    var n = r.Deferred();
                    return v._pineFacadeAjax("GET", "/get_script_info/?pine_id=" + encodeURIComponent(e)).done((function(e) {
                        a.logNormal("Request public/user script info finished"), n.resolve(e)
                    })).fail((function(e) {
                        a.logWarn("Request public/user script info finished with fail"), v._anyRequestAsyncFail(n, e)
                    })), n.promise()
                }, v.requestCandlestickScripts = function() {
                    var e;
                    s("Pine", "ScriptLib.requestCandlestickScripts"), a.logNormal("Request candlestick scripts");
                    var n = {},
                        t = new Promise((function(t, i) {
                            e = t, n.reject = i
                        }));
                    return v._pineFacadeAjax("GET", "/list?filter=candlestick", void 0, !0).done((function(n) {
                        a.logNormal("Request candlestick scripts finished"), e(n)
                    })).fail((function(e) {
                        a.logWarn("Request candlestick scripts finished with fail"), v._anyRequestAsyncFail(n, e)
                    })), t
                };
            var _ = {
                time: -1 / 0,
                request: null
            };
            v.requestFundamentalScripts = function() {
                if (_.time + 6e5 > Date.now() && null !== _.request) return a.logNormal("Return fundamentals from cache"), _.request;
                a.logNormal("Request fundamental scripts");
                var e = v._pineFacadeAjax("GET", "/list?filter=fundamental", void 0, !1);
                return e.then((function(e) {
                    a.logNormal("Request fundamental scripts finished")
                })), e.fail((function(e) {
                    a.logWarn("Request fundamental scripts finished with fail, resetting cache"), _.request = null
                })), _.time = Date.now(), _.request = Promise.resolve(e.promise()), _.request
            }, v.requestPineAddons = function(e) {
                s("Pine", "ScriptLib.requestPineAddons");
                var n = r.Deferred();
                return v._pineFacadeAjax("GET", "/list?filter=addon&pine_id_prefix=" + e).done((function(e) {
                    n.resolve(e)
                })).fail((function(e) {
                    v._anyRequestAsyncFail(n, e)
                })), n
            }, v._updateAliveScriptInstances = function(e, n) {
                var t = {};
                t.scriptMetaInfo = e.result.metaInfo, t.scriptVersionToUpdate = n, l.emit("TVScriptModified", JSON.stringify(t)), c.emit("TVScriptModified", t), setTimeout((function() {
                    t.isSelfCall = !0, null != v.scriptUpdater() && v.scriptUpdater().onTVScriptModified(t)
                }), 0)
            }, v.saveNew = function(e, n, i, o) {
                s("Pine", "ScriptLib.saveNew");
                var l = r.Deferred();
                if (null == e || "" === e) return l.reject(t(777754).t(null, void 0, t(914002)));
                var a = window.user && window.user.username,
                    u = i ? "&allow_overwrite=true" : "",
                    c = "/save/new/?name=" + encodeURIComponent(n) + "&user_name=" + encodeURIComponent(a) + u,
                    d = {
                        source: e
                    };
                return v._pineFacadeAjax("POST", c, d).done((function(e, n, t) {
                    v.clearSavedScriptsCache(), v._updateAliveScriptInstances(e, o), v._saveScriptAsyncDone(l, e)
                })).fail((function(e, n, t) {
                    v._anyRequestAsyncFail(l, e)
                })), l.promise()
            }, v.saveNext = function(e, n, i, o, l) {
                s("Pine", "ScriptLib.saveNext");
                var a = null != i ? "&name=" + encodeURIComponent(i) : "",
                    u = r.Deferred();
                if (null == n || "" === n) return u.reject(t(777754).t(null, void 0, t(914002)));
                var c = window.user && window.user.username,
                    d = "/save/next/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(c) + "&allow_create_new=" + !!l + a,
                    p = {
                        source: n
                    };
                return v._pineFacadeAjax("POST", d, p).done((function(e, n, t) {
                    v.clearSavedScriptsCache(), v._updateAliveScriptInstances(e, o), v._saveScriptAsyncDone(u, e)
                })).fail((function(e, n, t) {
                    v._anyRequestAsyncFail(u, e)
                })), u.promise()
            }, v.deletePine = function(e) {
                s("Pine", "ScriptLib.deletePine");
                var n = r.Deferred(),
                    t = window.user && window.user.username,
                    i = "/delete/" + encodeURIComponent(e) + "/?user_name=" + encodeURIComponent(t);
                return v._pineFacadeAjax("POST", i).done((function(t, i, r) {
                    v.clearIsAuthToCaches(e), v.clearSavedScriptsCache(), n.resolve(t);
                    var o = {
                        scriptIdPart: e
                    };
                    l.emit("TVScriptDeleted", JSON.stringify(o)), c.emit("TVScriptDeleted", o), setTimeout((function() {
                        o.isSelfCall = !0, null != v.scriptUpdater() && v.scriptUpdater().onTVScriptDeleted(o), v._pineDeleted.fire(e)
                    }), 0)
                })).fail((function(e, t, i) {
                    v._anyRequestAsyncFail(n, e)
                })), n.promise()
            }, v.renamePine = function(e, n, t) {
                s("Pine", "ScriptLib.renamePine");
                var i = r.Deferred(),
                    o = window.user && window.user.username,
                    a = "/rename/" + encodeURIComponent(e) + "/?name=" + encodeURIComponent(n) + "&user_name=" + encodeURIComponent(o) + "&force=" + encodeURIComponent(!!t);
                return v._pineFacadeAjax("POST", a).done((function(t, r, o) {
                    v.clearSavedScriptsCache();
                    var s = {
                        scriptIdPart: e,
                        scriptName: n
                    };
                    l.emit("TVScriptRenamed", JSON.stringify(s)), c.emit("TVScriptRenamed", s), setTimeout((function() {
                        s.isSelfCall = !0, null != v.scriptUpdater() && v.scriptUpdater().onTVScriptRenamed(s)
                    }), 0), i.resolve(t)
                })).fail((function(e, n, t) {
                    v._anyRequestAsyncFail(i, e)
                })), i.promise()
            }, v.publishNew = function(e, n) {
                s("Pine", "ScriptLib.publishNew");
                var t = r.Deferred(),
                    i = window.user && window.user.username,
                    o = "/publish/new/?access=" + encodeURIComponent(n) + "&user_name=" + encodeURIComponent(i),
                    l = {
                        source: e
                    };
                return v._pineFacadeAjax("POST", o, l).done((function(e, n, i) {
                    e.success ? (v.clearSavedScriptsCache(), t.resolve(e)) : t.reject(f(e))
                })).fail((function(e, n, i) {
                    v._anyRequestAsyncFail(t, e)
                })), t.promise()
            }, v.publishNext = function(e, n) {
                a.logNormal("ScriptLib.publishNext", "pine"), s("Pine", "ScriptLib.publishNext");
                var t = r.Deferred(),
                    i = window.user && window.user.username,
                    o = "/publish/next/" + encodeURIComponent(n) + "?user_name=" + encodeURIComponent(i),
                    l = {
                        source: e
                    };
                return v._pineFacadeAjax("POST", o, l).done((function(e, n, i) {
                    v.clearSavedScriptsCache(), e.success || t.reject(f(e)), t.resolve(e)
                })).fail((function(e, n, i) {
                    v._anyRequestAsyncFail(t, e)
                })), t.promise()
            }, v.lightTranslate = function(e, n) {
                return a.logNormal("ScriptLib.lightTranslate", "pine"), s("Pine", "ScriptLib.lightTranslate"), new Promise((function(t, i) {
                    var r = window.user && window.user.username,
                        o = `/translate_light/?user_name=${encodeURIComponent(r)}`;
                    n && (o += `&pine_id=${encodeURIComponent(n)}`);
                    var s = {
                        source: e
                    };
                    v._pineFacadeAjax("POST", o, s).done((function(e, n, r) {
                        if (e.success) t(e.result);
                        else {
                            var o = e.result && f(e.result) || f(e);
                            i(o)
                        }
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail({
                            reject: i
                        }, e)
                    }))
                }))
            }, v.getLibList = function(e, n, t) {
                return a.logNormal("ScriptLib.getLibList", "pine"), s("Pine", "ScriptLib.getLibList"), new Promise((function(i, r) {
                    var o = "/lib_list?lib_id_prefix=" + encodeURIComponent(e);
                    n && (o += "&ignore_cache=true"), t && (o += "&ignore_case=true"), v._pineFacadeAjax("GET", o).done((function(e, n, t) {
                        i(e)
                    })).fail((function(e, n, t) {
                        v._anyRequestAsyncFail({
                            reject: r
                        }, e)
                    }))
                }))
            }, v.getExistingLibraryInfo = async function(e) {
                try {
                    const n = await v.getLibList(e + "/last", !0, !0);
                    if (!n.length) return null;
                    const t = n[0];
                    return {
                        scriptIdPart: t.scriptIdPart,
                        chartId: t.chartId,
                        version: t.version
                    }
                } catch (e) {
                    return null
                }
            }, window.loginStateChange && loginStateChange.subscribe(v, v.clearAllCaches), e.exports = v
        },
        418147: (e, n, t) => {
            var i;
            e = t.nmd(e), "undefined" != typeof window && (i = window.TVScript = window.TVScript || {}),
                (i = i || {}).Access = {}, i.Access.ACCESS_OPEN_NO_AUTH = "open_no_auth", i.Access.ACCESS_CLOSED_NO_AUTH = "closed_no_auth", i.Access.ACCESS_CLOSED_NEEDS_AUTH = "closed_needs_auth", i.Access.MAP_ID_TO_NAME = {
                    1: i.Access.ACCESS_OPEN_NO_AUTH,
                    2: i.Access.ACCESS_CLOSED_NO_AUTH,
                    3: i.Access.ACCESS_CLOSED_NEEDS_AUTH
                }, i.Access.MAP_NAME_TO_ID = {}, Object.keys(i.Access.MAP_ID_TO_NAME).forEach((function(e) {
                    i.Access.MAP_NAME_TO_ID[i.Access.MAP_ID_TO_NAME[e]] = e
                })), i.PinePrefix = {}, i.PinePrefix.USER = "USER;", i.PinePrefix.PUB = "PUB;", i.PinePrefix.STD = "STD;", i.PinePrefix.TV = "TV_", i.PinePrefix.EDGR = "EDGR_", i.PineType = {}, i.PineType.UserSaved = "PineType_UserSaved", i.PineType.UserPublished = "PineType_UserPublished", i.PineType.BuiltIn = "PineType_BuiltIn", i.PineType.Addon = "PineType_Addon", i.Type = i.Type || function() {}, i.Type.VOID = "void", i.Type.INTEGER = "integer", i.Type.FLOAT = "float", i.Type.STRING = "string", i.Type.BOOL = "bool", i.Type.COLOR = "color", i.Type.SERIES = "series", i.Type.PLOT = "plot", i.Type.HLINE = "hline", i.Type.BARCOLOR = "barcolor", i.Type.BGCOLOR = "bgcolor", i.Type.PLOTSHAPES = "plotshape", i.Type.PLOTCHARS = "plotchar", i.Type.PLOTARROWS = "plotarrow", i.Type.NA = "na", i.Type.ARRAY = "array", i.TranslatorDefaultVersion = 1, i.TranslatorReferenceVersioningIntroduced = 4, i.TranslatorLastVersion = 5, i.pineType = function(e) {
                    return e.startsWith(i.PinePrefix.USER) ? i.PineType.UserSaved : e.startsWith(i.PinePrefix.PUB) ? i.PineType.UserPublished : e.startsWith(i.PinePrefix.STD) || e.startsWith(i.PinePrefix.TV) || e.startsWith(i.PinePrefix.EDGR) ? i.PineType.BuiltIn : i.PineType.Addon
                }, i.patchILTemplate = function(e, n, t) {
                    var r = t || {};
                    return i._patchTemplate(/<(in_\d+)>/g, e, n, r)
                }, i.decorateQuotes = function(e) {
                    if (!e) return e;
                    var n = /([^\\']+?)(')[^']*?/g,
                        t = "$1\\$2",
                        i = e;
                    return "'" == i.charAt(0) && "'" == i.charAt(i.length - 1) ? "'" + (i = i.substr(1, i.length - 2)).replace(n, t) + "'" : i.replace(n, t)
                }, i.patchInputs = function(e, n) {
                    var t = {};
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var r, o = e[i];
                            r = o.isFake ? {
                                v: n[o.id],
                                f: !0,
                                t: o.type
                            } : n[o.id], t[o.id] = r
                        }
                    return t
                }, i._patchTemplate = function(e, n, t, r) {
                    var o = r || {};
                    return n.replace(e, (function(e, n) {
                        for (var r = (n in o ? o[n] : t.defaults.inputs[n]), s = 0; s < t.inputs.length; ++s)
                            if (t.inputs[s].id === n)
                                if ("bool" === t.inputs[s].type) r = r ? "1.0" : "0.0";
                                else if (["text", "symbol", "resolution", "session"].indexOf(t.inputs[s].type) >= 0) r = "'" + i.decorateQuotes(r) + "'";
                        else if ("source" === t.inputs[s].type) {
                            var l = r.split("$");
                            l[0] = "'" + l[0] + "'", r = "source(" + l.join(",") + ")"
                        }
                        return r
                    }))
                }, i.isStrategy = function(e) {
                    return /^\s*strategy\s*\(/m.test(e)
                };
            var r = /^\s*\/\/\s*?@version\s*?=\s*?(\S*?)\s*?$/gm,
                o = /^[0-9]+$/;
            i.extractVersion = function(e) {
                r.lastIndex = 0;
                var n = r.exec(e);
                if (null === n) return 1;
                var t = n[1],
                    s = o.test(t) ? Number(t) : NaN;
                return isNaN(s) ? 1 : Math.max(i.TranslatorDefaultVersion, Math.min(s, i.TranslatorLastVersion))
            }, i.canUpgradeVersion = function(e) {
                return e >= 3 && e < i.TranslatorLastVersion
            }, i.canDowngradeVersion = function(e) {
                return e >= 4 && e <= i.TranslatorLastVersion
            }, e && e.exports && (e.exports = i)
        }
    }
]);
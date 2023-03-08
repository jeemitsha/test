(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [51583], {
        500521: (e, t, i) => {
            "use strict";
            e.exports.pushChartPage = async function(e) {
                const {
                    default: t
                } = await Promise.all([i.e(36037), i.e(43082), i.e(36956), i.e(4100), i.e(50251), i.e(85783), i.e(53444), i.e(25977), i.e(50762), i.e(39694), i.e(34629)]).then(i.t.bind(i, 55244, 23)), r = new t.ChartPage(e);
                TradingView.historyManager.push(r)
            }
        },
        498664: (e, t, i) => {
            "use strict";
            i.d(t, {
                Directions: () => r,
                PublicationType: () => n,
                PublicationMode: () => s,
                EVENTS: () => o,
                Idea: () => l,
                collectMetaData: () => d
            });
            var r, n, s, a = i(16710);
            ! function(e) {
                e[e.Neutral = 0] = "Neutral", e[e.Long = 1] = "Long", e[e.Short = 2] = "Short"
            }(r || (r = {})),
            function(e) {
                e[e.Analysis = 0] = "Analysis", e[e.Education = 1] = "Education"
            }(n || (n = {})),
            function(e) {
                e[e.Idea = 0] = "Idea", e[e.Script = 1] = "Script"
            }(s || (s = {}));
            const o = { ...a.EVENTS,
                EditDirection: "EditDirection",
                EditPublicationType: "EditPublicationType",
                EditPublishAllLayout: "EditPublishAllLayout",
                EditPublishSource: "EditPublishSource",
                EditRelatedIdeas: "EditRelatedIdeas"
            };
            class l extends a.Publication {
                constructor(e = {}, t = {}) {
                    super(e);
                    const {
                        direction: i = r.Neutral,
                        publicationType: s = n.Analysis,
                        publishSource: a = "",
                        relatedIdeas: o = [],
                        videoFilename: l = "",
                        videoDuration: d = 0,
                        videoCam: h = !1
                    } = e, {
                        publishAllLayout: c = !0,
                        savePrivacySetting: u = !0,
                        onWidget: p = !1
                    } = t;
                    this._direction = i, this._publicationType = s, this._publishSource = a, this._relatedIdeas = o, this._publishAllLayout = c, this._savePrivacySetting = u, this._onWidget = p, this._videoFilename = l, this._videoDuration = d, this._videoCam = h
                }
                getDirection() {
                    return this._direction
                }
                setDirection(e) {
                    this._direction = e, this._stream.emitEvent(o.EditDirection)
                }
                getPublicationType() {
                    return this._publicationType
                }
                setPublicationType(e) {
                    this._publicationType = e, this._stream.emitEvent(o.EditPublicationType)
                }
                getRelatedIdeas() {
                    return this._relatedIdeas
                }
                setRelatedIdeas(e) {
                    this._relatedIdeas = e, this._stream.emitEvent(o.EditRelatedIdeas)
                }
                getPublishSource() {
                    return this._publishSource
                }
                setPublishSource(e) {
                    this._publishSource = e, this._stream.emitEvent(o.EditPublishSource)
                }
                getPublishAllLayout() {
                    return this._publishAllLayout
                }
                setPublishAllLayout(e) {
                    this._publishAllLayout = e, this._stream.emitEvent(o.EditPublishAllLayout)
                }
                getSavePrivacySetting() {
                    return this._savePrivacySetting
                }
                setSavePrivacySetting(e) {
                    this._savePrivacySetting = e
                }
                getOnWidget() {
                    return this._onWidget
                }
                setOnWidget(e) {
                    this._onWidget = e
                }
                textFieldsIsFilled() {
                    const e = !!this.getTitle(),
                        t = !!this.getDescription(),
                        i = !!this.getRelatedIdeas().length,
                        r = !!this.getTags().length;
                    return e || t || i || r
                }
                getVideoFilename() {
                    return this._videoFilename
                }
                getVideoDuration() {
                    return this._videoDuration
                }
                getVideoCam() {
                    return this._videoCam
                }
                isVideo() {
                    return "" !== this._videoFilename
                }
            }

            function d(e) {
                return {
                    onWidget: e.getOnWidget(),
                    publishAllLayout: e.getPublishAllLayout(),
                    savePrivacySetting: e.getSavePrivacySetting()
                }
            }
        },
        16710: (e, t, i) => {
            "use strict";
            i.d(t, {
                EVENTS: () => s,
                AccessType: () => a,
                Publication: () => o
            });
            var r = i(685459),
                n = i.n(r);
            const s = {
                EditDescription: "EditDescription",
                EditTags: "EditTags",
                EditTitle: "EditTitle",
                EditTwitter: "EditTwitter",
                EditYouTube: "EditYouTube",
                EditAccessType: "EditAccessType",
                EditTerms: "EditTerms"
            };
            var a;
            ! function(e) {
                e[e.Private = 0] = "Private", e[e.Public = 1] = "Public"
            }(a || (a = {}));
            class o {
                constructor(e = {}) {
                    this._stream = new(n());
                    const {
                        title: t = "",
                        description: i = "",
                        terms: r = "",
                        tags: s = [],
                        twitter: o = !1,
                        youtube: l = !1,
                        accessType: d = a.Public
                    } = e;
                    this._title = t, this._description = i, this._terms = r, this._tags = s, this._twitter = o, this._youtube = l, this._accessType = d
                }
                getStream() {
                    return this._stream
                }
                getTitle() {
                    return this._title
                }
                setTitle(e) {
                    this._title = e, this._emit(s.EditTitle)
                }
                getDescription() {
                    return this._description
                }
                setDescription(e) {
                    this._description = e, this._emit(s.EditDescription)
                }
                getTerms() {
                    return this._terms
                }
                setTerms(e) {
                    this._terms = e, this._emit(s.EditTerms)
                }
                getTags() {
                    return this._tags
                }
                setTags(e) {
                    this._tags = e, this._emit(s.EditTags)
                }
                getTwitter() {
                    return this._twitter
                }
                setTwitter(e) {
                    this._twitter = e, this._emit(s.EditTwitter)
                }
                getYouTube() {
                    return this._youtube
                }
                setYouTube(e) {
                    this._youtube = e, this._emit(s.EditYouTube)
                }
                getAccessType() {
                    return this._accessType
                }
                setAccessType(e) {
                    this._accessType = e, this._stream.emitEvent(s.EditAccessType)
                }
                _emit(e) {
                    e && this._stream.emitEvent(e), this._stream.emitEvent("change")
                }
            }
        },
        39654: (e, t, i) => {
            "use strict";
            i.d(t, {
                getIsoLanguageCodeFromLanguage: () => n
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

            function n(e) {
                return r[e] || e
            }
        },
        781014: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    BadgeBrokerNames: () => r
                }),
                function(e) {
                    e.BrokerExtraFeatured = "broker_extra:featured", e.BrokerPlatinum = "broker:platinum", e.BrokerGold = "broker:gold", e.BrokerSilver = "broker:silver"
                }(r || (r = {}))
        },
        970704: (e, t, i) => {
            "use strict";
            i.d(t, {
                isBadgeBroker: () => s,
                isFeaturedBroker: () => a,
                isBadgeBrokerWithLink: () => l,
                isBadgeBrokerWithTitle: () => h
            });
            var r = i(781014);
            const n = new Set(Object.values(r.BadgeBrokerNames));

            function s(e) {
                return n.has(e)
            }

            function a(e) {
                return e === r.BadgeBrokerNames.BrokerExtraFeatured
            }
            const o = new Set([r.BadgeBrokerNames.BrokerPlatinum, r.BadgeBrokerNames.BrokerGold, r.BadgeBrokerNames.BrokerSilver]);

            function l(e) {
                return o.has(e)
            }
            const d = new Set([r.BadgeBrokerNames.BrokerPlatinum, r.BadgeBrokerNames.BrokerGold, r.BadgeBrokerNames.BrokerSilver]);

            function h(e) {
                return d.has(e)
            }
        },
        540935: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    BadgeUserNames: () => r
                }),
                function(e) {
                    e.Moderator = "moderator", e.Employee = "employee", e.PineWizard = "pine_wizard", e.ProPremium = "pro:pro_premium", e.ProPremiumTrial = "pro:pro_premium_trial", e.ProRealTime = "pro:pro_realtime", e.ProRealTimeTrial = "pro:pro_realtime_trial", e.Pro = "pro:pro", e.ProTrial = "pro:pro_trial"
                }(r || (r = {}))
        },
        359984: (e, t, i) => {
            "use strict";
            i.d(t, {
                isBadgeUserWithTitle: () => s,
                isBadgeUser: () => o,
                isModerator: () => l,
                isProPremium: () => d,
                isProRealtime: () => h,
                isPro: () => c,
                isEmployee: () => u,
                isPineWizard: () => p,
                isTrial: () => _
            });
            var r = i(540935);
            const n = new Set([r.BadgeUserNames.Employee, r.BadgeUserNames.PineWizard, r.BadgeUserNames.Moderator, r.BadgeUserNames.ProPremiumTrial, r.BadgeUserNames.ProRealTimeTrial, r.BadgeUserNames.ProTrial]);

            function s(e) {
                return n.has(e)
            }
            const a = new Set(Object.values(r.BadgeUserNames));

            function o(e) {
                return a.has(e)
            }

            function l(e) {
                return r.BadgeUserNames.Moderator === e
            }

            function d(e) {
                return r.BadgeUserNames.ProPremium === e || r.BadgeUserNames.ProPremiumTrial === e
            }

            function h(e) {
                return r.BadgeUserNames.ProRealTime === e || r.BadgeUserNames.ProRealTimeTrial === e
            }

            function c(e) {
                return r.BadgeUserNames.Pro === e || r.BadgeUserNames.ProTrial === e
            }

            function u(e) {
                return r.BadgeUserNames.Employee === e
            }

            function p(e) {
                return r.BadgeUserNames.PineWizard === e
            }

            function _(e) {
                return r.BadgeUserNames.ProPremiumTrial === e || r.BadgeUserNames.ProRealTimeTrial === e || r.BadgeUserNames.ProTrial === e
            }
        },
        864929: (e, t, i) => {
            "use strict";
            i.d(t, {
                getImage: () => s
            });
            const r = new Map;

            function n(e) {
                e.crossOrigin = "anonymous"
            }

            function s(e, t, i = n) {
                let s = r.get(e);
                return void 0 === s && (s = new Promise(((e, r) => {
                    const n = new Image;
                    n.onload = () => {
                        e(n), n.onload = null, n.onerror = null
                    }, n.onerror = () => {
                        r(), n.onload = null, n.onerror = null
                    }, i(n), n.src = t
                })), r.set(e, s)), s
            }
        },
        927592: (e, t, i) => {
            "use strict";
            i.d(t, {
                splitThousands: () => n
            });
            var r = i(150335);

            function n(e, t = "&nbsp;") {
                let i = e + ""; - 1 !== i.indexOf("e") && (i = function(e) {
                    return (0, r.fixComputationError)(e).toFixed(10).replace(/\.?0+$/, "")
                }(Number(e)));
                const n = i.split(".");
                return n[0].replace(/\B(?=(\d{3})+(?!\d))/g, t) + (n[1] ? "." + n[1] : "")
            }
        },
        38724: (e, t, i) => {
            "use strict";
            i.d(t, {
                dateFormatProperty: () => l,
                restoreDateFormatSettingsValue: () => d
            });
            var r = i(62802),
                n = i(506845),
                s = i(838126);
            const a = "date_format";

            function o() {
                return r.getValue(a, (0, s.defaultDateFormat)())
            }
            const l = (0, n.createPrimitiveProperty)(o());

            function d() {
                l.setValue((0, s.defaultDateFormat)()), r.remove(a)
            }
            r.onSync.subscribe(null, (() => l.setValue(o()))), l.subscribe(null, (() => r.setValue(a, l.value())))
        },
        927508: (e, t, i) => {
            "use strict";
            i.d(t, {
                customFormatters: () => r
            });
            const r = {
                dateFormatter: null,
                timeFormatter: null,
                tickMarkFormatter: null,
                priceFormatterFactory: null,
                studyFormatterFactory: null
            }
        },
        838126: (e, t, i) => {
            "use strict";
            i.d(t, {
                monthFormatFunction: () => g,
                dateFormatFunctions: () => f,
                getDateFormatWithWeekday: () => m,
                availableDateFormats: () => v,
                defaultDateFormat: () => x
            });
            var r = i(777754),
                n = i(39654),
                s = i(831471);
            const a = {
                    1: () => r.t(null, void 0, i(795425)),
                    2: () => r.t(null, void 0, i(835050)),
                    3: () => r.t(null, void 0, i(651369)),
                    4: () => r.t(null, void 0, i(442762)),
                    5: () => r.t(null, {
                        context: "short"
                    }, i(227991)),
                    6: () => r.t(null, void 0, i(715224)),
                    7: () => r.t(null, void 0, i(6215)),
                    8: () => r.t(null, void 0, i(38465)),
                    9: () => r.t(null, void 0, i(757902)),
                    10: () => r.t(null, void 0, i(73546)),
                    11: () => r.t(null, void 0, i(671230)),
                    12: () => r.t(null, void 0, i(92203))
                },
                o = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
                l = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
                d = e => e.toLocaleDateString(window.language ? (0, n.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
                    weekday: "short",
                    timeZone: "UTC"
                }),
                h = (e, t) => (0, s.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
                c = (e, t) => a[o(e, t)](),
                u = (e, t) => (0, s.numberToStringWithLeadingZero)(o(e, t), 2),
                p = (e, t) => (0, s.numberToStringWithLeadingZero)(l(e, t) % 100, 2),
                _ = (e, t) => (0, s.numberToStringWithLeadingZero)(l(e, t), 4),
                g = (e, t) => c(e, t),
                f = {
                    "dd MMM 'yy": (e, t) => `${h(e,t)} ${c(e,t)} '${p(e,t)}`,
                    "MMM dd, yyyy": (e, t) => `${c(e,t)} ${h(e,t)}, ${_(e,t)}`,
                    "MMM dd": (e, t) => `${c(e,t)} ${h(e,t)}`,
                    "dd MMM": (e, t) => `${h(e,t)} ${c(e,t)}`,
                    "yyyy-MM-dd": (e, t) => `${_(e,t)}-${u(e,t)}-${h(e,t)}`,
                    "yy-MM-dd": (e, t) => `${p(e,t)}-${u(e,t)}-${h(e,t)}`,
                    "yy/MM/dd": (e, t) => `${p(e,t)}/${u(e,t)}/${h(e,t)}`,
                    "yyyy/MM/dd": (e, t) => `${_(e,t)}/${u(e,t)}/${h(e,t)}`,
                    "dd-MM-yyyy": (e, t) => `${h(e,t)}-${u(e,t)}-${_(e,t)}`,
                    "dd-MM-yy": (e, t) => `${h(e,t)}-${u(e,t)}-${p(e,t)}`,
                    "dd/MM/yy": (e, t) => `${h(e,t)}/${u(e,t)}/${p(e,t)}`,
                    "dd/MM/yyyy": (e, t) => `${h(e,t)}/${u(e,t)}/${_(e,t)}`,
                    "MM/dd/yy": (e, t) => `${u(e,t)}/${h(e,t)}/${p(e,t)}`,
                    "MM/dd/yyyy": (e, t) => `${u(e,t)}/${h(e,t)}/${_(e,t)}`
                };

            function m(e) {
                return "ja" === window.language ? (t, i) => `${f[e](t,i)} (${d(t)})` : (t, i) => `${d(t)} ${f[e](t,i)}`
            }
            const v = Object.keys(f),
                x = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
        },
        662598: (e, t, i) => {
            "use strict";
            i.d(t, {
                DateFormatter: () => s
            });
            var r = i(927508),
                n = i(838126);
            class s {
                constructor(e = "yyyy-MM-dd", t = !1) {
                    this._dateFormatFunc = t ? (0, n.getDateFormatWithWeekday)(e) : n.dateFormatFunctions[e]
                }
                format(e) {
                    return r.customFormatters && r.customFormatters.dateFormatter ? r.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !1)
                }
                formatLocal(e) {
                    return r.customFormatters.dateFormatter ? r.customFormatters.dateFormatter.formatLocal ? r.customFormatters.dateFormatter.formatLocal(e) : r.customFormatters.dateFormatter.format(e) : this._dateFormatFunc(e, !0)
                }
            }
        },
        147279: (e, t, i) => {
            "use strict";
            i.d(t, {
                DateTimeFormatter: () => a
            });
            var r = i(164280),
                n = i(662598);
            const s = {
                dateFormat: "yyyy-MM-dd",
                withWeekday: !1,
                timeFormat: r.hourMinuteSecondFormat,
                dateTimeSeparator: " "
            };
            class a {
                constructor(e = {}) {
                    const t = Object.assign({}, s, e);
                    this._dateFormatter = new n.DateFormatter(t.dateFormat, t.withWeekday), this._timeFormatter = new r.TimeFormatter(t.timeFormat), this._separator = t.dateTimeSeparator
                }
                format(e) {
                    return `${this._dateFormatter.format(e)}${this._separator}${this._timeFormatter.format(e)}`
                }
                formatLocal(e) {
                    return `${this._dateFormatter.formatLocal(e)}${this._separator}${this._timeFormatter.formatLocal(e)}`
                }
            }
        },
        583811: (e, t, i) => {
            "use strict";
            i.d(t, {
                PipFormatter: () => s
            });
            var r = i(212686),
                n = i(831471);
            class s extends n.PriceFormatter {
                constructor(e, t, i, n, s) {
                    t || (t = 1), ("forex" === i || (0, r.isCFDSymbol)(i, s)) && n ? (super(n), this._isForex = !0) : (super(1), this._isForex = !1), this._pipPriceScale = e, this._pipMinMove = t, this._pipMinMove2 = n
                }
                format(e, t, i) {
                    let r = this._isForex ? this._pipMinMove2 : this._pipMinMove;
                    return void 0 === r && (r = NaN), super.format(e * this._pipPriceScale / r, t, i)
                }
            }
        },
        164280: (e, t, i) => {
            "use strict";
            i.d(t, {
                hourMinuteSecondFormat: () => s,
                hourMinuteNonZeroSecondFormat: () => a,
                hourMinuteSecondMilisecFormat: () => o,
                hourMinuteFormat: () => l,
                twelveHourMinuteSecondFormat: () => d,
                twelveHourMinuteNonZeroSecondFormat: () => h,
                twelveHourMinuteFormat: () => c,
                TimeFormatter: () => u
            });
            var r = i(927508),
                n = i(831471);
            const s = "%h:%m:%s",
                a = "%h:%m:%s+",
                o = "%h:%m:%s.%ss",
                l = "%h:%m",
                d = "%h:%m:%s %ampm",
                h = "%h:%m:%s+ %ampm",
                c = "%h:%m %ampm";
            class u {
                constructor(e) {
                    this._isTwelveHoursFormat = !1,
                        this._valuesAndDelimeters = [];
                    const t = e || s,
                        i = new RegExp("%h|%m|%s\\+|%ss|%ampm|%s", "g");
                    let r = i.exec(t),
                        n = 0;
                    for (; null !== r;) {
                        const e = r[0];
                        "%ampm" === e && (this._isTwelveHoursFormat = !0);
                        const s = t.substring(n, r.index);
                        "" !== s && this._valuesAndDelimeters.push(s), this._valuesAndDelimeters.push(e), n = r.index + e.length, r = i.exec(t)
                    }
                }
                format(e) {
                    return r.customFormatters.timeFormatter ? r.customFormatters.timeFormatter.format(e) : this._formatTime(e, !1)
                }
                formatLocal(e) {
                    return r.customFormatters.timeFormatter ? r.customFormatters.timeFormatter.formatLocal ? r.customFormatters.timeFormatter.formatLocal(e) : r.customFormatters.timeFormatter.format(e) : this._formatTime(e, !0)
                }
                _formatTime(e, t) {
                    let i = t ? e.getHours() : e.getUTCHours();
                    const r = t ? e.getMinutes() : e.getUTCMinutes(),
                        s = t ? e.getSeconds() : e.getUTCSeconds(),
                        a = t ? e.getMilliseconds() : e.getUTCMilliseconds();
                    let o = "";
                    this._isTwelveHoursFormat && (o = i >= 12 ? "PM" : "AM", i %= 12, i = i || 12);
                    let l = "",
                        d = !1;
                    for (let e = this._valuesAndDelimeters.length - 1; e >= 0; e--) {
                        const t = this._valuesAndDelimeters[e];
                        let h;
                        switch (t) {
                            case "%h":
                                h = (0, n.numberToStringWithLeadingZero)(i, 2);
                                break;
                            case "%m":
                                h = (0, n.numberToStringWithLeadingZero)(r, 2);
                                break;
                            case "%s+":
                                0 !== s ? h = (0, n.numberToStringWithLeadingZero)(s, 2) : (h = "", d = !0);
                                break;
                            case "%s":
                                h = (0, n.numberToStringWithLeadingZero)(s, 2);
                                break;
                            case "%ss":
                                h = (0, n.numberToStringWithLeadingZero)(a, 3);
                                break;
                            case "%ampm":
                                h = o;
                                break;
                            default:
                                if (d) {
                                    d = !1;
                                    continue
                                }
                                h = t
                        }
                        l = h + l
                    }
                    return l
                }
            }
        },
        735512: (e, t, i) => {
            "use strict";
            i.d(t, {
                TimeSpanFormatter: () => n
            });
            var r = i(777754);
            class n {
                format(e) {
                    const t = e < 0;
                    e = Math.abs(e);
                    const n = Math.floor(e / 86400);
                    e -= 86400 * n;
                    const s = Math.floor(e / 3600);
                    e -= 3600 * s;
                    const a = Math.floor(e / 60);
                    e -= 60 * a;
                    let o = "";
                    return n && (o += n + r.t(null, {
                        context: "dates"
                    }, i(297840)) + " "), s && (o += s + r.t(null, {
                        context: "dates"
                    }, i(564302)) + " "), a && (o += a + r.t(null, {
                        context: "dates"
                    }, i(592659)) + " "), e && (o += e + r.t(null, {
                        context: "dates"
                    }, i(222448)) + " "), t && (o = "-" + o), o.trim()
                }
            }
        },
        886538: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                Pattern5pointsPaneView: () => _
            });
            var r = i(631586),
                n = i(739665),
                s = i(28035),
                a = i(544445),
                o = i(383359),
                l = i(296266),
                d = i(951512),
                h = i(858063),
                c = i(530513),
                u = i(233330),
                p = i(623331);
            class _ extends u.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._abRetracement = NaN, this._bcRetracement = NaN, this._cdRetracement = NaN, this._xdRetracement = NaN, this._numericFormatter = new d.NumericFormatter, this._bcRetracementTrend = new l.TrendLineRenderer, this._xdRetracementTrend = new l.TrendLineRenderer, this._xbTrend = new l.TrendLineRenderer, this._bdTrend = new l.TrendLineRenderer, this._polylineRenderer = new c.PolygonRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._mainTriangleRenderer = new o.TriangleRenderer, this._triangleRendererPoints234 = new o.TriangleRenderer, this._xbLabelRenderer = new a.TextRenderer, this._acLabelRenderer = new a.TextRenderer, this._bdLabelRenderer = new a.TextRenderer, this._xdLabelRenderer = new a.TextRenderer, this._textRendererALabel = new a.TextRenderer, this._textRendererBLabel = new a.TextRenderer, this._textRendererCLabel = new a.TextRenderer, this._textRendererDLabel = new a.TextRenderer, this._textRendererXLabel = new a.TextRenderer,
                        this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._updateBaseData(), this._renderer = null, this._points.length < 2) return;
                    const e = this._source.properties().childs(),
                        t = new s.CompositeRenderer,
                        i = (t, i) => ({
                            points: [t],
                            text: i,
                            color: e.textcolor.value(),
                            vertAlign: "middle",
                            horzAlign: "center",
                            font: p.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: e.bold && e.bold.value(),
                            italic: e.italic && e.italic.value(),
                            fontsize: e.fontsize.value(),
                            backgroundColor: e.color.value(),
                            backgroundRoundRect: 4
                        }),
                        a = (t, i) => ({
                            points: [t, i],
                            color: e.color.value(),
                            linewidth: 1,
                            linestyle: r.LINESTYLE_DOTTED,
                            extendleft: !1,
                            extendright: !1,
                            leftend: n.LineEnd.Normal,
                            rightend: n.LineEnd.Normal
                        }),
                        [o, l, d, h, c] = this._points,
                        u = {
                            points: [o, l, this._points.length < 3 ? l : d],
                            color: "rgba(0, 0, 0, 0)",
                            linewidth: e.linewidth.value(),
                            backcolor: e.backgroundColor.value(),
                            fillBackground: e.fillBackground.value(),
                            transparency: e.transparency.value()
                        };
                    if (this._mainTriangleRenderer.setData(u), t.append(this._mainTriangleRenderer), this._points.length > 3) {
                        const i = {
                            points: [d, h, 5 === this._points.length ? c : h],
                            color: "rgba(0, 0, 0, 0)",
                            linewidth: e.linewidth.value(),
                            backcolor: e.backgroundColor.value(),
                            fillBackground: e.fillBackground.value(),
                            transparency: e.transparency.value()
                        };
                        this._triangleRendererPoints234.setData(i), t.append(this._triangleRendererPoints234)
                    }
                    const _ = {
                        points: this._points,
                        color: e.color.value(),
                        linewidth: e.linewidth.value(),
                        backcolor: e.backgroundColor.value(),
                        fillBackground: !1,
                        linestyle: r.LINESTYLE_SOLID,
                        filled: !1
                    };
                    if (this._polylineRenderer.setData(_), t.append(this._polylineRenderer), this._points.length >= 3) {
                        const e = i(o.add(d).scaled(.5), this._numericFormatter.format(this._abRetracement));
                        this._xbLabelRenderer.setData(e), t.append(this._xbLabelRenderer), this._xbTrend.setData(a(o, d)), t.append(this._xbTrend)
                    }
                    if (this._points.length >= 4) {
                        this._bcRetracementTrend.setData(a(l, h)), t.append(this._bcRetracementTrend);
                        const e = i(l.add(h).scaled(.5), this._numericFormatter.format(this._bcRetracement));
                        this._acLabelRenderer.setData(e), t.append(this._acLabelRenderer)
                    }
                    if (this._points.length >= 5) {
                        const e = i(d.add(c).scaled(.5), this._numericFormatter.format(this._cdRetracement));
                        this._bdLabelRenderer.setData(e), t.append(this._bdLabelRenderer), this._xdRetracementTrend.setData(a(o, c)), t.append(this._xdRetracementTrend);
                        const r = i(o.add(c).scaled(.5), this._numericFormatter.format(this._xdRetracement));
                        this._xdLabelRenderer.setData(r), t.append(this._xdLabelRenderer), this._bdTrend.setData(a(d, c)), t.append(this._bdTrend)
                    }
                    const g = i(o, "X");
                    l.y > o.y ? (g.vertAlign = "bottom", g.offsetY = 5) : (g.vertAlign = "top", g.offsetY = 5), this._textRendererXLabel.setData(g), t.append(this._textRendererXLabel);
                    const f = i(l, "A");
                    if (l.y < o.y ? (f.vertAlign = "bottom", f.offsetY = 5) : (f.vertAlign = "top", f.offsetY = 5), this._textRendererALabel.setData(f), t.append(this._textRendererALabel), this._points.length > 2) {
                        const e = i(d, "B");
                        d.y < l.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._textRendererBLabel.setData(e), t.append(this._textRendererBLabel)
                    }
                    if (this._points.length > 3) {
                        const e = i(h, "C");
                        h.y < d.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._textRendererCLabel.setData(e), t.append(this._textRendererCLabel)
                    }
                    if (this._points.length > 4) {
                        const e = i(c, "D");
                        c.y < h.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._textRendererDLabel.setData(e), t.append(this._textRendererDLabel)
                    }
                    this.addAnchors(t), this._renderer = t
                }
                _updateBaseData() {
                    if (this._source.points().length >= 3) {
                        const [e, t, i] = this._source.points();
                        this._abRetracement = Math.round(1e3 * Math.abs((i.price - t.price) / (t.price - e.price))) / 1e3
                    }
                    if (this._source.points().length >= 4) {
                        const [, e, t, i] = this._source.points();
                        this._bcRetracement = Math.round(1e3 * Math.abs((i.price - t.price) / (t.price - e.price))) / 1e3
                    }
                    if (this._source.points().length >= 5) {
                        const [e, t, i, r, n] = this._source.points();
                        this._cdRetracement = Math.round(1e3 * Math.abs((n.price - r.price) / (r.price - i.price))) / 1e3, this._xdRetracement = Math.round(1e3 * Math.abs((n.price - t.price) / (t.price - e.price))) / 1e3
                    }
                }
            }
        },
        547517: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ABCDPaneView: () => p
            });
            var r = i(631586),
                n = i(28035),
                s = i(951512),
                a = i(296266),
                o = i(544445),
                l = i(739665),
                d = i(530513),
                h = i(858063),
                c = i(233330),
                u = i(623331);
            class p extends c.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._numericFormatter = new s.NumericFormatter, this._abRetracementTrend = new a.TrendLineRenderer, this._cdRetracementTrend = new a.TrendLineRenderer, this._polylineRenderer = new d.PolygonRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._abLabelRenderer = new o.TextRenderer, this._cdLabelRenderer = new o.TextRenderer, this._textRendererALabel = new o.TextRenderer, this._textRendererBLabel = new o.TextRenderer, this._textRendererCLabel = new o.TextRenderer, this._textRendererDLabel = new o.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._points.length < 2) return void(this._renderer = null);
                    const e = this._source.properties().childs(),
                        t = new n.CompositeRenderer,
                        i = (t, i) => ({
                            points: [t],
                            text: i,
                            color: e.textcolor.value(),
                            vertAlign: "middle",
                            horzAlign: "center",
                            font: u.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: e.bold && e.bold.value(),
                            italic: e.italic && e.italic.value(),
                            fontsize: e.fontsize.value(),
                            backgroundColor: e.color.value(),
                            backgroundRoundRect: 4
                        }),
                        s = (t, i) => ({
                            points: [t, i],
                            color: e.color.value(),
                            linewidth: e.linewidth.value(),
                            linestyle: r.LINESTYLE_DOTTED,
                            extendleft: !1,
                            extendright: !1,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal
                        }),
                        [a, o, d, h] = this._points,
                        c = {
                            points: this._points,
                            color: e.color.value(),
                            linewidth: e.linewidth.value(),
                            linestyle: r.LINESTYLE_SOLID,
                            fillBackground: !1,
                            filled: !1,
                            backcolor: "rgba(0, 0, 0, 0)"
                        };
                    this._polylineRenderer.setData(c), t.append(this._polylineRenderer);
                    const p = i(a, "A");
                    o.y > a.y ? (p.vertAlign = "bottom", p.offsetY = 5) : (p.vertAlign = "top", p.offsetY = 5), this._textRendererALabel.setData(p), t.append(this._textRendererALabel);
                    const _ = i(o, "B");
                    if (o.y < a.y ? (_.vertAlign = "bottom", _.offsetY = 5) : (_.vertAlign = "top", _.offsetY = 5), this._textRendererBLabel.setData(_), t.append(this._textRendererBLabel),
                        this._points.length > 2) {
                        const e = i(d, "C");
                        d.y < o.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._textRendererCLabel.setData(e), t.append(this._textRendererCLabel)
                    }
                    if (this._points.length > 3) {
                        const e = i(h, "D");
                        h.y < d.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._textRendererDLabel.setData(e), t.append(this._textRendererDLabel)
                    }
                    if (this._points.length >= 3) {
                        this._abRetracementTrend.setData(s(a, d)), t.append(this._abRetracementTrend);
                        const e = a.add(d).scaled(.5),
                            [r, n, o] = this._source.points(),
                            l = Math.round(1e3 * Math.abs((o.price - n.price) / (n.price - r.price))) / 1e3,
                            h = i(e, this._numericFormatter.format(l));
                        this._abLabelRenderer.setData(h), t.append(this._abLabelRenderer)
                    }
                    if (this._points.length >= 4) {
                        this._cdRetracementTrend.setData(s(o, h)), t.append(this._cdRetracementTrend);
                        const e = o.add(h).scaled(.5),
                            [, r, n, a] = this._source.points(),
                            l = Math.round(1e3 * Math.abs((a.price - n.price) / (n.price - r.price))) / 1e3,
                            d = i(e, this._numericFormatter.format(l));
                        this._cdLabelRenderer.setData(d), t.append(this._cdLabelRenderer)
                    }
                    this.addAnchors(t), this._renderer = t
                }
            }
        },
        764091: (e, t, i) => {
            "use strict";
            i.d(t, {
                AlertableLineSourcePaneView: () => a
            });
            var r = i(823757),
                n = i(831699),
                s = i(233330);
            class a extends s.LineSourcePaneView {
                _addAlertRenderer(e, t) {
                    const i = this._getAlertRenderer(t);
                    null !== i && e.append(i)
                }
                _getAlertRenderer(e, t = this._source.properties().linecolor.value(), i) {
                    return window.TradingView.printing || this._model.readOnly() || this._model.isInReplay() || !this._source.hasAlert.value() ? null : new n.PaneRendererClockIcon({
                        points: e,
                        color: this._source.getAlertIsActive() ? t : r.Constants.DrawingIconColor
                    })
                }
            }
        },
        165419: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ArcPaneView: () => _
            });
            var r = i(204652),
                n = i(86441),
                s = i(625422),
                a = i(854905),
                o = i(28035),
                l = i(233330),
                d = i(114123),
                h = i(858063),
                c = i(904244),
                u = i(837291);
            class p extends c.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = { ...e,
                        angleFrom: 0,
                        angleTo: Math.PI,
                        clockwise: !1
                    }
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 3) return null;
                    const t = (0, u.interactionTolerance)().curve,
                        i = this._data.points[0],
                        a = this._data.points[1];
                    let o = this._data.points[2],
                        l = (0, r.distanceToLine)(i, a, o).distance;
                    if (l < 1) return l = (0, r.distanceToLine)(i, a, e).distance, l < t ? new h.HitTestResult(h.HitTestResult.MOVEPOINT) : null;
                    const d = a.subtract(i),
                        c = d.length(),
                        p = i.add(a).scaled(.5);
                    let _ = o.subtract(p).normalized();
                    o = p.add(_.scaled(l));
                    const g = d.x / c,
                        f = d.y / c;
                    let m = Math.acos(g);
                    f < 0 && (m = -m);
                    let v = (0, s.translationMatrix)(-i.x, -i.y);
                    e = (0, s.transformPoint)(v, e), v = (0, s.rotationMatrix)(-m), e = (0, s.transformPoint)(v, e), _ = (0, s.transformPoint)(v, _);
                    const x = 1 - Math.sqrt(3) / 2;
                    if (v = (0, s.scalingMatrix)(1, c * x / l), e = (0, s.transformPoint)(v, e), _ = (0, s.transformPoint)(v, _), e.y * _.y < 0) return null;
                    let w;
                    w = e.y < 0 ? new n.Point(.5 * c, c * Math.sqrt(3) / 2) : new n.Point(.5 * c, -c * Math.sqrt(3) / 2);
                    const R = e.subtract(w).length();
                    return Math.abs(R - c) <= t ? new h.HitTestResult(h.HitTestResult.MOVEPOINT) : null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 2) return;
                    const t = e.context,
                        i = this._data.points[0],
                        a = this._data.points[1];
                    if (this._data.points.length < 3) return t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(a.x, a.y), void t.stroke();
                    let o = this._data.points[2];
                    const l = (0, r.distanceToLine)(i, a, o).distance;
                    if (l < 1) return t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(a.x, a.y), void t.stroke();
                    const h = a.subtract(i),
                        c = i.add(a).scaled(.5),
                        u = new n.Point(-h.y, h.x).normalized();
                    o = c.add(u.scaled(l)), t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth;
                    const p = h.length(),
                        _ = h.x / p,
                        g = h.y / p;
                    let f = Math.acos(_);
                    g < 0 && (f = -f);
                    let m = this._data.points[2],
                        v = (0, s.translationMatrix)(-c.x, -c.y);
                    m = (0, s.transformPoint)(v, m), v = (0, s.rotationMatrix)(-f), m = (0, s.transformPoint)(v, m), v = (0, s.scalingMatrix)(1, p / (2 * l)), m = (0, s.transformPoint)(v, m), m.y < 0 ? this._data.clockwise = !0 : this._data.clockwise = !1, t.save(), t.beginPath(), t.translate(i.x, i.y), t.rotate(f);
                    const x = 1 - Math.sqrt(3) / 2;
                    t.scale(1, l / (p * x)), this._data.clockwise ? t.arc(.5 * p, p * Math.sqrt(3) / 2, p, -2 * Math.PI / 3, -Math.PI / 3, !1) : t.arc(.5 * p, -p * Math.sqrt(3) / 2, p, Math.PI / 3, 2 * Math.PI / 3, !1), t.restore(), t.stroke(), this._data.fillBackground && (t.fillStyle = (0, d.generateColor)(this._data.backcolor, this._data.transparency), t.fill())
                }
            }
            class _ extends l.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._arcRenderer = new p, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, 0 === this._points.length) return;
                    const e = this._source.properties().childs(),
                        t = {
                            points: this._points,
                            color: e.color.value(),
                            linewidth: e.linewidth.value(),
                            backcolor: e.backgroundColor.value(),
                            fillBackground: e.fillBackground.value(),
                            transparency: e.transparency.value()
                        };
                    this._arcRenderer.setData(t);
                    const i = new o.CompositeRenderer;
                    this._renderer = i, i.append(this._arcRenderer);
                    const d = [],
                        h = t.points[0],
                        c = new n.Point(h.x, h.y);
                    if (c.data = 0, d.push(c), 1 === t.points.length) return;
                    const u = t.points[1],
                        p = new n.Point(u.x, u.y);
                    if (p.data = 1, 2 === t.points.length) return void this.addAnchors(i);
                    d.push(p);
                    let _ = t.points[2];
                    const g = (0, r.distanceToLine)(h, u, _).distance,
                        f = u.subtract(h),
                        m = h.add(u).scaled(.5),
                        v = new n.Point(-f.y, f.x).normalized();
                    _ = m.add(v.scaled(g));
                    const x = m.add(v.scaled(-g)),
                        w = f.length(),
                        R = f.x / w,
                        y = f.y / w;
                    let T = Math.acos(R);
                    y < 0 && (T = -T);
                    let b = t.points[2],
                        P = (0, s.translationMatrix)(-m.x, -m.y);
                    b = (0, s.transformPoint)(P, b), P = (0, s.rotationMatrix)(-T), b = (0, s.transformPoint)(P, b), P = (0, s.scalingMatrix)(1, w / (2 * g)), b = (0, s.transformPoint)(P, b);
                    const L = b.y >= 0 ? new n.Point(_.x, _.y) : new n.Point(x.x, x.y);
                    L.data = 2, d.push(L);
                    const S = [a.PaneCursorType.Default, a.PaneCursorType.Default, (0, l.thirdPointCursorType)(h, u)];
                    i.append(this.createLineAnchor({
                        points: d,
                        pointsCursorType: S
                    }, 0))
                }
            }
        },
        919552: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ArrowMarkPaneView: () => u
            });
            var r = i(623331),
                n = i(233330),
                s = i(28035),
                a = i(583110),
                o = i(544445),
                l = i(858063),
                d = i(934026),
                h = i(43329);
            class c {
                constructor() {
                    this._data = null
                }
                setData(e) {
                    this._data = e
                }
                draw(e, t) {
                    if (null !== this._data) {
                        switch (e.save(), e.fillStyle = this._data.color, this._data.direction) {
                            case "up":
                            case "down":
                                ! function(e, t, i, r) {
                                    const n = Math.max(1, Math.floor(r)) % 2 ? .5 : 0,
                                        s = "up" === i ? 1 : -1,
                                        a = s * Math.round(12 * r),
                                        o = (0, h.ceiledEven)(19.5 * r) / 2 + n,
                                        l = s * Math.round(10 * r),
                                        d = (0, h.ceiledEven)(10 * r) / 2 + n,
                                        c = Math.round(t.x * r) + n,
                                        u = Math.round(t.y * r);
                                    e.beginPath(), e.moveTo(c, u), e.lineTo(c + o, u + a), e.lineTo(c + d, u + a), e.lineTo(c + d, u + a + l), e.lineTo(c - d, u + a + l), e.lineTo(c - d, u + a), e.lineTo(c - o, u + a), e.moveTo(c, u), e.fill()
                                }(e, this._data.point, this._data.direction, t.pixelRatio);
                                break;
                            case "left":
                            case "right":
                                ! function(e, t, i, r) {
                                    const n = Math.max(1, Math.floor(r)) % 2 ? .5 : 0,
                                        s = "left" === i ? 1 : -1,
                                        a = s * Math.round(12 * r) + n,
                                        o = (0, h.ceiledEven)(19.5 * r) / 2 + n,
                                        l = s * Math.round(22 * r) + n,
                                        d = (0, h.ceiledEven)(10 * r) / 2 + n,
                                        c = Math.round(t.x * r) + n,
                                        u = Math.round(t.y * r) + n;
                                    e.beginPath(), e.moveTo(c, u), e.lineTo(c + a, u + o), e.lineTo(c + a, u + d), e.lineTo(c + l, u + d), e.lineTo(c + l, u - d), e.lineTo(c + a, u - d), e.lineTo(c + a, u - o), e.moveTo(c, u), e.fill()
                                }(e, this._data.point, this._data.direction, t.pixelRatio)
                        }
                        e.restore()
                    }
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    let t, i, r, n;
                    switch (this._data.direction) {
                        case "up":
                            t = this._data.point.x - 9.75, r = t + 19.5, i = this._data.point.y, n = i + 12 + 10;
                            break;
                        case "down":
                            t = this._data.point.x - 9.75, r = t + 19.5, n = this._data.point.y, i = n - 12 - 10;
                            break;
                        case "left":
                            t = this._data.point.x, r = t + 12 + 10, i = this._data.point.y - 9.75, n = i + 19.5;
                            break;
                        case "right":
                            r = this._data.point.x, t = r - 12 - 10, i = this._data.point.y - 9.75, n = i + 19.5
                    }
                    return e.x < t || e.x > r || e.y < i || e.y > n ? null : new l.HitTestResult(l.HitTestResult.MOVEPOINT)
                }
                doesIntersectWithBox(e) {
                    return null !== this._data && (0, d.pointInBox)(this._data.point, e)
                }
            }
            class u extends n.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._arrowMarkRenderer = new c, this._textRenderer = new o.TextRenderer, this._renderer = null, this._anchorsOffset = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, 1 !== this._points.length) return;
                    const e = this._getSource(),
                        t = e.properties().childs(),
                        i = this._getModel();
                    this._arrowMarkRenderer.setData({
                        point: this._points[0],
                        direction: e.direction(),
                        color: t.arrowColor.value()
                    }), this._renderer = new s.CompositeRenderer, this._renderer.append(this._arrowMarkRenderer), "" !== t.text.value() && t.showLabel.value() && (this._textRenderer.setData({
                        points: this._points,
                        font: r.CHART_FONT_FAMILY,
                        bold: t.bold.value(),
                        italic: t.italic.value(),
                        fontSize: t.fontsize.value(),
                        text: t.text.value(),
                        color: t.color.value(),
                        ...e.textAlignParams()
                    }), this._renderer.append(this._textRenderer));
                    const n = [this._anchorsOffset ? this._points[0].add(this._anchorsOffset) : this._points[0].clone()];
                    this._renderer.append(new a.SelectionRenderer({
                        points: n,
                        bgColors: this._lineAnchorColors(n),
                        visible: this.areAnchorsVisible(),
                        barSpacing: i.timeScale().barSpacing(),
                        hittestResult: l.HitTestResult.MOVEPOINT
                    }))
                }
            }
        },
        316376: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ArrowMarkerPaneView: () => _
            });
            var r = i(233330),
                n = i(28035),
                s = i(544445),
                a = i(86441),
                o = i(904244),
                l = i(858063),
                d = i(837291);

            function h(e) {
                if (e < 92) return 18;
                let t = .25 * e;
                return t = Math.min(t, 106), t = Math.max(t, 18),
                    t = Math.min(t, .9 * e), t
            }
            class c extends o.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (this._data.points.length < 2) return null;
                    let t = this._data.points[0],
                        i = this._data.points[1].subtract(t);
                    const r = i.length();
                    i = this._data.points[1].subtract(this._data.points[0]);
                    i.length() < 22 && (t = this._data.points[1].addScaled(i.normalized(), -22), i = this._data.points[1].subtract(t));
                    const n = e.subtract(t),
                        s = i.dotProduct(n) / r;
                    if (s < 0 || s > r) return null;
                    const a = i.scaled(1 / r),
                        o = t.addScaled(a, s),
                        h = e.subtract(o),
                        c = (0, d.interactionTolerance)().line,
                        u = this._hittestGeometry(r);
                    for (let e = u.length - 2; e >= 0; e--) {
                        const t = u[e];
                        if (s >= t.x) {
                            const i = u[e + 1],
                                r = i.x - t.x,
                                n = i.y - t.y,
                                a = (s - t.x) / r,
                                o = t.y + n * a;
                            return h.length() <= o + c ? new l.HitTestResult(l.HitTestResult.MOVEPOINT) : null
                        }
                    }
                    return h.length() < 3 ? new l.HitTestResult(l.HitTestResult.MOVEPOINT) : null
                }
                _drawImpl(e) {
                    if (this._data.points.length < 2) return;
                    const t = e.context;
                    t.fillStyle = this._data.color, t.strokeStyle = this._data.color, t.lineJoin = "round", t.lineCap = "round";
                    let i = this._data.points[1].subtract(this._data.points[0]);
                    const r = i.length();
                    let n = this._data.points[0];
                    r < 22 && (n = this._data.points[1].addScaled(i.normalized(), -22), i = this._data.points[1].subtract(n));
                    const s = new a.Point(i.y, -i.x).normalized(),
                        o = this._arrowGeometry(i.length()),
                        l = i.normalized();
                    t.lineWidth = function(e) {
                        let t = Math.round(.02 * e);
                        return t = Math.min(t, 5), t = Math.max(t, 2), t
                    }(i.length()), t.beginPath(), t.moveTo(n.x, n.y);
                    for (let e = 0; e < o.length; e++) {
                        const i = o[e],
                            r = n.addScaled(l, i.x).addScaled(s, i.y);
                        t.lineTo(r.x, r.y)
                    }
                    t.lineTo(this._data.points[1].x, this._data.points[1].y);
                    for (let e = o.length - 1; e >= 0; e--) {
                        const i = o[e],
                            r = n.addScaled(l, i.x).addScaled(s, -i.y);
                        t.lineTo(r.x, r.y)
                    }
                    t.lineTo(n.x, n.y), t.stroke(), t.fill()
                }
                _arrowGeometry(e) {
                    const t = h(e),
                        i = [],
                        r = e >= 35 ? .1 : 0;
                    return i.push(new a.Point(0, 0)), i.push(new a.Point(e - t + t * r, 1.22 * t / 4)), i.push(new a.Point(e - t, 1.22 * t / 2)), i.push(new a.Point(e, 0)), i
                }
                _hittestGeometry(e) {
                    const t = h(e),
                        i = [];
                    return i.push(new a.Point(0, 0)), i.push(new a.Point(e - t, 1.22 * t / 4)), i.push(new a.Point(e - t, 1.22 * t / 2)), i.push(new a.Point(e, 0)), i
                }
            }
            var u = i(667142),
                p = i(623331);
            class _ extends r.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._textRendererData = {
                        text: "",
                        color: "",
                        vertAlign: "middle",
                        horzAlign: "center",
                        font: "",
                        offsetX: 10,
                        offsetY: 10,
                        points: [],
                        forceTextAlign: !0
                    }, this._arrowRendererData = {
                        points: [],
                        color: ""
                    }, this._ellipseRendererData = {
                        color: "",
                        linewidth: 0,
                        points: [],
                        fillBackground: !0,
                        backcolor: "",
                        noHitTestOnBackground: !0
                    }, this._drawAsCircle = !1, this._textRenderer = new s.TextRenderer(this._textRendererData), this._arrowRenderer = new c(this._arrowRendererData), this._ellipseRenderer = new u.EllipseRendererSimple(this._ellipseRendererData)
                }
                renderer(e, t) {
                    this._invalidated && this._updateImpl();
                    const i = new n.CompositeRenderer;
                    this._drawAsCircle ? i.append(this._ellipseRenderer) : i.append(this._arrowRenderer);
                    const r = this._getSource().properties().childs();
                    return this._textRendererData.points && this._textRendererData.points.length > 0 && r.showLabel.value() && (this._textRenderer.setData({ ...this._textRendererData
                        }),
                        i.append(this._textRenderer)), this.addAnchors(i), i
                }
                _updateImpl() {
                    super._updateImpl();
                    const e = this._getPoints(),
                        t = this._getSource().properties().childs();
                    if (this._arrowRendererData.color = t.backgroundColor.value(), this._arrowRendererData.points = e, this._textRendererData.text = t.text.value(), this._textRendererData.color = t.textColor.value(), this._textRendererData.font = p.CHART_FONT_FAMILY, this._textRendererData.bold = t.bold.value(), this._textRendererData.italic = t.italic.value(), this._textRendererData.fontsize = t.fontsize.value(), e.length >= 2) {
                        const i = this._getSource().points(),
                            r = i[0].index - i[1].index,
                            n = i[0].price - i[1].price;
                        if (this._drawAsCircle = 0 === r && Math.abs(n) < 1e-8, this._textRendererData.points = [e[0]], this._drawAsCircle) {
                            this._textRendererData.horzAlign = "left", this._textRendererData.vertAlign = "middle";
                            const i = new a.Point(e[0].x - 9, e[0].y - 9),
                                r = new a.Point(e[0].x + 9, e[0].y + 9);
                            this._ellipseRendererData.points = [i, r], this._ellipseRendererData.backcolor = t.backgroundColor.value(), this._ellipseRendererData.color = t.backgroundColor.value()
                        } else {
                            const t = e[1].subtract(e[0]);
                            Math.abs(t.x) >= Math.abs(t.y) ? (e[1].x > e[0].x ? this._textRendererData.horzAlign = "right" : this._textRendererData.horzAlign = "left", this._textRendererData.vertAlign = "middle") : (e[1].y > e[0].y ? this._textRendererData.vertAlign = "bottom" : this._textRendererData.vertAlign = "top", this._textRendererData.horzAlign = "center")
                        }
                    }
                }
            }
        },
        993863: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                BalloonPaneView: () => f
            });
            var r = i(538708),
                n = i(114123),
                s = i(623331),
                a = i(233330),
                o = i(86441),
                l = i(934026),
                d = i(768038),
                h = i(741341),
                c = i(904244),
                u = i(858063);
            class p extends c.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._geometryCache = {
                        innerHeight: NaN,
                        textHorizontalPadding: NaN,
                        innerWidth: NaN,
                        paddingLeft: NaN
                    }, this._geomertryCacheInvalidated = !0, this._data = null
                }
                setData(e) {
                    this._data = e, this._geomertryCacheInvalidated = !0
                }
                hitTest(e, t) {
                    if (null === this._data || 0 === this._data.points.length) return null;
                    const i = this._data.points[0].x - (this._geometryCache.paddingLeft + 20),
                        r = this._data.points[0].y - (this._geometryCache.innerHeight + 9),
                        n = (0, o.box)(new o.Point(i, r), new o.Point(i + this._geometryCache.innerWidth, r + this._geometryCache.innerHeight));
                    return (0, l.pointInBox)(e, n) ? new u.HitTestResult(u.HitTestResult.MOVEPOINT, {
                        areaName: u.AreaName.Text
                    }) : null
                }
                _drawImpl(e) {
                    if (null === this._data || 0 === this._data.points.length) return;
                    const t = e.context;
                    t.font = this._data.font;
                    const i = this._measureInfo(t, this._data.label, this._data.fontSize),
                        {
                            paddingLeft: r,
                            innerHeight: n,
                            innerWidth: s,
                            textHorizontalPadding: a
                        } = i;
                    t.textAlign = (0, d.isRtl)() ? "right" : "left";
                    const o = this._data.points[0].x - (r + 20),
                        l = this._data.points[0].y - (n + 9);
                    t.translate(o, l), t.beginPath(), t.moveTo(24, n), t.lineTo(15, n), t.arcTo(-1e3, 0, 1e3, 0, n / 2), t.lineTo(s - 15, 0), t.arcTo(1e3, n, -1e3, n, n / 2), t.lineTo(33, n), t.quadraticCurveTo(33, n + 4, 35, n + 9), t.quadraticCurveTo(27, n + 6, 24, n), t.fillStyle = this._data.backgroundColor, t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "middle", t.fillStyle = this._data.color, t.fillText(this._data.label, r + a, n / 2)
                }
                _measureInfo(e, t, i) {
                    if (this._geomertryCacheInvalidated) {
                        const r = e.measureText(t),
                            n = i,
                            s = 15,
                            a = Math.round(n / 1.3),
                            o = r.width + 2 * s,
                            l = n + 2 * a,
                            d = (0, h.calcTextHorizontalShift)(e, r.width);
                        this._geometryCache = {
                            paddingLeft: s,
                            innerWidth: o,
                            innerHeight: l,
                            textHorizontalPadding: d
                        }, this._geomertryCacheInvalidated = !1
                    }
                    return this._geometryCache
                }
            }
            var _ = i(28035),
                g = i(583110);
            class f extends a.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._balloonRenderer = new p, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl(e, t) {
                    super._updateImpl(e, t);
                    const i = this._source.properties().childs(),
                        a = {
                            points: this._points,
                            color: i.color.value(),
                            borderColor: i.borderColor.value(),
                            backgroundColor: (0, n.generateColor)(i.backgroundColor.value(), i.transparency.value()),
                            font: (0, r.makeFont)(i.fontsize.value(), s.CHART_FONT_FAMILY),
                            fontSize: i.fontsize.value(),
                            label: i.text.value()
                        };
                    if (this._balloonRenderer.setData(a), 1 === a.points.length) {
                        const e = new _.CompositeRenderer;
                        return e.append(this._balloonRenderer), e.append(new g.SelectionRenderer({
                            points: a.points,
                            bgColors: this._lineAnchorColors(a.points),
                            visible: this.areAnchorsVisible(),
                            barSpacing: this._model.timeScale().barSpacing(),
                            hittestResult: u.HitTestResult.MOVEPOINT
                        })), void(this._renderer = e)
                    }
                    this._renderer = this._balloonRenderer
                }
            }
        },
        244990: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                BarsPatternPaneView: () => v
            });
            var r = i(86441),
                n = i(314967),
                s = i(631586),
                a = i(114123),
                o = i(858063),
                l = i(28035),
                d = i(739665),
                h = i(943498),
                c = i(603823),
                u = i(296266),
                p = i(274131),
                _ = i(233330),
                g = i(969334);
            const f = n.colorsPalette["color-cold-gray-500"],
                m = {
                    [g.LineToolBarsPatternMode.Bars]: e => [e[2], e[3]],
                    [g.LineToolBarsPatternMode.Line]: e => e[4],
                    [g.LineToolBarsPatternMode.OpenClose]: e => [e[1], e[4]],
                    [g.LineToolBarsPatternMode.LineOpen]: e => e[1],
                    [g.LineToolBarsPatternMode.LineHigh]: e => e[2],
                    [g.LineToolBarsPatternMode.LineLow]: e => e[3],
                    [g.LineToolBarsPatternMode.LineHL2]: e => (e[2] + e[3]) / 2
                };
            class v extends _.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._vertLineRenderer1 = new p.VerticalLineRenderer, this._vertLineRenderer2 = new p.VerticalLineRenderer, this._medianRenderer = new u.TrendLineRenderer, this._renderer = null
                }
                renderer() {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e, t;
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const i = this._source.priceScale(),
                        n = null !== (t = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;
                    if (!i || i.isEmpty() || null === n) return;
                    const u = this._source.points(),
                        p = this._source.pattern(),
                        _ = p.length,
                        v = new l.CompositeRenderer;
                    if (_ > 0 && 2 === u.length) {
                        const e = this._source.properties().childs(),
                            t = e.mode.value(),
                            l = e.color.value(),
                            d = Math.abs((this._points[0].x - this._points[1].x) / (_ - 1)),
                            f = this._source.getScale(),
                            x = e => i.priceToCoordinate(e, n) * f,
                            [{
                                index: w
                            }, {
                                index: R
                            }] = u,
                            y = w < R ? this._points[0] : this._points[1],
                            T = y.x,
                            b = y.y - x(this._source.firstPatternPrice());
                        if (t === g.LineToolBarsPatternMode.Bars || t === g.LineToolBarsPatternMode.OpenClose) {
                            const e = m[t];
                            for (let t = 0; t < _; t++) {
                                const i = Math.round(T + t * d + .5),
                                    n = e(p[t]).map(((e, t) => new r.Point(i + (2 * t - 1), Math.round(x(e)) + b))),
                                    s = new c.RectangleRenderer;
                                s.setData({
                                    points: n,
                                    color: l,
                                    backcolor: l,
                                    linewidth: 1,
                                    fillBackground: !0,
                                    transparency: 10,
                                    extendLeft: !1,
                                    extendRight: !1
                                }), v.append(s)
                            }
                            v.append(this.createLineAnchor({
                                points: this._points
                            }, 0))
                        } else {
                            const e = m[t],
                                i = p.map(((t, i) => new r.Point(T + i * d, x(e(t)) + b)));
                            v.append(new h.PaneRendererLine({
                                barSpacing: d,
                                items: i,
                                lineColor: (0, a.generateColor)(l, 10),
                                lineStyle: s.LINESTYLE_SOLID,
                                lineWidth: 2,
                                hittest: new o.HitTestResult(o.HitTestResult.MOVEPOINT),
                                simpleMode: !0,
                                withMarkers: !1
                            })), v.append(this.createLineAnchor({
                                points: this._points
                            }, 1))
                        }
                    } else this._vertLineRenderer1.setData({
                        x: this._points[0].x,
                        color: f,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID
                    }), v.append(this._vertLineRenderer1), this._vertLineRenderer2.setData({
                        x: this._points[1].x,
                        color: f,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID
                    }), v.append(this._vertLineRenderer2), this._medianRenderer.setData({
                        points: this._points,
                        color: f,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: d.LineEnd.Normal,
                        rightend: d.LineEnd.Normal
                    }), v.append(this._medianRenderer);
                    this._renderer = v
                }
            }
        },
        997222: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                BezierCubicPaneView: () => m
            });
            var r = i(114123),
                n = i(233330),
                s = i(904244),
                a = i(858063),
                o = i(269571),
                l = i(296266),
                d = i(739665),
                h = i(683877),
                c = i(837291),
                u = i(914679);
            class p extends s.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e || null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    const i = this._data;
                    if (null === i) return null;
                    if (4 === i.points.length) {
                        const t = (0, c.interactionTolerance)().curve,
                            [r, n, s, l] = i.points,
                            d = l.subtract(r),
                            u = s.subtract(d.scaled(.25)),
                            p = s.add(d.scaled(.25)),
                            _ = n.subtract(s),
                            g = l.subtract(_.scaled(.25)),
                            f = l.add(_.scaled(.25));
                        if ((0, o.quadroBezierHitTest)(s, r, u, e, t) || (0, o.cubicBezierHitTest)(s, l, p, g, e, t) || (0, o.quadroBezierHitTest)(l, n, f, e, t)) return new a.HitTestResult(a.HitTestResult.MOVEPOINT);
                        let m = (0, h.hitTestExtendedPoints)(e, t, i.extendLeftPoints);
                        return null === m && (m = (0, h.hitTestExtendedPoints)(e, t, i.extendRightPoints)), m
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    t.lineCap = "round", t.strokeStyle = this._data.color, t.lineWidth = this._data.lineWidth, (0, u.setLineStyle)(t, this._data.lineStyle);
                    const i = this._data.points[0],
                        r = this._data.points[1];
                    if (2 === this._data.points.length) t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(r.x, r.y), t.stroke(), this._data.leftEnd === d.LineEnd.Arrow && (0, l.drawArrow)(r, i, t, t.lineWidth, 1), this._data.rightEnd === d.LineEnd.Arrow && (0, l.drawArrow)(i, r, t, t.lineWidth, 1);
                    else {
                        const e = this._data.points[2],
                            n = this._data.points[3],
                            s = n.subtract(i),
                            a = e.subtract(s.scaled(.25)),
                            o = e.add(s.scaled(.25)),
                            c = r.subtract(e),
                            u = n.subtract(c.scaled(.25)),
                            p = n.add(c.scaled(.25));
                        this._data.fillBack && this._data.points.length > 2 && (t.fillStyle = this._data.backColor, t.beginPath(), t.moveTo(i.x, i.y), t.quadraticCurveTo(a.x, a.y, e.x, e.y), t.bezierCurveTo(o.x, o.y, u.x, u.y, n.x, n.y), t.quadraticCurveTo(p.x, p.y, r.x, r.y), t.fill()), t.beginPath(), (0, h.buildExtendedSegments)(t, this._data.extendLeftPoints), t.moveTo(i.x, i.y),
                            t.quadraticCurveTo(a.x, a.y, e.x, e.y), t.bezierCurveTo(o.x, o.y, u.x, u.y, n.x, n.y), t.quadraticCurveTo(p.x, p.y, r.x, r.y), (0, h.buildExtendedSegments)(t, this._data.extendRightPoints), t.stroke(), this._data.leftEnd === d.LineEnd.Arrow && (0, l.drawArrow)(a, i, t, t.lineWidth, 1), this._data.rightEnd === d.LineEnd.Arrow && (0, l.drawArrow)(p, r, t, t.lineWidth, 1)
                    }
                }
            }
            var _ = i(28035),
                g = i(734350),
                f = i(650151);
            class m extends n.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._bezierCubicRenderer = new p, this._renderer = null, this._extendedSegmentLeftCache = null, this._extendedSegmentRightCache = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    if (super._updateImpl(e, t), this._renderer = null, this._points.length < 2) return;
                    const i = this._source.properties().childs();
                    let n = [],
                        s = [];
                    if (4 === this._source.points().length) {
                        const r = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[0])),
                            a = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[1])),
                            o = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[2])),
                            l = (0, f.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[3])),
                            d = l.subtract(r),
                            h = o.subtract(d.scaled(.25)),
                            c = a.subtract(o),
                            u = l.add(c.scaled(.25));
                        i.extendLeft.value() && (n = this._extendSegmentLeft(o, r, h, t, e)), i.extendRight.value() && (s = this._extendSegmentRight(l, a, u, t, e))
                    }
                    const a = this._points.slice(),
                        o = this._source.controlPoints();
                    null !== o && (a.push((0, f.ensureNotNull)(this._source.pointToScreenPoint(o[0]))), a.push((0, f.ensureNotNull)(this._source.pointToScreenPoint(o[1]))));
                    const l = {
                        points: a,
                        color: i.linecolor.value(),
                        lineWidth: i.linewidth.value(),
                        lineStyle: i.linestyle.value(),
                        leftEnd: i.leftEnd.value(),
                        rightEnd: i.rightEnd.value(),
                        fillBack: i.fillBackground.value(),
                        backColor: (0, r.generateColor)(i.backgroundColor.value(), i.transparency.value()),
                        extendLeftPoints: n,
                        extendRightPoints: s
                    };
                    this._bezierCubicRenderer.setData(l);
                    const d = new _.CompositeRenderer;
                    d.append(this._bezierCubicRenderer), this.addAnchors(d), this._renderer = d
                }
                _extendSegmentLeft(e, t, i, r, n) {
                    return (0, g.cacheIsValid)(this._extendedSegmentLeftCache, e, t, i, r, n) || (this._extendedSegmentLeftCache = {
                        p1: e,
                        p2: t,
                        p3: i,
                        width: r,
                        height: n,
                        segment: (0, o.extendQuadroBezier)(e, t, i, r, n)
                    }), (0, f.ensureNotNull)(this._extendedSegmentLeftCache).segment
                }
                _extendSegmentRight(e, t, i, r, n) {
                    return (0, g.cacheIsValid)(this._extendedSegmentRightCache, e, t, i, r, n) || (this._extendedSegmentRightCache = {
                        p1: e,
                        p2: t,
                        p3: i,
                        width: r,
                        height: n,
                        segment: (0, o.extendQuadroBezier)(e, t, i, r, n)
                    }), (0, f.ensureNotNull)(this._extendedSegmentRightCache).segment
                }
            }
        },
        734350: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                cacheIsValid: () => d,
                BezierQuadroPaneView: () => h
            });
            var r = i(650151),
                n = i(114123),
                s = i(233330),
                a = i(28035),
                o = i(269571),
                l = i(683877);

            function d(e, t, i, r, n, s) {
                return null !== e && e.p1.x === t.x && e.p1.y === t.y && e.p2.x === i.x && e.p2.y === i.y && e.p3.x === r.x && e.p3.y === r.y && e.width === n && e.height === s
            }
            class h extends s.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._bezierQuadroRenderer = new l.BezierQuadroRenderer, this._renderer = null,
                        this._extendedSegmentLeftCache = null, this._extendedSegmentRightCache = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    if (super._updateImpl(e, t), this._renderer = null, this._points.length < 2) return;
                    const i = this._source.properties().childs();
                    let s = [],
                        o = [];
                    if (3 === this._source.points().length) {
                        const n = (0, r.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[0])),
                            a = (0, r.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[1])),
                            l = (0, r.ensureNotNull)(this._source.pointToScreenPoint(this._source.points()[2])),
                            d = a.subtract(n),
                            h = l.subtract(d.scaled(.25)),
                            c = l.add(d.scaled(.25));
                        i.extendLeft.value() && (s = this._extendSegmentLeft(l, n, h, t, e)), i.extendRight.value() && (o = this._extendSegmentRight(l, a, c, t, e))
                    }
                    const l = this._points.slice(),
                        d = this._source.controlPoint();
                    null !== d && l.push((0, r.ensureNotNull)(this._source.pointToScreenPoint(d)));
                    const h = {
                        points: l,
                        color: i.linecolor.value(),
                        lineWidth: i.linewidth.value(),
                        lineStyle: i.linestyle.value(),
                        leftEnd: i.leftEnd.value(),
                        rightEnd: i.rightEnd.value(),
                        fillBack: i.fillBackground.value(),
                        backColor: (0, n.generateColor)(i.backgroundColor.value(), i.transparency.value()),
                        extendLeftSegments: s,
                        extendRightSegments: o
                    };
                    this._bezierQuadroRenderer.setData(h);
                    const c = new a.CompositeRenderer;
                    c.append(this._bezierQuadroRenderer), this.addAnchors(c), this._renderer = c
                }
                _extendSegmentLeft(e, t, i, n, s) {
                    return d(this._extendedSegmentLeftCache, e, t, i, n, s) || (this._extendedSegmentLeftCache = {
                        p1: e,
                        p2: t,
                        p3: i,
                        width: n,
                        height: s,
                        segment: (0, o.extendQuadroBezier)(e, t, i, n, s)
                    }), (0, r.ensureNotNull)(this._extendedSegmentLeftCache).segment
                }
                _extendSegmentRight(e, t, i, n, s) {
                    return d(this._extendedSegmentRightCache, e, t, i, n, s) || (this._extendedSegmentRightCache = {
                        p1: e,
                        p2: t,
                        p3: i,
                        width: n,
                        height: s,
                        segment: (0, o.extendQuadroBezier)(e, t, i, n, s)
                    }), (0, r.ensureNotNull)(this._extendedSegmentRightCache).segment
                }
            }
        },
        683877: (e, t, i) => {
            "use strict";
            i.d(t, {
                hitTestExtendedPoints: () => c,
                buildExtendedSegments: () => u,
                BezierQuadroRenderer: () => p
            });
            var r = i(204652),
                n = i(904244),
                s = i(739665),
                a = i(858063),
                o = i(269571),
                l = i(296266),
                d = i(837291),
                h = i(914679);

            function c(e, t, i) {
                for (const n of i)
                    for (let i = 1; i < n.length; i++) {
                        const s = n[i - 1],
                            o = n[i];
                        if ((0, r.distanceToSegment)(s, o, e).distance < t) return new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                    }
                return null
            }

            function u(e, t) {
                for (let i = 0; i < t.length; i++) {
                    const r = t[i],
                        n = r[0];
                    e.moveTo(n.x, n.y);
                    for (let t = 1; t < r.length; t++) {
                        const i = r[t];
                        e.lineTo(i.x, i.y)
                    }
                }
            }
            class p extends n.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e || null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null !== this._data && 3 === this._data.points.length) {
                        const t = (0, d.interactionTolerance)().curve,
                            [i, r, n] = this._data.points,
                            s = r.subtract(i),
                            l = n.subtract(s.scaled(.25)),
                            h = n.add(s.scaled(.25));
                        if ((0, o.quadroBezierHitTest)(n, i, l, e, t) || (0, o.quadroBezierHitTest)(n, r, h, e, t)) return new a.HitTestResult(a.HitTestResult.MOVEPOINT);
                        let u = c(e, t, this._data.extendLeftSegments);
                        return null === u && (u = c(e, t, this._data.extendRightSegments)), u
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const [t, i, r] = this._data.points, n = e.context;
                    if (n.lineCap = "round", n.strokeStyle = this._data.color, n.lineWidth = this._data.lineWidth, (0, h.setLineStyle)(n, this._data.lineStyle), 2 === this._data.points.length) n.beginPath(), n.moveTo(t.x, t.y), n.lineTo(i.x, i.y), n.stroke();
                    else {
                        const e = i.subtract(t),
                            a = r.subtract(e.scaled(.25)),
                            o = r.add(e.scaled(.25));
                        this._data.fillBack && this._data.points.length > 2 && (n.fillStyle = this._data.backColor, n.beginPath(), n.moveTo(t.x, t.y), n.quadraticCurveTo(a.x, a.y, r.x, r.y), n.quadraticCurveTo(o.x, o.y, i.x, i.y), n.fill()), n.beginPath(), u(n, this._data.extendLeftSegments), n.moveTo(t.x, t.y), n.quadraticCurveTo(a.x, a.y, r.x, r.y), n.quadraticCurveTo(o.x, o.y, i.x, i.y), u(n, this._data.extendRightSegments), n.stroke(), this._data.leftEnd === s.LineEnd.Arrow && (0, l.drawArrow)(a, t, n, n.lineWidth, 1), this._data.rightEnd === s.LineEnd.Arrow && (0, l.drawArrow)(o, i, n, n.lineWidth, 1)
                    }
                }
            }
        },
        832376: (e, t, i) => {
            "use strict";
            i.d(t, {
                BrushBasePaneView: () => d
            });
            var r = i(86441),
                n = i(530513),
                s = i(583110),
                a = i(28035),
                o = i(858063),
                l = i(233330);
            class d extends l.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._polygonRenderer = new n.PolygonRenderer, this._renderer = new a.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl();
                    const e = Math.max(1, this._source.smooth()),
                        t = this._points;
                    if (0 === t.length) return void this._renderer.clear();
                    const i = [t[0]];
                    for (let r = 1; r < t.length; r++) {
                        const n = t[r].subtract(t[r - 1]),
                            s = n.length(),
                            a = Math.min(5, Math.floor(s / e)),
                            o = n.normalized().scaled(s / a);
                        for (let e = 0; e < a - 1; e++) i.push(t[r - 1].add(o.scaled(e)));
                        i.push(t[r])
                    }
                    this._points = this._smoothArray(i, e);
                    const r = this._createPolygonRendererData();
                    if (this._polygonRenderer.setData(r), this._renderer = new a.CompositeRenderer, this._renderer.append(this._polygonRenderer), this._source.finished()) {
                        const e = r.points.length;
                        if (e > 0) {
                            const t = 1 !== e ? [r.points[0], r.points[e - 1]] : [r.points[0]],
                                i = new s.SelectionRenderer({
                                    points: t,
                                    bgColors: this._lineAnchorColors(t),
                                    visible: this.areAnchorsVisible(),
                                    hittestResult: o.HitTestResult.REGULAR,
                                    barSpacing: this._getModel().timeScale().barSpacing()
                                });
                            this._renderer.append(i)
                        }
                    }
                }
                _smoothArray(e, t) {
                    if (1 === e.length) return e;
                    const i = new Array(e.length);
                    for (let n = 0; n < e.length; n++) {
                        let s = new r.Point(0, 0);
                        for (let i = 0; i < t; i++) {
                            const t = Math.max(n - i, 0),
                                r = Math.min(n + i, e.length - 1);
                            s = s.add(e[t]), s = s.add(e[r])
                        }
                        i[n] = s.scaled(.5 / t)
                    }
                    return i.push(e[e.length - 1]), i
                }
            }
        },
        378251: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                BrushPaneView: () => s
            });
            var r = i(631586),
                n = i(832376);
            class s extends n.BrushBasePaneView {
                _createPolygonRendererData() {
                    const e = this._source.properties().childs(),
                        t = {
                            points: this._points,
                            color: e.linecolor.value(),
                            linewidth: e.linewidth.value(),
                            linestyle: r.LINESTYLE_SOLID,
                            skipClosePath: !0,
                            leftend: e.leftEnd.value(),
                            rightend: e.rightEnd.value(),
                            filled: !1,
                            fillBackground: !1,
                            backcolor: e.backgroundColor.value()
                        };
                    return e.fillBackground.value() && this._model.lineBeingCreated() !== this._source && (t.filled = !0, t.fillBackground = !0, t.transparency = e.transparency.value()), t
                }
            }
        },
        979002: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CalloutPaneView: () => m
            });
            var r = i(86441),
                n = i(650151),
                s = i(538708),
                a = i(28035),
                o = i(623331),
                l = i(768038),
                d = i(114123),
                h = i(741341),
                c = i(904244),
                u = i(858063);
            class p extends c.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(), this._data = null, this._textSizeCache = {
                        totalHeight: NaN,
                        totalWidth: NaN
                    }
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 2) return null;
                    const t = this._data.points[0],
                        i = this._data.points[1];
                    if (t.subtract(e).length() < 3) return new u.HitTestResult(u.HitTestResult.CHANGEPOINT);
                    const r = i.x - this._textSizeCache.totalWidth / 2,
                        n = i.y - this._textSizeCache.totalHeight / 2;
                    return e.x >= r && e.x <= r + this._textSizeCache.totalWidth && e.y >= n && e.y <= n + this._textSizeCache.totalHeight ? new u.HitTestResult(u.HitTestResult.MOVEPOINT, {
                        areaName: u.AreaName.Text
                    }) : null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 2) return;
                    const t = this._data.points[0].clone(),
                        i = this._data.points[1].clone(),
                        r = e.context;
                    r.lineCap = "round", r.strokeStyle = this._data.bordercolor, r.lineWidth = this._data.linewidth, r.textBaseline = "bottom", r.font = this._data.textData.font;
                    const n = this._data.textData.fontSize * this._data.textData.lines.length,
                        s = this._data.textData.maxWidth,
                        a = s + 20,
                        o = n + 20;
                    this._textSizeCache.totalWidth = a, this._textSizeCache.totalHeight = o;
                    let c = i.x - a / 2,
                        u = i.y - o / 2,
                        p = 0;
                    const _ = s + 4 > 16,
                        g = n + 4 > 16;
                    r.textAlign = (0, l.isRtl)() ? "right" : "left";
                    const f = (0, h.calcTextHorizontalShift)(r, s);
                    t.x > c + a ? p = 20 : t.x > c && (p = 10), t.y > u + o ? p += 2 : t.y > u && (p += 1), r.translate(c, u), t.x -= c, t.y -= u, i.x -= c, i.y -= u, r.beginPath(), r.moveTo(8, 0), 10 === p ? _ ? (r.lineTo(i.x - 8, 0), r.lineTo(t.x, t.y), r.lineTo(i.x + 8, 0), r.lineTo(a - 8, 0)) : (r.lineTo(t.x, t.y), r.lineTo(a - 8, 0)) : r.lineTo(a - 8, 0), 20 === p ? (r.lineTo(t.x, t.y), r.lineTo(a, 8)) : r.arcTo(a, 0, a, 8, 8), 21 === p ? g ? (r.lineTo(a, i.y - 8), r.lineTo(t.x, t.y), r.lineTo(a, i.y + 8), r.lineTo(a, o - 8)) : (r.lineTo(t.x, t.y), r.lineTo(a, o - 8)) : r.lineTo(a, o - 8), 22 === p ? (r.lineTo(t.x, t.y), r.lineTo(a - 8, o)) : r.arcTo(a, o, a - 8, o, 8), 12 === p ? _ ? (r.lineTo(i.x + 8, o), r.lineTo(t.x, t.y), r.lineTo(i.x - 8, o), r.lineTo(8, o)) : (r.lineTo(t.x, t.y), r.lineTo(8, o)) : r.lineTo(8, o), 2 === p ? (r.lineTo(t.x, t.y), r.lineTo(0, o - 8)) : r.arcTo(0, o, 0, o - 8, 8), 1 === p ? g ? (r.lineTo(0, i.y + 8), r.lineTo(t.x, t.y), r.lineTo(0, i.y - 8), r.lineTo(0, 8)) : (r.lineTo(t.x, t.y), r.lineTo(0, 8)) : r.lineTo(0, 8), 0 === p ? (r.lineTo(t.x, t.y), r.lineTo(8, 0)) : r.arcTo(0, 0, 8, 0, 8), r.stroke(), r.fillStyle = (0, d.generateColor)(this._data.backcolor, this._data.transparency), r.fill(), r.fillStyle = this._data.color, u = 10 + this._data.textData.fontSize, c = 10 + f;
                    for (const e of this._data.textData.lines) r.fillText(e, c, u), u += this._data.textData.fontSize
                }
            }
            var _ = i(233330),
                g = i(544445);
            let f = null;
            class m extends _.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._calloutRenderer = new p, this._renderer = new a.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._source.calculatePoint2(), this._renderer.clear(), !this._points[0]) return;
                    if (this._points.length < 2) return;
                    const e = this._source.properties().childs(),
                        t = this._points[0],
                        i = t.x + this._source.getBarOffset() * this._model.timeScale().barSpacing(),
                        s = new r.Point(i, this._points[1].y),
                        a = this._fontStyle(),
                        o = e.wordWrap.value() ? e.wordWrapWidth.value() : void 0,
                        l = (0, g.wordWrap)(e.text.value(), a, o);
                    let d;
                    d = void 0 !== o ? o : l.reduce(((e, t) => Math.max(e, function(e, t) {
                        if (null === f) {
                            const e = document.createElement("canvas");
                            e.width = 0, e.height = 0, f = (0, n.ensureNotNull)(e.getContext("2d"))
                        }
                        return f.font = t, f.measureText(e).width
                    }(t, a))), 0);
                    const h = {
                        points: [t, s],
                        color: e.color.value(),
                        linewidth: e.linewidth.value(),
                        backcolor: e.backgroundColor.value(),
                        transparency: e.transparency.value(),
                        textData: {
                            lines: l,
                            maxWidth: d,
                            font: a,
                            fontSize: e.fontsize.value()
                        },
                        bordercolor: e.bordercolor.value()
                    };
                    if (this._calloutRenderer.setData(h), this._renderer.append(this._calloutRenderer), this._renderer.append(this.createLineAnchor({
                            points: [t]
                        }, 0)), void 0 !== o) {
                        const e = h.points[1],
                            t = new r.Point(e.x + o / 2 + 8 + 2, e.y);
                        t.data = 1, this._renderer.append(this.createLineAnchor({
                            points: [t]
                        }, 1))
                    }
                }
                _fontStyle() {
                    const e = this._source.properties().childs(),
                        t = (e.bold.value() ? "bold " : "") + (e.italic.value() ? "italic " : ""),
                        i = e.fontsize.value();
                    return (0, s.makeFont)(i, o.CHART_FONT_FAMILY, t)
                }
            }
        },
        394147: (e, t, i) => {
            "use strict";
            var r = i(86441).Point,
                n = i(233330).LineSourcePaneView,
                s = i(274131).VerticalLineRenderer,
                a = i(296266).TrendLineRenderer,
                o = i(858063).HitTestResult,
                l = i(28035).CompositeRenderer,
                d = i(739665).LineEnd;
            t.LineToolCircleLinesPaneView = class extends n {
                constructor(e, t) {
                    super(e, t), this._lines = [], this._trendRenderer = new a, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, !(this._source.points().length < 2)) {
                        var e = this._model.timeScale();
                        if (this._source.priceScale() && !this._source.priceScale().isEmpty() && !e.isEmpty()) {
                            var t = this._source.points()[0],
                                i = this._source.points()[1],
                                n = i ? i.index - t.index : 1;
                            if (this._lines = [], 0 !== n) {
                                var a = e.visibleBarsStrictRange();
                                if (n > 0)
                                    for (var h = t.index; h <= a.lastBar(); h += n) this._lines.push({
                                        x: e.indexToCoordinate(h)
                                    });
                                else
                                    for (h = t.index; h >= a.firstBar(); h += n) this._lines.push({
                                        x: e.indexToCoordinate(h)
                                    });
                                if (!(this._points.length < 2)) {
                                    var c = new l,
                                        u = this._source.properties(),
                                        p = {
                                            points: [t, i],
                                            width: this._model.timeScale().width(),
                                            height: this._source.priceScale().height(),
                                            color: u.trendline.color.value(),
                                            linewidth: u.trendline.linewidth.value(),
                                            linestyle: u.trendline.linestyle.value(),
                                            extendleft: !1,
                                            extendright: !1,
                                            leftend: d.Normal,
                                            rightend: d.Normal
                                        };
                                    this._trendRenderer.setData(p), c.append(this._trendRenderer);
                                    var _ = this._model.timeScale().width(),
                                        g = this._source.priceScale().height();
                                    for (h = 0; h < this._lines.length; h++) {
                                        var f = {
                                                width: _,
                                                height: g,
                                                x: this._lines[h].x,
                                                color: u.linecolor.value(),
                                                linewidth: u.linewidth.value(),
                                                linestyle: u.linestyle.value()
                                            },
                                            m = new s;
                                        m.setData(f), c.append(m)
                                    }
                                    if (2 === this._source.points().length) {
                                        var v = [].concat(this._points);
                                        c.append(this.createLineAnchor({
                                            points: v
                                        }, 0))
                                    } else c.append(this.createLineAnchor({
                                        points: [new r(this._points[0].x, this._source.priceScale().height() / 2)],
                                        hittestResult: o.MOVEPOINT
                                    }, 1));
                                    this._renderer = c
                                }
                            }
                        }
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        238073: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CirclePaneView: () => c
            });
            var r = i(623331),
                n = i(544445),
                s = i(28035),
                a = i(233330),
                o = i(858063),
                l = i(934026),
                d = i(837291);
            class h {
                constructor(e) {
                    this._data = null != e ? e : null
                }
                setData(e) {
                    this._data = e
                }
                draw(e, t) {
                    if (null === this._data) return;
                    const {
                        center: i,
                        radius: r,
                        lineWidth: n,
                        color: s,
                        fillBackground: a,
                        backColor: o
                    } = this._data;
                    e.save();
                    const l = t.pixelRatio,
                        d = Math.max(1, Math.floor(l)),
                        h = d % 2 / 2,
                        c = Math.round(i.x * l) + h,
                        u = Math.round(i.y * l) + h,
                        p = Math.round(c + r * l),
                        _ = Math.max(1, Math.floor(n * l)),
                        g = p - c - _;
                    a && g > 0 && (e.fillStyle = o, e.beginPath(), e.moveTo(c + g, u), e.arc(c, u, g, 0, 2 * Math.PI, !1), e.fill());
                    const f = Math.max(d / 2, p - c - _ / 2);
                    e.strokeStyle = s, e.lineWidth = _, e.beginPath(), e.moveTo(c + f, u), e.arc(c, u, f, 0, 2 * Math.PI, !1), e.stroke(), e.restore()
                }
                hitTest(e, t) {
                    if (null === this._data) return null;
                    const {
                        center: i,
                        radius: r
                    } = this._data, n = (0, d.interactionTolerance)().curve;
                    if (!(0, l.pointInCircle)(e, i, r + n)) return null;
                    const s = r > n && (0, l.pointInCircle)(e, i, r - n) ? o.HitTestResult.MOVEPOINT_BACKGROUND : o.HitTestResult.MOVEPOINT;
                    return new o.HitTestResult(s)
                }
            }
            class c extends a.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._circleRenderer = new h, this._textRenderer = new n.TextRenderer, this._renderer = new s.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e;
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2) return;
                    const t = this._source.properties().childs(),
                        [i, r] = this._points;
                    this._circleRenderer.setData({
                        center: i,
                        radius: Math.sqrt((r.x - i.x) ** 2 + (r.y - i.y) ** 2),
                        color: t.color.value(),
                        lineWidth: t.linewidth.value(),
                        backColor: t.backgroundColor.value(),
                        fillBackground: t.fillBackground.value()
                    }), this._renderer.append(this._circleRenderer), t.showLabel.value() && (null === (e = t.text) || void 0 === e ? void 0 : e.value()) && (this._updateTextRenderer(), this._renderer.append(this._textRenderer)), this.addAnchors(this._renderer, {
                        hittestResult: [o.HitTestResult.MOVEPOINT, o.HitTestResult.CHANGEPOINT]
                    })
                }
                _updateTextRenderer() {
                    const {
                        text: e,
                        textColor: t,
                        fontSize: i,
                        bold: n,
                        italic: s
                    } = this._source.properties().childs(), [a, o] = this._points, l = a.subtract(o).length() * Math.sqrt(2), d = {
                        points: [a],
                        text: e.value(),
                        color: t.value(),
                        fontSize: i.value(),
                        font: r.CHART_FONT_FAMILY,
                        bold: n.value(),
                        italic: s.value(),
                        wordWrapWidth: l,
                        maxHeight: l,
                        offsetX: 0,
                        offsetY: 0,
                        horzAlign: "center",
                        vertAlign: "middle",
                        forceTextAlign: !0
                    };
                    this._textRenderer.setData(d)
                }
            }
        },
        854350: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CommentPaneView: () => f
            });
            var r = i(538708),
                n = i(114123),
                s = i(623331),
                a = i(233330),
                o = i(28035),
                l = i(86441),
                d = i(934026),
                h = i(768038),
                c = i(741341),
                u = i(904244),
                p = i(858063),
                _ = i(914679);
            class g extends u.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._geometryCache = {
                        innerHeight: NaN,
                        textHorizontalPadding: NaN,
                        innerWidth: NaN,
                        paddingLeft: NaN
                    }, this._geomertryCacheInvalidated = !0, this._data = null
                }
                setData(e) {
                    this._data = e, this._geomertryCacheInvalidated = !0
                }
                hitTest(e, t) {
                    if (null === this._data || 0 === this._data.points.length) return null;
                    const i = this._data.points[0].x,
                        r = this._data.points[0].y - this._geometryCache.innerHeight,
                        n = (0, l.box)(new l.Point(i, r), new l.Point(i + this._geometryCache.innerWidth, r + this._geometryCache.innerHeight));
                    return (0, d.pointInBox)(e, n) ? new p.HitTestResult(p.HitTestResult.MOVEPOINT, {
                        areaName: p.AreaName.Text
                    }) : null
                }
                _drawImpl(e) {
                    if (null === this._data || 0 === this._data.points.length) return;
                    const t = e.context;
                    t.font = this._data.font, t.textAlign = (0, h.isRtl)() ? "right" : "left";
                    const i = this._measureInfo(t, this._data.label, this._data.fontSize),
                        {
                            paddingLeft: r,
                            innerHeight: n,
                            innerWidth: s,
                            textHorizontalPadding: a
                        } = i,
                        o = Math.min(s, n) / 2,
                        l = this._data.points[0].x,
                        d = this._data.points[0].y - n;
                    t.translate(l, d), (0, _.drawRoundRect)(t, 0, 0, s, n, [o, o, o, 2]), t.fillStyle = this._data.backgroundColor, t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "middle", t.fillStyle = this._data.color, t.fillText(this._data.label, r + a, n / 2)
                }
                _measureInfo(e, t, i) {
                    if (this._geomertryCacheInvalidated) {
                        const r = e.measureText(t),
                            n = i,
                            s = 12,
                            a = Math.round(n / 1.3),
                            o = r.width + 2 * s,
                            l = n + 2 * a,
                            d = (0, c.calcTextHorizontalShift)(e, r.width);
                        this._geometryCache = {
                            paddingLeft: s,
                            innerWidth: o,
                            innerHeight: l,
                            textHorizontalPadding: d
                        }, this._geomertryCacheInvalidated = !1
                    }
                    return this._geometryCache
                }
            }
            class f extends a.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._commentRenderer = new g, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl(e, t) {
                    super._updateImpl(e, t);
                    const i = this._source.properties().childs(),
                        a = {
                            points: this._points,
                            color: i.color.value(),
                            borderColor: i.borderColor.value(),
                            backgroundColor: (0, n.generateColor)(i.backgroundColor.value(), i.transparency.value()),
                            font: (0, r.makeFont)(i.fontsize.value(), s.CHART_FONT_FAMILY),
                            fontSize: i.fontsize.value(),
                            label: i.text.value()
                        };
                    if (this._commentRenderer.setData(a), 1 === a.points.length) {
                        const e = new o.CompositeRenderer;
                        return e.append(this._commentRenderer), e.append(this.createLineAnchor({
                            points: a.points
                        }, 0)), void(this._renderer = e)
                    }
                    this._renderer = this._commentRenderer
                }
            }
        },
        223253: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CrossLinePaneView: () => l
            });
            var r = i(233330),
                n = i(803936),
                s = i(274131),
                a = i(28035),
                o = i(858063);
            class l extends r.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = null, this._horizLineRenderer = new n.HorizontalLineRenderer, this._vertLineRenderer = new s.VerticalLineRenderer, this._horizLineRenderer.setHitTest(new o.HitTestResult(o.HitTestResult.MOVEPOINT))
                }
                update() {
                    this._invalidated = !0
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = this._getPoints();
                    if (0 === e.length) return;
                    const t = {
                        color: this._getSource().lineColor(),
                        linestyle: this._getSource().lineStyle(),
                        linewidth: this._getSource().lineWidth(),
                        x: e[0].x,
                        y: e[0].y
                    };
                    this._horizLineRenderer.setData(t), this._horizLineRenderer.setHitTest(new o.HitTestResult(o.HitTestResult.MOVEPOINT, {
                            snappingPrice: this._source.points()[0].price
                        })), this._vertLineRenderer.setData(t),
                        this._vertLineRenderer.setHitTest(new o.HitTestResult(o.HitTestResult.MOVEPOINT, {
                            snappingIndex: this._source.points()[0].index
                        }));
                    const i = new a.CompositeRenderer;
                    i.append(this._horizLineRenderer), i.append(this._vertLineRenderer), this.addAnchors(i), this._renderer = i
                }
            }
        },
        786315: (e, t, i) => {
            "use strict";
            i.d(t, {
                CustomUrlEventPaneView: () => v
            });
            var r = i(650151),
                n = i(86441),
                s = i(272001),
                a = i(864929),
                o = i(72822),
                l = i(28035),
                d = i(233330),
                h = i(941167),
                c = i(147279),
                u = i(796309),
                p = i(38724),
                _ = i(971244),
                g = i(747342);
            const f = (0, s.getLogger)("Chart.CustomUrlEventPaneView");

            function m() {
                const e = p.dateFormatProperty.value();
                return new c.DateTimeFormatter({
                    dateFormat: e,
                    timeFormat: (0, h.getHourMinuteFormat)(_.timeHoursFormatProperty.value()),
                    dateTimeSeparator: " · "
                })
            }
            class v extends d.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = new l.CompositeRenderer, this._avatarImage = null, this._formattedDate = "", this._avatarAlreadyRequested = !1, p.dateFormatProperty.subscribe(this, (() => this._updateFormattedDate())), _.timeHoursFormatProperty.subscribe(this, (() => this._updateFormattedDate())), this._updateFormattedDate(), this._model.mainSeries().dataEvents().symbolResolved().subscribe(this, (() => this._updateFormattedDate())), this._model.properties().childs().timezone.subscribe(this, (() => this._updateFormattedDate()))
                }
                destroy() {
                    p.dateFormatProperty.unsubscribeAll(this), _.timeHoursFormatProperty.unsubscribeAll(this), this._model.mainSeries().dataEvents().symbolResolved().unsubscribeAll(this), this._model.properties().childs().timezone.unsubscribeAll(this)
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e), this._renderer
                }
                _updateImpl(e) {
                    if (super._updateImpl(), this._renderer.clear(), 0 === this._points.length) return;
                    const t = this._source.priceSource();
                    if (null === t) return;
                    const i = t.firstValue(),
                        r = t.priceScale();
                    if (this._model.timeScale().isEmpty() || null === r || r.isEmpty() || null === i) return;
                    const s = this._source.customEvent();
                    if (null === s) return;
                    const a = s.position(),
                        o = this._model.mainSeries(),
                        l = t === o ? (0, u.getSeriesPosition)(o, s) : (0, u.getNoDataPosition)(s, r, i);
                    if (null === l) return;
                    const d = r.priceToCoordinate(l.price, i);
                    let h = (0, u.positionToCoordinate)(a, e, d, l.positionPointDirection);
                    h >= -1e-10 && h <= e + 1e-10 && (h = Math.min(e - 2, Math.max(2, h)));
                    const c = this._points[0],
                        p = new n.Point(c.x, h);
                    p.data = c.data, this._points.length > 0 && (this._loadAvatarIfRequired(), this._fillCompositeRendrer(s, p, this._calculateSeriesPoints(), this._avatarImage, this._formattedDate)), this._renderer.append(this.createLineAnchor({
                        points: [p]
                    }, 0))
                }
                async _loadAvatarIfRequired() {
                    const e = this._source.customEvent();
                    if (null === e || this._avatarAlreadyRequested) return;
                    this._avatarAlreadyRequested = !0;
                    const t = e.avatar();
                    if (!t) return;
                    const i = this._prepareValidAvatarUrl(t);
                    if (null !== i) {
                        if (null === this._avatarImage) try {
                            this._avatarImage = await (0, a.getImage)(`avatar_${i}`, i), this._source.model().updateSource(this._source)
                        } catch (e) {
                            f.logWarn(`Error loading profile image with url ${i} error: ${(0,o.errorToString)(e)}`)
                        }
                    } else f.logWarn(`Unexpected profile image: ${t}`)
                }
                _updateFormattedDate() {
                    const e = this._source.customEvent();
                    if (null === e) return void(this._formattedDate = "");
                    const t = e.time();
                    let i = this._model.timezone();
                    if ("exchange" === i) {
                        const e = this._model.mainSeries().symbolInfo();
                        if (null === e) return void(this._formattedDate = m().formatLocal(new Date(1e3 * t)));
                        i = e.timezone
                    }
                    const r = (0, g.utc_to_cal)((0, g.get_timezone)(i), 1e3 * t);
                    this._formattedDate = m().format(r)
                }
                _calculateSeriesPoints() {
                    const e = this._source.eventTimePointIndex();
                    if (null === e) return [];
                    const t = this._source.model().timeScale().indexToCoordinate(e),
                        i = this._source.model().mainSeries(),
                        s = i.data().bars().search(e);
                    if (null === s) return [];
                    const a = [];
                    switch (i.style()) {
                        case 3:
                        case 10:
                        case 2:
                            a.push(i.barFunction()(s.value));
                            break;
                        default:
                            const e = (0, r.ensure)(s.value[2]),
                                t = (0, r.ensure)(s.value[3]);
                            a.push(e), a.push(t)
                    }
                    const o = (0, r.ensureNotNull)(i.priceScale()),
                        l = i.firstValue();
                    return null === l ? [] : a.map((e => {
                        const i = o.priceToCoordinate(e, l);
                        return (0, n.point)(t, i)
                    }))
                }
            }
        },
        878143: (e, t, i) => {
            "use strict";
            i.d(t, {
                CustomUrlEventRenderer: () => l
            });
            var r = i(650151),
                n = i(934026),
                s = i(86441),
                a = i(858063),
                o = i(914679);
            class l {
                constructor(e) {
                    this._lastRendererBox = null, this._actionBox = null, this._data = null, this._precalculated = null, this._data = e
                }
                hitTest(e) {
                    if (null === this._lastRendererBox) return null;
                    return null === this._data ? null : null !== this._actionBox && (0, n.pointInBox)(e, this._actionBox) ? this._hittestResultForActionArea() : (0, n.pointInBox)(e, this._lastRendererBox) ? new a.HitTestResult(a.HitTestResult.MOVEPOINT, {
                        activeItem: 0
                    }) : null
                }
                draw(e, t) {
                    const i = this._data;
                    if (null === i) return this._lastRendererBox = null, void(this._actionBox = null);
                    null === this._precalculated && this._precalculate(e, i), this._drawContent(e, t, i)
                }
                _drawMainFrame(e, t, i, n) {
                    e.strokeStyle = i, e.lineWidth = Math.max(1, Math.round(t.pixelRatio)), e.fillStyle = n;
                    const a = (0, r.ensureNotNull)(this._precalculated),
                        l = this._position(),
                        d = Math.round(a.size.width * t.pixelRatio),
                        h = Math.round(a.size.height * t.pixelRatio),
                        c = Math.round(8 * t.pixelRatio),
                        u = Math.round(l.x * t.pixelRatio),
                        p = Math.round(l.y * t.pixelRatio);
                    (0, o.drawRoundRect)(e, u, p, d, h, c), e.fill(), e.stroke();
                    const _ = 1 / t.pixelRatio;
                    this._lastRendererBox = (0, s.box)((0, s.point)(u, p).scaled(_), (0, s.point)(u + d, p + h).scaled(_))
                }
                _drawAvatar(e, t, i, r, n, s) {
                    if (i) {
                        const a = this._position(),
                            o = Math.round((a.x + n) * t.pixelRatio),
                            l = Math.round((a.y + s) * t.pixelRatio),
                            d = Math.round(r * t.pixelRatio),
                            h = Math.round(.5 * d);
                        e.save(), e.beginPath(), e.arc(o + h, l + h, h, 0, 2 * Math.PI), e.clip(), e.drawImage(i, 0, 0, i.width, i.height, o, l, 2 * h, 2 * h), e.restore()
                    }
                }
                _drawConnector(e, t, i, n) {
                    const a = i.candlePoints.map((e => e.scaled(t.pixelRatio)));
                    if (0 === a.length) return;
                    const l = (0, r.ensureNotNull)(this._precalculated),
                        d = this._position();
                    e.save();
                    const h = d.scaled(t.pixelRatio),
                        c = Math.round(l.size.width * t.pixelRatio * .5),
                        u = Math.round(l.size.height * t.pixelRatio * .5),
                        p = new s.Point(Math.round(h.x + c), Math.round(h.y + u)),
                        _ = a.reduce(((e, t) => {
                            const i = t.subtract(p).length();
                            return i < e.distance ? {
                                distance: i,
                                point: t
                            } : e
                        }), {
                            distance: 1 / 0,
                            point: new s.Point(0, 0)
                        }),
                        g = _.point.y > p.y ? u : -u,
                        f = Math.round(_.point.x);
                    if (isFinite(_.distance)) {
                        const r = Math.max(1, Math.floor(t.pixelRatio)),
                            s = _.point.y > p.y ? -Math.round(2 * t.pixelRatio) - Math.floor(.5 * r) : Math.round(2 * t.pixelRatio) + Math.floor(.5 * r);
                        e.lineCap = "square";
                        [{
                            color: i.backgroundColor,
                            lineWidth: 3 * r
                        }, {
                            color: n,
                            lineWidth: r
                        }].forEach((t => {
                            if (e.strokeStyle = t.color, e.lineWidth = t.lineWidth, Math.abs(p.x - _.point.x) < 1)(0, o.drawVerticalLine)(e, f, p.y + g, Math.round(_.point.y) + s);
                            else {
                                const t = e.lineWidth % 2 ? .5 : 0,
                                    i = Math.round(.5 * (_.point.y + s + p.y + g));
                                i > p.y - u && i < p.y + u ? (0, o.drawHorizontalLine)(e, Math.round(_.point.y) + s, p.x, _.point.x) : (e.beginPath(), e.moveTo(p.x + t, p.y + g + t), e.lineTo(p.x + t, i + t), e.lineTo(f + t, i + t), e.lineTo(f + t, Math.round(_.point.y) + s + t), e.stroke())
                            }
                        }))
                    }
                    e.restore()
                }
                _position() {
                    const e = (0, r.ensureNotNull)(this._precalculated),
                        t = (0, r.ensureNotNull)(this._data);
                    return new s.Point(t.point.x - e.size.width / 2, t.point.y)
                }
            }
        },
        553692: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                CypherPaneView: () => n
            });
            var r = i(886538);
            class n extends r.Pattern5pointsPaneView {
                _updateBaseData() {
                    if (this._source.points().length >= 3) {
                        const [e, t, i] = this._source.points();
                        this._abRetracement = Math.round(1e3 * Math.abs((i.price - t.price) / (t.price - e.price))) / 1e3
                    }
                    if (this._source.points().length >= 4) {
                        const [e, t, , i] = this._source.points();
                        this._bcRetracement = Math.round(1e3 * Math.abs((i.price - e.price) / (t.price - e.price))) / 1e3
                    }
                    if (this._source.points().length >= 5) {
                        const [e, , t, i, r] = this._source.points();
                        this._cdRetracement = Math.round(1e3 * Math.abs((r.price - i.price) / (i.price - t.price))) / 1e3, this._xdRetracement = Math.round(1e3 * Math.abs((r.price - i.price) / (e.price - i.price))) / 1e3
                    }
                }
            }
        },
        618580: (e, t, i) => {
            "use strict";
            i.d(t, {
                DateAndPriceRangeBasePaneView: () => o
            });
            var r = i(86441),
                n = i(623331),
                s = i(544445),
                a = i(233330);
            class o extends a.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._customTextrenderer = new s.TextRenderer
                }
                _updateCustomTextRenderer(e, t) {
                    const i = this._source.properties().childs().customText.childs();
                    if (i.visible.value() && i.text.value().length > 0) {
                        const [a, o] = this._points, l = Math.round((a.y + o.y) / 2), d = new r.Point(a.x, l), h = new r.Point(o.x, l), c = d.x < h.x ? d : h, u = c === d ? h : d, p = "middle", _ = "center", g = new r.Point((d.x + h.x) / 2, (d.y + h.y) / 2), f = Math.atan((u.y - c.y) / (u.x - c.x)), m = {
                            points: [g],
                            text: i.text.value(),
                            color: i.color.value(),
                            vertAlign: p,
                            horzAlign: _,
                            font: n.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: i.bold.value(),
                            italic: i.italic.value(),
                            fontsize: i.fontsize.value(),
                            forceTextAlign: !0,
                            angle: f
                        };
                        return this._customTextrenderer.setData(m), this._needLabelExclusionPath(this._customTextrenderer, "middle") ? (0, s.getTextBoundaries)(this._customTextrenderer, t, e) : null
                    }
                    return this._customTextrenderer.setData(null), null
                }
            }
        },
        861345: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                DateAndPriceRangePaneView: () => b
            });
            var r = i(650151),
                n = i(86441),
                s = i(777754),
                a = i(768038),
                o = i(544445),
                l = i(603823),
                d = i(296266),
                h = i(28035),
                c = i(561068),
                u = i(631586),
                p = i(739665),
                _ = i(735512),
                g = i(583811),
                f = i(738023),
                m = i(623331),
                v = i(618580);
            const x = new _.TimeSpanFormatter,
                w = new c.PercentageFormatter,
                R = new f.VolumeFormatter,
                y = s.t(null, void 0, i(33355)),
                T = s.t(null, {
                    context: "study"
                }, i(32819));
            class b extends v.DateAndPriceRangeBasePaneView {
                constructor() {
                    super(...arguments), this._distanceLineRenderer = new d.TrendLineRenderer, this._distancePriceRenderer = new d.TrendLineRenderer, this._backgroundRenderer = new l.RectangleRenderer, this._borderRenderer = new l.RectangleRenderer, this._textRenderer = new o.TextRenderer, this._renderer = new h.CompositeRenderer, this._pipFormatter = null, this._lastSymbolInfo = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;
                    const s = this._source.properties().childs();
                    s.fillBackground && s.fillBackground.value() && (this._backgroundRenderer.setData({
                        points: this._points,
                        color: "white",
                        linewidth: 0,
                        backcolor: s.backgroundColor.value(),
                        fillBackground: !0,
                        transparency: s.backgroundTransparency.value(),
                        extendLeft: !1,
                        extendRight: !1
                    }), this._renderer.append(this._backgroundRenderer));
                    const [l, d] = this._points;
                    s.drawBorder.value() && (this._borderRenderer.setData({
                        points: this._points,
                        color: s.borderColor.value(),
                        linewidth: s.borderWidth.value(),
                        fillBackground: !1,
                        extendLeft: !1,
                        extendRight: !1,
                        backcolor: ""
                    }), this._renderer.append(this._borderRenderer));
                    const h = s.drawBorder.value() ? s.borderWidth.value() / 2 : 0,
                        c = this._updateCustomTextRenderer(e, t),
                        _ = Math.round((l.y + d.y) / 2),
                        f = new n.Point(l.x + Math.sign(d.x - l.x) * h, _),
                        v = new n.Point(d.x + Math.sign(l.x - d.x) * h, _);
                    this._distanceLineRenderer.setData({
                        points: [f, v],
                        color: s.linecolor.value(),
                        linewidth: s.linewidth.value(),
                        linestyle: u.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: p.LineEnd.Normal,
                        rightend: Math.abs(l.x - d.x) >= 25 * s.linewidth.value() ? p.LineEnd.Arrow : p.LineEnd.Normal,
                        excludeBoundaries: null != c ? c : void 0
                    }), this._renderer.append(this._distanceLineRenderer);
                    const b = Math.round((l.x + d.x) / 2),
                        P = new n.Point(b, l.y + Math.sign(d.y - l.y) * h),
                        L = new n.Point(b, d.y + Math.sign(l.y - d.y) * h);
                    this._distancePriceRenderer.setData({
                        points: [P, L],
                        color: s.linecolor.value(),
                        linewidth: s.linewidth.value(),
                        linestyle: u.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: p.LineEnd.Normal,
                        rightend: Math.abs(P.y - L.y) >= 25 * s.linewidth.value() ? p.LineEnd.Arrow : p.LineEnd.Normal,
                        excludeBoundaries: null != c ? c : void 0
                    }), this._renderer.append(this._distancePriceRenderer);
                    const S = this._source.points()[0].price,
                        C = this._source.points()[1].price,
                        M = C - S,
                        I = 100 * M / Math.abs(S),
                        N = this._source.points()[0].index,
                        k = this._source.points()[1].index,
                        A = k - N,
                        D = (0, a.forceLTRStr)(A + ""),
                        E = this._model.timeScale().indexToUserTime(N),
                        B = this._model.timeScale().indexToUserTime(k);
                    let z = "";
                    if (E && B) {
                        const e = (B.valueOf() - E.valueOf()) / 1e3;
                        z = ", " + (0, a.startWithLTR)(x.format(e))
                    }
                    const O = this._model.mainSeries().symbolInfo();
                    O && O !== this._lastSymbolInfo && (this._pipFormatter = new g.PipFormatter(O.pricescale, O.minmov, O.type, O.minmove2, O.typespecs), this._lastSymbolInfo = O);
                    const H = (0, r.ensureNotNull)(this._source.ownerSource()).formatter().format(M) + " (" + w.format(Math.round(100 * I) / 100) + ") " + (this._pipFormatter ? this._pipFormatter.format(M) : "");
                    let V = (0, a.forceLTRStr)(H) + "\n" + y.format({
                        count: D
                    }) + z;
                    const F = this._source.volume();
                    let W;
                    Number.isNaN(F) || (V += `\n${T} ${R.format(F)}`), W = C > S ? new n.Point(.5 * (l.x + d.x), d.y - 2 * s.fontsize.value()) : new n.Point(.5 * (l.x + d.x), d.y + .7 * s.fontsize.value());
                    const Y = {
                            x: 0,
                            y: 10
                        },
                        j = s.fontsize.value(),
                        U = {
                            points: [W],
                            text: V,
                            color: s.textcolor.value(),
                            font: m.CHART_FONT_FAMILY,
                            offsetX: Y.x,
                            offsetY: Y.y,
                            padding: 8,
                            vertAlign: "middle",
                            horzAlign: "center",
                            fontsize: j,
                            backgroundRoundRect: 4,
                            backgroundHorzInflate: .4 * j,
                            backgroundVertInflate: .2 * j
                        };
                    (null === (i = s.fillLabelBackground) || void 0 === i ? void 0 : i.value()) && (U.boxShadow = {
                        shadowColor: s.shadow.value(),
                        shadowBlur: 4,
                        shadowOffsetY: 1
                    }, U.backgroundColor = s.labelBackgroundColor.value()), this._textRenderer.setData(U);
                    const q = this._textRenderer.measure(),
                        Q = (0, o.calculateLabelPosition)(q, l, d, Y, e);
                    this._textRenderer.setPoints([Q]), this._renderer.append(this._textRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer)
                }
                _needLabelExclusionPath(e) {
                    return e.getLinesInfo().lines.length > 0
                }
            }
        },
        817591: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                DateRangePaneView: () => x
            });
            var r = i(86441),
                n = i(777754),
                s = i(768038),
                a = i(544445),
                o = i(603823),
                l = i(296266),
                d = i(28035),
                h = i(631586),
                c = i(739665),
                u = i(735512),
                p = i(738023),
                _ = i(623331),
                g = i(618580);
            const f = new p.VolumeFormatter,
                m = n.t(null, void 0, i(33355)),
                v = n.t(null, {
                    context: "study"
                }, i(32819));
            class x extends g.DateAndPriceRangeBasePaneView {
                constructor() {
                    super(...arguments), this._leftBorderRenderer = new l.TrendLineRenderer, this._rightBorderRenderer = new l.TrendLineRenderer, this._distancePriceRenderer = new l.TrendLineRenderer, this._backgroundRenderer = new o.RectangleRenderer, this._textRenderer = new a.TextRenderer, this._renderer = new d.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;
                    const n = this._source.properties().childs(),
                        o = n.extendTop.value(),
                        l = n.extendBottom.value(),
                        [d, p] = this._points,
                        g = o ? 0 : Math.min(d.y, p.y),
                        x = l ? this._height() : Math.max(d.y, p.y);
                    n.fillBackground.value() && (this._backgroundRenderer.setData({
                        points: [new r.Point(d.x, g), new r.Point(p.x, x)],
                        color: "white",
                        linewidth: 0,
                        backcolor: n.backgroundColor.value(),
                        fillBackground: !0,
                        transparency: n.backgroundTransparency.value(),
                        extendLeft: !1,
                        extendRight: !1
                    }), this._renderer.append(this._backgroundRenderer));
                    const w = (e, t, i) => {
                        e.setData({
                            points: [t, i],
                            color: n.linecolor.value(),
                            linewidth: n.linewidth.value(),
                            linestyle: h.LINESTYLE_SOLID,
                            extendleft: !1,
                            extendright: !1,
                            leftend: c.LineEnd.Normal,
                            rightend: c.LineEnd.Normal
                        }), this._renderer.append(e)
                    };
                    w(this._leftBorderRenderer, new r.Point(d.x, g), new r.Point(d.x, x)), w(this._rightBorderRenderer, new r.Point(p.x, g), new r.Point(p.x, x));
                    const R = Math.round((d.y + p.y) / 2),
                        y = new r.Point(d.x, R),
                        T = new r.Point(p.x, R),
                        b = this._updateCustomTextRenderer(e, t);
                    this._distancePriceRenderer.setData({
                        points: [y, T],
                        color: n.linecolor.value(),
                        linewidth: n.linewidth.value(),
                        linestyle: h.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: c.LineEnd.Normal,
                        rightend: Math.abs(y.x - T.x) >= 15 * n.linewidth.value() ? c.LineEnd.Arrow : c.LineEnd.Normal,
                        excludeBoundaries: null != b ? b : void 0
                    }), this._renderer.append(this._distancePriceRenderer);
                    const P = this._source.points()[0].index,
                        L = this._source.points()[1].index,
                        S = L - P,
                        C = this._model.timeScale().indexToUserTime(P),
                        M = this._model.timeScale().indexToUserTime(L);
                    let I = "";
                    if (C && M) {
                        const e = (M.valueOf() - C.valueOf()) / 1e3;
                        I = ", " + (0, s.startWithLTR)((new u.TimeSpanFormatter).format(e))
                    }
                    const N = this._source.volume(),
                        k = Number.isNaN(N) ? "" : `\n${v} ${f.format(N)}`,
                        A = m.format({
                            count: (0, s.forceLTRStr)(S.toString())
                        }) + I + k,
                        D = {
                            x: 0,
                            y: 10
                        },
                        E = n.fontsize.value(),
                        B = {
                            text: A,
                            color: n.textcolor.value(),
                            font: _.CHART_FONT_FAMILY,
                            offsetX: D.x,
                            offsetY: D.y,
                            padding: 8,
                            vertAlign: "middle",
                            horzAlign: "center",
                            fontsize: E,
                            backgroundRoundRect: 4,
                            backgroundHorzInflate: .4 * E,
                            backgroundVertInflate: .2 * E
                        };
                    (null === (i = n.fillLabelBackground) || void 0 === i ? void 0 : i.value()) && (B.boxShadow = {
                        shadowColor: n.shadow.value(),
                        shadowBlur: 4,
                        shadowOffsetY: 1
                    }, B.backgroundColor = n.labelBackgroundColor.value()), this._textRenderer.setData(B);
                    const z = this._textRenderer.measure(),
                        O = (0, a.calculateLabelPosition)(z, d, p, D, e);
                    this._textRenderer.setPoints([O]), this._renderer.append(this._textRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer)
                }
            }
        },
        781358: (e, t, i) => {
            "use strict";
            var r = i(746279).DisjointChannelRenderer,
                n = i(296266).TrendLineRenderer,
                s = i(544445).TextRenderer,
                a = i(28035).CompositeRenderer,
                o = i(854905).PaneCursorType,
                l = i(623331),
                d = i(764091).AlertableLineSourcePaneView,
                h = [o.Default, o.Default, o.VerticalResize, o.Default];
            t.DisjointChannelPaneView = class extends d {
                constructor(e, t) {
                    super(e, t), this._label = null, this._trendLineRendererPoints12 = new n, this._trendLineRendererPoints43 = new n, this._disjointChannelRenderer = new r, this._p1LabelRenderer = new s, this._p2LabelRenderer = new s, this._p3LabelRenderer = new s, this._p4LabelRenderer = new s, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._label = null, !(this._source.points().length < 2) && this._source.priceScale()) {
                        var e = this._source.points()[0],
                            t = this._source.points()[1],
                            i = this._source.ownerSource().firstValue();
                        if (this._price1 = this._source.priceScale().formatPrice(e.price, i), this._price2 = this._source.priceScale().formatPrice(t.price, i), 3 === this._source.points().length) {
                            var r = this._source.points()[2];
                            this._price3 = this._source.priceScale().formatPrice(r.price, i);
                            var n = t.price - e.price;
                            this._price4 = this._source.priceScale().formatPrice(r.price + n, i)
                        }
                        if (!(this._points.length < 2)) {
                            var s, o = new a,
                                d = (e = this._points[0], t = this._points[1], this._source.properties()),
                                c = this._model,
                                u = this._source;
                            if (this._points.length >= 3) {
                                (r = this._points[2]).x = t.x, r.square = !0;
                                var p = t.y - e.y;
                                if ((s = e.clone()).y = r.y + p, s.data = 3, d.fillBackground.value()) {
                                    var _ = c.timeScale().width(),
                                        g = u.priceScale().height(),
                                        f = d.extendLeft.value(),
                                        m = d.extendRight.value();
                                    this._disjointChannelRenderer.setData({
                                        width: _,
                                        height: g,
                                        extendleft: f,
                                        extendright: m,
                                        points: [e, t, r, s],
                                        backcolor: d.backgroundColor.value(),
                                        transparency: d.transparency.value(),
                                        hittestOnBackground: TradingView.isMobile.any()
                                    }), o.append(this._disjointChannelRenderer)
                                }
                            }
                            var v = function(e, t) {
                                    return {
                                        points: [e, t],
                                        width: c.timeScale().width(),
                                        height: u.priceScale().height(),
                                        color: d.linecolor.value(),
                                        linewidth: d.linewidth.value(),
                                        linestyle: d.linestyle.value(),
                                        extendleft: d.extendLeft.value(),
                                        extendright: d.extendRight.value(),
                                        leftend: d.leftEnd.value(),
                                        rightend: d.rightEnd.value()
                                    }
                                },
                                x = this,
                                w = function(e, t, i, r, n, s) {
                                    if (x._source.properties().showPrices.value()) {
                                        var a = {
                                            points: [i],
                                            text: n,
                                            color: x._source.properties().textcolor.value(),
                                            horzAlign: i.x > r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: l.CHART_FONT_FAMILY,
                                            offsetX: 6,
                                            offsetY: 0,
                                            boxPadding: 0,
                                            bold: x._source.properties().bold.value(),
                                            italic: x._source.properties().italic.value(),
                                            fontsize: x._source.properties().fontsize.value(),
                                            forceTextAlign: !0
                                        };
                                        e.setData(a), o.append(e);
                                        a = {
                                            points: [r],
                                            text: s,
                                            color: x._source.properties().textcolor.value(),
                                            horzAlign: i.x < r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: l.CHART_FONT_FAMILY,
                                            offsetX: 6,
                                            offsetY: 0,
                                            boxPadding: 0,
                                            bold: x._source.properties().bold.value(),
                                            italic: x._source.properties().italic.value(),
                                            fontsize: x._source.properties().fontsize.value(),
                                            forceTextAlign: !0
                                        };
                                        t.setData(a), o.append(t)
                                    }
                                };
                            if (this._trendLineRendererPoints12.setData(v(e, t)), o.append(this._trendLineRendererPoints12), w(this._p1LabelRenderer, this._p2LabelRenderer, e, t, this._price1, this._price2), 2 === this._points.length) return this.addAnchors(o), void(this._renderer = o);
                            this._trendLineRendererPoints43.setData(v(s, r)), o.append(this._trendLineRendererPoints43), w(this._p3LabelRenderer, this._p4LabelRenderer, r, s, this._price3, this._price4);
                            var R = [e, t, r, s];
                            this._model.lineBeingCreated() === this._source && R.pop(), o.append(this.createLineAnchor({
                                points: R,
                                pointsCursorType: h
                            }, 0)), e && t && this._addAlertRenderer(o, [e, t]), this._renderer = o
                        }
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        995727: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ElliottLabelsPaneView: () => m
            });
            var r = i(233330),
                n = i(28035),
                s = i(43329),
                a = i(114123),
                o = i(631586),
                l = i(858063),
                d = i(86441),
                h = i(934026),
                c = i(741341),
                u = i(538708);
            class p {
                constructor(e, t) {
                    this._data = e, this._hitTestResult = t
                }
                hitTest(e) {
                    const t = this._center(),
                        i = this._data.circleRadius,
                        r = {
                            min: new d.Point(t.x - i, t.y - i),
                            max: new d.Point(t.x + i, t.y + i)
                        };
                    return (0, h.pointInBox)(e, r) ? this._hitTestResult : null
                }
                draw(e, t) {
                    e.save();
                    const i = t.pixelRatio,
                        r = Math.max(1, Math.floor(i)) % 2 / 2,
                        n = this._center(),
                        s = Math.round(n.x * i) + r,
                        a = Math.round(n.y * i) + r;
                    if (this._data.showCircle) {
                        const t = Math.round(s + this._data.circleRadius * i) - s - this._data.circleBorderWidth * i / 2;
                        e.strokeStyle = this._data.color, e.lineWidth = this._data.circleBorderWidth * i, e.beginPath(), e.moveTo(s + t, a), e.arc(s, a, t, 0, 2 * Math.PI, !1), e.stroke()
                    }
                    e.font = (0, u.makeFont)(this._data.fontSize, this._data.font, this._data.bold ? "bold" : void 0), e.textBaseline = "middle", e.textAlign = "center", e.fillStyle = this._data.color, (0, c.drawScaled)(e, i, (() => {
                        e.fillText(this._data.letter, s / i, a / i + .05 * this._data.fontSize)
                    })), e.restore()
                }
                _center() {
                    const e = "bottom" === this._data.vertAlign ? -1 : 1,
                        t = this._data.point.y + e * this._data.yOffset + e * this._data.circleRadius,
                        i = this._data.point.x;
                    return new d.Point(i, t)
                }
            }
            var _ = i(623331),
                g = i(530513);
            const f = {
                4: {
                    font: 24,
                    circle: 36,
                    circleBorderWidth: 1,
                    bold: !0
                },
                3: {
                    font: 20,
                    circle: 28,
                    circleBorderWidth: 1,
                    bold: !1
                },
                2: {
                    font: 18,
                    circle: 22,
                    circleBorderWidth: 1,
                    bold: !1
                },
                1: {
                    font: 16,
                    circle: 22,
                    circleBorderWidth: 1,
                    bold: !1
                },
                0: {
                    font: 11,
                    circle: 14,
                    circleBorderWidth: 1,
                    bold: !0
                }
            };
            class m extends r.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = null, this._polylineRenderer = new g.PolygonRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e;
                    super._updateImpl(), this._renderer = null;
                    const t = this._source.properties().childs(),
                        i = this._source.priceScale(),
                        r = this._model.timeScale(),
                        d = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue();
                    if (!i || i.isEmpty() || r.isEmpty() || null == d) return;
                    const h = new n.CompositeRenderer;
                    if (t.showWave.value()) {
                        const e = {
                            points: this._points,
                            color: (0, a.generateColor)(t.color.value(), 0),
                            linewidth: t.linewidth.value(),
                            linestyle: o.LINESTYLE_SOLID,
                            fillBackground: !1,
                            filled: !1,
                            backcolor: "rgba(0, 0, 0, 0)",
                            linejoin: "round"
                        };
                        this._polylineRenderer.setData(e), h.append(this._polylineRenderer)
                    }
                    const c = this.areAnchorsVisible() ? 0 : 1;
                    let u = 1;
                    if (this._points.length > 2) {
                        const e = this._points[2],
                            t = this._points[1];
                        u = (0, s.sign)(e.y - t.y)
                    }
                    let g = 0;
                    this._model.lineBeingCreated() === this._source && (g = 1);
                    const m = (0, a.resetTransparency)(t.color.value());
                    for (let e = 0; e < this._points.length - g; e++, u = -u) {
                        if (e < c) continue;
                        const t = this._source.label(e);
                        let i = t.label;
                        const r = "circle" === t.decoration;
                        "brackets" === t.decoration && (i = "(" + i + ")");
                        const n = f[t.group],
                            s = new l.HitTestResult(l.HitTestResult.CHANGEPOINT, {
                                pointIndex: e
                            });
                        h.append(new p({
                            point: this._points[e],
                            letter: i,
                            color: m,
                            font: _.CHART_FONT_FAMILY,
                            fontSize: n.font,
                            bold: n.bold,
                            showCircle: r,
                            circleRadius: n.circle / 2,
                            circleBorderWidth: n.circleBorderWidth,
                            yOffset: 10,
                            vertAlign: 1 === u ? "top" : "bottom"
                        }, s))
                    }
                    const v = [];
                    for (let e = 0; e < this._points.length; e++) {
                        const t = this._points[e].clone();
                        t.data = e, v.push(t)
                    }
                    this._model.lineBeingCreated() === this._source && v.pop(), h.append(this.createLineAnchor({
                        points: v
                    }, 0)), this._renderer = h
                }
            }
        },
        771203: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                EllipsePaneView: () => m
            });
            var r = i(204652),
                n = i(86441),
                s = i(5531),
                a = i(623331),
                o = i(544445),
                l = i(854905),
                d = i(28035),
                h = i(233330),
                c = i(625422),
                u = i(114123),
                p = i(858063),
                _ = i(904244),
                g = i(837291);
            class f extends _.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = { ...e,
                        angleFrom: 0,
                        angleTo: 2 * Math.PI,
                        clockwise: !1
                    }
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 3) return null;
                    const t = this._data.points[0],
                        i = this._data.points[1];
                    let s = this._data.points[2];
                    const a = (0, r.distanceToLine)(t, i, s).distance,
                        o = i.subtract(t),
                        l = t.add(i).scaled(.5),
                        d = new n.Point(-o.y, o.x).normalized();
                    s = l.add(d.scaled(a));
                    const h = o.length(),
                        u = o.x / h,
                        _ = o.y / h;
                    let f = Math.acos(u);
                    _ < 0 && (f = -f);
                    let m = (0, c.translationMatrix)(-l.x, -l.y);
                    e = (0, c.transformPoint)(m, e);
                    let v = (0,
                        c.transformPoint)(m, this._data.points[2]);
                    m = (0, c.rotationMatrix)(-f), e = (0, c.transformPoint)(m, e), v = (0, c.transformPoint)(m, v), m = (0, c.scalingMatrix)(1, h / (2 * a)), e = (0, c.transformPoint)(m, e), v = (0, c.transformPoint)(m, v);
                    const x = e.length(),
                        w = (0, g.interactionTolerance)().curve;
                    return Math.abs(x - .5 * h) <= w ? new p.HitTestResult(p.HitTestResult.MOVEPOINT) : this._data.fillBackground && !this._data.noHitTestOnBackground && x <= .5 * h ? new p.HitTestResult(p.HitTestResult.MOVEPOINT_BACKGROUND) : null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 2) return;
                    const t = this._data.points[0],
                        i = this._data.points[1],
                        s = e.context;
                    if (this._data.points.length < 3) return s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(i.x, i.y), void s.stroke();
                    let a = this._data.points[2];
                    const o = (0, r.distanceToLine)(t, i, a).distance;
                    if (o < 1) return s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(i.x, i.y), void s.stroke();
                    const l = i.subtract(t),
                        d = t.add(i).scaled(.5),
                        h = new n.Point(-l.y, l.x).normalized();
                    a = d.add(h.scaled(o)), s.strokeStyle = this._data.color, s.lineWidth = this._data.linewidth;
                    const p = l.length(),
                        _ = l.x / p,
                        g = l.y / p;
                    let f = Math.acos(_);
                    g < 0 && (f = -f);
                    let m = this._data.points[2],
                        v = (0, c.translationMatrix)(-d.x, -d.y);
                    m = (0, c.transformPoint)(v, m), v = (0, c.rotationMatrix)(-f), m = (0, c.transformPoint)(v, m), v = (0, c.scalingMatrix)(1, p / (2 * o)), m = (0, c.transformPoint)(v, m), m.y < 0 ? this._data.clockwise = !0 : this._data.clockwise = !1, s.save(), s.beginPath(), s.translate(d.x, d.y), s.rotate(f), s.scale(1, 2 * o / p), s.arc(0, 0, .5 * p, this._data.angleFrom, this._data.angleTo, this._data.clockwise), s.restore(), s.stroke(), this._data.fillBackground && (s.fillStyle = (0, u.generateColor)(this._data.backcolor, this._data.transparency), s.fill())
                }
            }
            class m extends h.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._ellipseRenderer = new f, this._textRenderer = new o.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e;
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const t = this._source.properties().childs(),
                        i = {
                            points: this._points,
                            color: t.color.value(),
                            linewidth: t.linewidth.value(),
                            backcolor: t.backgroundColor.value(),
                            fillBackground: t.fillBackground.value(),
                            transparency: t.transparency.value(),
                            noHitTestOnBackground: !1
                        };
                    this._ellipseRenderer.setData(i);
                    const s = new d.CompositeRenderer;
                    s.append(this._ellipseRenderer);
                    const a = i.points[0],
                        o = i.points[1];
                    if (2 === this._points.length) return this.addAnchors(s), void(this._renderer = s);
                    let c = i.points[2];
                    const u = (0, r.distanceToLine)(a, o, c).distance,
                        p = o.subtract(a),
                        _ = a.add(o).scaled(.5),
                        g = new n.Point(-p.y, p.x).normalized();
                    c = _.add(g.scaled(u));
                    const f = _.add(g.scaled(-u)),
                        m = new n.Point(a.x, a.y);
                    m.data = 0;
                    const v = new n.Point(o.x, o.y);
                    v.data = 1;
                    const x = new n.Point(c.x, c.y);
                    x.data = 2;
                    const w = new n.Point(f.x, f.y);
                    w.data = 3, t.showLabel.value() && (null === (e = t.text) || void 0 === e ? void 0 : e.value()) && this._updateTextRenderer(m, v, x, w) && s.append(this._textRenderer);
                    const R = (0,
                            h.thirdPointCursorType)(m, v),
                        y = [l.PaneCursorType.Default, l.PaneCursorType.Default, R, R];
                    s.append(this.createLineAnchor({
                        points: [m, v, x, w],
                        pointsCursorType: y
                    }, 0)), this._renderer = s
                }
                _updateTextRenderer(e, t, i, r) {
                    if (t.subtract(e).length() < 1e-5 || r.subtract(i).length() < 1e-5) return !1;
                    const o = (0, s.intersectLines)((0, n.lineThroughPoints)(e, t), (0, n.lineThroughPoints)(i, r));
                    if (!o) return !1;
                    const {
                        text: l,
                        textColor: d,
                        fontSize: h,
                        bold: c,
                        italic: u
                    } = this._source.properties().childs(), p = Math.sqrt(2), _ = {
                        points: [o],
                        text: l.value(),
                        color: d.value(),
                        fontSize: h.value(),
                        font: a.CHART_FONT_FAMILY,
                        bold: c.value(),
                        italic: u.value(),
                        wordWrapWidth: e.subtract(t).length() / p,
                        maxHeight: r.subtract(i).length() / p,
                        angle: Math.atan((e.y - t.y) / (e.x - t.x)),
                        offsetX: 0,
                        offsetY: 0,
                        horzAlign: "center",
                        vertAlign: "middle",
                        forceTextAlign: !0
                    };
                    return this._textRenderer.setData(_), !0
                }
            }
        },
        433730: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                EmojiPaneView: () => n
            });
            var r = i(353903);
            class n extends r.SvgIconPaneView {
                _iconColor() {
                    return null
                }
            }
        },
        987682: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibChannelPaneView: () => u
            });
            var r = i(650151),
                n = i(114123),
                s = i(739665),
                a = i(28035),
                o = i(478037),
                l = i(296266),
                d = i(562432),
                h = i(544445);
            class c extends o.ParallelChannelRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                _getColor() {
                    const e = (0, r.ensureNotNull)(this._data);
                    return (0, n.generateColor)(e.backcolor, e.transparency, !0)
                }
                _extendAndDrawLineSegment(e, t, i, r) {
                    var n;
                    const s = null === (n = this._data) || void 0 === n ? void 0 : n.excludeBoundaries;
                    if (void 0 !== s) {
                        e.save(), e.beginPath(), e.rect(0, 0, r.width, r.height);
                        for (let t = 0; t < s.length; t++) {
                            const {
                                x: i,
                                y: r
                            } = s[t];
                            0 !== t ? e.lineTo(i, r) : e.moveTo(i, r)
                        }
                        e.closePath(), e.clip("evenodd")
                    }
                    super._extendAndDrawLineSegment(e, t, i, r), void 0 !== s && e.restore()
                }
            }
            class u extends d.LineToolPaneViewFibWithLabels {
                constructor() {
                    super(...arguments), this._baseLineRenderer = new l.TrendLineRenderer, this._lastLevelTrendRenderer = new l.TrendLineRenderer, this._renderer = null, this._norm = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i, n, o;
                    super._updateImpl();
                    const l = this._source.priceScale();
                    if (null === l) return;
                    this._renderer = null;
                    const d = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();
                    if (null == d) return;
                    3 === this._points.length && 3 === this._source.points().length && (this._norm = this._points[2].subtract(this._points[0]));
                    const u = new a.CompositeRenderer;
                    if (this._points.length < 2) return this.addAnchors(u), void(this._renderer = u);
                    const p = this._source.properties().childs(),
                        _ = this._points[0],
                        g = this._points[1];
                    if (this._points.length < 3) {
                        const e = {
                            points: [_, g],
                            color: p.level1.childs().color.value(),
                            linewidth: p.levelsStyle.childs().linewidth.value(),
                            linestyle: p.levelsStyle.childs().linestyle.value(),
                            extendleft: p.extendLeft.value(),
                            extendright: p.extendRight.value(),
                            leftend: s.LineEnd.Normal,
                            rightend: s.LineEnd.Normal
                        };
                        return this._baseLineRenderer.setData(e), u.append(this._baseLineRenderer), this.addAnchors(u), void(this._renderer = u)
                    }
                    const f = this._source.levelsCount(),
                        m = (0, r.ensureNotNull)(this._norm);
                    for (let i = 1; i < f; i++) {
                        const s = (0,
                            r.ensureDefined)(this._source.properties().child("level" + i)).childs();
                        if (!s.visible.value()) continue;
                        let a = null;
                        for (let e = i + 1; e <= f; e++) {
                            const t = (0, r.ensureDefined)(this._source.properties().child("level" + e)).childs();
                            if (t.visible.value()) {
                                a = t;
                                break
                            }
                        }
                        if (!a) break;
                        const o = m.scaled(s.coeff.value()),
                            v = _.add(o),
                            x = g.add(o),
                            w = m.scaled(a.coeff.value()),
                            R = _.add(w),
                            y = g.add(w),
                            T = l.coordinateToPrice(v.y, d),
                            b = this._updateLabelForLevel({
                                i: i - 1,
                                levelIndex: i,
                                leftPoint: v,
                                rightPoint: x,
                                price: T,
                                color: s.color.value(),
                                horzAlign: p.horzLabelsAlign.value(),
                                vertAlign: p.vertLabelsAlign.value()
                            });
                        let P;
                        null !== b && (u.append(b), P = null !== (n = (0, h.getTextBoundaries)(b, t, e)) && void 0 !== n ? n : void 0);
                        const L = {
                                points: [v, x, R, y],
                                color: s.color.value(),
                                linewidth: p.levelsStyle.childs().linewidth.value(),
                                linestyle: p.levelsStyle.childs().linestyle.value(),
                                extendleft: p.extendLeft.value(),
                                extendright: p.extendRight.value(),
                                backcolor: s.color.value(),
                                transparency: p.transparency.value(),
                                skipTopLine: !0,
                                fillBackground: p.fillBackground.value(),
                                hittestOnBackground: !0,
                                showMidline: !1,
                                excludeBoundaries: P
                            },
                            S = new c;
                        S.setData(L), u.append(S)
                    }
                    let v = null;
                    for (let e = f; e >= 1; e--) {
                        if ((0, r.ensureDefined)(this._source.properties().child("level" + e)).childs().visible.value()) {
                            v = e;
                            break
                        }
                    }
                    if (null !== v) {
                        const i = (0, r.ensureDefined)(this._source.properties().child("level" + v)).childs();
                        if (i.visible.value()) {
                            const r = m.scaled(i.coeff.value()),
                                n = _.add(r),
                                a = g.add(r),
                                c = l.coordinateToPrice(n.y, d),
                                f = this._updateLabelForLevel({
                                    i: v - 1,
                                    levelIndex: v,
                                    leftPoint: n,
                                    rightPoint: a,
                                    price: c,
                                    color: i.color.value(),
                                    horzAlign: p.horzLabelsAlign.value(),
                                    vertAlign: p.vertLabelsAlign.value()
                                });
                            let x;
                            null !== f && (u.append(f), x = null !== (o = (0, h.getTextBoundaries)(f, t, e)) && void 0 !== o ? o : void 0);
                            const w = {
                                points: [n, a],
                                color: i.color.value(),
                                linewidth: p.levelsStyle.childs().linewidth.value(),
                                linestyle: p.levelsStyle.childs().linestyle.value(),
                                extendleft: p.extendLeft.value(),
                                extendright: p.extendRight.value(),
                                leftend: s.LineEnd.Normal,
                                rightend: s.LineEnd.Normal,
                                excludeBoundaries: x
                            };
                            this._lastLevelTrendRenderer.setData(w), u.append(this._lastLevelTrendRenderer)
                        }
                    }
                    this.addAnchors(u), this._renderer = u
                }
            }
        },
        230990: (e, t, i) => {
            "use strict";
            var r = i(86441).Point;
            const {
                LineToolPaneViewFibWithLabels: n
            } = i(562432);
            var s = i(296266).TrendLineRenderer,
                a = i(858063).HitTestResult,
                o = i(28035).CompositeRenderer,
                l = i(667142).EllipseRendererSimple,
                d = i(739665).LineEnd;
            t.FibCirclesPaneView = class extends n {
                constructor(e, t) {
                    super(e, t), this._trendLineRenderer = new s, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, !(this._source.points().length < 2 || this._points.length < 2) && this._source.priceScale() && !this._source.priceScale().isEmpty() && !this._model.timeScale().isEmpty()) {
                        var e = this._points[0],
                            t = this._points[1];
                        this._center = e.add(t).scaled(.5);
                        var i = Math.abs(t.x - e.x),
                            n = Math.abs(t.y - e.y);
                        this._levels = [];
                        for (var s = this._source.properties(), h = this._source.levelsCount(), c = 1; c <= h; c++) {
                            var u = s["level" + c];
                            if (u.visible.value()) {
                                var p = u.coeff.value(),
                                    _ = u.color.value(),
                                    g = [];
                                g.push(new r(this._center.x - .5 * i * p, this._center.y - .5 * n * p)),
                                    g.push(new r(this._center.x + .5 * i * p, this._center.y + .5 * n * p));
                                var f = new r(this._center.x, this._center.y + .5 * n * p);
                                this._levels.push({
                                    color: _,
                                    points: g,
                                    labelPoint: f,
                                    linewidth: u.linewidth.value(),
                                    linestyle: u.linestyle.value(),
                                    index: c
                                })
                            }
                        }
                        if (!(this._points.length < 2)) {
                            var m = new o,
                                v = s.fillBackground.value(),
                                x = s.transparency.value();
                            for (c = 0; c < this._levels.length; c++) {
                                var w = this._levels[c],
                                    R = {};
                                R.points = w.points, R.color = w.color, R.linewidth = w.linewidth, R.backcolor = w.color, c > 0 && (R.wholePoints = this._levels[c - 1].points), R.fillBackground = v, R.transparency = x;
                                var y = new a(a.MOVEPOINT, null, w.index);
                                m.append(new l(R, y));
                                const e = this._updateLabelForLevel({
                                    i: c,
                                    levelIndex: w.index,
                                    color: w.color,
                                    price: 0,
                                    vertAlign: "middle",
                                    horzAlign: "left",
                                    leftPoint: this._levels[c].labelPoint,
                                    rightPoint: this._levels[c].labelPoint
                                });
                                null !== e && m.append(e)
                            }
                            if (s.trendline.visible.value()) {
                                var T = {
                                    points: [this._points[0], this._points[1]],
                                    width: this._model.timeScale().width(),
                                    height: this._source.priceScale().height(),
                                    color: s.trendline.color.value(),
                                    linewidth: s.trendline.linewidth.value(),
                                    linestyle: s.trendline.linestyle.value(),
                                    extendleft: !1,
                                    extendright: !1,
                                    leftend: d.Normal,
                                    rightend: d.Normal
                                };
                                this._trendLineRenderer.setData(T), m.append(this._trendLineRenderer)
                            }
                            this.addAnchors(m), this._renderer = m
                        }
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        712619: (e, t, i) => {
            "use strict";
            i.d(t, {
                fibLevelCoordinate: () => n,
                fibLevelPrice: () => s
            });
            var r = i(650151);

            function n(e, t, i, n, s, a) {
                if (a) return Math.round((0, r.ensureDefined)(e.coordinate) + (0, r.ensureDefined)(t.coordinate) * i);
                const o = e.price + t.price * i;
                return n.priceToCoordinate(o, s)
            }

            function s(e, t, i, n, s, a) {
                if (!a) return e.price + t.price * i;
                const o = (0, r.ensureDefined)(e.coordinate) + (0, r.ensureDefined)(t.coordinate) * i;
                return n.coordinateToPrice(o, s)
            }
        },
        515761: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibRetracementPaneView: () => u
            });
            var r = i(86441),
                n = i(603823),
                s = i(296266),
                a = i(544445),
                o = i(858063),
                l = i(28035),
                d = i(739665),
                h = i(712619),
                c = i(562432);
            class u extends c.LineToolPaneViewFibWithLabels {
                constructor(e, t) {
                    super(e, t), this._trendLineRenderer = new s.TrendLineRenderer, this._renderer = new l.CompositeRenderer, this._levels = []
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i, l;
                    if (super._updateImpl(), this._renderer.clear(), this._source.points().length < 2) return;
                    const c = this._source.priceScale();
                    if (!c || c.isEmpty() || this._model.timeScale().isEmpty()) return;
                    const u = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();
                    if (null == u) return;
                    const [p, _] = this._source.points(), g = this._source.properties().childs(), f = g.reverse.value();
                    if (this._points.length < 2) return;
                    const m = this._points[0],
                        v = this._points[1],
                        x = Math.min(m.x, v.x),
                        w = Math.max(m.x, v.x),
                        R = g.fillBackground.value(),
                        y = g.transparency.value(),
                        T = g.extendLinesLeft.value(),
                        b = g.extendLines.value(),
                        P = c.isLog() && g.fibLevelsBasedOnLogScale.value(),
                        L = !(x > t && !T || w < 0 && !b);
                    this._levels = [];
                    const S = f ? p.price : _.price,
                        C = f ? _.price : p.price,
                        M = C - S,
                        I = c.priceToCoordinate(S, u),
                        N = {
                            price: S,
                            coordinate: I
                        },
                        k = {
                            price: M,
                            coordinate: c.priceToCoordinate(C, u) - I
                        },
                        A = this._source.levelsCount();
                    for (let e = 1; e <= A; e++) {
                        const t = g["level" + e].childs();
                        if (!t || !t.visible.value()) continue;
                        const i = t.coeff.value(),
                            r = (0, h.fibLevelCoordinate)(N, k, i, c, u, P),
                            n = (0, h.fibLevelPrice)(N, k, i, c, u, P);
                        this._levels.push({
                            color: t.color.value(),
                            y: r,
                            price: n,
                            linewidth: g.levelsStyle.childs().linewidth.value(),
                            linestyle: g.levelsStyle.childs().linestyle.value(),
                            index: e
                        })
                    }
                    if (R && L)
                        for (let e = 0; e < this._levels.length; e++)
                            if (e > 0 && R) {
                                const t = this._levels[e - 1],
                                    i = {
                                        points: [new r.Point(x, this._levels[e].y), new r.Point(w, t.y)],
                                        color: this._levels[e].color,
                                        linewidth: 0,
                                        backcolor: this._levels[e].color,
                                        fillBackground: !0,
                                        transparency: y,
                                        extendLeft: T,
                                        extendRight: b
                                    },
                                    s = new n.RectangleRenderer(void 0, void 0, !0);
                                s.setData(i), this._renderer.append(s)
                            }
                    let D = x,
                        E = w;
                    D === E && (T && (D -= 1), b && (E += 1));
                    for (let i = 0; i < this._levels.length; i++) {
                        const n = new r.Point(D, this._levels[i].y),
                            h = new r.Point(E, this._levels[i].y),
                            c = this._updateLabelForLevel({
                                i,
                                levelIndex: this._levels[i].index,
                                leftPoint: n,
                                rightPoint: h,
                                price: this._levels[i].price,
                                color: this._levels[i].color,
                                extendLeft: T,
                                extendRight: b,
                                horzAlign: g.horzLabelsAlign.value(),
                                vertAlign: g.vertLabelsAlign.value()
                            });
                        if (null === c || c.isOutOfScreen(t, e) || this._renderer.append(c), L) {
                            let r;
                            null !== c && "middle" === g.vertLabelsAlign.value() && (r = null !== (l = (0, a.getTextBoundaries)(c, t, e)) && void 0 !== l ? l : void 0);
                            const u = {
                                    points: [n, h],
                                    color: this._levels[i].color,
                                    linewidth: this._levels[i].linewidth,
                                    linestyle: this._levels[i].linestyle,
                                    extendleft: T,
                                    extendright: b,
                                    leftend: d.LineEnd.Normal,
                                    rightend: d.LineEnd.Normal,
                                    excludeBoundaries: r
                                },
                                p = new s.TrendLineRenderer;
                            p.setData(u), p.setHitTest(new o.HitTestResult(o.HitTestResult.MOVEPOINT, {
                                snappingPrice: this._levels[i].price
                            }, this._levels[i].index)), this._renderer.append(p)
                        }
                    }
                    const B = g.trendline.childs();
                    if (B.visible.value() && L) {
                        const i = {
                            points: [this._points[0], this._points[1]],
                            width: t,
                            height: e,
                            color: B.color.value(),
                            linewidth: B.linewidth.value(),
                            linestyle: B.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: d.LineEnd.Normal,
                            rightend: d.LineEnd.Normal
                        };
                        this._trendLineRenderer.setData(i), this._renderer.append(this._trendLineRenderer)
                    }
                    this.addAnchors(this._renderer)
                }
            }
        },
        389495: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibSpeedResistanceArcsPaneView: () => _
            });
            var r = i(86441),
                n = i(43329),
                s = i(858063),
                a = i(28035),
                o = i(739665),
                l = i(296266),
                d = i(114123),
                h = i(837291),
                c = i(904244);
            class u extends c.MediaCoordinatesPaneRenderer {
                constructor(e, t, i) {
                    super(), this._data = e, this._hittest = t || new s.HitTestResult(s.HitTestResult.MOVEPOINT), this._backHittest = i || new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND)
                }
                hitTest(e) {
                    const t = this._data;
                    if (null === t) return null;
                    if ((0, n.sign)(e.y - t.center.y) !== t.dir && !t.fullCircles) return null;
                    const i = e.subtract(t.center).length(),
                        r = (0, h.interactionTolerance)().curve;
                    return Math.abs(i - t.radius) < r ? this._hittest : t.hittestOnBackground && Math.abs(i) <= t.radius + r ? this._backHittest : null
                }
                _drawImpl(e) {
                    const t = this._data;
                    if (null === t) return;
                    const i = e.context;
                    i.lineCap = "round", i.strokeStyle = t.color, i.lineWidth = t.linewidth, i.translate(t.center.x, t.center.y), i.beginPath(),
                        t.fullCircles ? i.arc(0, 0, t.radius, 2 * Math.PI, 0, !1) : t.dir > 0 ? i.arc(0, 0, t.radius, 0, Math.PI, !1) : i.arc(0, 0, t.radius, Math.PI, 0, !1), i.stroke(), t.fillBackground && (t.radius2 && (t.fullCircles ? i.arc(0, 0, t.radius2, 2 * Math.PI, 0, !0) : t.dir > 0 ? i.arc(0, 0, t.radius2, Math.PI, 0, !0) : i.arc(0, 0, t.radius2, 0, Math.PI, !0)), i.fillStyle = (0, d.generateColor)(t.color, t.transparency, !0), i.fill())
                }
            }
            var p = i(562432);
            class _ extends p.LineToolPaneViewFibWithLabels {
                constructor() {
                    super(...arguments), this._trendLineRenderer = new l.TrendLineRenderer, this._renderer = null, this._levels = []
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e;
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const t = this._source.priceScale();
                    if (!t || t.isEmpty() || this._model.timeScale().isEmpty()) return;
                    if (null == (null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue())) return;
                    const i = this._points[0],
                        l = this._points[1],
                        d = i.subtract(l).length();
                    this._levels = [];
                    const h = this._source.properties().childs(),
                        c = this._source.levelsCount();
                    for (let e = 1; e <= c; e++) {
                        const t = "level" + e,
                            s = this._source.properties().child(t).childs();
                        if (!s.visible.value()) continue;
                        const a = s.coeff.value(),
                            o = s.color.value(),
                            h = l.subtract(i).length() * a,
                            c = (0, n.sign)(l.y - i.y),
                            u = new r.Point(i.x, i.y + c * d * a);
                        this._levels.push({
                            color: o,
                            radius: h,
                            dir: c,
                            labelPoint: u,
                            linewidth: s.linewidth.value(),
                            linestyle: s.linestyle.value(),
                            index: e
                        })
                    }
                    if (this._points.length < 2) return;
                    const p = new a.CompositeRenderer,
                        _ = h.fillBackground.value(),
                        g = h.transparency.value();
                    for (let e = 0; e < this._levels.length; e++) {
                        const t = this._levels[e],
                            r = {
                                center: i,
                                color: t.color,
                                linewidth: t.linewidth,
                                radius: t.radius,
                                dir: t.dir,
                                transparency: g,
                                fillBackground: _,
                                hittestOnBackground: !0,
                                fullCircles: h.fullCircles.value(),
                                radius2: e > 0 ? this._levels[e - 1].radius : void 0
                            },
                            n = new s.HitTestResult(s.HitTestResult.MOVEPOINT, void 0, t.index);
                        p.append(new u(r, n));
                        const a = this._updateLabelForLevel({
                            i: e,
                            levelIndex: this._levels[e].index,
                            leftPoint: this._levels[e].labelPoint,
                            rightPoint: this._levels[e].labelPoint,
                            price: 0,
                            color: this._levels[e].color,
                            horzAlign: "left",
                            vertAlign: "middle"
                        });
                        null !== a && p.append(a)
                    }
                    const f = h.trendline.childs();
                    if (f.visible.value()) {
                        const e = {
                            points: [this._points[0], this._points[1]],
                            color: f.color.value(),
                            linewidth: f.linewidth.value(),
                            linestyle: f.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        this._trendLineRenderer.setData(e), p.append(this._trendLineRenderer)
                    }
                    this.addAnchors(p), this._renderer = p
                }
            }
        },
        68952: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibSpeedResistanceFanPaneView: () => _
            });
            var r = i(650151),
                n = i(86441),
                s = i(951512),
                a = i(858063),
                o = i(826796),
                l = i(28035),
                d = i(739665),
                h = i(544445),
                c = i(296266),
                u = i(233330),
                p = i(623331);
            class _ extends u.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._numericFormatter = new s.NumericFormatter, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._source.points().length < 2) return;
                    const e = this._source.priceScale(),
                        t = (0,
                            r.ensureNotNull)(this._source.ownerSource()).firstValue();
                    if (null === t || !e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
                    if (this._points.length < 2) return;
                    const i = this._source.points()[0],
                        s = this._source.points()[1],
                        u = this._source.properties().childs(),
                        _ = u.reverse.value(),
                        g = [],
                        f = _ ? s.price - i.price : i.price - s.price,
                        m = _ ? i.price : s.price;
                    for (let i = 1; i <= 7; i++) {
                        const r = "hlevel" + i,
                            n = this._source.properties().child(r).childs();
                        if (!n.visible.value()) continue;
                        const s = n.coeff.value(),
                            a = n.color.value(),
                            o = m + s * f,
                            l = e.priceToCoordinate(o, t);
                        g.push({
                            coeff: s,
                            color: a,
                            y: l,
                            index: i
                        })
                    }
                    const v = [],
                        x = _ ? s.index - i.index : i.index - s.index,
                        w = _ ? i.index : s.index;
                    for (let e = 1; e <= 7; e++) {
                        const t = "vlevel" + e,
                            i = this._source.properties().child(t).childs();
                        if (!i.visible.value()) continue;
                        const r = i.coeff.value(),
                            n = i.color.value(),
                            s = Math.round(w + r * x),
                            a = this._model.timeScale().indexToCoordinate(s);
                        v.push({
                            coeff: r,
                            color: n,
                            x: a,
                            index: e
                        })
                    }
                    const R = new l.CompositeRenderer,
                        y = this._points[0],
                        T = this._points[1],
                        b = Math.min(y.x, T.x),
                        P = Math.min(y.y, T.y),
                        L = Math.max(y.x, T.x),
                        S = Math.max(y.y, T.y),
                        C = u.grid.childs().color.value(),
                        M = u.grid.childs().linewidth.value(),
                        I = u.grid.childs().linestyle.value();
                    for (let e = 0; e < g.length; e++) {
                        const t = new n.Point(b, g[e].y),
                            i = new n.Point(L, g[e].y);
                        if (u.grid.childs().visible.value()) {
                            const e = {
                                    points: [t, i],
                                    color: C,
                                    linewidth: M,
                                    linestyle: I,
                                    extendleft: !1,
                                    extendright: !1,
                                    leftend: d.LineEnd.Normal,
                                    rightend: d.LineEnd.Normal
                                },
                                r = new c.TrendLineRenderer;
                            r.setData(e), R.append(r)
                        }
                        if (u.showLeftLabels.value()) {
                            const i = {
                                points: [t],
                                text: this._numericFormatter.format(g[e].coeff),
                                color: g[e].color,
                                vertAlign: "middle",
                                horzAlign: "right",
                                font: p.CHART_FONT_FAMILY,
                                offsetX: 5,
                                offsetY: 0,
                                fontsize: 12,
                                forceTextAlign: !0
                            };
                            R.append(new h.TextRenderer(i))
                        }
                        if (u.showRightLabels.value()) {
                            const t = {
                                points: [i],
                                text: this._numericFormatter.format(g[e].coeff),
                                color: g[e].color,
                                vertAlign: "middle",
                                horzAlign: "left",
                                font: p.CHART_FONT_FAMILY,
                                offsetX: 5,
                                offsetY: 0,
                                fontsize: 12,
                                forceTextAlign: !0
                            };
                            R.append(new h.TextRenderer(t))
                        }
                    }
                    for (let e = 0; e < v.length; e++) {
                        const t = new n.Point(v[e].x, P),
                            i = new n.Point(v[e].x, S);
                        if (u.grid.childs().visible.value()) {
                            const e = {
                                    points: [t, i],
                                    color: C,
                                    linewidth: M,
                                    linestyle: I,
                                    extendleft: !1,
                                    extendright: !1,
                                    leftend: d.LineEnd.Normal,
                                    rightend: d.LineEnd.Normal
                                },
                                r = new c.TrendLineRenderer;
                            r.setData(e), R.append(r)
                        }
                        if (u.showTopLabels.value()) {
                            const i = {
                                points: [t],
                                text: this._numericFormatter.format(v[e].coeff),
                                color: v[e].color,
                                vertAlign: "bottom",
                                horzAlign: "center",
                                font: p.CHART_FONT_FAMILY,
                                offsetX: 0,
                                offsetY: 5,
                                fontsize: 12
                            };
                            R.append(new h.TextRenderer(i))
                        }
                        if (u.showBottomLabels.value()) {
                            const t = {
                                points: [i],
                                text: this._numericFormatter.format(v[e].coeff),
                                color: v[e].color,
                                vertAlign: "top",
                                horzAlign: "center",
                                font: p.CHART_FONT_FAMILY,
                                offsetX: 0,
                                offsetY: 5,
                                fontsize: 12
                            };
                            R.append(new h.TextRenderer(t))
                        }
                    }
                    const N = u.fillBackground.value(),
                        k = u.transparency.value();
                    for (let e = 0; e < g.length; e++) {
                        const t = new n.Point(T.x, g[e].y);
                        if (e > 0 && N) {
                            const i = {
                                    p1: y,
                                    p2: t,
                                    p3: y,
                                    p4: new n.Point(T.x, g[e - 1].y),
                                    color: g[e].color,
                                    transparency: k,
                                    hittestOnBackground: !0,
                                    extendLeft: !1
                                },
                                r = new o.ChannelRenderer;
                            r.setData(i), R.append(r)
                        } {
                            const i = {
                                    points: [y, t],
                                    color: g[e].color,
                                    linewidth: u.linewidth.value(),
                                    linestyle: u.linestyle.value(),
                                    extendleft: !1,
                                    extendright: !0,
                                    leftend: d.LineEnd.Normal,
                                    rightend: d.LineEnd.Normal
                                },
                                r = new c.TrendLineRenderer;
                            r.setData(i), r.setHitTest(new a.HitTestResult(a.HitTestResult.MOVEPOINT, void 0, {
                                type: "h",
                                index: g[e].index
                            })), R.append(r)
                        }
                    }
                    for (let e = 0; e < v.length; e++) {
                        const t = new n.Point(v[e].x, T.y);
                        if (e > 0 && N) {
                            const i = {
                                    p1: y,
                                    p2: t,
                                    p3: y,
                                    p4: new n.Point(v[e - 1].x, T.y),
                                    color: v[e].color,
                                    transparency: k,
                                    hittestOnBackground: !0,
                                    extendLeft: !1
                                },
                                r = new o.ChannelRenderer;
                            r.setData(i), R.append(r)
                        } {
                            const i = {
                                    points: [y, t],
                                    color: v[e].color,
                                    linewidth: u.linewidth.value(),
                                    linestyle: u.linestyle.value(),
                                    extendleft: !1,
                                    extendright: !0,
                                    leftend: d.LineEnd.Normal,
                                    rightend: d.LineEnd.Normal
                                },
                                r = new c.TrendLineRenderer;
                            r.setData(i), r.setHitTest(new a.HitTestResult(a.HitTestResult.MOVEPOINT, void 0, {
                                type: "v",
                                index: v[e].index
                            })), R.append(r)
                        }
                    }
                    this.addAnchors(R), this._renderer = R
                }
            }
        },
        366410: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibSpiralPaneView: () => p
            });
            var r = i(28035),
                n = i(739665),
                s = i(296266),
                a = i(233330),
                o = i(858063),
                l = i(914679),
                d = i(837291),
                h = i(904244);
            const c = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
            class u extends h.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 2) return null;
                    const t = this._data.points[0],
                        i = this._data.points[1].subtract(t),
                        r = e.subtract(t),
                        n = i.normalized(),
                        s = n.transposed(),
                        a = r.normalized();
                    let l = Math.acos(n.dotProduct(a));
                    Math.asin(s.dotProduct(a)) < 0 && (l = 2 * Math.PI - l);
                    const h = this._data.counterclockwise ? -1 : 1,
                        c = r.length(),
                        u = (0, d.interactionTolerance)().curve;
                    for (let e = 0; e < 4; e++) {
                        const t = h * l / (.5 * Math.PI);
                        let r = this._continiusFib(t + 4 * e);
                        if (null !== r && (r = r * i.length() / 5, Math.abs(r - c) < u)) return new o.HitTestResult(o.HitTestResult.MOVEPOINT)
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 2) return;
                    const t = e.context;
                    t.lineCap = "round", t.strokeStyle = this._data.color;
                    const i = this._data.points[0],
                        r = this._data.points[1];
                    t.translate(i.x, i.y);
                    let n = r.subtract(i);
                    const s = n.length();
                    n = n.normalized();
                    let a = Math.acos(n.x);
                    Math.asin(n.y) < 0 && (a = 2 * Math.PI - a), t.rotate(a), t.scale(s / 5, s / 5), t.lineWidth = this._data.linewidth, (0, l.setLineStyle)(t, this._data.linestyle);
                    const o = Math.PI / 100;
                    t.moveTo(0, 0);
                    const d = this._data.counterclockwise ? -1 : 1;
                    for (let e = 0; e < 50 * (c.length - 1); e++) {
                        const i = d * e * o,
                            r = this._continiusFib(e / 50);
                        if (null === r) break;
                        const n = Math.cos(i) * r,
                            s = Math.sin(i) * r;
                        t.lineTo(n, s)
                    }
                    t.scale(5 / s, 5 / s), t.rotate(-a), t.stroke()
                }
                _continiusFib(e) {
                    const t = Math.floor(e),
                        i = Math.ceil(e);
                    if (i >= c.length) return null;
                    let r = e - t;
                    r = Math.pow(r, 1.15);
                    return c[t] + (c[i] - c[t]) * r
                }
            }
            class p extends a.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._trendLineRenderer = new s.TrendLineRenderer, this._spiralRenderer = new u, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const e = new r.CompositeRenderer,
                        t = this._source.properties().childs(); {
                        const i = {
                            points: [this._points[0], this._points[1]],
                            color: t.linecolor.value(),
                            linewidth: t.linewidth.value(),
                            linestyle: t.linestyle.value(),
                            extendleft: !1,
                            extendright: !0,
                            leftend: n.LineEnd.Normal,
                            rightend: n.LineEnd.Normal
                        };
                        this._trendLineRenderer.setData(i), e.append(this._trendLineRenderer)
                    } {
                        const i = {
                            points: this._points,
                            color: t.linecolor.value(),
                            linewidth: t.linewidth.value(),
                            linestyle: t.linestyle.value(),
                            counterclockwise: t.counterclockwise.value()
                        };
                        this._spiralRenderer.setData(i), e.append(this._spiralRenderer)
                    }
                    this.addAnchors(e), this._renderer = e
                }
            }
        },
        386470: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FibTimeZonePaneView: () => p
            });
            var r = i(86441),
                n = i(274131),
                s = i(544445),
                a = i(603823),
                o = i(296266),
                l = i(858063),
                d = i(28035),
                h = i(739665),
                c = i(623331),
                u = i(233330);
            class p extends u.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._levels = [], this._trendRenderer = new o.TrendLineRenderer, this._renderer = new d.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer.clear(), this._source.points().length < 1) return;
                    const o = this._model.timeScale();
                    if (o.isEmpty()) return;
                    const [d, u] = this._source.points(), p = this._source.properties().childs(), _ = d.index;
                    if (null === o.visibleBarsStrictRange()) return;
                    this._levels = [];
                    const g = u ? u.index - d.index : 1;
                    for (let e = 1; e <= 11; e++) {
                        const t = p["level" + e].childs();
                        if (!t.visible.value()) continue;
                        const i = Math.round(_ + t.coeff.value() * g),
                            r = {
                                index: e,
                                x: o.indexToCoordinate(i),
                                color: t.color.value(),
                                width: t.linewidth.value(),
                                style: t.linestyle.value(),
                                text: String(t.coeff.value())
                            };
                        this._levels.push(r)
                    }
                    if (p.fillBackground.value()) {
                        const t = p.transparency.value();
                        for (let i = 1; i < this._levels.length; i++) {
                            const n = this._levels[i - 1],
                                s = {
                                    points: [new r.Point(this._levels[i].x, 0), new r.Point(n.x, e)],
                                    color: this._levels[i].color,
                                    linewidth: 0,
                                    backcolor: this._levels[i].color,
                                    fillBackground: !0,
                                    transparency: t,
                                    extendLeft: !1,
                                    extendRight: !1
                                },
                                o = new a.RectangleRenderer(void 0, void 0, !0);
                            o.setData(s), this._renderer.append(o)
                        }
                    }
                    let f = p.horzLabelsAlign.value();
                    f = "left" === f ? "right" : "right" === f ? "left" : "center";
                    const m = p.vertLabelsAlign.value();
                    for (let a = 0; a < this._levels.length; a++) {
                        let o;
                        const d = this._levels[a].color;
                        if (p.showLabels.value()) {
                            let n;
                            switch (m) {
                                case "top":
                                    n = new r.Point(this._levels[a].x, 0);
                                    break;
                                case "middle":
                                    n = new r.Point(this._levels[a].x, .5 * e);
                                    break;
                                default:
                                    n = new r.Point(this._levels[a].x, e)
                            }
                            const l = {
                                    points: [n],
                                    text: this._levels[a].text,
                                    color: d,
                                    vertAlign: m,
                                    horzAlign: f,
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 2,
                                    offsetY: 0,
                                    fontsize: 12
                                },
                                h = new s.TextRenderer(l);
                            this._needLabelExclusionPath(h) && (o = null !== (i = (0, s.getTextBoundaries)(h, t, e)) && void 0 !== i ? i : void 0), this._renderer.append(h)
                        }
                        const h = {
                                x: this._levels[a].x,
                                color: d,
                                linewidth: this._levels[a].width,
                                linestyle: this._levels[a].style,
                                excludeBoundaries: o
                            },
                            u = new l.HitTestResult(l.HitTestResult.MOVEPOINT, void 0, this._levels[a].index),
                            _ = new n.VerticalLineRenderer;
                        _.setData(h), _.setHitTest(u), this._renderer.append(_)
                    }
                    if (2 === this._points.length) {
                        const e = p.trendline.childs(),
                            t = {
                                points: [this._points[0], this._points[1]],
                                color: e.color.value(),
                                linewidth: e.linewidth.value(),
                                linestyle: e.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: h.LineEnd.Normal,
                                rightend: h.LineEnd.Normal
                            };
                        this._trendRenderer.setData(t), this._renderer.append(this._trendRenderer)
                    }
                    2 === this._source.points().length ? this._renderer.append(this.createLineAnchor({
                        points: this._points
                    }, 0)) : this._points.length > 0 && this._renderer.append(this.createLineAnchor({
                        points: [new r.Point(this._points[0].x, e / 2)],
                        hittestResult: l.HitTestResult.MOVEPOINT
                    }, 0))
                }
                _needLabelExclusionPath(e) {
                    return "center" === this._source.properties().childs().horzLabelsAlign.value()
                }
            }
        },
        42242: (e, t, i) => {
            "use strict";
            const {
                LineToolPaneViewFibWithLabels: r
            } = i(562432);
            var n = i(86441).Point,
                s = i(296266).TrendLineRenderer,
                a = i(858063).HitTestResult,
                o = i(28035).CompositeRenderer,
                l = i(737019).ArcWedgeRenderer,
                d = i(739665).LineEnd;
            t.FibWedgePaneView = class extends r {
                constructor(e, t) {
                    super(e, t), this._levels = [], this._baseTrendRenderer = new s, this._edgeTrendRenderer = new s, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._levels = [], this._points.length < 3) this._updateRenderer();
                    else {
                        var e = this._points,
                            t = e[0],
                            i = e[1],
                            r = e[2],
                            s = i.subtract(t).normalized(),
                            a = r.subtract(t).normalized(),
                            o = new n(1, 0),
                            l = new n(0, 1),
                            d = Math.acos(s.dotProduct(o));
                        s.dotProduct(l) < 0 && (d = 2 * Math.PI - d), this._edge1 = d;
                        var h = Math.acos(a.dotProduct(o));
                        a.dotProduct(l) < 0 && (h = 2 * Math.PI - h), this._edge2 = h, d < h && (this._edge1 = Math.max(d, h), this._edge2 = Math.min(d, h) + 2 * Math.PI), Math.abs(d - h) > Math.PI && (this._edge1 = Math.min(d, h), this._edge2 = Math.max(d, h) - 2 * Math.PI);
                        for (var c = this._source.properties(), u = 1; u <= this._source.levelsCount(); u++) {
                            var p = c["level" + u];
                            if (p.visible.value()) {
                                var _ = p.coeff.value(),
                                    g = p.color.value(),
                                    f = i.subtract(t).length() * _,
                                    m = s.add(a).scaled(.5).normalized().scaled(f),
                                    v = t.add(m);
                                this._levels.push({
                                    coeff: _,
                                    color: g,
                                    radius: f,
                                    labelPoint: v,
                                    p1: t.add(s.scaled(f)),
                                    p2: t.add(a.scaled(f)),
                                    linewidth: p.linewidth.value(),
                                    linestyle: p.linestyle.value(),
                                    index: u
                                })
                            }
                        }
                        this._points.length < 2 || this._updateRenderer()
                    }
                }
                _updateRenderer() {
                    if (!((m = this._points).length < 2)) {
                        var e = new o,
                            t = this._source.properties(),
                            i = m[0],
                            r = m[1],
                            n = {
                                points: [i, r],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: t.trendline.color.value(),
                                linewidth: t.trendline.visible.value() ? t.trendline.linewidth.value() : 0,
                                linestyle: t.trendline.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: d.Normal,
                                rightend: d.Normal
                            };
                        if (this._baseTrendRenderer.setData(n), e.append(this._baseTrendRenderer), m.length < 3) return this.addAnchors(e), void(this._renderer = e);
                        var s = m[2],
                            h = s.data,
                            c = r.subtract(i).length(),
                            u = s.subtract(i).normalized();
                        (s = i.add(u.scaled(c))).data = h, n = {
                            points: [i, s],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: t.trendline.color.value(),
                            linewidth: t.trendline.visible.value() ? t.trendline.linewidth.value() : 0,
                            linestyle: t.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: d.Normal,
                            rightend: d.Normal
                        }, this._edgeTrendRenderer.setData(n), e.append(this._edgeTrendRenderer);
                        for (var p = this._levels.length - 1; p >= 0; p--) {
                            var _ = this._levels[p],
                                g = {};
                            g.center = this._points[0], g.radius = _.radius, g.prevRadius = p > 0 ? this._levels[p - 1].radius : 0, g.edge = this._edge, g.color = _.color, g.linewidth = _.linewidth, g.edge1 = this._edge1, g.edge2 = this._edge2, g.p1 = _.p1, g.p2 = _.p2, g.fillBackground = t.fillBackground.value(), g.transparency = t.transparency.value();
                            var f = new l;
                            f.setData(g), f.setHitTest(new a(a.MOVEPOINT, null, _.index)), e.append(f);
                            const i = this._updateLabelForLevel({
                                i: p,
                                levelIndex: _.index,
                                color: _.color,
                                leftPoint: _.labelPoint,
                                rightPoint: _.labelPoint,
                                price: 0,
                                horzAlign: "left",
                                vertAlign: "middle"
                            });
                            null !== i && e.append(i)
                        }
                        var m = [i, r];
                        this._model.lineBeingCreated() !== this._source && m.push(s), e.append(this.createLineAnchor({
                            points: m
                        }, 0)), this._renderer = e
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        185563: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                FlagMarkPaneView: () => c
            });
            var r = i(233330),
                n = i(28035),
                s = i(583110),
                a = i(858063),
                o = i(934026),
                l = i(914679),
                d = i(904244);
            class h extends d.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    const {
                        x: t,
                        y: i
                    } = this._data.point;
                    return e.x < t || e.x > t + 20 || e.y < i - 22 || e.y > i ? null : new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                }
                doesIntersectWithBox(e) {
                    return null !== this._data && (0, o.pointInBox)(this._data.point, e)
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    t.translate(Math.round(this._data.point.x) - .5, Math.round(this._data.point.y - 22) - .5), t.fillStyle = "#434651", (0, l.drawRoundRect)(t, 0, 0, 2, 22, 1), t.fill(), t.fillStyle = this._data.color, t.beginPath(), t.moveTo(6.87, 0), t.bezierCurveTo(5.62, 0, 4.46, .23, 3.32, .69), t.bezierCurveTo(3.26, .71, 3.2, .75, 3.15, .8), t.bezierCurveTo(3.06, .89, 3, 1.02, 3, 1.16), t.lineTo(3, 1.19), t.lineTo(3, 12.5), t.bezierCurveTo(3, 12.8, 3.3, 13.02, 3.59, 12.93), t.bezierCurveTo(4.61, 12.64, 5.94, 12.44, 6.87, 12.44), t.bezierCurveTo(8.5, 12.44, 10.09, 12.83, 11.63, 13.21), t.bezierCurveTo(13.19, 13.6, 14.79, 14, 16.45, 14), t.bezierCurveTo(17.59, 14, 18.65, 13.81, 19.69, 13.43), t.bezierCurveTo(19.88, 13.36, 20, 13.18, 20, 12.98), t.lineTo(20, 1.19), t.bezierCurveTo(20, 1.06, 19.83, .93, 19.66, .99), t.bezierCurveTo(18.63, 1.38, 17.58, 1.56, 16.45, 1.56), t.bezierCurveTo(14.82, 1.56, 13.23, 1.17, 11.69, .79), t.bezierCurveTo(10.14, .4, 8.53, 0, 6.87, 0), t.closePath(), t.fill()
                }
            }
            class c extends r.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._flagMarkRenderer = new h, this._renderer = null, this._anchorsOffset = null
                }
                setAnchors(e) {
                    this._anchorsOffset = e
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, 1 !== this._points.length) return;
                    this._flagMarkRenderer.setData({
                        point: this._points[0],
                        color: this._getSource().properties().childs().flagColor.value()
                    });
                    const e = this._getModel();
                    this._renderer = new n.CompositeRenderer, this._renderer.append(this._flagMarkRenderer);
                    const t = [this._anchorsOffset ? this._points[0].add(this._anchorsOffset) : this._points[0].clone()];
                    this._renderer.append(new s.SelectionRenderer({
                        points: t,
                        bgColors: this._lineAnchorColors(t),
                        visible: this.areAnchorsVisible(),
                        barSpacing: e.timeScale().barSpacing(),
                        hittestResult: a.HitTestResult.MOVEPOINT
                    }))
                }
            }
        },
        609694: (e, t, i) => {
            "use strict";
            var r = i(746279).DisjointChannelRenderer,
                n = i(296266).TrendLineRenderer,
                s = i(544445).TextRenderer,
                a = i(28035).CompositeRenderer,
                o = i(623331),
                l = i(764091).AlertableLineSourcePaneView;
            t.FlatBottomPaneView = class extends l {
                constructor(e, t) {
                    super(e, t), this._label1 = null, this._label2 = null, this._trendLineRendererPoints12 = new n, this._trendLineRendererPoints43 = new n, this._disjointChannelRenderer = new r, this._p1LabelRenderer = new s, this._p2LabelRenderer = new s, this._p3LabelRenderer = new s, this._p4LabelRenderer = new s, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._label1 = null, this._label2 = null, !(this._source.points().length < 2) && this._source.priceScale()) {
                        var e = this._source.points()[0],
                            t = this._source.points()[1],
                            i = this._source.ownerSource().firstValue();
                        if (this._price1 = this._source.priceScale().formatPrice(e.price, i), this._price2 = this._source.priceScale().formatPrice(t.price, i), 3 === this._source.points().length) {
                            var r = this._source.points()[2];
                            this._price3 = this._source.priceScale().formatPrice(r.price, i)
                        }
                        if (!(this._points.length < 2)) {
                            var n, s = new a,
                                l = (e = this._points[0], t = this._points[1], this._source.properties()),
                                d = this._model,
                                h = this._source;
                            if (3 === this._points.length && ((r = this._points[2]).x = t.x, (n = e.clone()).y = r.y, n.data = 3, l.fillBackground.value())) {
                                var c = d.timeScale().width(),
                                    u = h.priceScale().height(),
                                    p = l.extendLeft.value(),
                                    _ = l.extendRight.value();
                                this._disjointChannelRenderer.setData({
                                    width: c,
                                    height: u,
                                    extendleft: p,
                                    extendright: _,
                                    points: [e, t, r, n],
                                    backcolor: l.backgroundColor.value(),
                                    transparency: l.transparency.value(),
                                    hittestOnBackground: TradingView.isMobile.any()
                                }), s.append(this._disjointChannelRenderer)
                            }
                            var g = function(e, t) {
                                return {
                                    points: [e, t],
                                    width: d.timeScale().width(),
                                    height: h.priceScale().height(),
                                    color: l.linecolor.value(),
                                    linewidth: l.linewidth.value(),
                                    linestyle: l.linestyle.value(),
                                    extendleft: l.extendLeft.value(),
                                    extendright: l.extendRight.value(),
                                    leftend: l.leftEnd.value(),
                                    rightend: l.rightEnd.value()
                                }
                            };
                            if (this._trendLineRendererPoints12.setData(g(e, t)), s.append(this._trendLineRendererPoints12), 2 === this._points.length) return this.addAnchors(s), void(this._renderer = s);
                            var f = this,
                                m = function(e, t, i, r, n, a) {
                                    if (f._source.properties().showPrices.value()) {
                                        var l = {
                                            points: [i],
                                            text: n,
                                            color: f._source.properties().textcolor.value(),
                                            horzAlign: i.x > r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: o.CHART_FONT_FAMILY,
                                            offsetX: 6,
                                            offsetY: 0,
                                            boxPadding: 0,
                                            bold: f._source.properties().bold.value(),
                                            italic: f._source.properties().italic.value(),
                                            fontsize: f._source.properties().fontsize.value(),
                                            forceTextAlign: !0
                                        };
                                        e.setData(l), s.append(e);
                                        l = {
                                            points: [r],
                                            text: a,
                                            color: f._source.properties().textcolor.value(),
                                            horzAlign: i.x < r.x ? "left" : "right",
                                            vertAlign: "middle",
                                            font: o.CHART_FONT_FAMILY,
                                            offsetX: 6,
                                            offsetY: 0,
                                            boxPadding: 0,
                                            bold: f._source.properties().bold.value(),
                                            italic: f._source.properties().italic.value(),
                                            fontsize: f._source.properties().fontsize.value(),
                                            forceTextAlign: !0
                                        };
                                        t.setData(l), s.append(t)
                                    }
                                };
                            m(this._p1LabelRenderer, this._p2LabelRenderer, e, t, this._price1, this._price2), this._trendLineRendererPoints43.setData(g(n, r)), s.append(this._trendLineRendererPoints43), m(this._p3LabelRenderer, this._p4LabelRenderer, r, n, this._price3, this._price3);
                            var v = [e, t, r, n];
                            this._model.lineBeingCreated() === this._source && v.pop(), s.append(this.createLineAnchor({
                                points: v
                            }, 0)), e && t && this._addAlertRenderer(s, [e, t]), this._renderer = s
                        }
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        57226: (e, t, i) => {
            "use strict";
            i.d(t, {
                GannArcRenderer: () => o
            });
            var r = i(86441),
                n = i(114123),
                s = i(858063),
                a = i(904244);
            class o extends a.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    e = e.subtract(this._data.center);
                    const t = this._data.edge.subtract(this._data.center),
                        i = t.y / t.x;
                    e = new r.Point(e.x, e.y / i);
                    let n = this._data.point.subtract(this._data.center);
                    n = new r.Point(n.x, n.y / i);
                    const a = n.length(),
                        o = e.length();
                    let l = this._data.prevPoint.subtract(this._data.center);
                    l = new r.Point(l.x, l.y / i);
                    const d = l.length();
                    return Math.abs(o - a) < 5 && t.x * e.x >= 0 && t.y * e.y >= 0 ? new s.HitTestResult(s.HitTestResult.MOVEPOINT) : this._data.fillBack && o >= d && o <= a && t.x * e.x >= 0 && t.y * e.y >= 0 ? new s.HitTestResult(s.HitTestResult.MOVEPOINT_BACKGROUND) : null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.translate(this._data.center.x, this._data.center.y);
                    const i = this._data.edge.subtract(this._data.center),
                        s = i.y / i.x;
                    let a = this._data.point.subtract(this._data.center);
                    a = new r.Point(a.x, a.y / s);
                    let o = a.length(),
                        l = this._data.prevPoint.subtract(this._data.center);
                    l = new r.Point(l.x, l.y / s);
                    let d = l.length();
                    t.scale(1, s);
                    const h = Math.abs(this._data.edge.x - this._data.center.x);
                    if (Math.abs(o) > h) {
                        const e = Math.sign(this._data.edge.x - this._data.center.x) * h;
                        t.rect(0, 0, e, e), t.clip()
                    }
                    this._data.fillBack && (this._data.point.x < this._data.center.x && (o = -o, d = -d), t.beginPath(), t.moveTo(d, 0), t.lineTo(o, 0), t.arcTo(o, o, 0, o, Math.abs(o)), t.lineTo(0, d), t.arcTo(d, d, d, 0, Math.abs(d)), t.fillStyle = (0, n.generateColor)(this._data.color, this._data.transparency, !0), t.fill()), t.beginPath(), this._data.point.x > this._data.center.x ? t.arc(0, 0, Math.abs(o), 0, Math.PI / 2, !1) : t.arc(0, 0, Math.abs(o), -Math.PI / 2, -Math.PI, !0), t.scale(1, 1 / s), t.stroke()
                }
            }
        },
        17129: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                GannComplexPaneView: () => u
            });
            var r = i(86441),
                n = i(233330),
                s = i(296266),
                a = i(544445),
                o = i(28035),
                l = i(739665),
                d = i(631586),
                h = i(57226),
                c = i(768038);
            class u extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._verticalLevelsRenderers = [], this._horizontalLevelsRenderers = [], this._fanRenderers = [], this._arcRenderers = [], this._priceDiffTextRenderer = new a.TextRenderer, this._indexDiffTextRenderer = new a.TextRenderer, this._ratioTextRenderer = new a.TextRenderer, this._renderer = null, this._initRenderers()
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = new o.CompositeRenderer,
                        t = this._getPoints();
                    if (t.length < 2) return this.addAnchors(e), void(this._renderer = e);
                    let [i, r] = t;
                    const n = this._getSource(),
                        s = n.isReversed();
                    s && ([r, i] = t);
                    const a = r.x - i.x,
                        l = r.y - i.y,
                        d = i,
                        h = r,
                        c = this._getModel(),
                        u = {
                            barsCoordsRange: a,
                            priceCoordsRange: l,
                            startPoint: d,
                            endPoint: h,
                            p1: i,
                            p2: r,
                            isLabelsVisible: n.isLabelsVisible(),
                            reversed: s
                        };
                    this._prepareLevels(e, u), this._prepareFanLines(e, u), this._prepareArcs(e, u), this._prepareLabels(e, u);
                    const p = [i, r];
                    c.lineBeingCreated() === n && p.pop(), e.append(this.createLineAnchor({
                        points: p
                    }, 0)), this._renderer = e
                }
                _initRenderers() {
                    const e = this._getSource(),
                        t = e.levelsCount();
                    for (let e = 0; e < t; e++) this._verticalLevelsRenderers.push(new s.TrendLineRenderer), this._horizontalLevelsRenderers.push(new s.TrendLineRenderer);
                    const i = e.fanLinesCount();
                    for (let e = 0; e < i; e++) this._fanRenderers.push(new s.TrendLineRenderer);
                    const r = e.arcsCount();
                    for (let e = 0; e < r; e++) this._arcRenderers.push(new h.GannArcRenderer)
                }
                _prepareLevels(e, t) {
                    const {
                        startPoint: i,
                        endPoint: n,
                        barsCoordsRange: s,
                        priceCoordsRange: a
                    } = t, o = this._getSource().levels();
                    for (const t of o) {
                        if (!t.visible) continue;
                        const o = t.index / 5,
                            h = i.x + o * s,
                            c = {
                                points: [new r.Point(h, i.y), new r.Point(h, n.y)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: d.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: l.LineEnd.Normal,
                                rightend: l.LineEnd.Normal
                            },
                            u = this._verticalLevelsRenderers[t.index];
                        u.setData(c), e.append(u);
                        const p = i.y + o * a,
                            _ = {
                                points: [new r.Point(i.x, p), new r.Point(n.x, p)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: d.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: l.LineEnd.Normal,
                                rightend: l.LineEnd.Normal
                            },
                            g = this._horizontalLevelsRenderers[t.index];
                        g.setData(_), e.append(g)
                    }
                }
                _prepareFanLines(e, t) {
                    const {
                        p1: i,
                        startPoint: n,
                        endPoint: s,
                        barsCoordsRange: a,
                        priceCoordsRange: o
                    } = t, h = this._getSource().fanLines();
                    for (const t of h) {
                        if (!t.visible) continue;
                        const h = t.x,
                            c = t.y;
                        let u, p;
                        if (h > c) {
                            u = s.x;
                            const e = c / h;
                            p = n.y + e * o
                        } else {
                            p = s.y;
                            const e = h / c;
                            u = n.x + e * a
                        }
                        const _ = {
                                points: [i, new r.Point(u, p)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: d.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: l.LineEnd.Normal,
                                rightend: l.LineEnd.Normal
                            },
                            g = this._fanRenderers[t.index];
                        g.setData(_), e.append(g)
                    }
                }
                _prepareArcs(e, t) {
                    const {
                        p1: i,
                        startPoint: n,
                        endPoint: s,
                        barsCoordsRange: a,
                        priceCoordsRange: o
                    } = t;
                    let l = i;
                    const d = this._getSource(),
                        h = d.isArcsBackgroundFilled(),
                        c = d.arcsBackgroundTransparency(),
                        u = d.arcs();
                    for (const t of u) {
                        if (!t.visible) continue;
                        const i = t.x / 5,
                            d = t.y / 5,
                            u = n.x + i * a,
                            p = n.y + d * o,
                            _ = {
                                center: n,
                                point: new r.Point(u, p),
                                edge: s,
                                color: t.color,
                                linewidth: t.width,
                                fillBack: h,
                                transparency: c,
                                prevPoint: l
                            },
                            g = this._arcRenderers[t.index];
                        g.setData(_), e.append(g), l = _.point
                    }
                }
                _prepareLabels(e, t) {
                    const {
                        p1: i,
                        p2: n,
                        isLabelsVisible: s,
                        reversed: a
                    } = t;
                    if (!s) return;
                    const o = this._getSource(),
                        l = o.ownerSource();
                    let d = o.getPriceDiff(),
                        h = o.getIndexDiff();
                    if (null === d || null === h || null === l) return;
                    a && (d = -d, h = -h);
                    const u = new r.Point(i.x, n.y),
                        p = (0, c.forceLTRStr)(l.formatter().format(d)),
                        _ = this._getLabelData(u, p);
                    _.horzAlign = h > 0 ? "right" : "left", _.vertAlign = d > 0 ? "bottom" : "top", _.offsetX = 10, _.offsetY = d > 0 ? 8 : 10, _.forceTextAlign = !0, this._priceDiffTextRenderer.setData(_),
                        e.append(this._priceDiffTextRenderer);
                    const g = new r.Point(n.x, i.y),
                        f = (0, c.forceLTRStr)(h.toString()),
                        m = this._getLabelData(g, f);
                    m.horzAlign = h > 0 ? "left" : "right", m.vertAlign = d > 0 ? "top" : "bottom", m.offsetX = 10, m.offsetY = d > 0 ? 10 : 8, m.forceTextAlign = !0, this._indexDiffTextRenderer.setData(m), e.append(this._indexDiffTextRenderer);
                    const v = o.getScaleRatio();
                    if (null === v) return;
                    const x = o.getScaleRatioFormatter(),
                        w = (0, c.forceLTRStr)(x.format(v)),
                        R = this._getLabelData(n, w);
                    R.horzAlign = h > 0 ? "left" : "right", R.vertAlign = d > 0 ? "bottom" : "top", R.offsetX = 10, R.offsetY = d > 0 ? 8 : 10, R.forceTextAlign = !0, this._ratioTextRenderer.setData(R), e.append(this._ratioTextRenderer)
                }
                _getLabelData(e, t) {
                    const i = this._getSource(),
                        {
                            textColor: r,
                            font: n,
                            fontSize: s,
                            bold: a,
                            italic: o
                        } = i.getLabelsStyle();
                    return {
                        points: [e],
                        backgroundColor: "transparent",
                        text: t,
                        font: n,
                        bold: a,
                        italic: o,
                        fontsize: s,
                        color: r,
                        vertAlign: "top",
                        horzAlign: "center",
                        offsetX: 0,
                        offsetY: 0,
                        backgroundRoundRect: 4
                    }
                }
            }
        },
        612393: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                GannFanPaneView: () => u
            });
            var r = i(86441),
                n = i(858063),
                s = i(826796),
                a = i(28035),
                o = i(739665),
                l = i(544445),
                d = i(296266),
                h = i(233330),
                c = i(623331);
            class u extends h.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._source.points().length < 2) return;
                    const e = this._source.priceScale();
                    if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
                    if (this._points.length < 2) return;
                    const t = this._points[0],
                        i = this._points[1],
                        h = [],
                        u = i.x - t.x,
                        p = i.y - t.y,
                        _ = this._source.properties().childs();
                    for (let e = 1; e <= 9; e++) {
                        const r = "level" + e,
                            n = this._source.properties().child(r).childs();
                        if (!n.visible.value()) continue;
                        const s = n.coeff1.value(),
                            a = n.coeff2.value(),
                            o = s / a,
                            l = n.color.value(),
                            d = s + "/" + a;
                        let c, _;
                        s > a ? (c = i.x, _ = t.y + p / o) : (c = t.x + u * o, _ = i.y), h.push({
                            label: d,
                            color: l,
                            x: c,
                            y: _,
                            linewidth: n.linewidth.value(),
                            linestyle: n.linestyle.value(),
                            index: e
                        })
                    }
                    const g = new a.CompositeRenderer,
                        f = _.fillBackground.value(),
                        m = _.transparency.value();
                    for (let e = 0; e < h.length; e++) {
                        const i = new r.Point(h[e].x, h[e].y);
                        if (f)
                            if (h[e].index < 4) {
                                const n = {
                                        p1: t,
                                        p2: i,
                                        p3: t,
                                        p4: new r.Point(h[e + 1].x, h[e + 1].y),
                                        color: h[e].color,
                                        transparency: m,
                                        hittestOnBackground: !0,
                                        extendLeft: !1
                                    },
                                    a = new s.ChannelRenderer;
                                a.setData(n), g.append(a)
                            } else if (h[e].index > 4 && e > 0) {
                            const n = {
                                    p1: t,
                                    p2: i,
                                    p3: t,
                                    p4: new r.Point(h[e - 1].x, h[e - 1].y),
                                    color: h[e].color,
                                    transparency: m,
                                    hittestOnBackground: !0,
                                    extendLeft: !1
                                },
                                a = new s.ChannelRenderer;
                            a.setData(n), g.append(a)
                        } {
                            const r = {
                                    points: [t, i],
                                    color: h[e].color,
                                    linewidth: h[e].linewidth,
                                    linestyle: h[e].linestyle,
                                    extendleft: !1,
                                    extendright: !0,
                                    leftend: o.LineEnd.Normal,
                                    rightend: o.LineEnd.Normal
                                },
                                s = new d.TrendLineRenderer;
                            s.setData(r), s.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, h[e].index)), g.append(s)
                        }
                        if (_.showLabels.value()) {
                            const t = {
                                points: [i],
                                text: h[e].label,
                                color: h[e].color,
                                vertAlign: "middle",
                                horzAlign: "left",
                                font: c.CHART_FONT_FAMILY,
                                offsetX: 0,
                                offsetY: 5,
                                fontsize: 12
                            };
                            g.append(new l.TextRenderer(t))
                        }
                    }
                    this.addAnchors(g), this._renderer = g
                }
            }
        },
        5547: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                GannFixedPaneView: () => h
            });
            var r = i(86441),
                n = i(233330),
                s = i(296266),
                a = i(28035),
                o = i(739665),
                l = i(631586),
                d = i(57226);
            class h extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._verticalLevelsRenderers = [], this._horizontalLevelsRenderers = [], this._fanRenderers = [], this._arcRenderers = [], this._renderer = null, this._initRenderers()
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = this._getSource(),
                        t = this._getPoints(),
                        i = e.getScreenPoints();
                    if (t.length < 2 || i.length < 2) return;
                    const [r, n] = i;
                    t[1] = r, t[1].data = 1, t[2] = n;
                    const s = this._getPoints(),
                        o = new a.CompositeRenderer;
                    if (s.length < 2) return this.addAnchors(o), void(this._renderer = o);
                    const l = s[0],
                        d = 3 === s.length ? s[2] : s[1],
                        h = d.x - l.x,
                        c = d.y - l.y,
                        u = l,
                        p = d,
                        _ = this._getModel(),
                        g = {
                            barsCoordsRange: h,
                            priceCoordsRange: c,
                            startPoint: u,
                            endPoint: p,
                            p1: l,
                            p2: d
                        };
                    this._prepareLevels(o, g), this._prepareFanLines(o, g), this._prepareArcs(o, g);
                    const f = [l, s[1]];
                    _.lineBeingCreated() === e && f.pop(), o.append(this.createLineAnchor({
                        points: f
                    }, 0)), this._renderer = o
                }
                _initRenderers() {
                    const e = this._getSource(),
                        t = e.levelsCount();
                    for (let e = 0; e < t; e++) this._verticalLevelsRenderers.push(new s.TrendLineRenderer), this._horizontalLevelsRenderers.push(new s.TrendLineRenderer);
                    const i = e.fanLinesCount();
                    for (let e = 0; e < i; e++) this._fanRenderers.push(new s.TrendLineRenderer);
                    const r = e.arcsCount();
                    for (let e = 0; e < r; e++) this._arcRenderers.push(new d.GannArcRenderer)
                }
                _prepareLevels(e, t) {
                    const {
                        startPoint: i,
                        endPoint: n,
                        barsCoordsRange: s,
                        priceCoordsRange: a
                    } = t, d = this._getSource().levels();
                    for (const t of d) {
                        if (!t.visible) continue;
                        const d = t.index / 5,
                            h = i.x + d * s,
                            c = {
                                points: [new r.Point(h, i.y), new r.Point(h, n.y)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: l.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: o.LineEnd.Normal,
                                rightend: o.LineEnd.Normal
                            },
                            u = this._verticalLevelsRenderers[t.index];
                        u.setData(c), e.append(u);
                        const p = i.y + d * a,
                            _ = {
                                points: [new r.Point(i.x, p), new r.Point(n.x, p)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: l.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: o.LineEnd.Normal,
                                rightend: o.LineEnd.Normal
                            },
                            g = this._horizontalLevelsRenderers[t.index];
                        g.setData(_), e.append(g)
                    }
                }
                _prepareFanLines(e, t) {
                    const {
                        p1: i,
                        startPoint: n,
                        endPoint: s,
                        barsCoordsRange: a,
                        priceCoordsRange: d
                    } = t, h = this._getSource().fanLines();
                    for (const t of h) {
                        if (!t.visible) continue;
                        const h = t.x,
                            c = t.y;
                        let u, p;
                        if (h > c) {
                            u = s.x;
                            const e = c / h;
                            p = n.y + e * d
                        } else {
                            p = s.y;
                            const e = h / c;
                            u = n.x + e * a
                        }
                        const _ = {
                                points: [i, new r.Point(u, p)],
                                color: t.color,
                                linewidth: t.width,
                                linestyle: l.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: o.LineEnd.Normal,
                                rightend: o.LineEnd.Normal
                            },
                            g = this._fanRenderers[t.index];
                        g.setData(_), e.append(g)
                    }
                }
                _prepareArcs(e, t) {
                    const {
                        p1: i,
                        startPoint: n,
                        endPoint: s,
                        barsCoordsRange: a,
                        priceCoordsRange: o
                    } = t;
                    let l = i;
                    const d = this._getSource(),
                        h = d.isArcsBackgroundFilled(),
                        c = d.arcsBackgroundTransparency(),
                        u = d.arcs();
                    for (const t of u) {
                        if (!t.visible) continue;
                        const i = t.x / 5,
                            d = t.y / 5,
                            u = n.x + i * a,
                            p = n.y + d * o,
                            _ = {
                                center: n,
                                point: new r.Point(u, p),
                                edge: s,
                                color: t.color,
                                linewidth: t.width,
                                fillBack: h,
                                transparency: c,
                                prevPoint: l
                            },
                            g = this._arcRenderers[t.index];
                        g.setData(_), e.append(g), l = _.point
                    }
                }
            }
        },
        883213: (e, t, i) => {
            "use strict";
            var r = i(86441).Point,
                n = i(233330).LineSourcePaneView,
                s = i(544445).TextRenderer,
                a = i(603823).RectangleRenderer,
                o = i(296266).TrendLineRenderer,
                l = i(28035).CompositeRenderer,
                d = i(951512).NumericFormatter,
                h = i(739665).LineEnd,
                c = i(623331);
            t.GannSquarePaneView = class extends n {
                constructor(e, t) {
                    super(e, t), this._numericFormatter = new d, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, !(this._source.points().length < 2) && this._source.priceScale() && !this._source.priceScale().isEmpty() && !this._model.timeScale().isEmpty()) {
                        var e = this._source.points()[0],
                            t = this._source.points()[1],
                            i = (C = this._source.properties()).reverse && C.reverse.value();
                        this._hlevels = [];
                        for (var n = i ? e.price - t.price : t.price - e.price, d = i ? t.price : e.price, u = this._source.ownerSource().firstValue(), p = 1; p <= 7; p++) {
                            if ((w = C["hlevel" + p]).visible.value()) {
                                var _ = w.coeff.value(),
                                    g = w.color.value(),
                                    f = d + _ * n,
                                    m = this._source.priceScale().priceToCoordinate(f, u);
                                this._hlevels.push({
                                    coeff: _,
                                    color: g,
                                    y: m
                                })
                            }
                        }
                        this._vlevels = [];
                        var v = i ? e.index - t.index : t.index - e.index,
                            x = i ? t.index : e.index;
                        for (p = 1; p <= 7; p++) {
                            var w;
                            if ((w = C["vlevel" + p]).visible.value()) {
                                _ = w.coeff.value(), g = w.color.value();
                                var R = Math.round(x + _ * v),
                                    y = this._model.timeScale().indexToCoordinate(R);
                                this._vlevels.push({
                                    coeff: _,
                                    color: g,
                                    x: y
                                })
                            }
                        }
                        if (this._hfans = [], this._vfans = [], C.fans.visible.value())
                            for (p = 1; p <= 7; p++) {
                                R = Math.round(x + C["hlevel" + p].coeff.value() * v), f = d + C["vlevel" + p].coeff.value() * n;
                                this._hfans.push(this._model.timeScale().indexToCoordinate(R)), this._vfans.push(this._source.priceScale().priceToCoordinate(f, u))
                            }
                        var T = new l;
                        if (this._points.length < 2) return this.addAnchors(T), void(this._renderer = T);
                        e = this._points[0], t = this._points[1];
                        var b = Math.min(e.x, t.x),
                            P = Math.min(e.y, t.y),
                            L = Math.max(e.x, t.x),
                            S = Math.max(e.y, t.y),
                            C = this._source.properties(),
                            M = this._source.properties().fillHorzBackground.value(),
                            I = this._source.properties().horzTransparency.value(),
                            N = this._source.properties().fillVertBackground.value(),
                            k = this._source.properties().vertTransparency.value();
                        for (p = 0; p < this._hlevels.length; p++) {
                            if (p > 0 && M) {
                                var A = this._hlevels[p - 1];
                                e = new r(b, this._hlevels[p].y), t = new r(L, A.y);
                                (z = {}).points = [e, t], z.color = this._hlevels[p].color, z.linewidth = 0, z.backcolor = this._hlevels[p].color, z.fillBackground = !0, z.transparency = I, z.extendLeft = !1, z.extendRight = !1, (H = new a(void 0, void 0, !0)).setData(z), T.append(H)
                            }
                            var D = {
                                points: [e = new r(b, this._hlevels[p].y), t = new r(L, this._hlevels[p].y)],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: this._hlevels[p].color,
                                linewidth: C.linewidth.value(),
                                linestyle: C.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: h.Normal,
                                rightend: h.Normal
                            };
                            if ((H = new o).setData(D), T.append(H), C.showLeftLabels.value()) {
                                var E = {
                                    points: [e],
                                    text: this._numericFormatter.format(this._hlevels[p].coeff),
                                    color: this._hlevels[p].color,
                                    vertAlign: "middle",
                                    horzAlign: "right",
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 5,
                                    offsetY: 0,
                                    fontsize: 12,
                                    forceTextAlign: !0
                                };
                                T.append(new s(E))
                            }
                            if (C.showRightLabels.value()) {
                                var B = {
                                    points: [t],
                                    text: this._numericFormatter.format(this._hlevels[p].coeff),
                                    color: this._hlevels[p].color,
                                    vertAlign: "middle",
                                    horzAlign: "left",
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 5,
                                    offsetY: 0,
                                    fontsize: 12
                                };
                                T.append(new s(B))
                            }
                        }
                        for (p = 0; p < this._vlevels.length; p++) {
                            e = new r(this._vlevels[p].x, P), t = new r(this._vlevels[p].x, S);
                            if (p > 0 && N) {
                                A = this._vlevels[p - 1];
                                var z, O = new r(A.x, P);
                                (z = {}).points = [O, t], z.color = this._vlevels[p].color, z.linewidth = 0, z.backcolor = this._vlevels[p].color, z.fillBackground = !0, z.transparency = k, z.extendLeft = !1, z.extendRight = !1, (H = new a(void 0, void 0, !0)).setData(z), T.append(H)
                            }
                            var H;
                            D = {
                                points: [e, t],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: this._vlevels[p].color,
                                linewidth: C.linewidth.value(),
                                linestyle: C.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: h.Normal,
                                rightend: h.Normal
                            };
                            if ((H = new o).setData(D), T.append(H), C.showTopLabels.value()) {
                                var V = {
                                    points: [e],
                                    text: this._numericFormatter.format(this._vlevels[p].coeff),
                                    color: this._vlevels[p].color,
                                    vertAlign: "bottom",
                                    horzAlign: "center",
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 0,
                                    offsetY: 3,
                                    fontsize: 12
                                };
                                T.append(new s(V))
                            }
                            if (C.showBottomLabels.value()) {
                                var F = {
                                    points: [t],
                                    text: this._numericFormatter.format(this._vlevels[p].coeff),
                                    color: this._vlevels[p].color,
                                    vertAlign: "top",
                                    horzAlign: "center",
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 0,
                                    offsetY: 5,
                                    fontsize: 12
                                };
                                T.append(new s(F))
                            }
                        }
                        var W = this;
                        U(T, this._hfans, !0), U(T, this._vfans, !1);
                        var Y = new r(this._points[0].x, this._points[1].y);
                        Y.data = 2;
                        var j = new r(this._points[1].x, this._points[0].y);
                        j.data = 3, T.append(this.createLineAnchor({
                            points: [...this._points, Y, j]
                        }, 0)), this._renderer = T
                    }

                    function U(e, t, i) {
                        var n = new r(b, P),
                            s = new r(L, P),
                            a = new r(b, S),
                            l = new r(L, S),
                            d = {
                                width: W._model.timeScale().width(),
                                height: W._source.priceScale().height(),
                                color: C.fans.color.value(),
                                linewidth: C.linewidth.value(),
                                linestyle: C.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: h.Normal,
                                rightend: h.Normal
                            };

                        function c(t) {
                            var i = new o;
                            i.setData(Object.assign({}, d, {
                                points: t
                            })), e.append(i)
                        }
                        for (var u = 0; u < t.length; ++u) {
                            var p = i ? S : t[u],
                                _ = i ? P : t[u],
                                g = i ? t[u] : b,
                                f = i ? t[u] : L,
                                m = new r(f, p),
                                v = new r(g, p),
                                x = new r(f, _),
                                w = new r(g, _);
                            c([a, x]), c([l, w]), c([n, m]), c([s, v])
                        }
                    }
                }
            }
        },
        118739: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                GhostFeedPaneView: () => _
            });
            var r = i(314967),
                n = i(631586),
                s = i(758337),
                a = i(858063),
                o = i(28035),
                l = i(837291),
                d = i(739665),
                h = i(296266),
                c = i(916716),
                u = i(233330);
            const p = r.colorsPalette["color-cold-gray-500"];
            class _ extends u.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._renderer = null, this._segments = []
                }
                renderer() {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    var e, t;
                    super._updateImpl(), this._renderer = null, this._segments = [];
                    const i = this._source.priceScale(),
                        r = null !== (t = null === (e = this._source.ownerSource()) || void 0 === e ? void 0 : e.firstValue()) && void 0 !== t ? t : null;
                    if (this._points.length < 2 || null === i || i.isEmpty() || null === r) return;
                    const u = this._source.points(),
                        _ = this._source.properties().childs(),
                        g = _.candleStyle.childs();
                    this._segments = this._source.segments().map(((e, t) => {
                        if (t >= this._points.length - 1) return null;
                        const n = this._points[t].x,
                            s = u[t].price,
                            a = u[t + 1].price,
                            o = i.priceToCoordinate(s, r),
                            l = i.priceToCoordinate(a, r),
                            d = u[t + 1].index - u[t].index,
                            h = this._model.timeScale().barSpacing() * Math.sign(d),
                            c = (l - o) / (e.bars().length - 1),
                            p = g.upColor.value(),
                            _ = g.downColor.value(),
                            f = g.borderUpColor.value(),
                            m = g.borderDownColor.value();
                        return {
                            bars: e.bars().map(((e, t) => {
                                const s = o + t * c,
                                    a = i.coordinateToPrice(s, r),
                                    l = e.c >= e.o;
                                return {
                                    time: n + t * h,
                                    exactTime: n + t * h,
                                    open: i.priceToCoordinate(a + e.o, r),
                                    high: i.priceToCoordinate(a + e.h, r),
                                    low: i.priceToCoordinate(a + e.l, r),
                                    close: i.priceToCoordinate(a + e.c, r),
                                    color: l ? p : _,
                                    borderColor: l ? f : m,
                                    hollow: !1
                                }
                            }))
                        }
                    })).filter(s.notNull);
                    const f = new o.CompositeRenderer;
                    for (let e = 1; e < this._points.length; e++) {
                        const t = {
                                points: [this._points[e - 1], this._points[e]],
                                color: p,
                                linewidth: 1,
                                linestyle: n.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: d.LineEnd.Normal,
                                rightend: d.LineEnd.Normal
                            },
                            i = new h.TrendLineRenderer;
                        i.setData(t), i.setHitTest(new a.HitTestResult(a.HitTestResult.MOVEPOINT)), f.append(i)
                    }
                    const m = g.drawWick.value(),
                        v = g.drawBorder.value(),
                        x = g.borderColor.value(),
                        w = g.wickColor.value(),
                        R = new o.CompositeRenderer;
                    R.setGlobalAlpha(1 - _.transparency.value() / 100);
                    const y = this._model.timeScale().barSpacing();
                    for (let e = 0; e < this._segments.length; e++) {
                        const t = {
                            bars: this._segments[e].bars,
                            barSpacing: y,
                            wickVisible: m,
                            bodyVisible: !0,
                            borderVisible: v,
                            borderColor: x,
                            wickColor: w,
                            barWidth: (0, l.optimalBarWidth)(y),
                            hittest: new a.HitTestResult(a.HitTestResult.MOVEPOINT)
                        };
                        R.append(new c.PaneRendererCandles(t))
                    }
                    f.append(R), this.addAnchors(f), this._renderer = f
                }
            }
        },
        501797: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LineToolHeadAndShouldersPaneView: () => g
            });
            var r = i(5531),
                n = i(777754),
                s = i(631586),
                a = i(296266),
                o = i(383359),
                l = i(544445),
                d = i(28035),
                h = i(739665),
                c = i(530513),
                u = i(233330),
                p = i(623331);
            const _ = {
                leftShoulder: n.t(null, void 0, i(268589)),
                rightShoulder: n.t(null, void 0, i(278934)),
                head: n.t(null, void 0, i(963706))
            };
            class g extends u.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._trendLineRenderer = new a.TrendLineRenderer, this._triangleRendererPoints234 = new o.TriangleRenderer, this._intersect1Renderer = new o.TriangleRenderer, this._intersect2Renderer = new o.TriangleRenderer, this._polyLineRenderer = new c.PolygonRenderer, this._leftShoulderLabelRenderer = new l.TextRenderer, this._headLabelRenderer = new l.TextRenderer, this._rightShoulderLabelRenderer = new l.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    let e, t;
                    super._updateImpl(), this._renderer = null;
                    const [i, n, a, o, l, c, u] = this._points;
                    if (this._points.length >= 5) {
                        const s = (0, r.intersectLineSegments)(a, l, i, n);
                        if (null !== s) {
                            const t = l.subtract(a);
                            e = a.add(t.scaled(s))
                        }
                        if (7 === this._points.length) {
                            const e = (0, r.intersectLineSegments)(a, l, c, u);
                            if (null !== e) {
                                const i = l.subtract(a);
                                t = a.add(i.scaled(e))
                            }
                        }
                    }
                    if (this._points.length < 2) return;
                    const g = this._source.properties().childs(),
                        f = new d.CompositeRenderer,
                        m = (e, t) => ({
                            points: [e],
                            text: t,
                            color: g.textcolor.value(),
                            horzAlign: "center",
                            vertAlign: "middle",
                            font: p.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: g.bold && g.bold.value(),
                            italic: g.italic && g.italic.value(),
                            fontsize: g.fontsize.value(),
                            backgroundColor: g.color.value(),
                            backgroundRoundRect: 4
                        }),
                        v = (e, t, i) => ({
                            points: [e, t, i],
                            color: "rgba(0, 0, 0, 0)",
                            linewidth: 0,
                            backcolor: g.backgroundColor.value(),
                            fillBackground: g.fillBackground.value(),
                            transparency: g.transparency.value()
                        }),
                        x = {
                            points: this._points,
                            color: g.color.value(),
                            linewidth: g.linewidth.value(),
                            linestyle: s.LINESTYLE_SOLID,
                            backcolor: "rgba(0, 0, 0, 0)",
                            fillBackground: !1,
                            filled: !1
                        };
                    if (this._polyLineRenderer.setData(x), f.append(this._polyLineRenderer), this._points.length >= 5) {
                        let i, r, n = !1,
                            d = !1;
                        e ? i = e : (i = a, n = !0), t ? r = t : (r = l, d = !0);
                        const c = {
                            points: [i, r],
                            color: g.color.value(),
                            linewidth: g.linewidth.value(),
                            linestyle: s.LINESTYLE_DOTTED,
                            extendleft: !1,
                            extendright: !1,
                            leftend: h.LineEnd.Normal,
                            rightend: h.LineEnd.Normal
                        };
                        c.extendleft = n, c.extendright = d, this._trendLineRenderer.setData(c), f.append(this._trendLineRenderer);
                        const u = v(a, o, l);
                        this._triangleRendererPoints234.setData(u), f.append(this._triangleRendererPoints234)
                    }
                    if (e) {
                        const t = v(e, n, a);
                        this._intersect1Renderer.setData(t), f.append(this._intersect1Renderer)
                    }
                    if (t) {
                        const e = v(l, c, t);
                        this._intersect2Renderer.setData(e), f.append(this._intersect2Renderer)
                    }
                    if (this._points.length >= 2) {
                        const e = m(n, _.leftShoulder);
                        n.y < i.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._leftShoulderLabelRenderer.setData(e), f.append(this._leftShoulderLabelRenderer)
                    }
                    if (this._points.length >= 4) {
                        const e = m(o, _.head);
                        o.y < a.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._headLabelRenderer.setData(e), f.append(this._headLabelRenderer)
                    }
                    if (this._points.length >= 6) {
                        const e = m(c, _.rightShoulder);
                        c.y < l.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._rightShoulderLabelRenderer.setData(e), f.append(this._rightShoulderLabelRenderer)
                    }
                    this.addAnchors(f), this._renderer = f
                }
            }
        },
        43510: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                HighlighterPaneView: () => s
            });
            var r = i(631586),
                n = i(832376);
            class s extends n.BrushBasePaneView {
                _createPolygonRendererData() {
                    const e = this._source.properties().childs();
                    return {
                        points: this._points,
                        color: e.linecolor.value(),
                        linewidth: 20,
                        backcolor: "rgba(0, 0, 0, 0)",
                        fillBackground: !1,
                        linestyle: r.LINESTYLE_SOLID,
                        filled: !1,
                        transparency: e.transparency.value()
                    }
                }
            }
        },
        903350: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                HorzLinePaneView: () => u
            });
            var r = i(86441),
                n = i(858063),
                s = i(854905),
                a = i(544445),
                o = i(803936),
                l = i(28035),
                d = i(623331),
                h = i(764091);
            const c = [s.PaneCursorType.VerticalResize];
            class u extends h.AlertableLineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = null, this._labelRenderer = new a.TextRenderer, this._lineRenderer = new o.HorizontalLineRenderer, this._lineRenderer.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT))
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(e, t), this._renderer = null, 0 === this._points.length) return;
                    const s = this._source.properties().childs(),
                        o = new l.CompositeRenderer;
                    let h, u = !0;
                    if (s.showLabel.value() && 1 === this._points.length && s.text.value().length > 0) {
                        const n = s.vertLabelsAlign.value(),
                            l = s.horzLabelsAlign.value();
                        let c = 0,
                            p = 0;
                        "left" === l ? p = 3 : "right" === l ? (p = this._model.timeScale().width(), c = 3) : p = this._model.timeScale().width() / 2;
                        const _ = {
                            points: [new r.Point(p, this._points[0].y)],
                            text: s.text.value(),
                            color: s.textcolor.value(),
                            vertAlign: n,
                            horzAlign: l,
                            font: d.CHART_FONT_FAMILY,
                            offsetX: c,
                            offsetY: 0,
                            bold: s.bold.value(),
                            italic: s.italic.value(),
                            fontsize: s.fontsize.value(),
                            forceTextAlign: !0
                        };
                        this._labelRenderer.setData(_), o.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, a.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0), u = this._labelRenderer.isOutOfScreen(t, e)
                    }
                    const p = {
                        y: this._points[0].y,
                        color: s.linecolor.value(),
                        linewidth: s.linewidth.value(),
                        linestyle: s.linestyle.value(),
                        excludeBoundaries: h
                    };
                    this._lineRenderer.setData(p), this._lineRenderer.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, {
                        snappingPrice: this._source.points()[0].price
                    }));
                    const _ = p.linewidth / 2 + 1;
                    if (u = u && (p.y < -_ || p.y > e + _), o.append(this._lineRenderer), !u) {
                        if (1 === this._points.length) {
                            const e = new r.Point(t / 2, this._points[0].y);
                            e.data = 0, e.square = !0, o.append(this.createLineAnchor({
                                points: [e],
                                pointsCursorType: c
                            }, 0))
                        }
                        if (1 === this._points.length) {
                            const e = new r.Point(this._model.timeScale().width() / 2, this._points[0].y);
                            this._addAlertRenderer(o, [e])
                        }
                        this._renderer = o
                    }
                }
            }
        },
        322558: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                HorzRayPaneView: () => g
            });
            var r = i(86441),
                n = i(28035),
                s = i(544445),
                a = i(623331),
                o = i(858063),
                l = i(764091),
                d = i(914679),
                h = i(837291),
                c = i(741341),
                u = i(756740),
                p = i(631586);
            class _ extends u.BitmapCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data || 0 === this._data.points.length) return null;
                    if (e.x < this._data.points[0].x) return null;
                    const t = (0, h.interactionTolerance)().line;
                    return Math.abs(e.y - this._data.points[0].y) <= t ? new o.HitTestResult(this._data.hitTestResult, {
                        snappingPrice: this._data.snappingPrice
                    }) : null
                }
                _drawImpl(e) {
                    if (null === this._data || 0 === this._data.points.length) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: r,
                        bitmapSize: n
                    } = e, s = n.width, a = this._data.points[0].y, o = Math.max(0, this._data.points[0].x), l = Math.max(s, this._data.points[0].x);
                    t.lineCap = void 0 === this._data.linestyle || this._data.linestyle === p.LINESTYLE_SOLID ? "round" : "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, d.setLineStyle)(t, this._data.linestyle);
                    const h = this._data.excludeBoundaries;
                    void 0 !== h && (0, c.addExclusionAreaByScope)(e, h), (0, d.drawHorizontalLine)(t, Math.round(a * r), Math.round(o * i), Math.round(l * i))
                }
            }
            class g extends l.AlertableLineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._horzRayRenderer = new _, this._labelRenderer = new s.TextRenderer, this._renderer = null, this._horzRayRenderer = new _, this._labelRenderer = new s.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer = null, 0 === this._points.length) return;
                    const l = this._source.properties().childs(),
                        d = new n.CompositeRenderer;
                    let h, c = this._points[0].clone();
                    if (l.showLabel.value() && 1 === this._points.length) {
                        const n = l.vertLabelsAlign.value(),
                            o = l.horzLabelsAlign.value(),
                            u = 0;
                        let p = 0;
                        const _ = l.text.value(),
                            g = l.bold.value(),
                            f = l.italic.value(),
                            m = a.CHART_FONT_FAMILY,
                            v = l.fontsize.value();
                        if ("right" === o) {
                            const e = this._labelRenderer.measure().width,
                                t = this._model.timeScale().width();
                            c.x + e + 3 >= t ? c = c.add((0, r.point)(e + 3, 0)) : (c = (0, r.point)(t, c.y), p = 3)
                        } else "center" === o && (c = (0, r.point)((c.x + this._model.timeScale().width()) / 2, c.y));
                        const x = {
                            points: [c],
                            text: _,
                            color: l.textcolor.value(),
                            vertAlign: n,
                            horzAlign: o,
                            font: m,
                            offsetX: p,
                            offsetY: u,
                            bold: g,
                            italic: f,
                            fontsize: v,
                            forceTextAlign: !0
                        };
                        this._labelRenderer.setData(x), d.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, s.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0)
                    }
                    const u = {
                        points: this._points,
                        color: l.linecolor.value(),
                        linewidth: l.linewidth.value(),
                        linestyle: l.linestyle.value(),
                        hitTestResult: o.HitTestResult.MOVEPOINT,
                        snappingPrice: this._source.points()[0].price,
                        excludeBoundaries: h
                    };
                    this._horzRayRenderer.setData(u), d.append(this._horzRayRenderer), this.addAnchors(d), 1 === this._points.length && this._addAlertRenderer(d, [u.points[0]]), this._renderer = d
                }
            }
        },
        367849: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                IconPaneView: () => n
            });
            var r = i(353903);
            class n extends r.SvgIconPaneView {
                _iconColor() {
                    return this._source.properties().childs().color.value()
                }
            }
        },
        367484: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                IdeaPaneView: () => E
            });
            var r = i(327714),
                n = i(777754),
                s = i(650151),
                a = i(314967),
                o = i(86441),
                l = i(498664),
                d = i(500521),
                h = i(631586),
                c = i(858063),
                u = i(544445),
                p = i(296266),
                _ = i(914679),
                g = i(878143),
                f = i(623331),
                m = i(538708),
                v = i(359984),
                x = i(970704),
                w = i(781014),
                R = i(314802);
            const y = String.fromCharCode(8198),
                T = {
                    borderColor: a.colorsPalette["color-cold-gray-150"],
                    backColor: a.colorsPalette["color-white"],
                    usernameColor: a.colorsPalette["color-cold-gray-900"],
                    textColor: a.colorsPalette["color-cold-gray-900"],
                    hoveredTextColor: a.colorsPalette["color-tv-blue-600"],
                    footerText: a.colorsPalette["color-cold-gray-500"],
                    linkColor: a.colorsPalette["color-cold-gray-500"],
                    longColor: a.colorsPalette["color-minty-green-400"],
                    shortColor: a.colorsPalette["color-ripe-red-400"]
                },
                b = {
                    borderColor: a.colorsPalette["color-cold-gray-800"],
                    backColor: a.colorsPalette["color-black"],
                    usernameColor: a.colorsPalette["color-cold-gray-200"],
                    textColor: a.colorsPalette["color-cold-gray-200"],
                    hoveredTextColor: a.colorsPalette["color-tv-blue-600"],
                    footerText: a.colorsPalette["color-cold-gray-500"],
                    linkColor: a.colorsPalette["color-cold-gray-500"],
                    longColor: a.colorsPalette["color-minty-green-400"],
                    shortColor: a.colorsPalette["color-ripe-red-400"]
                },
                P = (0, m.makeFont)(14, f.CHART_FONT_FAMILY, "", "bold"),
                L = (0, m.makeFont)(12, f.CHART_FONT_FAMILY, ""),
                S = (0, m.makeFont)(8, f.CHART_FONT_FAMILY, "", 700),
                C = (0, m.makeFont)(12, f.CHART_FONT_FAMILY, ""),
                M = (0,
                    m.makeFont)(12, f.CHART_FONT_FAMILY, ""),
                I = n.t(null, void 0, i(777851)),
                N = n.t(null, void 0, i(273064));
            class k extends g.CustomUrlEventRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._precalculated = null
                }
                setData(e) {
                    this._precalculated = null, this._data = e
                }
                _hittestResultForActionArea() {
                    const e = (0, s.ensureNotNull)(this._data),
                        t = {
                            hideCrosshairLinesOnHover: !0,
                            activeItem: e.ideaData
                        },
                        i = () => {
                            const t = e.ideaData.uuid,
                                i = e.ideaData.name,
                                r = (0, R.urlWithMobileAppParams)(`/chart/idea/${t}/`);
                            (0, d.pushChartPage)({
                                chartId: t,
                                chartName: i,
                                publishedUrl: r
                            })
                        };
                    return t.clickHandler = i, t.tapHandler = i, new c.HitTestResult(c.HitTestResult.CUSTOM, t)
                }
                _drawContent(e, t, i) {
                    const r = i.isDark ? b : T;
                    this._drawConnector(e, t, i, r.linkColor), this._drawMainFrame(e, t, r.borderColor, r.backColor), this._drawAvatar(e, t, i.avatarImage, 18, 16, 16), this._drawUsername(e, t, i, r), i.ideaData.author.badges && this._drawUserBadge(e, t, i.ideaData.author.badges), this._drawTextAndDirectionBadge(e, t, i, r), this._drawFooter(e, t, i, r)
                }
                _precalculate(e, t) {
                    e.save(), e.font = P;
                    const i = t.ideaData.direction !== l.Directions.Neutral,
                        n = (0, u.wordWrap)(t.ideaData.name, P, 320);
                    let s = 14 * n.length * 1.2 + 46 + 10 + 33;
                    i && (s += 26.4);
                    const a = Math.max(...n.map((t => e.measureText(t).width)));
                    e.font = L;
                    const o = e.measureText(t.ideaData.author.username).width;
                    let d = o + 42 + 16,
                        h = 0;
                    if (t.ideaData.author.badges) {
                        const i = this._getUserBadgeName(t.ideaData.author.badges);
                        "" !== i && (e.font = S, h = e.measureText(i).width + 8, d += 8 + h)
                    }
                    e.font = C;
                    const c = e.measureText(t.formattedDate).width + 32,
                        p = Math.max(a + 32, d, c);
                    this._precalculated = {
                        wrappedText: n,
                        textWidth: a,
                        usernameWidth: o,
                        userBadgeWidth: h,
                        size: (0, r.size)({
                            width: p,
                            height: s
                        })
                    }, e.restore()
                }
                _drawUsername(e, t, i, r) {
                    const n = this._position(),
                        s = Math.round(19 * t.pixelRatio),
                        a = Math.round(.5 * (18 * t.pixelRatio - s)),
                        o = Math.round((n.x + 42) * t.pixelRatio),
                        l = Math.round((n.y + 19) * t.pixelRatio) + a;
                    e.save(), e.font = L, e.translate(o, l), e.scale(t.pixelRatio, t.pixelRatio), e.textBaseline = "top", e.fillStyle = r.usernameColor, e.fillText(i.ideaData.author.username, 0, 0), e.restore()
                }
                _drawUserBadge(e, t, i) {
                    const r = this._getUserBadgeName(i);
                    if ("" === r) return;
                    const n = (0, s.ensureNotNull)(this._precalculated),
                        o = this._position(),
                        l = Math.round((o.x + 42 + n.usernameWidth + 8) * t.pixelRatio),
                        d = Math.round((o.y + 18) * t.pixelRatio);
                    e.save(), e.font = S, e.translate(l, d), e.scale(t.pixelRatio, t.pixelRatio);
                    const h = Math.round(12);
                    e.fillStyle = this._getColorOfUserBadge(i, e, n.userBadgeWidth, h), (0, _.drawRoundRect)(e, 0, 0, n.userBadgeWidth, h, 3), e.fill(), e.textBaseline = "middle", e.fillStyle = a.colorsPalette["color-white"], e.fillText(r, 4, h / 2 + 1 / t.pixelRatio), e.restore()
                }
                _drawTextAndDirectionBadge(e, t, i, r) {
                    e.save();
                    const n = (0, s.ensureNotNull)(this._precalculated),
                        a = this._position();
                    e.font = P;
                    const d = Math.round((a.x + 16) * t.pixelRatio),
                        h = Math.round((a.y + 46) * t.pixelRatio),
                        c = a.x + 16,
                        u = a.y + 46;
                    this._actionBox = (0, o.box)((0, o.point)(c, u), (0, o.point)(c + n.textWidth, u + 14 * n.wrappedText.length * 1.2)), e.translate(d, h), e.scale(t.pixelRatio, t.pixelRatio), e.textBaseline = "top", e.fillStyle = i.isIdeaNameHovered ? r.hoveredTextColor : r.textColor, n.wrappedText.forEach(((t, i) => {
                        const r = 14 * i * 1.2;
                        e.fillText(t, 0, r)
                    }));
                    const p = i.ideaData.direction;
                    if (p !== l.Directions.Neutral) {
                        const t = p === l.Directions.Long,
                            i = t ? r.longColor : r.shortColor;
                        e.font = M, e.fillStyle = i;
                        const s = 14 * n.wrappedText.length * 1.2 + 12;
                        this._drawArrowForDirection(e, p, s, i), e.beginPath(), e.rect(0, s, n.size.width - 32, 12), e.clip(), e.fillText((t ? N : I).toUpperCase(), 18, s)
                    }
                    e.restore()
                }
                _drawArrowForDirection(e, t, i, r) {
                    const n = 1.5;
                    e.strokeStyle = r, e.lineWidth = n, (0, _.setLineStyle)(e, h.LINESTYLE_SOLID);
                    let s = i + 7.5 + n;
                    let a = i + n;
                    t === l.Directions.Short && (s = i + n, a = i + 7.5 + n), (0, _.drawLine)(e, 5.5, s, 13, a), (0, p.drawArrow)(new o.Point(5.5, s), new o.Point(13, a), e, n, 1, !0)
                }
                _drawFooter(e, t, i, r) {
                    const n = (0, s.ensureNotNull)(this._precalculated),
                        a = this._position();
                    e.save(), e.fillStyle = r.borderColor;
                    const o = Math.round((a.x + 16) * t.pixelRatio);
                    let d = 14 * n.wrappedText.length * 1.2 + 46 + 10;
                    i.ideaData.direction !== l.Directions.Neutral && (d += 26.4);
                    const h = Math.round((a.y + d) * t.pixelRatio),
                        c = Math.round((n.size.width - 32) * t.pixelRatio),
                        u = Math.max(1, Math.round(t.pixelRatio));
                    e.fillRect(o, h, c, u), e.font = C, e.textBaseline = "middle";
                    const p = o,
                        _ = h;
                    e.translate(p, _), e.scale(t.pixelRatio, t.pixelRatio), e.fillStyle = r.footerText, e.fillText(i.formattedDate, 0, 16.5), e.restore()
                }
                _getUserBadgeName(e) {
                    let t = "";
                    e.some((e => (0, v.isModerator)(e))) && (t = "MOD"), e.some((e => (0, x.isBadgeBroker)(e))) && (t = "BROKER");
                    const i = e[0];
                    return (0, v.isProRealtime)(i) ? t = "PRO+" : (0, v.isPro)(i) ? t = "PRO" : (0, v.isProPremium)(i) && (t = "PREMIUM"), t.split("").join(y)
                }
                _getColorOfUserBadge(e, t, i, r) {
                    if (e.some((e => (0, v.isModerator)(e)))) return a.colorsPalette["color-ripe-red-400"];
                    const n = e.findIndex((e => (0, x.isBadgeBroker)(e)));
                    if (-1 !== n) {
                        const s = e[n];
                        if (s === w.BadgeBrokerNames.BrokerExtraFeatured) return a.colorsPalette["color-minty-green-400"];
                        const o = t.createLinearGradient(0, r / 2, i, r / 2);
                        switch (s) {
                            case w.BadgeBrokerNames.BrokerGold:
                                o.addColorStop(0, "#fedf84"), o.addColorStop(1, "#c68238");
                                break;
                            case w.BadgeBrokerNames.BrokerPlatinum:
                                o.addColorStop(.05, "#003488"), o.addColorStop(.4, "#057cda"), o.addColorStop(.79, "#0067af"), o.addColorStop(1, "#083976");
                                break;
                            default:
                                o.addColorStop(0, "#c1d5e6"), o.addColorStop(1, "#465566")
                        }
                        return o
                    }
                    const s = e[0];
                    return (0, v.isTrial)(s) ? a.colorsPalette["color-cold-gray-500"] : (0, v.isProRealtime)(s) ? a.colorsPalette["color-tv-blue-500"] : (0, v.isPro)(s) ? a.colorsPalette["color-minty-green-400"] : (0, v.isProPremium)(s) ? a.colorsPalette["color-tan-orange-500"] : ""
                }
            }
            var A = i(786315),
                D = i(446e3);
            class E extends A.CustomUrlEventPaneView {
                constructor() {
                    super(...arguments), this._ideaRenderer = new k(null)
                }
                _fillCompositeRendrer(e, t, i, r, n) {
                    const s = {
                        point: t,
                        isDark: this._model.isDark(),
                        ideaData: e.ideaData(),
                        isIdeaNameHovered: this._isIdeaNameHovered(),
                        avatarImage: r,
                        formattedDate: n,
                        candlePoints: i,
                        backgroundColor: this._model.backgroundColor().value()
                    };
                    this._ideaRenderer.setData(s), this._renderer.append(this._ideaRenderer)
                }
                _prepareValidAvatarUrl(e) {
                    if (e.startsWith("data:image/svg+xml,")) return e;
                    try {
                        const t = new URL(e, window.AWS_S3_CDN);
                        return (0, D.isIdeaAuthorProfileImageUrl)(t.href) ? t.href : null
                    } catch (e) {
                        return null
                    }
                }
                _isIdeaNameHovered() {
                    const e = this._model.lastHittestData(),
                        t = this._source.customEvent();
                    return !(null !== this._source.currentMovingPoint() || !t || !e || e.activeItem !== t.ideaData())
                }
            }
        },
        765599: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ImagePaneView: () => p
            });
            var r = i(86441),
                n = i(854905),
                s = i(28035),
                a = i(934026),
                o = i(858063),
                l = i(904244);
            class d extends l.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = null != e ? e : null
                }
                hitTest(e) {
                    if (!this._data) return null;
                    const {
                        point: t,
                        cssWidth: i,
                        cssHeight: n
                    } = this._data, s = new r.Point(t.x, t.y), l = new r.Point(t.x + i, t.y + n);
                    return (0, a.pointInBox)(e, (0, r.box)(s, l)) ? new o.HitTestResult(o.HitTestResult.MOVEPOINT) : null
                }
                setData(e) {
                    this._data = e
                }
                _drawImpl(e) {
                    if (!this._data) return;
                    const {
                        angle: t,
                        img: i,
                        point: r,
                        cssWidth: n,
                        cssHeight: s,
                        transparency: a
                    } = this._data, o = e.context;
                    o.globalAlpha = (100 - a) / 100, Math.abs(t) < 1e-4 ? o.drawImage(i, r.x, r.y, n, s) : (o.translate(r.x, r.y), o.rotate(t), o.drawImage(i, 0, 0, n, s))
                }
            }
            var h = i(855242),
                c = i(233330),
                u = i(319596);
            class p extends c.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._imageRenderer = new d
                }
                renderer(e, t) {
                    const i = this._source.image();
                    if (null === i || (0, u.imageIsOversized)(i)) return null;
                    if (this._invalidated && this._updateImpl(), !this._points.length) return null;
                    const r = new s.CompositeRenderer;
                    return r.append(this._imageRenderer), this._addAnchors(r), r
                }
                _updateImpl() {
                    super._updateImpl();
                    const e = this._source.properties(),
                        t = this._source.image(),
                        i = this._calculateBox();
                    null === t || void 0 === i ? this._imageRenderer.setData(null) : this._imageRenderer.setData({
                        point: i[0],
                        img: t,
                        cssWidth: this._source.cssWidth(),
                        cssHeight: this._source.cssHeight(),
                        angle: 0,
                        transparency: e.childs().transparency.value()
                    })
                }
                _addAnchors(e) {
                    const t = this._calculateBox();
                    if (void 0 === t) return;
                    const [i, r] = t, s = [new h.LineAnchorPointImpl(i.x + 1, i.y + 1, 0), new h.LineAnchorPointImpl(r.x - 1, i.y + 1, 1), new h.LineAnchorPointImpl(i.x + 1, r.y - 1, 2), new h.LineAnchorPointImpl(r.x - 1, r.y - 1, 3)], a = [n.PaneCursorType.DiagonalNwSeResize, n.PaneCursorType.DiagonalNeSwResize, n.PaneCursorType.DiagonalNeSwResize, n.PaneCursorType.DiagonalNwSeResize];
                    e.append(this.createLineAnchor({
                        points: s,
                        pointsCursorType: a
                    }, 0))
                }
                _calculateBox() {
                    const e = this._source.cssWidth(),
                        t = this._source.cssHeight(),
                        i = this._source.originPoint(),
                        n = this._source.dOffsetX();
                    let s, a, [o] = this._points;
                    if (o) {
                        switch (4 !== i && (o = new r.Point(o.x + n, o.y)), i) {
                            case 4:
                                {
                                    const i = e / 2,
                                        n = t / 2;s = new r.Point(o.x - i, o.y - n),
                                    a = new r.Point(o.x + i, o.y + n);
                                    break
                                }
                            case 0:
                                s = new r.Point(o.x, o.y), a = new r.Point(o.x + e, o.y + t);
                                break;
                            case 1:
                                s = new r.Point(o.x - e, o.y), a = new r.Point(o.x, o.y + t);
                                break;
                            case 2:
                                s = new r.Point(o.x, o.y - t), a = new r.Point(o.x + e, o.y);
                                break;
                            case 3:
                                s = new r.Point(o.x - e, o.y - t), a = new r.Point(o.x, o.y)
                        }
                        return [s, a]
                    }
                }
            }
        },
        319596: (e, t, i) => {
            "use strict";
            i.d(t, {
                blobImageFilter: () => o,
                imageIsOversized: () => d,
                generateLink: () => c,
                checkImageSize: () => u,
                uploadImage: () => p
            });
            var r = i(327714),
                n = i(890740),
                s = i(777754),
                a = i(272001);

            function o(e) {
                return "image/png" === e.type || "image/jpeg" === e.type
            }
            const l = (0, r.size)({
                width: 2e3,
                height: 2e3
            });

            function d(e) {
                return e.width > l.width || e.height > l.height
            }
            const h = (0, a.getLogger)("Chart.Uploader");
            async function c(e) {
                const t = new FormData,
                    i = "name" in e ? e.name : "image.png";
                t.append("content_type", e.type), t.append("filename", i), t.append("size", "" + e.size);
                try {
                    const e = await (0, n.fetch)("/charts/uploads/generate-link/", {
                        method: "POST",
                        body: t
                    });
                    if (!e.ok) throw new Error(`Error generating upload link: ${e.status}`);
                    return e.json()
                } catch (t) {
                    throw h.logError(`Error generating upload link: ${t}. blob.type: ${e.type} blob.size: ${e.size} filename: ${i}`), t
                }
            }
            async function u(e) {
                return new Promise(((t, i) => {
                    const r = new FileReader;
                    r.onload = e => {
                        var r;
                        const n = new Image;
                        n.src = null === (r = e.target) || void 0 === r ? void 0 : r.result, n.onload = () => {
                            t(!d(n))
                        }, n.onerror = i
                    }, r.onerror = i, r.readAsDataURL(e)
                }))
            }
            async function p(e) {
                if (!await u(e)) throw new Error(s.t(null, void 0, i(753716)));
                try {
                    const t = await c(e),
                        i = t.data.fields,
                        r = new FormData;
                    for (const e of Object.keys(i)) r.append(e, i[e]);
                    r.append("file", e);
                    const s = await (0, n.fetch)(t.data.url, {
                        method: "POST",
                        body: r
                    });
                    if (s.ok) return t.data.url + t.filepath;
                    throw new Error(`Upload response is not ok: ${s.status}`)
                } catch (e) {
                    throw new Error(`Error uploading image: ${e.message}`)
                }
            }
        },
        233330: (e, t, i) => {
            "use strict";
            i.d(t, {
                thirdPointCursorType: () => u,
                LineSourcePaneView: () => p
            });
            var r = i(314967),
                n = i(650151),
                s = i(545613),
                a = i(858063),
                o = i(583110),
                l = i(855242),
                d = i(854905);
            const h = r.colorsPalette["color-tv-blue-600"];
            var c;

            function u(e, t) {
                const i = t.x - e.x,
                    r = t.y - e.y,
                    n = Math.abs(Math.atan2(i, r));
                return n > Math.PI / 4 && n < 3 * Math.PI / 4 ? d.PaneCursorType.VerticalResize : d.PaneCursorType.HorizontalResize
            }! function(e) {
                e[e.RegularAnchorRadius = 6] = "RegularAnchorRadius", e[e.TouchAnchorRadius = 13] = "TouchAnchorRadius", e[e.RegularStrokeWidth = 1] = "RegularStrokeWidth", e[e.TouchStrokeWidth = 3] = "TouchStrokeWidth", e[e.RegularSelectedStrokeWidth = 3] = "RegularSelectedStrokeWidth", e[e.TouchSelectedStrokeWidth = 0] = "TouchSelectedStrokeWidth"
            }(c || (c = {}));
            class p {
                constructor(e, t) {
                    this._invalidated = !0, this._points = [], this._middlePoint = null, this._selectionRenderers = [], this._lineAnchorRenderers = [], this._source = e, this._model = t
                }
                priceToCoordinate(e) {
                    const t = this._source.priceScale();
                    if (null === t) return null;
                    const i = this._source.ownerSource(),
                        r = null !== i ? i.firstValue() : null;
                    return null === r ? null : t.priceToCoordinate(e, r)
                }
                currentPoint() {
                    return this._model.crossHairSource().currentPoint()
                }
                anchorColor() {
                    return h
                }
                isHoveredSource() {
                    return this._source === this._model.hoveredSource()
                }
                isSelectedSource() {
                    return this._model.selection().isSelected(this._source)
                }
                isBeingEdited() {
                    return this._model.lineBeingEdited() === this._source
                }
                isEditMode() {
                    return !this._model.isSnapshot()
                }
                areAnchorsVisible() {
                    return (this.isHoveredSource() && !this.isLocked() || this.isSelectedSource()) && this.isEditMode()
                }
                update() {
                    this._invalidated = !0
                }
                isLocked() {
                    return Boolean(this._source.isLocked && this._source.isLocked())
                }
                addAnchors(e, t) {
                    let i = this._points;
                    this._model.lineBeingCreated() === this._source && (i = i.slice(0, -1));
                    const r = i.map(((e, t) => {
                        const i = this._source.points()[t],
                            r = e;
                        return r.snappingPrice = null == i ? void 0 : i.price, r.snappingIndex = null == i ? void 0 : i.index, r
                    }));
                    e.append(this.createLineAnchor({ ...null != t ? t : {},
                        points: r
                    }, 0))
                }
                createLineAnchor(e, t) {
                    var i;
                    if (this.isLocked()) {
                        const i = this._getSelectionRenderer(t);
                        return i.setData({
                            bgColors: this._lineAnchorColors(e.points),
                            points: e.points,
                            visible: this.areAnchorsVisible(),
                            hittestResult: a.HitTestResult.REGULAR,
                            barSpacing: this._model.timeScale().barSpacing()
                        }), i
                    }
                    const r = (0, s.lastMouseOrTouchEventInfo)().isTouch,
                        n = this._getLineAnchorRenderer(t);
                    return n.setData({ ...e,
                        color: this.anchorColor(),
                        backgroundColors: this._lineAnchorColors(e.points),
                        currentPoint: this.currentPoint(),
                        linePointBeingEdited: this.isBeingEdited() ? this._model.linePointBeingEdited() : null,
                        hittestResult: null !== (i = e.hittestResult) && void 0 !== i ? i : a.HitTestResult.CHANGEPOINT,
                        radius: this._anchorRadius(),
                        strokeWidth: r ? c.TouchStrokeWidth : c.RegularStrokeWidth,
                        selected: this.isSelectedSource(),
                        selectedStrokeWidth: r ? c.TouchSelectedStrokeWidth : c.RegularSelectedStrokeWidth,
                        visible: this.areAnchorsVisible()
                    }), n
                }
                _anchorRadius() {
                    return (0, s.lastMouseOrTouchEventInfo)().isTouch ? c.TouchAnchorRadius : c.RegularAnchorRadius
                }
                _lineAnchorColors(e) {
                    const t = (0, n.ensureNotNull)(this._model.paneForSource(this._source)).height();
                    return e.map((e => this._model.backgroundColorAtYPercentFromTop(e.y / t)))
                }
                _updateImpl(e, t) {
                    this._points = [];
                    if (this._model.timeScale().isEmpty()) return;
                    if (!this._validatePriceScale()) return;
                    const i = this._source.points();
                    for (let e = 0; e < i.length; e++) {
                        const t = i[e],
                            r = this._source.pointToScreenPoint(t);
                        if (!r) return;
                        const n = r;
                        n.data = e, this._points.push(n)
                    }
                    2 === this._points.length && (this._middlePoint = this._source.calcMiddlePoint(this._points[0], this._points[1])), this._invalidated = !1
                }
                _validatePriceScale() {
                    const e = this._source.priceScale();
                    return null !== e && !e.isEmpty()
                }
                _getSource() {
                    return this._source
                }
                _getPoints() {
                    return this._points
                }
                _getModel() {
                    return this._model
                }
                _height() {
                    const e = this._source.priceScale();
                    return null !== e ? e.height() : 0
                }
                _width() {
                    return this._model.timeScale().width()
                }
                _needLabelExclusionPath(e, t) {
                    const i = this._source.properties().childs();
                    if ("middle" !== (null != t ? t : i.vertLabelsAlign.value())) return !1;
                    const r = e.getLinesInfo().lines;
                    if (r.length % 2 == 0) return !1;
                    if ("" === r[Math.floor(r.length / 2)].trim()) return !1;
                    return !0
                }
                _getSelectionRenderer(e) {
                    for (; this._selectionRenderers.length <= e;) this._selectionRenderers.push(new o.SelectionRenderer);
                    return this._selectionRenderers[e]
                }
                _getLineAnchorRenderer(e) {
                    for (; this._lineAnchorRenderers.length <= e;) this._lineAnchorRenderers.push(new l.LineAnchorRenderer);
                    return this._lineAnchorRenderers[e]
                }
            }
        },
        987425: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LineToolBeingCreatedPaneView: () => c
            });
            var r = i(314967),
                n = i(233330),
                s = i(631586),
                a = i(739665),
                o = i(28035),
                l = i(274131),
                d = i(296266);
            const h = r.colorsPalette["color-cold-gray-500"];
            class c extends n.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._lineRenderer1 = new l.VerticalLineRenderer, this._lineRenderer2 = new l.VerticalLineRenderer, this._medianRenderer = new d.TrendLineRenderer, this._renderer = null
                }
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = this._getPoints();
                    if (e.length < 1) return;
                    this._renderer = new o.CompositeRenderer;
                    const [t, i] = e;
                    this._lineRenderer1.setData({
                        x: t.x,
                        color: h,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID
                    }), this._renderer.append(this._lineRenderer1), e.length > 1 && (this._lineRenderer2.setData({
                        x: i.x,
                        color: h,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID
                    }), this._medianRenderer.setData({
                        points: [t, i],
                        color: h,
                        linewidth: 1,
                        linestyle: s.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: a.LineEnd.Normal,
                        rightend: a.LineEnd.Normal
                    }), this._renderer.append(this._lineRenderer2), this._renderer.append(this._medianRenderer))
                }
            }
        },
        562432: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LineToolPaneViewFibWithLabels: () => d
            });
            var r = i(86441),
                n = i(233330),
                s = i(544445),
                a = i(951512),
                o = i(561068),
                l = i(623331);
            class d extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._labelsRenderers = {};
                    for (let t = 0; t < e.levelsCount(); t++) this._labelsRenderers[t] = new s.TextRenderer;
                    this._numericFormatter = new a.NumericFormatter, this._percentageFormatter = new o.PercentageFormatter
                }
                _updateLabelForLevel({
                    i: e,
                    levelIndex: t,
                    leftPoint: i,
                    rightPoint: n,
                    price: s,
                    color: a,
                    horzAlign: o,
                    vertAlign: d,
                    extendLeft: h = !1,
                    extendRight: c = !1
                }) {
                    var u, p, _, g, f;
                    const m = this._labelsRenderers[e];
                    if (void 0 === m) return null;
                    const v = this._source.priceScale();
                    if (!v) return null;
                    const x = this._source.properties(),
                        w = Boolean(null === (u = x.showCoeffs) || void 0 === u ? void 0 : u.value()),
                        R = Boolean(null === (p = x.showPrices) || void 0 === p ? void 0 : p.value());
                    if (!w && !R) return null;
                    const y = null === (_ = this._source.ownerSource()) || void 0 === _ ? void 0 : _.firstValue();
                    if (null == y) return null;
                    const T = !(i.x > this._model.timeScale().width() && !h || n.x < 0 && !c);
                    let b, P, L = o;
                    switch (L) {
                        case "left":
                            P = i.y, h ? b = T ? 0 : n.x : (b = i.x, L = "right");
                            break;
                        case "right":
                            P = n.y, c ? b = T ? this._model.timeScale().width() : i.x : (b = n.x, L = "left");
                            break;
                        default:
                            b = (i.x + n.x) / 2, P = (i.y + n.y) / 2
                    }
                    const S = x["level" + t].coeff.value();
                    let C = "";
                    if (w) {
                        C += null !== (f = null === (g = x.coeffsAsPercents) || void 0 === g ? void 0 : g.value()) && void 0 !== f && f ? this._percentageFormatter.format(100 * S, !1, 2) : this._numericFormatter.format(S)
                    }
                    return R && (C += "(" + v.formatPrice(s, y) + ")"), m.setData({
                        points: [new r.Point(b, P)],
                        text: C,
                        color: a,
                        vertAlign: d,
                        horzAlign: L,
                        offsetX: 4,
                        offsetY: 0,
                        font: l.CHART_FONT_FAMILY,
                        fontSize: x.labelFontSize ? x.labelFontSize.value() : 12
                    }), m
                }
            }
        },
        645934: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                NotePaneView: () => x
            });
            var r = i(650151),
                n = i(233330),
                s = i(28035),
                a = i(583110),
                o = i(858063),
                l = i(623331),
                d = i(544445),
                h = i(114123),
                c = i(768038),
                u = i(741341),
                p = i(112824),
                _ = i(327714),
                g = i(86441),
                f = i(934026);
            class m {
                constructor(e) {
                    this._data = null, this._sourceCanvas = null, this._translate = new g.Point(0, 0), this._renderParams = e
                }
                destroy() {
                    var e;
                    null === (e = this._sourceCanvas) || void 0 === e || e.remove()
                }
                renderParams() {
                    return this._renderParams
                }
                update(e) {
                    var t, i;
                    t = this._data, i = e, (null === t || t.markerColor !== i.markerColor || t.borderColor !== i.borderColor || t.width !== i.width || t.height !== i.height) && this._createSource(e.width, e.height, e.markerColor), this._data = e
                }
                drawOn(e) {
                    const t = (0, r.ensureNotNull)(this._data),
                        i = new g.Point(Math.round(t.point.x), Math.round(t.point.y)).add(this._translate);
                    e.drawImage((0,
                        r.ensureNotNull)(this._sourceCanvas), Math.round(i.x * this._renderParams.pixelRatio), Math.round(i.y * this._renderParams.pixelRatio), Math.round(t.width * this._renderParams.pixelRatio), Math.round(t.height * this._renderParams.pixelRatio))
                }
                hasPoint(e) {
                    const t = (0, r.ensureNotNull)(this._data),
                        i = t.point.add(this._translate),
                        n = new g.Point(t.point.x - this._translate.x, t.point.y);
                    return (0, f.pointInBox)(e, (0, g.box)(i, n))
                }
                _createSource(e, t, i) {
                    this._sourceCanvas = (0, u.createDisconnectedCanvas)(document, (0, _.size)({
                        width: e,
                        height: t
                    }), this._renderParams.pixelRatio), this._translate = new g.Point(-e / 2, .5 - t), this._translate.x % 1 == 0 && (this._translate = new g.Point(this._translate.x + .5, this._translate.y));
                    const n = (0, r.ensureNotNull)(this._sourceCanvas.getContext("2d"));
                    (0, u.drawScaled)(n, this._renderParams.pixelRatio, (() => {
                        const r = .6 * e;
                        n.fillStyle = i, n.beginPath(), n.moveTo(e / 2, t), n.quadraticCurveTo(e, e / 1.15, e, e / 2), n.arc(e / 2, e / 2, e / 2, 0, Math.PI, !0), n.quadraticCurveTo(0, e / 1.15, e / 2, t), n.fill(), n.globalCompositeOperation = "destination-out", n.beginPath(), n.moveTo((e - r) / 2, e / 2), n.arc(e / 2, e / 2, r / 2, 0, 2 * Math.PI), n.fill()
                    }))
                }
            }
            class v {
                constructor() {
                    this._source = null, this._data = null
                }
                setData(e) {
                    this._data = e, this._source && this._source.update(e)
                }
                draw(e, t) {
                    var i;
                    if (null === this._data) return;
                    null !== this._source && (0, p.areEqualPaneRenderParams)(this._source.renderParams(), t) || (null === (i = this._source) || void 0 === i || i.destroy(), this._source = new m(t), this._source.update(this._data));
                    this._source.drawOn(e), this._data.tooltipVisible && this._drawTooltipOn(e, t)
                }
                hitTest(e) {
                    return null !== this._data && null !== this._source && this._source.hasPoint(e) ? new o.HitTestResult(o.HitTestResult.MOVEPOINT) : null
                }
                _drawTooltipOn(e, t) {
                    e.save(), e.translate(.5, .5);
                    const i = (0, r.ensureNotNull)(this._data),
                        n = String(i.text).replace(/^\s+|\s+$/g, "");
                    e.font = (i.bold ? "bold " : "") + (i.italic ? "italic " : "") + i.fontSize + "px " + i.font;
                    const s = i.tooltipWidth - 2 * i.tooltipPadding,
                        a = (0, d.wordWrap)(n, e.font, s),
                        o = i.point,
                        l = i.tooltipLineSpacing;
                    let p = i.tooltipWidth,
                        _ = a.length * i.fontSize + 2 * i.tooltipPadding;
                    a.length > 1 && (_ += (a.length - 1) * l);
                    let g = Math.round(o.x - p / 2),
                        f = Math.round(o.y - i.height - _ - 8);
                    const m = o.x < 20 || o.x + 20 > i.vpWidth;
                    let v = m ? null : "top",
                        x = m ? 0 : Math.round(o.x);
                    f < 10 ? f = o.y + 13 : v = "bottom", g < 10 ? g += Math.abs(g - 10) : g + p + 10 > i.vpWidth && (g -= g + p + 10 - i.vpWidth), e.fillStyle = (0, h.generateColor)(i.backgroundColor, i.backgroundTransparency), e.strokeStyle = i.borderColor, e.lineWidth = 1, e.beginPath();
                    const w = Math.round(g * t.pixelRatio),
                        R = Math.round(f * t.pixelRatio);
                    x = Math.round(x * t.pixelRatio), _ = Math.round(_ * t.pixelRatio), p = Math.round(p * t.pixelRatio);
                    const y = Math.round(7 * t.pixelRatio);
                    e.moveTo(w, R), m || "top" !== v || (e.lineTo(x - y, R), e.lineTo(x, R - y), e.lineTo(x + y, R)), e.lineTo(w + p, R), e.lineTo(w + p, R + _), m || "bottom" !== v || (e.lineTo(x + y, R + _), e.lineTo(x, R + _ + y), e.lineTo(x - y, R + _)), e.lineTo(w, R + _), e.closePath(), e.fill(), e.stroke(), e.textBaseline = "middle", e.fillStyle = i.textColor, e.textAlign = (0, c.isRtl)() ? "right" : "left";
                    const T = (0, u.calcTextHorizontalShift)(e, s),
                        b = g + i.tooltipPadding + T;
                    let P = f + i.tooltipPadding + i.fontSize / 2;
                    (0, u.drawScaled)(e, t.pixelRatio, (() => {
                        for (let t = 0; t < a.length; t++) e.fillText(a[t].replace(/^\s+/, ""), b, P), P += i.fontSize + l
                    })), e.restore()
                }
            }
            class x extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = null, this._noteRenderer = new v
                }
                isLabelVisible() {
                    return this.isHoveredSource() || this.isSelectedSource()
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = this._getSource(),
                        t = this._source.isFixed() ? [(0, r.ensureDefined)(e.fixedPoint())] : this._points;
                    if (t.length < 1) return;
                    const i = new s.CompositeRenderer,
                        n = this.isLabelVisible(),
                        d = this._source.properties().childs(),
                        h = {
                            text: d.text.value(),
                            bold: d.bold.value(),
                            italic: d.italic.value(),
                            font: l.CHART_FONT_FAMILY,
                            fontSize: d.fontSize.value(),
                            backgroundColor: d.backgroundColor.value(),
                            backgroundTransparency: d.backgroundTransparency.value(),
                            borderColor: d.borderColor.value(),
                            textColor: d.textColor.value(),
                            markerColor: d.markerColor.value(),
                            point: t[0],
                            width: 24,
                            height: 32,
                            tooltipVisible: n,
                            vpWidth: this._model.timeScale().width(),
                            tooltipWidth: e.getTooltipWidth(),
                            tooltipPadding: e.getTooltipPadding(),
                            tooltipLineSpacing: e.getTooltipLineSpacing()
                        };
                    this._noteRenderer.setData(h), i.append(this._noteRenderer), i.append(new a.SelectionRenderer({
                        points: t,
                        bgColors: this._lineAnchorColors(t),
                        visible: this.areAnchorsVisible(),
                        barSpacing: this._model.timeScale().barSpacing(),
                        hittestResult: o.HitTestResult.MOVEPOINT
                    })), this._renderer = i
                }
            }
        },
        836659: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                OrderPaneView: () => m
            });
            var r = i(86441),
                n = i(233330),
                s = i(28035),
                a = i(777754),
                o = i(927592),
                l = i(914679),
                d = i(904244),
                h = i(858063),
                c = i(868151),
                u = i(56155);
            const p = a.t(null, void 0, i(433241)),
                _ = a.t(null, void 0, i(316075));
            class g extends d.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = null, this._cache = {}, this._data = null, this._adapter = e
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null === this._data || 0 === this._data.points.length) return null;
                    const i = this._cache;
                    if (e.y < i.top || e.y > i.bottom) return null;
                    if (this._adapter.getBlocked() && e.x >= i.left && e.x < i.right) return new h.HitTestResult(h.HitTestResult.CUSTOM, {});
                    if (this._adapter.getEditable() && e.x >= i.left && e.x < i.bodyRight) {
                        const e = this._adapter.hasMoveCallback() ? h.HitTestResult.MOVEPOINT : h.HitTestResult.REGULAR;
                        return 0 === this._adapter.getTooltip().length ? new h.HitTestResult(e) : new h.HitTestResult(e, {
                            tooltip: {
                                text: this._adapter.getTooltip(),
                                rect: {
                                    x: i.left,
                                    y: i.top,
                                    w: i.bodyRight - i.left,
                                    h: i.bottom - i.top
                                }
                            }
                        })
                    }
                    return this._adapter.getEditable() && e.x >= i.bodyRight && e.x < i.quantityRight ? this._adapter.hasModifyCallback() ? new h.HitTestResult(h.HitTestResult.CUSTOM, {
                        clickHandler: this._adapter.callOnModify.bind(this._adapter),
                        tapHandler: this._adapter.callOnModify.bind(this._adapter),
                        tooltip: {
                            text: this._adapter.getModifyTooltip() || (0, c.appendEllipsis)(p),
                            rect: {
                                x: i.bodyRight,
                                y: i.top,
                                w: i.quantityRight - i.bodyRight,
                                h: i.bottom - i.top
                            }
                        }
                    }) : new h.HitTestResult(h.HitTestResult.REGULAR) : this._adapter.getCancellable() && e.x >= i.quantityRight && e.x < i.right ? new h.HitTestResult(h.HitTestResult.CUSTOM, {
                        clickHandler: this._adapter.callOnCancel.bind(this._adapter),
                        tapHandler: this._adapter.callOnCancel.bind(this._adapter),
                        tooltip: {
                            text: this._adapter.getCancelTooltip() || _,
                            rect: {
                                x: i.quantityRight,
                                y: i.top,
                                w: i.right - i.quantityRight,
                                h: i.bottom - i.top
                            }
                        }
                    }) : null
                }
                _drawImpl(e) {
                    if (null === this._data || !this._data.points || this._data.points.length < 1) return;
                    const t = e.context,
                        i = e.mediaSize.width,
                        r = this._bodyWidth(t),
                        n = this._quantityWidth(t),
                        s = r + n + this._cancelButtonWidth(),
                        a = i - s,
                        o = Math.max(this._adapter.getLineLength() / 100 * i, 1),
                        l = Math.round(i - Math.min(a, o)),
                        d = l - s,
                        h = Math.round(this._data.points[0].y),
                        c = Math.round(h - (this._height() + 1) / 2);
                    this._cache.bodyRight = d + r, this._cache.quantityRight = d + r + n, this._cache.top = c, this._cache.bottom = c + this._height(), this._cache.left = d, this._cache.right = l, this._drawLines(t, d, l, h, i);
                    let u = !1;
                    0 !== r && (this._drawBody(t, d, c), this._adapter.hasMoveCallback() && this._drawMovePoints(t, d, c), this._drawBodyText(t, d, c), u = !0), 0 !== n && (this._drawQuantity(t, d + r, c, u), this._drawQuantityText(t, d + r, c), u = !0), 0 !== this._cancelButtonWidth() && this._drawCancelButton(t, d + r + n, c, u)
                }
                _height() {
                    return Math.max(20, 1 + Math.max(u.fontHeight(this._adapter.getBodyFont()), u.fontHeight(this._adapter.getQuantityFont())))
                }
                _bodyWidth(e) {
                    if (0 === this._adapter.getText().length) return 0;
                    e.save(), e.font = this._adapter.getBodyFont();
                    const t = e.measureText(this._adapter.getText()).width;
                    return e.restore(), Math.round(20 + t)
                }
                _getQuantity() {
                    return (0, o.splitThousands)(this._adapter.getQuantity(), " ")
                }
                _quantityWidth(e) {
                    if (0 === this._getQuantity().length) return 0;
                    e.save(), e.font = this._adapter.getQuantityFont();
                    const t = e.measureText(this._getQuantity()).width;
                    return e.restore(), Math.round(Math.max(this._height(), 10 + t))
                }
                _cancelButtonWidth() {
                    return this._adapter.isOnCancelCallbackPresent() ? this._height() : 0
                }
                _drawLines(e, t, i, r, n) {
                    e.save(), e.strokeStyle = this._adapter.getLineColor(), (0, l.setLineStyle)(e, this._adapter.getLineStyle()), e.lineWidth = this._adapter.getLineWidth(), (0, l.drawLine)(e, i, r, n, r), this._adapter.getExtendLeft() && (0, l.drawLine)(e, 0, r, t, r), e.restore()
                }
                _drawMovePoints(e, t, i) {
                    e.save(), e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBorderColor();
                    const r = t + 4,
                        n = r + 2,
                        s = Math.floor((this._height() - 10) / 2) + 1;
                    for (let t = 0; t < s; ++t) {
                        const s = i + 5 + 2 * t;
                        (0, l.drawLine)(e, r, s, n, s)
                    }
                    e.restore()
                }
                _drawBody(e, t, i) {
                    e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBackgroundColor();
                    const r = this._bodyWidth(e),
                        n = this._height();
                    e.fillRect(t + .5, i + .5, r - 1, n - 1), e.strokeRect(t, i, r, n)
                }
                _drawBodyText(e, t, i) {
                    e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getBodyFont(), e.fillStyle = this._adapter.getBodyTextColor();
                    const r = t + this._bodyWidth(e) / 2,
                        n = i + this._height() / 2;
                    e.fillText(this._adapter.getText(), 5 + r - 2, n)
                }
                _drawQuantity(e, t, i, r) {
                    e.save(), e.strokeStyle = this._adapter.getQuantityBorderColor(), e.fillStyle = this._adapter.getQuantityBackgroundColor();
                    const n = this._quantityWidth(e),
                        s = this._height();
                    e.fillRect(t + .5, i + .5, n - 1, s - 1), r && e.clip && (e.beginPath(), e.rect(t + .5, i - .5, n + 1, s + 1), e.clip()), e.strokeRect(t, i, n, s), e.restore()
                }
                _drawQuantityText(e, t, i) {
                    e.save(), e.textAlign = "center",
                        e.textBaseline = "middle", e.font = this._adapter.getQuantityFont(), e.fillStyle = this._adapter.getQuantityTextColor();
                    const r = t + this._quantityWidth(e) / 2,
                        n = i + this._height() / 2;
                    e.fillText(this._getQuantity(), r, n), e.restore()
                }
                _drawCancelButton(e, t, i, n) {
                    e.strokeStyle = this._adapter.getCancelButtonBorderColor(), e.fillStyle = this._adapter.getCancelButtonBackgroundColor();
                    const s = this._cancelButtonWidth(),
                        a = this._height();
                    e.fillRect(t + .5, i + .5, s - 1, a - 1), this._adapter.getBlocked() && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, s - 1, a - 1)), e.save(), n && e.clip && (e.beginPath(), e.rect(t + .5, i - .5, s + 1, a + 1), e.clip()), e.strokeRect(t, i, s, a), e.restore();
                    const o = t + s,
                        d = i + a;
                    e.strokeStyle = this._adapter.getCancelButtonIconColor();
                    const h = (this._cancelButtonWidth() - 8) / 2,
                        c = (this._height() - 8) / 2;
                    (0, l.drawPoly)(e, [new r.Point(t + h, i + c), new r.Point(o - h, d - c)], !0), (0, l.drawPoly)(e, [new r.Point(o - h, i + c), new r.Point(t + h, d - c)], !0)
                }
            }
            var f = i(583110);
            class m extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = new s.CompositeRenderer, this._selectionRenderer = new f.SelectionRenderer, this._selectionData = null, this._adapter = e.adapter(), this._orderRenderer = new g(e.adapter()), this._renderer.append(this._orderRenderer), this._renderer.append(this._selectionRenderer)
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(t), this._renderer
                }
                _updateImpl(e) {
                    if (super._updateImpl(), this._selectionData = null, this.isSelectedSource() && this._points.length > 0) {
                        const t = this._points[0].y,
                            i = e - 3.5 - 1,
                            n = this._adapter.hasMoveCallback() ? h.HitTestResult.MOVEPOINT : h.HitTestResult.REGULAR,
                            s = [new r.Point(i, t)];
                        this._selectionData = {
                            barSpacing: this._model.timeScale().barSpacing(),
                            points: s,
                            bgColors: this._lineAnchorColors(s),
                            hittestResult: n,
                            visible: !0
                        }
                    }
                    this._orderRenderer.setData({
                        points: this._points
                    }), this._selectionRenderer.setData(this._selectionData)
                }
            }
        },
        186340: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                ParallelChannelPaneView: () => d
            });
            var r = i(86441),
                n = i(854905),
                s = i(28035),
                a = i(478037),
                o = i(764091);
            const l = [n.PaneCursorType.Default, n.PaneCursorType.Default, n.PaneCursorType.Default, n.PaneCursorType.Default, n.PaneCursorType.VerticalResize, n.PaneCursorType.VerticalResize];
            class d extends o.AlertableLineSourcePaneView {
                constructor() {
                    super(...arguments), this._channelRenderer = new a.ParallelChannelRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const e = this._source.priceScale();
                    if (!e || e.isEmpty()) return;
                    if (0 === this._source.points().length) return;
                    let t = null,
                        i = null;
                    if (3 === this._points.length) {
                        const e = this._points[0],
                            n = this._points[1],
                            s = this._points[2].y - this._points[0].y;
                        t = e.add((0, r.point)(0, s)), i = n.add((0, r.point)(0, s))
                    }
                    if (this._points.length <= 1) return;
                    const n = this._source.properties(),
                        a = {
                            points: this._points.length > 2 && null !== t && null !== i ? [this._points[0], this._points[1], t, i] : [this._points[0], this._points[1]],
                            color: n.childs().linecolor.value(),
                            linewidth: n.childs().linewidth.value(),
                            linestyle: n.childs().linestyle.value(),
                            extendleft: n.childs().extendLeft.value(),
                            extendright: n.childs().extendRight.value(),
                            fillBackground: n.childs().fillBackground.value(),
                            backcolor: n.childs().backgroundColor.value(),
                            transparency: n.childs().transparency.value(),
                            showMidline: n.childs().showMidline.value(),
                            midlinewidth: n.childs().midlinewidth.value(),
                            midlinestyle: n.childs().midlinestyle.value(),
                            midcolor: n.childs().midlinecolor.value(),
                            hittestOnBackground: !0
                        };
                    this._channelRenderer.setData(a);
                    const o = new s.CompositeRenderer;
                    o.append(this._channelRenderer);
                    const d = [];
                    if (this._points[0] && d.push(this._points[0]), this._points[1] && d.push(this._points[1]), t && i) {
                        const e = t;
                        e.data = 2, d.push(e);
                        const r = i;
                        r.data = 3, d.push(r);
                        const n = t.add(i).scaled(.5);
                        n.data = 4, n.square = !0, d.push(n);
                        const s = d[0].add(d[1]).scaled(.5);
                        s.data = 5, s.square = !0, d.push(s)
                    }
                    const h = 3 === this._points.length && !t;
                    if (this._model.lineBeingCreated() !== this._source || h || (d.pop(), d.pop()), o.append(this.createLineAnchor({
                            points: d,
                            pointsCursorType: l
                        }, 0)), this._points.length >= 2) {
                        const e = this._points;
                        this._addAlertRenderer(o, [e[0], e[1]])
                    }
                    this._renderer = o
                }
            }
        },
        415036: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PathPaneView: () => a
            });
            var r = i(530513),
                n = i(28035),
                s = i(233330);
            class a extends s.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._polygonRenderer = new r.PolygonRenderer, this._renderer = new n.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer.clear();
                    const e = this._source.properties().childs(),
                        t = {
                            points: this._points,
                            color: e.lineColor.value(),
                            linewidth: e.lineWidth.value(),
                            linestyle: e.lineStyle.value(),
                            leftend: e.leftEnd.value(),
                            rightend: e.rightEnd.value(),
                            filled: !1,
                            backcolor: "",
                            fillBackground: !1,
                            transparency: 0
                        };
                    this._polygonRenderer.setData(t), this._renderer.append(this._polygonRenderer), this.addAnchors(this._renderer)
                }
            }
        },
        897399: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PitchfanLinePaneView: () => d
            });
            var r = i(858063),
                n = i(826796),
                s = i(28035),
                a = i(739665),
                o = i(296266),
                l = i(233330);
            class d extends l.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._medianRenderer = new o.TrendLineRenderer, this._sideRenderer = new o.TrendLineRenderer, this._renderer = null, this._medianPoint = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, 0 === this._points.length) return;
                    if (3 === this._points.length ? (this._medianPoint = this._points[1].add(this._points[2]).scaled(.5), this._medianPoint.data = 3) : 2 === this._points.length ? (this._medianPoint = this._points[1].clone(), this._medianPoint.data = 3) : (this._medianPoint = this._points[0].clone(), this._medianPoint.data = 3), this._points.length < 2) return;
                    if (!this._medianPoint) return;
                    const e = new s.CompositeRenderer,
                        t = this._source.properties().childs(),
                        i = t.median.childs(),
                        l = {
                            points: [this._points[0], this._medianPoint],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !0,
                            leftend: a.LineEnd.Normal,
                            rightend: a.LineEnd.Normal
                        };
                    if (this._medianRenderer.setData(l), e.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(e),
                        void(this._renderer = e);
                    const d = {
                        points: [this._points[1], this._points[2]],
                        color: i.color.value(),
                        linewidth: i.linewidth.value(),
                        linestyle: i.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: a.LineEnd.Normal,
                        rightend: a.LineEnd.Normal
                    };
                    this._sideRenderer.setData(d), e.append(this._sideRenderer);
                    let h = 0;
                    const c = this._points[2].subtract(this._points[1]).scaled(.5),
                        u = t.fillBackground.value(),
                        p = t.transparency.value();
                    for (let t = 0; t <= 8; t++) {
                        const i = "level" + t,
                            s = this._source.properties().child(i);
                        if (s.childs().visible.value()) {
                            const i = this._medianPoint.addScaled(c, s.childs().coeff.value()),
                                l = this._medianPoint.addScaled(c, -s.childs().coeff.value());
                            if (u) {
                                {
                                    const t = {
                                            p1: this._points[0],
                                            p2: i,
                                            p3: this._points[0],
                                            p4: this._medianPoint.addScaled(c, h),
                                            color: s.childs().color.value(),
                                            transparency: p,
                                            hittestOnBackground: !0,
                                            extendLeft: !1
                                        },
                                        r = new n.ChannelRenderer;
                                    r.setData(t), e.append(r)
                                } {
                                    const t = {
                                            p1: this._points[0],
                                            p2: l,
                                            p3: this._points[0],
                                            p4: this._medianPoint.addScaled(c, -h),
                                            color: s.childs().color.value(),
                                            transparency: p,
                                            hittestOnBackground: !0,
                                            extendLeft: !1
                                        },
                                        i = new n.ChannelRenderer;
                                    i.setData(t), e.append(i)
                                }
                            }
                            h = s.childs().coeff.value(); {
                                const n = {
                                        points: [this._points[0], i],
                                        color: s.childs().color.value(),
                                        linewidth: s.childs().linewidth.value(),
                                        linestyle: s.childs().linestyle.value(),
                                        extendleft: !1,
                                        extendright: !0,
                                        leftend: a.LineEnd.Normal,
                                        rightend: a.LineEnd.Normal
                                    },
                                    l = new o.TrendLineRenderer;
                                l.setData(n), l.setHitTest(new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, t)), e.append(l)
                            } {
                                const i = {
                                        points: [this._points[0], l],
                                        color: s.childs().color.value(),
                                        linewidth: s.childs().linewidth.value(),
                                        linestyle: s.childs().linestyle.value(),
                                        extendleft: !1,
                                        extendright: !0,
                                        leftend: a.LineEnd.Normal,
                                        rightend: a.LineEnd.Normal
                                    },
                                    n = new o.TrendLineRenderer;
                                n.setData(i), n.setHitTest(new r.HitTestResult(r.HitTestResult.MOVEPOINT, void 0, t)), e.append(n)
                            }
                        }
                    }
                    this.addAnchors(e), this._renderer = e
                }
            }
        },
        455359: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PitchforkLinePaneView: () => h,
                SchiffPitchforkLinePaneView: () => c,
                SchiffPitchfork2LinePaneView: () => u,
                InsidePitchforkLinePaneView: () => p
            });
            var r = i(86441),
                n = i(858063),
                s = i(826796),
                a = i(28035),
                o = i(739665),
                l = i(296266),
                d = i(233330);
            class h extends d.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._medianRenderer = new l.TrendLineRenderer, this._sideRenderer = new l.TrendLineRenderer, this._renderer = null, this._medianPoint = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null, 0 !== this._points.length && (3 === this._points.length ? (this._medianPoint = this._points[1].add(this._points[2]).scaled(.5), this._medianPoint.data = 3) : 2 === this._points.length ? (this._medianPoint = this._points[1].clone(), this._medianPoint.data = 3) : (this._medianPoint = this._points[0].clone(), this._medianPoint.data = 3), this._updateRenderer())
                }
                _updateRenderer() {
                    if (this._points.length < 2) return;
                    if (!this._medianPoint) return;
                    const e = this._source.properties(),
                        t = e.childs().median.childs(),
                        i = new a.CompositeRenderer,
                        r = {
                            points: [this._points[0], this._medianPoint],
                            color: t.color.value(),
                            linewidth: t.linewidth.value(),
                            linestyle: t.linestyle.value(),
                            extendleft: e.childs().extendLines.value(),
                            extendright: !0,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                    if (this._medianRenderer.setData(r), i.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(i), void(this._renderer = i);
                    const d = {
                        points: [this._points[1], this._points[2]],
                        color: t.color.value(),
                        linewidth: t.linewidth.value(),
                        linestyle: t.linestyle.value(),
                        extendleft: !1,
                        extendright: !1,
                        leftend: o.LineEnd.Normal,
                        rightend: o.LineEnd.Normal
                    };
                    this._sideRenderer.setData(d), i.append(this._sideRenderer);
                    const h = this._points[2].subtract(this._points[1]).scaled(.5),
                        c = this._medianPoint.subtract(this._points[0]);
                    let u = 0;
                    const p = e.childs().fillBackground.value(),
                        _ = e.childs().transparency.value();
                    for (let t = 0; t <= 8; t++) {
                        const r = "level" + t,
                            a = e.childs()[r];
                        if (a.childs().visible.value()) {
                            const r = this._medianPoint.addScaled(h, a.childs().coeff.value()),
                                d = r.add(c),
                                g = this._medianPoint.addScaled(h, -a.childs().coeff.value()),
                                f = g.add(c);
                            if (p) {
                                {
                                    const t = this._medianPoint.addScaled(h, u),
                                        n = {
                                            p1: r,
                                            p2: d,
                                            p3: t,
                                            p4: t.add(c),
                                            color: a.childs().color.value(),
                                            transparency: _,
                                            hittestOnBackground: !0,
                                            extendLeft: e.childs().extendLines.value()
                                        },
                                        o = new s.ChannelRenderer;
                                    o.setData(n), i.append(o)
                                } {
                                    const t = this._medianPoint.addScaled(h, -u),
                                        r = {
                                            p1: g,
                                            p2: f,
                                            p3: t,
                                            p4: t.add(c),
                                            color: a.childs().color.value(),
                                            transparency: _,
                                            hittestOnBackground: !0,
                                            extendLeft: e.childs().extendLines.value()
                                        },
                                        n = new s.ChannelRenderer;
                                    n.setData(r), i.append(n)
                                }
                            }
                            u = a.childs().coeff.value();
                            const m = {
                                    points: [r, d],
                                    color: a.childs().color.value(),
                                    linewidth: a.childs().linewidth.value(),
                                    linestyle: a.childs().linestyle.value(),
                                    extendleft: e.childs().extendLines.value(),
                                    extendright: !0,
                                    leftend: o.LineEnd.Normal,
                                    rightend: o.LineEnd.Normal
                                },
                                v = new l.TrendLineRenderer;
                            v.setData(m), v.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, t)), i.append(v);
                            const x = {
                                    points: [g, f],
                                    color: a.childs().color.value(),
                                    linewidth: a.childs().linewidth.value(),
                                    linestyle: a.childs().linestyle.value(),
                                    extendleft: e.childs().extendLines.value(),
                                    extendright: !0,
                                    leftend: o.LineEnd.Normal,
                                    rightend: o.LineEnd.Normal
                                },
                                w = new l.TrendLineRenderer;
                            w.setData(x), w.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, t)), i.append(w)
                        }
                    }
                    this.addAnchors(i), this._renderer = i
                }
            }
            class c extends h {
                constructor() {
                    super(...arguments), this._modifiedBase = null, this._backSideRenderer = new l.TrendLineRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateRenderer() {
                    if (this._points.length < 2) return;
                    this._calcMofifiedBase();
                    const e = this._source.properties(),
                        t = new a.CompositeRenderer,
                        i = e.childs().median.childs(); {
                        const e = {
                            points: [this._points[0], this._points[1]],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        if (this._backSideRenderer.setData(e), t.append(this._backSideRenderer), !this._medianPoint || !this._modifiedBase) return this.addAnchors(t), void(this._renderer = t)
                    } {
                        const r = {
                            points: [this._modifiedBase, this._medianPoint],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: e.childs().extendLines.value(),
                            extendright: !0,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        if (this._medianRenderer.setData(r), t.append(this._medianRenderer), this._points.length < 3) return this.addAnchors(t), void(this._renderer = t)
                    } {
                        const e = {
                            points: [this._points[1], this._points[2]],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        this._sideRenderer.setData(e), t.append(this._sideRenderer)
                    } {
                        const i = this._points[2].subtract(this._points[1]).scaled(.5),
                            r = this._medianPoint.subtract(this._modifiedBase);
                        let a = 0;
                        const d = e.childs().fillBackground.value(),
                            h = e.childs().transparency.value();
                        for (let c = 0; c <= 8; c++) {
                            const u = "level" + c,
                                p = e.child(u);
                            if (p.childs().visible.value()) {
                                const u = this._medianPoint.addScaled(i, p.childs().coeff.value()),
                                    _ = u.add(r),
                                    g = this._medianPoint.addScaled(i, -p.childs().coeff.value()),
                                    f = g.add(r);
                                if (d) {
                                    const n = this._medianPoint.addScaled(i, a); {
                                        const i = {
                                                p1: u,
                                                p2: _,
                                                p3: n,
                                                p4: n.add(r),
                                                color: p.childs().color.value(),
                                                transparency: h,
                                                hittestOnBackground: !0,
                                                extendLeft: e.childs().extendLines.value()
                                            },
                                            a = new s.ChannelRenderer;
                                        a.setData(i), t.append(a)
                                    } {
                                        const n = this._medianPoint.addScaled(i, -a),
                                            o = {
                                                p1: g,
                                                p2: f,
                                                p3: n,
                                                p4: n.add(r),
                                                color: p.childs().color.value(),
                                                transparency: h,
                                                hittestOnBackground: !0,
                                                extendLeft: e.childs().extendLines.value()
                                            },
                                            l = new s.ChannelRenderer;
                                        l.setData(o), t.append(l)
                                    }
                                }
                                a = p.childs().coeff.value();
                                const m = {
                                        points: [u, _],
                                        color: p.childs().color.value(),
                                        linewidth: p.childs().linewidth.value(),
                                        linestyle: p.childs().linestyle.value(),
                                        extendleft: e.childs().extendLines.value(),
                                        extendright: !0,
                                        leftend: o.LineEnd.Normal,
                                        rightend: o.LineEnd.Normal
                                    },
                                    v = new l.TrendLineRenderer;
                                v.setData(m), v.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, c)), t.append(v);
                                const x = {
                                        points: [g, f],
                                        color: p.childs().color.value(),
                                        linewidth: p.childs().linewidth.value(),
                                        linestyle: p.childs().linestyle.value(),
                                        extendleft: e.childs().extendLines.value(),
                                        extendright: !0,
                                        leftend: o.LineEnd.Normal,
                                        rightend: o.LineEnd.Normal
                                    },
                                    w = new l.TrendLineRenderer;
                                w.setData(x), w.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, c)), t.append(w)
                            }
                        }
                    }
                    this.addAnchors(t), this._renderer = t
                }
                _calcMofifiedBase() {
                    this._points.length > 1 && (this._modifiedBase = this._points[0].add(this._points[1]).scaled(.5))
                }
            }
            class u extends c {
                _calcMofifiedBase() {
                    if (this._points.length > 2) {
                        const e = this._points[0].x,
                            t = .5 * (this._points[0].y + this._points[1].y),
                            i = new r.Point(e, t);
                        this._modifiedBase = i
                    }
                }
            }
            class p extends h {
                constructor() {
                    super(...arguments), this._backSideRenderer = new l.TrendLineRenderer, this._centerRenderer = new l.TrendLineRenderer, this._modifiedBase = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateRenderer() {
                    if (this._points.length > 1 && (this._modifiedBase = this._points[0].add(this._points[1]).scaled(.5)), this._points.length < 2) return;
                    const e = new a.CompositeRenderer;
                    if (!this._medianPoint || !this._modifiedBase) return void this.addAnchors(e);
                    const t = this._source.properties(),
                        i = t.childs().median.childs();
                    if (3 === this._points.length) {
                        const t = {
                            points: [this._modifiedBase, this._points[2]],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        this._medianRenderer.setData(t), e.append(this._medianRenderer)
                    } {
                        const t = {
                            points: [this._points[0], this._points[1]],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        if (this._backSideRenderer.setData(t), e.append(this._backSideRenderer), this._points.length < 3) return this.addAnchors(e), void(this._renderer = e)
                    } {
                        const t = {
                            points: [this._points[1], this._points[2]],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: i.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.LineEnd.Normal,
                            rightend: o.LineEnd.Normal
                        };
                        this._sideRenderer.setData(t), e.append(this._sideRenderer)
                    } {
                        const r = this._points[2].subtract(this._points[1]).scaled(.5),
                            a = this._points[2].subtract(this._modifiedBase);
                        let d = 0;
                        const h = t.childs().fillBackground.value(),
                            c = t.childs().transparency.value(),
                            u = {
                                points: [this._medianPoint, this._medianPoint.add(a)],
                                color: i.color.value(),
                                linewidth: i.linewidth.value(),
                                linestyle: i.linestyle.value(),
                                extendleft: t.childs().extendLines.value(),
                                extendright: !0,
                                leftend: o.LineEnd.Normal,
                                rightend: o.LineEnd.Normal
                            };
                        this._centerRenderer.setData(u), e.append(this._centerRenderer);
                        for (let i = 0; i <= 8; i++) {
                            const u = "level" + i,
                                p = t.child(u).childs();
                            if (p.visible.value()) {
                                const u = this._medianPoint.addScaled(r, p.coeff.value()),
                                    _ = u.add(a),
                                    g = this._medianPoint.addScaled(r, -p.coeff.value()),
                                    f = g.add(a);
                                if (h) {
                                    {
                                        const i = this._medianPoint.addScaled(r, d),
                                            n = {
                                                p1: u,
                                                p2: _,
                                                p3: i,
                                                p4: i.add(a),
                                                color: p.color.value(),
                                                transparency: c,
                                                hittestOnBackground: !0,
                                                extendLeft: t.childs().extendLines.value()
                                            },
                                            o = new s.ChannelRenderer;
                                        o.setData(n), e.append(o)
                                    } {
                                        const i = this._medianPoint.addScaled(r, -d),
                                            n = {
                                                p1: g,
                                                p2: f,
                                                p3: i,
                                                p4: i.add(a),
                                                color: p.color.value(),
                                                transparency: c,
                                                hittestOnBackground: !0,
                                                extendLeft: t.childs().extendLines.value()
                                            },
                                            o = new s.ChannelRenderer;
                                        o.setData(n), e.append(o)
                                    }
                                }
                                d = p.coeff.value();
                                const m = {
                                        points: [u, _],
                                        color: p.color.value(),
                                        linewidth: p.linewidth.value(),
                                        linestyle: p.linestyle.value(),
                                        extendleft: t.childs().extendLines.value(),
                                        extendright: !0,
                                        leftend: o.LineEnd.Normal,
                                        rightend: o.LineEnd.Normal
                                    },
                                    v = new l.TrendLineRenderer;
                                v.setData(m), v.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, i)), e.append(v);
                                const x = {
                                        points: [g, f],
                                        color: p.color.value(),
                                        linewidth: p.linewidth.value(),
                                        linestyle: p.linestyle.value(),
                                        extendleft: t.childs().extendLines.value(),
                                        extendright: !0,
                                        leftend: o.LineEnd.Normal,
                                        rightend: o.LineEnd.Normal
                                    },
                                    w = new l.TrendLineRenderer;
                                w.setData(x), w.setHitTest(new n.HitTestResult(n.HitTestResult.MOVEPOINT, void 0, i)), e.append(w)
                            }
                        }
                    }
                    this.addAnchors(e), this._renderer = e
                }
            }
        },
        876503: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PolylinePaneView: () => a
            });
            var r = i(530513),
                n = i(28035),
                s = i(233330);
            class a extends s.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t),
                        this._polygonRenderer = new r.PolygonRenderer, this._renderer = new n.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer.clear();
                    const e = this._source.properties().childs(),
                        t = {
                            points: this._points,
                            color: e.linecolor.value(),
                            linewidth: e.linewidth.value(),
                            linestyle: e.linestyle.value(),
                            filled: e.filled.value(),
                            backcolor: e.backgroundColor.value(),
                            fillBackground: e.fillBackground.value(),
                            transparency: e.transparency.value()
                        };
                    this._polygonRenderer.setData(t), this._renderer.append(this._polygonRenderer), this.addAnchors(this._renderer)
                }
            }
        },
        173708: (e, t, i) => {
            "use strict";
            var r = i(233330).LineSourcePaneView,
                n = i(56155),
                s = i(858063).HitTestResult,
                a = i(927592).splitThousands,
                o = i(768038),
                l = i(868151).appendEllipsis,
                d = i(904244).MediaCoordinatesPaneRenderer;
            const {
                setLineStyle: h,
                drawLine: c,
                drawPoly: u
            } = i(914679), {
                LINESTYLE_SOLID: p
            } = i(631586);
            class _ extends d {
                constructor(e, t) {
                    super(), this._data = null, this._cache = e, this._adapter = t
                }
                setData(e) {
                    this._data = e
                }
                _height() {
                    return Math.max(20, 1 + Math.max(n.fontHeight(this._adapter.getBodyFont()), n.fontHeight(this._adapter.getQuantityFont())))
                }
                _bodyWidth(e) {
                    if (0 === this._adapter.getText().length) return 0;
                    e.save(), e.font = this._adapter.getBodyFont();
                    var t = e.measureText(this._adapter.getText()).width;
                    return e.restore(), Math.round(10 + t)
                }
                _getQuantity() {
                    var e = this._adapter.getQuantity();
                    return isNaN(e) ? e : a(this._adapter.getQuantity(), " ")
                }
                _quantityWidth(e) {
                    if (0 === this._getQuantity().length) return 0;
                    e.save(), e.font = this._adapter.getQuantityFont();
                    var t = e.measureText(this._getQuantity()).width;
                    return e.restore(), Math.round(Math.max(this._height(), 10 + t))
                }
                _reverseButtonWidth() {
                    return this._adapter.isOnReverseCallbackPresent() ? this._height() : 0
                }
                _closeButtonWidth() {
                    return this._adapter.isOnCloseCallbackPresent() ? this._height() : 0
                }
                _drawLines(e, t, i, r, n) {
                    e.save(), e.strokeStyle = this._adapter.getLineColor(), e.lineStyle = this._adapter.getLineStyle(), e.lineWidth = this._adapter.getLineWidth(), c(e, i, r, n, r), this._adapter.getExtendLeft() && c(e, 0, r, t, r), e.restore()
                }
                _drawBody(e, t, i) {
                    e.strokeStyle = this._adapter.getBodyBorderColor(), e.fillStyle = this._adapter.getBodyBackgroundColor();
                    var r = this._bodyWidth(e),
                        n = this._height();
                    e.fillRect(t + .5, i + .5, r - 1, n - 1), e.strokeRect(t, i, r, n)
                }
                _drawBodyText(e, t, i) {
                    e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getBodyFont(), e.fillStyle = this._adapter.getBodyTextColor();
                    var r = t + this._bodyWidth(e) / 2,
                        n = i + this._height() / 2;
                    e.fillText(this._adapter.getText(), r, n), e.restore()
                }
                _drawQuantity(e, t, i) {
                    e.strokeStyle = this._adapter.getQuantityBorderColor(), e.fillStyle = this._adapter.getQuantityBackgroundColor();
                    var r = this._quantityWidth(e),
                        n = this._height();
                    e.fillRect(t + .5, i + .5, r - 1, n - 1), e.strokeRect(t, i, r, n)
                }
                _drawQuantityText(e, t, i) {
                    e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = this._adapter.getQuantityFont(), e.fillStyle = this._adapter.getQuantityTextColor();
                    var r = t + this._quantityWidth(e) / 2,
                        n = i + this._height() / 2;
                    e.fillText(o.startWithLTR(this._getQuantity() + ""), r, n), e.restore()
                }
                _drawReverseButton(e, t, i) {
                    e.save(), e.strokeStyle = this._adapter.getReverseButtonBorderColor(), e.fillStyle = this._adapter.getReverseButtonBackgroundColor();
                    var r = this._reverseButtonWidth(),
                        n = this._height();
                    e.fillRect(t + .5, i + .5, r - 1, n - 1), e.strokeRect(t, i, r, n), e.strokeStyle = this._adapter.getReverseButtonIconColor();
                    var s = function(e, t) {
                            h(e, p), c(e, 0, 0, 0, t), c(e, -1, 1, 1, 1), c(e, -2, 2, 2, 2)
                        },
                        a = t + Math.round((this._reverseButtonWidth() - 6) / 2),
                        o = i + 5;
                    e.save(), e.translate(a, o), s(e, 10), e.translate(6, 10), e.rotate(Math.PI), s(e, 10), e.restore(), this._adapter._blocked && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, r - 1, n - 1)), e.restore()
                }
                _drawCloseButton(e, t, i) {
                    e.save(), e.strokeStyle = this._adapter.getCloseButtonBorderColor(), e.fillStyle = this._adapter.getCloseButtonBackgroundColor();
                    var r = this._closeButtonWidth(),
                        n = this._height();
                    e.fillRect(t + .5, i + .5, r - 1, n - 1), e.strokeRect(t, i, r, n);
                    var s = t + r,
                        a = i + n;
                    e.strokeStyle = this._adapter.getCloseButtonIconColor();
                    var o = (this._closeButtonWidth() - 8) / 2,
                        l = (this._height() - 8) / 2;
                    u(e, [{
                        x: t + o,
                        y: i + l
                    }, {
                        x: s - o,
                        y: a - l
                    }], !0), u(e, [{
                        x: s - o,
                        y: i + l
                    }, {
                        x: t + o,
                        y: a - l
                    }], !0), this._adapter._blocked && (e.fillStyle = "rgba(140, 140, 140, 0.75)", e.fillRect(t + .5, i + .5, r - 1, n - 1)), e.restore()
                }
                _drawImpl(e) {
                    if (null !== this._data && this._data.points && !(this._data.points.length < 1)) {
                        var t = e.context,
                            i = this._data.width,
                            r = this._bodyWidth(t),
                            n = this._quantityWidth(t),
                            s = this._reverseButtonWidth(t),
                            a = r + n + s + this._closeButtonWidth(),
                            o = i - a,
                            l = Math.max(this._adapter.getLineLength() / 100 * i, 1),
                            d = Math.round(i - Math.min(o, l)),
                            h = d - a,
                            c = Math.round(this._data.points[0].y),
                            u = Math.round(c - (this._height() + 1) / 2);
                        this._cache.bodyRight = h + r, this._cache.quantityRight = this._cache.bodyRight + n, this._cache.reverseButtonRight = this._cache.quantityRight + s, this._cache.top = u, this._cache.bottom = u + this._height(), this._cache.left = h, this._cache.right = d, this._drawLines(t, h, d, c, i), 0 !== r && (this._drawBody(t, h, u), this._drawBodyText(t, h, u)), 0 !== n && (this._drawQuantity(t, this._cache.bodyRight, u), this._drawQuantityText(t, this._cache.bodyRight, u)), 0 !== s && this._drawReverseButton(t, this._cache.quantityRight, u), 0 !== this._closeButtonWidth() && this._drawCloseButton(t, this._cache.reverseButtonRight, u)
                    }
                }
                hitTest(e) {
                    return null === this._data || 0 === this._data.points.length || e.y < this._cache.top || e.y > this._cache.bottom || e.x < this._cache.left || this._cache.right < e.x ? null : this._adapter._blocked ? new s(s.CUSTOM, {}) : e.x >= this._cache.bodyRight && e.x < this._cache.quantityRight && this._adapter._onModifyCallback ? new s(s.CUSTOM, {
                        clickHandler: this._adapter.callOnModify.bind(this._adapter),
                        tapHandler: this._adapter.callOnModify.bind(this._adapter),
                        tooltip: {
                            text: this._adapter.getProtectTooltip() || l(i(777754).t(null, void 0, i(911810))),
                            rect: {
                                x: this._cache.bodyRight,
                                y: this._cache.top,
                                w: this._cache.quantityRight - this._cache.bodyRight,
                                h: this._cache.bottom - this._cache.top
                            }
                        }
                    }) : e.x >= this._cache.quantityRight && e.x < this._cache.reverseButtonRight ? new s(s.CUSTOM, {
                        clickHandler: this._adapter.callOnReverse.bind(this._adapter),
                        tapHandler: this._adapter.callOnReverse.bind(this._adapter),
                        tooltip: {
                            text: this._adapter.getReverseTooltip() || i(777754).t(null, void 0, i(419780)),
                            rect: {
                                x: this._cache.quantityRight,
                                y: this._cache.top,
                                w: this._cache.reverseButtonRight - this._cache.quantityRight,
                                h: this._cache.bottom - this._cache.top
                            }
                        }
                    }) : e.x >= this._cache.reverseButtonRight && e.x < this._cache.right ? new s(s.CUSTOM, {
                        clickHandler: this._adapter.callOnClose.bind(this._adapter),
                        tapHandler: this._adapter.callOnClose.bind(this._adapter),
                        tooltip: {
                            text: this._adapter.getCloseTooltip() || i(777754).t(null, void 0, i(437431)),
                            rect: {
                                x: this._cache.reverseButtonRight,
                                y: this._cache.top,
                                w: this._cache.right - this._cache.reverseButtonRight,
                                h: this._cache.bottom - this._cache.top
                            }
                        }
                    }) : new s(s.CUSTOM, {
                        clickHandler: function() {},
                        tapHandler: function() {},
                        tooltip: {
                            text: this._adapter.getTooltip(),
                            rect: {
                                x: this._cache.left,
                                y: this._cache.top,
                                w: this._cache.bodyRight - this._cache.left,
                                h: this._cache.bottom - this._cache.top
                            }
                        }
                    })
                }
            }
            t.PositionPaneView = class extends r {
                constructor(e, t) {
                    super(e, t), this._rendererCache = {}, this._renderer = new _(this._rendererCache, e._adapter)
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer.setData({
                        points: this._points,
                        width: this._model.timeScale().width()
                    }), this._renderer
                }
            }
        },
        829165: (e, t, i) => {
            "use strict";
            var r = i(86441).Point,
                n = i(233330).LineSourcePaneView,
                s = i(568450).Interval,
                a = i(858063).HitTestResult,
                o = i(28035).CompositeRenderer,
                l = i(864929).getImage,
                d = i(43329),
                h = i(561068).PercentageFormatter,
                c = i(662598).DateFormatter,
                u = i(164280).TimeFormatter,
                p = i(164280).hourMinuteFormat,
                _ = i(164280).hourMinuteSecondFormat,
                g = i(735512).TimeSpanFormatter,
                f = i(114123),
                m = i(508373),
                v = i(741341).calcTextHorizontalShift,
                x = i(768038).isRtl,
                w = i(914679).drawRoundRect,
                R = i(538708).makeFont,
                y = i(904244).MediaCoordinatesPaneRenderer,
                T = i(768038),
                b = T.forceLTRStr,
                P = T.startWithLTR,
                L = i(623331).CHART_FONT_FAMILY;
            class S extends y {
                constructor() {
                    super(), this._data = null, this._font = L, this._targetFontSize1 = 14, this._targetFontSize2 = 11, this._sourceFontSize1 = 12, this._sourceFontSize2 = 10, this._arrowOffset = 6, this._arrowWidth = 5, this._arrowHeight = 5, this._radius = 3, this._sourceWidth = void 0, this._sourceHeight = void 0, this._sourceRectLeftOffset = void 0, this._targetWidth = void 0, this._targetHeight = void 0, this._targetRectLeftOffset = void 0
                }
                setData(e) {
                    this._data = e
                }
                drawBalloon(e, t, i, n, s, a) {
                    var o = a || 20;
                    if (e.beginPath(), "down" === s) {
                        var l = new r(t.x - o, t.y - this._arrowOffset - this._arrowHeight - n);
                        return e.moveTo(l.x + this._radius, l.y), e.lineTo(l.x + i - this._radius, l.y), e.arcTo(l.x + i, l.y, l.x + i, l.y + this._radius, this._radius), e.lineTo(l.x + i, l.y + n - this._radius), e.arcTo(l.x + i, l.y + n, l.x + i - this._radius, l.y + n, this._radius), e.lineTo(l.x + o + this._arrowWidth, l.y + n), e.lineTo(l.x + o, l.y + n + this._arrowHeight), e.lineTo(l.x + o - this._arrowWidth, l.y + n), e.lineTo(l.x + this._radius, l.y + n), e.arcTo(l.x, l.y + n, l.x, l.y + n - this._radius, this._radius), e.lineTo(l.x, l.y + this._radius), e.arcTo(l.x, l.y, l.x + this._radius, l.y, this._radius), l
                    }
                    var d = new r(t.x - o, t.y + this._arrowOffset + this._arrowHeight + n);
                    return e.moveTo(d.x + this._radius, d.y), e.lineTo(d.x + i - this._radius, d.y), e.arcTo(d.x + i, d.y, d.x + i, d.y - this._radius, this._radius), e.lineTo(d.x + i, d.y - n + this._radius), e.arcTo(d.x + i, d.y - n, d.x + i - this._radius, d.y - n, this._radius),
                        e.lineTo(d.x + o + this._arrowWidth, d.y - n), e.lineTo(d.x + o, d.y - n - this._arrowHeight), e.lineTo(d.x + o - this._arrowWidth, d.y - n), e.lineTo(d.x + this._radius, d.y - n), e.arcTo(d.x, d.y - n, d.x, d.y - n + this._radius, this._radius), e.lineTo(d.x, d.y - this._radius), e.arcTo(d.x, d.y, d.x + this._radius, d.y, this._radius), new r(d.x, d.y - n)
                }
                drawTargetLabel(e) {
                    e.save(), e.translate(.5, .5);
                    var t = R(this._targetFontSize1, this._font, "normal"),
                        r = R(this._targetFontSize2, this._font, "normal"),
                        n = this._data.targetLine1,
                        s = this._data.targetLine2,
                        a = this._data.targetLine3,
                        o = this._data.targetLine4;
                    e.font = t;
                    var l = e.measureText(n).width,
                        d = e.measureText(s).width,
                        h = e.measureText(" ").width;
                    e.font = r;
                    var c = e.measureText(a).width,
                        u = e.measureText(o).width,
                        p = e.measureText(" ").width,
                        _ = this._data.clockWhite && this._data.clockWhite.width || 0;
                    this._targetWidth = Math.max(l + d + h, c + u + _ + 2 * p) + 8 + 4, this._targetHeight = this._targetFontSize1 + this._targetFontSize2 + 9 + 4;
                    var g = this._data.points[1],
                        y = g.x + this._targetWidth - e.canvas.width + 5;
                    this._targetRectLeftOffset = Math.max(20, Math.min(this._targetWidth - 15, y));
                    var T = "up" === this._data.direction ? "down" : "up",
                        b = this.drawBalloon(e, g, this._targetWidth, this._targetHeight, T, this._targetRectLeftOffset);
                    e.fillStyle = f.generateColor(this._data.targetBackColor, this._data.transparency), e.fill(), e.lineWidth = 2, e.strokeStyle = f.generateColor(this._data.targetStrokeColor, this._data.transparency), e.stroke();
                    e.beginPath(), e.arc(g.x, g.y, 3, 0, 2 * Math.PI, !1), e.fillStyle = this._data.centersColor, e.fill(), e.textBaseline = "top", e.fillStyle = this._data.targetTextColor;
                    var P = 2 + b.x + 4,
                        L = 2 + b.y + 3,
                        S = this._targetWidth - 8 - 4;
                    e.font = t, e.textAlign = x() ? "right" : "left";
                    var C = v(e, S - d - h);
                    e.fillText(n, P + C, L);
                    var M = v(e, S - l);
                    e.fillText(s, P + l + h + M, L), e.font = r;
                    var I = L + this._targetFontSize1 + 3,
                        N = v(e, S - u - _ - p);
                    e.fillText(a, P + N, I);
                    var k = v(e, S - c - p - _ - u);
                    this._data.clockWhite && e.drawImage(this._data.clockWhite, P + c + p + k, I + 1);
                    var A = v(e, S - c - _);
                    if (e.fillText(o, P + c + _ + 2 * p + A, I), this._data.status) {
                        var D, E, B, z;
                        switch (e.font = R(this._targetFontSize1, this._font, "bold"), this._data.status) {
                            case m.AlertStatus.Success:
                                D = i(777754).t(null, void 0, i(826787)), E = f.generateColor(this._data.successBackground, this._data.transparency), B = this._data.successTextColor, z = this._data.successIcon;
                                break;
                            case m.AlertStatus.Failure:
                                D = i(777754).t(null, void 0, i(100968)), E = f.generateColor(this._data.failureBackground, this._data.transparency), B = this._data.failureTextColor, z = this._data.failureIcon
                        }
                        var O = this._targetFontSize1 + 4,
                            H = e.measureText(D).width,
                            V = Math.round((this._targetWidth - H) / 2),
                            F = v(e, H);
                        e.fillStyle = E, "up" === this._data.direction ? (w(e, b.x - 1, b.y - O - 2, this._targetWidth + 2, O, 5), e.fill(), e.fillStyle = B, e.fillText(D, b.x + V + F, b.y - O + 1), z && e.drawImage(z, b.x + V - z.width - 4, b.y - O - 2 + Math.abs(O - z.height) / 2)) : (w(e, b.x - 1, b.y + this._targetHeight + 2, this._targetWidth + 2, O, 5), e.fill(), e.fillStyle = B, e.fillText(D, b.x + V + F, b.y + this._targetHeight + 5), z && e.drawImage(z, b.x + V - z.width - 4, b.y + this._targetHeight + 10 - Math.abs(O - z.height) / 2)), e.restore()
                    } else e.restore()
                }
                drawStartLabel(e) {
                    e.save(), e.translate(.5, .5);
                    var t = R(this._sourceFontSize1, this._font, "normal"),
                        i = R(this._sourceFontSize2, this._font, "normal");
                    e.font = t;
                    var r = e.measureText(this._data.sourceLine1).width;
                    e.font = i;
                    var n = e.measureText(this._data.sourceLine2).width;
                    this._sourceWidth = Math.max(r, n) + 6 + 4, this._sourceHeight = this._sourceFontSize1 + this._sourceFontSize2 + 6 + 4;
                    var s = this._data.points[0],
                        a = s.x + this._sourceWidth - e.canvas.width + 5;
                    this._sourceRectLeftOffset = Math.max(20, Math.min(this._sourceWidth - 15, a));
                    var o = this.drawBalloon(e, s, this._sourceWidth, this._sourceHeight, this._data.direction, this._sourceRectLeftOffset);
                    e.fillStyle = f.generateColor(this._data.sourceBackColor, this._data.transparency), e.fill(), e.lineWidth = 2, e.strokeStyle = f.generateColor(this._data.sourceStrokeColor, this._data.transparency), e.stroke(), e.textAlign = x() ? "right" : "left", e.textBaseline = "top", e.fillStyle = this._data.sourceTextColor;
                    var l = v(e, this._sourceWidth - 6 - 4),
                        d = 2 + o.x + 3 + l,
                        h = 2 + o.y + 2;
                    e.font = t, e.fillText(this._data.sourceLine1, d, h), e.font = i, e.fillText(this._data.sourceLine2, d, h + this._sourceFontSize1 + 2);
                    e.beginPath(), e.arc(s.x, s.y, 3, 0, 2 * Math.PI, !1), e.fillStyle = this._data.centersColor, e.fill(), e.restore()
                }
                _drawImpl(e) {
                    if (!(null === this._data || this._data.points.length < 2)) {
                        var t = e.context;
                        t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.lineStyle = this._data.linestyle;
                        var i = this._data.points[0],
                            r = this._data.points[1],
                            n = r.subtract(i);
                        Math.abs(n.x) < 1 || Math.abs(n.y) < 1 ? (t.beginPath(), t.moveTo(i.x, i.y), t.lineTo(r.x, r.y), t.stroke()) : (t.save(), t.beginPath(), t.translate(i.x, i.y), t.scale(1, n.y / n.x), t.moveTo(0, 0), t.arcTo(n.x, 0, n.x, n.x, Math.abs(n.x)), t.lineTo(n.x, n.x), t.restore(), t.stroke()), this.drawTargetLabel(t), this.drawStartLabel(t);
                        var s = Math.max(8, 4 * this._data.linewidth);
                        t.fillStyle = this._data.color;
                        var a = n.y < 0 ? 1 : -1;
                        if (Math.abs(n.x) < 1 || Math.abs(n.y) < 1) var o = Math.atan(n.x / n.y);
                        else {
                            var l, d, h = Math.abs(n.x),
                                c = Math.abs(n.y),
                                u = 0,
                                p = Math.PI / 2,
                                _ = (u + p) / 2;
                            if (n.length() > s)
                                for (;;) {
                                    l = h * Math.sin(_), d = c * (1 - Math.cos(_));
                                    var g = Math.sqrt((l - h) * (l - h) + (d - c) * (d - c));
                                    if (Math.abs(g - s) < 1) break;
                                    g > s ? u = _ : p = _, _ = (u + p) / 2
                                }
                            o = Math.atan((h - l) / (c - d)), n.x * n.y < 0 && (o = -o)
                        }
                        t.save(), t.beginPath(), t.translate(r.x, r.y), t.rotate(-o), t.moveTo(0, 0), t.lineTo(-s / 2, a * s), t.lineTo(s / 2, a * s), t.lineTo(0, 0), t.restore(), t.fill()
                    }
                }
                targetLabelHitTest(e) {
                    if (void 0 === this._targetWidth || void 0 === this._targetHeight || void 0 === this._targetRectLeftOffset) return null;
                    var t = this._targetHeight + this._arrowHeight;
                    this._data.status && (t += this._targetFontSize1 + 10);
                    var i = "up" === this._data.direction ? -1 : 1,
                        r = this._radius,
                        n = this._data.points[1],
                        s = n.x - this._targetRectLeftOffset,
                        o = n.y + i * r,
                        l = n.y + i * (t + r),
                        d = Math.min(o, l),
                        h = Math.max(o, l);
                    return e.x >= s && e.x <= s + this._targetWidth && e.y >= d && e.y <= h ? new a(a.MOVEPOINT) : null
                }
                sourceLabelHitTest(e) {
                    if (void 0 === this._sourceHeight || void 0 === this._sourceWidth || void 0 === this._sourceRectLeftOffset) return null;
                    var t = "up" === this._data.direction ? 1 : -1,
                        i = this._radius,
                        r = this._data.points[0],
                        n = r.x - this._sourceRectLeftOffset,
                        s = r.y + i * t,
                        o = r.y + (i + this._sourceHeight + this._arrowHeight) * t,
                        l = Math.min(s, o),
                        d = Math.max(s, o);
                    return e.x >= n && e.x <= n + this._sourceWidth && e.y >= l && e.y <= d ? new a(a.MOVEPOINT) : null
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 2) return null;
                    var t = this._data.points[0],
                        i = this._data.points[1],
                        r = i.subtract(t),
                        n = (r = i.subtract(t), e.subtract(t)),
                        s = Math.abs(r.x),
                        o = Math.abs(r.y),
                        l = d.sign(r.y) * (o - o * Math.sqrt(1 - n.x * n.x / (s * s)));
                    if (Math.abs(l - n.y) < 3) return new a(a.MOVEPOINT);
                    var h = this.targetLabelHitTest(e);
                    return h || this.sourceLabelHitTest(e)
                }
            }
            t.PredictionPaneView = class extends n {
                constructor(e, t) {
                    super(e, t), this._pendingIcons = 3;
                    var r = this;

                    function n() {
                        r._pendingIcons -= 1, 0 === r._pendingIcons && r._source.model().updateSource(r._source)
                    }
                    this._clockWhite = null, this._successIcon = null, this._failureIcon = null, l("prediction-clock-white", i(999620)).then((function(e) {
                        r._clockWhite = e, n()
                    })), l("prediction-success-white", i(614012)).then((function(e) {
                        r._successIcon = e, n()
                    })), l("prediction-failure-white", i(888249)).then((function(e) {
                        r._failureIcon = e, n()
                    })), this._percentageFormatter = new h, this._predictionRenderer = new S, this._renderer = null
                }
                iconsReady() {
                    return 0 === this._pendingIcons
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if ((super._updateImpl(), this._renderer = null, this._targetLine1 = "", this._targetLine2 = "", this._targetLine3 = "", this._targetLine4 = "", !(this._source.points().length < 2)) && this._source.priceScale()) {
                        var e = this._source.ownerSource().formatter(),
                            t = this._source.points()[1],
                            r = this._source.points()[0];
                        this._targetLine3 = b(e.format(t.price));
                        var n = t.price - r.price,
                            a = n / Math.abs(r.price) * 100;
                        this._targetLine1 = b(e.format(n) + " (" + this._percentageFormatter.format(a) + ")");
                        var l = this._model.timeScale().indexToUserTime(r.index),
                            d = this._model.timeScale().indexToUserTime(t.index);
                        r.time && t.time && (l = TradingView.isString(r.time) ? new Date(Date.parse(r.time)) : r.time, d = TradingView.isString(t.time) ? new Date(Date.parse(t.time)) : t.time);
                        var h = this._model.mainSeries().isDWM(),
                            f = s.parse(this._model.mainSeries().interval()),
                            v = f.isSeconds() || f.isTicks();
                        if (d && l) {
                            this._targetLine4 = (new c).format(d), h || (this._targetLine4 = this._targetLine4 + "  " + new u(v ? _ : p).format(d));
                            var x = (d.valueOf() - l.valueOf()) / 1e3;
                            this._targetLine2 = i(777754).t(null, {
                                context: "dates"
                            }, i(491481)) + " " + P((new g).format(x))
                        }
                        this._sourceLine1 = e.format(r.price), this._sourceLine2 = "";
                        var w = this._model.timeScale().indexToUserTime(r.index);
                        w && (this._sourceLine2 = (new c).format(w), h || (this._sourceLine2 = this._sourceLine2 + " " + new u(v ? _ : p).format(w))), this._direction = this._source.direction() === m.Direction.Up ? "up" : "down", this._finished = this._model.lineBeingCreated() !== this._source && this._model.lineBeingEdited() !== this._source && !this._model.sourcesBeingMoved().includes(this._source);
                        var R = {};
                        R.points = this._points, R.color = this._source.properties().linecolor.value(), R.linewidth = this._source.properties().linewidth.value(), R.targetLine1 = this._targetLine1, R.targetLine2 = this._targetLine2, R.targetLine3 = this._targetLine3, R.targetLine4 = this._targetLine4, R.status = this._source.properties().status.value(), R.transparency = this._source.properties().transparency.value(),
                            R.targetBackColor = this._source.properties().targetBackColor.value(), R.targetStrokeColor = this._source.properties().targetStrokeColor.value(), R.targetTextColor = this._source.properties().targetTextColor.value(), R.sourceBackColor = this._source.properties().sourceBackColor.value(), R.sourceStrokeColor = this._source.properties().sourceStrokeColor.value(), R.sourceTextColor = this._source.properties().sourceTextColor.value(), R.successBackground = this._source.properties().successBackground.value(), R.successTextColor = this._source.properties().successTextColor.value(), R.failureBackground = this._source.properties().failureBackground.value(), R.failureTextColor = this._source.properties().failureTextColor.value(), R.intermediateBackColor = this._source.properties().intermediateBackColor.value(), R.intermediateTextColor = this._source.properties().intermediateTextColor.value(), R.sourceLine1 = this._sourceLine1, R.sourceLine2 = this._sourceLine2, R.direction = this._direction, R.clockWhite = this._clockWhite, R.successIcon = this._successIcon, R.failureIcon = this._failureIcon, R.finished = this._finished, R.centersColor = this._model.backgroundCounterColor(), this._predictionRenderer.setData(R);
                        var y = new o;
                        y.append(this._predictionRenderer), this.addAnchors(y), this._renderer = y
                    }
                }
            }
        },
        248360: (e, t, i) => {
            "use strict";
            var r = i(86441),
                n = r.Point,
                s = r.box,
                a = i(934026).pointInBox,
                o = i(233330).LineSourcePaneView,
                l = i(583110).SelectionRenderer,
                d = i(858063).HitTestResult,
                h = i(28035).CompositeRenderer,
                c = i(114123),
                u = i(741341).calcTextHorizontalShift,
                p = i(768038).isRtl,
                _ = i(904244).MediaCoordinatesPaneRenderer,
                g = i(623331);
            class f extends _ {
                constructor(e, t) {
                    super(), this._data = null, this._measureCache = e, this._chartModel = t, this._points = null
                }
                setData(e) {
                    this._data = e, this._points = e.points
                }
                _drawImpl(e) {
                    if (null !== this._data && null !== this._points && 0 !== this._points.length) {
                        var t = e.context;
                        t.font = [this._data.fontWeight, this._data.fontSize + "px", this._data.fontFamily].join(" ");
                        var i = t.measureText(this._data.label);
                        i.height = this._data.fontSize;
                        var r = 10,
                            n = 5,
                            s = i.width + 2 * r,
                            a = i.height + 2 * n,
                            o = this._points[0].x - -9,
                            l = this._points[0].y - (a + 15);
                        t.textAlign = p() ? "right" : "left";
                        var d = u(t, i.width);
                        this._measureCache && Object.assign(this._measureCache, {
                            innerWidth: s,
                            innerHeight: a,
                            tailLeft: -9,
                            tailHeight: 15
                        }), t.translate(.5 + o, .5 + l), t.beginPath(), t.moveTo(12, a), t.lineTo(-9, a + 15), t.lineTo(-10, a + 15 - 1), t.lineTo(5, a), t.lineTo(3, a), t.arcTo(0, a, 0, 0, 3), t.lineTo(0, 3), t.arcTo(0, 0, s, 0, 3), t.lineTo(s - 3, 0), t.arcTo(s, 0, s, a, 3), t.lineTo(s, a - 3), t.arcTo(s, a, 0, a, 3), t.lineTo(12, a), t.fillStyle = c.generateColor(this._data.backgroundColor, this._data.transparency), t.fill(), t.strokeStyle = this._data.borderColor, t.lineWidth = 2, t.stroke(), t.closePath(), t.textBaseline = "alphabetic", t.fillStyle = this._data.color, t.fillText(this._data.label, r + d, a / 2 + Math.floor(.35 * this._data.fontSize)), t.translate(-.5, -.5), t.beginPath(), t.arc(-9, a + 15, 2.5, 0, 2 * Math.PI, !1), t.fillStyle = c.generateColor(this._data.borderColor, this._data.transparency), t.fill(), t.strokeStyle = this._chartModel.backgroundColor().value(), t.lineWidth = 1, t.stroke(), t.closePath()
                    }
                }
                hitTest(e) {
                    if (null === this._data || null === this._points || 0 === this._points.length) return null;
                    var t = this._points[0].x - this._measureCache.tailLeft,
                        i = this._points[0].y - (this._measureCache.innerHeight + this._measureCache.tailHeight),
                        r = s(new n(t, i), new n(t + this._measureCache.innerWidth, i + this._measureCache.innerHeight));
                    return a(e, r) ? new d(d.MOVEPOINT) : null
                }
            }
            t.PriceLabelPaneView = class extends o {
                constructor(e, t, i) {
                    super(e, t), this._rendererCache = {}, this._priceLabelRenderer = new f(this._rendererCache, t), this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._source.points().length > 0) {
                        var e = this._source.points()[0].price,
                            t = this._source.priceScale();
                        if (!t || t.isEmpty()) return;
                        var i = this._source.ownerSource().firstValue();
                        this._priceLabel = t.formatPrice(e, i)
                    }
                    var r = {};
                    if (r.points = this._points, r.borderColor = this._source.properties().borderColor.value(), r.backgroundColor = this._source.properties().backgroundColor.value(), r.color = this._source.properties().color.value(), r.fontWeight = this._source.properties().fontWeight.value(), r.fontSize = this._source.properties().fontsize.value(), r.fontFamily = g.CHART_FONT_FAMILY, r.transparency = this._source.properties().transparency.value(), r.label = this._priceLabel, this._priceLabelRenderer.setData(r), 1 === r.points.length) {
                        var n = new h;
                        return n.append(this._priceLabelRenderer), n.append(new l({
                            points: r.points,
                            bgColors: this._lineAnchorColors(r.points),
                            visible: this.areAnchorsVisible()
                        })), void(this._renderer = n)
                    }
                    this._renderer = this._priceLabelRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        982756: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PriceNotePaneView: () => x
            });
            var r = i(650151),
                n = i(86441),
                s = i(314967),
                a = i(28035),
                o = i(544445),
                l = i(233330),
                d = i(204652),
                h = i(631586),
                c = i(741341),
                u = i(623331),
                p = i(545613),
                _ = i(858063),
                g = i(914679),
                f = i(837291);

            function m(e) {
                let t, i;
                return e >= -135 && e <= -45 ? (t = "center", i = "bottom") : e > -45 && e < 45 ? (t = "left", i = "middle") : e >= 45 && e <= 135 ? (t = "center", i = "top") : (t = "right", i = "middle"), {
                    horzAlign: t,
                    vertAlign: i
                }
            }
            class v {
                constructor() {
                    this._data = null, this._priceLabelRenderer = new o.TextRenderer(void 0, new _.HitTestResult(_.HitTestResult.MOVEPOINT, {
                        areaName: _.AreaName.Style,
                        activeItem: 1
                    })), this._hittest = new _.HitTestResult(_.HitTestResult.MOVEPOINT, {
                        areaName: _.AreaName.Style
                    })
                }
                setData(e) {
                    this._data = e;
                    const t = e.points[0],
                        i = e.points[1],
                        r = Math.round(180 * Math.atan2(i.y - t.y, i.x - t.x) / Math.PI);
                    this._priceLabelRenderer.setData({ ...m(r),
                        points: [i],
                        text: e.text,
                        color: e.textColor,
                        font: u.CHART_FONT_FAMILY,
                        fontSize: e.fontSize,
                        bold: e.bold,
                        italic: e.italic,
                        offsetX: 0,
                        offsetY: 0,
                        borderColor: e.borderColor,
                        borderWidth: 1,
                        backgroundColor: e.backgroundColor,
                        backgroundRoundRect: 4,
                        boxPaddingVert: 6,
                        boxPaddingHorz: 8
                    })
                }
                setHitTest(e) {
                    this._hittest = e
                }
                draw(e, t) {
                    const i = this._data;
                    if (null === i || i.points.length < 2) return;
                    e.save();
                    const r = t.pixelRatio,
                        n = Math.round(i.points[0].x * r),
                        s = Math.round(i.points[0].y * r),
                        a = Math.round(i.points[1].x * r),
                        o = Math.round(i.points[1].y * r);
                    e.lineCap = "round", (0, g.setLineStyle)(e, h.LINESTYLE_SOLID), e.strokeStyle = i.lineColor, e.fillStyle = i.lineColor, e.lineWidth = Math.round(1 * r);
                    const l = (0, f.fillScaledRadius)(2, r);
                    (0, g.createCircle)(e, n, s, l), e.fill(), void 0 !== i.excludeBoundaries && (e.save(), (0, c.addExclusionArea)(e, t, i.excludeBoundaries)), (0, g.drawLine)(e, n, s, a, o), void 0 !== i.excludeBoundaries && e.restore(), this._priceLabelRenderer.draw(e, t);
                    const d = 1 * r;
                    e.strokeStyle = i.circleBorderColor, e.lineWidth = d;
                    const u = l + d / 2;
                    (0, g.createCircle)(e, n, s, u), e.stroke(), e.restore()
                }
                hitTest(e) {
                    const t = this._data;
                    if (null === t) return null;
                    const i = (0, p.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3;
                    return (0, d.distanceToSegment)(t.points[0], t.points[1], e).distance <= i ? this._hittest : this._priceLabelRenderer.hitTest(e)
                }
            }
            class x extends l.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._renderer = new a.CompositeRenderer, this._priceNoteRenderer = new v, this._customLabelRenderer = new o.TextRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    super._updateImpl(), this._renderer.clear();
                    const a = this._source.priceScale();
                    if (!a || a.isEmpty()) return;
                    const l = this._points;
                    if (l.length < 2) return;
                    const d = (0, r.ensureNotNull)(this._source.ownerSource()).firstValue();
                    if (null === d) return;
                    const h = this._source.properties().childs(),
                        c = this._model.isDark() ? s.colorsPalette["color-cold-gray-900"] : s.colorsPalette["color-white"],
                        p = this._source.points()[0].price,
                        _ = {
                            text: a.formatPrice(p, d),
                            points: l,
                            lineColor: h.lineColor.value(),
                            circleBorderColor: c,
                            backgroundColor: h.priceLabelBackgroundColor.value(),
                            borderColor: h.priceLabelBorderColor.value(),
                            textColor: h.priceLabelTextColor.value(),
                            fontSize: h.priceLabelFontSize.value(),
                            bold: h.priceLabelBold.value(),
                            italic: h.priceLabelItalic.value()
                        };
                    if (h.showLabel && h.showLabel.value()) {
                        const r = l[0],
                            s = l[1],
                            a = r.x < s.x ? r : s,
                            d = a === r ? s : r,
                            c = h.vertLabelsAlign.value(),
                            p = h.horzLabelsAlign.value();
                        let g;
                        g = "left" === p ? a.clone() : "right" === p ? d.clone() : new n.Point((r.x + s.x) / 2, (r.y + s.y) / 2);
                        const f = Math.atan((d.y - a.y) / (d.x - a.x)),
                            m = {
                                points: [g],
                                text: h.text.value(),
                                color: h.textColor.value(),
                                vertAlign: c,
                                horzAlign: p,
                                font: u.CHART_FONT_FAMILY,
                                offsetX: 0,
                                offsetY: 0,
                                bold: h.bold.value(),
                                italic: h.italic.value(),
                                fontsize: h.fontSize.value(),
                                forceTextAlign: !0,
                                angle: f
                            };
                        this._customLabelRenderer.setData(m), this._renderer.append(this._customLabelRenderer), "middle" === c && (_.excludeBoundaries = null !== (i = (0, o.getTextBoundaries)(this._customLabelRenderer, t, e)) && void 0 !== i ? i : void 0)
                    }
                    this._renderer.append(this._priceNoteRenderer), this._priceNoteRenderer.setData(_), this._renderer.append(this.createLineAnchor({
                        points: l
                    }, 0))
                }
            }
        },
        643746: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                PriceRangePaneView: () => m
            });
            var r = i(650151),
                n = i(86441),
                s = i(768038),
                a = i(544445),
                o = i(603823),
                l = i(296266),
                d = i(28035),
                h = i(561068),
                c = i(631586),
                u = i(739665),
                p = i(583811),
                _ = i(623331),
                g = i(618580);
            const f = new h.PercentageFormatter;
            class m extends g.DateAndPriceRangeBasePaneView {
                constructor() {
                    super(...arguments), this._topBorderRenderer = new l.TrendLineRenderer, this._bottomBorderRenderer = new l.TrendLineRenderer, this._distanceRenderer = new l.TrendLineRenderer, this._backgroundRenderer = new o.RectangleRenderer, this._labelRenderer = new a.TextRenderer,
                        this._renderer = new d.CompositeRenderer, this._pipFormatter = null, this._lastSymbolInfo = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2 || this._source.points().length < 2) return;
                    const o = this._source.properties().childs(),
                        l = o.extendLeft.value(),
                        d = o.extendRight.value(),
                        [h, g] = this._points,
                        m = Math.min(h.x, g.x),
                        v = Math.max(h.x, g.x);
                    o.fillBackground.value() && (this._backgroundRenderer.setData({
                        points: [new n.Point(m, h.y), new n.Point(v, g.y)],
                        color: "white",
                        linewidth: 0,
                        backcolor: o.backgroundColor.value(),
                        fillBackground: !0,
                        transparency: o.backgroundTransparency.value(),
                        extendLeft: l,
                        extendRight: d
                    }), this._renderer.append(this._backgroundRenderer));
                    const x = (e, t, i) => {
                        e.setData({
                            points: [t, i],
                            color: o.linecolor.value(),
                            linewidth: o.linewidth.value(),
                            linestyle: c.LINESTYLE_SOLID,
                            extendleft: l,
                            extendright: d,
                            leftend: u.LineEnd.Normal,
                            rightend: u.LineEnd.Normal
                        }), this._renderer.append(e)
                    };
                    let w = m,
                        R = v;
                    w === R && (l && (w -= 1), d && (R += 1)), x(this._topBorderRenderer, new n.Point(w, h.y), new n.Point(R, h.y)), x(this._bottomBorderRenderer, new n.Point(w, g.y), new n.Point(R, g.y));
                    const y = Math.round((h.x + g.x) / 2),
                        T = new n.Point(y, h.y),
                        b = new n.Point(y, g.y),
                        P = this._updateCustomTextRenderer(e, t);
                    this._distanceRenderer.setData({
                        points: [T, b],
                        color: o.linecolor.value(),
                        linewidth: o.linewidth.value(),
                        linestyle: c.LINESTYLE_SOLID,
                        extendleft: !1,
                        extendright: !1,
                        leftend: u.LineEnd.Normal,
                        rightend: Math.abs(T.y - b.y) >= 15 * o.linewidth.value() ? u.LineEnd.Arrow : u.LineEnd.Normal,
                        excludeBoundaries: null != P ? P : void 0
                    }), this._renderer.append(this._distanceRenderer);
                    const L = this._source.points()[0].price,
                        S = this._source.points()[1].price,
                        C = S - L,
                        M = 100 * C / Math.abs(L),
                        I = this._model.mainSeries().symbolInfo();
                    I && I !== this._lastSymbolInfo && (this._pipFormatter = new p.PipFormatter(I.pricescale, I.minmov, I.type, I.minmove2, I.typespecs), this._lastSymbolInfo = I);
                    const N = (0, s.forceLTRStr)((0, r.ensureNotNull)(this._source.ownerSource()).formatter().format(C) + " (" + f.format(M) + ") " + (this._pipFormatter ? this._pipFormatter.format(C) : ""));
                    let k;
                    k = S > L ? new n.Point(.5 * (h.x + g.x), g.y - 2 * o.fontsize.value()) : new n.Point(.5 * (h.x + g.x), g.y + .7 * o.fontsize.value());
                    const A = {
                            x: 0,
                            y: 10
                        },
                        D = o.fontsize.value(),
                        E = {
                            points: [k],
                            text: N,
                            color: o.textcolor.value(),
                            font: _.CHART_FONT_FAMILY,
                            offsetX: A.x,
                            offsetY: A.y,
                            padding: 8,
                            vertAlign: "middle",
                            horzAlign: "center",
                            fontsize: D,
                            backgroundRoundRect: 4,
                            backgroundHorzInflate: .4 * D,
                            backgroundVertInflate: .2 * D
                        };
                    (null === (i = o.fillLabelBackground) || void 0 === i ? void 0 : i.value()) && (E.boxShadow = {
                        shadowColor: o.shadow.value(),
                        shadowBlur: 4,
                        shadowOffsetY: 1
                    }, E.backgroundColor = o.labelBackgroundColor.value()), this._labelRenderer.setData(E);
                    const B = this._labelRenderer.measure(),
                        z = (0, a.calculateLabelPosition)(B, h, g, A, e);
                    this._labelRenderer.setPoints([z]), this._renderer.append(this._labelRenderer), this._renderer.append(this._customTextrenderer), this.addAnchors(this._renderer)
                }
                _needLabelExclusionPath(e) {
                    return e.getLinesInfo().lines.length > 0
                }
            }
        },
        976154: (e, t, i) => {
            "use strict";
            var r = i(737019).ArcWedgeRenderer,
                n = i(42242).FibWedgePaneView,
                s = i(296266).TrendLineRenderer,
                a = i(28035).CompositeRenderer,
                o = i(739665).LineEnd;
            t.ProjectionLinePaneView = class extends n {
                constructor(e, t) {
                    super(e, t), this._baseTrendRenderer = new s, this._edgeTrendRenderer = new s, this._arcWedgeRenderer = new r
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateRenderer() {
                    if (!(this._points.length < 2)) {
                        var e = new a,
                            t = this._source.properties(),
                            i = this._points,
                            r = i[0],
                            n = i[1],
                            s = {
                                points: [r, n],
                                width: this._model.timeScale().width(),
                                height: this._source.priceScale().height(),
                                color: t.trendline.color.value(),
                                linewidth: t.linewidth.value(),
                                linestyle: t.trendline.linestyle.value(),
                                extendleft: !1,
                                extendright: !1,
                                leftend: o.Normal,
                                rightend: o.Normal
                            };
                        if (this._baseTrendRenderer.setData(s), e.append(this._baseTrendRenderer), this._points.length < 3) return this.addAnchors(e), void(this._renderer = e);
                        var l = i[2],
                            d = l.data,
                            h = n.subtract(r).length(),
                            c = l.subtract(r).normalized();
                        (l = r.add(c.scaled(h))).data = d, s = {
                            points: [r, l],
                            width: this._model.timeScale().width(),
                            height: this._source.priceScale().height(),
                            color: t.trendline.color.value(),
                            linewidth: t.linewidth.value(),
                            linestyle: t.trendline.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: o.Normal,
                            rightend: o.Normal
                        }, this._edgeTrendRenderer.setData(s), e.append(this._edgeTrendRenderer);
                        var u = this._levels[0],
                            p = {};
                        p.center = this._points[0], p.radius = u.radius, p.prevRadius = 0, p.edge = this._edge, p.color = t.trendline.color.value(), p.color1 = t.color1.value(), p.color2 = t.color2.value(), p.linewidth = t.linewidth.value(), p.edge1 = this._edge1, p.edge2 = this._edge2, p.p1 = u.p1, p.p2 = u.p2, p.fillBackground = t.fillBackground.value(), p.transparency = t.transparency.value(), p.gradient = !0, this._arcWedgeRenderer.setData(p), e.append(this._arcWedgeRenderer), this.addAnchors(e), this._renderer = e
                    }
                }
            }
        },
        699459: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                RectanglePaneView: () => h
            });
            var r = i(86441),
                n = i(623331),
                s = i(603823),
                a = i(28035),
                o = i(544445),
                l = i(233330),
                d = i(854905);
            class h extends l.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._rectangleRenderer = new s.RectangleRenderer, this._textRenderer = new o.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const e = this._getSource().properties().childs(),
                        t = {
                            points: this._points,
                            color: e.color.value(),
                            linewidth: e.linewidth.value(),
                            backcolor: e.backgroundColor.value(),
                            fillBackground: e.fillBackground.value(),
                            transparency: e.transparency.value(),
                            extendLeft: e.extendLeft.value(),
                            extendRight: e.extendRight.value(),
                            includeRightEdge: !0
                        };
                    this._rectangleRenderer.setData(t);
                    const i = new a.CompositeRenderer;
                    i.append(this._rectangleRenderer);
                    const s = this._points[0],
                        o = this._points[1];
                    if (e.showLabel.value()) {
                        const t = Math.min(s.x, o.x),
                            a = Math.max(s.x, o.x),
                            l = Math.min(s.y, o.y),
                            d = Math.max(s.y, o.y);
                        let h, c, u, p;
                        const _ = e.fontSize.value() / 3;
                        let g, f, m = 0;
                        switch (e.vertLabelsAlign.value()) {
                            case "middle":
                                p = (l + d) / 2, c = "middle", m = _;
                                break;
                            case "top":
                                p = d, c = "top";
                                break;
                            case "bottom":
                                p = l, c = "bottom"
                        }
                        switch (e.horzLabelsAlign.value()) {
                            case "center":
                                u = (t + a) / 2, h = "center";
                                break;
                            case "left":
                                u = t, h = "left";
                                break;
                            case "right":
                                u = a, h = "right"
                        }
                        "middle" === c && (g = a - t - 2 * m, f = d - l);
                        const v = {
                            points: [new r.Point(u, p)],
                            text: e.text.value(),
                            fontSize: e.fontSize.value(),
                            font: n.CHART_FONT_FAMILY,
                            bold: e.bold.value(),
                            italic: e.italic.value(),
                            horzAlign: h,
                            vertAlign: c,
                            color: e.textColor.value(),
                            wordWrapWidth: g,
                            maxHeight: f,
                            offsetX: 0,
                            offsetY: 0,
                            boxPaddingVert: _,
                            boxPaddingHorz: m,
                            forceTextAlign: !0
                        };
                        this._textRenderer.setData(v), i.append(this._textRenderer)
                    }
                    this._addAnchors(s, o, i), this._renderer = i
                }
                _addAnchors(e, t, i) {
                    const n = new r.Point(e.x, t.y);
                    n.data = 2;
                    const s = new r.Point(t.x, e.y);
                    s.data = 3;
                    const a = new r.Point(e.x, .5 * (e.y + t.y));
                    a.data = 4;
                    const o = new r.Point(t.x, .5 * (e.y + t.y));
                    o.data = 5;
                    const l = new r.Point(.5 * (e.x + t.x), e.y);
                    l.data = 6;
                    const h = new r.Point(.5 * (e.x + t.x), t.y);
                    h.data = 7, [a, o, l, h].forEach((e => e.square = !0));
                    const c = e.x - t.x,
                        u = e.y - t.y,
                        p = Math.sign(c * u),
                        _ = [p < 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p < 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p > 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, p > 0 ? d.PaneCursorType.DiagonalNeSwResize : d.PaneCursorType.DiagonalNwSeResize, d.PaneCursorType.HorizontalResize, d.PaneCursorType.HorizontalResize, d.PaneCursorType.VerticalResize, d.PaneCursorType.VerticalResize];
                    i.append(this.createLineAnchor({
                        points: [e, t, n, s, a, o, l, h],
                        pointsCursorType: _
                    }, 0))
                }
            }
        },
        955345: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                RegressionTrendPaneView: () => p
            });
            var r = i(650151),
                n = i(114123),
                s = i(858063),
                a = i(28035),
                o = i(478037),
                l = i(544445),
                d = i(296266),
                h = i(583110),
                c = i(865556),
                u = i(233330);
            class p extends u.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._data = null, this._pearsonsLabelRenderer = new l.TextRenderer, this._renderer = null, this._renderer = null
                }
                renderer() {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._data = (0, c.prepareLinearRegressionRenderersData)(this._model, this._source), this._renderer = null;
                    const e = new a.CompositeRenderer;
                    let t = [];
                    const i = [this._data.lines[1], this._data.lines[0], this._data.lines[2]].filter((e => !!e)),
                        r = this._source.properties().childs().styles.childs().transparency.value();
                    for (let t = 1; t < i.length; t++) {
                        const n = {
                                points: [i[t].points[0], i[t].points[1], i[t - 1].points[0], i[t - 1].points[1]],
                                color: i[t].color,
                                linewidth: i[t].linewidth,
                                linestyle: i[t].linestyle,
                                extendleft: !1,
                                extendright: i[t].extendright,
                                backcolor: i[t].color,
                                transparency: r,
                                skipLines: !0,
                                fillBackground: !0,
                                showMidline: !1
                            },
                            a = new o.ParallelChannelRenderer(new s.HitTestResult(s.HitTestResult.REGULAR));
                        a.setData(n), e.append(a)
                    }
                    const l = this._getTransparencyResetLines();
                    for (let r = 0; r < i.length; r++) {
                        const n = new d.TrendLineRenderer;
                        n.setData(l[r]), n.setHitTest(new s.HitTestResult(s.HitTestResult.REGULAR)), e.append(n), 0 !== r && (t = t.concat(i[r].points))
                    }
                    this._data.pearsons && (this._data.pearsons.color = (0, n.resetTransparency)(this._data.pearsons.color), this._pearsonsLabelRenderer.setData(this._data.pearsons), e.append(this._pearsonsLabelRenderer)),
                        this._data.lines.length >= 1 && e.append(new h.SelectionRenderer({
                            points: t,
                            bgColors: this._lineAnchorColors(t),
                            visible: this.areAnchorsVisible(),
                            hittestResult: s.HitTestResult.REGULAR,
                            barSpacing: this._model.timeScale().barSpacing()
                        })), this._renderer = e
                }
                _getTransparencyResetLines() {
                    return (0, r.ensureNotNull)(this._data).lines.map((e => ({ ...e,
                        color: (0, n.resetTransparency)(e.color)
                    })))
                }
            }
        },
        680349: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                RiskRewardPaneView: () => N
            });
            var r = i(86441),
                n = i(650151),
                s = i(777754),
                a = i(233330),
                o = i(296266),
                l = i(544445),
                d = i(603823),
                h = i(858063),
                c = i(28035),
                u = i(561068),
                p = i(951512),
                _ = i(583811),
                g = i(114123),
                f = i(739665),
                m = i(522943),
                v = i(768038),
                x = i(854905),
                w = i(720444),
                R = i(623331),
                y = i(631586);
            const T = [x.PaneCursorType.Default, x.PaneCursorType.HorizontalResize, x.PaneCursorType.VerticalResize, x.PaneCursorType.VerticalResize],
                b = s.t(null, void 0, i(72892)),
                P = s.t(null, {
                    context: "line_tool_position"
                }, i(550140)),
                L = s.t(null, {
                    context: "line_tool_position"
                }, i(144143)),
                S = s.t(null, void 0, i(353115)),
                C = s.t(null, void 0, i(600438)),
                M = s.t(null, void 0, i(515166)),
                I = s.t(null, void 0, i(687061));
            class N extends a.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._percentageFormatter = new u.PercentageFormatter, this._numericFormatter = new p.NumericFormatter, this._pipFormatter = null, this._lastSymbolInfo = null, this._entryLineRenderer = new o.TrendLineRenderer, this._stopLineRenderer = new o.TrendLineRenderer, this._targetLineRenderer = new o.TrendLineRenderer, this._positionLineRenderer = new o.TrendLineRenderer, this._fullStopBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT), new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._stopBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT), new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._fullTargetBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT), new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._targetBgRenderer = new d.RectangleRenderer(new h.HitTestResult(h.HitTestResult.MOVEPOINT), new h.HitTestResult(h.HitTestResult.MOVEPOINT)), this._stopLabelRenderer = new l.TextRenderer, this._middleLabelRenderer = new l.TextRenderer, this._profitLabelRenderer = new l.TextRenderer, this._renderer = new c.CompositeRenderer
                }
                isLabelVisible() {
                    return this.isHoveredSource() || this.isSelectedSource() || this._source.properties().childs().alwaysShowStats.value()
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    super._updateImpl(e, t), this._renderer.clear();
                    const i = this._model.timeScale(),
                        s = this._source.priceScale();
                    if (!s || s.isEmpty() || i.isEmpty()) return;
                    const a = this._source.points();
                    if (a.length < 2 || this._points.length < 2) return;
                    const o = (0, n.ensureNotNull)(this._source.ownerSource()),
                        l = null == o ? void 0 : o.barsProvider().bars();
                    if (!l || l.isEmpty()) return;
                    if (null === l.last()) return;
                    const d = 4 === a.length,
                        h = this._source.lastBarData();
                    if (!h) return;
                    const c = this._source.stopPrice(),
                        u = this._source.profitPrice(),
                        p = this._source.calculatePL(h.closePrice),
                        g = o.symbolSource().symbolInfo();
                    if (!g) return;
                    const f = o.firstValue();
                    if (null === f) return;
                    const v = this._points[m.RiskRewardPointIndex.Entry].y,
                        x = s.priceToCoordinate(c, f),
                        w = s.priceToCoordinate(u, f),
                        R = s.priceToCoordinate(h.closePrice, f),
                        y = i.indexToCoordinate(h.index),
                        b = this._points[m.RiskRewardPointIndex.Entry].x,
                        P = this._points[m.RiskRewardPointIndex.ActualEntry] ? this._points[m.RiskRewardPointIndex.ActualEntry].x : this._points[m.RiskRewardPointIndex.Close].x,
                        L = this._points[m.RiskRewardPointIndex.ActualClose] ? this._points[m.RiskRewardPointIndex.ActualClose].x : this._points[m.RiskRewardPointIndex.Close].x,
                        S = this._points[m.RiskRewardPointIndex.Close].x,
                        C = this._source.entryPrice(),
                        M = this._source.stopPrice(),
                        I = this._source.profitPrice(),
                        N = {
                            pl: p,
                            isClosed: d,
                            entryLevel: v,
                            stopLevel: x,
                            profitLevel: w,
                            closeLevel: R,
                            closeBar: y,
                            left: b,
                            entryX: P,
                            right: L,
                            edge: S,
                            entryPrice: C,
                            stopPrice: M,
                            profitPrice: I
                        };
                    let k = S < -5 || b > t + 5;
                    if (this._createBackgroundRenderers(N, this._renderer), this._createLinesRenderers(N, this._renderer), this._createLabelsRenderers(N, this._renderer, g), g !== this._lastSymbolInfo && (this._pipFormatter = new _.PipFormatter(g.pricescale, g.minmov, g.type, g.minmove2, g.typespecs), this._lastSymbolInfo = g), k = [this._profitLabelRenderer, this._stopLabelRenderer, this._middleLabelRenderer].reduce(((i, r) => i && r.isOutOfScreen(t, e)), k), k) return;
                    const A = this._points[0].clone();
                    A.data = 0, A.snappingPrice = C;
                    const D = new r.Point(b, x);
                    D.data = 2, D.square = !0, D.snappingPrice = M;
                    const E = new r.Point(b, w);
                    E.data = 3, E.square = !0, E.snappingPrice = I;
                    const B = new r.Point(S, A.y);
                    B.data = 1, B.square = !0, B.snappingIndex = h.index;
                    const z = {
                        points: [A, B, D, E],
                        pointsCursorType: T
                    };
                    this._renderer.append(this.createLineAnchor(z, 0))
                }
                _createBackgroundRenderers(e, t) {
                    const i = this._source.properties().childs(); {
                        const t = {
                            points: [new r.Point(e.left, e.entryLevel), new r.Point(e.edge, e.stopLevel)],
                            color: "white",
                            linewidth: 0,
                            backcolor: i.stopBackground.value(),
                            fillBackground: !0,
                            transparency: i.stopBackgroundTransparency.value(),
                            extendLeft: !1,
                            extendRight: !1
                        };
                        this._fullStopBgRenderer.setData(t), this._renderer.append(this._fullStopBgRenderer)
                    }
                    if (e.pl < 0 && e.entryX !== e.right) {
                        const t = new r.Point(e.entryX, e.entryLevel),
                            n = new r.Point(e.right, e.closeLevel),
                            s = .01 * i.stopBackgroundTransparency.value(),
                            a = 100 - 100 * (1 - s * s * s),
                            o = {
                                points: [t, n],
                                color: "white",
                                linewidth: 0,
                                backcolor: i.stopBackground.value(),
                                fillBackground: !0,
                                transparency: a,
                                extendLeft: !1,
                                extendRight: !1
                            };
                        this._stopBgRenderer.setData(o), this._renderer.append(this._stopBgRenderer)
                    } {
                        const t = {
                            points: [new r.Point(e.left, e.entryLevel), new r.Point(e.edge, e.profitLevel)],
                            color: "white",
                            linewidth: 0,
                            backcolor: i.profitBackground.value(),
                            fillBackground: !0,
                            transparency: i.profitBackgroundTransparency.value(),
                            extendLeft: !1,
                            extendRight: !1
                        };
                        this._fullTargetBgRenderer.setData(t), this._renderer.append(this._fullTargetBgRenderer)
                    }
                    if (e.pl > 0 && e.entryX !== e.right) {
                        const t = new r.Point(e.entryX, e.entryLevel),
                            n = new r.Point(e.right, e.closeLevel),
                            s = .01 * i.profitBackgroundTransparency.value(),
                            a = 100 - 100 * (1 - s * s * s),
                            o = {
                                points: [t, n],
                                color: "white",
                                linewidth: 0,
                                backcolor: i.profitBackground.value(),
                                fillBackground: !0,
                                transparency: a,
                                extendLeft: !1,
                                extendRight: !1
                            };
                        this._targetBgRenderer.setData(o), this._renderer.append(this._targetBgRenderer)
                    }
                }
                _createLinesRenderers(e, t) {
                    const i = this._source.properties().childs(),
                        n = (e, t, r, n) => {
                            const s = {
                                points: [t, r],
                                color: null != n ? n : i.linecolor.value(),
                                linewidth: i.linewidth.value(),
                                linestyle: y.LINESTYLE_SOLID,
                                extendleft: !1,
                                extendright: !1,
                                leftend: f.LineEnd.Normal,
                                rightend: f.LineEnd.Normal
                            };
                            e.setData(s), this._renderer.append(e)
                        };
                    if (this._points[m.RiskRewardPointIndex.ActualEntry]) {
                        const t = {
                            points: [this._points[m.RiskRewardPointIndex.ActualEntry], e.isClosed ? this._points[m.RiskRewardPointIndex.ActualClose] : new r.Point(e.closeBar, e.closeLevel)],
                            color: this._source.properties().childs().linecolor.value(),
                            linewidth: 1,
                            linestyle: y.LINESTYLE_DASHED,
                            extendleft: !1,
                            extendright: !1,
                            leftend: f.LineEnd.Normal,
                            rightend: f.LineEnd.Arrow
                        };
                        this._positionLineRenderer.setData(t), this._renderer.append(this._positionLineRenderer)
                    } {
                        const t = new r.Point(e.left, this._points[m.RiskRewardPointIndex.Entry].y),
                            i = new r.Point(e.edge, this._points[m.RiskRewardPointIndex.Entry].y);
                        n(this._entryLineRenderer, t, i)
                    } {
                        const t = new r.Point(e.left, e.stopLevel),
                            s = new r.Point(e.edge, e.stopLevel);
                        n(this._stopLineRenderer, t, s, i.stopBackground.value())
                    } {
                        const t = new r.Point(e.left, e.profitLevel),
                            s = new r.Point(e.edge, e.profitLevel);
                        n(this._targetLineRenderer, t, s, i.profitBackground.value())
                    }
                }
                _addCenterLabel(e, t, i) {
                    const r = this._source.properties().childs(),
                        n = {
                            font: R.CHART_FONT_FAMILY,
                            offsetX: 3,
                            horzAlign: "center",
                            backgroundRoundRect: 4,
                            backgroundHorzInflate: 4,
                            points: [i.p],
                            text: i.txt,
                            color: r.textcolor.value(),
                            offsetY: i.offsetY,
                            vertAlign: i.vertAlign,
                            backgroundColor: (0, g.resetTransparency)(i.color),
                            fontsize: r.fontsize.value(),
                            borderColor: i.border
                        };
                    return t.setData(n), e.append(t), n
                }
                _creareMiddleLabel(e, t, i) {
                    const s = Math.abs(e.entryPrice - e.profitPrice) / Math.abs(e.entryPrice - e.stopPrice),
                        a = this._source.properties().childs(),
                        o = (0, n.ensureNotNull)(this._source.ownerSource()),
                        l = new r.Point((e.left + e.edge) / 2, Math.round(this._points[0].y));
                    let d = "",
                        h = "";
                    const c = this._numericFormatter.format(Math.round(100 * s) / 100);
                    this._points[1] && (h = o.formatter().format(e.pl));
                    const u = a.qty.value() / a.lotSize.value(),
                        p = "futures" === i.type || (0, w.isCryptoSymbol)(i) ? Math.round(1e3 * u) / 1e3 : Math.floor(u);
                    if (a.compact.value()) d += h ? h + " ~ " : "", d += p + "\n", d += c;
                    else {
                        const t = e.isClosed ? L : P;
                        d += h ? b.format({
                            status: t,
                            pnl: h
                        }) + ", " : "", d += I.format({
                            qty: "" + p
                        }) + "\n", d += S.format({
                            ratio: c
                        }) + " "
                    }
                    let _ = a.linecolor.value();
                    return e.pl < 0 ? _ = a.stopBackground.value() : e.pl > 0 && (_ = a.profitBackground.value()), this._addCenterLabel(t, this._middleLabelRenderer, {
                        p: l,
                        txt: d,
                        color: _,
                        vertAlign: "middle",
                        offsetY: 0,
                        border: "white"
                    })
                }
                _createStopLabel(e, t) {
                    const i = this._source.properties().childs(),
                        s = (0, n.ensureNotNull)(this._source.ownerSource()),
                        a = Math.abs(e.stopPrice - e.entryPrice),
                        o = Math.round(1e4 * a / e.entryPrice) / 100,
                        l = new r.Point((e.left + e.edge) / 2, e.stopLevel);
                    let d = "";
                    const h = s.formatter().format(a),
                        c = this._percentageFormatter.format(o);
                    return d = i.compact.value() ? h + " (" + c + ") " + i.amountStop.value() : C.format({
                        stopChange: (0, v.forceLTRStr)(s.formatter().format(a)),
                        stopChangePercent: (0, v.forceLTRStr)(this._percentageFormatter.format(o)),
                        stopChangePip: this._pipFormatter ? (0, v.forceLTRStr)(this._pipFormatter.format(a)) : "",
                        amount: (0, v.forceLTRStr)("" + i.amountStop.value())
                    }), this._addCenterLabel(t, this._stopLabelRenderer, {
                        p: l,
                        txt: d,
                        color: i.stopBackground.value(),
                        vertAlign: e.entryPrice < e.stopPrice ? "bottom" : "top",
                        offsetY: 0
                    })
                }
                _createTargetLabel(e, t) {
                    const i = this._source.properties().childs(),
                        s = (0, n.ensureNotNull)(this._source.ownerSource()),
                        a = Math.abs(e.profitPrice - e.entryPrice),
                        o = Math.round(1e4 * a / e.entryPrice) / 100,
                        l = new r.Point((e.left + e.edge) / 2, e.profitLevel);
                    let d = "";
                    const h = s.formatter().format(a),
                        c = this._percentageFormatter.format(o);
                    return d = i.compact.value() ? h + " (" + c + ") " + i.amountTarget.value() : M.format({
                        profitChange: (0, v.forceLTRStr)(s.formatter().format(a)),
                        profitChangePercent: (0, v.forceLTRStr)(this._percentageFormatter.format(o)),
                        profitChangePip: this._pipFormatter ? (0, v.forceLTRStr)(this._pipFormatter.format(a)) : "",
                        amount: (0, v.forceLTRStr)("" + i.amountTarget.value())
                    }), this._addCenterLabel(t, this._profitLabelRenderer, {
                        p: l,
                        txt: d,
                        color: i.profitBackground.value(),
                        vertAlign: e.entryPrice < e.stopPrice ? "top" : "bottom",
                        offsetY: 0
                    })
                }
                _createLabelsRenderers(e, t, i) {
                    var s;
                    if (!this.isLabelVisible()) return;
                    const a = this._creareMiddleLabel(e, t, i),
                        o = this._createStopLabel(e, t),
                        l = this._createTargetLabel(e, t),
                        d = [this._profitLabelRenderer, this._stopLabelRenderer, this._middleLabelRenderer].reduce(((e, t) => Math.max(e, t.measure().width)), 0),
                        h = e.edge - e.left,
                        c = this._anchorRadius();
                    if (h - d - c <= 8 && (l && (l.offsetY += c + 8, this._profitLabelRenderer.setData(l)), o && (o.offsetY += c + 8, this._stopLabelRenderer.setData(o)), a)) {
                        let t;
                        if (null === (s = this._source.priceScale()) || void 0 === s ? void 0 : s.isLog()) {
                            const i = Math.abs(this._points[0].y - e.stopLevel);
                            t = Math.abs(this._points[0].y - e.profitLevel) > i ? -1 : 1
                        } else {
                            const i = Math.abs(e.stopPrice - e.entryPrice);
                            t = Math.abs(e.profitPrice - e.entryPrice) > i ? -1 : 1
                        }
                        const i = e.profitLevel < e.stopLevel ? 1 : -1,
                            o = (0, n.ensureDefined)(a.points)[0].add(new r.Point(0, i * t * (.5 * this._middleLabelRenderer.measure().height + c + 8)));
                        a.points = [o], this._middleLabelRenderer.setData(a)
                    }
                }
            }
        },
        628284: (e, t, i) => {
            "use strict";
            var r = i(86441).Point,
                n = i(204652).distanceToLine,
                s = i(233330).LineSourcePaneView,
                a = i(233330).thirdPointCursorType,
                o = i(296266).TrendLineRenderer,
                l = i(530513).PolygonRenderer,
                d = i(28035).CompositeRenderer,
                h = i(739665).LineEnd,
                c = i(854905).PaneCursorType;
            const {
                LINESTYLE_SOLID: u
            } = i(631586);
            t.RotatedRectanglePaneView = class extends s {
                constructor(e, t) {
                    super(e, t), this._poligonRenderer = new l, this._renderer = null
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._distance = 0, 3 === this._points.length && (this._distance = n(this._points[0], this._points[1], this._points[2]).distance), 0 !== this._points.length) {
                        var e, t, i, s, l = new d,
                            p = this._source.properties(),
                            _ = this._points[0],
                            g = this._points[1];
                        if (2 === this._points.length) {
                            (m = {}).points = this._points, m.floatPoints = this._floatPoints, m.width = this._model.timeScale().width(), m.height = this._source.priceScale().height(), m.color = p.color.value(), m.linewidth = 1, m.linestyle = u, m.extendleft = !1,
                                m.extendright = !1, m.leftend = h.Normal, m.rightend = h.Normal;
                            var f = new o;
                            f.setData(m), l.append(f)
                        } else if (3 === this._points.length) {
                            var m, v = g.subtract(_),
                                x = new r(v.y, -v.x).normalized().scaled(this._distance),
                                w = x.scaled(-1);
                            e = _.add(x), t = g.add(x), i = _.add(w), s = g.add(w), (m = {}).points = [e, t, s, i], m.color = p.color.value(), m.linewidth = this._source.properties().linewidth.value(), m.linestyle = u, m.filled = !0, m.backcolor = p.backgroundColor.value(), m.fillBackground = p.fillBackground.value(), m.transparency = p.transparency.value(), this._poligonRenderer.setData(m), l.append(this._poligonRenderer)
                        }
                        var R = [];
                        R.push(_), this._points.length >= 2 && R.push(g);
                        var y = [c.Default, c.Default];
                        if (3 === this._points.length) {
                            e.data = 2, i.data = 2, t.data = 2, s.data = 2, R.push(e, i, t, s);
                            var T = a(_, g);
                            y.push(T, T, T, T)
                        }
                        l.append(this.createLineAnchor({
                            points: R,
                            pointsCursorType: y
                        }, 0)), this._renderer = l
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
            }
        },
        937349: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                SignpostPaneView: () => L
            });
            var r = i(86441),
                n = i(314967),
                s = i(28035),
                a = i(854905),
                o = i(858063),
                l = i(233330),
                d = i(796309),
                h = i(623331),
                c = i(204652),
                u = i(934026),
                p = i(650151),
                _ = i(545613),
                g = i(544445),
                f = i(837291);

            function m(e) {
                return void 0 === e ? 0 : e.poleTailHeight + 2 * e.circleRadius
            }

            function v(e) {
                return e.poleStartY
            }

            function x(e) {
                return e.inverseAnchorPosition ? e.anchorY : e.anchorY + (e.labelHeight + m(e.plate)) * e.direction
            }

            function w(e) {
                return e.inverseAnchorPosition ? e.anchorY + m(e.plate) * e.direction : e.anchorY + e.labelHeight * e.direction
            }
            class R {
                constructor(e, t) {
                    this._data = null, this._hitTestResult = e, this._phantomMode = Boolean(t)
                }
                setData(e) {
                    if (null === e) return void(this._data = null);
                    this._data = { ...e,
                        labelHeight: 0,
                        labelRenderer: new g.TextRenderer
                    };
                    const t = this._data,
                        i = t.label,
                        n = {
                            offsetX: 0,
                            offsetY: 0,
                            points: [new r.Point(t.x, t.anchorY)],
                            forceCalculateMaxLineWidth: !0,
                            vertAlign: -1 === i.labelDirection ? "bottom" : "top",
                            horzAlign: "center",
                            horzTextAlign: "center",
                            font: i.labelFont,
                            fontSize: i.labelFontSize,
                            bold: i.labelFontBold,
                            italic: i.labelFontItalic,
                            backgroundRoundRect: i.labelBorderRadius,
                            padding: i.labelPadding,
                            boxPaddingVert: i.labelBoxPaddingVert,
                            boxPaddingHorz: i.labelBoxPaddingHorz,
                            wordWrapWidth: i.labelWordWrapWidth,
                            color: i.labelColor,
                            borderColor: i.labelBorderColor,
                            borderWidth: 1,
                            backgroundColor: i.labelBackgroundColor,
                            text: i.text
                        };
                    if (t.labelRenderer.setData(n), this._data.labelHeight = this._data.labelRenderer.measure().height, t.inverseAnchorPosition) {
                        const e = (0, p.ensureDefined)(n.points);
                        n.points = [new r.Point(e[0].x, w(t))]
                    } else {
                        const e = 1 === t.direction ? Math.min(t.poleStartY - this._data.labelHeight, t.anchorY) : Math.max(t.poleStartY + this._data.labelHeight, t.anchorY);
                        t.anchorY !== e && (t.anchorY = e, n.points = [new r.Point(t.x, e)])
                    }
                    t.labelRenderer.setData(n)
                }
                itemAnchorY() {
                    return null === this._data ? null : this._data.anchorY
                }
                hitTest(e, t) {
                    if (null === this._data) return null;
                    const [i, n, s] = function(e, t) {
                        const i = (0, _.lastMouseOrTouchEventInfo)().isTouch ? 20 : 3,
                            n = e.x,
                            s = e.plate,
                            a = (0, c.distanceToSegment)(new r.Point(n, v(e)), new r.Point(n, x(e)), t).distance < i;
                        let o = !1;
                        if (!a && void 0 !== s) {
                            const a = e.inverseAnchorPosition ? e.anchorY + s.circleRadius * e.direction : e.anchorY + (e.labelHeight + s.poleTailHeight + s.circleRadius) * e.direction;
                            o = s.circleRadius > 0 && (0, u.pointInCircle)(t, new r.Point(n, a), s.circleRadius + i)
                        }
                        return [a, o, !a && !o && null !== e.labelRenderer.hitTest(t)]
                    }(this._data, e);
                    if (i || n || s) {
                        const e = {
                            hideCrosshairLinesOnHover: !0,
                            activeItem: i || n ? this._data.itemIndex : this._data.label.labelIndex
                        };
                        return s ? e.areaName = o.AreaName.Text : n && (e.areaName = o.AreaName.Style), new o.HitTestResult(this._hitTestResult, e)
                    }
                    return null
                }
                draw(e, t) {
                    if (null === this._data) return;
                    e.save(), this._phantomMode && (e.globalAlpha = .5);
                    const {
                        poleColor: i,
                        emojiRadius: r
                    } = this._data, n = t.pixelRatio, s = Math.max(1, Math.floor(n)), a = s % 2 ? .5 : 0;
                    e.beginPath(), e.strokeStyle = i, e.lineWidth = s;
                    const o = Math.round(this._data.x * n) + a;
                    e.moveTo(o, Math.round(v(this._data) * n)), e.lineTo(o, Math.round(x(this._data) * n)), void 0 !== this._data.plate && 0 !== this._data.plate.poleTailHeight && (e.moveTo(o, Math.round(w(this._data) * n)), e.lineTo(o, Math.round(function(e) {
                        var t, i;
                        const r = null !== (i = null === (t = e.plate) || void 0 === t ? void 0 : t.poleTailHeight) && void 0 !== i ? i : 0;
                        return e.inverseAnchorPosition ? w(e) - r * e.direction : w(e) + r * e.direction
                    }(this._data) * n))), e.stroke(), void 0 !== this._data.plate && function(e, t, i, r, n) {
                        const s = n.pixelRatio,
                            {
                                circleRadius: a,
                                poleTailHeight: o,
                                circleBorderColor: l,
                                circleBackgroundColor: d
                            } = i;
                        e.strokeStyle = l, e.fillStyle = d;
                        const h = (0, f.fillScaledRadius)(a, s),
                            c = Math.round(t.x * s),
                            u = t.inverseAnchorPosition ? Math.round(t.anchorY * s) + Math.round(a * s) * t.direction : Math.round(t.anchorY * s) + Math.round((t.labelHeight + o + a) * s) * t.direction,
                            p = Math.max(1, Math.floor(s)) % 2 / 2,
                            _ = c + p,
                            g = u + p;
                        if (e.shadowOffsetY = 1, e.shadowColor = i.shadowColor, e.shadowBlur = 4, e.beginPath(), e.arc(_, g, h, 0, 2 * Math.PI, !0), e.closePath(), e.fill(), e.shadowColor = "transparent", t.svgRenderer) {
                            const i = 2 * (0, f.fillScaledRadius)(r, s);
                            t.svgRenderer.render(e, {
                                targetViewBox: {
                                    x: _ - i / 2,
                                    y: g - i / 2,
                                    width: i,
                                    height: i
                                }
                            })
                        }
                        const m = Math.round(i.circleBorderWidth * s),
                            v = (0, f.strokeScaledRadius)(a, s, m);
                        if (e.lineWidth = m, e.beginPath(), e.arc(_, g, v, 0, 2 * Math.PI, !0), e.closePath(), e.stroke(), i.outsideBorderWidth) {
                            e.save();
                            const t = Math.round(i.outsideBorderWidth * s),
                                r = v + m / 2 + t / 2;
                            e.lineWidth = t, e.strokeStyle = i.outsideBorderColor, e.beginPath(), e.arc(_, g, r, 0, 2 * Math.PI, !0), e.closePath(), e.stroke(), e.restore()
                        }
                    }(e, this._data, this._data.plate, r, t), this._data.labelRenderer.draw(e, t), e.restore()
                }
            }
            var y = i(356361),
                T = i(890740);
            const b = {
                    circleBorderColor: (0, n.getHexColorByName)("color-cold-gray-900"),
                    labelBackgroundColor: (0, n.getHexColorByName)("color-cold-gray-900"),
                    labelBorderColor: (0, n.getHexColorByName)("color-cold-gray-800"),
                    labelTextColor: (0, n.getHexColorByName)("color-cold-gray-200"),
                    poleColor: (0, n.getHexColorByName)("color-cold-gray-500"),
                    shadowColor: "rgba(0,0,0,0.4)",
                    selectionColor: (0, n.getHexColorByName)("color-tv-blue-500")
                },
                P = {
                    circleBorderColor: (0, n.getHexColorByName)("color-white"),
                    labelBackgroundColor: (0, n.getHexColorByName)("color-white"),
                    labelBorderColor: (0, n.getHexColorByName)("color-cold-gray-150"),
                    labelTextColor: (0, n.getHexColorByName)("color-cold-gray-900"),
                    poleColor: (0, n.getHexColorByName)("color-cold-gray-500"),
                    shadowColor: "rgba(0,0,0,0.2)",
                    selectionColor: (0, n.getHexColorByName)("color-tv-blue-500")
                };
            class L extends l.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = new s.CompositeRenderer, this._emojiCache = null, this._destroyed = !1, this._signpostRenderer = new R(o.HitTestResult.MOVEPOINT, e.isPhantom()), e.properties().childs().emoji.subscribe(this, this._updateEmoji), this._updateEmoji()
                }
                destroy() {
                    this._source.properties().childs().emoji.unsubscribeAll(this), this._destroyed = !0
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    if (super._updateImpl(), this._renderer.clear(), !this._updateTimelineRenderer(e)) return;
                    if (this._renderer.append(this._signpostRenderer), this._source.isPhantom()) return;
                    const i = this._itemAnchorY();
                    if (null === i) return;
                    const n = this._points[0],
                        s = new r.Point(n.x, i);
                    s.data = n.data, s.square = !0, this._renderer.append(this.createLineAnchor({
                        points: [s],
                        pointsCursorType: [a.PaneCursorType.VerticalResize]
                    }, 0))
                }
                _itemAnchorY() {
                    return this._signpostRenderer.itemAnchorY()
                }
                _updateTimelineRenderer(e) {
                    var t;
                    const i = this._source.ownerSource();
                    if (null === i) return !1;
                    const r = this._model.timeScale(),
                        n = i.priceScale(),
                        s = i.firstValue();
                    if (r.isEmpty() || null === n || n.isEmpty() || null === s) return !1;
                    const a = this._model.isDark() ? b : P,
                        o = this._model.mainSeries(),
                        l = this._source.properties().childs(),
                        c = l.position.value(),
                        u = this._source.customEvent(),
                        p = i === o ? (0, d.getSeriesPosition)(o, u) : (0, d.getNoDataPosition)(u, n, s);
                    if (null === p) return !1;
                    const _ = r.indexToCoordinate(p.index),
                        g = n.priceToCoordinate(p.price, s),
                        f = l.showImage.value();
                    let m = (0, d.positionToCoordinate)(c, e, g, p.positionPointDirection);
                    m >= -1e-10 && m <= e + 1e-10 && (m = Math.min(e - 2, Math.max(2, m)));
                    const v = p.visualDirection !== p.positionPointDirection,
                        x = p.visualDirection,
                        w = {
                            emojiRadius: 16,
                            poleColor: a.poleColor,
                            svgRenderer: null === (t = this._emojiCache) || void 0 === t ? void 0 : t.emojiSvgRenderer,
                            itemIndex: 1,
                            label: {
                                labelIndex: 1,
                                labelDirection: p.positionPointDirection,
                                labelFont: h.CHART_FONT_FAMILY,
                                labelFontSize: l.fontSize.value(),
                                labelFontBold: l.bold.value(),
                                labelFontItalic: l.italic.value(),
                                labelBorderRadius: 4,
                                labelPadding: 3,
                                labelBoxPaddingVert: 6,
                                labelBoxPaddingHorz: 8,
                                labelWordWrapWidth: 134,
                                labelColor: a.labelTextColor,
                                labelBorderColor: a.labelBorderColor,
                                labelBackgroundColor: a.labelBackgroundColor,
                                text: l.text.value()
                            },
                            x: _,
                            anchorY: m,
                            poleStartY: p.poleStartY,
                            direction: x * (v ? -1 : 1),
                            inverseAnchorPosition: v
                        };
                    return f && (w.plate = {
                        circleBackgroundColor: l.backgroundsColors.value(),
                        outsideBorderWidth: 0,
                        circleBorderColor: a.circleBorderColor,
                        circleBorderWidth: 1,
                        poleTailHeight: l.text.value() ? 10 : 0,
                        circleRadius: 35,
                        shadowColor: a.shadowColor,
                        outsideBorderColor: a.selectionColor
                    }), this._signpostRenderer.setData(w), !0
                }
                async _updateEmoji() {
                    var e;
                    const t = this._source.properties().childs().emoji.value();
                    if (null !== this._emojiCache && this._emojiCache.emoji === t) return;
                    null !== this._emojiCache && (null === (e = this._emojiCache.abortController) || void 0 === e || e.abort(), this._emojiCache.abortController = void 0);
                    const r = (0,
                            y.getTwemojiUrl)(t, "svg"),
                        n = new AbortController,
                        s = (0, T.fetch)(r, {
                            signal: n.signal
                        }).then((e => e.text())),
                        a = {
                            emoji: t,
                            abortController: n
                        };
                    this._emojiCache = a;
                    const [o, {
                        svgRenderer: l
                    }] = await Promise.all([s, i.e(72616).then(i.bind(i, 905153))]);
                    !this._destroyed && a.abortController && (a.emojiSvgRenderer = l(o), this._model.updateSource(this._source))
                }
            }
        },
        766097: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                SineLinePaneView: () => h
            });
            var r = i(86441),
                n = i(233330),
                s = i(28035),
                a = i(904244),
                o = i(858063),
                l = i(914679);
            class d extends a.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e
                }
                hitTest(e, t) {
                    const i = (e.x - this._data.point.x) * Math.PI / this._data.width;
                    let r = Math.sin(i - Math.PI / 2) * this._data.height / 2;
                    return r = this._data.point.y + r + this._data.height / 2, Math.abs(r - e.y) <= 3 ? new o.HitTestResult(o.HitTestResult.MOVEPOINT) : null
                }
                _drawImpl(e) {
                    const t = e.context;
                    t.strokeStyle = this._data.color, t.lineWidth = this._data.lineWidth, (0, l.setLineStyle)(t, this._data.lineStyle), t.beginPath(), t.moveTo(this._data.point.x, this._data.point.y);
                    const i = Math.max(1, this._data.width / 30),
                        r = e.mediaSize.width - this._data.point.x + i;
                    for (let e = 1; e <= r; e += i) {
                        const i = e * Math.PI / this._data.width,
                            r = Math.sin(i - Math.PI / 2) * this._data.height / 2;
                        t.lineTo(this._data.point.x + e, this._data.point.y + r + this._data.height / 2)
                    }
                    t.stroke()
                }
            }
            class h extends n.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._renderer = new s.CompositeRenderer
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2) return;
                    const [i, n] = this._source.points();
                    if (0 === 2 * Math.abs(i.index - n.index)) return void this.addAnchors(this._renderer);
                    const [s, a] = this._points, o = Math.abs(s.x - a.x), l = a.y - s.y, h = this._source.properties().childs(), c = h.linewidth.value();
                    if (s.y < -c && a.y < -c || s.y > e + c && a.y > e + c) return;
                    const u = 2 * o,
                        p = s.x > 0 ? s.x - Math.ceil(s.x / u) * u : s.x + Math.floor(-s.x / u) * u,
                        _ = {
                            point: new r.Point(p, s.y),
                            width: o,
                            height: l,
                            color: h.linecolor.value(),
                            lineWidth: h.linewidth.value(),
                            lineStyle: h.linestyle.value()
                        };
                    this._renderer.append(new d(_)), this.addAnchors(this._renderer)
                }
            }
        },
        858204: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                StickerPaneView: () => n
            });
            var r = i(353903);
            class n extends r.SvgIconPaneView {
                _iconColor() {
                    return null
                }
            }
        },
        677894: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                StudyLineDataSourceAnchorsPaneView: () => n
            });
            var r = i(233330);
            class n extends r.LineSourcePaneView {
                renderer() {
                    return this._invalidated && (this._updateImpl(), this._invalidated = !1), this.createLineAnchor({
                        points: this._getPoints()
                    }, 0)
                }
            }
        },
        353903: (e, t, i) => {
            "use strict";
            i.d(t, {
                SvgIconPaneView: () => g
            });
            var r = i(86441),
                n = i(625422),
                s = i(650151),
                a = i(114123),
                o = i(28035),
                l = i(854905),
                d = i(233330),
                h = i(314967),
                c = i(904244),
                u = i(858063);
            const p = (0, h.getHexColorByName)("color-tv-blue-600");
            class _ extends c.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null === this._data) return null;
                    const {
                        size: i,
                        angle: r,
                        point: s
                    } = this._data, a = (0, n.rotationMatrix)(-r), o = (0, n.transformPoint)(a, e.subtract(s));
                    return Math.abs(o.y) <= i / 2 && Math.abs(o.x) <= i / 2 ? new u.HitTestResult(u.HitTestResult.MOVEPOINT) : null
                }
                isOutOfScreen(e, t) {
                    if (null === this._data) return !0;
                    const {
                        size: i,
                        point: r,
                        angle: n
                    } = this._data;
                    let s;
                    return s = n % (Math.PI / 2) == 0 ? i / 2 : Math.sqrt(i ** 2 * 2) / 2, r.x + s < 0 || r.x - s > t || r.y + s < 0 || r.y - s > e
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const {
                        size: t,
                        svg: i,
                        point: r,
                        angle: n,
                        color: s,
                        background: a,
                        selected: o
                    } = this._data, l = e.context;
                    l.translate(r.x, r.y);
                    const d = n - Math.PI / 2;
                    l.rotate(d);
                    const h = t / 2;
                    o && (l.fillStyle = a, l.strokeStyle = p, l.beginPath(), l.rect(-h, -h, t, t), l.closePath(), l.fill(), l.stroke()), i && (l.translate(-h, -h), null !== s && (l.fillStyle = s), i.render(l, {
                        targetViewBox: {
                            x: 0,
                            y: 0,
                            width: t,
                            height: t
                        },
                        doNotApplyColors: null !== s
                    }))
                }
            }
            class g extends d.LineSourcePaneView {
                constructor(e, t, i) {
                    super(e, t), this._iconRenderer = new _, this._renderer = new o.CompositeRenderer, this._svg = i
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 1) return;
                    const i = this._source.properties().childs(),
                        s = i.size.value(),
                        a = {
                            point: this._points[0],
                            color: this._iconColor(),
                            size: s,
                            svg: this._svg,
                            angle: i.angle.value(),
                            selected: this.areAnchorsVisible(),
                            background: this._calculateBackgroundColor()
                        };
                    this._iconRenderer.setData(a), this._iconRenderer.isOutOfScreen(e, t) || this._renderer.append(this._iconRenderer);
                    const o = this._points[0],
                        h = this._source.getAnchorLimit();
                    let c = new r.Point(Math.max(h, s) / 2, 0),
                        u = new r.Point(0, Math.max(h, s) / 2);
                    const p = (0, n.rotationMatrix)(i.angle.value());
                    c = (0, n.transformPoint)(p, c), u = (0, n.transformPoint)(p, u);
                    const _ = o.add(c);
                    _.data = 0;
                    const g = o.subtract(c);
                    g.data = 1;
                    const f = o.add(u);
                    f.data = 2, f.square = !0;
                    const m = o.subtract(u);
                    m.data = 3, m.square = !0;
                    const v = (0, d.thirdPointCursorType)(_, g),
                        x = [l.PaneCursorType.Default, l.PaneCursorType.Default, v, v];
                    this._renderer.append(this.createLineAnchor({
                        points: [_, g, f, m],
                        pointsCursorType: x
                    }, 0))
                }
                _calculateBackgroundColor() {
                    return (0, a.generateColor)(this._model.backgroundColorAtYPercentFromTop(this._points[0].y / (0, s.ensureNotNull)(this._model.paneForSource(this._source)).height()), 60, !0)
                }
            }
        },
        863107: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TextPaneView: () => _
            });
            var r = i(650151),
                n = i(86441),
                s = i(623331),
                a = i(854905),
                o = i(544445),
                l = i(28035),
                d = i(583110),
                h = i(441970),
                c = i(858063),
                u = i(233330);
            const p = [a.PaneCursorType.HorizontalResize];
            class _ extends u.LineSourcePaneView {
                constructor(e, t, i, r, n, s, a, l) {
                    super(e, t), this._textRenderer = new o.TextRenderer, this._noSelection = !1, this._renderer = null, this._offsetX = i, this._offsetY = r, this._vertAlign = n, this._horzAlign = s, this._forceTextAlign = Boolean(a), this._noSelection = !1, this._renderer = null, this._recalculateSourcePointsOnFirstUpdate = l
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                disableSelection() {
                    this._noSelection = !0
                }
                isEditMode() {
                    return !this._getModel().readOnly()
                }
                _updateImpl(e, t) {
                    super._updateImpl(e, t), this._renderer = null;
                    const i = this._getSource(),
                        a = i.priceScale();
                    if (!a || a.isEmpty()) return;
                    const o = i.properties().childs(),
                        u = this._getModel(),
                        _ = {
                            text: o.text.value(),
                            color: o.color.value(),
                            fontSize: o.fontsize.value(),
                            boxPadding: o.fontsize.value() / 6,
                            font: s.CHART_FONT_FAMILY,
                            vertAlign: this._vertAlign || "top",
                            horzAlign: this._horzAlign || "left",
                            offsetX: this._offsetX || 0,
                            offsetY: this._offsetY || 0,
                            forceTextAlign: this._forceTextAlign
                        };
                    if (_.points = i.isFixed() ? [(0, r.ensureDefined)(i.fixedPoint())] : this._points, o.fillBackground && o.fillBackground.value() && (_.backgroundColor = o.backgroundColor.value()), o.drawBorder && o.drawBorder.value() && (_.borderColor = o.borderColor.value()), o.wordWrap && o.wordWrap.value() && (_.wordWrapWidth = o.wordWrapWidth.value()), _.bold = o.bold && o.bold.value(), _.italic = o.italic && o.italic.value(), _.highlightBorder = u.selection().isSelected(i), !i.isFixed() && o.fixedSize && !o.fixedSize.value()) {
                        _.scaleX = u.timeScale().barSpacing() / i.barSpacing();
                        const e = (0, r.ensureNotNull)(a.priceRange());
                        let t = a.height() / e.length();
                        const n = a.logFormula();
                        i.isPriceDencityLog() && !a.isLog() && (t = a.height() / ((0, h.toLog)(e.maxValue(), n) - (0, h.toLog)(e.minValue(), n))), !i.isPriceDencityLog() && a.isLog() && (t = a.height() / ((0, h.fromLog)(e.maxValue(), n) - (0, h.fromLog)(e.minValue(), n)));
                        const s = i.priceDencity();
                        void 0 !== s && (_.scaleY = t / s), (void 0 === s || void 0 === _.scaleY || _.scaleY <= 0) && delete _.scaleY
                    }
                    if (this._textRenderer.setData(_), this._textRenderer.isOutOfScreen(t, e)) return;
                    const g = 1 === _.points.length;
                    if (g && void 0 !== this._recalculateSourcePointsOnFirstUpdate) {
                        this._renderer = null;
                        const e = this._textRenderer.measure();
                        return this._recalculateSourcePointsOnFirstUpdate(e.width, e.height), void(this._recalculateSourcePointsOnFirstUpdate = void 0)
                    }
                    if (g && !this._noSelection) {
                        const e = new l.CompositeRenderer;
                        e.append(this._textRenderer);
                        const t = _.points[0].clone(),
                            i = this._textRenderer.measure(),
                            r = i.width,
                            s = i.height;
                        if (_.wordWrapWidth) {
                            const i = new n.Point(t.x + r, t.y + s / 2);
                            i.data = 1, e.append(this.createLineAnchor({
                                points: [i],
                                pointsCursorType: p
                            }, 1))
                        }
                        const a = new n.Point(t.x + r / 2, t.y + s);
                        return a.data = 0, e.append(new d.SelectionRenderer({
                            points: [a],
                            bgColors: this._lineAnchorColors([a]),
                            visible: this.areAnchorsVisible(),
                            hittestResult: c.HitTestResult.MOVEPOINT,
                            barSpacing: u.timeScale().barSpacing()
                        })), void(this._renderer = e)
                    }
                    this._renderer = this._textRenderer
                }
            }
        },
        443858: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LineToolThreeDrivesPaneView: () => u
            });
            var r = i(631586),
                n = i(28035),
                s = i(544445),
                a = i(951512),
                o = i(296266),
                l = i(739665),
                d = i(530513),
                h = i(233330),
                c = i(623331);
            class u extends h.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._numericFormatter = new a.NumericFormatter, this._retrace1LabelRenderer = new s.TextRenderer, this._retrace12LabelRenderer = new s.TextRenderer, this._polyLineRenderer = new d.PolygonRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    let e = NaN,
                        t = NaN;
                    if (this._source.points().length >= 4) {
                        const [, t, i, r] = this._source.points();
                        e = Math.round(100 * Math.abs((r.price - i.price) / (i.price - t.price))) / 100
                    }
                    if (this._source.points().length >= 6) {
                        const [, , , e, i, r] = this._source.points();
                        t = Math.round(100 * Math.abs((r.price - i.price) / (i.price - e.price))) / 100
                    }
                    if (this._points.length < 2) return;
                    const i = this._source.properties().childs(),
                        s = new n.CompositeRenderer,
                        a = (e, t) => ({
                            points: [e],
                            text: t,
                            color: i.textcolor.value(),
                            vertAlign: "middle",
                            horzAlign: "center",
                            font: c.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: i.bold && i.bold.value(),
                            italic: i.italic && i.italic.value(),
                            fontsize: i.fontsize.value(),
                            backgroundColor: i.color.value(),
                            backgroundRoundRect: 4
                        }),
                        d = (e, t) => ({
                            points: [e, t],
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: r.LINESTYLE_DOTTED,
                            extendleft: !1,
                            extendright: !1,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal
                        }),
                        h = {
                            points: this._points,
                            color: i.color.value(),
                            linewidth: i.linewidth.value(),
                            linestyle: r.LINESTYLE_SOLID,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal,
                            backcolor: "rgba(0, 0, 0, 0)",
                            fillBackground: !1,
                            filled: !1
                        };
                    if (this._polyLineRenderer.setData(h), s.append(this._polyLineRenderer), !isNaN(e)) {
                        const t = new o.TrendLineRenderer;
                        t.setData(d(this._points[1], this._points[3])), s.append(t);
                        const i = a(this._points[1].add(this._points[3]).scaled(.5), this._numericFormatter.format(e));
                        this._retrace1LabelRenderer.setData(i), s.append(this._retrace1LabelRenderer)
                    }
                    if (!isNaN(t)) {
                        const e = new o.TrendLineRenderer;
                        e.setData(d(this._points[3], this._points[5])), s.append(e);
                        const i = a(this._points[5].add(this._points[3]).scaled(.5), this._numericFormatter.format(t));
                        this._retrace12LabelRenderer.setData(i), s.append(this._retrace12LabelRenderer)
                    }
                    this.addAnchors(s), this._renderer = s
                }
            }
        },
        238265: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TimeCyclesPaneView: () => c
            });
            var r = i(86441),
                n = i(28035),
                s = i(233330),
                a = i(114123),
                o = i(858063),
                l = i(914679),
                d = i(904244);
            class h extends d.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data || e.y > this._data.point.y) return null;
                    if (e.x < this._data.point.x || e.x > this._data.point.x + this._data.width) return null;
                    const t = new r.Point(this._data.point.x + this._data.width / 2, this._data.point.y);
                    let i = e.subtract(t);
                    const n = this._data.height / this._data.width;
                    i = new r.Point(i.x, i.y / n);
                    const s = i.length();
                    return Math.abs(s - this._data.width / 2) < 3 ? new o.HitTestResult(o.HitTestResult.MOVEPOINT) : null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, (0, l.setLineStyle)(t, this._data.linestyle), t.save(), t.translate(this._data.point.x + 1, this._data.point.y), t.scale(this._data.width, this._data.height), t.beginPath(), t.arc(.5, 0, .5, Math.PI, 0, !1), t.restore(), t.stroke(), this._data.fillBackground && (t.fillStyle = (0, a.generateColor)(this._data.backcolor, this._data.transparency), t.fill())
                }
            }
            class c extends s.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    if (super._updateImpl(), this._renderer = null, this._points.length < 2) return;
                    const e = this._source.points(),
                        t = e[0],
                        i = e[1],
                        s = Math.min(t.index, i.index),
                        a = Math.max(t.index, i.index),
                        o = a - s,
                        l = this._points[0],
                        d = this._points[1],
                        c = Math.abs(l.x - d.x),
                        u = new n.CompositeRenderer,
                        p = this._source.properties().childs(),
                        _ = this._model.timeScale();
                    if (0 === o) return;
                    let g = Math.min(l.x, d.x);
                    const f = [];
                    for (let e = s; g > -c; e -= o) g = _.indexToCoordinate(e), f.push(g);
                    g = Math.max(l.x, d.x);
                    for (let e = a; g < _.width(); e += o) g = _.indexToCoordinate(e), f.push(g);
                    for (let e = 0; e < f.length; e++) {
                        const t = {
                                point: new r.Point(f[e], l.y),
                                width: c,
                                height: c,
                                color: p.linecolor.value(),
                                linewidth: p.linewidth.value(),
                                linestyle: p.linestyle.value(),
                                fillBackground: p.fillBackground.value(),
                                backcolor: p.backgroundColor.value(),
                                transparency: p.transparency.value()
                            },
                            i = new h;
                        i.setData(t), u.append(i)
                    }
                    this.addAnchors(u), this._renderer = u
                }
            }
        },
        23815: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TrendAnglePaneView: () => b
            });
            var r = i(650151),
                n = i(86441),
                s = i(777754),
                a = i(768038),
                o = i(561068),
                l = i(583811),
                d = i(858063),
                h = i(28035),
                c = i(739665),
                u = i(544445),
                p = i(296266),
                _ = i(255292),
                g = i(583110),
                f = i(623331),
                m = i(112824),
                v = i(396798),
                x = i(904244);
            class w extends x.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    t.translate(this._data.point.x, this._data.point.y), t.strokeStyle = this._data.color, t.setLineDash([1, 2]);
                    const i = this._data.size;
                    t.beginPath(), t.moveTo(0, 0), t.lineTo(i, 0), t.arc(0, 0, i, 0, -this._data.angle, this._data.angle > 0), t.stroke()
                }
            }
            var R = i(801088),
                y = i(504148),
                T = i(764091);
            class b extends T.AlertableLineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._secondPoint = null, this._label = null, this._labelData = null, this._percentageFormatter = new o.PercentageFormatter, this._pipFormatter = null, this._lastSymbolInfo = null, this._trendRenderer = new p.TrendLineRenderer, this._angleRenderer = new w, this._angleLabelRenderer = new u.TextRenderer, this._renderer = new h.CompositeRenderer, this._cache = null, this._cacheDrawParams = null, this._cacheInvalidated = !0, this._statCache = null, this._iconsReady = !1, _.iconsContainer.onAllIconsReady().subscribe(this, (() => {
                        this._cache && (this._cache.destroy(), this._cache = null), this._iconsReady = !0, t.lightUpdate()
                    }))
                }
                destroy() {
                    this._cache && (this._cache.destroy(), this._cache = null), _.iconsContainer.onAllIconsReady().unsubscribeAll(this)
                }
                iconsReady() {
                    return this._iconsReady
                }
                update() {
                    super.update(), this._cacheInvalidated = !0
                }
                getCacheCanvas(e) {
                    return this._createCacheIfRequired(e).canvas()
                }
                getCacheRects(e, t) {
                    const i = this._createCacheIfRequired(e),
                        n = (0, r.ensureNotNull)(this._statCache),
                        s = (0, r.ensureNotNull)(this._middlePoint),
                        a = (0, r.ensureNotNull)(this._secondPoint),
                        o = this._source.properties().childs().statsPosition.value(),
                        l = this._source.getPointByPosition(o, this._points[0], s, a),
                        d = {
                            left: 0,
                            top: i.topByRow(n.rowIndex),
                            width: i.rowWidth(n.rowIndex),
                            height: i.rowHeight(n.rowIndex)
                        },
                        h = {
                            left: Math.floor(l.x),
                            top: Math.floor(l.y),
                            width: d.width,
                            height: d.height
                        };
                    return h.left += R.LabelSettings.paddingLeftRight,
                        this._points[1].y < this._points[0].y && this._points[1].x < this._points[0].x || this._points[1].y > this._points[0].y && this._points[1].x > this._points[0].x ? h.top -= R.LabelSettings.paddingLeftRight + h.height : h.top += R.LabelSettings.paddingLeftRight, {
                            cacheRect: d,
                            targetRect: h
                        }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _createCacheIfRequired(e) {
                    return null !== this._cache && null !== this._cacheDrawParams && (0, m.areEqualPaneRenderParams)(e, this._cacheDrawParams) || (this._cache && this._cache.destroy(), this._cache = new y.TrendLineStatsCache(e), this._statCache = this._cache.updateSource(this._source, (() => this._statLabelData())), this._cacheDrawParams = e, this._cacheInvalidated = !1), this._cacheInvalidated && (this._statCache = this._cache.updateSource(this._source, (() => this._statLabelData())), this._cacheInvalidated = !1), this._cache
                }
                _updateImpl(e, t) {
                    var i;
                    this._renderer.clear(), super._updateImpl();
                    const r = this._source.angle();
                    if (this._points.length > 0 && null !== r) {
                        const e = this._points[0],
                            t = Math.cos(r),
                            i = -Math.sin(r),
                            s = new n.Point(t, i);
                        this._secondPoint = e.addScaled(s, this._source.distance()), this._middlePoint = this._source.calcMiddlePoint(this._points[0], this._secondPoint)
                    }
                    this._invalidated = !1;
                    const s = this._source.priceScale(),
                        o = this._model.timeScale();
                    if (!s || s.isEmpty() || o.isEmpty()) return;
                    if (null === this._model.timeScale().visibleBarsStrictRange()) return;
                    if (this._source.points().length < 2) return;
                    if (this._points.length < 2 || null === this._secondPoint) return;
                    const l = this._source.properties().childs(),
                        h = l.showBarsRange.value();
                    l.showPriceRange.value() || h || (this._label = null, this._labelData && (this._labelData.text = ""));
                    const u = l.linecolor.value(),
                        p = {
                            points: [this._points[0], this._secondPoint],
                            color: u,
                            linewidth: l.linewidth.value(),
                            linestyle: l.linestyle.value(),
                            extendleft: l.extendLeft.value(),
                            extendright: l.extendRight.value(),
                            leftend: c.LineEnd.Normal,
                            rightend: c.LineEnd.Normal
                        };
                    this._trendRenderer.setData(p), this._renderer.append(this._trendRenderer);
                    const _ = this.isHoveredSource() || this.isSelectedSource() || l.alwaysShowStats.value(),
                        m = (this.isHoveredSource() || this.isSelectedSource()) && l.showMiddlePoint.value();
                    if (_ && 2 === this._points.length) {
                        const e = new v.PaneRendererCachedImage(this, 0);
                        this._renderer.append(e)
                    }
                    this._middlePoint && this._renderer.append(new g.SelectionRenderer({
                        points: [this._middlePoint],
                        bgColors: this._lineAnchorColors([this._middlePoint]),
                        color: u,
                        visible: m && this.areAnchorsVisible(),
                        hittestResult: d.HitTestResult.REGULAR,
                        barSpacing: 0
                    }));
                    const x = {
                        point: this._points[0],
                        angle: null !== (i = this._source.angle()) && void 0 !== i ? i : 0,
                        color: l.linecolor.value(),
                        size: 50
                    };
                    this._angleRenderer.setData(x), this._renderer.append(this._angleRenderer);
                    const w = Math.round(180 * x.angle / Math.PI) + "º",
                        R = {
                            points: [new n.Point(this._points[0].x + 50, this._points[0].y)],
                            text: (0, a.forceLTRStr)(w),
                            color: l.textcolor.value(),
                            horzAlign: "left",
                            font: f.CHART_FONT_FAMILY,
                            offsetX: 5,
                            offsetY: 0,
                            bold: l.bold.value(),
                            italic: l.italic.value(),
                            fontsize: l.fontsize.value(),
                            vertAlign: "middle"
                        };
                    this._angleLabelRenderer.setData(R), this._renderer.append(this._angleLabelRenderer),
                        p.points.length >= 2 && this._addAlertRenderer(this._renderer, p.points);
                    const y = new n.Point(this._secondPoint.x, this._secondPoint.y);
                    y.data = 1, this._renderer.append(this.createLineAnchor({
                        points: [this._points[0], y]
                    }, 0))
                }
                _statLabelData() {
                    const e = this._source.points(),
                        t = e[0],
                        n = e[1],
                        o = this._source.properties().childs(),
                        d = [];
                    let h, c, u;
                    const p = o.showPriceRange.value(),
                        _ = (0, r.ensureNotNull)(this._source.ownerSource());
                    if (p && this._source.priceScale()) {
                        const e = n.price - t.price,
                            i = e / Math.abs(t.price);
                        h = _.formatter().format(e) + " (" + this._percentageFormatter.format(100 * i) + ")";
                        const r = this._model.mainSeries().symbolInfo();
                        r && r !== this._lastSymbolInfo && (this._pipFormatter = new l.PipFormatter(r.pricescale, r.minmov, r.type, r.minmove2, r.typespecs), this._lastSymbolInfo = r), h += this._pipFormatter ? ", " + this._pipFormatter.format(e) : "", d.push("priceRange")
                    }
                    const g = o.showBarsRange.value();
                    g && (c = "", g && (u = n.index - t.index, c += s.t(null, void 0, i(33355)).format({
                        count: (0, a.forceLTRStr)(String(u))
                    })), c && d.push("barsRange")), this._label = [(0, a.forceLTRStr)(h), c].filter((e => null != e)).join("\n") || null;
                    const m = this._model.isDark(),
                        v = m ? R.LabelSettings.bgColorDark : R.LabelSettings.bgColorLight,
                        x = m ? R.LabelSettings.textColorDark : R.LabelSettings.textColorLight,
                        w = o.statsPosition.value(),
                        y = {
                            points: [this._source.getPointByPosition(w, this._points[0], (0, r.ensureNotNull)(this._middlePoint), (0, r.ensureNotNull)(this._secondPoint))],
                            text: this._label,
                            color: x,
                            isDark: m,
                            font: f.CHART_FONT_FAMILY,
                            fontSize: R.LabelSettings.fontSize,
                            lineSpacing: R.LabelSettings.lineSpacing,
                            backgroundColor: v,
                            backgroundRoundRect: R.LabelSettings.rectRadius,
                            paddingLeft: R.LabelSettings.paddingLeftRight,
                            paddingRight: R.LabelSettings.paddingLeftRight,
                            paddingTop: R.LabelSettings.paddingTopBottom,
                            paddingBottom: R.LabelSettings.paddingTopBottom,
                            textPadding: R.LabelSettings.textPadding,
                            doNotAlignText: !0,
                            icons: d,
                            bold: !1,
                            italic: !1,
                            lines: [],
                            wordWrapWidth: 0
                        };
                    return this._points[1].y < this._points[0].y && (y.vertAlign = "bottom"), this._points[1].x < this._points[0].x && (y.horzAlign = "right"), this._labelData = y, y
                }
            }
        },
        323246: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TrendBasedFibExtensionPaneView: () => u
            });
            var r = i(86441),
                n = i(603823),
                s = i(296266),
                a = i(858063),
                o = i(28035),
                l = i(739665),
                d = i(712619),
                h = i(544445),
                c = i(562432);
            class u extends c.LineToolPaneViewFibWithLabels {
                constructor(e, t) {
                    super(e, t), this._trendLineRendererPoints12 = new s.TrendLineRenderer, this._trendLineRendererPoints23 = new s.TrendLineRenderer, this._rectangleRenderers = {}, this._hlevelLineRenderers = {}, this._renderer = new o.CompositeRenderer, this._levels = []
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(t, e), this._renderer
                }
                _updateImpl(e, t) {
                    var i, o;
                    if (super._updateImpl(), this._renderer.clear(), this._points.length < 2) return;
                    const [c, u] = this._points, p = this._source.properties().childs();
                    if (3 === this._source.points().length) {
                        const e = this._source.priceScale();
                        if (!e || e.isEmpty() || this._model.timeScale().isEmpty()) return;
                        const t = null === (i = this._source.ownerSource()) || void 0 === i ? void 0 : i.firstValue();
                        if (null == t) return;
                        const [r, n, s] = this._source.points();
                        let a = !1;
                        p.reverse && p.reverse.value() && (a = p.reverse.value()), this._levels = [];
                        const o = a ? r.price : n.price,
                            l = a ? n.price : r.price,
                            h = o - l;
                        let c, u, _;
                        const g = e.isLog() && p.fibLevelsBasedOnLogScale.value();
                        if (g) {
                            c = e.priceToCoordinate(o, t);
                            u = c - e.priceToCoordinate(l, t), _ = e.priceToCoordinate(s.price, t)
                        }
                        const f = {
                                price: s.price,
                                coordinate: _
                            },
                            m = {
                                price: h,
                                coordinate: u
                            },
                            v = this._source.levelsCount();
                        for (let i = 1; i <= v; i++) {
                            const r = p["level" + i].childs();
                            if (!r.visible.value()) continue;
                            const n = r.coeff.value(),
                                s = r.color.value(),
                                a = (0, d.fibLevelCoordinate)(f, m, n, e, t, g),
                                o = (0, d.fibLevelPrice)(f, m, n, e, t, g);
                            this._levels.push({
                                color: s,
                                price: o,
                                y: a,
                                linewidth: p.levelsStyle.childs().linewidth.value(),
                                linestyle: p.levelsStyle.childs().linestyle.value(),
                                index: i
                            })
                        }
                    }
                    const _ = p.trendline.childs();
                    if (_.visible.value()) {
                        const e = {
                            points: [c, u],
                            color: _.color.value(),
                            linewidth: _.linewidth.value(),
                            linestyle: _.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal
                        };
                        this._trendLineRendererPoints12.setData(e), this._renderer.append(this._trendLineRendererPoints12)
                    }
                    if (this._points.length < 3) return void this.addAnchors(this._renderer);
                    const g = this._points[2];
                    if (_.visible.value()) {
                        const e = {
                            points: [u, g],
                            color: _.color.value(),
                            linewidth: _.linewidth.value(),
                            linestyle: _.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal
                        };
                        this._trendLineRendererPoints23.setData(e), this._renderer.append(this._trendLineRendererPoints23)
                    }
                    const f = Math.min(g.x, u.x),
                        m = Math.max(g.x, u.x),
                        v = p.fillBackground.value(),
                        x = p.transparency.value(),
                        w = p.extendLinesLeft.value(),
                        R = p.extendLines.value();
                    if (v)
                        for (let e = 0; e < this._levels.length; e++)
                            if (e > 0 && v) {
                                const t = this._levels[e - 1],
                                    i = {
                                        points: [new r.Point(f, this._levels[e].y), new r.Point(m, t.y)],
                                        color: this._levels[e].color,
                                        linewidth: 0,
                                        backcolor: this._levels[e].color,
                                        fillBackground: !0,
                                        transparency: x,
                                        extendLeft: w,
                                        extendRight: R
                                    };
                                this._rectangleRenderers.hasOwnProperty(e) || (this._rectangleRenderers[e] = new n.RectangleRenderer(void 0, void 0, !0));
                                const s = this._rectangleRenderers[e];
                                s.setData(i), this._renderer.append(s)
                            }
                    let y = f,
                        T = m;
                    y === T && (w && (y -= 1), R && (T += 1));
                    for (let i = 0; i < this._levels.length; i++) {
                        const n = new r.Point(y, this._levels[i].y),
                            d = new r.Point(T, this._levels[i].y);
                        let c;
                        const u = this._updateLabelForLevel({
                            i,
                            levelIndex: this._levels[i].index,
                            leftPoint: n,
                            rightPoint: d,
                            price: this._levels[i].price,
                            color: this._levels[i].color,
                            extendLeft: w,
                            extendRight: R,
                            horzAlign: p.horzLabelsAlign.value(),
                            vertAlign: p.vertLabelsAlign.value()
                        });
                        null !== u && (this._renderer.append(u), "middle" === p.vertLabelsAlign.value() && (c = null !== (o = (0, h.getTextBoundaries)(u, e, t)) && void 0 !== o ? o : void 0));
                        const _ = {
                            points: [n, d],
                            color: this._levels[i].color,
                            linewidth: this._levels[i].linewidth,
                            linestyle: this._levels[i].linestyle,
                            extendleft: w,
                            extendright: R,
                            leftend: l.LineEnd.Normal,
                            rightend: l.LineEnd.Normal,
                            excludeBoundaries: c
                        };
                        this._hlevelLineRenderers.hasOwnProperty(i) || (this._hlevelLineRenderers[i] = new s.TrendLineRenderer);
                        const g = this._hlevelLineRenderers[i];
                        g.setData(_), g.setHitTest(new a.HitTestResult(a.HitTestResult.MOVEPOINT, {
                            snappingPrice: this._levels[i].price
                        }, this._levels[i].index)), this._renderer.append(g)
                    }
                    this.addAnchors(this._renderer)
                }
            }
        },
        14026: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TrendBasedFibTimePaneView: () => p
            });
            var r = i(86441),
                n = i(274131),
                s = i(544445),
                a = i(603823),
                o = i(296266),
                l = i(858063),
                d = i(28035),
                h = i(739665),
                c = i(623331),
                u = i(233330);
            class p extends u.LineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._trendLineRendererPoints12 = new o.TrendLineRenderer, this._trendLineRendererPoints23 = new o.TrendLineRenderer, this._renderer = new d.CompositeRenderer, this._levels = []
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _updateImpl(e, t) {
                    var i;
                    super._updateImpl(), this._renderer.clear();
                    const o = this._source.properties().childs();
                    if (3 === this._source.points().length) {
                        const e = this._model.timeScale();
                        if (e.isEmpty()) return;
                        const [t, i, r] = this._source.points();
                        if (this._levels = [], i.index === t.index) return;
                        const n = i.index - t.index,
                            s = r.index;
                        if (null === e.visibleBarsStrictRange()) return;
                        for (let t = 1; t <= 11; t++) {
                            const i = o["level" + t].childs();
                            if (!i.visible.value()) continue;
                            const r = i.coeff.value(),
                                a = i.color.value(),
                                l = Math.round(s + r * n),
                                d = {
                                    x: e.indexToCoordinate(l),
                                    coeff: r,
                                    color: a,
                                    linewidth: i.linewidth.value(),
                                    linestyle: i.linestyle.value(),
                                    index: t,
                                    text: String(r)
                                };
                            this._levels.push(d)
                        }
                    }
                    if (this._points.length < 2) return;
                    const u = new d.CompositeRenderer,
                        [p, _] = this._points,
                        g = o.trendline.childs();
                    if (g.visible.value()) {
                        const e = {
                            points: [p, _],
                            color: g.color.value(),
                            linewidth: g.linewidth.value(),
                            linestyle: g.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: h.LineEnd.Normal,
                            rightend: h.LineEnd.Normal
                        };
                        this._trendLineRendererPoints12.setData(e), u.append(this._trendLineRendererPoints12)
                    }
                    if (this._points.length < 3) return this.addAnchors(u), void(this._renderer = u);
                    const f = this._points[2];
                    if (g.visible.value()) {
                        const e = {
                            points: [_, f],
                            color: g.color.value(),
                            linewidth: g.linewidth.value(),
                            linestyle: g.linestyle.value(),
                            extendleft: !1,
                            extendright: !1,
                            leftend: h.LineEnd.Normal,
                            rightend: h.LineEnd.Normal
                        };
                        this._trendLineRendererPoints23.setData(e), u.append(this._trendLineRendererPoints23)
                    }
                    if (o.fillBackground.value()) {
                        const t = o.transparency.value();
                        for (let i = 1; i < this._levels.length; i++) {
                            const n = this._levels[i - 1],
                                s = {
                                    points: [new r.Point(n.x, 0), new r.Point(this._levels[i].x, e)],
                                    color: this._levels[i].color,
                                    linewidth: 0,
                                    backcolor: this._levels[i].color,
                                    fillBackground: !0,
                                    transparency: t,
                                    extendLeft: !1,
                                    extendRight: !1
                                },
                                o = new a.RectangleRenderer(void 0, void 0, !0);
                            o.setData(s), u.append(o)
                        }
                    }
                    let m = o.horzLabelsAlign.value();
                    m = "left" === m ? "right" : "right" === m ? "left" : "center";
                    const v = o.vertLabelsAlign.value(),
                        x = o.showCoeffs.value();
                    for (let a = 0; a < this._levels.length; a++) {
                        let o;
                        if (x) {
                            let n;
                            switch (v) {
                                case "top":
                                    n = new r.Point(this._levels[a].x, 0);
                                    break;
                                case "middle":
                                    n = new r.Point(this._levels[a].x, .5 * e);
                                    break;
                                default:
                                    n = new r.Point(this._levels[a].x, e)
                            }
                            const l = {
                                    points: [n],
                                    text: this._levels[a].text,
                                    color: this._levels[a].color,
                                    vertAlign: v,
                                    horzAlign: m,
                                    font: c.CHART_FONT_FAMILY,
                                    offsetX: 2,
                                    offsetY: 0,
                                    fontsize: 12
                                },
                                d = new s.TextRenderer(l);
                            this._needLabelExclusionPath(d) && (o = null !== (i = (0,
                                s.getTextBoundaries)(d, t, e)) && void 0 !== i ? i : void 0), u.append(d)
                        }
                        const d = {
                                x: this._levels[a].x,
                                color: this._levels[a].color,
                                linewidth: this._levels[a].linewidth,
                                linestyle: this._levels[a].linestyle,
                                excludeBoundaries: o
                            },
                            h = new l.HitTestResult(l.HitTestResult.MOVEPOINT, void 0, this._levels[a].index),
                            p = new n.VerticalLineRenderer;
                        p.setData(d), p.setHitTest(h), u.append(p)
                    }
                    this.addAnchors(u), this._renderer = u
                }
                _needLabelExclusionPath(e) {
                    return "center" === this._source.properties().childs().horzLabelsAlign.value()
                }
            }
        },
        801088: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    LabelSettings: () => r
                }),
                function(e) {
                    e.offset = 8, e.fontSize = 12, e.lineSpacing = 16, e.rectRadius = 4, e.bgColorLight = "rgba(227,242,253,0.9)", e.bgColorDark = "rgba(67,70,81,0.9)", e.textColorLight = "#2A2E39", e.textColorDark = "#F8F9FD", e.textPadding = 10, e.paddingTopBottom = 13, e.paddingLeftRight = 10
                }(r || (r = {}))
        },
        335819: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TrendLinePaneView: () => T
            });
            var r = i(650151),
                n = i(86441),
                s = i(777754),
                a = i(768038),
                o = i(396798),
                l = i(28035),
                d = i(544445),
                h = i(561068),
                c = i(951512),
                u = i(735512),
                p = i(583811),
                _ = i(583110),
                g = i(296266),
                f = i(112824),
                m = i(255292),
                v = i(623331),
                x = i(858063),
                w = i(764091),
                R = i(801088),
                y = i(504148);
            class T extends w.AlertableLineSourcePaneView {
                constructor(e, t) {
                    super(e, t), this._label = null, this._labelData = null, this._percentageFormatter = new h.PercentageFormatter, this._numericFormatter = new c.NumericFormatter, this._pipFormatter = null, this._lastSymbolInfo = null, this._trendRenderer = new g.TrendLineRenderer, this._labelRenderer = new d.TextRenderer, this._renderer = new l.CompositeRenderer, this._cache = null, this._cacheDrawParams = null, this._cacheInvalidated = !0, this._statCache = null, this._iconsReady = !1, m.iconsContainer.onAllIconsReady().subscribe(this, (() => {
                        this._cache && (this._cache.destroy(), this._cache = null), this._iconsReady = !0, t.lightUpdate()
                    }))
                }
                destroy() {
                    this._cache && (this._cache.destroy(), this._cache = null), m.iconsContainer.onAllIconsReady().unsubscribeAll(this)
                }
                iconsReady() {
                    return this._iconsReady
                }
                update() {
                    super.update(), this._cacheInvalidated = !0
                }
                getCacheCanvas(e) {
                    return this._createCacheIfRequired(e).canvas()
                }
                getCacheRects(e, t) {
                    const i = this._createCacheIfRequired(e),
                        n = (0, r.ensureNotNull)(this._statCache),
                        s = (0, r.ensureNotNull)(this._middlePoint),
                        a = this._source.properties().childs().statsPosition.value(),
                        o = this._source.getPointByPosition(a, this._points[0], s, this._points[1]),
                        l = {
                            left: 0,
                            top: i.topByRow(n.rowIndex),
                            width: i.rowWidth(n.rowIndex),
                            height: i.rowHeight(n.rowIndex)
                        },
                        d = {
                            left: Math.floor(o.x),
                            top: Math.floor(o.y),
                            width: l.width,
                            height: l.height
                        };
                    return d.left += R.LabelSettings.paddingLeftRight, this._points[1].y < this._points[0].y && this._points[1].x < this._points[0].x || this._points[1].y > this._points[0].y && this._points[1].x > this._points[0].x ? d.top -= R.LabelSettings.paddingLeftRight + d.height : d.top += R.LabelSettings.paddingLeftRight, {
                        cacheRect: l,
                        targetRect: d
                    }
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _createCacheIfRequired(e) {
                    return null !== this._cache && null !== this._cacheDrawParams && (0, f.areEqualPaneRenderParams)(e, this._cacheDrawParams) || (this._cache && this._cache.destroy(),
                        this._cache = new y.TrendLineStatsCache(e), this._statCache = this._cache.updateSource(this._source, (() => this._statLabelData())), this._cacheDrawParams = e, this._cacheInvalidated = !1), this._cacheInvalidated && (this._statCache = this._cache.updateSource(this._source, (() => this._statLabelData())), this._cacheInvalidated = !1), this._cache
                }
                _updateImpl(e, t) {
                    var i;
                    this._renderer.clear(), this._invalidated = !1;
                    const r = this._source.priceScale(),
                        s = this._model.timeScale();
                    if (!r || r.isEmpty() || s.isEmpty()) return;
                    const a = this._model.timeScale().visibleBarsStrictRange();
                    if (null === a) return;
                    const l = this._source.points();
                    if (l.length < 2) return;
                    const h = l[0],
                        c = l[1],
                        u = this._source.properties().childs();
                    if (h.index < a.firstBar() && c.index < a.firstBar() && !u.extendLeft.value() && !u.extendRight.value()) return;
                    if (super._updateImpl(), this._points.length < 2) return;
                    const p = u.showBarsRange.value(),
                        g = u.showDateTimeRange.value(),
                        f = u.showDistance.value(),
                        m = u.showPriceRange.value(),
                        w = u.showAngle.value();
                    let R;
                    if (m || p || g || f || w || (this._label = null, this._labelData && (this._labelData.text = "")), u.showLabel && u.showLabel.value() && u.text.value().length > 0) {
                        const r = this._points[0],
                            s = this._points[1],
                            a = r.x < s.x ? r : s,
                            o = a === r ? s : r,
                            l = u.vertLabelsAlign.value(),
                            h = u.horzLabelsAlign.value();
                        let c;
                        c = "left" === h ? a.clone() : "right" === h ? o.clone() : new n.Point((r.x + s.x) / 2, (r.y + s.y) / 2);
                        const p = Math.atan((o.y - a.y) / (o.x - a.x)),
                            _ = {
                                points: [c],
                                text: u.text.value(),
                                color: u.textcolor.value(),
                                vertAlign: l,
                                horzAlign: h,
                                font: v.CHART_FONT_FAMILY,
                                offsetX: 0,
                                offsetY: 0,
                                bold: u.bold.value(),
                                italic: u.italic.value(),
                                fontsize: u.fontsize.value(),
                                forceTextAlign: !0,
                                angle: p
                            };
                        this._labelRenderer.setData(_), this._renderer.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (R = null !== (i = (0, d.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0)
                    }
                    const y = u.linecolor.value(),
                        T = {
                            points: this._points,
                            color: y,
                            linewidth: u.linewidth.value(),
                            linestyle: u.linestyle.value(),
                            extendleft: u.extendLeft.value(),
                            extendright: u.extendRight.value(),
                            leftend: u.leftEnd.value(),
                            rightend: u.rightEnd.value(),
                            excludeBoundaries: R
                        };
                    this._trendRenderer.setData(T), this._renderer.append(this._trendRenderer);
                    const b = (this.isHoveredSource() || this.isSelectedSource()) && this.isEditMode() || u.alwaysShowStats.value(),
                        P = (this.isHoveredSource() || this.isSelectedSource()) && u.showMiddlePoint.value();
                    if (b && 2 === this._points.length) {
                        const e = new o.PaneRendererCachedImage(this, 0);
                        this._renderer.append(e)
                    }
                    this._middlePoint && this._renderer.append(new _.SelectionRenderer({
                        points: [this._middlePoint],
                        bgColors: this._lineAnchorColors([this._middlePoint]),
                        color: y,
                        visible: P && this.areAnchorsVisible(),
                        hittestResult: x.HitTestResult.REGULAR,
                        barSpacing: 0
                    })), this.addAnchors(this._renderer), T.points.length >= 2 && this._addAlertRenderer(this._renderer, T.points)
                }
                _statLabelData() {
                    const e = this._source.points(),
                        t = e[0],
                        n = e[1],
                        o = this._source.properties().childs(),
                        l = [];
                    let d, h, c, _, g, f, m;
                    const x = o.showPriceRange.value(),
                        w = (0, r.ensureNotNull)(this._source.ownerSource());
                    if (x && this._source.priceScale()) {
                        _ = n.price - t.price;
                        const e = _ / Math.abs(t.price);
                        d = w.formatter().format(_) + " (" + this._percentageFormatter.format(100 * e) + ")";
                        const i = this._model.mainSeries().symbolInfo();
                        i && i !== this._lastSymbolInfo && (this._pipFormatter = new p.PipFormatter(i.pricescale, i.minmov, i.type, i.minmove2, i.typespecs), this._lastSymbolInfo = i), d += this._pipFormatter ? ", " + this._pipFormatter.format(_) : "", l.push("priceRange")
                    }
                    const y = o.showBarsRange.value(),
                        T = o.showDateTimeRange.value(),
                        b = o.showDistance.value(),
                        P = o.showAngle.value();
                    if (P || b) {
                        const e = (0, r.ensureNotNull)(this._source.pointToScreenPoint(t));
                        f = (0, r.ensureNotNull)(this._source.pointToScreenPoint(n)).subtract(e), m = Math.round(1e5 * f.length()) / 1e5
                    }
                    if (y || T || b) {
                        if (h = "", y && (g = n.index - t.index, h += s.t(null, void 0, i(33355)).format({
                                count: (0, a.forceLTRStr)(String(g))
                            })), T) {
                            const e = this._model.timeScale().indexToUserTime(t.index),
                                i = this._model.timeScale().indexToUserTime(n.index);
                            if (e && i) {
                                const t = (i.valueOf() - e.valueOf()) / 1e3,
                                    r = (0, a.startWithLTR)((new u.TimeSpanFormatter).format(t));
                                r && (h += y ? " (" + r + ")" : r)
                            }
                        }
                        b && (h && (h += ", "), h += s.t(null, void 0, i(326273)).format({
                            number: (0, a.forceLTRStr)(this._numericFormatter.format(Math.round(Number(m))))
                        })), h && l.push("barsRange")
                    }
                    if (P) {
                        let e;
                        void 0 !== m && m > 0 && void 0 !== f && (f = f.normalized(), e = Math.acos(f.x), f.y > 0 && (e = -e)), "number" != typeof e || isNaN(e) || (c = Math.round(180 * e / Math.PI) + "º", l.push("angle"))
                    }
                    this._label = [(0, a.forceLTRStr)(d), h, c].filter((e => null != e)).join("\n") || null;
                    const L = this._model.isDark(),
                        S = L ? R.LabelSettings.bgColorDark : R.LabelSettings.bgColorLight,
                        C = L ? R.LabelSettings.textColorDark : R.LabelSettings.textColorLight,
                        M = {
                            points: [this._points[1]],
                            text: this._label,
                            color: C,
                            isDark: L,
                            font: v.CHART_FONT_FAMILY,
                            fontSize: R.LabelSettings.fontSize,
                            lineSpacing: R.LabelSettings.lineSpacing,
                            backgroundColor: S,
                            backgroundRoundRect: R.LabelSettings.rectRadius,
                            paddingLeft: R.LabelSettings.paddingLeftRight,
                            paddingRight: R.LabelSettings.paddingLeftRight,
                            paddingTop: R.LabelSettings.paddingTopBottom,
                            paddingBottom: R.LabelSettings.paddingTopBottom,
                            textPadding: R.LabelSettings.textPadding,
                            doNotAlignText: !0,
                            icons: l,
                            bold: !1,
                            italic: !1,
                            lines: [],
                            wordWrapWidth: 0
                        };
                    return this._points[1].y < this._points[0].y && (M.vertAlign = "bottom"), this._points[1].x < this._points[0].x && (M.horzAlign = "right"), this._labelData = M, M
                }
            }
        },
        504148: (e, t, i) => {
            "use strict";
            i.d(t, {
                TrendLineStatsCache: () => g
            });
            var r = i(650151),
                n = i(86441),
                s = i(272001),
                a = i(255292),
                o = i(623331),
                l = i(801088),
                d = i(741341),
                h = l.LabelSettings.fontSize,
                c = l.LabelSettings.lineSpacing,
                u = l.LabelSettings.paddingTopBottom;
            const p = (0, s.getLogger)("Chart.LineToolTrendLine");

            function _(e, t) {
                return !(!e && !t) && (!(!e || t) || (!(e || !t) || (e.index !== t.index || e.price !== t.price)))
            }
            class g {
                constructor(e) {
                    this._sourcesToRow = new Map, this._rowsToSources = new Map, this._currentWidth = 400, this._actualCapacity = 1, this._currentSymbol = "", this._params = e;
                    const t = c,
                        i = h + t;
                    this._maxRowHeight = 3 * i - t + 2 * u + 2, this._recreateCanvas()
                }
                destroy() {
                    delete this._canvas, delete this._ctx
                }
                canvas() {
                    return this._canvas
                }
                topByRow(e) {
                    return e * this._maxRowHeight
                }
                rowHeight(e) {
                    const t = (0, r.ensureDefined)(this._rowsToSources.get(e)),
                        i = (0,
                            r.ensureDefined)(this._sourcesToRow.get(t)).effectiveState;
                    return null !== i ? i.realRowHeight : this._maxRowHeight
                }
                rowWidth(e) {
                    const t = (0, r.ensureDefined)(this._rowsToSources.get(e));
                    return (0, r.ensureDefined)(this._sourcesToRow.get(t)).width
                }
                currentWidth() {
                    return this._currentWidth
                }
                updateSource(e, t) {
                    const i = e.properties().symbol.value();
                    this._currentSymbol !== i && (p.logDebug("TrendLineCache. Clearing canvas because of changing symbol from " + this._currentSymbol + " to " + i), this._currentSymbol = i, this._sourcesToRow.clear(), this._rowsToSources.clear());
                    const r = e.id();
                    let n = this._sourcesToRow.get(r);
                    if (void 0 === n) {
                        const e = this._findEmptyRow(r);
                        n = {
                            effectiveState: null,
                            rowIndex: e,
                            width: 0
                        }, this._sourcesToRow.set(r, n), this._rowsToSources.set(e, r)
                    }
                    const s = n.effectiveState,
                        a = this._effectiveState(e);
                    if (!this._effectiveStatesEquals(s, a)) {
                        const e = t();
                        this._repaintSource(r, n.rowIndex, e), n.effectiveState = a
                    }
                    return n
                }
                _findEmptyRow(e) {
                    let t = 0;
                    for (; void 0 !== this._rowsToSources.get(t);) t++;
                    return this._rowsToSources.set(t, e), t >= this._actualCapacity && (this._actualCapacity++, this._recreateCanvas()), t
                }
                _effectiveState(e) {
                    const t = e.properties(),
                        i = t.showBarsRange && t.showBarsRange.value(),
                        n = t.showDateTimeRange && t.showDateTimeRange.value(),
                        s = t.showDistance && t.showDistance.value(),
                        a = t.showPriceRange && t.showPriceRange.value(),
                        o = t.showAngle && t.showAngle.value();
                    let l = 0;
                    (i || n || s) && l++, o && l++, a && l++;
                    const d = (h + c) * l - c + 2 * u + 2;
                    return {
                        p1: Object.assign({}, e.points()[0]),
                        p2: Object.assign({}, e.points()[1]),
                        props: e.properties(),
                        showBars: i,
                        showTimeRange: n,
                        showDistance: s,
                        showPriceRange: a,
                        showAngle: o,
                        dark: e.model().isDark(),
                        priceRange: (0, r.ensureNotNull)((0, r.ensureNotNull)(e.priceScale()).priceRange()).state(),
                        barSpacing: e.model().timeScale().barSpacing(),
                        realRowHeight: d
                    }
                }
                _effectiveStatesEquals(e, t) {
                    if (null !== e && null === t) return !1;
                    if (null === e && null !== t) return !1;
                    const i = (0, r.ensureNotNull)(e),
                        n = (0, r.ensureNotNull)(t);
                    if (_(i.p1, n.p1)) return !1;
                    if (_(i.p2, n.p2)) return !1;
                    if (i.dark !== n.dark) return !1;
                    if (i.showBars !== n.showBars) return !1;
                    if (i.showTimeRange !== n.showTimeRange) return !1;
                    if (i.showDistance !== n.showDistance) return !1;
                    if (i.showPriceRange !== n.showPriceRange) return !1;
                    if (i.showAngle !== n.showAngle) return !1;
                    if (i.showAngle || i.showDistance) {
                        if (i.priceRange.min !== n.priceRange.min) return !1;
                        if (i.priceRange.max !== n.priceRange.max) return !1;
                        if (i.barSpacing !== n.barSpacing) return !1
                    }
                    return !0
                }
                _repaintSource(e, t, i) {
                    i.points[0] = new n.Point(0, 0), delete i.horzAlign, delete i.vertAlign, (0, d.drawScaled)(this._ctx, this._params.pixelRatio, (() => {
                        this._ctx.translate(.5, this.topByRow(t) + .5), this._ctx.clearRect(0, 0, this._currentWidth, this._maxRowHeight);
                        const n = new a.TrendLineStatsRenderer(i, {
                            widths: []
                        }).draw(this._ctx, this._params);
                        (0, r.ensureDefined)(this._sourcesToRow.get(e)).width = n.width
                    }))
                }
                _recreateCanvas() {
                    this._canvas = (0, r.ensureNotNull)(document.createElement("canvas")), this._canvas.width = this._currentWidth * this._params.pixelRatio, this._canvas.height = this._maxRowHeight * this._actualCapacity * this._params.pixelRatio, this._ctx = (0, r.ensureNotNull)(this._canvas.getContext("2d")),
                        this._ctx.font = `${h}px ${o.CHART_FONT_FAMILY}`, this._sourcesToRow.clear(), this._rowsToSources.clear()
                }
            }
        },
        374108: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                LineToolTrianglePatternPaneView: () => p
            });
            var r = i(650151),
                n = i(86441),
                s = i(631586),
                a = i(28035),
                o = i(296266),
                l = i(383359),
                d = i(544445),
                h = i(739665),
                c = i(233330),
                u = i(623331);
            class p extends c.LineSourcePaneView {
                constructor() {
                    super(...arguments), this._trendLineRendererPoints01 = new o.TrendLineRenderer, this._trendLineRendererPoints12 = new o.TrendLineRenderer, this._trendLineRendererPoints23 = new o.TrendLineRenderer, this._intersectionRenderer = new l.TriangleRenderer, this._aLabelRenderer = new d.TextRenderer, this._bLabelRenderer = new d.TextRenderer, this._cLabelRenderer = new d.TextRenderer, this._dLabelRenderer = new d.TextRenderer, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    const [e, t, i, o] = this._points;
                    let l, d, c;
                    if (4 === this._points.length) {
                        if (Math.abs(i.x - e.x) < 1 || Math.abs(o.x - t.x) < 1) return;
                        let r = Math.min(e.x, t.x);
                        r = Math.min(r, i.x), r = Math.min(r, o.x);
                        const s = (i.y - e.y) / (i.x - e.x),
                            a = e.y + (r - e.x) * s,
                            h = (o.y - t.y) / (o.x - t.x),
                            u = t.y + (r - t.x) * h;
                        if (Math.abs(s - h) < 1e-6) return;
                        d = new n.Point(r, a), c = new n.Point(r, u);
                        const p = (t.y - e.y + (e.x * s - t.x * h)) / (s - h);
                        if (p < r) {
                            let r = Math.max(e.x, t.x);
                            r = Math.max(r, i.x), r = Math.max(r, o.x), d = new n.Point(r, e.y + (r - e.x) * s), c = new n.Point(r, t.y + (r - t.x) * h)
                        }
                        const _ = e.y + (p - e.x) * s;
                        l = new n.Point(p, _)
                    }
                    if (this._points.length < 2) return;
                    const p = this._source.properties().childs(),
                        _ = new a.CompositeRenderer,
                        g = (e, t) => ({
                            points: [e],
                            text: t,
                            color: p.textcolor.value(),
                            vertAlign: "middle",
                            horzAlign: "center",
                            font: u.CHART_FONT_FAMILY,
                            offsetX: 0,
                            offsetY: 0,
                            bold: p.bold && p.bold.value(),
                            italic: p.italic && p.italic.value(),
                            fontsize: p.fontsize.value(),
                            backgroundColor: p.color.value(),
                            backgroundRoundRect: 4
                        }),
                        f = (e, t) => ({
                            points: [e, t],
                            color: p.color.value(),
                            linewidth: p.linewidth.value(),
                            linestyle: s.LINESTYLE_SOLID,
                            extendleft: !1,
                            extendright: !1,
                            leftend: h.LineEnd.Normal,
                            rightend: h.LineEnd.Normal
                        });
                    if (this._trendLineRendererPoints01.setData(f(e, t)), _.append(this._trendLineRendererPoints01), this._points.length >= 3 && (this._trendLineRendererPoints12.setData(f(t, i)), _.append(this._trendLineRendererPoints12)), 4 === this._points.length && (this._trendLineRendererPoints23.setData(f(i, o)), _.append(this._trendLineRendererPoints23), l)) {
                        const e = {
                            points: [(0, r.ensureDefined)(d), (0, r.ensureDefined)(c), l],
                            color: p.color.value(),
                            linewidth: p.linewidth.value(),
                            backcolor: p.backgroundColor.value(),
                            fillBackground: p.fillBackground.value(),
                            transparency: p.transparency.value(),
                            linestyle: s.LINESTYLE_DOTTED
                        };
                        this._intersectionRenderer.setData(e), _.append(this._intersectionRenderer)
                    }
                    const m = g(e, "A");
                    t.y > e.y ? (m.vertAlign = "bottom", m.offsetY = 5) : (m.vertAlign = "top", m.offsetY = 5), this._aLabelRenderer.setData(m), _.append(this._aLabelRenderer);
                    const v = g(t, "B");
                    if (t.y < e.y ? (v.vertAlign = "bottom", v.offsetY = 5) : (v.vertAlign = "top", v.offsetY = 5), this._bLabelRenderer.setData(v), _.append(this._bLabelRenderer), this._points.length > 2) {
                        const e = g(i, "C");
                        i.y < t.y ? (e.vertAlign = "bottom",
                            e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._cLabelRenderer.setData(e), _.append(this._cLabelRenderer)
                    }
                    if (this._points.length > 3) {
                        const e = g(o, "D");
                        o.y < i.y ? (e.vertAlign = "bottom", e.offsetY = 5) : (e.vertAlign = "top", e.offsetY = 5), this._dLabelRenderer.setData(e), _.append(this._dLabelRenderer)
                    }
                    this.addAnchors(_), this._renderer = _
                }
            }
        },
        822038: (e, t, i) => {
            "use strict";
            var r = i(233330).LineSourcePaneView,
                n = i(28035).CompositeRenderer,
                s = i(383359).TriangleRenderer;
            t.TrianglePaneView = class extends r {
                constructor(e, t) {
                    super(e, t), this._triangleRenderer = new s, this._renderer = null
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(), this._renderer
                }
                _updateImpl() {
                    super._updateImpl(), this._renderer = null;
                    var e = {};
                    e.points = this._points, e.color = this._source.properties().color.value(), e.linewidth = this._source.properties().linewidth.value(), e.backcolor = this._source.properties().backgroundColor.value(), e.fillBackground = this._source.properties().fillBackground.value(), e.transparency = this._source.properties().transparency.value(), this._triangleRenderer.setData(e);
                    var t = new n;
                    t.append(this._triangleRenderer), this.addAnchors(t), this._renderer = t
                }
            }
        },
        865183: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                TweetPaneView: () => T
            });
            var r = i(327714),
                n = i(314967),
                s = i(650151),
                a = i(86441),
                o = i(858063),
                l = i(544445),
                d = i(878143),
                h = i(623331),
                c = i(538708),
                u = i(777754);
            const p = {
                    borderColor: n.colorsPalette["color-cold-gray-150"],
                    backColor: n.colorsPalette["color-white"],
                    usernameColor: n.colorsPalette["color-black"],
                    nameColor: n.colorsPalette["color-cold-gray-500"],
                    textColor: n.colorsPalette["color-cold-gray-900"],
                    footerText: n.colorsPalette["color-cold-gray-500"],
                    linkColor: n.colorsPalette["color-cold-gray-500"],
                    urlColor: n.colorsPalette["color-tv-blue-500"]
                },
                _ = {
                    borderColor: n.colorsPalette["color-cold-gray-800"],
                    backColor: n.colorsPalette["color-black"],
                    usernameColor: n.colorsPalette["color-cold-gray-200"],
                    nameColor: n.colorsPalette["color-cold-gray-500"],
                    textColor: n.colorsPalette["color-cold-gray-200"],
                    footerText: n.colorsPalette["color-cold-gray-500"],
                    linkColor: n.colorsPalette["color-cold-gray-500"],
                    urlColor: n.colorsPalette["color-tv-blue-700"]
                },
                g = (0, c.makeFont)(14, h.CHART_FONT_FAMILY, ""),
                f = (0, c.makeFont)(14, h.CHART_FONT_FAMILY, "", "bold"),
                m = (0, c.makeFont)(12, h.CHART_FONT_FAMILY, ""),
                v = (0, c.makeFont)(12, h.CHART_FONT_FAMILY, ""),
                x = u.t(null, void 0, i(938775));
            class w extends d.CustomUrlEventRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._precalculated = null
                }
                setData(e) {
                    this._precalculated = null, this._data = e
                }
                _hittestResultForActionArea() {
                    const e = (0, s.ensureNotNull)(this._data),
                        t = {
                            hideCrosshairLinesOnHover: !0
                        },
                        i = () => {
                            window.open(e.tweetData.tweetUrl, "_blank")
                        };
                    return t.clickHandler = i, t.tapHandler = i, new o.HitTestResult(o.HitTestResult.CUSTOM, t)
                }
                _drawContent(e, t, i) {
                    const r = i.isDark ? _ : p;
                    this._drawConnector(e, t, i, r.linkColor), this._drawMainFrame(e, t, r.borderColor, r.backColor), this._drawAvatar(e, t, i.avatarImage, 36, 16, 13), this._drawUsername(e, t, i, r), this._drawText(e, t, r), this._drawFooter(e, t, i, r)
                }
                _precalculate(e, t) {
                    e.save(), e.font = g;
                    const i = (0,
                            l.wordWrap)(t.tweetData.text, g, 320),
                        n = 14 * (i.length + 2) * 1.2 + 58 + 41,
                        s = Math.max(...i.map((t => e.measureText(t).width))) + 32,
                        a = e.measureText(x).width + 32;
                    e.font = m;
                    const o = e.measureText(t.tweetData.username).width;
                    e.font = f;
                    const d = e.measureText(t.tweetData.user).width,
                        h = Math.max(o, d) + 60 + 16;
                    e.font = v;
                    const c = e.measureText(t.formattedDate).width + 32,
                        u = Math.max(s, a, h, c);
                    this._precalculated = {
                        wrappedText: i,
                        urlTextWidth: a,
                        size: (0, r.size)({
                            width: u,
                            height: n
                        })
                    }, e.restore()
                }
                _drawUsername(e, t, i, r) {
                    const n = this._position(),
                        s = Math.round(31 * t.pixelRatio),
                        a = Math.round(.5 * (36 * t.pixelRatio - s)),
                        o = Math.round((n.x + 60) * t.pixelRatio),
                        l = Math.round((n.y + 13) * t.pixelRatio) + a;
                    e.save(), e.font = f, e.translate(o, l), e.scale(t.pixelRatio, t.pixelRatio), e.textBaseline = "top", e.fillStyle = r.usernameColor, e.fillText(i.tweetData.user, 0, 0), e.restore();
                    const d = l + Math.round(19 * t.pixelRatio);
                    e.save(), e.font = m, e.translate(o, d), e.scale(t.pixelRatio, t.pixelRatio), e.textBaseline = "top", e.fillStyle = r.nameColor, e.fillText(i.tweetData.username, 0, 0), e.restore()
                }
                _drawText(e, t, i) {
                    e.save();
                    const r = (0, s.ensureNotNull)(this._precalculated),
                        n = this._position();
                    e.font = g;
                    const o = Math.round((n.x + 16) * t.pixelRatio),
                        l = Math.round((n.y + 58) * t.pixelRatio),
                        d = n.x + 16,
                        h = n.y + 58 + 14 * (r.wrappedText.length + 1) * 1.2;
                    this._actionBox = (0, a.box)((0, a.point)(d, h), (0, a.point)(d + r.urlTextWidth, h + 16.8)), e.translate(o, l), e.scale(t.pixelRatio, t.pixelRatio), e.textBaseline = "top", e.fillStyle = i.textColor, r.wrappedText.forEach(((t, i) => {
                        const r = 14 * i * 1.2;
                        e.fillText(t, 0, r)
                    })), e.fillStyle = i.urlColor;
                    const c = 14 * (r.wrappedText.length + 1) * 1.2;
                    e.beginPath(), e.rect(0, c, r.size.width - 32, 14), e.clip(), e.fillText(x, 0, c), e.restore()
                }
                _drawFooter(e, t, i, r) {
                    const n = (0, s.ensureNotNull)(this._precalculated),
                        a = this._position();
                    e.save(), e.fillStyle = r.borderColor;
                    const o = Math.round((a.x + 16) * t.pixelRatio),
                        l = Math.round((a.y + n.size.height - 33) * t.pixelRatio),
                        d = Math.round((n.size.width - 32) * t.pixelRatio),
                        h = Math.max(1, Math.round(t.pixelRatio));
                    e.fillRect(o, l, d, h), e.font = v, e.textBaseline = "middle";
                    const c = o,
                        u = l + Math.round(16.5 * t.pixelRatio);
                    e.translate(c, u), e.scale(t.pixelRatio, t.pixelRatio), e.fillStyle = r.footerText, e.fillText(i.formattedDate, 0, 0), e.restore()
                }
            }
            var R = i(786315),
                y = i(131089);
            class T extends R.CustomUrlEventPaneView {
                constructor() {
                    super(...arguments), this._tweetRenderer = new w(null)
                }
                _fillCompositeRendrer(e, t, i, r, n) {
                    const s = {
                        point: t,
                        isDark: this._model.isDark(),
                        tweetData: e.tweetData(),
                        avatarImage: r,
                        formattedDate: n,
                        candlePoints: i,
                        backgroundColor: this._model.backgroundColor().value()
                    };
                    this._tweetRenderer.setData(s), this._renderer.append(this._tweetRenderer)
                }
                _prepareValidAvatarUrl(e) {
                    return (0, y.isTwitterProfileImageUrl)(e) ? e : null
                }
            }
        },
        565834: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                VertLinePaneView: () => u
            });
            var r = i(86441),
                n = i(28035),
                s = i(544445),
                a = i(854905),
                o = i(274131),
                l = i(623331),
                d = i(858063),
                h = i(764091);
            const c = [a.PaneCursorType.HorizontalResize];
            class u extends h.AlertableLineSourcePaneView {
                constructor(e, t, i) {
                    super(e, t), this._lineRenderer = new o.VerticalLineRenderer, this._labelRenderer = new s.TextRenderer, this._renderer = null, this._pane = i
                }
                renderer(e, t) {
                    return this._invalidated && this._updateImpl(e, t), this._renderer
                }
                _validatePriceScale() {
                    return !0
                }
                _updateImpl(e, t) {
                    var i;
                    if (super._updateImpl(), this._renderer = null, 0 === this._points.length) return;
                    const a = this._source.properties().childs(),
                        o = new n.CompositeRenderer;
                    let h, u = !0;
                    if (1 === this._points.length) {
                        const t = new r.Point(this._points[0].x, e / 2);
                        this._addAlertRenderer(o, [t])
                    }
                    if (a.showLabel.value() && a.text.value().length > 0 && this._source.model().paneForSource(this._source) === this._pane) {
                        let n = 0,
                            d = 5,
                            c = "center",
                            p = "middle";
                        const _ = this._points[0].x;
                        let g = 0;
                        switch (a.vertLabelsAlign.value()) {
                            case "top":
                                g = e;
                                break;
                            case "middle":
                                g = e / 2;
                                break;
                            case "bottom":
                                g = 0
                        }
                        if ("horizontal" === a.textOrientation.value()) {
                            switch (a.horzLabelsAlign.value()) {
                                case "left":
                                    c = "right";
                                    break;
                                case "right":
                                    c = "left";
                                    break;
                                case "center":
                                    c = "center"
                            }
                            switch (a.vertLabelsAlign.value()) {
                                case "top":
                                    p = "bottom";
                                    break;
                                case "middle":
                                    p = "middle";
                                    break;
                                case "bottom":
                                    p = "top"
                            }
                        } else {
                            switch (n = -Math.PI / 2, d = 0, a.horzLabelsAlign.value()) {
                                case "left":
                                    p = "bottom";
                                    break;
                                case "right":
                                    p = "top";
                                    break;
                                case "center":
                                    p = "middle"
                            }
                            switch (a.vertLabelsAlign.value()) {
                                case "top":
                                    c = "left";
                                    break;
                                case "middle":
                                    c = "center";
                                    break;
                                case "bottom":
                                    c = "right"
                            }
                        }
                        const f = {
                            points: [new r.Point(_, g)],
                            text: a.text.value(),
                            color: a.textcolor.value(),
                            vertAlign: p,
                            horzAlign: c,
                            font: l.CHART_FONT_FAMILY,
                            offsetX: d,
                            offsetY: 0,
                            bold: a.bold.value(),
                            italic: a.italic.value(),
                            fontsize: a.fontsize.value(),
                            forceTextAlign: !0,
                            angle: n
                        };
                        this._labelRenderer.setData(f), o.append(this._labelRenderer), this._needLabelExclusionPath(this._labelRenderer) && (h = null !== (i = (0, s.getTextBoundaries)(this._labelRenderer, t, e)) && void 0 !== i ? i : void 0), u = this._labelRenderer.isOutOfScreen(t, e)
                    }
                    const p = {
                            x: this._points[0].x,
                            color: a.linecolor.value(),
                            linewidth: a.linewidth.value(),
                            linestyle: a.linestyle.value(),
                            excludeBoundaries: h
                        },
                        _ = p.linewidth / 2 + 1;
                    if (u = u && (p.x < -_ || p.x > t + _), this._lineRenderer.setData(p), this._lineRenderer.setHitTest(new d.HitTestResult(d.HitTestResult.MOVEPOINT, {
                            snappingIndex: this._source.points()[0].index
                        })), o.append(this._lineRenderer), !u) {
                        if (1 === this._points.length) {
                            const t = new r.Point(this._points[0].x, e / 2);
                            t.data = 0, t.square = !0, t.snappingIndex = this._source.points()[0].index, o.append(this.createLineAnchor({
                                points: [t],
                                pointsCursorType: c
                            }, 0))
                        }
                        this._renderer = o
                    }
                }
                _needLabelExclusionPath(e) {
                    const t = this._source.properties().childs(),
                        i = "horizontal" === t.textOrientation.value(),
                        r = t.text.value();
                    if (i) return "" !== r.trim();
                    if ("center" !== t.horzLabelsAlign.value()) return !1;
                    const n = e.getLinesInfo().lines;
                    if ("" === n[n.length - 1] && n.pop(), n.length % 2 == 0) return !1;
                    if ("" === n[Math.floor(n.length / 2)].trim()) return !1;
                    return !0
                }
            }
        },
        396798: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererCachedImage: () => a
            });
            var r = i(86441),
                n = i(934026),
                s = i(858063);
            class a {
                constructor(e, t) {
                    this._cacheRect = null, this._targetRect = null, this._cacheProvider = e, this._index = t
                }
                draw(e, t) {
                    const i = this._cacheProvider.getCacheRects(t, this._index);
                    if (null === i) return this._cacheRect = null, void(this._targetRect = null);
                    if (this._cacheRect = i.cacheRect, this._targetRect = i.targetRect,
                        0 === this._cacheRect.width || 0 === this._cacheRect.height || 0 === this._targetRect.width || 0 === this._targetRect.height) return;
                    e.save(), e.setTransform(1, 0, 0, 1, 0, 0);
                    const r = t.pixelRatio,
                        n = this._cacheProvider.getCacheCanvas(t);
                    e.drawImage(n, Math.round(this._cacheRect.left * r), Math.round(this._cacheRect.top * r), this._cacheRect.width * r, this._cacheRect.height * r, Math.round(this._targetRect.left * r), Math.round(this._targetRect.top * r), this._targetRect.width * r, this._targetRect.height * r), e.restore()
                }
                hitTest(e) {
                    if (null === this._targetRect) return null;
                    const t = new r.Point(this._targetRect.left, this._targetRect.top),
                        i = t.add(new r.Point(this._targetRect.width, this._targetRect.height));
                    return (0, n.pointInBox)(e, (0, r.box)(t, i)) ? new s.HitTestResult(s.HitTestResult.REGULAR) : null
                }
            }
        },
        737019: (e, t, i) => {
            "use strict";
            i.d(t, {
                ArcWedgeRenderer: () => a
            });
            var r = i(858063),
                n = i(114123),
                s = i(904244);
            class a extends s.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._hitTest = new r.HitTestResult(r.HitTestResult.MOVEPOINT), this._backHitTest = new r.HitTestResult(r.HitTestResult.MOVEPOINT_BACKGROUND)
                }
                setData(e) {
                    this._data = e
                }
                setHitTest(e) {
                    this._hitTest = e
                }
                hitTest(e) {
                    if (null === this._data) return null;
                    const t = e.subtract(this._data.center),
                        i = t.length();
                    if (Math.abs(i - this._data.radius) <= 4) {
                        const t = e.subtract(this._data.p1).length(),
                            i = e.subtract(this._data.p2).length();
                        if (Math.max(t, i) <= this._data.p1.subtract(this._data.p2).length()) return this._hitTest
                    }
                    if (this._data.fillBackground && i <= this._data.radius) {
                        const e = this._data.p1.subtract(this._data.center).normalized(),
                            i = this._data.p2.subtract(this._data.center).normalized(),
                            r = t.normalized(),
                            n = e.dotProduct(i),
                            s = r.dotProduct(e),
                            a = r.dotProduct(i);
                        if (s >= n && a >= n) return this._backHitTest
                    }
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context;
                    if (t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, t.beginPath(), t.arc(this._data.center.x, this._data.center.y, this._data.radius, this._data.edge1, this._data.edge2, !0), t.stroke(), this._data.fillBackground) {
                        if (t.arc(this._data.center.x, this._data.center.y, this._data.prevRadius, this._data.edge2, this._data.edge1, !1), this._data.gradient) {
                            const e = t.createRadialGradient(this._data.center.x, this._data.center.y, this._data.prevRadius, this._data.center.x, this._data.center.y, this._data.radius);
                            e.addColorStop(0, (0, n.generateColor)(this._data.color1, this._data.transparency)), e.addColorStop(1, (0, n.generateColor)(this._data.color2, this._data.transparency)), t.fillStyle = e
                        } else t.fillStyle = (0, n.generateColor)(this._data.color, this._data.transparency, !0);
                        t.fill()
                    }
                }
            }
        },
        269571: (e, t, i) => {
            "use strict";
            i.d(t, {
                quadroBezierHitTest: () => n,
                cubicBezierHitTest: () => s,
                extendQuadroBezier: () => a
            });
            var r = i(204652);

            function n(e, t, i, n, s) {
                const a = i.subtract(e).length() + i.subtract(t).length(),
                    o = Math.max(3 / a, .02);
                let l;
                for (let a = 0;; a += o) {
                    a > 1 && (a = 1);
                    const o = e.scaled((1 - a) * (1 - a)),
                        d = i.scaled(2 * a * (1 - a)),
                        h = t.scaled(a * a),
                        c = o.add(d).add(h);
                    if (void 0 !== l) {
                        if ((0, r.distanceToSegment)(c, l, n).distance < s) return !0
                    } else if (c.subtract(n).length() < s) return !0;
                    if (l = c, 1 === a) break
                }
                return !1
            }

            function s(e, t, i, n, s, a) {
                const o = i.subtract(e).length() + n.subtract(i).length() + t.subtract(n).length(),
                    l = Math.max(3 / o, .02);
                let d;
                for (let o = 0;; o += l) {
                    o > 1 && (o = 1);
                    const l = e.scaled((1 - o) * (1 - o) * (1 - o)),
                        h = i.scaled(3 * (1 - o) * (1 - o) * o),
                        c = n.scaled(3 * (1 - o) * o * o),
                        u = t.scaled(o * o * o),
                        p = l.add(h).add(c).add(u);
                    if (void 0 !== d) {
                        if ((0, r.distanceToSegment)(p, d, s).distance < a) return !0
                    } else if (p.subtract(s).length() < a) return !0;
                    if (d = p, 1 === o) break
                }
                return !1
            }

            function a(e, t, i, r, n) {
                const s = i.subtract(e).length() + i.subtract(t).length();
                if (!s) return [];
                const a = function(e, t, i, r, n) {
                    const s = [],
                        a = o(e.y, t.y, i.y, 0).concat(o(e.y, t.y, i.y, n));
                    for (let n = 0; n < a.length; n++) {
                        const o = l(e.x, t.x, i.x, a[n]);
                        o >= 0 && o <= r && s.push(a[n])
                    }
                    const d = o(e.x, t.x, i.x, 0).concat(o(e.x, t.x, i.x, r));
                    for (let r = 0; r < d.length; r++) {
                        const a = l(e.y, t.y, i.y, d[r]);
                        a >= 0 && a <= n && s.push(d[r])
                    }
                    return s
                }(e, t, i, r, n).filter((e => e > 1)).sort(((e, t) => e - t));
                t.x >= 0 && t.x <= r && t.y >= 0 && t.y <= n && a.unshift(1);
                const d = 3 / s,
                    h = [];
                for (let r = 0; r < a.length - 1; r += 2) {
                    let n = d,
                        s = a[r],
                        o = a[r + 1] + n;
                    const l = [];
                    for (; s <= o;) {
                        const r = e.scaled((1 - s) * (1 - s)),
                            a = i.scaled(2 * s * (1 - s)),
                            d = t.scaled(s * s),
                            h = r.add(a).add(d);
                        if (l.length > 0) {
                            l[l.length - 1].subtract(h).length() < 2 && (o += n, n *= 2)
                        }
                        l.push(h), s += n
                    }
                    l.length > 0 && h.push(l)
                }
                return h
            }

            function o(e, t, i, r) {
                const n = [],
                    s = e - 2 * i + t,
                    a = 2 * i - 2 * e,
                    o = e - r;
                if (Math.abs(s) > 1e-8) {
                    const e = a * a - 4 * s * o;
                    e >= 0 && (n.push((-a + Math.sqrt(e)) / (2 * s)), n.push((-a - Math.sqrt(e)) / (2 * s)))
                } else n.push(-o / a);
                return n
            }

            function l(e, t, i, r) {
                return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * i + r * r * t
            }
        },
        756740: (e, t, i) => {
            "use strict";
            i.d(t, {
                BitmapCoordinatesPaneRenderer: () => n
            });
            var r = i(327714);
            class n {
                draw(e, t) {
                    new r.CanvasRenderingTarget2D(e, (0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, r.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useBitmapCoordinateSpace((e => this._drawImpl(e)))
                }
                drawBackground(e, t) {
                    new r.CanvasRenderingTarget2D(e, (0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, r.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useBitmapCoordinateSpace((e => this._drawBackgroundImpl(e)))
                }
                _drawBackgroundImpl(e) {}
            }
        },
        826796: (e, t, i) => {
            "use strict";
            i.d(t, {
                ChannelRenderer: () => u
            });
            var r = i(327714),
                n = i(650151),
                s = i(86441),
                a = i(934026),
                o = i(204652),
                l = i(5531),
                d = i(858063),
                h = i(114123),
                c = i(904244);
            class u extends c.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null === this._data || !this._data.hittestOnBackground) return null;
                    const i = this._visiblePolygon((0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }));
                    return null !== i && (0, a.pointInPolygon)(e, i) ? new d.HitTestResult(d.HitTestResult.MOVEPOINT_BACKGROUND) : null
                }
                _drawImpl(e) {
                    if (null === this._data) return;
                    const t = e.context,
                        i = this._visiblePolygon(e.mediaSize);
                    if (null !== i) {
                        t.beginPath(), t.moveTo(i[0].x, i[0].y);
                        for (let e = 1; e < i.length; e++) t.lineTo(i[e].x, i[e].y);
                        t.fillStyle = (0, h.generateColor)(this._data.color, this._data.transparency, !0), t.fill()
                    }
                }
                _visiblePolygon(e) {
                    const t = (0, n.ensureNotNull)(this._data),
                        i = t.p1,
                        r = t.p2,
                        a = t.p3,
                        l = t.p4;
                    if ((0, s.equalPoints)(i, r) || (0, s.equalPoints)(a, l) || (0, o.distanceToLine)(i, r, a).distance < 1e-6 && (0,
                            o.distanceToLine)(i, r, l).distance < 1e-6) return null;
                    if (e.width <= 0 || e.height <= 0) return null;
                    let d = [new s.Point(0, 0), new s.Point(e.width, 0), new s.Point(e.width, e.height), new s.Point(0, e.height)];
                    return d = p(d, i, r, [l, a]), d = p(d, l, a, [i, r]), (0, s.equalPoints)(a, i) || t.extendLeft || (d = p(d, a, i, [r, l])), d
                }
            }

            function p(e, t, i, r) {
                const n = (0, s.equalPoints)(i, r[0]) ? (0, s.equalPoints)(i, r[1]) ? null : r[1] : r[0];
                return null !== e && null !== n ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((0, s.lineThroughPoints)(t, i), n)) : null
            }
        },
        831699: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererClockIcon: () => a
            });
            var r = i(858063),
                n = i(904244);
            const s = Math.sqrt(3);
            class a extends n.MediaCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this.update(e)
                }
                update(e) {
                    var t;
                    const i = e.points[0],
                        r = null !== (t = e.points[1]) && void 0 !== t ? t : e.points[0],
                        n = i.x - r.x,
                        a = i.y - r.y;
                    let o = e.horzMargin;
                    void 0 === o && (o = n > 0 ? 10 : -25), this._x = i.x + o, this._y = i.y + (0 !== a && Math.abs(n) * s <= Math.abs(a) ? -7 : a > 0 ? -25 : 11), this._color = e.color
                }
                hitTest(e) {
                    return e.x < this._x || e.x > this._x + 16 || e.y < this._y || e.y > this._y + 16 ? null : new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                _drawImpl(e) {
                    const t = e.context;
                    t.translate(this._x - .5, this._y - .5), t.beginPath(), t.arc(8, 9, 6, 0, 2 * Math.PI, !0), t.closePath(), t.moveTo(8, 9), t.arc(8.5, 5.5, .5, Math.PI, 0), t.lineTo(9, 10), t.arc(5.5, 9.5, .5, .5 * Math.PI, 1.5 * Math.PI), t.closePath(), t.moveTo(1.71, 5.93), t.bezierCurveTo(-.61, 2.83, 3.86, -.76, 6.39, 2.18), t.bezierCurveTo(4.35, 2.67, 2.63, 4.04, 1.71, 5.93), t.closePath(), t.moveTo(14.29, 5.93), t.bezierCurveTo(16.61, 2.83, 12.14, -.76, 9.61, 2.18), t.bezierCurveTo(11.65, 2.67, 13.37, 4.04, 14.29, 5.93), t.fillStyle = this._color, t.fill()
                }
            }
        },
        28035: (e, t, i) => {
            "use strict";
            i.d(t, {
                CompositeRenderer: () => r
            });
            class r {
                constructor() {
                    this._renderers = [], this._globalAlpha = 1
                }
                setGlobalAlpha(e) {
                    this._globalAlpha = e
                }
                append(e) {
                    this._renderers.push(e)
                }
                insert(e, t) {
                    this._renderers.splice(t, 0, e)
                }
                clear() {
                    this._renderers.length = 0
                }
                isEmpty() {
                    return 0 === this._renderers.length
                }
                draw(e, t) {
                    for (let i = 0; i < this._renderers.length; i++) e.save(), e.globalAlpha = this._globalAlpha, this._renderers[i].draw(e, t), e.restore()
                }
                drawBackground(e, t) {
                    e.save(), e.globalAlpha = this._globalAlpha;
                    for (let i = 0; i < this._renderers.length; i++) {
                        const r = this._renderers[i];
                        r.drawBackground && r.drawBackground(e, t)
                    }
                    e.restore()
                }
                hitTest(e, t) {
                    let i = null;
                    for (let r = this._renderers.length - 1; r >= 0; r--) {
                        const n = this._renderers[r].hitTest(e, t);
                        null !== n && (null === i || n.result() > i.result()) && (i = n)
                    }
                    return i
                }
                doesIntersectWithBox(e) {
                    return this._renderers.some((t => !!t.doesIntersectWithBox && t.doesIntersectWithBox(e)))
                }
            }
        },
        746279: (e, t, i) => {
            "use strict";
            i.d(t, {
                DisjointChannelRenderer: () => _
            });
            var r = i(327714),
                n = i(650151),
                s = i(86441),
                a = i(934026),
                o = i(204652),
                l = i(5531),
                d = i(631586),
                h = i(858063),
                c = i(478037),
                u = i(114123),
                p = i(904244);
            class _ {
                constructor() {
                    this._parallelChannelRenderer = new c.ParallelChannelRenderer, this._disjointChannelIntersectionRenderer = new g, this._selectedRenderer = this._disjointChannelIntersectionRenderer
                }
                setData(e) {
                    if (e.points.length < 4) return;
                    const [t, i, r, n] = e.points;
                    if ((0, s.equalPoints)(t, i) || (0, s.equalPoints)(r, n) || (0,
                            o.distanceToLine)(t, i, r).distance < 1e-6 && (0, o.distanceToLine)(t, i, n).distance < 1e-6) this._selectedRenderer = null;
                    else {
                        null !== (0, l.intersectLines)((0, s.lineThroughPoints)(t, i), (0, s.lineThroughPoints)(r, n)) ? (this._disjointChannelIntersectionRenderer.setData(e), this._selectedRenderer = this._disjointChannelIntersectionRenderer) : (this._parallelChannelRenderer.setData({
                            extendleft: e.extendleft,
                            extendright: e.extendright,
                            points: [t, i, n, r],
                            fillBackground: !0,
                            backcolor: e.backcolor,
                            transparency: e.transparency,
                            color: "rgba(0,0,0,0)",
                            linestyle: d.LINESTYLE_SOLID,
                            linewidth: 0,
                            showMidline: !1,
                            hittestOnBackground: e.hittestOnBackground
                        }), this._selectedRenderer = this._parallelChannelRenderer)
                    }
                }
                hitTest(e, t) {
                    return null !== this._selectedRenderer ? this._selectedRenderer.hitTest(e, t) : null
                }
                draw(e, t) {
                    null !== this._selectedRenderer && this._selectedRenderer.draw(e, t)
                }
            }
            class g extends p.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null === this._data || !this._data.hittestOnBackground) return null;
                    for (const i of this._visiblePolygons((0, r.size)({
                            width: t.cssWidth,
                            height: t.cssHeight
                        })))
                        if ((0, a.pointInPolygon)(e, i)) return new h.HitTestResult(h.HitTestResult.MOVEPOINT_BACKGROUND);
                    return null
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 4) return;
                    const t = e.context;
                    t.fillStyle = (0, u.generateColor)(this._data.backcolor, this._data.transparency);
                    for (const i of this._visiblePolygons(e.mediaSize)) {
                        t.beginPath(), t.moveTo(i[0].x, i[0].y);
                        for (let e = 1; e < i.length; e++) t.lineTo(i[e].x, i[e].y);
                        t.fill()
                    }
                }
                _visiblePolygons(e) {
                    const t = (0, n.ensureNotNull)(this._data),
                        [i, r, a, o] = t.points;
                    if (e.width <= 0 || e.height <= 0) return [];
                    const d = (0, l.intersectLines)((0, s.lineThroughPoints)(i, r), (0, s.lineThroughPoints)(a, o));
                    if (null === d) return [];
                    const h = [new s.Point(0, 0), new s.Point(e.width, 0), new s.Point(e.width, e.height), new s.Point(0, e.height)],
                        c = []; {
                        let e = h;
                        const n = i.subtract(r).add(d),
                            s = o.subtract(a).add(d);
                        e = f(e, d, n, [s, s]), e = v(e, t), e = f(e, s, d, [n, n]), null !== e && c.push(e)
                    } {
                        let e = h;
                        const n = r.subtract(i).add(d),
                            s = a.subtract(o).add(d);
                        e = f(e, d, n, [s, s]), e = v(e, t), e = f(e, s, d, [n, n]), null !== e && c.push(e)
                    }
                    return c
                }
            }

            function f(e, t, i, r) {
                const n = (0, s.equalPoints)(i, r[0]) ? (0, s.equalPoints)(i, r[1]) ? null : r[1] : r[0];
                return null !== e && null !== n ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((0, s.lineThroughPoints)(t, i), n)) : null
            }

            function m(e, t, i) {
                return null !== e ? (0, l.intersectPolygonAndHalfplane)(e, (0, s.halfplaneThroughPoint)((r = t, (0, s.line)(1, 0, -r)), new s.Point(i, 0))) : null;
                var r
            }

            function v(e, t) {
                const [i, r] = t.points;
                return t.extendleft || (e = m(e, i.x, r.x)), t.extendright || (e = m(e, r.x, i.x)), e
            }
        },
        667142: (e, t, i) => {
            "use strict";
            i.d(t, {
                EllipseRendererSimple: () => d
            });
            var r = i(858063),
                n = i(43329),
                s = i(86441),
                a = i(114123),
                o = i(904244),
                l = i(914679);
            class d extends o.MediaCoordinatesPaneRenderer {
                constructor(e, t, i) {
                    super(), this._data = e, this._hitTest = t || new r.HitTestResult(r.HitTestResult.MOVEPOINT), this._backgroundHitTest = i || new r.HitTestResult(r.HitTestResult.MOVEPOINT_BACKGROUND)
                }
                hitTest(e) {
                    if (this._data.points.length < 2) return null;
                    const t = this._data.points[0],
                        i = this._data.points[1],
                        r = .5 * Math.abs(t.x - i.x),
                        a = Math.abs(t.x - i.x),
                        o = Math.abs(t.y - i.y),
                        l = t.add(i).scaled(.5);
                    let d = e.subtract(l);
                    if (a < 1 || o < 1) return null;
                    const h = (i.y - t.y) / (i.x - t.x);
                    d = new s.Point(d.x, d.y / h);
                    let c = d.x * d.x + d.y * d.y - r * r;
                    return c = (0, n.sign)(c) * Math.sqrt(Math.abs(c / r)), Math.abs(c) < 3 ? this._hitTest : this._data.fillBackground && !this._data.noHitTestOnBackground && c < 3 ? this._backgroundHitTest : null
                }
                _drawImpl(e) {
                    const t = e.context;
                    t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = this._data.linewidth, void 0 !== this._data.linestyle && (0, l.setLineStyle)(t, this._data.linestyle);
                    const i = this._data.points[0],
                        r = this._data.points[1],
                        n = Math.abs(i.x - r.x),
                        s = Math.abs(i.y - r.y),
                        o = i.add(r).scaled(.5);
                    if (n < 1 || s < 1) return;
                    let d = 0;
                    if (this._data.wholePoints) {
                        const e = this._data.wholePoints[0],
                            t = this._data.wholePoints[1];
                        d = Math.abs(e.x - t.x)
                    }
                    t.save(), t.translate(o.x, o.y), t.scale(1, s / n), t.beginPath(), t.arc(0, 0, n / 2, 0, 2 * Math.PI, !1), t.restore(), t.stroke(), this._data.fillBackground && (this._data.wholePoints && (t.translate(o.x, o.y), t.scale(1, s / n), t.arc(0, 0, d / 2, 0, 2 * Math.PI, !0)), t.fillStyle = (0, a.generateColor)(this._data.backcolor, this._data.transparency, !0), t.fill())
                }
            }
        },
        803936: (e, t, i) => {
            "use strict";
            i.d(t, {
                HorizontalLineRenderer: () => l
            });
            var r = i(858063),
                n = i(914679),
                s = i(837291),
                a = i(756740),
                o = i(741341);
            class l extends a.BitmapCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null, this._hitTest = new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                setData(e) {
                    this._data = e
                }
                setHitTest(e) {
                    this._hitTest = e
                }
                hitTest(e) {
                    if (null === this._data || !1 === this._data.visible || null === this._hitTest) return null;
                    const t = (0, s.interactionTolerance)().line,
                        i = Math.abs(e.y - this._data.y) <= t + this._data.linewidth / 2,
                        r = void 0 === this._data.left || this._data.left - e.x <= t,
                        n = void 0 === this._data.right || e.x - this._data.right <= t;
                    return i && r && n ? this._hitTest : null
                }
                _drawImpl(e) {
                    if (null === this._data || !1 === this._data.visible) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: r,
                        mediaSize: s
                    } = e;
                    if (this._data.y < -this._data.linewidth / 2 || this._data.y > s.height + this._data.linewidth / 2) return;
                    t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data.linewidth * i)), void 0 !== this._data.linestyle && (0, n.setLineStyle)(t, this._data.linestyle);
                    const a = void 0 !== this._data.left ? Math.max(this._data.left, 0) : 0,
                        l = void 0 !== this._data.right ? Math.min(this._data.right, s.width) : s.width,
                        d = Math.round(this._data.y * r),
                        h = Math.round(a * i),
                        c = Math.round(l * i),
                        u = this._data.excludeBoundaries;
                    void 0 !== u && (0, o.addExclusionAreaByScope)(e, u), (0, n.drawHorizontalLine)(t, d, h, c)
                }
            }
        },
        112824: (e, t, i) => {
            "use strict";

            function r(e, t) {
                return e.pixelRatio === t.pixelRatio
            }
            i.d(t, {
                areEqualPaneRenderParams: () => r
            })
        },
        855242: (e, t, i) => {
            "use strict";
            i.d(t, {
                LineAnchorPointImpl: () => u,
                LineAnchorRenderer: () => v
            });
            var r = i(86441),
                n = i(934026),
                s = i(650151),
                a = i(914679),
                o = i(758337),
                l = i(858063),
                d = i(854905),
                h = i(837291),
                c = i(756740);
            class u extends r.Point {
                constructor(e, t, i, r) {
                    super(e, t), this.data = i, this.square = r
                }
            }

            function p(e, t, i, r) {
                const n = i + r / 2;
                (0,
                    a.drawRoundRect)(e, t.x - n, t.y - n, 2 * n, 2 * n, (i + r) / 2), e.closePath(), e.lineWidth = r
            }

            function _(e, t, i, r) {
                e.globalAlpha = .2, p(e, t, i, r), e.stroke(), e.globalAlpha = 1
            }

            function g(e, t, i, r) {
                p(e, t, i - r, r), e.fill(), e.stroke()
            }

            function f(e, t, i, r) {
                e.globalAlpha = .2, e.beginPath(), e.arc(t.x, t.y, i + r / 2, 0, 2 * Math.PI, !0), e.closePath(), e.lineWidth = r, e.stroke(), e.globalAlpha = 1
            }

            function m(e, t, i, r) {
                e.beginPath(), e.arc(t.x, t.y, i - r / 2, 0, 2 * Math.PI, !0), e.closePath(), e.lineWidth = r, e.fill(), e.stroke()
            }
            class v extends c.BitmapCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = null != e ? e : null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    var t;
                    if (null === this._data || this._data.disableInteractions) return null;
                    const {
                        radius: i,
                        points: r,
                        pointsCursorType: n,
                        hittestResult: s
                    } = this._data, a = (0, h.interactionTolerance)().anchor;
                    for (let o = 0; o < r.length; ++o) {
                        const h = r[o];
                        if (h.subtract(e).length() <= i + a) return new l.HitTestResult(Array.isArray(s) ? s[o] : s, {
                            pointIndex: h.data,
                            cursorType: null !== (t = null == n ? void 0 : n[o]) && void 0 !== t ? t : d.PaneCursorType.Default,
                            activeItem: h.activeItem,
                            snappingPrice: h.snappingPrice,
                            snappingIndex: h.snappingIndex
                        })
                    }
                    return null
                }
                doesIntersectWithBox(e) {
                    return null !== this._data && this._data.points.some((t => (0, n.pointInBox)(t, e)))
                }
                _drawImpl(e) {
                    if (null === this._data || !this._data.visible) return;
                    const t = [],
                        i = [],
                        r = [],
                        n = [];
                    for (let e = 0; e < this._data.points.length; ++e) {
                        const s = this._data.points[e],
                            a = this._data.backgroundColors[e];
                        s.square ? (t.push(s), i.push(a)) : (r.push(s), n.push(a))
                    }
                    t.length && this._drawPoints(e, t, i, g, _), r.length && this._drawPoints(e, r, n, m, f)
                }
                _drawPoints(e, t, i, r, n) {
                    const {
                        context: a,
                        horizontalPixelRatio: l,
                        verticalPixelRatio: d
                    } = e, c = (0, s.ensureNotNull)(this._data), p = c.currentPoint, _ = c.radius;
                    let g = Math.max(1, Math.floor((c.strokeWidth || 2) * l));
                    c.selected && (g += Math.max(1, Math.floor(l / 2)));
                    const f = Math.max(1, Math.floor(l));
                    let m = Math.round(_ * l * 2);
                    m % 2 != f % 2 && (m += 1);
                    const v = f % 2 / 2,
                        x = (0, h.interactionTolerance)().anchor;
                    a.strokeStyle = c.color;
                    for (let e = 0; e < t.length; ++e) {
                        const s = t[e];
                        a.fillStyle = i[e];
                        if (!((0, o.isInteger)(s.data) && c.linePointBeingEdited === s.data)) {
                            if (r(a, new u(Math.round(s.x * l) + v, Math.round(s.y * d) + v, s.data, s.square), m / 2, g), !c.disableInteractions) {
                                if (s.subtract(p).length() <= _ + x) {
                                    const e = Math.max(1, Math.floor(c.selectedStrokeWidth * l));
                                    let t = Math.round(_ * l * 2);
                                    t % 2 != f % 2 && (t += 1);
                                    n(a, new u(Math.round(s.x * l) + v, Math.round(s.y * d) + v, s.data, s.square), t / 2, e)
                                }
                            }
                        }
                    }
                }
            }
        },
        943498: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererLine: () => d
            });
            var r = i(86441),
                n = i(204652),
                s = i(858063),
                a = i(837291),
                o = i(914679),
                l = i(756740);
            class d extends l.BitmapCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e
                }
                hitTest(e) {
                    var t, i, o, l;
                    const d = (0, a.interactionTolerance)().series + this._data.lineWidth / 2;
                    let h = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        c = (null !== (l = null === (o = this._data.visibleItemsRange) || void 0 === o ? void 0 : o.endItemIndex) && void 0 !== l ? l : this._data.items.length) - 1;
                    for (; c - h > 2;) {
                        const t = Math.round((c + h) / 2);
                        this._data.items[t].x <= e.x ? h = t : c = t
                    }
                    h = Math.max(1, h - 1), c = Math.min(this._data.items.length - 1, c + 1);
                    for (let t = h; t <= c; ++t) {
                        const i = this._data.items[t - 1],
                            a = this._data.items[t],
                            o = i.x,
                            l = a.x;
                        if ((0, n.distanceToSegment)(new r.Point(o, i.y), new r.Point(l, a.y), new r.Point(e.x, e.y)).distance <= d) return this._data.hittest ? this._data.hittest : new s.HitTestResult(s.HitTestResult.REGULAR)
                    }
                    return null
                }
                _drawImpl(e) {
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: r
                    } = e;
                    t.scale(i, r), t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = this._data.lineColor, t.fillStyle = this._data.lineColor, t.lineWidth = this._data.lineWidth, (0, o.setLineStyle)(t, this._data.lineStyle), (0, a.setValidLineStyle)(t, this._data.lineStyle), this._data.simpleMode ? this._drawSimpleMode(t, i, r) : this._drawLines(t)
                }
                _drawSimpleMode(e, t, i) {
                    var r, n, s, a;
                    if (e.beginPath(), this._walkLine(e, this._data.items, !1, NaN), e.stroke(), this._data.withMarkers) {
                        e.scale(1 / t, 1 / i);
                        const o = Math.max(1, Math.floor(t)) % 2 / 2,
                            l = (this._data.lineWidth + 2) * i + o,
                            d = 2 * Math.PI;
                        e.beginPath();
                        const h = null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.startItemIndex) && void 0 !== n ? n : 0;
                        for (let r = (null !== (a = null === (s = this._data.visibleItemsRange) || void 0 === s ? void 0 : s.endItemIndex) && void 0 !== a ? a : this._data.items.length) - 1 + 1; r-- >= h;) {
                            const n = this._data.items[r];
                            if (n) {
                                const r = Math.round(n.x * t) + o,
                                    s = n.y * i;
                                e.moveTo(r, s), e.arc(r, s, l, 0, d)
                            }
                        }
                        e.fill()
                    }
                }
                _walkLine(e, t, i, r, n) {
                    var s, o, l, d;
                    if (!t) return;
                    const h = .25 * this._data.barSpacing;
                    let c, u, p, _, g;
                    const f = a.coordinateIsValid,
                        m = n ? 0 : null !== (o = null === (s = this._data.visibleItemsRange) || void 0 === s ? void 0 : s.startItemIndex) && void 0 !== o ? o : 0,
                        v = n ? t.length - 1 : Math.min((null !== (d = null === (l = this._data.visibleItemsRange) || void 0 === l ? void 0 : l.endItemIndex) && void 0 !== d ? d : t.length) - 1, t.length - 1);
                    for (let e = m; e <= v; e++) {
                        const i = t[e];
                        if (f(i.y)) {
                            u = i, c = e;
                            break
                        }
                    }
                    if (void 0 !== c && void 0 !== u)
                        for (let n = c; n <= v; n++) {
                            _ = t[n], g = t[n + 1] || {};
                            const s = Math.round(_.x);
                            if (f(_.y))
                                if (p && f(p.y)) e.lineTo(s, _.y), i && !f(g.y) && e.lineTo(s, r);
                                else if (g && f(g.y)) i ? (n !== c && e.lineTo(s, r), e.lineTo(s, _.y)) : e.moveTo(s, _.y);
                            else if (i) {
                                if (0 === n) continue;
                                n !== c && e.lineTo(s - h, r), e.lineTo(s - h, _.y), e.lineTo(s + h, _.y), e.lineTo(s + h, r)
                            } else e.moveTo(s - h, _.y), e.lineTo(s + h, _.y);
                            p = _
                        }
                }
                _drawLines(e) {
                    var t, i, r, n;
                    if (!this._data.items.length) return;
                    let s, o, l;
                    const d = .25 * this._data.barSpacing,
                        h = a.coordinateIsValid;
                    e.beginPath();
                    const c = null !== (i = null === (t = this._data.visibleItemsRange) || void 0 === t ? void 0 : t.startItemIndex) && void 0 !== i ? i : 0,
                        u = (null !== (n = null === (r = this._data.visibleItemsRange) || void 0 === r ? void 0 : r.endItemIndex) && void 0 !== n ? n : this._data.items.length) - 1,
                        p = this._data.items[c];
                    p && e.moveTo(p.x, p.y);
                    let _, g = e.strokeStyle,
                        f = e.lineWidth;
                    for (let t = c + 1; t <= u; ++t) {
                        let i, r, n;
                        s = this._data.items[t - 1], o = this._data.items[t], l = this._data.items[t + 1], o.style && !this._data.forceLineColor ? (i = o.style.color, r = o.style.width, n = o.style.style) : (i = this._data.lineColor, r = this._data.lineWidth, n = this._data.lineStyle), this._data.ignorePaletteLineWidth && (r = this._data.lineWidth);
                        (i !== g || r !== f || n !== _) && (g = i, f = r, _ = n, e.stroke(), e.beginPath(), e.strokeStyle = i, e.lineWidth = r, (0, a.setValidLineStyle)(e, n), e.moveTo(s.x, s.y)), m = s, x = l,
                            h((v = o).y) && (h(m.y) ? e.lineTo(v.x, v.y) : x && h(x.y) ? e.moveTo(v.x, v.y) : (e.moveTo(v.x - d, v.y), e.lineTo(v.x + d, v.y)))
                    }
                    var m, v, x;
                    e.stroke()
                }
            }
        },
        904244: (e, t, i) => {
            "use strict";
            i.d(t, {
                MediaCoordinatesPaneRenderer: () => n
            });
            var r = i(327714);
            class n {
                draw(e, t) {
                    new r.CanvasRenderingTarget2D(e, (0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, r.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useMediaCoordinateSpace((e => this._drawImpl(e)))
                }
                drawBackground(e, t) {
                    new r.CanvasRenderingTarget2D(e, (0, r.size)({
                        width: t.cssWidth,
                        height: t.cssHeight
                    }), (0, r.size)({
                        width: t.physicalWidth,
                        height: t.physicalHeight
                    })).useMediaCoordinateSpace((e => this._drawBackgroundImpl(e)))
                }
                _drawBackgroundImpl(e) {}
            }
        },
        603823: (e, t, i) => {
            "use strict";
            i.d(t, {
                RectangleRenderer: () => u
            });
            var r = i(650151),
                n = i(86441),
                s = i(934026),
                a = i(204652),
                o = i(114123),
                l = i(631586),
                d = i(858063),
                h = i(914679),
                c = i(756740);
            class u extends c.BitmapCoordinatesPaneRenderer {
                constructor(e, t, i) {
                    super(), this._data = null, this._hitTestResult = e || new d.HitTestResult(d.HitTestResult.MOVEPOINT), this._backHitTestResult = t || new d.HitTestResult(d.HitTestResult.MOVEPOINT_BACKGROUND), this._forceOverrideTransparency = Boolean(i)
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e, t) {
                    if (null === this._data || this._data.points.length < 2 || this._data.nohittest) return null;
                    const i = t.physicalWidth,
                        r = (0, n.box)(...this._data.points),
                        s = r.min,
                        o = r.max,
                        l = new n.Point(o.x, s.y),
                        d = new n.Point(s.x, o.y),
                        h = this._extendAndHitTestLineSegment(e, s, l, i);
                    if (null !== h) return h;
                    const c = this._extendAndHitTestLineSegment(e, d, o, i);
                    if (null !== c) return c;
                    let u = (0, a.distanceToSegment)(l, o, e);
                    return u.distance <= 3 ? this._hitTestResult : (u = (0, a.distanceToSegment)(s, d, e), u.distance <= 3 ? this._hitTestResult : this._data.fillBackground ? this._hitTestBackground(e, s, o, i) : null)
                }
                getColor() {
                    const e = (0, r.ensure)(this._data);
                    return void 0 === e.transparency ? e.backcolor : (0, o.generateColor)(e.backcolor, e.transparency, this._forceOverrideTransparency)
                }
                _drawImpl(e) {
                    if (null === this._data || this._data.points.length < 2 || this._data.linewidth <= 0 && !this._data.fillBackground) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i,
                        verticalPixelRatio: r,
                        bitmapSize: s
                    } = e, a = (0, n.box)(...this._data.points), o = this._data.linewidth ? Math.max(1, Math.floor(this._data.linewidth * i)) : 0, d = this._data.fillBackground ? this.getColor() : void 0, c = Math.max(1, Math.floor(i));
                    (0, h.fillRectWithBorder)(t, Math.round(a.min.x * i), Math.round(a.min.y * r), Math.round(a.max.x * i), Math.round(a.max.y * r), d, this._data.color, o, l.LINESTYLE_SOLID, this._data.extendLeft, this._data.extendRight, "center", s.width, this._data.includeRightEdge && 1 === c ? 1 : 0)
                }
                _extendAndHitTestLineSegment(e, t, i, r) {
                    const n = this._extendAndClipLineSegment(t, i, r);
                    if (null !== n) {
                        if ((0, a.distanceToSegment)(n[0], n[1], e).distance <= 3) return this._hitTestResult
                    }
                    return null
                }
                _extendAndClipLineSegment(e, t, i) {
                    const s = (0, r.ensureNotNull)(this._data);
                    if ((0, n.equalPoints)(e, t) && !s.extendLeft && !s.extendRight) return null;
                    const a = Math.min(e.x, t.x),
                        o = Math.max(e.x, t.x),
                        l = s.extendLeft ? 0 : Math.max(a, 0),
                        d = s.extendRight ? i : Math.min(o, i);
                    return l > d || d <= 0 || l >= i ? null : [new n.Point(l, e.y), new n.Point(d, t.y)]
                }
                _hitTestBackground(e, t, i, r) {
                    const a = this._extendAndClipLineSegment(t, i, r);
                    return null !== a && (0, s.pointInBox)(e, (0, n.box)(a[0], a[1])) ? this._backHitTestResult : null
                }
            }
        },
        663202: (e, t, i) => {
            "use strict";
            i.d(t, {
                IconsContainer: () => o
            });
            var r = i(650151),
                n = i(869403),
                s = i.n(n);
            class a {
                constructor(e, t, i) {
                    this._ready = !1, this._img = function(e, t, i) {
                        const r = new Image;
                        return r.width = t, r.height = t, r.onload = i, r.src = e, r
                    }(e, t, (() => {
                        this._ready = !0, i()
                    }))
                }
                ready() {
                    return this._ready
                }
                image() {
                    return this._img
                }
            }
            class o {
                constructor(e, t) {
                    this._icons = new Map, this._onAllIconsLoaded = new(s()), this._pendingLoading = e.length;
                    const i = () => {
                        0 == --this._pendingLoading && this._onAllIconsLoaded.fire()
                    };
                    e.forEach((e => {
                        const r = this._icons.get(e.name) || new Map;
                        r.set(e.theme, new a(e.imageData, t, i)), this._icons.set(e.name, r)
                    }))
                }
                getIcon(e, t) {
                    return (0, r.ensureDefined)((0, r.ensureDefined)(this._icons.get(e)).get(t))
                }
                onAllIconsReady() {
                    return this._onAllIconsLoaded
                }
            }
        },
        255292: (e, t, i) => {
            "use strict";
            i.d(t, {
                iconsContainer: () => f,
                TrendLineStatsRenderer: () => v
            });
            var r = i(327714),
                n = i(86441),
                s = i(934026),
                a = i(650151),
                o = i(638456),
                l = i(544445),
                d = i(858063),
                h = i(914679),
                c = i(758337),
                u = i(741341),
                p = i(663202);
            let _ = null;
            const g = 18,
                f = new p.IconsContainer([{
                    name: "angle",
                    theme: "dark",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjQ5OTk5IDE1SDIuNjU3NzFMMy4wNjEwNCAxNC4yNjA2TDkuMDYxMDQgMy4yNjA1N0w5LjMwMDQ2IDIuODIxNjJMMTAuMTc4NCAzLjMwMDQ4TDkuOTM4OTMgMy43Mzk0Mkw3LjUxMzg1IDguMTg1NDJDMTAuNTYyMSA5LjY3MjA1IDEwLjk0NTEgMTIuNjI2MSAxMC45OTMxIDE0SDE0LjVIMTVWMTVIMTQuNUgzLjQ5OTk5Wk05Ljk5MTk3IDE0QzkuOTQyMzYgMTIuNzI1OSA5LjU4NjI5IDEwLjI4OCA3LjAzNDM1IDkuMDY0NDlMNC4zNDIyNiAxNEg5Ljk5MTk3WiIgZmlsbD0iI0Y4RjlGRCIvPgo8L3N2Zz4K"
                }, {
                    name: "angle",
                    theme: "light",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy40OTk5OSAxNUgyLjY1NzcxTDMuMDYxMDQgMTQuMjYwNkw5LjA2MTA0IDMuMjYwNTdMOS4zMDA0NiAyLjgyMTYyTDEwLjE3ODQgMy4zMDA0OEw5LjkzODkzIDMuNzM5NDJMNy41MTM4NSA4LjE4NTQyQzEwLjU2MjEgOS42NzIwNSAxMC45NDUxIDEyLjYyNjEgMTAuOTkzMSAxNEgxNC41SDE1VjE1SDE0LjVIMy40OTk5OVpNOS45OTE5NyAxNEM5Ljk0MjM2IDEyLjcyNTkgOS41ODYyOSAxMC4yODggNy4wMzQzNSA5LjA2NDQ5TDQuMzQyMjYgMTRIOS45OTE5N1oiIGZpbGw9IiMyQTJFMzkiLz4NCjwvc3ZnPg0K"
                }, {
                    name: "barsRange",
                    theme: "dark",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjRjhGOUZEIi8+DQo8L3N2Zz4NCg=="
                }, {
                    name: "barsRange",
                    theme: "light",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzVjMuNVY1SDFWNlYxM1YxNEgyVjE1LjVWMTZIM1YxNS41VjE0SDRWMTNWNlY1SDNWMy41VjNIMlpNOC4yMDcxMSA3LjVMNy44NTM1NSA3Ljg1MzU1TDYuNzA3MTEgOUgxMS4yOTI5TDEwLjE0NjQgNy44NTM1NUw5Ljc5Mjg5IDcuNUwxMC41IDYuNzkyODlMMTAuODUzNiA3LjE0NjQ1TDEyLjg1MzYgOS4xNDY0NUwxMy4yMDcxIDkuNUwxMi44NTM2IDkuODUzNTVMMTAuODUzNiAxMS44NTM2TDEwLjUgMTIuMjA3MUw5Ljc5Mjg5IDExLjVMMTAuMTQ2NCAxMS4xNDY0TDExLjI5MjkgMTBINi43MDcxMUw3Ljg1MzU1IDExLjE0NjRMOC4yMDcxMSAxMS41TDcuNSAxMi4yMDcxTDcuMTQ2NDUgMTEuODUzNkw1LjE0NjQ1IDkuODUzNTVMNC43OTI4OSA5LjVMNS4xNDY0NSA5LjE0NjQ1TDcuMTQ2NDUgNy4xNDY0NUw3LjUgNi43OTI4OUw4LjIwNzExIDcuNVpNMyA2SDJWMTNIM1Y2Wk0xNSAzLjVWM0gxNlYzLjVWNUgxN1Y2VjEzVjE0SDE2VjE1LjVWMTZIMTVWMTUuNVYxNEgxNFYxM1Y2VjVIMTVWMy41Wk0xNSA2SDE2VjEzSDE1VjZaIiBmaWxsPSIjMkEyRTM5Ii8+DQo8L3N2Zz4NCg=="
                }, {
                    name: "priceRange",
                    theme: "dark",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iI0Y4RjlGRCIvPg0KPC9zdmc+DQo="
                }, {
                    name: "priceRange",
                    theme: "light",
                    imageData: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAySDMuNUgxMy41SDE0VjNIMTMuNUgzLjVIM1YyWk04LjUgMy43OTI4OUw4Ljg1MzU1IDQuMTQ2NDVMMTAuODUzNiA2LjE0NjQ1TDExLjIwNzEgNi41TDEwLjUgNy4yMDcxMUwxMC4xNDY0IDYuODUzNTVMOSA1LjcwNzExVjEyLjI5MjlMMTAuMTQ2NCAxMS4xNDY0TDEwLjUgMTAuNzkyOUwxMS4yMDcxIDExLjVMMTAuODUzNiAxMS44NTM2TDguODUzNTUgMTMuODUzNkw4LjUgMTQuMjA3MUw4LjE0NjQ1IDEzLjg1MzZMNi4xNDY0NSAxMS44NTM2TDUuNzkyODkgMTEuNUw2LjUgMTAuNzkyOUw2Ljg1MzU1IDExLjE0NjRMOCAxMi4yOTI5VjUuNzA3MTFMNi44NTM1NSA2Ljg1MzU1TDYuNSA3LjIwNzExTDUuNzkyODkgNi41TDYuMTQ2NDUgNi4xNDY0NUw4LjE0NjQ1IDQuMTQ2NDVMOC41IDMuNzkyODlaTTMuNSAxNkgzVjE1SDMuNUgxMy41SDE0VjE2SDEzLjVIMy41WiIgZmlsbD0iIzJBMkUzOSIvPg0KPC9zdmc+DQo="
                }], g),
                m = new Map;
            class v {
                constructor(e, t, i) {
                    this._fontSize = 0, this._preRendered = !1, this._boundingBox = null, this._rect = null, this._padding = null, this._textPoint = null, this._textSizeCache = t, this._data = e, this._fontSize = e.fontSize ? e.fontSize : 12, this._lineSpacing = (0, c.isNumber)(this._data.lineSpacing) && this._data.lineSpacing ? this._data.lineSpacing : 0, e.lines = this._lines = null === e.text ? [] : (0, l.wordWrap)(e.text, this.fontStyle(), e.wordWrapWidth), this._hittest = i || new d.HitTestResult(d.HitTestResult.MOVEPOINT)
                }
                fontStyle() {
                    return `${this._data.bold?"bold ":""}${this._data.italic?"italic ":""}${this._fontSize}px ${this._data.font}`
                }
                draw(e, t) {
                    if (0 === this._data.points.length || null === this._data.text) return {
                        width: 0
                    };
                    this._preRender();
                    const i = this._fontSize + this._lineSpacing;
                    e.textBaseline = "top", e.font = this.fontStyle();
                    const r = (0, a.ensureNotNull)(this._rect);
                    if (this._rect) {
                        if ("right" !== this._data.horzAlign && "center" !== this._data.horzAlign || !0 !== this._data.doNotAlignText && (e.textAlign = "right" === this._data.horzAlign ? "end" : "center"), this._data.backgroundRoundRect ? ((0, h.drawRoundRect)(e, r.x, r.y, r.w, r.h, this._data.backgroundRoundRect), e.fillStyle = this._data.backgroundColor, e.fill(), e.globalAlpha = 1) : (e.fillStyle = this._data.backgroundColor, e.fillRect(r.x, r.y, r.w, r.h), e.globalAlpha = 1), this._data.icons) {
                            let n = 0;
                            const s = Math.ceil((g - this._fontSize) / 2),
                                o = (0, a.ensureNotNull)(this._padding);
                            for (const a of this._data.icons) {
                                const l = Math.round(r.x + o.left),
                                    d = Math.round(r.y + o.top + i * n - s);
                                this._drawIcon(e, l, d, a, Boolean(this._data.isDark), t), n += 1
                            }
                        }
                    } else "right" === this._data.horzAlign ? e.textAlign = "end" : "center" === this._data.horzAlign && (e.textAlign = "center");
                    const n = (0, a.ensureNotNull)(this._textPoint),
                        s = n.x;
                    let o = n.y;
                    e.fillStyle = this._data.color;
                    for (const t of this._lines) e.fillText(t, s, o), o += i;
                    return {
                        width: r.w + 2
                    }
                }
                hitTest(e) {
                    return 0 === this._data.points.length ? null : (this._preRender(), this._boundingBox && (0, s.pointInBox)(e, this._boundingBox) ? this._hittest : null)
                }
                _preRender() {
                    if (this._preRendered) return;
                    const e = function() {
                            if (null !== _) return _;
                            const e = (0, u.createDisconnectedCanvas)(document, (0, r.size)({
                                width: 0,
                                height: 0
                            }));
                            return _ = (0, u.getPrescaledContext2D)(e), _
                        }(),
                        t = this._data.points[0].x;
                    let i = t;
                    const s = this._data.points[0].y;
                    let a = s;
                    const o = this._fontSize,
                        l = this._lineSpacing,
                        d = (o + l) * this._lines.length - l;
                    e.textBaseline = "top", e.font = this.fontStyle();
                    const h = [];
                    let c;
                    if (this._data.wordWrapWidth) {
                        c = this._data.wordWrapWidth;
                        for (let e = 0; e < this._lines.length; e++) h.push(this._data.wordWrapWidth)
                    } else {
                        c = 0;
                        for (let t = 0; t < this._lines.length; t++) {
                            const i = e.measureText(this._lines[t]).width;
                            h.push(i), c = Math.max(c, i)
                        }
                    }
                    const p = {
                            top: this._data.paddingTop,
                            right: this._data.paddingRight,
                            bottom: this._data.paddingBottom,
                            left: this._data.paddingLeft
                        },
                        f = {
                            x: Math.floor(t),
                            y: Math.floor(s),
                            w: Math.ceil(c + p.left + p.right),
                            h: Math.ceil(d + p.top + p.bottom)
                        };
                    if (i += p.left, a += p.top, this._data.icons) {
                        const e = void 0 !== this._data.textPadding ? this._data.textPadding : Math.round(o / 2);
                        i += g + e, f.w += g + e
                    }
                    if ("bottom" === this._data.vertAlign || "middle" === this._data.vertAlign) {
                        const e = "middle" === this._data.vertAlign ? s - f.h / 2 : s - f.h - (f.y - s);
                        a += e - f.y, f.y = e
                    }
                    if ("right" === this._data.horzAlign || "center" === this._data.horzAlign) {
                        const r = "center" === this._data.horzAlign ? t - f.w / 2 : t - f.w - (f.x - t);
                        i += r - f.x, f.x = r, !0 !== this._data.doNotAlignText && ("right" === this._data.horzAlign ? (e.textAlign = "end", i += c) : (e.textAlign = "center", i += c / 2))
                    }
                    f.w % 2 != 0 && f.w++, f.x += .5, f.y += .5, this._boundingBox = (0, n.box)(new n.Point(f.x, f.y), new n.Point(f.x + f.w, f.y + f.h)), this._rect = f, this._padding = p, this._textPoint = {
                        x: i,
                        y: a
                    }, this._textSizeCache && (this._textSizeCache.widths = h), this._preRendered = !0
                }
                _drawIcon(e, t, i, r, n, s) {
                    const l = `${r}${this._data.isDark}${s.pixelRatio}`;
                    let d = m.get(l);
                    if (!d) {
                        d = document.createElement("canvas"), d.width = g * s.pixelRatio, d.height = g * s.pixelRatio, d.style.width = "18px", d.style.height = "18px";
                        const e = (0, a.ensureNotNull)(d.getContext("2d"));
                        e.setTransform(1, 0, 0, 1, 0, 0), o.isEdge || e.scale(s.pixelRatio, s.pixelRatio);
                        const t = f.getIcon(r, n ? "dark" : "light");
                        t.ready() && (e.drawImage(t.image(), 0, 0), m.set(l, d))
                    }
                    e.drawImage(d, t - .5, i - .5, g, g)
                }
            }
        },
        383359: (e, t, i) => {
            "use strict";
            i.d(t, {
                TriangleRenderer: () => c
            });
            var r = i(204652),
                n = i(934026),
                s = i(904244),
                a = i(858063),
                o = i(114123),
                l = i(837291),
                d = i(914679),
                h = i(631586);
            class c extends s.MediaCoordinatesPaneRenderer {
                constructor() {
                    super(...arguments), this._data = null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (null === this._data || this._data.points.length < 2) return null;
                    const [t, i] = this._data.points;
                    let s = (0, r.distanceToSegment)(t, i, e);
                    const o = (0, l.interactionTolerance)().line;
                    if (s.distance <= o) return new a.HitTestResult(a.HitTestResult.MOVEPOINT);
                    if (3 !== this._data.points.length) return null;
                    const d = this._data.points[2];
                    return s = (0, r.distanceToSegment)(i, d, e), s.distance <= o ? new a.HitTestResult(a.HitTestResult.MOVEPOINT) : (s = (0, r.distanceToSegment)(d, t, e), s.distance <= o ? new a.HitTestResult(a.HitTestResult.MOVEPOINT) : this._data.fillBackground && (0, n.pointInTriangle)(e, t, i, d) ? new a.HitTestResult(a.HitTestResult.MOVEPOINT_BACKGROUND) : null)
                }
                _drawImpl(e) {
                    var t;
                    if (null === this._data || this._data.points.length < 2) return;
                    const i = e.context,
                        r = (null !== (t = this._data.linestyle) && void 0 !== t ? t : h.LINESTYLE_SOLID) === h.LINESTYLE_SOLID ? "round" : "butt";
                    i.lineCap = r, i.lineJoin = "round", i.strokeStyle = this._data.color, i.lineWidth = this._data.linewidth,
                        void 0 !== this._data.linestyle && (0, d.setLineStyle)(i, this._data.linestyle);
                    const [n, s] = this._data.points, a = 2 === this._data.points.length ? s : this._data.points[2];
                    i.beginPath(), i.moveTo(n.x, n.y), i.lineTo(s.x, s.y), i.lineTo(a.x, a.y), i.lineTo(n.x, n.y), this._data.fillBackground && (i.fillStyle = (0, o.generateColor)(this._data.backcolor, this._data.transparency), i.fill()), i.stroke()
                }
            }
        },
        441970: (e, t, i) => {
            "use strict";
            i.d(t, {
                fromPercent: () => a,
                toPercent: () => o,
                toPercentRange: () => l,
                fromIndexedTo100: () => d,
                toIndexedTo100: () => h,
                toIndexedTo100Range: () => c,
                toLog: () => u,
                fromLog: () => p,
                logFormulaForPriceRange: () => _,
                logFormulasAreSame: () => g,
                getCurrentModePriceText: () => f,
                getOppositeModePriceText: () => m
            });
            var r = i(168210),
                n = i(43329);
            const s = {
                logicalOffset: 4,
                coordOffset: 1e-4
            };

            function a(e, t) {
                return t < 0 && (e = -e), e / 100 * t + t
            }

            function o(e, t) {
                const i = 100 * (e - t) / (t || 1);
                return t < 0 ? -i : i
            }

            function l(e, t) {
                const i = o(e.minValue(), t),
                    n = o(e.maxValue(), t);
                return new r.PriceRange(i, n)
            }

            function d(e, t) {
                return t < 0 && (e = -e), (e -= 100) / 100 * t + t
            }

            function h(e, t) {
                const i = 100 * (e - t) / t + 100;
                return t < 0 ? -i : i
            }

            function c(e, t) {
                const i = h(e.minValue(), t),
                    n = h(e.maxValue(), t);
                return new r.PriceRange(i, n)
            }

            function u(e, t) {
                const i = Math.abs(e);
                if (i < 1e-25) return 0;
                const r = (0, n.log10)(i + t.coordOffset) + t.logicalOffset;
                return e < 0 ? -r : r
            }

            function p(e, t) {
                const i = Math.abs(e);
                if (i < 1e-15) return 0;
                const r = Math.pow(10, i - t.logicalOffset) - t.coordOffset;
                return e < 0 ? -r : r
            }

            function _(e) {
                if (null === e) return s;
                const t = Math.abs(e.maxValue() - e.minValue());
                if (t >= 1 || t < 1e-15) return s;
                const i = Math.ceil(Math.abs(Math.log10(t))),
                    r = s.logicalOffset + i;
                return {
                    logicalOffset: r,
                    coordOffset: 1 / Math.pow(10, r)
                }
            }

            function g(e, t) {
                return e.logicalOffset === t.logicalOffset && e.coordOffset === t.coordOffset
            }

            function f(e, t) {
                return e.isPercentage() ? t.formattedPricePercentage : e.isIndexedTo100() ? t.formattedPriceIndexedTo100 : t.formattedPriceAbsolute
            }

            function m(e, t) {
                return e.isPercentage() || e.isIndexedTo100() ? t.formattedPriceAbsolute : t.formattedPricePercentage
            }
        },
        583110: (e, t, i) => {
            "use strict";
            i.d(t, {
                SelectionRenderer: () => d
            });
            var r = i(934026),
                n = i(314967),
                s = i(858063),
                a = i(854905),
                o = i(756740);
            const l = n.colorsPalette["color-tv-blue-600"];
            class d extends o.BitmapCoordinatesPaneRenderer {
                constructor(e) {
                    super(), this._data = e || null
                }
                setData(e) {
                    this._data = e
                }
                hitTest(e) {
                    if (!this._data || !this._data.visible) return null;
                    for (let t = 0; t < this._data.points.length; t++) {
                        const i = this._data.points[t];
                        if (i.subtract(e).length() <= 5.5) {
                            const e = void 0 !== this._data.pointsCursorType ? this._data.pointsCursorType[t] : a.PaneCursorType.Default;
                            return new s.HitTestResult(this._data.hittestResult, {
                                pointIndex: i.data,
                                cursorType: e
                            })
                        }
                    }
                    return null
                }
                doesIntersectWithBox(e) {
                    return !!this._data && this._data.points.some((t => (0, r.pointInBox)(t, e)))
                }
                _drawImpl(e) {
                    if (null === this._data || !this._data.visible) return;
                    const {
                        context: t,
                        horizontalPixelRatio: i
                    } = e;
                    t.strokeStyle = void 0 !== this._data.color ? this._data.color : l, t.lineCap = "butt";
                    const r = Math.max(1, Math.floor(i));
                    t.lineWidth = r;
                    const n = this._data.vertOffset || 0;
                    for (let i = 0; i < this._data.points.length; ++i) {
                        const a = this._data.points[i];
                        (s = a,
                            Number.isFinite(s.x) && Number.isFinite(s.y)) && (t.fillStyle = this._data.bgColors[i], this._drawMarker(e, a, n, r))
                    }
                    var s
                }
                _drawMarker(e, t, i, r) {
                    const {
                        context: n,
                        horizontalPixelRatio: s,
                        verticalPixelRatio: a
                    } = e;
                    let o = Math.round(3.5 * s * 2);
                    o % 2 != r % 2 && (o += 1);
                    let l = Math.round(o + 2 * (.5 * r + .75 * s));
                    l % 2 != r % 2 && (l += 1);
                    const d = Math.round(t.x * s),
                        h = Math.round((t.y + i) * a),
                        c = r % 2 / 2;
                    n.beginPath(), n.arc(d + c, h + c, l / 2, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.beginPath(), n.arc(d + c, h + c, o / 2, 0, 2 * Math.PI, !0), n.closePath(), n.stroke()
                }
            }
        },
        991410: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererSeriesBase: () => n
            });
            var r = i(858063);
            class n {
                constructor() {
                    this._bars = []
                }
                hitTest(e) {
                    const t = this._bars,
                        i = this._getBarSpacing(),
                        r = i / 2;
                    if (0 === t.length) return null;
                    const n = this._getTolerance(),
                        s = t[0],
                        a = t[t.length - 1];
                    if (e.x < s.time - r - n) return null;
                    if (e.x > a.time + r + n) return null;
                    let o = 0,
                        l = t.length - 1,
                        d = -1;
                    for (; o <= l;) {
                        const i = Math.floor((o + l) / 2),
                            h = t[i];
                        let c = r;
                        if (h !== s && h !== a || (c += n), Math.abs(h.time - e.x) <= c) {
                            d = i;
                            break
                        }
                        e.x - h.time > r ? o = i + 1 : l = i - 1
                    }
                    if (-1 !== d) {
                        const s = Math.ceil(n / i);
                        if (0 !== s) {
                            const i = Math.max(0, d - s),
                                a = Math.min(t.length - 1, d + s);
                            for (let s = i; s <= a; s++)
                                if (Math.abs(e.x - t[s].time) <= r + n && this._isPointAtBar(t[s], e.y, n)) return this._getHitTest()
                        } else if (this._isPointAtBar(t[d], e.y, n)) return this._getHitTest()
                    }
                    return null
                }
                _getHitTest() {
                    return new r.HitTestResult(r.HitTestResult.REGULAR)
                }
                _isPointAtBar(e, t, i) {
                    const r = Math.min(e.high, e.low),
                        n = Math.max(e.high, e.low);
                    return r - i <= t && t <= n + i
                }
            }
        },
        916716: (e, t, i) => {
            "use strict";
            i.d(t, {
                PaneRendererCandles: () => l
            });
            var r = i(650151),
                n = i(858063),
                s = i(914679),
                a = i(837291),
                o = i(991410);
            class l extends o.PaneRendererSeriesBase {
                constructor(e) {
                    super(), this._barSpacing = 1, this._barWidth = 1, this._borderVisible = !1, this._barBorderWidth = 1, this._wickVisible = !1, this._bodyVisible = !0, this._borderColor = void 0, this._wickColor = void 0, this._hittest = void 0, this._isPriceScaleInverted = !1, e && this.setData(e)
                }
                setData(e) {
                    this._bars = e.bars, this._barSpacing = e.barSpacing, this._borderVisible = e.borderVisible, this._bodyVisible = e.bodyVisible, this._wickVisible = e.wickVisible, this._borderColor = e.borderColor, this._wickColor = e.wickColor, this._hittest = e.hittest, this._isPriceScaleInverted = e.isPriceScaleInverted
                }
                hitTest(e) {
                    return this._wickVisible || this._borderVisible || this._bodyVisible ? super.hitTest(e) : null
                }
                draw(e, t) {
                    if (0 === this._bars.length) return;
                    const i = t.pixelRatio;
                    if (this._barWidth = (0, a.optimalCandlestickWidth)(this._barSpacing, i), this._barWidth >= 2) {
                        Math.floor(i) % 2 != this._barWidth % 2 && this._barWidth--
                    }
                    this._wickVisible && this._drawWicks(e, i), this._borderVisible && this._drawBorder(e, i), this._bodyVisible && this._drawCandles(e, i)
                }
                _getTolerance() {
                    return (0, a.interactionTolerance)().series + this._barBorderWidth / 2
                }
                _getBarSpacing() {
                    return this._barSpacing
                }
                _getHitTest() {
                    return this._hittest || new n.HitTestResult(n.HitTestResult.REGULAR)
                }
                _isPointAtBar(e, t, i) {
                    const r = this._bodyVisible || this._borderVisible,
                        n = this._wickVisible;
                    if (!r && !n) return !1;
                    if (r) {
                        const r = n ? Math.min(e.high, e.low) : Math.min(e.open, e.close),
                            s = n ? Math.max(e.high, e.low) : Math.max(e.open, e.close);
                        return r - i <= t && t <= s + i
                    } {
                        const r = Math.min(e.open, e.close),
                            n = Math.max(e.open, e.close);
                        return e.high - i <= t && t <= r + i || n - i <= t && t <= e.low + i
                    }
                }
                _drawWicks(e, t) {
                    const i = this._bars;
                    let n = "",
                        s = Math.min(Math.floor(t), Math.floor(this._barSpacing * t));
                    s = Math.max(Math.floor(t), Math.min(s, this._barWidth));
                    const a = Math.floor(.5 * s);
                    let o = null;
                    for (const l of i) {
                        const i = l.wickColor ? l.wickColor : (0, r.ensureDefined)(this._wickColor);
                        i !== n && (e.fillStyle = i, n = i);
                        let d = Math.round(Math.min(l.open, l.close) * t),
                            h = Math.round(Math.max(l.open, l.close) * t);
                        this._isPriceScaleInverted && ([h, d] = [d, h]);
                        const c = Math.round(l.high * t),
                            u = Math.round(l.low * t);
                        let p = Math.round(t * l.time) - a;
                        const _ = p + s - 1;
                        null !== o && (p = Math.max(o + 1, p), p = Math.min(p, _));
                        const g = _ - p + 1;
                        e.fillRect(p, c, g, d - c), e.fillRect(p, h + 1, g, u - h - 1), o = _
                    }
                }
                _calculateBorderWidth(e) {
                    let t = Math.floor(1 * e);
                    this._barWidth <= 2 * t && (t = Math.floor(.5 * (this._barWidth - 1)));
                    const i = Math.max(Math.floor(e), t);
                    return this._barWidth <= 2 * i ? Math.max(Math.floor(e), Math.floor(1 * e)) : i
                }
                _drawBorder(e, t) {
                    let i = "";
                    const n = this._calculateBorderWidth(t);
                    let a = null;
                    for (const o of this._bars) {
                        if (o.borderColor !== i && (e.fillStyle = o.borderColor ? o.borderColor : (0, r.ensureDefined)(this._borderColor), i = o.borderColor), this._bodyVisible && o.hollow) continue;
                        let l = Math.round(o.time * t) - Math.floor(.5 * this._barWidth);
                        const d = l + this._barWidth - 1,
                            h = Math.round(Math.min(o.open, o.close) * t),
                            c = Math.round(Math.max(o.open, o.close) * t);
                        if (null !== a && (l = Math.max(a + 1, l), l = Math.min(l, d)), this._barSpacing * t > 2 * n)(0, s.fillRectInnerBorder)(e, l, h, d - l + 1, c - h + 1, n);
                        else {
                            const t = d - l + 1;
                            e.fillRect(l, h, t, c - h + 1)
                        }
                        a = d
                    }
                }
                _drawCandles(e, t) {
                    let i = "";
                    const r = this._calculateBorderWidth(t);
                    for (const n of this._bars) {
                        if (this._borderVisible && this._barWidth <= 2 * r && !n.hollow) continue;
                        let a = Math.round(Math.min(n.open, n.close) * t),
                            o = Math.round(Math.max(n.open, n.close) * t),
                            l = Math.round(n.time * t) - Math.floor(.5 * this._barWidth),
                            d = l + this._barWidth - 1;
                        if (n.color !== i) {
                            const t = n.color;
                            e.fillStyle = t, i = t
                        }
                        if (n.hollow) e.fillStyle = n.color, (0, s.fillRectInnerBorder)(e, l, a, d - l + 1, o - a + 1, r);
                        else {
                            if (this._borderVisible && (l += r, a += r, d -= r, o -= r), a > o) continue;
                            e.fillRect(l, a, d - l + 1, o - a + 1)
                        }
                    }
                }
            }
        },
        971244: (e, t, i) => {
            "use strict";
            i.d(t, {
                timeHoursFormatProperty: () => o,
                restoreTimeHoursFormatSettingsValue: () => l
            });
            var r = i(62802),
                n = i(506845);
            const s = "time_hours_format";

            function a() {
                return r.getValue(s, "24-hours")
            }
            const o = (0, n.createPrimitiveProperty)(a());

            function l() {
                o.setValue("24-hours"), r.remove(s)
            }
            r.onSync.subscribe(null, (() => o.setValue(a()))), o.subscribe(null, (() => r.setValue(s, o.value())))
        },
        941167: (e, t, i) => {
            "use strict";
            i.d(t, {
                getHourMinuteFormat: () => n,
                getHourMinuteSecondFormat: () => s,
                getTimeFormatForInterval: () => a
            });
            var r = i(164280);

            function n(e) {
                return "12-hours" === e ? r.twelveHourMinuteFormat : r.hourMinuteFormat
            }

            function s(e) {
                return "12-hours" === e ? r.twelveHourMinuteSecondFormat : r.hourMinuteSecondFormat
            }

            function a(e, t) {
                if (e.isRange()) return function(e) {
                    return "12-hours" === e ? r.twelveHourMinuteNonZeroSecondFormat : r.hourMinuteNonZeroSecondFormat
                }(t);
                return e.isSeconds() || e.isTicks() ? s(t) : n(t)
            }
        },
        823757: (e, t, i) => {
            "use strict";
            var r;
            i.d(t, {
                    Constants: () => r
                }),
                function(e) {
                    e.DrawingIconColor = "rgba( 170, 170, 170, 1)", e[e.NameLengthLimit = 300] = "NameLengthLimit"
                }(r || (r = {}))
        },
        868151: (e, t, i) => {
            "use strict";

            function r(e) {
                return e + "…"
            }
            i.r(t), i.d(t, {
                appendEllipsis: () => r
            })
        },
        72822: (e, t, i) => {
            "use strict";

            function r(e) {
                if (void 0 === e) return "";
                if (e instanceof Error) {
                    let t = e.message;
                    return e.stack && (t += " " + e.stack), t
                }
                return "string" == typeof e ? e.toString() : JSON.stringify(e)
            }
            i.d(t, {
                errorToString: () => r
            })
        },
        999620: (e, t, i) => {
            "use strict";
            e.exports = i.p + "prediction-clock-white.c4675d37769f1df4c9ec.png"
        },
        888249: (e, t, i) => {
            "use strict";
            e.exports = i.p + "prediction-failure-white.a838a6689f951970e715.png"
        },
        614012: (e, t, i) => {
            "use strict";
            e.exports = i.p + "prediction-success-white.2fb9966b4c0f3529a2ea.png"
        },
        297840: e => {
            e.exports = {
                ar: ["يوم"],
                ca_ES: "d",
                cs: "d",
                de: ["t"],
                el: "d",
                en: "d",
                es: "d",
                fa: ["روز"],
                fr: ["j"],
                he_IL: ["תאריך"],
                hu_HU: ["n"],
                id_ID: "d",
                it: ["g"],
                ja: ["日"],
                ko: ["날"],
                ms_MY: "d",
                nl_NL: "d",
                pl: "d",
                pt: "d",
                ro: "d",
                ru: ["д"],
                sv: "d",
                th: ["วัน"],
                tr: ["g"],
                vi: ["n"],
                zh: ["天"],
                zh_TW: ["日"]
            }
        },
        564302: e => {
            e.exports = {
                ar: ["ساعة"],
                ca_ES: "h",
                cs: "h",
                de: "h",
                el: ["ω"],
                en: "h",
                es: "h",
                fa: ["ساعت"],
                fr: "h",
                he_IL: ["שעות"],
                hu_HU: ["ó"],
                id_ID: "h",
                it: ["o"],
                ja: ["時間"],
                ko: ["시간"],
                ms_MY: "h",
                nl_NL: "h",
                pl: "h",
                pt: "h",
                ro: "h",
                ru: ["ч"],
                sv: "h",
                th: ["ชั่วโมง"],
                tr: ["s"],
                vi: ["g"],
                zh: ["小时"],
                zh_TW: ["小時"]
            }
        },
        491481: e => {
            e.exports = {
                ar: "in",
                ca_ES: "in",
                cs: ["za"],
                de: "in",
                el: ["σε"],
                en: "in",
                es: ["en"],
                fa: "in",
                fr: ["en"],
                he_IL: ["בתוך"],
                hu_HU: ["-ban/ben"],
                id_ID: ["dalam"],
                it: "in",
                ja: ["："],
                ko: "in",
                ms_MY: ["dalam"],
                nl_NL: "in",
                pl: ["w"],
                pt: ["em"],
                ro: "in",
                ru: ["за"],
                sv: "in",
                th: ["ใน"],
                tr: ["za"],
                vi: ["trong"],
                zh: ["在"],
                zh_TW: ["內"]
            }
        },
        592659: e => {
            e.exports = {
                ar: ["دقيقة"],
                ca_ES: "m",
                cs: "m",
                de: "m",
                el: "m",
                en: "m",
                es: "m",
                fa: ["ماه"],
                fr: "m",
                he_IL: ["דקות"],
                hu_HU: ["hó"],
                id_ID: "m",
                it: "m",
                ja: ["分"],
                ko: ["분"],
                ms_MY: "m",
                nl_NL: "m",
                pl: "m",
                pt: "m",
                ro: "m",
                ru: ["м"],
                sv: "m",
                th: ["นาที"],
                tr: ["a"],
                vi: ["p"],
                zh: ["分钟"],
                zh_TW: ["分"]
            }
        },
        222448: e => {
            e.exports = {
                ar: "s",
                ca_ES: "s",
                cs: "s",
                de: "s",
                el: "s",
                en: "s",
                es: "s",
                fa: "s",
                fr: "s",
                he_IL: ["שניות"],
                hu_HU: "s",
                id_ID: "s",
                it: "s",
                ja: ["秒"],
                ko: ["초"],
                ms_MY: "s",
                nl_NL: "s",
                pl: "s",
                pt: "s",
                ro: "s",
                ru: ["с"],
                sv: "s",
                th: ["วินาที"],
                tr: "s",
                vi: ["g"],
                zh: ["秒"],
                zh_TW: ["秒"]
            }
        },
        144143: e => {
            e.exports = {
                ar: ["أغلقت"],
                ca_ES: ["Tancat"],
                cs: ["Zavřený"],
                de: ["Geschlossen"],
                el: "Closed",
                en: "Closed",
                es: ["Cerrado"],
                fa: ["سود/زیان"],
                fr: ["Fermé"],
                he_IL: ["נסגר"],
                hu_HU: ["Záró"],
                id_ID: ["Tutup"],
                it: ["Chiuso"],
                ja: ["確定"],
                ko: ["포지션청산"],
                ms_MY: ["Tutup"],
                nl_NL: ["Gesloten"],
                pl: ["Zamknięte"],
                pt: ["Fechado"],
                ro: "Closed",
                ru: ["Закр. поз."],
                sv: "Closed",
                th: ["ปิด"],
                tr: ["Kapalı"],
                vi: ["Đóng"],
                zh: ["已平仓"],
                zh_TW: ["已平倉"]
            }
        },
        550140: e => {
            e.exports = {
                ar: ["مفتوح"],
                ca_ES: ["Obertura"],
                cs: ["Otevřený"],
                de: ["Offener"],
                el: ["Opened"],
                en: "Open",
                es: ["Apertura"],
                fa: ["سود/زیان"],
                fr: ["Ouverture"],
                he_IL: ["נפתח"],
                hu_HU: ["Nyitva"],
                id_ID: ["Pembukaan"],
                it: ["Aperto"],
                ja: ["未確定"],
                ko: ["포지션보유"],
                ms_MY: ["Buka"],
                nl_NL: ["Opened"],
                pl: ["Otwarte"],
                pt: ["Aberto"],
                ro: "Open",
                ru: ["Откр. поз."],
                sv: "Open",
                th: ["เปิด"],
                tr: ["Açık"],
                vi: ["Mở"],
                zh: ["开仓"],
                zh_TW: ["未平倉"]
            }
        },
        32819: e => {
            e.exports = {
                ar: ["حجم تداول"],
                ca_ES: ["Vol."],
                cs: "Vol",
                de: "Vol",
                el: "Vol",
                en: "Vol",
                es: ["Vol."],
                fa: "Vol",
                fr: "Vol",
                he_IL: ["מחזור"],
                hu_HU: "Vol",
                id_ID: "Vol",
                it: "Vol",
                ja: ["出来高"],
                ko: ["볼륨"],
                ms_MY: ["Volum"],
                nl_NL: "Vol",
                pl: ["Wolumen"],
                pt: "Vol",
                ro: "Vol",
                ru: ["Объём"],
                sv: "Vol",
                th: ["ปริมาณ"],
                tr: ["Hacim"],
                vi: ["Khối lượng"],
                zh: "Vol",
                zh_TW: ["成交量"]
            }
        },
        316075: e => {
            e.exports = {
                ar: ["إلغاء أمر"],
                ca_ES: ["Cancel·lar ordre"],
                cs: "Cancel Order",
                de: ["Auftrag abbrechen"],
                el: "Cancel Order",
                en: "Cancel Order",
                es: ["Cancelar orden"],
                fa: "Cancel Order",
                fr: ["Annuler Ordre"],
                he_IL: ["בטל פקודה"],
                hu_HU: ["Megbízás Törlése"],
                id_ID: ["Batalkan Order"],
                it: ["Annulla ordine"],
                ja: ["注文をキャンセル"],
                ko: ["주문 취소"],
                ms_MY: ["Batalkan Pesanan"],
                nl_NL: "Cancel Order",
                pl: ["Anuluj zlecenie"],
                pt: ["Cancelar ordem"],
                ro: "Cancel Order",
                ru: ["Отменить заявку"],
                sv: ["Avbryt order"],
                th: ["ยกเลิกคำสั่ง"],
                tr: ["Emir İptal"],
                vi: ["Hủy Lệnh"],
                zh: ["取消订单"],
                zh_TW: ["取消報單"]
            }
        },
        437431: e => {
            e.exports = {
                ar: ["إغلاق صفقة"],
                ca_ES: "Close Position",
                cs: "Close Position",
                de: ["Position Schließen"],
                el: "Close Position",
                en: "Close Position",
                es: ["Cerrar posición"],
                fa: "Close Position",
                fr: ["Fermer la Position"],
                he_IL: ["סגור פוזיציה"],
                hu_HU: ["Záró Pozíció"],
                id_ID: ["Tutup Posisi"],
                it: ["Chiudi posizione"],
                ja: ["ポジション決済"],
                ko: ["포지션 닫기"],
                ms_MY: ["Kedudukan Penutup"],
                nl_NL: "Close Position",
                pl: ["Zamknij pozycję"],
                pt: ["Fechar Posição"],
                ro: "Close Position",
                ru: ["Закрыть позицию"],
                sv: ["Stäng position"],
                th: ["ปิดสถานะ"],
                tr: ["Pozisyonu Kapat"],
                vi: ["Đóng Trạng thái"],
                zh: ["平仓"],
                zh_TW: ["平倉"]
            }
        },
        100968: e => {
            e.exports = {
                ar: ["لم تنجح"],
                ca_ES: "FAILURE",
                cs: ["SELHÁNÍ"],
                de: ["FEHLER"],
                el: ["ΑΠΟΤΥΧΙΑ"],
                en: "FAILURE",
                es: ["FALLO"],
                fa: ["شکست"],
                fr: ["ÉCHEC"],
                he_IL: ["כישלון"],
                hu_HU: ["VESZTESÉG"],
                id_ID: ["KEGAGALAN"],
                it: ["OPERAZIONE NON RIUSCITA"],
                ja: ["失敗"],
                ko: ["실패"],
                ms_MY: ["KEGAGALAN"],
                nl_NL: ["Mislukt!"],
                pl: ["PORAŻKA"],
                pt: ["FALHA"],
                ro: "FAILURE",
                ru: ["НЕУДАЧА"],
                sv: ["MISSLYCKANDE"],
                th: ["ล้มเหลว"],
                tr: ["BAŞARISIZ"],
                vi: ["THẤT BẠI"],
                zh: ["失败"],
                zh_TW: ["失敗"]
            }
        },
        963706: e => {
            e.exports = {
                ar: ["رأس"],
                ca_ES: ["Cap"],
                cs: "Head",
                de: ["Kopf"],
                el: "Head",
                en: "Head",
                es: ["Cabeza"],
                fa: "Head",
                fr: ["Tête"],
                he_IL: ["ראש"],
                hu_HU: ["Fej"],
                id_ID: "Head",
                it: ["Testa"],
                ja: ["ヘッド"],
                ko: ["머리"],
                ms_MY: ["Kepala"],
                nl_NL: "Head",
                pl: ["Głowa"],
                pt: ["Cabeça"],
                ro: "Head",
                ru: ["Голова"],
                sv: ["Huvud"],
                th: ["หัว"],
                tr: ["Baş"],
                vi: ["Đầu"],
                zh: ["头部"],
                zh_TW: ["頭"]
            }
        },
        273064: e => {
            e.exports = {
                ar: ["شراء"],
                ca_ES: ["Llarg"],
                cs: ["Koupit"],
                de: "Long",
                el: "Long",
                en: "Long",
                es: ["Largo"],
                fa: ["بلند مدت"],
                fr: "Long",
                he_IL: ["לונג"],
                hu_HU: "Long",
                id_ID: ["Pembelian"],
                it: "Long",
                ja: ["ロング"],
                ko: ["롱"],
                ms_MY: ["Panjang"],
                nl_NL: "Long",
                pl: "Long",
                pt: ["Viés de alta"],
                ro: "Long",
                ru: ["Длинная"],
                sv: ["Lång"],
                th: ["เพิ่มขึ้น"],
                tr: ["Alış"],
                vi: ["Giá lên"],
                zh: ["做多"],
                zh_TW: ["看多"]
            }
        },
        268589: e => {
            e.exports = {
                ar: ["الكتف الأيسر"],
                ca_ES: ["Espatlla esquerra"],
                cs: "Left Shoulder",
                de: ["Linke Schulter"],
                el: "Left Shoulder",
                en: "Left Shoulder",
                es: ["Hombro izquierdo"],
                fa: "Left Shoulder",
                fr: ["Épaule gauche"],
                he_IL: ["כתף שמאל"],
                hu_HU: ["Bal Váll"],
                id_ID: "Left Shoulder",
                it: ["Spalla sinistra"],
                ja: ["左ショルダー"],
                ko: ["왼어깨"],
                ms_MY: ["Bahu Kiri"],
                nl_NL: "Left Shoulder",
                pl: ["Lewe ramię"],
                pt: ["Ombro Esquerdo"],
                ro: "Left Shoulder",
                ru: ["Левое плечо"],
                sv: ["Vänster skuldra"],
                th: ["ไหล่ซ้าย"],
                tr: ["Sol Omuz"],
                vi: ["Vai trái"],
                zh: ["左肩"],
                zh_TW: ["左肩"]
            }
        },
        938775: e => {
            e.exports = {
                ar: ["رابط التغريدة"],
                ca_ES: ["Enllaç al tuit"],
                cs: "Link to tweet",
                de: ["Link zum Tweet"],
                el: "Link to tweet",
                en: "Link to tweet",
                es: ["Enlace al tweet"],
                fa: "Link to tweet",
                fr: ["Lien vers le tweet"],
                he_IL: ["קישור לציוץ"],
                hu_HU: "Link to tweet",
                id_ID: ["Tautan menuju tweet"],
                it: ["Link a tweet"],
                ja: ["ツイートへリンク"],
                ko: ["트윗 링크"],
                ms_MY: ["Pautan ke tweet"],
                nl_NL: "Link to tweet",
                pl: ["Link do tweeta"],
                pt: ["Link para o tweet"],
                ro: "Link to tweet",
                ru: ["Ссылка на твит"],
                sv: ["Länk till tweet"],
                th: ["ลิ้งค์ทวิต"],
                tr: ["Tweet bağlantısı"],
                vi: ["Liên kết đến tweet"],
                zh: ["推文链接"],
                zh_TW: ["推文鏈接"]
            }
        },
        433241: e => {
            e.exports = {
                ar: ["تعديل الأمر"],
                ca_ES: ["Modifica ordre"],
                cs: "Modify Order",
                de: ["Order modifizieren"],
                el: "Modify Order",
                en: "Modify Order",
                es: ["Modificar orden"],
                fa: "Modify Order",
                fr: ["Modifier l'ordre"],
                he_IL: ["שנה הוראה"],
                hu_HU: "Modify Order",
                id_ID: ["Memodifikasi Order"],
                it: ["Modifica ordine"],
                ja: ["注文の変更"],
                ko: ["오더 고치기"],
                ms_MY: ["Ubah Suai Pesanan"],
                nl_NL: "Modify Order",
                pl: ["Modyfikuj zlecenie"],
                pt: ["Modificar ordem"],
                ro: "Modify Order",
                ru: ["Изменить заявку"],
                sv: ["Ändra order"],
                th: ["แก้ไขออเดอร์"],
                tr: ["Emir Değiştir"],
                vi: ["Chỉnh Lệnh"],
                zh: ["修改订单"],
                zh_TW: ["修改訂單"]
            }
        },
        826787: e => {
            e.exports = {
                ar: ["نجاح"],
                ca_ES: "SUCCESS",
                cs: ["ÚSPĚCH"],
                de: ["ERFOLG"],
                el: ["ΕΠΙΤΥΧΙΑ"],
                en: "SUCCESS",
                es: ["ÉXITO"],
                fa: ["موفقیت"],
                fr: ["SUCCÈS"],
                he_IL: ["הצלחה"],
                hu_HU: ["NYERESÉG"],
                id_ID: ["SUKSES"],
                it: ["OPERAZIONE RIUSCITA"],
                ja: ["成功"],
                ko: ["성공"],
                ms_MY: ["BERJAYA"],
                nl_NL: ["Succes!"],
                pl: ["SUKCES"],
                pt: ["SUCESSO"],
                ro: "SUCCESS",
                ru: ["УСПЕХ"],
                sv: ["FRAMGÅNG"],
                th: ["สำเร็จ"],
                tr: ["BAŞARILI"],
                vi: ["THÀNH CÔNG"],
                zh: ["成功"],
                zh_TW: ["成功"]
            }
        },
        777851: e => {
            e.exports = {
                ar: ["بيع"],
                ca_ES: ["Curt"],
                cs: ["Prodat"],
                de: "Short",
                el: "Short",
                en: "Short",
                es: ["Corto"],
                fa: ["کوتاه مدت"],
                fr: "Short",
                he_IL: ["שורט"],
                hu_HU: "Short",
                id_ID: ["Penjualan"],
                it: "Short",
                ja: ["ショート"],
                ko: ["숏"],
                ms_MY: ["Singkat"],
                nl_NL: "Short",
                pl: "Short",
                pt: ["Viés de baixa"],
                ro: "Short",
                ru: ["Короткая"],
                sv: ["Kort"],
                th: ["ลดลง"],
                tr: ["Satış"],
                vi: ["Giá xuống"],
                zh: ["做空"],
                zh_TW: ["看空"]
            }
        },
        600438: e => {
            e.exports = {
                ar: ["وقف:{stopChange} ({stopChangePercent}) {stopChangePip}، الكمية:‎{amount}‎"],
                ca_ES: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Import: {amount}"],
                cs: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                de: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Betrag: {amount}"],
                el: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                en: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                es: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Importe: {amount}"],
                fa: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                fr: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Montant: {amount}"],
                he_IL: ["סטופ: {stopChange} ({stopChangePercent}) {stopChangePip}, סכום: {amount}"],
                hu_HU: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Összeg: {amount}"],
                id_ID: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Jumlah: {amount}"],
                it: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Quantità: {amount}"],
                ja: ["ストップ: {stopChange} ({stopChangePercent}) {stopChangePip}, 金額: {amount}"],
                ko: ["스탑: {stopChange} ({stopChangePercent}) {stopChangePip}, 금액: {amount}"],
                ms_MY: ["Berhenti: {stopChange} ({stopChangePercent}) {stopChangePip}, Amaun: {amount}"],
                nl_NL: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                pl: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Kwota: {amount}"],
                pt: ["Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Quantidade: {amount}"],
                ro: "Stop: {stopChange} ({stopChangePercent}) {stopChangePip}, Amount: {amount}",
                ru: ["Стоп: {stopChange} ({stopChangePercent}) {stopChangePip}, Сумма: {amount}"],
                sv: ["Stopp: {stopChange} ({stopChangePercent}) {stopChangePip}, belopp: {amount}"],
                th: ["หยุด: {stopChange} ({stopChangePercent}) {stopChangePip}, จำนวน: {amount}"],
                tr: ["Durdurma: {stopChange} ({stopChangePercent}) {stopChangePip}, Miktar: {amount}"],
                vi: ["Dừng: {stopChange} ({stopChangePercent}) {stopChangePip}, Số tiền: {amount}"],
                zh: ["止损:{stopChange} ({stopChangePercent}) {stopChangePip}, 账户: {amount}"],
                zh_TW: ["停損：{stopChange} ({stopChangePercent}) {stopChangePip}，賬戶：{amount}"]
            }
        },
        911810: e => {
            e.exports = {
                ar: ["حماية المركز"],
                ca_ES: "Protect Position",
                cs: "Protect Position",
                de: ["Position absichern"],
                el: "Protect Position",
                en: "Protect Position",
                es: ["Proteger posición"],
                fa: "Protect Position",
                fr: ["Protéger la position"],
                he_IL: ["הגן על הפוזיציה."],
                hu_HU: "Protect Position",
                id_ID: ["Lindungi Posisi"],
                it: ["Proteggi posizione"],
                ja: ["ポジション保護"],
                ko: ["프로텍트 포지션"],
                ms_MY: ["Melindungi Kedudukan"],
                nl_NL: "Protect Position",
                pl: ["Zabezpiecz pozycję"],
                pt: ["Proteger a posição"],
                ro: "Protect Position",
                ru: ["Защитить позицию"],
                sv: ["Skydda position"],
                th: ["ป้องกันโพซิชั่น"],
                tr: ["Pozisyonu Koru"],
                vi: ["Bảo vệ Vị thế"],
                zh: ["保护持仓"],
                zh_TW: ["保護倉位"]
            }
        },
        687061: e => {
            e.exports = {
                ar: ["كمية:‎{qty}‎"],
                ca_ES: ["Quantitat: {qty}"],
                cs: "Qty: {qty}",
                de: ["Anz: {qty}"],
                el: "Qty: {qty}",
                en: "Qty: {qty}",
                es: ["Cantidad: {qty}"],
                fa: "Qty: {qty}",
                fr: ["Qté: {qty}"],
                he_IL: ["כמות: {qty}"],
                hu_HU: ["Menny.: {qty}"],
                id_ID: ["Kuant: {qty}"],
                it: ["Q.tà: {qty}"],
                ja: ["数量: {qty}"],
                ko: ["수량: {qty}"],
                ms_MY: ["Kuantiti: {qty}"],
                nl_NL: "Qty: {qty}",
                pl: ["Ilość: {qty}"],
                pt: ["Qtde: {qty}"],
                ro: "Qty: {qty}",
                ru: ["Кол-во: {qty}"],
                sv: ["Kvt: {qty}"],
                th: ["จำนวน: {qty}"],
                tr: ["Mik: {qty}"],
                vi: ["S.Lg: {qty}"],
                zh: ["仓量:{qty}"],
                zh_TW: ["數量：{qty}"]
            }
        },
        419780: e => {
            e.exports = {
                ar: ["عكس الصفقة"],
                ca_ES: "Reverse Position",
                cs: "Reverse Position",
                de: ["Position Umkehren"],
                el: "Reverse Position",
                en: "Reverse Position",
                es: ["Revertir posición"],
                fa: "Reverse Position",
                fr: ["Inverser la Position"],
                he_IL: ["הפוך פוזיציה"],
                hu_HU: ["Fordított Pozíció"],
                id_ID: ["Membalik Posisi"],
                it: ["Inverti posizione"],
                ja: ["ポジションを反転"],
                ko: ["리버스 포지션"],
                ms_MY: ["Kedudukan Terbalik"],
                nl_NL: "Reverse Position",
                pl: ["Odwróć pozycje"],
                pt: ["Reverter Posição"],
                ro: "Reverse Position",
                ru: ["Перевернуть позицию"],
                sv: ["Omvänd position"],
                th: ["ตำแหน่งการย้อนกลับ"],
                tr: ["Karşıt Pozisyon"],
                vi: ["Vị thế Đảo ngược"],
                zh: ["平仓反手"],
                zh_TW: ["平倉反手"]
            }
        },
        278934: e => {
            e.exports = {
                ar: ["الكتف الأيمن"],
                ca_ES: ["Espatlla dreta"],
                cs: "Right Shoulder",
                de: ["Rechte Schulter"],
                el: "Right Shoulder",
                en: "Right Shoulder",
                es: ["Hombro derecho"],
                fa: "Right Shoulder",
                fr: ["Epaule droite"],
                he_IL: ["כתף ימין"],
                hu_HU: ["Jobb Váll"],
                id_ID: "Right Shoulder",
                it: ["Spalla destra"],
                ja: ["右ショルダー"],
                ko: ["오른어깨"],
                ms_MY: ["Bahu Kanan"],
                nl_NL: "Right Shoulder",
                pl: ["Prawe ramię"],
                pt: ["Ombro Direito"],
                ro: "Right Shoulder",
                ru: ["Правое плечо"],
                sv: ["Höger skuldra"],
                th: ["ไหล่ขวา"],
                tr: ["Sağ Omuz"],
                vi: ["Vai Phải"],
                zh: ["右肩"],
                zh_TW: ["右肩"]
            }
        },
        353115: e => {
            e.exports = {
                ar: ["نسبة المخاطرة/العائد: {ratio}"],
                ca_ES: ["Ràtio risc/benefici: {ratio}"],
                cs: ["Poměr rizika / odměny: {ratio}"],
                de: ["Chance/Risiko Verhältnis: {ratio}"],
                el: "Risk/Reward Ratio: {ratio}",
                en: "Risk/Reward Ratio: {ratio}",
                es: ["Relación riesgo/beneficio: {ratio}"],
                fa: ["‫نسبت ریسک به سود: {ratio}"],
                fr: ["Ratio Risque/Récompense: {ratio}"],
                he_IL: ["יחס סיכוי/סיכון: {ratio}"],
                hu_HU: ["Kockázat/Nyereség Arány: {ratio}"],
                id_ID: ["Rasio Risiko/Perolehan: {ratio}"],
                it: ["Rapporto rischio/rendimento: {ratio}"],
                ja: ["リスク／リワード比: {ratio}"],
                ko: ["위험/보상율: {ratio}"],
                ms_MY: ["Nisbah Risiko/Ganjaran: {ratio}"],
                nl_NL: ["Risico/opbrengst ratio: {ratio}"],
                pl: ["Współczynnik Ryzyko/Zysk: {ratio}"],
                pt: ["Razão risco/retorno: {ratio}"],
                ro: "Risk/Reward Ratio: {ratio}",
                ru: ["Соотношение риск/прибыль: {ratio}"],
                sv: ["Risk/reward-kvot: {ratio}"],
                th: ["ความเสี่ยง/ผลตอบแทน : {ratio}"],
                tr: ["Risk/Ödül Oranı: {ratio}"],
                vi: ["Tỷ lệ Rủi ro/Lợi nhuận: {ratio}"],
                zh: ["盈亏比: {ratio}"],
                zh_TW: ["風險/報酬比：{ratio}"]
            }
        },
        515166: e => {
            e.exports = {
                ar: ["هدف:{profitChange} ({profitChangePercent}) {profitChangePip}، الكمية:‎{amount}‎"],
                ca_ES: ["Objectiu: {profitChange} ({profitChangePercent}) {profitChangePip}, Import: {amount}"],
                cs: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                de: ["Ziel: {profitChange} ({profitChangePercent}) {profitChangePip}, Betrag: {amount}"],
                el: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                en: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                es: ["Objetivo: {profitChange} ({profitChangePercent}) {profitChangePip}, Importe: {amount}"],
                fa: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                fr: ["Cible: {profitChange} ({profitChangePercent}) {profitChangePip},Montant: {amount}"],
                he_IL: ["יעד: {profitChange} ({profitChangePercent}) {profitChangePip}, סכום: {amount}"],
                hu_HU: ["Cél: {profitChange} ({profitChangePercent}) {profitChangePip}, Összeg: {amount}"],
                id_ID: ["Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Jumlah: {amount}"],
                it: ["Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Quantità: {amount}"],
                ja: ["ターゲット: {profitChange} ({profitChangePercent}) {profitChangePip}, 金額: {amount}"],
                ko: ["타겟: {profitChange} ({profitChangePercent}) {profitChangePip}, 금액: {amount}"],
                ms_MY: ["Sasaran: {profitChange} ({profitChangePercent}) {profitChangePip}, Amaun: {amount}"],
                nl_NL: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                pl: ["Cel: {profitChange} ({profitChangePercent}) {profitChangePip}, Kwota: {amount}"],
                pt: ["Alvos: {profitChange} ({profitChangePercent}) {profitChangePip}, Quantidade: {amount}"],
                ro: "Target: {profitChange} ({profitChangePercent}) {profitChangePip}, Amount: {amount}",
                ru: ["Цель: {profitChange} ({profitChangePercent}) {profitChangePip}, Сумма: {amount}"],
                sv: ["Mål: {profitChange} ({profitChangePercent}) {profitChangePip}, Belopp: {amount}"],
                th: ["เป้าหมาย: {profitChange} ({profitChangePercent}) {profitChangePip}, จำนวน: {amount}"],
                tr: ["Hedef: {profitChange} ({profitChangePercent}) {profitChangePip}, Miktar: {amount}"],
                vi: ["Mục tiêu: {profitChange} ({profitChangePercent}) {profitChangePip}, Số tiền: {amount}"],
                zh: ["目标: {profitChange} ({profitChangePercent}) {profitChangePip}, 账户: {amount}"],
                zh_TW: ["目標：{profitChange} ({profitChangePercent}) {profitChangePip}，賬戶：{amount}"]
            }
        },
        753716: e => {
            e.exports = {
                ar: ["الصورة التي يتم لصقها كبيرة جدًا"],
                ca_ES: ["La imatge que voleu enganxar és massa gran"],
                cs: "The image being pasted is way too large",
                de: ["Das eingefügte Bild ist viel zu groß"],
                el: "The image being pasted is way too large",
                en: "The image being pasted is way too large",
                es: ["La imagen que se está pegando es demasiado grande"],
                fa: "The image being pasted is way too large",
                fr: ["L'image collée est beaucoup trop grande"],
                he_IL: ["התמונה המודבקת גדולה מדי"],
                hu_HU: "The image being pasted is way too large",
                id_ID: ["Gambar yang akan ditempel terlalu besar"],
                it: ["L'immagine incollata è troppo grande"],
                ja: ["貼り付けた画像が大きすぎます"],
                ko: ["붙여 넣는 이미지가 너무 큽니다."],
                ms_MY: ["Imej yang ditampal adalah terlalu besar"],
                nl_NL: "The image being pasted is way too large",
                pl: ["Wklejany obraz jest o wiele za duży"],
                pt: ["A imagem colada é muito grande"],
                ro: "The image being pasted is way too large",
                ru: ["Изображение слишком большого размера"],
                sv: ["Bilden som klistrades in är alldeles för stor"],
                th: ["รูปภาพที่กำลังจัดวางมีขนาดใหญ่เกินไป"],
                tr: ["Yapıştırılan görüntü çok büyük"],
                vi: ["Hình ảnh được dán quá lớn"],
                zh: ["粘贴的图片太大了"],
                zh_TW: ["粘貼的圖片太大了"]
            }
        },
        326273: e => {
            e.exports = {
                ar: ["مسافة: {number} px"],
                ca_ES: ["distància: {number} px"],
                cs: ["Vzdálenost: {number} px"],
                de: ["Abstand: {number} px"],
                el: ["απόσταση: {number} px"],
                en: "distance: {number} px",
                es: ["distancia: {number} px"],
                fa: ["{number} px :فاصله مختصات"],
                fr: "distance: {number} px",
                he_IL: ["מרחק: {number} px"],
                hu_HU: ["távolság: {number} px"],
                id_ID: ["jarak: {number} px"],
                it: ["distanza {number} px"],
                ja: ["距離: {number} px"],
                ko: ["거리: {number} px"],
                ms_MY: ["jarak: {number} px"],
                nl_NL: ["afstand: {number} px"],
                pl: ["dystans: {number} px"],
                pt: ["distância: {number} px"],
                ro: "distance: {number} px",
                ru: ["Расстояние: {number} пк"],
                sv: ["avstånd: {number} px"],
                th: ["ระยะ: {number} px"],
                tr: ["mesafe: {number} px"],
                vi: ["khoảng cách: {number} px"],
                zh: ["距离: {number} px"],
                zh_TW: ["距離：{number} px"]
            }
        },
        33355: e => {
            e.exports = {
                ar: ["{count} أعمدة"],
                ca_ES: ["{count} barres"],
                cs: ["{count} Sloupcový graf"],
                de: ["{count} Balken"],
                el: "{count} bars",
                en: "{count} bars",
                es: ["{count} barras"],
                fa: ["{count} میله"],
                fr: ["{count} barres"],
                he_IL: ["נרות {count}"],
                hu_HU: ["{count} oszlop"],
                id_ID: ["{count} bar"],
                it: ["{count} barre"],
                ja: ["{count} バー"],
                ko: ["{count} 봉"],
                ms_MY: ["{count} bar"],
                nl_NL: "{count} bars",
                pl: ["{count} słupki"],
                pt: ["barras: {count}"],
                ro: "{count} bars",
                ru: ["Бары: {count}"],
                sv: ["{count} staplar"],
                th: ["{count} ช่อง"],
                tr: ["{count} çubukta"],
                vi: ["{count} thanh"],
                zh: ["{count}根K线"],
                zh_TW: ["{count}根K棒"]
            }
        },
        72892: e => {
            e.exports = {
                ar: ["‎{status}‎ الهدف والخسارة:‎{pnl}‎"],
                ca_ES: ["{status} PiG: {pnl}"],
                cs: ["{status} Z&Z: {pnl}"],
                de: ["{status} G&V: {pnl}"],
                el: "{status} P&L: {pnl}",
                en: "{status} P&L: {pnl}",
                es: ["{status} PyG: {pnl}"],
                fa: ["‎{status} P&L {pnl}‎"],
                fr: ["{status} Gains&Pertes: {pnl}"],
                he_IL: ["{status} רווח/הפסד: {pnl}"],
                hu_HU: "{status} P&L: {pnl}",
                id_ID: "{status} P&L: {pnl}",
                it: "{status} P&L: {pnl}",
                ja: ["{status}損益: {pnl}"],
                ko: ["{status} 손익: {pnl}"],
                ms_MY: "{status} P&L: {pnl}",
                nl_NL: ["{status} winst & verlies: {pnl}"],
                pl: "{status} P&L: {pnl}",
                pt: ["{status} L&P: {pnl}"],
                ro: "{status} P&L: {pnl}",
                ru: ["ПР/УБ {status}: {pnl}"],
                sv: "{status} P&L: {pnl}",
                th: ["{status} กำไร&ขาดทุน: {pnl}"],
                tr: ["{status} Kar/Zarar: {pnl}"],
                vi: ["{status} Lợi nhuận & Thua lỗ: {pnl}"],
                zh: ["{status} 盈利&亏损: {pnl}"],
                zh_TW: ["{status}損益表：{pnl}"]
            }
        }
    }
]);
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [60213], {
        631078: (e, t, s) => {
            "use strict";
            s.d(t, {
                useWatchedValueReadonly: () => n
            });
            var i = s(50959);
            const n = (e, t = !1) => {
                const s = "watchedValue" in e ? e.watchedValue : void 0,
                    n = "defaultValue" in e ? e.defaultValue : e.watchedValue.value(),
                    [a, l] = (0, i.useState)(s ? s.value() : n);
                return (t ? i.useLayoutEffect : i.useEffect)((() => {
                    if (s) {
                        l(s.value());
                        const e = e => l(e);
                        return s.subscribe(e), () => s.unsubscribe(e)
                    }
                    return () => {}
                }), [s]), a
            }
        },
        701720: e => {
            e.exports = {
                wrapper: "wrapper-iSWHgsXm",
                timezone: "timezone-iSWHgsXm",
                sessionDayWrapper: "sessionDayWrapper-iSWHgsXm",
                nowWrapper: "nowWrapper-iSWHgsXm",
                now: "now-iSWHgsXm",
                sessionDay: "sessionDay-iSWHgsXm",
                weekDay: "weekDay-iSWHgsXm",
                sessionDaySegments: "sessionDaySegments-iSWHgsXm",
                timeMarkWrapper: "timeMarkWrapper-iSWHgsXm",
                timeMarkSegment: "timeMarkSegment-iSWHgsXm",
                timeMark: "timeMark-iSWHgsXm",
                timeMarkSegmentAlignByEnds: "timeMarkSegmentAlignByEnds-iSWHgsXm",
                segment: "segment-iSWHgsXm",
                small: "small-iSWHgsXm",
                start: "start-iSWHgsXm",
                end: "end-iSWHgsXm",
                active: "active-iSWHgsXm",
                green: "green-iSWHgsXm",
                orange: "orange-iSWHgsXm",
                blue: "blue-iSWHgsXm",
                gray: "gray-iSWHgsXm",
                tooltip: "tooltip-iSWHgsXm",
                time: "time-iSWHgsXm"
            }
        },
        150301: (e, t, s) => {
            "use strict";
            s.d(t, {
                FullSessionScheduleWidget: () => $
            });
            var i = s(650151),
                n = s(923195),
                a = s(726262),
                l = s(758337),
                r = s(831471),
                o = s(936410),
                u = s(414879),
                c = s(747342),
                d = s(988411),
                h = s.n(d),
                m = s(155925);

            function p(e) {
                return e === u.WeekDays.SUNDAY ? u.WeekDays.SATURDAY : e - 1
            }

            function y(e) {
                return e === u.WeekDays.SATURDAY ? u.WeekDays.SUNDAY : e + 1
            }

            function v(e, t) {
                const s = p(t);
                return 0 === e[s].entries.length ? v(e, s) : {
                    dayIndex: s,
                    entries: e[s].entries
                }
            }

            function g(e, t) {
                const s = y(t);
                return 0 === e[s].entries.length ? g(e, s) : {
                    dayIndex: s,
                    entries: e[s].entries
                }
            }

            function _(e) {
                for (; e > c.minutesPerDay;) e -= c.minutesPerDay;
                const t = e % 60,
                    s = (e - t) / 60;
                return (0, r.numberToStringWithLeadingZero)(s, 2) + ":" + (0, r.numberToStringWithLeadingZero)(t, 2)
            }
            const S = {
                [u.WeekDays.MONDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.MONDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.TUESDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.TUESDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.WEDNESDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.WEDNESDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.THURSDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.THURSDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.FRIDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.FRIDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.SATURDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.SATURDAY],
                    isActive: !1,
                    entries: []
                },
                [u.WeekDays.SUNDAY]: {
                    title: o.weekDaysShortNames[u.WeekDays.SUNDAY],
                    isActive: !1,
                    entries: []
                }
            };

            function w(e, t) {
                return e.start.value === t.start.value && e.end.value === t.end.value
            }

            function f(e, t) {
                return w(e[0], t[0])
            }

            function D(e) {
                const t = e.start(),
                    s = e.length(),
                    i = e.sessionStartDayOfWeek(),
                    n = e.sessionEndDayOfWeek(),
                    a = _(t),
                    l = _(t + s);
                return s > c.minutesPerDay ? `${o.weekDaysShortNames[i]} ${a} — ${o.weekDaysShortNames[n]} ${l}` : `${a} — ${l}`
            }

            function k(e, t, s, i) {
                return Math.abs(i - s) > 1 ? `${o.weekDaysShortNames[s]} ${e.title} — ${o.weekDaysShortNames[i]} ${t.title}` : `${e.title} — ${t.title}`
            }

            function E(e, t, s) {
                for (const i of t) {
                    let t = i.sessionStartDayOfWeek();
                    const a = i.start(),
                        l = i.length(),
                        r = a + l,
                        o = [];
                    if (r <= c.minutesPerDay) o.push([a, r]);
                    else {
                        const e = Math.min(c.minutesPerDay - a, l);
                        o.push([a, a + e]), o.push([0, l - e])
                    }
                    for (let a = 0; a < o.length; a++) {
                        const l = o[a],
                            [r, u] = l,
                            d = r / c.minutesPerDay,
                            h = (0, n.lowerbound)(e[t].entries, d, ((e, t) => e.start.value < t)),
                            m = {
                                start: {
                                    value: d,
                                    title: _(r),
                                    isFirstOrLastPoint: r === i.start()
                                },
                                end: {
                                    value: u / c.minutesPerDay,
                                    title: _(u),
                                    isFirstOrLastPoint: o.length - 1 === a
                                },
                                type: s,
                                tooltip: D(i),
                                showStartForLastEntry: !1,
                                showEndForFirstEntry: !1
                            };
                        e[t].entries.splice(h, 0, m), t = y(t)
                    }
                }
            }
            class M {
                constructor(e) {
                    this.sessionsDays = new(h())((0, l.clone)(S)), this.todaySession = new(h())((0, l.clone)({
                        entries: []
                    })), this._todayInExchangeTime = null, this._symbolInfo = e.symbolInfo().spawn(), this._symbolInfo.subscribe(this._updateEntriesBySubSessions.bind(this), {
                        callWithLast: !0
                    })
                }
                destroy() {
                    this._symbolInfo.destroy()
                }
                currentTimeValue() {
                    return null === this._todayInExchangeTime ? -1 : c.get_minutes_from_midnight(this._todayInExchangeTime) / c.minutesPerDay
                }
                timezone() {
                    const e = this._symbolInfo.value();
                    return null === e ? "" : (0, a.timezoneTitle)(e.timezone)
                }
                _updateEntriesBySubSessions(e) {
                    var t;
                    this._updateTodayWithOffsets(e);
                    const s = this._createSubSessionSpecs(e),
                        n = (a = (null === (t = this._todayInExchangeTime) || void 0 === t ? void 0 : t.getUTCDay()) || (new Date).getDay()) < u.WeekDays.SATURDAY ? a + 1 : u.WeekDays.SUNDAY;
                    var a;
                    const r = (0, l.clone)(S);
                    r[n].isActive = !0;
                    for (const e of Array.from(s.keys())) {
                        E(r, (0, i.ensureDefined)(s.get(e)).getEntriesForWeekByCalendar((0, i.ensureNotNull)(this._todayInExchangeTime)), e)
                    }! function(e) {
                        const t = _(0),
                            s = _(c.minutesPerDay),
                            n = (0, l.clone)(e);
                        for (const a of Object.keys(e)) {
                            const l = parseInt(a),
                                r = e[l].entries;
                            if (0 === r.length) {
                                r.push({
                                    start: {
                                        value: 0,
                                        title: t,
                                        isFirstOrLastPoint: !0
                                    },
                                    end: {
                                        value: 1,
                                        title: s,
                                        isFirstOrLastPoint: !0
                                    },
                                    type: 3,
                                    tooltip: `${t} — ${s}`,
                                    showStartForLastEntry: !1,
                                    showEndForFirstEntry: !1
                                });
                                continue
                            }
                            const o = p(l),
                                u = y(l),
                                d = n[o].entries,
                                h = n[u].entries,
                                m = v(n, l),
                                S = g(n, l),
                                w = r.length;
                            let f = 0;
                            for (let e = 0; e < w; e++) {
                                const s = r[e],
                                    n = e > 0 ? r[e - 1] : null,
                                    a = 0 === e;
                                if (0 === s.start.value || 0 === s.start.value && 1 === s.end.value || null !== n && s.start.value === n.end.value) {
                                    f++;
                                    continue
                                }
                                const o = a ? m.entries[m.entries.length - 1] : (0, i.ensureNotNull)(n),
                                    u = {
                                        start: {
                                            value: a ? 0 : r[e - 1].end.value,
                                            title: a ? t : r[e - 1].end.title,
                                            isFirstOrLastPoint: !(a && d.length > 0) || 1 === d[d.length - 1].end.value
                                        },
                                        end: {
                                            value: s.start.value,
                                            title: s.start.title,
                                            isFirstOrLastPoint: !0
                                        },
                                        type: 3,
                                        tooltip: k(o.end, s.start, m.dayIndex, l),
                                        showStartForLastEntry: !1,
                                        showEndForFirstEntry: !1
                                    };
                                r.splice(f, 0, u), f = e + 2
                            }
                            const D = r[r.length - 1];
                            1 !== D.end.value && r.push({
                                start: {
                                    value: D.end.value,
                                    title: D.end.title,
                                    isFirstOrLastPoint: !0
                                },
                                end: {
                                    value: 1,
                                    title: _(c.minutesPerDay),
                                    isFirstOrLastPoint: !(h.length > 0) || 0 === h[0].start.value
                                },
                                type: 3,
                                tooltip: k(D.end, S.entries[0].start, l, S.dayIndex),
                                showStartForLastEntry: !1,
                                showEndForFirstEntry: !1
                            })
                        }
                    }(r),
                    function(e) {
                        for (const i of Object.keys(e)) {
                            const n = parseInt(i),
                                a = e[n].entries;
                            if (1 === a.length) continue;
                            const l = p(n),
                                r = y(n),
                                o = a[0],
                                u = a[a.length - 1];
                            o.start.isFirstOrLastPoint || (o.showStartForLastEntry = (t = a, s = e[l].entries, w(t[t.length - 1], s[s.length - 1]))), u.end.isFirstOrLastPoint || (u.showEndForFirstEntry = f(a, e[r].entries))
                        }
                        var t, s
                    }(r), this.sessionsDays.setValue(r), this.todaySession.setValue(r[n])
                }
                _createSubSessionSpecs(e) {
                    if (null === e) return new Map;
                    if (void 0 === e.subsessions) return new Map([
                        [0, new m.SessionSpec(e.timezone, e.session, e.session_holidays, e.corrections)]
                    ]);
                    const t = "regular",
                        s = "premarket",
                        i = "postmarket",
                        n = [t, s, i],
                        a = new Map;
                    for (const l of n) {
                        let n = null;
                        switch (l) {
                            case t:
                                n = 0;
                                break;
                            case s:
                                n = 1;
                                break;
                            case i:
                                n = 2
                        }
                        if (null !== n) {
                            const t = e.subsessions.find((e => e.id === l));
                            void 0 !== t && a.set(n, new m.SessionSpec(e.timezone, t["session-display"] || t.session, e.session_holidays, t["session-correction"]))
                        }
                    }
                    return a
                }
                _updateTodayWithOffsets(e) {
                    if (null === e) return void(this._todayInExchangeTime = null);
                    const t = 1e3 * window.ChartApiInstance.serverTimeOffset();
                    this._todayInExchangeTime = c.get_cal_from_unix_timestamp_ms(c.get_timezone(e.timezone), Date.now() + t)
                }
            }
            var W = s(50959),
                N = s(497754),
                b = s(777754),
                T = s(631078),
                F = s(777491),
                x = s(701720);
            const A = new WeakMap;

            function H(e) {
                return A.has(e) || A.set(e, (0, F.randomHash)()), (0, i.ensureDefined)(A.get(e))
            }
            const O = new Map([
                    [0, x.green],
                    [1, x.orange],
                    [2, x.blue],
                    [3, x.gray]
                ]),
                C = new Map([
                    [0, b.t(null, void 0, s(383949))],
                    [1, b.t(null, void 0, s(356042))],
                    [2, b.t(null, void 0, s(429985))],
                    [3, b.t(null, void 0, s(895814))]
                ]),
                I = b.t(null, void 0, s(780227));

            function V(e) {
                const {
                    segment: t,
                    forceStart: s,
                    forceEnd: i
                } = e, n = t.end.value - t.start.value, a = n < .03, l = {
                    left: 100 * t.start.value + "%",
                    width: `calc(${100*n}% + ${a?2:0}px)`
                }, r = N(x.segment, O.get(t.type), (s || t.start.isFirstOrLastPoint) && x.start, (i || t.end.isFirstOrLastPoint) && x.end, a && x.small, "common-tooltip-html", "apply-common-tooltip"), o = function(e, t) {
                    return `<div class="${x.tooltip}">\n\t\t<span class="${O.get(t)}">${C.get(t)}</span>\n\t\t<span class="${x.time}">${e}</span>\n\t</div>`
                }(t.tooltip, t.type);
                return W.createElement("div", {
                    className: r,
                    style: l,
                    "data-tooltip": o
                })
            }

            function L(e) {
                const {
                    sessionDay: t
                } = e, s = t.entries.map(((e, s) => W.createElement(V, {
                    key: `${H(e)}Segment`,
                    segment: e,
                    forceStart: 0 === s && 3 === e.type,
                    forceEnd: s === t.entries.length - 1 && 3 === e.type
                }))), i = N(x.sessionDay, t.isActive && x.active);
                return W.createElement("div", {
                    className: i
                }, W.createElement("div", {
                    className: x.weekDay
                }, t.title), W.createElement("div", {
                    className: x.sessionDaySegments
                }, s))
            }

            function P(e) {
                const {
                    sessionDays: t,
                    currentTimeMark: s
                } = e, i = [], n = parseInt(Object.keys(t).filter((e => t[parseInt(e)].isActive))[0]), a = t[n], l = a.entries.filter((e => e.start.value <= s && e.end.value >= s))[0];
                !l.start.isFirstOrLastPoint && l.showStartForLastEntry ? i.push(a.entries[a.entries.length - 1].start) : i.push(l.start);
                const r = !l.end.isFirstOrLastPoint && l.showEndForFirstEntry ? a.entries[0].end : l.end;
                if (i[0].value !== r.value && i.push(r), 0 === i.length) return null;
                i.sort(((e, t) => e.value - t.value));
                const o = i.map((e => W.createElement("div", {
                        key: H(e),
                        className: x.timeMark
                    }, e.title))),
                    u = 100 * (2 === i.length ? i[1].value - i[0].value : 0),
                    c = N(u > 12 && x.timeMarkSegmentAlignByEnds, x.timeMarkSegment);
                return W.createElement("div", {
                    className: x.sessionDay
                }, W.createElement("div", {
                    className: x.weekDay
                }), W.createElement("div", {
                    className: x.timeMarkWrapper
                }, W.createElement("div", {
                    className: c,
                    style: {
                        left: 100 * i[0].value + "%",
                        width: `${u}%`
                    }
                }, o)))
            }
            class $ {
                constructor(e) {
                    this._source = e, this._fullSessionScheduleViewModel = new M(e)
                }
                destroy() {
                    this._fullSessionScheduleViewModel.destroy()
                }
                renderer(e, t) {
                    var s, i;
                    return (null === (i = null === (s = this._source.marketStatusModel()) || void 0 === s ? void 0 : s.futuresContractExpirationTime()) || void 0 === i ? void 0 : i.expired().value()) ? null : function(e) {
                        const {
                            key: t,
                            className: s,
                            now: i,
                            timezone: n
                        } = e, a = (0, T.useWatchedValueReadonly)({
                            watchedValue: e.sessionDays
                        }), l = Object.values(a).filter((e => e.isActive))[0], r = N(s, x.wrapper);
                        return W.createElement("div", {
                            key: t,
                            className: r
                        }, W.createElement("div", {
                            className: x.sessionDayWrapper
                        }, W.createElement(L, {
                            sessionDay: l
                        }), W.createElement("div", {
                            className: x.nowWrapper
                        }, W.createElement("div", {
                            className: x.now,
                            style: {
                                left: 100 * i + "%"
                            }
                        }))), W.createElement(P, {
                            sessionDays: a,
                            currentTimeMark: i
                        }), W.createElement("div", {
                            className: x.timezone
                        }, `${I}: ${n}`))
                    }({
                        key: e,
                        className: t,
                        sessionDays: this._fullSessionScheduleViewModel.sessionsDays,
                        now: this._fullSessionScheduleViewModel.currentTimeValue(),
                        timezone: this._fullSessionScheduleViewModel.timezone()
                    })
                }
                updateSource(e) {}
            }
        },
        398451: (e, t, s) => {
            "use strict";
            s.d(t, {
                MarketStatusViewModel: () => w
            });
            var i = s(535799),
                n = s(988411),
                a = s.n(n),
                l = s(98472),
                r = s(534193),
                o = s(314967),
                u = s(777754),
                c = s(498532),
                d = s(73347),
                h = s(666854);
            const m = new Map([
                    ["small", d],
                    ["medium", h],
                    ["large", h]
                ]),
                p = c.marketStatusExpired,
                y = u.t(null, void 0, s(911235)),
                v = u.t(null, void 0, s(911235)),
                g = o.colorsPalette["color-market-expired"],
                _ = u.t(null, void 0, s(929493));
            var S = s(543033);
            class w extends r.StatusViewModel {
                constructor(e, t) {
                    super({
                        tooltipMap: S.tooltipMap,
                        iconMap: S.iconMap,
                        classNameMap: S.classNameMap,
                        titleMap: S.titleMap,
                        titleColorMap: S.titleColorMap,
                        actionMap: S.actionMap,
                        size: t
                    }), this._model = null, this._expiredStatus = null, this._marketStatus = new(a())(null).spawn(), this._sessionEdge = new(a())(null).spawn(), this.setModel(e), l.showMarketOpenStatusProperty.subscribe(this, this._showMarketOpenStatusPropertyChanged)
                }
                destroy() {
                    this._marketStatus.destroy(), this._sessionEdge.destroy(), this._model = null, l.showMarketOpenStatusProperty.unsubscribeAll(this)
                }
                setModel(e) {
                    var t;
                    if (this._marketStatus.destroy(), this._sessionEdge.destroy(), null === (t = this._expiredStatus) || void 0 === t || t.destroy(), null === e) return this._marketStatus = new(a())(null).spawn(), this._sessionEdge = new(a())(null).spawn(), void(this._expiredStatus = null);
                    this._model = e;
                    const s = e.futuresContractExpirationTime();
                    s && (this._expiredStatus = s.expired().spawn(), this._expiredStatus.subscribe((e => {
                        e && this._updateByStatus(this._marketStatus.value())
                    }))), this._marketStatus = e.status().spawn(), this._marketStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    }), this._sessionEdge = e.nextSessionEdge().spawn(), this._sessionEdge.subscribe(this._updateTooltip.bind(this)), this._updateTooltip()
                }
                async _getHtml(e) {
                    if (this._isExpiredFutures()) return [(0, i.htmlEscape)(_)];
                    const t = [(0,
                            i.htmlEscape)(S.marketStatusDescription[e])],
                        s = this._marketStatus.value();
                    if (null !== this._model && null !== s) {
                        const s = this._model.nextSessionEdge().value();
                        null !== s && t.push({
                            text: S.countdownFnMap[e](s),
                            bold: !0
                        })
                    }
                    return t
                }
                _shouldBeHiddenByStatus(e) {
                    return !l.showMarketOpenStatusProperty.value() && "market" === e
                }
                _getTooltip(e) {
                    return this._isExpiredFutures() ? y : super._getTooltip(e)
                }
                _getIcon(e) {
                    return this._isExpiredFutures() ? m.get(this._size) || null : super._getIcon(e)
                }
                _getClassName(e) {
                    return this._isExpiredFutures() ? p : super._getClassName(e)
                }
                _getTitle(e) {
                    return this._isExpiredFutures() ? v : super._getTitle(e)
                }
                _getTitleColor(e) {
                    return this._isExpiredFutures() ? g : super._getTitleColor(e)
                }
                _isExpiredFutures() {
                    var e, t, s;
                    return null !== (s = null === (t = null === (e = this._model) || void 0 === e ? void 0 : e.futuresContractExpirationTime()) || void 0 === t ? void 0 : t.expired().value()) && void 0 !== s && s
                }
                _updateStatus(e) {
                    this._status.setValue(e)
                }
                _updateTooltip() {
                    const e = this._status.value();
                    null !== e && this._updateFullTooltipByStatus(e)
                }
                _showMarketOpenStatusPropertyChanged() {
                    this._updateByStatus(this._status.value())
                }
            }
        },
        534193: (e, t, s) => {
            "use strict";
            s.d(t, {
                StatusViewModel: () => r
            });
            var i = s(988411),
                n = s.n(i),
                a = s(535799),
                l = s(498532);
            class r {
                constructor(e) {
                    this.isBlinkingMode = new(n())(!1), this._status = new(n())(null), this._fullTooltip = new(n())(null), this._iconClassNames = new(n())(null), this._visible = new(n())(!1), this._tooltip = new(n())(null), this._icon = new(n())(null), this._className = new(n())(null), this._infoMaps = e, this._size = e.size || "small", this._status.subscribe(this._updateByStatus.bind(this), {
                        callWithLast: !0
                    }), this._className.subscribe(this._updateIconClassName.bind(this))
                }
                turnOffBlinkingMode() {}
                status() {
                    return this._status
                }
                tooltip() {
                    return this._tooltip
                }
                icon() {
                    return this._icon
                }
                className() {
                    return this._className
                }
                visible() {
                    return this._visible
                }
                size() {
                    return this._size
                }
                fullInfo() {
                    return this._fullTooltip
                }
                _getTooltip(e) {
                    var t, s;
                    return null !== (s = null === (t = this._infoMaps.tooltipMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null
                }
                _getIcon(e) {
                    let t;
                    const s = this._infoMaps.iconMap.get(e);
                    return void 0 !== s && (t = s.get(this._size)), t || null
                }
                _getClassName(e) {
                    return this._infoMaps.classNameMap.get(e) || null
                }
                _getTitle(e) {
                    var t, s;
                    return null !== (s = null === (t = this._infoMaps.titleMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null
                }
                _getTitleColor(e) {
                    var t, s;
                    return null !== (s = null === (t = this._infoMaps.titleColorMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null
                }
                async _getHtml(e) {
                    var t, s, i;
                    return null !== (i = null === (s = null === (t = this._infoMaps.htmlMap) || void 0 === t ? void 0 : t.get(e)) || void 0 === s ? void 0 : s.map(a.htmlEscape)) && void 0 !== i ? i : null
                }
                _getAction(e) {
                    var t, s;
                    return null !== (s = null === (t = this._infoMaps.actionMap) || void 0 === t ? void 0 : t.get(e)) && void 0 !== s ? s : null
                }
                async _updateFullTooltipByStatus(e) {
                    const t = await this._getHtml(e);
                    this._status.value() === e && this._fullTooltip.setValue([{
                        icon: this._icon.value(),
                        iconClassName: this._iconClassNames.value(),
                        title: this._getTitle(e),
                        titleColor: this._getTitleColor(e),
                        html: t,
                        size: this._size,
                        action: this._getAction(e)
                    }])
                }
                _updateByStatus(e) {
                    if (null === e || this._shouldBeHiddenByStatus(e)) return this._icon.setValue(null), this._tooltip.setValue(null), void this._visible.setValue(!1);
                    this._icon.setValue(this._getIcon(e)), this._className.setValue(this._getClassName(e)), this._tooltip.setValue(this._getTooltip(e)), this._visible.setValue(!0), this._updateFullTooltipByStatus(e)
                }
                _shouldBeHiddenByStatus(e) {
                    return !1
                }
                _updateIconClassName(e) {
                    null !== e ? this._iconClassNames.setValue([l.statusItem, e]) : this._iconClassNames.setValue(null)
                }
            }
        },
        666854: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M4.74 3.26a4.62 4.62 0 0 0 1.8 5.3l.67.44-.66.44a4.63 4.63 0 0 0-1.81 5.3c.05.15.2.26.36.26h7.8c.17 0 .31-.1.37-.26a4.62 4.62 0 0 0-1.82-5.3L10.8 9l.66-.44a4.63 4.63 0 0 0 1.82-5.3.39.39 0 0 0-.37-.26H5.1c-.17 0-.31.1-.36.26ZM9 8.32l1.58-1.06a3.06 3.06 0 0 0 1.36-2.7H6.06a3.06 3.06 0 0 0 1.36 2.7L9 8.32Z"/></svg>'
        },
        73347: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M5.45 4.22a3.85 3.85 0 0 0 1.5 4.41l.56.37-.55.37a3.86 3.86 0 0 0-1.51 4.41c.04.13.16.22.3.22h6.5c.14 0 .26-.09.3-.22a3.85 3.85 0 0 0-1.5-4.41L10.48 9l.55-.37a3.86 3.86 0 0 0 1.51-4.41.32.32 0 0 0-.3-.22h-6.5a.32.32 0 0 0-.3.22ZM9 8.44l1.32-.89a2.55 2.55 0 0 0 1.13-2.25h-4.9c-.04.88.37 1.74 1.13 2.25L9 8.44Z"/></svg>'
        }
    }
]);
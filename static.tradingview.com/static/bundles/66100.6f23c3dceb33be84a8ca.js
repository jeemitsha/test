"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [66100], {
        726322: (e, t, s) => {
            s.d(t, {
                SessionInfo: () => o,
                BarBuilderBase: () => a
            });
            var n = s(747342),
                i = s(119460),
                r = s(155925);
            class o {
                constructor(e, t, s, n) {
                    this.init(e, t, s, n), this._state = {
                        timezone: e,
                        spec: t,
                        holidays: s,
                        corrections: n
                    }
                }
                init(e, t, s, i) {
                    this.timezone = n.get_timezone(e), this.spec = new r.SessionSpec(e, t, s, i)
                }
                state() {
                    return this._state
                }
                static fromState(e) {
                    return new o(e.timezone, e.spec, e.holidays, e.corrections)
                }
            }
            class a {
                alignTime(e) {
                    if (isNaN(e)) return NaN;
                    let t = this.indexOfBar(e);
                    return t === i.SessionStage.POST_SESSION && (this.moveTo(e), t = this.indexOfBar(e)), t < 0 ? NaN : this.startOfBar(t)
                }
            }
        },
        666100: (e, t, s) => {
            s.d(t, {
                SessionInfo: () => o.SessionInfo,
                getPeriodsBetweenDates: () => p,
                newBarBuilder: () => E
            });
            var n = s(747342),
                i = s(568450),
                r = s(43329),
                o = s(726322),
                a = s(119460);
            class _ extends o.BarBuilderBase {
                constructor(e, t) {
                    super(), this._sessionStartMs = -Number.MAX_VALUE, this._sessionEndMs = -Number.MAX_VALUE, this._periodSec = e, this._session = t
                }
                alignTimeIfPossible(e) {
                    const t = this.alignTime(e);
                    return isNaN(t) ? e : t
                }
                indexOfBar(e) {
                    return e < this._sessionStartMs ? a.SessionStage.PRE_SESSION : e >= this._sessionEndMs ? a.SessionStage.POST_SESSION : (0, r.toInt)(n.time_seconds_diff(e, this._sessionStartMs) / this._periodSec)
                }
                startOfBar(e) {
                    if (e === a.SessionStage.PRE_SESSION) {
                        const e = n.get_cal_from_unix_timestamp_ms(this._session.timezone, this._sessionStartMs - 1),
                            t = this._session.spec.alignToNearestSessionEnd(e, -1);
                        return n.cal_to_utc(this._session.timezone, t)
                    }
                    if (e === a.SessionStage.POST_SESSION) return this._sessionEndMs;
                    if (e < 0) throw new Error("Negative offset is not supported");
                    return this._sessionStartMs + n.time_seconds(this._periodSec * e)
                }
                endOfBar(e) {
                    if (e < 0) throw new Error("Index cannot be negative");
                    const t = this.startOfBar(e) + 1e3 * this._periodSec;
                    return t > this._sessionEndMs ? this._sessionEndMs : t
                }
                isLastBar(e, t) {
                    return t >= this._sessionStartMs + n.time_seconds(this._periodSec * (e + 1) - 1)
                }
                moveTo(e) {
                    const t = this._session.timezone,
                        s = n.utc_to_cal(t, e),
                        i = this._session.spec.alignToSessionStart(s);
                    this._sessionStartMs = n.cal_to_utc(t, s), n.add_minutes(s, i), this._sessionEndMs = n.cal_to_utc(t, s)
                }
                indexOfLastBarInSession() {
                    return (0, r.toInt)((this._sessionEndMs - 1 - this._sessionStartMs) / 1e3 / this._periodSec)
                }
                moveNext() {
                    this.moveTo(this._sessionEndMs)
                }
            }
            var h = s(718513);

            function d(e, t) {
                const s = n.clone(t),
                    i = e.businessDaysToCalendarDays(s, 1);
                i > 1 && n.add_date(s, i - 1);
                const r = e.leftBorderOfDailyBar(s);
                if (null === r) throw new Error("Cannot calculate left border of daily bar");
                return n.cal_to_utc(n.get_timezone(e.timezone()), r)
            }
            class c extends o.BarBuilderBase {
                constructor(e, t, s, n, i = !1) {
                    super(), this._periodStart = -Number.MAX_VALUE, this._periodEnd = -Number.MAX_VALUE, this._periodLastBarStart = -Number.MAX_VALUE, this._periodStartDay = new h.BusinessDay(0, 0, 0), this._periodEndDay = new h.BusinessDay(0, 0, 0), this._period = s, this._sessionTgt = e, this._builder = n, this._useBusinessDays = i, this._sessionSrc = i ? new o.SessionInfo("Etc/UTC", "24x7") : t || e
                }
                builder() {
                    return this._builder
                }
                alignTimeIfPossible(e) {
                    return this.tradingDayToSessionStart(e)
                }
                tradingDayToSessionStart(e) {
                    return this.moveTo(e), this.startOfBar(0)
                }
                indexOfBar(e) {
                    if (this._useBusinessDays) {
                        const t = h.BusinessDay.fromCalendar(n.get_cal_from_unix_timestamp_ms(this._sessionSrc.timezone, e));
                        return t.before(this._periodStartDay) ? a.SessionStage.PRE_SESSION : this._periodEndDay.before(t) ? a.SessionStage.POST_SESSION : 0
                    }
                    return e < this._periodStart ? a.SessionStage.PRE_SESSION : e >= this._periodEnd ? a.SessionStage.POST_SESSION : 0
                }
                startOfBar(e) {
                    if (e === a.SessionStage.PRE_SESSION) {
                        const e = n.get_cal_from_unix_timestamp_ms(this._sessionTgt.timezone, this._periodStart - 1),
                            t = this._sessionTgt.spec.alignToNearestSessionEnd(e, -1);
                        return n.cal_to_utc(this._sessionTgt.timezone, t) - 1
                    }
                    return e === a.SessionStage.POST_SESSION || e > 0 ? this._periodEnd : e === a.SessionStage.LASTBAR_SESSION ? this._periodLastBarStart : this._periodStart
                }
                moveTo(e) {
                    const t = n.get_cal_from_unix_timestamp_ms(this._sessionSrc.timezone, e);
                    this._sessionSrc.spec.correctTradingDay(t);
                    const s = n.get_year(t),
                        i = this._indexOfPeriodInYear(t),
                        r = i + this._period,
                        o = this._sessionTgt.spec,
                        a = this._sessionTgt.timezone,
                        _ = this._builder.startOfPeriod(a, i, s);
                    this._periodStart = d(o, _);
                    const c = n.clone(_),
                        l = o.businessDaysToCalendarDays(c, 1);
                    l > 1 && n.add_date(c, l - 1), this._periodStartDay = h.BusinessDay.fromCalendar(c);
                    const u = this._builder.startOfPeriod(a, r, s);
                    this._periodEnd = d(o, u);
                    const f = n.clone(u);
                    for (n.add_date(f, -1); o.isCalWeekEnd(f);) n.add_date(f, -1);
                    this._periodEndDay = h.BusinessDay.fromCalendar(f), n.add_date(u, -1),
                        function(e, t) {
                            for (; e.isCalWeekEnd(t);) n.add_date(t, -1)
                        }(this._sessionTgt.spec, u), this._periodLastBarStart = d(o, u), (this._periodLastBarStart < this._periodStart || this._periodLastBarStart === this._periodEnd) && (this._periodLastBarStart = this._periodStart)
                }
                endOfBar(e) {
                    if (0 !== e) throw new Error("index should be 0");
                    return this._periodEnd
                }
                isLastBar(e, t) {
                    if (0 !== e) throw new Error("index should be 0");
                    return t >= this._periodLastBarStart
                }
                currentRange() {
                    return {
                        from: this._periodStartDay,
                        to: this._periodEndDay
                    }
                }
                indexOfBarInYear(e) {
                    const t = n.get_cal_from_unix_timestamp_ms(this._sessionSrc.timezone, e),
                        s = n.get_year(t),
                        i = this._builder.indexOfPeriod(t),
                        o = this._sessionTgt.timezone;
                    let a = this._builder.startOfPeriod(o, i, s),
                        _ = d(this._sessionTgt.spec, a);
                    return a = n.get_cal_from_unix_timestamp_ms(n.get_timezone("Etc/UTC"), _), s < n.get_year(a) ? (a = this._builder.startOfPeriod(o, i - 1, s), _ = d(this._sessionTgt.spec, a), {
                        index: (i - 1) / this._period,
                        time: _
                    }) : {
                        index: (0, r.toInt)(i / this._period),
                        time: _
                    }
                }
                sessionSrc() {
                    return this._sessionSrc
                }
                _indexOfPeriodInYear(e) {
                    const t = this._builder.indexOfPeriod(e);
                    let s = (0, r.toInt)(t / this._period) * this._period;
                    return -1 === t && (s = -this._period), s
                }
            }

            function l(e, t) {
                const s = n.get_day_of_week(t) - e.firstDayOfWeek();
                return s < 0 ? s + 7 : s
            }

            function u(e, t) {
                const s = n.get_day_of_year(t) - 1;
                let i = l(e, t) - s % 7;
                return 0 === i ? (0, r.toInt)(s / 7) : (i >= 0 && (i -= 7), (0, r.toInt)((i + s) / 7))
            }
            class f {
                indexOfPeriod(e) {
                    return n.get_day_of_year(e) - 1
                }
                startOfPeriod(e, t, s) {
                    const i = n.days_per_year(s);
                    return n.get_cal(n.get_timezone("Etc/UTC"), s, n.JANUARY, 1 + Math.min(t, i))
                }
            }
            class g extends f {
                constructor(e) {
                    super(), this._sessionsSpec = e
                }
                indexOfPeriod(e) {
                    return super.indexOfPeriod(e) - function(e, t) {
                        const s = u(e, t),
                            i = n.get_cal(n.get_timezone("Etc/UTC"), n.get_year(t), n.JANUARY, 1);
                        n.add_date(i, 7 * s);
                        const r = s * e.weekEndsCount() + e.holidaysFromYearStart(i),
                            o = n.get_day_of_year(t) - n.get_day_of_year(i);
                        return r + o - e.calendarDaysToBusinessDays(i, o)
                    }(this._sessionsSpec, e)
                }
                startOfPeriod(e, t, s) {
                    const i = 7 - this._sessionsSpec.weekEndsCount(),
                        o = Math.max(0, (0, r.toInt)(t / i) - 1),
                        a = n.get_cal(n.get_timezone("Etc/UTC"), s, n.JANUARY, 1),
                        _ = n.get_days_per_year(a);
                    if (n.add_date(a, 7 * o), (t -= i * o - this._sessionsSpec.holidaysFromYearStart(a)) > 0) {
                        const e = this._sessionsSpec.businessDaysToCalendarDays(a, t);
                        n.add_date(a, e)
                    }
                    let h = n.get_day_of_year(a) - 1;
                    return s < n.get_year(a) && (h += _), super.startOfPeriod(e, h, s)
                }
            }
            class y {
                constructor(e) {
                    this._builder = null, this._initialized = !1, this._session = e
                }
                indexOfPeriod(e) {
                    return this._getBuilder().indexOfPeriod(e)
                }
                startOfPeriod(e, t, s) {
                    return this._getBuilder().startOfPeriod(e, t, s)
                }
                _getBuilder() {
                    return null !== this._builder && this._initialized || (this._builder = this._session.spec.hasWeekEnds() ? new g(this._session.spec) : new f, this._initialized = !0), this._builder
                }
            }
            class S {
                constructor(e) {
                    this._session = e
                }
                indexOfPeriod(e) {
                    let t = u(this._session.spec, e);
                    if (0 === t) {
                        const s = n.get_timezone(this._session.spec.timezone());
                        e < this.startOfPeriod(s, 0, n.get_year(e)) && (t = -1)
                    }
                    return t
                }
                startOfPeriod(e, t, s) {
                    if (t < 0) {
                        s--;
                        const i = n.get_cal(n.get_timezone("Etc/UTC"), s, n.DECEMBER, 31, 23, 59, 59),
                            o = this.indexOfPeriod(i),
                            a = -1 * t,
                            _ = (0, r.toInt)(o / a) * a;
                        return this.startOfPeriod(e, _, s)
                    }
                    const i = n.get_cal(n.get_timezone("Etc/UTC"), s, n.JANUARY, 1),
                        o = l(this._session.spec, i),
                        a = 0 === o ? 7 * t : 7 * (t + 1) - o;
                    return a > n.get_days_per_year(i) ? this.startOfPeriod(e, 0, s + 1) : (n.add_date(i, a), i)
                }
            }
            class m {
                indexOfPeriod(e) {
                    return n.get_month(e)
                }
                startOfPeriod(e, t, s) {
                    if (t < 0) {
                        const e = (0, r.toInt)((11 - t) / 12);
                        s -= e, t += 12 * e
                    } else t > n.DECEMBER && (s++, t = n.JANUARY);
                    return n.get_cal(n.get_timezone("Etc/UTC"), s, t, 1)
                }
            }

            function E(e, t, s, n = !1) {
                const r = i.Interval.parse(e),
                    o = r.multiplier();
                return r.isMinutes() ? new _(60 * o, t) : r.isSeconds() ? new _(o, t) : r.isTicks() ? new _(1, t) : r.isRange() ? new _(60 * o, t) : new c(t, s, o, function(e, t) {
                    switch (e) {
                        case i.ResolutionKind.Days:
                            return new y(t);
                        case i.ResolutionKind.Weeks:
                            return new S(t);
                        case i.ResolutionKind.Months:
                            return new m
                    }
                    throw new Error(`Unknown dwm resolution: ${e}`)
                }(r.kind(), t), n)
            }

            function p(e, t, s, n, r, a, _) {
                const h = i.Interval.parse(r + n);
                if (h.isMonths()) {
                    const e = new Date(a),
                        t = new Date(_);
                    let s = 12 * (t.getUTCFullYear() - e.getUTCFullYear());
                    return s += t.getUTCMonth() - e.getUTCMonth(), Math.ceil(s / h.multiplier())
                }
                const d = new o.SessionInfo("Etc/UTC", e, t, s),
                    c = h.inMilliseconds();
                let l;
                l = h.isDWM() ? 864e5 : 60 * d.spec.maxTradingDayLength() * 1e3;
                let u = 0;
                u = h.isWeeks() ? 7 : 7 - d.spec.weekEndsCount();
                const f = _ - a,
                    g = l / c,
                    y = u * g;
                let S = f / 864e5 * g;
                S >= y && (S = f / 6048e5 * y);
                return S % 1 <= Number.EPSILON * Math.ceil(S) ? Math.round(S) : Math.ceil(S)
            }
        },
        718513: (e, t, s) => {
            s.d(t, {
                BusinessDay: () => i
            });
            var n = s(747342);
            class i {
                constructor(e, t, s) {
                    this.year = e, this.month = t, this.day = s
                }
                toString() {
                    return `${this.year}-${this.month}-${this.day}`
                }
                compareTo(e) {
                    return this.year > e.year || this.year === e.year && this.month > e.month || this.year === e.year && this.month === e.month && this.day > e.day ? 1 : this.year === e.year && this.month === e.month && this.day === e.day ? 0 : -1
                }
                before(e) {
                    return -1 === this.compareTo(e)
                }
                toCalendar(e) {
                    return n.get_cal(n.get_timezone("Etc/UTC"), this.year, this.month - 1, this.day)
                }
                addDays(e) {
                    const t = this.toCalendar(n.get_timezone("Etc/UTC"));
                    return n.add_date(t, e), i.fromCalendar(t)
                }
                static fromCalendar(e) {
                    return new i(n.get_year(e), n.get_month(e) + 1, n.get_day_of_month(e))
                }
            }
        },
        119460: (e, t, s) => {
            var n;
            s.d(t, {
                    SessionStage: () => n
                }),
                function(e) {
                    e[e.PRE_SESSION = -1] = "PRE_SESSION", e[e.POST_SESSION = -2] = "POST_SESSION", e[e.LASTBAR_SESSION = -3] = "LASTBAR_SESSION"
                }(n || (n = {}))
        },
        155925: (e, t, s) => {
            s.d(t, {
                SessionSpec: () => m
            });
            var n = s(747342),
                i = s(923195),
                r = s(718513);

            function o(e, t) {
                return e.compareTo(t)
            }
            class a {
                constructor(e, t, s) {
                    this._dayOfWeek = e, this._start = t, this._length = s
                }
                start() {
                    return this._start + n.minutesPerDay * this.sessionStartDaysOffset()
                }
                startOffset() {
                    return this._start
                }
                sessionStartDaysOffset() {
                    return this._start >= 0 ? 0 : this._start % n.minutesPerDay == 0 ? -Math.ceil(this._start / n.minutesPerDay) : -Math.floor(this._start / n.minutesPerDay)
                }
                sessionEndDaysOffset() {
                    const e = this._start + this._length;
                    return e >= 0 ? 0 : e % n.minutesPerDay == 0 ? -Math.ceil(e / n.minutesPerDay) : -Math.floor(e / n.minutesPerDay)
                }
                isOvernight() {
                    return this._start < 0
                }
                dayOfWeek() {
                    return this._dayOfWeek
                }
                sessionStartDayOfWeek() {
                    let e = this._dayOfWeek - this.sessionStartDaysOffset();
                    return e < n.SUNDAY && (e += 7), e
                }
                sessionEndDayOfWeek() {
                    let e = this.sessionStartDayOfWeek() + this.sessionEndDaysOffset();
                    return e > n.SATURDAY && (e = 1), e
                }
                length() {
                    return this._length
                }
                weight() {
                    return this._dayOfWeek * n.minutesPerDay + this._start
                }
                compareTo(e) {
                    const t = this.weight(),
                        s = t + this._length,
                        n = e.weight(),
                        i = n + e._length;
                    return t <= n && n < s || n <= t && t < i ? 0 : t > n ? 1 : -1
                }
                contains(e) {
                    const t = 60 * n.get_hours(e) + n.get_minutes(e);
                    let s = n.get_day_of_week(e) - this._dayOfWeek;
                    s > 0 && (s -= 7);
                    const i = s * n.minutesPerDay + t;
                    return i >= this._start && i < this._start + this._length
                }
            }
            class _ {
                constructor(e, t, s) {
                    this.weekIndex = e, this.entryIndex = t, this.entries = s
                }
                getEntry() {
                    return this.entries[this.entryIndex]
                }
            }
            var h = s(272001);
            const d = [n.MONDAY, n.TUESDAY, n.WEDNESDAY, n.THURSDAY, n.FRIDAY],
                c = [n.SUNDAY, n.MONDAY, n.TUESDAY, n.WEDNESDAY, n.THURSDAY, n.FRIDAY, n.SATURDAY],
                l = (0, h.getLogger)("Chart.Model.SessionSpec");

            function u(e) {
                return e >= 48 && e <= 57
            }
            class f {
                constructor() {
                    this.entries = [], this.firstDayOfWeek = n.MONDAY, this.weekEndsCount = -1, this.maxTradingDayLength = 0
                }
                parseSessions(e, t) {
                    var s;
                    let n = !1;
                    this._clear(), this.timezone = e;
                    const {
                        hasErrors: i,
                        spec: r
                    } = this._parseFirstDayOfWeek(t);
                    if ("24x7" === r.toLowerCase())
                        for (const e of c) this.entries.push(f._createSessionEntry(e, 0, 0, 0, 0));
                    else {
                        let e = !1;
                        const t = new Map;
                        for (const s of r.split("|")) {
                            const i = s.split(":");
                            if (1 !== i.length && 2 !== i.length) {
                                n = !0, l.logError(`Bad session section: ${s}`);
                                continue
                            }
                            const r = 1 === i.length;
                            if (r) {
                                if (e) {
                                    n = !0, l.logError(`Duplicated default section: ${s}`);
                                    continue
                                }
                                e = !0
                            }
                            const o = r ? d : f._parseWorkingDays(i[1]);
                            for (const e of o) r && t.has(e) || t.set(e, i[0])
                        }
                        for (const e of c) {
                            const s = t.get(e);
                            if (void 0 !== s)
                                for (const t of s.split(",")) {
                                    const {
                                        hasErrors: s,
                                        sessionEntry: i
                                    } = f._parseSessionEntry(e, t);
                                    s && (n = s), this.entries.push(i)
                                }
                        }
                    }
                    this.entries.sort(o);
                    const a = new Map;
                    for (const e of this.entries) {
                        const t = e.dayOfWeek();
                        a.set(t, e.length() + (null !== (s = a.get(t)) && void 0 !== s ? s : 0))
                    }
                    return this.maxTradingDayLength = 0, a.forEach((e => {
                        this.maxTradingDayLength = Math.max(this.maxTradingDayLength, e)
                    })), this.weekEndsCount = 7 - a.size, n || i
                }
                static parseHolidaysAndCorrections(e, t, s) {
                    const i = new Map,
                        r = new Map,
                        o = e => {
                            const t = this._parseDay(e),
                                s = t.toString(),
                                n = r.get(s);
                            return void 0 !== n ? n : (r.set(s, t), t)
                        };
                    if ("" !== t) {
                        const e = [];
                        for (const s of t.split(",")) {
                            if (8 !== s.length) throw new Error(`bad holiday date: ${s}`);
                            const t = o(s);
                            i.set(t, e)
                        }
                    }
                    if ("" === s) return i;
                    const _ = n.get_timezone("Etc/UTC");
                    for (const e of s.split(";")) {
                        const t = e.split(":");
                        if (2 !== t.length) throw new Error(`bad correction section: ${e}`);
                        const s = [];
                        if ("dayoff" !== t[0])
                            for (const e of t[0].split(",")) s.push(this._parseSessionEntry(1, e).sessionEntry);
                        for (const e of t[1].split(",")) {
                            if (8 !== e.length) throw new Error(`bad correction date: ${e}`);
                            const t = o(e),
                                r = n.get_day_of_week(n.get_cal(_, t.year, t.month - 1, t.day)),
                                h = [];
                            for (const e of s) h.push(new a(r, e.startOffset(), e.length()));
                            i.set(t, h)
                        }
                    }
                    return i
                }
                _clear() {
                    this.entries = [], this.timezone = "", this.firstDayOfWeek = n.MONDAY, this.weekEndsCount = -1
                }
                _parseFirstDayOfWeek(e) {
                    const t = e.split(";");
                    if (t.length > 2) return l.logError(`Only one \`first day\` specification expected @ session ${e}`), {
                        hasErrors: !0,
                        spec: e
                    };
                    if (1 === t.length) return {
                        hasErrors: !1,
                        spec: e
                    };
                    let s = 1;
                    let i = t[0].indexOf("-") >= 0 ? NaN : parseInt(t[0]);
                    return isNaN(i) && (s = 0, i = parseInt(t[1])), i < n.SUNDAY || i > n.SATURDAY ? (l.logError(`Unexpected day index @ session: ${e}; day index ${i}`), {
                        hasErrors: !0,
                        spec: e
                    }) : (this.firstDayOfWeek = i, {
                        hasErrors: !1,
                        spec: t[s]
                    })
                }
                static _parseDay(e) {
                    const t = parseInt(e.substring(0, 4)),
                        s = parseInt(e.substring(4, 6)),
                        n = parseInt(e.substring(6, 8));
                    return new r.BusinessDay(t, s, n)
                }
                static _parseSessionEntry(e, t) {
                    let s = !1,
                        n = t.split("-");
                    2 !== n.length && (s = !0, l.logError(`Bad sessions entry: ${t}`), n = ["0000", "0000"]);
                    let i = 0,
                        r = n[0];
                    if (r.includes("F")) {
                        const e = r.split("F");
                        r = e[0], i = "" !== e[1] ? parseInt(e[1]) : 1
                    }
                    let o = 0,
                        a = n[1];
                    if (a.includes("F")) {
                        const e = a.split("F");
                        a = e[0], o = "" !== e[1] ? parseInt(e[1]) : 1
                    }
                    if (!this._isCorrectSession(r) || !this._isCorrectSession(a)) throw new Error(`Incorrect entry syntax: ${t}`);
                    const _ = r,
                        h = a;
                    return {
                        hasErrors: s,
                        sessionEntry: this._createSessionEntry(e, f._minutesFromHHMM(_), f._minutesFromHHMM(h), i, o)
                    }
                }
                static _isCorrectSession(e) {
                    return 4 === e.length && u(e.charCodeAt(0)) && u(e.charCodeAt(1)) && u(e.charCodeAt(2)) && u(e.charCodeAt(3))
                }
                static _parseWorkingDays(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s++) {
                        const n = +e[s]; - 1 === t.indexOf(n) && t.push(n)
                    }
                    return t
                }
                static _minutesFromHHMM(e) {
                    return n.get_minutes_from_hhmm(e)
                }
                static _createSessionEntry(e, t, s, i, r) {
                    0 === s && (s = n.minutesPerDay), i === r && s <= t && (i += 1), i > 0 && (t -= i * n.minutesPerDay), r > 0 && (s -= r * n.minutesPerDay);
                    return new a(e, t, s - t)
                }
            }

            function g(e, t) {
                return e.compareTo(t) < 0
            }

            function y(e, t) {
                const s = (0,
                    i.lowerbound)(e, t, ((e, t) => -1 === e.day.compareTo(t)));
                return s === e.length ? null : e[s]
            }
            const S = 621672192e5;
            class m {
                constructor(e = "Etc/UTC", t = "0000-0000", s = "", i = "") {
                    this._entries = [], this._firstDayOfWeek = n.MONDAY, this._entriesHash = new Map, this._holidayAndCorrectionMap = new Map, this._holidaySessions = [];
                    const r = new f;
                    r.parseSessions(e, t), this._entries = r.entries, this._timezone = r.timezone, this._spec = t, this._firstDayOfWeek = r.firstDayOfWeek, this._weekEndsCount = r.weekEndsCount, this._maxTradingDayLength = r.maxTradingDayLength;
                    const o = f.parseHolidaysAndCorrections(e, s, i),
                        a = n.get_timezone(e);
                    this._isThereCorrections = "" !== s || "" !== i, o.forEach(((e, t) => {
                        this._holidayAndCorrectionMap.set(t.toString(), e), this._holidaySessions.push({
                            day: t,
                            sessions: e
                        });
                        const s = this.getWeekIndex(t.toCalendar(a));
                        this._entriesHash.set(s, null)
                    })), this._holidaySessions.sort(((e, t) => e.day.compareTo(t.day)))
                }
                entries() {
                    return this._entries
                }
                timezone() {
                    return this._timezone
                }
                spec() {
                    return this._spec
                }
                firstDayOfWeek() {
                    return this._firstDayOfWeek
                }
                addSessionEntry(e, t, s, i, r) {
                    0 === s && (s = n.minutesPerDay), i === r && s <= t && (i += 1), i > 0 && (t -= i * n.minutesPerDay), r > 0 && (s -= r * n.minutesPerDay);
                    const o = s - t;
                    this._entries.push(new a(e, t, o))
                }
                longestSessionLength() {
                    let e = 0,
                        t = 0;
                    for (const t of this._holidaySessions) t.sessions.forEach((t => {
                        e = Math.max(e, t.length())
                    }));
                    return this._entries.forEach((e => {
                        t = Math.max(t, e.length())
                    })), Math.max(e, t)
                }
                isWeekEnd(e) {
                    const t = (0, i.lowerbound)(this._entries, new a(e, 0, 0), ((e, t) => e.dayOfWeek() < t.dayOfWeek()));
                    return t > this._entries.length - 1 || this._entries[t].dayOfWeek() !== e
                }
                isCalWeekEnd(e) {
                    const t = n.get_day_of_week(e);
                    if (!this._isThereCorrections) return this.isWeekEnd(t);
                    const s = r.BusinessDay.fromCalendar(e),
                        i = this._holidayAndCorrectionMap.get(s.toString());
                    return void 0 === i ? this.isWeekEnd(t) : 0 === i.length
                }
                hasWeekEnds() {
                    return this.weekEndsCount() > 0
                }
                weekEndsCount() {
                    return this._weekEndsCount
                }
                maxTradingDayLength() {
                    return this._maxTradingDayLength
                }
                holidaysFromYearStart(e) {
                    if (!this._isThereCorrections) return 0;
                    const t = n.get_timezone(this._timezone),
                        s = new r.BusinessDay(n.get_year(e), n.JANUARY, 1),
                        i = r.BusinessDay.fromCalendar(e);
                    let o = 0;
                    const a = this._selectHolidays(s, i);
                    for (let e = 0; e < a.length; e++) {
                        const s = a[e].day.toCalendar(t);
                        this.isWeekEnd(n.get_day_of_week(s)) ? o += 0 === a[e].sessions.length ? 0 : -1 : o += 0 === a[e].sessions.length ? 1 : 0
                    }
                    return o
                }
                intradayCanBeBuiltFrom24x7(e) {
                    return this._entries.every((t => t.start() % e == 0 && t.length() % e == 0))
                }
                indexOfSession(e, t, s) {
                    const r = this._getEntriesForWeek(e);
                    let o = (0, i.lowerbound)(r, new a(t, s, 0), g);
                    if (o !== r.length) return new _(e, o, r);
                    let h = e;
                    const d = 7 - t + this._firstDayOfWeek - 1;
                    for (s = -(n.minutesPerDay - s + d * n.minutesPerDay);;) {
                        h++;
                        const e = this._getEntriesForWeek(h);
                        if (0 !== e.length) return o = (0, i.lowerbound)(e, new a(this._firstDayOfWeek, s, 0), g), new _(h, o, e)
                    }
                }
                findSession(e, t, s, n = 0) {
                    const i = this.indexOfSession(e, t, s),
                        r = i.entries;
                    let o = i.entryIndex;
                    if (0 !== n) {
                        const e = r[o].dayOfWeek(),
                            t = n > 0 ? 1 : -1;
                        for (;;) {
                            const s = o + t;
                            if (s < 0 || s >= r.length || r[s].dayOfWeek() !== e) break;
                            o = s
                        }
                    }
                    return new _(i.weekIndex, o, r)
                }
                getWeekIndex(e) {
                    if (!this._isThereCorrections) return 0;
                    const t = n.get_day_of_week(e) - n.SUNDAY,
                        s = n.get_timezone("Etc/UTC"),
                        i = n.get_cal(s, n.get_year(e), n.get_month(e), n.get_day_of_month(e) - t);
                    return Math.floor((i.getTime() + S) / 1e3 / 86400 / 7)
                }
                correctTradingDay(e) {
                    const t = n.get_day_of_week(e),
                        s = 60 * n.get_hours(e) + n.get_minutes(e),
                        i = this.getWeekIndex(e),
                        r = this.findSession(i, t, s, 0),
                        o = r.getEntry().dayOfWeek() - t + 7 * (r.weekIndex - i);
                    return 0 !== o && n.add_date(e, o), e
                }
                alignToSessionStart(e, t = 0) {
                    const s = n.get_day_of_week(e),
                        i = 60 * n.get_hours(e) + n.get_minutes(e),
                        r = this.getWeekIndex(e),
                        o = this.findSession(r, s, i, t),
                        a = o.getEntry(),
                        _ = a.dayOfWeek() - s + 7 * (o.weekIndex - r);
                    0 !== _ && n.add_date(e, _);
                    const h = a.startOffset();
                    return n.set_hms(e, h / 60, h % 60, 0, 0, n.get_timezone(this._timezone)), a.length()
                }
                businessDaysToCalendarDays(e, t) {
                    let s = this.getWeekIndex(e),
                        i = n.get_day_of_week(e),
                        r = 0,
                        o = 0;
                    for (; o < t;) {
                        const e = this._getEntriesForWeek(s);
                        let a = 0;
                        for (let s = i; s <= n.SATURDAY; s++) {
                            r++;
                            let n = !0;
                            for (; a < e.length && !(e[a].dayOfWeek() > s);) e[a].dayOfWeek() < s || n && (n = !1, o++), a++;
                            if (o >= t) return r
                        }
                        s++, i = n.SUNDAY
                    }
                    return r
                }
                calendarDaysToBusinessDays(e, t) {
                    let s = this.getWeekIndex(e),
                        i = n.get_day_of_week(e),
                        r = 0,
                        o = 0;
                    for (; r < t;) {
                        const e = this._getEntriesForWeek(s);
                        let a = 0;
                        for (let s = i; s <= n.SATURDAY; s++) {
                            r++;
                            let n = !0;
                            for (; a < e.length && !(e[a].dayOfWeek() > s);) e[a].dayOfWeek() < s || n && (n = !1, o++), a++;
                            if (r >= t) return o
                        }
                        s++, i = n.SUNDAY
                    }
                    return o
                }
                alignToNearestSessionStart(e, t) {
                    return this._alignToNearestSessionValue(e, t, this._entrySessionStart.bind(this))
                }
                alignToNearestSessionEnd(e, t) {
                    return this._alignToNearestSessionValue(e, t, this._entrySessionEnd.bind(this))
                }
                leftBorderOfDailyBar(e) {
                    const t = this._getEntriesForDay(e);
                    return 0 === t.length ? null : (t.sort(o), this._getLeftEntryBorder(e, t[0]))
                }
                bordersOfDailyBar(e) {
                    const t = this._getEntriesForDay(e);
                    if (0 === t.length) return null;
                    t.sort(o);
                    const s = this._getLeftEntryBorder(e, t[0]),
                        i = t[t.length - 1],
                        r = n.clone(e);
                    let a = 60 * (i.startOffset() + i.length()) - 1;
                    const _ = Math.floor(a / 3600);
                    return a -= 3600 * _, n.set_hms(r, _, a / 60, a % 60, 0, n.get_timezone(this._timezone)), {
                        from: s,
                        to: r
                    }
                }
                getEntriesForWeekByCalendar(e) {
                    const t = this.getWeekIndex(e);
                    return this._getEntriesForWeek(t)
                }
                _getEntriesForWeek(e) {
                    let t = this._entriesHash.get(e);
                    if (void 0 === t) return this._entries;
                    if (null !== t) return t;
                    const s = n.get_timezone(this._timezone);
                    t = this._entries.slice();
                    const i = this._weekIndexToCalendar(e),
                        a = this._weekIndexToCalendar(e + 1),
                        _ = r.BusinessDay.fromCalendar(i),
                        h = r.BusinessDay.fromCalendar(a),
                        d = this._selectHolidays(_, h);
                    for (const e of d) {
                        const i = e.day.toCalendar(s),
                            r = n.get_day_of_week(i);
                        t = t.filter((e => e.dayOfWeek() !== r)), t = t.concat(e.sessions)
                    }
                    return t.sort(o), this._entriesHash.set(e, t), t
                }
                _selectHolidays(e, t) {
                    const s = [];
                    let n = e;
                    for (;;) {
                        const e = y(this._holidaySessions, n);
                        if (null === e) return s;
                        if (!e.day.before(t)) return s;
                        s.push(e), n = e.day.addDays(1)
                    }
                }
                _weekIndexToCalendar(e) {
                    const t = 1e3 * (86400 * e * 7 + 86400) - S,
                        s = n.get_cal_from_unix_timestamp_ms(n.get_timezone("Etc/UTC"), t),
                        i = n.get_timezone("Etc/UTC");
                    return n.get_cal(i, n.get_year(s), n.get_month(s), n.get_day_of_month(s))
                }
                _alignToNearestSessionValue(e, t, s) {
                    const i = n.get_day_of_week(e),
                        r = 60 * n.get_hours(e) + n.get_minutes(e),
                        o = this.getWeekIndex(e);
                    let a = this.findSession(o, i, r);
                    if (a.getEntry().contains(e) && o === a.weekIndex || 1 === t) return s(a, n.clone(e), t);
                    const h = a.getEntry(),
                        d = h.contains(e),
                        c = o === a.weekIndex,
                        l = h.sessionStartDaysOffset() - h.dayOfWeek() >= 0;
                    if (d && (c || l)) return s(a, n.clone(e), t);
                    let u = a.entryIndex - 1;
                    if (u < 0) {
                        let e = a.weekIndex,
                            t = a.entries;
                        for (; u < 0;) e--, t = this._getEntriesForWeek(e), u += t.length;
                        a = new _(e, u, t)
                    } else a = new _(a.weekIndex, u, a.entries);
                    return s(a, n.clone(e), t)
                }
                _entrySessionStart(e, t, s) {
                    return this._entrySessionValue(e, t, s, (e => 60 * e.start()))
                }
                _entrySessionEnd(e, t, s) {
                    return this._entrySessionValue(e, t, s, (e => 60 * (e.start() + e.length()) - 1))
                }
                _entrySessionValue(e, t, s, i) {
                    let r = n.get_day_of_week(t);
                    const o = e.getEntry();
                    let a = o.dayOfWeek() - o.sessionStartDaysOffset();
                    const _ = this.getWeekIndex(t);
                    let h = e.weekIndex - _,
                        d = !1;
                    if (a < n.SUNDAY && (h <= 0 ? d = !0 : h--, a += 7), (h > 0 && s >= 0 || h < 0 && s < 0) && n.add_date(t, 7 * h), !o.contains(t)) {
                        let e = a - r;
                        d && s < 0 && (e = -(7 - a + r)), n.add_date(t, e), r = n.get_day_of_week(t)
                    }
                    o.isOvernight() && r === o.dayOfWeek() && n.add_date(t, -o.sessionStartDaysOffset());
                    let c = i(o);
                    const l = Math.floor(c / 3600);
                    return c -= 3600 * l, n.set_hms(t, l, c / 60, c % 60, 0, n.get_timezone(this._timezone)), t
                }
                _getEntriesForDay(e) {
                    const t = n.get_day_of_week(e);
                    return this._getEntriesForWeek(this.getWeekIndex(e)).filter((e => e.dayOfWeek() === t))
                }
                _getLeftEntryBorder(e, t) {
                    const s = n.clone(e),
                        i = t.startOffset();
                    return n.set_hms(s, i / 60, i % 60, 0, 0, n.get_timezone(this._timezone)), s
                }
            }
        }
    }
]);
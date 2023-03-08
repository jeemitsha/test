(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [39863], {
        259142: function(e, t) {
            var n, i, o;
            i = [t], n = function(e) {
                "use strict";

                function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = !1;
                if ("undefined" != typeof window) {
                    var i = {
                        get passive() {
                            n = !0
                        }
                    };
                    window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
                }
                var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    r = [],
                    s = !1,
                    a = -1,
                    l = void 0,
                    c = void 0,
                    h = function(e) {
                        return r.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    u = function(e) {
                        var t = e || window.event;
                        return !!h(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    d = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, i) {
                    if (o) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !r.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var d = {
                                targetElement: e,
                                options: i || {}
                            };
                            r = [].concat(t(r), [d]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var n, i, o, r;
                                1 === t.targetTouches.length && (i = e, r = (n = t).targetTouches[0].clientY - a, !h(n.target) && (i && 0 === i.scrollTop && 0 < r || (o = i) && o.scrollHeight - o.scrollTop <= o.clientHeight && r < 0 ? u(n) : n.stopPropagation()))
                            }, s || (document.addEventListener("touchmove", u, n ? {
                                passive: !1
                            } : void 0), s = !0)
                        }
                    } else {
                        v = i, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!v && !0 === v.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: i || {}
                        };
                        r = [].concat(t(r), [p])
                    }
                    var v
                }, e.clearAllBodyScrollLocks = function() {
                    o ? (r.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), s && (document.removeEventListener("touchmove", u, n ? {
                        passive: !1
                    } : void 0), s = !1), r = [], a = -1) : (d(), r = [])
                }, e.enableBodyScroll = function(e) {
                    if (o) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, r = r.filter((function(t) {
                            return t.targetElement !== e
                        })), s && 0 === r.length && (document.removeEventListener("touchmove", u, n ? {
                            passive: !1
                        } : void 0), s = !1)
                    } else 1 === r.length && r[0].targetElement === e ? (d(), r = []) : r = r.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (o = "function" == typeof n ? n.apply(t, i) : n) || (e.exports = o)
        },
        895171: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            var i = n(745582);
            const o = function(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                return e = (0, i.default)(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = void 0), n
                    }
            };
            const r = function(e) {
                return o(2, e)
            }
        },
        745582: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var i = n(968877),
                o = 1 / 0;
            const r = function(e) {
                return e ? (e = (0, i.default)(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
            };
            const s = function(e) {
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        41299: e => {
            e.exports = {
                line: "line-Ji0TkCY8",
                starting: "starting-Ji0TkCY8",
                burger_spinner_starting: "burger_spinner_starting-Ji0TkCY8",
                spin1: "spin1-Ji0TkCY8",
                burger_spinner_spin1: "burger_spinner_spin1-Ji0TkCY8",
                spin2: "spin2-Ji0TkCY8",
                burger_spinner_spin2: "burger_spinner_spin2-Ji0TkCY8",
                spin3: "spin3-Ji0TkCY8",
                burger_spinner_spin3: "burger_spinner_spin3-Ji0TkCY8",
                stopping1: "stopping1-Ji0TkCY8",
                burger_spinner_stopping1: "burger_spinner_stopping1-Ji0TkCY8",
                stopping2: "stopping2-Ji0TkCY8",
                burger_spinner_stopping2: "burger_spinner_stopping2-Ji0TkCY8",
                stopping3: "stopping3-Ji0TkCY8",
                burger_spinner_stopping3: "burger_spinner_stopping3-Ji0TkCY8"
            }
        },
        945966: e => {
            e.exports = {
                "default-drawer-min-top-distance": "100px",
                wrap: "wrap-yBUNQyVA",
                positionBottom: "positionBottom-yBUNQyVA",
                backdrop: "backdrop-yBUNQyVA",
                drawer: "drawer-yBUNQyVA",
                positionLeft: "positionLeft-yBUNQyVA"
            }
        },
        409790: e => {
            e.exports = {
                menuWrap: "menuWrap-biWYdsXC",
                isMeasuring: "isMeasuring-biWYdsXC",
                scrollWrap: "scrollWrap-biWYdsXC",
                momentumBased: "momentumBased-biWYdsXC",
                menuBox: "menuBox-biWYdsXC",
                isHidden: "isHidden-biWYdsXC"
            }
        },
        292730: e => {
            e.exports = {
                icon: "icon-gTrQeBEE",
                toolboxLabel: "toolboxLabel-gTrQeBEE"
            }
        },
        662464: (e, t, n) => {
            "use strict";
            n.d(t, {
                useHover: () => o,
                hoverMouseEventFilter: () => r,
                useAccurateHover: () => s
            });
            var i = n(50959);

            function o() {
                const [e, t] = (0, i.useState)(!1);
                return [e, {
                    onMouseOver: function(e) {
                        r(e) && t(!0)
                    },
                    onMouseOut: function(e) {
                        r(e) && t(!1)
                    }
                }]
            }

            function r(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }

            function s(e) {
                const [t, n] = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    const t = t => {
                        if (null === e.current) return;
                        const i = e.current.contains(t.target);
                        n(i)
                    };
                    return document.addEventListener("mouseover", t), () => document.removeEventListener("mouseover", t)
                }), []), t
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function i(e) {
                return r(e, s)
            }

            function o(e) {
                return r(e, a)
            }

            function r(e, t) {
                const n = Object.entries(e).filter(t),
                    i = {};
                for (const [e, t] of n) i[e] = t;
                return i
            }

            function s(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => i,
                filterAriaProps: () => o,
                filterProps: () => r,
                isDataAttribute: () => s,
                isAriaAttribute: () => a
            })
        },
        746326: (e, t, n) => {
            "use strict";

            function i(e) {
                const {
                    paddingTop: t,
                    paddingBottom: n
                } = window.getComputedStyle(e);
                return [t, n].reduce(((e, t) => e - Number((t || "").replace("px", ""))), e.clientHeight)
            }

            function o(e, t = !1) {
                const n = getComputedStyle(e),
                    i = [n.height];
                return "border-box" !== n.boxSizing && i.push(n.paddingTop, n.paddingBottom, n.borderTopWidth, n.borderBottomWidth), t && i.push(n.marginTop, n.marginBottom), i.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }

            function r(e, t = !1) {
                const n = getComputedStyle(e),
                    i = [n.width];
                return "border-box" !== n.boxSizing && i.push(n.paddingLeft, n.paddingRight, n.borderLeftWidth, n.borderRightWidth), t && i.push(n.marginLeft, n.marginRight), i.reduce(((e, t) => e + (parseFloat(t) || 0)), 0)
            }
            n.d(t, {
                contentHeight: () => i,
                outerHeight: () => o,
                outerWidth: () => r
            })
        },
        665203: (e, t, n) => {
            "use strict";
            n.d(t, {
                getReferralDetails: () => s,
                parseCoins: () => a,
                getTVCoinsProPlan: () => l
            });
            var i = n(890740),
                o = n(919490);

            function r(e) {
                return function(e, t, n) {
                    const o = {
                        method: t,
                        credentials: "include",
                        headers: new Headers
                    };
                    "POST" === t && (o.headers = new Headers({
                        "Content-Type": "application/json"
                    }), o.body = n);
                    return (0, i.fetch)(e, o)
                }(e, "GET")
            }

            function s() {
                return r("/tvcoins/details/").then((e => {
                    return (t = e).ok ? t.json() : t.json().then((e => {
                        throw new Error(e.detail)
                    }));
                    var t
                })).then((e => {
                    return t = e, Object.assign({}, t, {
                        coins: parseFloat((0, o.round2or0)(parseFloat(t.coins.toString())))
                    });
                    var t
                }))
            }

            function a(e) {
                return parseFloat((0, o.round2or0)(parseFloat(e.toString())))
            }
            async function l(e) {
                const t = new URL("/tvcoins/pro-plan/", window.location.href);
                t.searchParams.append("pro_plan", e.pro_plan), e.billing_cycle && t.searchParams.append("billing_cycle", e.billing_cycle);
                const n = await (0, i.fetch)(t.href);
                if (!n.ok) {
                    const e = await n.json();
                    throw Error(e.detail)
                }
                return n.json()
            }
        },
        945275: (e, t, n) => {
            "use strict";
            n.d(t, {
                isSupportApiAvailable: () => c,
                supportApi: () => C
            });
            var i = n(890740),
                o = n(66974),
                r = n(272001);
            n(659863);
            const s = (0, r.getLogger)("Support.Api"),
                a = window.DATA_ISSUES_HOST,
                l = void 0 !== a ? a + "/api/v1" : void 0;

            function c() {
                return void 0 !== l
            }

            function h(e) {
                if (!c()) throw new Error("Helpdesk host is not defined.");
                return `${l}${e}`
            }
            const u = {
                    count: () => ({
                        method: "GET",
                        url: h("/tickets/count_by_userid")
                    }),
                    list: e => ({
                        method: "GET",
                        url: h(`/tickets/by_userid/?page=${e}`)
                    }),
                    get: e => ({
                        method: "GET",
                        url: h(`/tickets/${e}`)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/save")
                    }),
                    close: () => ({
                        method: "POST",
                        url: h("/tickets/close")
                    }),
                    getSatisfactionRatings: e => ({
                        method: "GET",
                        url: h(`/tickets/${e}/get_satisfaction_ratings`)
                    }),
                    addSatisfactionRating: e => ({
                        method: "POST",
                        url: h(`/tickets/${e}/add_satisfaction_rating`)
                    })
                },
                d = {
                    list: (e, t) => ({
                        method: "GET",
                        url: h(`/tickets/${e}/${t}/comments`)
                    }),
                    send: () => ({
                        method: "POST",
                        url: h("/tickets/add_comment")
                    })
                },
                p = {
                    get: () => ({
                        method: "GET",
                        url: h("/unreads/get")
                    }),
                    update: () => ({
                        method: "PATCH",
                        url: h("/unreads/update")
                    }),
                    drop: () => ({
                        method: "PATCH",
                        url: h("/unreads/drop")
                    })
                },
                v = {
                    getPopulars: e => ({
                        method: "GET",
                        url: h(`/solutions/popular/${e}`)
                    }),
                    getTree: e => ({
                        method: "GET",
                        url: h(`/solutions/get_solutions_tree/${e}`)
                    }),
                    search: (e, t) => ({
                        method: "GET",
                        url: h(`/solutions/search/${e}?term=${t}`)
                    }),
                    get: (e, t) => ({
                        method: "GET",
                        url: h(`/solutions/${e}/${t}`)
                    })
                },
                m = {
                    get: () => ({
                        method: "GET",
                        url: h("/business_hours")
                    })
                },
                g = {
                    get: e => ({
                        method: "GET",
                        url: h(`/freshdeskId/${e}`)
                    })
                },
                w = {
                    refund: () => ({
                        method: "POST",
                        url: h("/payment/refund")
                    })
                };

            function f(e, t, n) {
                const r = {
                    method: e,
                    credentials: "include"
                };
                return r.headers = new Headers, (0, o.isProd)() || (r.headers.set("X-UserId", String(window.user.id)), r.headers.set("X-UserPerm", JSON.stringify({
                    is_pro_admin: 1,
                    is_support_unreads_admin: 1
                }))), void 0 !== n && (r.headers.set("Content-Type", "application/json"),
                    r.body = JSON.stringify(n)), (0, i.fetch)(t, r)
            }
            async function _(e) {
                const t = await e.text();
                if (!e.ok) throw new Error(`Response was not OK. Status: ${e.status}. Content: ${t}`);
                return t
            }
            async function b(e) {
                const t = await e.text();
                if (!e.ok) {
                    const n = JSON.parse(t);
                    if (n.code) throw new Error(n.code);
                    throw new Error(`Response was not OK. Status: ${e.status}. Content: ${t}`)
                }
                try {
                    return JSON.parse(t)
                } catch (n) {
                    throw new Error(`Failed to parse JSON response (at ${e.url}). Original error: "${n.name}: ${n.message}". Tried to parse: ${t}`)
                }
            }
            const C = {
                tickets: {
                    count: async function() {
                        const {
                            method: e,
                            url: t
                        } = u.count();
                        try {
                            const n = await f(e, t);
                            return await b(n)
                        } catch (e) {
                            throw s.logError("Error while fetching tickets count. " + e), e
                        }
                    },
                    list: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = u.list(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while fetching tickets. " + e), e
                        }
                    },
                    get: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = u.get(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (t) {
                            throw s.logError(`Error while fetching ticket ${e}. ` + t), t
                        }
                    },
                    send: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = u.send();
                        try {
                            const i = await f(t, n, e);
                            return await b(i)
                        } catch (e) {
                            throw s.logError("Error while sending new ticket. " + e), e
                        }
                    },
                    close: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = u.close();
                        try {
                            const i = await f(t, n, e);
                            return await b(i)
                        } catch (t) {
                            throw s.logError(`Error while fetching ticket ${e.reportId}. ` + t), t
                        }
                    },
                    getSatisfactionRatings: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = u.getSatisfactionRatings(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while fetching ticket satisfaction ratings. " + e), e
                        }
                    },
                    addSatisfactionRating: async function(e, t) {
                        const {
                            method: n,
                            url: i
                        } = u.addSatisfactionRating(e);
                        try {
                            const e = await f(n, i, t);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while sending new ticket satisfaction rating. " + e), e
                        }
                    }
                },
                conversations: {
                    list: async function(e, t) {
                        const {
                            method: n,
                            url: i
                        } = d.list(e, t);
                        try {
                            const e = await f(n, i);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while fetching ticket conversations. " + e), e
                        }
                    },
                    send: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = d.send();
                        try {
                            const i = await f(t, n, e);
                            return await b(i)
                        } catch (e) {
                            throw s.logError("Error while sending new ticket note. " + e), e
                        }
                    }
                },
                unreads: {
                    get: async function() {
                        const {
                            method: e,
                            url: t
                        } = p.get();
                        try {
                            const n = await f(e, t);
                            return await b(n)
                        } catch (e) {
                            throw s.logWarn("Error while fetching support unreads count. " + e), e
                        }
                    },
                    update: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = p.update();
                        try {
                            const i = await f(t, n, e);
                            await _(i)
                        } catch (e) {
                            throw s.logError("Error while updating ticket conversations unreads. " + e), e
                        }
                    },
                    drop: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = p.drop();
                        try {
                            const i = await f(t, n, e);
                            await _(i)
                        } catch (e) {
                            throw s.logError("Error while dropping ticket conversations unreads. " + e), e
                        }
                    }
                },
                solutions: {
                    getPopulars: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = v.getPopulars(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while fetching popular solutions. " + e), e
                        }
                    },
                    getTree: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = v.getTree(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while fetching solutions tree. " + e), e
                        }
                    },
                    search: async function(e, t) {
                        const {
                            method: n,
                            url: i
                        } = v.search(e, t);
                        try {
                            const e = await f(n, i);
                            return await b(e)
                        } catch (e) {
                            throw s.logError("Error while searching solutions. " + e), e
                        }
                    },
                    get: async function(e, t) {
                        const {
                            method: n,
                            url: i
                        } = v.get(e, t);
                        try {
                            const e = await f(n, i);
                            return await b(e)
                        } catch (t) {
                            throw s.logError(`Error while fetching solution ${e}. ` + t), t
                        }
                    }
                },
                businessHours: {
                    get: async function() {
                        const {
                            method: e,
                            url: t
                        } = m.get();
                        try {
                            const n = await f(e, t);
                            return await b(n)
                        } catch (e) {
                            throw s.logError("Error while fetching support business hours. " + e), e
                        }
                    }
                },
                freshdeskId: {
                    get: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = g.get(e);
                        try {
                            const e = await f(t, n);
                            return await b(e)
                        } catch (e) {
                            throw s.logWarn("Error while fetching user Freshdesk ID. " + e), e
                        }
                    }
                },
                payment: {
                    refund: async function(e) {
                        const {
                            method: t,
                            url: n
                        } = w.refund();
                        try {
                            const i = await f(t, n, e);
                            return await b(i)
                        } catch (e) {
                            throw s.logWarn("Error while triggering refund " + e), e
                        }
                    }
                }
            }
        },
        150971: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SupportNotificationTools: () => d
            });
            n(984919);
            var i = n(777754),
                o = n(779665),
                r = n(155040),
                s = n(869403),
                a = n.n(s),
                l = n(945275);
            const c = (0, n(272001).getLogger)("Notifications.Support");
            var h;
            ! function(e) {
                e.TicketReceived = "ticket-received", e.AnswerReceived = "answer-received", e.AnswerUpdated = "answer-updated", e.TicketStatusChanged = "ticket-status-changed", e.CustomerFeedbackReceived = "customer-feedback-received"
            }(h || (h = {}));
            let u = null;
            class d {
                constructor() {
                    var e, t;
                    if (this._ticketReceived = new(a()), this._answerReceived = new(a()), this._answerUpdated = new(a()), this._ticketStatusChanged = new(a()), this._customerFeedbackReceived = new(a()), this._countChanged = new(a()), this._count = 0, !(0, l.isSupportApiAvailable)()) return void c.logInfo("Stop SupportNotificationTools initialization because Support API is unavailable.");
                    null !== (t = null === (e = window.pro) || void 0 === e ? void 0 : e.isSupportAvailable()) && void 0 !== t && t ? (this._handleLoginStateChange(), window.loginStateChange.subscribe(this, this._handleLoginStateChange)) : c.logInfo("Stop SupportNotificationTools initialization because user is Free or Trial without active package.")
                }
                getCount() {
                    return this._count
                }
                ticketReceived() {
                    return this._ticketReceived
                }
                answerReceived() {
                    return this._answerReceived
                }
                answerUpdated() {
                    return this._answerUpdated
                }
                statusChanged() {
                    return this._ticketStatusChanged
                }
                customerFeedbackReceived() {
                    return this._customerFeedbackReceived
                }
                countChanged() {
                    return this._countChanged
                }
                destroy() {
                    window.loginStateChange.unsubscribe(this, this._handleLoginStateChange), this._unsubscribeFromPushStream(), this._ticketReceived.destroy(), this._answerReceived.destroy(), this._answerUpdated.destroy(), this._ticketStatusChanged.destroy(), this._customerFeedbackReceived.destroy(), this._countChanged.destroy(), u = null
                }
                static getInstance() {
                    return null === u && (u = new d), u
                }
                _subscribeToPushStream() {
                    this._subscribeToTicketReceived(), this._subscribeToAnswerReceived(), this._subscribeToAnswerUpdated(), this._subscribeToTicketStatusChanged(), this._subscribeToCustomerFeedbackReceived()
                }
                _unsubscribeFromPushStream() {
                    o.pushStreamMultiplexer.off(h.TicketReceived), o.pushStreamMultiplexer.off(h.AnswerReceived), o.pushStreamMultiplexer.off(h.AnswerUpdated), o.pushStreamMultiplexer.off(h.TicketStatusChanged), o.pushStreamMultiplexer.off(h.CustomerFeedbackReceived)
                }
                _handleLoginStateChange() {
                    window.pro && window.pro.isSupportAvailable() ? (this._subscribeToPushStream(), this._updateUnreadsCount()) : this._unsubscribeFromPushStream()
                }
                _processTicketReceived(e) {
                    this._ticketReceived.fire(e)
                }
                _processAnswerReceived(e) {
                    const t = {
                        title: i.t(null, void 0, n(21730)),
                        main: i.t(null, void 0, n(906426)).format({
                            linkStart: '<a href="https://www.tradingview.com/#support">',
                            linkEnd: "</a>"
                        })
                    };
                    this._updateUnreadsCount(), r.show(t.title, t.main), this._answerReceived.fire(e)
                }
                _processAnswerUpdated(e) {
                    this._updateUnreadsCount(), this._answerUpdated.fire(e)
                }
                _processStatusChanged(e) {
                    this._ticketStatusChanged.fire(e)
                }
                _processCustomerFeedbackReceived(e) {
                    this._customerFeedbackReceived.fire(e)
                }
                _subscribeToTicketReceived() {
                    o.pushStreamMultiplexer.on(h.TicketReceived, (e => {
                        this._processTicketReceived(e)
                    }))
                }
                _subscribeToAnswerReceived() {
                    o.pushStreamMultiplexer.on(h.AnswerReceived, (e => {
                        this._processAnswerReceived(e)
                    }))
                }
                _subscribeToAnswerUpdated() {
                    o.pushStreamMultiplexer.on(h.AnswerUpdated, (e => {
                        this._processAnswerUpdated(e)
                    }))
                }
                _subscribeToTicketStatusChanged() {
                    o.pushStreamMultiplexer.on(h.TicketStatusChanged, (e => {
                        this._processStatusChanged(e)
                    }))
                }
                _subscribeToCustomerFeedbackReceived() {
                    o.pushStreamMultiplexer.on(h.CustomerFeedbackReceived, (e => {
                        this._processCustomerFeedbackReceived(e)
                    }))
                }
                _updateUnreadsCount() {
                    if (!(0, l.isSupportApiAvailable)()) {
                        const e = "Cannot fetch support unreads count because Support API is unavailable.";
                        return c.logInfo(e), Promise.reject(e)
                    }
                    return l.supportApi.unreads.get().then((e => {
                        if (void 0 !== e.unreadsCount && e.unreadsCount >= 0) {
                            const t = this._count;
                            this._count = e.unreadsCount >= 0 ? e.unreadsCount : t, this._countChanged.fire(this._count, t)
                        }
                    })).catch((e => {
                        c.logWarn("Failed to fetch unread tickets' answers: " + e)
                    }))
                }
            }
        },
        531327: (e, t, n) => {
            "use strict";

            function i(e) {
                return o() ? 0 : r() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => i,
                isWidgetBarFullscreen: () => o
            });
            const o = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                r = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, n) => {
            "use strict";

            function i(e, t, n, i, o) {
                function r(o) {
                    if (e > o.timeStamp) return;
                    const r = o.target;
                    void 0 !== n && null !== t && null !== r && r.ownerDocument === i && (t.contains(r) || n(o))
                }
                return o.click && i.addEventListener("click", r, !1), o.mouseDown && i.addEventListener("mousedown", r, !1), o.touchEnd && i.addEventListener("touchend", r, !1), o.touchStart && i.addEventListener("touchstart", r, !1), () => {
                    i.removeEventListener("click", r, !1), i.removeEventListener("mousedown", r, !1), i.removeEventListener("touchend", r, !1), i.removeEventListener("touchstart", r, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => i
            })
        },
        404573: (e, t, n) => {
            "use strict";
            n.d(t, {
                Draggable: () => a,
                PointerBackend: () => l
            });
            var i = n(650151),
                o = n(318557),
                r = n(638456),
                s = n(778785);
            class a {
                constructor(e) {
                    var t, n;
                    this._helper = null, this._handleDragStart = e => {
                        var t;
                        if (null !== this._helper) return;
                        const n = this._source;
                        n.classList.add("ui-draggable-dragging");
                        const [i, r] = [(0, o.outerWidth)(n), (0, o.outerHeight)(n)];
                        this._helper = {
                            startTop: parseFloat(n.style.top) || 0,
                            startLeft: parseFloat(n.style.left) || 0,
                            nextTop: null,
                            nextLeft: null,
                            raf: null,
                            size: [i, r],
                            containment: this._containment instanceof HTMLElement ? [parseInt(getComputedStyle(this._containment).borderLeftWidth) + parseInt(getComputedStyle(this._containment).paddingLeft), parseInt(getComputedStyle(this._containment).borderTopWidth) + parseInt(getComputedStyle(this._containment).paddingTop), this._containment.offsetWidth - parseInt(getComputedStyle(this._containment).borderRightWidth) - parseInt(getComputedStyle(this._containment).paddingRight) - parseInt(getComputedStyle(n).marginLeft) - parseInt(getComputedStyle(n).marginRight) - i, this._containment.offsetHeight - parseInt(getComputedStyle(this._containment).borderBottomWidth) - parseInt(getComputedStyle(this._containment).paddingBottom) - parseInt(getComputedStyle(n).marginTop) - parseInt(getComputedStyle(n).marginBottom) - r] : "window" === this._containment ? [window.scrollX, window.scrollY, window.scrollX + document.documentElement.offsetWidth - i, window.scrollY + document.documentElement.offsetHeight - r] : null
                        }, null === (t = this._start) || void 0 === t || t.call(this)
                    }, this._handleDragMove = e => {
                        var t;
                        if (null === this._helper) return;
                        const {
                            current: n,
                            initial: i
                        } = e.detail, o = this._source, r = this._helper.nextTop, s = this._helper.nextLeft, a = "y" === this._axis || !1 === this._axis || 0 !== n.movementY;
                        if (a) {
                            const e = this._helper.startTop;
                            isFinite(e) && (this._helper.nextTop = n.clientY - i.clientY + e)
                        }
                        const l = "x" === this._axis || !1 === this._axis || 0 !== n.movementY;
                        if (l) {
                            const e = this._helper.startLeft;
                            isFinite(e) && (this._helper.nextLeft = n.clientX - i.clientX + e)
                        }
                        if (null !== this._helper.containment) {
                            const [e, t, n, i] = this._helper.containment;
                            a && this._helper.nextTop && (this._helper.nextTop = Math.min(this._helper.nextTop, i), this._helper.nextTop = Math.max(this._helper.nextTop, t)), l && this._helper.nextLeft && (this._helper.nextLeft = Math.min(this._helper.nextLeft, n), this._helper.nextLeft = Math.max(this._helper.nextLeft, e))
                        }
                        null !== this._helper.raf || r === this._helper.nextTop && s === this._helper.nextLeft || (this._helper.raf = requestAnimationFrame((() => {
                            null !== this._helper && (null !== this._helper.nextTop && (o.style.top = this._helper.nextTop + "px", this._helper.nextTop = null), null !== this._helper.nextLeft && (o.style.left = this._helper.nextLeft + "px", this._helper.nextLeft = null), this._helper.raf = null)
                        }))), null === (t = this._drag) || void 0 === t || t.call(this)
                    }, this._handleDragStop = e => {
                        var t;
                        if (null === this._helper) return;
                        this._source.classList.remove("ui-draggable-dragging"), this._helper = null, null === (t = this._stop) || void 0 === t || t.call(this)
                    };
                    const i = this._source = e.source;
                    i.classList.add("ui-draggable");
                    const r = this._handle = null !== (t = e.handle ? i.querySelector(e.handle) : null) && void 0 !== t ? t : i;
                    r.classList.add("ui-draggable-handle"), this._start = e.start, this._stop = e.stop, this._drag = e.drag, this._backend = new l({
                            handle: r,
                            onDragStart: this._handleDragStart,
                            onDragMove: this._handleDragMove,
                            onDragStop: this._handleDragStop
                        }),
                        this._axis = null !== (n = e.axis) && void 0 !== n && n, this._containment = e.containment
                }
                destroy() {
                    const e = this._source;
                    e.classList.remove("ui-draggable"), e.classList.remove("ui-draggable-dragging");
                    this._handle.classList.remove("ui-draggable-handle"), this._backend.destroy(), null !== this._helper && (this._helper.raf && cancelAnimationFrame(this._helper.raf), this._helper = null)
                }
            }
            class l {
                constructor(e) {
                    this._initial = null, this._handlePointerDown = e => {
                        if (null !== this._initial) return;
                        if (!(e.target instanceof Element && this._handle.contains(e.target))) return;
                        if (this._initial = e, !this._dispatchEvent(this._createEvent("pointer-drag-start", e))) return void(this._initial = null);
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.addEventListener("pointermove", this._handlePointerMove), t.addEventListener("pointerup", this._handlePointerUp), t.addEventListener("pointercancel", this._handlePointerUp), t.addEventListener("lostpointercapture", this._handlePointerUp), t.setPointerCapture(e.pointerId)
                    }, this._handlePointerMove = e => {
                        null !== this._initial && this._initial.pointerId === e.pointerId && (e.preventDefault(), this._dispatchEvent(this._createEvent("pointer-drag-move", e)))
                    }, this._handlePointerUp = e => {
                        if (null === this._initial || this._initial.pointerId !== e.pointerId) return;
                        e.preventDefault();
                        const t = this._getEventTarget();
                        t.removeEventListener("pointermove", this._handlePointerMove), t.removeEventListener("pointerup", this._handlePointerUp), t.removeEventListener("pointercancel", this._handlePointerUp), t.removeEventListener("lostpointercapture", this._handlePointerUp), t.releasePointerCapture(this._initial.pointerId), this._dispatchEvent(this._createEvent("pointer-drag-stop", e)), this._initial = null
                    };
                    const t = this._handle = e.handle;
                    this._onDragStart = e.onDragStart, this._onDragMove = e.onDragMove, this._onDragStop = e.onDragStop, t.style.touchAction = "none";
                    this._getEventTarget().addEventListener("pointerdown", this._handlePointerDown)
                }
                destroy() {
                    this._handle.style.touchAction = "";
                    const e = this._getEventTarget();
                    e.removeEventListener("pointerdown", this._handlePointerDown), e.removeEventListener("pointermove", this._handlePointerMove), e.removeEventListener("pointerup", this._handlePointerUp), e.removeEventListener("pointercancel", this._handlePointerUp), e.removeEventListener("lostpointercapture", this._handlePointerUp), null !== this._initial && (e.releasePointerCapture(this._initial.pointerId), this._initial = null)
                }
                _getEventTarget() {
                    return r.CheckMobile.iOS() || (0, r.isMac)() && s.touch ? window.document.documentElement : this._handle
                }
                _dispatchEvent(e) {
                    switch (e.type) {
                        case "pointer-drag-start":
                            this._onDragStart(e);
                            break;
                        case "pointer-drag-move":
                            this._onDragMove(e);
                            break;
                        case "pointer-drag-stop":
                            this._onDragStop(e)
                    }
                    return !e.defaultPrevented
                }
                _createEvent(e, t) {
                    return (0, i.assert)(null !== this._initial), new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            backend: this,
                            initial: this._initial,
                            current: t
                        }
                    })
                }
            }
        },
        575658: (e, t, n) => {
            "use strict";
            n.d(t, {
                setFixedBodyState: () => a
            });
            var i = n(76107),
                o = n(531327);
            let r = 0,
                s = !1;

            function a(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++r) {
                    const e = (0,
                            i.getCSSProperty)(t, "overflow"),
                        o = (0, i.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, i.setStyle)(n, "right", `${(0,i.getScrollbarWidth)()}px`), t.style.paddingRight = `${o+(0,i.getScrollbarWidth)()}px`, s = !0), t.classList.add("i-no-scroll")
                } else if (!e && r > 0 && 0 == --r && (t.classList.remove("i-no-scroll"), s)) {
                    (0, i.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, o.getWidgetBarPadding)((0, i.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, i.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", s = !1
                }
            }
        },
        318557: (e, t, n) => {
            "use strict";
            n.d(t, {
                contentHeight: () => o.contentHeight,
                outerHeight: () => o.outerHeight,
                outerWidth: () => o.outerWidth,
                unwrap: () => r,
                html: () => s,
                position: () => l
            });
            var i = n(650151),
                o = n(746326);

            function r(e) {
                return e[0]
            }

            function s(e, t) {
                return void 0 === t || (null === t && (e.innerHTML = ""), "string" != typeof t && "number" != typeof t || (e.innerHTML = String(t))), e
            }

            function a(e) {
                if (!e.getClientRects().length) return {
                    top: 0,
                    left: 0
                };
                const t = e.getBoundingClientRect(),
                    n = (0, i.ensureNotNull)(e.ownerDocument.defaultView);
                return {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }
            }

            function l(e) {
                const t = getComputedStyle(e);
                let n, i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === t.position) n = e.getBoundingClientRect();
                else {
                    n = a(e);
                    const t = e.ownerDocument;
                    let o = e.offsetParent || t.documentElement;
                    for (; o && (o === t.body || o === t.documentElement) && "static" === getComputedStyle(o).position;) o = o.parentElement;
                    o && o !== e && 1 === o.nodeType && (i = a(o), i.top += parseFloat(getComputedStyle(o).borderTopWidth), i.left += parseFloat(getComputedStyle(o).borderLeftWidth))
                }
                return {
                    top: n.top - i.top - parseFloat(t.marginTop),
                    left: n.left - i.left - parseFloat(t.marginLeft)
                }
            }
        },
        195306: (e, t, n) => {
            "use strict";
            n.d(t, {
                showWatchlistDialog: () => o
            });
            let i = null;

            function o() {
                return Promise.all([n.e(81910), n.e(86256), n.e(91901), n.e(1428), n.e(1011), n.e(52701), n.e(745), n.e(65087)]).then(n.bind(n, 299141)).then((e => {
                    const t = new(0, e.WatchlistDialogRenderer);
                    return null !== i && i.hide(), t.show(), i = t, t
                }))
            }
        },
        332585: (e, t, n) => {
            "use strict";
            n.d(t, {
                DrawerManager: () => r,
                DrawerContext: () => s
            });
            var i = n(50959),
                o = n(575658);
            class r extends i.PureComponent {
                constructor(e) {
                    super(e), this._isBodyFixed = !1, this._addDrawer = e => {
                        this.setState((t => ({
                            stack: [...t.stack, e]
                        })))
                    }, this._removeDrawer = e => {
                        this.setState((t => ({
                            stack: t.stack.filter((t => t !== e))
                        })))
                    }, this.state = {
                        stack: []
                    }
                }
                componentDidUpdate(e, t) {
                    !t.stack.length && this.state.stack.length && ((0, o.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, o.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, o.setFixedBodyState)(!1)
                }
                render() {
                    return i.createElement(s.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const s = i.createContext(null)
        },
        762852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Drawer: () => d
            });
            var i = n(50959),
                o = n(650151),
                r = n(497754),
                s = n(777491),
                a = n(707533),
                l = n(332585),
                c = n(320116),
                h = n(150881),
                u = n(945966);

            function d(e) {
                const {
                    position: t = "Bottom",
                    onClose: n,
                    children: d,
                    className: p,
                    theme: v = u
                } = e, m = (0, o.ensureNotNull)((0, i.useContext)(l.DrawerContext)), [g] = (0, i.useState)((() => (0, s.randomHash)())), w = (0, i.useRef)(null), f = (0, i.useContext)(c.CloseDelegateContext);
                return (0, i.useLayoutEffect)((() => ((0, o.ensureNotNull)(w.current).focus({
                    preventScroll: !0
                }), f.subscribe(m, n), m.addDrawer(g), () => {
                    m.removeDrawer(g), f.unsubscribe(m, n)
                })), []), i.createElement(a.Portal, null, i.createElement("div", {
                    className: r(u.wrap, u[`position${t}`])
                }, g === m.currentDrawer && i.createElement("div", {
                    className: u.backdrop,
                    onClick: n
                }), i.createElement(h.TouchScrollContainer, {
                    className: r(u.drawer, v.drawer, u[`position${t}`], p),
                    tabIndex: -1,
                    ref: w,
                    "data-name": e["data-name"]
                }, d)))
            }
        },
        962624: (e, t, n) => {
            "use strict";
            n.d(t, {
                hoverMouseEventFilter: () => i.hoverMouseEventFilter,
                useAccurateHover: () => i.useAccurateHover,
                useHover: () => i.useHover
            });
            var i = n(662464)
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => r
            });
            var i = n(50959),
                o = n(314308);

            function r(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: r,
                    touchStart: s,
                    handler: a,
                    reference: l,
                    ownerDocument: c = document
                } = e, h = (0, i.useRef)(null), u = (0, i.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, i.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: r,
                            touchStart: s
                        },
                        i = l ? l.current : h.current;
                    return (0, o.addOutsideEventListener)(u.current, i, a, c, e)
                }), [t, n, r, s, a]), l || h
            }
        },
        18182: (e, t, n) => {
            "use strict";
            n.d(t, {
                MatchMedia: () => o
            });
            var i = n(50959);
            class o extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
                        this.forceUpdate()
                    }, this.state = {
                        query: window.matchMedia(this.props.rule)
                    }
                }
                componentDidMount() {
                    this._subscribe(this.state.query)
                }
                componentDidUpdate(e, t) {
                    this.state.query !== t.query && (this._unsubscribe(t.query), this._subscribe(this.state.query))
                }
                componentWillUnmount() {
                    this._unsubscribe(this.state.query)
                }
                render() {
                    return this.props.children(this.state.query.matches)
                }
                static getDerivedStateFromProps(e, t) {
                    return e.rule !== t.query.media ? {
                        query: window.matchMedia(e.rule)
                    } : null
                }
                _subscribe(e) {
                    e.addListener(this._handleChange)
                }
                _unsubscribe(e) {
                    e.removeListener(this._handleChange)
                }
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => i
            });
            const i = n(50959).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => g,
                Menu: () => w
            });
            var i = n(50959),
                o = n(497754),
                r = n.n(o),
                s = n(650151),
                a = n(43329),
                l = n(587080),
                c = n(670797),
                h = n(224743),
                u = n(829725),
                d = n(799786),
                p = n(787684),
                v = n(377318),
                m = n(409790);
            const g = m;
            class w extends i.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null, this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                        this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                    }, this._handleScrollWrapRef = e => {
                        this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e),
                            "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                    }, this._handleMeasure = ({
                        callback: e,
                        forceRecalcPosition: t
                    } = {}) => {
                        var n, i, o, r, l, c, h, u, d, p, v, m;
                        if (this.state.isMeasureValid && !t) return;
                        const {
                            position: g
                        } = this.props, w = (0, s.ensureNotNull)(this._containerRef);
                        let f = w.getBoundingClientRect();
                        const _ = document.documentElement.clientHeight,
                            b = document.documentElement.clientWidth,
                            C = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                        let k = _ - 0 - C;
                        const M = f.height > k;
                        if (M) {
                            (0, s.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", f = w.getBoundingClientRect()
                        }
                        const {
                            width: E,
                            height: S
                        } = f, y = "function" == typeof g ? g(E, S, _) : g, x = null !== (o = null === (i = null == y ? void 0 : y.indentFromWindow) || void 0 === i ? void 0 : i.left) && void 0 !== o ? o : 0, T = b - (null !== (r = y.overrideWidth) && void 0 !== r ? r : E) - (null !== (c = null === (l = null == y ? void 0 : y.indentFromWindow) || void 0 === l ? void 0 : l.right) && void 0 !== c ? c : 0), N = (0, a.clamp)(y.x, x, Math.max(x, T)), P = (null !== (u = null === (h = null == y ? void 0 : y.indentFromWindow) || void 0 === h ? void 0 : h.top) && void 0 !== u ? u : 0) + C, A = _ - (null !== (d = y.overrideHeight) && void 0 !== d ? d : S) - (null !== (v = null === (p = null == y ? void 0 : y.indentFromWindow) || void 0 === p ? void 0 : p.bottom) && void 0 !== v ? v : 0);
                        let H = (0, a.clamp)(y.y, P, Math.max(P, A));
                        if (y.forbidCorrectYCoord && H < y.y && (k -= y.y - H, H = y.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && y.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                        const L = null !== (m = y.overrideHeight) && void 0 !== m ? m : M ? k : void 0;
                        this.setState({
                            appearingMenuHeight: t ? this.state.appearingMenuHeight : L,
                            appearingMenuWidth: t ? this.state.appearingMenuWidth : y.overrideWidth,
                            appearingPosition: {
                                x: N,
                                y: H
                            },
                            isMeasureValid: !0
                        }, (() => {
                            this._restoreScrollPosition(), e && e()
                        }))
                    }, this._restoreScrollPosition = () => {
                        const e = document.activeElement,
                            t = (0, s.ensureNotNull)(this._containerRef);
                        if (null !== e && t.contains(e)) try {
                            e.scrollIntoView()
                        } catch (e) {} else(0, s.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
                    }, this._resizeForced = () => {
                        this.setState({
                            appearingMenuHeight: void 0,
                            appearingMenuWidth: void 0,
                            appearingPosition: void 0,
                            isMeasureValid: void 0
                        })
                    }, this._resize = () => {
                        null === this._raf && (this._raf = requestAnimationFrame((() => {
                            this.setState({
                                appearingMenuHeight: void 0,
                                appearingMenuWidth: void 0,
                                appearingPosition: void 0,
                                isMeasureValid: void 0
                            }), this._raf = null
                        })))
                    }, this._handleGlobalClose = e => {
                        this.props.onClose(e)
                    }, this._handleSlot = e => {
                        this._manager.setContainer(e)
                    }, this._handleScroll = () => {
                        this._scroll = (0, s.ensureNotNull)(this._scrollWrapRef).scrollTop
                    }, this._handleScrollOutsideEnd = () => {
                        clearTimeout(this._scrollTimeout), this._scrollTimeout = setTimeout((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            })
                        }), 80)
                    }, this._handleScrollOutside = e => {
                        e.target !== this._scrollWrapRef && (this._handleScrollOutsideEnd(), null === this._scrollRaf && (this._scrollRaf = requestAnimationFrame((() => {
                            this._handleMeasure({
                                forceRecalcPosition: !0
                            }), this._scrollRaf = null
                        }))))
                    }, this.state = {}
                }
                componentDidMount() {
                    this._handleMeasure({
                        callback: this.props.onOpen
                    });
                    const {
                        customCloseDelegate: e = h.globalCloseDelegate
                    } = this.props;
                    e.subscribe(this, this._handleGlobalClose), window.addEventListener("resize", this._resize);
                    const t = null !== this.context;
                    this._hotkeys || t || (this._hotkeys = d.createGroup({
                        desc: "Popup menu"
                    }), this._hotkeys.add({
                        desc: "Close",
                        hotkey: 27,
                        handler: () => {
                            this.props.onKeyboardClose && this.props.onKeyboardClose(), this._handleGlobalClose()
                        }
                    })), this.props.repositionOnScroll && window.addEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    })
                }
                componentDidUpdate() {
                    this._handleMeasure()
                }
                componentWillUnmount() {
                    const {
                        customCloseDelegate: e = h.globalCloseDelegate
                    } = this.props;
                    e.unsubscribe(this, this._handleGlobalClose), window.removeEventListener("resize", this._resize), window.removeEventListener("scroll", this._handleScrollOutside, {
                        capture: !0
                    }), this._hotkeys && (this._hotkeys.destroy(), this._hotkeys = null), null !== this._raf && (cancelAnimationFrame(this._raf), this._raf = null), null !== this._scrollRaf && (cancelAnimationFrame(this._scrollRaf), this._scrollRaf = null), this._scrollTimeout && clearTimeout(this._scrollTimeout)
                }
                render() {
                    const {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        children: h,
                        minWidth: u,
                        theme: d = m,
                        className: g,
                        maxHeight: w,
                        onMouseOver: _,
                        onMouseOut: b,
                        onKeyDown: C,
                        onFocus: k,
                        onBlur: M
                    } = this.props, {
                        appearingMenuHeight: E,
                        appearingMenuWidth: S,
                        appearingPosition: y,
                        isMeasureValid: x
                    } = this.state;
                    return i.createElement(v.MenuContext.Provider, {
                        value: this
                    }, i.createElement(p.SubmenuHandler, null, i.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, i.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": s,
                        "aria-hidden": a,
                        className: r()(g, d.menuWrap, !x && d.isMeasuring),
                        style: {
                            height: E,
                            left: y && y.x,
                            minWidth: u,
                            position: "fixed",
                            top: y && y.y,
                            width: S
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: l.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: _,
                        onMouseOut: b,
                        onKeyDown: C,
                        onFocus: k,
                        onBlur: M
                    }, i.createElement("div", {
                        className: r()(d.scrollWrap, !this.props.noMomentumBasedScroll && d.momentumBased),
                        style: {
                            overflowY: void 0 !== E ? "scroll" : "auto",
                            maxHeight: w
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, i.createElement(f, {
                        className: d.menuBox
                    }, h)))), i.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function f(e) {
                const t = (0, s.ensureNotNull)((0, i.useContext)(p.SubmenuContext)),
                    n = i.useRef(null);
                return i.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (i = e.target, null === (o = n.current) || void 0 === o ? void 0 : o.contains(i)))) return;
                        var i, o;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            w.contextType = p.SubmenuContext
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => r,
                getRootOverlapManager: () => a
            });
            var i = n(650151);
            class o {
                constructor() {
                    this._storage = []
                }
                add(e) {
                    this._storage.push(e)
                }
                remove(e) {
                    this._storage = this._storage.filter((t => e !== t))
                }
                has(e) {
                    return this._storage.includes(e)
                }
                getItems() {
                    return this._storage
                }
            }
            class r {
                constructor(e = document) {
                    this._storage = new o, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        n = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, n), this._container = n
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const n = this._windows.get(e);
                    if (void 0 !== n) return n;
                    this.registerWindow(e);
                    const i = this._document.createElement("div");
                    if (i.style.position = t.position, i.style.zIndex = this._index.toString(), i.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(i);
                        else if (t.index <= 0) this._container.insertBefore(i, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(i, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(i, this._container.firstChild) : this._container.appendChild(i);
                    return this._windows.set(e, i), ++this._index, i
                }
                unregisterWindow(e) {
                    this._storage.remove(e);
                    const t = this._windows.get(e);
                    void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t), this._windows.delete(e))
                }
                getZindex(e) {
                    const t = this.ensureWindow(e);
                    return parseInt(t.style.zIndex || "0")
                }
                moveToTop(e) {
                    if (this.getZindex(e) !== this._index) {
                        this.ensureWindow(e).style.zIndex = (++this._index).toString()
                    }
                }
                removeWindow(e) {
                    this.unregisterWindow(e)
                }
            }
            const s = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, i.ensureDefined)(s.get(t)); {
                    const t = new r(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return s.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        16532: (e, t, n) => {
            "use strict";
            n.d(t, {
                Submenu: () => p
            });
            var i = n(50959),
                o = n(45968),
                r = n(762852),
                s = n(634993),
                a = n(83436),
                l = n(777491),
                c = n(576016),
                h = n(18182),
                u = n(292730),
                d = n(379978);

            function p(e) {
                return i.createElement(h.MatchMedia, {
                    rule: "screen and (max-width: 430px)"
                }, (t => t || e.forceUseDrawer ? i.createElement(m, { ...e
                }) : i.createElement(g, { ...e
                })))
            }

            function v(e) {
                const {
                    toolboxLabel: t
                } = e;
                return i.createElement(s.PopupMenuItem, {
                    toolbox: i.createElement(i.Fragment, null, t && i.createElement("span", {
                        className: u.toolboxLabel
                    }, t), i.createElement(a.Icon, {
                        className: u.icon,
                        icon: d
                    })),
                    suppressToolboxClick: !1,
                    dontClosePopup: !0,
                    ...e
                })
            }

            function m(e) {
                const {
                    children: t,
                    className: n,
                    drawerClassName: o,
                    menuItemTheme: s,
                    label: a,
                    icon: l,
                    labelClassName: c,
                    toolboxLabel: h
                } = e, [u, d] = (0, i.useState)(!1);
                return i.createElement(i.Fragment, null, i.createElement(v, {
                    theme: s,
                    label: a,
                    toolboxLabel: h,
                    icon: l,
                    labelClassName: c,
                    className: n,
                    onClick: function() {
                        d(!u)
                    }
                }), u && i.createElement(r.Drawer, {
                    className: o,
                    position: "Bottom",
                    onClose: function() {
                        d(!1)
                    }
                }, t))
            }

            function g(e) {
                const {
                    children: t,
                    className: n,
                    menuClassName: r,
                    menuItemTheme: s,
                    label: a,
                    icon: h,
                    labelClassName: u,
                    toolboxLabel: d
                } = e, p = (0, i.useRef)((0,
                    l.randomHash)()), m = (0, i.useRef)(null), {
                    isMenuOpened: g,
                    onTriggerClick: w,
                    onTriggerMouseOver: f,
                    onMenuClose: _,
                    getPosition: b,
                    onMenuMouseOver: C
                } = (0, c.useSubmenu)(p.current, m);
                return i.createElement(i.Fragment, null, i.createElement(v, {
                    theme: s,
                    label: a,
                    toolboxLabel: d,
                    icon: h,
                    labelClassName: u,
                    className: n,
                    onClick: w,
                    onMouseOver: f,
                    reference: m,
                    isHovered: g
                }), i.createElement(o.PopupMenu, {
                    className: r,
                    position: b,
                    onClose: _,
                    isOpened: g,
                    doNotCloseOn: m.current,
                    onMouseOver: C
                }, t))
            }
        },
        576016: (e, t, n) => {
            "use strict";
            n.d(t, {
                useSubmenu: () => l
            });
            var i = n(50959),
                o = n(778785),
                r = n(787684),
                s = n(962624),
                a = n(423582);

            function l(e, t, n = {}) {
                const l = i.useContext(r.SubmenuContext);
                i.useEffect((() => null == l ? void 0 : l.registerSubmenu(e, u)), [e]);
                const c = Boolean((null == l ? void 0 : l.current) === e);
                return {
                    isMenuOpened: c,
                    onTriggerClick: function() {
                        if (o.mobiletouch) return void(null == l || l.setCurrent(c ? null : e));
                        n.forceOpenOnClick && (null == l || l.setCurrent(c ? null : e))
                    },
                    onMenuClose: function() {
                        null == l || l.setCurrent(null)
                    },
                    getPosition: function(e) {
                        return (0, a.calcSubMenuPos)(e, t.current)
                    },
                    onMenuMouseOver: h,
                    onTriggerMouseOver: h
                };

                function h(t) {
                    !o.mobiletouch && (0, s.hoverMouseEventFilter)(t) && (null == l || l.setCurrent(e))
                }

                function u(e) {
                    var n;
                    return Boolean(null === (n = t.current) || void 0 === n ? void 0 : n.contains(e))
                }
            }
        },
        423582: (e, t, n) => {
            "use strict";
            n.d(t, {
                calcSubMenuPos: () => o
            });
            var i = n(768038);

            function o(e, t, n = {
                x: 0,
                y: 10
            }) {
                if (t) {
                    const {
                        left: n,
                        right: o,
                        top: r
                    } = t.getBoundingClientRect(), s = document.documentElement.clientWidth, a = {
                        x: n - e,
                        y: r
                    }, l = {
                        x: o,
                        y: r
                    };
                    return (0, i.isRtl)() ? n <= e ? l : a : s - o >= e ? l : a
                }
                return n
            }
        },
        320116: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseDelegateContext: () => r
            });
            var i = n(50959),
                o = n(224743);
            const r = i.createContext(o.globalCloseDelegate)
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => h
            });
            var i = n(50959),
                o = n(500962),
                r = n(162942),
                s = n(707533),
                a = n(175071),
                l = n(320116),
                c = n(951292);

            function h(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: h,
                    closeOnClickOutside: u = !0,
                    doNotCloseOn: d,
                    onClickOutside: p,
                    onClose: v,
                    onKeyboardClose: m,
                    "data-name": g = "popup-menu-container",
                    ...w
                } = e, f = (0, i.useContext)(l.CloseDelegateContext), _ = (0, c.useOutsideEvent)({
                    handler: function(e) {
                        p && p(e);
                        if (!u) return;
                        const t = (0, r.default)(d) ? d() : d;
                        if (t && e.target instanceof Node) {
                            const n = o.findDOMNode(t);
                            if (n instanceof Node && n.contains(e.target)) return
                        }
                        v()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return h ? i.createElement(s.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, i.createElement("span", {
                    ref: _,
                    style: {
                        pointerEvents: "auto"
                    }
                }, i.createElement(a.Menu, { ...w,
                    onClose: v,
                    onKeyboardClose: m,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: f,
                    ref: t,
                    "data-name": g
                }, n))) : null
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => c
            });
            var i = n(50959),
                o = n(500962),
                r = n(777491),
                s = n(829725),
                a = n(670797);
            class l extends i.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, r.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "",
                        e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(i.createElement(c.Provider, {
                            value: this
                        }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, s.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = a.SlotContext;
            const c = i.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => o,
                SlotContext: () => r
            });
            var i = n(50959);
            class o extends i.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return i.createElement("div", {
                        style: {
                            position: "fixed",
                            zIndex: 150,
                            left: 0,
                            top: 0
                        },
                        ref: this.props.reference
                    })
                }
            }
            const r = i.createContext(null)
        },
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => o,
                SubmenuHandler: () => r
            });
            var i = n(50959);
            const o = i.createContext(null);

            function r(e) {
                const [t, n] = (0, i.useState)(null), r = (0, i.useRef)(null), s = (0, i.useRef)(new Map);
                return (0, i.useEffect)((() => () => {
                    null !== r.current && clearTimeout(r.current)
                }), []), i.createElement(o.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== r.current && (clearTimeout(r.current), r.current = null);
                            null === t ? n(e) : r.current = setTimeout((() => {
                                r.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return s.current.set(e, t), () => {
                                s.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(s.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        150881: (e, t, n) => {
            "use strict";
            n.d(t, {
                TouchScrollContainer: () => a
            });
            var i = n(50959),
                o = n(259142),
                r = n(650151),
                s = n(638456);
            const a = (0, i.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...r
                } = e, a = (0, i.useRef)(null);
                return (0, i.useImperativeHandle)(t, (() => a.current)), (0, i.useLayoutEffect)((() => {
                    if (s.CheckMobile.iOS()) return null !== a.current && (0, o.disableBodyScroll)(a.current, {
                        allowTouchMove: l(a)
                    }), () => {
                        null !== a.current && (0, o.enableBodyScroll)(a.current)
                    }
                }), []), i.createElement("div", {
                    ref: a,
                    ...r
                }, n)
            }));

            function l(e) {
                return t => {
                    const n = (0, r.ensureNotNull)(e.current),
                        i = document.activeElement;
                    return !n.contains(t) || null !== i && n.contains(i) && i.contains(t)
                }
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function i(e, t, n = {}) {
                return Object.assign({}, e, function(e, t, n = {}) {
                    const i = Object.assign({}, t);
                    for (const o of Object.keys(t)) {
                        const r = n[o] || o;
                        r in e && (i[o] = [e[r], t[o]].join(" "))
                    }
                    return i
                }(e, t, n))
            }
            n.d(t, {
                mergeThemes: () => i
            })
        },
        906132: (e, t, n) => {
            "use strict";
            var i = n(522134);

            function o() {}

            function r() {}
            r.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, r, s) {
                    if (s !== i) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: r,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        719036: (e, t, n) => {
            e.exports = n(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        465785: e => {
            e.exports = {
                wrapper: "wrapper-o7rRFc7H",
                labelRow: "labelRow-o7rRFc7H",
                label: "label-o7rRFc7H",
                labelHint: "labelHint-o7rRFc7H",
                labelOn: "labelOn-o7rRFc7H"
            }
        },
        899229: e => {
            e.exports = {
                balance: "balance-N5vOAzs3",
                icon: "icon-N5vOAzs3",
                "balance-toolbox": "balance-toolbox-N5vOAzs3"
            }
        },
        522828: e => {
            e.exports = {
                switcher: "switcher-ooJglCB7",
                switcherSmall: "switcherSmall-ooJglCB7",
                recentLayouts: "recentLayouts-ooJglCB7",
                submenu: "submenu-ooJglCB7",
                layoutItem: "layoutItem-ooJglCB7",
                layoutTitle: "layoutTitle-ooJglCB7",
                layoutMeta: "layoutMeta-ooJglCB7",
                layoutItemWrap: "layoutItemWrap-ooJglCB7",
                layoutTitleMobile: "layoutTitleMobile-ooJglCB7",
                drawer: "drawer-ooJglCB7",
                mobile: "mobile-ooJglCB7",
                labelRow: "labelRow-ooJglCB7",
                active: "active-ooJglCB7",
                titleIcon: "titleIcon-ooJglCB7",
                shortcut: "shortcut-ooJglCB7",
                copyLink: "copyLink-ooJglCB7",
                copyLinkMobile: "copyLinkMobile-ooJglCB7"
            }
        },
        650205: e => {
            e.exports = {
                item: "item-KdVcHqe8",
                withIcon: "withIcon-KdVcHqe8",
                icon: "icon-KdVcHqe8",
                shortcut: "shortcut-KdVcHqe8"
            }
        },
        347975: e => {
            e.exports = {
                item: "item-Mrvq6hHT",
                withIcon: "withIcon-Mrvq6hHT",
                icon: "icon-Mrvq6hHT"
            }
        },
        649373: e => {
            e.exports = {
                item: "item-WZCJN4RW",
                withIcon: "withIcon-WZCJN4RW",
                icon: "icon-WZCJN4RW"
            }
        },
        638043: e => {
            e.exports = {
                item: "item-hQm9e4lo",
                withIcon: "withIcon-hQm9e4lo",
                icon: "icon-hQm9e4lo"
            }
        },
        333283: e => {
            e.exports = {
                item: "item-Ep1DJuUe"
            }
        },
        398461: e => {
            e.exports = {
                joined: "joined-VbUoKl_A",
                icon: "icon-VbUoKl_A",
                "joined-toolbox": "joined-toolbox-VbUoKl_A"
            }
        },
        576640: e => {
            e.exports = {
                menu: "menu-ShqWkm6L",
                offsetSmall: "offsetSmall-ShqWkm6L",
                offsetMedium: "offsetMedium-ShqWkm6L",
                popupMenu: "popupMenu-ShqWkm6L",
                popupSubMenu: "popupSubMenu-ShqWkm6L",
                icon: "icon-ShqWkm6L",
                subMenuIcon: "subMenuIcon-ShqWkm6L",
                desktopIcon: "desktopIcon-ShqWkm6L",
                buttonWrap: "buttonWrap-ShqWkm6L",
                button: "button-ShqWkm6L",
                labelSubmenu: "labelSubmenu-ShqWkm6L",
                profileMenu: "profileMenu-ShqWkm6L",
                userPic: "userPic-ShqWkm6L",
                profileItem: "profileItem-ShqWkm6L",
                smallWidth: "smallWidth-ShqWkm6L",
                proPlanIcon: "proPlanIcon-ShqWkm6L",
                userName: "userName-ShqWkm6L",
                userNameMobile: "userNameMobile-ShqWkm6L",
                userRow: "userRow-ShqWkm6L",
                badge: "badge-ShqWkm6L",
                notifications: "notifications-ShqWkm6L",
                menuNotifications: "menuNotifications-ShqWkm6L",
                menuItem: "menuItem-ShqWkm6L",
                moreMenuItem: "moreMenuItem-ShqWkm6L",
                subMenuItem: "subMenuItem-ShqWkm6L",
                subMenuItemHighlighted: "subMenuItemHighlighted-ShqWkm6L",
                menuSwitcher: "menuSwitcher-ShqWkm6L",
                menuLabel: "menuLabel-ShqWkm6L",
                shortMenuLabel: "shortMenuLabel-ShqWkm6L",
                drawer: "drawer-ShqWkm6L",
                mainMenuDrawer: "mainMenuDrawer-ShqWkm6L",
                switcher: "switcher-ShqWkm6L",
                switcherSmall: "switcherSmall-ShqWkm6L",
                joinItem: "joinItem-ShqWkm6L",
                signOut: "signOut-ShqWkm6L"
            }
        },
        997228: e => {
            e.exports = {
                title: "title-ujIBirbo"
            }
        },
        635194: e => {
            e.exports = {
                button: "button-uO7HM85b",
                hover: "hover-uO7HM85b",
                isInteractive: "isInteractive-uO7HM85b",
                isGrouped: "isGrouped-uO7HM85b",
                isActive: "isActive-uO7HM85b",
                isOpened: "isOpened-uO7HM85b",
                isDisabled: "isDisabled-uO7HM85b",
                text: "text-uO7HM85b",
                icon: "icon-uO7HM85b"
            }
        },
        911746: e => {
            e.exports = {
                menu: "menu-DlFqzKv5",
                button: "button-DlFqzKv5"
            }
        },
        826316: (e, t, n) => {
            "use strict";
            n.d(t, {
                menuItemSwitcherMobileTheme: () => s
            });
            var i = n(995683),
                o = n(320711),
                r = n(465785);
            const s = (0, i.mergeThemes)(o.DEFAULT_MENU_ITEM_SWITCHER_THEME, r)
        },
        901910: (e, t, n) => {
            "use strict";
            n.d(t, {
                getRecentLayouts: () => o
            });
            var i = n(890740);

            function o() {
                return (0, i.fetch)("/my-charts/?limit=4", {
                    credentials: "include"
                }).then((e => {
                    if (e.ok) return e.json();
                    throw new Error("not ok")
                })).then((e => e.sort(((e, t) => e.modified_iso > t.modified_iso ? -1 : 1))))
            }
        },
        821190: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolTitle: () => a
            });
            var i = n(50959),
                o = n(497754),
                r = n.n(o),
                s = n(997228);

            function a(e) {
                const {
                    className: t,
                    text: n,
                    id: o,
                    role: a,
                    ariaHidden: l
                } = e;
                return i.createElement("div", {
                    className: r()(s.title, t),
                    id: o,
                    role: a,
                    "aria-hidden": l
                }, n)
            }
        },
        983731: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => a,
                ToolWidgetButton: () => l
            });
            var i = n(50959),
                o = n(497754),
                r = n(83436),
                s = n(635194);
            const a = s,
                l = i.forwardRef(((e, t) => {
                    const {
                        icon: n,
                        isActive: a,
                        isOpened: l,
                        isDisabled: c,
                        isGrouped: h,
                        isHovered: u,
                        onClick: d,
                        text: p,
                        textBeforeIcon: v,
                        title: m,
                        theme: g = s,
                        className: w,
                        forceInteractive: f,
                        "data-name": _,
                        ...b
                    } = e, C = o(w, g.button, m && "apply-common-tooltip", {
                        [g.isActive]: a,
                        [g.isOpened]: l,
                        [g.isInteractive]: (f || Boolean(d)) && !c,
                        [g.isDisabled]: c,
                        [g.isGrouped]: h,
                        [g.hover]: u
                    }), k = n && ("string" == typeof n ? i.createElement(r.Icon, {
                        className: g.icon,
                        icon: n
                    }) : i.cloneElement(n, {
                        className: o(g.icon, n.props.className)
                    }));
                    return i.createElement("div", { ...b,
                        ref: t,
                        "data-role": "button",
                        className: C,
                        onClick: c ? void 0 : d,
                        title: m,
                        "data-name": _
                    }, v && p && i.createElement("div", {
                        className: o("js-button-text", g.text)
                    }, p), k, !v && p && i.createElement("div", {
                        className: o("js-button-text", g.text)
                    }, p))
                }))
        },
        231656: (e, t, n) => {
            "use strict";
            n.d(t, {
                validateRegistry: () => a,
                RegistryProvider: () => l,
                useRegistry: () => c,
                registryContextType: () => h
            });
            var i = n(50959),
                o = n(719036),
                r = n.n(o);
            const s = i.createContext({});

            function a(e, t) {
                r().checkPropTypes(t, e, "context", "RegistryContext")
            }

            function l(e) {
                const {
                    validation: t,
                    value: n
                } = e;
                return a(n, t), i.createElement(s.Provider, {
                    value: n
                }, e.children)
            }

            function c(e) {
                const t = (0, i.useContext)(s);
                return a(t, e), t
            }

            function h() {
                return s
            }
        },
        850249: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                TopLeftButtonRenderer: () => Ot
            });
            var i = n(50959),
                o = n(500962),
                r = n(650151),
                s = n(728804),
                a = n(638456),
                l = n(777754),
                c = n(983731),
                h = n(45968),
                u = n(320711),
                d = n(259316),
                p = n(345848);

            function v(e) {
                const [t, o] = (0, i.useState)(d.isDrawingToolbarVisible.value());
                return (0, i.useEffect)((() => {
                    const e = () => o(d.isDrawingToolbarVisible.value());
                    return d.isDrawingToolbarVisible.subscribe(e), () => d.isDrawingToolbarVisible.unsubscribe(e)
                }), []), i.createElement(u.MenuItemSwitcher, {
                    className: e.className,
                    reference: e.reference,
                    theme: e.theme,
                    checked: t,
                    label: l.t(null, void 0, n(372192)),
                    preventLabelHighlight: !0,
                    value: "leftToolbarSwitcher",
                    onChange: function() {
                        e.onClick && e.onClick();
                        const t = !d.isDrawingToolbarVisible.value();
                        d.isDrawingToolbarVisible.setValue(t);
                        const n = "Drawings panel " + (t ? "on" : "off");
                        (0, p.trackEvent)("GUI", "Platform menu", n)
                    },
                    icon: e.icon
                })
            }
            var m = n(634993),
                g = n(664224);
            n(911746), n(506816);
            var w = n(719036);
            const f = {
                chartWidgetCollection: w.any.isRequired,
                chartChangesWatcher: w.any.isRequired,
                saveChartService: w.any.isRequired,
                loadChartService: w.any.isRequired,
                sharingChartService: w.any.isRequired
            };
            var _ = n(231656),
                b = n(314802),
                C = n(779923),
                k = n(963644),
                M = n(497754),
                E = n.n(M),
                S = n(83436),
                y = n(359984),
                x = n(233313),
                T = n(812352),
                N = n(93916),
                P = (n(984919), n(440135)),
                A = n(909740),
                H = n(919346),
                L = n(499791);
            const Z = (0, _.registryContextType)();
            var I = n(889500),
                V = n(901910),
                W = n(826316),
                O = n(16532),
                R = n(907429),
                D = n(995683),
                B = n(18182),
                U = n(821190),
                F = n(868151),
                q = n(685392),
                j = n(125226),
                z = n(793993),
                G = n(649373),
                J = n(650205),
                $ = n(347975),
                Y = n(638043),
                K = n(333283),
                X = n(133055),
                Q = n(636296),
                ee = n(808757),
                te = n(787301),
                ne = n(441013),
                ie = n(818745),
                oe = n(398120),
                re = n(522828);
            const se = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, J),
                ae = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, $),
                le = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, { ...Y,
                    icon: re.titleIcon
                }),
                ce = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, { ...G,
                    icon: re.titleIcon
                }),
                he = W.menuItemSwitcherMobileTheme,
                ue = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    shortcut: re.shortcut
                }),
                de = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, K),
                pe = (0, j.isFeatureEnabled)("change_name_of_all_layouts_btn"),
                ve = pe ? l.t(null, void 0, n(715795)) : l.t(null, void 0, n(375789)),
                me = {
                    copy: l.t(null, void 0, n(35216)),
                    newChartLayout: l.t(null, void 0, n(759466)),
                    loadChartLayout: (0, F.appendEllipsis)(ve),
                    rename: (0, F.appendEllipsis)(l.t(null, void 0, n(435038))),
                    saveAs: (0, F.appendEllipsis)(l.t(null, void 0, n(180959))),
                    saveChartLayout: l.t(null, void 0, n(11680)),
                    saveChartLayoutLong: l.t(null, void 0, n(587409))
                };

            function ge(e) {
                const {
                    wasChanges: t,
                    isProcessing: o,
                    chartId: r,
                    onSaveChart: s,
                    onRenameChart: a,
                    onSaveAsChart: c,
                    onLoadChart: h,
                    onNewChart: d,
                    onExportData: p,
                    isAutoSaveEnabled: v,
                    autoSaveId: g,
                    sharingId: w,
                    onAutoSaveChanged: f,
                    isSharingEnabled: _,
                    onSharingChanged: C,
                    layoutId: k,
                    title: E,
                    isAuthenticated: S,
                    layoutItems: y,
                    trackMenuItemClick: x
                } = e, T = (0, i.useRef)(null);
                return i.createElement(B.MatchMedia, {
                    rule: "screen and (max-width: 430px)"
                }, (e => {
                    const x = e ? le : ce,
                        H = e ? ae : se,
                        L = e ? he : void 0,
                        Z = e ? de : ue;
                    return i.createElement(i.Fragment, null, S && i.createElement(O.Submenu, {
                        icon: R.icons[k],
                        label: E,
                        className: re.recentLayouts,
                        menuClassName: re.submenu,
                        menuItemTheme: x,
                        drawerClassName: re.drawer
                    }, i.createElement(i.Fragment, null, i.createElement(m.PopupMenuItem, {
                        key: "new-chart",
                        theme: Z,
                        icon: oe,
                        label: me.newChartLayout,
                        onClick: d,
                        className: M(re.layoutItemWrap, e && re.mobile),
                        labelRowClassName: re.labelRow
                    }), i.createElement(N.PopupMenuSeparator, {
                        key: "new-chart-separator"
                    }), y.length > 0 && i.createElement(i.Fragment, null, i.createElement(U.ToolTitle, {
                        text: l.t(null, void 0, n(889424))
                    }), y.map((t => {
                        const n = Number(t.id) === r;
                        return i.createElement(m.PopupMenuItem, {
                            key: t.id,
                            className: M(re.layoutItemWrap, n && re.active),
                            labelRowClassName: re.labelRow,
                            link: n ? void 0 : `/chart/${t.url}${window.location.search}`,
                            onClick: A,
                            onClickArg: n,
                            trackEventObject: (o = pe ? "Switch chart layout(2)" : "Switch chart layout", {
                                label: o,
                                category: "GUI",
                                event: "Burger Menu"
                            }),
                            label: i.createElement("div", {
                                className: re.layoutItem
                            }, i.createElement("div", {
                                className: M(re.layoutTitle, e && re.layoutTitleMobile)
                            }, t.name), i.createElement("div", {
                                className: re.layoutMeta
                            }, t.short_symbol, ", ", t.interval)),
                            trackRightClick: !0,
                            trackMouseWheelClick: !0
                        });
                        var o
                    })), i.createElement(N.PopupMenuSeparator, {
                        key: "recent-layouts"
                    })), i.createElement(m.PopupMenuItem, {
                        key: "load-chart",
                        theme: Z,
                        label: me.loadChartLayout,
                        onClick: h,
                        className: M(re.layoutItemWrap, e && re.mobile, "js-save-load-menu-item-load-chart"),
                        labelRowClassName: re.labelRow,
                        shortcut: e ? void 0 : l.t(null, {
                            context: "hotkey"
                        }, n(214229))
                    }))), i.createElement(m.PopupMenuItem, {
                        icon: te,
                        key: "save",
                        isDisabled: Boolean(o || !t && r),
                        label: me.saveChartLayout,
                        onClick: s,
                        theme: H
                    }), S && void 0 !== r && i.createElement(i.Fragment, null, void 0 !== v && void 0 !== f && i.createElement(u.MenuItemSwitcher, {
                        key: "auto-save",
                        icon: ie,
                        checked: v,
                        onChange: f,
                        className: e ? re.switcherSmall : re.switcher,
                        theme: L,
                        id: g,
                        label: l.t(null, void 0, n(801556)),
                        value: "autoSaveSwitcher"
                    }), void 0 !== _ && void 0 !== C && i.createElement(i.Fragment, null, i.createElement(u.MenuItemSwitcher, {
                        key: "sharing",
                        icon: ne,
                        checked: _,
                        onChange: C,
                        className: e ? re.switcherSmall : re.switcher,
                        theme: L,
                        id: w,
                        label: l.t(null, void 0, n(327077)),
                        value: "sharingSwitcher"
                    }), _ && i.createElement("div", {
                        ref: T,
                        className: M(re.copyLink, e && re.copyLinkMobile),
                        onClick: P
                    }, l.t(null, void 0, n(607367)))), i.createElement(m.PopupMenuItem, {
                        icon: X,
                        key: "rename",
                        label: me.rename,
                        onClick: a,
                        theme: H
                    }), i.createElement(m.PopupMenuItem, {
                        icon: Q,
                        key: "save-as",
                        label: me.saveAs,
                        onClick: c,
                        theme: H
                    })), !(0, b.isOnMobileAppPage)("any") && i.createElement(m.PopupMenuItem, {
                        icon: ee,
                        key: "export-chart-data",
                        label: (0, F.appendEllipsis)(l.t(null, void 0, n(919686))),
                        onClick: p,
                        className: M("apply-common-tooltip common-tooltip-vertical"),
                        theme: H,
                        title: l.t(null, void 0, n(407301))
                    }), i.createElement(N.PopupMenuSeparator, {
                        key: "layout-settings-end"
                    }))
                }));

                function P() {
                    const e = window.location.href;
                    return (0, z.getClipboard)().writeText(e).then((() => {
                        T.current && ((0, q.showTooltip)(T.current, {
                            initialDelay: 0,
                            leaveOnMouseOut: !0
                        }), (0, q.debounceHideTooltip)())
                    }))
                }

                function A(e, t) {
                    x("chartlayout_openrecentlayout"), e && t.preventDefault()
                }
            }
            var we = n(223124),
                fe = n(776734);
            const _e = (0, _.registryContextType)(),
                be = (0, j.isFeatureEnabled)("change_name_of_all_layouts_btn");
            class Ce extends i.PureComponent {
                constructor(e, t) {
                    super(e, t), this._layoutsRequest = null, this._requestRecentLayouts = () => {
                        this.props.isAuthenticated ? (this._layoutsRequest = (0, we.makeCancelable)((0, V.getRecentLayouts)()), this._layoutsRequest.promise.then((e => {
                            this._layoutsRequest = null, this.setState({
                                recentLayouts: e
                            })
                        })).catch((e => {
                            if (!(0, we.isCancelled)(e)) throw e
                        }))) : this._layoutsRequest && this._layoutsRequest.cancel()
                    }, this._onChangeHasChanges = e => {
                        this.setState({
                            wasChanges: e
                        })
                    }, this._onChangeAutoSaveEnabled = e => {
                        this.setState({
                            isAutoSaveEnabled: e
                        })
                    }, this._onChangeSharingEnabled = e => {
                        this.setState({
                            isSharingEnabled: e
                        })
                    }, this._onChangeTitle = e => {
                        this.setState({
                            title: e
                        })
                    }, this._onChangeId = e => {
                        this.setState({
                            id: e
                        })
                    }, this._onChartAboutToBeSaved = () => {
                        this.setState({
                            isProcessing: !0
                        })
                    }, this._onChartSaved = () => {
                        this.setState({
                            isProcessing: !1
                        })
                    }, this._handleAutoSaveEnabled = e => {
                        this._trackMenuItemClick("autosave"), this.context.saveChartService.setAutoSaveEnabled(e),
                            this._trackEvent(e ? "Autosave on" : "Autosave off")
                    }, this._handleSharingEnabled = e => {
                        this._trackMenuItemClick("sharing"), (0, r.ensureDefined)(this.context.sharingChartService).setSharingEnabled(e), this._trackEvent(e ? "Sharing on" : "Sharing off")
                    }, this._handleClickSave = () => {
                        this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackMenuItemClick("savelayout"), this._trackEvent("Save")
                    }, this._handleClickSaveAs = () => {
                        this.context.saveChartService.saveChartAs(), this._trackMenuItemClick("makeacopy"), this._trackEvent("Make a copy")
                    }, this._handleClickNew = () => {
                        (0, I.openNewChart)(), this._trackEvent("New chart layout"), this._trackMenuItemClick("chartlayout_newchartlayout")
                    }, this._handleExportData = () => {
                        const e = Ce._exportDialogPromise = Promise.all([n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(1428), n.e(20187), n.e(1011), n.e(52701), n.e(51907), n.e(67177), n.e(74935), n.e(745), n.e(49961), n.e(69623)]).then(n.bind(n, 493872)).then((t => {
                            Ce._exportDialogPromise === e && (t.showChartExportDialog(this.context.chartWidgetCollection), this._trackEvent("Export chart data"), this._trackMenuItemClick("exportchartdata"))
                        }))
                    }, this._handleClickLoad = () => {
                        this.context.loadChartService.showLoadDialog();
                        const e = be ? "Load chart layout(2)" : "Load chart layout";
                        this._trackEvent(e), this._trackMenuItemClick("chartlayout_alllayouts")
                    }, this._handleClickRename = () => {
                        this.context.saveChartService.renameChart(), this._trackEvent("Rename"), this._trackMenuItemClick("rename")
                    }, (0, _.validateRegistry)(t, {
                        chartWidgetCollection: w.any.isRequired,
                        chartChangesWatcher: w.any.isRequired,
                        saveChartService: w.any.isRequired,
                        sharingChartService: w.any.isRequired,
                        loadChartService: w.any.isRequired
                    });
                    const {
                        chartWidgetCollection: i,
                        chartChangesWatcher: o,
                        saveChartService: s,
                        sharingChartService: a
                    } = t;
                    this.state = {
                        isProcessing: !1,
                        id: i.metaInfo.id.value(),
                        title: i.metaInfo.name.value(),
                        wasChanges: o.hasChanges(),
                        isAutoSaveEnabled: s.autoSaveEnabled().value(),
                        isSharingEnabled: !!a && a.sharingEnabled().value(),
                        iconHovered: !1,
                        recentLayouts: []
                    }
                }
                componentDidMount() {
                    const {
                        chartSaver: e,
                        isAuthenticated: t
                    } = this.props, {
                        chartWidgetCollection: n,
                        chartChangesWatcher: i,
                        saveChartService: o,
                        sharingChartService: s
                    } = this.context;
                    i.getOnChange().subscribe(this, this._onChangeHasChanges), o.autoSaveEnabled().subscribe(this._onChangeAutoSaveEnabled), (0, r.ensureDefined)(s).sharingEnabled().subscribe(this._onChangeSharingEnabled), n.metaInfo.name.subscribe(this._onChangeTitle), n.metaInfo.id.subscribe(this._onChangeId), e.chartSaved().subscribe(this, this._onChartSaved), e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved), t && this._requestRecentLayouts(), window.loginStateChange.subscribe(this, this._requestRecentLayouts)
                }
                componentWillUnmount() {
                    const {
                        chartSaver: e
                    } = this.props, {
                        chartWidgetCollection: t,
                        chartChangesWatcher: n,
                        saveChartService: i,
                        sharingChartService: o
                    } = this.context;
                    n.getOnChange().unsubscribe(this, this._onChangeHasChanges), i.autoSaveEnabled().unsubscribe(this._onChangeAutoSaveEnabled), (0, r.ensureDefined)(o).sharingEnabled().unsubscribe(this._onChangeSharingEnabled),
                        t.metaInfo.name.unsubscribe(this._onChangeTitle), t.metaInfo.id.unsubscribe(this._onChangeId), e.chartSaved().unsubscribe(this, this._onChartSaved), e.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.unsubscribe(this, this._requestRecentLayouts), null !== this._layoutsRequest && this._layoutsRequest.cancel()
                }
                render() {
                    const {
                        id: e,
                        isAuthenticated: t
                    } = this.props, {
                        chartWidgetCollection: n
                    } = this.context, {
                        isProcessing: o,
                        id: r,
                        wasChanges: s,
                        isAutoSaveEnabled: a,
                        isSharingEnabled: l,
                        recentLayouts: c
                    } = this.state, h = {
                        isProcessing: o,
                        wasChanges: s,
                        id: e,
                        isAuthenticated: t,
                        trackMenuItemClick: this._trackMenuItemClick,
                        title: n.metaInfo.name.value(),
                        layoutId: n.layout.value(),
                        chartId: null !== r ? r : void 0,
                        layoutItems: c,
                        onSaveChart: this._handleClickSave,
                        onRenameChart: this._handleClickRename,
                        onSaveAsChart: this._handleClickSaveAs,
                        onLoadChart: this._handleClickLoad
                    };
                    return h.onNewChart = this._handleClickNew, h.onExportData = this._handleExportData, h.onAutoSaveChanged = this._handleAutoSaveEnabled, h.onSharingChanged = this._handleSharingEnabled, h.isAutoSaveEnabled = a, h.isSharingEnabled = l, h.autoSaveId = "chart-auto-save", i.createElement(ge, { ...h
                    })
                }
                _trackEvent(e) {
                    (0, p.trackEvent)("GUI", "Burger Menu", e)
                }
                async _trackMenuItemClick(e) {
                    const t = await (0, fe.getTracker)();
                    t && t.trackBurgerMenuClick(e)
                }
            }
            Ce.contextType = _e, Ce._exportDialogPromise = null;
            var ke = n(762852),
                Me = n(332585),
                Ee = n(251954),
                Se = n(41299);

            function ye(e) {
                const {
                    spin: t
                } = e, [n, o] = (0, i.useState)(t ? 2 : 0);
                return (0, i.useEffect)((() => {
                    2 !== n && t && o(1)
                }), [t]), i.createElement("svg", {
                    width: "28",
                    height: "28",
                    xmlns: "http://www.w3.org/2000/svg"
                }, i.createElement("g", {
                    fill: "currentColor"
                }, i.createElement("path", {
                    d: "M6 7h16a1 1 0 1 1 0 2H6z",
                    className: E()(Se.line, 1 === n && Se.starting, 2 === n && Se.spin1, 3 === n && Se.stopping1),
                    onAnimationIteration: function() {
                        2 !== n || t || o(3)
                    },
                    onAnimationEnd: function() {
                        1 === n && o(2);
                        3 === n && o(0)
                    }
                }), i.createElement("path", {
                    d: "M6 13h16a1 1 0 1 1 0 2H6z",
                    className: E()(Se.line, 1 === n && Se.starting, 2 === n && Se.spin2, 3 === n && Se.stopping2)
                }), i.createElement("path", {
                    d: "M6 19h16a1 1 0 1 1 0 2H6z",
                    className: E()(Se.line, 1 === n && Se.starting, 2 === n && Se.spin3, 3 === n && Se.stopping3)
                }), i.createElement("path", {
                    d: "M6 9a1 1 0 1 1 0 -2zM6 15a1 1 0 1 1 0 -2zM6 21a1 1 0 1 1 0 -2z"
                })))
            }
            var xe = n(195306),
                Te = n(570731),
                Ne = n(799786),
                Pe = n(409648),
                Ae = n(587711),
                He = n(899229);

            function Le(e) {
                const {
                    balance: t
                } = e;
                return void 0 === t ? null : i.createElement("div", {
                    className: He["balance-toolbox"]
                }, i.createElement("span", {
                    className: He.balance
                }, (0, Pe.numberToLocalesString)(t, window.locale)), i.createElement(S.Icon, {
                    icon: Ae,
                    className: He.icon
                }))
            }
            var Ze = n(130605),
                Ie = n(407523),
                Ve = n(962725);

            function We(e) {
                const {
                    theme: t,
                    trackEventObject: o,
                    className: r
                } = e, [s, a] = i.useState(window.is_authenticated ? void 0 : null);
                i.useEffect((() => {
                    let e = !0;
                    return window.user.id && Ze.tvReferralDetails.getReferralDetails().catch((() => null)).then((t => {
                        e && a(null == t ? void 0 : t.coins)
                    })), () => {
                        e = !1
                    }
                }), []);
                const c = i.useCallback((() => {
                    e.onClick && e.onClick(), (0, j.isFeatureEnabled)("tvcoins_donations") ? (0, Ie.showTVCoinsDialog)({
                        tab: Ve.MainTab.GetCoins
                    }) : window.open("/share-your-love/", "_blank")
                }), [Ze.tvReferralDetails]);
                return i.createElement(m.PopupMenuItem, {
                    theme: t,
                    label: l.t(null, void 0, n(987597)),
                    toolbox: null !== s && i.createElement(Le, {
                        balance: s
                    }),
                    target: "_blank",
                    trackEventObject: o,
                    trackRightClick: !0,
                    trackMouseWheelClick: !0,
                    onClick: c,
                    className: r
                })
            }
            var Oe = n(331113),
                Re = n(398461);

            function De(e) {
                const {
                    joined: t
                } = e;
                return void 0 === t ? null : i.createElement("div", {
                    className: Re["joined-toolbox"]
                }, i.createElement("span", {
                    className: Re.joined
                }, t), i.createElement(S.Icon, {
                    icon: Oe,
                    className: Re.icon
                }))
            }

            function Be(e) {
                const {
                    theme: t,
                    className: o
                } = e, [r, s] = i.useState(window.is_authenticated ? void 0 : null), [a, c] = i.useState(!1);
                i.useEffect((() => {
                    let e = !0;
                    return window.user.id && Ze.tvReferralDetails.getReferralDetails().catch((() => null)).then((t => {
                        e && s(null == t ? void 0 : t.joined), c(Boolean(null == t ? void 0 : t.is_active_partner))
                    })), () => {
                        e = !1
                    }
                }), []);
                const h = i.useCallback((() => {
                    e.onClick && e.onClick(), (0, j.isFeatureEnabled)("tvcoins_donations") ? (0, Ie.showTVCoinsDialog)({
                        tab: a ? Ve.MainTab.PartnerProgram : Ve.MainTab.Refer,
                        isPartnerApproved: a
                    }) : window.open("/share-your-love/", "_blank")
                }), [Ze.tvReferralDetails, a]);
                return i.createElement(m.PopupMenuItem, {
                    theme: t,
                    label: a ? l.t(null, void 0, n(156929)) : l.t(null, void 0, n(311738)),
                    toolbox: a ? null : null !== r && i.createElement(De, {
                        joined: r
                    }),
                    trackRightClick: !0,
                    trackMouseWheelClick: !0,
                    onClick: h,
                    className: o
                })
            }
            var Ue = n(893271),
                Fe = n(271402),
                qe = n(985919);

            function je(e) {
                return e ? qe.OFFERS.trial in e ? l.t(null, void 0, n(581920)) : qe.OFFERS.early_access in e ? l.t(null, void 0, n(374274)) : qe.OFFERS.six_months in e ? l.t(null, void 0, n(782905)) : qe.OFFERS.longer_cycle in e ? l.t(null, void 0, n(542206)) : qe.OFFERS.one_usd in e ? l.t(null, void 0, n(305206)) : qe.OFFERS.three_months in e || qe.OFFERS.last_chance in e ? l.t(null, void 0, n(374274)) : l.t(null, void 0, n(941282)) : l.t(null, void 0, n(941282))
            }
            var ze = n(735218),
                Ge = n(72368),
                Je = n(210490),
                $e = n(582423),
                Ye = n(67302),
                Ke = n(960254),
                Xe = n(698170),
                Qe = n(606088),
                et = n(182412),
                tt = n(918273);
            var nt = n(152493),
                it = n(25999),
                ot = n(401040),
                rt = n(366748),
                st = n(236045),
                at = n(36901),
                lt = n(187073),
                ct = n(34988),
                ht = n(81271),
                ut = n(786532),
                dt = n(699949),
                pt = n(190943),
                vt = n(543266),
                mt = n(458195),
                gt = n(887717),
                wt = n(270068),
                ft = n(576640);
            const _t = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, G),
                bt = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, Y),
                Ct = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, J),
                kt = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, $),
                Mt = (0, D.mergeThemes)(m.DEFAULT_POPUP_MENU_ITEM_THEME, K),
                Et = "Platform menu",
                St = (yt = e => i.createElement(u.MenuItemSwitcher, {
                    icon: lt,
                    id: "theme-switcher",
                    switchReference: e.reference,
                    checked: e.isDarkTheme,
                    label: l.t(null, void 0, n(385783)),
                    preventLabelHighlight: !0,
                    value: "themeSwitcher",
                    onChange: () => {
                        (0, fe.getTracker)().then((e => {
                            e && e.trackBurgerMenuClick("darkcolortheme")
                        })), e.onClick()
                    },
                    theme: e.theme,
                    className: e.className
                }), (xt = class extends i.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._handleOutsideThemeChange = e => {
                            this.setState({
                                isDarkTheme: e === H.StdTheme.Dark
                            })
                        }, this._handleClick = () => {
                            const {
                                trackEventName: e = "Themes"
                            } = this.props, {
                                chartWidgetCollection: t
                            } = this.context, i = t.activeChartWidget.value();
                            i.withModel(i, (() => {
                                const t = i.model(),
                                    o = (0, P.getCurrentTheme)().name === H.StdTheme.Dark ? H.StdTheme.Light : H.StdTheme.Dark;
                                if ((0, H.isStdTheme)((0, P.extractThemeFromModel)(t))) this._applyTheme(o);
                                else {
                                    const e = l.t(null, void 0, n(577865)).format({
                                        name: (0, L.capitalizeFirstLetter)(o)
                                    });
                                    (0, C.showConfirm)({
                                        text: e,
                                        onConfirm: ({
                                            dialogClose: e
                                        }) => {
                                            this._applyTheme(o), e()
                                        },
                                        onCancel: ({
                                            dialogClose: e
                                        }) => {
                                            (0, A.setTheme)(o), (0, P.syncTheme)(), e()
                                        }
                                    })
                                }
                                this.setState({
                                    isDarkTheme: (0, P.getCurrentTheme)().name !== H.StdTheme.Dark
                                }), (0, p.trackEvent)("GUI", e, "Switch to " + o + " theme")
                            }))
                        }, (0, _.validateRegistry)(t, {
                            chartWidgetCollection: w.any.isRequired
                        }), this.state = {
                            isDarkTheme: (0, P.getCurrentTheme)().name === H.StdTheme.Dark
                        }
                    }
                    componentDidMount() {
                        A.watchedTheme.subscribe(this._handleOutsideThemeChange)
                    }
                    componentWillUnmount() {
                        A.watchedTheme.unsubscribe(this._handleOutsideThemeChange)
                    }
                    render() {
                        const {
                            className: e,
                            reference: t,
                            theme: n
                        } = this.props, {
                            isDarkTheme: o
                        } = this.state;
                        return i.createElement(yt, {
                            className: e,
                            reference: t,
                            isDarkTheme: o,
                            theme: n,
                            onClick: this._handleClick
                        })
                    }
                    async _applyTheme(e) {
                        const {
                            chartWidgetCollection: t
                        } = this.context;
                        await (0, P.loadTheme)(t, {
                            themeName: e,
                            standardTheme: !0
                        }), t.readOnly() || window.saver.saveChartSilently()
                    }
                }).contextType = Z, xt);
            var yt, xt;
            const Tt = (0, _.registryContextType)();
            class Nt extends i.PureComponent {
                constructor(e, t) {
                    super(e, t), this._alertsWidgetsDialog = new $e.AlertsWidgetDialog((() => this.context.chartWidgetCollection.activeChartWidget.value())), this._handleClickGopro = () => {
                        this._trackMenuItemClick("user_availableoffers"), window.open("/gopro/?source=chart&feature=burger_menu_profile_info", "_blank"), this._close()
                    }, this._handleClickHelpCenter = () => {
                        this._trackMenuItemClick("helpcenter"), (0, g.showSupportDialog)(), this._close()
                    }, this._handleClickWatchlist = () => {
                        this._trackMenuItemClick("watchlist"), (0, xe.showWatchlistDialog)(), this._close()
                    }, this._handleClickAlerts = () => {
                        this._trackMenuItemClick("alerts"), this._alertsWidgetsDialog.show(), this._close()
                    }, this._handleClickMySupportTickets = () => {
                        this._trackMenuItemClick("user_mysupporttickets"), (0, g.showSupportDialog)({
                            initialState: "tickets"
                        }), this._close()
                    }, this._handleClickTrading = () => {
                        this._trackMenuItemClick("connecttobroker"), (0, Te.showTradingPanelPopup)(), this._close()
                    }, this._close = () => {
                        this.setState({
                            isOpened: !1
                        })
                    }, this._handleClickButton = () => {
                        const {
                            isOpened: e
                        } = this.state;
                        e ? this.setState({
                            isOpened: !1
                        }) : this.setState({
                            isOpened: !0
                        })
                    }, this._getDropdownPosition = () => {
                        if (!this._button) return {
                            x: 0,
                            y: 0
                        };
                        const e = this._button.getBoundingClientRect();
                        return {
                            x: e.left + e.width + 1,
                            y: e.top
                        }
                    }, this._createTrackEventObject = e => ({
                        category: "GUI",
                        event: Et,
                        label: e
                    }), this._renderProfileMenuContent = (e, t) => {
                        const {
                            username: n,
                            userpic: o
                        } = this.props, r = this.props.badges && t ? this._badgesFilter(this.props.badges) : void 0;
                        return i.createElement("span", {
                            className: ft.profileMenu
                        }, i.createElement("img", {
                            className: M(ft.userPic, ft.profileItem, e && ft.smallWidth),
                            src: o
                        }), i.createElement("div", {
                            className: ft.userRow
                        }, i.createElement("span", {
                            className: M(ft.userName, e && ft.userNameMobile, "apply-overflow-tooltip")
                        }, n), r && r.map(((e, t) => i.createElement(Fe.BadgeUser, {
                            className: ft.badge,
                            key: t,
                            name: e.name
                        })))))
                    }, this._handleShortcutsClick = () => {
                        this._trackMenuItemClick("shortcuts"), (0, g.showSupportDialog)({
                            initialState: "shortcuts"
                        })
                    }, this._renderMenuLabel = (e, t) => i.createElement("span", {
                        className: M(t ? ft.shortMenuLabel : ft.menuLabel, "apply-overflow-tooltip")
                    }, e), this._handleOpenFromHint = () => {
                        this.setState({
                            isOpened: !0
                        })
                    }, this._onChartAboutToBeSaved = () => {
                        this.setState({
                            isProcessing: !0
                        })
                    }, this._onChartSaved = () => {
                        this.setState({
                            isProcessing: !1
                        })
                    }, this._handleShowLoadDialog = () => {
                        this.context.loadChartService.showLoadDialog()
                    }, this._badgesFilter = e => e.filter((e => !(0, y.isModerator)(e.name) && !(0, y.isPineWizard)(e.name) && !(0, y.isEmployee)(e.name))), this._handleSignInClick = () => {
                        this._trackMenuItemClick("signin"), this.props.onClickSignIn()
                    }, this._handleSignUpClick = () => {
                        this._trackMenuItemClick("joinnow"), this.props.onClickSignUp()
                    }, this._handleSignOutClick = () => {
                        this._trackMenuItemClick("signout"), this.props.onClickSignOut()
                    }, this._handleLanguageClick = e => {
                        this._trackMenuItemClick(`language_${e}`)
                    }, this._handleDrawingToolbarClick = () => {
                        this._trackMenuItemClick("drawingspanel")
                    }, this._handleHomeClick = () => {
                        this._trackMenuItemClick("home")
                    }, this._handleWhatsnewClick = () => {
                        this._trackMenuItemClick("whatsnew"), this.props.onClickWhatsNew()
                    }, this._handleProfileClick = () => {
                        this._trackMenuItemClick("user_profile")
                    }, this._handleProfileSettingsClick = () => {
                        this._trackMenuItemClick("user_profilesettings")
                    }, this._handleBillingClick = () => {
                        this._trackMenuItemClick("user_account&billing")
                    }, this._handleReferralDetailsClick = () => {
                        this._trackMenuItemClick("user_referredfriends")
                    }, this._handleCoinsClick = () => {
                        this._trackMenuItemClick("user_coins")
                    }, this._handleTVDSettingClick = () => {
                        window.TVD && window.TVD.openSettings && window.TVD.openSettings()
                    }, (0, _.validateRegistry)(t, {
                        loadChartService: w.any.isRequired,
                        chartWidgetCollection: w.any.isRequired
                    }), this.state = {
                        isOpened: !1,
                        isProcessing: !1
                    }
                }
                componentDidMount() {
                    const {
                        chartSaver: e
                    } = this.props;
                    e.chartSaved().subscribe(this, this._onChartSaved), e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved), Ee.subscribe("OPEN_BURGER_MENU", this._handleOpenFromHint, null), this._hotkeys = (0, Ne.createGroup)({
                        desc: "Save/Load"
                    }), this._hotkeys.add({
                        desc: l.t(null, void 0, n(975687)),
                        handler: this._handleShowLoadDialog,
                        hotkey: 190
                    })
                }
                componentWillUnmount() {
                    const {
                        chartSaver: e
                    } = this.props;
                    e.chartSaved().unsubscribe(this, this._onChartSaved), e.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved), Ee.unsubscribe("OPEN_BURGER_MENU", this._handleOpenFromHint, null), (0, r.ensureDefined)(this._hotkeys).destroy()
                }
                render() {
                    const {
                        globalNotifications: e,
                        supportNotifications: t,
                        alertNotifications: n
                    } = this.props, {
                        isOpened: o
                    } = this.state, r = e + t + n;
                    return i.createElement("div", {
                        className: ft.menu
                    }, i.createElement("div", {
                        ref: e => this._button = e,
                        className: ft.buttonWrap
                    }, i.createElement(c.ToolWidgetButton, {
                        isHovered: o,
                        className: ft.button,
                        icon: this._renderToolWidgetButtonIcon(),
                        title: this._getMainMenuTitle(),
                        onClick: this._handleClickButton
                    }), r > 0 && i.createElement("span", {
                        className: M(ft.menuNotifications, ft.notifications)
                    }, r)), i.createElement(Me.DrawerManager, null, i.createElement(B.MatchMedia, {
                        rule: "screen and (max-width: 430px)"
                    }, (e => e ? o && i.createElement(ke.Drawer, {
                        className: ft.mainMenuDrawer,
                        onClose: this._close,
                        position: "Left"
                    }, this._renderMenuItems(e)) : i.createElement(h.PopupMenu, {
                        className: ft.popupMenu,
                        doNotCloseOn: this,
                        minWidth: (0, b.isOnMobileAppPage)("new") ? 175 : void 0,
                        isOpened: o,
                        onClose: this._close,
                        position: this._getDropdownPosition
                    }, this._renderMenuItems(e))))))
                }
                _renderUserMenuItem(e, t) {
                    const {
                        showSupportTicketsItem: o,
                        username: r,
                        isBroker: s,
                        isAuthenticated: a,
                        availableOffers: c
                    } = this.props, h = {
                        username: r,
                        is_broker: s
                    }, u = e ? bt : _t, d = e ? kt : Ct, p = e ? Mt : void 0;
                    return !(0, b.isOnMobileAppPage)("new") && a ? i.createElement(i.Fragment, null, i.createElement(O.Submenu, {
                        menuClassName: ft.popupSubMenu,
                        menuItemTheme: u,
                        drawerClassName: ft.drawer,
                        label: this._renderProfileMenuContent(e, t),
                        labelClassName: ft.labelSubmenu
                    }, i.createElement(m.PopupMenuItem, {
                        className: M(ft.subMenuItem, ft.subMenuItemHighlighted),
                        theme: p,
                        label: je(c),
                        onClick: this._handleClickGopro,
                        trackEventObject: this._createTrackEventObject("Available Offers"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    }), i.createElement(m.PopupMenuItem, {
                        className: ft.subMenuItem,
                        theme: p,
                        label: l.t(null, void 0, n(497194)),
                        link: (0, x.getUserProfilePath)(h),
                        onClick: this._handleProfileClick,
                        trackEventObject: this._createTrackEventObject("Profile"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    }), i.createElement(m.PopupMenuItem, {
                        className: ft.subMenuItem,
                        theme: p,
                        label: this._renderMenuLabel(l.t(null, void 0, n(407528))),
                        link: (0, x.getUserProfilePath)(h, {
                            page: x.ProfilePages.Settings
                        }),
                        onClick: this._handleProfileSettingsClick,
                        trackEventObject: this._createTrackEventObject("Profile settings"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    }), !s && i.createElement(m.PopupMenuItem, {
                        className: ft.subMenuItem,
                        theme: p,
                        label: l.t(null, void 0, n(669500)),
                        link: (0, x.getUserProfilePath)(h, {
                            page: x.ProfilePages.Billing
                        }),
                        onClick: this._handleBillingClick,
                        trackEventObject: this._createTrackEventObject("Account & Billing"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    }), i.createElement(Be, {
                        theme: p,
                        className: ft.subMenuItem,
                        onClick: this._handleReferralDetailsClick
                    }), i.createElement(We, {
                        theme: p,
                        trackEventObject: this._createTrackEventObject("TradingView Coins"),
                        className: ft.subMenuItem,
                        onClick: this._handleCoinsClick
                    })), o && i.createElement(m.PopupMenuItem, {
                        theme: d,
                        label: this._renderMenuLabel(l.t(null, void 0, n(40810))),
                        onClick: this._handleClickMySupportTickets,
                        trackEventObject: this._createTrackEventObject("My support tickets"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    })) : null
                }
                _renderTradingMenuItem(e) {
                    var t, o;
                    const r = e ? kt : Ct,
                        s = null === (o = null === (t = (0, Ue.tradingService)()) || void 0 === t ? void 0 : t.activeBroker()) || void 0 === o ? void 0 : o.metainfo().title;
                    return i.createElement(m.PopupMenuItem, {
                        theme: r,
                        label: this._renderMenuLabel(null != s ? s : l.t(null, void 0, n(708169))),
                        onClick: this._handleClickTrading,
                        icon: gt,
                        trackEventObject: this._createTrackEventObject(null != s ? s : "Connect to broker")
                    })
                }
                _renderToolWidgetButtonIcon() {
                    const {
                        isAuthenticated: e,
                        userpic: t
                    } = this.props, {
                        isProcessing: n
                    } = this.state;
                    return e ? i.createElement("img", {
                        className: ft.userPic,
                        src: t
                    }) : i.createElement(ye, {
                        spin: n
                    })
                }
                _renderMenuItems(e) {
                    var t;
                    const {
                        isAuthenticated: o,
                        globalNotifications: r,
                        alertNotifications: s,
                        supportNotifications: c,
                        chartSaver: h
                    } = this.props, u = e ? kt : Ct, d = e ? W.menuItemSwitcherMobileTheme : void 0, p = e ? Mt : void 0, g = (0, b.isOnMobileAppPage)("new"), w = this._canShowMobileWatchlist(), f = !this.props.isWidgetbarVisible, _ = (0, Je.isMobileTradingAvailable)(), C = a.CheckMobile.any() || g, k = function(e) {
                        switch (e) {
                            case Ke.ProPlans.ProPremium:
                            case Ke.ProPlans.ProPremiumTrial:
                                return Qe;
                            case Ke.ProPlans.ProRealtime:
                            case Ke.ProPlans.ProRealtimeTrial:
                                return et;
                            case Ke.ProPlans.Pro:
                            case Ke.ProPlans.ProTrial:
                                return tt;
                            default:
                                return Xe
                        }
                    }(null === (t = window.user) || void 0 === t ? void 0 : t.pro_plan);
                    return i.createElement(i.Fragment, null, C ? i.createElement(Ce, {
                        id: "topleft-button-save-load",
                        chartSaver: h,
                        isAuthenticated: Boolean(o)
                    }) : i.createElement(i.Fragment, null, i.createElement(S.Icon, {
                        className: ft.proPlanIcon,
                        icon: k
                    }), i.createElement(N.PopupMenuSeparator, null)), w && i.createElement(m.PopupMenuItem, {
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(213402))),
                        icon: nt,
                        onClick: this._handleClickWatchlist
                    }), f && i.createElement(m.PopupMenuItem, {
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(363764))),
                        toolbox: s > 0 ? i.createElement("span", {
                            className: ft.notifications
                        }, s) : void 0,
                        icon: wt,
                        onClick: this._handleClickAlerts
                    }), _ && this._renderTradingMenuItem(e), (w || _) && i.createElement(N.PopupMenuSeparator, null), this._renderUserMenuItem(e, C), !g && i.createElement(m.PopupMenuItem, {
                        icon: rt,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(205151))),
                        link: "/",
                        onClick: this._handleHomeClick,
                        trackEventObject: this._createTrackEventObject("Home"),
                        trackRightClick: !0,
                        trackMouseWheelClick: !0
                    }), i.createElement(m.PopupMenuItem, {
                        theme: u,
                        icon: ht,
                        label: this._renderMenuLabel(l.t(null, void 0, n(788911)), c > 0),
                        toolbox: c > 0 ? i.createElement("span", {
                            className: ft.notifications
                        }, c) : void 0,
                        onClick: this._handleClickHelpCenter,
                        trackEventObject: this._createTrackEventObject("Contact support")
                    }), !g && i.createElement(m.PopupMenuItem, {
                        icon: at,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(731940)), r > 0),
                        toolbox: r > 0 ? i.createElement("span", {
                            className: ft.notifications
                        }, r) : void 0,
                        onClick: this._handleWhatsnewClick,
                        trackEventObject: this._createTrackEventObject("What's new")
                    }), i.createElement(N.PopupMenuSeparator, null), !g && (0, Ye.showThemeSwitcher)() && i.createElement(St, {
                        className: e ? ft.switcherSmall : ft.switcher,
                        theme: d,
                        trackEventName: Et
                    }), !g && (0, Ye.showThemeAction)() && i.createElement(m.PopupMenuItem, {
                        className: ft.subMenuItem,
                        icon: mt,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(739400))),
                        onClick: this._handleTVDSettingClick
                    }), i.createElement(v, {
                        className: e ? ft.switcherSmall : ft.switcher,
                        icon: ct,
                        theme: d,
                        onClick: this._handleDrawingToolbarClick
                    }), !g && i.createElement(O.Submenu, {
                        menuItemTheme: u,
                        drawerClassName: ft.drawer,
                        menuClassName: ft.popupSubMenu,
                        label: l.t(null, void 0, n(524258)),
                        icon: ot,
                        toolboxLabel: (0, T.getLocale)().language_name
                    }, i.createElement(ze.LanguageSelector, {
                        className: ft.subMenuItem,
                        theme: p,
                        onClick: this._handleLanguageClick
                    })), !g && i.createElement(i.Fragment, null, !a.CheckMobile.any() && i.createElement(m.PopupMenuItem, {
                        icon: st,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(909299))),
                        onClick: this._handleShortcutsClick,
                        trackEventObject: this._createTrackEventObject("Keyboard shortcuts")
                    }), Boolean(!a.CheckMobile.any() && !(0, a.isDesktopApp)()) && i.createElement(m.PopupMenuItem, {
                        icon: it,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(855630))),
                        link: "/desktop/",
                        target: "_blank",
                        onClick: this._trackEventGetDesktopApp,
                        toolbox: i.createElement(S.Icon, {
                            className: ft.desktopIcon,
                            icon: pt
                        })
                    }), i.createElement(N.PopupMenuSeparator, null), o ? i.createElement(m.PopupMenuItem, {
                        theme: u,
                        icon: dt,
                        label: this._renderMenuLabel(l.t(null, void 0, n(980394))),
                        onClick: this._handleSignOutClick,
                        className: ft.signOut,
                        trackEventObject: this._createTrackEventObject("Sign Out")
                    }) : i.createElement(i.Fragment, null, i.createElement(m.PopupMenuItem, {
                        icon: ut,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(184568))),
                        onClick: this._handleSignInClick,
                        className: ft.joinItem,
                        trackEventObject: this._createTrackEventObject("Sign In")
                    }), !(0, a.isDesktopApp)() && i.createElement(m.PopupMenuItem, {
                        icon: vt,
                        theme: u,
                        label: this._renderMenuLabel(l.t(null, void 0, n(152675))),
                        onClick: this._handleSignUpClick,
                        className: ft.joinItem,
                        trackEventObject: this._createTrackEventObject("Join Now")
                    }))))
                }
                _canShowMobileWatchlist() {
                    return (0, Ge.canShowNewSymbolSearch)() && !this.props.isWidgetbarVisible
                }
                _getMainMenuTitle() {
                    const {
                        isAuthenticated: e,
                        username: t
                    } = this.props, {
                        chartWidgetCollection: i
                    } = this.context;
                    if (e) {
                        const e = `${l.t(null,void 0,n(841796))} ${t}`,
                            o = i.metaInfo.name.value();
                        return o ? `${e}\n${l.t(null,void 0,n(240771))}: ${o}` : e
                    }
                }
                async _trackEventGetDesktopApp() {
                    const e = await (0, fe.getTracker)();
                    e && (e.trackAppLinkClick("tradingview", "chart", "get_desktop_app_chart_menu", "desktop"), e.trackBurgerMenuClick("getdesktopapp"))
                }
                async _trackMenuItemClick(e) {
                    const t = await (0, fe.getTracker)();
                    t && t.trackBurgerMenuClick(e)
                }
            }
            Nt.contextType = Tt;
            var Pt = n(926523),
                At = n(150971),
                Ht = n(930527);
            const Lt = {
                title: l.t(null, void 0, n(624211)),
                unsavedChangesWarning: l.t(null, void 0, n(30371)),
                signOut: l.t(null, void 0, n(838074)),
                cancel: l.t(null, void 0, n(620036))
            };
            class Zt extends i.PureComponent {
                constructor(e) {
                    super(e), this._globalNotificationTools = null, this._supportNotificationTools = null, this._alertEventUnreadNotificationsCounter = null, this._syncAlertEventUnreadNotificationsCounter = () => {
                        this.props.isWidgetbarSettled && !this.props.isWidgetbarVisible ? this._showAlertNotifications() : this._hideAlertNotifications()
                    }, this._showAlertNotifications = () => {
                        if (!this._alertEventUnreadNotificationsCounter) {
                            this._alertEventUnreadNotificationsCounter = (0, Ht.getUnreadFiresCounter)();
                            const e = this._alertEventUnreadNotificationsCounter.value();
                            this._handleAlertNotificationCountChange(e),
                                this._alertEventUnreadNotificationsCounter.subscribe(this._handleAlertNotificationCountChange)
                        }
                    }, this._hideAlertNotifications = () => {
                        this._alertEventUnreadNotificationsCounter && (this._handleAlertNotificationCountChange(0), this._alertEventUnreadNotificationsCounter.unsubscribe(this._handleAlertNotificationCountChange), this._alertEventUnreadNotificationsCounter = null)
                    }, this._handleClickWhatsNew = () => {
                        this._globalNotificationTools && (0, g.showSupportDialog)({
                            initialState: "whats-new",
                            destroyOnClose: !0
                        })
                    }, this._handleDrawingToolbarVisibilityChanged = () => {
                        this.setState({
                            isDrawingToolbarVisible: d.isDrawingToolbarVisible.value()
                        })
                    }, this._handleClickSignOut = () => {
                        const {
                            chartChangesWatcher: e
                        } = this.props, t = e.hasChanges(), n = (0, Ue.tradingService)(), i = n && n.activeBroker(), o = i && i.disconnectWarningMessage();
                        let r = "";
                        t && (r += Lt.unsavedChangesWarning), o && (t && (r += "\n\n"), r += o), r.length > 0 ? (0, C.showConfirm)({
                            title: Lt.title,
                            text: r,
                            mainButtonText: Lt.signOut,
                            mainButtonIntent: "danger",
                            cancelButtonText: Lt.cancel,
                            onConfirm: ({
                                dialogClose: e
                            }) => {
                                window.TradingView.signOut(), e()
                            }
                        }) : window.TradingView.signOut()
                    }, this._handleClickSignIn = () => {
                        (0, k.showSignModal)({
                            source: "Chart main menu",
                            sourceMeta: "Chart"
                        })
                    }, this._handleClickSignUp = () => {
                        (0, k.showSignModal)({
                            mode: "signup",
                            source: "Chart main menu",
                            sourceMeta: "Chart"
                        })
                    }, this._handleSupportNotificationCountChange = e => {
                        this.setState({
                            supportNotifications: e
                        })
                    }, this._handleGlobalNotificationCountChange = e => {
                        this.setState({
                            globalNotifications: e
                        })
                    }, this._handleAlertNotificationCountChange = e => {
                        this.setState({
                            alertNotifications: e
                        })
                    }, this._handleLoginStateChange = () => {
                        this.setState(this._composeState())
                    }, (0, b.isOnMobileAppPage)("new") || (this._supportNotificationTools = At.SupportNotificationTools.getInstance(), this._globalNotificationTools = new Pt.GlobalNotificationTools, this._globalNotificationTools.subscribeNotificationsDialogToPushStream()), this.state = this._composeState()
                }
                componentDidMount() {
                    window.loginStateChange.subscribe(this, this._handleLoginStateChange), this._globalNotificationTools && this._globalNotificationTools.getUnreadNotificationsCount().subscribe(this._handleGlobalNotificationCountChange), this._supportNotificationTools && this._supportNotificationTools.countChanged().subscribe(null, this._handleSupportNotificationCountChange), this._syncAlertEventUnreadNotificationsCounter(), d.isDrawingToolbarVisible.subscribe(this._handleDrawingToolbarVisibilityChanged)
                }
                componentDidUpdate() {
                    this._syncAlertEventUnreadNotificationsCounter()
                }
                componentWillUnmount() {
                    window.loginStateChange.unsubscribe(this, this._handleLoginStateChange), this._globalNotificationTools && this._globalNotificationTools.getUnreadNotificationsCount().unsubscribe(this._handleGlobalNotificationCountChange), this._supportNotificationTools && this._supportNotificationTools.destroy(), d.isDrawingToolbarVisible.unsubscribe(this._handleDrawingToolbarVisibilityChanged)
                }
                render() {
                    const {
                        isAuthenticated: e,
                        globalNotifications: t,
                        alertNotifications: n,
                        supportNotifications: o,
                        username: r,
                        isBroker: s,
                        userpic: a,
                        badges: l,
                        availableOffers: c
                    } = this.state;
                    return i.createElement(Nt, {
                        isAuthenticated: e,
                        globalNotifications: t,
                        alertNotifications: n,
                        supportNotifications: o,
                        isDrawingToolbarVisible: this.state.isDrawingToolbarVisible,
                        onClickSignIn: this._handleClickSignIn,
                        onClickSignOut: this._handleClickSignOut,
                        onClickSignUp: this._handleClickSignUp,
                        onClickSwitchDrawingToolbar: this._handleSwitchDrawingToolbar,
                        onClickWhatsNew: this._handleClickWhatsNew,
                        username: r,
                        availableOffers: c,
                        badges: l,
                        isBroker: s,
                        userpic: a,
                        chartSaver: this.props.chartSaver,
                        showSupportTicketsItem: this.props.isSupportAvailable && this.state.showSupportTicketsItem,
                        isWidgetbarVisible: this.props.isWidgetbarVisible
                    })
                }
                _handleSwitchDrawingToolbar() {
                    d.isDrawingToolbarVisible.setValue(!d.isDrawingToolbarVisible.value())
                }
                _composeState() {
                    return {
                        isAuthenticated: window.is_authenticated,
                        isDrawingToolbarVisible: d.isDrawingToolbarVisible.value(),
                        globalNotifications: this._globalNotificationTools ? this._globalNotificationTools.getUnreadNotificationsCount().value() : 0,
                        alertNotifications: this._alertEventUnreadNotificationsCounter ? this._alertEventUnreadNotificationsCounter.value() : 0,
                        supportNotifications: this._supportNotificationTools ? this._supportNotificationTools.getCount() : 0,
                        username: window.user.username,
                        badges: window.user.badges,
                        availableOffers: window.user.available_offers,
                        isBroker: window.user.is_broker,
                        userpic: window.devicePixelRatio > 1 ? window.user.userpic_mid : window.user.userpic,
                        showSupportTicketsItem: !1
                    }
                }
            }
            var It = n(521978);
            const Vt = (0, a.onWidget)();
            class Wt extends i.PureComponent {
                constructor(e) {
                    var t;
                    super(e), this._handleWidgetbarVisible = e => {
                        this.setState({
                            isWidgetbarVisible: e
                        })
                    };
                    const {
                        chartChangesWatcher: n,
                        chartWidgetCollection: i,
                        saveChartService: o,
                        loadChartService: r,
                        sharingChartService: s,
                        isWidgetbarSettled: a,
                        isWidgetbarVisible: l
                    } = this.props;
                    this.state = {
                        isWidgetbarSettled: Boolean(void 0 !== a ? a : window.widgetbar),
                        isWidgetbarVisible: Boolean(void 0 !== l ? l : null === (t = window.widgetbar) || void 0 === t ? void 0 : t.visible().value())
                    }, this._registry = {
                        chartWidgetCollection: i,
                        chartChangesWatcher: n,
                        saveChartService: o,
                        loadChartService: r,
                        sharingChartService: s
                    }
                }
                componentDidMount() {
                    var e;
                    null === (e = this.props.widgetbarSettled) || void 0 === e || e.subscribe(this, (() => {
                        (0, r.ensureDefined)(window.widgetbar).visible().subscribe(this._handleWidgetbarVisible, {
                            callWithLast: !0
                        }), this.setState({
                            isWidgetbarSettled: !0
                        })
                    }), !0)
                }
                componentWillUnmount() {
                    var e;
                    null === (e = window.widgetbar) || void 0 === e || e.visible().unsubscribe(this._handleWidgetbarVisible)
                }
                render() {
                    const {
                        chartChangesWatcher: e,
                        chartSaver: t,
                        isSupportAvailable: n
                    } = this.props;
                    return Vt ? null : i.createElement(_.RegistryProvider, {
                        validation: f,
                        value: this._registry
                    }, i.createElement(s.CustomBehaviourContext.Provider, {
                        value: s.presetPlatform
                    }, i.createElement("div", {
                        className: It.topLeftButton
                    }, e && i.createElement(Zt, {
                        chartChangesWatcher: e,
                        chartSaver: t,
                        isSupportAvailable: n,
                        isWidgetbarSettled: this.state.isWidgetbarSettled,
                        isWidgetbarVisible: this.state.isWidgetbarVisible
                    }))))
                }
            }
            class Ot {
                constructor(e, t) {
                    this._component = null, this._handleRef = e => {
                        this._component = e
                    }, this._container = e, o.render(i.createElement(Wt, { ...t,
                        ref: this._handleRef
                    }), this._container)
                }
                destroy() {
                    o.unmountComponentAtNode(this._container)
                }
                getComponent() {
                    return (0, r.ensureNotNull)(this._component)
                }
            }
        },
        965426: (e, t, n) => {
            "use strict";
            var i = n(823127),
                o = n(778785).mobiletouch;
            ! function(e, t, n) {
                function i(i, o) {
                    o = o || i + n;
                    var r = e(),
                        s = i + "." + o + "-special-event";

                    function a(t) {
                        e(r).each((function() {
                            var n = e(this);
                            this === t.target || n.has(t.target).length || n.triggerHandler(o, [t.target])
                        }))
                    }
                    e.event.special[o] = {
                        setup: function() {
                            delete(r = r.add(this)).prevObject, 1 === r.length && e(t).bind(s, a)
                        },
                        teardown: function() {
                            delete(r = r.not(this)).prevObject, 0 === r.length && e(t).unbind(s)
                        },
                        add: function(e) {
                            var t = e.handler;
                            e.handler = function(e, n) {
                                e.target = n, t.apply(this, arguments)
                            }
                        }
                    }
                }
                e.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), (function(e) {
                    i(e)
                })), i("focusin", "focusoutside"), i("focusout", "bluroutside"), o && (i("touchstart", "mousedownoutside"), i("touchmove", "mousemoveoutside"), i("touchend", "mouseupoutside")), e.addOutsideEvent = i
            }(i, document, "outside")
        },
        907429: (e, t, n) => {
            "use strict";
            n.d(t, {
                icons: () => N
            });
            var i = n(841785),
                o = n(652100),
                r = n(232217),
                s = n(989959),
                a = n(112466),
                l = n(938926),
                c = n(259806),
                h = n(272279),
                u = n(135106),
                d = n(758180),
                p = n(710757),
                v = n(910997),
                m = n(687037),
                g = n(330273),
                w = n(49011),
                f = n(570309),
                _ = n(502992),
                b = n(244570),
                C = n(750633),
                k = n(663962),
                M = n(236421),
                E = n(978222),
                S = n(280088),
                y = n(44836),
                x = n(114950),
                T = n(605018);
            const N = {
                s: i,
                "1-2": o,
                "1-3": r,
                "1-4": s,
                "2-1": a,
                "2-2": l,
                "2-3": c,
                "2h": h,
                "2v": u,
                "3h": d,
                "3r": p,
                "3s": v,
                "3v": m,
                4: g,
                "4h": w,
                "4s": k,
                "4v": M,
                "5s": E,
                "5h": f,
                "6h": _,
                "7h": b,
                "8h": C,
                6: S,
                "6c": y,
                8: x,
                "8c": T
            }
        },
        570731: (e, t, n) => {
            "use strict";
            n.d(t, {
                showTradingPanelPopup: () => o
            });
            var i = n(893271);
            async function o() {
                (await (0, i.waitTradingService)()).tradingPanelPopup.show()
            }
        },
        930527: (e, t, n) => {
            "use strict";
            n.d(t, {
                getUnreadFiresCounter: () => a
            });
            var i = n(895171),
                o = (n(659863), n(988411)),
                r = n.n(o);
            class s {
                constructor() {
                    this._counter = new(r())(0), this._syncCounter = () => {
                        if (!this._unreadBuffer) return void this._counter.setValue(0);
                        let e = 0;
                        const t = this._unreadBuffer.value();
                        for (const n of Object.values(t)) e += n.firesCount;
                        this._counter.setValue(e)
                    }
                }
                bindUnreadFiresBuffer(e) {
                    this._unreadBuffer = e, this._unreadBuffer.on("add", this._syncCounter), this._unreadBuffer.on("remove", this._syncCounter), this._syncCounter()
                }
                unbindUnreadFiresBuffer() {
                    this._unreadBuffer && (this._unreadBuffer.off("add", this._syncCounter), this._unreadBuffer.off("remove", this._syncCounter), this._unreadBuffer = null, this._syncCounter())
                }
                value() {
                    return this._counter.value()
                }
                destroy() {
                    var e, t, n, i;
                    null === (t = (e = this._counter).assertNoSubscriptions) || void 0 === t || t.call(e), this._counter.unsubscribe(), null === (n = this._unreadBuffer) || void 0 === n || n.off("add", this._syncCounter), null === (i = this._unreadBuffer) || void 0 === i || i.off("remove", this._syncCounter)
                }
                subscribe(e) {
                    this._counter.subscribe(e)
                }
                unsubscribe(e) {
                    this._counter.unsubscribe(e)
                }
            }
            const a = (0, i.default)((() => new s))
        },
        142544: (e, t, n) => {
            "use strict";
            var i = n(823127);
            const o = n(272001).getLogger("CommonUI.CreateTVBlockPlugin");
            e.exports.createTvBlockWithInstance = function(e, t) {
                if (e && t) return e = e.toString(),
                    function(r, s, a) {
                        var l, c, h;
                        return "get" === r ? l = s : (c = s, "object" == typeof r && void 0 === s ? (c = r, r = "init") : "string" != typeof r && (r = "init")), "getInstance" === r ? i(this).eq(0).data(e) : "destroy" === r ? (h = i(this).eq(0).data(e)) ? void("function" == typeof h.destroy ? (n(h, "destroy", c), i(this).eq(0).removeData(e)) : o.logError("[Block Plugin] " + e + " does not support destroy command")) : void console.warn("[Block Plugin] Trying to execute destroy method of " + e + " but it has not been inited") : "get" === r ? (h = i(this).eq(0).data(e)) ? "function" == typeof h[l] ? n(h, l, a) : h[l] : void console.warn("[Block Plugin] Trying to get prop or execute method of " + e + " but it has not been inited") : i(this).each((function() {
                            var s = i(this),
                                a = s.data(e);
                            void 0 === a && (a = void 0 === c ? t(s) : t(s, c), s.data(e, a)), "init" !== r && ("function" == typeof a[r] ? n(a, r, c) : o.logError("[Block Plugin] " + e + " does not support command " + r))
                        }))
                    };

                function n(e, t, n) {
                    return void 0 === n ? e[t]() : e[t](n)
                }
            }
        },
        130605: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                tvReferralDetails: () => r
            });
            var i = n(665203);
            class o {
                constructor() {
                    this.details = void 0, this._pendingPromise = null
                }
                async getReferralDetails() {
                    return window.is_authenticated ? this.details ? Promise.resolve(this.details) : this.update() : Promise.reject("user is not authenticated")
                }
                async update() {
                    return window.is_authenticated ? (null !== this._pendingPromise || (this._pendingPromise = (0, i.getReferralDetails)().then((e => (this._pendingPromise = null, this.details = e, e))), this._pendingPromise.catch((() => {
                        this._pendingPromise = null
                    }))), this._pendingPromise) : (this.details = void 0, Promise.reject("user is not authenticated"))
                }
                static getInstance() {
                    return o._instance || (o._instance = new o), o._instance
                }
            }
            const r = o.getInstance()
        },
        685392: (e, t, n) => {
            "use strict";
            n.d(t, {
                debounceHideTooltip: () => a,
                showTooltip: () => h
            });
            var i = n(12481),
                o = n(309103),
                r = n(183358),
                s = n(777754);
            const a = (0, i.default)(l, 1500);

            function l() {
                document.removeEventListener("scroll", l), document.removeEventListener("touchstart", l), document.removeEventListener("mouseout", l), (0, o.hide)()
            }
            const c = 400;

            function h(e, t = {}) {
                const {
                    initialDelay: i = c,
                    leaveOnMouseOut: a,
                    text: h = s.t(null, void 0, n(679732))
                } = t;
                (0, o.showOnElement)(e, {
                    below: !0,
                    tooltipDelay: i,
                    content: {
                        type: "html",
                        data: `${h} <span style="vertical-align: middle;">${r}</span>`
                    }
                }), document.addEventListener("scroll", l), document.addEventListener("touchstart", l), a || document.addEventListener("mouseout", l)
            }
        },
        889500: (e, t, n) => {
            "use strict";
            n.d(t, {
                openNewChart: () => p
            });
            var i = n(890740),
                o = n(656130),
                r = n(552279),
                s = n(229534),
                a = n(503595),
                l = n(314802),
                c = n(777754);
            const h = c.t(null, void 0, n(873088)),
                u = c.t(null, void 0, n(589117)),
                d = c.t(null, void 0, n(552988));

            function p(e = {}) {
                window.is_authenticated ? (0, a.asyncWindowOpen)(async function(e) {
                    let t, n;
                    try {
                        n = await (0, i.fetch)("/charts/", {
                            method: "POST",
                            body: JSON.stringify(e),
                            credentials: "include"
                        });
                        const o = n.headers.get("location");
                        if (n.ok && o) return (0, l.urlWithMobileAppParams)(o);
                        t = (await n.json()).code
                    } catch (e) {}
                    "count_limit" === t || "login_required" === t ? (0, r.reloginOrGoPro)({
                        feature: "savedChartsLimit"
                    }) : n || !1 !== navigator.onLine ? n && n.status >= 500 || "feature_disabled" === t ? (0, s.showErrorDialog)({
                        content: u
                    }) : (0, s.showErrorDialog)({
                        content: h
                    }) : (0, s.showErrorDialog)({
                        content: d
                    });
                    return
                }(e)) : window.open((0, o.generateChartUrl)(e), "_blank")
            }
        },
        506816: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M5 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H6z"/></svg>'
        },
        270068: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6a3.5 3.5 0 00-2.926 5.422 8.527 8.527 0 014.848-4.848A3.482 3.482 0 008.5 6zM4 9.5c0 1.191.463 2.274 1.218 3.079a8.5 8.5 0 1016.564 0 4.5 4.5 0 00-6.36-6.36 8.525 8.525 0 00-3.843-.001A4.5 4.5 0 004 9.5zm12.578-2.926a8.527 8.527 0 014.848 4.848 3.5 3.5 0 00-4.848-4.848zM6 14.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm8 .5V9h-1v5h-3v1h4z"/></svg>'
        },
        887717: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.8441 8.61921C13.232 8.13425 13.9481 8.07567 14.4097 8.49112L18.1651 11.871L18.4996 12.172L18.8341 11.871L22.5896 8.49121C23.0512 8.07582 23.7672 8.13438 24.1551 8.61927C24.5188 9.07382 24.4567 9.73484 24.0147 10.1137L18.4996 14.8409L12.9845 10.1137C12.5425 9.73482 12.4804 9.07379 12.8441 8.61921ZM15.0787 7.74783C14.1896 6.94765 12.8104 7.06048 12.0632 7.99452C11.3628 8.87007 11.4824 10.1432 12.3338 10.8729L18.1742 15.879L18.4996 16.158L18.825 15.879L24.6655 10.8729C25.5168 10.1432 25.6364 8.87006 24.936 7.99454C24.1888 7.06061 22.8097 6.94781 21.9207 7.7479L18.4996 10.8267L15.0787 7.74783ZM15.1551 18.8798C14.7672 19.3647 14.0511 19.4233 13.5895 19.0078L9.83409 15.628L9.49962 15.3269L9.16514 15.6279L5.4096 19.0077C4.94802 19.4231 4.23205 19.3646 3.84411 18.8797C3.48044 18.4251 3.54256 17.7641 3.98455 17.3853L9.49961 12.6581L15.0147 17.3853C15.4567 17.7641 15.5188 18.4252 15.1551 18.8798ZM12.9205 19.7511C13.8096 20.5513 15.1888 20.4385 15.936 19.5044C16.6364 18.6289 16.5168 17.3557 15.6655 16.626L9.82501 11.6199L9.49961 11.341L9.17421 11.6199L3.33376 16.626C2.48244 17.3557 2.3628 18.6289 3.06327 19.5044C3.81047 20.4383 5.1895 20.5512 6.07854 19.7511L9.4996 16.6723L12.9205 19.7511Z"/></svg>'
        },
        379978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
        },
        652100: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        232217: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        989959: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H4V9H1Zm4 7h4V9H5v7Zm5 0h4V9h-4v7Zm5 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-3v7ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        112466: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V9H1Zm17-1V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        938926: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v3h17V9H1Zm17-1V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8Zm0 5H1v1.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        259806: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7Zm5-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        272279: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        135106: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V8H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V9H1Zm1.5-9A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        758180: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H6v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM7 16h5V1H7v15Zm6-15v15h3.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        710757: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H10v15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        910997: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        687037: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V5H1V2.5ZM1 6v5h17V6H1Zm17 6H1v2.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V12ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        330273: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H9V9H1Zm9 7h6.5c.83 0 1.5-.67 1.5-1.5V9h-8v7Zm8-8V2.5c0-.83-.67-1.5-1.5-1.5H10v7h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        49011: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H4v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM5 16h4V1H5v15Zm5-15v15h4V1h-4Zm5 0v15h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        663962: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V12h-8v4Zm8-5V6h-8v5h8Zm0-6V2.5c0-.83-.67-1.5-1.5-1.5H10v4h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        236421: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1h14c.83 0 1.5.67 1.5 1.5V4H1V2.5ZM1 5v3h17V5H1Zm17 4H1v3h17V9Zm0 4H1v1.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V13ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        570309: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5H4V1H2.5ZM9 16H5V1h4v3h1V1h4v15h-4v-3H9v3Zm6 0h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15v15ZM2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17Zm9.18-7.49c0 1.16-.88 1.96-2.12 1.96-1.17 0-1.97-.7-2.04-1.63v-.05h.94v.02c.08.48.51.84 1.1.84.68 0 1.14-.46 1.14-1.12v-.01c0-.64-.47-1.1-1.13-1.1-.32 0-.6.1-.81.27-.1.09-.2.2-.27.32h-.88l.27-3.28h3.46v.83H8.7l-.16 1.7h.02c.25-.38.71-.6 1.28-.6 1.07 0 1.85.77 1.85 1.84v.01Z"/></svg>'
        },
        978222: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v15H2.5A1.5 1.5 0 0 1 1 14.5v-12ZM10 16h6.5c.83 0 1.5-.67 1.5-1.5V13h-8v3Zm8-4V9h-8v3h8Zm0-4V5h-8v3h8Zm0-4V2.5c0-.83-.67-1.5-1.5-1.5H10v3h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        280088: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H6v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H6V9H1Zm6 7h5V9H7v7Zm6 0h3.5c.83 0 1.5-.67 1.5-1.5V9h-5v7Zm5-8V2.5c0-.83-.67-1.5-1.5-1.5H13v7h5Zm-6-7H7v7h5V1ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        44836: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v4H1V2.5ZM1 6v5h8V6H1Zm0 6v2.5c0 .83.67 1.5 1.5 1.5H9v-4H1Zm9 4h6.5c.83 0 1.5-.67 1.5-1.5V12h-8v4Zm8-5V6h-8v5h8Zm0-6V2.5c0-.83-.67-1.5-1.5-1.5H10v4h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        502992: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5H4V1H2.5ZM9 16H5V1h4v3h1V1h4v15h-4v-3H9v3Zm6 0h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15v15ZM2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17Zm9.16-7.48c0 1.13-.9 1.95-2.1 1.95-1.26 0-2.29-.87-2.29-2.85 0-1.87.87-2.98 2.3-2.98 1.05 0 1.82.6 2 1.45l.01.04h-1l-.01-.03c-.15-.39-.5-.64-1-.64-.91 0-1.29.87-1.33 1.94v.17h.02c.22-.51.78-.9 1.55-.9 1.08 0 1.85.78 1.85 1.84Zm-3.25 0v.01c0 .63.5 1.12 1.13 1.12a1.1 1.1 0 0 0 1.12-1.1c0-.65-.47-1.1-1.11-1.1-.65 0-1.14.45-1.14 1.08Z"/></svg>'
        },
        244570: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5H4V1H2.5ZM9 16H5V1h4v3h1V1h4v15h-4v-3H9v3Zm6 0h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15v15ZM2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17Zm6.75-5.63H8.2l2.47-4.8v-.01H7.74v-.83h3.92v.84l-2.4 4.8Z"/></svg>'
        },
        114950: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H4v7H1V2.5ZM1 9v5.5c0 .83.67 1.5 1.5 1.5H4V9H1Zm4 7h4V9H5v7Zm5 0h4V9h-4v7Zm5 0h1.5c.83 0 1.5-.67 1.5-1.5V9h-3v7Zm3-8V2.5c0-.83-.67-1.5-1.5-1.5H15v7h3Zm-4-7h-4v7h4V1ZM9 1H5v7h4V1ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        605018: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M1 2.5C1 1.67 1.67 1 2.5 1H9v3H1V2.5ZM1 5v3h8V5H1Zm0 4v3h8V9H1Zm0 4v1.5c0 .83.67 1.5 1.5 1.5H9v-3H1Zm9 3h6.5c.83 0 1.5-.67 1.5-1.5V13h-8v3Zm8-4V9h-8v3h8Zm0-4V5h-8v3h8Zm0-4V2.5c0-.83-.67-1.5-1.5-1.5H10v3h8ZM2.5 0A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14Z"/></svg>'
        },
        750633: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" fill-rule="evenodd" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5H4V1H2.5ZM9 16H5V1h4v3h1V1h4v15h-4v-3H9v3Zm6 0h1.5c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5H15v15ZM2.5 17h14a2.5 2.5 0 0 0 2.5-2.5v-12A2.5 2.5 0 0 0 16.5 0h-14A2.5 2.5 0 0 0 0 2.5v12A2.5 2.5 0 0 0 2.5 17Zm9.2-7.16c0 .96-.91 1.63-2.2 1.63s-2.19-.67-2.19-1.63v-.01c0-.72.52-1.27 1.27-1.42v-.03c-.64-.17-1.06-.64-1.06-1.24 0-.87.82-1.5 1.98-1.5 1.16 0 1.98.63 1.98 1.5 0 .6-.42 1.07-1.06 1.24v.03c.75.15 1.27.7 1.27 1.42ZM8.5 7.24c0 .48.4.82.99.82s.99-.34.99-.83c0-.5-.4-.83-.99-.83-.58 0-.99.34-.99.83Zm-.16 2.53c0 .54.48.93 1.15.93.68 0 1.15-.39 1.15-.93 0-.55-.47-.94-1.15-.94-.68 0-1.15.4-1.15.94Z"/></svg>'
        },
        841785: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" width="19" height="17"><path fill="currentColor" d="M2.5 1C1.67 1 1 1.67 1 2.5v12c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-14ZM0 2.5A2.5 2.5 0 0 1 2.5 0h14A2.5 2.5 0 0 1 19 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 0 14.5v-12Z"/></svg>'
        },
        183358: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#clip0)"><path fill="#FFDB5E" d="M13.651 7.972c0-.168-.04-.325-.107-.468-.447-1.442-2.54-1.337-5.516-1.407-.498-.012-.213-.6-.038-1.89.113-.838-.428-2.127-1.337-2.127-1.5 0-.057 1.183-1.383 4.108-.708 1.562-2.291.687-2.291 2.257v3.573c0 .61.06 1.198.919 1.295.833.093.646.687 1.847.687h6.015a1.112 1.112 0 0 0 1.11-1.111c0-.254-.088-.486-.232-.673.34-.19.573-.55.573-.966a1.1 1.1 0 0 0-.232-.672c.341-.19.576-.55.576-.967 0-.303-.123-.578-.32-.779a1.105 1.105 0 0 0 .416-.86z"/><path fill="#EE9547" d="M9.673 9.083h2.867c.39 0 .757-.209.956-.544a.292.292 0 0 0-.502-.298.53.53 0 0 1-.454.259H9.604a.528.528 0 0 1 0-1.056h1.962a.292.292 0 0 0 0-.583H9.603a1.112 1.112 0 0 0-1.11 1.111c0 .342.158.644.4.848a1.107 1.107 0 0 0-.332.791c0 .343.16.646.404.85a1.105 1.105 0 0 0 .14 1.693 1.102 1.102 0 0 0 .042 1.52c.208.208.49.325.785.326h1.828a1.117 1.117 0 0 0 .956-.544.292.292 0 0 0-.502-.298.531.531 0 0 1-.454.258H9.932a.528.528 0 0 1 0-1.055H12.1a1.117 1.117 0 0 0 .956-.544.292.292 0 1 0-.501-.298.526.526 0 0 1-.454.259H9.745a.529.529 0 0 1 0-1.056h2.697a1.116 1.116 0 0 0 .956-.544.292.292 0 0 0-.501-.298.525.525 0 0 1-.455.259h-2.77a.529.529 0 0 1 0-1.056z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z" transform="translate(2 2)"/></clipPath></defs></svg>'
        },
        818745: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.4 10.68A7 7 0 0 1 22 12.65l.01.37.36.09A3.5 3.5 0 0 1 21.5 20h-14a4.5 4.5 0 1 1 .38-8.98l.38.03.13-.37ZM15 5a8 8 0 0 0-7.42 5A5.52 5.52 0 0 0 2 15.5 5.5 5.5 0 0 0 7.5 21h14a4.5 4.5 0 0 0 1.46-8.76A8 8 0 0 0 15 5Zm-1.65 11.85 5.5-5.5-.7-.7L13 15.79l-2.15-2.14-.7.7 2.5 2.5.35.36.35-.36Z"/></svg>'
        },
        25999: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5v13c0 .83.67 1.5 1.5 1.5H13v3H7.5a.5.5 0 0 0 0 1h12a.5.5 0 1 0 0-1H14v-3h8.5c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-18ZM4 4.5c0-.28.22-.5.5-.5h18c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-18a.5.5 0 0 1-.5-.5v-13Zm15.85 4.35a.5.5 0 1 0-.7-.7L15 12.29l-2.65-2.64a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 0 0 .7.7L12 10.71l2.65 2.64c.2.2.5.2.7 0l4.5-4.5Z"/></svg>'
        },
        401040: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.65 5.1a9.07 9.07 0 0 1 2.7 0 12.44 12.44 0 0 1 2.13 4.61c-1.06.2-2.24.29-3.48.29a18.6 18.6 0 0 1-3.48-.3 12.44 12.44 0 0 1 2.13-4.6Zm-.53-.92a10 10 0 0 0 0 19.64 10.05 10.05 0 0 0 3.76 0 10 10 0 0 0 0-19.64 10.05 10.05 0 0 0-3.76 0Zm4.68 1.26a14.4 14.4 0 0 1 1.66 4.05 7.06 7.06 0 0 0 2.5-1.2 9.01 9.01 0 0 0-4.16-2.85Zm4.75 3.66a8.12 8.12 0 0 1-2.88 1.37 18.93 18.93 0 0 1 0 7.06c1.1.3 2.08.74 2.88 1.37a8.96 8.96 0 0 0 0-9.8Zm-.59 10.6a7.05 7.05 0 0 0-2.5-1.19 14.1 14.1 0 0 1-1.65 4.04 9.01 9.01 0 0 0 4.15-2.85Zm-5.61 3.2a12.27 12.27 0 0 0 2.14-4.61c-1.07-.2-2.25-.29-3.49-.29-1.25 0-2.42.09-3.49.3a12.27 12.27 0 0 0 2.14 4.6 9.06 9.06 0 0 0 2.7 0Zm-4.16-.35a14.1 14.1 0 0 1-1.65-4.03c-.96.27-1.8.66-2.5 1.19a9.01 9.01 0 0 0 4.15 2.84ZM6.45 18.9a8.57 8.57 0 0 1 2.87-1.35 19.19 19.19 0 0 1 .01-7.1A8.58 8.58 0 0 1 6.45 9.1a8.96 8.96 0 0 0 0 9.8Zm.6-10.6a9.01 9.01 0 0 1 4.15-2.86 14.38 14.38 0 0 0-1.65 4.04 7.54 7.54 0 0 1-2.5-1.19ZM10 14c0-1.15.1-2.27.3-3.32 1.17.23 2.42.32 3.7.32 1.27 0 2.53-.09 3.7-.3a17.93 17.93 0 0 1 0 6.61A20 20 0 0 0 14 17c-1.29 0-2.54.09-3.7.32A18.2 18.2 0 0 1 10 14Z"/></svg>'
        },
        366748: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.69 5.11a.5.5 0 0 1 .62 0l7.5 6c.12.1.19.24.19.39v10a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V16h-4v5.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-10c0-.15.07-.3.19-.39l7.5-6ZM7 11.74V21h4v-5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V21h4v-9.26l-7-5.6-7 5.6Z"/></svg>'
        },
        543266: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 10.5c0-1.02.27-1.89.8-2.5.54-.6 1.39-1 2.7-1 1.31 0 2.16.4 2.7 1 .53.61.8 1.48.8 2.5s-.27 1.89-.8 2.5c-.54.6-1.39 1-2.7 1-1.31 0-2.16-.4-2.7-1-.53-.61-.8-1.48-.8-2.5ZM14.5 6c-1.53 0-2.68.49-3.44 1.34A4.67 4.67 0 0 0 10 10.5c0 1.19.31 2.32 1.06 3.16.76.85 1.91 1.34 3.44 1.34s2.68-.49 3.44-1.34A4.67 4.67 0 0 0 19 10.5c0-1.19-.31-2.32-1.06-3.16C17.18 6.49 16.03 6 14.5 6ZM7 23c0-2.4 1.83-5 5-5h5v-1h-5c-3.83 0-6 3.15-6 6h1Zm14-3h-4v1h4v4h1v-4h4v-1h-4v-4h-1v4Z"/></svg>'
        },
        236045: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M18 4.5v-1h-1v1a.5.5 0 0 1-.5.5h-2c-.83 0-1.5.67-1.5 1.5V8H4.5C3.67 8 3 8.67 3 9.5v10c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5H14V6.5c0-.28.22-.5.5-.5h2c.83 0 1.5-.67 1.5-1.5Zm-14 5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v10a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-10ZM7 17v-1h14v1H7Zm-1-1.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-2ZM7 12v1h1v-1H7Zm-.5-1a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Zm4.5 2v-1h1v1h-1Zm-1-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Zm5 .5v1h1v-1h-1Zm-.5-1a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Zm4.5 2v-1h2v1h-2Zm-1-1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2Z"/></svg>'
        },
        36901: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-width=".91" d="M8 16h5v8l7-11h-5V4L8 16Z"/></svg>'
        },
        190943: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V10h-1v3.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5H8V3H4.5ZM11 4h2.3L9.14 8.15l.7.7L14 4.71V7h1V3h-4v1Z"/></svg>'
        },
        187073: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M19.67 6.44a8.27 8.27 0 0 0-3.57-1.39 9 9 0 1 0 .54 17.83 8.71 8.71 0 0 0 3.63-1.8c.38-.29.74-.6 1.07-.9 0 0-.55 0-1.35-.15-2.11-.38-5.96-1.68-5.96-6.03 0-4.32 3.5-5.92 5.46-6.47.76-.22 1.3-.28 1.3-.28a14.2 14.2 0 0 0-1.12-.8Zm-1.3.4a6.54 6.54 0 0 0-2.37-.8 8 8 0 1 0 .48 15.85c.79-.13 1.63-.54 2.44-1.07-.51-.13-1.07-.31-1.63-.56a7.46 7.46 0 0 1-2.9-2.14A6.44 6.44 0 0 1 13.03 14a7.13 7.13 0 0 1 3.9-6.5c.49-.28.99-.5 1.45-.66Z"/></svg>'
        },
        34988: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.5 7C6.67 7 6 7.67 6 8.5v11c0 .83.67 1.5 1.5 1.5H8V7h-.5ZM9 7v14h11.5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H9ZM5 8.5A2.5 2.5 0 0 1 7.5 6h13A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11Z"/></svg>'
        },
        81271: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM3 14a11 11 0 1 1 22 0 11 11 0 0 1-22 0Zm11 7c.57 0 1-.44 1-1 0-.57-.43-1-1-1-.56 0-1 .43-1 1 0 .56.44 1 1 1Zm0-14c-1.4 0-2.42.57-3.07 1.37A4.23 4.23 0 0 0 10 11h1c0-.65.22-1.4.7-2 .47-.57 1.2-1 2.3-1 1.09 0 1.87.36 2.4.88.52.52.81 1.23.85 1.96a2.94 2.94 0 0 1-2.8 3.14c-.5.05-.95.45-.95 1.02v2h1v-2c.01-.02.03-.03.05-.03a3.93 3.93 0 0 0 3.7-4.18 3.96 3.96 0 0 0-1.15-2.62A4.28 4.28 0 0 0 14 7Z"/></svg>'
        },
        787301: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.4 10.68A7 7 0 0 1 22 12.65l.01.37.36.09A3.5 3.5 0 0 1 21.5 20H18v1h3.5a4.5 4.5 0 0 0 1.46-8.76A8 8 0 0 0 7.58 10 5.52 5.52 0 0 0 2 15.5 5.5 5.5 0 0 0 7.5 21H11v-1H7.5a4.5 4.5 0 1 1 .38-8.98l.38.03.13-.37Zm6.45 1.47-.35-.36-.35.36-3.5 3.5.7.7L14 13.71V24h1V13.71l2.65 2.64.7-.7-3.5-3.5Z"/></svg>'
        },
        458195: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M7 16.5a2.5 2.5 0 0 1 2-2.45V6h1v8.05a2.5 2.5 0 0 1 0 4.9V22H9V18.95a2.5 2.5 0 0 1-2-2.45Zm1 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm10-10V6h1V9.05a2.5 2.5 0 0 1 0 4.9V22h-1v-8.05a2.5 2.5 0 0 1 0-4.9V6.5Zm.5 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>'
        },
        441013: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M21 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1 0a3.5 3.5 0 0 1-6.21 2.21l-4.06 2.44a3.49 3.49 0 0 1 0 2.7l4.06 2.44a3.5 3.5 0 1 1-.52.86l-4.06-2.44a3.5 3.5 0 1 1 0-4.42l4.06-2.44A3.49 3.49 0 0 1 18.5 5 3.5 3.5 0 0 1 22 8.5Zm-1 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>'
        },
        786532: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.5 5A4.5 4.5 0 0 1 24 9.5v10a4.5 4.5 0 0 1-4.5 4.5H12v-1h7.5a3.5 3.5 0 0 0 3.5-3.5v-10A3.5 3.5 0 0 0 19.5 6H12V5h7.5Zm-7.65 5.65a.5.5 0 0 0-.7.7L13.79 14H4a.5.5 0 0 0 0 1h9.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z"/></svg>'
        },
        699949: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 5A4.5 4.5 0 0 0 4 9.5v10A4.5 4.5 0 0 0 8.5 24H16v-1H8.5A3.5 3.5 0 0 1 5 19.5v-10A3.5 3.5 0 0 1 8.5 6H16V5H8.5Zm12.35 5.65a.5.5 0 0 0-.7.7L22.79 14H13a.5.5 0 0 0 0 1h9.8l-2.65 2.65a.5.5 0 0 0 .7.7l3.5-3.5a.5.5 0 0 0 0-.7l-3.5-3.5Z"/></svg>'
        },
        636296: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
        },
        808757: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 18V5.5m-4 4l4-4l4 4"/></svg>'
        },
        133055: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>'
        },
        398120: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.9 14.1V22h1.2v-7.9H23v-1.2h-7.9V5h-1.2v7.9H6v1.2h7.9z"/></svg>'
        },
        606088: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 28" width="122" height="28"><path fill="currentColor" d="M12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM40.62 6.09h-4.96V21h3.04v-4.87h1.91c3.03 0 5.23-2.19 5.23-5.02 0-2.84-2.2-5.02-5.23-5.02Zm-.05 7.18H38.7V8.95h1.87c1.39 0 2.31.94 2.31 2.16 0 1.22-.92 2.16-2.3 2.16ZM47.6 21h2.88v-5.02c0-1.72.9-2.8 2.26-2.8.47 0 .86.1 1.3.24V10.5a3.3 3.3 0 0 0-.96-.13 2.8 2.8 0 0 0-2.6 1.81V10.5h-2.88V21Zm7.24-5.25c0 3.32 2.44 5.48 5.57 5.48 2.2 0 3.9-.94 4.87-2.35l-2.14-1.6a3.16 3.16 0 0 1-2.71 1.33c-1.39 0-2.63-.78-2.8-2.19h7.86c.04-.44.04-.73.04-.99 0-3.4-2.41-5.16-5.16-5.16a5.37 5.37 0 0 0-5.53 5.48Zm5.44-3.1c1.07 0 2.12.58 2.37 1.82h-4.91c.27-1.28 1.47-1.83 2.54-1.83ZM67.64 21h2.88v-5.12c0-2.02.86-2.99 2.1-2.99 1.14 0 1.64.95 1.64 2.5V21h2.88v-5.12c0-2.02.86-2.99 2.1-2.99 1.13 0 1.63.95 1.63 2.5V21h2.88v-6.09c0-2.84-1.43-4.64-3.93-4.64-1.2 0-2.6.63-3.25 1.93a3.45 3.45 0 0 0-3.26-1.93 3.3 3.3 0 0 0-2.79 1.43v-1.2h-2.88V21ZM89.66 6.95c0-1-.81-1.83-1.84-1.83-.99 0-1.83.82-1.83 1.83a1.84 1.84 0 0 0 3.67 0ZM86.4 21h2.88V10.5h-2.88V21Zm5.51-4.41c0 2.8 1.41 4.64 3.95 4.64a3.3 3.3 0 0 0 2.88-1.43V21h2.88V10.5h-2.88v5.12c0 2.04-.88 2.99-2.17 2.99-1.23 0-1.78-.93-1.78-2.5V10.5H91.9v6.09ZM104.37 21h2.88v-5.12c0-2.02.86-2.99 2.1-2.99 1.14 0 1.64.95 1.64 2.5V21h2.88v-5.12c0-2.02.86-2.99 2.1-2.99 1.13 0 1.63.95 1.63 2.5V21h2.88v-6.09c0-2.84-1.43-4.64-3.93-4.64-1.2 0-2.6.63-3.25 1.93a3.45 3.45 0 0 0-3.26-1.93 3.3 3.3 0 0 0-2.79 1.43v-1.2h-2.88V21Z"/></svg>'
        },
        182412: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 28" width="77" height="28"><path fill="currentColor" d="M12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM40.62 6.09h-4.96V21h3.04v-4.87h1.91c3.03 0 5.23-2.19 5.23-5.02 0-2.84-2.2-5.02-5.23-5.02Zm-.05 7.18H38.7V8.95h1.87c1.39 0 2.31.94 2.31 2.16 0 1.22-.92 2.16-2.3 2.16ZM47.6 21h2.88v-5.02c0-1.72.9-2.8 2.26-2.8.47 0 .86.1 1.3.24V10.5a3.3 3.3 0 0 0-.96-.13 2.8 2.8 0 0 0-2.6 1.81V10.5h-2.88V21Zm18.27-5.25a5.48 5.48 0 0 0-5.53-5.48 5.48 5.48 0 1 0 0 10.96 5.48 5.48 0 0 0 5.53-5.48Zm-8.15 0c0-1.62 1.11-2.8 2.62-2.8 1.52 0 2.6 1.18 2.6 2.8 0 1.62-1.08 2.8-2.6 2.8-1.5 0-2.62-1.18-2.62-2.8Zm9.6.42h3.16v3.17h2.5v-3.17h3.15v-2.5h-3.15V10.5h-2.5v3.17H67.3v2.5Z"/></svg>'
        },
        918273: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 28" width="67" height="28"><path fill="currentColor" d="M12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM40.62 6.09h-4.96V21h3.04v-4.87h1.91c3.03 0 5.23-2.19 5.23-5.02 0-2.84-2.2-5.02-5.23-5.02Zm-.05 7.18H38.7V8.95h1.87c1.39 0 2.31.94 2.31 2.16 0 1.22-.92 2.16-2.3 2.16ZM47.6 21h2.88v-5.02c0-1.72.9-2.8 2.26-2.8.47 0 .86.1 1.3.24V10.5a3.3 3.3 0 0 0-.96-.13 2.8 2.8 0 0 0-2.6 1.81V10.5h-2.88V21Zm18.27-5.25a5.48 5.48 0 0 0-5.53-5.48 5.48 5.48 0 1 0 0 10.96 5.48 5.48 0 0 0 5.53-5.48Zm-8.15 0c0-1.62 1.11-2.8 2.62-2.8 1.52 0 2.6 1.18 2.6 2.8 0 1.62-1.08 2.8-2.6 2.8-1.5 0-2.62-1.18-2.62-2.8Z"/></svg>'
        },
        698170: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 28" width="158" height="28"><path fill="currentColor" d="M127.37 7.21c0 .99-.83 1.78-1.87 1.78-1 0-1.84-.8-1.84-1.78s.85-1.77 1.84-1.77c1.04 0 1.87.8 1.87 1.77ZM127 21h-3V10h3v11ZM81.54 9.02c1.04 0 1.87-.8 1.87-1.77 0-.99-.83-1.78-1.87-1.78-1 0-1.84.8-1.84 1.78s.85 1.77 1.84 1.77ZM80 21h3V10h-3v11ZM43 21h-3V9h-4V6h11v3h-4v12ZM50 21l-3 .02V10h3v1.88c.36-1 1.34-1.75 2.53-1.75h.03c.3 0 .6 0 .94.1v2.84a4 4 0 0 0-1.31-.2c-1.38 0-2.19 1-2.19 2.7V21ZM88 21h-3V10.01l3-.01v1c.57-.82 1.53-1.21 2.9-1.21 2.57 0 4.1 1.8 4.1 4.45V21h-3v-6c0-1.47-.56-2.66-1.77-2.66-1.36 0-2.23.93-2.23 2.89V21ZM117 21l6-15h-3.5l-4 10.5L111 6h-3.5l6.5 15h3ZM153.45 21h-2.93l-2.02-6.25-2 6.25h-2.93L140 10h3.14l2.05 7.04 2.17-7.04h2.26l2.2 7.04 2.02-7.04H157l-3.55 11ZM58.92 21.24c1.52 0 2.57-.77 3.08-1.47V21h3V10h-3v1.23a3.78 3.78 0 0 0-3.08-1.47c-2.93 0-5.17 2.64-5.17 5.74s2.24 5.74 5.17 5.74Zm.64-2.75c-1.68 0-2.78-1.25-2.78-2.99 0-1.74 1.1-3 2.78-3 1.67 0 2.77 1.26 2.77 3s-1.1 3-2.77 3ZM75 19.77c-.5.7-1.56 1.47-3.08 1.47-2.93 0-5.17-2.64-5.17-5.74s2.24-5.74 5.17-5.74c1.52 0 2.57.77 3.08 1.47V6h3v15h-3v-1.23Zm-5.22-4.27c0 1.74 1.1 3 2.78 3 1.67 0 2.77-1.26 2.77-3s-1.1-3-2.77-3c-1.68 0-2.78 1.26-2.78 3ZM102.23 25.82c3.36 0 5.77-1.72 5.77-5.68V10h-3v1.23a3.6 3.6 0 0 0-3.06-1.47c-2.88 0-5.2 2.46-5.2 5.56 0 3.08 2.32 5.68 5.2 5.68a3.8 3.8 0 0 0 3.06-1.58v.74c0 1.76-1.04 3.02-2.82 3.02a4.84 4.84 0 0 1-3.43-1.37l-1.65 2.25c1.25 1.2 3.21 1.76 5.13 1.76Zm.35-7.68a2.75 2.75 0 0 1-2.8-2.82c0-1.69 1.28-2.81 2.8-2.81 1.52 0 2.8 1.12 2.8 2.81a2.75 2.75 0 0 1-2.8 2.82ZM139.78 18.72a5.96 5.96 0 0 1-5.1 2.47c-3.28 0-5.83-2.27-5.83-5.74a5.62 5.62 0 0 1 5.78-5.75c2.89 0 5.42 1.83 5.42 5.42a6.01 6.01 0 0 1-.04 1.13h-8.24c.18 1.47 1.48 2.19 2.93 2.19 1.39 0 2.33-.62 2.84-1.39l2.24 1.67Zm-5.23-6.53c-1.13 0-2.38.57-2.67 1.91h5.15c-.26-1.32-1.36-1.91-2.48-1.91ZM12 6H0v6h6v9h6V6Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
        },
        587711: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><circle stroke="currentColor" stroke-width="1.5" cx="14" cy="14" r="10.25"/><path fill="currentColor" d="M7.97 14.97a.75.75 0 1 0 1.06 1.06l-1.06-1.06zM12 12l.53-.53a.75.75 0 0 0-1.06 0L12 12zm3.5 3.5l-.53.53c.3.3.77.3 1.06 0l-.53-.53zm4.03-2.97a.75.75 0 1 0-1.06-1.06l1.06 1.06zm-10.5 3.5l3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06zm2.44-3.5l3.5 3.5 1.06-1.06-3.5-3.5-1.06 1.06zm4.56 3.5l3.5-3.5-1.06-1.06-3.5 3.5 1.06 1.06z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.9 9a7 7 0 0 0-11.83 4M9 18.9A7 7 0 0 0 20.93 15"/></svg>'
        },
        331113: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle stroke="currentColor" cx="9" cy="5.5" r="3"/><path stroke="currentColor" d="M3.51 16a5.47 5.47 0 0 1 5.47-5.47m0 0c.65 0 1.27.1 1.85.32m-1.85-.32a5.5 5.5 0 0 1 5.5 5.47"/></svg>'
        },
        152493: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 4.5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14c0-1.1.9-2 2-2zM9 9.5h11M9 13.5h11M9 17.5h11"/></svg>'
        }
    }
]);
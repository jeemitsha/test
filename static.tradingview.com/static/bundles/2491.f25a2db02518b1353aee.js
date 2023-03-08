(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [2491, 802], {
        217049: e => {
            e.exports = {
                preview: "preview-xWiEHZgw",
                fixedHeight: "fixedHeight-xWiEHZgw",
                ratio16by9: "ratio16by9-xWiEHZgw",
                ratio2by1: "ratio2by1-xWiEHZgw",
                "preview-grid": "preview-grid-xWiEHZgw",
                picture: "picture-xWiEHZgw",
                image: "image-xWiEHZgw",
                "image-link": "image-link-xWiEHZgw",
                middle: "middle-xWiEHZgw",
                corner: "corner-xWiEHZgw",
                "corner-top-left": "corner-top-left-xWiEHZgw",
                "corner-top-right": "corner-top-right-xWiEHZgw",
                "corner-bottom-left": "corner-bottom-left-xWiEHZgw",
                "corner-bottom-right": "corner-bottom-right-xWiEHZgw"
            }
        },
        363257: e => {
            e.exports = {
                block: "block-fvSq8PN9"
            }
        },
        950796: e => {
            e.exports = {
                block: "block-ucUtoulA",
                icon: "icon-ucUtoulA",
                exclusive: "exclusive-ucUtoulA"
            }
        },
        991312: e => {
            e.exports = {
                previewWrapper: "previewWrapper-wq549hkj"
            }
        },
        91035: e => {
            e.exports = {
                block: "block-Ffb0uHw9"
            }
        },
        831042: e => {
            e.exports = {
                "badge-important": "badge-important-Kra7mZuD",
                icon: "icon-Kra7mZuD",
                "size-medium": "size-medium-Kra7mZuD",
                "size-large": "size-large-Kra7mZuD",
                "badge-important-content": "badge-important-content-Kra7mZuD"
            }
        },
        997337: e => {
            e.exports = {
                stack: "stack-_a62qKzG",
                "stack--xxsmall": "stack--xxsmall-_a62qKzG",
                "stack--xsmall": "stack--xsmall-_a62qKzG"
            }
        },
        830493: (e, t, n) => {
            "use strict";
            n.d(t, {
                Preview: () => u,
                PreviewBottomLeftCorner: () => d,
                PreviewBottomRightCorner: () => _,
                PreviewGrid: () => c,
                PreviewImage: () => p,
                PreviewImageLink: () => w,
                PreviewMiddle: () => h,
                PreviewResizeMode: () => r,
                PreviewTopLeftCorner: () => m,
                PreviewTopRightCorner: () => g
            });
            var r, i = n(50959),
                a = n(497754),
                o = n(217049),
                s = n.n(o);

            function l(e) {
                const {
                    corner: t,
                    className: n,
                    children: r,
                    ...o
                } = e;
                return i.createElement("div", { ...o,
                    className: a(s().corner, s()[`corner-${t}`])
                }, r)
            }

            function u(e) {
                const {
                    resizeMode: t = r.FixedHeight,
                    className: n,
                    children: o,
                    ...l
                } = e;
                return i.createElement("div", { ...l,
                    className: a(s().preview, s()[t], n)
                }, o)
            }

            function c(e) {
                const {
                    className: t,
                    children: n,
                    ...r
                } = e;
                return i.createElement("div", { ...r,
                    className: a(s()["preview-grid"], t)
                }, n)
            }

            function m(e) {
                return i.createElement(l, { ...e,
                    corner: "top-left"
                })
            }

            function g(e) {
                return i.createElement(l, { ...e,
                    corner: "top-right"
                })
            }

            function d(e) {
                return i.createElement(l, { ...e,
                    corner: "bottom-left"
                })
            }

            function _(e) {
                return i.createElement(l, { ...e,
                    corner: "bottom-right"
                })
            }

            function h(e) {
                const {
                    className: t,
                    ...n
                } = e;
                return i.createElement("div", { ...n,
                    className: a(s().middle, t)
                })
            }

            function p(e) {
                const {
                    className: t,
                    sources: n,
                    fallbackSrc: r,
                    role: o = "presentation",
                    loading: l = "lazy",
                    ...u
                } = e;
                return i.createElement("picture", {
                    className: s().picture
                }, null == n ? void 0 : n.map(((e, t) => i.createElement("source", { ...e,
                    key: t
                }))), i.createElement("img", { ...u,
                    src: r,
                    role: o,
                    loading: l,
                    className: a(s().image, t)
                }))
            }

            function w(e) {
                const {
                    className: t,
                    tabIndex: n = -1,
                    "aria-hidden": r = !0,
                    ...o
                } = e;
                return i.createElement("a", { ...o,
                    tabIndex: n,
                    "aria-hidden": r,
                    className: a(s()["image-link"], t)
                })
            }! function(e) {
                e.FixedHeight = "fixedHeight", e.Ratio16by9 = "ratio16by9", e.Ratio2by1 = "ratio2by1"
            }(r || (r = {}))
        },
        555243: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return new Intl.DateTimeFormat(t, {
                    year: "numeric",
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                    calendar: "gregory",
                    timeZoneName: "short"
                }).format(e)
            }

            function i(e) {
                return e ? `${e}-u-hc-h23` : void 0
            }

            function a(e, t, n = "long") {
                const r = Math.floor(e / 1e3),
                    i = Math.sign(r),
                    [a, o] = function(e) {
                        if (e < 90) return [1, "minute"];
                        if (e < 2700) return [Math.max(Math.floor(e / 60), 2), "minute"];
                        if (e < 5400) return [1, "hour"];
                        if (e < 79200) return [Math.max(Math.floor(e / 60 / 60), 2), "hour"];
                        if (e < 129600) return [1, "day"];
                        if (e < 216e4) return [Math.max(Math.floor(e / 86400), 2), "day"];
                        if (e < 3888e3) return [1, "month"];
                        if (e < 29808e3) return [Math.max(Math.floor(e / 2592e3), 2), "month"];
                        return e < 47088e3 ? [1, "year"] : [Math.max(Math.floor(e / 31536e3), 2), "year"]
                    }(Math.abs(r));
                return new Intl.RelativeTimeFormat(t, {
                    numeric: "auto",
                    style: n
                }).format(i * a, o)
            }
            n.d(t, {
                getLabel: () => r,
                getLocale: () => i,
                formatTime: () => a
            })
        },
        920882: (e, t, n) => {
            "use strict";
            n.d(t, {
                AgoDateFormatter: () => v,
                Time: () => y
            });
            var r = n(50959),
                i = n(497754),
                a = n(555243);

            function o() {
                if (!window.customElements.get("relative-time")) {
                    class e extends HTMLElement {
                        static get observedAttributes() {
                            return ["event-time", "locale", "format-style"]
                        }
                        constructor() {
                            super(), this._currentTime = 0, this._eventTime = 0, this._locale = void 0, this._style = "long", this._isConnected = !1, this._date = document.createElement("time");
                            const e = this.getAttribute("ssr-time");
                            this._currentTime = e ? Date.parse(e) : Date.now();
                            this.attachShadow({
                                mode: "closed"
                            }).appendChild(this._date)
                        }
                        connectedCallback() {
                            this._isConnected = !0, this.classList.add("apply-common-tooltip"), this._updateAttributes(), this._connectionChanged()
                        }
                        disconnectedCallback() {
                            this._isConnected = !1, this._connectionChanged()
                        }
                        attributeChangedCallback(e, t, n) {
                            "event-time" === e && (this._eventTime = Date.parse(n)), "locale" === e && (this._locale = n), "format-style" === e && (this._style = n), this._isConnected && (this._updateAttributes(), this.update(Date.now()))
                        }
                        update(e) {
                            const t = this._eventTime - e,
                                n = (0, a.formatTime)(t, this._locale, this._style);
                            this._date.innerText = n
                        }
                        _updateAttributes() {
                            const e = new Date(this._eventTime);
                            this.setAttribute("title", (0, a.getLabel)(e, (0, a.getLocale)(this._locale))), this._date.setAttribute("datetime", e.toUTCString())
                        }
                        _connectionChanged() {
                            this._isConnected ? (s.add(this), this.update(this._currentTime), c()) : s.delete(this)
                        }
                    }
                    window.customElements.define("relative-time", e)
                }
            }
            const s = new Set;
            let l = 0,
                u = 0;

            function c() {
                0 === l && 0 === u && 0 !== s.size && (l = setTimeout((() => {
                    l = 0, u = requestAnimationFrame((() => {
                        u = 0, c(),
                            function() {
                                const e = Date.now();
                                for (const t of s) t.update(e)
                            }()
                    }))
                }), 3e4))
            }

            function m(e) {
                const {
                    ssrTime: t,
                    eventTime: n,
                    localeIso: i,
                    formatStyle: a,
                    fallbackText: s,
                    isSSR: l
                } = e, u = new Date(t || Date.now()), c = new Date(n), m = (0, r.useRef)(null);
                return l || (0, r.useLayoutEffect)((() => {
                    const e = m.current;
                    s && e && !e.textContent && (e.textContent = s)
                })), (0, r.useEffect)((() => {
                    const e = m.current;
                    Intl.RelativeTimeFormat && (e && e.remove(), o())
                }), []), r.createElement("relative-time", {
                    locale: i,
                    "ssr-time": u.toUTCString(),
                    "event-time": c.toUTCString(),
                    "format-style": a
                }, r.createElement(g, {
                    startDate: u,
                    endDate: c,
                    localeIso: i,
                    style: a,
                    ref: m
                }))
            }
            const g = r.forwardRef(((e, t) => {
                const {
                    startDate: n,
                    endDate: i,
                    localeIso: o,
                    style: s
                } = e;
                if (Intl.RelativeTimeFormat) {
                    const e = (0, r.useMemo)((() => {
                        const e = i.getTime() - n.getTime();
                        return (0, a.formatTime)(e, o, s)
                    }), []);
                    return r.createElement("time", {
                        ref: t,
                        dateTime: i.toUTCString(),
                        suppressHydrationWarning: !0
                    }, e)
                }
                return r.createElement("time", {
                    ref: t,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    },
                    suppressHydrationWarning: !0
                })
            }));
            var d = n(812352),
                _ = n(164280),
                h = n(838126);

            function p(e) {
                return function(e) {
                    const t = new Date(e),
                        n = new _.TimeFormatter(_.hourMinuteFormat),
                        r = h.dateFormatFunctions["MMM dd"](t, !0);
                    return [n.formatLocal(t), r]
                }(e).join(" ").replace(" ", " · ")
            }
            var w = n(684987);
            const f = (0, d.getLocaleIso)();

            function y(e) {
                const t = new Date(e.eventTime);
                return r.createElement("time", {
                    dateTime: t.toUTCString(),
                    className: i(e.title && "apply-common-tooltip", e.className),
                    title: e.title,
                    suppressHydrationWarning: !0
                }, e.children)
            }

            function v(e) {
                const t = new Date,
                    n = new Date(e.eventTime),
                    i = n.getTime(),
                    a = t.getTime() - i,
                    o = t.getFullYear() !== n.getFullYear();
                return !o && a < 6912e5 ? r.createElement(m, {
                    eventTime: e.eventTime,
                    ssrTime: e.ssrTime,
                    localeIso: f,
                    fallbackText: p(i),
                    isSSR: !1
                }) : r.createElement(y, {
                    eventTime: e.eventTime,
                    title: (0, w.getFormatterFullContent)(e.eventTime)
                }, function(e, t) {
                    if (t) return (0, w.getFormatterContentWithYear)(e);
                    return (0, w.getFormatterContent)(e)
                }(i, o))
            }
        },
        684987: (e, t, n) => {
            "use strict";
            n.d(t, {
                getFormatterFullContent: () => a,
                getFormatterContent: () => o,
                getFormatterContentWithYear: () => s,
                getFormatterTime: () => l,
                getFormatterYear: () => u
            });
            const r = (0, n(812352).getLocaleIso)(),
                i = r && `${r}-u-hc-h23`,
                a = e => {
                    const t = new Date(e).getTime();
                    return new Intl.DateTimeFormat(i, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        calendar: "gregory",
                        timeZoneName: "short"
                    }).format(t)
                },
                o = e => {
                    const t = new Date(e).getTime();
                    return new Intl.DateTimeFormat(i, {
                        month: "short",
                        day: "numeric",
                        calendar: "gregory"
                    }).format(t)
                },
                s = e => {
                    const t = new Date(e).getTime();
                    return new Intl.DateTimeFormat(i, {
                        month: "short",
                        day: "numeric",
                        calendar: "gregory",
                        year: "numeric"
                    }).format(t)
                },
                l = e => {
                    const t = new Date(e).getTime();
                    return new Intl.DateTimeFormat(i, {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZoneName: "short"
                    }).format(t)
                },
                u = e => new Date(e).getFullYear()
        },
        32638: (e, t, n) => {
            "use strict";
            n.d(t, {
                NewsBadges: () => c
            });
            var r = n(50959),
                i = n(497754),
                a = n(774465),
                o = n(279874),
                s = n(390543),
                l = n(363257),
                u = n.n(l);

            function c(e) {
                const {
                    isImportant: t,
                    isExclusive: n,
                    size: l = a.BadgeSize.Medium,
                    className: c
                } = e;
                return r.createElement("div", {
                    className: i(u().block, c)
                }, t && r.createElement(o.BadgeImportant, {
                    size: l
                }), n && r.createElement(s.BadgeExclusive, {
                    size: l
                }))
            }
        },
        597051: (e, t, n) => {
            "use strict";

            function r(e) {
                return [e - 1, e, e + 1]
            }
            n.d(t, {
                getNearbyNewsIndices: () => r
            })
        },
        970895: (e, t, n) => {
            "use strict";
            n.d(t, {
                getNewsCardVisualProps: () => u,
                prepareLogoUrls: () => c
            });
            var r = n(957052),
                i = n(162362),
                a = n(124025),
                o = n(892093),
                s = n(50959),
                l = n(920882);

            function u(e, t, n) {
                return {
                    breadcrumbs: function(e) {
                        const t = [];
                        return "published" in e && t.push(s.createElement(l.AgoDateFormatter, {
                            eventTime: e.published,
                            ssrTime: e.ssrTimeMs,
                            isSSR: !1
                        })), t.push(s.createElement("span", null, e.source)), t
                    }({
                        source: e.source,
                        published: e.published,
                        ssrTimeMs: n
                    }),
                    title: e.title,
                    link: (0, i.getNewsItemLink)(e),
                    logoUrlsOrSymbols: e.relatedSymbols ? c(e.relatedSymbols.slice(0, 4)) : [],
                    showExternalLink: Boolean(e.isExternal),
                    showUnauthTitle: (0, a.isProviderPermission)(e, t),
                    isExclusive: e.isExclusive,
                    urgency: e.urgency,
                    previewImage: e.previewImage
                }
            }

            function c(e) {
                return (0, r.default)(e, (e => {
                    const t = (0, o.removeUsdAndStableCoinFromCryptoPairLogos)((0, o.resolveLogoUrls)(e));
                    return t.length ? t.map(m) : {
                        symbol: e.symbol
                    }
                }))
            }

            function m(e) {
                return {
                    logoUrl: e
                }
            }
        },
        687411: (e, t, n) => {
            "use strict";
            n.d(t, {
                HeadlineUnauthTitle: () => c
            });
            var r = n(50959),
                i = n(777754),
                a = n(83436),
                o = n(530162),
                s = n(390543),
                l = n(950796),
                u = n.n(l);

            function c(e) {
                return r.createElement("div", {
                    className: u().block
                }, !e.isExclusive && r.createElement(a.Icon, {
                    className: u().icon,
                    icon: o
                }), r.createElement("span", null, e.isExclusive && r.createElement(s.BadgeExclusive, {
                    className: u().exclusive,
                    size: e.size
                }), i.t(null, void 0, n(27104))))
            }
        },
        647479: (e, t, n) => {
            "use strict";
            n.d(t, {
                HeadlinePreview: () => c
            });
            var r = n(50959),
                i = n(497754),
                a = n.n(i),
                o = n(830493),
                s = n(616001),
                l = n(991312);
            const u = (0, s.getNewsImageUrlsResolver)();

            function c(e) {
                const {
                    previewImage: t,
                    resizeMode: n = o.PreviewResizeMode.Ratio16by9,
                    className: i,
                    children: s
                } = e, c = [{
                    src: u.getNewsImageUrl(t.id, "webp"),
                    type: "images/webp"
                }];
                return r.createElement("div", {
                    className: a()(l.previewWrapper, i)
                }, r.createElement(o.Preview, {
                    resizeMode: n
                }, r.createElement(o.PreviewImage, {
                    fallbackSrc: u.getNewsImageUrl(t.id, "jpeg"),
                    sources: c,
                    alt: t.alt
                })), s)
            }
        },
        616001: (e, t, n) => {
            "use strict";
            n.d(t, {
                getNewsImageUrlsResolver: () => s
            });
            var r = n(650151),
                i = n(588948);
            class a {
                constructor(e) {
                    (0, r.assert)("" !== e, "S3 base url must be a non-empty string"), this._baseUrl = e
                }
                getNewsProviderLogoUrls(e) {
                    return (0, r.assert)("" !== e, "logo id must be a non-empty string"), [this._baseUrl + `logo/${e}--theme-light.svg`, this._baseUrl + `logo/${e}--theme-dark.svg`]
                }
                getNewsImageUrl(e, t = "jpeg") {
                    return (0, r.assert)("" !== e, "image id must be a non-empty string"), this._baseUrl + `image/${e}-resized.${t}`
                }
            }
            let o;

            function s() {
                if (!o) {
                    const e = (0, i.getInitData)(),
                        t = e.settings ? e.settings.S3_NEWS_IMAGE_SERVICE_BASE_URL : "";
                    o = new a(t)
                }
                return o
            }
        },
        145201: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                onNewsCardAction: () => g
            });
            var r = n(272001),
                i = n(615063),
                a = n(890740),
                o = n(877765);
            var s = n(597051);

            function l(e, t, r) {
                const i = t.filter((e => !e.isExternal)),
                    l = i.map((e => t => async function(e, t) {
                        const n = `${window.NEWS_SERVICE_URL}/story/?id=${e}`,
                            r = await (0, a.fetch)(n, {
                                signal: t
                            });
                        if (!r.ok) {
                            const e = await r.text();
                            throw Error(`Error while fetch ${r.url}. Response status ${r.status} ${r.statusText}. Response text: '${e}'`)
                        }
                        return r.json().then(o.newsItemTransform)
                    }(e.id, t).catch((() => Promise.resolve(void 0)))));
                !async function(e, t, r, i) {
                    const a = (0,
                            s.getNearbyNewsIndices)(e).map((e => t[e])),
                        [{
                            openTradingViewNewsDescriptionDialogImpl: o
                        }, ...l] = await Promise.all([Promise.all([n.e(88230), n.e(18619), n.e(81910), n.e(86256), n.e(91901), n.e(96972), n.e(75398), n.e(63737), n.e(36720), n.e(1428), n.e(1011), n.e(52701), n.e(96246), n.e(19591), n.e(39683), n.e(89034), n.e(74518), n.e(88342), n.e(59893), n.e(40444), n.e(33434), n.e(5677), n.e(71529), n.e(94865), n.e(73442), n.e(75514), n.e(19051), n.e(59255), n.e(745), n.e(8446), n.e(9490), n.e(94664)]).then(n.bind(n, 183365)), ...a.map((e => e ? e() : Promise.resolve(void 0)))]);
                    o(e, l, t, r, i)
                }(i.findIndex((t => t.id === e.id)), l, e.analyticsData, r)
            }

            function u(e) {
                const {
                    newsItem: t,
                    newsItems: n,
                    newsId: r = null,
                    provider: a = null,
                    placement: o
                } = e;
                (0, i.trackNewsClick)({
                    area: t.analyticsData.area,
                    section: t.analyticsData.section,
                    category: t.analyticsData.category,
                    country: t.analyticsData.country,
                    language: t.analyticsData.language,
                    link: null,
                    news_id: r || t.id,
                    provider: a || t.source,
                    symbol: t.analyticsData.proSymbol,
                    page: (0, i.getPageName)(),
                    placement: o
                }), t.isExternal || l(t, n, o)
            }
            var c = n(124025);
            const m = (0, r.getLogger)("News.CardClickAction");

            function g(e) {
                return t => {
                    (0, c.isProviderPermission)(e.newsItem, window.is_authenticated) ? (t.preventDefault(), window.runOrSignIn((() => d(e, t)), {
                        source: "News item permission provider"
                    })) : d(e, t)
                }
            }

            function d(e, t) {
                const {
                    newsItem: n,
                    newsItems: r,
                    placement: i,
                    onCardAction: a
                } = e;
                if (n.isExternal)
                    if (n.link) {
                        const e = t.target.closest("a");
                        u({
                            newsItem: n,
                            newsItems: r,
                            newsId: e.pathname,
                            provider: e.hostname,
                            placement: i
                        })
                    } else m.logError(`No link for external news item with id "${n.id}"`);
                else t.preventDefault(), u({
                    newsItem: n,
                    newsItems: r,
                    placement: i
                });
                null == a || a()
            }
        },
        877765: (e, t, n) => {
            "use strict";

            function r(e) {
                return { ...e,
                    published: e.published ? 1e3 * e.published : Date.now()
                }
            }
            n.d(t, {
                newsItemTransform: () => r
            })
        },
        124025: (e, t, n) => {
            "use strict";
            n.d(t, {
                isPreviewPermission: () => i,
                isProviderPermission: () => a,
                isHeadlinePermission: () => o
            });
            var r = n(887357);

            function i(e, t) {
                return s(e, t, r.NewsItemPermission.Preview)
            }

            function a(e, t) {
                return s(e, t, r.NewsItemPermission.Provider)
            }

            function o(e, t) {
                return s(e, t, r.NewsItemPermission.Headline)
            }

            function s(e, t, n) {
                return !t && e.permission === n
            }
        },
        615063: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackNewsClick: () => a,
                getPageName: () => o
            });
            var r = n(345848),
                i = n(776734);
            async function a(e) {
                null !== e.provider && (0, r.trackEvent)("News", "click", e.provider);
                const t = await (0, i.getTracker)();
                t && t.trackNewsClick({ ...e,
                    user_id: window.user.id || null
                })
            }

            function o() {
                if (window.TradingView.onChartPage) return "chart";
                const e = window.location.pathname;
                if ("/" === e) return "main";
                const t = e.split("/")[1];
                return "chart" === t ? "idea" : t
            }
        },
        887357: (e, t, n) => {
            "use strict";
            var r, i;
            n.d(t, {
                    NewsItemPermission: () => r,
                    NewsWidgetPlacement: () => i
                }),
                function(e) {
                    e.Headline = "headline", e.Preview = "preview", e.Link = "link", e.Provider = "provider"
                }(r || (r = {})),
                function(e) {
                    e.WidgetBar = "widgetbar", e.Main = "main", e.Chart = "chart"
                }(i || (i = {}))
        },
        162362: (e, t, n) => {
            "use strict";
            n.d(t, {
                getStoryPageUrl: () => s,
                getNewsItemLink: () => l
            });
            var r = n(887357),
                i = n(314802);
            const a = "urn:newsml:".length,
                o = "tag:".length;

            function s(e) {
                const {
                    title: t,
                    language: n,
                    permission: s
                } = e
                ;
                let l = e.id;
                return l.startsWith("tag:reuters.com") ? l = l.slice(o) : function(e) {
                    return e.startsWith("urn:newsml:mtnewswires.com")
                }(l) && (l = l.slice(a)), "en" === n && s !== r.NewsItemPermission.Provider && (l = `${l}-${function(e){return e.toLowerCase().trim().replace(/[\W_]+/g,"-").replace(/-+/,"-").replace(/^-/,"").replace(/-$/,"")}(t)}`), (0, i.urlWithMobileAppParams)(`/news/${l}/`)
            }

            function l(e) {
                return e.isExternal ? e.link : s(e)
            }
        },
        812352: (e, t, n) => {
            "use strict";
            n.d(t, {
                getLocales: () => o,
                getLocale: () => s,
                getLocaleIso: () => l
            });
            var r = n(650151),
                i = n(448641);
            const a = function() {
                const e = document.querySelectorAll("link[rel~=link-locale][data-locale]");
                if (0 === e.length) return i;
                const t = {};
                return e.forEach((e => {
                    const n = (0, r.ensureNotNull)(e.getAttribute("data-locale"));
                    t[n] = { ...i[n],
                        href: e.href
                    }
                })), t
            }();

            function o() {
                return a
            }

            function s(e) {
                return e = e || window.locale, a[e]
            }

            function l(e) {
                var t;
                return e = e || window.locale, null === (t = a[e]) || void 0 === t ? void 0 : t.iso
            }
        },
        390543: (e, t, n) => {
            "use strict";
            n.d(t, {
                BadgeExclusive: () => c
            });
            var r = n(50959),
                i = n(777754),
                a = n(497754),
                o = n.n(a),
                s = n(774465),
                l = n(91035),
                u = n.n(l);

            function c(e) {
                return r.createElement(s.Badge, {
                    className: o()(u().block, e.className),
                    size: e.size || s.BadgeSize.Medium
                }, i.t(null, void 0, n(667360)))
            }
        },
        279874: (e, t, n) => {
            "use strict";
            n.d(t, {
                BadgeImportant: () => l
            });
            var r = n(50959),
                i = n(497754),
                a = n(777754),
                o = n(558470),
                s = n(831042);

            function l(e) {
                const {
                    size: t = o.BadgeSize.Medium,
                    className: l
                } = e, u = [o.BadgeSize.Medium, o.BadgeSize.Large].includes(t);
                return r.createElement(o.Badge, {
                    size: t,
                    className: i(s["badge-important"], s[`size-${t}`], l),
                    contentClassName: s["badge-important-content"]
                }, u && r.createElement("span", {
                    className: s.icon
                }), r.createElement("span", null, a.t(null, void 0, n(564173))))
            }
        },
        892093: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                getLogoUrlsHook: () => s,
                removeUsdAndStableCoinFromCryptoPairLogos: () => l,
                resolveLogoUrls: () => o
            });
            var r = n(849204);
            const i = JSON.parse('["XTVCUSDT","XTVCDAI","XTVCBUSD","XTVCTUSD","XTVCUSDC","XTVCDGX","XTVCHUSD"]'),
                a = (0, r.getLogoUrlResolver)();

            function o(e, t = r.LogoSize.Medium) {
                const n = e.logoid,
                    i = e["base-currency-logoid"],
                    o = e["currency-logoid"],
                    s = n && a.getSymbolLogoUrl(n, t);
                if (s) return [s];
                const l = i && a.getSymbolLogoUrl(i, t),
                    u = o && a.getSymbolLogoUrl(o, t);
                return l && u ? [l, u] : l ? [l] : u ? [u] : []
            }

            function s(e, t) {
                let n = !1;
                return (r, i, a) => {
                    const s = r["currency-logoid"] && r["base-currency-logoid"];
                    if (!n && (r.logoid || s || a)) {
                        n = !0;
                        const i = l(o({
                            logoid: r.logoid,
                            "base-currency-logoid": r["base-currency-logoid"],
                            "currency-logoid": r["currency-logoid"]
                        }, t));
                        e(i)
                    }
                }
            }

            function l(e) {
                return 2 !== e.length ? e : function(e) {
                    return e.some((e => u(e)))
                }(e) && ! function(e) {
                    return e.some((e => e.includes("country") && !u(e)))
                }(e) ? e.filter((e => !u(e))) : function(e) {
                    return e.some((e => m(e)))
                }(e) && function(e) {
                    return e.some((e => c(e)))
                }(e) ? e.filter((e => c(e))) : e
            }

            function u(e) {
                return e.includes("country/US")
            }

            function c(e) {
                return e.includes("crypto") && !m(e)
            }

            function m(e) {
                return i.some((t => e.includes(t)))
            }
        },
        816770: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogoStack: () => u
            });
            var r = n(50959),
                i = n(497754),
                a = n(186288);

            function o(e) {
                return "logoUrl" in e
            }
            var s = n(495217),
                l = n(997337);

            function u(e) {
                const {
                    size: t = "xxsmall"
                } = e, n = function(e) {
                    const t = [],
                        n = new Set,
                        r = e.slice();
                    for (; 0 !== r.length;) {
                        const e = r.shift();
                        if (!e) break;
                        const i = o(e),
                            s = i ? e.logoUrl : e.symbol;
                        if (!n.has(s) && (n.add(s), i ? t.push(e) : t.push({
                                placeholderLetter: (0, a.splitSymbolName)(e.symbol)[1][0]
                            }), 4 === t.length)) break
                    }
                    return t
                }(e.logoUrlsOrSymbols);
                return r.createElement("ul", {
                    className: i(l.stack, l[`stack--${t}`], e.className)
                }, n.map(((e, n) => r.createElement("li", {
                    key: n
                }, r.createElement(s.CircleLogo, { ...e,
                    size: t,
                    loading: "lazy"
                })))))
            }
        },
        186288: (e, t, n) => {
            "use strict";

            function r(e) {
                return e.includes(":") ? e.split(":") : ["", e]
            }
            n.d(t, {
                splitSymbolName: () => r
            })
        },
        927508: (e, t, n) => {
            "use strict";
            n.d(t, {
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
        838126: (e, t, n) => {
            "use strict";
            n.d(t, {
                monthFormatFunction: () => h,
                dateFormatFunctions: () => p,
                getDateFormatWithWeekday: () => w,
                availableDateFormats: () => f,
                defaultDateFormat: () => y
            });
            var r = n(777754),
                i = n(39654),
                a = n(831471);
            const o = {
                    1: () => r.t(null, void 0, n(795425)),
                    2: () => r.t(null, void 0, n(835050)),
                    3: () => r.t(null, void 0, n(651369)),
                    4: () => r.t(null, void 0, n(442762)),
                    5: () => r.t(null, {
                        context: "short"
                    }, n(227991)),
                    6: () => r.t(null, void 0, n(715224)),
                    7: () => r.t(null, void 0, n(6215)),
                    8: () => r.t(null, void 0, n(38465)),
                    9: () => r.t(null, void 0, n(757902)),
                    10: () => r.t(null, void 0, n(73546)),
                    11: () => r.t(null, void 0, n(671230)),
                    12: () => r.t(null, void 0, n(92203))
                },
                s = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1,
                l = (e, t) => t ? e.getFullYear() : e.getUTCFullYear(),
                u = e => e.toLocaleDateString(window.language ? (0, i.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
                    weekday: "short",
                    timeZone: "UTC"
                }),
                c = (e, t) => (0, a.numberToStringWithLeadingZero)(((e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2),
                m = (e, t) => o[s(e, t)](),
                g = (e, t) => (0, a.numberToStringWithLeadingZero)(s(e, t), 2),
                d = (e, t) => (0, a.numberToStringWithLeadingZero)(l(e, t) % 100, 2),
                _ = (e, t) => (0, a.numberToStringWithLeadingZero)(l(e, t), 4),
                h = (e, t) => m(e, t),
                p = {
                    "dd MMM 'yy": (e, t) => `${c(e,t)} ${m(e,t)} '${d(e,t)}`,
                    "MMM dd, yyyy": (e, t) => `${m(e,t)} ${c(e,t)}, ${_(e,t)}`,
                    "MMM dd": (e, t) => `${m(e,t)} ${c(e,t)}`,
                    "dd MMM": (e, t) => `${c(e,t)} ${m(e,t)}`,
                    "yyyy-MM-dd": (e, t) => `${_(e,t)}-${g(e,t)}-${c(e,t)}`,
                    "yy-MM-dd": (e, t) => `${d(e,t)}-${g(e,t)}-${c(e,t)}`,
                    "yy/MM/dd": (e, t) => `${d(e,t)}/${g(e,t)}/${c(e,t)}`,
                    "yyyy/MM/dd": (e, t) => `${_(e,t)}/${g(e,t)}/${c(e,t)}`,
                    "dd-MM-yyyy": (e, t) => `${c(e,t)}-${g(e,t)}-${_(e,t)}`,
                    "dd-MM-yy": (e, t) => `${c(e,t)}-${g(e,t)}-${d(e,t)}`,
                    "dd/MM/yy": (e, t) => `${c(e,t)}/${g(e,t)}/${d(e,t)}`,
                    "dd/MM/yyyy": (e, t) => `${c(e,t)}/${g(e,t)}/${_(e,t)}`,
                    "MM/dd/yy": (e, t) => `${g(e,t)}/${c(e,t)}/${d(e,t)}`,
                    "MM/dd/yyyy": (e, t) => `${g(e,t)}/${c(e,t)}/${_(e,t)}`
                };

            function w(e) {
                return "ja" === window.language ? (t, n) => `${p[e](t,n)} (${u(t)})` : (t, n) => `${u(t)} ${p[e](t,n)}`
            }
            const f = Object.keys(p),
                y = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
        },
        164280: (e, t, n) => {
            "use strict";
            n.d(t, {
                hourMinuteSecondFormat: () => a,
                hourMinuteNonZeroSecondFormat: () => o,
                hourMinuteSecondMilisecFormat: () => s,
                hourMinuteFormat: () => l,
                twelveHourMinuteSecondFormat: () => u,
                twelveHourMinuteNonZeroSecondFormat: () => c,
                twelveHourMinuteFormat: () => m,
                TimeFormatter: () => g
            });
            var r = n(927508),
                i = n(831471);
            const a = "%h:%m:%s",
                o = "%h:%m:%s+",
                s = "%h:%m:%s.%ss",
                l = "%h:%m",
                u = "%h:%m:%s %ampm",
                c = "%h:%m:%s+ %ampm",
                m = "%h:%m %ampm";
            class g {
                constructor(e) {
                    this._isTwelveHoursFormat = !1, this._valuesAndDelimeters = [];
                    const t = e || a,
                        n = new RegExp("%h|%m|%s\\+|%ss|%ampm|%s", "g");
                    let r = n.exec(t),
                        i = 0;
                    for (; null !== r;) {
                        const e = r[0];
                        "%ampm" === e && (this._isTwelveHoursFormat = !0);
                        const a = t.substring(i, r.index);
                        "" !== a && this._valuesAndDelimeters.push(a), this._valuesAndDelimeters.push(e), i = r.index + e.length, r = n.exec(t)
                    }
                }
                format(e) {
                    return r.customFormatters.timeFormatter ? r.customFormatters.timeFormatter.format(e) : this._formatTime(e, !1)
                }
                formatLocal(e) {
                    return r.customFormatters.timeFormatter ? r.customFormatters.timeFormatter.formatLocal ? r.customFormatters.timeFormatter.formatLocal(e) : r.customFormatters.timeFormatter.format(e) : this._formatTime(e, !0)
                }
                _formatTime(e, t) {
                    let n = t ? e.getHours() : e.getUTCHours();
                    const r = t ? e.getMinutes() : e.getUTCMinutes(),
                        a = t ? e.getSeconds() : e.getUTCSeconds(),
                        o = t ? e.getMilliseconds() : e.getUTCMilliseconds();
                    let s = "";
                    this._isTwelveHoursFormat && (s = n >= 12 ? "PM" : "AM", n %= 12, n = n || 12);
                    let l = "",
                        u = !1;
                    for (let e = this._valuesAndDelimeters.length - 1; e >= 0; e--) {
                        const t = this._valuesAndDelimeters[e];
                        let c;
                        switch (t) {
                            case "%h":
                                c = (0, i.numberToStringWithLeadingZero)(n, 2);
                                break;
                            case "%m":
                                c = (0, i.numberToStringWithLeadingZero)(r, 2);
                                break;
                            case "%s+":
                                0 !== a ? c = (0, i.numberToStringWithLeadingZero)(a, 2) : (c = "", u = !0);
                                break;
                            case "%s":
                                c = (0, i.numberToStringWithLeadingZero)(a, 2);
                                break;
                            case "%ss":
                                c = (0, i.numberToStringWithLeadingZero)(o, 3);
                                break;
                            case "%ampm":
                                c = s;
                                break;
                            default:
                                if (u) {
                                    u = !1;
                                    continue
                                }
                                c = t
                        }
                        l = c + l
                    }
                    return l
                }
            }
        },
        530162: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'
        },
        448641: e => {
            "use strict";
            e.exports = JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"ae","geoip_code":"ae","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}')
        }
    }
]);
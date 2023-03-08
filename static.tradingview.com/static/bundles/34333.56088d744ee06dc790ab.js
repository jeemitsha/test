(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34333], {
        1338: e => {
            e.exports = {
                "common-tooltip": "common-tooltip-C8z_hVli",
                "common-tooltip--hidden": "common-tooltip--hidden-C8z_hVli",
                "common-tooltip--horizontal": "common-tooltip--horizontal-C8z_hVli",
                "common-tooltip--farther": "common-tooltip--farther-C8z_hVli",
                "common-tooltip--vertical": "common-tooltip--vertical-C8z_hVli",
                "common-tooltip-farther": "common-tooltip-farther-C8z_hVli",
                "common-tooltip--direction_normal": "common-tooltip--direction_normal-C8z_hVli",
                "common-tooltip__body": "common-tooltip__body-C8z_hVli",
                "common-tooltip__button-container": "common-tooltip__button-container-C8z_hVli",
                "common-tooltip__body--no-buttons": "common-tooltip__body--no-buttons-C8z_hVli",
                "common-tooltip__button": "common-tooltip__button-C8z_hVli",
                "common-tooltip--direction_reversed": "common-tooltip--direction_reversed-C8z_hVli",
                "common-tooltip__ear-holder": "common-tooltip__ear-holder-C8z_hVli",
                "common-tooltip__ear-holder--below": "common-tooltip__ear-holder--below-C8z_hVli",
                "common-tooltip__ear-holder--above": "common-tooltip__ear-holder--above-C8z_hVli",
                "common-tooltip__ear-holder--before": "common-tooltip__ear-holder--before-C8z_hVli",
                "common-tooltip__ear-holder--after": "common-tooltip__ear-holder--after-C8z_hVli",
                "common-tooltip__body--with-hotkey": "common-tooltip__body--with-hotkey-C8z_hVli",
                "common-tooltip__body--width_wide": "common-tooltip__body--width_wide-C8z_hVli",
                "common-tooltip__body--width_narrow": "common-tooltip__body--width_narrow-C8z_hVli",
                "common-tooltip__body--no-padding": "common-tooltip__body--no-padding-C8z_hVli",
                "common-tooltip__hotkey-block": "common-tooltip__hotkey-block-C8z_hVli",
                "common-tooltip__hotkey-block--divider": "common-tooltip__hotkey-block--divider-C8z_hVli",
                "common-tooltip__hotkey-text": "common-tooltip__hotkey-text-C8z_hVli",
                "common-tooltip__hotkey-button": "common-tooltip__hotkey-button-C8z_hVli",
                "common-tooltip__plus-sign": "common-tooltip__plus-sign-C8z_hVli"
            }
        },
        499994: (e, t, o) => {
            "use strict";
            o.d(t, {
                getTooltipData: () => i,
                setTooltipData: () => s
            });
            const n = new WeakMap;

            function i(e, t) {
                const o = n.get(e);
                return o instanceof Function ? o(t) : o && o[t]
            }

            function s(e, t, o) {
                if (o instanceof Function) return void n.set(e, o);
                const i = n.get(e),
                    s = void 0 === i || i instanceof Function ? {} : i;
                s[t] = o, n.set(e, s)
            }
        },
        604286: (e, t, o) => {
            "use strict";
            o.d(t, {
                hotKeySerialize: () => i,
                hotKeyDeserialize: () => s
            });
            var n = o(809350);

            function i(e) {
                return (0, n.clean)(JSON.stringify(e))
            }

            function s(e) {
                return JSON.parse((0, n.clean)(e, !0))
            }
        },
        309103: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                hide: () => K,
                show: () => R,
                showOnElement: () => H,
                tooltipClickHandler: () => j,
                updateTooltipText: () => U
            });
            var n = o(778785);
            let i = 0,
                s = 0,
                a = 0;

            function r() {
                clearTimeout(i), clearTimeout(s), clearTimeout(a)
            }

            function c(e, t) {
                i = setTimeout(e, t)
            }
            const l = "tooltip-root-element";
            let d;

            function u() {
                const e = document.getElementById(l);
                e ? d = e : (d = document.createElement("div"), d.id = l, document.body.appendChild(d))
            }

            function m() {
                d && (d.innerHTML = "")
            }
            "interactive" === document.readyState ? u() : document.addEventListener("DOMContentLoaded", u);
            var h = o(650151);
            const w = {
                    default: "",
                    white: "theme-white",
                    "round-shadow": "theme-round-shadow"
                },
                g = Object.keys(w);
            var p = o(499994),
                f = o(604286),
                _ = o(878134),
                v = o(768038),
                y = (o(984919), o(587080)),
                b = o(43329),
                C = o(638456),
                k = o(1338);

            function T(e) {
                const t = e.hasAttribute("data-tooltip") ? e.getAttribute("data-tooltip") : e.getAttribute("title");
                return t && ((0, p.setTooltipData)(e, "text", t), e.removeAttribute("title")), (0, p.getTooltipData)(e, "text") || ""
            }

            function E(e) {
                const t = N.cloneNode(!0),
                    o = $(t),
                    {
                        content: n
                    } = e;
                switch (n.type) {
                    case "element":
                        o.innerHTML = "", o.appendChild(n.data);
                        break;
                    case "html":
                        o.innerHTML = n.data;
                        break;
                    case "text":
                        if (e.hotkey) {
                            const e = O.cloneNode(!0);
                            e.innerText = n.data, o.appendChild(e)
                        } else o.innerText = n.data
                }
                if (e.hotkey) {
                    const t = "none" !== n.type,
                        i = A.cloneNode(!0),
                        s = (0, f.hotKeyDeserialize)(e.hotkey),
                        a = s.keys.map((e => `<span class="${k["common-tooltip__hotkey-button"]}">${e}</span>`));
                    i.innerHTML = function(e, t) {
                        const o = /{\d}|{hotkey_\d}/gi;
                        return e.replace(o, (e => {
                            const o = Number(e.match(/\d/));
                            return t[o]
                        }))
                    }(s.text, a).replace(/\s\+\s/g, `<span class="${k["common-tooltip__plus-sign"]}">+</span>`), o.classList.add(k["common-tooltip__body--with-hotkey"]), t && i.classList.add(k["common-tooltip__hotkey-block--divider"]), o.appendChild(i)
                }
                return t.addEventListener("contextmenu", y.preventDefault), t
            }

            function L(e, t) {
                const o = t.rect;
                if (!o) return;
                ! function(e, t) {
                    const o = g.includes(t) ? w[t] : "";
                    e.classList.remove(...g.map((e => w[e])).filter((e => !!e))), o && !e.classList.contains(o) && e.classList.add(o)
                }(e, t.colorTheme || "default"), t.addClass && e.classList.add(t.addClass);
                const n = $(e),
                    i = e.querySelector(`.${k["common-tooltip__button-container"]}`);
                n.classList.toggle(k["common-tooltip__body--width_wide"], Boolean(t.wide)), n.classList.toggle(k["common-tooltip__body--no-padding"], Boolean(t.noPadding)), n.classList.toggle(k["common-tooltip__body--width_narrow"], Boolean(t.narrow)), n.classList.toggle(k["common-tooltip__body--no-buttons"], !0), n.style.left = V(0), n.style.width = V(n.clientWidth + (Boolean(t.noPadding) ? 0 : 2));
                const s = document.body.clientWidth,
                    a = C.CheckMobile.iOS() || (0, C.supportTouch)() && (0, C.isMac)() ? window.innerHeight : document.body.clientHeight,
                    r = t.vertical,
                    c = t.extendMargin || r && o.w < 20 || !r && o.h < 20;
                e.classList.toggle(k["common-tooltip--farther"], c), e.classList.toggle(k["common-tooltip--vertical"], r), e.classList.toggle(k["common-tooltip--horizontal"], !r);
                const l = function(e) {
                        return e.querySelector(`.${k["common-tooltip__ear-holder"]}`)
                    }(e),
                    d = e.offsetHeight;
                if (r) {
                    const r = 10,
                        c = a - 10,
                        u = 12,
                        m = r + u,
                        h = c - u,
                        w = (0, b.clamp)(o.y + o.h / 2, m, h) - d / 2,
                        g = w + d;
                    e.style.left = V(o.x + o.w), e.style.top = V(w), w < r ? n.style.top = i.style.top = V(r - w) : g > c && (n.style.top = i.style.top = V(c - g));
                    const {
                        right: p
                    } = (e.querySelector(":last-child") || n).getBoundingClientRect(), f = p + 10 > s;
                    e.classList.toggle(k["common-tooltip--direction_reversed"], f), e.classList.toggle(k["common-tooltip--direction_normal"], !f);
                    let _ = f ? "after" : "before";
                    (0, v.isRtl)() ? (_ = t.otr ? "after" : _, _ = t.otl ? "before" : _) : (_ = t.otr ? "before" : _, _ = t.otl ? "after" : _), l.classList.toggle(k["common-tooltip__ear-holder--before"], "before" === _),
                        l.classList.toggle(k["common-tooltip__ear-holder--after"], "after" === _), "after" === _ && (e.style.left = "auto", e.style.right = V(s - o.x))
                } else {
                    const r = o.x - (n.offsetWidth - o.w) / 2,
                        c = s - 10 - e.offsetWidth,
                        u = Math.max(10, Math.min(r, c));
                    e.style.left = V(u);
                    const m = c < r;
                    e.classList.toggle(k["common-tooltip--direction_reversed"], m), e.classList.toggle(k["common-tooltip--direction_normal"], !m);
                    const h = function(e, t, o, n) {
                        if (e.above) return M(t, n) ? "above" : "below";
                        if (e.below) return function(e, t, o) {
                            return o.y + o.h + t + 10 < e
                        }(t, o, n) ? "below" : "above";
                        return M(o, n) ? "above" : "below"
                    }(t, a, d, o);
                    "above" === h ? e.style.bottom = V(a - o.y) : e.style.top = V(o.y + o.h), l.classList.add("above" === h ? k["common-tooltip__ear-holder--above"] : k["common-tooltip__ear-holder--below"]);
                    const {
                        left: w
                    } = n.getBoundingClientRect();
                    let g = Math.trunc(o.x + o.w / 2 - (w + n.clientWidth / 2));
                    e.style.left = V(u + g), e.style.width = V(n.clientWidth + i.clientWidth), g = m ? Math.max(0, g) : Math.min(0, g), i.style.left = V(-g), n.style.left = V(-g)
                }
            }

            function S(e) {
                e.classList.toggle(k["common-tooltip--hidden"], !0)
            }

            function V(e) {
                return `${Math.floor(e)}px`
            }
            const D = `\n\t<div id="common-tooltip-wrapper" class="${k["common-tooltip"]}">\n\t\t<div class="${k["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${k["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${k["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
                P = `\n\t<div class="${k["common-tooltip__hotkey-block"]}"></div>\n`,
                x = `\n\t<div class="${k["common-tooltip__hotkey-text"]}"></div>\n`,
                N = (0, _.parseHtmlElement)(D),
                A = (0, _.parseHtmlElement)(P),
                O = (0, _.parseHtmlElement)(x);

            function $(e) {
                return e.querySelector(`.${k["common-tooltip__body"]}`)
            }

            function M(e, t) {
                return 10 + e < t.y
            }
            var z = o(799786);
            let W = !1,
                I = null,
                B = null;
            n.mobiletouch || document.addEventListener("mouseover", (function(e) {
                var t;
                if (null === (t = e.sourceCapabilities) || void 0 === t ? void 0 : t.firesTouchEvents) return;
                const o = e.target,
                    n = e.currentTarget,
                    i = function(e, t, o) {
                        const n = [];
                        for (; e && e !== t;) e.classList && e.classList.contains(o) && n.push(e), e = e.parentElement || G(e.parentNode);
                        return n
                    }(o, n, "apply-common-tooltip"),
                    s = () => {
                        B && (B.destroy(), B = null)
                    };
                for (const t of i) {
                    if ("buttons" in e) {
                        if (1 & e.buttons) continue
                    } else if (1 === e.which) continue;
                    const o = () => H(t);
                    if (o()) {
                        const e = e => {
                                e.target instanceof Element && e.target.contains(t) && n(null, !0)
                            },
                            n = (i, a = !1) => {
                                t.removeEventListener("common-tooltip-update", o), t.removeEventListener("mouseleave", n), t.removeEventListener("mousedown", n), document.removeEventListener("scroll", e, {
                                    capture: !0
                                }), s(), K(a)
                            };
                        t.addEventListener("common-tooltip-update", o), t.addEventListener("mouseleave", n), t.addEventListener("mousedown", n), document.addEventListener("scroll", e, {
                            capture: !0
                        }), null === B && (B = (0, z.createGroup)({
                            desc: "Tooltip"
                        }), B.add({
                            desc: "Hide",
                            hotkey: 27,
                            handler: n
                        }));
                        break
                    }
                }
            }), !0);
            const F = new MutationObserver((() => {
                    if (I && I.options.target) {
                        let e;
                        e = "isConnected" in I.options.target ? I.options.target.isConnected : document.body.contains(I.options.target), e || K()
                    }
                })),
                H = (e, t = {}) => {
                    const {
                        content: o,
                        ...n
                    } = Y(t), i = function(e) {
                        const t = T(e),
                            o = e.getBoundingClientRect(),
                            n = {
                                h: o.height,
                                w: o.width,
                                x: o.left,
                                y: o.top
                            },
                            i = e.getAttribute("data-color-theme") || "",
                            s = e.classList.contains("common-tooltip-html"),
                            a = parseInt(e.getAttribute("data-tooltip-delay") || ""),
                            r = parseInt(e.getAttribute("data-tooltip-debounce") || "");
                        let c = {
                            type: "none"
                        };
                        return t && (c = {
                            type: s ? "html" : "text",
                            data: t
                        }), {
                            above: e.classList.contains("common-tooltip-above"),
                            below: e.classList.contains("common-tooltip-below"),
                            otl: e.classList.contains("common-tooltip-otl"),
                            otr: e.classList.contains("common-tooltip-otr"),
                            vertical: e.classList.contains("common-tooltip-vertical"),
                            hotkey: e.getAttribute("data-tooltip-hotkey"),
                            narrow: e.classList.contains("common-tooltip-narrow"),
                            wide: e.classList.contains("common-tooltip-wide"),
                            colorTheme: i,
                            tooltipDelay: a,
                            tooltipDebounce: r,
                            rect: n,
                            content: c,
                            target: e
                        }
                    }(e), s = Object.assign(i, n);
                    return "none" !== o.type && (s.content = o), !("none" === s.content.type && !s.hotkey) && (s.target = e, R(s), !0)
                },
                R = e => {
                    const t = Y(e),
                        o = E(t);
                    var n;
                    if (I = {
                            options: t,
                            element: o
                        }, n = o, m(), d && d.appendChild(n), r(), !W) return S(o), void c((() => J(o)), function(e) {
                        return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                    }(t));
                    const {
                        tooltipDebounce: i
                    } = e;
                    "number" != typeof i || isNaN(i) ? J(o) : c((() => J(o)), i)
                },
                U = e => T(e);

            function j(e) {
                n.mobiletouch && (H(e.currentTarget, {
                    tooltipDelay: 0
                }), document.addEventListener("scroll", q), document.addEventListener("touchstart", q))
            }

            function q() {
                document.removeEventListener("scroll", q), document.removeEventListener("touchstart", q), K()
            }

            function X() {
                m(), W = !1, I = null
            }
            const K = e => {
                if (r(), F.disconnect(), !I) return;
                if (!e && !W) return;
                const {
                    element: t,
                    options: o
                } = I, n = () => {
                    t.removeEventListener("mouseleave", n), S(t), e ? X() : a = setTimeout((() => {
                        X()
                    }), 250)
                };
                var i, c;
                o.tooltipHideDelay ? (i = () => {
                    t.querySelector(":hover") ? t.addEventListener("mouseleave", n) : n()
                }, c = o.tooltipHideDelay, s = setTimeout(i, c)) : n()
            };

            function J(e) {
                const {
                    options: t
                } = (0, h.ensureNotNull)(I);
                if (L(e, t), function(e) {
                        e.classList.toggle(k["common-tooltip--hidden"], !1)
                    }(e), F.observe(document, {
                        childList: !0,
                        subtree: !0
                    }), W = !0, t.forceHideOnMove) {
                    const e = () => {
                        document.removeEventListener("mousemove", e), K()
                    };
                    document.addEventListener("mousemove", e)
                }
            }

            function G(e) {
                return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
            }

            function Y(e) {
                if (function(e) {
                        return "content" in e
                    }(e)) return e;
                const {
                    inner: t,
                    html: o,
                    text: n,
                    ...i
                } = e;
                let s = {
                    type: "none"
                };
                return t && (s = {
                    type: "element",
                    data: t
                }), n && (s = {
                    type: o ? "html" : "text",
                    data: n
                }), {
                    content: s,
                    ...i
                }
            }
        },
        750532: (e, t, o) => {
            "use strict";
            var n = o(309103);

            function i(e, t = "x") {
                let o = !1;
                return "x" !== t && "both" !== t || (o = o || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (o = o || e.offsetHeight < e.scrollHeight), o
            }

            function s(e, t = "x") {
                for (const o of Array.from(e.children))
                    if (o instanceof HTMLElement && (i(o, t) || s(o, t))) return !0;
                return !1
            }(0, o(10571).whenDocumentReady)((() => {
                document.addEventListener("mouseenter", (e => {
                    const t = e.target;
                    if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                        let e = "x";
                        if (t.matches(".apply-overflow-tooltip--direction_both") ? e = "both" : t.matches(".apply-overflow-tooltip--direction_y") && (e = "y"), t.matches(".apply-overflow-tooltip--check-children-recursively")) {
                            if (!s(t, e)) return
                        } else if (t.matches(".apply-overflow-tooltip--check-children")) {
                            let o = !1;
                            const n = t.children;
                            for (let t = 0; t < n.length; t++) {
                                const s = n[t];
                                if (s instanceof HTMLElement && i(s, e)) {
                                    o = !0;
                                    break
                                }
                            }
                            if (!o) return
                        } else if (!i(t, e)) return;
                        let o = "";
                        o = t.matches && t.matches(".apply-overflow-tooltip--allow-text") ? t.textContent || "" : Array.from(t.childNodes).reduce(((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e)), []).join("").trim(), (0, n.showOnElement)(t, {
                            text: o
                        });
                        const a = () => {
                            (0, n.hide)(), ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, a)))
                        };
                        ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, a)))
                    }
                }), !0)
            }))
        },
        641261: (e, t, o) => {
            "use strict";
            o.d(t, {
                GTagEvent: () => u,
                trackGTagAdsEvent: () => h
            });
            var n = o(251954),
                i = o(261030),
                s = o(314802),
                a = o(638456),
                r = o(588948),
                c = o(691805),
                l = o(719718);
            let d = !1;
            var u;

            function m() {
                d || !(0, l.marketingAnalyticsEnabled)() || (0, s.isOnMobileAppPage)("any") || a.CheckMobile.iOS() || ((0, r.updateInitData)(), (0, r.getInitData)().gadwId && (d = !0, (0, c.appendScript)(`https://www.googletagmanager.com/gtag/js?id=${(0,r.getInitData)().gadwId}`), window.dataLayer = window.dataLayer || [], window.gtag = function() {
                    window.dataLayer.push(arguments)
                }, window.gtag("js", new Date), window.gtag("consent", "default", {
                    ad_storage: (0, i.getCookieSetting)(i.CookieSettings.Advertising) ? "granted" : "denied"
                }), window.gtag("config", (0, r.getInitData)().gadwId), n.subscribe(i.cookieSettingsChangeEvent, ((e, t) => {
                    e === i.CookieSettings.Advertising && window.gtag("consent", "update", {
                        ad_storage: t ? "granted" : "denied"
                    })
                }), null)))
            }

            function h(e, t = {}) {
                if (m(), !d) return;
                const o = (0, r.getInitData)().gadwId;
                window.gtag("event", "conversion", {
                    send_to: `${o}/${e}`,
                    user_id: window.user.id,
                    ...t
                })
            }! function(e) {
                e.PageView = "kwnRCP6AwqsBEOTvvuED", e.TrialSignUp = "6_gCCOyejsACEK3sq6gB", e.RegistrationCompleted = "JzYhCIOr578CEK3sq6gB", e.PaidPlanAcquired = "ca8iCNrG578CEK3sq6gB"
            }(u || (u = {}))
        },
        62374: (e, t, o) => {
            "use strict";
            o.d(t, {
                evercookie: () => s
            });
            o(563245);
            var n, i = o(66974);
            ! function(e) {
                let t = null;
                e.getInstance = function() {
                    return null === t && (t = new window.evercookie({
                        domain: (0, i.isProd)() ? ".tradingview.com" : location.hostname,
                        lso: !1
                    })), t
                }
            }(n || (n = {}));
            const s = n.getInstance()
        },
        132317: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackActionFollow: () => i
            });
            var n = o(776734);

            function i(e, t, o) {
                const i = o.authorId ? o.authorId.toString() : "",
                    s = o.symbol ? o.symbol : "",
                    a = o.symbolType ? o.symbolType : "";
                (0, n.getTracker)().then((o => {
                    o && o.trackFollow(e, t, i, s, a)
                }))
            }
        },
        226722: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                TVXWindowEvents: () => a,
                getScopedTVXWindowEvents: () => r
            });
            o(984919);
            var n = o(272001),
                i = o(49437);
            const s = (0, n.getLogger)("XWindowEvents");
            var a;

            function r(e) {
                return {
                    on: (t, o) => a.on(`${e}.${t}`, o),
                    off: (t, o) => a.off(`${e}.${t}`, o),
                    emit: (t, o) => a.emit(`${e}.${t}`, o)
                }
            }! function(e) {
                const t = "tvxwevents.",
                    o = {};
                let n;
                window.BroadcastChannel ? (n = new BroadcastChannel("tvxwevents"), n.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: n
                        }
                    } = e;
                    o[t] && o[t].forEach((e => {
                        e(n)
                    }))
                })), function() {
                    const e = [],
                        o = performance.now();
                    for (let o = 0; o < i.TVLocalStorage.length; o++) {
                        const n = i.TVLocalStorage.key(o);
                        n.startsWith(t) && e.push(n)
                    }
                    const n = i.TVLocalStorage.length;
                    for (const t of e) i.TVLocalStorage.removeItem(t);
                    const a = performance.now() - o;
                    s.logNormal(`Total keys amount in local storage on operation start: ${n}`), s.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), s.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), s.logNormal(`Removing keys from local storage took ${a} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: n,
                        key: s
                    } = e;
                    if (null === n || !s || !s.startsWith(t)) return;
                    const a = s.substring(t.length);
                    o[a] && o[a].forEach((t => {
                        t(e.newValue)
                    }));
                    i.TVLocalStorage.removeItem(s)
                })), e.on = function(e, t) {
                    o[e] || (o[e] = []), o[e].push(t)
                }, e.off = function(e, t) {
                    if (!o[e]) return;
                    const n = o[e].indexOf(t); - 1 !== n && (1 === o[e].length ? delete o[e] : o[e].splice(n, 1))
                }, e.emit = function(e, o = Date.now()) {
                    try {
                        n ? n.postMessage({
                            event: e,
                            value: o
                        }) : i.TVLocalStorage.setItem(t + e, o.toString())
                    } catch (e) {
                        s.logError(e.message)
                    }
                }
            }(a || (a = {}))
        },
        809350: (e, t, o) => {
            e = o.nmd(e), TradingView.cleanButAmpersand = function(e, t) {
                var o = t ? ["&amp;"] : ["&"];
                return TradingView.clean(e, t, o)
            }, TradingView.strip_tags = function(e) {
                return e && e.replace ? e.replace(/(<([^>]+)>)/gi, "") : e
            }, TradingView.encodeSpread = function(e) {
                return encodeURIComponent(e)
            }, TradingView.clean = function(e, t, o) {
                var n = [
                        ["&", "&amp;"],
                        ["<", "&lt;"],
                        [">", "&gt;"],
                        ['"', "&quot;"],
                        ["'", "&#039;"],
                        ["'", "&#39;"]
                    ],
                    i = e;
                if (!e || !e.replace) return i;
                for (var s = 0; s < n.length; s++) {
                    var a = n[s][0],
                        r = n[s][1];
                    o && o.indexOf && -1 !== o.indexOf(t ? r : a) || (i = t ? i.replace(new RegExp(r, "g"), a) : i.replace(new RegExp(a, "g"), r))
                }
                return i
            }, e && e.exports && (e.exports = {
                clean: TradingView.clean,
                cleanButAmpersand: TradingView.cleanButAmpersand,
                stripTags: TradingView.strip_tags
            })
        },
        934333: (e, t, o) => {
            "use strict";
            o.r(t);
            var n = o(226722),
                i = o(345848),
                s = o(890740),
                a = o(985919),
                r = (o(563245), o(777491)),
                c = o(66974),
                l = o(49437),
                d = o(272001);
            const u = (0, d.getLogger)("Common.Evercookie");
            var m = o(62374);
            const h = (0, d.getLogger)("Common.Evercookie"),
                w = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            class g {
                constructor() {
                    this._cookieName = "tv_ecuid", this._env = null, this.check = () => {
                        if (this._isEcNotAvailable() || l.TVLocalStorage.getItem("_tv_ec_ignore_username") === window.user.username) return;
                        const e = window.user.id;
                        this._getEcUids().catch((e => {
                            h.logWarn(`Error thrown inside getEcUids(). Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                        })).then((t => {
                            if (void 0 === t) return void h.logWarn(`getEcUids() returned no data. Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})`);
                            let n = t.localEcUid;
                            const i = t.remoteEcUids;
                            n && w.test(n) || (n = (0, r.guid)(), m.evercookie.set(this._cookieName, n));
                            const a = t => {
                                t.subscription_canceled && Promise.all([o.e(18619), o.e(86256), o.e(13249), o.e(96246), o.e(15418), o.e(45113), o.e(75514), o.e(18932)]).then(o.bind(o, 390034)).then((e => e.createTrialCanceledDialog())), e === window.user.id && t.is_suspicious ? l.TVLocalStorage.setItem("is_suspicious", "1") : l.TVLocalStorage.removeItem("is_suspicious")
                            };
                            i && 0 !== i.length && -1 !== i.indexOf(n) || e !== window.user.id || function(e) {
                                const t = new FormData;
                                return t.append("ecuid", e), (0, s.fetch)("/accounts/set-ecuid/", {
                                    body: t,
                                    credentials: "include",
                                    method: "POST"
                                }).then((e => {
                                    if (e.ok) return e.json().catch((e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/set-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    }));
                                    throw new Error("Unable to set remote ecuids. Response was not OK")
                                }))
                            }(n).then(a)
                        })).catch((e => {
                            h.logError(e.message + ` User: ${window.user.username} (${window.user.id})`)
                        }))
                    }, this._isEcNotAvailable() || (this._env = (0, c.environment)(), (0, c.isDebug)() && (this._cookieName += "_" + this._env))
                }
                _isEcNotAvailable() {
                    return TradingView.onWidget && TradingView.onWidget() || !window.user
                }
                _getLocalEcUid() {
                    return new Promise((e => {
                        m.evercookie.get(this._cookieName, (t => {
                            e(t)
                        }))
                    }))
                }
                _getEcUids() {
                    return new Promise(((e, t) => {
                        let o;
                        this._getLocalEcUid().then((e => (o = e, function(e) {
                            return new Promise(((t, o) => {
                                const n = new FormData;
                                e && n.append("local_ecuid", e), (0, s.fetch)("/accounts/get-ecuid/", {
                                    body: n,
                                    credentials: "include",
                                    method: "POST"
                                }).then((e => {
                                    if (e.ok) return e.json().catch((e => {
                                        u.logWarn(`Error in reponse.json() of /accounts/get-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)
                                    }));
                                    throw new Error("Unable to get remote ecuids. Response was not OK")
                                })).then((e => {
                                    t(e)
                                })).catch((e => {
                                    o(e)
                                }))
                            }))
                        }(e)))).then((t => {
                            if (void 0 === t) throw new Error(`getRemoteEcUids() returned no response. User: ${window.user.username} (${window.user.id})`);
                            e({
                                localEcUid: o,
                                remoteEcUids: t.ecuids
                            })
                        })).catch((e => {
                            t(e)
                        }))
                    }))
                }
            }
            o(823127);
            var p = o(777754),
                f = o(132317),
                _ = o(233313),
                v = o(218333),
                y = o(125226),
                b = o(704765),
                C = o(823127);
            C("body").on("click", ".js-follow-user", (function(e) {
                const t = C(e.currentTarget),
                    n = t.data("id"),
                    i = t.is(".js-follow-user--followed") ? "Unfollow" : "Follow",
                    s = {
                        authorId: n
                    };
                window.runOrSignIn((async () => {
                    if (!t.is(".self")) {
                        const e = t.is(".js-follow-user--followed") ? 0 : 1;
                        (await Promise.all([o.e(46450), o.e(57853)]).then(o.bind(o, 42941))).protectedFetch("/social/follow-the-user/", {
                            follow: e,
                            targetId: n
                        }, "follow").then((e => {
                            "max_followings_exceed" !== e.error_code ? e.error ? (0, v.showNoticeDialog)({
                                content: e.error,
                                title: e.errorTitle || p.t(null, void 0, o(482751))
                            }) : (C(".js-follow-user-" + n).toggleClass("js-follow-user--followed").toggleClass("i-checked"), (0, f.trackActionFollow)("User", i, s)) : Promise.all([o.e(36037), o.e(43082), o.e(36956), o.e(4100), o.e(50251), o.e(85783), o.e(25977), o.e(39694), o.e(34834)]).then(o.bind(o, 115315)).then((({
                                createDialog: e
                            }) => {
                                const t = e({
                                    type: "modal",
                                    closeOnEsc: !1,
                                    closeOnOutsideClick: !1,
                                    closeButton: !1,
                                    width: 546,
                                    contentWrapTemplate: '\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__section tv-dialog__section--no-border">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-text"></div>\n\t\t\t\t\t\t\t\t\t\t</div>',
                                    content: `\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header-logo">${b}</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="tv-dialog__header-title">${p.t(null,void 0,o(872742))}</h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class="tv-text__font tv-text__font--size_semilarge">\n\t\t\t\t\t\t\t\t\t\t\t\t${p.t(null,void 0,o(327819))}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>`,
                                    actions: [{
                                        name: "goToProfile",
                                        type: "primary",
                                        text: p.t(null, void 0, o(47043)),
                                        key: 13
                                    }, {
                                        addClass: "tv-button--no-padding i-float_left",
                                        name: "cancel",
                                        type: "link",
                                        text: p.t(null, void 0, o(874448)),
                                        method: "close"
                                    }]
                                });
                                t.on("action:goToProfile", (e => {
                                    window.location.replace((0, _.getUserProfilePath)(window.user, {
                                        page: _.ProfilePages.FollowingPeople
                                    })), e.destroy()
                                })), t.open()
                            }))
                        })).catch((e => {
                            (0, v.showNoticeDialog)({
                                content: e.message,
                                title: p.t(null, void 0, o(900850))
                            })
                        }))
                    }
                }), {
                    source: "Follow user",
                    verifiedPhoneRequired: !(0, y.isFeatureEnabled)("disable_phone_verification_sms")
                })
            }));
            var k = o(187084);
            document.addEventListener("DOMContentLoaded", (() => {
                document.addEventListener("click", (e => {
                    const t = e.target.closest(".js-profile-message");
                    t instanceof HTMLElement && (e.preventDefault(), function(e) {
                        const t = Number(e.dataset.id),
                            o = e.dataset.username;
                        window.runOrSignIn((() => (0, k.openPMDialog)(t, o)), {
                            source: "Private message from broker popup",
                            verifiedPhoneRequired: !0
                        })
                    }(t))
                }))
            }));
            var T = o(963644),
                E = o(638456),
                L = o(314802),
                S = (o(750532), o(869403)),
                V = o.n(S),
                D = o(120149),
                P = o(10571);
            o(823127)(document).ajaxSend(((e, t, o) => {
                o.crossDomain && !o.forceLanguageHeader || (window.locale ? t.setRequestHeader("X-Language", window.locale) : console.warn("window.locale is not defined"))
            }));
            var x = o(514262);
            var N = o(115127),
                A = o(641261),
                O = o(665343);
            let $, M;

            function z() {
                if (window.initData.lfs) {
                    const e = document.getElementsByClassName("js-admin-warning")[0];
                    document.body.removeChild(e)
                }
                let e = !0;
                [/^\/chart\//, /^\/share-your-love\//].forEach((t => {
                    t.test(window.location.pathname) && (e = !1)
                })), e && window.location.reload()
            }

            function W(e, t) {
                window.TVDialogs && window.TVDialogs.signModal && window.TVDialogs.signModal.close(), window.user = (0, D.deepExtend)({}, e), window.TradingView.changeLoginState(!0), "function" == typeof t && window.TVDialogs && window.TVDialogs.signModal ? window.TVDialogs.signModal.on("signinSuccess", (() => {
                    t()
                })) : "function" == typeof t && t()
            }

            function I(e) {
                window.iframeAuthWidget && !1 === window.user.profile_data_filled && (window.iframeAuthWidget.preventClose = !0);
                const t = window.user.available_offers || {}; {
                    const e = document.documentElement;
                    e.classList.toggle("is-authenticated", window.is_authenticated), e.classList.toggle("is-not-authenticated", !window.is_authenticated)
                }
                window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (e && !1 !== window.user.profile_data_filled || void 0 === M || M.check(), e || (Promise.all([o.e(75514), o.e(19158)]).then(o.bind(o, 444139)).then((e => e.offerButtonLoginStateChangeInit())), (0, E.onGoPro)() && window.location.reload()), !1 === window.user.profile_data_filled && ((0,
                    E.checkPageType)("mobile") || (0, L.isOnMobileAppPage)("any") || (0, P.whenDocumentReady)((() => {
                    (0, T.showSignModal)({
                        mode: "create-account",
                        noCloseButton: !!window.user.social_registration,
                        dontCloseOnEsc: !!window.user.social_registration,
                        nameFields: !window.user.social_registration,
                        noUsernameField: !window.user.social_registration
                    }).then((e => {
                        window.iframeAuthWidget && (window.iframeAuthWidget.preventClose = !1, e.on("destroy", (() => {
                            window.iframeAuthWidget.postClose()
                        })))
                    })), window.user.social_registration ? (o.e(22947).then(o.bind(o, 113452)).then((({
                        default: e
                    }) => {
                        e("Social")
                    })), (0, A.trackGTagAdsEvent)(A.GTagEvent.RegistrationCompleted), (0, O.trackTwitterEvent)(O.TwitterEvent.RegistrationCompleted), delete window.user.social_registration) : n.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                        is_authenticated: window.is_authenticated,
                        user: window.user
                    }))
                }), !0), (0, i.trackEvent)("Conversion", "First login"), delete window.user.profile_data_filled), window.TradingView.setTrialAvailiable(void 0 !== t[a.OFFERS.trial])) : (Object.keys(t).forEach((e => {
                    const o = e;
                    t[o].available_for_anons || delete t[o]
                })), window.user = {
                    username: "Guest",
                    following: "0",
                    followers: "0",
                    ignore_list: [],
                    available_offers: t
                }, l.TVLocalStorage.removeItem("trial_availiable"))
            }
            $ = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new(V()), $.subscribe(null, I), n.TVXWindowEvents.on("loginStateChange", (e => {
                const t = JSON.parse(e);
                window.user = t.user, window.is_authenticated = !!t.is_authenticated, $.fire()
            })), n.TVXWindowEvents.on("signOut", (() => {
                z()
            })), (() => {
                const e = "user-obj-changed",
                    t = {};
                window.crossTabSyncUserAttr = t => {
                    const o = {};
                    t instanceof Array ? t.forEach((e => {
                        o[e] = window.user[e]
                    })) : o[t] = window.user[t], n.TVXWindowEvents.emit(e, JSON.stringify(o))
                }, n.TVXWindowEvents.on(e, (e => {
                    const o = JSON.parse(e);
                    let n;
                    for (n in o)
                        if (o.hasOwnProperty(n)) {
                            window.user[n] = o[n];
                            (t[n] || []).forEach((e => {
                                e.fire(o[n])
                            }))
                        }
                }))
            })(), window.TradingView.changeLoginState = e => {
                window.is_authenticated = !!e, n.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
                    is_authenticated: window.is_authenticated,
                    user: window.user
                })), $.fire()
            }, window.loginUser = W, window.addEventListener("storage", (e => {
                "login_user" === e.key && null !== e.newValue && W(JSON.parse(e.newValue))
            })), window.TradingView.signOut = () => {
                const e = { ...window.user
                };
                (0, s.fetch)("/accounts/logout/", {
                    method: "POST",
                    headers: {
                        accept: "html"
                    },
                    credentials: "same-origin"
                }).then((() => {
                    window.TradingView.changeLoginState(!1), n.TVXWindowEvents.emit("signOut"), z()
                })).catch((() => {
                    window.user = e, window.TradingView.changeLoginState(!0)
                }))
            }, M = new g, window.loginRequiredDelegate = new(V()), window.runOrSignIn = (e, t) => {
                t || (t = {});
                const o = [];
                if (t.paidAccountCheck && o.push((() => (0, N.paidAccountCheck)({
                        successButtonText: t.paidAccountSuccessButtonText
                    }))), t.verifiedPhoneRequired) {
                    const e = () => Promise.resolve((0, x.whenVerified)({
                        showDialog: !0,
                        source: t.source,
                        doNotCheckSuspicious: t.doNotCheckSuspicious,
                        doNotCheckSocialActivity: t.doNotCheckSocialActivity,
                        customPhoneCheck: t.customPhoneCheck,
                        doNotShowConfirmation: t.doNotShowConfirmation,
                        isSuspiciousCountry: t.isSuspiciousCountry
                    }));
                    o.push(e)
                }
                window.is_authenticated ? o.reduce(((e, t) => e.then(t)), Promise.resolve()).then(e).catch((() => {})) : (0, T.showSignModal)({
                    source: t.source,
                    sourceMeta: t.sourceMeta,
                    feature: t.feature,
                    mode: t.mode,
                    signinSuccess: e,
                    startTrial: t.startTrial
                })
            }, window.onLoginStateChange = I, window.TradingView.setTrialAvailiable = e => {
                l.TVLocalStorage.setItem("trial_availiable", e ? "1" : "0")
            }, window.TradingView.notificationsChanged = new(V())
        },
        985919: (e, t, o) => {
            "use strict";
            o.d(t, {
                OFFERS: () => n,
                OfferKind: () => i,
                LastChanceType: () => s
            });
            const n = {
                    trial: "trial",
                    early_access: "early_access",
                    black_friday: "black_friday",
                    cyber_monday: "cyber_monday",
                    custom_discount: "custom_discount",
                    longer_cycle: "longer_cycle",
                    upgrade: "upgrade",
                    extend: "extend",
                    last_chance: "last_chance",
                    one_usd: "one_usd",
                    three_months: "three_months",
                    six_months: "six_months"
                },
                i = {
                    early_access: "early_access",
                    black_friday: "black_friday",
                    last_chance: "last_chance",
                    one_usd: "1 usd offer",
                    three_months: "3 months offer",
                    six_months: "six_months",
                    custom_discount: "custom_discount"
                };
            var s;
            ! function(e) {
                e.TwoWeeks = "LastChance_2w", e.TwoDays = "LastChance_2d", e.Hours = "LastChance_24h"
            }(s || (s = {}))
        },
        218333: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                createNoticeDialog: () => i,
                showNoticeDialog: () => s
            });
            var n = o(777754);
            async function i(e) {
                return (await Promise.all([o.e(36037), o.e(43082), o.e(36956), o.e(4100), o.e(50251), o.e(85783), o.e(25977), o.e(39694), o.e(34834)]).then(o.bind(o, 115315))).createDialog({
                    width: 400,
                    destroyOnClose: !0,
                    title: n.t(null, void 0, o(300963)),
                    content: n.t(null, void 0, o(914031)),
                    contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',
                    actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                    actions: [{
                        name: "ok",
                        type: "primary",
                        text: n.t(null, void 0, o(468988)),
                        method: "close",
                        key: [13, 32]
                    }],
                    ...e
                })
            }

            function s(e) {
                i(e).then((e => e.open()))
            }
        },
        187084: (e, t, o) => {
            "use strict";

            function n() {
                return Promise.all([o.e(20146), o.e(65851), o.e(78707), o.e(96972), o.e(75398), o.e(36037), o.e(43082), o.e(36720), o.e(75667), o.e(37908), o.e(36956), o.e(4100), o.e(50251), o.e(85783), o.e(97676), o.e(26024), o.e(78672), o.e(9725), o.e(13871), o.e(27488), o.e(99039), o.e(38184), o.e(69893), o.e(16712), o.e(75514), o.e(25977), o.e(24951), o.e(20651), o.e(32036), o.e(67804), o.e(83912), o.e(79665), o.e(98065), o.e(5952), o.e(20321), o.e(24025)]).then(o.t.bind(o, 1027, 19))
            }

            function i(e, t, o) {
                n().then((n => n.noteForAuthor(e, t, o)))
            }

            function s(e, t, o) {
                n().then((n => n.openPMDialog(e, t, o)))
            }

            function a() {
                n().then((e => e.newPrivateChatDialog()))
            }
            o.d(t, {
                noteForAuthor: () => i,
                openPMDialog: () => s,
                newPrivateChatDialog: () => a
            })
        },
        963644: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                showSignModal: () => i,
                isSignModalOpen: () => s
            });
            let n = () => !1;
            async function i(e) {
                if (window.TVD && window.TVD.signIn) return window.TVD.signIn(e); {
                    const t = await Promise.all([o.e(76353), o.e(6095), o.e(36037), o.e(49276), o.e(36956), o.e(4100), o.e(50251), o.e(85783), o.e(78672), o.e(32486), o.e(19610), o.e(46450), o.e(25029), o.e(61474), o.e(25977), o.e(23127), o.e(39964), o.e(39694), o.e(17275), o.e(64802), o.e(35431), o.e(36123)]).then(o.bind(o, 195604));
                    return n = t.isSignModalOpen, t.showSignModal(e)
                }
            }

            function s() {
                return n()
            }
        },
        526950: (e, t, o) => {
            "use strict";
            async function n(e) {
                return (await Promise.all([o.e(76049), o.e(97358), o.e(18619), o.e(81910), o.e(12275), o.e(33335), o.e(83772), o.e(71140), o.e(33287), o.e(36037), o.e(36956), o.e(20187), o.e(96246), o.e(4100), o.e(50251), o.e(85783), o.e(62040), o.e(36509), o.e(85999), o.e(75514), o.e(25977), o.e(1387), o.e(35558), o.e(16665), o.e(39694), o.e(42353), o.e(68606)]).then(o.bind(o, 632207))).createPhoneDialog(e)
            }
            async function i(e) {
                return (await Promise.all([o.e(76049), o.e(97358), o.e(18619), o.e(81910), o.e(12275), o.e(33335), o.e(83772), o.e(71140), o.e(33287), o.e(36037), o.e(36956), o.e(20187), o.e(96246), o.e(4100), o.e(50251), o.e(85783), o.e(62040), o.e(36509), o.e(85999), o.e(75514), o.e(25977), o.e(1387), o.e(35558), o.e(16665), o.e(39694), o.e(42353), o.e(68606)]).then(o.bind(o, 632207))).createEmailDialog(e)
            }
            o.d(t, {
                createPhoneDialog: () => n,
                createSMSEmailDialog: () => i
            })
        },
        115127: (e, t, o) => {
            "use strict";
            o.d(t, {
                paidAccountCheck: () => s
            });
            var n = o(49437);
            const i = (0, o(272001).getLogger)("PaidAccountCheck");
            async function s(e) {
                const {
                    onlyCheck: t,
                    successButtonText: s,
                    isNeedCancelButton: a
                } = e, r = window.user, c = n.TVLocalStorage.getItem("previous_username");
                if (r && window.is_authenticated && !r.is_pro && c) {
                    const {
                        getProfile: e
                    } = await o.e(90254).then(o.bind(o, 137074));
                    try {
                        const n = await e(c);
                        if (Boolean(n.pro_plan)) {
                            if (t) return c; {
                                const {
                                    showWrongAccountDialog: e
                                } = await Promise.all([o.e(23084), o.e(73535), o.e(12019)]).then(o.bind(o, 730927));
                                return e({
                                    userName: c,
                                    isNeedCancelButton: a,
                                    successButtonText: s
                                })
                            }
                        }
                    } catch (e) {
                        i.logError(e.message)
                    }
                }
                return !1
            }
        },
        514262: (e, t, o) => {
            "use strict";
            o.d(t, {
                getDialogDfd: () => u,
                verificationIsRequired: () => m,
                whenVerified: () => h,
                requestPhoneNumber: () => w
            });
            var n = o(777754),
                i = o(345848),
                s = o(526950),
                a = o(49437),
                r = o(495046),
                c = o(823127);
            let l = c.Deferred();

            function d(e, t) {
                var o = TVSettings.getBool("_phone_verif_dlg_initial", !0);
                TVSettings.setValue("_phone_verif_dlg_initial", !1), (0, i.trackEvent)("Phone verification", e + (o ? " initial" : ""), t)
            }

            function u(e) {
                const t = c.Deferred();
                return (0, s.createPhoneDialog)({
                    featureSource: e.source,
                    doNotShowConfirmation: e.doNotShowConfirmation
                }).then((o => {
                    o.on("afterOpen", (() => d("Show dialog", e.source))).on("verification:success", (o => {
                        t.resolve(o), d("Verified", e.source)
                    })).on("verification:cancel", (() => {
                        t.reject("cancelled"), d("Cancelled", e.source)
                    })).on("verification:codeExpired", (() => d("Show dialog", e.source))).open()
                })), t
            }

            function m(e = {}) {
                return new Promise((t => {
                    !window.is_authenticated || user.is_staff || user.is_superuser || user.is_pro || user.is_moderator ? t([!1]) : e.customPhoneCheck ? e.customPhoneCheck() ? t([!0, "date-joined"]) : t([!1]) : r.enabled("phone_verification") && !user.has_phone ? e.isSuspiciousCountry ? t([!0]) : !0 !== e.doNotCheckSocialActivity ? t([!0, "date-joined"]) : (!0 !== e.doNotCheckSuspicious && t([Boolean(a.TVLocalStorage.getItem("is_suspicious")), "suspicious"]), t([!0, "default"])) : t([!1])
                }))
            }

            function h(e = {}) {
                const t = c.Deferred();
                return m({
                    doNotCheckSuspicious: e.doNotCheckSuspicious,
                    doNotCheckSocialActivity: e.doNotCheckSocialActivity,
                    customPhoneCheck: e.customPhoneCheck,
                    isSuspiciousCountry: e.isSuspiciousCountry
                }).then((([i, s]) => {
                    if (!i) return l.resolve(), t.resolve();
                    if (i && e.silentPhoneVerification) return t.reject("phone_verification_required");
                    if (!e.showDialog) return l.done((() => t.resolve()));
                    const a = {
                        source: e.source,
                        doNotShowConfirmation: e.doNotShowConfirmation
                    };
                    "suspicious" !== s && (a.topMessage = n.t(null, void 0, o(236640))), u(a).done((() => t.resolve())).always((() => t.reject("phone_verification_declined")))
                })).catch((e => e)), t.promise()
            }

            function w(e = {}) {
                return new Promise(((t, o) => {
                    u(e).done(t).always(o)
                }))
            }
            window.loginStateChange && loginStateChange.subscribe(null, (() => {
                window.is_authenticated && (l = c.Deferred(), m().then((([e, t]) => {
                    e || l.resolve()
                })))
            }))
        },
        878134: (e, t, o) => {
            "use strict";
            o.d(t, {
                parseHtml: () => i,
                parseHtmlElement: () => s
            });
            const n = new WeakMap;

            function i(e, t) {
                let o, i;
                return o = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t, n && (i = n.get(o)), i || (i = o.ownerDocument.createRange(), i.selectNodeContents(o), n && n.set(o, i)), i.createContextualFragment(e)
            }

            function s(e, t) {
                const o = i(e, t),
                    n = o.firstElementChild;
                return null !== n && o.removeChild(n), n
            }
        },
        233313: (e, t, o) => {
            "use strict";
            var n;

            function i(e, t = {}) {
                const {
                    page: o,
                    query: i
                } = t;
                let s = "/u/",
                    a = !1,
                    r = null;
                if (function(e) {
                        return e.is_broker || 1 === e.account_type
                    }(e)) switch (s = "/broker/", o) {
                    case n.PublishedCharts:
                        r = "ideas/";
                        break;
                    case n.FollowingPeople:
                        r = "following/";
                        break;
                    case n.Followers:
                        r = "followers/";
                        break;
                    case n.Reviews:
                        r = "reviews/";
                        break;
                    case n.Settings:
                    case n.SettingsProfile:
                    case n.Notifications:
                    case n.Billing:
                        s = "/u/", a = !0
                } else a = !0;
                return "Guest" !== e.username && (s += `${e.username}/`), i && (s += `?${i}`), void 0 !== o && (a ? s += `#${o}` : null !== r && (s += `${r}`)), s
            }
            o.r(t), o.d(t, {
                    ProfilePages: () => n,
                    getUserProfilePath: () => i
                }),
                function(e) {
                    e.Settings = "settings", e.SettingsProfile = "settings-profile", e.Notifications = "notifications", e.Billing = "billing", e.PublishedCharts = "published-charts", e.FollowingPeople = "following-people", e.Followers = "followers", e.Reviews = "reviews"
                }(n || (n = {}))
        },
        704765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><path fill="#2962FF" stroke="#2962FF" stroke-linejoin="round" stroke-width="2" d="m57.29 54a15.43 15.43 0 1 1 0-30.86 15.43 15.43 0 0 1 0 30.86zm5.06 10.3C66.2 64.3 83 69.74 83 85.5v3.47H31.57V85.9a21.6 21.6 0 0 1 21.6-21.6l9.18.02z"/><path fill="#4a4a4a" d="m48.71 50.86a17.43 17.43 0 1 1 0-34.86 17.43 17.43 0 0 1 0 34.86zm0-4a13.43 13.43 0 1 0 0-26.86 13.43 13.43 0 0 0 0 26.86zM25 81.83v-1.09a19.6 19.6 0 0 1 19.6-19.6 5627.07 5627.07 0 0 1 9.09.02 2 2 0 0 0 .17-4l-4.67-.01H44.6A23.6 23.6 0 0 0 21 80.74v3.08c0 1.1.9 2 2 2h51.43a2 2 0 1 0 0-4H25zM64.14 70h20.57a2 2 0 1 0 0-4H64.14a2 2 0 1 0 0 4z"/></svg>'
        }
    }
]);
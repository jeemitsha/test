(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [1026, 91859], {
        259142: function(e, t) {
            var n, r, o;
            r = [t], n = function(e) {
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
                    var r = {
                        get passive() {
                            n = !0
                        }
                    };
                    window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
                }
                var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    s = [],
                    i = !1,
                    a = -1,
                    l = void 0,
                    c = void 0,
                    u = function(e) {
                        return s.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    d = function(e) {
                        var t = e || window.event;
                        return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    m = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, r) {
                    if (o) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !s.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var m = {
                                targetElement: e,
                                options: r || {}
                            };
                            s = [].concat(t(s), [m]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var n, r, o, s;
                                1 === t.targetTouches.length && (r = e, s = (n = t).targetTouches[0].clientY - a, !u(n.target) && (r && 0 === r.scrollTop && 0 < s || (o = r) && o.scrollHeight - o.scrollTop <= o.clientHeight && s < 0 ? d(n) : n.stopPropagation()))
                            }, i || (document.addEventListener("touchmove", d, n ? {
                                passive: !1
                            } : void 0), i = !0)
                        }
                    } else {
                        p = r, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!p && !0 === p.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var h = {
                            targetElement: e,
                            options: r || {}
                        };
                        s = [].concat(t(s), [h])
                    }
                    var p
                }, e.clearAllBodyScrollLocks = function() {
                    o ? (s.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), i && (document.removeEventListener("touchmove", d, n ? {
                        passive: !1
                    } : void 0), i = !1), s = [], a = -1) : (m(), s = [])
                }, e.enableBodyScroll = function(e) {
                    if (o) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, s = s.filter((function(t) {
                            return t.targetElement !== e
                        })), i && 0 === s.length && (document.removeEventListener("touchmove", d, n ? {
                            passive: !1
                        } : void 0), i = !1)
                    } else 1 === s.length && s[0].targetElement === e ? (m(), s = []) : s = s.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = o)
        },
        428146: e => {
            e.exports = {
                button: "button-OvB35Th_",
                content: "content-OvB35Th_",
                "icon-only": "icon-only-OvB35Th_",
                link: "link-OvB35Th_",
                "color-brand": "color-brand-OvB35Th_",
                "variant-primary": "variant-primary-OvB35Th_",
                "variant-secondary": "variant-secondary-OvB35Th_",
                "color-gray": "color-gray-OvB35Th_",
                "color-green": "color-green-OvB35Th_",
                "color-red": "color-red-OvB35Th_",
                "size-xsmall": "size-xsmall-OvB35Th_",
                "with-start-icon": "with-start-icon-OvB35Th_",
                "with-end-icon": "with-end-icon-OvB35Th_",
                "start-icon-wrap": "start-icon-wrap-OvB35Th_",
                "end-icon-wrap": "end-icon-wrap-OvB35Th_",
                "size-small": "size-small-OvB35Th_",
                "size-medium": "size-medium-OvB35Th_",
                "size-large": "size-large-OvB35Th_",
                "size-xlarge": "size-xlarge-OvB35Th_",
                animated: "animated-OvB35Th_",
                stretch: "stretch-OvB35Th_",
                grouped: "grouped-OvB35Th_",
                "adjust-position": "adjust-position-OvB35Th_",
                "first-row": "first-row-OvB35Th_",
                "first-col": "first-col-OvB35Th_",
                "no-corner-top-left": "no-corner-top-left-OvB35Th_",
                "no-corner-top-right": "no-corner-top-right-OvB35Th_",
                "no-corner-bottom-right": "no-corner-bottom-right-OvB35Th_",
                "no-corner-bottom-left": "no-corner-bottom-left-OvB35Th_"
            }
        },
        981193: e => {
            e.exports = {
                container: "container-Mtq7m9Yl",
                "intent-default": "intent-default-Mtq7m9Yl",
                focused: "focused-Mtq7m9Yl",
                readonly: "readonly-Mtq7m9Yl",
                disabled: "disabled-Mtq7m9Yl",
                "with-highlight": "with-highlight-Mtq7m9Yl",
                grouped: "grouped-Mtq7m9Yl",
                "adjust-position": "adjust-position-Mtq7m9Yl",
                "first-row": "first-row-Mtq7m9Yl",
                "first-col": "first-col-Mtq7m9Yl",
                stretch: "stretch-Mtq7m9Yl",
                "font-size-medium": "font-size-medium-Mtq7m9Yl",
                "font-size-large": "font-size-large-Mtq7m9Yl",
                "no-corner-top-left": "no-corner-top-left-Mtq7m9Yl",
                "no-corner-top-right": "no-corner-top-right-Mtq7m9Yl",
                "no-corner-bottom-right": "no-corner-bottom-right-Mtq7m9Yl",
                "no-corner-bottom-left": "no-corner-bottom-left-Mtq7m9Yl",
                "size-small": "size-small-Mtq7m9Yl",
                "size-medium": "size-medium-Mtq7m9Yl",
                "size-large": "size-large-Mtq7m9Yl",
                "intent-success": "intent-success-Mtq7m9Yl",
                "intent-warning": "intent-warning-Mtq7m9Yl",
                "intent-danger": "intent-danger-Mtq7m9Yl",
                "intent-primary": "intent-primary-Mtq7m9Yl",
                "border-none": "border-none-Mtq7m9Yl",
                "border-thin": "border-thin-Mtq7m9Yl",
                "border-thick": "border-thick-Mtq7m9Yl",
                highlight: "highlight-Mtq7m9Yl",
                shown: "shown-Mtq7m9Yl"
            }
        },
        484684: e => {
            e.exports = {
                "inner-slot": "inner-slot-yJbunXPO",
                interactive: "interactive-yJbunXPO",
                icon: "icon-yJbunXPO",
                "inner-middle-slot": "inner-middle-slot-yJbunXPO",
                "before-slot": "before-slot-yJbunXPO",
                "after-slot": "after-slot-yJbunXPO"
            }
        },
        358089: e => {
            e.exports = {
                input: "input-oiYdY6I4",
                "with-start-slot": "with-start-slot-oiYdY6I4",
                "with-end-slot": "with-end-slot-oiYdY6I4"
            }
        },
        733319: e => {
            e.exports = {
                loader: "loader-PZ4hqS2H",
                static: "static-PZ4hqS2H",
                item: "item-PZ4hqS2H",
                "tv-button-loader": "tv-button-loader-PZ4hqS2H",
                medium: "medium-PZ4hqS2H",
                small: "small-PZ4hqS2H",
                black: "black-PZ4hqS2H",
                white: "white-PZ4hqS2H",
                gray: "gray-PZ4hqS2H",
                primary: "primary-PZ4hqS2H",
                "loader-initial": "loader-initial-PZ4hqS2H",
                "loader-appear": "loader-appear-PZ4hqS2H"
            }
        },
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        190948: e => {
            e.exports = {
                icon: "icon-XIHzWm6B",
                dropped: "dropped-XIHzWm6B"
            }
        },
        844662: e => {
            e.exports = {
                container: "container-f2q4yHCG",
                content: "content-f2q4yHCG",
                arrowHolder: "arrowHolder-f2q4yHCG",
                "arrowHolder--below": "arrowHolder--below-f2q4yHCG",
                "arrowHolder--above": "arrowHolder--above-f2q4yHCG",
                "arrowHolder--before": "arrowHolder--before-f2q4yHCG",
                "arrowHolder--after": "arrowHolder--after-f2q4yHCG",
                "arrowHolder--above-fix": "arrowHolder--above-fix-f2q4yHCG",
                "arrowHolder--before-rtl-fix": "arrowHolder--before-rtl-fix-f2q4yHCG",
                "arrowHolder--after-ltr-fix": "arrowHolder--after-ltr-fix-f2q4yHCG",
                label: "label-f2q4yHCG",
                closeButton: "closeButton-f2q4yHCG"
            }
        },
        559986: (e, t, n) => {
            "use strict";
            n.d(t, {
                LIST_START: () => r,
                getTargetIndex: () => o
            });
            const r = Symbol();

            function o(e, t, n) {
                const o = void 0 === n ? void 0 !== t ? e.indexOf(t) : void 0 : n === r ? 0 : e.indexOf(n) + 1;
                return -1 !== o ? o : void 0
            }
        },
        199669: (e, t, n) => {
            "use strict";

            function r(e) {
                const {
                    id: t,
                    event: n,
                    channel: r,
                    filter: o
                } = e;
                return e => (r.on(n, (n => {
                    const {
                        action: r,
                        emitter: s
                    } = JSON.parse(n);
                    s !== t && o(r) && e.dispatch({ ...r,
                        payload: { ...r.payload,
                            silent: !0
                        }
                    })
                })), e => s => {
                    const i = e(s);
                    return o(s) && (s.payload.silent || r.emit(n, JSON.stringify({
                        action: s,
                        emitter: t
                    }))), i
                })
            }
            n.d(t, {
                createCrossTabSyncMiddleware: () => r
            })
        },
        797035: (e, t, n) => {
            "use strict";
            n.d(t, {
                ListColor: () => r,
                LIST_COLORS: () => m,
                isListColor: () => h,
                markMany: () => b,
                setup: () => v,
                reset: () => _,
                remove: () => w,
                rename: () => S,
                changeDescription: () => k,
                renameSeparator: () => L,
                shiftCommand: () => C,
                share: () => E,
                reducer: () => x,
                createCrossTabSyncMiddleware: () => T,
                getSymbolColor: () => N,
                getListByColor: () => D,
                getSymbolsByColor: () => I,
                getCommands: () => P,
                getTimestamp: () => O
            });
            var r, o = n(826300),
                s = n(438253),
                i = n(650151),
                a = n(199669),
                l = n(50991),
                c = n(340958),
                u = n(173777),
                d = n(559986);
            ! function(e) {
                e.Red = "red", e.Blue = "blue", e.Green = "green", e.Orange = "orange", e.Purple = "purple", e.Cyan = "cyan", e.Pink = "pink"
            }(r || (r = {}));
            const m = [r.Red, r.Blue, r.Green, r.Orange, r.Purple, r.Cyan, r.Pink];

            function h(e) {
                return new Set(m).has(e)
            }
            const p = {
                lists: {
                    colors: [],
                    byColor: {},
                    bySymbol: {}
                },
                commands: [],
                timestamp: null
            };

            function f(e, t) {
                const {
                    lists: n
                } = e, r = n.byColor[t];
                r && 0 === r.symbols.length && (n.colors = n.colors.filter((e => e !== t)))
            }

            function y(e) {
                return (0, u.isSeparatorItem)(e)
            }
            const g = (0, o.createSlice)({
                    name: "marked-lists",
                    initialState: p,
                    reducers: {
                        setup: (e, t) => {
                            const {
                                lists: n,
                                timestamp: r
                            } = t.payload, o = {
                                lists: {
                                    colors: [],
                                    byColor: {},
                                    bySymbol: {}
                                },
                                commands: [],
                                timestamp: null
                            };
                            o.timestamp = r;
                            for (const e of function(e, t) {
                                    return [...e].sort(((e, n) => t.indexOf(e.color) - t.indexOf(n.color)))
                                }(n, m)) {
                                const t = e.symbols.filter((t => void 0 === o.lists.bySymbol[t] && (y(t) || (o.lists.bySymbol[t] = e.color), !0)));
                                o.lists.byColor[e.color] = {
                                    color: e.color,
                                    name: e.name,
                                    description: e.description,
                                    shared: e.shared,
                                    symbols: t
                                }, t.length > 0 && o.lists.colors.push(e.color)
                            }
                            return o
                        },
                        remove: (e, t) => {
                            const {
                                color: n,
                                symbols: r,
                                silent: o
                            } = t.payload, {
                                lists: a,
                                commands: l
                            } = e, u = a.byColor[n];
                            if (void 0 === u || 0 === u.symbols.length) return;
                            const d = new Set(r),
                                m = u.symbols.filter((e => !d.has(e)));
                            if (!(0, c.equalArrays)(m, u.symbols)) {
                                u.symbols = m;
                                for (const e of d) delete a.bySymbol[e];
                                o || l.push({
                                    type: "remove",
                                    color: n,
                                    symbols: [...d],
                                    prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                                }), f(e, n)
                            }
                        },
                        markMany: (e, t) => {
                            const {
                                color: n,
                                before: r,
                                silent: o
                            } = t.payload, {
                                lists: a,
                                commands: l
                            } = e, {
                                unique: u,
                                exclusions: m
                            } = function(e, t) {
                                var n;
                                const {
                                    color: r,
                                    symbols: o,
                                    separators: s
                                } = t.payload, {
                                    lists: a
                                } = e, l = {}, c = new Set, u = e => y(e) ? ((0, i.assert)(null !== r), r) : a.bySymbol[e];
                                for (let e = 0; e < o.length; ++e) {
                                    const t = o[e];
                                    if (c.has(t) || y(t) && !s) continue;
                                    c.add(t);
                                    const r = u(t);
                                    void 0 !== r && (l[r] = null !== (n = l[r]) && void 0 !== n ? n : new Set).add(t)
                                }
                                return {
                                    exclusions: l,
                                    unique: c
                                }
                            }(e, t);
                            if (0 === u.size) return;
                            const h = function(e, t, n, r) {
                                const {
                                    color: o,
                                    before: s
                                } = t.payload, {
                                    lists: i
                                } = e;
                                let a;
                                if (null !== o && void 0 !== s && n.has(s)) {
                                    const e = i.byColor[o];
                                    if (void 0 !== e) {
                                        a = r;
                                        for (let t = e.symbols.indexOf(s); t >= 0; --t)
                                            if (!n.has(e.symbols[t])) {
                                                a = e.symbols[t];
                                                break
                                            }
                                    }
                                }
                                return a
                            }(e, t, u, d.LIST_START);
                            if (null !== n && void 0 !== m[n] && 1 === Object.keys(m).length) {
                                const t = a.byColor[n];
                                (0, i.assert)(void 0 !== t);
                                const p = t.symbols.filter((e => !u.has(e))),
                                    g = (0, d.getTargetIndex)(p, r, h);
                                if (void 0 === g ? p.push(...u) : p.splice(g, 0, ...u), (0, c.equalArrays)(p, t.symbols)) return; {
                                    const r = m[n];
                                    (0, i.assert)(void 0 !== r), t.symbols = p;
                                    for (const e of r) delete a.bySymbol[e];
                                    for (const e of u) y(e) || (a.bySymbol[e] = n);
                                    return f(e, n), void(o || l.push({
                                        type: "replace",
                                        color: n,
                                        symbols: [...t.symbols],
                                        prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                                    }))
                                }
                            }
                            for (const t in m) {
                                if (!m.hasOwnProperty(t)) continue;
                                const n = m[t];
                                (0, i.assert)(void 0 !== n);
                                const r = a.byColor[t];
                                (0, i.assert)(void 0 !== r), r.symbols = r.symbols.filter((e => !n.has(e) || (delete a.bySymbol[e], !1))), f(e, t)
                            }
                            if (null === n) return void(o || l.push({
                                type: "reset",
                                symbols: [...u],
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            }));
                            const p = a.byColor[n];
                            if (a.colors.includes(n)) {
                                (0, i.assert)(void 0 !== p);
                                const t = (0, d.getTargetIndex)(p.symbols, r, h);
                                void 0 === t ? (p.symbols.push(...u), o || (void 0 === m[n] ? l.push({
                                    type: "append",
                                    color: n,
                                    symbols: [...u],
                                    prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                                }) : l.push({
                                    type: "replace",
                                    color: n,
                                    symbols: [...p.symbols],
                                    prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                                }))) : (p.symbols.splice(t, 0, ...u), o || l.push({
                                    type: "replace",
                                    color: n,
                                    symbols: [...p.symbols],
                                    prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                                }))
                            } else void 0 === p ? a.byColor[n] = {
                                color: n,
                                symbols: [...u],
                                name: null,
                                description: null,
                                shared: !1
                            } : p.symbols = [...u], a.colors.push(n), o || l.push({
                                type: "append",
                                color: n,
                                symbols: [...u],
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            });
                            for (const e of u) y(e) || (a.bySymbol[e] = n)
                        },
                        renameSeparator: (e, t) => {
                            const {
                                color: n,
                                separator: r,
                                name: o,
                                silent: a
                            } = t.payload;
                            if (r === o || !y(r) || !y(o)) return;
                            const l = e.lists.byColor[n];
                            (0, i.assert)(void 0 !== l);
                            const c = l.symbols.indexOf(r); - 1 !== c && -1 === l.symbols.indexOf(o) && (l.symbols.splice(c, 1, o), a || e.commands.push({
                                type: "replace",
                                color: n,
                                symbols: l.symbols,
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            }))
                        },
                        rename: (e, t) => {
                            const {
                                name: n,
                                color: r,
                                silent: o
                            } = t.payload, a = e.lists.byColor[r];
                            (0, i.assert)(void 0 !== a), a.name !== n && (a.name = n, o || e.commands.push({
                                type: "rename",
                                color: r,
                                name: n,
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            }))
                        },
                        changeDescription: (e, t) => {
                            const {
                                color: n,
                                description: r,
                                silent: o
                            } = t.payload, a = e.lists.byColor[n];
                            (0, i.assert)(void 0 !== a), a.description !== r && (a.description = r, o || e.commands.push({
                                type: "change-description",
                                color: n,
                                description: r,
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            }))
                        },
                        reset: (e, t) => {
                            const {
                                silent: n
                            } = t.payload, {
                                lists: r
                            } = e;
                            for (const e of m) {
                                const t = r.byColor[e];
                                void 0 !== t && (t.symbols = [])
                            }
                            r.colors = [], r.bySymbol = {}, n || e.commands.push({
                                type: "reset-all",
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            })
                        },
                        share: (e, t) => {
                            const {
                                lists: n,
                                commands: r
                            } = e, {
                                shared: o,
                                color: a,
                                silent: l
                            } = t.payload, c = n.byColor[a];
                            void 0 !== c && c.shared !== o && (c.shared = o, l || r.push({
                                type: "share",
                                color: a,
                                shared: o,
                                prevLists: (0, i.ensureDefined)((0, s.original)(e)).lists
                            }))
                        },
                        shiftCommand: (e, t) => {
                            const {
                                count: n
                            } = t.payload;
                            e.commands.splice(0, n)
                        }
                    }
                }),
                {
                    markMany: b,
                    setup: v,
                    reset: _,
                    remove: w,
                    rename: S,
                    changeDescription: k,
                    renameSeparator: L,
                    shiftCommand: C,
                    share: E
                } = g.actions,
                {
                    reducer: x
                } = g;

            function T(e, t, n = g) {
                return (0, a.createCrossTabSyncMiddleware)({
                    id: e,
                    channel: t,
                    event: "marked-list-cross-tab-sync",
                    filter: e => function(e, t) {
                        return t.actions.markMany.match(e) || t.actions.rename.match(e) || t.actions.changeDescription.match(e) || t.actions.remove.match(e) || t.actions.setup.match(e) || t.actions.renameSeparator.match(e) || t.actions.reset.match(e) || t.actions.share.match(e)
                    }(e, n)
                })
            }

            function N(e, t) {
                var n;
                return null !== (n = e.lists.bySymbol[l.qualified.cast(t)]) && void 0 !== n ? n : null
            }

            function D(e, t) {
                var n;
                return null !== (n = e.lists.byColor[t]) && void 0 !== n ? n : null
            }

            function I(e, t) {
                var n, r;
                return null !== (r = null === (n = D(e, t)) || void 0 === n ? void 0 : n.symbols) && void 0 !== r ? r : null
            }

            function P(e) {
                return e.commands
            }

            function O(e) {
                return e.timestamp
            }
        },
        50991: (e, t, n) => {
            "use strict";
            n.d(t, {
                qualified: () => r
            });
            const r = {
                cast: e => e,
                castMany: e => e.map(r.cast)
            }
        },
        340958: (e, t, n) => {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; ++n)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            n.d(t, {
                equalArrays: () => r
            })
        },
        540975: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorButton: () => d,
                Button: () => c
            });
            var r = n(50959),
                o = n(915812);

            function s(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function i(e = "primary") {
                switch (e) {
                    case "primary":
                        return "brand";
                    case "success":
                        return "green";
                    case "default":
                        return "gray";
                    case "danger":
                        return "red"
                }
            }

            function a(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function l(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: r,
                    useFullWidth: o,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: i(t),
                    size: a(n),
                    variant: s(r),
                    stretch: o,
                    startIcon: l
                }
            }

            function c(e) {
                return r.createElement(o.SquareButton, { ...l(e)
                })
            }

            function u(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: r,
                    useFullWidth: o,
                    icon: l,
                    ...c
                } = e;
                return { ...c,
                    color: i(t),
                    size: a(n),
                    variant: s(r),
                    stretch: o,
                    startIcon: l
                }
            }

            function d(e) {
                return r.createElement(o.SquareAnchorButton, { ...u(e)
                })
            }
        },
        915812: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => r.SquareButton,
                SquareAnchorButton: () => o.SquareAnchorButton
            });
            n(221191);
            var r = n(422175),
                o = n(951144)
        },
        951144: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareAnchorButton: () => l
            });
            var r = n(50959),
                o = n(301792),
                s = n(8626),
                i = n(221191);

            function a(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: o,
                    stretch: i,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: u,
                    endIcon: d,
                    ...m
                } = e;
                return { ...m,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: n,
                    cellState: s,
                    disablePositionAdjustment: l
                } = (0, r.useContext)(o.ControlGroupContext), c = (0, i.getSquareButtonClasses)({ ...e,
                    isGrouped: n,
                    cellState: s,
                    disablePositionAdjustment: l,
                    isAnchor: !0
                });
                return r.createElement("a", { ...a(e),
                    className: c,
                    ref: t
                }, r.createElement(i.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSquareButtonClasses: () => c,
                SquareButtonContent: () => u
            });
            var r = n(50959),
                o = n(497754),
                s = n(307754),
                i = n(83436),
                a = n(428146),
                l = n.n(a);

            function c(e) {
                const {
                    color: t = "brand",
                    size: n = "medium",
                    variant: r = "primary",
                    stretch: i = !1,
                    icon: a,
                    startIcon: c,
                    endIcon: u,
                    iconOnly: d = !1,
                    className: m,
                    isGrouped: h,
                    cellState: p,
                    disablePositionAdjustment: f = !1,
                    isAnchor: y = !1
                } = e, g = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = o(t, l()["no-corner-top-left"])), 2 & e && (t = o(t, l()["no-corner-top-right"])), 4 & e && (t = o(t, l()["no-corner-bottom-right"])), 8 & e && (t = o(t, l()["no-corner-bottom-left"]))), t
                }((0, s.getGroupCellRemoveRoundBorders)(p));
                return o(m, l().button, l()[`size-${n}`], l()[`color-${t}`], l()[`variant-${r}`], i && l().stretch, (a || c) && l()["with-start-icon"], u && l()["with-end-icon"], d && l()["icon-only"], g, h && l().grouped, h && !f && l()["adjust-position"], h && p.isTop && l()["first-row"], h && p.isLeft && l()["first-col"], y && l().link)
            }

            function u(e) {
                const {
                    startIcon: t,
                    icon: n,
                    iconOnly: o,
                    children: s,
                    endIcon: a
                } = e, c = null != t ? t : n;
                return r.createElement(r.Fragment, null, c && r.createElement(i.Icon, {
                    icon: c,
                    className: l()["start-icon-wrap"]
                }), s && r.createElement("span", {
                    className: l().content
                }, s), a && !o && r.createElement(i.Icon, {
                    icon: a,
                    className: l()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => l
            });
            var r = n(50959),
                o = n(301792),
                s = n(8626),
                i = n(221191);

            function a(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: o,
                    stretch: i,
                    animated: a,
                    icon: l,
                    iconOnly: c,
                    startIcon: u,
                    endIcon: d,
                    ...m
                } = e;
                return { ...m,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function l(e) {
                const {
                    reference: t,
                    ...n
                } = e, {
                    isGrouped: s,
                    cellState: l,
                    disablePositionAdjustment: c
                } = (0, r.useContext)(o.ControlGroupContext), u = (0, i.getSquareButtonClasses)({ ...n,
                    isGrouped: s,
                    cellState: l,
                    disablePositionAdjustment: c
                });
                return r.createElement("button", { ...a(n),
                    className: u,
                    ref: t
                }, r.createElement(i.SquareButtonContent, { ...n
                }))
            }
        },
        301792: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlGroupContext: () => r
            });
            const r = n(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            n.d(t, {
                getGroupCellRemoveRoundBorders: () => r
            })
        },
        452395: (e, t, n) => {
            "use strict";
            n.d(t, {
                ControlSkeleton: () => b,
                InputClasses: () => f
            });
            var r = n(50959),
                o = n(497754),
                s = n(650151),
                i = n(662929),
                a = n(8626),
                l = n(301792),
                c = n(307754);
            var u = n(981193),
                d = n.n(u);

            function m(e) {
                let t = "";
                return 0 !== e && (1 & e && (t = o(t, d()["no-corner-top-left"])), 2 & e && (t = o(t, d()["no-corner-top-right"])), 4 & e && (t = o(t, d()["no-corner-bottom-right"])), 8 & e && (t = o(t, d()["no-corner-bottom-left"]))), t
            }

            function h(e, t, n, r) {
                const {
                    removeRoundBorder: s,
                    className: i,
                    intent: a = "default",
                    borderStyle: l = "thin",
                    size: u,
                    highlight: h,
                    disabled: p,
                    readonly: f,
                    stretch: y,
                    noReadonlyStyles: g,
                    isFocused: b
                } = e, v = m(null != s ? s : (0, c.getGroupCellRemoveRoundBorders)(n));
                return o(d().container, d()[`intent-${a}`], d()[`border-${l}`], u && d()[`size-${u}`], v, h && d()["with-highlight"], p && d().disabled, f && !g && d().readonly, b && d().focused, y && d().stretch, t && d().grouped, !r && d()["adjust-position"], n.isTop && d()["first-row"], n.isLeft && d()["first-col"], i)
            }

            function p(e, t) {
                const {
                    highlight: n,
                    highlightRemoveRoundBorder: r
                } = e;
                if (!n) return d().highlight;
                const s = m(null != r ? r : (0, c.getGroupCellRemoveRoundBorders)(t));
                return o(d().highlight, d().shown, s)
            }
            const f = {
                    FontSizeMedium: (0, s.ensureDefined)(d()["font-size-medium"]),
                    FontSizeLarge: (0, s.ensureDefined)(d()["font-size-large"])
                },
                y = {
                    passive: !1
                };

            function g(e, t) {
                const {
                    style: n,
                    id: o,
                    role: s,
                    onFocus: c,
                    onBlur: u,
                    onMouseOver: d,
                    onMouseOut: m,
                    onMouseDown: f,
                    onMouseUp: g,
                    onKeyDown: b,
                    onClick: v,
                    tabIndex: _,
                    startSlot: w,
                    middleSlot: S,
                    endSlot: k,
                    onWheel: L,
                    onWheelNoPassive: C = null
                } = e, {
                    isGrouped: E,
                    cellState: x,
                    disablePositionAdjustment: T = !1
                } = (0, r.useContext)(l.ControlGroupContext), N = function(e, t = null, n) {
                    const o = (0, r.useRef)(null),
                        s = (0, r.useRef)(null),
                        i = (0, r.useCallback)((() => {
                            if (null === o.current || null === s.current) return;
                            const [e, t, n] = s.current;
                            null !== t && o.current.addEventListener(e, t, n)
                        }), []),
                        a = (0, r.useCallback)((() => {
                            if (null === o.current || null === s.current) return;
                            const [e, t, n] = s.current;
                            null !== t && o.current.removeEventListener(e, t, n)
                        }), []),
                        l = (0, r.useCallback)((e => {
                            a(), o.current = e, i()
                        }), []);
                    return (0, r.useEffect)((() => (s.current = [e, t, n], i(), a)), [e, t, n]), l
                }("wheel", C, y);
                return r.createElement("span", {
                    style: n,
                    id: o,
                    role: s,
                    className: h(e, E, x, T),
                    tabIndex: _,
                    ref: (0, i.useMergedRefs)([t, N]),
                    onFocus: c,
                    onBlur: u,
                    onMouseOver: d,
                    onMouseOut: m,
                    onMouseDown: f,
                    onMouseUp: g,
                    onKeyDown: b,
                    onClick: v,
                    onWheel: L,
                    ...(0, a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }, w, S, k, r.createElement("span", {
                    className: p(e, x)
                }))
            }
            g.displayName = "ControlSkeleton";
            const b = r.forwardRef(g)
        },
        514420: (e, t, n) => {
            "use strict";
            n.d(t, {
                BeforeSlot: () => a,
                StartSlot: () => l,
                MiddleSlot: () => c,
                EndSlot: () => u,
                AfterSlot: () => d
            });
            var r = n(50959),
                o = n(497754),
                s = n(484684),
                i = n.n(s);

            function a(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(i()["before-slot"], t)
                }, n)
            }

            function l(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: s = !1,
                    children: a
                } = e;
                return r.createElement("span", {
                    className: o(i()["inner-slot"], n && i().interactive, s && i().icon, t)
                }, a)
            }

            function c(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(i()["inner-slot"], i()["inner-middle-slot"], t)
                }, n)
            }

            function u(e) {
                const {
                    className: t,
                    interactive: n = !0,
                    icon: s = !1,
                    children: a
                } = e;
                return r.createElement("span", {
                    className: o(i()["inner-slot"], n && i().interactive, s && i().icon, t)
                }, a)
            }

            function d(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return r.createElement("span", {
                    className: o(i()["after-slot"], t)
                }, n)
            }
        },
        142135: (e, t, n) => {
            "use strict";
            n.d(t, {
                Input: () => r.Input,
                InputControl: () => r.InputControl
            });
            var r = n(314551)
        },
        314551: (e, t, n) => {
            "use strict";
            n.d(t, {
                Input: () => g,
                InputControl: () => b
            });
            var r = n(50959),
                o = n(497754),
                s = n(8626),
                i = n(763341),
                a = n(151057),
                l = n(662929),
                c = n(207357),
                u = n(405964),
                d = n(633750),
                m = n(452395),
                h = n(514420),
                p = n(358089),
                f = n.n(p);

            function y(e) {
                return !(0, s.isAriaAttribute)(e) && !(0, s.isDataAttribute)(e)
            }

            function g(e) {
                const {
                    id: t,
                    title: n,
                    role: i,
                    tabIndex: a,
                    placeholder: l,
                    name: c,
                    type: u,
                    value: d,
                    defaultValue: p,
                    draggable: g,
                    autoComplete: b,
                    autoFocus: v,
                    maxLength: _,
                    min: w,
                    max: S,
                    step: k,
                    pattern: L,
                    inputMode: C,
                    onSelect: E,
                    onFocus: x,
                    onBlur: T,
                    onKeyDown: N,
                    onKeyUp: D,
                    onKeyPress: I,
                    onChange: P,
                    onDragStart: O,
                    size: z = "medium",
                    className: A,
                    inputClassName: M,
                    disabled: B,
                    readonly: U,
                    containerTabIndex: R,
                    startSlot: W,
                    endSlot: H,
                    reference: q,
                    containerReference: F,
                    onContainerFocus: j,
                    ...Y
                } = e, G = (0, s.filterProps)(Y, y), $ = { ...(0, s.filterAriaProps)(Y),
                    ...(0, s.filterDataProps)(Y),
                    id: t,
                    title: n,
                    role: i,
                    tabIndex: a,
                    placeholder: l,
                    name: c,
                    type: u,
                    value: d,
                    defaultValue: p,
                    draggable: g,
                    autoComplete: b,
                    autoFocus: v,
                    maxLength: _,
                    min: w,
                    max: S,
                    step: k,
                    pattern: L,
                    inputMode: C,
                    onSelect: E,
                    onFocus: x,
                    onBlur: T,
                    onKeyDown: N,
                    onKeyUp: D,
                    onKeyPress: I,
                    onChange: P,
                    onDragStart: O
                };
                return r.createElement(m.ControlSkeleton, { ...G,
                    disabled: B,
                    readonly: U,
                    tabIndex: R,
                    className: o(f().container, A),
                    size: z,
                    ref: F,
                    onFocus: j,
                    startSlot: W,
                    middleSlot: r.createElement(h.MiddleSlot, null, r.createElement("input", { ...$,
                        className: o(f().input, M, W && f()["with-start-slot"], H && f()["with-end-slot"]),
                        disabled: B,
                        readOnly: U,
                        ref: q
                    })),
                    endSlot: H
                })
            }

            function b(e) {
                e = (0, c.useControl)(e);
                const {
                    disabled: t,
                    autoSelectOnFocus: n,
                    tabIndex: o = 0,
                    onFocus: s,
                    onBlur: m,
                    reference: h,
                    containerReference: p = null
                } = e, f = (0, r.useRef)(null), y = (0, r.useRef)(null), [b, v] = (0, u.useFocus)(), _ = t ? void 0 : b ? -1 : o, w = t ? void 0 : b ? o : -1, {
                    isMouseDown: S,
                    handleMouseDown: k,
                    handleMouseUp: L
                } = (0, d.useIsMouseDown)(), C = (0, i.createSafeMulticastEventHandler)(v.onFocus, (function(e) {
                    n && !S.current && (0, a.selectAllContent)(e.currentTarget)
                }), s), E = (0, i.createSafeMulticastEventHandler)(v.onBlur, m), x = (0, r.useCallback)((e => {
                    f.current = e, h && ("function" == typeof h && h(e), "object" == typeof h && (h.current = e))
                }), [f, h]);
                return r.createElement(g, { ...e,
                    isFocused: b,
                    containerTabIndex: _,
                    tabIndex: w,
                    onContainerFocus: function(e) {
                        y.current === e.target && null !== f.current && f.current.focus()
                    },
                    onFocus: C,
                    onBlur: E,
                    reference: x,
                    containerReference: (0, l.useMergedRefs)([y, p]),
                    onMouseDown: k,
                    onMouseUp: L
                })
            }
        },
        207357: (e, t, n) => {
            "use strict";
            n.d(t, {
                useControl: () => s
            });
            var r = n(763341),
                o = n(405964);

            function s(e) {
                const {
                    onFocus: t,
                    onBlur: n,
                    intent: s,
                    highlight: i,
                    disabled: a
                } = e, [l, c] = (0, o.useFocus)(void 0, a), u = (0, r.createSafeMulticastEventHandler)(a ? void 0 : c.onFocus, t), d = (0, r.createSafeMulticastEventHandler)(a ? void 0 : c.onBlur, n);
                return { ...e,
                    intent: s || (l ? "primary" : "default"),
                    highlight: null != i ? i : l,
                    onFocus: u,
                    onBlur: d
                }
            }
        },
        405964: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFocus: () => o
            });
            var r = n(50959);

            function o(e, t) {
                const [n, o] = (0, r.useState)(!1);
                (0, r.useEffect)((() => {
                    t && n && o(!1)
                }), [t, n]);
                const s = {
                    onFocus: (0, r.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!0)
                    }), [e]),
                    onBlur: (0, r.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!1)
                    }), [e])
                };
                return [n, s]
            }
        },
        640027: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsMounted: () => o
            });
            var r = n(50959);
            const o = () => {
                const e = (0, r.useRef)(!1);
                return (0, r.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        633750: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsMouseDown: () => o
            });
            var r = n(50959);

            function o() {
                const e = (0, r.useRef)(!1),
                    t = (0, r.useCallback)((() => {
                        e.current = !0
                    }), [e]),
                    n = (0, r.useCallback)((() => {
                        e.current = !1
                    }), [e]);
                return {
                    isMouseDown: e,
                    handleMouseDown: t,
                    handleMouseUp: n
                }
            }
        },
        662929: (e, t, n) => {
            "use strict";
            n.d(t, {
                useMergedRefs: () => s
            });
            var r = n(50959),
                o = n(551080);

            function s(e) {
                return (0, r.useCallback)((0, o.mergeRefs)(e), e)
            }
        },
        612247: (e, t, n) => {
            "use strict";
            n.d(t, {
                Loader: () => c
            });
            var r, o = n(50959),
                s = n(497754),
                i = n(745269),
                a = n(733319),
                l = n.n(a);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(r || (r = {}));
            class c extends o.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: r.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: n = "medium",
                        staticPosition: r
                    } = this.props, i = s(l().item, l()[t], l()[n]);
                    return o.createElement("span", {
                        className: s(l().loader, r && l().static, this._getStateClass(), e)
                    }, o.createElement("span", {
                        className: i
                    }), o.createElement("span", {
                        className: i
                    }), o.createElement("span", {
                        className: i
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: r.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: r.Active
                        })
                    }), 2 * i.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case r.Initial:
                            return l()["loader-initial"];
                        case r.Appear:
                            return l()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function r(e) {
                return s(e, i)
            }

            function o(e) {
                return s(e, a)
            }

            function s(e, t) {
                const n = Object.entries(e).filter(t),
                    r = {};
                for (const [e, t] of n) r[e] = t;
                return r
            }

            function i(e) {
                const [t, n] = e;
                return 0 === t.indexOf("data-") && "string" == typeof n
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => o,
                filterProps: () => s,
                isDataAttribute: () => i,
                isAriaAttribute: () => a
            })
        },
        151057: (e, t, n) => {
            "use strict";

            function r(e) {
                null !== e && e.setSelectionRange(0, e.value.length)
            }
            n.d(t, {
                selectAllContent: () => r
            })
        },
        551080: (e, t, n) => {
            "use strict";

            function r(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function o(e) {
                return r([e])
            }
            n.d(t, {
                mergeRefs: () => r,
                isomorphicRef: () => o
            })
        },
        763341: (e, t, n) => {
            "use strict";

            function r(...e) {
                return t => {
                    for (const n of e) void 0 !== n && n(t)
                }
            }
            n.d(t, {
                createSafeMulticastEventHandler: () => r
            })
        },
        740087: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n;
                const r = null === (n = window.widgetbar) || void 0 === n ? void 0 : n.widget(e);
                r && 0 === r.heightRatio && (r.setMinHeight(t), r.minHeight = 0)
            }
            n.d(t, {
                expandWidget: () => r
            })
        },
        531327: (e, t, n) => {
            "use strict";

            function r(e) {
                return o() ? 0 : s() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => r,
                isWidgetBarFullscreen: () => o
            });
            const o = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                s = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, n) => {
            "use strict";

            function r(e, t, n, r, o) {
                function s(o) {
                    if (e > o.timeStamp) return;
                    const s = o.target;
                    void 0 !== n && null !== t && null !== s && s.ownerDocument === r && (t.contains(s) || n(o))
                }
                return o.click && r.addEventListener("click", s, !1), o.mouseDown && r.addEventListener("mousedown", s, !1), o.touchEnd && r.addEventListener("touchend", s, !1), o.touchStart && r.addEventListener("touchstart", s, !1), () => {
                    r.removeEventListener("click", s, !1), r.removeEventListener("mousedown", s, !1), r.removeEventListener("touchend", s, !1), r.removeEventListener("touchstart", s, !1)
                }
            }
            n.d(t, {
                addOutsideEventListener: () => r
            })
        },
        675128: (e, t, n) => {
            "use strict";

            function r(e) {
                let t = null;
                return () => (null === t && (t = e()), t)
            }
            n.d(t, {
                lazyValue: () => r
            })
        },
        76107: (e, t, n) => {
            "use strict";
            n.d(t, {
                getScrollbarWidth: () => r,
                matchMediaMinMax: () => o,
                getContentWidth: () => s,
                setStyle: () => i,
                getCSSProperty: () => a,
                getCSSPropertyNumericValue: () => l
            });
            const r = (() => {
                let e;
                return () => {
                    var t;
                    if (void 0 === e) {
                        const n = document.createElement("div"),
                            r = n.style;
                        r.visibility = "hidden", r.width = "100px", r.msOverflowStyle = "scrollbar", document.body.appendChild(n);
                        const o = n.offsetWidth;
                        n.style.overflow = "scroll";
                        const s = document.createElement("div");
                        s.style.width = "100%", n.appendChild(s);
                        const i = s.offsetWidth;
                        null === (t = n.parentNode) || void 0 === t || t.removeChild(n), e = o - i
                    }
                    return e
                }
            })();

            function o(e, t) {
                return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
            }

            function s(e) {
                return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
            }

            function i(e, t, n) {
                null !== e && e.style.setProperty(t, n)
            }

            function a(e, t) {
                return getComputedStyle(e, null).getPropertyValue(t)
            }

            function l(e, t) {
                return parseInt(a(e, t))
            }
        },
        575658: (e, t, n) => {
            "use strict";
            n.d(t, {
                setFixedBodyState: () => a
            });
            var r = n(76107),
                o = n(531327);
            let s = 0,
                i = !1;

            function a(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++s) {
                    const e = (0, r.getCSSProperty)(t, "overflow"),
                        o = (0, r.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, r.setStyle)(n, "right", `${(0,r.getScrollbarWidth)()}px`), t.style.paddingRight = `${o+(0,r.getScrollbarWidth)()}px`, i = !0), t.classList.add("i-no-scroll")
                } else if (!e && s > 0 && 0 == --s && (t.classList.remove("i-no-scroll"), i)) {
                    (0, r.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, o.getWidgetBarPadding)((0, r.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, r.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", i = !1
                }
            }
        },
        519073: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return t.includes("crypto") || ["bitcoin", "crypto"].includes(e)
            }

            function o(e, t) {
                return "stock" === e && t.includes("right") || "right" === e
            }

            function s(e, t) {
                return "fund" === e && t.includes("etf") || "stock" === e && t.includes("fund") && t.includes("etf")
            }

            function i(e) {
                return "economic" === e
            }
            n.d(t, {
                hasCryptoTypespec: () => r,
                isRight: () => o,
                isEtf: () => s,
                isEconomicSymbol: () => i
            })
        },
        526225: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                syncUserData: () => u,
                syncUserConversionData: () => d
            });
            var r = n(272001),
                o = n(345848),
                s = n(890740),
                i = n(152198);
            const a = (0, r.getLogger)("User.Sync");

            function l(e) {
                return `${e}_${window.user&&window.user.username||""}`
            }

            function c(e, t, n) {
                n !== window.user.pro_plan && (window.user.pro_plan = n, window.user.is_pro = Boolean(n), (0, o.trackEvent)("Sync User Data", "Different Pro Plan", l(e))), t !== window.is_authenticated && (window.is_authenticated = t, window.loginStateChange.fire(), (0, o.trackEvent)("Sync User Data", "Different Auth", l(e)))
            }
            async function u(e) {
                try {
                    c(e, !0, (await (0, i.getProPlanDetailsForUser)()).pro_plan)
                } catch (t) {
                    ! function(e, t) {
                        403 === t.status && ["not_authenticated", "login_required"].includes(t.type || "") ? c(e, !1, void 0) : a.logError(t.message)
                    }(e, t)
                }
            }
            async function d(e) {
                const t = await (0, s.fetch)("/gopro/"),
                    n = await t.json();
                return c(e, n.is_authenticated, n.user.pro_plan), n
            }
        },
        763532: (e, t, n) => {
            "use strict";
            n.d(t, {
                saveTextFile: () => o,
                escapeCSVValue: () => l
            });
            var r = n(638456);

            function o(e, t, n = "text/plain") {
                const o = new Blob([t], {
                    type: n
                });
                if (r.CheckMobile.iOS()) {
                    const t = new FileReader;
                    return t.onload = () => {
                        t.result && s(e, t.result.toString())
                    }, void t.readAsDataURL(o)
                }
                const i = window.URL.createObjectURL(o);
                navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(o, e) : window.navigator.msSaveBlob ? window.navigator.msSaveBlob(o, e) : (s(e, i), window.URL.revokeObjectURL(i))
            }

            function s(e, t) {
                const n = document.createElement("a");
                n.style.display = "none", document.body.appendChild(n), n.href = t, n.download = e, n.click(), document.body.removeChild(n)
            }
            const i = /[",\r\n]/,
                a = /"/g;

            function l(e) {
                return i.test(e) ? `"${e.replace(a,'""')}"` : e
            }
        },
        822714: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                convertToCustomSymbolList: () => i,
                convertToMarkedSymbolList: () => a,
                convertToSymbolList: () => l,
                getCustomWatchLists: () => c,
                getAllWatchLists: () => u,
                renameWatchList: () => d,
                removeWatchList: () => m,
                addSymbols: () => h,
                removeSymbols: () => p,
                replaceSymbols: () => f,
                createWatchList: () => y,
                putWatchList: () => g,
                setActive: () => b,
                getActive: () => v,
                changeDescription: () => _
            });
            var r = n(650151),
                o = n(890740),
                s = n(658583);

            function i(e) {
                var t;
                return {
                    type: "custom",
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    symbols: null !== (t = e.symbols) && void 0 !== t ? t : [],
                    shared: e.shared
                }
            }

            function a(e) {
                var t, n;
                const o = (0, r.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: o,
                    color: o,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    description: e.description,
                    symbols: null !== (n = e.symbols) && void 0 !== n ? n : [],
                    shared: e.shared
                }
            }

            function l(e) {
                return "custom" === e.type ? i(e) : a(e)
            }

            function c() {
                return (0, o.fetch)("/api/v1/symbols_list/custom/").then(s.handleJSON).then((e => e.map(i)))
            }

            function u() {
                return (0, o.fetch)("/api/v1/symbols_list/all/").then(s.handleJSON).then((e => e.map(l)))
            }

            function d(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function m(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(s.handleJSON)
            }

            function h(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function p(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function f(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON)
            }

            function y(e) {
                return (0, o.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON).then(i)
            }

            function g(e) {
                throw new Error("not implemented")
            }

            function b(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }
            async function v() {
                if ((0, s.isDesktopWatchlistAvailable)(window.TVD)) {
                    const e = await window.TVD.getActiveWatchlistId();
                    if (e) {
                        const t = await u(),
                            n = t.find((t => t.id === e));
                        return null != n ? n : t[0]
                    }
                }
                return (0, o.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(s.handleJSON).then(l)
            }

            function _(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e}/update_meta/`, {
                    method: "POST",
                    body: JSON.stringify({
                        description: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(s.handleJSON).then(l)
            }
        },
        658583: (e, t, n) => {
            "use strict";
            n.d(t, {
                handleJSON: () => o,
                isDesktopWatchlistAvailable: () => s
            });
            var r = n(638456);

            function o(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then((e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = `ApiError:${e.code}`), t
                }))
            }

            function s(e) {
                return Boolean((0, r.isDesktopApp)() && e && "getActiveWatchlistId" in e && "onActiveWatchlistIdChange" in e)
            }
        },
        642709: (e, t, n) => {
            "use strict";
            n.d(t, {
                DialogBreakpoints: () => o
            });
            var r = n(645469);
            const o = {
                SmallHeight: r["small-height-breakpoint"],
                TabletSmall: r["tablet-small-breakpoint"],
                TabletNormal: r["tablet-normal-breakpoint"]
            }
        },
        332450: (e, t, n) => {
            "use strict";
            n.d(t, {
                CLOSE_POPUPS_AND_DIALOGS_COMMAND: () => r,
                breakpointList: () => o
            });
            const r = "CLOSE_POPUPS_AND_DIALOGS_COMMAND",
                o = [1920, 1440, 1280, 1024, 768, 480, 0]
        },
        261309: (e, t, n) => {
            "use strict";
            n.d(t, {
                SYMBOL_LIST_REPOSITORY_BACKEND_SERVICE: () => r
            });
            const r = {
                id: "SymbolListRepositoryBackend"
            }
        },
        440498: (e, t, n) => {
            "use strict";
            n.d(t, {
                DELETED_SYMBOLS_LIST_ID: () => a,
                isDeletedSymbolsList: () => c,
                DeletedSymbolsList: () => u
            });
            var r = n(49437),
                o = n(738600);
            const s = "deleted_symbols_list",
                i = "is_deleted_symbols_list_active",
                a = "deleted_symbols_list_id",
                l = "There was an error during attempt to set local storage value",
                c = e => e === a;
            class u {
                constructor() {
                    this._logError = (e, t) => {
                        e instanceof Error ? o.logger.logError(e.message) : o.logger.logError(t)
                    }
                }
                createList(e) {
                    this._setList(e)
                }
                removeList() {
                    try {
                        r.TVLocalStorage.removeItem(s)
                    } catch (e) {
                        this._logError(e, "There was an error during local storage item removal")
                    }
                }
                addSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const n = new Set(t.symbols);
                    for (const t of e) n.add(t);
                    const r = Array.from(n);
                    r.length > 100 ? t.symbols = r.reverse().slice(0, 100).reverse() : t.symbols = r, this._setList(t)
                }
                removeSymbols(e) {
                    const t = this.getList();
                    if (!t) return;
                    const n = new Set(t.symbols);
                    for (const t of e) n.delete(t);
                    t.symbols = Array.from(n), this._setList(t)
                }
                replaceSymbols(e) {
                    const t = this.getList();
                    t && (t.symbols = e, this._setList(t))
                }
                getIsActive() {
                    try {
                        return "true" === r.TVLocalStorage.getItem(i)
                    } catch (e) {
                        return this._logError(e, l), !1
                    }
                }
                setIsActive(e) {
                    try {
                        r.TVLocalStorage.setItem(i, String(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
                getList() {
                    try {
                        const e = r.TVLocalStorage.getItem(s);
                        return e ? JSON.parse(e) : null
                    } catch (e) {
                        return this._logError(e, "There was an error during attempt to get local storage value"), null
                    }
                }
                _setList(e) {
                    try {
                        r.TVLocalStorage.setItem(s, JSON.stringify(e))
                    } catch (e) {
                        this._logError(e, l)
                    }
                }
            }
        },
        575816: (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    TickerType: () => r
                }),
                function(e) {
                    e.Ticker = "ticker", e.Description = "description"
                }(r || (r = {}))
        },
        738600: (e, t, n) => {
            "use strict";
            n.d(t, {
                logger: () => r
            });
            const r = (0, n(272001).getLogger)("Platform.Model.Watchlist")
        },
        804169: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                activeSymbolListNavigator: () => c
            });
            var r = n(254773),
                o = n(336349),
                s = n(799786),
                i = n(15814),
                a = n(583912),
                l = n(456746);

            function* c() {
                const e = (0, r.eventChannel)((e => {
                    const t = (t, n) => {
                            t.target === document.body && e(n)
                        },
                        n = s.createGroup({
                            desc: "Active Symbol List Navigation"
                        });
                    return n.add({
                        desc: "Select previous symbol",
                        hotkey: 38,
                        handler: e => t(e, "previous")
                    }), n.add({
                        desc: "Select previous symbol",
                        hotkey: s.Modifiers.Shift + 32,
                        handler: e => t(e, "previous")
                    }), n.add({
                        desc: "Select next symbol",
                        hotkey: 32,
                        handler: e => t(e, "next")
                    }), n.add({
                        desc: "Select next symbol",
                        hotkey: 40,
                        handler: e => t(e, "next")
                    }), () => n.destroy()
                }));
                try {
                    for (;;) {
                        const t = yield(0, o.take)(e), n = (0, i.getGlobalActiveSymbolList)(yield(0, o.select)());
                        if (null === n) continue;
                        const {
                            symbols: r
                        } = n;
                        if (0 === r.length) continue;
                        const s = (0, l.getSymbolFromList)(a.linking.symbol.value(), r),
                            c = r.indexOf(s || "");
                        switch (t) {
                            case "previous":
                                {
                                    const e = -1 === c ? r.length - 1 : (c + r.length - 1) % r.length;
                                    if ((0, l.isValidSeparatorItem)(r[e])) {
                                        const t = (0, l.findNextAvailableSymbol)(e, r, "previous");
                                        t && a.linking.symbol.setValue(t);
                                        break
                                    }
                                    a.linking.symbol.setValue(r[e]);
                                    break
                                }
                            case "next":
                                {
                                    const e = -1 === c ? 0 : (c + r.length + 1) % r.length;
                                    if ((0, l.isValidSeparatorItem)(r[e])) {
                                        const t = (0, l.findNextAvailableSymbol)(e, r, "next");
                                        t && a.linking.symbol.setValue(t);
                                        break
                                    }
                                    a.linking.symbol.setValue(r[e]);
                                    break
                                }
                        }
                    }
                } finally {
                    e.close()
                }
            }
        },
        63299: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                configureStore: () => k
            });
            var r = n(826300),
                o = n(254773),
                s = n(495046),
                i = n(797035),
                a = n(226722),
                l = n(777491),
                c = n(776324),
                u = n(691622),
                d = n(316230),
                m = n(189086),
                h = n(958613);

            function p(e, t, n, r) {
                return {
                    id: e,
                    tickerType: t,
                    columns: n,
                    options: r,
                    selectedSymbols: [],
                    sorting: null,
                    highlightedSymbols: null,
                    listId: null,
                    isLoading: !1,
                    symbolsBeforeSorting: null,
                    sortingListId: null,
                    scrollToId: null
                }
            }

            function f(e, t) {
                if (e.length !== t.length) return !1;
                const n = [...e].sort(),
                    r = [...t].sort();
                return (0, d.default)(n, r)
            }

            function y(e, t) {
                return { ...e,
                    [t]: { ...e[t],
                        sorting: null,
                        symbolsBeforeSorting: null,
                        sortingListId: null
                    }
                }
            }
            var g = n(456746);

            function b(e) {
                const t = {};
                for (const n of e) t[n.id] = n;
                return t
            }
            const v = (0, u.combineReducers)({
                lists: (e = {}, t) => function(e = {}, t) {
                    switch (t.type) {
                        case m.SET_SYMBOL_LISTS:
                            {
                                const {
                                    symbolLists: n
                                } = t;
                                return { ...e,
                                    ...b(n)
                                }
                            }
                        case m.ADD_OR_UPDATE_SYMBOL_LIST:
                            {
                                const {
                                    symbolList: n
                                } = t;
                                return { ...e,
                                    [n.id]: n
                                }
                            }
                        case m.REMOVE_SYMBOL_LIST:
                            {
                                const n = { ...e
                                };
                                return delete n[t.id],
                                n
                            }
                        default:
                            return e
                    }
                }(e, t)
            });
            var _ = n(217525),
                w = n(650151);
            const S = (0, u.combineReducers)({
                positions: function(e = {}, t) {
                    switch (t.type) {
                        case m.UPDATE_POSITIONS:
                            {
                                const {
                                    symbol: n,
                                    position: r
                                } = t;
                                return (0, g.isEqualRecords)(e[n], r) ? e : { ...e,
                                    [n]: r
                                }
                            }
                        case m.UPDATE_BULK_POSITIONS:
                            {
                                const {
                                    map: n
                                } = t,
                                r = { ...e
                                };
                                let o = !1;
                                for (const [t, s] of Object.entries(n))(0, g.isEqualRecords)(e[t], s) || (o = !0, r[t] = s);
                                return o ? r : e
                            }
                        default:
                            return e
                    }
                },
                customLists: c.reducer,
                hotLists: (e, t) => v((0, w.ensureNotNull)(e), t),
                markedLists: (e, t) => (0, i.reducer)((0, w.ensureNotNull)(e), t),
                widgets: function(e = {}, t) {
                    if (i.markMany.match(t) || i.renameSeparator.match(t) || i.remove.match(t) || i.reset.match(t) || i.setup.match(t)) {
                        let n = e;
                        for (const r of Object.values(e)) {
                            const {
                                listId: o,
                                sortingListId: s,
                                symbolsBeforeSorting: a
                            } = r;
                            if (null !== o && (0, i.isListColor)(o)) {
                                if (i.setup.match(t) && o === s) {
                                    const e = t.payload.lists.find((e => e.color === s));
                                    if (void 0 !== e && null !== a && f(e.symbols, a)) continue
                                }
                                n = y(e, r.id)
                            }
                        }
                        return n
                    }
                    if (c.setup.match(t) || c.insert.match(t) || c.exclude.match(t) || c.exact.match(t) || c.replace.match(t)) {
                        let n = e;
                        for (const r of Object.values(e)) {
                            const {
                                listId: o,
                                sortingListId: s,
                                symbolsBeforeSorting: a
                            } = r;
                            if (null !== o) {
                                if ((0, i.isListColor)(o) || (0, h.isHotListId)(o)) continue;
                                if (o === s && c.setup.match(t)) {
                                    const e = t.payload.lists.find((e => e.id === s));
                                    if (void 0 !== e && null !== a && f(e.symbols, a)) continue
                                }
                                n = y(e, r.id)
                            }
                        }
                        return n
                    }
                    return function(e = {}, t) {
                        var n;
                        switch (t.type) {
                            case m.INIT_WIDGET:
                                {
                                    const {
                                        id: n,
                                        tickerType: r,
                                        columns: o,
                                        options: s
                                    } = t;
                                    return { ...e,
                                        [n]: p(n, r, o, s)
                                    }
                                }
                            case m.UPDATE_WIDGET:
                                {
                                    const {
                                        widgetId: r,
                                        widget: o
                                    } = t,
                                    s = { ...e,
                                        [r]: { ...e[r],
                                            ...o
                                        }
                                    },
                                    i = e[r].tickerType,
                                    a = o.tickerType,
                                    l = "short_name" === (null === (n = e[r].sorting) || void 0 === n ? void 0 : n.column);
                                    return void 0 !== a && i !== a && l ? y(s, r) : s
                                }
                            case m.UPDATE_WIDGET_OPTIONS:
                                {
                                    const {
                                        widgetId: n,
                                        options: r
                                    } = t;
                                    return { ...e,
                                        [n]: { ...e[n],
                                            options: { ...e[n].options,
                                                ...r
                                            }
                                        }
                                    }
                                }
                            default:
                                return e
                        }
                    }(e, t)
                },
                isAuthenticated: _.authReducer,
                activeSymbolList: function(e = null, t) {
                    return t.type === m.UPDATE_ACTIVE_LIST ? t.id : e
                }
            });

            function k() {
                const e = (0, o.default)();
                return {
                    store: (0, r.configureStore)({
                        reducer: S,
                        middleware: t => [...t(), e, s.enabled("widget") ? null : (0, c.createCrossTabSyncMiddleware)((0, l.randomHash)(), a.TVXWindowEvents), (0, i.createCrossTabSyncMiddleware)((0, l.randomHash)(), a.TVXWindowEvents)].filter((e => null !== e))
                    }),
                    runner: e
                }
            }
        },
        826939: (e, t, n) => {
            "use strict";
            n.d(t, {
                WATCHLIST_WIDGET_ID: () => r
            });
            const r = "watchlist-widget"
        },
        436779: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ROOT_ID: () => c,
                WATCHLIST_TICKER_TYPE_KEY: () => u,
                createNodes: () => d,
                sortComparator: () => m,
                getInitialTickerType: () => h,
                setInitialTickerType: () => p,
                exportList: () => f,
                expandWatchlist: () => y
            });
            var r = n(650151),
                o = n(495046),
                s = n(49437),
                i = n(575816),
                a = n(763532),
                l = n(740087);
            const c = "ROOT_ID",
                u = "WatchlistTickerType";

            function d(e) {
                const t = [{
                    id: c,
                    children: e,
                    level: 0
                }];
                for (const n of e) t.push({
                    id: n,
                    level: 1,
                    children: [],
                    parentId: c
                });
                return t
            }

            function m(e, t) {
                return (0, r.ensureNotNull)(e.name).localeCompare((0, r.ensureNotNull)(t.name), void 0, {
                    numeric: !0
                })
            }

            function h() {
                if (o.enabled("widget")) return i.TickerType.Ticker;
                const e = s.TVLocalStorage.getItem(u);
                return null != e ? e : i.TickerType.Ticker
            }

            function p(e) {
                s.TVLocalStorage.setItem(u, e)
            }

            function f(e, t) {
                (0, a.saveTextFile)(`${e}.txt`, t.join(","))
            }

            function y() {
                if (!window.widgetbar) return;
                window.widgetbar.setPage("base"), (0, l.expandWidget)("watchlist", 64)
            }
        },
        795394: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                snapshoter: () => i,
                resolveSymbolName: () => l,
                resolveSymbolNameForAll: () => c,
                resolveSymbolNameForAllDistinct: () => u
            });
            var r = n(611998),
                o = n(675128);
            const s = new Set(["pro_name", "base_name", "short_name", "description", "type", "exchange", "typespecs", "listed_exchange", "country_code", "provider_id", "symbol-primaryname", "logoid", "base-currency-logoid", "currency-logoid", "update_mode", "source", "source2", "pricescale", "minmov", "fractional"]),
                i = (0, o.lazyValue)((() => new r.QuoteSessionSnapshoter({
                    name: "basic-symbol-quotes",
                    fields: [...s]
                }))),
                a = new Set(["pro_name"]);

            function l(e) {
                return i().getSnapshot(e, a).then((e => "error" === e.status ? e.symbolname : e.values.pro_name))
            }

            function c(e) {
                return Promise.all(e.map(l))
            }

            function u(e) {
                return c(e).then((e => [...new Set(e)]))
            }
        },
        951292: (e, t, n) => {
            "use strict";
            n.d(t, {
                useOutsideEvent: () => s
            });
            var r = n(50959),
                o = n(314308);

            function s(e) {
                const {
                    click: t,
                    mouseDown: n,
                    touchEnd: s,
                    touchStart: i,
                    handler: a,
                    reference: l,
                    ownerDocument: c = document
                } = e, u = (0, r.useRef)(null), d = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: s,
                            touchStart: i
                        },
                        r = l ? l.current : u.current;
                    return (0, o.addOutsideEventListener)(d.current, r, a, c, e)
                }), [t, n, s, i, a]), l || u
            }
        },
        733410: (e, t, n) => {
            "use strict";
            n.d(t, {
                KeyCode: () => r,
                KeyboardListener: () => s,
                makeKeyboardListener: () => i
            });
            var r, o = n(50959);
            ! function(e) {
                e[e.Enter = 13] = "Enter", e[e.Space = 32] = "Space", e[e.Backspace = 8] = "Backspace", e[e.DownArrow = 40] = "DownArrow", e[e.UpArrow = 38] = "UpArrow", e[e.RightArrow = 39] = "RightArrow", e[e.LeftArrow = 37] = "LeftArrow", e[e.Escape = 27] = "Escape", e[e.Tab = 9] = "Tab"
            }(r || (r = {}));
            class s {
                constructor() {
                    this._handlers = new Map
                }
                registerHandlers(e) {
                    Object.keys(e).forEach((t => {
                        const n = parseInt(t);
                        let r = e[n];
                        if (Array.isArray(r) || (r = [r]), this._handlers.has(n)) {
                            const e = this._handlers.get(n);
                            e && r.forEach((t => e.add(t)))
                        } else this._handlers.set(n, new Set(r))
                    }))
                }
                unregisterHandlers(e) {
                    Object.keys(e).forEach((t => {
                        const n = parseInt(t);
                        let r = e[n];
                        if (Array.isArray(r) || (r = [r]), this._handlers.has(n)) {
                            const e = this._handlers.get(n);
                            e && r.forEach((t => e.delete(t)))
                        }
                    }))
                }
                deleteAllHandlers() {
                    this._handlers = new Map
                }
                registerHandler(e, t) {
                    if (this._handlers.has(e)) {
                        const n = this._handlers.get(e);
                        n && n.add(t)
                    } else this._handlers.set(e, new Set([t]))
                }
                unregisterHandler(e, t) {
                    if (this._handlers.has(e)) {
                        const n = this._handlers.get(e);
                        n && n.delete(t)
                    }
                }
                listen(e) {
                    if (this._handlers.has(e.keyCode)) {
                        const t = this._handlers.get(e.keyCode);
                        t && t.forEach((t => t(e)))
                    }
                }
            }

            function i(e) {
                var t, n, r;
                return (r = class extends o.PureComponent {
                    constructor(e) {
                        super(e), this._keyboardListener = new s, this._listener = this._keyboardListener.listen.bind(this._keyboardListener)
                    }
                    componentDidMount() {
                        this._registerHandlers(this.props.keyboardEventHandlers)
                    }
                    componentDidUpdate(e) {
                        e.keyboardEventHandlers !== this.props.keyboardEventHandlers && this._registerHandlers(this.props.keyboardEventHandlers)
                    }
                    render() {
                        const {
                            keyboardEventHandlers: t,
                            ...n
                        } = this.props;
                        return o.createElement(e, { ...n,
                            onKeyDown: this._listener
                        })
                    }
                    _registerHandlers(e) {
                        e && (this._keyboardListener.deleteAllHandlers(), this._keyboardListener.registerHandlers(e))
                    }
                }).displayName = `KeyboardListener(${null!==(n=null!==(t=e.displayName)&&void 0!==t?t:e.name)&&void 0!==n?n:"Component"})`, r
            }
        },
        18182: (e, t, n) => {
            "use strict";
            n.d(t, {
                MatchMedia: () => o
            });
            var r = n(50959);
            class o extends r.PureComponent {
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
        157490: (e, t, n) => {
            "use strict";
            n.d(t, {
                OutsideEvent: () => o
            });
            var r = n(951292);

            function o(e) {
                const {
                    children: t,
                    ...n
                } = e;
                return t((0, r.useOutsideEvent)(n))
            }
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => s,
                getRootOverlapManager: () => a
            });
            var r = n(650151);
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
            class s {
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
                    const r = this._document.createElement("div");
                    if (r.style.position = t.position, r.style.zIndex = this._index.toString(), r.dataset.id = e, void 0 !== t.index) {
                        const e = this._container.childNodes.length;
                        if (t.index >= e) this._container.appendChild(r);
                        else if (t.index <= 0) this._container.insertBefore(r, this._container.firstChild);
                        else {
                            const e = this._container.childNodes[t.index];
                            this._container.insertBefore(r, e)
                        }
                    } else "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                    return this._windows.set(e, r), ++this._index, r
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
            const i = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, r.ensureDefined)(i.get(t)); {
                    const t = new s(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return i.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        368337: (e, t, n) => {
            "use strict";
            n.d(t, {
                makeOverlapable: () => s
            });
            var r = n(50959),
                o = n(707533);

            function s(e) {
                return class extends r.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: n
                        } = this.props;
                        if (!t) return null;
                        const s = r.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === n ? s : r.createElement(o.Portal, null, s)
                    }
                }
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => l,
                PortalContext: () => c
            });
            var r = n(50959),
                o = n(500962),
                s = n(777491),
                i = n(829725),
                a = n(670797);
            class l extends r.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, s.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(r.createElement(c.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, i.getRootOverlapManager)() : this.context
                }
            }
            l.contextType = a.SlotContext;
            const c = r.createContext(null)
        },
        670797: (e, t, n) => {
            "use strict";
            n.d(t, {
                Slot: () => o,
                SlotContext: () => s
            });
            var r = n(50959);
            class o extends r.Component {
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return r.createElement("div", {
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
            const s = r.createContext(null)
        },
        416293: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetCaret: () => l
            });
            var r = n(50959),
                o = n(497754),
                s = n(83436),
                i = n(190948),
                a = n(100578);

            function l(e) {
                const {
                    dropped: t,
                    className: n
                } = e;
                return r.createElement(s.Icon, {
                    className: o(n, i.icon, {
                        [i.dropped]: t
                    }),
                    icon: a
                })
            }
        },
        12173: (e, t, n) => {
            "use strict";
            n.d(t, {
                TooltipWizard: () => c,
                TooltipWidget: () => u
            });
            var r = n(50959),
                o = n(497754),
                s = n(83436),
                i = n(707533),
                a = n(333765),
                l = n(844662);
            class c extends r.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: n,
                        reference: s,
                        containerClassName: a,
                        arrowClassName: c
                    } = this.props;
                    return r.createElement(i.Portal, null, r.createElement("div", {
                        ref: s
                    }, r.createElement(u, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: o(l.arrowHolder, this._getArrowDirectionClass(), c),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: n,
                        containerClassName: a
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return o(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return o(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return o(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function u(e) {
                const {
                    className: t,
                    containerClassName: n,
                    contentClassName: i,
                    reference: c,
                    style: u,
                    arrow: d = !0,
                    arrowClassName: m,
                    arrowReference: h,
                    onClose: p,
                    arrowStyle: f,
                    children: y,
                    ...g
                } = e;
                return r.createElement("div", { ...g,
                    className: t,
                    ref: c,
                    style: u
                }, d && r.createElement("div", {
                    className: m,
                    ref: h,
                    style: f
                }), r.createElement("div", {
                    className: o(l.container, n)
                }, r.createElement("div", {
                    className: o(l.content, i)
                }, y), p && r.createElement(s.Icon, {
                    className: l.closeButton,
                    icon: a,
                    onClick: p
                })))
            }
        },
        150881: (e, t, n) => {
            "use strict";
            n.d(t, {
                TouchScrollContainer: () => a
            });
            var r = n(50959),
                o = n(259142),
                s = n(650151),
                i = n(638456);
            const a = (0, r.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...s
                } = e, a = (0, r.useRef)(null);
                return (0, r.useImperativeHandle)(t, (() => a.current)), (0, r.useLayoutEffect)((() => {
                    if (i.CheckMobile.iOS()) return null !== a.current && (0, o.disableBodyScroll)(a.current, {
                        allowTouchMove: l(a)
                    }), () => {
                        null !== a.current && (0, o.enableBodyScroll)(a.current)
                    }
                }), []), r.createElement("div", {
                    ref: a,
                    ...s
                }, n)
            }));

            function l(e) {
                return t => {
                    const n = (0, s.ensureNotNull)(e.current),
                        r = document.activeElement;
                    return !n.contains(t) || null !== r && n.contains(r) && r.contains(t)
                }
            }
        },
        366276: (e, t, n) => {
            "use strict";
            n.d(t, {
                CLIENT_TO_SERVER_FIELD_MAPPING: () => r,
                mapServerQuoteValuesToClient: () => s
            });
            const r = new Map([
                    ["change", "ch"],
                    ["last_price", "lp"],
                    ["change_percent", "chp"]
                ]),
                o = new Map([
                    ["ch", "change"],
                    ["lp", "last_price"],
                    ["chp", "change_percent"]
                ]);

            function s(e) {
                var t;
                const n = {};
                for (const [r, s] of Object.entries(e)) {
                    n[null !== (t = o.get(r)) && void 0 !== t ? t : r] = s
                }
                return n
            }
        },
        611998: (e, t, n) => {
            "use strict";
            n.d(t, {
                QuoteSessionSnapshoter: () => d
            });
            var r = n(801669),
                o = n(869403),
                s = n.n(o),
                i = n(462282),
                a = n(777491),
                l = n(736844),
                c = n(461909),
                u = n(366276);
            class d {
                constructor(e) {
                    if (this._onSymbolData = new(s()), this._incomplete = new Set, this._connected = !1, this._batcher = null, this._handler = e => {
                            switch (e.method) {
                                case "connected":
                                    this._connected || (this._connected = !0, this._handleConnected());
                                    break;
                                case "quote_symbol_data":
                                    this._connected && this._handleSymbolData(e.params[0]);
                                    break;
                                case "quote_completed":
                                    this._connected && this._handleCompleteData(e.params[0]);
                                    break;
                                case "disconnected":
                                    this._connected && (this._connected = !1, this._batcher = null)
                            }
                        }, 0 === e.fields.length) throw new Error('Support for empty "fields" array is not implemented');
                    const {
                        provider: t = r.QuoteSession
                    } = e;
                    this._fields = new Set(e.fields), this._session = new t(window.ChartApiInstance, ["snapshoter", e.name, (0, a.randomHash)()].filter(Boolean).join("_")), this._session.connect(this._handler)
                }
                getSnapshotSync(e, t) {
                    const n = d.cache.get(e);
                    return n && this._isSnapshotReady(n, t) ? n : null
                }
                getSnapshotsForAllSync(e, t) {
                    return e.map((e => this.getSnapshotSync(e, t)))
                }
                getSnapshot(e, t, n) {
                    var r;
                    const o = null !== (r = null == n ? void 0 : n.signal) && void 0 !== r ? r : null;
                    return new Promise(((n, r) => {
                        if (o && o.aborted) throw (0, i.createAbortError)();
                        const s = () => {
                                this._onSymbolData.unsubscribe(this, a), r((0, i.createAbortError)())
                            },
                            a = (r = e) => {
                                if (r !== e) return !1;
                                const i = d.cache.get(e);
                                return !(!i || !this._isSnapshotReady(i, t)) && (this._onSymbolData.unsubscribe(this, a), null == o || o.removeEventListener("abort", s), n(i), !0)
                            };
                        if (!a() && (null == o || o.addEventListener("abort", s, {
                                once: !0
                            }), this._onSymbolData.subscribe(this, a), !this._incomplete.has(e))) {
                            if (this._incomplete.add(e), !this._connected) return;
                            if (null === this._batcher) {
                                const t = this._batcher = {
                                    symbols: new Set([e]),
                                    promise: Promise.resolve().then((() => {
                                        this._batcher === t && (this._session.quoteAddSymbols([...t.symbols]), this._batcher = null)
                                    }))
                                }
                            } else this._batcher.symbols.add(e)
                        }
                    }))
                }
                getSnapshotsForAll(e, t, n) {
                    return Promise.all(e.map((e => this.getSnapshot(e, t, n))))
                }
                static relax(e) {
                    return e
                }
                static isSuccess(e) {
                    return "error" !== e.status
                }
                static hasAllFields(e, t) {
                    for (const n of Array.from(t))
                        if (!e.hasOwnProperty(n)) return !1;
                    return !0
                }
                _isSnapshotReady(e, t) {
                    return "error" === e.status || this._hasAllFields(e, t)
                }
                _hasAllFields(e, t) {
                    return d.hasAllFields(e.values, Array.from(t))
                }
                _handleConnected() {
                    if (this._fields.size > 0) {
                        const e = [...this._fields].map((e => {
                            var t;
                            return null !== (t = u.CLIENT_TO_SERVER_FIELD_MAPPING.get(e)) && void 0 !== t ? t : e
                        }));
                        this._session.quoteSetFields(e)
                    }
                    this._incomplete.size > 0 && this._session.quoteAddSymbols([...this._incomplete])
                }
                _handleCompleteData(e) {
                    var t;
                    const n = null !== (t = d.cache.get(e)) && void 0 !== t ? t : {
                        symbolname: e,
                        status: "ok",
                        values: {}
                    };
                    d.cache.update(n, this._fields, !0), this._session.quoteRemoveSymbols([e]), this._incomplete.delete(e), this._onSymbolData.fire(e)
                }
                _handleSymbolData(e) {
                    (0, c.normalizeUpdateMode)(e.values);
                    const t = e.symbolname;
                    d.cache.update(e, this._fields, !1), "error" === e.status ? this._handleCompleteData(t) : this._onSymbolData.fire(t)
                }
            }
            d.cache = l.QUOTE_FIELDS_CACHE
        },
        696828: (e, t, n) => {
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
                s = function() {
                    var e = [{
                        pattern: "(",
                        ctor: i
                    }, {
                        pattern: ")",
                        ctor: a
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
                        ctor: m
                    }, {
                        pattern: "^",
                        ctor: h
                    }, {
                        pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                        ctor: g
                    }, {
                        pattern: /\./,
                        ctor: _
                    }, {
                        pattern: r.enabled("charting_library_base") ? /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/ : /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                        ctor: y
                    }, {
                        pattern: /'[^']*/,
                        ctor: v
                    }, {
                        pattern: /[\0-\x20\s]+/,
                        ctor: s
                    }];

                    function t(e, t) {
                        var n = function() {};
                        return n.prototype = t.prototype, e.prototype = new n, e
                    }

                    function n() {}

                    function s(e) {
                        this.value = e
                    }

                    function i() {}

                    function a() {}

                    function l() {}

                    function c() {}

                    function u() {}

                    function d() {}

                    function m() {}

                    function h() {}
                    n.prototype.toString = function() {
                            return this.value
                        }, t(s, n), t(i, n),
                        i.prototype.value = "(", t(a, n), a.prototype.value = ")", t(l, n), t(c, l), c.prototype.value = "+", c.prototype.precedence = 0, c.prototype.commutative = !0, t(u, l), u.prototype.value = "-", u.prototype.precedence = 0, u.prototype.commutative = !1, t(d, l), d.prototype.value = "*", d.prototype.precedence = 1, d.prototype.commutative = !0, t(m, l), m.prototype.value = "/", m.prototype.precedence = 1, m.prototype.commutative = !1, t(h, l), h.prototype.value = "^", h.prototype.precedence = 2, h.prototype.commutative = !1;
                    var p = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
                        f = /[+\-/*]/;

                    function y(e) {
                        this.value = e
                    }

                    function g(e) {
                        this.value = e
                    }

                    function b(e) {
                        this.value = e
                    }

                    function v() {
                        y.apply(this, arguments)
                    }

                    function _() {
                        g.apply(this, arguments)
                    }
                    t(y, n), y.prototype.toString = function() {
                        if (this.hasOwnProperty("_ticker")) {
                            var e = f.test(this._ticker) ? "'" : "";
                            return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                        }
                        return this.value
                    }, y.prototype.parse = function() {
                        var e = p.exec(this.value);
                        e[1] && (this._exchange = e[1]), this._ticker = e[2]
                    }, y.prototype.parseAsFutures = function() {
                        this.hasOwnProperty("_ticker") || this.parse();
                        for (var e = function(e) {
                                return o.some((function(t) {
                                    return t.t === e
                                }))
                            }, t = 2; t >= 1; --t) {
                            var n = this._ticker.slice(0, t);
                            if (e(n)) {
                                this._root = n, this._contract = this._ticker.slice(t);
                                break
                            }
                        }
                    }, y.prototype.exchange = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
                        null == e ? delete this._exchange : this._exchange = e + ""
                    }, y.prototype.ticker = function(e) {
                        if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
                        null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
                    }, y.prototype.root = function(e) {
                        if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this._contract || "")))
                    }, y.prototype.contract = function(e) {
                        if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
                        null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root + this._contract))
                    }, t(g, n), g.prototype.toString = function() {
                        return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
                    }, g.prototype.parse = function() {
                        this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
                    }, b.prototype.toString = function() {
                        return this.value
                    }, t(v, y), v.prototype.isIncomplete = !0, v.prototype.incompleteSuggest = function() {
                        if ("'" !== this.value) return String("'")
                    }, t(_, g), _.prototype.isIncomplete = !0;
                    var w = new RegExp(e.map((function(e) {
                        return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
                    })).concat(".").join("|"), "g");

                    function S(t, n) {
                        var r, o = [];
                        e: for (; r = w.exec(t);) {
                            for (var i = e.length; i--;)
                                if (r[i + 1]) {
                                    if (e[i].ctor) {
                                        var a = new e[i].ctor(r[i + 1]);
                                        a._offset = r.index, o.push(a)
                                    }
                                    continue e
                                }
                            var l = new b(r[0]);
                            l._offset = r.index, o.push(l)
                        }
                        if (n && n.recover) {
                            var c;
                            for (i = o.length; i--;) {
                                var u = o[i];
                                if (u instanceof g || u instanceof y) {
                                    if (void 0 !== c) {
                                        var d = new y(""),
                                            m = o.splice(i, c - i + 1, d);
                                        d.value = m.map((function(e) {
                                            return e.value
                                        })).join("")
                                    }
                                    c = i
                                } else u instanceof s || (c = void 0)
                            }
                        }
                        return o
                    }

                    function k(e) {
                        for (var t = [], n = 0; n < e.length; n++) e[n] instanceof s || t.push(e[n]);
                        return t
                    }

                    function L(e) {
                        e = k(e);
                        for (var t, n = [], r = [], o = 0; o < e.length; o++) {
                            var s = e[o];
                            if (s instanceof l) r.length && r[r.length - 1].minPrecedence > s.precedence && (r[r.length - 1].minPrecedence = s.precedence);
                            else if (s instanceof i) r.push(t = {
                                minPrecedence: 1 / 0,
                                openBraceIndex: o
                            });
                            else if (s instanceof a) {
                                var c = e[(t = r.pop()).openBraceIndex - 1],
                                    u = e[o + 1];
                                u instanceof l && !(u.precedence <= t.minPrecedence) || !(!(c instanceof l) || c.precedence < t.minPrecedence || c.precedence === t.minPrecedence && c.commutative) || (n.unshift(t.openBraceIndex), n.push(o), r.length && r[r.length - 1].minPrecedence > t.minPrecedence && (r[r.length - 1].minPrecedence = t.minPrecedence))
                            }
                        }
                        for (o = n.length; o--;) e.splice(n[o], 1);
                        return e
                    }

                    function C(e) {
                        if ("string" != typeof e) throw new TypeError("expression must be a string");
                        return (e = S(e)).filter((function(e) {
                            return e instanceof y
                        })).map((function(e) {
                            return e.exchange()
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function E(e) {
                        return 1 !== (e = C(e)).length ? null : e[0]
                    }

                    function x(e, t) {
                        return (e = C(e)).some((function(e) {
                            return t.includes((e || "").toUpperCase())
                        }))
                    }

                    function T(e) {
                        return e.join("")
                    }
                    return {
                        tokenize: S,
                        validate: function(e) {
                            if (r.enabled("charting_library_base")) return {
                                currentState: "var"
                            };
                            for (var t = "init", n = "var", o = t, c = {
                                    warnings: [],
                                    errors: [],
                                    isEmpty: !0
                                }, u = [], d = 0; d < e.length; d++) {
                                if (!((h = e[d]) instanceof s)) {
                                    if (delete c.isEmpty, h.isIncomplete) {
                                        var m = {
                                            status: "incomplete",
                                            reason: "incomplete_token",
                                            offset: h._offset,
                                            token: h
                                        };
                                        if (h.incompleteSuggest && (m.recover = {
                                                append: h.incompleteSuggest()
                                            }), c.warnings.push(m), d !== e.length - 1) {
                                            m.status = "error";
                                            continue
                                        }
                                    }
                                    if (h instanceof y || h instanceof g) {
                                        if (o === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        o = n
                                    } else if (h instanceof l) {
                                        if (o !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        o = "operator"
                                    } else if (h instanceof i) {
                                        if (o === n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        u.push(h), o = t
                                    } else if (h instanceof a) {
                                        if (o !== n) {
                                            c.errors.push({
                                                status: "error",
                                                reason: "unexpected_token",
                                                offset: h._offset,
                                                token: h
                                            });
                                            continue
                                        }
                                        u.pop() || c.errors.push({
                                            status: "error",
                                            reason: "unbalanced_brace",
                                            offset: h._offset,
                                            token: h,
                                            recover: {
                                                prepend: new i
                                            }
                                        }), o = n
                                    } else h instanceof b && c.errors.push({
                                        status: "error",
                                        reason: "unparsed_entity",
                                        offset: h._offset,
                                        token: h
                                    })
                                }
                            }
                            for (c.braceBalance = u.length, o !== n && c.warnings.push({
                                    status: "incomplete"
                                }); u.length;) {
                                var h;
                                m = {
                                    status: "incomplete",
                                    reason: "unbalanced_brace",
                                    offset: (h = u.pop())._offset,
                                    token: h
                                };
                                o === n && (m.recover = {
                                    append: new a
                                }), c.warnings.push(m)
                            }
                            return c.currentState = o, 0 === c.warnings.length && delete c.warnings, 0 === c.errors.length && delete c.errors, c
                        },
                        factorOutBraces: L,
                        normalizeTokens: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
                            return e
                        },
                        flip: function(e) {
                            var t = function(e) {
                                for (var t, n = 0, r = 1, o = 2, c = 3, u = n, d = 0, h = 0; h < e.length; h++) {
                                    var p = e[h];
                                    if (!(p instanceof s)) switch (u) {
                                        case n:
                                            if (!(p instanceof g && 1 == +p.value)) return !1;
                                            u = r;
                                            break;
                                        case r:
                                            if (!(u === r && p instanceof m)) return !1;
                                            u = o, t = h + 1;
                                            break;
                                        case o:
                                            if (p instanceof i) u = c, d = 1;
                                            else if (p instanceof l) return !1;
                                            break;
                                        case c:
                                            p instanceof i ? d++ : p instanceof a && --d <= 0 && (u = o)
                                    }
                                }
                                return e.slice(t)
                            }(e);
                            return L(t || [new g("1"), new m, new i].concat(e).concat(new a))
                        },
                        hasBatsSymbols: function(e) {
                            return x(e, ["BATS"])
                        },
                        hasEodSymbols: function(e) {
                            return (e = E(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                        },
                        hasChxjpySymbols: function(e) {
                            return x(e, ["CHXJPY"])
                        },
                        hasFreeDelaySymbols: function(e) {
                            return x(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                                return e.exchange.toUpperCase() + "_DLY"
                            })))
                        },
                        getExchange: E,
                        getExchanges: C,
                        isExchange: function(e, t) {
                            return !!(e = E(e)) && e.substring(0, t.length) === t
                        },
                        SymbolToken: y,
                        IncompleteSymbolToken: v,
                        NumberToken: g,
                        BinaryOperatorToken: l,
                        OpenBraceToken: i,
                        CloseBraceToken: a,
                        ticker: function(e) {
                            return new y(e).ticker()
                        },
                        shortName: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            var t = L(k(S(e)));
                            return t.forEach((function(e) {
                                e instanceof y && e.exchange(null)
                            })), T(t)
                        },
                        normalize: function(e) {
                            if ("string" != typeof e) throw new TypeError("expression must be a string");
                            return T(L(k(S(e))))
                        }
                    }
                }();
            e.exports = s
        },
        36715: (e, t, n) => {
            "use strict";
            n.d(t, {
                isCurrencySymbol: () => o
            });
            var r = n(519073);

            function o(e, t) {
                return "forex" === e || (0, r.hasCryptoTypespec)(e, null != t ? t : [])
            }
        },
        812191: (e, t, n) => {
            "use strict";
            n.d(t, {
                getSymbolPagePath: () => a,
                makeSymbolChartUrl: () => f,
                makeSymbolFinancialsPageUrl: () => y,
                makeSymbolPageUrl: () => p,
                makeSymbolTimelinePageUrl: () => g,
                makeTemplateSymbolUrl: () => m
            });
            var r = n(384809);
            var o = n(620031),
                s = n(36715),
                i = n(889267);

            function a(e, t) {
                if ("spread" === e.type || "expression" === e.type) {
                    const t = e.shortName && l(e.shortName),
                        n = e.proName && l(e.proName);
                    e = { ...e,
                        type: void 0,
                        shortName: t,
                        proName: n
                    }
                }
                return u(d(e, t), c(e))
            }

            function l(e) {
                var t;
                return null === (t = (0, i.tokenize)(e).find((e => "symbol" === e.type))) || void 0 === t ? void 0 : t.value
            }

            function c(e) {
                const t = {
                    shortName: e.shortName,
                    exchange: e.exchange,
                    proName: e.proName,
                    type: e.type
                };
                return e.proName && e.proName.includes(":") && ([t.exchange, t.shortName] = e.proName.split(":")), t
            }

            function u(e, t) {
                const n = encodeURIComponent(t.shortName || ""),
                    r = encodeURIComponent(t.exchange || ""),
                    o = encodeURIComponent(t.proName || "");
                return e.replace("{tvexchange}", r).replace("{tvsymbol}", n).replace("{tvprosymbol}", o)
            }

            function d(e, t = "") {
                const n = ["UKOIL", "USOIL", "XAGAUD", "XAGCAD", "XAGCHF", "XAGEUR", "XAGGBP", "XAGHKD", "XAGJPY", "XAGUSD", "XAUAUD", "XAUCAD", "XAUCHF", "XAUEUR", "XAUGBP", "XAUHKD", "XAUJPY", "XAUNZD", "XAUUSD", "XPDUSD", "XPTUSD", "SPX"];
                return void 0 === e.shortName && void 0 === e.proName ? (console.warn("Params missed"), "/") : b(e) ? e.exchange ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : `/symbols/{tvsymbol}/${t}` : e.exchange || e.proName ? e.shortName && n.includes(e.shortName) ? `/symbols/{tvsymbol}/${t}` : `/symbols/{tvexchange}-{tvsymbol}/${t}` : `/symbols/{tvsymbol}/${t}`
            }

            function m(e, t) {
                let n = e;
                if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(e)) {
                    let r = "tvprosymbol";
                    void 0 === t.proName && (r = "tvsymbol"), n = `${e}?tvwidgetsymbol={${r}}`
                }
                const r = u(n, c(t));
                if (!(0, o.isSafeUrl)(r)) throw new Error(`The symbol URL ${r} is not allowed.`);
                return r
            }

            function h(e, t, n, o) {
                const s = window.locale_domains ? function(e, t) {
                        const n = t || window.locale || "en";
                        let r = e[n] ? e[n] : e.en;
                        return r = "tradingview.com" === r ? "www.tradingview.com" : r, r ? document.location.protocol + "//" + r : ""
                    }(window.locale_domains, o) : window.location.origin,
                    i = s + u(e, c(t));
                return n ? (0, r.addUtmToUrl)(i, n) : i
            }

            function p(e, t, n, r) {
                return h(d(e, r), e, t, n)
            }

            function f(e, t) {
                return h("/chart/?symbol={tvprosymbol}", e, t)
            }

            function y(e, t, n) {
                return p(e, t, n, "financials-overview/")
            }

            function g(e, t, n) {
                return h(function(e) {
                    return e.exchange && !b(e) ? "/symbols/{tvexchange}-{tvsymbol}/history-timeline/" : "/symbols/{tvsymbol}/history-timeline/"
                }(e), e, t, n)
            }

            function b(e) {
                return !!e.type && (0, s.isCurrencySymbol)(e.type, e.typespecs)
            }
        },
        152198: (e, t, n) => {
            "use strict";
            n.d(t, {
                getMinimalProPlanForFeature: () => u,
                getProPlanDetailsForUser: () => d
            });
            var r = n(960254),
                o = n(632446),
                s = n(833813),
                i = n(919490),
                a = n(890740),
                l = n(897649);

            function c(e) {
                return window.pro ? e === r.ProPlans.Free ? -1 : window.pro.getProduct((0, i.getProductForTrial)(e)).upgrade_weight : 0
            }

            function u(e) {
                const t = function(e) {
                    return Object.values(r.ProPlans).filter((t => {
                        const n = (0, o.getConfig)(e, (0, i.getProductForTrial)(t));
                        return n && !((0, i.isTrialProduct)(t) && n[s.ProductFeatures.DISABLE_ON_TRIAL])
                    }))
                }(e).filter((e => !(0, i.isTrialProduct)(e)));
                return function(e) {
                    return e.sort(((e, t) => c(e) - c(t)))
                }(t)[0] || null
            }
            async function d() {
                const e = await (0, a.fetch)("/pro-plans/profile/"),
                    t = await e.json();
                if (e.ok) return t;
                if (403 === e.status) {
                    const n = t;
                    throw new l.ApiError(n.detail, e.status, n.code)
                }
                throw new Error(`Unable to handle unexpected response: ${String(e.text())}`)
            }
        },
        620031: (e, t, n) => {
            "use strict";

            function r(e) {
                const t = new URL(e, document.baseURI);
                return l(t) && a(t) && i(t)
            }

            function o(e) {
                const t = new URL(e, document.baseURI);
                return a(t) && i(t)
            }

            function s(e) {
                return !e.split(/(\s+)/).filter((e => e.trim().length > 0)).some((e => {
                    try {
                        const t = new URL(e);
                        return !(!t || !t.hostname.length) && !o(e)
                    } catch (e) {
                        return !1
                    }
                }))
            }
            n.d(t, {
                isInternalUrl: () => r,
                isSafeUrl: () => o,
                validateUrlsInText: () => s,
                isInternalHost: () => c,
                isTvLink: () => u
            });
            const i = e => !e.username,
                a = e => "http:" === e.protocol || "https:" === e.protocol,
                l = e => e.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(e.hostname) && c(e.hostname);

            function c(e, t = window.location.hostname) {
                const n = "." === t.slice(-1) ? 3 : 2,
                    r = t.toLowerCase().split(".").slice(-n),
                    o = e.toLowerCase().split(".").slice(-r.length);
                return r.join(".") === o.join(".")
            }

            function u(e) {
                try {
                    return e.startsWith("/") || c(new URL(e).hostname, "tradingview.com")
                } catch (e) {
                    return !1
                }
            }
        },
        384809: (e, t, n) => {
            "use strict";
            n.d(t, {
                addUtmToUrl: () => o
            });
            var r = n(186521);

            function o(e, t) {
                if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e)) return e;
                const n = (0, r.buildUtmQueryString)(t);
                if ("" === n) return e;
                const o = e.indexOf("?"),
                    s = e.indexOf("#"),
                    i = -1 !== s;
                if (-1 !== o && (!i || o < s)) {
                    return `${e.slice(0,o)}?${i?e.slice(o+1,s):e.slice(o+1)}&${n}${i?e.slice(s):""}`
                }
                if (i) {
                    return `${e.slice(0,s)}?${n}${e.slice(s)}`
                }
                return `${e}?${n}`
            }
        },
        186521: (e, t, n) => {
            "use strict";
            n.d(t, {
                filterUtmInfo: () => i,
                buildUtmQueryString: () => a,
                buildUtmQueryStringFromUrlParams: () => l
            });
            var r = n(798062),
                o = n(535799);
            const s = ["utm_source", "utm_medium", "utm_campaign"];

            function i(e) {
                const t = {};
                return s.forEach((n => {
                    const r = e[n];
                    "string" == typeof r && "" !== r && (t[n] = (0, o.htmlEscape)(r))
                })), t
            }

            function a(e, t = !1) {
                const n = (0, r.createUrlParams)(e);
                return n && t ? "?" + n : n
            }

            function l(e) {
                return a(i((0, r.getUrlParams)()), e)
            }
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        994443: e => {
            e.exports = {
                ar: ["تأكيد"],
                ca_ES: ["Confirmació"],
                cs: ["Potvrzení"],
                de: ["Bestätigung"],
                el: ["Επιβεβαίωση"],
                en: "Confirmation",
                es: ["Confirmación"],
                fa: ["تاییدیه"],
                fr: "Confirmation",
                he_IL: ["אישור"],
                hu_HU: ["Megerősítés"],
                id_ID: ["Konfirmasi"],
                it: ["Conferma"],
                ja: ["確認"],
                ko: ["확인"],
                ms_MY: ["Pengesahan"],
                nl_NL: ["Bevestig"],
                pl: ["Potwierdzenie"],
                pt: ["Confirmação"],
                ro: "Confirmation",
                ru: ["Подтвердите действие"],
                sv: ["Bekräftelse"],
                th: ["การยืนยัน"],
                tr: ["Onaylama"],
                vi: ["Xác nhận"],
                zh: ["确认"],
                zh_TW: ["確認"]
            }
        },
        620036: e => {
            e.exports = {
                ar: ["إلغاء"],
                ca_ES: ["Cancel·la"],
                cs: ["Zrušit"],
                de: ["Abbrechen"],
                el: ["Άκυρο"],
                en: "Cancel",
                es: ["Cancelar"],
                fa: ["لغو"],
                fr: ["Annuler"],
                he_IL: ["ביטול"],
                hu_HU: ["Törlés"],
                id_ID: ["Batal"],
                it: ["Annulla"],
                ja: ["キャンセル"],
                ko: ["취소"],
                ms_MY: ["Batal"],
                nl_NL: ["Annuleren"],
                pl: ["Anuluj"],
                pt: ["Cancelar"],
                ro: "Cancel",
                ru: ["Отмена"],
                sv: ["Avbryt"],
                th: ["ยกเลิก"],
                tr: ["İptal"],
                vi: ["Hủy bỏ"],
                zh: ["取消"],
                zh_TW: ["取消"]
            }
        },
        279984: e => {
            e.exports = {
                ar: ["إنشاء قائمة جديدة"],
                ca_ES: ["Crear nova llista"],
                cs: "Create New List",
                de: ["Neue Liste erstellen"],
                el: "Create New List",
                en: "Create New List",
                es: ["Crear nueva lista"],
                fa: "Create New List",
                fr: ["Créer une Nouvelle Liste"],
                he_IL: ["צור רשימה חדשה"],
                hu_HU: ["Új Lista Létrehozása"],
                id_ID: ["Buat Daftar Baru"],
                it: ["Crea nuova lista"],
                ja: ["新規リスト作成"],
                ko: ["새 리스트 만들기"],
                ms_MY: ["Cipta Senarai Baru"],
                nl_NL: "Create New List",
                pl: ["Utwórz nową liste"],
                pt: ["Criar nova lista"],
                ro: "Create New List",
                ru: ["Создать новый список"],
                sv: ["Skapa ny lista"],
                th: ["สร้างรายการใหม่"],
                tr: ["Yeni Liste Oluştur"],
                vi: ["Tạo Danh sách Mới"],
                zh: ["创建新的列表"],
                zh_TW: ["建立新清單"]
            }
        },
        240527: e => {
            e.exports = {
                ar: ["قائمة زرقاء"],
                ca_ES: ["Llista cian"],
                cs: "Cyan list",
                de: ["Cyan-Liste"],
                el: "Cyan list",
                en: "Cyan list",
                es: ["Lista cian"],
                fa: "Cyan list",
                fr: ["Liste cyan"],
                he_IL: ["רשימת Cyan"],
                hu_HU: "Cyan list",
                id_ID: ["Daftar cyan"],
                it: ["Lista celeste"],
                ja: ["シアンリスト"],
                ko: ["시안색 목록"],
                ms_MY: ["Senarai cyan"],
                nl_NL: "Cyan list",
                pl: ["Niebieska lista"],
                pt: ["Lista ciano"],
                ro: "Cyan list",
                ru: ["Голубой"],
                sv: ["Cyanlista"],
                th: ["รายการสีฟ้า"],
                tr: ["Açık mavi liste"],
                vi: ["Danh sách màu lục lam"],
                zh: ["青色列表"],
                zh_TW: ["青色清單"]
            }
        },
        992447: e => {
            e.exports = {
                ar: ["القائمة الزرقاء"],
                ca_ES: ["Llista blava"],
                cs: "Blue list",
                de: ["Blaue Liste"],
                el: "Blue list",
                en: "Blue list",
                es: ["Lista azul"],
                fa: "Blue list",
                fr: ["Liste bleue"],
                he_IL: ["רשימה כחולה"],
                hu_HU: "Blue list",
                id_ID: ["Daftar Biru"],
                it: ["Lista blu"],
                ja: ["ブルーリスト"],
                ko: ["블루 리스트"],
                ms_MY: ["Senarai biru"],
                nl_NL: "Blue list",
                pl: ["Niebieska lista"],
                pt: ["Lista azul"],
                ro: "Blue list",
                ru: ["Синий"],
                sv: ["Blå lista"],
                th: "Blue list",
                tr: ["Mavi liste"],
                vi: ["Danh sách xanh da trời"],
                zh: ["蓝色列表"],
                zh_TW: ["藍色清單"]
            }
        },
        971464: e => {
            e.exports = {
                ar: ["القائمة الخضراء"],
                ca_ES: ["Llista verda"],
                cs: "Green list",
                de: ["Grüne Liste"],
                el: "Green list",
                en: "Green list",
                es: ["Lista verde"],
                fa: "Green list",
                fr: ["Liste verte"],
                he_IL: ["רשימה ירוקה"],
                hu_HU: "Green list",
                id_ID: ["Daftar Hijau"],
                it: ["Lista verde"],
                ja: ["グリーンリスト"],
                ko: ["그린 리스트"],
                ms_MY: ["Senarai hijau"],
                nl_NL: "Green list",
                pl: ["Zielona lista"],
                pt: ["Lista verde"],
                ro: "Green list",
                ru: ["Зелёный"],
                sv: ["Grön lista"],
                th: "Green list",
                tr: ["Yeşil liste"],
                vi: ["Danh sách xanh"],
                zh: ["绿色列表"],
                zh_TW: ["綠色清單"]
            }
        },
        97458: e => {
            e.exports = {
                ar: ["الرموز المحذوفة"],
                ca_ES: ["Símbols eliminats"],
                cs: "Deleted symbols",
                de: ["Gelöschte Symbole"],
                el: "Deleted symbols",
                en: "Deleted symbols",
                es: ["Símbolos eliminados"],
                fa: "Deleted symbols",
                fr: ["Symboles supprimés"],
                he_IL: ["סימולים שנמחקו"],
                hu_HU: "Deleted symbols",
                id_ID: ["Simbol dihapus"],
                it: ["Simboli eliminati"],
                ja: ["削除されたシンボル"],
                ko: ["지워진 심볼들"],
                ms_MY: ["Simbol-simbol telah dipadamkan"],
                nl_NL: "Deleted symbols",
                pl: ["Usunięte symbole"],
                pt: ["Símbolos deletados"],
                ro: "Deleted symbols",
                ru: ["Удалённые символы"],
                sv: ["Raderade symboler"],
                th: ["สัญลักษณ์ที่ถูกลบ"],
                tr: ["Silinen simgeler"],
                vi: ["Xóa mã giao dịch"],
                zh: ["已删除的商品"],
                zh_TW: ["已刪除商品"]
            }
        },
        57467: e => {
            e.exports = {
                ar: ["ثمة مشكلة في عملية وضع العلامات"],
                ca_ES: ["Problema amb el marcatge"],
                cs: "Issue With Flagging",
                de: ["Konflikt während des Markieren"],
                el: "Issue With Flagging",
                en: "Issue With Flagging",
                es: ["Problema con la marcación"],
                fa: "Issue With Flagging",
                fr: ["Problème avec le flagging"],
                he_IL: ["בעיה בסימונם"],
                hu_HU: "Issue With Flagging",
                id_ID: ["Permasalahan Dengan Penandaan"],
                it: ["Problema con la messa in evidenza"],
                ja: ["フラグの問題"],
                ko: ["플래깅 이슈"],
                ms_MY: ["Isu Dengan Penanda Bendera"],
                nl_NL: "Issue With Flagging",
                pl: ["Problem z zaznaczeniem"],
                pt: ["Problema com a sinalização"],
                ro: "Issue With Flagging",
                ru: ["Ошибка при добавлении флага"],
                sv: ["Problem med flaggning"],
                th: ["มีปัญหาเกี่ยวกับการปักธง"],
                tr: ["Bayraklama Özelliğin Sorunu"],
                vi: ["Vấn đề liên quan đến Gắn cờ"],
                zh: ["标记的问题"],
                zh_TW: ["標記的問題"]
            }
        },
        141393: e => {
            e.exports = {
                ar: ["القائمة البرتقالية"],
                ca_ES: ["Llista taronja"],
                cs: "Orange list",
                de: ["Orangene Liste"],
                el: "Orange list",
                en: "Orange list",
                es: ["Lista naranja"],
                fa: "Orange list",
                fr: ["Liste orange"],
                he_IL: ["רשימה כתומה"],
                hu_HU: "Orange list",
                id_ID: ["Daftar Oranye"],
                it: ["Lista arancio"],
                ja: ["オレンジリスト"],
                ko: ["오렌지 리스트"],
                ms_MY: ["Senarai jingga"],
                nl_NL: "Orange list",
                pl: ["Pomarańczowa lista"],
                pt: ["Lista laranja"],
                ro: "Orange list",
                ru: ["Оранжевый"],
                sv: ["Orange lista"],
                th: "Orange list",
                tr: ["Turuncu liste"],
                vi: ["Danh sách cam"],
                zh: ["橙色列表"],
                zh_TW: ["橙色清單"]
            }
        },
        606255: e => {
            e.exports = {
                ar: ["لا"],
                ca_ES: "No",
                cs: ["Ne"],
                de: ["Nein"],
                el: "No",
                en: "No",
                es: "No",
                fa: "No",
                fr: ["Non"],
                he_IL: ["לא"],
                hu_HU: ["Nem"],
                id_ID: ["Tidak"],
                it: "No",
                ja: ["いいえ"],
                ko: ["아니오"],
                ms_MY: ["Tidak"],
                nl_NL: "No",
                pl: ["Nie"],
                pt: ["Não"],
                ro: "No",
                ru: ["Нет"],
                sv: ["Nej"],
                th: ["ไม่"],
                tr: ["Hayır"],
                vi: ["Không"],
                zh: ["否"],
                zh_TW: ["否"]
            }
        },
        356614: e => {
            e.exports = {
                ar: ["لا توجد نتائج"],
                ca_ES: ["No s'han trobat resultats"],
                cs: "No results found",
                de: ["Keine Ergebnisse"],
                el: "No results found",
                en: "No results found",
                es: ["No se han encontrado resultados"],
                fa: "No results found",
                fr: ["Pas de résultat trouvé"],
                he_IL: ["לא נמצאו תוצאות"],
                hu_HU: "No results found",
                id_ID: ["Hasil tidak ditemukan"],
                it: ["Nessun risultato trovato"],
                ja: ["該当なし"],
                ko: ["결과를 찾을 수 없습니다"],
                ms_MY: ["Tiada keputusan dijumpai"],
                nl_NL: "No results found",
                pl: ["Brak wyników przeszukiwania"],
                pt: ["Nenhum resultado encontrado"],
                ro: "No results found",
                ru: ["Не найдено результатов"],
                sv: ["Inga resultat hittades"],
                th: ["ไม่พบข้อมูลใดๆ"],
                tr: ["Hiç sonuç bulunamadı"],
                vi: ["Không tìm thấy kết quả"],
                zh: ["未搜寻结果"],
                zh_TW: ["未找到結果"]
            }
        },
        185520: e => {
            e.exports = {
                ar: ["حفظ"],
                ca_ES: ["Desa"],
                cs: ["Uložit"],
                de: ["Speichern"],
                el: ["Αποθήκευση"],
                en: "Save",
                es: ["Guardar"],
                fa: ["ذخیره"],
                fr: ["Sauvegarder"],
                he_IL: ["שמור"],
                hu_HU: ["Mentés"],
                id_ID: ["Simpan"],
                it: ["Salva"],
                ja: ["保存"],
                ko: ["저장"],
                ms_MY: ["Simpan"],
                nl_NL: ["Opslaan"],
                pl: ["Zapisz"],
                pt: ["Salvar"],
                ro: "Save",
                ru: ["Сохранить"],
                sv: ["Spara"],
                th: ["บันทึก"],
                tr: ["Kaydet"],
                vi: ["Lưu"],
                zh: ["保存"],
                zh_TW: ["儲存"]
            }
        },
        741068: e => {
            e.exports = {
                ar: ["حفظ القائمة كـ..."],
                ca_ES: ["Desa llista com a"],
                cs: "Save List As",
                de: ["Liste speichern als"],
                el: "Save List As",
                en: "Save List As",
                es: ["Guardar lista como"],
                fa: "Save List As",
                fr: ["Sauvegarder la Liste Sous"],
                he_IL: ["שמור רשימה בשם"],
                hu_HU: ["Lista Mentése Mint"],
                id_ID: ["Simpan Daftar Sebagai"],
                it: ["Salva lista come"],
                ja: ["名前を付けてリストを保存"],
                ko: ["리스트 다른 이름으로 저장"],
                ms_MY: ["Simpan Senarai Sebagai"],
                nl_NL: "Save List As",
                pl: ["Zapisz Listę jako"],
                pt: ["Salvar lista como"],
                ro: "Save List As",
                ru: ["Сохранить список как"],
                sv: ["Spara lista som"],
                th: ["บันทึกรายการเป็น"],
                tr: ["Listeyi Yeni Adla Sakla"],
                vi: ["Lưu Danh sách dưới dạng"],
                zh: ["保存列表为"],
                zh_TW: ["儲存列表為..."]
            }
        },
        83796: e => {
            e.exports = {
                ar: ["اسم قائمة الرموز"],
                ca_ES: ["Nom de la llista de símbols"],
                cs: "Symbol list name",
                de: ["Name der Symbolliste"],
                el: "Symbol list name",
                en: "Symbol list name",
                es: ["Nombre de la lista de símbolos"],
                fa: "Symbol list name",
                fr: ["Liste de noms des symboles"],
                he_IL: ["שם רשימת הסימולים"],
                hu_HU: ["Szimbólum lista neve"],
                id_ID: ["Nama daftar simbol"],
                it: ["Nome lista simboli"],
                ja: ["シンボルのリスト名"],
                ko: ["심볼 리스트 이름"],
                ms_MY: ["Nama senarai simbol"],
                nl_NL: "Symbol list name",
                pl: ["Nazwa listy symboli"],
                pt: ["Nome na listagem de símbolos"],
                ro: "Symbol list name",
                ru: ["Имя списка инструментов"],
                sv: ["Symbolers namnlista"],
                th: ["ชื่อรายการสัญลักษณ์"],
                tr: ["Sembol listesin adı"],
                vi: ["Danh sách tên Mã giao dịch"],
                zh: ["商品列表名称"],
                zh_TW: ["商品列表名稱"]
            }
        },
        816786: e => {
            e.exports = {
                ar: ["قائمة وردية"],
                ca_ES: ["Llista rosa"],
                cs: "Pink list",
                de: ["Pinke Liste"],
                el: "Pink list",
                en: "Pink list",
                es: ["Lista rosa"],
                fa: "Pink list",
                fr: ["Liste rose"],
                he_IL: ["רשימה ורודה"],
                hu_HU: "Pink list",
                id_ID: ["Daftar pink"],
                it: ["Lista rosa"],
                ja: ["ピンクリスト"],
                ko: ["핑크색 목록"],
                ms_MY: ["Senarai merah jambu"],
                nl_NL: "Pink list",
                pl: ["Różowa lista"],
                pt: ["Lista rosa"],
                ro: "Pink list",
                ru: ["Розовый"],
                sv: ["Rosa lista"],
                th: ["รายการสีชมพู"],
                tr: ["Pembe liste"],
                vi: ["Danh sách màu hồng"],
                zh: ["粉色列表"],
                zh_TW: ["粉色清單"]
            }
        },
        53171: e => {
            e.exports = {
                ar: ["القائمة البنفسجية"],
                ca_ES: ["Llista morada"],
                cs: "Purple list",
                de: ["Lila Liste"],
                el: "Purple list",
                en: "Purple list",
                es: ["Lista morada"],
                fa: "Purple list",
                fr: ["Liste violette"],
                he_IL: ["רשימה סגולה"],
                hu_HU: "Purple list",
                id_ID: ["Daftar Ungu"],
                it: ["Lista viola"],
                ja: ["パープルリスト"],
                ko: ["퍼플 리스트"],
                ms_MY: ["Senarai ungu"],
                nl_NL: "Purple list",
                pl: ["Fioletowa lista"],
                pt: ["Lista Lilás"],
                ro: "Purple list",
                ru: ["Фиолетовый"],
                sv: ["Lila lista"],
                th: "Purple list",
                tr: ["Mor liste"],
                vi: ["Danh sách tím"],
                zh: ["紫色列表"],
                zh_TW: ["紫色清單"]
            }
        },
        97525: e => {
            e.exports = {
                ar: ["القائمة الحمراء"],
                ca_ES: ["Llista vermella"],
                cs: "Red list",
                de: ["Rote Liste"],
                el: "Red list",
                en: "Red list",
                es: ["Lista roja"],
                fa: "Red list",
                fr: ["Liste rouge"],
                he_IL: ["רשימה אדומה"],
                hu_HU: "Red list",
                id_ID: ["Daftar Merah"],
                it: ["Lista rossa"],
                ja: ["レッドリスト"],
                ko: ["레드 리스트"],
                ms_MY: ["Senarai merah"],
                nl_NL: "Red list",
                pl: ["Czerwona lista"],
                pt: ["Lista de selecionados"],
                ro: "Red list",
                ru: ["Красный"],
                sv: ["Röd lista"],
                th: "Red list",
                tr: ["Kırmızı liste"],
                vi: ["Danh sách đỏ"],
                zh: ["红色列表"],
                zh_TW: ["紅色清單"]
            }
        },
        435038: e => {
            e.exports = {
                ar: ["تغيير الأسم"],
                ca_ES: ["Reanomenar"],
                cs: "Rename",
                de: ["Umbenennen"],
                el: "Rename",
                en: "Rename",
                es: ["Renombrar."],
                fa: "Rename",
                fr: ["Renommer"],
                he_IL: ["שנה שם"],
                hu_HU: ["Átnevezés"],
                id_ID: ["Mengganti Nama"],
                it: ["Rinomina"],
                ja: ["名前の変更"],
                ko: ["이름 바꾸기"],
                ms_MY: ["Namakan semula"],
                nl_NL: "Rename",
                pl: ["Zmień nazwę"],
                pt: ["Renomear"],
                ro: "Rename",
                ru: ["Переименовать"],
                sv: ["Döp om"],
                th: ["เปลี่ยนชื่อ"],
                tr: ["Yeni Ad Ver"],
                vi: ["Đổi tên"],
                zh: ["重命名"],
                zh_TW: ["重新命名"]
            }
        },
        847746: e => {
            e.exports = {
                ar: ["لا يمكن إضافة المزيد إلى قائمة المراقبة."],
                ca_ES: ["La llista de seguiment està completa!"],
                cs: "Watchlist cannot take anymore, Cap'n",
                de: ["Die Watchlist kann keine weiteren Einträge mehr aufnehmen"],
                el: "Watchlist cannot take anymore, Cap'n",
                en: "Watchlist cannot take anymore, Cap'n",
                es: ["¡La lista de seguimiento está completa!"],
                fa: "Watchlist cannot take anymore, Cap'n",
                fr: ["La liste de surveillance n'en peut plus !"],
                he_IL: ["רשימת הצפייה לא יכולה לקחת יותר, קפטן"],
                hu_HU: "Watchlist cannot take anymore, Cap'n",
                id_ID: ["Daftar pantau sudah penuh Kapten!"],
                it: ["La watchlist non regge nuovi strumenti"],
                ja: ["ウォッチリストはもう限界です"],
                ko: ["왓치리스트가 꽉 찼습니다, 캡틴"],
                ms_MY: ["Senarai amatan tidak dapat ditambah lagi, Kapten"],
                nl_NL: "Watchlist cannot take anymore, Cap'n",
                pl: ["Lista obserwowanych jest pełna Kapitanie"],
                pt: ["A lista de observação não suporta mais, Cap'n"],
                ro: "Watchlist cannot take anymore, Cap'n",
                ru: ["В список котировок больше уже не помещается"],
                sv: ["De kan inte ta mer, Kapten"],
                th: ["รายการเฝ้าระวังไม่สามารถรับเพิ่มได้อีกแล้วนะคุณ"],
                tr: ["Watchlist daha fazla dayanamaz, Kaptan"],
                vi: ["Danh sách theo dõi không thể sử dụng được nữa, Cap'n"],
                zh: ["报告船长，自选表已满"],
                zh_TW: ["報告船長，觀察清單已滿"]
            }
        },
        33115: e => {
            e.exports = {
                ar: ["حدث خطأ في قائمة المراقبة"],
                ca_ES: ["Error en la llista de seguiment"],
                cs: "Watchlist error",
                de: ["Watchlist Error"],
                el: "Watchlist error",
                en: "Watchlist error",
                es: ["Error en la lista de seguimiento"],
                fa: "Watchlist error",
                fr: ["Erreur dans la liste de surveillance"],
                he_IL: ["שגיאת רשימת מעקב"],
                hu_HU: "Watchlist error",
                id_ID: ["Daftar pantau error"],
                it: ["Errore watchlist"],
                ja: ["ウォッチリストエラー"],
                ko: ["왓치리스트 에러"],
                ms_MY: ["Kesilapan Senarai Amatan"],
                nl_NL: "Watchlist error",
                pl: ["Błąd listy obserwowanych"],
                pt: ["Erro na Lista de Observação"],
                ro: "Watchlist error",
                ru: ["Ошибка списка котировок"],
                sv: ["Bevakningslista fel"],
                th: ["รายการเฝ้าระวังผิดพลาด"],
                tr: ["Watchlist hatası"],
                vi: ["Lỗi danh sách theo dõi"],
                zh: ["自选表错误"],
                zh_TW: ["觀察清單錯誤"]
            }
        },
        66596: e => {
            e.exports = {
                ar: ["المعذرة، لا يمكنك إضافة أكثر من {number} رموز وفواصل إلى قائمة المراقبة."],
                ca_ES: ["Vaja, no podeu afegir més de {number} símbols i separadors a una llista de seguiment: som enginyers, però no fem miracles."],
                cs: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                de: ["Whoa, Sie können doch nicht einfach so {number} Symbole und Trennzeichen in eine Watchlist einfügen – wir sind Ingenieure und keine Wundertäter."],
                el: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                en: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                es: ["Vaya, no puede añadir más de {number} símbolos y separadores a una lista de seguimiento: somos ingenieros, pero no obramos milagros."],
                fa: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                fr: ["Oh la, vous ne pouvez pas ajouter plus de {number} symboles et séparateurs à une liste de surveillance - nous sommes des ingénieurs, pas des magiciens."],
                he_IL: ["אתה לא יכול להוסיף יותר מ- {number} סימולים ומפרידים לרשימת המעקב - אנחנו מהנדסים לא מחוללי ניסים."],
                hu_HU: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                id_ID: ["Woww woww, anda tidak dapat menabahkan {number} simbol dan separator kedalam daftar pantau - kami adalah teknisi, bukan pembuat keajaiban."],
                it: ["Wow, non puoi pretendere di aggiungere più di {number} elementi tra separatori e simboli su una singola watchlist – siamo programmatori, non maghi."],
                ja: ["お待ちください、{number}以上のシンボルとセパレーターをウォッチリストに追加する事はできません – 私たちは奇跡を起こす人ではなくエンジニアです。"],
                ko: ["왓치리스트에 {number} 이 넘는 심볼 및 세퍼레이터를 넣을 수 없습니다  – 우리는 미라클 워커가 아니라 엔지니어입니다."],
                ms_MY: ["Woh, anda tidak dapat menambah lagi {number} simbol-simbol dan pemisah-pemisah ke senarai amatan – kami adalah jurutera dan bukannya pekerja ajaib."],
                nl_NL: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                pl: ["Niestety do listy obserwowanych nie możesz dodać więcej niż {number} symboli i separatorów — jesteśmy programistami, a nie magikami."],
                pt: ["Epa, você não pode ir adicionando símbolos {number} e separadores a uma lista de observação - somos engenheiros, mas não fazemos milagres."],
                ro: "Whoa there, you can't go adding over {number} symbols and separators to a watchlist – we're engineers not miracle workers.",
                ru: ["Вы не можете добавлять более {number} символов и разделителей в список котировок."],
                sv: ["Du kan inte lägga till över {number} symboler och separatorer till en bevakningslista – vi är ingenjörer och inga mirakelarbetare."],
                th: ["โว้ว คุณไม่สามารถทำการเพิ่มมากกว่า {number} สัญลักษณ์และตัวแบ่งในรายการเฝ้าระวังได้ – เราคือวิศวกร ไม่ใช่พระเจ้า"],
                tr: ["Vay canına, bir wathclist'e {number} simgeden fazla sembol ve ayırıcı ekleyemezsiniz – biz mühendisiz, mucize işçisi değil."],
                vi: ["Rất tiếc, bạn không thể thêm quá {number} mã giao dịch và dấu phân cách vào danh sách theo dõi - chúng tôi là kỹ sư không phải công nhân thần kỳ."],
                zh: ["哇哦，您不能将超过{number}个商品和分隔符添加到自选表中 — 我们是工程师，而非魔术师。"],
                zh_TW: ["哇，您不能將超過{number}個商品和分隔符增加到觀察清單中 – 我們是工程師不是魔術師。"]
            }
        },
        372896: e => {
            e.exports = {
                ar: ["لم يُتمكن من وضع علامة لجميع الرموز المُختارة بما إنها تتعدى أقصى كمية مسموح بها وهي ({limit})."],
                ca_ES: ["No es poden marcar tots els símbols seleccionats perquè excediu la quantitat màxima de ({limit})."],
                cs: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                de: ["Es können nicht alle ausgewählten Symbole markiert werden, da die maximale Anzahl ({limit}) überschritten wurde."],
                el: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                en: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                es: ["No se pueden marcar todos los símbolos seleccionados ya que excede la cantidad máxima de ({limit})."],
                fa: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                fr: ["Impossible de marquer tous les symboles sélectionnés car cela dépasse le montant maximal ({limit})."],
                he_IL: ["לא ניתן לסמן את כל הסימולים הנבחרים מכיוון שהוא חצה את הכמות המקסימלית ({limit})."],
                hu_HU: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                id_ID: ["Tidak dapat menandai seluruh simbol terpilih karena telah melebihi jumlah maksimum ({limit})."],
                it: ["Impossibile mettere in evidenza i simboli selezionati perché superano il limite massimo di {limit}."],
                ja: ["最大数 ({limit}) を超える為、選択されたすべてのシンボルにフラグを付けることができません。"],
                ko: ["맥시멈 수량 ({limit}) 을 넘어 고른 심볼 모두 다 플래그할 수 없음."],
                ms_MY: ["Tidak dapat membenderakan semua simbol yang dipilih kerana melebihi jumlah maksimum ({limit})."],
                nl_NL: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                pl: ["Zaznaczenie wybranych symboli giełdowych nie jest możliwe z powodu przekroczenia limitu zaznaczeń ({limit})"],
                pt: ["Não foi possível sinalizar todos os símbolos selecionados, pois excedem o valor máximo ({limit})."],
                ro: "Unable to flag all selected symbols since it exceeds the maximum amount ({limit}).",
                ru: ["Невозможно отметить все выбранные символы, так как превышено максимальное количество ({limit})."],
                sv: ["Kunde inte flagga alla markerade symboler då de överskriver det maximalt tillåtna antalet ({limit})."],
                th: ["ไม่สามารถปักธงสัญลักษณ์ทั้งหมดได้ เนื่องจากเกินจำนวนมากที่สุดที่กำหนดไว้ ({limit})"],
                tr: ["Tüm çözdüğünüz sembolleri bayraklama imkanı yoktur çünkü maksimum miktarı ({limit}) aşmaktadır."],
                vi: ["Không thể gắn cờ tất cả các mã giao dịch đã chọn vì nó vượt quá số lượng tối đa ({limit})."],
                zh: ["无法标记所有选定的商品，因为它超过了最大值（{limit}）。"],
                zh_TW: ["由於超過最大數量 ({limit}) 所以不能標記所有已選商品"]
            }
        },
        879831: e => {
            e.exports = {
                ar: ["نعم"],
                ca_ES: ["Sí"],
                cs: ["Ano"],
                de: ["Ja"],
                el: "Yes",
                en: "Yes",
                es: ["Sí"],
                fa: "Yes",
                fr: ["Oui"],
                he_IL: ["כן"],
                hu_HU: ["Igen"],
                id_ID: ["Ya"],
                it: ["Sì"],
                ja: ["はい"],
                ko: ["예"],
                ms_MY: ["Ya"],
                nl_NL: "Yes",
                pl: ["Tak"],
                pt: ["Sim"],
                ro: "Yes",
                ru: ["Да"],
                sv: ["Ja"],
                th: ["ใช่"],
                tr: ["Evet"],
                vi: ["Có"],
                zh: ["是"],
                zh_TW: ["是"]
            }
        },
        222045: e => {
            e.exports = {
                ar: ["هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرمز ‎{count}‎ المحدد؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟", "هل تريد حقًا حذف الرموز ‎{count}‎ المحددة؟"],
                ca_ES: ["Realment voleu eliminar {count} símbol seleccionat?", "Realment voleu eliminar {count} símbols seleccionats?"],
                cs: "Do you really want to delete {count} selected symbol?",
                de: ["Möchten Sie wirklich das ausgewählte Symbol {count} löschen?", "Möchten Sie wirklich das ausgewählte Symbole {count} löschen?"],
                el: "Do you really want to delete {count} selected symbol?",
                en: "Do you really want to delete {count} selected symbol?",
                es: ["¿Realmente desea eliminar {count} símbolo seleccionado?", "¿Realmente desea eliminar {count} símbolos seleccionados?"],
                fa: ["Do you really want to delete {count} selected symbols?"],
                fr: ["Voulez-vous vraiment supprimer {count} symbole sélectionné?", "Voulez-vous vraiment supprimer {count} symboles sélectionnés?"],
                he_IL: ["האם אתה באמת רוצה למחוק {count} סימול נבחר?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?", "האם אתה באמת רוצה למחוק {count} סימולים נבחרים?"],
                hu_HU: ["Do you really want to delete {count} selected symbols?"],
                id_ID: ["Apakah anda benar-benar ingin menghapus {count} simbol yang dipilih ?"],
                it: ["Vuoi davvero eliminare {count} simbolo selezionato?", "Vuoi davvero eliminare i {count} simboli selezionati?"],
                ja: ["本当に選択した{count}個のシンボルを削除しますか？"],
                ko: ["선택한 종목 {count}개를 정말로 삭제하시겠습니까?"],
                ms_MY: ["Adakah anda pasti untuk memadamkan {count} simbol yang dipilih?"],
                nl_NL: "Do you really want to delete {count} selected symbol?",
                pl: ["Czy na pewno chcesz usunąć {count} wybrany symbol?", "Czy na pewno chcesz usunąć {count} wybrane symbole?", "Czy na pewno chcesz usunąć {count} wybranych symboli?", "Czy na pewno chcesz usunąć {count} wybranych symboli?"],
                pt: ["Você realmente quer deletar o {count} símbolo selecionado?", "Você realmente quer deletar os {count} símbolos selecionados?"],
                ro: "Do you really want to delete {count} selected symbol?",
                ru: "Do you really want to delete {count} selected symbol?",
                sv: ["Vill du verkligen radera {count} symbol?", "Vill du verkligen radera {count} symboler?"],
                th: ["คุณต้องการลบ {count} สัญลักษณ์ที่เลือกจริง ๆ หรือไม่?"],
                tr: ["Seçilen {count} sembolü gerçekten silmek istiyor musunuz?", "Seçilen {count} sembolü gerçekten silmek istiyor musunuz?"],
                vi: ["Bạn có thực sự muốn xóa {count} mã đã chọn?"],
                zh: ["您真的要删除{count}个选定的商品吗？"],
                zh_TW: ["您真的要刪除{count}個選定的商品嗎？"]
            }
        }
    }
]);
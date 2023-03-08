(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [5093, 91859], {
        259142: function(e, t) {
            var s, i, o;
            i = [t], s = function(e) {
                "use strict";

                function t(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, s = Array(e.length); t < e.length; t++) s[t] = e[t];
                        return s
                    }
                    return Array.from(e)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var s = !1;
                if ("undefined" != typeof window) {
                    var i = {
                        get passive() {
                            s = !0
                        }
                    };
                    window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
                }
                var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    n = [],
                    l = !1,
                    a = -1,
                    r = void 0,
                    d = void 0,
                    u = function(e) {
                        return n.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    h = function(e) {
                        var t = e || window.event;
                        return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    c = function() {
                        setTimeout((function() {
                            void 0 !== d && (document.body.style.paddingRight = d, d = void 0), void 0 !== r && (document.body.style.overflow = r, r = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, i) {
                    if (o) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !n.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var c = {
                                targetElement: e,
                                options: i || {}
                            };
                            n = [].concat(t(n), [c]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var s, i, o, n;
                                1 === t.targetTouches.length && (i = e, n = (s = t).targetTouches[0].clientY - a, !u(s.target) && (i && 0 === i.scrollTop && 0 < n || (o = i) && o.scrollHeight - o.scrollTop <= o.clientHeight && n < 0 ? h(s) : s.stopPropagation()))
                            }, l || (document.addEventListener("touchmove", h, s ? {
                                passive: !1
                            } : void 0), l = !0)
                        }
                    } else {
                        _ = i, setTimeout((function() {
                            if (void 0 === d) {
                                var e = !!_ && !0 === _.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (d = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === r && (r = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var p = {
                            targetElement: e,
                            options: i || {}
                        };
                        n = [].concat(t(n), [p])
                    }
                    var _
                }, e.clearAllBodyScrollLocks = function() {
                    o ? (n.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), l && (document.removeEventListener("touchmove", h, s ? {
                        passive: !1
                    } : void 0), l = !1), n = [], a = -1) : (c(), n = [])
                }, e.enableBodyScroll = function(e) {
                    if (o) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, n = n.filter((function(t) {
                            return t.targetElement !== e
                        })), l && 0 === n.length && (document.removeEventListener("touchmove", h, s ? {
                            passive: !1
                        } : void 0), l = !1)
                    } else 1 === n.length && n[0].targetElement === e ? (c(), n = []) : n = n.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (o = "function" == typeof s ? s.apply(t, i) : s) || (e.exports = o)
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
        88987: e => {
            e.exports = {
                wrap: "wrap-uFE8C8hG",
                input: "input-uFE8C8hG",
                box: "box-uFE8C8hG",
                hoverDot: "hoverDot-uFE8C8hG",
                red: "red-uFE8C8hG",
                blue: "blue-uFE8C8hG",
                green: "green-uFE8C8hG",
                orange: "orange-uFE8C8hG",
                purple: "purple-uFE8C8hG",
                cyan: "cyan-uFE8C8hG",
                pink: "pink-uFE8C8hG",
                large: "large-uFE8C8hG",
                pickerDot: "pickerDot-uFE8C8hG"
            }
        },
        752022: e => {
            e.exports = {
                wrapper: "wrapper-iqgBiQcZ",
                buttons: "buttons-iqgBiQcZ",
                colorSelectButton: "colorSelectButton-iqgBiQcZ"
            }
        },
        218724: e => {
            e.exports = {
                wrapper: "wrapper-AE6toMmz",
                selector: "selector-AE6toMmz",
                arrowLeft: "arrowLeft-AE6toMmz",
                colorSelectButton: "colorSelectButton-AE6toMmz",
                popup: "popup-AE6toMmz"
            }
        },
        756982: e => {
            e.exports = {
                wrap: "wrap-zs6LaC_B",
                uiMarker: "uiMarker-zs6LaC_B",
                red: "red-zs6LaC_B",
                blue: "blue-zs6LaC_B",
                green: "green-zs6LaC_B",
                orange: "orange-zs6LaC_B",
                purple: "purple-zs6LaC_B",
                cyan: "cyan-zs6LaC_B",
                pink: "pink-zs6LaC_B",
                uiMarker__small: "uiMarker__small-zs6LaC_B"
            }
        },
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        768550: e => {
            e.exports = {
                item: "item-bWEYVlEJ",
                interactive: "interactive-bWEYVlEJ",
                hovered: "hovered-bWEYVlEJ",
                disabled: "disabled-bWEYVlEJ",
                active: "active-bWEYVlEJ",
                shortcut: "shortcut-bWEYVlEJ",
                normal: "normal-bWEYVlEJ",
                big: "big-bWEYVlEJ",
                iconCell: "iconCell-bWEYVlEJ",
                icon: "icon-bWEYVlEJ",
                checkmark: "checkmark-bWEYVlEJ",
                content: "content-bWEYVlEJ",
                label: "label-bWEYVlEJ",
                checked: "checked-bWEYVlEJ",
                toolbox: "toolbox-bWEYVlEJ",
                showToolboxOnHover: "showToolboxOnHover-bWEYVlEJ",
                arrowIcon: "arrowIcon-bWEYVlEJ",
                subMenu: "subMenu-bWEYVlEJ",
                invisibleHotkey: "invisibleHotkey-bWEYVlEJ"
            }
        },
        503651: e => {
            e.exports = {
                item: "item-X2LmiiGx",
                emptyIcons: "emptyIcons-X2LmiiGx",
                loading: "loading-X2LmiiGx",
                disabled: "disabled-X2LmiiGx",
                interactive: "interactive-X2LmiiGx",
                hovered: "hovered-X2LmiiGx",
                normal: "normal-X2LmiiGx",
                big: "big-X2LmiiGx",
                icon: "icon-X2LmiiGx",
                label: "label-X2LmiiGx",
                title: "title-X2LmiiGx",
                nested: "nested-X2LmiiGx",
                shortcut: "shortcut-X2LmiiGx",
                remove: "remove-X2LmiiGx"
            }
        },
        481956: e => {
            e.exports = {
                separator: "separator-blm_vtaP"
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
        559986: (e, t, s) => {
            "use strict";
            s.d(t, {
                LIST_START: () => i,
                getTargetIndex: () => o
            });
            const i = Symbol();

            function o(e, t, s) {
                const o = void 0 === s ? void 0 !== t ? e.indexOf(t) : void 0 : s === i ? 0 : e.indexOf(s) + 1;
                return -1 !== o ? o : void 0
            }
        },
        199669: (e, t, s) => {
            "use strict";

            function i(e) {
                const {
                    id: t,
                    event: s,
                    channel: i,
                    filter: o
                } = e
                ;
                return e => (i.on(s, (s => {
                    const {
                        action: i,
                        emitter: n
                    } = JSON.parse(s);
                    n !== t && o(i) && e.dispatch({ ...i,
                        payload: { ...i.payload,
                            silent: !0
                        }
                    })
                })), e => n => {
                    const l = e(n);
                    return o(n) && (n.payload.silent || i.emit(s, JSON.stringify({
                        action: n,
                        emitter: t
                    }))), l
                })
            }
            s.d(t, {
                createCrossTabSyncMiddleware: () => i
            })
        },
        797035: (e, t, s) => {
            "use strict";
            s.d(t, {
                ListColor: () => i,
                LIST_COLORS: () => c,
                isListColor: () => p,
                markMany: () => b,
                setup: () => w,
                reset: () => y,
                remove: () => S,
                rename: () => f,
                changeDescription: () => C,
                renameSeparator: () => E,
                shiftCommand: () => M,
                share: () => x,
                reducer: () => k,
                createCrossTabSyncMiddleware: () => T,
                getSymbolColor: () => L,
                getListByColor: () => V,
                getSymbolsByColor: () => B,
                getCommands: () => P,
                getTimestamp: () => A
            });
            var i, o = s(826300),
                n = s(438253),
                l = s(650151),
                a = s(199669),
                r = s(50991),
                d = s(340958),
                u = s(173777),
                h = s(559986);
            ! function(e) {
                e.Red = "red", e.Blue = "blue", e.Green = "green", e.Orange = "orange", e.Purple = "purple", e.Cyan = "cyan", e.Pink = "pink"
            }(i || (i = {}));
            const c = [i.Red, i.Blue, i.Green, i.Orange, i.Purple, i.Cyan, i.Pink];

            function p(e) {
                return new Set(c).has(e)
            }
            const _ = {
                lists: {
                    colors: [],
                    byColor: {},
                    bySymbol: {}
                },
                commands: [],
                timestamp: null
            };

            function m(e, t) {
                const {
                    lists: s
                } = e, i = s.byColor[t];
                i && 0 === i.symbols.length && (s.colors = s.colors.filter((e => e !== t)))
            }

            function g(e) {
                return (0, u.isSeparatorItem)(e)
            }
            const v = (0, o.createSlice)({
                    name: "marked-lists",
                    initialState: _,
                    reducers: {
                        setup: (e, t) => {
                            const {
                                lists: s,
                                timestamp: i
                            } = t.payload, o = {
                                lists: {
                                    colors: [],
                                    byColor: {},
                                    bySymbol: {}
                                },
                                commands: [],
                                timestamp: null
                            };
                            o.timestamp = i;
                            for (const e of function(e, t) {
                                    return [...e].sort(((e, s) => t.indexOf(e.color) - t.indexOf(s.color)))
                                }(s, c)) {
                                const t = e.symbols.filter((t => void 0 === o.lists.bySymbol[t] && (g(t) || (o.lists.bySymbol[t] = e.color), !0)));
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
                                color: s,
                                symbols: i,
                                silent: o
                            } = t.payload, {
                                lists: a,
                                commands: r
                            } = e, u = a.byColor[s];
                            if (void 0 === u || 0 === u.symbols.length) return;
                            const h = new Set(i),
                                c = u.symbols.filter((e => !h.has(e)));
                            if (!(0, d.equalArrays)(c, u.symbols)) {
                                u.symbols = c;
                                for (const e of h) delete a.bySymbol[e];
                                o || r.push({
                                    type: "remove",
                                    color: s,
                                    symbols: [...h],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }), m(e, s)
                            }
                        },
                        markMany: (e, t) => {
                            const {
                                color: s,
                                before: i,
                                silent: o
                            } = t.payload, {
                                lists: a,
                                commands: r
                            } = e, {
                                unique: u,
                                exclusions: c
                            } = function(e, t) {
                                var s;
                                const {
                                    color: i,
                                    symbols: o,
                                    separators: n
                                } = t.payload, {
                                    lists: a
                                } = e, r = {}, d = new Set, u = e => g(e) ? ((0, l.assert)(null !== i), i) : a.bySymbol[e];
                                for (let e = 0; e < o.length; ++e) {
                                    const t = o[e];
                                    if (d.has(t) || g(t) && !n) continue;
                                    d.add(t);
                                    const i = u(t);
                                    void 0 !== i && (r[i] = null !== (s = r[i]) && void 0 !== s ? s : new Set).add(t)
                                }
                                return {
                                    exclusions: r,
                                    unique: d
                                }
                            }(e, t);
                            if (0 === u.size) return;
                            const p = function(e, t, s, i) {
                                const {
                                    color: o,
                                    before: n
                                } = t.payload, {
                                    lists: l
                                } = e;
                                let a;
                                if (null !== o && void 0 !== n && s.has(n)) {
                                    const e = l.byColor[o];
                                    if (void 0 !== e) {
                                        a = i;
                                        for (let t = e.symbols.indexOf(n); t >= 0; --t)
                                            if (!s.has(e.symbols[t])) {
                                                a = e.symbols[t];
                                                break
                                            }
                                    }
                                }
                                return a
                            }(e, t, u, h.LIST_START);
                            if (null !== s && void 0 !== c[s] && 1 === Object.keys(c).length) {
                                const t = a.byColor[s];
                                (0, l.assert)(void 0 !== t);
                                const _ = t.symbols.filter((e => !u.has(e))),
                                    v = (0, h.getTargetIndex)(_, i, p);
                                if (void 0 === v ? _.push(...u) : _.splice(v, 0, ...u), (0, d.equalArrays)(_, t.symbols)) return; {
                                    const i = c[s];
                                    (0, l.assert)(void 0 !== i), t.symbols = _;
                                    for (const e of i) delete a.bySymbol[e];
                                    for (const e of u) g(e) || (a.bySymbol[e] = s);
                                    return m(e, s), void(o || r.push({
                                        type: "replace",
                                        color: s,
                                        symbols: [...t.symbols],
                                        prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                    }))
                                }
                            }
                            for (const t in c) {
                                if (!c.hasOwnProperty(t)) continue;
                                const s = c[t];
                                (0, l.assert)(void 0 !== s);
                                const i = a.byColor[t];
                                (0, l.assert)(void 0 !== i), i.symbols = i.symbols.filter((e => !s.has(e) || (delete a.bySymbol[e], !1))), m(e, t)
                            }
                            if (null === s) return void(o || r.push({
                                type: "reset",
                                symbols: [...u],
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }));
                            const _ = a.byColor[s];
                            if (a.colors.includes(s)) {
                                (0, l.assert)(void 0 !== _);
                                const t = (0, h.getTargetIndex)(_.symbols, i, p);
                                void 0 === t ? (_.symbols.push(...u), o || (void 0 === c[s] ? r.push({
                                    type: "append",
                                    color: s,
                                    symbols: [...u],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }) : r.push({
                                    type: "replace",
                                    color: s,
                                    symbols: [..._.symbols],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }))) : (_.symbols.splice(t, 0, ...u), o || r.push({
                                    type: "replace",
                                    color: s,
                                    symbols: [..._.symbols],
                                    prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                                }))
                            } else void 0 === _ ? a.byColor[s] = {
                                color: s,
                                symbols: [...u],
                                name: null,
                                description: null,
                                shared: !1
                            } : _.symbols = [...u], a.colors.push(s), o || r.push({
                                type: "append",
                                color: s,
                                symbols: [...u],
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            });
                            for (const e of u) g(e) || (a.bySymbol[e] = s)
                        },
                        renameSeparator: (e, t) => {
                            const {
                                color: s,
                                separator: i,
                                name: o,
                                silent: a
                            } = t.payload;
                            if (i === o || !g(i) || !g(o)) return;
                            const r = e.lists.byColor[s];
                            (0, l.assert)(void 0 !== r);
                            const d = r.symbols.indexOf(i); - 1 !== d && -1 === r.symbols.indexOf(o) && (r.symbols.splice(d, 1, o), a || e.commands.push({
                                type: "replace",
                                color: s,
                                symbols: r.symbols,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        rename: (e, t) => {
                            const {
                                name: s,
                                color: i,
                                silent: o
                            } = t.payload, a = e.lists.byColor[i];
                            (0, l.assert)(void 0 !== a), a.name !== s && (a.name = s, o || e.commands.push({
                                type: "rename",
                                color: i,
                                name: s,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        changeDescription: (e, t) => {
                            const {
                                color: s,
                                description: i,
                                silent: o
                            } = t.payload, a = e.lists.byColor[s];
                            (0, l.assert)(void 0 !== a), a.description !== i && (a.description = i, o || e.commands.push({
                                type: "change-description",
                                color: s,
                                description: i,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        reset: (e, t) => {
                            const {
                                silent: s
                            } = t.payload, {
                                lists: i
                            } = e;
                            for (const e of c) {
                                const t = i.byColor[e];
                                void 0 !== t && (t.symbols = [])
                            }
                            i.colors = [], i.bySymbol = {}, s || e.commands.push({
                                type: "reset-all",
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            })
                        },
                        share: (e, t) => {
                            const {
                                lists: s,
                                commands: i
                            } = e, {
                                shared: o,
                                color: a,
                                silent: r
                            } = t.payload, d = s.byColor[a];
                            void 0 !== d && d.shared !== o && (d.shared = o, r || i.push({
                                type: "share",
                                color: a,
                                shared: o,
                                prevLists: (0, l.ensureDefined)((0, n.original)(e)).lists
                            }))
                        },
                        shiftCommand: (e, t) => {
                            const {
                                count: s
                            } = t.payload;
                            e.commands.splice(0, s)
                        }
                    }
                }),
                {
                    markMany: b,
                    setup: w,
                    reset: y,
                    remove: S,
                    rename: f,
                    changeDescription: C,
                    renameSeparator: E,
                    shiftCommand: M,
                    share: x
                } = v.actions,
                {
                    reducer: k
                } = v;

            function T(e, t, s = v) {
                return (0, a.createCrossTabSyncMiddleware)({
                    id: e,
                    channel: t,
                    event: "marked-list-cross-tab-sync",
                    filter: e => function(e, t) {
                        return t.actions.markMany.match(e) || t.actions.rename.match(e) || t.actions.changeDescription.match(e) || t.actions.remove.match(e) || t.actions.setup.match(e) || t.actions.renameSeparator.match(e) || t.actions.reset.match(e) || t.actions.share.match(e)
                    }(e, s)
                })
            }

            function L(e, t) {
                var s;
                return null !== (s = e.lists.bySymbol[r.qualified.cast(t)]) && void 0 !== s ? s : null
            }

            function V(e, t) {
                var s;
                return null !== (s = e.lists.byColor[t]) && void 0 !== s ? s : null
            }

            function B(e, t) {
                var s, i;
                return null !== (i = null === (s = V(e, t)) || void 0 === s ? void 0 : s.symbols) && void 0 !== i ? i : null
            }

            function P(e) {
                return e.commands
            }

            function A(e) {
                return e.timestamp
            }
        },
        50991: (e, t, s) => {
            "use strict";
            s.d(t, {
                qualified: () => i
            });
            const i = {
                cast: e => e,
                castMany: e => e.map(i.cast)
            }
        },
        340958: (e, t, s) => {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let s = 0; s < e.length; ++s)
                    if (e[s] !== t[s]) return !1;
                return !0
            }
            s.d(t, {
                equalArrays: () => i
            })
        },
        540975: (e, t, s) => {
            "use strict";
            s.d(t, {
                AnchorButton: () => h,
                Button: () => d
            });
            var i = s(50959),
                o = s(915812);

            function n(e = "default") {
                switch (e) {
                    case "default":
                        return "primary";
                    case "stroke":
                        return "secondary"
                }
            }

            function l(e = "primary") {
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

            function r(e) {
                const {
                    intent: t,
                    size: s,
                    appearance: i,
                    useFullWidth: o,
                    icon: r,
                    ...d
                } = e;
                return { ...d,
                    color: l(t),
                    size: a(s),
                    variant: n(i),
                    stretch: o,
                    startIcon: r
                }
            }

            function d(e) {
                return i.createElement(o.SquareButton, { ...r(e)
                })
            }

            function u(e) {
                const {
                    intent: t,
                    size: s,
                    appearance: i,
                    useFullWidth: o,
                    icon: r,
                    ...d
                } = e;
                return { ...d,
                    color: l(t),
                    size: a(s),
                    variant: n(i),
                    stretch: o,
                    startIcon: r
                }
            }

            function h(e) {
                return i.createElement(o.SquareAnchorButton, { ...u(e)
                })
            }
        },
        915812: (e, t, s) => {
            "use strict";
            s.d(t, {
                SquareButton: () => i.SquareButton,
                SquareAnchorButton: () => o.SquareAnchorButton
            });
            s(221191);
            var i = s(422175),
                o = s(951144)
        },
        951144: (e, t, s) => {
            "use strict";
            s.d(t, {
                SquareAnchorButton: () => r
            });
            var i = s(50959),
                o = s(301792),
                n = s(8626),
                l = s(221191);

            function a(e) {
                const {
                    className: t,
                    color: s,
                    variant: i,
                    size: o,
                    stretch: l,
                    animated: a,
                    icon: r,
                    iconOnly: d,
                    startIcon: u,
                    endIcon: h,
                    ...c
                } = e;
                return { ...c,
                    ...(0, n.filterDataProps)(e),
                    ...(0, n.filterAriaProps)(e)
                }
            }

            function r(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: s,
                    cellState: n,
                    disablePositionAdjustment: r
                } = (0, i.useContext)(o.ControlGroupContext), d = (0, l.getSquareButtonClasses)({ ...e,
                    isGrouped: s,
                    cellState: n,
                    disablePositionAdjustment: r,
                    isAnchor: !0
                });
                return i.createElement("a", { ...a(e),
                    className: d,
                    ref: t
                }, i.createElement(l.SquareButtonContent, { ...e
                }))
            }
        },
        221191: (e, t, s) => {
            "use strict";
            s.d(t, {
                getSquareButtonClasses: () => d,
                SquareButtonContent: () => u
            });
            var i = s(50959),
                o = s(497754),
                n = s(307754),
                l = s(83436),
                a = s(428146),
                r = s.n(a);

            function d(e) {
                const {
                    color: t = "brand",
                    size: s = "medium",
                    variant: i = "primary",
                    stretch: l = !1,
                    icon: a,
                    startIcon: d,
                    endIcon: u,
                    iconOnly: h = !1,
                    className: c,
                    isGrouped: p,
                    cellState: _,
                    disablePositionAdjustment: m = !1,
                    isAnchor: g = !1
                } = e, v = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = o(t, r()["no-corner-top-left"])), 2 & e && (t = o(t, r()["no-corner-top-right"])), 4 & e && (t = o(t, r()["no-corner-bottom-right"])), 8 & e && (t = o(t, r()["no-corner-bottom-left"]))), t
                }((0, n.getGroupCellRemoveRoundBorders)(_));
                return o(c, r().button, r()[`size-${s}`], r()[`color-${t}`], r()[`variant-${i}`], l && r().stretch, (a || d) && r()["with-start-icon"], u && r()["with-end-icon"], h && r()["icon-only"], v, p && r().grouped, p && !m && r()["adjust-position"], p && _.isTop && r()["first-row"], p && _.isLeft && r()["first-col"], g && r().link)
            }

            function u(e) {
                const {
                    startIcon: t,
                    icon: s,
                    iconOnly: o,
                    children: n,
                    endIcon: a
                } = e, d = null != t ? t : s;
                return i.createElement(i.Fragment, null, d && i.createElement(l.Icon, {
                    icon: d,
                    className: r()["start-icon-wrap"]
                }), n && i.createElement("span", {
                    className: r().content
                }, n), a && !o && i.createElement(l.Icon, {
                    icon: a,
                    className: r()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, s) => {
            "use strict";
            s.d(t, {
                SquareButton: () => r
            });
            var i = s(50959),
                o = s(301792),
                n = s(8626),
                l = s(221191);

            function a(e) {
                const {
                    className: t,
                    color: s,
                    variant: i,
                    size: o,
                    stretch: l,
                    animated: a,
                    icon: r,
                    iconOnly: d,
                    startIcon: u,
                    endIcon: h,
                    ...c
                } = e;
                return { ...c,
                    ...(0, n.filterDataProps)(e),
                    ...(0, n.filterAriaProps)(e)
                }
            }

            function r(e) {
                const {
                    reference: t,
                    ...s
                } = e, {
                    isGrouped: n,
                    cellState: r,
                    disablePositionAdjustment: d
                } = (0, i.useContext)(o.ControlGroupContext), u = (0, l.getSquareButtonClasses)({ ...s,
                    isGrouped: n,
                    cellState: r,
                    disablePositionAdjustment: d
                });
                return i.createElement("button", { ...a(s),
                    className: u,
                    ref: t
                }, i.createElement(l.SquareButtonContent, { ...s
                }))
            }
        },
        301792: (e, t, s) => {
            "use strict";
            s.d(t, {
                ControlGroupContext: () => i
            });
            const i = s(50959).createContext({
                isGrouped: !1,
                cellState: {
                    isTop: !0,
                    isRight: !0,
                    isBottom: !0,
                    isLeft: !0
                }
            })
        },
        307754: (e, t, s) => {
            "use strict";

            function i(e) {
                let t = 0;
                return e.isTop && e.isLeft || (t += 1), e.isTop && e.isRight || (t += 2), e.isBottom && e.isLeft || (t += 8), e.isBottom && e.isRight || (t += 4), t
            }
            s.d(t, {
                getGroupCellRemoveRoundBorders: () => i
            })
        },
        452395: (e, t, s) => {
            "use strict";
            s.d(t, {
                ControlSkeleton: () => b,
                InputClasses: () => m
            });
            var i = s(50959),
                o = s(497754),
                n = s(650151),
                l = s(662929),
                a = s(8626),
                r = s(301792),
                d = s(307754);
            var u = s(981193),
                h = s.n(u);

            function c(e) {
                let t = "";
                return 0 !== e && (1 & e && (t = o(t, h()["no-corner-top-left"])), 2 & e && (t = o(t, h()["no-corner-top-right"])), 4 & e && (t = o(t, h()["no-corner-bottom-right"])), 8 & e && (t = o(t, h()["no-corner-bottom-left"]))), t
            }

            function p(e, t, s, i) {
                const {
                    removeRoundBorder: n,
                    className: l,
                    intent: a = "default",
                    borderStyle: r = "thin",
                    size: u,
                    highlight: p,
                    disabled: _,
                    readonly: m,
                    stretch: g,
                    noReadonlyStyles: v,
                    isFocused: b
                } = e, w = c(null != n ? n : (0, d.getGroupCellRemoveRoundBorders)(s));
                return o(h().container, h()[`intent-${a}`], h()[`border-${r}`], u && h()[`size-${u}`], w, p && h()["with-highlight"], _ && h().disabled, m && !v && h().readonly, b && h().focused, g && h().stretch, t && h().grouped, !i && h()["adjust-position"], s.isTop && h()["first-row"], s.isLeft && h()["first-col"], l)
            }

            function _(e, t) {
                const {
                    highlight: s,
                    highlightRemoveRoundBorder: i
                } = e
                ;
                if (!s) return h().highlight;
                const n = c(null != i ? i : (0, d.getGroupCellRemoveRoundBorders)(t));
                return o(h().highlight, h().shown, n)
            }
            const m = {
                    FontSizeMedium: (0, n.ensureDefined)(h()["font-size-medium"]),
                    FontSizeLarge: (0, n.ensureDefined)(h()["font-size-large"])
                },
                g = {
                    passive: !1
                };

            function v(e, t) {
                const {
                    style: s,
                    id: o,
                    role: n,
                    onFocus: d,
                    onBlur: u,
                    onMouseOver: h,
                    onMouseOut: c,
                    onMouseDown: m,
                    onMouseUp: v,
                    onKeyDown: b,
                    onClick: w,
                    tabIndex: y,
                    startSlot: S,
                    middleSlot: f,
                    endSlot: C,
                    onWheel: E,
                    onWheelNoPassive: M = null
                } = e, {
                    isGrouped: x,
                    cellState: k,
                    disablePositionAdjustment: T = !1
                } = (0, i.useContext)(r.ControlGroupContext), L = function(e, t = null, s) {
                    const o = (0, i.useRef)(null),
                        n = (0, i.useRef)(null),
                        l = (0, i.useCallback)((() => {
                            if (null === o.current || null === n.current) return;
                            const [e, t, s] = n.current;
                            null !== t && o.current.addEventListener(e, t, s)
                        }), []),
                        a = (0, i.useCallback)((() => {
                            if (null === o.current || null === n.current) return;
                            const [e, t, s] = n.current;
                            null !== t && o.current.removeEventListener(e, t, s)
                        }), []),
                        r = (0, i.useCallback)((e => {
                            a(), o.current = e, l()
                        }), []);
                    return (0, i.useEffect)((() => (n.current = [e, t, s], l(), a)), [e, t, s]), r
                }("wheel", M, g);
                return i.createElement("span", {
                    style: s,
                    id: o,
                    role: n,
                    className: p(e, x, k, T),
                    tabIndex: y,
                    ref: (0, l.useMergedRefs)([t, L]),
                    onFocus: d,
                    onBlur: u,
                    onMouseOver: h,
                    onMouseOut: c,
                    onMouseDown: m,
                    onMouseUp: v,
                    onKeyDown: b,
                    onClick: w,
                    onWheel: E,
                    ...(0, a.filterDataProps)(e),
                    ...(0, a.filterAriaProps)(e)
                }, S, f, C, i.createElement("span", {
                    className: _(e, k)
                }))
            }
            v.displayName = "ControlSkeleton";
            const b = i.forwardRef(v)
        },
        514420: (e, t, s) => {
            "use strict";
            s.d(t, {
                BeforeSlot: () => a,
                StartSlot: () => r,
                MiddleSlot: () => d,
                EndSlot: () => u,
                AfterSlot: () => h
            });
            var i = s(50959),
                o = s(497754),
                n = s(484684),
                l = s.n(n);

            function a(e) {
                const {
                    className: t,
                    children: s
                } = e;
                return i.createElement("span", {
                    className: o(l()["before-slot"], t)
                }, s)
            }

            function r(e) {
                const {
                    className: t,
                    interactive: s = !0,
                    icon: n = !1,
                    children: a
                } = e;
                return i.createElement("span", {
                    className: o(l()["inner-slot"], s && l().interactive, n && l().icon, t)
                }, a)
            }

            function d(e) {
                const {
                    className: t,
                    children: s
                } = e;
                return i.createElement("span", {
                    className: o(l()["inner-slot"], l()["inner-middle-slot"], t)
                }, s)
            }

            function u(e) {
                const {
                    className: t,
                    interactive: s = !0,
                    icon: n = !1,
                    children: a
                } = e;
                return i.createElement("span", {
                    className: o(l()["inner-slot"], s && l().interactive, n && l().icon, t)
                }, a)
            }

            function h(e) {
                const {
                    className: t,
                    children: s
                } = e;
                return i.createElement("span", {
                    className: o(l()["after-slot"], t)
                }, s)
            }
        },
        142135: (e, t, s) => {
            "use strict";
            s.d(t, {
                Input: () => i.Input,
                InputControl: () => i.InputControl
            });
            var i = s(314551)
        },
        314551: (e, t, s) => {
            "use strict";
            s.d(t, {
                Input: () => v,
                InputControl: () => b
            });
            var i = s(50959),
                o = s(497754),
                n = s(8626),
                l = s(763341),
                a = s(151057),
                r = s(662929),
                d = s(207357),
                u = s(405964),
                h = s(633750),
                c = s(452395),
                p = s(514420),
                _ = s(358089),
                m = s.n(_);

            function g(e) {
                return !(0, n.isAriaAttribute)(e) && !(0, n.isDataAttribute)(e)
            }

            function v(e) {
                const {
                    id: t,
                    title: s,
                    role: l,
                    tabIndex: a,
                    placeholder: r,
                    name: d,
                    type: u,
                    value: h,
                    defaultValue: _,
                    draggable: v,
                    autoComplete: b,
                    autoFocus: w,
                    maxLength: y,
                    min: S,
                    max: f,
                    step: C,
                    pattern: E,
                    inputMode: M,
                    onSelect: x,
                    onFocus: k,
                    onBlur: T,
                    onKeyDown: L,
                    onKeyUp: V,
                    onKeyPress: B,
                    onChange: P,
                    onDragStart: A,
                    size: W = "medium",
                    className: H,
                    inputClassName: D,
                    disabled: N,
                    readonly: I,
                    containerTabIndex: z,
                    startSlot: O,
                    endSlot: R,
                    reference: G,
                    containerReference: F,
                    onContainerFocus: q,
                    ...U
                } = e, j = (0, n.filterProps)(U, g), $ = { ...(0, n.filterAriaProps)(U),
                    ...(0, n.filterDataProps)(U),
                    id: t,
                    title: s,
                    role: l,
                    tabIndex: a,
                    placeholder: r,
                    name: d,
                    type: u,
                    value: h,
                    defaultValue: _,
                    draggable: v,
                    autoComplete: b,
                    autoFocus: w,
                    maxLength: y,
                    min: S,
                    max: f,
                    step: C,
                    pattern: E,
                    inputMode: M,
                    onSelect: x,
                    onFocus: k,
                    onBlur: T,
                    onKeyDown: L,
                    onKeyUp: V,
                    onKeyPress: B,
                    onChange: P,
                    onDragStart: A
                };
                return i.createElement(c.ControlSkeleton, { ...j,
                    disabled: N,
                    readonly: I,
                    tabIndex: z,
                    className: o(m().container, H),
                    size: W,
                    ref: F,
                    onFocus: q,
                    startSlot: O,
                    middleSlot: i.createElement(p.MiddleSlot, null, i.createElement("input", { ...$,
                        className: o(m().input, D, O && m()["with-start-slot"], R && m()["with-end-slot"]),
                        disabled: N,
                        readOnly: I,
                        ref: G
                    })),
                    endSlot: R
                })
            }

            function b(e) {
                e = (0, d.useControl)(e);
                const {
                    disabled: t,
                    autoSelectOnFocus: s,
                    tabIndex: o = 0,
                    onFocus: n,
                    onBlur: c,
                    reference: p,
                    containerReference: _ = null
                } = e, m = (0, i.useRef)(null), g = (0, i.useRef)(null), [b, w] = (0, u.useFocus)(), y = t ? void 0 : b ? -1 : o, S = t ? void 0 : b ? o : -1, {
                    isMouseDown: f,
                    handleMouseDown: C,
                    handleMouseUp: E
                } = (0, h.useIsMouseDown)(), M = (0, l.createSafeMulticastEventHandler)(w.onFocus, (function(e) {
                    s && !f.current && (0, a.selectAllContent)(e.currentTarget)
                }), n), x = (0, l.createSafeMulticastEventHandler)(w.onBlur, c), k = (0, i.useCallback)((e => {
                    m.current = e, p && ("function" == typeof p && p(e), "object" == typeof p && (p.current = e))
                }), [m, p]);
                return i.createElement(v, { ...e,
                    isFocused: b,
                    containerTabIndex: y,
                    tabIndex: S,
                    onContainerFocus: function(e) {
                        g.current === e.target && null !== m.current && m.current.focus()
                    },
                    onFocus: M,
                    onBlur: x,
                    reference: k,
                    containerReference: (0, r.useMergedRefs)([g, _]),
                    onMouseDown: C,
                    onMouseUp: E
                })
            }
        },
        207357: (e, t, s) => {
            "use strict";
            s.d(t, {
                useControl: () => n
            });
            var i = s(763341),
                o = s(405964);

            function n(e) {
                const {
                    onFocus: t,
                    onBlur: s,
                    intent: n,
                    highlight: l,
                    disabled: a
                } = e, [r, d] = (0, o.useFocus)(void 0, a), u = (0, i.createSafeMulticastEventHandler)(a ? void 0 : d.onFocus, t), h = (0, i.createSafeMulticastEventHandler)(a ? void 0 : d.onBlur, s);
                return { ...e,
                    intent: n || (r ? "primary" : "default"),
                    highlight: null != l ? l : r,
                    onFocus: u,
                    onBlur: h
                }
            }
        },
        405964: (e, t, s) => {
            "use strict";
            s.d(t, {
                useFocus: () => o
            });
            var i = s(50959);

            function o(e, t) {
                const [s, o] = (0, i.useState)(!1);
                (0, i.useEffect)((() => {
                    t && s && o(!1)
                }), [t, s]);
                const n = {
                    onFocus: (0, i.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!0)
                    }), [e]),
                    onBlur: (0, i.useCallback)((function(t) {
                        void 0 !== e && e.current !== t.target || o(!1)
                    }), [e])
                };
                return [s, n]
            }
        },
        640027: (e, t, s) => {
            "use strict";
            s.d(t, {
                useIsMounted: () => o
            });
            var i = s(50959);
            const o = () => {
                const e = (0, i.useRef)(!1);
                return (0, i.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        633750: (e, t, s) => {
            "use strict";
            s.d(t, {
                useIsMouseDown: () => o
            });
            var i = s(50959);

            function o() {
                const e = (0, i.useRef)(!1),
                    t = (0,
                        i.useCallback)((() => {
                        e.current = !0
                    }), [e]),
                    s = (0, i.useCallback)((() => {
                        e.current = !1
                    }), [e]);
                return {
                    isMouseDown: e,
                    handleMouseDown: t,
                    handleMouseUp: s
                }
            }
        },
        662929: (e, t, s) => {
            "use strict";
            s.d(t, {
                useMergedRefs: () => n
            });
            var i = s(50959),
                o = s(551080);

            function n(e) {
                return (0, i.useCallback)((0, o.mergeRefs)(e), e)
            }
        },
        612247: (e, t, s) => {
            "use strict";
            s.d(t, {
                Loader: () => d
            });
            var i, o = s(50959),
                n = s(497754),
                l = s(745269),
                a = s(733319),
                r = s.n(a);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(i || (i = {}));
            class d extends o.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: i.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: s = "medium",
                        staticPosition: i
                    } = this.props, l = n(r().item, r()[t], r()[s]);
                    return o.createElement("span", {
                        className: n(r().loader, i && r().static, this._getStateClass(), e)
                    }, o.createElement("span", {
                        className: l
                    }), o.createElement("span", {
                        className: l
                    }), o.createElement("span", {
                        className: l
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: i.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: i.Active
                        })
                    }), 2 * l.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case i.Initial:
                            return r()["loader-initial"];
                        case i.Appear:
                            return r()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        451608: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => i.SwitchGroup,
                makeSwitchGroupItem: () => l
            });
            var i = s(367254),
                o = s(50959),
                n = s(719036);

            function l(e) {
                var t;
                return t = class extends o.PureComponent {
                    constructor() {
                        super(...arguments), this._onChange = e => {
                            this.context.switchGroupContext.getOnChange()(e)
                        }, this._onUpdate = e => {
                            e.includes(this.props.value) && this.forceUpdate()
                        }
                    }
                    componentDidMount() {
                        this.context.switchGroupContext.subscribe(this._onUpdate)
                    }
                    render() {
                        return o.createElement(e, { ...this.props,
                            name: this._getName(),
                            onChange: this._onChange,
                            checked: this._isChecked()
                        })
                    }
                    componentWillUnmount() {
                        this.context.switchGroupContext.unsubscribe(this._onUpdate)
                    }
                    _getName() {
                        return this.context.switchGroupContext.getName()
                    }
                    _isChecked() {
                        return this.context.switchGroupContext.getValues().includes(this.props.value)
                    }
                }, t.contextTypes = {
                    switchGroupContext: n.any.isRequired
                }, t
            }
        },
        367254: (e, t, s) => {
            "use strict";
            s.d(t, {
                SwitchGroup: () => n
            });
            var i = s(50959),
                o = s(719036);
            class n extends i.PureComponent {
                constructor() {
                    super(...arguments), this._subscriptions = new Set, this._getName = () => this.props.name, this._getValues = () => this.props.values, this._getOnChange = () => this.props.onChange, this._subscribe = e => {
                        this._subscriptions.add(e)
                    }, this._unsubscribe = e => {
                        this._subscriptions.delete(e)
                    }
                }
                getChildContext() {
                    return {
                        switchGroupContext: {
                            getName: this._getName,
                            getValues: this._getValues,
                            getOnChange: this._getOnChange,
                            subscribe: this._subscribe,
                            unsubscribe: this._unsubscribe
                        }
                    }
                }
                render() {
                    return this.props.children
                }
                componentDidUpdate(e) {
                    this._notify(this._getUpdates(this.props.values, e.values))
                }
                _notify(e) {
                    this._subscriptions.forEach((t => t(e)))
                }
                _getUpdates(e, t) {
                    return [...t, ...e].filter((s => t.includes(s) ? !e.includes(s) : e.includes(s)))
                }
            }
            n.childContextTypes = {
                switchGroupContext: o.any.isRequired
            }
        },
        8626: (e, t, s) => {
            "use strict";

            function i(e) {
                return n(e, l)
            }

            function o(e) {
                return n(e, a)
            }

            function n(e, t) {
                const s = Object.entries(e).filter(t),
                    i = {};
                for (const [e, t] of s) i[e] = t;
                return i
            }

            function l(e) {
                const [t, s] = e;
                return 0 === t.indexOf("data-") && "string" == typeof s
            }

            function a(e) {
                return 0 === e[0].indexOf("aria-")
            }
            s.d(t, {
                filterDataProps: () => i,
                filterAriaProps: () => o,
                filterProps: () => n,
                isDataAttribute: () => l,
                isAriaAttribute: () => a
            })
        },
        151057: (e, t, s) => {
            "use strict";

            function i(e) {
                null !== e && e.setSelectionRange(0, e.value.length)
            }
            s.d(t, {
                selectAllContent: () => i
            })
        },
        551080: (e, t, s) => {
            "use strict";

            function i(e) {
                return t => {
                    e.forEach((e => {
                        "function" == typeof e ? e(t) : null != e && (e.current = t)
                    }))
                }
            }

            function o(e) {
                return i([e])
            }
            s.d(t, {
                mergeRefs: () => i,
                isomorphicRef: () => o
            })
        },
        763341: (e, t, s) => {
            "use strict";

            function i(...e) {
                return t => {
                    for (const s of e) void 0 !== s && s(t)
                }
            }
            s.d(t, {
                createSafeMulticastEventHandler: () => i
            })
        },
        428019: (e, t, s) => {
            "use strict";
            s.d(t, {
                ColorSelector: () => m
            });
            var i, o = s(50959),
                n = s(797035),
                l = s(451608),
                a = s(497754),
                r = s.n(a),
                d = s(83436),
                u = s(948019),
                h = s(676809),
                c = s(24122),
                p = s(88987);
            const _ = (0, l.makeSwitchGroupItem)(((i = class extends o.PureComponent {
                constructor() {
                    super(...arguments), this._onClickIfChecked = () => {
                        this.props.onClickIfChecked && this.props.onClickIfChecked(this.props.value)
                    }, this._onChange = () => {
                        this.props.onChange && this.props.onChange(this.props.value)
                    }
                }
                render() {
                    var e, t;
                    const {
                        className: s,
                        value: i,
                        name: n,
                        checked: l
                    } = this.props, a = null !== (t = null === (e = this.context) || void 0 === e ? void 0 : e.type) && void 0 !== t ? t : "menu", u = i;
                    return o.createElement("label", {
                        className: r()(s, p.wrap, "drawer" === a && p.large)
                    }, o.createElement("input", {
                        className: p.input,
                        type: "radio",
                        name: n,
                        value: i,
                        checked: l,
                        onChange: this._onChange,
                        onClick: l ? this._onClickIfChecked : void 0
                    }), o.createElement("div", {
                        className: r()(p.box, p[u], "drawer" === a && p.large)
                    }, l ? o.createElement(d.Icon, {
                        icon: h
                    }) : o.createElement("div", {
                        className: p.pickerDot
                    }, o.createElement(d.Icon, {
                        className: p.hoverDot,
                        icon: c
                    }))))
                }
            }).contextType = u.ContextMenuContext, i.defaultProps = {
                value: n.ListColor.Red
            }, i));
            class m extends o.PureComponent {
                constructor() {
                    super(...arguments), this._onChange = e => {
                        this.props.onChange && this.props.onChange(e)
                    }
                }
                render() {
                    const {
                        buttonClassName: e,
                        value: t,
                        onSelectedClick: s
                    } = this.props, i = n.LIST_COLORS.map(((t, i) => o.createElement(_, {
                        className: e,
                        onClickIfChecked: s,
                        key: i,
                        value: t
                    })));
                    return o.createElement(l.SwitchGroup, {
                        name: "color-selector",
                        onChange: this._onChange,
                        values: [t || ""]
                    }, i)
                }
            }
        },
        795434: (e, t, s) => {
            "use strict";
            s.d(t, {
                LabelColorSelector: () => a
            });
            var i = s(50959),
                o = s(428019),
                n = s(587080),
                l = s(752022);
            class a extends i.PureComponent {
                constructor() {
                    super(...arguments), this._onChange = e => {
                        this.props.onChange(e)
                    }
                }
                render() {
                    const {
                        value: e
                    } = this.props;
                    return i.createElement("span", {
                        className: l.wrapper
                    }, i.createElement("span", {
                        className: l.buttons,
                        onClick: n.preventDefault
                    }, i.createElement(o.ColorSelector, {
                        buttonClassName: l.colorSelectButton,
                        value: e,
                        onChange: this._onChange,
                        onSelectedClick: this._onChange
                    })))
                }
            }
        },
        589007: (e, t, s) => {
            "use strict";
            s.d(t, {
                PopupColorSelector: () => y
            });
            var i = s(50959),
                o = s(500962),
                n = s(670797),
                l = s(642709),
                a = s(18182),
                r = s(332585),
                d = s(67812),
                u = s(762852),
                h = s(768038),
                c = s(707533),
                p = s(428019),
                _ = s(778785),
                m = s(218724);
            class g extends i.PureComponent {
                constructor() {
                    super(...arguments), this._popUpElem = null, this._onChange = e => {
                        this.props.onSelectColor(e), this.props.hide()
                    }, this._onTargetMouseLeave = e => {
                        const t = !!e.relatedTarget.nodeName,
                            s = e.relatedTarget === this._popUpElem,
                            i = this._popUpElem && t && this._popUpElem.contains(e.relatedTarget);
                        s || i || this.props.hide()
                    }, this._onPopUpMouseLeave = e => {
                        const t = !!e.nativeEvent.relatedTarget.nodeName,
                            s = e.nativeEvent.relatedTarget === this.props.elem,
                            i = t && this.props.elem.contains(e.nativeEvent.relatedTarget);
                        s || i || this.props.hide()
                    }, this._onTouchStart = e => {
                        const t = !!e.target.nodeName,
                            s = e.target === this.props.elem,
                            i = e.target === this._popUpElem,
                            o = t && this.props.elem.contains(e.target),
                            n = this._popUpElem && t && this._popUpElem.contains(e.target);
                        s || o || i || n || this.props.hide()
                    }, this._setPopUpElem = e => {
                        this._popUpElem = e
                    }
                }
                componentDidMount() {
                    document.documentElement && (_.mobiletouch ? document.documentElement.addEventListener("touchstart", this._onTouchStart) : (this.props.elem.addEventListener("mouseleave", this._onTargetMouseLeave), document.body.addEventListener("scroll", this.props.hide)))
                }
                componentWillUnmount() {
                    document.documentElement && (_.mobiletouch ? document.documentElement.removeEventListener("touchstart", this._onTouchStart) : this.props.elem && (this.props.elem.removeEventListener("mouseleave", this._onTargetMouseLeave), document.documentElement.removeEventListener("scroll", this.props.hide)))
                }
                render() {
                    const e = {
                        top: 0,
                        left: 0
                    };
                    if (this.props.elem) {
                        const t = this.props.elem.getBoundingClientRect();
                        e.top = t.top + t.height / 2, e.left = t.left + ((0, h.isRtl)() ? 0 : t.width)
                    }
                    return i.createElement(c.Portal, null, i.createElement("div", {
                        style: e,
                        className: m.popup,
                        ref: this._setPopUpElem,
                        onMouseLeave: _.mobiletouch ? void 0 : this._onPopUpMouseLeave
                    }, i.createElement("div", {
                        className: m.wrapper
                    }, i.createElement("div", {
                        className: m.selector
                    }, i.createElement("div", {
                        className: m.arrowLeft
                    }), i.createElement(p.ColorSelector, {
                        buttonClassName: m.colorSelectButton,
                        value: this.props.currentColor,
                        onChange: this._onChange
                    })))))
                }
            }
            var v = s(948019);

            function b(e) {
                const {
                    actions: t,
                    ...s
                } = e;
                return i.createElement(a.MatchMedia, {
                    rule: l.DialogBreakpoints.TabletSmall
                }, (e => e && t ? i.createElement(r.DrawerManager, null, i.createElement(v.ContextMenuContext.Provider, {
                    value: {
                        type: "drawer"
                    }
                }, i.createElement(u.Drawer, {
                    onClose: s.hide,
                    position: "Bottom"
                }, i.createElement(d.ContextMenuList, {
                    items: t
                })))) : i.createElement(g, { ...s
                })))
            }
            let w = null;
            var y;
            ! function(e) {
                function t() {
                    w && o.unmountComponentAtNode(w)
                }
                e.show = function(e) {
                    w || (w = document.createElement("div")), t(), o.render(i.createElement(n.SlotContext.Provider, {
                        value: e.manager || null
                    }, i.createElement(b, { ...e,
                        hide: t
                    })), w)
                }, e.hide = t
            }(y || (y = {}))
        },
        371766: (e, t, s) => {
            "use strict";
            s.d(t, {
                SymbolMarker: () => g,
                createSymbolMarkerStandalone: () => b
            });
            s(984919);
            var i = s(346014),
                o = s(586584),
                n = s(589007),
                l = s(963754),
                a = s(642709),
                r = s(50959),
                d = s(777754),
                u = s(795434),
                h = s(973580),
                c = s(779923),
                p = s(494966),
                _ = s(345848);

            function m(e, t, i, o) {
                const n = function(e, t, i, o) {
                    const n = d.t(null, void 0, s(182246)).format({
                            symbol: (0, p.safeShortName)(t)
                        }),
                        l = e.getSymbolColor(t) || void 0,
                        a = s => {
                            o(), window.runOrSignIn((() => {
                                i.setColor(s), e.setSymbolsColor([t], i.getColor()), (0, _.trackEvent)("Watchlist", "Context menu", "Flag")
                            }), {
                                source: "Set symbol color"
                            })
                        };
                    return [new h.TVAction({
                        label: n,
                        onExecute: () => a(i.getColor())
                    }), new h.TVAction({
                        jsxLabel: r.createElement(u.LabelColorSelector, {
                            value: l,
                            onChange: a
                        }),
                        doNotCloseOnClick: !0
                    })]
                }(e, t, i, o);
                return null !== e.getSymbolColor(t) && n.push(function(e, t) {
                    return new h.TVAction({
                        label: d.t(null, void 0, s(684114)).format({
                            symbol: (0, p.safeShortName)(t)
                        }),
                        onExecute: () => {
                            e.setSymbolsColor([t], null), (0, _.trackEvent)("Watchlist", "Context menu", "Unflag")
                        }
                    })
                }(e, t)), n.push(function(e) {
                    return new h.TVAction({
                        label: d.t(null, void 0, s(560342)),
                        onExecute: () => {
                            var t;
                            t = () => {
                                e.clearAllSymbolsColor()
                            }, (0, c.showConfirm)({
                                text: d.t(null, void 0, s(654408)),
                                onConfirm: ({
                                    dialogClose: e
                                }) => {
                                    t(), e()
                                }
                            }), (0, _.trackEvent)("Watchlist", "Context menu", "Unflag all")
                        }
                    })
                }(e)), n
            }
            class g {
                constructor(e) {
                    this._service = (0, o.getMarkedSymbolsListServiceInstance)(), this._colorManager = new l.ColorManager({
                        context: l.ColorContext.SymbolMarker
                    }), this._classes = [], this._onClick = e => {
                        e.preventDefault();
                        const t = () => {
                                const e = m(this._service, this._symbol, this._colorManager, n.PopupColorSelector.hide),
                                    t = this._colorManager.getColor(),
                                    s = {
                                        elem: this._uimarker.getElem(),
                                        currentColor: t,
                                        onSelectColor: this._onSelectColor,
                                        actions: e,
                                        manager: this._opts.manager
                                    };
                                window.matchMedia(a.DialogBreakpoints.TabletSmall).matches ? n.PopupColorSelector.show(s) : null === this._color ? (n.PopupColorSelector.show(s), this._service.setSymbolsColor([this._symbol], t)) : (n.PopupColorSelector.hide(), this._service.setSymbolsColor([this._symbol], null))
                            },
                            s = window.is_authenticated;
                        window.runOrSignIn((() => {
                            s && (this._opts.onClick ? this._opts.onClick(this._symbol, t) : t())
                        }), {
                            source: "Set symbol color"
                        })
                    }, this._onSelectColor = e => {
                        this._colorManager.setColor(e), this._service.setSymbolsColor([this._symbol], this._colorManager.getColor())
                    }, this._onDblClick = e => {
                        e.preventDefault()
                    }, this._onChange = () => {
                        this._setState(this._service.getSymbolColor(this._symbol))
                    }, this._opts = e, this._symbol = e.symbol, this._color = e.color || this._service.getSymbolColor(this._symbol), this._uimarker = new i.UiMarker({
                        color: this._color,
                        container: e.container,
                        onClick: this._onClick,
                        onDblClick: this._onDblClick,
                        specialImage: e.specialImage
                    }), e.className && this.setClassName(e.className), null !== this._color && this._addActiveClassName(), this._service.onSymbolChange(this._symbol, this._onChange)
                }
                updateSubscription() {
                    this._setState(this._service.getSymbolColor(this._symbol))
                }
                bindTo(e, t) {
                    this._service.offSymbolChange(this._symbol, this._onChange), this._symbol = e, this._uimarker.appendTo(t), this._setState(this._service.getSymbolColor(e)), this._service.onSymbolChange(e, this._onChange)
                }
                unbind() {
                    this._service.offSymbolChange(this._symbol, this._onChange), this._uimarker.detach()
                }
                getElem() {
                    return this._uimarker.getElem()
                }
                isMarked() {
                    return null !== this._color
                }
                setClassName(e) {
                    this._uimarker.getElem().classList.remove(...this._classes), this._classes = e.split(" ").filter(Boolean), this._uimarker.getElem().classList.add(...this._classes)
                }
                destroy() {
                    this.unbind(), delete this._uimarker, delete this._opts
                }
                _setState(e) {
                    const t = this.isMarked();
                    this._color = e, null !== this._color ? (this._uimarker.setColor(this._color), this._addActiveClassName()) : (this._uimarker.removeColor(), this._removeActiveClassName()), void 0 !== this._opts.onMarkedChanged && t !== this.isMarked() && this._opts.onMarkedChanged()
                }
                _addActiveClassName() {
                    this._opts.activeClassName && this._uimarker.addClass(this._opts.activeClassName)
                }
                _removeActiveClassName() {
                    this._opts.activeClassName && this._uimarker.removeClass(this._opts.activeClassName)
                }
            }
            class v extends g {
                constructor(e) {
                    super(e), this._onInit = () => {
                        this.updateSubscription()
                    }, this._service.onInit(this._onInit)
                }
                destroy() {
                    this._service.offInit(this._onInit), super.destroy()
                }
            }

            function b(e) {
                return new v(e)
            }
        },
        346014: (e, t, s) => {
            "use strict";
            s.d(t, {
                UiMarker: () => d
            });
            var i = s(797035),
                o = s(878134),
                n = s(904799),
                l = s(497754),
                a = s(778785),
                r = s(756982);
            class d {
                constructor(e) {
                    this._onClick = e => {
                        this._opts.onClick && this._opts.onClick(e)
                    }, this._onDblClick = e => {
                        this._opts.onDblClick && this._opts.onDblClick(e)
                    }, this._container = e.container, this._opts = e, this._elem = this._render(e), this._addEventListeners()
                }
                setColor(e) {
                    this.removeColor(), this._elem.classList.add(r[e])
                }
                removeColor() {
                    this._elem.classList.remove(r[i.ListColor.Red], r[i.ListColor.Orange], r[i.ListColor.Purple], r[i.ListColor.Green], r[i.ListColor.Blue], r[i.ListColor.Cyan], r[i.ListColor.Pink])
                }
                addClass(e) {
                    this._elem.classList.add(e)
                }
                removeClass(e) {
                    this._elem.classList.remove(e)
                }
                getElem() {
                    return this._elem
                }
                appendTo(e) {
                    this.detach(), this._container = e, this._container.appendChild(this._elem), this._addEventListeners()
                }
                detach() {
                    this._removeEventListeners(), this._container && (this._container.removeChild(this._elem), delete this._container)
                }
                _render(e) {
                    const t = l(r.uiMarker, {
                            [e.className]: Boolean(e.className),
                            [r[e.color]]: Boolean(e.color)
                        }),
                        s = e.specialImage || n,
                        i = (0, o.parseHtmlElement)(`<div class="${t}">${s}</div>`);
                    if (!i) throw new Error("Can't parse html");
                    return this._container && this._container.appendChild(i), i
                }
                _addEventListeners() {
                    const e = a.mobiletouch ? "touchstart" : "click";
                    this._elem.addEventListener(e, this._onClick), this._opts.onDblClick && this._elem.addEventListener("dblclick", this._onDblClick)
                }
                _removeEventListeners() {
                    const e = a.mobiletouch ? "touchstart" : "click";
                    this._elem.removeEventListener(e, this._onClick), this._opts.onDblClick && this._elem.removeEventListener("dblclick", this._onDblClick)
                }
            }
        },
        531327: (e, t, s) => {
            "use strict";

            function i(e) {
                return o() ? 0 : n() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            s.d(t, {
                getWidgetBarPadding: () => i,
                isWidgetBarFullscreen: () => o
            });
            const o = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                n = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        314308: (e, t, s) => {
            "use strict";

            function i(e, t, s, i, o) {
                function n(o) {
                    if (e > o.timeStamp) return;
                    const n = o.target;
                    void 0 !== s && null !== t && null !== n && n.ownerDocument === i && (t.contains(n) || s(o))
                }
                return o.click && i.addEventListener("click", n, !1), o.mouseDown && i.addEventListener("mousedown", n, !1), o.touchEnd && i.addEventListener("touchend", n, !1), o.touchStart && i.addEventListener("touchstart", n, !1), () => {
                    i.removeEventListener("click", n, !1), i.removeEventListener("mousedown", n, !1), i.removeEventListener("touchend", n, !1), i.removeEventListener("touchstart", n, !1)
                }
            }
            s.d(t, {
                addOutsideEventListener: () => i
            })
        },
        575658: (e, t, s) => {
            "use strict";
            s.d(t, {
                setFixedBodyState: () => a
            });
            var i = s(76107),
                o = s(531327);
            let n = 0,
                l = !1;

            function a(e) {
                const {
                    body: t
                } = document, s = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++n) {
                    const e = (0, i.getCSSProperty)(t, "overflow"),
                        o = (0, i.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, i.setStyle)(s, "right", `${(0,i.getScrollbarWidth)()}px`), t.style.paddingRight = `${o+(0,i.getScrollbarWidth)()}px`, l = !0), t.classList.add("i-no-scroll")
                } else if (!e && n > 0 && 0 == --n && (t.classList.remove("i-no-scroll"), l)) {
                    (0, i.setStyle)(s, "right", "0px");
                    let e = 0;
                    e = s ? (0, o.getWidgetBarPadding)((0, i.getContentWidth)(s)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, i.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", l = !1
                }
            }
        },
        176006: (e, t, s) => {
            "use strict";

            function i(e, t) {
                null === e.firstChild ? e.textContent = t : e.firstChild.nodeValue = t
            }
            s.d(t, {
                updateTextNode: () => i
            })
        },
        822714: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                convertToCustomSymbolList: () => l,
                convertToMarkedSymbolList: () => a,
                convertToSymbolList: () => r,
                getCustomWatchLists: () => d,
                getAllWatchLists: () => u,
                renameWatchList: () => h,
                removeWatchList: () => c,
                addSymbols: () => p,
                removeSymbols: () => _,
                replaceSymbols: () => m,
                createWatchList: () => g,
                putWatchList: () => v,
                setActive: () => b,
                getActive: () => w,
                changeDescription: () => y
            });
            var i = s(650151),
                o = s(890740),
                n = s(658583);

            function l(e) {
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
                var t, s;
                const o = (0, i.ensureNotNull)(e.color);
                return {
                    type: "colored",
                    id: o,
                    color: o,
                    name: null !== (t = e.name) && void 0 !== t ? t : null,
                    description: e.description,
                    symbols: null !== (s = e.symbols) && void 0 !== s ? s : [],
                    shared: e.shared
                }
            }

            function r(e) {
                return "custom" === e.type ? l(e) : a(e)
            }

            function d() {
                return (0, o.fetch)("/api/v1/symbols_list/custom/").then(n.handleJSON).then((e => e.map(l)))
            }

            function u() {
                return (0, o.fetch)("/api/v1/symbols_list/all/").then(n.handleJSON).then((e => e.map(r)))
            }

            function h(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/rename/`, {
                    method: "POST",
                    body: JSON.stringify({
                        name: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON)
            }

            function c(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/`, {
                    method: "DELETE"
                }).then(n.handleJSON)
            }

            function p(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/append/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON)
            }

            function _(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e.id}/remove/`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON)
            }

            function m(e, t) {
                return (0,
                    o.fetch)(`/api/v1/symbols_list/custom/${e.id}/replace/?unsafe=true`, {
                    method: "POST",
                    body: JSON.stringify(t),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON)
            }

            function g(e) {
                return (0, o.fetch)("/api/v1/symbols_list/custom/", {
                    method: "POST",
                    body: JSON.stringify({
                        name: e.name,
                        symbols: e.symbols
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON).then(l)
            }

            function v(e) {
                throw new Error("not implemented")
            }

            function b(e) {
                return (0, o.fetch)(`/api/v1/symbols_list/active/${e}/`, {
                    method: "POST"
                })
            }
            async function w() {
                if ((0, n.isDesktopWatchlistAvailable)(window.TVD)) {
                    const e = await window.TVD.getActiveWatchlistId();
                    if (e) {
                        const t = await u(),
                            s = t.find((t => t.id === e));
                        return null != s ? s : t[0]
                    }
                }
                return (0, o.fetch)("/api/v1/symbols_list/active/", {
                    method: "GET"
                }).then(n.handleJSON).then(r)
            }

            function y(e, t) {
                return (0, o.fetch)(`/api/v1/symbols_list/custom/${e}/update_meta/`, {
                    method: "POST",
                    body: JSON.stringify({
                        description: t
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(n.handleJSON).then(r)
            }
        },
        658583: (e, t, s) => {
            "use strict";
            s.d(t, {
                handleJSON: () => o,
                isDesktopWatchlistAvailable: () => n
            });
            var i = s(638456);

            function o(e) {
                return e.ok ? 204 === e.status ? Promise.resolve() : e.json() : e.json().then((e => {
                    const t = new Error(e.detail || "not ok");
                    throw e.code && (t.name = `ApiError:${e.code}`), t
                }))
            }

            function n(e) {
                return Boolean((0, i.isDesktopApp)() && e && "getActiveWatchlistId" in e && "onActiveWatchlistIdChange" in e)
            }
        },
        642709: (e, t, s) => {
            "use strict";
            s.d(t, {
                DialogBreakpoints: () => o
            });
            var i = s(645469);
            const o = {
                SmallHeight: i["small-height-breakpoint"],
                TabletSmall: i["tablet-small-breakpoint"],
                TabletNormal: i["tablet-normal-breakpoint"]
            }
        },
        332450: (e, t, s) => {
            "use strict";
            s.d(t, {
                CLOSE_POPUPS_AND_DIALOGS_COMMAND: () => i,
                breakpointList: () => o
            });
            const i = "CLOSE_POPUPS_AND_DIALOGS_COMMAND",
                o = [1920, 1440, 1280, 1024, 768, 480, 0]
        },
        948019: (e, t, s) => {
            "use strict";
            s.d(t, {
                ContextMenuContext: () => i
            });
            const i = s(50959).createContext(null)
        },
        582997: (e, t, s) => {
            "use strict";
            s.d(t, {
                Hint: () => a
            });
            var i = s(50959),
                o = s(497754),
                n = s.n(o),
                l = s(768550);

            function a(e) {
                const {
                    text: t = "",
                    className: s
                } = e;
                return i.createElement("span", {
                    className: n()(l.shortcut, s)
                }, t)
            }
        },
        886004: (e, t, s) => {
            "use strict";
            s.d(t, {
                ContextMenuItem: () => _
            });
            var i = s(50959),
                o = s(497754),
                n = s.n(o),
                l = s(83436),
                a = s(612247),
                r = s(302478),
                d = s(582997),
                u = s(339750),
                h = s(379978),
                c = s(69311),
                p = s(503651);

            function _(e) {
                const {
                    isTitle: t,
                    isLoading: s,
                    isHovered: o,
                    active: _,
                    checkable: m,
                    disabled: g,
                    checked: v,
                    icon: b,
                    iconChecked: w,
                    hint: y,
                    subItems: S,
                    label: f,
                    onClick: C,
                    children: E,
                    toolbox: M,
                    jsxLabel: x,
                    size: k = "normal"
                } = e, T = (0, i.useContext)(r.EmptyIconsContext), L = !!S.length;
                return s ? i.createElement("li", {
                    className: n()(p.item, p.loading, p[k])
                }, i.createElement(a.Loader, null)) : i.createElement("li", {
                    className: n()(p.item, p.interactive, t && p.title, g && p.disabled, o && p.hovered, _ && p.active, T && p.emptyIcons, p[k]),
                    onClick: C
                }, i.createElement(l.Icon, {
                    className: n()(p.icon),
                    icon: function() {
                        if (m && v) return w || b || u;
                        return b
                    }()
                }), i.createElement("span", {
                    className: n()(p.label)
                }, null != x ? x : f), !!M && i.createElement(l.Icon, {
                    onClick: function() {
                        M && M.action()
                    },
                    className: p.remove,
                    icon: c
                }), !L && y && i.createElement(d.Hint, {
                    className: p.shortcut,
                    text: y
                }), L && i.createElement(l.Icon, {
                    className: p.nested,
                    icon: h
                }), E)
            }
        },
        67812: (e, t, s) => {
            "use strict";
            s.d(t, {
                ContextMenuList: () => c
            });
            var i = s(50959),
                o = s(481956);

            function n(e) {
                return i.createElement("li", {
                    className: o.separator
                })
            }
            var l = s(886004),
                a = s(762852),
                r = s(224743);

            function d(e) {
                const {
                    action: t
                } = e, [s, o] = (0, i.useState)((() => t.getState())), [n, d] = (0, i.useState)(!1), u = !!s.subItems.length, h = u && n;
                return (0, i.useEffect)((() => {
                    const e = () => o(t.getState());
                    return t.onUpdate().subscribe(null, e), () => {
                        t.onUpdate().unsubscribe(null, e)
                    }
                }), []), i.createElement(l.ContextMenuItem, { ...s,
                    onClick: function(e) {
                        if (s.disabled || e.defaultPrevented) return;
                        if (u) return void d(!0);
                        s.doNotCloseOnClick || (0, r.globalCloseMenu)();
                        t.execute()
                    },
                    isLoading: s.loading,
                    isHovered: h
                }, h && i.createElement(a.Drawer, {
                    onClose: p
                }, i.createElement(c, {
                    items: s.subItems,
                    parentAction: t,
                    closeNested: p
                })));

                function p(e) {
                    e && e.preventDefault(), d(!1)
                }
            }
            var u = s(302478),
                h = s(366493);

            function c(e) {
                const {
                    items: t,
                    parentAction: s,
                    closeNested: o
                } = e, a = !Boolean(s) && t.every((e => !Boolean("separator" !== e.type && (e.getState().icon || e.getState().checkable))));
                return i.createElement(u.EmptyIconsContext.Provider, {
                    value: a
                }, i.createElement("ul", null, s && i.createElement(i.Fragment, null, i.createElement(l.ContextMenuItem, {
                    label: s.getState().label,
                    isTitle: !0,
                    active: !1,
                    disabled: !1,
                    subItems: [],
                    checkable: !1,
                    checked: !1,
                    doNotCloseOnClick: !1,
                    icon: h,
                    onClick: o
                }), i.createElement(n, null)), t.map((e => {
                    switch (e.type) {
                        case "action":
                            return i.createElement(d, {
                                key: e.id,
                                action: e
                            });
                        case "separator":
                            return i.createElement(n, {
                                key: e.id
                            })
                    }
                }))))
            }
        },
        302478: (e, t, s) => {
            "use strict";
            s.d(t, {
                EmptyIconsContext: () => i
            });
            const i = s(50959).createContext(!1)
        },
        332585: (e, t, s) => {
            "use strict";
            s.d(t, {
                DrawerManager: () => n,
                DrawerContext: () => l
            });
            var i = s(50959),
                o = s(575658);
            class n extends i.PureComponent {
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
                    return i.createElement(l.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const l = i.createContext(null)
        },
        762852: (e, t, s) => {
            "use strict";
            s.d(t, {
                Drawer: () => c
            });
            var i = s(50959),
                o = s(650151),
                n = s(497754),
                l = s(777491),
                a = s(707533),
                r = s(332585),
                d = s(320116),
                u = s(150881),
                h = s(945966);

            function c(e) {
                const {
                    position: t = "Bottom",
                    onClose: s,
                    children: c,
                    className: p,
                    theme: _ = h
                } = e, m = (0, o.ensureNotNull)((0, i.useContext)(r.DrawerContext)), [g] = (0, i.useState)((() => (0, l.randomHash)())), v = (0, i.useRef)(null), b = (0, i.useContext)(d.CloseDelegateContext);
                return (0, i.useLayoutEffect)((() => ((0,
                    o.ensureNotNull)(v.current).focus({
                    preventScroll: !0
                }), b.subscribe(m, s), m.addDrawer(g), () => {
                    m.removeDrawer(g), b.unsubscribe(m, s)
                })), []), i.createElement(a.Portal, null, i.createElement("div", {
                    className: n(h.wrap, h[`position${t}`])
                }, g === m.currentDrawer && i.createElement("div", {
                    className: h.backdrop,
                    onClick: s
                }), i.createElement(u.TouchScrollContainer, {
                    className: n(h.drawer, _.drawer, h[`position${t}`], p),
                    tabIndex: -1,
                    ref: v,
                    "data-name": e["data-name"]
                }, c)))
            }
        },
        951292: (e, t, s) => {
            "use strict";
            s.d(t, {
                useOutsideEvent: () => n
            });
            var i = s(50959),
                o = s(314308);

            function n(e) {
                const {
                    click: t,
                    mouseDown: s,
                    touchEnd: n,
                    touchStart: l,
                    handler: a,
                    reference: r,
                    ownerDocument: d = document
                } = e, u = (0, i.useRef)(null), h = (0, i.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, i.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: s,
                            touchEnd: n,
                            touchStart: l
                        },
                        i = r ? r.current : u.current;
                    return (0, o.addOutsideEventListener)(h.current, i, a, d, e)
                }), [t, s, n, l, a]), r || u
            }
        },
        733410: (e, t, s) => {
            "use strict";
            s.d(t, {
                KeyCode: () => i,
                KeyboardListener: () => n,
                makeKeyboardListener: () => l
            });
            var i, o = s(50959);
            ! function(e) {
                e[e.Enter = 13] = "Enter", e[e.Space = 32] = "Space", e[e.Backspace = 8] = "Backspace", e[e.DownArrow = 40] = "DownArrow", e[e.UpArrow = 38] = "UpArrow", e[e.RightArrow = 39] = "RightArrow", e[e.LeftArrow = 37] = "LeftArrow", e[e.Escape = 27] = "Escape", e[e.Tab = 9] = "Tab"
            }(i || (i = {}));
            class n {
                constructor() {
                    this._handlers = new Map
                }
                registerHandlers(e) {
                    Object.keys(e).forEach((t => {
                        const s = parseInt(t);
                        let i = e[s];
                        if (Array.isArray(i) || (i = [i]), this._handlers.has(s)) {
                            const e = this._handlers.get(s);
                            e && i.forEach((t => e.add(t)))
                        } else this._handlers.set(s, new Set(i))
                    }))
                }
                unregisterHandlers(e) {
                    Object.keys(e).forEach((t => {
                        const s = parseInt(t);
                        let i = e[s];
                        if (Array.isArray(i) || (i = [i]), this._handlers.has(s)) {
                            const e = this._handlers.get(s);
                            e && i.forEach((t => e.delete(t)))
                        }
                    }))
                }
                deleteAllHandlers() {
                    this._handlers = new Map
                }
                registerHandler(e, t) {
                    if (this._handlers.has(e)) {
                        const s = this._handlers.get(e);
                        s && s.add(t)
                    } else this._handlers.set(e, new Set([t]))
                }
                unregisterHandler(e, t) {
                    if (this._handlers.has(e)) {
                        const s = this._handlers.get(e);
                        s && s.delete(t)
                    }
                }
                listen(e) {
                    if (this._handlers.has(e.keyCode)) {
                        const t = this._handlers.get(e.keyCode);
                        t && t.forEach((t => t(e)))
                    }
                }
            }

            function l(e) {
                var t, s, i;
                return (i = class extends o.PureComponent {
                    constructor(e) {
                        super(e), this._keyboardListener = new n, this._listener = this._keyboardListener.listen.bind(this._keyboardListener)
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
                            ...s
                        } = this.props;
                        return o.createElement(e, { ...s,
                            onKeyDown: this._listener
                        })
                    }
                    _registerHandlers(e) {
                        e && (this._keyboardListener.deleteAllHandlers(), this._keyboardListener.registerHandlers(e))
                    }
                }).displayName = `KeyboardListener(${null!==(s=null!==(t=e.displayName)&&void 0!==t?t:e.name)&&void 0!==s?s:"Component"})`, i
            }
        },
        18182: (e, t, s) => {
            "use strict";
            s.d(t, {
                MatchMedia: () => o
            });
            var i = s(50959);
            class o extends i.PureComponent {
                constructor(e) {
                    super(e), this._handleChange = () => {
                            this.forceUpdate()
                        },
                        this.state = {
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
        157490: (e, t, s) => {
            "use strict";
            s.d(t, {
                OutsideEvent: () => o
            });
            var i = s(951292);

            function o(e) {
                const {
                    children: t,
                    ...s
                } = e;
                return t((0, i.useOutsideEvent)(s))
            }
        },
        829725: (e, t, s) => {
            "use strict";
            s.d(t, {
                OverlapManager: () => n,
                getRootOverlapManager: () => a
            });
            var i = s(650151);
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
            class n {
                constructor(e = document) {
                    this._storage = new o, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
                }
                setContainer(e) {
                    const t = this._container,
                        s = null === e ? this._document.createDocumentFragment() : e;
                    ! function(e, t) {
                        Array.from(e.childNodes).forEach((e => {
                            e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                        }))
                    }(t, s), this._container = s
                }
                registerWindow(e) {
                    this._storage.has(e) || this._storage.add(e)
                }
                ensureWindow(e, t = {
                    position: "fixed",
                    direction: "normal"
                }) {
                    const s = this._windows.get(e);
                    if (void 0 !== s) return s;
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
            const l = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, i.ensureDefined)(l.get(t)); {
                    const t = new n(e),
                        s = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return l.set(s, t), t.setContainer(s), e.body.appendChild(s), t
                }
            }
        },
        368337: (e, t, s) => {
            "use strict";
            s.d(t, {
                makeOverlapable: () => n
            });
            var i = s(50959),
                o = s(707533);

            function n(e) {
                return class extends i.PureComponent {
                    render() {
                        const {
                            isOpened: t,
                            root: s
                        } = this.props;
                        if (!t) return null;
                        const n = i.createElement(e, { ...this.props,
                            zIndex: 150
                        });
                        return "parent" === s ? n : i.createElement(o.Portal, null, n)
                    }
                }
            }
        },
        320116: (e, t, s) => {
            "use strict";
            s.d(t, {
                CloseDelegateContext: () => n
            });
            var i = s(50959),
                o = s(224743);
            const n = i.createContext(o.globalCloseDelegate)
        },
        707533: (e, t, s) => {
            "use strict";
            s.d(t, {
                Portal: () => r,
                PortalContext: () => d
            });
            var i = s(50959),
                o = s(500962),
                n = s(777491),
                l = s(829725),
                a = s(670797);
            class r extends i.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, n.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", o.createPortal(i.createElement(d.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, l.getRootOverlapManager)() : this.context
                }
            }
            r.contextType = a.SlotContext;
            const d = i.createContext(null)
        },
        670797: (e, t, s) => {
            "use strict";
            s.d(t, {
                Slot: () => o,
                SlotContext: () => n
            });
            var i = s(50959);
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
            const n = i.createContext(null)
        },
        416293: (e, t, s) => {
            "use strict";
            s.d(t, {
                ToolWidgetCaret: () => r
            });
            var i = s(50959),
                o = s(497754),
                n = s(83436),
                l = s(190948),
                a = s(100578);

            function r(e) {
                const {
                    dropped: t,
                    className: s
                } = e;
                return i.createElement(n.Icon, {
                    className: o(s, l.icon, {
                        [l.dropped]: t
                    }),
                    icon: a
                })
            }
        },
        12173: (e, t, s) => {
            "use strict";
            s.d(t, {
                TooltipWizard: () => d,
                TooltipWidget: () => u
            });
            var i = s(50959),
                o = s(497754),
                n = s(83436),
                l = s(707533),
                a = s(333765),
                r = s(844662);
            class d extends i.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: s,
                        reference: n,
                        containerClassName: a,
                        arrowClassName: d
                    } = this.props;
                    return i.createElement(l.Portal, null, i.createElement("div", {
                        ref: n
                    }, i.createElement(u, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: o(r.arrowHolder, this._getArrowDirectionClass(), d),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: s,
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
                            return o(r["arrowHolder--after"], r["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return o(r["arrowHolder--above"], r["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return r["arrowHolder--below"];
                        default:
                            return o(r["arrowHolder--before"], r["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function u(e) {
                const {
                    className: t,
                    containerClassName: s,
                    contentClassName: l,
                    reference: d,
                    style: u,
                    arrow: h = !0,
                    arrowClassName: c,
                    arrowReference: p,
                    onClose: _,
                    arrowStyle: m,
                    children: g,
                    ...v
                } = e;
                return i.createElement("div", { ...v,
                    className: t,
                    ref: d,
                    style: u
                }, h && i.createElement("div", {
                    className: c,
                    ref: p,
                    style: m
                }), i.createElement("div", {
                    className: o(r.container, s)
                }, i.createElement("div", {
                    className: o(r.content, l)
                }, g), _ && i.createElement(n.Icon, {
                    className: r.closeButton,
                    icon: a,
                    onClick: _
                })))
            }
        },
        150881: (e, t, s) => {
            "use strict";
            s.d(t, {
                TouchScrollContainer: () => a
            });
            var i = s(50959),
                o = s(259142),
                n = s(650151),
                l = s(638456);
            const a = (0, i.forwardRef)(((e, t) => {
                const {
                    children: s,
                    ...n
                } = e, a = (0, i.useRef)(null);
                return (0, i.useImperativeHandle)(t, (() => a.current)), (0, i.useLayoutEffect)((() => {
                    if (l.CheckMobile.iOS()) return null !== a.current && (0, o.disableBodyScroll)(a.current, {
                        allowTouchMove: r(a)
                    }), () => {
                        null !== a.current && (0, o.enableBodyScroll)(a.current)
                    }
                }), []), i.createElement("div", {
                    ref: a,
                    ...n
                }, s)
            }));

            function r(e) {
                return t => {
                    const s = (0, n.ensureNotNull)(e.current),
                        i = document.activeElement;
                    return !s.contains(t) || null !== i && s.contains(i) && i.contains(t)
                }
            }
        },
        906132: (e, t, s) => {
            "use strict";
            var i = s(522134);

            function o() {}

            function n() {}
            n.resetWarningCache = o, e.exports = function() {
                function e(e, t, s, o, n, l) {
                    if (l !== i) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var s = {
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
                    checkPropTypes: n,
                    resetWarningCache: o
                };
                return s.PropTypes = s, s
            }
        },
        719036: (e, t, s) => {
            e.exports = s(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        149021: e => {
            e.exports = {
                "animation-minimize-corner-left-top": "animation-minimize-corner-left-top-qWid4aZU",
                "animation-minimize-corner-right-top": "animation-minimize-corner-right-top-qWid4aZU",
                "animation-minimize-corner-right-bottom": "animation-minimize-corner-right-bottom-qWid4aZU",
                "animation-minimize-corner-left-bottom": "animation-minimize-corner-left-bottom-qWid4aZU",
                "animation-maximize-corner-left-top": "animation-maximize-corner-left-top-qWid4aZU",
                "animation-maximize-corner-right-top": "animation-maximize-corner-right-top-qWid4aZU",
                "animation-maximize-corner-right-bottom": "animation-maximize-corner-right-bottom-qWid4aZU",
                "animation-maximize-corner-left-bottom": "animation-maximize-corner-left-bottom-qWid4aZU"
            }
        },
        839653: e => {
            e.exports = {
                marginlegendhoriz: "4px",
                legend: "legend-G1_Pfvwd",
                item: "item-G1_Pfvwd",
                withAction: "withAction-G1_Pfvwd",
                selected: "selected-G1_Pfvwd",
                last: "last-G1_Pfvwd",
                text: "text-G1_Pfvwd",
                noWrapWrapper: "noWrapWrapper-G1_Pfvwd",
                noWrap: "noWrap-G1_Pfvwd",
                series: "series-G1_Pfvwd",
                valuesAdditionalWrapper: "valuesAdditionalWrapper-G1_Pfvwd",
                valueItem: "valueItem-G1_Pfvwd",
                valueTitle: "valueTitle-G1_Pfvwd",
                valueValue: "valueValue-G1_Pfvwd",
                hideUniportantValueItems: "hideUniportantValueItems-G1_Pfvwd",
                unimportant: "unimportant-G1_Pfvwd",
                valuesWrapper: "valuesWrapper-G1_Pfvwd",
                wrappable: "wrappable-G1_Pfvwd",
                directionColumn: "directionColumn-G1_Pfvwd",
                titleWrapper: "titleWrapper-G1_Pfvwd",
                button: "button-G1_Pfvwd",
                statusesWrapper: "statusesWrapper-G1_Pfvwd",
                buttonsWrapper: "buttonsWrapper-G1_Pfvwd",
                buttons: "buttons-G1_Pfvwd",
                noActions: "noActions-G1_Pfvwd",
                title: "title-G1_Pfvwd",
                intervalTitle: "intervalTitle-G1_Pfvwd",
                disabled: "disabled-G1_Pfvwd",
                disabledOnInterval: "disabledOnInterval-G1_Pfvwd",
                withDot: "withDot-G1_Pfvwd",
                withCustomTextColor: "withCustomTextColor-G1_Pfvwd",
                study: "study-G1_Pfvwd",
                mainTitle: "mainTitle-G1_Pfvwd",
                descTitle: "descTitle-G1_Pfvwd",
                hideValues: "hideValues-G1_Pfvwd",
                has5Buttons: "has5Buttons-G1_Pfvwd",
                stayInHoveredMode: "stayInHoveredMode-G1_Pfvwd",
                withTail: "withTail-G1_Pfvwd",
                loading: "loading-G1_Pfvwd",
                loader: "loader-G1_Pfvwd",
                providerTitle: "providerTitle-G1_Pfvwd",
                exchangeTitle: "exchangeTitle-G1_Pfvwd",
                styleTitle: "styleTitle-G1_Pfvwd",
                minHideIntervalTitle: "minHideIntervalTitle-G1_Pfvwd",
                microHideIntervalTitle: "microHideIntervalTitle-G1_Pfvwd",
                hideExchangeProviderTitles: "hideExchangeProviderTitles-G1_Pfvwd",
                flagged: "flagged-G1_Pfvwd",
                medium: "medium-G1_Pfvwd",
                minimized: "minimized-G1_Pfvwd",
                micro: "micro-G1_Pfvwd",
                onlyOneButtonCanBeStick: "onlyOneButtonCanBeStick-G1_Pfvwd",
                touchMode: "touchMode-G1_Pfvwd",
                buttonIcon: "buttonIcon-G1_Pfvwd",
                flag: "flag-G1_Pfvwd",
                invisibleHover: "invisibleHover-G1_Pfvwd",
                eye: "eye-G1_Pfvwd",
                eyeLoading: "eyeLoading-G1_Pfvwd",
                "eye-animation": "eye-animation-G1_Pfvwd",
                intervalEye: "intervalEye-G1_Pfvwd",
                markerContainer: "markerContainer-G1_Pfvwd",
                flagWrapper: "flagWrapper-G1_Pfvwd",
                sourcesWrapper: "sourcesWrapper-G1_Pfvwd",
                legendMainSourceWrapper: "legendMainSourceWrapper-G1_Pfvwd",
                sources: "sources-G1_Pfvwd",
                toggler: "toggler-G1_Pfvwd pane-button-Cky0LHBF",
                onlyOneSourceShown: "onlyOneSourceShown-G1_Pfvwd",
                counter: "counter-G1_Pfvwd",
                iconArrow: "iconArrow-G1_Pfvwd",
                objectTree: "objectTree-G1_Pfvwd",
                closed: "closed-G1_Pfvwd",
                objectsTreeCanBeShown: "objectsTreeCanBeShown-G1_Pfvwd"
            }
        },
        818940: e => {
            e.exports = {
                loader: "loader-vqx5DqPL",
                loaderItem: "loaderItem-vqx5DqPL",
                "loader-animation": "loader-animation-vqx5DqPL",
                touchMode: "touchMode-vqx5DqPL"
            }
        },
        567562: e => {
            e.exports = {
                "css-value-pane-controls-padding-left": "1px",
                "css-value-pane-controls-padding-right": "5px",
                css_value_pane_controls_margin_top: "6",
                css_value_pane_controls_button_size: "19",
                css_value_pane_controls_button_touch_size: "19",
                paneControls: "paneControls-dKqC8zmq",
                hidden: "hidden-dKqC8zmq",
                forceHidden: "forceHidden-dKqC8zmq",
                button: "button-dKqC8zmq pane-button-Cky0LHBF",
                buttonIcon: "buttonIcon-dKqC8zmq",
                minimize: "minimize-dKqC8zmq",
                restore: "restore-dKqC8zmq",
                newButton: "newButton-dKqC8zmq",
                touchMode: "touchMode-dKqC8zmq",
                maximize: "maximize-dKqC8zmq",
                collapse: "collapse-dKqC8zmq",
                "maximize-animation-up-bracket": "maximize-animation-up-bracket-dKqC8zmq",
                "maximize-animation-down-bracket": "maximize-animation-down-bracket-dKqC8zmq",
                "minimize-animation-up-bracket": "minimize-animation-up-bracket-dKqC8zmq",
                "minimize-animation-down-bracket": "minimize-animation-down-bracket-dKqC8zmq",
                up: "up-dKqC8zmq",
                "up-animation": "up-animation-dKqC8zmq",
                down: "down-dKqC8zmq",
                "down-animation": "down-animation-dKqC8zmq",
                buttonsWrapper: "buttonsWrapper-dKqC8zmq"
            }
        },
        262927: e => {
            e.exports = {
                blockHidden: "blockHidden-Cky0LHBF",
                "pane-button": "pane-button-Cky0LHBF"
            }
        },
        811481: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                ControlBarNavigation: () => Z
            });
            var i = s(650151),
                o = s(777754),
                n = s(778785),
                l = s(495046),
                a = s(387226),
                r = s(768038),
                d = s(878134),
                u = s(604286),
                h = s(638456),
                c = s(470316),
                p = s(345848),
                _ = s(850775),
                m = s(247424),
                g = s(94881),
                v = s(715741),
                b = s(588398),
                w = s(670340),
                y = s(549483),
                S = s(50119),
                f = s(362884),
                C = s(250662),
                E = s(542205),
                M = s(303106),
                x = s(978360);
            s(149021);
            const k = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
                T = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
                L = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
                V = (0, u.hotKeySerialize)({
                    keys: [k, "R"],
                    text: "{0} + {1}"
                }),
                B = (0, u.hotKeySerialize)({
                    keys: [k, "Click", k, "Enter"],
                    text: "{0} + {1}, {2} + {3}"
                }),
                P = (0, u.hotKeySerialize)({
                    keys: [S],
                    text: "{0}"
                }),
                A = (0, u.hotKeySerialize)({
                    keys: [f],
                    text: "{0}"
                }),
                W = (0, u.hotKeySerialize)({
                    keys: [L, C],
                    text: "{0} + {1}"
                }),
                H = (0, u.hotKeySerialize)({
                    keys: [L, E],
                    text: "{0} + {1}"
                }),
                D = (0, u.hotKeySerialize)({
                    keys: [k, T, f],
                    text: "{0} + {1} + {2}"
                }),
                N = o.t(null, void 0, s(247602)),
                I = o.t(null, void 0, s(461311)),
                z = o.t(null, void 0, s(256470)),
                O = o.t(null, void 0, s(48293)),
                R = o.t(null, void 0, s(540653)),
                G = o.t(null, void 0, s(135809)),
                F = o.t(null, void 0, s(834301)),
                q = o.t(null, void 0, s(426721)),
                U = `<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="${N}" data-tooltip-hotkey="${H}">\n\t\t\t\t${g}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="${I}" data-tooltip-hotkey="${W}">\n\t\t\t\t${b}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="${z}" data-tooltip-hotkey="${B}">\n\t\t\t\t${M}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="${O}" data-tooltip-hotkey="${B}">\n\t\t\t\t${x}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="${R}" data-tooltip-hotkey="${P}">\n\t\t\t\t${m}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="${G}" data-tooltip-hotkey="${A}">\n\t\t\t\t${w}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="${F}" data-tooltip-hotkey="${V}">\n\t\t\t\t${v}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`,
                j = `<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="${q}" data-tooltip-hotkey="${D}">\n\t${y}\n</div>`,
                $ = h.CheckMobile.any(),
                Y = "control-bar__btn--btn-hidden",
                K = {
                    zoomInOut: !0,
                    maximize: !0,
                    scrollLeftRight: !0,
                    resetScale: !0,
                    goToRealtime: !0
                };
            class Z {
                constructor(e, t, s) {
                    this._widget = (0, i.ensureNotNull)((0, d.parseHtml)(U).querySelector(".control-bar-wrapper")), this._controlBar = (0, i.ensureNotNull)(this._widget.querySelector(".control-bar")), this._back = (0, i.ensureNotNull)((0, d.parseHtml)(j).querySelector(".control-bar__btn--back-present")), this._btnGroups = Array.from(this._controlBar.querySelectorAll(".js-btn-group")), this._backButtonVisible = !1, this._boundMouseHandler = null, this._chartModel = null, this._checkIntervalId = 0, this._controlBarVisible = !1, this._priceAxisChanged = null, this._resetAvailabilityChanged = null, this._priceAxisName = "right", this._rafId = 0, this._visibilityTypeProperty = null, this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(this), this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(this), this._paneWidth = 0, this._leftPriceScaleWidth = 0, this._rightPriceScaleWidth = 0, this._chart = e, this._parent = t, this._options = Object.assign({}, K, s), this._visibilityPrioritizedGroups = this._initGroupDescriptions(), this._init(), this._initHandlers(), this.updatePosition()
                }
                destroy() {
                    if (null !== this._visibilityTypeProperty && (this._visibilityTypeProperty.unsubscribe(this, this._onVisibilityTypeChange), this._visibilityTypeProperty = null), null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null), null !== this._priceAxisChanged && (this._priceAxisChanged.unsubscribe(this, this._updateBackBtnPosition), this._priceAxisChanged = null), clearInterval(this._checkIntervalId), null !== this._resetAvailabilityChanged) {
                        this._resetAvailabilityChanged.unsubscribe(this, this._updateResetScalesButtonVisibility);
                        const e = this._chart.getResizerDetacher();
                        e.fullscreenable.unsubscribe(this._boundUpdateMaximizeButtonsVisibility), e.fullscreen.unsubscribe(this._boundToggleFullscreenButtons), this._resetAvailabilityChanged = null
                    }
                    this._chart = null
                }
                updatePosition() {
                    const e = this._chart.paneWidgets();
                    if (0 === e.length) return;
                    this._paneWidth = e[0].width(), this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("left"), this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("right");
                    const t = this._chart.timeAxisHeight() + this._bottomMargin();
                    this._widget.style.bottom = `${t}px`, this._back.style.bottom = `${t}px`, this._updateBtnGroupVisibility()
                }
                _bottomMargin() {
                    var e;
                    const t = this._chart.paneWidgets();
                    return (null !== (e = this._chart.maximizedPaneWidget()) && void 0 !== e ? e : t[t.length - 1]).containsMainSeries() ? 32 : 5
                }
                _init() {
                    if (h.CheckMobile.any())
                        for (const e of this._btnGroups) e.classList.add("js-hidden");
                    this._buttons = {
                        zoomIn: this._widget.querySelector(".control-bar__btn--zoom-in"),
                        zoomOut: this._widget.querySelector(".control-bar__btn--zoom-out"),
                        moveLeft: this._widget.querySelector(".control-bar__btn--move-left"),
                        moveRight: this._widget.querySelector(".control-bar__btn--move-right"),
                        turn: this._widget.querySelector(".control-bar__btn--turn-button"),
                        maximize: this._widget.querySelector(".control-bar__btn--maximize"),
                        minimize: this._widget.querySelector(".control-bar__btn--minimize")
                    }, this._initVisibility(), this._parent.appendChild(this._widget), this._parent.appendChild(this._back), this._backButtonVisible = !1, this._priceAxisName = (0, r.isRtl)() ? "left" : "right", this._chart.withModel(this, (() => {
                        this._chartModel = this._chart.model(), this._priceAxisChanged = this._chart.getPriceAxisWidthChangedByName(this._priceAxisName), this._resetAvailabilityChanged = this._chartModel.model().isScalesResetAvailableChanged(), this._priceAxisChanged.subscribe(this, this._updateBackBtnPosition), this._resetAvailabilityChanged.subscribe(this, this._updateResetScalesButtonVisibility);
                        const e = this._chart.getResizerDetacher();
                        e.fullscreenable.subscribe(this._boundUpdateMaximizeButtonsVisibility), e.fullscreen.subscribe(this._boundToggleFullscreenButtons), this._updateMaximizeButtonsVisibility(), this._updateBackBtnPosition(), this._back.addEventListener("click", (() => {
                            null !== this._chartModel && this._chartModel.timeScale().scrollToRealtime(!0)
                        })), this._checkIntervalId = setInterval((() => this._check()), 1e3)
                    }))
                }
                _initHandlers() {
                    const e = n.mobiletouch ? "touchstart" : "mousedown",
                        t = n.mobiletouch ? ["touchend"] : ["mouseup", "mouseout"];
                    this._buttons.moveLeft.addEventListener(e, (e => {
                        e.preventDefault(), this._chart.scrollHelper().moveByBar(1), this._trackEvent("Move Left")
                    })), this._buttons.moveRight.addEventListener(e, (e => {
                        e.preventDefault(), this._chart.scrollHelper().moveByBar(-1), this._trackEvent("Move Right")
                    }));
                    for (const e of t) this._buttons.moveLeft.addEventListener(e, (() => this._chart.scrollHelper().stopMoveByBar())), this._buttons.moveRight.addEventListener(e, (() => this._chart.scrollHelper().stopMoveByBar()));
                    this._buttons.turn.addEventListener("click", (e => {
                        e.preventDefault(), this._chart.GUIResetScales(), this._trackEvent("Reset to Default Settings")
                    })), this._buttons.zoomOut.addEventListener("click", (e => {
                        e.preventDefault(), null !== this._chartModel && this._chartModel.zoomOut(), this._trackEvent("Zoom Out")
                    })), this._buttons.zoomIn.addEventListener("click", (e => {
                        e.preventDefault(), null !== this._chartModel && this._chartModel.zoomIn(), this._trackEvent("Zoom In")
                    })), this._buttons.maximize.addEventListener("click", (e => {
                        e.preventDefault(), this._chart.setActive(!0), this._chart.getResizerDetacher().requestFullscreen(), this._trackEvent(" Maximize Chart")
                    })), this._buttons.minimize.addEventListener("click", (e => {
                        e.preventDefault(), this._chart.getResizerDetacher().exitFullscreen(), this._trackEvent(" Restore Chart")
                    }));
                    const s = e => e.addEventListener("contextmenu", (e => e.preventDefault()));
                    s(this._buttons.moveLeft), s(this._buttons.moveRight), s(this._buttons.turn), s(this._buttons.zoomOut), s(this._buttons.zoomIn), s(this._buttons.minimize), s(this._buttons.maximize)
                }
                _initGroupDescriptions() {
                    return [{
                        shouldBeHiddenOnMobile: !1,
                        available: this._isMaximizeButtonAvailable.bind(this),
                        className: "js-btn-group-maximize",
                        element: this._getBtnGroup("js-btn-group-maximize"),
                        totalWidth: 50
                    }, {
                        shouldBeHiddenOnMobile: !1,
                        available: () => this._options.resetScale,
                        className: "js-btn-group-reset-scale",
                        element: this._getBtnGroup("js-btn-group-reset-scale"),
                        totalWidth: 50
                    }, {
                        shouldBeHiddenOnMobile: !l.enabled("show_zoom_and_move_buttons_on_touch"),
                        available: () => this._options.zoomInOut,
                        className: "js-btn-group-zoom",
                        element: this._getBtnGroup("js-btn-group-zoom"),
                        totalWidth: 86
                    }, {
                        shouldBeHiddenOnMobile: !l.enabled("show_zoom_and_move_buttons_on_touch"),
                        available: () => this._options.scrollLeftRight,
                        className: "js-btn-group-scroll",
                        element: this._getBtnGroup("js-btn-group-scroll"),
                        totalWidth: 86
                    }]
                }
                _check() {
                    if (null === this._chartModel || !this._options.goToRealtime) return;
                    const e = this._chartModel.timeScale().rightOffset() < 0;
                    e !== this._backButtonVisible && (this._backButtonVisible = e, this._back.classList.toggle(Y, !this._backButtonVisible))
                }
                _initVisibility() {
                    this._visibilityTypeProperty = (0, a.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, this._onVisibilityTypeChange), this._onVisibilityTypeChange()
                }
                _onVisibilityTypeChange() {
                    if (null === this._visibilityTypeProperty) return;
                    const e = this._visibilityTypeProperty.value();
                    "alwaysOn" === e || "alwaysOff" === e ? (this._controlBarVisible = "alwaysOn" === e, null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null)) : (this._controlBarVisible = !1, this._boundMouseHandler || (this._boundMouseHandler = this._visibilityMouseHandler.bind(this), this._parent.addEventListener("mousemove", this._boundMouseHandler), this._parent.addEventListener("mouseleave", this._boundMouseHandler))), this._updateControlBarVisibility()
                }
                _visibilityMouseHandler(e) {
                    if (e.buttons) return;
                    if (null !== this._chartModel && this._chartModel.lineBeingCreated()) return;
                    let t = "mouseleave" !== e.type;
                    if ("mousemove" === e.type) {
                        const s = this._widget.getBoundingClientRect(),
                            i = 100 - this._bottomMargin();
                        t = e.clientX >= s.left - 100 && e.clientX <= s.right + 100 && e.clientY >= s.top - i && e.clientY <= s.bottom + 100
                    }
                    this._controlBarVisible !== t && (this._controlBarVisible = t, null === this._rafId && (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(this._updateControlBarVisibility.bind(this))))
                }
                _updateControlBarVisibility() {
                    this._rafId = null, this._controlBar.classList.toggle("control-bar--hidden", !this._controlBarVisible)
                }
                _updateBackBtnPosition() {
                    if ("left" === this._priceAxisName || "right" === this._priceAxisName) {
                        const e = this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14;
                        e && (this._back.style.marginRight = `${e}px`)
                    }
                }
                _updateBtnGroupVisibility() {
                    const e = this._leftPriceScaleWidth + this._paneWidth,
                        t = (e + this._rightPriceScaleWidth) / 2;
                    let s = 2 * Math.min(e - t, t - this._leftPriceScaleWidth) - 50 - 50,
                        i = !1;
                    for (const e of this._visibilityPrioritizedGroups) {
                        e.enoughSpaceForGroup = !1;
                        e.available() && (!$ || !e.shouldBeHiddenOnMobile) && (s -= e.totalWidth, e.enoughSpaceForGroup = s >= 0 && !i, i = i || !e.enoughSpaceForGroup), !e.enoughSpaceForGroup !== e.element.classList.contains("js-hidden") && e.element.classList.toggle("js-hidden", !e.enoughSpaceForGroup)
                    }
                    this._updateControlBarPosition()
                }
                _getBtnGroup(e) {
                    return (0,
                        i.ensureDefined)(this._btnGroups.find((t => t.classList.contains(e))))
                }
                _updateControlBarPosition() {
                    const e = this._visibilityPrioritizedGroups.reduce(((e, t) => e + (t.enoughSpaceForGroup ? t.totalWidth : 0)), 0),
                        t = (this._paneWidth + this._leftPriceScaleWidth + this._rightPriceScaleWidth) / 2 - Math.ceil(e / 2);
                    this._widget.style.left = `${t}px`
                }
                _updateResetScalesButtonVisibility() {
                    if (null === this._chartModel) return;
                    const e = this._chartModel.model().isScalesResetAvailable();
                    this._buttons.turn.classList.toggle(Y, !e)
                }
                _updateMaximizeButtonsVisibility() {
                    this._updateBtnGroupVisibility()
                }
                _toggleFullscreenButtons() {
                    const e = this._chart.getResizerDetacher().fullscreen.value();
                    this._buttons.maximize.classList.toggle("js-hidden", e), this._buttons.minimize.classList.toggle("js-hidden", !e)
                }
                _isMaximizeButtonAvailable() {
                    return !!this._options.maximize && (!!this._chart.getResizerDetacher().fullscreenable.value() && !_.mediaState.isPhoneSizeDevice())
                }
                _trackEvent(e) {
                    this._chart.onWidget() || (0, p.trackEvent)("Navigation button", e)
                }
            }
        },
        393571: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                LegendWidget: () => mi
            });
            var i = s(327714),
                o = s(650151),
                n = s(988411),
                l = s.n(n),
                a = s(758337),
                r = s(724377),
                d = s(495046),
                u = s(638456),
                h = s(569421),
                c = s(159255),
                p = s(473795),
                _ = s(495028),
                m = s(196726),
                g = s(100037),
                v = s(176006),
                b = s(824317),
                w = s(839653),
                y = s(262927);
            const S = u.CheckMobile.any();
            class f {
                constructor(e, t, s) {
                    this._el = null, this._firstBlockWrapper = null, this._titleParentEl = null, this._titleElements = [], this._valuesParentEl = null, this._valuesAdditionalWrapperEl = null, this._valuesElements = [], this._actionsParentEl = null, this._actionAdditionalWrapperEl = null, this._stayInHoveredMode = !1, this._mode = 4, this._statusesWrapper = null, this._resizeObserver = null, this._hideInvisibleHover = null, this._hideValues = null, this._allButtonsWidth = null, this._lastStatusesWrapperWidth = null, this._lastActionsWrapperWidth = null, this._showActionsHandler = null, this._hideActionsHandler = null, this._selectedSourceHandler = null, this._mouseEventHandlers = [], this._disableTimeout = null, this._loader = null, this._updateDisabledState = (e = this._disabled.value()) => {
                            null !== this._el && (this._el.classList.toggle(w.disabled, e), this._updateLoadingState(), this._updateStatusWidgetVisibility(e), this._updateTitleMaxWidth())
                        }, this._updateLoadingState = (e = this._loading.value()) => {
                            if (null !== this._el) {
                                const t = this._el.classList;
                                t.toggle(w.eyeLoading, e && !this._disabled.value()), t.toggle(w.loading, e)
                            }
                            null !== this._loader && this._loader.toggleVisibility(e)
                        }, this._model = e, this._parentEl = t, this._disabled = this._model.disabled().spawn(), this._disabled.subscribe(this._updateDisabledState), this._disabledOnInterval = this._model.disabledOnInterval().spawn(), this._disabledOnInterval.subscribe(this._updateDisabledOnIntervalState.bind(this)), this._selected = this._model.selected().spawn(), this._selected.subscribe(this._updateSelectedState.bind(this)), this._loading = this._model.loading().spawn(), this._loading.subscribe(function(e, t) {
                            let s = 0;
                            return i => {
                                clearTimeout(s), i ? e() : s = setTimeout(e, t)
                            }
                        }(this._updateLoadingState, 700)), this._isTitleHidden = this._model.isTitleHidden().spawn(),
                        this._isValuesHidden = this._model.isValuesHidden().spawn(), this._isRowHidden = this._model.isRowHidden().spawn(), this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)), this._isValuesHidden.subscribe(this._updateShowValues.bind(this)), this._isRowHidden.subscribe(this._updateShowLine.bind(this)), this._createTitlesSpawns();
                    for (let e = 0; e < this._titlesSpawns.length; e++) this._titlesSpawns[e].title.subscribe(this._updateTitlesHandler.bind(this, e));
                    this._values = this._model.values().spawn(), this._values.subscribe(this._updateValues.bind(this)), this._createValuesSpawns(), this._addValuesSpawnsSubscriptions(), this._actionsSpawnArray = this._model.actions().map((e => ({
                        visible: e.visible.spawn(),
                        title: void 0 === e.title ? null : e.title.spawn()
                    })));
                    for (let e = 0; e < this._actionsSpawnArray.length; e++) {
                        this._actionsSpawnArray[e].visible.subscribe(this._updateActionVisibilities.bind(this, e));
                        const t = this._actionsSpawnArray[e].title;
                        null !== t && t.subscribe(this._updateActionTitle.bind(this, e))
                    }
                    this._withActions = s.withActions, this._render(), this._updateStates(), this._updateShowTitles(), this._updateShowValues(), this._updateShowLine(), null !== this._valuesParentEl && (this._loader = new g.LoaderPointsRenderer(this._valuesParentEl, {
                        className: w.loader
                    })), this._customTextColor = s.customTextColor.spawn(), this._customTextColor.subscribe(this._updateCustomTextColor.bind(this)), this._updateCustomTextColor(), this._withActions && (this._showActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._showActions.bind(this)), this._hideActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._hideActions.bind(this)), this._selectedSourceHandler = (0, m.wrapHandlerWithPreventEvent)(this._model.setSourceSelected.bind(this._model)), null !== this._titleParentEl && (this._titleParentEl.addEventListener("touchend", this._selectedSourceHandler), this._titleParentEl.addEventListener("mousedown", this._selectedSourceHandler), S || (this._titleParentEl.addEventListener("mouseenter", this._showActionsHandler), this._titleParentEl.addEventListener("mouseleave", this._hideActionsHandler)), this._mouseEventHandlers.push(new _.MouseEventHandler(this._titleParentEl, {
                        mouseDoubleClickEvent: this._model.onShowSettings.bind(this._model),
                        doubleTapEvent: this._model.onShowSettings.bind(this._model)
                    }))), null === this._actionAdditionalWrapperEl || null === this._actionsParentEl || S || (this._actionAdditionalWrapperEl.addEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.addEventListener("mouseleave", this._hideActionsHandler), this._actionsParentEl.addEventListener("contextmenu", (e => {
                        e.preventDefault(), e.stopPropagation()
                    }))))
                }
                destroy() {
                    var e, t;
                    this._disabled.destroy(), this._disabledOnInterval.destroy(), this._selected.destroy(), this._loading.destroy(), this._isTitleHidden.destroy(), this._isValuesHidden.destroy(), this._isRowHidden.destroy(), this._customTextColor.destroy(), null !== this._disableTimeout && clearTimeout(this._disableTimeout);
                    for (const e of this._titlesSpawns) e.title.destroy();
                    if (null !== this._titleParentEl) {
                        for (const e of this._mouseEventHandlers) e.destroy();
                        this._titleElements = [],
                            this._withActions && null !== this._selectedSourceHandler && null !== this._showActionsHandler && null !== this._hideActionsHandler && (this._titleParentEl.removeEventListener("touchend", this._selectedSourceHandler), this._titleParentEl.removeEventListener("mousedown", this._selectedSourceHandler), S || (this._titleParentEl.removeEventListener("mouseenter", this._showActionsHandler), this._titleParentEl.removeEventListener("mouseleave", this._hideActionsHandler))), this._titleParentEl = null
                    }
                    for (const e of this._actionsSpawnArray) {
                        e.visible.destroy();
                        const t = e.title;
                        null !== t && t.destroy()
                    }
                    if (null !== this._actionAdditionalWrapperEl && (this._withActions && null !== this._showActionsHandler && null !== this._hideActionsHandler && !S && (this._actionAdditionalWrapperEl.removeEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.removeEventListener("mouseleave", this._hideActionsHandler)), this._actionAdditionalWrapperEl = null), this._actionsParentEl = null, this._removeValuesSpawnsSubscriptions(), this._values.destroy(), null !== this._valuesParentEl && (this._valuesElements = [], this._valuesParentEl = null), null === (e = this._hideInvisibleHover) || void 0 === e || e.destroy(), null === (t = this._hideValues) || void 0 === t || t.destroy(), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), null !== this._el) {
                        (0, o.ensureNotNull)(this._el.parentNode).removeChild(this._el), this._el = null
                    }
                }
                getHeight() {
                    return null === this._el ? null : 24
                }
                updateMode(e) {
                    this._mode === e && null !== this._allButtonsWidth || (this._mode = e, this._updateAllButtonsWidth())
                }
                _render() {
                    this._renderTitle(), this._renderActions(), this._renderValues(), this._el = document.createElement("div"), this._firstBlockWrapper = document.createElement("div"), this._firstBlockWrapper.classList.add(w.noWrapWrapper), this._firstBlockWrapper.appendChild((0, o.ensureNotNull)(this._titleParentEl)), null !== this._actionsParentEl && this._firstBlockWrapper.appendChild(this._actionsParentEl), this._el.appendChild(this._firstBlockWrapper), this._el.appendChild((0, o.ensureNotNull)(this._valuesParentEl)), this._parentEl.append(this._el)
                }
                _renderTitle() {
                    null === this._titleParentEl && (this._titleParentEl = document.createElement("div"), this._titleParentEl.classList.add(w.titleWrapper));
                    const e = this._titleParentEl;
                    for (let t = 0; t < this._titlesSpawns.length; t++) {
                        const s = this._titlesSpawns[t].title.value(),
                            i = this._titlesSpawns[t].class,
                            o = document.createElement("div");
                        o.classList.add(w.title, i, "apply-overflow-tooltip"), o.dataset.name = "legend-source-title", s.length > 0 ? (o.appendChild(document.createTextNode(s)), o.classList.add(w.withDot)) : o.classList.add(y.blockHidden), e.appendChild(o), this._titleElements.push(o)
                    }
                }
                _renderActions() {
                    if (!this._withActions) return;
                    null === this._actionsParentEl && (this._actionsParentEl = document.createElement("div"), this._actionsParentEl.classList.add(w.buttonsWrapper), this._parentEl.append(this._actionsParentEl), this._actionAdditionalWrapperEl = document.createElement("div"), this._actionAdditionalWrapperEl.classList.add(w.buttons), this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl));
                    const e = (0,
                            o.ensureNotNull)(this._actionAdditionalWrapperEl),
                        t = h.trackingModeIsAvailable ? "large" : "small";
                    for (const s of this._model.actions()) {
                        const i = (0, p.createActionElement)(s, w.button, w.buttonIcon, y.blockHidden, t);
                        e.appendChild(i)
                    }
                }
                _isWidthButtonsMode() {
                    return null !== this._el && (this._el.classList.contains(w.withAction) || this._disabled.value() || this._selected.value() || this._stayInHoveredMode)
                }
                _updateTitlesHandler(e, t) {
                    const s = (0, o.ensureNotNull)(this._titleElements[e]),
                        i = 0 === t.length;
                    s.classList.toggle(y.blockHidden, i), s.classList.toggle(w.withDot, !i), t = (0, b.redefineExchangeName)(t), (0, v.updateTextNode)(s, t)
                }
                _updateStates(e) {
                    this._updateDisabledState(), this._updateDisabledOnIntervalState(), this._updateSelectedState(), this._updateLoadingState(), e && this._clearDisableState()
                }
                _updateValuesHTMLElHandler(e, t) {
                    const s = (0, o.ensure)(this._valuesElements[e].value);
                    (0, v.updateTextNode)(s, t), this._updateShowValues()
                }
                _updateValueColorHandler(e, t = "") {
                    (0, o.ensure)(this._valuesElements[e].value).style.color = t
                }
                _updateValueVisibleHandler(e, t) {
                    const s = (0, o.ensure)(this._valuesElements[e].value).closest(`.${w.valueItem}`);
                    null !== s && s.classList.toggle(y.blockHidden, !t)
                }
                _updateShowLine() {
                    null !== this._el && this._el.classList.toggle(y.blockHidden, this._isRowHidden.value())
                }
                _createValuesSpawns() {
                    this._valuesSpawnArray = this._values.value().map((e => ({
                        value: e.value.spawn(),
                        color: e.color.spawn(),
                        visible: e.visible.spawn(),
                        title: e.title.spawn()
                    })))
                }
                _removeValuesSpawnsSubscriptions() {
                    for (const e of this._valuesSpawnArray) e.value.destroy(), e.color.destroy(), e.visible.destroy(), e.title.destroy();
                    this._valuesSpawnArray = []
                }
                _addValuesSpawnsSubscriptions() {
                    for (let e = 0; e < this._valuesSpawnArray.length; e++) {
                        const t = this._valuesSpawnArray[e];
                        t.value.subscribe(this._updateValuesHTMLElHandler.bind(this, e)), t.color.subscribe(this._updateValueColorHandler.bind(this, e)), t.visible.subscribe(this._updateValueVisibleHandler.bind(this, e)), t.title.subscribe(this._updateValuesTitleHTMLElHandler.bind(this, e))
                    }
                }
                _updateShowValues() {
                    null !== this._valuesAdditionalWrapperEl && this._valuesAdditionalWrapperEl.classList.toggle(y.blockHidden, this._isValuesShouldBeHidden())
                }
                _isValuesShouldBeHidden() {
                    return !this._valuesSpawnArray.some((e => e.value.value().length > 0))
                }
                _addStatusesWidget(e, t, s) {
                    this._statusesWrapper = document.createElement("div"), this._statusesWrapper.classList.add(w.statusesWrapper), this._statusesWrapper.appendChild(e), (0, o.ensureNotNull)(this._firstBlockWrapper).appendChild(this._statusesWrapper), this._hideInvisibleHover = t.spawn(), this._hideInvisibleHover.subscribe(this._updateInvisibleHoverMode.bind(this), {
                        callWithLast: !0
                    }), this._hideValues = s.spawn(), this._hideValues.subscribe(this._updateHideValuesMode.bind(this), {
                        callWithLast: !0
                    }), this._updateStatusWidgetVisibility(this._disabled.value()), this._resizeObserver = new c.default(this._handlerRestrictTitleWidth.bind(this)), null !== this._actionsParentEl && this._resizeObserver.observe(this._actionsParentEl), this._resizeObserver.observe(this._statusesWrapper)
                }
                _updateTitleMaxWidth() {
                    if (null === this._firstBlockWrapper) return;
                    const e = this._allButtonsWidth || 0,
                        t = (this._lastActionsWrapperWidth || 0) + (this._lastStatusesWrapperWidth || 0);
                    this._isWidthButtonsMode() ? this._firstBlockWrapper.style.maxWidth = `calc(100% - ${Math.max(e,t)}px)` : this._firstBlockWrapper.style.maxWidth = t > 0 ? `calc(100% - ${t}px)` : ""
                }
                _updateAllButtonsWidth() {
                    this._allButtonsWidth = this._getButtonsCount() * O + 1, this._updateTitleMaxWidth()
                }
                _updateInvisibleHoverMode(e) {
                    null !== this._el && this._el.classList.toggle(w.invisibleHover, !e)
                }
                _updateHideValuesMode(e) {
                    null !== this._el && this._el.classList.toggle(w.hideValues, e)
                }
                _showActions() {
                    if (null === this._el || !this._withActions) return;
                    this._el.classList.add(w.withAction);
                    const e = null !== this._valuesParentEl && null !== this._titleParentEl && this._valuesParentEl.offsetTop === this._titleParentEl.offsetTop;
                    this._el.classList.toggle(w.withTail, e), this._updateTitleMaxWidth()
                }
                _hideActions() {
                    null !== this._el && this._withActions && !this._stayInHoveredMode && (this._el.classList.remove(w.withAction), null !== this._valuesParentEl && this._valuesParentEl.classList.remove(w.withTail), this._updateTitleMaxWidth())
                }
                _handlerRestrictTitleWidth(e) {
                    if (null === this._actionsParentEl || null === this._firstBlockWrapper) return;
                    let t = null,
                        s = null;
                    for (const i of e) i.target === this._statusesWrapper && (t = i.contentRect.width), i.target === this._actionsParentEl && (s = i.contentRect.width);
                    t === this._lastStatusesWrapperWidth && s === this._lastActionsWrapperWidth || (null !== t && (this._lastStatusesWrapperWidth = t), null !== s && (this._lastActionsWrapperWidth = s), this._updateTitleMaxWidth())
                }
                _clearDisableState() {
                    null !== this._el && (this._el.classList.remove(w.eyeLoading), this._el.classList.remove(w.disabled), this._updateStatusWidgetVisibility(this._disabled.value()), this._updateTitleMaxWidth())
                }
                _updateDisabledOnIntervalState() {
                    var e;
                    null === (e = this._el) || void 0 === e || e.classList.toggle(w.disabledOnInterval, this._disabledOnInterval.value())
                }
                _updateSelectedState() {
                    null !== this._el && this._withActions && this._el.classList.toggle(w.selected, this._selected.value())
                }
                _updateShowTitles() {
                    null !== this._titleParentEl && (this._titleParentEl.classList.toggle(y.blockHidden, this._isTitleHidden.value()), null !== this._actionsParentEl && this._actionsParentEl.classList.toggle(y.blockHidden, this._isTitleHidden.value()))
                }
                _updateValues() {
                    this._removeValuesSpawnsSubscriptions(), this._createValuesSpawns(), null !== this._valuesParentEl && null !== this._valuesAdditionalWrapperEl && (this._valuesElements = [], this._valuesAdditionalWrapperEl.innerHTML = ""), this._renderValues(), this._addValuesSpawnsSubscriptions(), this._updateShowValues()
                }
                _updateActionVisibilities(e) {
                    null !== this._actionsParentEl && this._actionsParentEl.querySelectorAll(`.${w.button}`)[e].classList.toggle(y.blockHidden, !this._actionsSpawnArray[e].visible.value())
                }
                _updateActionTitle(e) {
                    const t = this._actionsSpawnArray[e].title;
                    null !== this._actionsParentEl && null !== t && this._actionsParentEl.querySelectorAll(`.${w.button}`)[e].setAttribute("title", t.value())
                }
                _updateCustomTextColor() {
                    const e = this._customTextColor.value() || "";
                    for (const t of this._titleElements) null !== t && (t.style.color = e);
                    const t = (0,
                        o.ensureNotNull)(this._valuesParentEl).querySelectorAll(`.${w.valueTitle}`);
                    for (let s = 0; s < t.length; s++) t[s].style.color = e;
                    (0, o.ensureNotNull)(this._el).classList.toggle(w.withCustomTextColor, Boolean(e))
                }
                _updateStatusWidgetVisibility(e) {
                    null !== this._statusesWrapper && this._statusesWrapper.classList.toggle(y.blockHidden, e)
                }
            }
            class C extends f {
                constructor(e, t, s) {
                    super(e, t, s), this._clientHeight = null, this._flagged = this._model.flagged().spawn(), this._flagged.subscribe(this._updateFlaggedState.bind(this)), this._updateStates(), s.statusWidgetEl && this._addStatusesWidget(s.statusWidgetEl, s.hideInvisibleHover, s.hideValues), this._selected.subscribe(this._updateTitleMaxWidth.bind(this))
                }
                destroy() {
                    super.destroy(), void 0 !== this._flagged && this._flagged.destroy()
                }
                getHeight() {
                    return null === this._el ? null : (null === this._clientHeight && (this._clientHeight = this._el.clientHeight, 0 === this._clientHeight && (this._clientHeight = null)), this._clientHeight)
                }
                _getButtonsCount() {
                    return 1 === this._mode ? 1 : 3
                }
                _render() {
                    super._render();
                    const e = (0, o.ensureNotNull)(this._el);
                    e.classList.add(w.item, w.series), e.classList.toggle(w.onlyOneButtonCanBeStick, this._model.isOneButtonCanBeStick()), e.dataset.name = "legend-series-item"
                }
                _updateStates() {
                    super._updateStates(), this._updateFlaggedState()
                }
                _renderValues() {
                    null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(w.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(w.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
                    const e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
                        t = this._values.value();
                    for (const s of t) {
                        const t = document.createElement("div");
                        t.classList.add(w.valueItem), t.classList.toggle(y.blockHidden, !s.visible.value()), t.classList.toggle(w.unimportant, s.unimportant.value());
                        const i = document.createElement("div"),
                            o = s.title.value() || "";
                        i.classList.add(w.valueTitle), i.classList.toggle(y.blockHidden, 0 === o.length), i.appendChild(document.createTextNode(o)), t.appendChild(i);
                        const n = document.createElement("div");
                        n.classList.add(w.valueValue), n.style.color = s.color.value() || "", n.appendChild(document.createTextNode(s.value.value())), t.appendChild(n), this._valuesElements.push({
                            title: i,
                            value: n
                        }), e.appendChild(t)
                    }
                }
                _createTitlesSpawns() {
                    const e = this._model.titles();
                    this._titlesSpawns = [{
                        title: e.title.spawn(),
                        class: w.mainTitle
                    }, {
                        title: e.description.spawn(),
                        class: w.descTitle
                    }, {
                        title: e.interval.spawn(),
                        class: w.intervalTitle
                    }, {
                        title: e.provider.spawn(),
                        class: w.providerTitle
                    }, {
                        title: e.exchange.spawn(),
                        class: w.exchangeTitle
                    }, {
                        title: e.chartStyle.spawn(),
                        class: w.styleTitle
                    }]
                }
                _isValuesShouldBeHidden() {
                    return !this._valuesSpawnArray.some((e => e.value.value().length > 0 || (e.title.value() || "").length > 0))
                }
                _updateValuesTitleHTMLElHandler(e, t = "") {
                    const s = (0, o.ensure)(this._valuesElements[e].title);
                    (0, v.updateTextNode)(s, t), s.classList.toggle(y.blockHidden, 0 === t.length), this._updateShowValues()
                }
                _isWidthButtonsMode() {
                    return null !== this._el && (void 0 !== this._flagged && Boolean(this._flagged.value()) || super._isWidthButtonsMode())
                }
                _updateFlaggedState() {
                    if (void 0 === this._flagged) return;
                    (0, o.ensureNotNull)(this._el).classList.toggle(w.flagged, Boolean(this._flagged.value())), this._updateTitleMaxWidth()
                }
            }
            const E = u.isSafari ? "click" : "auxclick";
            class M extends f {
                constructor(e, t, s) {
                    super(e, t, s), this._wheelClickHandler = null, this._canUpdateRowVisibility = !0, this._globalRowVisibility = this._model.globalVisibility().spawn(), this._globalRowVisibility.subscribe(this._updateShowLine.bind(this), {
                        callWithLast: !0
                    }), this._has5Buttons = this._model.isPineScriptDataSource().spawn(), this._has5Buttons.subscribe(this._update5ButtonsStyles.bind(this)), this._updateStates(!this._disabled.value()), s.statusWidgetEl && this._addStatusesWidget(s.statusWidgetEl, s.hideInvisibleHover, s.hideValues), this._selected.subscribe(this._updateTitleMaxWidth.bind(this)), s.withActions && (this._wheelClickHandler = this._onWheelClicked.bind(this), null !== this._titleParentEl && this._titleParentEl.addEventListener(E, this._wheelClickHandler))
                }
                destroy() {
                    super.destroy(), this._has5Buttons.destroy(), this._globalRowVisibility && this._globalRowVisibility.destroy(), null !== this._wheelClickHandler && null !== this._titleParentEl && this._titleParentEl.removeEventListener(E, this._wheelClickHandler)
                }
                _updateShowLine() {
                    if (null === this._el || !this._canUpdateRowVisibility) return;
                    const e = !this._globalRowVisibility.value();
                    e ? this._el.classList.toggle(y.blockHidden, e) : super._updateShowLine()
                }
                _getButtonsCount() {
                    switch (this._mode) {
                        case 4:
                            return this._has5Buttons.value() ? 5 : 4;
                        case 3:
                            return 3;
                        default:
                            return 2
                    }
                }
                _render() {
                    super._render();
                    const e = (0, o.ensureNotNull)(this._el);
                    e.classList.add(w.item, w.study), e.dataset.name = "legend-source-item"
                }
                _createTitlesSpawns() {
                    const e = this._model.titles();
                    this._titlesSpawns = [{
                        title: e.title.spawn(),
                        class: w.mainTitle
                    }, {
                        title: e.args.spawn(),
                        class: w.descTitle
                    }]
                }
                _renderValues() {
                    null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(w.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(w.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
                    const e = (0, o.ensureNotNull)(this._valuesAdditionalWrapperEl),
                        t = this._values.value();
                    for (const s of t) {
                        const t = document.createElement("div");
                        t.classList.add(w.valueItem), t.classList.toggle(y.blockHidden, !s.visible.value());
                        const i = document.createElement("div");
                        i.classList.add(w.valueValue), i.style.color = s.color.value() || "", i.appendChild(document.createTextNode(s.value.value()));
                        const o = s.title.value();
                        void 0 !== o && (i.classList.add("apply-common-tooltip"), i.title = o), t.appendChild(i), this._valuesElements.push({
                            value: i
                        }), e.appendChild(t)
                    }
                }
                _updateValuesTitleHTMLElHandler(e, t = "") {
                    const s = (0, o.ensure)(this._valuesElements[e].value);
                    s.classList.toggle("apply-common-tooltip", 0 !== t.length), s.title = t
                }
                _update5ButtonsStyles(e) {
                    null !== this._el && (this._el.classList.toggle(w.has5Buttons, e),
                        this._updateAllButtonsWidth())
                }
                _onWheelClicked(e) {
                    1 === e.button && this._model.onRemoveSource()
                }
            }
            var x = s(777754),
                k = s(345848);

            function T(e) {
                (0, k.trackEvent)("GUI", "Legend action", e)
            }
            var L = s(947036),
                V = s(662920),
                B = s(65300),
                P = s(736885);
            const A = x.t(null, void 0, s(721686)),
                W = x.t(null, void 0, s(328705)),
                H = x.t(null, void 0, s(551072));
            class D {
                constructor(e, t, s) {
                    this._el = null, this._counterEl = null, this._arrowIconEL = null, this._objectTreeEl = null, this._mode = 0, this._parentEl = e, this._themedColor = t.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this)), this._sourceCount = s.visibleDataSourceCount.spawn(), this._sourceCount.subscribe(this._updateSourceCount.bind(this)), this._isStateOpen = s.isDataSourcesCollapsed.spawn(), this._isStateOpen.subscribe(this._updateState.bind(this)), this._showObjectsTree = s.showObjectsTree.spawn(), this._showObjectsTree.subscribe(this._updateObjectTreeVisibility.bind(this)), this._render(), this._updateState(), this._updateThemedColor(this._themedColor.value()), this._updateObjectTreeVisibility(this._showObjectsTree.value()), this._toggleStateHandler = (0, m.wrapHandlerWithPreventEvent)(s.onCollapseDataSources), this._showObjectTreeHandler = (0, m.wrapHandlerWithPreventEvent)(s.onShowObjectsTreeDialog), null !== this._el && (this._el.addEventListener("touchend", this._toggleStateHandler), this._el.addEventListener("click", this._toggleStateHandler), this._el.addEventListener("contextmenu", (e => {
                        e.preventDefault(), e.stopPropagation()
                    }))), null !== this._objectTreeEl && (this._objectTreeEl.addEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.addEventListener("click", this._showObjectTreeHandler))
                }
                destroy() {
                    this._sourceCount.destroy(), this._isStateOpen.destroy(), null !== this._objectTreeEl && (this._objectTreeEl.removeEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.removeEventListener("click", this._showObjectTreeHandler), this._objectTreeEl = null), this._arrowIconEL = null, this._counterEl = null, null !== this._el && (this._el.removeEventListener("touchend", this._toggleStateHandler), this._el.removeEventListener("click", this._toggleStateHandler), this._el.innerHTML = "", this._el = null)
                }
                setMode(e) {
                    this._mode = e ? 1 : 0, this._updateTooltip()
                }
                _render() {
                    this._el = document.createElement("div"), this._el.className = `${w.toggler} apply-common-tooltip`, this._arrowIconEL = document.createElement("div"), this._arrowIconEL.classList.add(w.iconArrow), this._arrowIconEL.innerHTML = h.trackingModeIsAvailable ? V : L, this._el.appendChild(this._arrowIconEL), this._objectTreeEl = document.createElement("div"), this._objectTreeEl.classList.add(w.objectTree), this._objectTreeEl.innerHTML = h.trackingModeIsAvailable ? P : B, this._el.appendChild(this._objectTreeEl), this._counterEl = document.createElement("div"), this._counterEl.classList.add(w.counter), this._counterEl.appendChild(document.createTextNode(String(this._sourceCount.value()))), this._el.appendChild(this._counterEl), this._parentEl.appendChild(this._el)
                }
                _updateThemedColor(e) {
                    if (null !== this._el)
                        if (e.length > 0) {
                            const [t, s, i] = (0, r.parseRgb)(e);
                            this._el.style.backgroundColor = (0, r.rgbaToString)([t, s, i, (0,
                                r.normalizeAlphaComponent)(.8)])
                        } else this._el.style.removeProperty("background-color")
                }
                _updateSourceCount(e) {
                    const t = (0, o.ensureNotNull)(this._counterEl);
                    (0, v.updateTextNode)(t, String(e));
                    const s = (0, o.ensureNotNull)(this._el),
                        i = e < 1;
                    s.classList.toggle(y.blockHidden, i);
                    const n = 1 === e;
                    s.classList.toggle(w.onlyOneSourceShown, n)
                }
                _updateState() {
                    const e = !this._isStateOpen.value();
                    this._parentEl.classList.toggle(w.closed, e), this._updateTooltip(), T((e ? "Hide" : "Show") + " not main sources")
                }
                _tooltip() {
                    return 1 === this._mode ? H : this._isStateOpen.value() ? A : W
                }
                _updateTooltip() {
                    null !== this._el && this._el.setAttribute("title", this._tooltip())
                }
                _updateObjectTreeVisibility(e) {
                    (0, o.ensureNotNull)(this._el).classList.toggle(w.objectsTreeCanBeShown, e)
                }
            }
            var N = s(309103),
                I = s(314308);

            function z(e, t) {
                const s = new(l())(t(e.value()));
                e.subscribe((e => {
                    s.setValue(t(e))
                }));
                return s.readonly().spawn((() => e.unsubscribe()))
            }
            const O = h.trackingModeIsAvailable ? 44 : 28,
                R = d.enabled("object_tree_legend_mode");
            class G {
                constructor(e, t) {
                    this._renderToggler = null, this._mainDataSourceRenderer = null, this._dataSourceRenderers = [], this._parentEl = document.createElement("div"), this._mainDataSourceEl = null, this._dataSourcesEl = null, this._dataSourcesAdditionalWrapperEl = null, this._collapsedDataSourcesWrapperEl = null, this._collapsedDataSourcesEl = null, this._outsideEventForCollapsedTooltip = null, this._options = e, this._togglerOptions = t, this._isStudiesLegendHidden = e.isStudiesLegendHidden.spawn(), this._isStudiesLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._isAllLegendHidden = e.isAllLegendHidden.spawn(), this._isAllLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._updateLegendVisibility(), this._hideAllExceptFirstLine = e.hideAllExceptFirstLine.spawn(), this._hideAllExceptFirstLine.subscribe(this._updateAllHiddenExeptFirstLine.bind(this)), this._themedColor = e.themedColor.spawn(), this._themedColor.subscribe(this._setCustomBg.bind(this)), this._showBackground = e.showBackground.spawn(), this._showBackground.subscribe(this._setCustomBg.bind(this)), this._backgroundTransparency = e.backgroundTransparency.spawn(), this._backgroundTransparency.subscribe(this._setCustomBg.bind(this)), this._collapsedDataSourcesCountSpawn = e.collapsedDataSourcesCount.spawn(), this._collapsedDataSourcesCountSpawn.subscribe(this._updateCollapsedSourcesCount.bind(this)), this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(this), this._parentEl.classList.add(w.legend), this._parentEl.classList.toggle(w.noWrap, !h.trackingModeIsAvailable), this._parentEl.classList.toggle(w.noActions, !this._options.withActions), this._parentEl.classList.toggle(w.touchMode, h.trackingModeIsAvailable), this._parentEl.classList.toggle(w.wrappable, !this._hideAllExceptFirstLine.value()), this._parentEl.dataset.name = "legend", this._parentEl.style.setProperty("--legend-source-item-button-width", `${O}px`);
                    const s = t => {
                        t.preventDefault(), e.showLegendWidgetContextMenu(t)
                    };
                    this._mouseEventHandler = new _.MouseEventHandler(this._parentEl, {
                        contextMenuEvent: s,
                        touchContextMenuEvent: s
                    })
                }
                destroy() {
                    if (this._isStudiesLegendHidden.destroy(), this._isAllLegendHidden.destroy(), this._hideAllExceptFirstLine.destroy(), this._themedColor.destroy(), this._showBackground.destroy(), this._backgroundTransparency.destroy(), this._collapsedDataSourcesCountSpawn.destroy(), h.trackingModeIsAvailable && null !== this._collapsedDataSourcesWrapperEl && this._collapsedDataSourcesWrapperEl.removeEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler), this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), null !== this._dataSourcesAdditionalWrapperEl && (this._dataSourcesAdditionalWrapperEl.innerHTML = "", this._dataSourcesAdditionalWrapperEl = null), null !== this._dataSourcesEl && (this._dataSourcesEl.innerHTML = "", this._dataSourcesEl = null), null !== this._renderToggler && (this._renderToggler.destroy(), this._renderToggler = null), null !== this._mainDataSourceRenderer && (this._mainDataSourceRenderer.destroy(), this._mainDataSourceRenderer = null), 0 !== this._dataSourceRenderers.length) {
                        for (const e of this._dataSourceRenderers) e.destroy();
                        this._dataSourceRenderers = []
                    }
                    this._mouseEventHandler.destroy(), this._parentEl.innerHTML = "", delete this._parentEl
                }
                addMainDataSource(e, t) {
                    this._renderMainDataSourceEl(), this._mainDataSourceRenderer = new C(e, (0, o.ensureNotNull)(this._mainDataSourceEl), {
                        withActions: this._options.withActions,
                        customTextColor: this._options.customTextColor,
                        statusWidgetEl: t.getElement(),
                        hideInvisibleHover: z(t.visibleWidgetsCount, (e => Boolean(e))),
                        hideValues: t.errorWidgetIsShown
                    }), this._updateLegendVisibility(), e.onDestroy().subscribe(this, (() => {
                        null !== this._mainDataSourceRenderer && (this._mainDataSourceRenderer.destroy(), this._mainDataSourceRenderer = null)
                    }), !0)
                }
                addDataSources(e, t) {
                    this._renderDataSourcesEl();
                    const s = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);
                    for (let i = 0; i < e.length; i++) {
                        const o = e[i],
                            n = new M(o, s, {
                                withActions: this._options.withActions,
                                customTextColor: this._options.customTextColor,
                                statusWidgetEl: t[i].getElement(),
                                hideInvisibleHover: z(t[i].visibleWidgetsCount, (e => Boolean(e))),
                                hideValues: t[i].errorWidgetIsShown
                            });
                        this._dataSourceRenderers.push(n), this._updateLegendVisibility(), o.onDestroy().subscribe(this, (() => {
                            const e = this._dataSourceRenderers.indexOf(n); - 1 !== e && (this._dataSourceRenderers[e].destroy(), this._dataSourceRenderers.splice(e, 1))
                        }), !0)
                    }
                }
                addCustomWidget(e, t) {
                    if (0 === t.block) {
                        this._renderMainDataSourceEl();
                        const s = (0, o.ensureNotNull)(this._mainDataSourceEl);
                        1 === t.position && e.renderTo(s, s.firstChild), 0 === t.position && e.renderTo(s)
                    }
                    if (1 === t.block) {
                        this._renderDataSourcesEl();
                        const s = (0, o.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);
                        1 === t.position && e.renderTo(s, s.firstChild), 0 === t.position && e.renderTo(s)
                    }
                }
                firstTitle() {
                    return this._parentEl.firstElementChild
                }
                getElement() {
                    return this._parentEl
                }
                updateMode(e) {
                    const t = R && e < 133 ? 1 : e < 205 ? 2 : e < 222 ? 3 : 4;
                    null !== this._mainDataSourceRenderer && this._mainDataSourceRenderer.updateMode(t);
                    for (const e of this._dataSourceRenderers) e.updateMode(t);
                    this._parentEl.classList.toggle(w.medium, 3 === t), this._parentEl.classList.toggle(w.minimized, 2 === t),
                        this._parentEl.classList.toggle(w.micro, 1 === t), null !== this._renderToggler && this._renderToggler.setMode(1 === t); {
                        const t = e < 442;
                        this._parentEl.classList.toggle(w.hideExchangeProviderTitles, t);
                        const s = e < 192;
                        this._parentEl.classList.toggle(w.microHideIntervalTitle, s);
                        const i = e < 442;
                        this._parentEl.classList.toggle(w.minHideIntervalTitle, i)
                    }
                    const s = !this._hideAllExceptFirstLine.value() && (h.trackingModeIsAvailable || e < 542);
                    this._parentEl.classList.toggle(w.directionColumn, s), this._parentEl.classList.toggle(w.hideUniportantValueItems, !u.CheckMobile.any() && e <= 272)
                }
                getMainSourceHeight() {
                    return null === this._mainDataSourceRenderer ? 0 : this._mainDataSourceRenderer.getHeight()
                }
                getDataSourceHeight() {
                    return 0 === this._dataSourceRenderers.length ? 0 : this._dataSourceRenderers[0].getHeight()
                }
                _renderMainDataSourceEl() {
                    null === this._mainDataSourceEl && (this._mainDataSourceEl = document.createElement("div"), this._mainDataSourceEl.classList.add(w.legendMainSourceWrapper), this._parentEl.insertBefore(this._mainDataSourceEl, this._dataSourcesEl))
                }
                _renderDataSourcesEl() {
                    null === this._dataSourcesEl && (this._dataSourcesEl = document.createElement("div"), this._dataSourcesEl.classList.add(w.sourcesWrapper), this._renderToggle(this._dataSourcesEl), this._dataSourcesAdditionalWrapperEl = document.createElement("div"), this._dataSourcesAdditionalWrapperEl.classList.add(w.sources), this._dataSourcesEl.appendChild(this._dataSourcesAdditionalWrapperEl), this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl), this._parentEl.appendChild(this._dataSourcesEl))
                }
                _renderToggle(e) {
                    this._options.showToggleButton && (this._renderToggler = new D(e, this._options.themedColor, this._togglerOptions))
                }
                _renderCollapsedCounter(e) {
                    this._collapsedDataSourcesWrapperEl = document.createElement("div"), this._collapsedDataSourcesWrapperEl.className = `${w.item} ${w.last}`, this._collapsedDataSourcesEl = document.createElement("span"), this._collapsedDataSourcesEl.className = `${w.text} apply-common-tooltip`, this._collapsedDataSourcesWrapperEl.append(this._collapsedDataSourcesEl), e.append(this._collapsedDataSourcesWrapperEl), h.trackingModeIsAvailable && this._collapsedDataSourcesWrapperEl.addEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler), this._updateCollapsedSourcesCount(this._collapsedDataSourcesCountSpawn.value())
                }
                _showCollapsedDataSourcesTooltip() {
                    (0, N.showOnElement)(this._collapsedDataSourcesEl, {
                        text: this._options.collapsedDataSourcesTitle.value()
                    }), this._addOutsideEventForHideTooltip()
                }
                _addOutsideEventForHideTooltip() {
                    null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), this._outsideEventForCollapsedTooltip = (0, I.addOutsideEventListener)(new CustomEvent("timestamp").timeStamp, this._collapsedDataSourcesWrapperEl, (() => {
                        null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), (0, N.hide)()
                    }), window.document, {
                        touchEnd: !0
                    })
                }
                _updateCollapsedSourcesCount(e) {
                    if (null === this._collapsedDataSourcesWrapperEl || null === this._collapsedDataSourcesEl) return;
                    const t = 0 === e;
                    this._collapsedDataSourcesWrapperEl.classList.toggle(y.blockHidden, t), t || ((0, v.updateTextNode)(this._collapsedDataSourcesEl, `+${e}`), this._collapsedDataSourcesEl.setAttribute("title", this._options.collapsedDataSourcesTitle.value()))
                }
                _updateLegendVisibility() {
                    this._parentEl.classList.toggle(y.blockHidden, this._isAllLegendHidden.value()), null !== this._dataSourcesEl && this._dataSourcesEl.classList.toggle(y.blockHidden, this._isStudiesLegendHidden.value())
                }
                _updateAllHiddenExeptFirstLine() {
                    this._parentEl.classList.toggle(w.wrappable, !this._hideAllExceptFirstLine.value())
                }
                _setCustomBg() {
                    const e = this._showBackground.value(),
                        t = this._themedColor.value(),
                        s = this._backgroundTransparency.value();
                    let i = "";
                    if (e) {
                        const [e, o, n] = (0, r.parseRgb)(t);
                        i = (0, r.rgbaToString)([e, o, n, (0, r.normalizeAlphaComponent)(1 - s / 100)])
                    }
                    this._parentEl.style.color = i
                }
            }
            var F = s(809350),
                q = s(894042),
                U = s(114123),
                j = s(683890),
                $ = s(869403),
                Y = s.n($),
                K = s(768038),
                Z = s(819593);

            function J(e) {
                return void 0 !== e ? U.resetTransparency(e) : e
            }
            const X = new j.TranslatedString("show {title}", x.t(null, void 0, s(787358))),
                Q = new j.TranslatedString("hide {title}", x.t(null, void 0, s(470301))),
                ee = x.t(null, void 0, s(581428)),
                te = x.t(null, void 0, s(831971));
            class se {
                constructor(e, t, s, i, o) {
                    this._values = new(l())([]), this._actions = [], this._onDestroy = new(Y()), this._loading = new(l())(!1), this._moreActionCM = null, this._updateLoadingStatus = () => {
                        this._loading.setValue(this._source.isLoading())
                    }, this._model = e, this._source = t, this._options = s, this._callbacks = i, this._contextMenuOptions = o, this._disabled = new(l())(this._getDisabledState()), this._disabledOnInterval = new(l())(this._getDisabledOnIntervalState()), this._selected = new(l())(!1), this._isTitleHidden = new(l())(this._getTitleHiddenValue()), this._isValuesHidden = new(l())(this._getValuesHiddenValue()), this._isRowHidden = new(l())(this._getRowHiddenValue()), (0, Z.combine)((() => ({})), this._isTitleHidden, this._isValuesHidden, this._disabled).subscribe(this._updateRowVisibilities.bind(this)), this._values.subscribe((() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    }))
                }
                destroy() {}
                onDestroy() {
                    return this._onDestroy
                }
                titles() {
                    return this._titles
                }
                values() {
                    return this._values.readonly()
                }
                actions() {
                    return this._actions
                }
                disabled() {
                    return this._disabled.readonly()
                }
                disabledOnInterval() {
                    return this._disabledOnInterval.readonly()
                }
                selected() {
                    return this._selected.readonly()
                }
                loading() {
                    return this._loading.readonly()
                }
                isTitleHidden() {
                    return this._isTitleHidden.readonly()
                }
                isValuesHidden() {
                    return this._isValuesHidden.readonly()
                }
                isRowHidden() {
                    return this._isRowHidden.readonly()
                }
                update() {
                    this._updateTitles(), this._updateValues(), this._updateStates()
                }
                updateSource(e) {
                    this._source !== e && (this._source = e, this.update(), this._isTitleHidden.setValue(this._getTitleHiddenValue()), this._isValuesHidden.setValue(this._getValuesHiddenValue()))
                }
                onToggleDisabled() {
                    const e = this._source.properties().childs().visible,
                        t = !e.value();
                    this._model.setProperty(e, t, (t ? X : Q).format({
                        title: new j.TranslatedString(this._source.name(), this._source.title())
                    })), T((t ? "Show" : "Hide") + " source")
                }
                onShowSettings(e) {
                    this._source.userEditEnabled() && (this.setSourceSelected(), this._callbacks.showChartPropertiesForSource(this._source, e), T("Settings for source"))
                }
                onShowMoreActions(e) {
                    return this._options.readOnlyMode ? Promise.resolve(null) : (this._callbacks.updateActions(), T("Show source context menu"), this._callbacks.showContextMenuForSources([this._source], this._calcNewPosition(e), this._contextMenuOptions))
                }
                setSourceSelected() {
                    this._model.selectionMacro((e => {
                        e.clearSelection(), e.addSourceToSelection(this._source)
                    }))
                }
                _moreActionHandler(e) {
                    e.preventDefault(), null !== this._moreActionCM && this._moreActionCM.isShown() ? this._moreActionCM = null : (this.setSourceSelected(), this.onShowMoreActions(e).then((e => {
                        this._moreActionCM = e
                    })))
                }
                _updateStates() {
                    this._disabled.setValue(this._getDisabledState()), this._disabledOnInterval.setValue(this._getDisabledOnIntervalState()), this._selected.setValue(this._model.selection().isSelected(this._source)), this._updateLoadingStatus()
                }
                _hasValues() {
                    return this._values.value().length > 0
                }
                _getEyeTitle() {
                    return this._disabled.value() ? ee : te
                }
                _getDisabledState() {
                    return !this._source.properties().visible.value()
                }
                _updateRowVisibilities() {
                    this._isRowHidden.setValue(this._getRowHiddenValue())
                }
                _getRowHiddenValue() {
                    return this._options.readOnlyMode && this._disabled.value() || this._isTitleHidden.value() && (this._isValuesHidden.value() || this._disabled.value())
                }
                _calcNewPosition(e) {
                    let t = {};
                    if (e.hasOwnProperty("touches") && e.touches.length > 0) t = {
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY
                    };
                    else if (null !== e.target) {
                        const s = e.target.getBoundingClientRect();
                        t = {
                            clientX: (0, K.isRtl)() ? s.right : s.left,
                            clientY: s.top + s.height + 3
                        }
                    } else {
                        const s = e;
                        t = {
                            clientX: s.clientX,
                            clientY: s.clientY
                        }
                    }
                    return t
                }
            }
            var ie = s(371766),
                oe = s(533699),
                ne = s(125226),
                le = s(595531),
                ae = s(754336),
                re = s(841674),
                de = s(387258),
                ue = s(645534);
            const he = x.t(null, void 0, s(141610)),
                ce = x.t(null, void 0, s(593666)),
                pe = x.t(null, void 0, s(608209)),
                _e = d.enabled("show_hide_button_in_legend"),
                me = d.enabled("hide_resolution_in_legend"),
                ge = d.enabled("marked_symbols") && (0, ne.isFeatureEnabled)("marked_symbols_enabled");
            class ve extends se {
                constructor(e, t, s, i, o) {
                    super(e, t, s, i, o), this._titles = {
                        title: new(l())(""),
                        description: new(l())(""),
                        interval: new(l())(""),
                        provider: new(l())(""),
                        exchange: new(l())(""),
                        chartStyle: new(l())("")
                    }, this._symbolMarker = null, this._symbolMarkerIcon = null, this._flagged = new(l())(null), this._symbolAction = null, this._symbol = null, this._isOneButtonCanBeStick = !1, this._createActions(), this._updateSymbolMarker();
                    const n = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    n.showSeriesTitle.subscribe(this, (() => {
                        this._isTitleHidden.setValue(this._getTitleHiddenValue())
                    })), this._valuesVisibleProperty = (0, q.combineProperty)(((e, t, s) => e || t || s), n.showSeriesOHLC, n.showBarChange, n.showVolume), this._valuesVisibleProperty.subscribe(null, (() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    })), this.update(), this._source.onStatusChanged().subscribe(this, this._updateLoadingStatus)
                }
                destroy() {
                    super.destroy(),
                        this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.unsubscribeAll(this), this._source.onStatusChanged().unsubscribeAll(this), this._valuesVisibleProperty.destroy(), this._onDestroy.fire()
                }
                flagged() {
                    return this._flagged.readonly()
                }
                onShowSettings() {
                    this._source.userEditEnabled() && this._callbacks.showGeneralChartProperties(le.TabNames.symbol)
                }
                isOneButtonCanBeStick() {
                    return this._isOneButtonCanBeStick
                }
                _updateTitles() {
                    const e = (0, o.ensureNotNull)(this._source.statusView()).getSplitTitle();
                    this._titles.title.setValue((0, F.clean)(e.title, !0)), this._titles.description.setValue((0, F.clean)(e.description, !0)), me || this._titles.interval.setValue((0, F.clean)(e.interval, !0)), this._titles.provider.setValue((0, F.clean)(e.provider, !0)), this._titles.exchange.setValue((0, F.clean)(e.exchange, !0)), this._titles.chartStyle.setValue((0, F.clean)(e.chartStyle, !0))
                }
                _updateValues() {
                    const e = this._source.legendView(),
                        t = this._values.value(),
                        s = e.marketTitle(),
                        i = e.marketTitle().length > 0;
                    if (0 === t.length) {
                        const t = {
                                value: new(l())(""),
                                color: new(l())(""),
                                visible: new(l())(i),
                                title: new(l())(s),
                                unimportant: new(l())(!1)
                            },
                            o = e.items().map((e => ({
                                value: new(l())(e.value()),
                                color: new(l())(J(e.color())),
                                visible: new(l())(e.visible()),
                                title: new(l())(e.title()),
                                unimportant: new(l())(e.unimportant())
                            })));
                        this._values.setValue([t].concat(o))
                    } else {
                        t[0].title.setValue(s), t[0].visible.setValue(i);
                        const o = e.items();
                        for (let e = 0; e < o.length; e++) {
                            const s = o[e];
                            t[e + 1].value.setValue(s.value()), t[e + 1].color.setValue(J(s.color())), t[e + 1].visible.setValue(s.visible()), t[e + 1].title.setValue(s.title())
                        }
                    }
                }
                _updateStates() {
                    super._updateStates(), this._updateSymbolMarker()
                }
                _getDisabledOnIntervalState() {
                    return !1
                }
                _getTitleHiddenValue() {
                    return !this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.value()
                }
                _getValuesHiddenValue() {
                    return !this._hasValues() || !this._valuesVisibleProperty.value()
                }
                _createActions() {
                    if (ge && this._options.symbolMarkerEnabled) {
                        const e = document.createElement("div");
                        e.classList.add(w.markerContainer), this._symbolMarkerIcon = e, this._symbolAction = {
                            iconMap: new Map([
                                ["large", e],
                                ["small", e]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this._symbolActionHandler.bind(this)),
                            visible: new(l())(!0),
                            className: w.flag,
                            title: new(l())(this._getMarkerTitle()),
                            dataset: {
                                name: "legend-flag-action"
                            }
                        }, this._actions.push(this._symbolAction)
                    }
                    if (_e) {
                        const e = {
                            iconMap: new Map([
                                ["large", re],
                                ["small", ae]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
                            visible: new(l())(!0),
                            className: w.eye,
                            title: new(l())(this._getEyeTitle()),
                            dataset: {
                                name: "legend-show-hide-action"
                            }
                        };
                        this._actions.push(e), this._disabled.subscribe((() => {
                            e.title.setValue(this._getEyeTitle())
                        }))
                    }
                    this._actions.push({
                        iconMap: new Map([
                            ["large", ue],
                            ["small", de]
                        ]),
                        action: this._moreActionHandler.bind(this),
                        visible: new(l())(!0),
                        title: new(l())(he),
                        dataset: {
                            name: "legend-more-action"
                        }
                    })
                }
                _getMarkerTitle() {
                    return null !== this._symbolMarker ? this._symbolMarker.isMarked() ? pe : ce : ""
                }
                _symbolActionHandler() {
                    null !== this._symbolMarker && (this._updateSymbolMarker(), T("Change flag state"))
                }
                _updateSymbolMarker() {
                    if (ge && this._options.symbolMarkerEnabled) {
                        const e = (0, o.ensureNotNull)(this._symbolAction),
                            t = (0, o.ensureNotNull)(this._symbolMarkerIcon),
                            s = this._model.model().mainSeries().symbol();
                        this._symbolMarker ? this._symbol !== s && (this._symbolMarker.bindTo(s, t), this._symbol = s) : (this._symbolMarker = (0, ie.createSymbolMarkerStandalone)({
                            symbol: s,
                            container: t,
                            specialImage: oe,
                            className: w.flagWrapper,
                            onMarkedChanged: () => this._updateSymbolMarker()
                        }), this._symbol = s), this._flagged.setValue(this._symbolMarker.isMarked());
                        (0, o.ensureDefined)(e.title).setValue(this._getMarkerTitle())
                    } else this._isOneButtonCanBeStick = !0
                }
            }
            var be = s(562726),
                we = s(676221),
                ye = s(312554),
                Se = s(223616),
                fe = s(293689),
                Ce = s(218333),
                Ee = s(272001),
                Me = s(583637),
                xe = s(34882),
                ke = s(488658),
                Te = s(252506),
                Le = s(921341),
                Ve = s(501817);
            const Be = (0, Ee.getLogger)("Chart.LegendWidget"),
                Pe = x.t(null, void 0, s(389517)),
                Ae = x.t(null, void 0, s(966324)),
                We = x.t(null, void 0, s(734596)),
                He = x.t(null, void 0, s(141610)),
                De = x.t(null, void 0, s(482751)),
                Ne = x.t(null, void 0, s(189790)),
                Ie = x.t(null, void 0, s(337809)),
                ze = d.enabled("study_buttons_in_legend"),
                Oe = d.enabled("show_hide_button_in_legend"),
                Re = d.enabled("property_pages"),
                Ge = d.enabled("format_button_in_legend"),
                Fe = d.enabled("delete_button_in_legend");
            class qe extends se {
                constructor(e, t, s, i, o) {
                    super(e, t, s, i, o), this._titles = {
                        title: new(l())(""),
                        args: new(l())("")
                    }, this._error = new(l())(!1), this._isPineScriptDataSource = new(l())(!1), this._pineAction = null, this._globalVisibility = new(l())(!0), this._createActions();
                    const n = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs(),
                        a = [n.showSeriesTitle, n.showStudyTitles];
                    for (const e of a) e.subscribe(this, (() => {
                        this._isTitleHidden.setValue(this._getTitleHiddenValue())
                    }));
                    const r = [n.showSeriesOHLC, n.showBarChange, n.showStudyValues];
                    for (const e of r) e.subscribe(this, (() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    }));
                    this.update(), (0, fe.onPineDeleted)().subscribe(this, this.update.bind(this)), this._updateAbleShowSourceCode()
                }
                destroy() {
                    super.destroy();
                    const e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    e.showSeriesTitle.unsubscribeAll(this), e.showStudyTitles.unsubscribeAll(this), e.showSeriesOHLC.unsubscribeAll(this), e.showBarChange.unsubscribeAll(this), e.showStudyValues.unsubscribeAll(this), (0, fe.onPineDeleted)().unsubscribeAll(this), this._onDestroy.fire()
                }
                error() {
                    return this._error.readonly()
                }
                isPineScriptDataSource() {
                    return this._isPineScriptDataSource.readonly()
                }
                updateSource(e) {
                    this._source !== e && (this._values.setValue([]), super.updateSource(e), this._updateAbleShowSourceCode())
                }
                onRemoveSource() {
                    this._source.isUserDeletable() && (this._source.hasChildren() ? (0, we.showDeleteStudyTreeConfirm)(this._model.removeSource.bind(this._model, this._source, !1)) : this._model.removeSource(this._source, !1), T("Remove sources"))
                }
                onShowSourceCode() {
                    if ((0, be.isStudy)(this._source)) {
                        const e = this._source.metaInfo(),
                            t = void 0 !== e.pine ? e.pine.version : "",
                            s = e.scriptIdPart;
                        Promise.resolve((0, fe.getPineSourceCode)(s, t)).then((e => {
                            const t = (0, o.ensureDefined)(e),
                                i = Se.Version.parse(t.version),
                                n = t.lastVersionMaj ? Se.Version.parse(t.lastVersionMaj) : new Se.Version(0, 0),
                                l = {
                                    scriptSource: t.source,
                                    scriptIdPart: s,
                                    scriptName: t.scriptName,
                                    scriptTitle: t.scriptTitle,
                                    version: t.version,
                                    isOld: !n.isZero() && n.major() !== i.major()
                                };
                            void 0 !== window.TradingView.bottomWidgetBar && window.TradingView.bottomWidgetBar.activateScriptEditorTab(l), T("Open source code for pine scripts")
                        }), (e => {
                            Be.logError(e), (0, Ce.showNoticeDialog)({
                                title: De,
                                content: Ne
                            })
                        }))
                    }
                }
                setGlobalVisibility(e) {
                    this._globalVisibility.setValue(e)
                }
                globalVisibility() {
                    return this._globalVisibility.readonly()
                }
                getFullTitle() {
                    return [this._titles.title, this._titles.args].map((e => e.value())).join(" ")
                }
                _updateTitles() {
                    const e = (0, o.ensureNotNull)(this._source.statusView()).getSplitTitle();
                    this._titles.title.setValue((0, F.clean)(e[0], !0));
                    const t = Array.isArray(e[1]) ? e[1].join(" ") : e[1] || "";
                    this._titles.args.setValue((0, F.clean)(t, !0))
                }
                _updateValues() {
                    const e = this._source.legendView();
                    if (null === e) return;
                    if (0 === e.items().length) return;
                    const t = this._values.value();
                    if (0 === t.length) {
                        const t = e.items().map((e => ({
                            value: new(l())(e.value()),
                            color: new(l())(J(e.color())),
                            visible: new(l())(e.visible()),
                            unimportant: new(l())(e.unimportant()),
                            title: new(l())(e.title())
                        })));
                        this._values.setValue(t)
                    } else {
                        const s = e.items();
                        for (let e = 0; e < s.length; e++) {
                            const i = t[e],
                                o = s[e];
                            i.value.setValue(o.value()), i.color.setValue(J(o.color())), i.visible.setValue(o.visible()), i.title.setValue(o.title())
                        }
                    }
                }
                _updateStates() {
                    super._updateStates(), void 0 !== this._error && this._error.setValue(Boolean(this._source.isFailed()))
                }
                _getTitleHiddenValue() {
                    const e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    return this._isSymbolLikeStudy() ? !e.showSeriesTitle.value() : !e.showStudyTitles.value()
                }
                _getDisabledOnIntervalState() {
                    return !(!(0, be.isStudy)(this._source) && !(0, be.isStudyStub)(this._source)) && !this._source.isActualInterval()
                }
                _getValuesHiddenValue() {
                    if (!this._hasValues()) return !0;
                    const e = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    return this._isSymbolLikeStudy() ? !e.showSeriesOHLC.value() && !e.showBarChange.value() : !e.showStudyValues.value()
                }
                _isSymbolLikeStudy() {
                    return this._source instanceof Le.study_Overlay || this._source instanceof Ve.StudyCompare
                }
                _updateAbleShowSourceCode() {
                    if ((0, be.isStudy)(this._source) && ze && this._options.canShowSourceCode) {
                        const e = this._source.metaInfo(),
                            t = window.TradingView.isExistent(e.pine),
                            s = e.scriptIdPart;
                        t && Promise.resolve((0, fe.isAuthToGetPineSourceCode)(s, e.pine && e.pine.version)).then((e => {
                            let t = !0;
                            e || (t = !1), this._updateVisibilityPineAction(t)
                        }), (e => {
                            Be.logError("Failed isAuthToGetPineSourceCode, reason: " + e)
                        }))
                    }
                }
                _updateVisibilityPineAction(e) {
                    null !== this._pineAction && (this._pineAction.visible.setValue(e), this._isPineScriptDataSource.setValue(e))
                }
                _createActions() {
                    if (!this._options.readOnlyMode) {
                        if (this._pineAction = {
                                iconMap: new Map([
                                    ["large", xe],
                                    ["small", xe]
                                ]),
                                action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSourceCode.bind(this)),
                                visible: new(l())(!1),
                                title: new(l())(Ae),
                                dataset: {
                                    name: "legend-pine-action"
                                }
                            }, Oe) {
                            const e = {
                                iconMap: new Map([
                                    ["large", re],
                                    ["small", ae]
                                ]),
                                action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
                                visible: new(l())(!this._getDisabledOnIntervalState()),
                                className: w.eye,
                                title: new(l())(this._getEyeTitle()),
                                dataset: {
                                    name: "legend-show-hide-action"
                                }
                            };
                            this._actions.push(e), this._disabled.subscribe((() => {
                                e.title.setValue(this._getEyeTitle())
                            }));
                            const t = {
                                iconMap: new Map([
                                    ["large", re],
                                    ["small", ae]
                                ]),
                                action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this, le.TabNames.visibility)),
                                visible: new(l())(this._getDisabledOnIntervalState()),
                                className: w.intervalEye,
                                title: new(l())(Ie),
                                dataset: {
                                    name: "legend-interval-show-hide-action"
                                }
                            };
                            this._actions.push(t), this._disabledOnInterval.subscribe((s => {
                                t.visible.setValue(s), e.visible.setValue(!s)
                            }))
                        }
                        Re && Ge && (!(0, be.isStudy)(this._source) || new ye.MetaInfoHelper(this._source.metaInfo()).hasUserEditableOptions()) && this._actions.push({
                            iconMap: new Map([
                                ["large", Me],
                                ["small", Me]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this)),
                            visible: new(l())(!0),
                            title: new(l())(Pe),
                            dataset: {
                                name: "legend-settings-action"
                            }
                        }), ((0, be.isStudy)(this._source) || (0, be.isStudyStub)(this._source)) && ze && this._options.canShowSourceCode && this._actions.push(this._pineAction), Fe && this._actions.push({
                            iconMap: new Map([
                                ["large", Te],
                                ["small", ke]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onRemoveSource.bind(this)),
                            visible: new(l())(!0),
                            title: new(l())(We),
                            dataset: {
                                name: "legend-delete-action"
                            }
                        }), this._actions.push({
                            iconMap: new Map([
                                ["large", ue],
                                ["small", de]
                            ]),
                            action: this._moreActionHandler.bind(this),
                            visible: new(l())(!0),
                            title: new(l())(He),
                            dataset: {
                                name: "legend-more-action"
                            }
                        })
                    }
                }
            }
            var Ue = s(310399),
                je = s(263221),
                $e = s(720444),
                Ye = s(98472),
                Ke = s(868151),
                Ze = s(354145),
                Je = s(951983);

            function Xe(e, t, s) {
                e.setProperty(t, !t.value(), s)
            }
            const Qe = new j.TranslatedString("change symbol description visibility", x.t(null, void 0, s(26717))),
                et = new j.TranslatedString("change open market status visibility", x.t(null, void 0, s(118644))),
                tt = new j.TranslatedString("change OHLC values visibility", x.t(null, void 0, s(457889))),
                st = new j.TranslatedString("change bar change visibility", x.t(null, void 0, s(845110))),
                it = new j.TranslatedString("change indicator titles visibility", x.t(null, void 0, s(231325))),
                ot = new j.TranslatedString("change indicator arguments visibility", x.t(null, void 0, s(96162))),
                nt = new j.TranslatedString("change indicator values visibility", x.t(null, void 0, s(399774))),
                lt = new j.TranslatedString("change volume values visibility", x.t(null, void 0, s(709455))),
                at = x.t(null, void 0, s(739339)),
                rt = x.t(null, void 0, s(775991)),
                dt = x.t(null, void 0, s(199487)),
                ut = x.t(null, void 0, s(22519)),
                ht = x.t(null, void 0, s(101111)),
                ct = x.t(null, void 0, s(126315)),
                pt = x.t(null, void 0, s(26935)),
                _t = x.t(null, void 0, s(584098)),
                mt = (0, Ke.appendEllipsis)(x.t(null, void 0, s(389517)));
            var gt = s(150301),
                vt = s(314967),
                bt = s(535799),
                wt = s(664224),
                yt = s(508846),
                St = s(534193),
                ft = s(776734),
                Ct = s(62802);
            const Et = "tv.alreadyBlinkedStatuses",
                Mt = [];

            function xt() {
                return Ct.getJSON(Et, Mt)
            }
            const kt = new(l())(xt());

            function Tt(e) {
                const t = Ct.getJSON(Et, Mt);
                t.includes(e) || (t.push(e), Ct.setJSON(Et, t), kt.setValue(xt()))
            }
            Ct.onSync.subscribe(null, (() => kt.setValue(xt())));
            const Lt = kt;
            var Vt = s(963644),
                Bt = s(947467),
                Pt = s(72822),
                At = s(167189),
                Wt = s(257524),
                Ht = s(267957),
                Dt = s(876948),
                Nt = s(458189),
                It = s(156201),
                zt = s(498532);
            const Ot = (0,
                    Ee.getLogger)("Chart.LegendWidget"),
                Rt = ["TFEXDelayForGuest", "MOEXDelayForGuest", "CHIXAuDelayForGuest", "MILDelayForGuest", "NGMDelayForGuest", "DEForGuest", "ICESGDelayForGuest", "ADXDelayForGuest", "TRADEGATEDelayForGuest"],
                Gt = new Map([
                    ["DelayToRealtime", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["DelayNoRealtime", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["TFEXDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["MOEXDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["CHIXAuDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["MILDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["NGMDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["ICESGDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["ADXDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["TRADEGATEDelayForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["DEForGuest", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])],
                    ["EOD", new Map([
                        ["small", Ht],
                        ["medium", Dt],
                        ["large", Dt]
                    ])],
                    ["TickByTick", new Map([
                        ["small", Nt],
                        ["medium", It],
                        ["large", It]
                    ])],
                    ["BATSToRealtime", new Map([
                        ["small", Nt],
                        ["medium", It],
                        ["large", It]
                    ])],
                    ["DelayWithoutMarketAgreement", new Map([
                        ["small", At],
                        ["medium", Wt],
                        ["large", Wt]
                    ])]
                ]),
                Ft = new Map([
                    ["DelayToRealtime", zt.delay],
                    ["DelayNoRealtime", zt.delay],
                    ["TFEXDelayForGuest", zt.delay],
                    ["MOEXDelayForGuest", zt.delay],
                    ["CHIXAuDelayForGuest", zt.delay],
                    ["MILDelayForGuest", zt.delay],
                    ["NGMDelayForGuest", zt.delay],
                    ["ICESGDelayForGuest", zt.delay],
                    ["ADXDelayForGuest", zt.delay],
                    ["TRADEGATEDelayForGuest", zt.delay],
                    ["DEForGuest", zt.delay],
                    ["EOD", zt.eod],
                    ["TickByTick", zt.notAccurate],
                    ["BATSToRealtime", zt.notAccurate],
                    ["DelayWithoutMarketAgreement", zt.delay]
                ]),
                qt = new Map([
                    ["DelayToRealtime", vt.colorsPalette["color-delay-mode"]],
                    ["DelayNoRealtime", vt.colorsPalette["color-delay-mode"]],
                    ["TFEXDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["MOEXDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["CHIXAuDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["MILDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["NGMDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["ICESGDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["ADXDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["TRADEGATEDelayForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["DEForGuest", vt.colorsPalette["color-delay-mode"]],
                    ["EOD", vt.colorsPalette["color-eod-mode"]],
                    ["TickByTick", vt.colorsPalette["color-notaccurate-mode"]],
                    ["BATSToRealtime", vt.colorsPalette["color-notaccurate-mode"]],
                    ["DelayWithoutMarketAgreement", vt.colorsPalette["color-delay-mode"]]
                ]),
                Ut = x.t(null, void 0, s(257310)),
                jt = x.t(null, void 0, s(659315)),
                $t = x.t(null, void 0, s(215815)),
                Yt = x.t(null, void 0, s(365636)),
                Kt = x.t(null, void 0, s(107435)),
                Zt = (0, bt.htmlEscape)(x.t(null, void 0, s(11155))),
                Jt = (0, bt.htmlEscape)(x.t(null, void 0, s(301084))),
                Xt = (0, bt.htmlEscape)(x.t(null, void 0, s(652984))),
                Qt = (0, bt.htmlEscape)(x.t(null, void 0, s(136015))),
                es = (0, bt.htmlEscape)(x.t(null, void 0, s(52916))),
                ts = (0,
                    bt.htmlEscape)(x.t(null, void 0, s(449321))),
                ss = (0, bt.htmlEscape)(x.t(null, void 0, s(425978))),
                is = (0, bt.htmlEscape)(x.t(null, void 0, s(28412))),
                os = (0, bt.htmlEscape)(x.t(null, void 0, s(806667))),
                ns = (0, bt.htmlEscape)(x.t(null, void 0, s(257918))),
                ls = (0, bt.htmlEscape)(x.t(null, void 0, s(668025))),
                as = (0, bt.htmlEscape)(x.t(null, void 0, s(791459))),
                rs = x.t(null, void 0, s(236004)),
                ds = x.t(null, void 0, s(718429)),
                us = (0, bt.htmlEscape)(x.t(null, void 0, s(825046)));
            class hs extends St.StatusViewModel {
                constructor(e, t, s) {
                    super({
                        iconMap: Gt,
                        classNameMap: Ft,
                        titleColorMap: qt,
                        size: t
                    }), this._dataUpdatedInfo = new(l())(null).spawn(), this._options = s, this._model = e, this._dataModeBlinkingStatuses = Lt.spawn(), this._dataModeBlinkingStatuses.subscribe(this._updateBlinkingMode.bind(this)), this.turnOffBlinkingMode = this._turnOffBlinking.bind(this), this.setModel(e)
                }
                destroy() {
                    this._dataUpdatedInfo.destroy(), this._dataModeBlinkingStatuses.destroy()
                }
                setModel(e) {
                    if (this._dataUpdatedInfo.destroy(), null === e) return this._model = e, void(this._dataUpdatedInfo = new(l())(null).spawn());
                    this._dataUpdatedInfo = e.status().spawn(), this._dataUpdatedInfo.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _shouldBeHiddenByStatus(e) {
                    var t;
                    return !!(null === (t = this._options.shouldBeHiddenRegardlessOfStatus) || void 0 === t ? void 0 : t.value()) || super._shouldBeHiddenByStatus(e)
                }
                _getTooltip() {
                    const e = this._getShortTexts();
                    return null === e ? null : Object.values(e).join(" · ")
                }
                async _updateFullTooltipByStatus() {
                    const e = this._dataUpdatedInfo.value();
                    if (null === e) return void this._fullTooltip.setValue(null);
                    const t = this._getShortTexts(),
                        s = await this._getHtmls(),
                        i = await this._getActions();
                    if (e !== this._dataUpdatedInfo.value()) return;
                    const o = [];
                    for (const n of e) {
                        const e = n.mode;
                        o.push({
                            icon: this._getIcon(e),
                            iconClassName: this._iconClassNames.value(),
                            title: t && t[e],
                            titleColor: this._getTitleColor(e),
                            html: s && s[e],
                            size: this._size,
                            action: i && i[e]
                        })
                    }
                    this._fullTooltip.setValue(o)
                }
                _updateStatus(e) {
                    var t;
                    const s = null !== e ? e[0] : null;
                    super._updateByStatus(null !== (t = null == s ? void 0 : s.mode) && void 0 !== t ? t : null), this._updateBlinkingMode()
                }
                async _getHtmls() {
                    var e, t;
                    const i = this._dataUpdatedInfo.value();
                    if (null === i || null === this._model) return Promise.resolve(null);
                    const o = {},
                        n = this._model.symbolName();
                    let l = null,
                        a = null;
                    try {
                        l = await this._model.description(), a = this._model.exchange()
                    } catch (e) {
                        Ot.logError(`Can't get exchange description, reason: ${(0,Pt.errorToString)(e)}`)
                    }
                    for (const r of i) {
                        const i = r.mode;
                        if (o[i] = [], ["DelayToRealtime", "DelayNoRealtime", "DelayWithoutMarketAgreement", ...Rt].includes(i) && (o[i].push(Zt.format({
                                symbolName: n,
                                time: this._model.time().toString()
                            })), this._options.subscriptionFullInfo && null !== l && "DelayToRealtime" === i && o[i].push(Xt.format({
                                description: `<b>${l}</b>`
                            })), null !== l && "DelayNoRealtime" === i && o[i].push(Qt.format({
                                description: `<b>${l}</b>`
                            })), "DelayWithoutMarketAgreement" === i && o[i].push(as.format({
                                listedExchange: this._model.listedExchange()
                            })), this._options.subscriptionFullInfo && Rt.includes(i) && o[i].push(Jt.format({
                                listedExchange: this._model.listedExchange()
                            }))), "EOD" === i && (o[i] = [es]),
                            "TickByTick" === i) {
                            const n = void 0 === r.updatePeriod ? ts : (0, bt.htmlEscape)(x.t(null, {
                                    count: r.updatePeriod,
                                    replace: {
                                        amount: (null !== (e = r.updatePeriod) && void 0 !== e ? e : 1).toString()
                                    },
                                    plural: "Data on our Basic plan is updated once every {amount} seconds, even if there are more updates on the market."
                                }, s(602121))),
                                l = void 0 === r.updatePeriod ? ss : (0, bt.htmlEscape)(x.t(null, {
                                    count: r.updatePeriod,
                                    replace: {
                                        amount: (null !== (t = r.updatePeriod) && void 0 !== t ? t : 1).toString()
                                    },
                                    plural: "Data is updated once every {amount} seconds, even if there are more updates on the market."
                                }, s(888841)));
                            o[i].push(this._options.subscriptionFullInfo ? n : l), this._options.subscriptionFullInfo && o[i].push(is)
                        }
                        if (null !== a && "BATSToRealtime" === i) {
                            let e = this._model.listedExchange();
                            e = (0, b.redefineExchangeName)(e), o[i].push(os.format({
                                symbolName: n,
                                exchange: a
                            }), "" !== e ? ls.format({
                                exchange: e
                            }) : ns)
                        }
                    }
                    return Object.keys(o).length > 0 ? o : null
                }
                async _getActions() {
                    const e = this._dataUpdatedInfo.value();
                    if (null === e || null === this._model) return null;
                    const t = {};
                    if (this._options.subscriptionFullInfo)
                        for (const s of e) {
                            const e = s.mode;
                            if (Rt.includes(s.mode) && (t[e] = {
                                    text: rs,
                                    onClick: () => {
                                        (0, Vt.showSignModal)({
                                            source: "Data warning indicator"
                                        })
                                    }
                                }), "DelayWithoutMarketAgreement" === e) {
                                const s = this._model.exchange();
                                t[e] = {
                                    text: us,
                                    onClick: () => {
                                        (0, Bt.showExchangeAgreementDialog)({
                                            exchange: s.toLowerCase()
                                        })
                                    }
                                }
                            }
                            if ("BATSToRealtime" === e && (t[e] = {
                                    text: ds,
                                    onClick: () => {
                                        if ((0, wt.showSupportDialog)({
                                                solutionId: 43000473924
                                            }), null === this._model) return;
                                        const e = this._model.proName();
                                        (0, ft.getTracker)().then((t => t && e && t.trackMarketDataSolutionEvent(e)))
                                    }
                                }), "TickByTick" === e || "DelayToRealtime" === e) {
                                let s = null,
                                    i = null;
                                try {
                                    s = await this._model.description(), i = this._model.exchange()
                                } catch (e) {
                                    Ot.logError(`Can't get exchange description, reason: ${(0,Pt.errorToString)(e)}`)
                                }
                                t[e] = {
                                    text: ds,
                                    onClick: () => {
                                        null !== this._model && (0, yt.createGoProDialog)({
                                            forceUpgradeBtn: !0,
                                            goOnMarkets: !0,
                                            customParams: {
                                                time: this._model.time(),
                                                exchange: i,
                                                listedExchange: this._model.listedExchange(),
                                                description: s,
                                                symbolName: this._model.symbolName(),
                                                username: window.user ? window.user.username : ""
                                            },
                                            feature: e
                                        }).then((() => {
                                            (0, k.trackEvent)("Data Warning", "Full description visible", e)
                                        }))
                                    }
                                }
                            }
                        }
                    return Object.keys(t).length > 0 ? t : null
                }
                _getShortTexts() {
                    var e, t;
                    const i = this._dataUpdatedInfo.value();
                    if (null === i || null === this._model) return null;
                    const o = {};
                    for (const n of i) {
                        const i = n.mode;
                        if (["DelayToRealtime", "DelayNoRealtime", ...Rt, "DelayWithoutMarketAgreement"].includes(i) && (o[i] = Ut), "EOD" === i && (o[i] = jt), "TickByTick" === i) {
                            const t = void 0 === n.updatePeriod ? $t : (0, bt.htmlEscape)(x.t(null, {
                                plural: "One update every {amount} seconds",
                                count: n.updatePeriod,
                                replace: {
                                    amount: (null !== (e = n.updatePeriod) && void 0 !== e ? e : 1).toString()
                                }
                            }, s(705223)));
                            o[i] = t
                        }
                        if ("BATSToRealtime" === i) {
                            let e = null !== (t = this._model.firstReplacedByBatsExchange()) && void 0 !== t ? t : "";
                            e = (0, b.redefineExchangeName)(e), o[i] = "" !== e ? Kt.format({
                                exchange: e,
                                originalExchange: Yt
                            }) : Yt
                        }
                    }
                    return Object.keys(o).length > 0 ? o : null
                }
                _updateBlinkingMode() {
                    const e = this._dataUpdatedInfo.value();
                    if (null === e) return;
                    const t = this._dataModeBlinkingStatuses.value();
                    for (const s of e)
                        if (!t.includes(s.mode)) return void this.isBlinkingMode.setValue(!0);
                    this.isBlinkingMode.setValue(!1)
                }
                _turnOffBlinking() {
                    const e = this._dataUpdatedInfo.value();
                    if (null !== e)
                        for (const t of e) Tt(t.mode)
                }
            }
            var cs = s(127486),
                ps = s(554430);
            const _s = x.t(null, void 0, s(539045)),
                ms = new Map([
                    [!0, new Map([
                        ["small", cs],
                        ["medium", ps],
                        ["large", ps]
                    ])],
                    [!1, new Map([
                        ["small", ""],
                        ["medium", ""],
                        ["large", ""]
                    ])]
                ]),
                gs = new Map([
                    [!0, zt.dataProblemLow],
                    [!1, null]
                ]),
                vs = new Map([
                    [!0, _s],
                    [!1, null]
                ]),
                bs = new Map([
                    [!0, _s],
                    [!1, null]
                ]),
                ws = new Map([
                    [!0, vt.colorsPalette["color-data-problem"]],
                    [!1, null]
                ]);
            class ys extends St.StatusViewModel {
                constructor(e, t, s) {
                    super({
                        iconMap: ms,
                        classNameMap: gs,
                        tooltipMap: vs,
                        titleMap: bs,
                        titleColorMap: ws,
                        size: t
                    }), this._dataSourceErrorStatus = new(l())(null).spawn(), this._lastError = null, this._options = s, this.setSource(e)
                }
                destroy() {
                    this._dataSourceErrorStatus.destroy()
                }
                setSource(e) {
                    this._dataSourceErrorStatus.destroy(), this._dataSourceErrorStatus = e.errorStatus().spawn(), this._dataSourceErrorStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _getTooltip(e) {
                    var t;
                    return null !== (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== t ? t : super._getTooltip(e)
                }
                _getTitle(e) {
                    var t;
                    return null !== (t = e ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== t ? t : super._getTitle(e)
                }
                async _getHtml(e) {
                    const t = this._dataSourceErrorStatus.value();
                    return null !== t ? [(0, bt.htmlEscape)(t.error)] : null
                }
                _getAction(e) {
                    const t = this._dataSourceErrorStatus.value();
                    if (this._options.errorSolution && null !== t) {
                        const {
                            solutionId: e,
                            studyFeature: s
                        } = t;
                        if (e) return {
                            text: ds,
                            onClick: () => {
                                (0, wt.showSupportDialog)({
                                    solutionId: e
                                })
                            }
                        };
                        if (s) return {
                            text: ds,
                            onClick: () => (0, yt.createGoProDialog)({
                                feature: s
                            })
                        }
                    }
                    return null
                }
                _updateStatus(e) {
                    const t = this._status.value();
                    null !== e ? (this._status.setValue(!0), t && this._lastError !== e.error && this._updateByStatus(!0), this._lastError = e.error) : (this._status.setValue(null), this._lastError = null)
                }
                _getDataSourceErrorStatusCustomTitle() {
                    var e;
                    return (null === (e = this._dataSourceErrorStatus.value()) || void 0 === e ? void 0 : e.title) || null
                }
            }
            const Ss = x.t(null, void 0, s(597325)),
                fs = new Map([
                    ["high", new Map([
                        ["small", cs],
                        ["medium", ps],
                        ["large", ps]
                    ])],
                    ["low", new Map([
                        ["small", cs],
                        ["medium", ps],
                        ["large", ps]
                    ])]
                ]),
                Cs = new Map([
                    ["high", zt.dataProblemHigh],
                    ["low", zt.dataProblemLow]
                ]),
                Es = new Map([
                    ["high", Ss],
                    ["low", Ss]
                ]),
                Ms = new Map([
                    ["high", vt.colorsPalette["color-data-problem"]],
                    ["low", vt.colorsPalette["color-data-problem"]]
                ]);
            class xs extends St.StatusViewModel {
                constructor(e, t) {
                    super({
                        tooltipMap: Es,
                        iconMap: fs,
                        classNameMap: Cs,
                        titleMap: Es,
                        titleColorMap: Ms,
                        size: t
                    }), this._dataProblem = new(l())(null).spawn(), this._isDataProblemCritical = new(l())(!1), this.setModel(e)
                }
                destroy() {
                    this._dataProblem.destroy()
                }
                isDataProblemCritical() {
                    return this._isDataProblemCritical
                }
                setModel(e) {
                    this._dataProblem.destroy(), null !== e ? (this._dataProblem = e.status().spawn(), this._dataProblem.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })) : this._dataProblem = new(l())(null).spawn()
                }
                async _getHtml(e) {
                    const t = this._dataProblem.value();
                    return null === t ? null : [(0, bt.htmlEscape)(t.text)]
                }
                _getTooltip(e) {
                    var t;
                    return null !== (t = this._getDataProblemCustomTitle()) && void 0 !== t ? t : super._getTooltip(e)
                }
                _getTitle(e) {
                    var t;
                    return null !== (t = this._getDataProblemCustomTitle()) && void 0 !== t ? t : super._getTitle(e)
                }
                _updateStatus(e) {
                    var t;
                    const s = null !== (t = null == e ? void 0 : e.severity) && void 0 !== t ? t : null;
                    this._status.setValue(s), this._isDataProblemCritical.setValue(function(e) {
                        return "high" === e
                    }(s))
                }
                _getDataProblemCustomTitle() {
                    var e;
                    return (null === (e = this._dataProblem.value()) || void 0 === e ? void 0 : e.title) || null
                }
            }
            class ks extends St.StatusViewModel {
                constructor(e, t) {
                    super(t), this._booleanStatus = new(l())(!1).spawn(), this.updateStatus(e)
                }
                destroy() {
                    this._booleanStatus.destroy()
                }
                updateStatus(e) {
                    this._booleanStatus.destroy(), this._booleanStatus = e.spawn(), this._booleanStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _updateStatus(e) {
                    e ? this._status.setValue(!0) : this._status.setValue(null)
                }
            }
            var Ts = s(479639),
                Ls = s(904696);
            const Vs = x.t(null, void 0, s(814177)),
                Bs = x.t(null, void 0, s(262459)),
                Ps = new Map([
                    [!0, new Map([
                        ["small", Ts],
                        ["medium", Ls],
                        ["large", Ls]
                    ])],
                    [!1, new Map([
                        ["small", ""],
                        ["medium", ""],
                        ["large", ""]
                    ])]
                ]),
                As = new Map([
                    [!0, zt.invalidSymbol],
                    [!1, null]
                ]),
                Ws = new Map([
                    [!0, Vs],
                    [!1, null]
                ]),
                Hs = new Map([
                    [!0, Vs],
                    [!1, null]
                ]),
                Ds = new Map([
                    [!0, vt.colorsPalette["color-invalid-symbol"]],
                    [!1, null]
                ]),
                Ns = new Map([
                    [!0, [Bs]],
                    [!1, null]
                ]),
                Is = new Map([
                    [!0, null],
                    [!1, null]
                ]);
            class zs {
                constructor(e) {
                    this._el = document.createElement("div"), this._prevCustomClass = null, this._icon = e.icon.spawn(), this._icon.subscribe(this._updateIcon.bind(this), {
                        callWithLast: !0
                    }), this._className = e.className.spawn(), this._className.subscribe(this._updateClassName.bind(this), {
                        callWithLast: !0
                    }), this._visible = e.visible.spawn(), this._visible.subscribe(this._updateVisibility.bind(this), {
                        callWithLast: !0
                    }), this._size = e.size || "small", this._render(e.parentEl), e.isBlinking && (this._isBlinking = e.isBlinking.spawn(), this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), {
                        callWithLast: !0
                    }), this._turnOffBlinking = e.turnOffBlinking)
                }
                destroy() {
                    this._visible.destroy(), this._icon.destroy(), this._isBlinking && this._isBlinking.destroy(), this._el.remove()
                }
                onClick() {
                    this._turnOffBlinking && this._turnOffBlinking()
                }
                visible() {
                    return this._visible
                }
                _render(e) {
                    this._el.classList.add(zt.statusItem, zt[this._size]), e.appendChild(this._el)
                }
                _updateVisibility(e) {
                    this._el.classList.toggle("js-hidden", !e)
                }
                _updateIcon(e) {
                    this._el.innerHTML = e || ""
                }
                _updateClassName(e) {
                    this._prevCustomClass !== e && (null !== this._prevCustomClass && this._el.classList.remove(this._prevCustomClass), null !== e && this._el.classList.add(e), this._prevCustomClass = e)
                }
                _updateBlinkingMode(e) {
                    this._el.classList.toggle(zt.blinking, e)
                }
            }
            class Os {
                constructor(e, t, s, i) {
                    this.element = document.createElement("div"), this._blinkingSpawns = [], this._iconsRenderers = [];
                    const o = [zt.statuses, "apply-common-tooltip", "common-tooltip-wide"];
                    h.trackingModeIsAvailable && o.push(zt.touchMode), this.element.classList.add(...o, zt[e]), this._visibleWidgetsCount = t.spawn(),
                        this._visibleWidgetsCount.subscribe(this._updateSpecialClassAndTooltip.bind(this)), this._tooltips = s.spawn(), this._tooltips.subscribe(this._updateTooltip.bind(this)), this._onClickCallback = i.onClick, this._onClickHandler = this._onClick.bind(this), this.element.addEventListener("click", this._onClickHandler)
                }
                destroy() {
                    for (const e of this._iconsRenderers) e.destroy();
                    for (const e of this._blinkingSpawns) e.destroy();
                    this._visibleWidgetsCount.destroy(), this._tooltips.destroy(), this.element.removeEventListener("click", this._onClickHandler), this.element.remove()
                }
                addStatusModel(e) {
                    this._iconsRenderers.push(new zs({
                        visible: e.visible,
                        icon: e.model.icon(),
                        className: e.model.className(),
                        size: e.model.size(),
                        parentEl: this.element,
                        isBlinking: e.model.isBlinkingMode,
                        turnOffBlinking: e.model.turnOffBlinkingMode
                    }));
                    const t = e.model.isBlinkingMode.spawn();
                    t.subscribe(this._updateBlinkingMode.bind(this)), this._blinkingSpawns.push(t), this._updateBlinkingMode()
                }
                _onClick(e) {
                    e.preventDefault();
                    const t = this._iconsRenderers.filter((e => e.visible().value()));
                    for (const e of t) e.onClick();
                    let s = 14;
                    t.length > 1 && (s -= 2);
                    const i = this.element.getBoundingClientRect(),
                        o = {
                            x: i.left - s,
                            y: i.bottom + 4
                        };
                    this._onClickCallback(o)
                }
                _updateTooltip() {
                    this.element.setAttribute("title", this._tooltips.value().join(" · "))
                }
                _updateSpecialClassAndTooltip() {
                    const e = this._visibleWidgetsCount.value();
                    this.element.classList.toggle(zt.oneWidgetsVisible, 1 === e), this.element.classList.toggle(zt.twoWidgetsVisible, 2 === e), this.element.classList.toggle(zt.threeWidgetsVisible, 3 === e), this._updateTooltip()
                }
                _updateBlinkingMode() {
                    const e = this._blinkingSpawns.some((e => e.value()));
                    this.element.classList.toggle(zt.blinking, e)
                }
            }
            var Rs = s(398451);
            class Gs {
                constructor(e, t) {
                    var s, i;
                    this.visibleWidgetsCount = new(l())(0), this.errorWidgetIsShown = new(l())(!1), this._size = h.trackingModeIsAvailable ? "medium" : "small", this._tooltips = new(l())([]), this._visibilitySpawns = [], this._tooltipSpawns = [], this._statusWidgetInfos = [], this._renderer = new Os(this._size, this.visibleWidgetsCount, this._tooltips, {
                            onClick: this._handleToggleDropdown.bind(this)
                        }), this._symbolInvalidViewModel = null, this._dataSourceErrorStatusViewModel = null, this._marketStatusViewModel = null, this._dataUpdatedModeViewModel = null, this._dataProblemViewModel = null, this._sessionWidget = null, this._dataSourceHasErrorVisible = null, this._dataSourceErrorCanBeShown = new(l())(!1), this._marketStatusCanBeShown = new(l())(!1), this._dataUpdatedModeCanBeShown = new(l())(!1), this._dataProblemCanBeShown = new(l())(!1), this._isDataProblemCritical = null, this._container = document.createElement("div"), this._menuOpened = !1, this._menuPosition = null, this._handleDropdownMenuClose = () => {
                            var e;
                            this._menuOpened = !1, null === (e = this._source.symbol()) || void 0 === e || e.unsubscribe(this._handleDropdownMenuClose), this._updateDropdownMenu()
                        }, this._source = e, this._symbol = null !== (i = null === (s = e.symbol()) || void 0 === s ? void 0 : s.spawn()) && void 0 !== i ? i : null, this._options = t, this._recreateWidgets(), this._addSubscriptionForSymbolInvalid(),
                        null !== this._dataSourceHasErrorVisible && (this._dataSourceHasErrorVisible.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), this._dataSourceHasErrorVisible.subscribe(this._updateErrorWidgetIsShown.bind(this))), this._options.dataProblemEnabled && null !== this._isDataProblemCritical && this._isDataProblemCritical.subscribe(this._updateStatusWidgetsVisibilities.bind(this));
                    for (const e of this._tooltipSpawns) e.subscribe(this._updateTooltips.bind(this));
                    for (const e of this._visibilitySpawns) e.subscribe(this._updateVisibleWidgetsCount.bind(this)), e.subscribe(this._updateTooltips.bind(this));
                    this._updateErrorWidgetIsShown(), this._updateStatusWidgetsVisibilities(), this._updateVisibleWidgetsCount(), this._updateTooltips()
                }
                destroy() {
                    var e, t;
                    this._source.destroy(), null === (e = this._symbol) || void 0 === e || e.destroy(), null === (t = this._isDataProblemCritical) || void 0 === t || t.destroy();
                    for (const e of this._tooltipSpawns) e.destroy();
                    for (const e of this._visibilitySpawns) e.destroy();
                    this.visibleWidgetsCount.unsubscribe();
                    for (const e of this._statusWidgetInfos) e.model.destroy();
                    this._renderer.destroy()
                }
                getElement() {
                    return this._renderer.element
                }
                updateSource(e) {
                    var t, s, i;
                    this._source !== e && (null === (t = this._symbol) || void 0 === t || t.destroy(), this._source.destroy(), this._source = e, this._symbol = null !== (i = null === (s = e.symbol()) || void 0 === s ? void 0 : s.spawn()) && void 0 !== i ? i : null, this._recreateWidgets(), this._updateStatusWidgetsVisibilities(), this._updateErrorWidgetIsShown(), this._updateVisibleWidgetsCount(), this._updateTooltips())
                }
                _updateStatusWidgetsVisibilities() {
                    const e = this._isForceStatusActive();
                    this._dataSourceErrorCanBeShown.setValue(!e), this._marketStatusCanBeShown.setValue(!e), this._dataUpdatedModeCanBeShown.setValue(!e), this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown())
                }
                _isPrimaryWidgetShown() {
                    var e, t;
                    return null !== (t = null === (e = this._source.isSymbolInvalid()) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t
                }
                _isForceStatusActive() {
                    var e, t;
                    return this._isPrimaryWidgetShown() || null !== (t = null === (e = this._isDataProblemCritical) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t
                }
                _updateVisibleWidgetsCount() {
                    const e = this._statusWidgetInfos.filter((e => e.visible.value()));
                    this.visibleWidgetsCount.setValue(e.length)
                }
                _updateTooltips() {
                    const e = [];
                    for (let t = 0; t < this._tooltipSpawns.length; t++) {
                        if (!this._visibilitySpawns[t].value()) continue;
                        const s = this._tooltipSpawns[t].value();
                        null !== s && s.length > 0 && e.push(s)
                    }
                    this._tooltips.setValue(e)
                }
                _recreateWidgets() {
                    var e, t, s;
                    if (this._options.sourceStatusesEnabled) {
                        const e = this._source.isSymbolInvalid();
                        if (null !== e)
                            if (null === this._symbolInvalidViewModel) {
                                this._symbolInvalidViewModel = new ks(e, {
                                    tooltipMap: Ws,
                                    iconMap: Ps,
                                    classNameMap: As,
                                    titleMap: Hs,
                                    titleColorMap: Ds,
                                    htmlMap: Ns,
                                    actionMap: Is,
                                    size: this._size
                                });
                                const t = this._symbolInvalidViewModel.visible().spawn();
                                this._visibilitySpawns.push(t), this._tooltipSpawns.push(this._symbolInvalidViewModel.tooltip().spawn());
                                const s = {
                                    visible: t,
                                    model: this._symbolInvalidViewModel
                                };
                                this._statusWidgetInfos.push(s), this._renderer.addStatusModel(s)
                            } else this._symbolInvalidViewModel.updateStatus(e), this._addSubscriptionForSymbolInvalid();
                        if (null === this._dataSourceErrorStatusViewModel) {
                            this._dataSourceErrorStatusViewModel = new ys(this._source, this._size, this._options.sourceStatuses), this._dataSourceHasErrorVisible = (0, Z.combine)((() => this._dataSourceErrorCanBeShown.value() && (0, o.ensureNotNull)(this._dataSourceErrorStatusViewModel).visible().value()), this._dataSourceErrorCanBeShown, this._dataSourceErrorStatusViewModel.visible()), this._visibilitySpawns.push(this._dataSourceHasErrorVisible), this._tooltipSpawns.push(this._dataSourceErrorStatusViewModel.tooltip().spawn());
                            const e = {
                                visible: this._dataSourceHasErrorVisible,
                                model: this._dataSourceErrorStatusViewModel
                            };
                            this._statusWidgetInfos.push(e), this._renderer.addStatusModel(e)
                        } else this._dataSourceErrorStatusViewModel.setSource(this._source)
                    }
                    if (this._options.marketStatusEnabled) {
                        const t = this._source.marketStatusModel();
                        if (null === this._marketStatusViewModel) {
                            this._marketStatusViewModel = new Rs.MarketStatusViewModel(t, this._size);
                            const e = (0, Z.combine)((() => this._marketStatusCanBeShown.value() && (0, o.ensureNotNull)(this._marketStatusViewModel).visible().value() && !(0, $e.isEconomicSymbol)(this._source.symbolInfo().value())), this._marketStatusCanBeShown, this._marketStatusViewModel.visible(), this._source.symbolInfo());
                            this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._marketStatusViewModel.tooltip().spawn());
                            const s = {
                                visible: e,
                                model: this._marketStatusViewModel
                            };
                            null !== t && (this._sessionWidget = new gt.FullSessionScheduleWidget(this._source), s.additionalWidgets = [this._sessionWidget]), this._statusWidgetInfos.push(s), this._renderer.addStatusModel(s)
                        } else this._marketStatusViewModel.setModel(t), null === (e = this._sessionWidget) || void 0 === e || e.updateSource(this._source)
                    }
                    if (this._options.dataUpdateModeEnabled) {
                        const e = this._source.dataUpdatedModeModel();
                        if (null === this._dataUpdatedModeViewModel) {
                            const i = { ...this._options.dataUpdateMode,
                                shouldBeHiddenRegardlessOfStatus: null === (s = null === (t = this._source.marketStatusModel()) || void 0 === t ? void 0 : t.futuresContractExpirationTime()) || void 0 === s ? void 0 : s.expired()
                            };
                            this._dataUpdatedModeViewModel = new hs(e, this._size, i);
                            const n = (0, Z.combine)((() => this._dataUpdatedModeCanBeShown.value() && (0, o.ensureNotNull)(this._dataUpdatedModeViewModel).visible().value() && !(0, $e.isEconomicSymbol)(this._source.symbolInfo().value())), this._dataUpdatedModeCanBeShown, this._dataUpdatedModeViewModel.visible(), this._source.symbolInfo());
                            this._visibilitySpawns.push(n), this._tooltipSpawns.push(this._dataUpdatedModeViewModel.tooltip().spawn());
                            const l = {
                                visible: n,
                                model: this._dataUpdatedModeViewModel
                            };
                            this._statusWidgetInfos.push(l), this._renderer.addStatusModel(l)
                        } else this._dataUpdatedModeViewModel.setModel(e)
                    }
                    if (this._options.dataProblemEnabled) {
                        const e = this._source.dataProblemModel();
                        if (null === this._dataProblemViewModel) {
                            this._dataProblemViewModel = new xs(e, this._size), this._isDataProblemCritical = this._dataProblemViewModel.isDataProblemCritical().spawn();
                            const t = (0,
                                Z.combine)((() => this._dataProblemCanBeShown.value() && (0, o.ensureNotNull)(this._dataProblemViewModel).visible().value()), this._dataProblemCanBeShown, this._dataProblemViewModel.visible());
                            this._visibilitySpawns.push(t), this._tooltipSpawns.push(this._dataProblemViewModel.tooltip().spawn());
                            const s = {
                                visible: t,
                                model: this._dataProblemViewModel
                            };
                            this._statusWidgetInfos.push(s), this._renderer.addStatusModel(s)
                        } else this._dataProblemViewModel.setModel(e)
                    }
                }
                _addSubscriptionForSymbolInvalid() {
                    const e = this._source.isSymbolInvalid();
                    this._options.sourceStatusesEnabled && null !== e && (e.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), e.subscribe(this._updateErrorWidgetIsShown.bind(this), {
                        callWithLast: !0
                    }))
                }
                _updateErrorWidgetIsShown() {
                    var e, t, s, i;
                    const o = null !== (t = null === (e = this._source.isSymbolInvalid()) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t,
                        n = null !== (i = null === (s = this._dataSourceHasErrorVisible) || void 0 === s ? void 0 : s.value()) && void 0 !== i && i;
                    this.errorWidgetIsShown.setValue(o || n)
                }
                _handleToggleDropdown(e) {
                    var t, s;
                    this._menuPosition = e, this._menuOpened = !this._menuOpened, this._menuOpened && (null === (t = this._source.symbol()) || void 0 === t || t.subscribe(this._handleDropdownMenuClose), s = `Open full tooltip for statuses: ${this._tooltips.value().join(", ")}`, (0, k.trackEvent)("GUI", "Statuses widget's action", s)), this._updateDropdownMenu()
                }
                _updateDropdownMenu() {
                    Promise.all([s.e(7624), s.e(6092), s.e(86193), s.e(12437), s.e(38643)]).then(s.bind(s, 285167)).then((e => {
                        e.render(this._menuOpened, this._container, this._renderer.element, this._statusWidgetInfos, this._handleDropdownMenuClose, (0, o.ensureNotNull)(this._menuPosition))
                    }))
                }
            }
            var Fs = s(13718),
                qs = s(635561);
            const Us = x.t(null, void 0, s(504671)),
                js = x.t(null, void 0, s(410153)),
                $s = x.t(null, void 0, s(351811)),
                Ys = x.t(null, void 0, s(91757)),
                Ks = x.t(null, void 0, s(385020)),
                Zs = x.t(null, void 0, s(641851)),
                Js = new Map([
                    [Fs.ReplayStatus.Pause, new Map([
                        ["small", qs],
                        ["medium", qs],
                        ["large", qs]
                    ])],
                    [Fs.ReplayStatus.PointSelect, new Map([
                        ["small", qs],
                        ["medium", qs],
                        ["large", qs]
                    ])],
                    [Fs.ReplayStatus.AutoPlay, new Map([
                        ["small", qs],
                        ["medium", qs],
                        ["large", qs]
                    ])]
                ]),
                Xs = new Map([
                    [Fs.ReplayStatus.AutoPlay, zt.replayModeAutoPlay],
                    [Fs.ReplayStatus.Pause, zt.replayModePause],
                    [Fs.ReplayStatus.PointSelect, zt.replayModePointSelect]
                ]),
                Qs = new Map([
                    [Fs.ReplayStatus.AutoPlay, js],
                    [Fs.ReplayStatus.Pause, js],
                    [Fs.ReplayStatus.PointSelect, js]
                ]),
                ei = new Map([
                    [Fs.ReplayStatus.AutoPlay, js],
                    [Fs.ReplayStatus.Pause, $s],
                    [Fs.ReplayStatus.PointSelect, Us]
                ]),
                ti = new Map([
                    [Fs.ReplayStatus.AutoPlay, (0, vt.getHexColorByName)("color-replay-mode")],
                    [Fs.ReplayStatus.Pause, (0, vt.getHexColorByName)("color-replay-mode")],
                    [Fs.ReplayStatus.PointSelect, (0, vt.getHexColorByName)("color-replay-mode-point-select")]
                ]),
                si = new Map([
                    [Fs.ReplayStatus.AutoPlay, [Ks]],
                    [Fs.ReplayStatus.Pause, [Zs]],
                    [Fs.ReplayStatus.PointSelect, [Ys]]
                ]);
            class ii extends St.StatusViewModel {
                constructor(e, t) {
                    super({
                            iconMap: Js,
                            classNameMap: Xs,
                            tooltipMap: ei,
                            titleMap: Qs,
                            titleColorMap: ti,
                            htmlMap: si,
                            size: t
                        }), this._replayStatus = new(l())(Fs.ReplayStatus.Undefined).spawn(), this._replayStatus = e,
                        this._replayStatus.subscribe(this._updateStatus.bind(this), {
                            callWithLast: !0
                        })
                }
                destroy() {
                    this._replayStatus.destroy()
                }
                _updateStatus(e) {
                    this._status.setValue(e !== Fs.ReplayStatus.Undefined ? e : null), this.isBlinkingMode.setValue(e === Fs.ReplayStatus.AutoPlay)
                }
            }
            var oi = s(223167),
                ni = s(289397);
            class li {
                constructor(e, t) {
                    this._symbol = null, this._isSymbolInvalid = null, this._symbolInfo = new(l())(null).spawn(), this._source = e, e.properties().hasChild("symbol") && (this._symbol = (0, q.createWVFromGetterAndSubscription)((() => e.properties().symbol.value()), e.properties().symbol.listeners()));
                    const s = [];
                    if ((0, ni.isStudyLineTool)(e)) s.push(e.onStatusChanged());
                    else if ((0, be.isStudy)(e) || (0, be.isStudyStub)(e)) this._isSymbolInvalid = (0, oi.createWVFromGetterAndSubscriptions)((() => e.isSymbolInvalid() && e.isActualInterval()), s), s.push(e.onStatusChanged(), e.onIsActualIntervalChange());
                    else {
                        (0, o.assert)(e === t.mainSeries());
                        const i = t.mainSeries();
                        this._isSymbolInvalid = (0, q.createWVFromGetterAndSubscription)((() => i.isSymbolInvalid()), i.onStatusChanged()), s.push(i.onStatusChanged()), this._symbolInfo = (0, q.createWVFromGetterAndSubscription)(i.symbolInfo.bind(i), i.dataEvents().symbolResolved())
                    }
                    this._dataSourceErrorStatus = (0, oi.createWVFromGetterAndSubscriptions)((() => this._source.statusProvider({}).errorStatus()), s)
                }
                destroy() {
                    var e, t;
                    null === (e = this._symbol) || void 0 === e || e.destroy(), null === (t = this._isSymbolInvalid) || void 0 === t || t.destroy(), this._dataSourceErrorStatus.destroy(), this._symbolInfo.destroy()
                }
                symbol() {
                    return this._symbol
                }
                isSymbolInvalid() {
                    return this._isSymbolInvalid
                }
                errorStatus() {
                    return this._dataSourceErrorStatus
                }
                symbolInfo() {
                    return this._symbolInfo
                }
                marketStatusModel() {
                    return this._source.marketStatusModel()
                }
                dataProblemModel() {
                    return this._source.dataProblemModel()
                }
                dataUpdatedModeModel() {
                    return this._source.dataUpdatedModeModel()
                }
            }
            class ai extends Gs {
                constructor(e, t, s) {
                    if (super(new li(e, t), s), this._isInReplay = new(l())(!1).readonly().spawn(), this._isInReplayCanBeShown = null, this._inited = !1, this._options.sourceStatusesEnabled) {
                        this._isInReplayCanBeShown = new(l())(!1), this._isInReplay = (0, Z.combine)((e => e !== Fs.ReplayStatus.Undefined), t.replayStatus());
                        const e = new ii(t.replayStatus().spawn(), this._size),
                            s = (0, Z.combine)((() => (0, o.ensureNotNull)(this._isInReplayCanBeShown).value() && (0, o.ensureNotNull)(e).visible().value()), this._isInReplayCanBeShown, e.visible());
                        s.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), s.subscribe(this._updateVisibleWidgetsCount.bind(this)), s.subscribe(this._updateTooltips.bind(this)), this._visibilitySpawns.push(s);
                        const i = e.tooltip().spawn();
                        i.subscribe(this._updateTooltips.bind(this)), this._tooltipSpawns.push(i);
                        const n = {
                            visible: s,
                            model: e
                        };
                        this._statusWidgetInfos.push(n), this._renderer.addStatusModel(n), this._inited = !0, this._isInReplay.subscribe(this._updateStatusWidgetsVisibilities.bind(this), {
                            callWithLast: !0
                        })
                    }
                }
                destroy() {
                    this._options.sourceStatusesEnabled && this._isInReplay.destroy(), super.destroy()
                }
                _updateStatusWidgetsVisibilities() {
                    var e, t;
                    super._updateStatusWidgetsVisibilities(),
                        this._options.sourceStatusesEnabled && this._inited && (0, o.ensureNotNull)(this._isInReplayCanBeShown).setValue(!super._isPrimaryWidgetShown() && null !== (t = null === (e = this._isInReplay) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t)
                }
                _isPrimaryWidgetShown() {
                    var e, t;
                    return super._isPrimaryWidgetShown() || null !== (t = null === (e = this._isInReplay) || void 0 === e ? void 0 : e.value()) && void 0 !== t && t
                }
            }
            var ri = s(440135),
                di = s(343370);
            const ui = {
                    readOnlyMode: !1,
                    contextMenu: {
                        settings: !0,
                        mainSeries: !0,
                        studies: !0,
                        showOpenMarketStatus: !1
                    },
                    symbolMarkerEnabled: !1,
                    showToggleButton: !0,
                    canShowSourceCode: !1,
                    statusesWidgets: {
                        sourceStatusesEnabled: !1,
                        sourceStatuses: {
                            errorSolution: !0
                        },
                        marketStatusEnabled: !1,
                        marketStatus: {
                            preMarketSolution: !0,
                            postMarketSolution: !0
                        },
                        dataUpdateModeEnabled: !1,
                        dataUpdateMode: {
                            subscriptionFullInfo: !0
                        },
                        dataProblemEnabled: !1
                    }
                },
                hi = d.enabled("hide_legend_by_default"),
                ci = d.enabled("fundamental_widget"),
                pi = d.enabled("legend_context_menu"),
                _i = 2 * parseInt(w.marginlegendhoriz);
            class mi {
                constructor(e, t, s, i, o, n, r, d) {
                    this._mainSeriesViewModel = null, this._dataSourceViewModels = [], this._visibleDataSourceCount = new(l())(0), this._themedColor = new(l())(""), this._mainSeriesRowHidden = null, this._dataSourceRowsHidden = [], this._customWidgetsVisibilities = [], this._allLegendHidden = new(l())(!1), this._studiesLegendHidden = new(l())(!1), this._customWidgetsHeights = [], this._onLegendVisibilityToggled = null, this._availableHeight = 0, this._collapsedDataSourcesCount = new(l())(0), this._collapsedDataSourcesTitle = new(l())(""), this._mainSeriesStatusWidget = null, this._dataSourcesStatusesWidgets = [], this._size = null, this._customLegendWidgetsFactoriesMap = new Map, this._customLegendWidgetsMap = new Map, this._margin = 0, this._model = e, this._paneWidget = t, this._options = (0, a.merge)((0, a.clone)(ui), r), this._callbacks = d, this._mainSeriesViewModelsOptions = {
                        readOnlyMode: this._options.readOnlyMode,
                        symbolMarkerEnabled: this._options.symbolMarkerEnabled
                    }, this._dataSourceViewModelsOptions = { ...this._mainSeriesViewModelsOptions,
                        canShowSourceCode: this._options.canShowSourceCode
                    }, this._backgroundThemeName = s;
                    const u = this._showLegendCalculatedProperty();
                    if (this._isDataSourcesCollapsed = new(l())(u.value()), u.subscribe(this, (() => {
                            this._isDataSourcesCollapsed.setValue(u.value())
                        })), hi && !Ct.getBool("legend.isVisibilityToggled")) {
                        const e = this._showLegendOriginalProperty();
                        this._onLegendVisibilityToggled = this._setLegendVisibilityToggled.bind(this), e.setValue(!1), e.subscribe(this, this._onLegendVisibilityToggled)
                    }
                    const h = new(l())(this._getCustomTextColorValue()),
                        c = this._model.model().properties().childs();
                    c.scalesProperties.childs().textColor.subscribe(this, (() => {
                        h.setValue(this._getCustomTextColorValue())
                    }));
                    const p = c.paneProperties.childs().legendProperties.childs().showBackground,
                        _ = new(l())(p.value());
                    p.subscribe(this, (() => {
                        _.setValue(p.value())
                    }));
                    const m = c.paneProperties.childs().legendProperties.childs().backgroundTransparency,
                        g = new(l())(m.value());
                    m.subscribe(this, (() => {
                            g.setValue(m.value())
                        })), this._hideNotMainSources = i, this._hideNotMainSources.subscribe(this._updateLegendVisibilities.bind(this)),
                        this._hideAllExceptFirstLine = o, this._hideAllExceptFirstLine.subscribe(this._updateCollapsedSourcesMode.bind(this)), this._hideWholeLegend = n, this._hideWholeLegend.subscribe(this._updateLegendVisibilities.bind(this)), this._isPaneMain = new(l())(this._getIsPaneMainValue()), this._updateCollapsedSourcesModeThrottle = (0, di.default)(this._updateCollapsedSourcesMode.bind(this), 100), this._renderer = new G({
                            withActions: !this._options.readOnlyMode,
                            showToggleButton: this._options.showToggleButton,
                            isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                            isAllLegendHidden: this._allLegendHidden.readonly(),
                            customTextColor: h.readonly(),
                            themedColor: this._themedColor.readonly(),
                            showBackground: _.readonly(),
                            backgroundTransparency: g.readonly(),
                            collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
                            collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
                            showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(this),
                            hideAllExceptFirstLine: this._hideAllExceptFirstLine
                        }, {
                            visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                            isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                            showObjectsTree: this._isPaneMain.readonly(),
                            onCollapseDataSources: this.onCollapseDataSources.bind(this),
                            onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog
                        })
                }
                destroy() {
                    this._backgroundThemeName.destroy(), this._hideNotMainSources.destroy(), this._hideAllExceptFirstLine.destroy(), this._hideWholeLegend.destroy(), null !== this._mainSeriesViewModel && this._destroyMainDataSource();
                    for (const e of this._dataSourceViewModels) e.destroy();
                    for (const e of this._dataSourcesStatusesWidgets) e.destroy();
                    this._clearSubscriptions();
                    for (const e of Array.from(this._customLegendWidgetsMap.keys())) this._destroyCustomWidgetFromLayerBlock(e);
                    this._customLegendWidgetsMap.clear(), this._renderer.destroy(), delete this._renderer, this._showLegendCalculatedProperty().unsubscribeAll(this), this._showLegendOriginalProperty().unsubscribeAll(this);
                    const e = this._model.model().properties().childs();
                    e.scalesProperties.childs().textColor.unsubscribeAll(this), e.paneProperties.childs().legendProperties.childs().showBackground.unsubscribeAll(this), e.paneProperties.childs().legendProperties.childs().backgroundTransparency.unsubscribeAll(this)
                }
                addCustomWidgetToLegend(e, t) {
                    const s = this._customLegendWidgetsFactoriesMap.get(t.block) || new Map,
                        i = s.get(t.position) || [];
                    i.push(e), s.set(t.position, i), this._customLegendWidgetsFactoriesMap.set(t.block, s), this.updateLayout(), this._updateCustomWidgetModeBySize()
                }
                onShowLegendWidgetContextMenu(e, t) {
                    if (this._options.readOnlyMode || !pi) return Promise.resolve();
                    T("Show legend context menu");
                    const s = new Map;
                    for (const e of Array.from(this._customLegendWidgetsMap.keys())) {
                        const t = (0, o.ensureDefined)(this._customLegendWidgetsMap.get(e)),
                            i = new Map;
                        for (const e of Array.from(t.keys())) {
                            const s = (0, o.ensureDefined)(t.get(e)),
                                n = i.get(e) || [];
                            for (const e of s) n.push(...e.contextMenuActions());
                            i.set(e, n)
                        }
                        s.set(e, i)
                    }
                    return function(e, t, s, i, o, n) {
                        const l = [],
                            a = i.get(0);
                        if (void 0 !== a) {
                            const e = a.get(1);
                            void 0 !== e && e.length > 0 && (l.push(...e),
                                l.push(new Ue.Separator))
                        }
                        const r = e.model().properties().childs().paneProperties.childs().legendProperties.childs();
                        if (l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleSymbolVisibility",
                                checkable: !0,
                                checked: r.showSeriesTitle.value(),
                                label: at,
                                statName: "Show Symbol",
                                onExecute: () => Xe(e, r.showSeriesTitle, Qe)
                            })), t.showOpenMarketStatus && "market" === e.mainSeries().marketStatusModel().status().value() && !(0, $e.isEconomicSymbol)(e.mainSeries().symbolInfo()) && l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleOpenMarketStatusVisibility",
                                checkable: !0,
                                checked: Ye.showMarketOpenStatusProperty.value(),
                                label: rt,
                                statName: "Show Open market status",
                                onExecute: () => Xe(e, Ye.showMarketOpenStatusProperty, et)
                            })), l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleOhlcValuesVisibility",
                                checkable: !0,
                                checked: r.showSeriesOHLC.value(),
                                label: dt,
                                statName: "Show OHLC Values",
                                onExecute: () => Xe(e, r.showSeriesOHLC, tt)
                            })), l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleBarChangeValuesVisibility",
                                checkable: !0,
                                checked: r.showBarChange.value(),
                                label: ut,
                                statName: "Show Bar Change Values",
                                onExecute: () => Xe(e, r.showBarChange, st)
                            })), l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleVolumeVisibility",
                                checkable: !0,
                                checked: r.showVolume.value(),
                                label: ht,
                                statName: "Show Volume",
                                onExecute: () => Xe(e, r.showVolume, lt)
                            })), l.push(new Ue.Separator), void 0 !== a) {
                            const e = a.get(0);
                            void 0 !== e && e.length > 0 && (l.push(...e), l.push(new Ue.Separator))
                        }
                        const d = i.get(1);
                        if (void 0 !== d) {
                            const e = d.get(1);
                            void 0 !== e && e.length > 0 && (l.push(...e), l.push(new Ue.Separator))
                        }
                        if (e.model().priceDataSources().some((e => !(0, Ze.isActingAsSymbolSource)(e) && e.showInObjectTree())) && (l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleIndicatorTitlesVisibility",
                                checkable: !0,
                                checked: r.showStudyTitles.value(),
                                label: ct,
                                statName: "Show Indicator Titles",
                                onExecute: () => Xe(e, r.showStudyTitles, it)
                            })), l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleIndicatorArgumentsVisibility",
                                checkable: !0,
                                checked: r.showStudyArguments.value(),
                                label: pt,
                                statName: "Show Indicator Arguments",
                                onExecute: () => Xe(e, r.showStudyArguments, ot)
                            })), l.push(new Ue.Action({
                                actionId: "Chart.Legend.ToggleIndicatorValuesVisibility",
                                checkable: !0,
                                checked: r.showStudyValues.value(),
                                label: _t,
                                statName: "Show Indicator Values",
                                onExecute: () => Xe(e, r.showStudyValues, nt)
                            }))), void 0 !== d) {
                            const e = d.get(0);
                            void 0 !== e && e.length > 0 && (l.push(...e), l.push(new Ue.Separator))
                        }
                        return t.settings && (l[l.length - 1] instanceof Ue.Separator || l.push(new Ue.Separator), l.push(new Ue.Action({
                            actionId: "Chart.Dialogs.ShowGeneralSettings.LegendTab",
                            label: mt,
                            icon: Je,
                            statName: "Settings...",
                            onExecute: () => s(le.TabNames.legend)
                        }))), je.ContextMenuManager.showMenu(l, o, void 0, {
                            menuName: "LegendPropertiesContextMenu"
                        }, n)
                    }(this._model, this._options.contextMenu, this._callbacks.showGeneralChartProperties, s, e, t)
                }
                onCollapseDataSources() {
                    const e = this._showLegendOriginalProperty();
                    e.setValue(!e.value())
                }
                updateLayout() {
                    const e = this._paneWidget.state().sourcesByGroup().legendViewSources().filter((e => null !== e.statusView() && e.isDisplayedInLegend()));
                    if (0 === e.length) return;
                    const t = this._model.mainSeries(),
                        s = e.indexOf(t);
                    s > -1 ? (e.splice(s, 1), ci || null !== this._mainSeriesViewModel || (this._mainSeriesViewModel = new ve(this._model, t, this._mainSeriesViewModelsOptions, this._callbacks, this._options.contextMenu), this._mainSeriesStatusWidget = new ai(t, this._model.model(), this._options.statusesWidgets), this._renderer.addMainDataSource(this._mainSeriesViewModel, this._mainSeriesStatusWidget)), this._addCustomWidgetForLayerBlock(0)) : null !== this._mainSeriesViewModel && (this._destroyMainDataSource(), this._destroyCustomWidgetFromLayerBlock(0));
                    const i = [],
                        n = [],
                        l = this._dataSourceViewModels.length;
                    if (0 === l)
                        for (let t = e.length - 1; t >= 0; t--) {
                            const s = e[t];
                            i.push(new qe(this._model, s, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)), n.push(new Gs(new li(s, this._model.model()), this._options.statusesWidgets))
                        } else {
                            let t = 0;
                            for (let s = e.length - 1; s >= 0; s--) {
                                const o = e[s];
                                this._dataSourceViewModels[t] ? (this._dataSourceViewModels[t].updateSource(o), this._dataSourcesStatusesWidgets[t].updateSource(new li(o, this._model.model()))) : (i.push(new qe(this._model, o, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)), n.push(new Gs(new li(e[s], this._model.model()), this._options.statusesWidgets))), t++
                            }
                            for (; this._dataSourceViewModels.length > t;)(0, o.ensureDefined)(this._dataSourceViewModels.pop()).destroy();
                            for (; this._dataSourcesStatusesWidgets.length > t;)(0, o.ensureDefined)(this._dataSourcesStatusesWidgets.pop()).destroy()
                        }
                    0 !== i.length && (this._renderer.addDataSources(i, n), this._dataSourceViewModels.push(...i), this._dataSourcesStatusesWidgets.push(...n)), l !== this._dataSourceViewModels.length && this._updateCollapsedSourcesMode(), this._dataSourceViewModels.length > 0 ? this._addCustomWidgetForLayerBlock(1) : this._destroyCustomWidgetFromLayerBlock(1), this._recreateSubscriptions(), this._isPaneMain.setValue(this._getIsPaneMainValue()), this.update(), this._updateWidgetModeByWidth()
                }
                update() {
                    null !== this._mainSeriesViewModel && this._mainSeriesViewModel.update();
                    for (const e of this._dataSourceViewModels) e.update()
                }
                updateThemedColors(e) {
                    null === e && (e = (0, ri.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(e || "")
                }
                firstTitle() {
                    return this._renderer.firstTitle()
                }
                getElement() {
                    return this._renderer.getElement()
                }
                addMargin(e) {
                    if (this._margin === e) return;
                    this._margin = e;
                    this._renderer.getElement().style.maxWidth = 0 === this._margin ? "" : `calc(100% - ${this._margin+_i}px)`, this._updateWidgetModeBySize()
                }
                updateWidgetModeBySize(e) {
                    this._size = e, this._updateWidgetModeBySize()
                }
                _updateWidgetModeBySize() {
                    this._updateWidgetModeByWidth(), this._updateWidgetModeByHeight(), this._updateCustomWidgetModeBySize()
                }
                _updateWidgetModeByWidth() {
                    if (null === this._size) return;
                    const e = this._availableWidth();
                    this._renderer.updateMode(e), this._paneWidget.hasState() && this._paneWidget.state().containsMainSeries() && this._model.mainSeries().setTextSourceIsAlwaysTickerRestrictionEnabled(e <= 132)
                }
                _updateWidgetModeByHeight() {
                    null !== this._size && (this._availableHeight = .8 * this._size.height, this._updateCollapsedSourcesModeThrottle())
                }
                _updateCustomWidgetModeBySize() {
                    if (null === this._size) return;
                    const e = (0, i.size)({
                        width: this._availableWidth(),
                        height: this._size.height
                    });
                    for (const t of Array.from(this._customLegendWidgetsMap.values()))
                        for (const s of Array.from(t.values()))
                            for (const t of s) t.updateWidgetModeBySize(e)
                }
                _destroyMainDataSource() {
                    (0, o.ensureNotNull)(this._mainSeriesStatusWidget).destroy(), this._mainSeriesStatusWidget = null, (0, o.ensureNotNull)(this._mainSeriesViewModel).destroy(), this._mainSeriesViewModel = null
                }
                _updateCollapsedSourcesMode() {
                    const e = this._dataSourceViewModels.length,
                        t = this._hideAllExceptFirstLine.value();
                    if (this._availableHeight > 0 && e > 2) {
                        const s = Number(this._renderer.getMainSourceHeight()),
                            i = this._renderer.getDataSourceHeight(),
                            o = this._getCustomWidgetsHeight();
                        if (null !== i) {
                            const n = Math.floor((this._availableHeight - s - o) / i),
                                l = Math.max(n, 2) - 1;
                            if (e > l + 1) {
                                let s = "";
                                for (let i = 0; i < e; i++) {
                                    const e = i < l;
                                    this._dataSourceViewModels[i].setGlobalVisibility(e && (!t || 0 === i)), e || (s += `${0===s.length?"":", "}${this._dataSourceViewModels[i].getFullTitle()}`)
                                }
                                return this._collapsedDataSourcesTitle.setValue(s), void this._collapsedDataSourcesCount.setValue(e - l)
                            }
                        }
                    }
                    for (let e = 0; e < this._dataSourceViewModels.length; ++e) this._dataSourceViewModels[e].setGlobalVisibility(!t || 0 === e);
                    this._collapsedDataSourcesCount.setValue(0), this._collapsedDataSourcesTitle.setValue("")
                }
                _getCustomWidgetsHeight() {
                    let e = 0;
                    for (const t of Array.from(this._customLegendWidgetsMap.values()))
                        for (const s of Array.from(t.values()))
                            for (const t of s) e += t.height().value();
                    return e
                }
                _getCustomTextColorValue() {
                    const e = this._model.model().properties().childs().scalesProperties.childs().textColor.value();
                    return (0, ri.isStdThemedDefaultValue)("chartProperties.scalesProperties.textColor", e, (0, ri.getCurrentTheme)().name) ? null : e
                }
                _clearSubscriptions() {
                    null !== this._mainSeriesRowHidden && (this._mainSeriesRowHidden.destroy(), this._mainSeriesRowHidden = null);
                    for (const e of this._dataSourceRowsHidden) e.destroy();
                    this._dataSourceRowsHidden = [];
                    for (const e of this._customWidgetsVisibilities) e.destroy();
                    this._customWidgetsVisibilities = [];
                    for (const e of this._customWidgetsHeights) e.destroy();
                    this._customWidgetsHeights = []
                }
                _recreateSubscriptions() {
                    this._clearSubscriptions(), null !== this._mainSeriesViewModel && (this._mainSeriesRowHidden = this._mainSeriesViewModel.isRowHidden().spawn(), this._mainSeriesRowHidden.subscribe(this._updateLegendVisibilities.bind(this)));
                    for (const e of this._dataSourceViewModels) {
                        const t = e.isRowHidden().spawn();
                        this._dataSourceRowsHidden.push(t), t.subscribe(this._updateVisibleDataSourceCount.bind(this)), t.subscribe(this._updateLegendVisibilities.bind(this))
                    }
                    for (const e of Array.from(this._customLegendWidgetsMap.values()))
                        for (const t of Array.from(e.values()))
                            for (const e of t) {
                                const t = e.visibility().spawn();
                                this._customWidgetsVisibilities.push(t), t.subscribe(this._updateLegendVisibilities.bind(this));
                                const s = e.height().spawn();
                                this._customWidgetsHeights.push(s),
                                    s.subscribe(this._updateCollapsedSourcesMode.bind(this))
                            }
                    this._updateVisibleDataSourceCount(), this._updateLegendVisibilities()
                }
                _updateLegendVisibilities() {
                    if (this._hideWholeLegend.value()) return void this._allLegendHidden.setValue(!0);
                    const e = this._dataSourceRowsHidden.every((e => e.value())),
                        t = this._hideNotMainSources.value() || e;
                    this._studiesLegendHidden.setValue(t);
                    const s = null === this._mainSeriesRowHidden || this._mainSeriesRowHidden.value(),
                        i = this._customWidgetsVisibilities.some((e => e.value()));
                    this._allLegendHidden.setValue(e && s && !i)
                }
                _updateVisibleDataSourceCount() {
                    const e = this._dataSourceRowsHidden.filter((e => !e.value())).length;
                    this._visibleDataSourceCount.setValue(e)
                }
                _setLegendVisibilityToggled() {
                    Ct.setValue("legend.isVisibilityToggled", !0);
                    this._showLegendOriginalProperty().unsubscribe(this, (0, o.ensureNotNull)(this._onLegendVisibilityToggled))
                }
                _getIsPaneMainValue() {
                    return this._paneWidget.containsMainSeries()
                }
                _showLegendCalculatedProperty() {
                    return this._model.model().showLegend()
                }
                _showLegendOriginalProperty() {
                    return this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showLegend
                }
                _addCustomWidgetForLayerBlock(e) {
                    const t = this._customLegendWidgetsFactoriesMap.get(e);
                    if (void 0 === t) return;
                    const s = this._customLegendWidgetsMap.get(e) || new Map;
                    let i = !1;
                    for (const o of Array.from(t.keys())) {
                        const n = s.get(o) || [],
                            l = t.get(o) || [];
                        for (let t = n.length; t < l.length; t++) {
                            const s = l[t](this._model.model(), this._backgroundThemeName);
                            0 === e && 0 === o && s.setGlobalVisibility((0, Z.combine)(((e, t) => !e && !t), this._hideNotMainSources, this._hideAllExceptFirstLine)), n.push(s), this._renderer.addCustomWidget(s, {
                                block: e,
                                position: o
                            }), i = !0
                        }
                        i && s.set(o, n)
                    }
                    i && this._customLegendWidgetsMap.set(e, s)
                }
                _destroyCustomWidgetFromLayerBlock(e) {
                    const t = this._customLegendWidgetsMap.get(e);
                    if (void 0 !== t) {
                        for (const e of Array.from(t.values()))
                            for (const t of e) t.destroy();
                        t.clear(), this._customLegendWidgetsMap.delete(e)
                    }
                }
                _availableWidth() {
                    return null === this._size ? 0 : this._size.width - this._margin - _i
                }
            }
        },
        511694: (e, t, s) => {
            "use strict";
            s.d(t, {
                LoaderBaseRenderer: () => o
            });
            var i = s(262927);
            class o {
                constructor(e, t = {}) {
                    this._loadingEl = document.createElement("span"), this._renderLoading(t), this.toggleVisibility(!1), e.appendChild(this._loadingEl)
                }
                toggleVisibility(e) {
                    this._loadingEl.classList.toggle(i.blockHidden, !e)
                }
                _renderLoading(e) {
                    const {
                        className: t
                    } = e;
                    t && this._loadingEl.classList.add(t)
                }
            }
        },
        100037: (e, t, s) => {
            "use strict";
            s.d(t, {
                LoaderPointsRenderer: () => n
            });
            var i = s(511694),
                o = s(818940);
            class n extends i.LoaderBaseRenderer {
                _renderLoading(e) {
                    super._renderLoading(e), this._loadingEl.innerHTML = `\n\t\t\t<span class="${o.loaderItem}"></span>\n\t\t\t<span class="${o.loaderItem}"></span>\n\t\t\t<span class="${o.loaderItem}"></span>\n\t\t`, this._loadingEl.classList.add(o.loader)
                }
            }
        },
        387226: (e, t, s) => {
            "use strict";
            s.d(t, {
                navigationButtonsVisibilityKey: () => o,
                property: () => n,
                availableValues: () => l,
                actualBehavior: () => a
            });
            var i = s(831356);
            const o = "NavigationButtons.visibility",
                {
                    property: n,
                    availableValues: l,
                    actualBehavior: a
                } = (0, i.createVisibilityController)(o)
        },
        728730: (e, t, s) => {
            "use strict";
            s.d(t, {
                property: () => n,
                availableValues: () => l,
                actualBehavior: () => a
            });
            var i = s(831356),
                o = s(387226);
            const {
                property: n,
                availableValues: l,
                actualBehavior: a
            } = (0, i.createVisibilityController)("PaneButtons.visibility", o.navigationButtonsVisibilityKey)
        },
        326883: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                PaneControlsWidget: () => ee
            });
            var i = s(778785),
                o = s(345848),
                n = s(777754),
                l = s(470316),
                a = s(728730),
                r = s(562726),
                d = s(650151),
                u = s(724377),
                h = s(569421),
                c = s(473795),
                p = s(567562),
                _ = s(262927);
            class m {
                constructor(e, t, s) {
                    this._parentEl = document.createElement("div"), this._listActionsWrapperEl = null, this._listActionsElements = {}, this._actionsSpawns = {}, this._onMouseEnterLeaveEventHandler = null, this._mouseOverWidget = !1, this._width = null, this._wrapEl = e, this._onMouseEnterLeaveEventHandler = this._onMouseEnterLeaveEvent.bind(this), this._wrapEl.addEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.addEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._actions = t, this._globalVisibility = s.globalVisibility.spawn(), this._globalVisibility.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._visibilityType = s.visibilityType.spawn(), this._visibilityType.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._doNotSwitchToContextMenuMode = s.doNotSwitchToContextMenuMode, this._forceContextMenuMode = s.forceContextMenuMode.spawn(), this._forceContextMenuMode.subscribe(this._updateWidgetMode.bind(this)), this._themedColor = s.themedColor.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this));
                    for (const [e, t] of Object.entries(this._actions)) {
                        const s = e;
                        this._actionsSpawns[s] = {
                            visible: t.visible.spawn(),
                            title: void 0 === t.title ? null : t.title.spawn()
                        }, this._actionsSpawns[s].visible.subscribe(this._updateActionVisibilities.bind(this, s));
                        const i = this._actionsSpawns[s].title;
                        null !== i && i.subscribe(this._updateActionTitle.bind(this, s))
                    }
                    this._render(), this._updatePaneControlsWidgetVisibility(), this._updateThemedColor(this._themedColor.value()), this._parentEl.classList.toggle(p.touchMode, h.trackingModeIsAvailable), this._parentEl.addEventListener("contextmenu", (e => e.preventDefault()))
                }
                destroy() {
                    this._visibilityType.destroy(), this._forceContextMenuMode.destroy(), this._themedColor.destroy();
                    for (const e of Object.keys(this._actionsSpawns)) {
                        const t = e;
                        this._actionsSpawns[t].visible.destroy();
                        const s = this._actionsSpawns[t].title;
                        null !== s && s.destroy()
                    }
                    null !== this._onMouseEnterLeaveEventHandler && (this._wrapEl.removeEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.removeEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._onMouseEnterLeaveEventHandler = null), this._parentEl.innerHTML = "", delete this._parentEl
                }
                getElement() {
                    return this._parentEl
                }
                bottomWithMargin() {
                    const e = this._parentEl.classList.contains(p.touchMode) ? Number(p.css_value_pane_controls_button_touch_size) : Number(p.css_value_pane_controls_button_size);
                    return 2 * Number(p.css_value_pane_controls_margin_top) + e
                }
                updateWidgetModeByWidth(e) {
                    this._width = e, this._updateWidgetMode()
                }
                _updateWidgetMode() {
                    if (null === this._width) return;
                    const e = !this._doNotSwitchToContextMenuMode.value() && this._width < 356,
                        t = !this._doNotSwitchToContextMenuMode.value() && (this._forceContextMenuMode.value() || this._width < 666.65),
                        s = (0, d.ensureNotNull)(this._listActionsWrapperEl),
                        i = (0, d.ensureNotNull)(this._listActionsElements.more);
                    s.classList.toggle(_.blockHidden, e || t), i.classList.toggle(_.blockHidden, e || !t || !this._actions.more.visible.value())
                }
                _render() {
                    this._renderActions(), this._parentEl.classList.add(p.paneControls), this._wrapEl.append(this._parentEl)
                }
                _renderActions() {
                    null === this._listActionsWrapperEl && (this._listActionsWrapperEl = document.createElement("div"), this._listActionsWrapperEl.classList.add(p.buttonsWrapper), this._parentEl.append(this._listActionsWrapperEl));
                    const e = h.trackingModeIsAvailable ? "large" : "small";
                    this._listActionsElements.up = (0, c.createActionElement)(this._actions.up, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.down = (0, c.createActionElement)(this._actions.down, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.collapse = (0, c.createActionElement)(this._actions.collapse, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.restore = (0, c.createActionElement)(this._actions.restore, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.close = (0, c.createActionElement)(this._actions.close, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.maximize = (0, c.createActionElement)(this._actions.maximize, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsElements.minimize = (0, c.createActionElement)(this._actions.minimize, p.button, p.buttonIcon, _.blockHidden, e), this._listActionsWrapperEl.append(this._listActionsElements.up, this._listActionsElements.down, this._listActionsElements.close, this._listActionsElements.collapse, this._listActionsElements.restore, this._listActionsElements.maximize, this._listActionsElements.minimize), this._listActionsElements.more = (0, c.createActionElement)(this._actions.more, p.button, p.buttonIcon, _.blockHidden, e);
                    for (const e of Object.keys(this._listActionsElements))(0, d.ensureNotNull)(this._listActionsElements[e]).classList.add(p.newButton);
                    this._parentEl.append(this._listActionsElements.more)
                }
                _updateActionVisibilities(e, t) {
                    (0, d.ensureNotNull)(this._listActionsElements[e]).classList.toggle(_.blockHidden, !t)
                }
                _updateActionTitle(e, t) {
                    (0, d.ensureNotNull)(this._listActionsElements[e]).setAttribute("title", t)
                }
                _onMouseEnterLeaveEvent(e) {
                    this._mouseOverWidget = "mouseenter" === e.type, "visibleOnMouseOver" === this._visibilityType.value() && this._updatePaneControlsWidgetVisibility()
                }
                _updatePaneControlsWidgetVisibility() {
                    let e, t = !1;
                    switch (this._visibilityType.value()) {
                        case "alwaysOff":
                            e = !1, t = !0;
                            break;
                        case "alwaysOn":
                            e = this._globalVisibility.value();
                            break;
                        case "visibleOnMouseOver":
                            e = this._globalVisibility.value() && this._mouseOverWidget
                    }
                    this._parentEl.classList.toggle(p.hidden, !e), this._parentEl.classList.toggle(p.forceHidden, !this._globalVisibility.value() || t)
                }
                _updateThemedColor(e) {
                    if (e.length > 0) {
                        const [t, s, i] = (0, u.parseRgb)(e);
                        this._parentEl.style.color = (0,
                            u.rgbaToString)([t, s, i, (0, u.normalizeAlphaComponent)(.8)])
                    } else this._parentEl.style.removeProperty("color")
                }
            }
            var g = s(310399),
                v = s(263221),
                b = s(636016),
                w = s(472899),
                y = s(648344),
                S = s(99539),
                f = s(520465),
                C = s(334763);
            const E = n.t(null, void 0, s(68854)),
                M = E,
                x = (0, l.humanReadableModifiers)(l.Modifiers.Mod) + E;
            var k = s(988411),
                T = s.n(k),
                L = s(440135),
                V = s(604286),
                B = s(893271),
                P = s(125226),
                A = s(572237),
                W = s(981020),
                H = s(203515),
                D = s(279526),
                N = s(682847),
                I = s(374362),
                z = s(970471),
                O = s(671402),
                R = s(142930);
            const G = i.mobiletouch,
                F = n.t(null, void 0, s(683498)),
                q = n.t(null, void 0, s(370343)),
                U = n.t(null, void 0, s(939899)),
                j = n.t(null, void 0, s(819603)),
                $ = n.t(null, void 0, s(491029)),
                Y = n.t(null, void 0, s(39589)),
                K = n.t(null, void 0, s(335732)),
                Z = n.t(null, void 0, s(68854)),
                J = (0, V.hotKeySerialize)({
                    keys: [""],
                    text: Z
                }),
                X = (0, V.hotKeySerialize)({
                    keys: [(0, l.humanReadableModifiers)(l.Modifiers.Mod, !1)],
                    text: `{0} + ${Z}`
                }),
                Q = (0, P.isFeatureEnabled)("collapse_pane_buttons_when_connected_to_broker");
            class ee {
                constructor(e, t, s, i, o) {
                    this._actions = {}, this._moreCMShown = !1, this._themedColor = new(T())(""), this._connectedToBroker = new(T())(!1), this._isDestroyed = !1, this._model = e, this._paneWidget = t, this._callbacks = i, this._closeButtonVisibility = new(T())(this._getCloseButtonVisibility()), this._upButtonVisibility = new(T())(this._getUpButtonVisibility()), this._downButtonVisibility = new(T())(this._getDownButtonVisibility()), this._maximizeButtonVisibility = new(T())(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility = new(T())(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility = new(T())(this._getCollapseButtonVisibility()), this._restoreButtonVisibility = new(T())(this._getRestoreButtonVisibility()), this._createActions(), this._visibilityTypeProperty = (0, a.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, (e => {
                        this._visibilityType.setValue(e.value())
                    })), this._visibilityType = new(T())(this._visibilityTypeProperty.value()), this._isPaneMaximize = new(T())(this._getIsPaneMaximizeValue()), this._isWidgetShow = new(T())(this._getIsWidgetShow()), this._backgroundThemeName = s.backgroundThemeName, Q && this._subscribeOnConnectedToBroker(), this._renderer = new m(o, this._actions, {
                        visibilityType: this._visibilityType.readonly(),
                        globalVisibility: this._isWidgetShow.readonly(),
                        doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
                        forceContextMenuMode: this._connectedToBroker.readonly(),
                        themedColor: this._themedColor.readonly()
                    })
                }
                destroy() {
                    var e;
                    Q && (null === (e = (0, B.tradingService)()) || void 0 === e || e.onConnectionStatusChange.unsubscribeAll(this)), this._visibilityTypeProperty.unsubscribeAll(this), this._renderer.destroy(), this._isDestroyed = !0
                }
                getElement() {
                    return this._renderer.getElement()
                }
                bottomWithMargin() {
                    return this._renderer.bottomWithMargin()
                }
                action() {
                    return this._actions
                }
                update() {
                    this._updateButtonsVisibility(), this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()), this._isWidgetShow.setValue(this._getIsWidgetShow())
                }
                updateWidgetModeByWidth(e) {
                    this._renderer.updateWidgetModeByWidth(e)
                }
                updateThemedColors(e) {
                    null === e && (e = (0,
                        L.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(e || "")
                }
                async _subscribeOnConnectedToBroker() {
                    const e = await (0, B.waitTradingService)();
                    this._isDestroyed || (e.onConnectionStatusChange.subscribe(this, this._updateConnectedToBroker.bind(this)), this._updateConnectedToBroker(e.connectStatus()))
                }
                _updateConnectedToBroker(e) {
                    this._connectedToBroker.setValue(1 === e)
                }
                _updateButtonsVisibility() {
                    this._closeButtonVisibility.setValue(this._getCloseButtonVisibility()), this._upButtonVisibility.setValue(this._getUpButtonVisibility()), this._downButtonVisibility.setValue(this._getDownButtonVisibility()), this._maximizeButtonVisibility.setValue(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility.setValue(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility.setValue(this._getCollapseButtonVisibility()), this._restoreButtonVisibility.setValue(this._getRestoreButtonVisibility())
                }
                _createActions() {
                    this._actions.up = {
                        iconMap: new Map([
                            ["large", W],
                            ["small", W]
                        ]),
                        action: this._onUpDownButton.bind(this, "up"),
                        visible: this._upButtonVisibility,
                        title: new(T())(q),
                        className: p.up,
                        dataset: {
                            name: "pane-button-up"
                        }
                    }, this._actions.down = {
                        iconMap: new Map([
                            ["large", H],
                            ["small", H]
                        ]),
                        action: this._onUpDownButton.bind(this, "down"),
                        visible: this._downButtonVisibility,
                        title: new(T())(U),
                        className: p.down,
                        dataset: {
                            name: "pane-button-down"
                        }
                    }, this._actions.close = {
                        iconMap: new Map([
                            ["large", A],
                            ["small", A]
                        ]),
                        action: this._onCloseButton.bind(this),
                        visible: this._closeButtonVisibility,
                        title: new(T())(F),
                        dataset: {
                            name: "pane-button-close"
                        }
                    }, this._actions.maximize = {
                        iconMap: new Map([
                            ["large", I],
                            ["small", D]
                        ]),
                        action: this._onToggleMaximizeButton.bind(this, "Maximize pane"),
                        visible: this._maximizeButtonVisibility,
                        title: new(T())(j),
                        hotKeyTitle: J,
                        className: p.maximize,
                        dataset: {
                            name: "pane-button-maximize"
                        }
                    }, this._actions.minimize = {
                        iconMap: new Map([
                            ["large", I],
                            ["small", D]
                        ]),
                        action: this._onToggleMaximizeButton.bind(this, "Minimize pane"),
                        visible: this._minimizeButtonVisibility,
                        title: new(T())($),
                        hotKeyTitle: J,
                        className: p.minimize,
                        dataset: {
                            name: "pane-button-minimize"
                        }
                    }, this._actions.collapse = {
                        iconMap: new Map([
                            ["large", O],
                            ["small", O]
                        ]),
                        action: this._onToggleCollapseButton.bind(this, "Collapse pane"),
                        visible: this._collapseButtonVisibility,
                        title: new(T())(Y),
                        hotKeyTitle: X,
                        className: p.collapse,
                        dataset: {
                            name: "pane-button-collapse"
                        }
                    }, this._actions.restore = {
                        iconMap: new Map([
                            ["large", R],
                            ["small", R]
                        ]),
                        action: this._onToggleCollapseButton.bind(this, "Restore pane"),
                        visible: this._restoreButtonVisibility,
                        title: new(T())($),
                        hotKeyTitle: X,
                        className: p.restore,
                        dataset: {
                            name: "pane-button-restore"
                        }
                    }, this._actions.more = {
                        iconMap: new Map([
                            ["large", z],
                            ["small", N]
                        ]),
                        action: this._showButtonsInContextMenu.bind(this),
                        visible: new(T())(!G),
                        title: new(T())(K),
                        dataset: {
                            name: "pane-button-more"
                        }
                    }
                }
                _getCloseButtonVisibility() {
                    const e = this._paneWidget.state();
                    let t = !1;
                    return e.containsMainSeries() || e.maximized().value() || G || (t = e.dataSources().some((e => (0, r.isStudy)(e)))), t
                }
                _onCloseButton() {
                    this._trackEvent("Delete pane");
                    const e = this._model.model().panes().indexOf(this._paneWidget.state());
                    this._model.removePane(e)
                }
                _getUpButtonVisibility() {
                    const e = this._paneWidget.state();
                    return this._model.model().panes().indexOf(e) > 0 && !e.maximized().value() && !G
                }
                _getDownButtonVisibility() {
                    const e = this._paneWidget.state(),
                        t = this._model.model().panes();
                    return t.indexOf(e) < t.length - 1 && !e.maximized().value() && !G
                }
                _onUpDownButton(e) {
                    this._trackEvent(`Move pane ${e}`);
                    const t = this._model.model().panes().indexOf(this._paneWidget.state());
                    this._model.rearrangePanes(t, e)
                }
                _getMaximizeButtonVisibility() {
                    const e = this._paneWidget.state();
                    return this._model.model().panes().length > 1 && !e.maximized().value() && !G
                }
                _getMinimizeButtonVisibility() {
                    const e = this._paneWidget.state();
                    return this._model.model().panes().length > 1 && e.maximized().value()
                }
                _getCollapseButtonVisibility() {
                    if (G) return !1;
                    const e = this._paneWidget.state();
                    return !e.maximized().value() && !e.collapsed().value() && this._model.model().paneCollapsingAvailable().value()
                }
                _getRestoreButtonVisibility() {
                    const e = this._paneWidget.state();
                    return !e.maximized().value() && e.collapsed().value()
                }
                _onToggleMaximizeButton(e) {
                    this._trackEvent(e), this._callbacks.toggleMaximizePane(this._paneWidget)
                }
                _onToggleCollapseButton(e) {
                    this._trackEvent(e), this._callbacks.toggleCollapsedPane(this._paneWidget)
                }
                _showButtonsInContextMenu(e) {
                    e.preventDefault(), this._moreCMShown || function(e, t, s) {
                        const i = [];
                        if (e.maximize.visible.value()) {
                            const t = (0, d.ensure)(e.maximize.title),
                                s = (0, d.ensureNotNull)(e.maximize.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.MaximizePane",
                                icon: S,
                                label: t.value(),
                                statName: "Maximize Pane",
                                shortcutHint: M,
                                onExecute: () => s()
                            }))
                        } else if (e.minimize.visible.value()) {
                            const t = (0, d.ensure)(e.minimize.title),
                                s = (0, d.ensureNotNull)(e.minimize.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.MinimizePane",
                                icon: S,
                                label: t.value(),
                                statName: "Minimize Pane",
                                shortcutHint: M,
                                onExecute: () => s()
                            }))
                        }
                        if (e.collapse.visible.value()) {
                            const t = (0, d.ensure)(e.collapse.title),
                                s = (0, d.ensureNotNull)(e.collapse.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.CollapsePane",
                                icon: f,
                                label: t.value(),
                                statName: "Collapse pane",
                                shortcutHint: x,
                                onExecute: () => s()
                            }))
                        }
                        if (e.restore.visible.value()) {
                            const t = (0, d.ensure)(e.restore.title),
                                s = (0, d.ensureNotNull)(e.restore.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.RestorePane",
                                icon: C,
                                label: t.value(),
                                statName: "Restore pane",
                                shortcutHint: x,
                                onExecute: () => s()
                            }))
                        }
                        if (e.up.visible.value()) {
                            const t = (0, d.ensure)(e.up.title),
                                s = (0, d.ensureNotNull)(e.up.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.MovePaneUp",
                                icon: w,
                                label: t.value(),
                                statName: "Move pane up",
                                onExecute: () => s()
                            }))
                        }
                        if (e.down.visible.value()) {
                            const t = (0, d.ensure)(e.down.title),
                                s = (0, d.ensureNotNull)(e.down.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.MovePaneDown",
                                icon: y,
                                label: t.value(),
                                statName: "Move pane down",
                                onExecute: () => s()
                            }))
                        }
                        if (e.close.visible.value()) {
                            const t = (0, d.ensure)(e.close.title),
                                s = (0, d.ensureNotNull)(e.close.action);
                            i.push(new g.Action({
                                actionId: "Chart.PaneControls.DeletePane",
                                icon: b,
                                label: t.value(),
                                statName: "Delete pane",
                                onExecute: () => s()
                            }))
                        }
                        const o = (0, d.ensureNotNull)(t.target).getBoundingClientRect();
                        return v.ContextMenuManager.showMenu(i, {
                            clientX: o.right,
                            clientY: o.top + o.height + 3,
                            attachToXBy: "right"
                        }, void 0, void 0, s)
                    }(this._actions, e, (() => {
                        this._moreCMShown = !1
                    })).then((() => {
                        this._moreCMShown = !0
                    }))
                }
                _getIsPaneMaximizeValue() {
                    return this._paneWidget.state().maximized().value()
                }
                _getIsWidgetShow() {
                    return this._model.model().panes().length > 1
                }
                _trackEvent(e) {
                    (0, o.trackEvent)("GUI", "Pane action", e)
                }
            }
        },
        473795: (e, t, s) => {
            "use strict";
            s.d(t, {
                createActionElement: () => o
            });
            var i = s(758337);

            function o(e, t, s, o, n) {
                const l = document.createElement("div");
                l.className = t, l.classList.toggle(o, !e.visible.value()), Object.assign(l.dataset, e.dataset), void 0 !== e.className && l.classList.add(e.className), void 0 !== e.title && (l.classList.add("apply-common-tooltip"), l.setAttribute("title", e.title.value()), void 0 !== e.hotKeyTitle && (l.dataset.tooltipHotkey = e.hotKeyTitle)), l.addEventListener("touchend", e.action), l.addEventListener("mousedown", (t => {
                    0 === t.button && e.action(t)
                }));
                const a = document.createElement("div");
                a.classList.add(s);
                const r = e.iconMap.get(n) || "";
                return (0, i.isString)(r) ? a.innerHTML = r : a.appendChild(r), l.appendChild(a), l
            }
        },
        569421: (e, t, s) => {
            "use strict";
            s.d(t, {
                trackingModeIsAvailable: () => i
            });
            const i = s(638456).CheckMobile.any()
        },
        947467: (e, t, s) => {
            "use strict";
            async function i(e) {
                (await Promise.all([s.e(76049), s.e(97500), s.e(36099), s.e(88230), s.e(18619), s.e(81910), s.e(86256), s.e(7624), s.e(59333), s.e(12275), s.e(33335), s.e(91901), s.e(78707), s.e(83772), s.e(85761), s.e(33287), s.e(64884), s.e(37908), s.e(20187), s.e(51907), s.e(62040), s.e(10302), s.e(36509), s.e(47523), s.e(64566), s.e(29583), s.e(4592), s.e(75514), s.e(5043), s.e(40619), s.e(62073), s.e(15180), s.e(78920), s.e(25418), s.e(42660), s.e(61932)]).then(s.bind(s, 143372))).openExchangeAgreementDialog(e)
            }
            s.d(t, {
                showExchangeAgreementDialog: () => i
            })
        },
        366493: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        379978: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
        },
        252506: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>'
        },
        488658: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>'
        },
        841674: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>'
        },
        754336: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>'
        },
        645534: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>'
        },
        387258: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>'
        },
        736885: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>'
        },
        65300: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>'
        },
        34882: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>'
        },
        583637: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>'
        },
        572237: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>'
        },
        671402: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="M11 2 7.5 5 4 2" class="bracket-up"/><path stroke="currentColor" d="M4 13l3.5-3 3.5 3" class="bracket-down"/></svg>'
        },
        636016: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>'
        },
        520465: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.53 3.73 14 9.33 7.47 3.73M7.47 24.27l6.53 -5.60 6.53 5.60"/></svg>'
        },
        648344: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>'
        },
        99539: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>'
        },
        334763: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="m7.47 9.33 6.53 -5.60L20.53 9.33M20.53 18.67l-6.53 5.60L7.47 18.67"/></svg>'
        },
        472899: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>'
        },
        970471: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>'
        },
        682847: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>'
        },
        203515: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>'
        },
        374362: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>'
        },
        279526: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>'
        },
        142930: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="m4 5 3.5-3L11 5" class="bracket-up"/><path stroke="currentColor" d="M11 10l-3.5 3L4 10" class="bracket-down"/></svg>'
        },
        981020: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>'
        },
        554430: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>'
        },
        127486: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'
        },
        904696: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>'
        },
        479639: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>'
        },
        257524: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>'
        },
        167189: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>'
        },
        876948: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>'
        },
        267957: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>'
        },
        156201: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>'
        },
        458189: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>'
        },
        635561: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13 12.78V5.22a.3.3 0 0 0-.51-.2L8.7 8.78a.3.3 0 0 0 0 .42L12.5 13a.3.3 0 0 0 .51-.21zM8 12.78V5.22a.3.3 0 0 0-.51-.2L3.7 8.78a.3.3 0 0 0 0 .42L7.5 13a.3.3 0 0 0 .51-.21z"/></svg>'
        },
        339750: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        662920: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>'
        },
        947036: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>'
        },
        69311: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9.7 9l4.65-4.65-.7-.7L9 8.29 4.35 3.65l-.7.7L8.29 9l-4.64 4.65.7.7L9 9.71l4.65 4.64.7-.7L9.71 9z"/></svg>'
        },
        542205: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 7L7 4H4V0H3V4H0L3.5 7Z"/></svg>'
        },
        50119: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>'
        },
        247424: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>'
        },
        24122: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
        },
        676809: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 8a8 8 0 1 0 16 0A8 8 0 1 0 0 8zm2 0a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm2 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
        },
        904799: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" width="14" height="12" fill="currentColor" focusable="false" preserveAspectRatio="none"><path d="M14 12l-4-6 4-6H0v12z"/></svg>'
        },
        533699: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" fill="none"><path fill="currentColor" d="M11.57 0H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10.57a.5.5 0 0 0 .41-.78l-3.3-4.94a.5.5 0 0 1 0-.56l3.3-4.94a.5.5 0 0 0-.41-.78z"/></svg>'
        },
        303106: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M6 9C6 7.89543 6.89543 7 8 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H8V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V9Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M17 8C17 7.44772 17.4477 7 18 7H20C21.1046 7 22 7.89543 22 9V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V9H18C17.4477 9 17 8.55228 17 8Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M21 16C21.5523 16 22 16.4477 22 17V19C22 20.1046 21.1046 21 20 21H18C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19H20V17C20 16.4477 20.4477 16 21 16Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M7 16C7.55228 16 8 16.4477 8 17V19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H8C6.89543 21 6 20.1046 6 19V17C6 16.4477 6.44772 16 7 16Z"/></g></svg>'
        },
        978360: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g class="corner-left-top"><path fill="currentColor" d="M10 7C10.5523 7 11 7.44772 11 8V10C11 11.1046 10.1046 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9V8C9 7.44772 9.44772 7 10 7Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M18 7C18.5523 7 19 7.44772 19 8V10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H19C17.8954 12 17 11.1046 17 10V8C17 7.44772 17.4477 7 18 7Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M17 18C17 16.8954 17.8954 16 19 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H19V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V18Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M6 17C6 16.4477 6.44772 16 7 16H9C10.1046 16 11 16.8954 11 18V20C11 20.5523 10.5523 21 10 21C9.44772 21 9 20.5523 9 20V18H7C6.44772 18 6 17.5523 6 17Z"/></g></svg>'
        },
        94881: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 7h10"/></svg>'
        },
        588398: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 2v10M2 7h10"/></svg>'
        },
        715741: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" width="14" height="18"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M1 10a6 6 0 1 0 6-6H3"/><path d="M5 1L2.5 4 5 7"/></g></svg>'
        },
        362884: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>'
        },
        549483: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"/></svg>'
        },
        670340: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 1.5l5 5.5-5 5.5"/></svg>'
        },
        250662: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 0L0 3h3v4h1V3h3L3.5 0z"/></svg>'
        }
    }
]);
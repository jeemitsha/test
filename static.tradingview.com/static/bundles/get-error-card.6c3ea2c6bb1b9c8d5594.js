(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [20139], {
        790093: e => {
            e.exports = {
                errorCard: "errorCard-Kcyx2XsY",
                errorCard__icon: "errorCard__icon-Kcyx2XsY",
                errorCard_size_big: "errorCard_size_big-Kcyx2XsY",
                errorCard__message: "errorCard__message-Kcyx2XsY",
                errorCard_limitWidth: "errorCard_limitWidth-Kcyx2XsY",
                errorCard__link: "errorCard__link-Kcyx2XsY",
                errorCardRendererContainer: "errorCardRendererContainer-Kcyx2XsY"
            }
        },
        254543: (e, r, t) => {
            "use strict";
            t.r(r), t.d(r, {
                ErrorCard: () => L,
                ResizableErrorCard: () => Z,
                ErrorCardRenderer: () => H
            });
            var a = t(50959),
                o = t(500962),
                i = t(343370),
                s = t(497754),
                l = t.n(s),
                n = t(83436),
                d = t(777754),
                h = t(495046),
                v = t(229540),
                c = t(911425),
                m = t(664224),
                g = t(144329),
                u = t(225584),
                _ = t(125226),
                w = t(342629),
                C = t(31221),
                V = t(790093);
            const f = {
                    ghost: {
                        1: (0, h.enabled)("hide_image_invalid_symbol") ? void 0 : v,
                        2: (0, h.enabled)("hide_image_invalid_symbol") ? void 0 : c
                    },
                    "stop-hand": {
                        1: g,
                        2: u
                    }
                },
                p = (0, _.isFeatureEnabled)("new_error_card_icons");

            function x(e, r) {
                return p && "ghost" === e && ["en", "gb", "de_DE", "fr", "es", "it", "pl", "ja"].includes(window.locale) ? 1 === r ? w : C : f[e][r]
            }
            const L = a.forwardRef(((e, r) => {
                const {
                    icon: o,
                    message: i,
                    size: s = 1,
                    rawHtml: h = !1,
                    doNotLimitWidth: v,
                    solutionId: c
                } = e;
                return a.createElement("div", {
                    ref: r,
                    className: l()(V.errorCard, 2 === s && V.errorCard_size_big, !v && V.errorCard_limitWidth)
                }, a.createElement(n.Icon, {
                    icon: o && x(o, s),
                    className: V.errorCard__icon
                }), h ? a.createElement("div", {
                    className: V.errorCard__message,
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }) : a.createElement("div", {
                    className: V.errorCard__message
                }, i), void 0 !== c ? a.createElement("span", {
                    className: V.errorCard__link,
                    onClick: e => {
                        e.preventDefault(), (0, m.showSupportDialog)({
                            solutionId: c
                        })
                    }
                }, d.t(null, void 0, t(718429))) : null)
            }));

            function Z(e) {
                const {
                    icon: r,
                    message: t,
                    rawHtml: o,
                    doNotLimitWidth: s,
                    maxWidth: l = 200,
                    maxHeight: n = 200,
                    offsetHeight: d = 0,
                    solutionId: h
                } = e, v = a.useRef(null), [c, m] = a.useState(1);
                return a.useEffect((() => {
                    const e = v.current;
                    if (e) {
                        const r = new ResizeObserver((0, i.default)(g, 150));
                        return r.observe(e), () => r.disconnect()
                    }
                }), [l, n, d]), a.createElement(L, {
                    ref: v,
                    message: t,
                    icon: r,
                    size: c,
                    rawHtml: o,
                    doNotLimitWidth: s,
                    solutionId: h
                });

                function g() {
                    const e = v.current;
                    e && (e.clientWidth < l || e.clientHeight + d < n ? m(1) : m(2))
                }
            }
            class H {
                constructor() {
                    this._state = {
                        message: null,
                        rawHtml: !1,
                        doNotLimitWidth: !1,
                        icon: void 0,
                        backgroundColor: null,
                        textColor: null,
                        maxWidth: 200,
                        maxHeight: 200,
                        offsetHeight: 0,
                        solutionId: void 0
                    };
                    const e = document.createElement("div");
                    e.classList.add(V.errorCardRendererContainer), this.container = e
                }
                destroy() {
                    o.unmountComponentAtNode(this.container)
                }
                update(e) {
                    this._state = Object.assign({}, this._state, e), this._updateContainer(), this._render()
                }
                _updateContainer() {
                    const {
                        backgroundColor: e,
                        textColor: r
                    } = this._state;
                    this.container.style.setProperty("--backgroundColor", e), this.container.style.setProperty("--textColor", r)
                }
                _render() {
                    const {
                        message: e,
                        icon: r,
                        rawHtml: t,
                        doNotLimitWidth: i,
                        maxWidth: s,
                        maxHeight: l,
                        offsetHeight: n,
                        solutionId: d
                    } = this._state;
                    o.render(e ? a.createElement(Z, {
                        message: e,
                        icon: r,
                        rawHtml: t,
                        doNotLimitWidth: i,
                        maxWidth: s,
                        maxHeight: l,
                        offsetHeight: n,
                        solutionId: d
                    }) : a.createElement(a.Fragment, null), this.container)
                }
            }
        },
        911425: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="currentColor" fill-rule="evenodd" d="M23 39a36 36 0 0 1 72 0v13.15l15.1 8.44 2.16 1.2-1.64 1.86-12.85 14.59 3.73 4.03L98.57 85 95 81.13V117H77v-12H67v9H50V95H40v22H23V81.28l-3.8 3.61-2.76-2.9 4.05-3.84-12.77-14.5-1.64-1.86 2.16-1.2L23 52.34V39Zm72 36.33 10.98-12.46L95 56.73v18.6ZM23 56.92v18.03L12.35 62.87 23 56.92ZM59 7a32 32 0 0 0-32 32v74h9V91h18v19h9v-9h18v12h10V39A32 32 0 0 0 59 7Zm-7 36a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm19 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>'
        },
        229540: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" d="M15 24a21 21 0 1 1 42 0v7.41l8.97 5.01 1.08.6-.82.94-7.77 8.82 2.34 2.53-1.47 1.36L57 48.15V69H46v-7h-6v5h-9V56h-6v13H15V48.15l-2.33 2.52-1.47-1.36 2.35-2.53-7.78-8.82-.82-.93 1.08-.6L15 31.4V24Zm0 9.7-6.9 3.87L15 45.4V33.7Zm42 11.7 6.91-7.83-6.9-3.87v11.7ZM36 5a19 19 0 0 0-19 19v43h6V54h10v11h5v-5h10v7h7V24A19 19 0 0 0 36 5Zm-5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM42.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>'
        },
        31221: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="currentColor" fill-rule="evenodd" d="M55.14 13a25 25 0 0 1 34.22 3.97l9.52 11.41a10.45 10.45 0 0 0-3.34 4.9l-5.4-2.45a3 3 0 0 0-4.24 2.73v7.8c-.22-.12-.45-.22-.69-.31L41.06 23.57l14.08-10.58Zm37.29 1.4 10.05 12.06A10.45 10.45 0 0 1 116 36.67a10.41 10.41 0 0 1-.7 3.7 10.5 10.5 0 0 1-20.22-2.91L89.9 35.1v9.75A10.03 10.03 0 0 1 82 60.43v5.2L95.7 73.3 84.28 86.28l2.65 2.87L84 91.87l-2-2.16V116H67v-10h-7v8H46V98h-7v18H25V89.42l-2.5 2.39-2.76-2.9 2.86-2.72L11 73l14-7.4V55.59c0-5.61 1.63-10.84 4.43-15.25a10.05 10.05 0 0 1 7.02-18.3L52.74 9.8A28.92 28.92 0 0 1 70 4a28.9 28.9 0 0 1 22.43 10.4ZM33.46 42.18C30.83 46 29 50.6 29 55.57V112h6V94h15v16h6v-8h15v10h7V59.8a9.97 9.97 0 0 1-.19-.07L33.46 42.17ZM29.4 29.76a6.05 6.05 0 0 1 7.85-3.4l46.49 18.4a6.05 6.05 0 0 1-4.45 11.25l-46.5-18.4a6.05 6.05 0 0 1-3.39-7.85Zm78.53.7a6.5 6.5 0 1 0-4.79 12.09 6.5 6.5 0 0 0 4.79-12.09ZM82 82.81v-12.6l7.44 4.16L82 82.81ZM25 70.2l-7.49 4.18 7.49 8.5V70.19ZM46.5 62a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm16 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>'
        },
        342629: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" fill-rule="evenodd" d="M22.65 9.7a26 26 0 0 1 36.37 4.02l.04.04a5.98 5.98 0 0 0-2.7 3.16l-2.9-1.31a2 2 0 0 0-2.83 1.82v4.77a6.1 6.1 0 0 0-.8-.38L21.5 10.6l1.15-.9Zm37.93 2.76.48.6a6.04 6.04 0 0 1 6.5 8.14A6 6 0 0 1 56 18.95l-3.36-1.52v6.63A6.07 6.07 0 0 1 49 33.37v1.83l9 5.3-7.28 8.77 2.04 2.21-1.47 1.36L49 50.36V69H39v-6h-5v5h-9V57h-5v12h-9V50.6l-2.3 2.19-1.38-1.45 2.22-2.11L2 40.49l9-5.12V30c0-3.67 1.04-7.1 2.84-10a6.07 6.07 0 0 1 5.38-10.15l2.18-1.73A27.95 27.95 0 0 1 38.94 2a28.01 28.01 0 0 1 21.64 10.46ZM49 48.2l6-7.17-6-3.54V48.2ZM11 37.77v10.1l-6.02-6.84L11 37.66v.11Zm4.44-16.55A16.92 16.92 0 0 0 13 30v37h5V55h9v11h5v-5h9v6h6V33.51a6.08 6.08 0 0 1-1.63-.4l-29.32-11.6a6.12 6.12 0 0 1-.61-.29Zm-.94-6.86a4.07 4.07 0 0 1 5.29-2.29l29.31 11.6a4.07 4.07 0 0 1-3 7.58L16.8 19.65a4.07 4.07 0 0 1-2.29-5.3Zm48.96.92a4 4 0 1 0-2.94 7.43 4 4 0 0 0 2.94-7.43ZM24.5 34a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>'
        },
        225584: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="currentColor" fill-rule="evenodd" d="M60 6a9 9 0 0 0-9 9v.35a9 9 0 0 0-14 7.48v16.69A9 9 0 0 0 23 47v30a37 37 0 0 0 74 0V34.59a9 9 0 0 0-14-7.49v-4.27a9 9 0 0 0-14-7.48V15a9 9 0 0 0-9-9ZM27 76.53V77a33 33 0 1 0 66 0V34.59a5 5 0 0 0-10 0v29.36h-4V22.83a5 5 0 0 0-10 0v41.12h-4V15a5 5 0 0 0-10 0V63.95h-4V22.83a5 5 0 0 0-10 0v47.2a33.37 33.37 0 0 1 7.95 3.19c4.8 2.74 9.98 7.62 10.03 15.77l-4 .02c-.04-6.13-3.84-9.94-8.01-12.32a28.71 28.71 0 0 0-8.28-3.09h-.03L37 73.3V47a5 5 0 0 0-10 0v29.53Z"/></svg>'
        },
        144329: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" fill-rule="evenodd" d="M37.5 3A5.5 5.5 0 0 0 32 8.26a5.5 5.5 0 0 0-9 4.24v11.75a5.5 5.5 0 0 0-9 4.24V46a23 23 0 1 0 46 0V21a5 5 0 0 0-8-4v-4.5a5.5 5.5 0 0 0-9-4.24A5.5 5.5 0 0 0 37.5 3zM16 45.29V46a21 21 0 1 0 42 0V21a3 3 0 0 0-6 0v15.98h-2V12.5a3.5 3.5 0 1 0-7 0V36.99h-2V8.5a3.5 3.5 0 1 0-7 0V36.99h-2V12.45a3.5 3.5 0 0 0-7 .05v28.94a21.73 21.73 0 0 1 5.28 2c3.05 1.66 6.33 4.6 6.36 9.55l-2 .01c-.02-3.89-2.56-6.3-5.32-7.8a19.4 19.4 0 0 0-5.46-1.95h-.02L23 43.1V28.49a3.5 3.5 0 1 0-7 0v16.8z"/></svg>'
        },
        718429: e => {
            e.exports = {
                ar: ["تعرف على المزيد"],
                ca_ES: ["Més informació"],
                cs: ["Přečtěte si více"],
                de: ["Mehr erfahren"],
                el: "Learn more",
                en: "Learn more",
                es: ["Más información"],
                fa: "Learn more",
                fr: ["En savoir plus"],
                he_IL: ["למד עוד"],
                hu_HU: ["Tudj meg többet"],
                id_ID: ["Pelajari lebih lanjut"],
                it: ["Scopri di più"],
                ja: ["詳細を確認"],
                ko: ["자세히 보기"],
                ms_MY: ["Ketahui lebih lanjut"],
                nl_NL: "Learn more",
                pl: ["Dowiedz się więcej"],
                pt: ["Saiba mais"],
                ro: "Learn more",
                ru: ["Узнать больше"],
                sv: ["Läs mer"],
                th: ["เรียนรู้เพิ่มเติม"],
                tr: ["Daha fazla öğren"],
                vi: ["Tìm hiểu thêm"],
                zh: ["了解更多"],
                zh_TW: ["了解更多"]
            }
        }
    }
]);
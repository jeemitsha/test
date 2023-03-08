(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [70354], {
        629084: e => {
            e.exports = {
                badge: "badge-TRXznVu1",
                content: "content-TRXznVu1",
                anchor: "anchor-TRXznVu1",
                button: "button-TRXznVu1",
                "size-xsmall": "size-xsmall-TRXznVu1",
                "size-small": "size-small-TRXznVu1",
                "size-medium": "size-medium-TRXznVu1",
                "size-large": "size-large-TRXznVu1",
                "size-xlarge": "size-xlarge-TRXznVu1"
            }
        },
        374486: e => {
            e.exports = {
                "badge-user": "badge-user-FpgDFPAn",
                "pro-premium": "pro-premium-FpgDFPAn",
                "pro-realtime": "pro-realtime-FpgDFPAn",
                pro: "pro-FpgDFPAn",
                moderator: "moderator-FpgDFPAn",
                trial: "trial-FpgDFPAn",
                "pine-wizard": "pine-wizard-FpgDFPAn",
                employee: "employee-FpgDFPAn",
                "employee-logo-icon": "employee-logo-icon-FpgDFPAn",
                "size-xsmall": "size-xsmall-FpgDFPAn",
                "size-small": "size-small-FpgDFPAn",
                "size-medium": "size-medium-FpgDFPAn",
                "size-large": "size-large-FpgDFPAn",
                "size-xlarge": "size-xlarge-FpgDFPAn"
            }
        },
        774465: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnchorBadge: () => p,
                Badge: () => u,
                BadgeSize: () => a.BadgeSize
            });
            var i = r(50959),
                s = r(497754),
                o = r.n(s),
                a = r(105573),
                n = r(629084),
                l = r.n(n);

            function m(e) {
                const {
                    size: t = a.BadgeSize.Medium,
                    className: r
                } = e;
                return o()(l().badge, t && l()[`size-${t}`], r)
            }

            function c(e) {
                return o()(m(e), l().anchor)
            }

            function d(e) {
                const {
                    children: t,
                    contentClassName: r
                } = e;
                return i.createElement("span", {
                    className: o()(l().content, r)
                }, t)
            }

            function u(e) {
                const {
                    size: t,
                    children: r,
                    className: s,
                    contentClassName: o,
                    ...a
                } = e;
                return i.createElement("span", { ...a,
                    className: m({
                        size: t,
                        className: s
                    })
                }, i.createElement(d, {
                    contentClassName: o
                }, r))
            }

            function p(e) {
                const {
                    size: t,
                    children: r,
                    className: s,
                    contentClassName: o,
                    ...a
                } = e;
                return i.createElement("a", { ...a,
                    className: c({
                        size: t,
                        className: s
                    })
                }, i.createElement(d, {
                    contentClassName: o
                }, r))
            }
        },
        105573: (e, t, r) => {
            "use strict";
            var i;
            r.d(t, {
                    BadgeSize: () => i
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(i || (i = {}))
        },
        314308: (e, t, r) => {
            "use strict";

            function i(e, t, r, i, s) {
                function o(s) {
                    if (e > s.timeStamp) return;
                    const o = s.target;
                    void 0 !== r && null !== t && null !== o && o.ownerDocument === i && (t.contains(o) || r(s))
                }
                return s.click && i.addEventListener("click", o, !1), s.mouseDown && i.addEventListener("mousedown", o, !1), s.touchEnd && i.addEventListener("touchend", o, !1), s.touchStart && i.addEventListener("touchstart", o, !1), () => {
                    i.removeEventListener("click", o, !1), i.removeEventListener("mousedown", o, !1), i.removeEventListener("touchend", o, !1), i.removeEventListener("touchstart", o, !1)
                }
            }
            r.d(t, {
                addOutsideEventListener: () => i
            })
        },
        540935: (e, t, r) => {
            "use strict";
            var i;
            r.d(t, {
                    BadgeUserNames: () => i
                }),
                function(e) {
                    e.Moderator = "moderator", e.Employee = "employee", e.PineWizard = "pine_wizard", e.ProPremium = "pro:pro_premium", e.ProPremiumTrial = "pro:pro_premium_trial", e.ProRealTime = "pro:pro_realtime", e.ProRealTimeTrial = "pro:pro_realtime_trial", e.Pro = "pro:pro", e.ProTrial = "pro:pro_trial"
                }(i || (i = {}))
        },
        271402: (e, t, r) => {
            "use strict";
            r.d(t, {
                BadgeUser: () => m
            });
            var i = r(50959),
                s = r(497754),
                o = r(359984),
                a = r(558470),
                n = r(987763),
                l = r(374486);

            function m(e) {
                const {
                    name: t,
                    size: r = a.BadgeSize.Small,
                    href: s,
                    title: m,
                    className: u,
                    ...p
                } = e;
                return s ? i.createElement(a.AnchorBadge, {
                    ...p,
                    className: c(t, r, m, u),
                    title: (0, o.isBadgeUserWithTitle)(t) ? m : void 0,
                    "aria-label": (0, o.isEmployee)(t) && (0, o.isBadgeUserWithTitle)(t) ? m : void 0,
                    size: r,
                    href: s,
                    target: "_blank"
                }, d(t), (0, o.isEmployee)(t) && i.createElement("img", {
                    src: n,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                })) : i.createElement(a.Badge, {
                    className: c(t, r, m, u),
                    title: (0, o.isBadgeUserWithTitle)(t) ? m : void 0,
                    "aria-label": (0, o.isEmployee)(t) && (0, o.isBadgeUserWithTitle)(t) ? m : void 0,
                    size: r,
                    ...p
                }, d(t), (0, o.isEmployee)(t) && i.createElement("img", {
                    src: n,
                    className: l["employee-logo-icon"],
                    role: "presentation",
                    loading: "lazy"
                }))
            }

            function c(e, t = a.BadgeSize.Small, r, i) {
                return s(l["badge-user"], l[`size-${t}`], (0, o.isProPremium)(e) && l["pro-premium"], (0, o.isProRealtime)(e) && l["pro-realtime"], (0, o.isPro)(e) && l.pro, (0, o.isModerator)(e) && l.moderator, (0, o.isEmployee)(e) && l.employee, (0, o.isPineWizard)(e) && l["pine-wizard"], (0, o.isTrial)(e) && l.trial, r && "apply-common-tooltip", i)
            }

            function d(e) {
                return (0, o.isProPremium)(e) ? "Premium" : (0, o.isProRealtime)(e) ? "Pro+" : (0, o.isPro)(e) ? "Pro" : (0, o.isModerator)(e) ? "Mod" : (0, o.isPineWizard)(e) ? "Wizard" : ""
            }
        },
        359984: (e, t, r) => {
            "use strict";
            r.d(t, {
                isBadgeUserWithTitle: () => o,
                isBadgeUser: () => n,
                isModerator: () => l,
                isProPremium: () => m,
                isProRealtime: () => c,
                isPro: () => d,
                isEmployee: () => u,
                isPineWizard: () => p,
                isTrial: () => h
            });
            var i = r(540935);
            const s = new Set([i.BadgeUserNames.Employee, i.BadgeUserNames.PineWizard, i.BadgeUserNames.Moderator, i.BadgeUserNames.ProPremiumTrial, i.BadgeUserNames.ProRealTimeTrial, i.BadgeUserNames.ProTrial]);

            function o(e) {
                return s.has(e)
            }
            const a = new Set(Object.values(i.BadgeUserNames));

            function n(e) {
                return a.has(e)
            }

            function l(e) {
                return i.BadgeUserNames.Moderator === e
            }

            function m(e) {
                return i.BadgeUserNames.ProPremium === e || i.BadgeUserNames.ProPremiumTrial === e
            }

            function c(e) {
                return i.BadgeUserNames.ProRealTime === e || i.BadgeUserNames.ProRealTimeTrial === e
            }

            function d(e) {
                return i.BadgeUserNames.Pro === e || i.BadgeUserNames.ProTrial === e
            }

            function u(e) {
                return i.BadgeUserNames.Employee === e
            }

            function p(e) {
                return i.BadgeUserNames.PineWizard === e
            }

            function h(e) {
                return i.BadgeUserNames.ProPremiumTrial === e || i.BadgeUserNames.ProRealTimeTrial === e || i.BadgeUserNames.ProTrial === e
            }
        },
        558470: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnchorBadge: () => i.AnchorBadge,
                Badge: () => i.Badge,
                BadgeSize: () => i.BadgeSize
            });
            var i = r(774465)
        },
        951292: (e, t, r) => {
            "use strict";
            r.d(t, {
                useOutsideEvent: () => o
            });
            var i = r(50959),
                s = r(314308);

            function o(e) {
                const {
                    click: t,
                    mouseDown: r,
                    touchEnd: o,
                    touchStart: a,
                    handler: n,
                    reference: l,
                    ownerDocument: m = document
                } = e, c = (0, i.useRef)(null), d = (0, i.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, i.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: r,
                            touchEnd: o,
                            touchStart: a
                        },
                        i = l ? l.current : c.current;
                    return (0, s.addOutsideEventListener)(d.current, i, n, m, e)
                }), [t, r, o, a, n]), l || c
            }
        },
        730183: e => {
            e.exports = {
                css_value_arrow_size: "13",
                tooltip: "tooltip-yV2Az0ZG",
                show: "show-yV2Az0ZG",
                right: "right-yV2Az0ZG"
            }
        },
        897973: e => {
            e.exports = {
                css_value_arrow_size: "15",
                layout: "layout-qB20jRSO",
                titleRow: "titleRow-qB20jRSO",
                authorRow: "authorRow-qB20jRSO",
                avatar: "avatar-qB20jRSO",
                picture: "picture-qB20jRSO",
                usernameRow: "usernameRow-qB20jRSO",
                username: "username-qB20jRSO"
            }
        },
        719473: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                TooltipRenderer: () => l
            });
            var i = r(50959),
                s = r(500962),
                o = r(951292),
                a = r(730183);
            const n = parseInt(a.css_value_arrow_size);
            class l {
                constructor(e) {
                    this._container = null, this._props = null, this._deferredActions = {
                        hideItemTime: 0
                    }, this._updatePosition = () => {
                        if (null === this._props || null === this._container) return;
                        const {
                            width: e,
                            height: t
                        } = this._tooltipContainer.getBoundingClientRect(), r = this._container.getBoundingClientRect(), i = Math.round(this._props.itemSize / 2), s = Math.min(8, i);
                        let o = !1,
                            l = this._props.x - e - i - n - s;
                        l < 0 && (l = this._props.x + i + n + s, o = !0);
                        const m = r.height;
                        let c = Math.max(0, this._props.y - t / 2);
                        c > 0 && (c = Math.min(c, m - t)), this._tooltipContainer.classList.toggle(a.right, o), this._tooltipContainer.style.top = `${c}px`, this._tooltipContainer.style.left = `${l}px`
                    }, this._tooltipFactory = e, this._tooltipContainer = document.createElement("div"), this._tooltipContainer.classList.add(a.tooltip)
                }
                destroy() {
                    this._unmountComponent()
                }
                contains(e) {
                    return this._tooltipContainer.contains(e)
                }
                hide(e) {
                    this._deferredActions.hideItemTime = performance.now(), this._clearTimeouts(), e ? this._tooltipContainer.classList.remove(a.show) : this._deferredActions.hideItemTimerId = setTimeout((() => {
                        this._tooltipContainer.classList.remove(a.show)
                    }), 100)
                }
                show(e) {
                    this._clearTimeouts(), performance.now() < this._deferredActions.hideItemTime + 100 ? this._showImpl(e) : this._deferredActions.showItemTimerId = setTimeout((() => this._showImpl(e)), 400)
                }
                _showImpl(e) {
                    this._props = e, this._render(e), this._clearTimeouts(), this._tooltipContainer.classList.add(a.show)
                }
                _render(e) {
                    const t = e.container;
                    this._container !== t && (this._unmountComponent(), this._container = t, this._container.appendChild(this._tooltipContainer)), s.render(i.createElement(m, {
                        handler: e.onClickOutside,
                        child: i.createElement(this._tooltipFactory, e.factoryProps)
                    }), this._tooltipContainer, this._updatePosition)
                }
                _unmountComponent() {
                    null !== this._container && (s.unmountComponentAtNode(this._tooltipContainer), this._tooltipContainer.remove(), this._container = null, this._clearTimeouts())
                }
                _clearTimeouts() {
                    void 0 !== this._deferredActions.showItemTimerId && (clearTimeout(this._deferredActions.showItemTimerId), this._deferredActions.showItemTimerId = void 0), void 0 !== this._deferredActions.hideItemTimerId && (clearTimeout(this._deferredActions.hideItemTimerId), this._deferredActions.hideItemTimerId = void 0)
                }
            }

            function m(e) {
                const {
                    handler: t,
                    child: r
                } = e, s = (0, o.useOutsideEvent)({
                    mouseDown: !0,
                    touchStart: !0,
                    handler: t
                });
                return i.createElement("div", {
                    ref: s
                }, r)
            }
        },
        450482: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                PublishedChartsTimelineTooltip: () => a
            });
            var i = r(50959),
                s = r(271402),
                o = r(897973);

            function a(e) {
                const {
                    title: t,
                    username: r,
                    avatarUrl: a,
                    badges: n,
                    onTitleClicked: l
                } = e;
                return i.createElement("div", {
                    className: o.layout,
                    onClick: l
                }, i.createElement("div", {
                    className: o.titleRow
                }, t), i.createElement("div", {
                    className: o.authorRow
                }, i.createElement("div", {
                    className: o.avatar
                }, i.createElement("img", {
                    className: o.picture,
                    src: a,
                    alt: r
                })), i.createElement("div", {
                    className: o.usernameRow
                }, i.createElement("div", {
                    className: o.username
                }, r), n && n.map(((e, t) => i.createElement(s.BadgeUser, {
                    className: o.badge,
                    key: t,
                    name: e.name
                }))))))
            }
        },
        987763: (e, t, r) => {
            "use strict";
            e.exports = r.p + "logo-tradingview.f3af8e3579cc12751704.svg"
        }
    }
]);
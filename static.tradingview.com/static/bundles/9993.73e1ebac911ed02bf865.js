(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9993], {
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
        946587: e => {
            e.exports = {
                wrapper: "wrapper-bUw_gKIQ",
                input: "input-bUw_gKIQ",
                box: "box-bUw_gKIQ",
                icon: "icon-bUw_gKIQ",
                noOutline: "noOutline-bUw_gKIQ",
                "intent-danger": "intent-danger-bUw_gKIQ",
                check: "check-bUw_gKIQ",
                dot: "dot-bUw_gKIQ"
            }
        },
        794090: e => {
            e.exports = {
                checkbox: "checkbox-pJWVW1z6",
                reverse: "reverse-pJWVW1z6",
                label: "label-pJWVW1z6",
                baseline: "baseline-pJWVW1z6"
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
        655498: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                item: "item-RhC5uhZw",
                hovered: "hovered-RhC5uhZw",
                isDisabled: "isDisabled-RhC5uhZw",
                isActive: "isActive-RhC5uhZw",
                shortcut: "shortcut-RhC5uhZw",
                toolbox: "toolbox-RhC5uhZw",
                withIcon: "withIcon-RhC5uhZw",
                icon: "icon-RhC5uhZw",
                labelRow: "labelRow-RhC5uhZw",
                label: "label-RhC5uhZw",
                showOnHover: "showOnHover-RhC5uhZw"
            }
        },
        540975: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorButton: () => u,
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

            function l(e = "m") {
                switch (e) {
                    case "s":
                        return "xsmall";
                    case "m":
                        return "small";
                    case "l":
                        return "large"
                }
            }

            function a(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: r,
                    useFullWidth: o,
                    icon: a,
                    ...c
                } = e;
                return { ...c,
                    color: i(t),
                    size: l(n),
                    variant: s(r),
                    stretch: o,
                    startIcon: a
                }
            }

            function c(e) {
                return r.createElement(o.SquareButton, { ...a(e)
                })
            }

            function h(e) {
                const {
                    intent: t,
                    size: n,
                    appearance: r,
                    useFullWidth: o,
                    icon: a,
                    ...c
                } = e;
                return { ...c,
                    color: i(t),
                    size: l(n),
                    variant: s(r),
                    stretch: o,
                    startIcon: a
                }
            }

            function u(e) {
                return r.createElement(o.SquareAnchorButton, { ...h(e)
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
                SquareAnchorButton: () => a
            });
            var r = n(50959),
                o = n(301792),
                s = n(8626),
                i = n(221191);

            function l(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: o,
                    stretch: i,
                    animated: l,
                    icon: a,
                    iconOnly: c,
                    startIcon: h,
                    endIcon: u,
                    ...d
                } = e;
                return { ...d,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function a(e) {
                const {
                    reference: t
                } = e, {
                    isGrouped: n,
                    cellState: s,
                    disablePositionAdjustment: a
                } = (0, r.useContext)(o.ControlGroupContext), c = (0, i.getSquareButtonClasses)({ ...e,
                    isGrouped: n,
                    cellState: s,
                    disablePositionAdjustment: a,
                    isAnchor: !0
                });
                return r.createElement("a", { ...l(e),
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
                SquareButtonContent: () => h
            });
            var r = n(50959),
                o = n(497754),
                s = n(307754),
                i = n(83436),
                l = n(428146),
                a = n.n(l);

            function c(e) {
                const {
                    color: t = "brand",
                    size: n = "medium",
                    variant: r = "primary",
                    stretch: i = !1,
                    icon: l,
                    startIcon: c,
                    endIcon: h,
                    iconOnly: u = !1,
                    className: d,
                    isGrouped: v,
                    cellState: p,
                    disablePositionAdjustment: m = !1,
                    isAnchor: g = !1
                } = e, f = function(e) {
                    let t = "";
                    return 0 !== e && (1 & e && (t = o(t, a()["no-corner-top-left"])), 2 & e && (t = o(t, a()["no-corner-top-right"])), 4 & e && (t = o(t, a()["no-corner-bottom-right"])), 8 & e && (t = o(t, a()["no-corner-bottom-left"]))), t
                }((0, s.getGroupCellRemoveRoundBorders)(p));
                return o(d, a().button, a()[`size-${n}`], a()[`color-${t}`], a()[`variant-${r}`], i && a().stretch, (l || c) && a()["with-start-icon"], h && a()["with-end-icon"], u && a()["icon-only"], f, v && a().grouped, v && !m && a()["adjust-position"], v && p.isTop && a()["first-row"], v && p.isLeft && a()["first-col"], g && a().link)
            }

            function h(e) {
                const {
                    startIcon: t,
                    icon: n,
                    iconOnly: o,
                    children: s,
                    endIcon: l
                } = e, c = null != t ? t : n;
                return r.createElement(r.Fragment, null, c && r.createElement(i.Icon, {
                    icon: c,
                    className: a()["start-icon-wrap"]
                }), s && r.createElement("span", {
                    className: a().content
                }, s), l && !o && r.createElement(i.Icon, {
                    icon: l,
                    className: a()["end-icon-wrap"]
                }))
            }
        },
        422175: (e, t, n) => {
            "use strict";
            n.d(t, {
                SquareButton: () => a
            });
            var r = n(50959),
                o = n(301792),
                s = n(8626),
                i = n(221191);

            function l(e) {
                const {
                    className: t,
                    color: n,
                    variant: r,
                    size: o,
                    stretch: i,
                    animated: l,
                    icon: a,
                    iconOnly: c,
                    startIcon: h,
                    endIcon: u,
                    ...d
                } = e;
                return { ...d,
                    ...(0, s.filterDataProps)(e),
                    ...(0, s.filterAriaProps)(e)
                }
            }

            function a(e) {
                const {
                    reference: t,
                    ...n
                } = e, {
                    isGrouped: s,
                    cellState: a,
                    disablePositionAdjustment: c
                } = (0, r.useContext)(o.ControlGroupContext), h = (0, i.getSquareButtonClasses)({ ...n,
                    isGrouped: s,
                    cellState: a,
                    disablePositionAdjustment: c
                });
                return r.createElement("button", { ...l(n),
                    className: h,
                    ref: t
                }, r.createElement(i.SquareButtonContent, { ...n
                }))
            }
        },
        203223: (e, t, n) => {
            "use strict";
            n.d(t, {
                CheckboxInput: () => c
            });
            var r = n(50959),
                o = n(497754),
                s = n(83436),
                i = n(465890),
                l = n(946587),
                a = n.n(l);

            function c(e) {
                const t = o(a().box, a()[`intent-${e.intent}`], {
                        [a().check]: !Boolean(e.indeterminate),
                        [a().dot]: Boolean(e.indeterminate),
                        [a().noOutline]: -1 === e.tabIndex
                    }),
                    n = o(a().wrapper, e.className);
                return r.createElement("span", {
                    className: n,
                    title: e.title,
                    style: e.style
                }, r.createElement("input", {
                    id: e.id,
                    tabIndex: e.tabIndex,
                    className: a().input,
                    type: "checkbox",
                    name: e.name,
                    checked: e.checked,
                    disabled: e.disabled,
                    value: e.value,
                    autoFocus: e.autoFocus,
                    role: e.role,
                    onChange: function() {
                        e.onChange && e.onChange(e.value)
                    },
                    ref: e.reference,
                    "aria-required": e["aria-required"]
                }), r.createElement("span", {
                    className: t
                }, r.createElement(s.Icon, {
                    icon: i,
                    className: a().icon
                })))
            }
        },
        182120: (e, t, n) => {
            "use strict";
            n.d(t, {
                Checkbox: () => c,
                GroupedCheckbox: () => h
            });
            var r = n(50959),
                o = n(497754),
                s = n(451608),
                i = n(203223),
                l = n(794090),
                a = n.n(l);
            class c extends r.PureComponent {
                render() {
                    const {
                        inputClassName: e,
                        labelClassName: t,
                        ...n
                    } = this.props, s = o(this.props.className, a().checkbox, {
                        [a().reverse]: Boolean(this.props.labelPositionReverse),
                        [a().baseline]: Boolean(this.props.labelAlignBaseline)
                    }), l = o(a().label, t, {
                        [a().disabled]: this.props.disabled
                    });
                    let c = null;
                    return this.props.label && (c = r.createElement("span", {
                        className: l,
                        title: this.props.title
                    }, this.props.label)), r.createElement("label", {
                        className: s
                    }, r.createElement(i.CheckboxInput, { ...n,
                        className: e
                    }), c)
                }
            }
            c.defaultProps = {
                value: "on"
            };
            const h = (0, s.makeSwitchGroupItem)(c)
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
        662464: (e, t, n) => {
            "use strict";
            n.d(t, {
                useHover: () => o,
                hoverMouseEventFilter: () => s,
                useAccurateHover: () => i
            });
            var r = n(50959);

            function o() {
                const [e, t] = (0, r.useState)(!1);
                return [e, {
                    onMouseOver: function(e) {
                        s(e) && t(!0)
                    },
                    onMouseOut: function(e) {
                        s(e) && t(!1)
                    }
                }]
            }

            function s(e) {
                return !e.currentTarget.contains(e.relatedTarget)
            }

            function i(e) {
                const [t, n] = (0, r.useState)(!1);
                return (0, r.useEffect)((() => {
                    const t = t => {
                        if (null === e.current) return;
                        const r = e.current.contains(t.target);
                        n(r)
                    };
                    return document.addEventListener("mouseover", t), () => document.removeEventListener("mouseover", t)
                }), []), t
            }
        },
        774218: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsomorphicLayoutEffect: () => o
            });
            var r = n(50959);

            function o(e, t) {
                ("undefined" == typeof window ? r.useEffect : r.useLayoutEffect)(e, t)
            }
        },
        451608: (e, t, n) => {
            "use strict";
            n.d(t, {
                SwitchGroup: () => r.SwitchGroup,
                makeSwitchGroupItem: () => i
            });
            var r = n(367254),
                o = n(50959),
                s = n(719036);

            function i(e) {
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
                    switchGroupContext: s.any.isRequired
                }, t
            }
        },
        367254: (e, t, n) => {
            "use strict";
            n.d(t, {
                SwitchGroup: () => s
            });
            var r = n(50959),
                o = n(719036);
            class s extends r.PureComponent {
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
                    return [...t, ...e].filter((n => t.includes(n) ? !e.includes(n) : e.includes(n)))
                }
            }
            s.childContextTypes = {
                switchGroupContext: o.any.isRequired
            }
        },
        8626: (e, t, n) => {
            "use strict";

            function r(e) {
                return s(e, i)
            }

            function o(e) {
                return s(e, l)
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

            function l(e) {
                return 0 === e[0].indexOf("aria-")
            }
            n.d(t, {
                filterDataProps: () => r,
                filterAriaProps: () => o,
                filterProps: () => s,
                isDataAttribute: () => i,
                isAriaAttribute: () => l
            })
        },
        773792: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                IdeasProvider: () => a
            });
            var r = n(272001),
                o = n(890740),
                s = n(606353),
                i = n(567933);
            const l = (0, r.getLogger)("Idea.PublishProvider");
            class a {
                constructor(e = {}) {
                    this._limitInfoUrl = "/public-limit/", this._ideasInfoUrl = "/ideas-json/", this._tagsProvider = new s.TagsProvider, this._publicationProvider = new i.PublicationProvider, this._publish = e.publish
                }
                publish(e, t) {
                    return this._publish ? this._publish(e, t) : Promise.resolve()
                }
                getPublishLimitInfo() {
                    return (0, o.fetch)(this._limitInfoUrl, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST"
                    }).then((e => e.json())).catch((e => {
                        l.logError(e)
                    }))
                }
                getIdeasInfo(e) {
                    let t = this._ideasInfoUrl;
                    return e && (t = `${this._ideasInfoUrl}?search=${encodeURIComponent(e)}`), (0, o.fetch)(t, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "GET"
                    }).then((e => e.json()), (e => {
                        l.logError(e)
                    }))
                }
                getIdeaInfo(e) {
                    const t = `${this._ideasInfoUrl}${e}/`;
                    return (0, o.fetch)(t, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "GET"
                    }).then((e => e.json()), (e => {
                        l.logError(e)
                    }))
                }
                getTagsInfo(e) {
                    return this._tagsProvider.getTagsInfo(e)
                }
                getIdeaData(e) {
                    return this._publicationProvider.getPublicationData(e)
                }
            }
        },
        567933: (e, t, n) => {
            "use strict";
            n.d(t, {
                PublicationProvider: () => c
            });
            var r = n(272001),
                o = n(890740),
                s = n(779923),
                i = n(777754);
            const l = (0, r.getLogger)("Idea.PublishProvider"),
                a = {
                    title: i.t(null, void 0, n(482751)),
                    errorMessage: i.t(null, void 0, n(164968)),
                    okBtn: i.t(null, void 0, n(468988))
                };
            class c {
                constructor() {
                    this._editUrl = "/idea-edit/", this._ideaDataUrl = "/json-meta/"
                }
                getPublicationView(e) {
                    return (0, o.fetch)(`/v/${e}/?popup=true`, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "text/html"
                        },
                        method: "GET"
                    }).then((e => {
                        if (e.ok) return e.text();
                        throw new Error(e.statusText)
                    }), (e => {
                        l.logError(e)
                    }))
                }
                getPublicationData(e) {
                    const t = `${this._ideaDataUrl}${e}/`;
                    return (0, o.fetch)(t, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "GET"
                    }).then((e => e.json()), (e => {
                        l.logError(e)
                    }))
                }
                editPublication(e, t) {
                    return (0, o.fetch)(`${this._editUrl}${e}/`, {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify(t)
                    }).then((e => e.ok ? e.json() : e.json().then((({
                        error: e
                    }) => {
                        (0, s.showWarning)({
                            title: a.title,
                            text: e || a.errorMessage
                        })
                    }))), (e => {
                        l.logError(e)
                    })).catch((e => {
                        l.logError(e), (0, s.showWarning)({
                            title: a.title,
                            text: a.errorMessage
                        })
                    }))
                }
            }
        },
        194806: (e, t, n) => {
            "use strict";
            n.d(t, {
                ROOT_URL: () => s,
                COMMUNITY_URL: () => i,
                API_ROOT_URL: () => l,
                TV_LIVE_DIRECTOR_DOMAIN: () => a,
                TV_LIVE_MEDIA_SERVER_DOMAIN: () => c,
                TV_LIVE_MEDIA_URL: () => d,
                MAX_STREAMS_FOR_CATEGORY: () => m,
                setStreamsConfig: () => g,
                getGraphqlUrl: () => f,
                getPreviewUrl: () => w,
                getMediaUrl: () => C,
                getStreamingUrl: () => _,
                isRecordAvailable: () => x,
                TOOLTIP_CLASS: () => b,
                TabNames: () => E,
                translatedTabName: () => M,
                SettingsTabs: () => A,
                streamSettingsTabs: () => H,
                StreamState: () => Z,
                Encoder: () => O,
                Visible: () => T,
                StreamDate: () => V,
                CategoryState: () => S,
                Category: () => R,
                translatedCategory: () => y,
                RestreamService: () => I,
                typeItems: () => P,
                streamTypesMap: () => N,
                streamTabsMap: () => k,
                TvLiveErrorCode: () => L
            });
            var r, o = n(777754);
            ! function(e) {
                e.America = "NA", e.Europe = "EU", e.Asia = "AS"
            }(r || (r = {}));
            const s = "/streams",
                i = "/community",
                l = "/api/v1/streams";
            let a = "",
                c = "",
                h = "",
                u = {
                    [r.America]: "",
                    [r.Europe]: "",
                    [r.Asia]: ""
                },
                d = "",
                v = "",
                p = "";
            const m = 10;

            function g(e) {
                a = e.tvLiveUrl, c = e.mediaServerUrl, h = e.mediaServerRtmpUrl, u = e.liveMediaUrls, d = e.recordMediaUrl, v = `${d}/previews/`, p = `https://${a}/graphql`
            }

            function f() {
                return p
            }

            function w() {
                return v
            }

            function C(e = r.America) {
                return u[e]
            }

            function _(e, t = !0) {
                return t ? `rtmps://${h}/live` : `rtmp://${h.split(":")[0]}/live`
            }

            function x(e) {
                return !!e && Date.now() < new Date(e).getTime() + 5184e6
            }
            const b = "apply-common-tooltip";
            var E;
            ! function(e) {
                e.Recent = "Recent", e.Upcoming = "Upcoming", e.Featured = "Featured"
            }(E || (E = {}));
            const M = new Map([
                [E.Recent, o.t(null, void 0, n(3519))],
                [E.Upcoming, o.t(null, void 0, n(934617))],
                [E.Featured, o.t(null, {
                    context: "streams"
                }, n(610500))]
            ]);
            var A;
            ! function(e) {
                e.General = "General", e.Stream = "Stream", e.Source = "Source", e.Advanced = "Advanced"
            }(A || (A = {}));
            const H = [A.General, A.Stream];
            var Z, O, T, V, S, R;
            ! function(e) {
                e.Live = "live", e.Ended = "ended", e.Scheduled = "scheduled"
            }(Z || (Z = {})),
            function(e) {
                e.Browser = "browser", e.External = "external"
            }(O || (O = {})),
            function(e) {
                e.Public = "public", e.Private = "private"
            }(T || (T = {})),
            function(e) {
                e.Now = "now", e.Scheduled = "scheduled"
            }(V || (V = {})),
            function(e) {
                e.LiveTrading = "livetrading", e.Education = "education", e.Analysis = "analysis", e.OffTopic = "offtopic", e.Picked = "picked"
            }(S || (S = {})),
            function(e) {
                e.LiveTrading = "Live trading", e.Education = "Education", e.Analysis = "Analysis", e.OffTopic = "Off-topic"
            }(R || (R = {}));
            const y = new Map([
                [R.LiveTrading, o.t(null, void 0, n(620498))],
                [R.Education, o.t(null, void 0, n(432172))],
                [R.Analysis, o.t(null, void 0, n(968153))],
                [R.OffTopic, o.t(null, void 0, n(640514))]
            ]);
            var B, I;
            ! function(e) {
                e.Stream = "stream", e.List = "list", e.Settings = "settings"
            }(B || (B = {})),
            function(e) {
                e.YouTube = "youtube", e.Twitch = "twitch"
            }(I || (I = {}));
            const P = [{
                    content: o.t(null, void 0, n(620498)),
                    value: R.LiveTrading
                }, {
                    content: o.t(null, void 0, n(432172)),
                    value: R.Education
                }, {
                    content: o.t(null, void 0, n(968153)),
                    value: R.Analysis
                }, {
                    content: o.t(null, void 0, n(640514)),
                    value: R.OffTopic
                }],
                N = {
                    [E.Featured]: Z.Live,
                    [E.Recent]: Z.Ended,
                    [E.Upcoming]: Z.Scheduled,
                    [R.LiveTrading]: S.LiveTrading,
                    [R.Analysis]: S.Analysis,
                    [R.Education]: S.Education,
                    [R.OffTopic]: S.OffTopic
                },
                k = {
                    [Z.Live]: E.Featured,
                    [Z.Scheduled]: E.Upcoming,
                    [Z.Ended]: E.Recent
                };
            var L;
            ! function(e) {
                e.InternalServerError = "INTERNAL_SERVER_ERROR", e.MediaServerError = "MEDIA_SERVER_ERROR", e.RecorderError = "RECORDER_ERROR", e.ForbiddenError = "FORBIDDEN", e.UserInputError = "BAD_USER_INPUT", e.ValidationError = "GRAPHQL_VALIDATION_FAILED", e.AuthenticationError = "UNAUTHENTICATED", e.SyntaxError = "GRAPHQL_PARSE_FAILED", e.HostsMappingError = "HOSTS_MAPPING_ERROR", e.YoutubeError = "YOUTUBE_ERROR"
            }(L || (L = {}))
        },
        606353: (e, t, n) => {
            "use strict";
            n.d(t, {
                TagsProvider: () => i
            });
            var r = n(272001),
                o = n(890740);
            const s = (0, r.getLogger)("Tags.Provider");
            class i {
                getTagsInfo(e) {
                    return e ? (0, o.fetch)(`/tags/suggest/?search=${encodeURIComponent(e)}`, {
                        credentials: "omit"
                    }).then((e => e.json())).then((e => e.map((e => e.tag)))).catch((e => (s.logError(e), []))) : Promise.resolve([])
                }
            }
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
        962624: (e, t, n) => {
            "use strict";
            n.d(t, {
                hoverMouseEventFilter: () => r.hoverMouseEventFilter,
                useAccurateHover: () => r.useAccurateHover,
                useHover: () => r.useHover
            });
            var r = n(662464)
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
                    handler: l,
                    reference: a,
                    ownerDocument: c = document
                } = e, h = (0, r.useRef)(null), u = (0, r.useRef)(new CustomEvent("timestamp").timeStamp);
                return (0, r.useLayoutEffect)((() => {
                    const e = {
                            click: t,
                            mouseDown: n,
                            touchEnd: s,
                            touchStart: i
                        },
                        r = a ? a.current : h.current;
                    return (0, o.addOutsideEventListener)(u.current, r, l, c, e)
                }), [t, n, s, i, l]), a || h
            }
        },
        377318: (e, t, n) => {
            "use strict";
            n.d(t, {
                MenuContext: () => r
            });
            const r = n(50959).createContext(null)
        },
        175071: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_THEME: () => g,
                Menu: () => f
            });
            var r = n(50959),
                o = n(497754),
                s = n.n(o),
                i = n(650151),
                l = n(43329),
                a = n(587080),
                c = n(670797),
                h = n(224743),
                u = n(829725),
                d = n(799786),
                v = n(787684),
                p = n(377318),
                m = n(409790);
            const g = m;
            class f extends r.PureComponent {
                constructor(e) {
                    super(e), this._containerRef = null, this._scrollWrapRef = null, this._raf = null, this._scrollRaf = null,
                        this._scrollTimeout = void 0, this._manager = new u.OverlapManager, this._hotkeys = null, this._scroll = 0, this._handleContainerRef = e => {
                            this._containerRef = e, this.props.reference && ("function" == typeof this.props.reference && this.props.reference(e), "object" == typeof this.props.reference && (this.props.reference.current = e))
                        }, this._handleScrollWrapRef = e => {
                            this._scrollWrapRef = e, "function" == typeof this.props.scrollWrapReference && this.props.scrollWrapReference(e), "object" == typeof this.props.scrollWrapReference && (this.props.scrollWrapReference.current = e)
                        }, this._handleMeasure = ({
                            callback: e,
                            forceRecalcPosition: t
                        } = {}) => {
                            var n, r, o, s, a, c, h, u, d, v, p, m;
                            if (this.state.isMeasureValid && !t) return;
                            const {
                                position: g
                            } = this.props, f = (0, i.ensureNotNull)(this._containerRef);
                            let w = f.getBoundingClientRect();
                            const C = document.documentElement.clientHeight,
                                _ = document.documentElement.clientWidth,
                                x = null !== (n = this.props.closeOnScrollOutsideOffset) && void 0 !== n ? n : 0;
                            let b = C - 0 - x;
                            const E = w.height > b;
                            if (E) {
                                (0, i.ensureNotNull)(this._scrollWrapRef).style.overflowY = "scroll", w = f.getBoundingClientRect()
                            }
                            const {
                                width: M,
                                height: A
                            } = w, H = "function" == typeof g ? g(M, A, C) : g, Z = null !== (o = null === (r = null == H ? void 0 : H.indentFromWindow) || void 0 === r ? void 0 : r.left) && void 0 !== o ? o : 0, O = _ - (null !== (s = H.overrideWidth) && void 0 !== s ? s : M) - (null !== (c = null === (a = null == H ? void 0 : H.indentFromWindow) || void 0 === a ? void 0 : a.right) && void 0 !== c ? c : 0), T = (0, l.clamp)(H.x, Z, Math.max(Z, O)), V = (null !== (u = null === (h = null == H ? void 0 : H.indentFromWindow) || void 0 === h ? void 0 : h.top) && void 0 !== u ? u : 0) + x, S = C - (null !== (d = H.overrideHeight) && void 0 !== d ? d : A) - (null !== (p = null === (v = null == H ? void 0 : H.indentFromWindow) || void 0 === v ? void 0 : v.bottom) && void 0 !== p ? p : 0);
                            let R = (0, l.clamp)(H.y, V, Math.max(V, S));
                            if (H.forbidCorrectYCoord && R < H.y && (b -= H.y - R, R = H.y), t && void 0 !== this.props.closeOnScrollOutsideOffset && H.y <= this.props.closeOnScrollOutsideOffset) return void this._handleGlobalClose(!0);
                            const y = null !== (m = H.overrideHeight) && void 0 !== m ? m : E ? b : void 0;
                            this.setState({
                                appearingMenuHeight: t ? this.state.appearingMenuHeight : y,
                                appearingMenuWidth: t ? this.state.appearingMenuWidth : H.overrideWidth,
                                appearingPosition: {
                                    x: T,
                                    y: R
                                },
                                isMeasureValid: !0
                            }, (() => {
                                this._restoreScrollPosition(), e && e()
                            }))
                        }, this._restoreScrollPosition = () => {
                            const e = document.activeElement,
                                t = (0, i.ensureNotNull)(this._containerRef);
                            if (null !== e && t.contains(e)) try {
                                e.scrollIntoView()
                            } catch (e) {} else(0, i.ensureNotNull)(this._scrollWrapRef).scrollTop = this._scroll
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
                            this._scroll = (0, i.ensureNotNull)(this._scrollWrapRef).scrollTop
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
                        "aria-activedescendant": i,
                        "aria-hidden": l,
                        children: h,
                        minWidth: u,
                        theme: d = m,
                        className: g,
                        maxHeight: f,
                        onMouseOver: C,
                        onMouseOut: _,
                        onKeyDown: x,
                        onFocus: b,
                        onBlur: E
                    } = this.props, {
                        appearingMenuHeight: M,
                        appearingMenuWidth: A,
                        appearingPosition: H,
                        isMeasureValid: Z
                    } = this.state;
                    return r.createElement(p.MenuContext.Provider, {
                        value: this
                    }, r.createElement(v.SubmenuHandler, null, r.createElement(c.SlotContext.Provider, {
                        value: this._manager
                    }, r.createElement("div", {
                        id: e,
                        role: t,
                        "aria-label": n,
                        "aria-labelledby": o,
                        "aria-activedescendant": i,
                        "aria-hidden": l,
                        className: s()(g, d.menuWrap, !Z && d.isMeasuring),
                        style: {
                            height: M,
                            left: H && H.x,
                            minWidth: u,
                            position: "fixed",
                            top: H && H.y,
                            width: A
                        },
                        "data-name": this.props["data-name"],
                        ref: this._handleContainerRef,
                        onScrollCapture: this.props.onScroll,
                        onContextMenu: a.preventDefaultForContextMenu,
                        tabIndex: this.props.tabIndex,
                        onMouseOver: C,
                        onMouseOut: _,
                        onKeyDown: x,
                        onFocus: b,
                        onBlur: E
                    }, r.createElement("div", {
                        className: s()(d.scrollWrap, !this.props.noMomentumBasedScroll && d.momentumBased),
                        style: {
                            overflowY: void 0 !== M ? "scroll" : "auto",
                            maxHeight: f
                        },
                        onScrollCapture: this._handleScroll,
                        ref: this._handleScrollWrapRef
                    }, r.createElement(w, {
                        className: d.menuBox
                    }, h)))), r.createElement(c.Slot, {
                        reference: this._handleSlot
                    })))
                }
                update(e) {
                    e ? this._resizeForced() : this._resize()
                }
            }

            function w(e) {
                const t = (0, i.ensureNotNull)((0, r.useContext)(v.SubmenuContext)),
                    n = r.useRef(null);
                return r.createElement("div", {
                    ref: n,
                    className: e.className,
                    onMouseOver: function(e) {
                        if (!(null !== t.current && e.target instanceof Node && (r = e.target, null === (o = n.current) || void 0 === o ? void 0 : o.contains(r)))) return;
                        var r, o;
                        t.isSubmenuNode(e.target) || t.setCurrent(null)
                    },
                    "data-name": "menu-inner"
                }, e.children)
            }
            f.contextType = v.SubmenuContext
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
        634993: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
                PopupMenuItem: () => u
            });
            var r = n(50959),
                o = n(497754),
                s = n(224743),
                i = n(345848),
                l = n(8626),
                a = n(655498);
            const c = a;

            function h(e) {
                e.stopPropagation()
            }

            function u(e) {
                const {
                    id: t,
                    role: n,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": d,
                    className: v,
                    title: p,
                    labelRowClassName: m,
                    labelClassName: g,
                    shortcut: f,
                    forceShowShortcuts: w,
                    icon: C,
                    isActive: _,
                    isDisabled: x,
                    isHovered: b,
                    appearAsDisabled: E,
                    label: M,
                    link: A,
                    showToolboxOnHover: H,
                    target: Z,
                    rel: O,
                    toolbox: T,
                    reference: V,
                    onMouseOut: S,
                    onMouseOver: R,
                    onKeyDown: y,
                    suppressToolboxClick: B = !0,
                    theme: I = a,
                    tabIndex: P,
                    tagName: N,
                    renderComponent: k
                } = e, L = (0, l.filterDataProps)(e), U = (0, r.useRef)(null), D = (0, r.useMemo)((() => function(e) {
                    function t(t) {
                        const {
                            reference: n,
                            ...o
                        } = t, s = null != e ? e : o.href ? "a" : "div", i = "a" === s ? o : function(e) {
                            const {
                                download: t,
                                href: n,
                                hrefLang: r,
                                media: o,
                                ping: s,
                                rel: i,
                                target: l,
                                type: a,
                                referrerPolicy: c,
                                ...h
                            } = e;
                            return h
                        }(o);
                        return r.createElement(s, { ...i,
                            ref: n
                        })
                    }
                    return t.displayName = `DefaultComponent(${e})`, t
                }(N)), [N]), W = null != k ? k : D;
                return r.createElement(W, { ...L,
                    id: t,
                    role: n,
                    "aria-label": c,
                    "aria-selected": u,
                    "aria-checked": d,
                    className: o(v, I.item, C && I.withIcon, {
                        [I.isActive]: _,
                        [I.isDisabled]: x || E,
                        [I.hovered]: b
                    }),
                    title: p,
                    href: A,
                    target: Z,
                    rel: O,
                    reference: function(e) {
                        U.current = e, "function" == typeof V && V(e);
                        "object" == typeof V && (V.current = e)
                    },
                    onClick: function(t) {
                        const {
                            dontClosePopup: n,
                            onClick: r,
                            onClickArg: o,
                            trackEventObject: l
                        } = e;
                        if (x) return;
                        l && (0, i.trackEvent)(l.category, l.event, l.label);
                        r && r(o, t);
                        n || (0, s.globalCloseMenu)()
                    },
                    onContextMenu: function(t) {
                        const {
                            trackEventObject: n,
                            trackRightClick: r
                        } = e;
                        n && r && (0, i.trackEvent)(n.category, n.event, `${n.label}_rightClick`)
                    },
                    onMouseUp: function(t) {
                        const {
                            trackEventObject: n,
                            trackMouseWheelClick: r
                        } = e;
                        if (1 === t.button && A && n) {
                            let e = n.label;
                            r && (e += "_mouseWheelClick"), (0, i.trackEvent)(n.category, n.event, e)
                        }
                    },
                    onMouseOver: R,
                    onMouseOut: S,
                    onKeyDown: y,
                    tabIndex: P
                }, void 0 !== C && r.createElement("span", {
                    className: I.icon,
                    dangerouslySetInnerHTML: {
                        __html: C
                    }
                }), r.createElement("span", {
                    className: o(I.labelRow, m)
                }, r.createElement("span", {
                    className: o(I.label, g)
                }, M)), (void 0 !== f || w) && r.createElement("span", {
                    className: I.shortcut
                }, (G = f) && G.split("+").join(" + ")), void 0 !== T && r.createElement("span", {
                    onClick: B ? h : void 0,
                    className: o(I.toolbox, {
                        [I.showOnHover]: H
                    })
                }, T));
                var G
            }
        },
        320116: (e, t, n) => {
            "use strict";
            n.d(t, {
                CloseDelegateContext: () => s
            });
            var r = n(50959),
                o = n(224743);
            const s = r.createContext(o.globalCloseDelegate)
        },
        45968: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenu: () => h
            });
            var r = n(50959),
                o = n(500962),
                s = n(162942),
                i = n(707533),
                l = n(175071),
                a = n(320116),
                c = n(951292);

            function h(e) {
                const {
                    controller: t,
                    children: n,
                    isOpened: h,
                    closeOnClickOutside: u = !0,
                    doNotCloseOn: d,
                    onClickOutside: v,
                    onClose: p,
                    onKeyboardClose: m,
                    "data-name": g = "popup-menu-container",
                    ...f
                } = e, w = (0, r.useContext)(a.CloseDelegateContext), C = (0, c.useOutsideEvent)({
                    handler: function(e) {
                        v && v(e);
                        if (!u) return;
                        const t = (0, s.default)(d) ? d() : d;
                        if (t && e.target instanceof Node) {
                            const n = o.findDOMNode(t);
                            if (n instanceof Node && n.contains(e.target)) return
                        }
                        p()
                    },
                    mouseDown: !0,
                    touchStart: !0
                });
                return h ? r.createElement(i.Portal, {
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    pointerEvents: "none"
                }, r.createElement("span", {
                    ref: C,
                    style: {
                        pointerEvents: "auto"
                    }
                }, r.createElement(l.Menu, { ...f,
                    onClose: p,
                    onKeyboardClose: m,
                    onScroll: function(t) {
                        const {
                            onScroll: n
                        } = e;
                        n && n(t)
                    },
                    customCloseDelegate: w,
                    ref: t,
                    "data-name": g
                }, n))) : null
            }
        },
        707533: (e, t, n) => {
            "use strict";
            n.d(t, {
                Portal: () => a,
                PortalContext: () => c
            });
            var r = n(50959),
                o = n(500962),
                s = n(777491),
                i = n(829725),
                l = n(670797);
            class a extends r.PureComponent {
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
            a.contextType = l.SlotContext;
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
        787684: (e, t, n) => {
            "use strict";
            n.d(t, {
                SubmenuContext: () => o,
                SubmenuHandler: () => s
            });
            var r = n(50959);
            const o = r.createContext(null);

            function s(e) {
                const [t, n] = (0, r.useState)(null), s = (0, r.useRef)(null), i = (0, r.useRef)(new Map);
                return (0, r.useEffect)((() => () => {
                    null !== s.current && clearTimeout(s.current)
                }), []), r.createElement(o.Provider, {
                    value: {
                        current: t,
                        setCurrent: function(e) {
                            null !== s.current && (clearTimeout(s.current), s.current = null);
                            null === t ? n(e) : s.current = setTimeout((() => {
                                s.current = null, n(e)
                            }), 100)
                        },
                        registerSubmenu: function(e, t) {
                            return i.current.set(e, t), () => {
                                i.current.delete(e)
                            }
                        },
                        isSubmenuNode: function(e) {
                            return Array.from(i.current.values()).some((t => t(e)))
                        }
                    }
                }, e.children)
            }
        },
        907429: (e, t, n) => {
            "use strict";
            n.d(t, {
                icons: () => T
            });
            var r = n(841785),
                o = n(652100),
                s = n(232217),
                i = n(989959),
                l = n(112466),
                a = n(938926),
                c = n(259806),
                h = n(272279),
                u = n(135106),
                d = n(758180),
                v = n(710757),
                p = n(910997),
                m = n(687037),
                g = n(330273),
                f = n(49011),
                w = n(570309),
                C = n(502992),
                _ = n(244570),
                x = n(750633),
                b = n(663962),
                E = n(236421),
                M = n(978222),
                A = n(280088),
                H = n(44836),
                Z = n(114950),
                O = n(605018);
            const T = {
                s: r,
                "1-2": o,
                "1-3": s,
                "1-4": i,
                "2-1": l,
                "2-2": a,
                "2-3": c,
                "2h": h,
                "2v": u,
                "3h": d,
                "3r": v,
                "3s": p,
                "3v": m,
                4: g,
                "4h": f,
                "4s": b,
                "4v": E,
                "5s": M,
                "5h": w,
                "6h": C,
                "7h": _,
                "8h": x,
                6: A,
                "6c": H,
                8: Z,
                "8c": O
            }
        },
        465890: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
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
        608636: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>'
        }
    }
]);
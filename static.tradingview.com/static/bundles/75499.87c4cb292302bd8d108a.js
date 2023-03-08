(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [75499], {
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        258385: e => {
            e.exports = {
                "default-drawer-min-top-distance": "100px"
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
        144486: e => {
            e.exports = {
                emoji: "emoji-uB3D7z9N"
            }
        },
        133746: e => {
            e.exports = {
                list: "list-Sd3S32zT"
            }
        },
        659604: e => {
            e.exports = {
                wrapper: "wrapper-VM8LlHff"
            }
        },
        594464: e => {
            e.exports = {
                wrapper: "wrapper-QWFWOklX",
                emojiItem: "emojiItem-QWFWOklX"
            }
        },
        541887: e => {
            e.exports = {
                wrapper: "wrapper-rSoA6gh6",
                isActive: "isActive-rSoA6gh6"
            }
        },
        190055: e => {
            e.exports = {
                wrapper: "wrapper-Eql3Ds_R"
            }
        },
        326603: e => {
            e.exports = {
                wrapper: "wrapper-AiJtzpQ1"
            }
        },
        680952: e => {
            e.exports = {
                wrapper: "wrapper-VMJXvHWY"
            }
        },
        512222: e => {
            e.exports = {
                wrapper: "wrapper-yrezKVPX"
            }
        },
        267521: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFunctionalRefObject: () => s
            });
            var r = n(50959),
                o = n(774218);

            function s(e) {
                const t = (0, r.useMemo)((() => function(e) {
                        const t = n => {
                            e(n), t.current = n
                        };
                        return t.current = null, t
                    }((e => {
                        l.current(e)
                    }))), []),
                    n = (0, r.useRef)(null),
                    s = t => {
                        if (null === t) return a(n.current, t), void(n.current = null);
                        n.current !== e && (n.current = e, a(n.current, t))
                    },
                    l = (0, r.useRef)(s);
                return l.current = s, (0, o.useIsomorphicLayoutEffect)((() => {
                    if (null !== t.current) return l.current(t.current), () => l.current(null)
                }), [e]), t
            }

            function a(e, t) {
                null !== e && ("function" == typeof e ? e(t) : e.current = t)
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
        444530: (e, t, n) => {
            "use strict";
            n.d(t, {
                useResizeObserver: () => l
            });
            var r = n(50959),
                o = n(159255),
                s = n(774218),
                a = n(267521);

            function l(e, t = []) {
                const {
                    callback: n,
                    ref: l = null
                } = function(e) {
                    return "function" == typeof e ? {
                        callback: e
                    } : e
                }(e), i = (0, r.useRef)(null), c = (0, r.useRef)(n);
                c.current = n;
                const u = (0, a.useFunctionalRefObject)(l),
                    m = (0, r.useCallback)((e => {
                        u(e), null !== i.current && (i.current.disconnect(), null !== e && i.current.observe(e))
                    }), [u, i]);
                return (0, s.useIsomorphicLayoutEffect)((() => (i.current = new o.default(((e, t) => {
                    c.current(e, t)
                })), u.current && m(u.current), () => {
                    var e;
                    null === (e = i.current) || void 0 === e || e.disconnect()
                })), [u, ...t]), m
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
        332585: (e, t, n) => {
            "use strict";
            n.d(t, {
                DrawerManager: () => s,
                DrawerContext: () => a
            });
            var r = n(50959),
                o = n(575658);
            class s extends r.PureComponent {
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
                    return r.createElement(a.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const a = r.createContext(null)
        },
        762852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Drawer: () => h
            });
            var r = n(50959),
                o = n(650151),
                s = n(497754),
                a = n(777491),
                l = n(707533),
                i = n(332585),
                c = n(320116),
                u = n(150881),
                m = n(945966);

            function h(e) {
                const {
                    position: t = "Bottom",
                    onClose: n,
                    children: h,
                    className: v,
                    theme: x = m
                } = e, p = (0, o.ensureNotNull)((0, r.useContext)(i.DrawerContext)), [d] = (0, r.useState)((() => (0, a.randomHash)())), w = (0, r.useRef)(null), g = (0, r.useContext)(c.CloseDelegateContext);
                return (0, r.useLayoutEffect)((() => ((0, o.ensureNotNull)(w.current).focus({
                    preventScroll: !0
                }), g.subscribe(p, n), p.addDrawer(d), () => {
                    p.removeDrawer(d), g.unsubscribe(p, n)
                })), []), r.createElement(l.Portal, null, r.createElement("div", {
                    className: s(m.wrap, m[`position${t}`])
                }, d === p.currentDrawer && r.createElement("div", {
                    className: m.backdrop,
                    onClick: n
                }), r.createElement(u.TouchScrollContainer, {
                    className: s(m.drawer, x.drawer, m[`position${t}`], v),
                    tabIndex: -1,
                    ref: w,
                    "data-name": e["data-name"]
                }, h)))
            }
        },
        91160: (e, t, n) => {
            "use strict";
            n.d(t, {
                removeUnavailableEmoji: () => j,
                emojiGroups: () => I
            });
            var r = n(50959),
                o = n(777754),
                s = n(566818),
                a = n(537603),
                l = n(232386),
                i = n(301759),
                c = n(405474),
                u = n(192177),
                m = n(983137),
                h = n(686209),
                v = n(714082),
                x = n(93826);
            const p = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "👋", "🤚", "🖐", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦵", "🦿", "🦶", "👂", "🦻", "👃", "🧠", "🦷", "🦴", "👀", "👁", "👅", "👄", "💋", "🩸", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣", "👤", "👥", "👣"],
                d = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦟", "🦗", "🕷", "🕸", "🦂", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦧", "🐘", "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🐃", "🐂", "🐄", "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌", "🐕", "🐩", "🦮", "🐕‍🦺", "🐈", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", "🕊", "🐇", "🦝", "🦨", "🦡", "🦦", "🦥", "🐁", "🐀", "🐿", "🦔", "🐾", "🐉", "🐲", "🌵", "🎄", "🌲", "🌳", "🌴", "🌱", "🌿", "☘️", "🍀", "🎍", "🎋", "🍃", "🍂", "🍁", "🍄", "🐚", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🪐", "💫", "⭐️", "🌟", "✨", "⚡️", "☄️", "💥", "🔥", "🌪", "🌈", "☀️", "🌤", "⛅️", "🌥", "☁️", "🌦", "🌧", "⛈", "🌩", "🌨", "❄️", "☃️", "⛄️", "🌬", "💨", "💧", "💦", "☔️", "🌊", "🌫"],
                w = ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶", "🌽", "🥕", "🧄", "🧅", "🥔", "🍠", "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", "🧇", "🥓", "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🥙", "🧆", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "☕️", "🍵", "🧃", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🧉", "🍾", "🧊", "🥄", "🍴", "🍽", "🥣", "🥡", "🥢", "🧂"],
                g = ["⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🥅", "⛳️", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛷", "⛸", "🥌", "🎿", "⛷", "🏂", "🪂", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤸‍♀️", "🤸", "🤸‍♂️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🤺", "🤾", "🤾‍♂️", "🤾‍♀️", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏇", "🧘", "🧘‍♂️", "🧘‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖", "🏵", "🎗", "🎫", "🎟", "🎪", "🤹", "🤹‍♂️", "🤹‍♀️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🎲", "🎯", "🎳", "🎮", "🎰", "🧩"],
                F = ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🦯", "🦽", "🦼", "🛴", "🚲", "🛵", "🏍", "🛺", "🚨", "🚔", "🚍", "🚘", "🚖", "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", "🚂", "🚆", "🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩", "💺", "🛰", "🚀", "🛸", "🚁", "🛶", "⛵️", "🚤", "🛥", "🛳", "⛴", "🚢", "⚓️", "⛽️", "🚧", "🚦", "🚥", "🚏", "🗺", "🗿", "🗽", "🗼", "🏰", "🏯", "🏟", "🎡", "🎢", "🎠", "⛲️", "⛱", "🏖", "🏝", "🏜", "🌋", "⛰", "🏔", "🗻", "🏕", "⛺️", "🏠", "🏡", "🏘", "🏚", "🏗", "🏭", "🏢", "🏬", "🏣", "🏤", "🏥", "🏦", "🏨", "🏪", "🏫", "🏩", "💒", "🏛", "⛪️", "🕌", "🕍", "🛕", "🕋", "⛩", "🛤", "🛣", "🗾", "🎑", "🏞", "🌅", "🌄", "🌠", "🎇", "🎆", "🌇", "🌆", "🏙", "🌃", "🌌", "🌉", "🌁"],
                f = ["⌚️", "📱", "📲", "💻", "⌨️", "🖥", "🖨", "🖱", "🖲", "🕹", "🗜", "💽", "💾", "💿", "📀", "📼", "📷", "📸", "📹", "🎥", "📽", "🎞", "📞", "☎️", "📟", "📠", "📺", "📻", "🎙", "🎚", "🎛", "🧭", "⏱", "⏲", "⏰", "🕰", "⌛️", "⏳", "📡", "🔋", "🔌", "💡", "🔦", "🕯", "🪔", "🧯", "🛢", "💸", "💵", "💴", "💶", "💷", "💰", "💳", "💎", "⚖️", "🧰", "🔧", "🔨", "⚒", "🛠", "⛏", "🔩", "⚙️", "🧱", "⛓", "🧲", "🔫", "💣", "🧨", "🪓", "🔪", "🗡", "⚔️", "🛡", "🚬", "⚰️", "⚱️", "🏺", "🔮", "📿", "🧿", "💈", "⚗️", "🔭", "🔬", "🕳", "🩹", "🩺", "💊", "💉", "🧬", "🦠", "🧫", "🧪", "🌡", "🧹", "🧺", "🧻", "🚽", "🚰", "🚿", "🛁", "🛀", "🧼", "🪒", "🧽", "🧴", "🛎", "🔑", "🗝", "🚪", "🪑", "🛋", "🛏", "🛌", "🧸", "🖼", "🛍", "🛒", "🎁", "🎈", "🎏", "🎀", "🎊", "🎉", "🎎", "🏮", "🎐", "🧧", "✉️", "📩", "📨", "📧", "💌", "📥", "📤", "📦", "🏷", "📪", "📫", "📬", "📭", "📮", "📯", "📜", "📃", "📄", "📑", "🧾", "📊", "📈", "📉", "🗒", "🗓", "📆", "📅", "🗑", "📇", "🗃", "🗳", "🗄", "📋", "📁", "📂", "🗂", "🗞", "📰", "📓", "📔", "📒", "📕", "📗", "📘", "📙", "📚", "📖", "🔖", "🧷", "🔗", "📎", "🖇", "📐", "📏", "🧮", "📌", "📍", "✂️", "🖊", "🖋", "✒️", "🖌", "🖍", "📝", "✏️", "🔍", "🔎", "🔏", "🔐", "🔒", "🔓", "🧳", "🌂", "☂️", "🧵", "🧶", "👓", "🕶", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "💄", "💍", "💼"],
                C = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "🛐", "⛎", "♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚️", "🈸", "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕️", "🛑", "⛔️", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "🈯️", "💹", "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀", "💤", "🏧", "🚾", "♿️", "🅿️", "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🔣", "ℹ️", "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "#️⃣", "*️⃣", "⏏️", "▶️", "⏸", "⏯", "⏹", "⏺", "⏭", "⏮", "⏩", "⏪", "⏫", "⏬", "◀️", "🔼", "🔽", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖", "➗", "✖️", "♾", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚", "🔙", "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫️", "⚪️", "🟤", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️", "◾️", "◽️", "◼️", "◻️", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛️", "⬜️", "🟫", "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁‍🗨", "💬", "💭", "🗯", "♠️", "♣️", "♥️", "♦️", "🃏", "🎴", "🀄️", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧"],
                b = ["🏳️", "🏴", "🏁", "🚩", "🏳️‍🌈", "🏴‍☠️", "🇦🇫", "🇦🇽", "🇦🇱", "🇩🇿", "🇦🇸", "🇦🇩", "🇦🇴", "🇦🇮", "🇦🇶", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺", "🇨🇼", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇪🇹", "🇪🇺", "🇫🇰", "🇫🇴", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇮", "🇬🇷", "🇬🇱", "🇬🇩", "🇬🇵", "🇬🇺", "🇬🇹", "🇬🇬", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇰", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇲", "🇮🇱", "🇮🇹", "🇯🇲", "🇯🇵", "🎌", "🇯🇪", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇽🇰", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇴", "🇲🇰", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇶", "🇲🇷", "🇲🇺", "🇾🇹", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇸", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇨", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇳🇺", "🇳🇫", "🇰🇵", "🇲🇵", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇸", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇳", "🇵🇱", "🇵🇹", "🇵🇷", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇼🇸", "🇸🇲", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇽", "🇸🇰", "🇸🇮", "🇬🇸", "🇸🇧", "🇸🇴", "🇿🇦", "🇰🇷", "🇸🇸", "🇪🇸", "🇱🇰", "🇧🇱", "🇸🇭", "🇰🇳", "🇱🇨", "🇵🇲", "🇻🇨", "🇸🇩", "🇸🇷", "🇸🇿", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇼", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇰", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇨", "🇹🇻", "🇻🇮", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇼🇫", "🇪🇭", "🇾🇪", "🇿🇲", "🇿🇼"],
                z = [...p, ...d, ...w, ...g, ...F, ...f, ...C, ...b],
                E = new Set(z);

            function j(e) {
                return e.filter((e => E.has(e)))
            }
            const I = [{
                title: o.t(null, {
                    context: "emoji_group"
                }, n(415426)),
                emojis: [],
                content: r.createElement(s.IconItem, {
                    icon: a
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(396330)),
                emojis: p,
                content: r.createElement(s.IconItem, {
                    icon: l
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(360558)),
                emojis: d,
                content: r.createElement(s.IconItem, {
                    icon: i
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(935305)),
                emojis: w,
                content: r.createElement(s.IconItem, {
                    icon: c
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(414232)),
                emojis: g,
                content: r.createElement(s.IconItem, {
                    icon: u
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(715395)),
                emojis: F,
                content: r.createElement(s.IconItem, {
                    icon: m
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(572302)),
                emojis: f,
                content: r.createElement(s.IconItem, {
                    icon: h
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(906878)),
                emojis: C,
                content: r.createElement(s.IconItem, {
                    icon: v
                })
            }, {
                title: o.t(null, {
                    context: "emoji_group"
                }, n(149546)),
                emojis: b,
                content: r.createElement(s.IconItem, {
                    icon: x
                })
            }]
        },
        295687: (e, t, n) => {
            "use strict";
            n.d(t, {
                EmojiList: () => C
            });
            var r = n(50959),
                o = n(497754),
                s = n.n(o),
                a = n(324997),
                l = n(524141),
                i = n(130979),
                c = n(326603);

            function u(e) {
                const {
                    title: t
                } = e;
                return r.createElement("div", {
                    className: c.wrapper
                }, t)
            }
            var m = n(665948),
                h = n(594464);
            const v = r.memo((e => {
                const {
                    emojis: t,
                    itemSize: n,
                    onEmojiClick: o,
                    ItemComponent: s
                } = e;
                return r.createElement("div", {
                    className: h.wrapper
                }, t.map((e => r.createElement(m.EmojiWrap, {
                    key: e,
                    className: h.emojiItem,
                    emoji: e,
                    size: n,
                    onClick: o,
                    ItemComponent: s
                }))))
            }));
            var x = n(891130),
                p = n(133746);
            const d = r.createContext(null);

            function w(e) {
                const {
                    listRef: t,
                    outerRef: n,
                    emojiGroups: o,
                    emojiSize: s,
                    onSelect: a,
                    onContentRendered: l,
                    ItemComponent: c,
                    height: u
                } = e;
                (0, r.useEffect)((() => {
                    var e;
                    return null === (e = t.current) || void 0 === e ? void 0 : e.resetAfterIndex(0, !0)
                }), [o]);
                const m = (0, r.useCallback)((e => "title" === o[e].type ? 30 : 38), [o]),
                    h = (0, r.useCallback)((({
                        visibleStartIndex: e
                    }) => {
                        const {
                            relatedTitle: t
                        } = o[e];
                        l(t)
                    }), [o, l]),
                    v = Math.min(u - 102, window.innerHeight - 102);
                return r.createElement(d.Provider, {
                    value: (0, r.useMemo)((() => ({
                        size: s,
                        onSelect: a,
                        ItemComponent: c
                    })), [s, a, c])
                }, r.createElement(i.VariableSizeList, {
                    className: p.list,
                    ref: t,
                    outerRef: n,
                    width: "100%",
                    height: v,
                    itemData: o,
                    itemCount: o.length,
                    children: g,
                    onItemsRendered: h,
                    itemSize: m
                }))
            }
            const g = r.memo((e => {
                const {
                    style: t,
                    index: n,
                    data: o
                } = e, s = o[n], {
                    size: a,
                    onSelect: l,
                    ItemComponent: i
                } = (0, x.useEnsuredContext)(d);
                return "title" === s.type ? r.createElement("div", {
                    style: t
                }, r.createElement(u, {
                    title: s.relatedTitle
                })) : r.createElement("div", {
                    style: t
                }, r.createElement(v, {
                    emojis: s.content,
                    itemSize: a,
                    onEmojiClick: l,
                    ItemComponent: i
                }))
            }));
            var F = n(638456),
                f = n(659604);

            function C(e) {
                var t;
                const {
                    className: n,
                    emojis: o,
                    onSelect: i,
                    ItemComponent: c,
                    height: u,
                    category: m
                } = e, h = (0, r.useRef)(null), v = (0, r.useRef)(null), x = (0, r.useRef)(!1), [p, d] = (0, r.useState)(0), g = (0, r.useMemo)((() => function(e, t) {
                    if (0 === t) return [];
                    const n = [];
                    return e.forEach((({
                        title: e,
                        emojis: r
                    }) => {
                        n.push({
                            type: "title",
                            relatedTitle: e,
                            content: [e]
                        });
                        let o = [];
                        for (const s of r) o.length < t ? o.push(s) : (n.push({
                            type: "emojiRow",
                            relatedTitle: e,
                            content: o
                        }), o = [s]);
                        o.length && n.push({
                            type: "emojiRow",
                            relatedTitle: e,
                            content: o
                        })
                    })), n
                }(o, p)), [o, p]), C = (0, a.useResizeObserver)((function(e) {
                    const [t] = e, {
                        width: n
                    } = t.contentRect, r = Math.floor((n - 12) / 38);
                    d(r)
                }));
                (0, r.useEffect)((() => {
                    g.length && j(0)
                }), [m]);
                const [b, z] = (0, r.useState)((null === (t = g[0]) || void 0 === t ? void 0 : t.relatedTitle) || ""), E = (0, r.useCallback)((e => {
                    x.current || z(e)
                }), []);
                return r.createElement("div", {
                    className: s()(f.wrapper, n)
                }, r.createElement(l.GroupTabs, {
                    tabs: o,
                    activeTab: b,
                    onTabClick: function(e) {
                        z(e);
                        j(function(e) {
                            return g.findIndex((({
                                relatedTitle: t,
                                type: n
                            }) => "title" === n && t === e))
                        }(e))
                    }
                }), r.createElement("div", {
                    ref: C
                }, r.createElement(w, {
                    listRef: h,
                    outerRef: v,
                    emojiGroups: g,
                    emojiSize: 38,
                    onSelect: i,
                    onContentRendered: E,
                    ItemComponent: c,
                    height: u
                })));

                function j(e) {
                    var t;
                    F.CheckMobile.iOS() && v.current && (v.current.style.overflow = "hidden"), x.current = !0, null === (t = h.current) || void 0 === t || t.scrollToItem(e, "start"), requestAnimationFrame((() => {
                        var t;
                        null === (t = h.current) || void 0 === t || t.scrollToItem(e, "start"), F.CheckMobile.iOS() && v.current && (v.current.style.overflow = "auto"), x.current = !1
                    }))
                }
            }
        },
        524141: (e, t, n) => {
            "use strict";
            n.d(t, {
                GroupTabs: () => c
            });
            var r = n(50959),
                o = n(497754),
                s = n.n(o),
                a = n(541887);

            function l(e) {
                const {
                    tab: t,
                    isActive: n,
                    onTabClick: o,
                    content: l,
                    className: i
                } = e;
                return r.createElement("div", {
                    className: s()(a.wrapper, n && a.isActive, i),
                    onClick: function() {
                        o(t)
                    }
                }, l)
            }
            var i = n(190055);

            function c(e) {
                const {
                    activeTab: t,
                    tabs: n,
                    onTabClick: o,
                    className: a,
                    tabClassName: c
                } = e;
                return r.createElement("div", {
                    className: s()(i.wrapper, a)
                }, n.map((({
                    title: e,
                    content: n
                }) => r.createElement(l, {
                    key: e,
                    tab: e,
                    className: c,
                    content: n,
                    isActive: t === e,
                    onTabClick: o
                }))))
            }
        },
        566818: (e, t, n) => {
            "use strict";
            n.d(t, {
                IconItem: () => a
            });
            var r = n(50959),
                o = n(83436),
                s = n(680952);

            function a(e) {
                return r.createElement("div", {
                    className: s.wrapper
                }, r.createElement(o.Icon, {
                    icon: e.icon
                }))
            }
        },
        665948: (e, t, n) => {
            "use strict";
            n.d(t, {
                EmojiWrap: () => m
            });
            var r = n(50959),
                o = n(497754),
                s = n.n(o),
                a = n(356361),
                l = n(144486);

            function i(e) {
                const {
                    emoji: t
                } = e, n = (0, a.getTwemojiUrl)(t, "png");
                return r.createElement("img", {
                    className: l.emoji,
                    src: n,
                    decoding: "async",
                    width: "24",
                    height: "24",
                    alt: "",
                    draggable: !1,
                    onContextMenu: function(e) {
                        e.preventDefault()
                    }
                })
            }
            var c = n(512222);
            const u = 34;

            function m(e) {
                const {
                    className: t,
                    emoji: n,
                    size: o = u,
                    onClick: a,
                    ItemComponent: l = i
                } = e;
                return r.createElement("div", {
                    className: s()(c.wrapper, t),
                    style: {
                        width: o,
                        height: o
                    },
                    onClick: function() {
                        a(n)
                    }
                }, r.createElement(l, {
                    emoji: n
                }))
            }
        },
        891130: (e, t, n) => {
            "use strict";
            n.d(t, {
                useEnsuredContext: () => s
            });
            var r = n(50959),
                o = n(650151);

            function s(e) {
                return (0, o.ensureNotNull)((0, r.useContext)(e))
            }
        },
        324997: (e, t, n) => {
            "use strict";
            n.d(t, {
                useResizeObserver: () => r.useResizeObserver
            });
            var r = n(444530)
        },
        633102: (e, t, n) => {
            "use strict";
            n.d(t, {
                useWatchedValue: () => o
            });
            var r = n(50959);
            const o = e => {
                const [t, n] = (0, r.useState)(e.value());
                return (0, r.useEffect)((() => {
                    const t = e => n(e);
                    return e.subscribe(t), () => e.unsubscribe(t)
                }), [e]), [t, t => e.setValue(t)]
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
        150881: (e, t, n) => {
            "use strict";
            n.d(t, {
                TouchScrollContainer: () => l
            });
            var r = n(50959),
                o = n(259142),
                s = n(650151),
                a = n(638456);
            const l = (0, r.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...s
                } = e, l = (0, r.useRef)(null);
                return (0, r.useImperativeHandle)(t, (() => l.current)), (0, r.useLayoutEffect)((() => {
                    if (a.CheckMobile.iOS()) return null !== l.current && (0, o.disableBodyScroll)(l.current, {
                        allowTouchMove: i(l)
                    }), () => {
                        null !== l.current && (0, o.enableBodyScroll)(l.current)
                    }
                }), []), r.createElement("div", {
                    ref: l,
                    ...s
                }, n)
            }));

            function i(e) {
                return t => {
                    const n = (0, s.ensureNotNull)(e.current),
                        r = document.activeElement;
                    return !n.contains(t) || null !== r && n.contains(r) && r.contains(t)
                }
            }
        },
        985923: e => {
            e.exports = {
                item: "item-h_TLrUbG",
                hovered: "hovered-h_TLrUbG"
            }
        },
        81779: e => {
            e.exports = {
                desktopSize: "desktopSize-TlKkLixs",
                smallSize: "smallSize-TlKkLixs",
                tabs: "tabs-TlKkLixs",
                categories: "categories-TlKkLixs"
            }
        },
        708044: e => {
            e.exports = {
                wrapper: "wrapper-wawooJAf"
            }
        },
        946609: e => {
            e.exports = {
                iconContainer: "iconContainer-vjoWR_Zn"
            }
        },
        907899: (e, t, n) => {
            "use strict";
            n.d(t, {
                categoryIconsMap: () => I,
                iconGroups: () => j,
                iconTabs: () => y,
                removeUnavailableCharCodes: () => E
            });
            var r = n(50959),
                o = n(777754),
                s = n(566818),
                a = n(708044);

            function l(e) {
                return r.createElement("div", {
                    className: a.wrapper
                }, e.text)
            }
            var i = n(602492),
                c = n(151609),
                u = n(922976),
                m = n(670616),
                h = n(918042),
                v = n(44986),
                x = n(683778),
                p = n(548748);
            const d = ["0xF087", "0xF088", "0xF164", "0xF165", "0xF0A4", "0xF0A5", "0xF007", "0xF0A6", "0xF0A7", "0xF118", "0xF11A", "0xF119", "0xF183"],
                w = ["0xF153", "0xF154", "0xF155", "0xF156", "0xF157", "0xF158", "0xF159", "0xF195", "0xF15A"],
                g = ["0xF060", "0xF061", "0xF062", "0xF063", "0xF053", "0xF054", "0xF077", "0xF078", "0xF07D", "0xF07E", "0xF0A9", "0xF0AA", "0xF0AB", "0xF0D9", "0xF0DA", "0xF0D7", "0xF0D8", "0xF102", "0xF103", "0xF104", "0xF105", "0xF106", "0xF107", "0xF137", "0xF139", "0xF13A", "0xF112", "0xF064", "0xF148", "0xF149", "0xF177", "0xF178", "0xF175", "0xF176", "0xF01A", "0xF01B", "0xF065", "0xF066"],
                F = ["0xF11D", "0xF11E", "0xF024", "0xF004", "0xF005", "0xF006", "0xF046", "0xF00C", "0xF00D", "0xF011", "0xF012", "0xF021", "0xF01E", "0xF192", "0xF041", "0xF14A", "0xF055", "0xF056", "0xF057", "0xF059", "0xF058", "0xF05A", "0xF05B", "0xF05C", "0xF05D", "0xF05E", "0xF067", "0xF068", "0xF069", "0xF06A", "0xF071", "0xF06E", "0xF070", "0xF075", "0xF08A", "0xF0A3", "0xF0E5", "0xF110", "0xF111", "0xF123", "0xF124", "0xF10C", "0xF128", "0xF129", "0xF12A", "0xF140", "0xF113", "0xF17C", "0xF179"],
                f = ["0xF06C", "0xF185", "0xF186", "0xF188", "0xF0E7"],
                C = ["0xF000", "0xF002", "0xF00E", "0xF015", "0xF017", "0xF030", "0xF013", "0xF043", "0xF06B", "0xF072", "0xF076", "0xF080", "0xF084", "0xF040", "0xF0A1", "0xF0A2", "0xF0D6", "0xF0E3", "0xF0EB", "0xF0F3", "0xF135", "0xF13D", "0xF2FE"],
                b = [...d, ...w, ...g, ...F, ...f, ...C].map((e => +e)),
                z = new Set(b);

            function E(e) {
                return e.filter((e => z.has(e)))
            }
            const j = [{
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(415426)),
                    emojis: [],
                    content: r.createElement(s.IconItem, {
                        icon: v
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(433628)),
                    emojis: d,
                    content: r.createElement(s.IconItem, {
                        icon: x
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(877011)),
                    emojis: F,
                    content: r.createElement(s.IconItem, {
                        icon: m
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(111739)),
                    emojis: f,
                    content: r.createElement(s.IconItem, {
                        icon: p
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(814281)),
                    emojis: w,
                    content: r.createElement(s.IconItem, {
                        icon: u
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(572302)),
                    emojis: C,
                    content: r.createElement(s.IconItem, {
                        icon: h
                    })
                }, {
                    title: o.t(null, {
                        context: "emoji_group"
                    }, n(157792)),
                    emojis: g,
                    content: r.createElement(s.IconItem, {
                        icon: c
                    })
                }],
                I = {
                    icons: i.drawingToolsIcons.heart,
                    emojis: i.drawingToolsIcons.smile
                },
                y = [{
                    title: "icons",
                    content: r.createElement(l, {
                        text: o.t(null, void 0, n(792464))
                    })
                }, {
                    title: "emojis",
                    content: r.createElement(l, {
                        text: o.t(null, void 0, n(719570))
                    })
                }]
        },
        689754: (e, t, n) => {
            "use strict";
            n.d(t, {
                IconsContent: () => v
            });
            var r = n(497754),
                o = n(50959),
                s = n(907899),
                a = n(224743),
                l = n(849049),
                i = n(295687),
                c = n(524141),
                u = n(291256),
                m = n(633102),
                h = n(81779);

            function v(e) {
                const {
                    isSmallTablet: t,
                    maxHeight: n
                } = e, [v, p] = (0, m.useWatchedValue)(l.activeCategory), d = u.TABS_DEFINITIONS[v], {
                    service: w,
                    ItemComponent: g,
                    onEmojiSelect: F
                } = d, [f, C] = (0, o.useState)(x(d));
                return (0, o.useLayoutEffect)((() => {
                    const e = {},
                        t = () => {
                            const e = x(d);
                            C(e)
                        };
                    return t(), w.getOnChange().subscribe(e, t), () => {
                        w.getOnChange().unsubscribeAll(e)
                    }
                }), [d]), o.createElement("div", {
                    style: {
                        maxHeight: n
                    }
                }, o.createElement(i.EmojiList, {
                    className: r(h.desktopSize, t && h.smallSize),
                    emojis: f,
                    onSelect: function(e) {
                        F(e), (0, a.globalCloseMenu)()
                    },
                    ItemComponent: g,
                    height: n,
                    category: v
                }), o.createElement(c.GroupTabs, {
                    className: h.tabs,
                    tabClassName: h.categories,
                    tabs: s.iconTabs,
                    activeTab: v,
                    onTabClick: function(e) {
                        p(e)
                    }
                }))
            }

            function x(e) {
                const {
                    icons: t,
                    service: n
                } = e, r = [...t], o = n.get();
                return r[0].emojis = o.map((e => String(e))), r.filter((e => e.emojis.length))
            }
        },
        849049: (e, t, n) => {
            "use strict";
            n.d(t, {
                activeCategory: () => o
            });
            var r = n(988411);
            const o = new(n.n(r)())("icons")
        },
        291256: (e, t, n) => {
            "use strict";
            n.d(t, {
                TABS_DEFINITIONS: () => g
            });
            var r = n(907899),
                o = n(2741),
                s = n(62802),
                a = n(226722),
                l = n(480071);
            class i extends o.CommonJsonStoreService {
                constructor(e, t, n, r) {
                    super(a.TVXWindowEvents, s, e, t, []), this._onChangeDrawingState = () => {
                        const e = l[this._drawingType].value();
                        this._promote(e)
                    }, this._sanitizer = n, this._drawingType = r, l[this._drawingType].subscribe(this._onChangeDrawingState)
                }
                destroy() {
                    l[this._drawingType].unsubscribe(this._onChangeDrawingState), super.destroy()
                }
                _deserialize(e) {
                    const t = this._sanitizer(e);
                    return this._removeUnavailableRecents(e, t)
                }
                _removeUnavailableRecents(e, t) {
                    return Array.isArray(e) ? e.length > 18 && (t = e.slice(0, 18)) : t = [], t
                }
                _promote(e) {
                    let t = [...this.get()];
                    const n = t.indexOf(e); - 1 !== n && t.splice(n, 1), t = [e, ...t.slice(0, 17)], this.set(t)
                }
            }
            const c = new i("RECENT_ICONS_CHANGED", "linetoolicon.recenticons", r.removeUnavailableCharCodes, "iconTool");
            var u = n(50959),
                m = n(83436),
                h = n(946609);

            function v(e) {
                const {
                    fallback: t,
                    ...n
                } = e;
                return u.createElement(u.Suspense, {
                    fallback: null != t ? t : null
                }, u.createElement(x, { ...n
                }))
            }
            const x = u.lazy((async () => {
                const {
                    getSvgContentForCharCode: e
                } = await n.e(27987).then(n.bind(n, 397859));
                return {
                    default: t => {
                        var n;
                        const {
                            charCode: r
                        } = t, o = null !== (n = e(r)) && void 0 !== n ? n : void 0;
                        return u.createElement(m.Icon, {
                            icon: o,
                            className: h.iconContainer
                        })
                    }
                }
            }));
            var p = n(985923);
            var d = n(91160);
            const w = new i("RECENT_EMOJIS_CHANGED", "linetoolemoji.recents", d.removeUnavailableEmoji, "emojiTool"),
                g = {
                    icons: {
                        service: c,
                        toolName: "LineToolIcon",
                        ItemComponent: function(e) {
                            const {
                                emoji: t
                            } = e;
                            return u.createElement("div", {
                                className: p.item
                            }, u.createElement(v, {
                                charCode: Number(t)
                            }))
                        },
                        icons: r.iconGroups,
                        onEmojiSelect: e => {
                            l.iconTool.setValue(Number(e)), l.tool.setValue("LineToolIcon")
                        }
                    },
                    emojis: {
                        service: w,
                        toolName: "LineToolEmoji",
                        icons: d.emojiGroups,
                        onEmojiSelect: e => {
                            l.emojiTool.setValue(e), l.tool.setValue("LineToolEmoji")
                        }
                    }
                }
        },
        151609: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.31 14.5a1.07 1.07 0 0 1 0-1.5L13 4.3c.42-.41 1.1-.41 1.52 0l.99 1c.42.42.41 1.11-.02 1.53l-5.38 5.12h12.83c.6 0 1.07.48 1.07 1.07v1.43c0 .6-.48 1.07-1.07 1.07H10.1l5.38 5.13c.44.41.45 1.1.02 1.53l-1 .99c-.41.42-1.1.42-1.5 0L4.3 14.5Zm7.97 9.38-8.67-8.67c-.81-.8-.82-2.12 0-2.93l8.68-8.67c.8-.81 2.12-.82 2.92 0l1 .99c.82.82.8 2.16-.04 2.96l-3.57 3.4h10.33c1.14 0 2.07.93 2.07 2.07v1.43c0 1.15-.93 2.07-2.07 2.07H12.6l3.57 3.4c.84.8.86 2.14.03 2.97l-.99.99c-.8.8-2.12.8-2.93 0Z"/></svg>'
        },
        922976: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.87 4.52a.5.5 0 0 1 .61.35L6.91 10h5.47l1.03-4.67c.14-.63 1.04-.63 1.18 0L15.62 10h5.47l1.43-5.13a.5.5 0 0 1 .96.26L22.13 10H25a.5.5 0 0 1 0 1h-3.15l-.83 3H25a.5.5 0 0 1 0 1h-4.26l-2.15 7.75c-.17.6-1.03.58-1.16-.03L15.7 15h-3.42l-1.72 7.72c-.13.6-1 .63-1.16.03L7.26 15H3a.5.5 0 1 1 0-1h3.98l-.83-3H3a.5.5 0 1 1 0-1h2.87L4.52 5.13a.5.5 0 0 1 .35-.61ZM7.19 11l.83 3h3.47l.66-3H7.2Zm5.99 0-.67 3h2.98l-.67-3h-1.64Zm1.42-1L14 7.3l-.6 2.7h1.2Zm1.25 1 .66 3h3.47l.83-3h-4.96Zm3.85 4h-2.97l1.32 5.94L19.7 15Zm-8.43 0H8.3l1.65 5.94L11.27 15Z"/></svg>'
        },
        670616: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>'
        },
        548748: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14.08 3.73c.1.16.1.37 0 .54a9.4 9.4 0 0 0 3.35 13.26 9.9 9.9 0 0 0 6.49 1.18.5.5 0 0 1 .5.76 10.67 10.67 0 0 1-3.83 3.64 10.91 10.91 0 0 1-14.28-3.3A10.44 10.44 0 0 1 8.69 5.56a10.86 10.86 0 0 1 4.9-2.06.5.5 0 0 1 .49.22Zm8.3 15.61v.5c-1.91 0-3.8-.5-5.45-1.44a10.64 10.64 0 0 1-3.95-3.97 10.4 10.4 0 0 1-.3-9.72 9.6 9.6 0 0 0-6.37 5.39 9.39 9.39 0 0 0 .83 9.14 9.7 9.7 0 0 0 3.6 3.17 9.92 9.92 0 0 0 12.21-2.59c-.19.02-.38.02-.57.02v-.5Z"/></svg>'
        },
        918042: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M6 11.69C6 7.46 9.56 4 14 4c4.44 0 8 3.46 8 7.69 0 2.63-1.2 4.93-3.25 6.31H14.5v-5H18v-1h-8v1h3.5v5H9.14A8.06 8.06 0 0 1 6 11.69Zm2 6.67a9.1 9.1 0 0 1-3-6.67C5 6.87 9.05 3 14 3s9 3.87 9 8.69a8.51 8.51 0 0 1-3 6.62V22h-2v3h-8v-3H8v-3.64ZM11 22v2h6v-2h-6Zm-2-1v-2h10v2H9Z"/></svg>'
        },
        44986: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM14 16V9h1v6h4v1h-5Z"/></svg>'
        },
        683778: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5ZM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5ZM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-6 4-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17Z"/></svg>'
        },
        192177: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.98 6.02L14.5 6c2.18 0 4.16.8 5.66 2.14l-5.66 5.65-2.31-2.3a8.43 8.43 0 0 0 1.55-3.64 14.01 14.01 0 0 0 .24-1.83zm-1.01.12a8.45 8.45 0 0 0-4.13 2l2.64 2.63a7.59 7.59 0 0 0 1.28-3.12c.12-.59.18-1.12.2-1.51zm-4.83 2.7a8.45 8.45 0 0 0-2 4.13c.39-.03.92-.1 1.51-.21a7.59 7.59 0 0 0 3.12-1.28L8.14 8.84zm-2.12 5.14a8.48 8.48 0 0 0 2.12 6.18l5.65-5.66-2.3-2.31a8.43 8.43 0 0 1-3.64 1.55 14.03 14.03 0 0 1-1.83.24zm2.82 6.88a8.46 8.46 0 0 0 5.13 2.12v-.07A8.95 8.95 0 0 1 16.3 17l-1.8-1.8-5.66 5.65zM14.97 23c2-.1 3.8-.9 5.19-2.13L17 17.72a7.94 7.94 0 0 0-2.04 5.27zm5.9-2.83a8.46 8.46 0 0 0 2.11-5.13h-.02a10.62 10.62 0 0 0-5.2 2l3.1 3.13zm2.12-6.13c-.1-2-.9-3.8-2.13-5.19l-5.65 5.66 1.83 1.83a11.6 11.6 0 0 1 5.95-2.3zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5z"/></svg>'
        },
        301759: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.54 3.2l.78-.59 5.49 4.5 1.43 1.07a5.28 5.28 0 0 1 2.19-2.3 9.19 9.19 0 0 1 1.88-.85h.04l.01-.01.14.48.42-.28v.01l.01.02a3.14 3.14 0 0 1 .16.26l.37.72c.2.45.4 1.02.5 1.64a2.13 2.13 0 0 1 1.89.46l.18.16.03.02.18.16c.22.16.42.27.81.25a5.9 5.9 0 0 0 2.2-.86l.66-.36.09.75a5.98 5.98 0 0 1-1.7 5.1 6.87 6.87 0 0 1-1.7 1.23 19.97 19.97 0 0 1 .48 2.48c.25 1.73.42 4.08.06 6.5A1.46 1.46 0 0 1 19.68 25h-7.71a1.5 1.5 0 0 1-1.4-2.06l1-2.47c-.18.02-.37.03-.58.03a3 3 0 0 1-1.53-.4 6.84 6.84 0 0 1-1.6.64c-1.08.27-2.55.29-3.72-.89a4.06 4.06 0 0 1-.96-3 5.1 5.1 0 0 1 2-3.74 98.5 98.5 0 0 0 2.7-2.24L4.55 3.2zM16.5 5.5l-.14-.48.35-.1.2.3-.41.28zm-7.87 6.06a57.48 57.48 0 0 1-2.19 1.82l.49.26c.65.37 1.48.9 1.97 1.56a5.78 5.78 0 0 1 1.14 4.07l.06.03c.19.1.49.2.9.2.68 0 .95-.11 1.03-.16v-.03l.97.19h-.5.5v.03a.75.75 0 0 1-.01.1.74.74 0 0 1-.09.21l-1.39 3.47a.5.5 0 0 0 .47.69h7.71c.24 0 .43-.17.47-.38a22 22 0 0 0-.06-6.22 24.4 24.4 0 0 0-.56-2.71 11.35 11.35 0 0 0-.94-1.52 7.1 7.1 0 0 0-2.31-2.22l-.62-.31.49-.5A3.03 3.03 0 0 0 17 8.6a1.2 1.2 0 0 0 .01-.1c0-.65-.22-1.33-.46-1.86-.1-.21-.18-.4-.26-.54a8.07 8.07 0 0 0-1.34.64c-.9.54-1.74 1.32-1.95 2.36v.03l-.02.03L12.5 9l.47.16v.02a2.97 2.97 0 0 1-.1.26 5.9 5.9 0 0 1-.31.62c-.27.46-.7 1.07-1.34 1.39-.63.31-1.38.3-1.9.23a5.83 5.83 0 0 1-.7-.12zm3.26-2.39L10.2 7.9l-.02-.01L6.3 4.7l2.57 5.88h.01c.14.04.34.08.57.11.47.06.97.05 1.34-.14.36-.18.68-.57.91-.99.08-.14.15-.27.2-.39zm8.32 4.68a5.47 5.47 0 0 0 1.37-1.02 4.88 4.88 0 0 0 1.46-3.53c-.8.39-1.41.58-1.92.61-.7.05-1.14-.18-1.49-.45a5.6 5.6 0 0 1-.22-.19l-.03-.03-.17-.13a1.4 1.4 0 0 0-.33-.22c-.18-.07-.44-.12-.93 0l-.1.4c-.1.3-.28.69-.58 1.09.87.59 1.6 1.46 2.14 2.2a14.92 14.92 0 0 1 .8 1.27zM9.05 19.19v-.09a4.78 4.78 0 0 0-.96-3.3 5.56 5.56 0 0 0-1.65-1.29c-.3-.17-.6-.3-.8-.4l-.05-.03a4.05 4.05 0 0 0-1.4 2.82 3.1 3.1 0 0 0 .66 2.25c.83.82 1.86.84 2.78.62a5.71 5.71 0 0 0 1.42-.58zm4.26-5.87c-.3.24-.74.54-1.18.66-.37.1-.81.1-1.12.08a6.95 6.95 0 0 1-.54-.06h-.05l.08-.5.08-.5.03.01a5.02 5.02 0 0 0 1.26 0c.24-.06.54-.25.83-.47a6.1 6.1 0 0 0 .42-.37l.02-.02.36.35.35.36h-.01l-.03.04a6.09 6.09 0 0 1-.5.42zM6 17h1v-1H6v1z"/></svg>'
        },
        93826: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>'
        },
        405474: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.5 8h1.36l-.85-3.38.98-.24.9 3.62h7.64a1.34 1.34 0 0 1 .2.02c.13.02.31.07.5.16.18.09.38.24.53.46.15.24.24.52.24.86 0 .34-.09.62-.24.86a1.38 1.38 0 0 1-.79.56L22 24.54l-.03.46H6.5c-1 0-1.64-.68-1.99-1.23a4.4 4.4 0 0 1-.38-.78l-.01-.04c-.1-.03-.22-.07-.34-.13a1.36 1.36 0 0 1-.54-.46A1.51 1.51 0 0 1 3 21.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46.1-.05.2-.09.28-.11a6.6 6.6 0 0 1 .96-2.34C5.92 16.35 7.56 15 10.5 15c.72 0 1.36.08 1.93.22l-.4-4.3a1.38 1.38 0 0 1-.8-.57A1.51 1.51 0 0 1 11 9.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46a1.73 1.73 0 0 1 .7-.18h.02v.5V8zm.96 7.57a5.73 5.73 0 0 1 2.52 2.16 6.86 6.86 0 0 1 .95 2.34 1.38 1.38 0 0 1 .82.58c.16.23.25.51.25.85 0 .34-.09.62-.24.86-.15.22-.35.37-.54.46-.12.06-.24.1-.34.13l-.01.04a4.4 4.4 0 0 1-.54 1.01h4.7l.93-13h-8.91l.41 4.57zM14.5 9h8a.73.73 0 0 1 .28.07c.06.04.11.08.15.13.03.05.07.14.07.3 0 .16-.04.25-.07.3a.38.38 0 0 1-.15.13.73.73 0 0 1-.27.07H12.5a.73.73 0 0 1-.28-.07.38.38 0 0 1-.15-.13.52.52 0 0 1-.07-.3c0-.16.04-.25.07-.3.04-.05.09-.1.15-.13A.73.73 0 0 1 12.5 9h2.01zm1.4 11a5.8 5.8 0 0 0-.76-1.73C14.41 17.15 13.06 16 10.5 16c-2.56 0-3.91 1.15-4.64 2.27A5.86 5.86 0 0 0 5.1 20h10.78zM4.5 21a.72.72 0 0 0-.28.07.38.38 0 0 0-.15.13.52.52 0 0 0-.07.3c0 .16.04.25.07.3.04.05.09.1.15.13a.73.73 0 0 0 .27.07H16.5a.72.72 0 0 0 .28-.07.38.38 0 0 0 .15-.13.52.52 0 0 0 .07-.3.52.52 0 0 0-.07-.3.38.38 0 0 0-.15-.13.73.73 0 0 0-.27-.07H4.5zm.73 2l.13.23c.28.45.65.77 1.14.77h8c.5 0 .86-.32 1.14-.77.05-.07.1-.15.13-.23H5.23zM11 17v1h-1v-1h1zm-3 1h1v1H8v-1zm4 1v-1h1v1h-1z"/></svg>'
        },
        686209: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M9.5 21H9h.5zm8 0H17h.5zm-6-10H11v1h.5v-1zm4 1h.5v-1h-.5v1zm2 7.5h.5-.5zm.29-1.59A7.97 7.97 0 0 0 21 11.5h-1a6.97 6.97 0 0 1-2.79 5.59l.58.82zM21 11.5A7.5 7.5 0 0 0 13.5 4v1a6.5 6.5 0 0 1 6.5 6.5h1zM13.5 4A7.5 7.5 0 0 0 6 11.5h1A6.5 6.5 0 0 1 13.5 5V4zM6 11.5a7.98 7.98 0 0 0 3.21 6.41l.57-.82A6.98 6.98 0 0 1 7 11.5H6zM9 21a1 1 0 0 0 1 1v-1H9zm8 1a1 1 0 0 0 1-1h-1v1zm-6-.5V23h1v-1.5h-1zm0 1.5a1 1 0 0 0 1 1v-1h-1zm1 1h3v-1h-3v1zm3 0a1 1 0 0 0 1-1h-1v1zm1-1v-1.5h-1V23h1zm-3-11.5v6h1v-6h-1zM9.5 20h8v-1h-8v1zM9 17.5v2h1v-2H9zm0 2V21h1v-1.5H9zm9 1.5v-1.5h-1V21h1zm0-1.5v-2h-1v2h1zM9.5 18h4v-1h-4v1zm4 0h4v-1h-4v1zm-2-6h2v-1h-2v1zm2 0h2v-1h-2v1zM10 22h1.5v-1H10v1zm1.5 0h4v-1h-4v1zm4 0H17v-1h-1.5v1z"/></svg>'
        },
        537603: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM14 16V9h1v6h4v1h-5z"/></svg>'
        },
        232386: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 4l-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17z"/></svg>'
        },
        714082: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5.6 15.43A6.19 6.19 0 0 1 14 6.36a6.19 6.19 0 0 1 8.4 9.08l-.03.02-7.3 7.31a1.5 1.5 0 0 1-2.13 0l-7.3-7.3-.03-.03m.71-.7v-.01a5.19 5.19 0 0 1 7.33-7.34v.01c.2.2.51.19.7 0a5.19 5.19 0 0 1 7.34 7.33l-.03.02-7.3 7.31a.5.5 0 0 1-.71 0l-7.3-7.3-.03-.02z"/></svg>'
        },
        983137: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M22.87 6.44c.09-.78-.53-1.4-1.3-1.31-1.43.15-3.43.48-5.42 1.2a11.8 11.8 0 0 0-5.23 3.44L9.86 11.9l6.24 6.24 2.13-1.06a11.8 11.8 0 0 0 3.44-5.23c.72-1.99 1.05-4 1.2-5.41zm-4.93 11.9l-1.72.86-.04.02h-.04l-2.2.67v.01a19.68 19.68 0 0 0-.13 3.33c.01.14.08.22.17.26.08.04.2.05.32-.03a18.83 18.83 0 0 0 2.79-2.26 8.18 8.18 0 0 0 .44-1.1c.16-.51.33-1.12.41-1.76zm-.44 3.16l.35.35-.01.02-.05.05a16.85 16.85 0 0 1-.83.76c-.54.47-1.3 1.08-2.1 1.61a1.3 1.3 0 0 1-2.05-.98 16.46 16.46 0 0 1 .09-3.08l-.16.05a1.5 1.5 0 0 1-1.53-.36l-3.13-3.13c-.4-.4-.54-1-.36-1.53l.05-.16-.36.04c-.7.06-1.62.11-2.54.06a1.3 1.3 0 0 1-1.13-.8c-.18-.42-.13-.94.17-1.35a87.55 87.55 0 0 1 2.15-2.8l.04-.04v-.02l.4.31-.22-.45.03-.01a5.93 5.93 0 0 1 .34-.16c.23-.1.55-.22.94-.35A9.77 9.77 0 0 1 10.26 9a12.9 12.9 0 0 1 5.55-3.61c2.09-.76 4.18-1.1 5.65-1.26 1.41-.15 2.56 1 2.4 2.41a24.04 24.04 0 0 1-1.25 5.65A12.9 12.9 0 0 1 19 17.74a9.77 9.77 0 0 1-.88 3.61 9.18 9.18 0 0 1-.16.34v.03h-.01l-.45-.22zm0 0l.45.22-.04.08-.06.05-.35-.35zm-11-11l-.4-.31.08-.09.1-.05.22.45zm3.16-.44a9.61 9.61 0 0 0-2.84.84l-.13.16a109.83 109.83 0 0 0-1.97 2.58.4.4 0 0 0-.06.38c.04.1.12.17.27.18a16.05 16.05 0 0 0 3.18-.15l.66-2.2.01-.03.02-.04.86-1.72zm5.4 8.45l-5.57-5.56-.51 1.7-.31.92a.5.5 0 0 0 .12.51l3.13 3.13a.5.5 0 0 0 .5.12l.92-.3h.02l1.7-.52zm-10.91.64l2-2 .7.7-2 2-.7-.7zm0 4l4-4 .7.7-4 4-.7-.7zm4 0l2-2 .7.7-2 2-.7-.7zM16 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>'
        }
    }
]);
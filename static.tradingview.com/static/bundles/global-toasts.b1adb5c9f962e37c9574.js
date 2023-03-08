"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [94291], {
        56537: (e, t, n) => {
            n.d(t, {
                useForceUpdate: () => s
            });
            var i = n(50959);
            const s = () => {
                const [, e] = (0, i.useReducer)((e => e + 1), 0);
                return e
            }
        },
        829725: (e, t, n) => {
            n.d(t, {
                OverlapManager: () => r,
                getRootOverlapManager: () => a
            });
            var i = n(650151);
            class s {
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
                    this._storage = new s, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
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
            const o = new WeakMap;

            function a(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, i.ensureDefined)(o.get(t)); {
                    const t = new r(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return o.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        707533: (e, t, n) => {
            n.d(t, {
                Portal: () => d,
                PortalContext: () => h
            });
            var i = n(50959),
                s = n(500962),
                r = n(777491),
                o = n(829725),
                a = n(670797);
            class d extends i.PureComponent {
                constructor() {
                    super(...arguments), this._uuid = (0, r.guid)()
                }
                componentWillUnmount() {
                    this._manager().removeWindow(this._uuid)
                }
                render() {
                    const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                    return e.style.top = this.props.top || "", e.style.bottom = this.props.bottom || "", e.style.left = this.props.left || "", e.style.right = this.props.right || "", e.style.pointerEvents = this.props.pointerEvents || "", s.createPortal(i.createElement(h.Provider, {
                        value: this
                    }, this.props.children), e)
                }
                moveToTop() {
                    this._manager().moveToTop(this._uuid)
                }
                _manager() {
                    return null === this.context ? (0, o.getRootOverlapManager)() : this.context
                }
            }
            d.contextType = a.SlotContext;
            const h = i.createContext(null)
        },
        670797: (e, t, n) => {
            n.d(t, {
                Slot: () => s,
                SlotContext: () => r
            });
            var i = n(50959);
            class s extends i.Component {
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
        586240: e => {
            e.exports = JSON.parse('{"size-header-height":"64px","size-sticky-symbol-header-height":"64px","media-tablet":"screen and (max-width: 1019px)","media-phone":"screen and (max-width: 767px)","media-phone-vertical":"screen and (max-width: 479px)","media-extreme-thin":"screen and (max-width: 329px)","media-mf-legacy-phone":"screen and (min-width: 480px)","media-mf-legacy-notebook":"screen and (min-width: 1020px)","media-mf-phone-vertical":"screen and (min-width: 320px)","media-mf-phone-landscape":"screen and (min-width: 568px)","media-mf-tablet-vertical":"screen and (min-width: 768px)","media-mf-tablet-landscape":"screen and (min-width: 1024px)","media-mf-laptop":"screen and (min-width: 1280px)","media-mf-desktop-medium":"screen and (min-width: 1440px)","media-mf-desktop-large":"screen and (min-width: 1920px)","media-mf-desktop-extra-large":"screen and (min-width: 2560px)","z-index-sticky-search-bar":101}')
        }
    }
]);
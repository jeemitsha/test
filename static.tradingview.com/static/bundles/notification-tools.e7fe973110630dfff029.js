"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [9968], {
        715005: (e, s, t) => {
            t.r(s), t.d(s, {
                StreamNotificationTools: () => l
            });
            var a = t(779665),
                n = t(869403),
                h = t.n(n);
            const r = "tvlive.streams.general";
            let i = null;
            class l {
                constructor(e) {
                    return this._streamChange = new(h()), this._globalStreamsChange = new(h()), this._pushStreamChannel = null, this._onMessage = e => {
                        this._streamChange.fire(e)
                    }, this._onGlobalStreamChange = e => {
                        this._globalStreamsChange.fire(e)
                    }, i || (i = this, this.connect(e), i)
                }
                streamChange() {
                    return this._streamChange
                }
                globalStreamsChange() {
                    return this._globalStreamsChange
                }
                destroy() {
                    this._unsubscribe(), i = null
                }
                connect(e) {
                    this._unsubscribe(), e && (this._pushStreamChannel = `tvlive.streams.${e}`), this._subscribe()
                }
                _subscribe() {
                    this._pushStreamChannel && a.pushStreamMultiplexer.on(this._pushStreamChannel, this._onMessage), a.pushStreamMultiplexer.on(r, this._onGlobalStreamChange)
                }
                _unsubscribe() {
                    this._pushStreamChannel && a.pushStreamMultiplexer.off(this._pushStreamChannel), a.pushStreamMultiplexer.off(r)
                }
            }
        }
    }
]);
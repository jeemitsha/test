"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14436], {
        231326: (i, e, t) => {
            t.r(e), t.d(e, {
                GdprNotification: () => a
            });
            var o = t(890740),
                s = t(226722);
            const c = "acceptPolicy";
            class a {
                constructor() {
                    this._dialog = null, this._promise = null, this._showDialog = i => {
                        this._dialog || (this._dialog = i, i.on("action:accept", this._onAccept), i.open())
                    }, this._closeDialog = () => {
                        this._dialog && (this._dialog.close(), this._dialog = null)
                    }, this._onAccept = () => {
                        (0, o.fetch)("/accept_policy/", {
                            credentials: "include",
                            method: "POST"
                        }).then(this._onSuccess, this._closeDialog)
                    }, this._onSuccess = () => {
                        this._closeDialog(), s.TVXWindowEvents.emit(c)
                    }, this._subscribe()
                }
                showIfNotAccepted() {
                    const i = window.user,
                        e = window.is_authenticated,
                        t = "/privacy-policy/" !== window.location.pathname,
                        o = new Date(2018, 4, 17),
                        s = (i.date_joined ? new Date(i.date_joined) : new Date) < o && !i.is_policy_accepted;
                    e && t && s && this._loadDialog().then(this._showDialog)
                }
                _loadDialog() {
                    return this._promise || (this._promise = Promise.all([t.e(36037), t.e(43082), t.e(36956), t.e(4100), t.e(50251), t.e(85783), t.e(25977), t.e(71450), t.e(39694), t.e(43817)]).then(t.bind(t, 60738)).then((({
                        createGdprNotificationDialog: i
                    }) => i()))), this._promise
                }
                _subscribe() {
                    window.loginStateChange.subscribe(this, this.showIfNotAccepted), s.TVXWindowEvents.on(c, this._closeDialog)
                }
            }
        }
    }
]);
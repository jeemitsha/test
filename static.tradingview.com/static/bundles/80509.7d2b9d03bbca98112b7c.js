(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [80509, 79685, 79928], {
        259142: function(e, t) {
            var n, i, a;
            i = [t], n = function(e) {
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
                    var i = {
                        get passive() {
                            n = !0
                        }
                    };
                    window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
                }
                var a = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
                    o = [],
                    r = !1,
                    s = -1,
                    l = void 0,
                    c = void 0,
                    d = function(e) {
                        return o.some((function(t) {
                            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                        }))
                    },
                    u = function(e) {
                        var t = e || window.event;
                        return !!d(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(), !1)
                    },
                    h = function() {
                        setTimeout((function() {
                            void 0 !== c && (document.body.style.paddingRight = c, c = void 0), void 0 !== l && (document.body.style.overflow = l, l = void 0)
                        }))
                    };
                e.disableBodyScroll = function(e, i) {
                    if (a) {
                        if (!e) return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        if (e && !o.some((function(t) {
                                return t.targetElement === e
                            }))) {
                            var h = {
                                targetElement: e,
                                options: i || {}
                            };
                            o = [].concat(t(o), [h]), e.ontouchstart = function(e) {
                                1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                            }, e.ontouchmove = function(t) {
                                var n, i, a, o;
                                1 === t.targetTouches.length && (i = e, o = (n = t).targetTouches[0].clientY - s, !d(n.target) && (i && 0 === i.scrollTop && 0 < o || (a = i) && a.scrollHeight - a.scrollTop <= a.clientHeight && o < 0 ? u(n) : n.stopPropagation()))
                            }, r || (document.addEventListener("touchmove", u, n ? {
                                passive: !1
                            } : void 0), r = !0)
                        }
                    } else {
                        v = i, setTimeout((function() {
                            if (void 0 === c) {
                                var e = !!v && !0 === v.reserveScrollBarGap,
                                    t = window.innerWidth - document.documentElement.clientWidth;
                                e && 0 < t && (c = document.body.style.paddingRight, document.body.style.paddingRight = t + "px")
                            }
                            void 0 === l && (l = document.body.style.overflow, document.body.style.overflow = "hidden")
                        }));
                        var m = {
                            targetElement: e,
                            options: i || {}
                        };
                        o = [].concat(t(o), [m])
                    }
                    var v
                }, e.clearAllBodyScrollLocks = function() {
                    a ? (o.forEach((function(e) {
                        e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
                    })), r && (document.removeEventListener("touchmove", u, n ? {
                        passive: !1
                    } : void 0), r = !1), o = [], s = -1) : (h(), o = [])
                }, e.enableBodyScroll = function(e) {
                    if (a) {
                        if (!e) return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        e.ontouchstart = null, e.ontouchmove = null, o = o.filter((function(t) {
                            return t.targetElement !== e
                        })), r && 0 === o.length && (document.removeEventListener("touchmove", u, n ? {
                            passive: !1
                        } : void 0), r = !1)
                    } else 1 === o.length && o[0].targetElement === e ? (h(), o = []) : o = o.filter((function(t) {
                        return t.targetElement !== e
                    }))
                }
            }, void 0 === (a = "function" == typeof n ? n.apply(t, i) : n) || (e.exports = a)
        },
        862139: function() {
            ! function(e) {
                if (!e.fetch) {
                    var t = "URLSearchParams" in e,
                        n = "Symbol" in e && "iterator" in Symbol,
                        i = "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        a = "FormData" in e,
                        o = "ArrayBuffer" in e;
                    if (o) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        s = function(e) {
                            return e && DataView.prototype.isPrototypeOf(e)
                        },
                        l = ArrayBuffer.isView || function(e) {
                            return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                        };
                    v.prototype.append = function(e, t) {
                        e = u(e), t = h(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + "," + t : t
                    }, v.prototype.delete = function(e) {
                        delete this.map[u(e)]
                    }, v.prototype.get = function(e) {
                        return e = u(e), this.has(e) ? this.map[e] : null
                    }, v.prototype.has = function(e) {
                        return this.map.hasOwnProperty(u(e))
                    }, v.prototype.set = function(e, t) {
                        this.map[u(e)] = h(t)
                    }, v.prototype.forEach = function(e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, v.prototype.keys = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push(n)
                        })), m(e)
                    }, v.prototype.values = function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t)
                        })), m(e)
                    }, v.prototype.entries = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push([n, t])
                        })), m(e)
                    }, n && (v.prototype[Symbol.iterator] = v.prototype.entries);
                    var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    y.prototype.clone = function() {
                        return new y(this, {
                            body: this._bodyInit
                        })
                    }, f.call(y.prototype), f.call(_.prototype), _.prototype.clone = function() {
                        return new _(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new v(this.headers),
                            url: this.url
                        })
                    }, _.error = function() {
                        var e = new _(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var d = [301, 302, 303, 307, 308];
                    _.redirect = function(e, t) {
                        if (-1 === d.indexOf(t)) throw new RangeError("Invalid status code");
                        return new _(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, e.Headers = v, e.Request = y, e.Response = _, e.fetch = function(e, t) {
                        return new Promise((function(n, a) {
                            var o = new y(e, t),
                                r = new XMLHttpRequest;
                            r.onload = function() {
                                var e, t, i = {
                                    status: r.status,
                                    statusText: r.statusText,
                                    headers: (e = r.getAllResponseHeaders() || "", t = new v, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                                        var n = e.split(":"),
                                            i = n.shift().trim();
                                        if (i) {
                                            var a = n.join(":").trim();
                                            t.append(i, a)
                                        }
                                    })), t)
                                };
                                i.url = "responseURL" in r ? r.responseURL : i.headers.get("X-Request-URL");
                                var a = "response" in r ? r.response : r.responseText;
                                n(new _(a, i))
                            }, r.onerror = function() {
                                a(new TypeError("Network request failed"))
                            }, r.ontimeout = function() {
                                a(new TypeError("Network request failed"))
                            }, r.open(o.method, o.url, !0), "include" === o.credentials ? r.withCredentials = !0 : "omit" === o.credentials && (r.withCredentials = !1), "responseType" in r && i && (r.responseType = "blob"), o.headers.forEach((function(e, t) {
                                r.setRequestHeader(t, e)
                            })), r.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        }))
                    }, e.fetch.polyfill = !0
                }

                function u(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function h(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function m(e) {
                    var t = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return n && (t[Symbol.iterator] = function() {
                        return t
                    }), t
                }

                function v(e) {
                    this.map = {}, e instanceof v ? e.forEach((function(e, t) {
                        this.append(t, e)
                    }), this) : Array.isArray(e) ? e.forEach((function(e) {
                        this.append(e[0], e[1])
                    }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                        this.append(t, e[t])
                    }), this)
                }

                function p(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function g(e) {
                    return new Promise((function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            n(e.error)
                        }
                    }))
                }

                function S(e) {
                    var t = new FileReader,
                        n = g(t);
                    return t.readAsArrayBuffer(e), n
                }

                function b(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function f() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e)
                            if ("string" == typeof e) this._bodyText = e;
                            else if (i && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (a && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                        else if (o && i && s(e)) this._bodyArrayBuffer = b(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!o || !ArrayBuffer.prototype.isPrototypeOf(e) && !l(e)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = b(e)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, i && (this.blob = function() {
                        var e = p(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(S)
                    }), this.text = function() {
                        var e, t, n, i = p(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = g(t), t.readAsText(e), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++) n[i] = String.fromCharCode(t[i]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a && (this.formData = function() {
                        return this.text().then(w)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }

                function y(e, t) {
                    var n, i, a = (t = t || {}).body;
                    if (e instanceof y) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new v(e.headers)), this.method = e.method, this.mode = e.mode, a || null == e._bodyInit || (a = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new v(t.headers)), this.method = (n = t.method || this.method || "GET", i = n.toUpperCase(), c.indexOf(i) > -1 ? i : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && a) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(a)
                }

                function w(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach((function(e) {
                        if (e) {
                            var n = e.split("="),
                                i = n.shift().replace(/\+/g, " "),
                                a = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(a))
                        }
                    })), t
                }

                function _(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new v(t.headers), this.url = t.url || "", this._initBody(e)
                }
            }("undefined" != typeof self ? self : this)
        },
        479928: function(e, t, n) {
            "use strict";
            var i = this && this.__assign || Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                },
                a = this && this.__awaiter || function(e, t, n, i) {
                    return new(n || (n = Promise))((function(a, o) {
                        function r(e) {
                            try {
                                l(i.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                l(i.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(e) {
                            e.done ? a(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(r, s)
                        }
                        l((i = i.apply(e, t || [])).next())
                    }))
                },
                o = this && this.__generator || function(e, t) {
                    var n, i, a, o, r = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; r;) try {
                                    if (n = 1, i && (a = i[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(a = a.call(i, o[1])).done) return a;
                                    switch (i = 0, a && (o = [0, a.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            a = o;
                                            break;
                                        case 4:
                                            return r.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            r.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = r.ops.pop(), r.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = r.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                r = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                                r.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && r.label < a[1]) {
                                                r.label = a[1], a = o;
                                                break
                                            }
                                            if (a && r.label < a[2]) {
                                                r.label = a[2], r.ops.push(o);
                                                break
                                            }
                                            a[2] && r.ops.pop(), r.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e], i = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                },
                r = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && (n[i[a]] = e[i[a]])
                    }
                    return n
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = n(28570),
                l = n(28570);
            t.ClientError = l.ClientError, n(862139);
            var c = function() {
                function e(e, t) {
                    this.url = e, this.options = t || {}
                }
                return e.prototype.rawRequest = function(e, t) {
                    return a(this, void 0, void 0, (function() {
                        var n, a, l, c, d, h, m, v, p;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = this.options,
                                        a = n.headers, l = r(n, ["headers"]), c = JSON.stringify({
                                            query: e,
                                            variables: t || void 0
                                        }), [4, fetch(this.url, i({
                                            method: "POST",
                                            headers: Object.assign({
                                                "Content-Type": "application/json"
                                            }, a),
                                            body: c
                                        }, l))];
                                case 1:
                                    return [4, u(d = o.sent())];
                                case 2:
                                    if (h = o.sent(), d.ok && !h.errors && h.data) return m = d.headers, v = d.status, [2, i({}, h, {
                                        headers: m,
                                        status: v
                                    })];
                                    throw p = "string" == typeof h ? {
                                        error: h
                                    } : h, new s.ClientError(i({}, p, {
                                        status: d.status,
                                        headers: d.headers
                                    }), {
                                        query: e,
                                        variables: t
                                    })
                            }
                        }))
                    }))
                }, e.prototype.request = function(e, t) {
                    return a(this, void 0, void 0, (function() {
                        var n, a, l, c, d, h, m;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = this.options, a = n.headers, l = r(n, ["headers"]), c = JSON.stringify({
                                        query: e,
                                        variables: t || void 0
                                    }), [4, fetch(this.url, i({
                                        method: "POST",
                                        headers: Object.assign({
                                            "Content-Type": "application/json"
                                        }, a),
                                        body: c
                                    }, l))];
                                case 1:
                                    return [4, u(d = o.sent())];
                                case 2:
                                    if (h = o.sent(), d.ok && !h.errors && h.data) return [2, h.data];
                                    throw m = "string" == typeof h ? {
                                        error: h
                                    } : h, new s.ClientError(i({}, m, {
                                        status: d.status
                                    }), {
                                        query: e,
                                        variables: t
                                    })
                            }
                        }))
                    }))
                }, e.prototype.setHeaders = function(e) {
                    return this.options.headers = e, this
                }, e.prototype.setHeader = function(e, t) {
                    var n, i = this.options.headers;
                    return i ? i[e] = t : this.options.headers = ((n = {})[e] = t, n), this
                }, e
            }();

            function d(e, t, n) {
                return a(this, void 0, void 0, (function() {
                    return o(this, (function(i) {
                        return [2, new c(e).request(t, n)]
                    }))
                }))
            }

            function u(e) {
                return a(this, void 0, void 0, (function() {
                    var t;
                    return o(this, (function(n) {
                        return (t = e.headers.get("Content-Type")) && t.startsWith("application/json") ? [2, e.json()] : [2, e.text()]
                    }))
                }))
            }
            t.GraphQLClient = c, t.rawRequest = function(e, t, n) {
                return a(this, void 0, void 0, (function() {
                    return o(this, (function(i) {
                        return [2, new c(e).rawRequest(t, n)]
                    }))
                }))
            }, t.request = d, t.default = d
        },
        28570: function(e, t) {
            "use strict";
            var n, i = this && this.__extends || (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                },
                function(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                });
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e) {
                function t(n, i) {
                    var a = this,
                        o = t.extractMessage(n) + ": " + JSON.stringify({
                            response: n,
                            request: i
                        });
                    return (a = e.call(this, o) || this).response = n, a.request = i, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
                }
                return i(t, e), t.extractMessage = function(e) {
                    try {
                        return e.errors[0].message
                    } catch (t) {
                        return "GraphQL Error (Code: " + e.status + ")"
                    }
                }, t
            }(Error);
            t.ClientError = a
        },
        961228: e => {
            e.exports = {
                body: "body-PkVsoG0q"
            }
        },
        685535: e => {
            e.exports = {
                header: "header-L3BebqJ1",
                close: "close-L3BebqJ1"
            }
        },
        566340: e => {
            e.exports = {
                message: "message-GTDWHWgI",
                error: "error-GTDWHWgI"
            }
        },
        164993: e => {
            e.exports = {
                progress: "progress-kU7yvbPr",
                bar: "bar-kU7yvbPr"
            }
        },
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
        682335: e => {
            e.exports = {
                switcher: "switcher-Wv0rGnT8",
                "thumb-wrapper": "thumb-wrapper-Wv0rGnT8",
                "size-small": "size-small-Wv0rGnT8",
                "size-medium": "size-medium-Wv0rGnT8",
                "size-large": "size-large-Wv0rGnT8",
                input: "input-Wv0rGnT8",
                "intent-default": "intent-default-Wv0rGnT8",
                "disable-active-state-styles": "disable-active-state-styles-Wv0rGnT8",
                "intent-select": "intent-select-Wv0rGnT8",
                track: "track-Wv0rGnT8",
                thumb: "thumb-Wv0rGnT8"
            }
        },
        645469: e => {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 430px)"
            }
        },
        372087: e => {
            e.exports = {
                footer: "footer-w4vEml4d"
            }
        },
        300698: e => {
            e.exports = {
                badgeIndicator: "badgeIndicator-JWXEF_bx",
                "type-beta": "type-beta-JWXEF_bx",
                "type-new": "type-new-JWXEF_bx",
                "type-updated": "type-updated-JWXEF_bx",
                "type-ep": "type-ep-JWXEF_bx"
            }
        },
        531428: e => {
            e.exports = {}
        },
        982730: e => {
            e.exports = {}
        },
        17885: e => {
            e.exports = {
                footer: "footer-KnygFiHk"
            }
        },
        450170: e => {
            e.exports = {
                wrap: "wrap-Uxy01IQ6",
                container: "container-Uxy01IQ6",
                backdrop: "backdrop-Uxy01IQ6",
                modal: "modal-Uxy01IQ6",
                dialog: "dialog-Uxy01IQ6"
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
        164429: e => {
            e.exports = {
                favorite: "favorite-TPXOIXOJ",
                disabled: "disabled-TPXOIXOJ",
                active: "active-TPXOIXOJ",
                checked: "checked-TPXOIXOJ"
            }
        },
        267158: e => {
            e.exports = {
                item: "item-pso1R1PY",
                label: "label-pso1R1PY",
                labelRow: "labelRow-pso1R1PY",
                toolbox: "toolbox-pso1R1PY"
            }
        },
        545829: e => {
            e.exports = {
                separator: "separator-w5iW5vBm",
                small: "small-w5iW5vBm",
                normal: "normal-w5iW5vBm",
                large: "large-w5iW5vBm"
            }
        },
        308794: e => {
            e.exports = {
                button: "button-cC4UjNEF",
                disabled: "disabled-cC4UjNEF",
                active: "active-cC4UjNEF",
                hidden: "hidden-cC4UjNEF"
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
        774465: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorBadge: () => m,
                Badge: () => h,
                BadgeSize: () => r.BadgeSize
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(105573),
                s = n(629084),
                l = n.n(s);

            function c(e) {
                const {
                    size: t = r.BadgeSize.Medium,
                    className: n
                } = e;
                return o()(l().badge, t && l()[`size-${t}`], n)
            }

            function d(e) {
                return o()(c(e), l().anchor)
            }

            function u(e) {
                const {
                    children: t,
                    contentClassName: n
                } = e;
                return i.createElement("span", {
                    className: o()(l().content, n)
                }, t)
            }

            function h(e) {
                const {
                    size: t,
                    children: n,
                    className: a,
                    contentClassName: o,
                    ...r
                } = e;
                return i.createElement("span", { ...r,
                    className: c({
                        size: t,
                        className: a
                    })
                }, i.createElement(u, {
                    contentClassName: o
                }, n))
            }

            function m(e) {
                const {
                    size: t,
                    children: n,
                    className: a,
                    contentClassName: o,
                    ...r
                } = e;
                return i.createElement("a", { ...r,
                    className: d({
                        size: t,
                        className: a
                    })
                }, i.createElement(u, {
                    contentClassName: o
                }, n))
            }
        },
        105573: (e, t, n) => {
            "use strict";
            var i;
            n.d(t, {
                    BadgeSize: () => i
                }),
                function(e) {
                    e.XSmall = "xsmall", e.Small = "small", e.Medium = "medium", e.Large = "large", e.XLarge = "xlarge"
                }(i || (i = {}))
        },
        728804: (e, t, n) => {
            "use strict";
            n.d(t, {
                CustomBehaviourContext: () => i,
                presetDefault: () => a,
                presetPlatform: () => o
            });
            const i = (0, n(50959).createContext)({
                enableActiveStateStyles: !0
            });
            i.displayName = "CustomBehaviourContext";
            const a = {
                    enableActiveStateStyles: !0
                },
                o = {
                    enableActiveStateStyles: !1
                }
        },
        640027: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsMounted: () => a
            });
            var i = n(50959);
            const a = () => {
                const e = (0, i.useRef)(!1);
                return (0, i.useEffect)((() => (e.current = !0, () => {
                    e.current = !1
                })), []), e
            }
        },
        612247: (e, t, n) => {
            "use strict";
            n.d(t, {
                Loader: () => c
            });
            var i, a = n(50959),
                o = n(497754),
                r = n(745269),
                s = n(733319),
                l = n.n(s);
            ! function(e) {
                e[e.Initial = 0] = "Initial", e[e.Appear = 1] = "Appear", e[e.Active = 2] = "Active"
            }(i || (i = {}));
            class c extends a.PureComponent {
                constructor(e) {
                    super(e), this._stateChangeTimeout = null, this.state = {
                        state: i.Initial
                    }
                }
                render() {
                    const {
                        className: e,
                        color: t = "black",
                        size: n = "medium",
                        staticPosition: i
                    } = this.props, r = o(l().item, l()[t], l()[n]);
                    return a.createElement("span", {
                        className: o(l().loader, i && l().static, this._getStateClass(), e)
                    }, a.createElement("span", {
                        className: r
                    }), a.createElement("span", {
                        className: r
                    }), a.createElement("span", {
                        className: r
                    }))
                }
                componentDidMount() {
                    this.setState({
                        state: i.Appear
                    }), this._stateChangeTimeout = setTimeout((() => {
                        this.setState({
                            state: i.Active
                        })
                    }), 2 * r.dur)
                }
                componentWillUnmount() {
                    this._stateChangeTimeout && (clearTimeout(this._stateChangeTimeout), this._stateChangeTimeout = null)
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case i.Initial:
                            return l()["loader-initial"];
                        case i.Appear:
                            return l()["loader-appear"];
                        default:
                            return ""
                    }
                }
            }
        },
        694553: (e, t, n) => {
            "use strict";
            n.d(t, {
                Switch: () => c
            });
            var i = n(50959),
                a = n(497754),
                o = n(728804),
                r = n(682335),
                s = n.n(r);

            function l(e) {
                const t = (0, i.useContext)(o.CustomBehaviourContext),
                    {
                        className: n,
                        intent: r = "default",
                        size: l = "small",
                        enableActiveStateStyles: c = t.enableActiveStateStyles
                    } = e;
                return a(n, s().switcher, s()[`size-${l}`], s()[`intent-${r}`], !c && s()["disable-active-state-styles"])
            }

            function c(e) {
                var t;
                const {
                    reference: n,
                    size: a,
                    intent: o,
                    role: r,
                    "aria-checked": c,
                    checked: d,
                    defaultChecked: u,
                    onKeyDown: h,
                    ...m
                } = e, v = (0, i.useCallback)((e => {
                    13 === e.keyCode && e.target.click(), h && h(e)
                }), [h]);
                return i.createElement("span", {
                    className: l(e)
                }, i.createElement("input", { ...m,
                    type: "checkbox",
                    className: s().input,
                    ref: n,
                    role: null != r ? r : "switch",
                    "aria-checked": null !== (t = null != c ? c : d) && void 0 !== t ? t : u,
                    checked: d,
                    defaultChecked: u,
                    onKeyDown: v
                }), i.createElement("span", {
                    className: s()["thumb-wrapper"]
                }, i.createElement("span", {
                    className: s().track
                }), i.createElement("span", {
                    className: s().thumb
                })))
            }
        },
        168798: (e, t, n) => {
            "use strict";
            n.d(t, {
                i18n: () => a
            });
            var i = n(777754);
            n(984919);
            const a = {
                title: i.t(null, void 0, n(779203)),
                confirmClosing: i.t(null, void 0, n(735189)),
                errorMessage: i.t(null, void 0, n(334744)),
                errorTitle: i.t(null, void 0, n(496601)),
                intervalError: {
                    text: i.t(null, void 0, n(656705)),
                    title: i.t(null, void 0, n(936011))
                },
                limitError: {
                    html: i.t(null, void 0, n(180738)).format({
                        linkStart: `<a class="tv-dialog__link" target="_blank" href="${function(){const e=window.locale||"";let t=e;return["ja","es","tr","kr","it","br","ru"].includes(e)||(t="en"),"kr"===e&&(t="ko"),"br"===e&&(t="pb"),`https://blog.tradingview.com/${t}/tradingview-social-limiting-daily-publications-3463/`}()}">`,
                        linkEnd: "</a>"
                    }),
                    title: i.t(null, void 0, n(366294))
                },
                errorDialog: {
                    actions: {
                        ok: i.t(null, void 0, n(468988)),
                        cancel: i.t(null, void 0, n(620036)),
                        publishPrivateIdea: i.t(null, void 0, n(626276))
                    }
                }
            }
        },
        679975: (e, t, n) => {
            "use strict";
            n.d(t, {
                publishInProgress: () => a
            });
            var i = n(988411);
            const a = new(n.n(i)())(!1)
        },
        112907: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                GqlRequest: () => k
            });
            var i = n(777754),
                a = n(479928);
            const o = b("\n\tquery GetLiveStreams(\n\t\t$locale: String!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tshowPrivateStreams: false,\n\t\t\t\tlocale: $locale\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tisBroadcasting\n\t\t}\n\t}\n"),
                r = b("\n\tquery GetUserStream(\n\t\t$userId: Int!,\n\t) {\n\t\tstreams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 1\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tisBroadcasting\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t\tstate\n\t\t}\n\t}\n"),
                s = b("\n\tquery GetUserStreams(\n\t\t$userId: Int!,\n\t\t$locale: String,\n\t) {\n\t\tlive: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: live,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { viewersCount: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t}\n\n\t\tscheduled: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: scheduled,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { plannedTime: 1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tended: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: ended,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tlivetrading: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: livetrading,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\teducation: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: education,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tanalysis: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: analysis,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\n\t\tofftopic: streams(\n\t\t\tfilter: {\n\t\t\t\tstate: offtopic,\n\t\t\t\tuserId: $userId,\n\t\t\t\tlimit: 50,\n\t\t\t\tlocale: $locale\n\t\t\t},\n\t\t\tsort: { startTime: -1 }\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tendTime\n\t\t\tstartTime\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tcategory\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t}\n\t}\n"),
                l = b("\n\tmutation CreateStream(\n\t\t$title: String!,\n\t\t$plannedTime: DateTime!,\n\t\t$category: Category!,\n\t\t$visibility: Visibility!,\n\t\t$encoder: Encoder,\n\t\t$description: String!,\n\t\t$locale: String!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t) {\n\t\tcreateStream(input: {\n\t\t\ttitle: $title,\n\t\t\tdescription: $description,\n\t\t\tlocale: $locale,\n\t\t\tplannedTime: $plannedTime,\n\t\t\tcategory: $category,\n\t\t\tvisibility: $visibility,\n\t\t\tencoder: $encoder,\n\t\t\trecord: true,\n\t\t\tyoutubeToken: $youtubeToken\n\t\t\ttwitchToken: $twitchToken\n\t\t\tpermanent: $permanent\n\t\t}) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tencoder\n\t\t\trecord\n\t\t\tpermanent\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tplannedTime\n\t\t\tdescription\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tstreamingToken\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                c = b("\n\tmutation UpdateStream(\n\t\t$url: ID!,\n\t\t$title: String,\n\t\t$category: Category,\n\t\t$description: String,\n\t\t$visibility: Visibility,\n\t\t$picked: Boolean,\n\t\t$plannedTime: DateTime,\n\t\t$encoder: Encoder,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String,\n\t\t$permanent: Boolean,\n\t\t$previewName: String,\n\t) {\n\t\tupdateStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\ttitle: $title,\n\t\t\t\tencoder: $encoder,\n\t\t\t\tcategory: $category,\n\t\t\t\tvisibility: $visibility,\n\t\t\t\tpicked: $picked,\n\t\t\t\tdescription: $description,\n\t\t\t\tplannedTime: $plannedTime\n\t\t\t\tyoutubeToken: $youtubeToken,\n\t\t\t\ttwitchToken: $twitchToken,\n\t\t\t\tpermanent: $permanent,\n\t\t\t\tpreviewName: $previewName\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\ttitle\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tcategory\n\t\t\tplannedTime\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tviewersCount\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t\tpermanent\n\t\t\tpreviewName\n\t\t}\n\t}\n"),
                d = b("\n\tmutation DeleteStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tdeleteStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\ttitle\n\t\t}\n\t}\n"),
                u = b("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t}\n"),
                h = b("\n\tmutation StopStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String\n\t\t$twitchToken: String\n\t) {\n\t\tstopStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tstate\n\t\t\ttitle\n\t\t\tendTime\n\t\t}\n\t\tdeleteRecord (\n\t\t\turl: $url\n\t\t)\n\t}\n"),
                m = b("\n\tmutation DeleteRecord (\n\t\t\t$url: ID!\n\t\t) {\n\t\t\tdeleteRecord (\n\t\t\t\turl: $url\n\t\t\t)\n\t}\n"),
                v = b("\n\tmutation StartStream(\n\t\t$url: ID!,\n\t\t$youtubeToken: String,\n\t\t$twitchToken: String\n\t) {\n\t\tstartStream(\n\t\t\turl: $url,\n\t\t\tinput: {\n\t\t\t\tyoutubeToken: $youtubeToken\n\t\t\t\ttwitchToken: $twitchToken\n\t\t\t}\n\t\t) {\n\t\t\turl\n\t\t\tdescription\n\t\t\tstate\n\t\t\ttitle\n\t\t\tstartTime\n\t\t}\n\t}\n"),
                p = b("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\turl\n\t\t\tuserId\n\t\t\ttitle\n\t\t\tlocale\n\t\t\tencoder\n\t\t\tdescription\n\t\t\tplannedTime\n\t\t\tstartTime\n\t\t\tendTime\n\t\t\tstate\n\t\t\trecord\n\t\t\tcategory\n\t\t\tvisibility\n\t\t\tpicked\n\t\t\tviewsCount\n\t\t\tviewersCount\n\t\t\tpreviewName\n\t\t\tisBroadcasting\n\t\t\tregion\n\t\t\tencoderId\n\t\t\tyoutubeId\n\t\t\ttwitchId\n\t\t}\n\t}\n"),
                g = b("\n\tquery GetStream(\n\t\t$url: ID!\n\t) {\n\t\tstream (\n\t\t\turl: $url\n\t\t) {\n\t\t\tstreamingToken\n\t\t\tisBroadcasting\n\t\t}\n\t}\n"),
                S = b("\n\tquery GetStats {\n\t\tstats {\n\t\t\tviews {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tviewers {\n\t\t\t\ttime\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n");

            function b(e) {
                return e.replace(/[\n\t]+/g, " ").trim()
            }
            var f;
            ! function(e) {
                e.ListLiveStreamUrl = "ListLiveStreamUrl", e.LiveStreamUrl = "LiveStreamUrl", e.Streams = "Streams", e.CreateStream = "CreateStream", e.UpdateStream = "UpdateStream", e.DeleteStream = "DeleteStream", e.StopStream = "StopStream", e.StopStreamSave = "StopStreamSave", e.DeleteRecord = "DeleteRecord", e.StartStream = "StartStream", e.GetStream = "GetStream", e.GetToken = "GetToken", e.GetStreamsStats = "GetStreamsStats"
            }(f || (f = {}));
            var y = n(779923),
                w = n(664224),
                _ = n(194806),
                C = n(286293);
            let E = null;
            class k {
                constructor() {
                    if (E) return E;
                    E = this, this._gqlQueriesStrings = {
                        [f.ListLiveStreamUrl]: o,
                        [f.LiveStreamUrl]: r,
                        [f.Streams]: s,
                        [f.CreateStream]: l,
                        [f.UpdateStream]: c,
                        [f.DeleteStream]: d,
                        [f.StopStream]: u,
                        [f.StopStreamSave]: h,
                        [f.DeleteRecord]: m,
                        [f.StartStream]: v,
                        [f.GetStream]: p,
                        [f.GetToken]: g,
                        [f.GetStreamsStats]: S
                    };
                    let e = (0, _.getGraphqlUrl)();
                    return !e && window && ((0, _.setStreamsConfig)({
                        mediaServerUrl: window.TV_LIVE_MEDIA_SERVER_DOMAIN,
                        mediaServerRtmpUrl: window.TV_LIVE_MEDIA_SERVER_RTMP_URL,
                        tvLiveUrl: window.TV_LIVE_DIRECTOR_DOMAIN,
                        liveMediaUrls: window.TV_LIVE_MEDIA_SERVER_LIVE_URLS,
                        recordMediaUrl: window.TV_LIVE_MEDIA_URL
                    }), e = (0, _.getGraphqlUrl)()), this._gqlUrl = e, this._gqlClient = new a.GraphQLClient(this._gqlUrl, {
                        headers: this._getHeadersObject(),
                        credentials: "include",
                        mode: "cors"
                    }), window && window.loginStateChange.subscribe(this, this._onLoginStateChange), E
                }
                getStreamsStats() {
                    const e = this._gqlQueriesStrings[f.GetStreamsStats];
                    return this._sendRequest(e).then((e => e))
                }
                getListLiveStreamUrl(e) {
                    const t = this._gqlQueriesStrings[f.ListLiveStreamUrl];
                    return this._sendRequest(t, {
                        locale: e
                    }).then((e => 0 === e.streams.length ? null : e))
                }
                getLiveStreamUrl(e, t = !1) {
                    const n = this._gqlQueriesStrings[f.LiveStreamUrl];
                    return this._sendRequest(n, {
                        userId: e
                    }).then((e => {
                        if (0 === e.streams.filter((e => e.state === _.StreamState.Live)).length) return null;
                        const {
                            url: n,
                            isBroadcasting: i,
                            youtubeId: a,
                            twitchId: o
                        } = e.streams[0];
                        return i || !t ? [n, a, o] : null
                    }))
                }
                getStreams(e) {
                    const t = this._gqlQueriesStrings[f.Streams];
                    return this._sendRequest(t, e)
                }
                createStream(e) {
                    const {
                        plannedTime: t
                    } = e, n = this._gqlQueriesStrings[f.CreateStream], i = t ? t.toISOString() : (new Date).toISOString(), a = Object.assign({}, e, {
                        plannedTime: i
                    });
                    return this._sendRequest(n, a)
                }
                updateStream(e) {
                    const t = this._gqlQueriesStrings[f.UpdateStream];
                    return this._sendRequest(t, e)
                }
                deleteStream(e) {
                    const t = this._gqlQueriesStrings[f.DeleteStream];
                    return this._sendRequest(t, e)
                }
                async stopStream(e, t) {
                    const n = t ? this._gqlQueriesStrings[f.StopStream] : this._gqlQueriesStrings[f.StopStreamSave];
                    return (await this._sendRequest(n, e)).stopStream
                }
                deleteRecord(e) {
                    const t = this._gqlQueriesStrings[f.DeleteRecord];
                    return this._sendRequest(t, e).then((e => e.deleteRecord))
                }
                startStream(e) {
                    const t = this._gqlQueriesStrings[f.StartStream];
                    return this._sendRequest(t, e)
                }
                getStream(e) {
                    const t = this._gqlQueriesStrings[f.GetStream];
                    return this._sendRequest(t, e).then((e => e.stream))
                }
                getToken(e) {
                    const t = this._gqlQueriesStrings[f.GetToken];
                    return this._sendRequest(t, e).then((e => e.stream))
                }
                previewUpload(e) {
                    const t = {
                            query: `\n\t\t\t\tmutation(\n\t\t\t\t\t$file: Upload!\n\t\t\t\t) {\n\t\t\t\t\tuploadPreview(\n\t\t\t\t\t\turl: "${e.url}",\n\t\t\t\t\t\tfile: $file\n\t\t\t\t\t) {\n\t\t\t\t\t\tfilename,\n\t\t\t\t\t\tmimetype,\n\t\t\t\t\t\tencoding\n\t\t\t\t\t}\n\t\t\t\t}`,
                            variables: {
                                file: null
                            }
                        },
                        n = new FormData;
                    return n.append("operations", JSON.stringify(t)), n.append("map", '{ "0": ["variables.file"] }'), n.append("0", e.file), fetch(this._gqlUrl, {
                        method: "POST",
                        headers: new Headers(this._getHeadersObject()),
                        body: n,
                        credentials: "include",
                        mode: "cors"
                    }).then((e => e.json()))
                }
                _sendRequest(e, t) {
                    return this._gqlClient.request(e, t).catch((async e => {
                        var t;
                        const a = `GraphQL Error (Code: ${e.response.status}`,
                            {
                                errors: o = [{
                                    message: a,
                                    extensions: {
                                        code: _.TvLiveErrorCode.InternalServerError
                                    }
                                }]
                            } = e.response,
                            r = o[0];
                        let s, l = i.t(null, void 0, n(482751));
                        (null === (t = r.extensions) || void 0 === t ? void 0 : t.code) === _.TvLiveErrorCode.YoutubeError && (l = i.t(null, void 0, n(414437)), s = C.solutionIds.YOUTUBE_ERROR);
                        const c = await Promise.resolve().then(n.t.bind(n, 809350, 23)),
                            d = s ? [{
                                name: "Learn more",
                                title: i.t(null, void 0, n(718429)),
                                appearance: "stroke",
                                intent: "default",
                                handler: () => {
                                    (0, w.showSupportDialog)({
                                        solutionId: s
                                    })
                                }
                            }] : void 0;
                        (0, y.showWarning)({
                            title: l,
                            text: c.stripTags(r.message),
                            intentButton: "danger",
                            closeOnOutsideClick: !1,
                            actions: d
                        })
                    }))
                }
                _getHeadersObject() {
                    return {
                        "X-UserId": this._getUserId(),
                        "X-UserProPlan": window.user.pro_plan || "",
                        "X-UserPerm": '{ "can_create_streams": 1, "is_streams_admin": 1 }'
                    }
                }
                _getUserId() {
                    return window.user.id ? String(window.user.id) : ""
                }
                _onLoginStateChange() {
                    this._gqlClient.setHeaders(this._getHeadersObject())
                }
            }
        },
        827016: (e, t, n) => {
            "use strict";
            n.d(t, {
                StreamCreator: () => r
            });
            var i = n(112907),
                a = n(194806),
                o = n(345848);
            class r {
                constructor() {
                    this._gql = new i.GqlRequest, this.createStream = e => ((0, o.trackEvent)("Streams", "create stream", `${e.visibility} ${e.encoder}`), this._gql.createStream(e)), this.getLiveStreamUrl = async () => window.user.id ? this._gql.getLiveStreamUrl(window.user.id) : null, this.onPreviewUpload = (e, t) => this._gql.previewUpload({
                        url: e,
                        file: t
                    }), this.onCreateDefaultCallback = (e, t) => {
                        if (!e) return;
                        let n = "";
                        e.createStream.encoder === a.Encoder.External && (n = `?encoder=${a.Encoder.External}`);
                        const i = `${a.ROOT_URL}/${e.createStream.url}/${n}`;
                        t ? window.open(i, "_blank") : window.location.href = `${a.ROOT_URL}/${e.createStream.url}/${n}`
                    }
                }
                stopStream(e, t, n, i) {
                    return this._gql.stopStream({
                        url: e,
                        youtubeToken: t,
                        twitchToken: n
                    }, i)
                }
            }
        },
        228387: (e, t, n) => {
            "use strict";
            async function i(e) {
                return navigator.mediaDevices.getUserMedia({
                    video: !1,
                    audio: e || !0
                })
            }
            async function a(e) {
                return navigator.mediaDevices.getUserMedia({
                    video: e || !0,
                    audio: !1
                })
            }
            async function o(e) {
                return (await navigator.mediaDevices.enumerateDevices()).filter((t => t.kind === e))
            }
            async function r(e, t) {
                const n = {
                    video: {
                        width: {
                            max: e
                        },
                        height: {
                            max: t
                        },
                        frameRate: {
                            max: 30
                        }
                    }
                };
                if (window.TVD) {
                    const e = await window.TVD.getDesktopStream();
                    return navigator.mediaDevices.getUserMedia({
                        audio: !1,
                        video: {
                            mandatory: {
                                chromeMediaSource: "desktop",
                                chromeMediaSourceId: e
                            }
                        }
                    })
                }
                return navigator.getDisplayMedia ? navigator.getDisplayMedia(n) : navigator.mediaDevices.getDisplayMedia ? navigator.mediaDevices.getDisplayMedia(n) : navigator.mediaDevices.getUserMedia({
                    video: {
                        mediaSource: "screen"
                    }
                })
            }
            n.d(t, {
                getUserAudio: () => i,
                getUserVideo: () => a,
                getMediaDeviceInfo: () => o,
                getUserScreen: () => r
            })
        },
        531327: (e, t, n) => {
            "use strict";

            function i(e) {
                return a() ? 0 : o() ? 46 : Math.min(Math.max(e, 46), 450)
            }
            n.d(t, {
                getWidgetBarPadding: () => i,
                isWidgetBarFullscreen: () => a
            });
            const a = () => !window.matchMedia("screen and (min-width: 768px)").matches,
                o = () => !window.matchMedia("screen and (min-width: 1280px)").matches
        },
        575658: (e, t, n) => {
            "use strict";
            n.d(t, {
                setFixedBodyState: () => s
            });
            var i = n(76107),
                a = n(531327);
            let o = 0,
                r = !1;

            function s(e) {
                const {
                    body: t
                } = document, n = t.querySelector(".widgetbar-wrap");
                if (e && 1 == ++o) {
                    const e = (0, i.getCSSProperty)(t, "overflow"),
                        a = (0, i.getCSSPropertyNumericValue)(t, "padding-right");
                    "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0, i.setStyle)(n, "right", `${(0,i.getScrollbarWidth)()}px`), t.style.paddingRight = `${a+(0,i.getScrollbarWidth)()}px`, r = !0), t.classList.add("i-no-scroll")
                } else if (!e && o > 0 && 0 == --o && (t.classList.remove("i-no-scroll"), r)) {
                    (0, i.setStyle)(n, "right", "0px");
                    let e = 0;
                    e = n ? (0, a.getWidgetBarPadding)((0, i.getContentWidth)(n)) : 0, t.scrollHeight <= t.clientHeight && (e -= (0, i.getScrollbarWidth)()), t.style.paddingRight = (e < 0 ? 0 : e) + "px", r = !1
                }
            }
        },
        548592: (e, t, n) => {
            "use strict";
            n.d(t, {
                isScreenRecordingOn: () => o,
                toggleScreenRecordingState: () => r
            });
            var i = n(49437);
            const a = "scereen-recording-on";

            function o() {
                return null !== i.TVLocalStorage.getItem(a)
            }

            function r(e = !0) {
                var t, n, o, r;
                e ? (i.TVLocalStorage.setItem(a, "true"), null === (n = null === (t = window.TVD) || void 0 === t ? void 0 : t.startedScreenCapture) || void 0 === n || n.call(t)) : (i.TVLocalStorage.removeItem(a), null === (r = null === (o = window.TVD) || void 0 === o ? void 0 : o.stoppedScreenCapture) || void 0 === r || r.call(o))
            }
        },
        642709: (e, t, n) => {
            "use strict";
            n.d(t, {
                DialogBreakpoints: () => a
            });
            var i = n(645469);
            const a = {
                SmallHeight: i["small-height-breakpoint"],
                TabletSmall: i["tablet-small-breakpoint"],
                TabletNormal: i["tablet-normal-breakpoint"]
            }
        },
        61570: (e, t, n) => {
            "use strict";
            n.d(t, {
                SymbolSearchDialogFooter: () => s
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(372087);

            function s(e) {
                const {
                    className: t,
                    children: n
                } = e;
                return i.createElement("div", {
                    className: o()(r.footer, t)
                }, n)
            }
        },
        28983: (e, t, n) => {
            "use strict";
            n.d(t, {
                BadgeIndicator: () => s
            });
            var i = n(50959),
                a = n(497754),
                o = n(558470),
                r = n(300698);

            function s(e) {
                const {
                    type: t,
                    className: n,
                    tooltip: s
                } = e, l = {
                    beta: "Beta",
                    new: "New",
                    updated: "Updated",
                    ep: "EP"
                }, c = a(r.badgeIndicator, r[`type-${t}`], s && "apply-common-tooltip", n);
                return i.createElement(o.Badge, {
                    className: c,
                    size: o.BadgeSize.XSmall,
                    title: s
                }, l[t])
            }
        },
        321475: (e, t, n) => {
            "use strict";

            function i() {
                return !0
            }
            n.d(t, {
                isMindsFeatureEnabledWithBackend: () => i
            })
        },
        558470: (e, t, n) => {
            "use strict";
            n.d(t, {
                AnchorBadge: () => i.AnchorBadge,
                Badge: () => i.Badge,
                BadgeSize: () => i.BadgeSize
            });
            var i = n(774465)
        },
        46926: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogoPair: () => o
            });
            var i = n(50959),
                a = n(439378);
            n(531428);

            function o(e) {
                const {
                    primaryLogoUrl: t,
                    secondaryLogoUrl: n,
                    size: o,
                    className: s
                } = e;
                return i.createElement("span", {
                    className: (0, a.getBlockStyleClasses)(o, s),
                    title: e.title
                }, i.createElement(r, {
                    logoUrl: n,
                    size: o
                }), i.createElement(r, {
                    logoUrl: t,
                    size: o
                }))
            }

            function r(e) {
                const {
                    logoUrl: t,
                    size: n
                } = e, o = (0, a.getLogoStyleClasses)(n);
                return void 0 === t ? i.createElement("span", {
                    className: o
                }) : i.createElement("img", {
                    className: o,
                    src: t,
                    alt: ""
                })
            }
        },
        439378: (e, t, n) => {
            "use strict";
            n.d(t, {
                getBlockStyleClasses: () => a,
                getLogoStyleClasses: () => o
            });
            var i = n(497754);

            function a(e, t) {
                return i("tv-circle-logo-pair", `tv-circle-logo-pair--${e}`, t)
            }

            function o(e, t) {
                return i("tv-circle-logo-pair__logo", `tv-circle-logo-pair__logo--${e}`, !t && "tv-circle-logo-pair__logo-empty")
            }
        },
        495217: (e, t, n) => {
            "use strict";
            n.d(t, {
                CircleLogo: () => o
            });
            var i = n(50959),
                a = n(783036);
            n(982730);

            function o(e) {
                var t, n;
                const o = (0, a.getStyleClasses)(e.size, e.className),
                    r = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : "";
                return (0, a.isCircleLogoWithUrlProps)(e) ? i.createElement("img", {
                    className: o,
                    src: e.logoUrl,
                    alt: r,
                    title: e.title,
                    loading: e.loading
                }) : i.createElement("span", {
                    className: o,
                    title: e.title
                }, e.placeholderLetter)
            }
        },
        783036: (e, t, n) => {
            "use strict";
            n.d(t, {
                getStyleClasses: () => a,
                isCircleLogoWithUrlProps: () => o
            });
            var i = n(497754);

            function a(e, t) {
                return i("tv-circle-logo", `tv-circle-logo--${e}`, t)
            }

            function o(e) {
                return "logoUrl" in e && void 0 !== e.logoUrl && 0 !== e.logoUrl.length
            }
        },
        826881: (e, t, n) => {
            "use strict";
            n.d(t, {
                Body: () => h,
                Footer: () => d,
                Header: () => l,
                Message: () => p
            });
            var i = n(50959),
                a = n(497754),
                o = n(685535),
                r = n(608636),
                s = n(83436);

            function l(e) {
                const t = e.hideIcon ? null : i.createElement(s.Icon, {
                    className: o.close,
                    icon: r,
                    onClick: e.onClose
                });
                return i.createElement("div", {
                    className: a(o.header, e.className),
                    "data-dragg-area": !0,
                    ref: e.reference
                }, e.children, t)
            }
            var c = n(17885);

            function d(e) {
                return i.createElement("div", {
                    className: a(c.footer, e.className),
                    ref: e.reference
                }, e.children)
            }
            var u = n(961228);

            function h(e) {
                return i.createElement("div", {
                    className: a(u.body, e.className),
                    ref: e.reference
                }, e.children)
            }
            var m = n(951292),
                v = n(566340);

            function p(e) {
                let t;
                e.text ? t = i.createElement("span", null, e.text) : e.html && (t = i.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: e.html
                    }
                }));
                const n = (0, m.useOutsideEvent)({
                    mouseDown: !0,
                    touchStart: !0,
                    handler: e.onClickOutside
                });
                if (!t) return null;
                const o = a(v.message, e.className, {
                    [v.error]: e.isError
                });
                return i.createElement("div", {
                    className: o,
                    key: "0"
                }, i.createElement("span", {
                    ref: n
                }, t))
            }
        },
        621640: (e, t, n) => {
            "use strict";
            n.d(t, {
                ModalDialog: () => c,
                Modal: () => d
            });
            var i = n(50959),
                a = n(497754),
                o = n(697989),
                r = n(368337),
                s = n(157490),
                l = n(450170);
            class c extends i.PureComponent {
                constructor() {
                    super(...arguments), this._containerRef = null, this._handleContainerRef = e => {
                        this._containerRef = e
                    }
                }
                componentDidMount() {
                    var e;
                    this.props.autofocus && (null === (e = this._containerRef) || void 0 === e || e.focus())
                }
                render() {
                    const {
                        zIndex: e,
                        onClickOutside: t,
                        children: n,
                        className: r
                    } = this.props;
                    return i.createElement("div", {
                        ref: this._handleContainerRef,
                        style: {
                            zIndex: e
                        },
                        "data-dialog-name": this.props["data-dialog-name"],
                        tabIndex: -1
                    }, i.createElement("div", {
                        className: l.backdrop
                    }), i.createElement("div", {
                        className: l.wrap
                    }, i.createElement("div", {
                        className: l.container
                    }, i.createElement(s.OutsideEvent, {
                        mouseDown: !0,
                        touchStart: !0,
                        handler: t
                    }, (e => i.createElement("div", {
                        className: l.modal,
                        ref: e
                    }, i.createElement(o.Dialog, { ...this.props,
                        className: a(r, l.dialog)
                    }, n)))))))
                }
            }
            c.defaultProps = {
                width: 500
            };
            const d = (0, r.makeOverlapable)(c)
        },
        332585: (e, t, n) => {
            "use strict";
            n.d(t, {
                DrawerManager: () => o,
                DrawerContext: () => r
            });
            var i = n(50959),
                a = n(575658);
            class o extends i.PureComponent {
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
                    !t.stack.length && this.state.stack.length && ((0, a.setFixedBodyState)(!0), this._isBodyFixed = !0), t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0, a.setFixedBodyState)(!1), this._isBodyFixed = !1)
                }
                componentWillUnmount() {
                    this.state.stack.length && this._isBodyFixed && (0, a.setFixedBodyState)(!1)
                }
                render() {
                    return i.createElement(r.Provider, {
                        value: {
                            addDrawer: this._addDrawer,
                            removeDrawer: this._removeDrawer,
                            currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                        }
                    }, this.props.children)
                }
            }
            const r = i.createContext(null)
        },
        762852: (e, t, n) => {
            "use strict";
            n.d(t, {
                Drawer: () => h
            });
            var i = n(50959),
                a = n(650151),
                o = n(497754),
                r = n(777491),
                s = n(707533),
                l = n(332585),
                c = n(320116),
                d = n(150881),
                u = n(945966);

            function h(e) {
                const {
                    position: t = "Bottom",
                    onClose: n,
                    children: h,
                    className: m,
                    theme: v = u
                } = e, p = (0, a.ensureNotNull)((0, i.useContext)(l.DrawerContext)), [g] = (0, i.useState)((() => (0, r.randomHash)())), S = (0, i.useRef)(null), b = (0, i.useContext)(c.CloseDelegateContext);
                return (0, i.useLayoutEffect)((() => ((0, a.ensureNotNull)(S.current).focus({
                    preventScroll: !0
                }), b.subscribe(p, n), p.addDrawer(g), () => {
                    p.removeDrawer(g), b.unsubscribe(p, n)
                })), []), i.createElement(s.Portal, null, i.createElement("div", {
                    className: o(u.wrap, u[`position${t}`])
                }, g === p.currentDrawer && i.createElement("div", {
                    className: u.backdrop,
                    onClick: n
                }), i.createElement(d.TouchScrollContainer, {
                    className: o(u.drawer, v.drawer, u[`position${t}`], m),
                    tabIndex: -1,
                    ref: S,
                    "data-name": e["data-name"]
                }, h)))
            }
        },
        852668: (e, t, n) => {
            "use strict";
            n.d(t, {
                FavoriteButton: () => u
            });
            var i = n(777754),
                a = n(50959),
                o = n(497754),
                r = n(83436),
                s = n(239146),
                l = n(648010),
                c = n(164429);
            const d = {
                add: i.t(null, void 0, n(44629)),
                remove: i.t(null, void 0, n(572482))
            };

            function u(e) {
                const {
                    className: t,
                    isFilled: n,
                    isActive: i,
                    onClick: u,
                    ...h
                } = e;
                return a.createElement(r.Icon, { ...h,
                    className: o(c.favorite, "apply-common-tooltip", n && c.checked, i && c.active, t),
                    icon: n ? s : l,
                    onClick: u,
                    title: n ? d.remove : d.add
                })
            }
        },
        514283: (e, t, n) => {
            "use strict";
            n.d(t, {
                useFixedBody: () => o
            });
            var i = n(50959),
                a = n(575658);

            function o() {
                (0, i.useEffect)((() => ((0, a.setFixedBodyState)(!0), () => {
                    (0, a.setFixedBodyState)(!1)
                })), [])
            }
        },
        903535: (e, t, n) => {
            "use strict";
            n.d(t, {
                useIsOpenedOnes: () => a
            });
            var i = n(50959);
            const a = e => {
                const [t, n] = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    !t && e && n(!0)
                }), [e]), t
            }
        },
        364489: (e, t, n) => {
            "use strict";
            n.d(t, {
                KeyboardDocumentListener: () => a
            });
            var i = n(50959);
            class a extends i.PureComponent {
                constructor() {
                    super(...arguments), this._handleKeyDown = e => {
                        e.keyCode === this.props.keyCode && this.props.handler(e)
                    }
                }
                componentDidMount() {
                    document.addEventListener(this.props.eventType || "keydown", this._handleKeyDown, !1)
                }
                componentWillUnmount() {
                    document.removeEventListener(this.props.eventType || "keydown", this._handleKeyDown, !1)
                }
                render() {
                    return null
                }
            }
        },
        829725: (e, t, n) => {
            "use strict";
            n.d(t, {
                OverlapManager: () => o,
                getRootOverlapManager: () => s
            });
            var i = n(650151);
            class a {
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
            class o {
                constructor(e = document) {
                    this._storage = new a, this._windows = new Map, this._index = 0, this._document = e, this._container = e.createDocumentFragment()
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
            const r = new WeakMap;

            function s(e = document) {
                const t = e.getElementById("overlap-manager-root");
                if (null !== t) return (0, i.ensureDefined)(r.get(t)); {
                    const t = new o(e),
                        n = function(e) {
                            const t = e.createElement("div");
                            return t.style.position = "absolute", t.style.zIndex = 150..toString(), t.style.top = "0px", t.style.left = "0px", t.id = "overlap-manager-root", t
                        }(e);
                    return r.set(n, t), t.setContainer(n), e.body.appendChild(n), t
                }
            }
        },
        62804: (e, t, n) => {
            "use strict";
            n.d(t, {
                multilineLabelWithIconAndToolboxTheme: () => r
            });
            var i = n(995683),
                a = n(655498),
                o = n(267158);
            const r = (0, i.mergeThemes)(a, o)
        },
        93916: (e, t, n) => {
            "use strict";
            n.d(t, {
                PopupMenuSeparator: () => s
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(545829);

            function s(e) {
                const {
                    size: t = "normal",
                    className: n,
                    ariaHidden: a = !1
                } = e;
                return i.createElement("div", {
                    className: o()(r.separator, "small" === t && r.small, "normal" === t && r.normal, "large" === t && r.large, n),
                    role: "separator",
                    "aria-hidden": a
                })
            }
        },
        636268: (e, t, n) => {
            "use strict";
            n.d(t, {
                RemoveButton: () => c
            });
            var i = n(777754),
                a = n(50959),
                o = n(497754),
                r = n(83436),
                s = n(333765),
                l = n(308794);

            function c(e) {
                const {
                    className: t,
                    isActive: c,
                    onClick: d,
                    onMouseDown: u,
                    title: h,
                    hidden: m,
                    "data-name": v = "remove-button",
                    ...p
                } = e;
                return a.createElement(r.Icon, { ...p,
                    "data-name": v,
                    className: o(l.button, "apply-common-tooltip", c && l.active, m && l.hidden, t),
                    icon: s,
                    onClick: d,
                    onMouseDown: u,
                    title: h || i.t(null, void 0, n(734596))
                })
            }
        },
        416293: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetCaret: () => l
            });
            var i = n(50959),
                a = n(497754),
                o = n(83436),
                r = n(190948),
                s = n(100578);

            function l(e) {
                const {
                    dropped: t,
                    className: n
                } = e;
                return i.createElement(o.Icon, {
                    className: a(n, r.icon, {
                        [r.dropped]: t
                    }),
                    icon: s
                })
            }
        },
        12173: (e, t, n) => {
            "use strict";
            n.d(t, {
                TooltipWizard: () => c,
                TooltipWidget: () => d
            });
            var i = n(50959),
                a = n(497754),
                o = n(83436),
                r = n(707533),
                s = n(333765),
                l = n(844662);
            class c extends i.PureComponent {
                render() {
                    const {
                        children: e,
                        popperChildrenProps: t,
                        onClose: n,
                        reference: o,
                        containerClassName: s,
                        arrowClassName: c
                    } = this.props;
                    return i.createElement(r.Portal, null, i.createElement("div", {
                        ref: o
                    }, i.createElement(d, {
                        reference: t.ref,
                        style: t.style,
                        arrowClassName: a(l.arrowHolder, this._getArrowDirectionClass(), c),
                        arrowReference: t.arrowProps.ref,
                        arrowStyle: t.arrowProps.style,
                        "data-placement": t.placement,
                        onClose: n,
                        containerClassName: s
                    }, e)))
                }
                _getArrowDirectionClass() {
                    const {
                        popperChildrenProps: e
                    } = this.props;
                    switch (e.placement) {
                        case "left":
                        case "left-start":
                            return a(l["arrowHolder--after"], l["arrowHolder--after-ltr-fix"]);
                        case "top":
                            return a(l["arrowHolder--above"], l["arrowHolder--above-fix"]);
                        case "bottom":
                        case "bottom-start":
                        case "bottom-end":
                            return l["arrowHolder--below"];
                        default:
                            return a(l["arrowHolder--before"], l["arrowHolder--before-rtl-fix"])
                    }
                }
            }

            function d(e) {
                const {
                    className: t,
                    containerClassName: n,
                    contentClassName: r,
                    reference: c,
                    style: d,
                    arrow: u = !0,
                    arrowClassName: h,
                    arrowReference: m,
                    onClose: v,
                    arrowStyle: p,
                    children: g,
                    ...S
                } = e;
                return i.createElement("div", { ...S,
                    className: t,
                    ref: c,
                    style: d
                }, u && i.createElement("div", {
                    className: h,
                    ref: m,
                    style: p
                }), i.createElement("div", {
                    className: a(l.container, n)
                }, i.createElement("div", {
                    className: a(l.content, r)
                }, g), v && i.createElement(o.Icon, {
                    className: l.closeButton,
                    icon: s,
                    onClick: v
                })))
            }
        },
        150881: (e, t, n) => {
            "use strict";
            n.d(t, {
                TouchScrollContainer: () => s
            });
            var i = n(50959),
                a = n(259142),
                o = n(650151),
                r = n(638456);
            const s = (0, i.forwardRef)(((e, t) => {
                const {
                    children: n,
                    ...o
                } = e, s = (0, i.useRef)(null);
                return (0, i.useImperativeHandle)(t, (() => s.current)), (0, i.useLayoutEffect)((() => {
                    if (r.CheckMobile.iOS()) return null !== s.current && (0, a.disableBodyScroll)(s.current, {
                        allowTouchMove: l(s)
                    }), () => {
                        null !== s.current && (0, a.enableBodyScroll)(s.current)
                    }
                }), []), i.createElement("div", {
                    ref: s,
                    ...o
                }, n)
            }));

            function l(e) {
                return t => {
                    const n = (0, o.ensureNotNull)(e.current),
                        i = document.activeElement;
                    return !n.contains(t) || null !== i && n.contains(i) && i.contains(t)
                }
            }
        },
        995683: (e, t, n) => {
            "use strict";

            function i(e, t, n = {}) {
                return Object.assign({}, e, function(e, t, n = {}) {
                    const i = Object.assign({}, t);
                    for (const a of Object.keys(t)) {
                        const o = n[a] || a;
                        o in e && (i[a] = [e[o], t[a]].join(" "))
                    }
                    return i
                }(e, t, n))
            }
            n.d(t, {
                mergeThemes: () => i
            })
        },
        906132: (e, t, n) => {
            "use strict";
            var i = n(522134);

            function a() {}

            function o() {}
            o.resetWarningCache = a, e.exports = function() {
                function e(e, t, n, a, o, r) {
                    if (r !== i) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
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
                    checkPropTypes: o,
                    resetWarningCache: a
                };
                return n.PropTypes = n, n
            }
        },
        719036: (e, t, n) => {
            e.exports = n(906132)()
        },
        522134: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        126854: e => {
            e.exports = {
                summary: "summary-WgEIQSbO",
                hovered: "hovered-WgEIQSbO",
                caret: "caret-WgEIQSbO"
            }
        },
        465785: e => {
            e.exports = {
                wrapper: "wrapper-o7rRFc7H",
                labelRow: "labelRow-o7rRFc7H",
                label: "label-o7rRFc7H",
                labelHint: "labelHint-o7rRFc7H",
                labelOn: "labelOn-o7rRFc7H"
            }
        },
        206001: e => {
            e.exports = {
                wrapper: "wrapper-n_GqAsy6",
                hovered: "hovered-n_GqAsy6",
                withIcon: "withIcon-n_GqAsy6",
                labelRow: "labelRow-n_GqAsy6",
                label: "label-n_GqAsy6",
                switchWrap: "switchWrap-n_GqAsy6",
                icon: "icon-n_GqAsy6",
                labelHint: "labelHint-n_GqAsy6",
                labelOn: "labelOn-n_GqAsy6"
            }
        },
        997228: e => {
            e.exports = {
                title: "title-ujIBirbo"
            }
        },
        145184: e => {
            e.exports = {
                button: "button-gbkEfGm4",
                withText: "withText-gbkEfGm4",
                withoutText: "withoutText-gbkEfGm4"
            }
        },
        574749: e => {
            e.exports = {
                button: "button-rqVQ8gUB"
            }
        },
        86464: e => {
            e.exports = {
                form: "form-tGP0FmdI",
                interacting: "interacting-tGP0FmdI",
                input: "input-tGP0FmdI",
                menu: "menu-tGP0FmdI",
                add: "add-tGP0FmdI",
                hovered: "hovered-tGP0FmdI",
                hover: "hover-tGP0FmdI",
                wrap: "wrap-tGP0FmdI"
            }
        },
        252149: e => {
            e.exports = {
                spinnerWrap: "spinnerWrap-q9igAFmQ"
            }
        },
        842431: e => {
            e.exports = {
                button: "button-NU6T1Gv2",
                first: "first-NU6T1Gv2",
                last: "last-NU6T1Gv2"
            }
        },
        572281: e => {
            e.exports = {
                wrap: "wrap-ZOLycUbI"
            }
        },
        46949: e => {
            e.exports = {
                hidden: "hidden-K_dNKcEL"
            }
        },
        832924: e => {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 430px)",
                item: "item-TtgC6v1y",
                withIcon: "withIcon-TtgC6v1y",
                shortcut: "shortcut-TtgC6v1y",
                loading: "loading-TtgC6v1y",
                icon: "icon-TtgC6v1y"
            }
        },
        890965: e => {
            e.exports = {
                button: "button-opm_4K5V",
                menu: "menu-opm_4K5V"
            }
        },
        443741: e => {
            e.exports = {
                customTradingViewStyleButton: "customTradingViewStyleButton-Y_dY8Pmt",
                withoutIcon: "withoutIcon-Y_dY8Pmt"
            }
        },
        320443: e => {
            e.exports = {
                dropdown: "dropdown-IvhZ8gpO",
                label: "label-IvhZ8gpO",
                smallWidthTitle: "smallWidthTitle-IvhZ8gpO",
                smallWidthMenuItem: "smallWidthMenuItem-IvhZ8gpO",
                smallWidthWrapper: "smallWidthWrapper-IvhZ8gpO"
            }
        },
        219606: e => {
            e.exports = {
                value: "value-Os5mxnuv",
                selected: "selected-Os5mxnuv"
            }
        },
        700937: e => {
            e.exports = {
                smallWidthMenuItem: "smallWidthMenuItem-Fj7ZZh1_"
            }
        },
        965057: e => {
            e.exports = {
                button: "button-_8r4li9v",
                first: "first-_8r4li9v",
                last: "last-_8r4li9v",
                menu: "menu-_8r4li9v",
                dropdown: "dropdown-_8r4li9v",
                menuContent: "menuContent-_8r4li9v",
                section: "section-_8r4li9v",
                smallTabletSectionTitle: "smallTabletSectionTitle-_8r4li9v",
                addCustomInterval: "addCustomInterval-_8r4li9v",
                hovered: "hovered-_8r4li9v"
            }
        },
        150754: e => {
            e.exports = {
                row: "row-YXr1g_Si",
                rowInner: "rowInner-YXr1g_Si",
                smallRow: "smallRow-YXr1g_Si",
                rowLabel: "rowLabel-YXr1g_Si",
                smallRowLabel: "smallRowLabel-YXr1g_Si",
                rowButtons: "rowButtons-YXr1g_Si",
                layoutButtonWrap: "layoutButtonWrap-YXr1g_Si",
                smallWidth: "smallWidth-YXr1g_Si",
                layoutButton: "layoutButton-YXr1g_Si",
                hovered: "hovered-YXr1g_Si",
                isActive: "isActive-YXr1g_Si",
                smallWidthLayoutButton: "smallWidthLayoutButton-YXr1g_Si",
                layoutButtons: "layoutButtons-YXr1g_Si"
            }
        },
        591734: e => {
            e.exports = {
                toggler: "toggler-NvkN52__",
                hovered: "hovered-NvkN52__",
                label: "label-NvkN52__",
                centered: "centered-NvkN52__",
                checked: "checked-NvkN52__"
            }
        },
        373884: e => {
            e.exports = {
                button: "button-hg14h9L_",
                dropdown: "dropdown-hg14h9L_",
                layoutType: "layoutType-hg14h9L_",
                title: "title-hg14h9L_",
                tabletTitle: "tabletTitle-hg14h9L_",
                syncCharts: "syncCharts-hg14h9L_",
                tabletWrapper: "tabletWrapper-hg14h9L_",
                icon: "icon-hg14h9L_",
                syncTable: "syncTable-hg14h9L_",
                syncListWrapper: "syncListWrapper-hg14h9L_"
            }
        },
        714402: e => {
            e.exports = {
                button: "button-G2fjEkbQ"
            }
        },
        392717: e => {
            e.exports = {
                button: "button-fvH2r9lQ",
                bg: "bg-fvH2r9lQ",
                iconOnly: "iconOnly-fvH2r9lQ",
                icon: "icon-fvH2r9lQ",
                withText: "withText-fvH2r9lQ",
                "color-blue": "color-blue-fvH2r9lQ",
                interactive: "interactive-fvH2r9lQ",
                active: "active-fvH2r9lQ",
                toggleable: "toggleable-fvH2r9lQ",
                "color-lightBlue": "color-lightBlue-fvH2r9lQ",
                "color-red": "color-red-fvH2r9lQ",
                "color-orange": "color-orange-fvH2r9lQ",
                "variant-round": "variant-round-fvH2r9lQ",
                "variant-square": "variant-square-fvH2r9lQ"
            }
        },
        869746: e => {
            e.exports = {
                videoWindow: "videoWindow-_6rGgvep"
            }
        },
        754442: e => {
            e.exports = {
                animate: "animate-tTse2GlE",
                "record-view-preparing-animation": "record-view-preparing-animation-tTse2GlE",
                infoDialog: "infoDialog-tTse2GlE",
                container: "container-tTse2GlE",
                fixedWidth: "fixedWidth-tTse2GlE",
                menuWrap: "menuWrap-tTse2GlE",
                button: "button-tTse2GlE",
                fillButton: "fillButton-tTse2GlE",
                tabletButton: "tabletButton-tTse2GlE",
                publishBtn: "publishBtn-tTse2GlE",
                connectingBtn: "connectingBtn-tTse2GlE",
                preparingBtn: "preparingBtn-tTse2GlE",
                recordingBtn: "recordingBtn-tTse2GlE",
                toggleableBtn: "toggleableBtn-tTse2GlE",
                menuItem: "menuItem-tTse2GlE",
                title: "title-tTse2GlE",
                description: "description-tTse2GlE",
                badge: "badge-tTse2GlE"
            }
        },
        20805: e => {
            e.exports = {
                previewDialog: "previewDialog-pNqDjpi4",
                video: "video-pNqDjpi4",
                previewButtons: "previewButtons-pNqDjpi4",
                button: "button-pNqDjpi4",
                wrapper: "wrapper-pNqDjpi4",
                error: "error-pNqDjpi4",
                "error-block": "error-block-pNqDjpi4",
                "error-title": "error-title-pNqDjpi4",
                "error-title-icon": "error-title-icon-pNqDjpi4",
                "error-title-text": "error-title-text-pNqDjpi4",
                "error-title-description": "error-title-description-pNqDjpi4"
            }
        },
        344919: e => {
            e.exports = {
                text: "text-WwJ4u64L",
                paragraph: "paragraph-WwJ4u64L",
                list: "list-WwJ4u64L"
            }
        },
        12805: e => {
            e.exports = {
                button: "button-fhE1_4Xj",
                isDisabled: "isDisabled-fhE1_4Xj"
            }
        },
        947406: e => {
            e.exports = {
                saveString: "saveString-Wuq5IorU",
                hidden: "hidden-Wuq5IorU",
                loader: "loader-Wuq5IorU"
            }
        },
        280803: e => {
            e.exports = {
                opened: "opened-PSZfKmCG",
                hover: "hover-PSZfKmCG",
                autoSaveWrapper: "autoSaveWrapper-PSZfKmCG",
                sharingWrapper: "sharingWrapper-PSZfKmCG",
                button: "button-PSZfKmCG",
                buttonSmallPadding: "buttonSmallPadding-PSZfKmCG",
                hintPlaceHolder: "hintPlaceHolder-PSZfKmCG",
                smallHintPlaceHolder: "smallHintPlaceHolder-PSZfKmCG",
                popupItemRowTabletSmall: "popupItemRowTabletSmall-PSZfKmCG",
                shortcut: "shortcut-PSZfKmCG",
                toolTitle: "toolTitle-PSZfKmCG",
                toolTitleMobile: "toolTitleMobile-PSZfKmCG",
                layoutItem: "layoutItem-PSZfKmCG",
                layoutMeta: "layoutMeta-PSZfKmCG",
                labelRow: "labelRow-PSZfKmCG",
                layoutTitle: "layoutTitle-PSZfKmCG",
                layoutItemWrap: "layoutItemWrap-PSZfKmCG",
                layoutTitleMobile: "layoutTitleMobile-PSZfKmCG",
                active: "active-PSZfKmCG",
                textWrap: "textWrap-PSZfKmCG",
                text: "text-PSZfKmCG",
                withIcon: "withIcon-PSZfKmCG",
                sharingLabelWrap: "sharingLabelWrap-PSZfKmCG",
                infoIcon: "infoIcon-PSZfKmCG",
                copyLink: "copyLink-PSZfKmCG",
                copyLinkMobile: "copyLinkMobile-PSZfKmCG"
            }
        },
        758893: e => {
            e.exports = {
                button: "button-rlvYsQ_k",
                largeLeftPadding: "largeLeftPadding-rlvYsQ_k",
                text: "text-rlvYsQ_k",
                uppercase: "uppercase-rlvYsQ_k"
            }
        },
        110431: e => {
            e.exports = {
                button: "button-_iN2IH5A",
                text: "text-_iN2IH5A",
                logo: "logo-_iN2IH5A"
            }
        },
        648813: e => {
            e.exports = {
                description: "description-pI85IN0X"
            }
        },
        708538: e => {
            e.exports = {
                item: "item-V0xAFkBB",
                round: "round-V0xAFkBB"
            }
        },
        550444: e => {
            e.exports = {
                wrap: "wrap-tynHcbsI",
                titleWrap: "titleWrap-tynHcbsI",
                indicators: "indicators-tynHcbsI",
                title: "title-tynHcbsI",
                icon: "icon-tynHcbsI",
                text: "text-tynHcbsI",
                titleTabletSmall: "titleTabletSmall-tynHcbsI",
                labelRow: "labelRow-tynHcbsI",
                label: "label-tynHcbsI"
            }
        },
        523978: e => {
            e.exports = {
                labelRow: "labelRow-nQmSZ6zP",
                toolbox: "toolbox-nQmSZ6zP",
                description: "description-nQmSZ6zP",
                descriptionTabletSmall: "descriptionTabletSmall-nQmSZ6zP",
                item: "item-nQmSZ6zP",
                titleItem: "titleItem-nQmSZ6zP",
                titleItemTabletSmall: "titleItemTabletSmall-nQmSZ6zP",
                itemTabletSmall: "itemTabletSmall-nQmSZ6zP",
                itemLabelTabletSmall: "itemLabelTabletSmall-nQmSZ6zP",
                wrap: "wrap-nQmSZ6zP",
                hovered: "hovered-nQmSZ6zP"
            }
        },
        719366: e => {
            e.exports = {
                menu: "menu-UCGfiau8",
                menuSmallTablet: "menuSmallTablet-UCGfiau8",
                menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-UCGfiau8",
                menuItemHeader: "menuItemHeader-UCGfiau8"
            }
        },
        315865: e => {
            e.exports = {
                wrap: "wrap-_hkHmHWX",
                full: "full-_hkHmHWX",
                first: "first-_hkHmHWX",
                last: "last-_hkHmHWX",
                medium: "medium-_hkHmHWX",
                buttonWithFavorites: "buttonWithFavorites-_hkHmHWX"
            }
        },
        93260: e => {
            e.exports = {
                icon: "icon-ZSkNJ_HT"
            }
        },
        154266: e => {
            e.exports = {
                dialog: "dialog-vICU0ltK",
                radius: "radius-vICU0ltK",
                container: "container-vICU0ltK",
                header: "header-vICU0ltK",
                title: "title-vICU0ltK",
                icon: "icon-vICU0ltK",
                text: "text-vICU0ltK",
                paragraph: "paragraph-vICU0ltK",
                paddingTop: "paddingTop-vICU0ltK",
                list: "list-vICU0ltK",
                checkbox: "checkbox-vICU0ltK",
                buttons: "buttons-vICU0ltK",
                button: "button-vICU0ltK"
            }
        },
        202339: (e, t, n) => {
            "use strict";
            n.d(t, {
                triesTranslateCountrieName: () => a
            });
            var i = n(777754);

            function a(e) {
                return o.get(e) || e
            }
            const o = new Map([
                ["Africa", i.t(null, void 0, n(655312))],
                ["Americas", i.t(null, void 0, n(958290))],
                ["Asia", i.t(null, void 0, n(161768))],
                ["Europe", i.t(null, void 0, n(559592))],
                ["Pacific", i.t(null, void 0, n(632715))],
                ["Middle East", i.t(null, void 0, n(372560))],
                ["Afghanistan", i.t(null, void 0, n(488561))],
                ["Åland Islands", i.t(null, void 0, n(574177))],
                ["Albania", i.t(null, void 0, n(131898))],
                ["Algeria", i.t(null, void 0, n(181053))],
                ["American Samoa", i.t(null, void 0, n(655410))],
                ["Andorra", i.t(null, void 0, n(682079))],
                ["Angola", i.t(null, void 0, n(476342))],
                ["Anguilla", i.t(null, void 0, n(768063))],
                ["Antarctica", i.t(null, void 0, n(314840))],
                ["Antigua and Barbuda", i.t(null, void 0, n(349809))],
                ["Argentina", i.t(null, void 0, n(834742))],
                ["Armenia", i.t(null, void 0, n(384290))],
                ["Aruba", i.t(null, void 0, n(399659))],
                ["Australia", i.t(null, void 0, n(50132))],
                ["Austria", i.t(null, void 0, n(226505))],
                ["Azerbaijan", i.t(null, void 0, n(751361))],
                ["Bahamas", i.t(null, void 0, n(755169))],
                ["Bahrain", i.t(null, void 0, n(53260))],
                ["Bangladesh", i.t(null, void 0, n(61587))],
                ["Barbados", i.t(null, void 0, n(560803))],
                ["Belarus", i.t(null, void 0, n(909293))],
                ["Belgium", i.t(null, void 0, n(637653))],
                ["Belize", i.t(null, void 0, n(577138))],
                ["Benin", i.t(null, void 0, n(800662))],
                ["Bermuda", i.t(null, void 0, n(852424))],
                ["Bhutan", i.t(null, void 0, n(624751))],
                ["Bolivia", i.t(null, void 0, n(984615))],
                ["Bonaire, Sint Eustatius and Saba", i.t(null, void 0, n(661033))],
                ["Bosnia and Herzegovina", i.t(null, void 0, n(41448))],
                ["Botswana", i.t(null, void 0, n(746406))],
                ["Bouvet Island", i.t(null, void 0, n(896497))],
                ["Brazil", i.t(null, void 0, n(228867))],
                ["British Indian Ocean Territory", i.t(null, void 0, n(660635))],
                ["British Virgin Islands", i.t(null, void 0, n(667354))],
                ["Brunei", i.t(null, void 0, n(660484))],
                ["Bulgaria", i.t(null, void 0, n(801685))],
                ["Burkina Faso", i.t(null, void 0, n(713026))],
                ["Burundi", i.t(null, void 0, n(238912))],
                ["Cabo Verde", i.t(null, void 0, n(996415))],
                ["Cambodia", i.t(null, void 0, n(551054))],
                ["Cameroon", i.t(null, void 0, n(201132))],
                ["Canada", i.t(null, void 0, n(280206))],
                ["Cayman Islands", i.t(null, void 0, n(290207))],
                ["Central African Republic", i.t(null, void 0, n(145112))],
                ["Chad", i.t(null, void 0, n(137093))],
                ["Chile", i.t(null, void 0, n(141840))],
                ["China", i.t(null, void 0, n(420844))],
                ["Christmas Island", i.t(null, void 0, n(180144))],
                ["Cocos (Keeling) Islands", i.t(null, void 0, n(269358))],
                ["Colombia", i.t(null, void 0, n(731144))],
                ["Comoros", i.t(null, void 0, n(408646))],
                ["Congo", i.t(null, void 0, n(601406))],
                ["Congo (the Democratic Republic of the)", i.t(null, void 0, n(167291))],
                ["Cook Islands", i.t(null, void 0, n(453679))],
                ["Curacao", i.t(null, void 0, n(495937))],
                ["Costa Rica", i.t(null, void 0, n(708897))],
                ["Côte d'Ivoire", i.t(null, void 0, n(743648))],
                ["Croatia", i.t(null, void 0, n(663849))],
                ["Cuba", i.t(null, void 0, n(987240))],
                ["Curaçao", i.t(null, void 0, n(289599))],
                ["Cyprus", i.t(null, void 0, n(551017))],
                ["Czechia", i.t(null, void 0, n(471406))],
                ["Czech Republic", i.t(null, void 0, n(342054))],
                ["Denmark", i.t(null, void 0, n(64901))],
                ["Djibouti", i.t(null, void 0, n(439687))],
                ["Dominica", i.t(null, void 0, n(887461))],
                ["Dominican Republic", i.t(null, void 0, n(863314))],
                ["Ecuador", i.t(null, void 0, n(593004))],
                ["Egypt", i.t(null, void 0, n(205390))],
                ["El Salvador", i.t(null, void 0, n(444228))],
                ["Equatorial Guinea", i.t(null, void 0, n(802376))],
                ["Eritrea", i.t(null, void 0, n(33356))],
                ["Estonia", i.t(null, void 0, n(959823))],
                ["Falkland Islands", i.t(null, void 0, n(903181))],
                ["Eswatini", i.t(null, void 0, n(871985))],
                ["Ethiopia", i.t(null, void 0, n(698440))],
                ["European Union", i.t(null, void 0, n(600442))],
                ["Falkland Islands (Malvinas)", i.t(null, void 0, n(464588))],
                ["Faroe Islands", i.t(null, void 0, n(246844))],
                ["Fiji", i.t(null, void 0, n(979981))],
                ["Finland", i.t(null, void 0, n(936693))],
                ["France", i.t(null, void 0, n(696013))],
                ["French Guiana", i.t(null, void 0, n(345206))],
                ["French Polynesia", i.t(null, void 0, n(400778))],
                ["French Southern Territories", i.t(null, void 0, n(35328))],
                ["Gabon", i.t(null, void 0, n(281273))],
                ["Gambia", i.t(null, void 0, n(680793))],
                ["Georgia", i.t(null, void 0, n(118059))],
                ["Germany", i.t(null, void 0, n(159985))],
                ["Ghana", i.t(null, void 0, n(848856))],
                ["Gibraltar", i.t(null, void 0, n(423151))],
                ["Greece", i.t(null, void 0, n(480411))],
                ["Greenland", i.t(null, void 0, n(17026))],
                ["Grenada", i.t(null, void 0, n(882614))],
                ["Guadeloupe", i.t(null, void 0, n(72606))],
                ["Guam", i.t(null, void 0, n(967946))],
                ["Guatemala", i.t(null, void 0, n(673613))],
                ["Guernsey", i.t(null, void 0, n(639445))],
                ["Guinea", i.t(null, void 0, n(236877))],
                ["Guinea-Bissau", i.t(null, void 0, n(193786))],
                ["Guyana", i.t(null, void 0, n(431526))],
                ["Haiti", i.t(null, void 0, n(409073))],
                ["Heard Island and McDonald Islands", i.t(null, void 0, n(941177))],
                ["Holy See", i.t(null, void 0, n(609984))],
                ["Honduras", i.t(null, void 0, n(351863))],
                ["Hong Kong", i.t(null, void 0, n(532918))],
                ["Hungary", i.t(null, void 0, n(930646))],
                ["Iceland", i.t(null, void 0, n(664150))],
                ["India", i.t(null, void 0, n(16207))],
                ["Indonesia", i.t(null, void 0, n(609759))],
                ["Iraq", i.t(null, void 0, n(351834))],
                ["Ireland", i.t(null, void 0, n(328408))],
                ["Isle of Man", i.t(null, void 0, n(582452))],
                ["Israel", i.t(null, void 0, n(261935))],
                ["Italy", i.t(null, void 0, n(43246))],
                ["Jamaica", i.t(null, void 0, n(516243))],
                ["Japan", i.t(null, void 0, n(692443))],
                ["Jersey", i.t(null, void 0, n(119803))],
                ["Jordan", i.t(null, void 0, n(418556))],
                ["Kazakhstan", i.t(null, void 0, n(17904))],
                ["Kenya", i.t(null, void 0, n(89080))],
                ["Kiribati", i.t(null, void 0, n(593442))],
                ["Kosovo", i.t(null, void 0, n(695873))],
                ["Kuwait", i.t(null, void 0, n(872374))],
                ["Kyrgyzstan", i.t(null, void 0, n(357872))],
                ["Laos", i.t(null, void 0, n(446984))],
                ["Latvia", i.t(null, void 0, n(484045))],
                ["Lebanon", i.t(null, void 0, n(249647))],
                ["Lesotho", i.t(null, void 0, n(491338))],
                ["Liberia", i.t(null, void 0, n(244568))],
                ["Libya", i.t(null, void 0, n(687451))],
                ["Liechtenstein", i.t(null, void 0, n(148202))],
                ["Lithuania", i.t(null, void 0, n(529113))],
                ["Luxembourg", i.t(null, void 0, n(164352))],
                ["Macau", i.t(null, void 0, n(881206))],
                ["Macao", i.t(null, void 0, n(316450))],
                ["Madagascar", i.t(null, void 0, n(975621))],
                ["Malawi", i.t(null, void 0, n(652371))],
                ["Malaysia", i.t(null, void 0, n(622622))],
                ["Maldives", i.t(null, void 0, n(704255))],
                ["Mali", i.t(null, void 0, n(410127))],
                ["Malta", i.t(null, void 0, n(334190))],
                ["Marshall Islands", i.t(null, void 0, n(991727))],
                ["Martinique", i.t(null, void 0, n(65413))],
                ["Mauritania", i.t(null, void 0, n(335075))],
                ["Mauritius", i.t(null, void 0, n(902616))],
                ["Mayotte", i.t(null, void 0, n(36227))],
                ["Mexico", i.t(null, void 0, n(555087))],
                ["Micronesia (Federated States of)", i.t(null, void 0, n(178455))],
                ["Moldova", i.t(null, void 0, n(503427))],
                ["Monaco", i.t(null, void 0, n(904982))],
                ["Mongolia", i.t(null, void 0, n(927963))],
                ["Montenegro", i.t(null, void 0, n(990370))],
                ["Montserrat", i.t(null, void 0, n(153868))],
                ["Morocco", i.t(null, void 0, n(216641))],
                ["Mozambique", i.t(null, void 0, n(158266))],
                ["Myanmar", i.t(null, void 0, n(830146))],
                ["Namibia", i.t(null, void 0, n(714417))],
                ["Nauru", i.t(null, void 0, n(223060))],
                ["Nepal", i.t(null, void 0, n(128228))],
                ["Netherlands", i.t(null, void 0, n(353770))],
                ["New Caledonia", i.t(null, void 0, n(748447))],
                ["New Zealand", i.t(null, void 0, n(824143))],
                ["Nicaragua", i.t(null, void 0, n(972215))],
                ["Niger", i.t(null, void 0, n(374005))],
                ["Nigeria", i.t(null, void 0, n(62410))],
                ["Niue", i.t(null, void 0, n(136995))],
                ["Norfolk Island", i.t(null, void 0, n(99203))],
                ["North Macedonia", i.t(null, void 0, n(420385))],
                ["Northern Mariana Islands", i.t(null, void 0, n(498923))],
                ["Norway", i.t(null, void 0, n(145075))],
                ["Oman", i.t(null, void 0, n(552456))],
                ["Pakistan", i.t(null, void 0, n(49145))],
                ["Palau", i.t(null, void 0, n(986532))],
                ["Palestine, State of", i.t(null, void 0, n(103738))],
                ["Panama", i.t(null, void 0, n(747908))],
                ["Papua New Guinea", i.t(null, void 0, n(666802))],
                ["Paraguay", i.t(null, void 0, n(33773))],
                ["Peru", i.t(null, void 0, n(622979))],
                ["Philippines", i.t(null, void 0, n(226813))],
                ["Pitcairn", i.t(null, void 0, n(539338))],
                ["Poland", i.t(null, void 0, n(210119))],
                ["Portugal", i.t(null, void 0, n(123496))],
                ["Puerto Rico", i.t(null, void 0, n(651330))],
                ["Qatar", i.t(null, void 0, n(619056))],
                ["Réunion", i.t(null, void 0, n(102711))],
                ["Romania", i.t(null, void 0, n(385646))],
                ["Russia", i.t(null, void 0, n(230799))],
                ["Russian Federation", i.t(null, void 0, n(238201))],
                ["SINT MAARTEN (DUTCH PART)", i.t(null, void 0, n(262681))],
                ["Rwanda", i.t(null, void 0, n(242890))],
                ["Saint Barthélemy", i.t(null, void 0, n(2679))],
                ["Saint Helena, Ascension and Tristan da Cunha", i.t(null, void 0, n(499829))],
                ["Saint Kitts and Nevis", i.t(null, void 0, n(317639))],
                ["Saint Lucia", i.t(null, void 0, n(174215))],
                ["Saint Martin (French part)", i.t(null, void 0, n(566083))],
                ["Saint Pierre and Miquelon", i.t(null, void 0, n(779773))],
                ["Saint Vincent and the Grenadines", i.t(null, void 0, n(189466))],
                ["Samoa", i.t(null, void 0, n(855735))],
                ["San Marino", i.t(null, void 0, n(935297))],
                ["Sao Tome and Principe", i.t(null, void 0, n(767112))],
                ["Saudi Arabia", i.t(null, void 0, n(936261))],
                ["Senegal", i.t(null, void 0, n(415882))],
                ["Serbia", i.t(null, void 0, n(896573))],
                ["Seychelles", i.t(null, void 0, n(959609))],
                ["Sierra Leone", i.t(null, void 0, n(338217))],
                ["Singapore", i.t(null, void 0, n(156683))],
                ["Sint Maarten (Dutch part)", i.t(null, void 0, n(236150))],
                ["Slovakia", i.t(null, void 0, n(506262))],
                ["Slovenia", i.t(null, void 0, n(42141))],
                ["Solomon Islands", i.t(null, void 0, n(495446))],
                ["Somalia", i.t(null, void 0, n(334373))],
                ["South Africa", i.t(null, void 0, n(528900))],
                ["South Georgia and the South Sandwich Islands", i.t(null, void 0, n(638670))],
                ["South Korea", i.t(null, void 0, n(173160))],
                ["South Sudan", i.t(null, void 0, n(197758))],
                ["Spain", i.t(null, void 0, n(792334))],
                ["Sri Lanka", i.t(null, void 0, n(567835))],
                ["Sudan", i.t(null, void 0, n(162923))],
                ["Suriname", i.t(null, void 0, n(281528))],
                ["Svalbard and Jan Mayen", i.t(null, void 0, n(705904))],
                ["Sweden", i.t(null, void 0, n(182404))],
                ["Switzerland", i.t(null, void 0, n(440414))],
                ["Syria", i.t(null, void 0, n(443174))],
                ["Taiwan", i.t(null, void 0, n(460919))],
                ["Tajikistan", i.t(null, void 0, n(826553))],
                ["Tanzania", i.t(null, void 0, n(185494))],
                ["Thailand", i.t(null, void 0, n(433138))],
                ["Timor-Leste", i.t(null, void 0, n(655802))],
                ["Togo", i.t(null, void 0, n(574871))],
                ["Tokelau", i.t(null, void 0, n(520466))],
                ["Tonga", i.t(null, void 0, n(724580))],
                ["Trinidad and Tobago", i.t(null, void 0, n(333041))],
                ["Tunisia", i.t(null, void 0, n(420638))],
                ["Turkey", i.t(null, void 0, n(694398))],
                ["Turkmenistan", i.t(null, void 0, n(616831))],
                ["Turks and Caicos Islands", i.t(null, void 0, n(555526))],
                ["Tuvalu", i.t(null, void 0, n(626449))],
                ["U.S. Virgin Islands", i.t(null, void 0, n(728542))],
                ["UAE", i.t(null, void 0, n(975308))],
                ["USA", i.t(null, void 0, n(787935))],
                ["Uganda", i.t(null, void 0, n(308395))],
                ["Ukraine", i.t(null, void 0, n(263018))],
                ["United Arab Emirates", i.t(null, void 0, n(287916))],
                ["United Kingdom", i.t(null, void 0, n(606994))],
                ["United States", i.t(null, void 0, n(411176))],
                ["United States Minor Outlying Islands", i.t(null, void 0, n(431860))],
                ["Uruguay", i.t(null, void 0, n(124991))],
                ["USA", i.t(null, void 0, n(787935))],
                ["Uzbekistan", i.t(null, void 0, n(730902))],
                ["Vanuatu", i.t(null, void 0, n(863837))],
                ["Venezuela", i.t(null, void 0, n(739055))],
                ["Vietnam", i.t(null, void 0, n(450049))],
                ["Virgin Islands (British)", i.t(null, void 0, n(159002))],
                ["Virgin Islands (U.S.)", i.t(null, void 0, n(707897))],
                ["Wallis and Futuna", i.t(null, void 0, n(258159))],
                ["Western Sahara", i.t(null, void 0, n(419992))],
                ["Yemen", i.t(null, void 0, n(242175))],
                ["Zambia", i.t(null, void 0, n(239478))],
                ["Zimbabwe", i.t(null, void 0, n(58309))]
            ])
        },
        390704: (e, t, n) => {
            "use strict";
            n.d(t, {
                CollapsibleSection: () => l
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(416293),
                s = n(126854);

            function l(e) {
                return i.createElement(i.Fragment, null, i.createElement("div", {
                    className: o()(e.className, s.summary),
                    onClick: function() {
                        e.onStateChange && e.onStateChange(!e.open)
                    },
                    "data-open": e.open
                }, e.summary, i.createElement(r.ToolWidgetCaret, {
                    className: s.caret,
                    dropped: Boolean(e.open)
                })), e.open && e.children)
            }
        },
        320711: (e, t, n) => {
            "use strict";
            n.d(t, {
                DEFAULT_MENU_ITEM_SWITCHER_THEME: () => d,
                MenuItemSwitcher: () => u
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(694553),
                s = n(83436),
                l = n(8626),
                c = n(206001);
            const d = c;

            function u(e) {
                const {
                    className: t,
                    checked: n,
                    id: a,
                    label: d,
                    labelDescription: u,
                    value: h,
                    preventLabelHighlight: m,
                    reference: v,
                    switchReference: p,
                    theme: g = c,
                    disabled: S,
                    icon: b
                } = e, f = o()(g.label, n && !m && g.labelOn), y = o()(t, g.wrapper, n && g.wrapperWithOnLabel, u && g.wrapperWithDescription);
                return i.createElement("label", {
                    className: o()(y, b && g.withIcon),
                    htmlFor: a,
                    ref: v
                }, void 0 !== b && i.createElement(s.Icon, {
                    className: g.icon,
                    icon: b
                }), i.createElement("div", {
                    className: g.labelRow
                }, i.createElement("div", {
                    className: f
                }, d), u && i.createElement("div", {
                    className: g.labelHint
                }, u)), i.createElement("div", {
                    className: c.switchWrap
                }, i.createElement(r.Switch, {
                    disabled: S,
                    className: g.switch,
                    reference: p,
                    checked: n,
                    onChange: function(t) {
                        const n = t.target.checked;
                        void 0 !== e.onChange && e.onChange(n)
                    },
                    value: h,
                    tabIndex: -1,
                    id: a,
                    role: e.switchRole,
                    ...(0, l.filterDataProps)(e)
                })))
            }
        },
        826316: (e, t, n) => {
            "use strict";
            n.d(t, {
                menuItemSwitcherMobileTheme: () => r
            });
            var i = n(995683),
                a = n(320711),
                o = n(465785);
            const r = (0, i.mergeThemes)(a.DEFAULT_MENU_ITEM_SWITCHER_THEME, o)
        },
        898930: (e, t, n) => {
            "use strict";
            n.d(t, {
                VerticalAttachEdge: () => i,
                HorizontalAttachEdge: () => a,
                VerticalDropDirection: () => o,
                HorizontalDropDirection: () => r,
                getPopupPositioner: () => c
            });
            var i, a, o, r, s = n(650151);
            ! function(e) {
                e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
            }(i || (i = {})),
            function(e) {
                e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
            }(a || (a = {})),
            function(e) {
                e[e.FromTopToBottom = 0] = "FromTopToBottom", e[e.FromBottomToTop = 1] = "FromBottomToTop"
            }(o || (o = {})),
            function(e) {
                e[e.FromLeftToRight = 0] = "FromLeftToRight", e[e.FromRightToLeft = 1] = "FromRightToLeft"
            }(r || (r = {}));
            const l = {
                verticalAttachEdge: i.Bottom,
                horizontalAttachEdge: a.Left,
                verticalDropDirection: o.FromTopToBottom,
                horizontalDropDirection: r.FromLeftToRight,
                verticalMargin: 0,
                horizontalMargin: 0,
                matchButtonAndListboxWidths: !1
            };

            function c(e, t) {
                return (n, c) => {
                    const d = (0, s.ensureNotNull)(e).getBoundingClientRect(),
                        {
                            verticalAttachEdge: u = l.verticalAttachEdge,
                            verticalDropDirection: h = l.verticalDropDirection,
                            horizontalAttachEdge: m = l.horizontalAttachEdge,
                            horizontalDropDirection: v = l.horizontalDropDirection,
                            horizontalMargin: p = l.horizontalMargin,
                            verticalMargin: g = l.verticalMargin,
                            matchButtonAndListboxWidths: S = l.matchButtonAndListboxWidths
                        } = t,
                        b = u === i.Top ? -1 * g : g,
                        f = m === a.Right ? d.right : d.left,
                        y = u === i.Top ? d.top : d.bottom,
                        w = {
                            x: f - (v === r.FromRightToLeft ? n : 0) + p,
                            y: y - (h === o.FromBottomToTop ? c : 0) + b
                        };
                    return S && (w.overrideWidth = d.width), w
                }
            }
        },
        901910: (e, t, n) => {
            "use strict";
            n.d(t, {
                getRecentLayouts: () => a
            });
            var i = n(890740);

            function a() {
                return (0, i.fetch)("/my-charts/?limit=4", {
                    credentials: "include"
                }).then((e => {
                    if (e.ok) return e.json();
                    throw new Error("not ok")
                })).then((e => e.sort(((e, t) => e.modified_iso > t.modified_iso ? -1 : 1))))
            }
        },
        821190: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolTitle: () => s
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(997228);

            function s(e) {
                const {
                    className: t,
                    text: n,
                    id: a,
                    role: s,
                    ariaHidden: l
                } = e;
                return i.createElement("div", {
                    className: o()(r.title, t),
                    id: a,
                    role: s,
                    "aria-hidden": l
                }, n)
            }
        },
        571821: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetCollapsibleButton: () => l
            });
            var i = n(50959),
                a = n(497754),
                o = n(983731),
                r = n(145184);
            const s = ["medium", "small"];

            function l(e) {
                const {
                    text: t,
                    className: n,
                    displayMode: l,
                    collapseWhen: c = s,
                    ...d
                } = e, u = !c.includes(l);
                return i.createElement(o.ToolWidgetButton, { ...d,
                    text: u ? t : void 0,
                    className: a(n, r.button, u ? r.withText : r.withoutText)
                })
            }
        },
        159642: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetIconButton: () => s
            });
            var i = n(50959),
                a = n(497754),
                o = n(983731),
                r = n(574749);
            const s = i.forwardRef(((e, t) => {
                const {
                    className: n,
                    id: s,
                    ...l
                } = e;
                return i.createElement(o.ToolWidgetButton, {
                    "data-name": s,
                    ...l,
                    ref: t,
                    className: a(n, r.button)
                })
            }))
        },
        821255: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetMenuSpinner: () => l
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(612247),
                s = n(252149);

            function l(e) {
                const {
                    className: t
                } = e;
                return i.createElement("div", {
                    className: o()(s.spinnerWrap, t)
                }, i.createElement(r.Loader, null))
            }
        },
        653929: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetScreenshotContent: () => k
            });
            var i = n(50959),
                a = n(777754),
                o = n(497754),
                r = n(503595),
                s = n(963239),
                l = n(470316),
                c = n(251954),
                d = n(139583),
                u = n(634993),
                h = n(224743),
                m = n(995683),
                v = n(612247),
                p = n(46949);

            function g(e) {
                const t = o(e.isLoading && p.hidden),
                    n = o(!e.isLoading && p.hidden);
                return i.createElement("div", null, i.createElement("span", {
                    className: t
                }, e.children), i.createElement("span", {
                    className: n
                }, i.createElement(v.Loader, null)))
            }
            var S = n(640027),
                b = n(884502),
                f = n(201457),
                y = n(323595),
                w = n(929414),
                _ = n(899280),
                C = n(832924);
            const E = (0, m.mergeThemes)(u.DEFAULT_POPUP_MENU_ITEM_THEME, C);

            function k(e) {
                const {
                    serverSnapshot: t,
                    clientSnapshot: m,
                    hideShortcuts: v
                } = e, [p, k] = (0, i.useState)(!1), [T, x] = (0, i.useState)(!1), [M, I] = (0, i.useState)(!1), N = (0, S.useIsMounted)(), A = (0, i.useCallback)((async () => {
                    var e;
                    const t = m(),
                        n = t.then((e => new Promise((t => e.canvas.toBlob((e => {
                            null !== e && t(e)
                        }))))));
                    try {
                        await (0, s.writePromiseUsingApi)(n, "image/png"), c.emit("onClientScreenshotCopiedToClipboard")
                    } catch (n) {
                        const {
                            canvas: i
                        } = await t;
                        null === (e = window.open()) || void 0 === e || e.document.write(`<img width="100%" src="${i.toDataURL()}"/>`)
                    }
                }), [m]), z = (0, i.useCallback)((async () => {
                    const e = await m(),
                        t = await
                    function(e) {
                        return new Promise((t => {
                            try {
                                e.canvas.toBlob((e => {
                                    if (null === e) throw new Error("Unable to generate blob");
                                    t(URL.createObjectURL(e))
                                }))
                            } catch (n) {
                                t(e.canvas.toDataURL())
                            }
                        }))
                    }(e);
                    t && (0, d.downloadFile)(`${e.name}.png`, t)
                }), [m]), P = e => (0, r.asyncWindowOpen)(e.then((e => e.imageUrl))), R = (0, i.useCallback)((async (e = !1) => {
                    const n = t();
                    try {
                        if (e) await P(n);
                        else {
                            const e = n.then((e => new Blob([e.imageUrl], {
                                type: "text/plain"
                            })));
                            await (0, s.writePromiseUsingApi)(e, "text/plain"),
                            c.emit("onServerScreenshotCopiedToClipboard")
                        }
                        return !0
                    } catch (e) {
                        return P(n), !0
                    } finally {
                        N.current && (x(!1), k(!1), (0, h.globalCloseMenu)())
                    }
                }), [t]), L = (0, i.useCallback)((async () => {
                    I(!0);
                    const [e, i] = await Promise.all([n.e(4665).then(n.bind(n, 600546)), t()]);
                    e.Twitter.shareSnapshotInstantly(i.symbol, i.imageUrl), N.current && (I(!1), (0, h.globalCloseMenu)())
                }), [t]);
                return i.createElement(i.Fragment, null, i.createElement(u.PopupMenuItem, {
                    "data-name": "save-chart-image",
                    label: a.t(null, void 0, n(757352)),
                    icon: y,
                    onClick: z,
                    shortcut: v ? void 0 : (0, l.humanReadableHash)(l.Modifiers.Mod + l.Modifiers.Alt + 83),
                    theme: E
                }), i.createElement(u.PopupMenuItem, {
                    "data-name": "copy-chart-image",
                    label: a.t(null, void 0, n(196935)),
                    icon: f,
                    onClick: A,
                    shortcut: v ? void 0 : (0, l.humanReadableHash)(l.Modifiers.Mod + l.Modifiers.Shift + 83),
                    theme: E
                }), i.createElement(u.PopupMenuItem, {
                    "data-name": "copy-link-to-the-chart-image",
                    label: i.createElement(g, {
                        isLoading: p
                    }, a.t(null, void 0, n(715803))),
                    icon: w,
                    onClick: () => {
                        k(!0), R(!1)
                    },
                    dontClosePopup: !0,
                    isDisabled: p,
                    shortcut: v ? void 0 : (0, l.humanReadableHash)(l.Modifiers.Alt + 83),
                    className: o(p && C.loading),
                    theme: E
                }), i.createElement(u.PopupMenuItem, {
                    "data-name": "open-image-in-new-tab",
                    label: i.createElement(g, {
                        isLoading: T
                    }, a.t(null, void 0, n(102226))),
                    icon: _,
                    onClick: () => {
                        x(!0), R(!0)
                    },
                    dontClosePopup: !0,
                    isDisabled: T,
                    className: o(T && C.loading),
                    theme: E
                }), i.createElement(u.PopupMenuItem, {
                    "data-name": "tweet-chart-image",
                    label: i.createElement(g, {
                        isLoading: M
                    }, a.t(null, void 0, n(509765))),
                    icon: b,
                    onClick: L,
                    dontClosePopup: !0,
                    isDisabled: M,
                    className: o(M && C.loading),
                    theme: E
                }))
            }
        },
        298023: (e, t, n) => {
            "use strict";
            n.d(t, {
                bindScreenshot: () => v
            });
            var i = n(777754),
                a = n(50959),
                o = n(719036),
                r = n(495046),
                s = n(231656),
                l = n(238066),
                c = n(147279),
                d = n(696828);
            const u = new c.DateTimeFormatter({
                    dateTimeSeparator: "_",
                    timeFormat: "%h-%m-%s"
                }),
                h = {
                    takeSnapshot: i.t(null, void 0, n(588513))
                },
                m = (0, s.registryContextType)();

            function v(e) {
                var t;
                return (t = class extends a.PureComponent {
                    constructor(e, t) {
                        super(e, t), this._clientSnapshot = async () => {
                            const e = this.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol();
                            return {
                                canvas: await this.context.chartWidgetCollection.clientSnapshot(),
                                name: `${(0,d.shortName)(e)}_${u.formatLocal(new Date)}`
                            }
                        }, this._serverSnapshot = async () => {
                            const e = this.context.chartWidgetCollection.activeChartWidget.value().model().mainSeries().actualSymbol(),
                                t = await this.context.chartWidgetCollection.takeScreenshot(),
                                n = r.enabled("charting_library_base") && void 0 !== this.context.snapshotUrl ? t : (0, l.convertImageNameToUrl)(t);
                            return {
                                symbol: (0, d.shortName)(e),
                                imageUrl: n
                            }
                        }, (0, s.validateRegistry)(t, {
                            chartWidgetCollection: o.any.isRequired
                        })
                    }
                    render() {
                        const {
                            className: t,
                            id: n
                        } = this.props;
                        return a.createElement(e, {
                            id: n,
                            className: t,
                            tooltip: h.takeSnapshot,
                            serverSnapshot: this._serverSnapshot,
                            clientSnapshot: this._clientSnapshot
                        })
                    }
                }).contextType = m, t
            }
        },
        1574: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackButtonClick: () => a
            });
            var i = n(776734);

            function a(e, t, n, a) {
                (0, i.getTracker)().then((i => {
                    null !== i && i.trackToolbarButtonClick(e, n ? `${t} ${n}` : t, a)
                }))
            }
        },
        42849: (e, t, n) => {
            "use strict";
            n.d(t, {
                getRestrictedToolSet: () => wn
            });
            var i = n(495046),
                a = n(50959),
                o = n(719036),
                r = n(777754),
                s = n(583912),
                l = n(933813),
                c = n(133290),
                d = n(852668),
                u = n(83436),
                h = n(634993),
                m = n(575296),
                v = n(497754),
                p = n.n(v),
                g = n(572281);
            const S = a.forwardRef(((e, t) => {
                const {
                    children: n,
                    className: i,
                    ...o
                } = e;
                return a.createElement("div", {
                    className: v(i, g.wrap),
                    ref: t,
                    ...o
                }, n)
            }));
            var b = n(983731),
                f = n(8626),
                y = n(842431);
            class w extends a.PureComponent {
                constructor() {
                    super(...arguments), this._handleClick = () => {
                        const {
                            onClick: e,
                            onClickArg: t
                        } = this.props;
                        e && e(t)
                    }
                }
                render() {
                    const {
                        isFirst: e,
                        isLast: t,
                        hint: n,
                        text: i,
                        icon: o,
                        isActive: r,
                        isDisabled: s,
                        className: l
                    } = this.props, c = (0, f.filterDataProps)(this.props);
                    return a.createElement(b.ToolWidgetButton, { ...c,
                        icon: o,
                        text: i,
                        title: n,
                        isDisabled: s,
                        isActive: r,
                        isGrouped: !0,
                        onClick: this._handleClick,
                        className: v(l, y.button, {
                            [y.first]: e,
                            [y.last]: t
                        })
                    })
                }
            }
            var _ = n(93916),
                C = n(18182),
                E = n(642709),
                k = n(62804),
                T = n(231656),
                x = n(712270),
                M = n(720444),
                I = n(1574),
                N = n(890965);
            const A = {
                    barsStyle: r.t(null, void 0, n(684232))
                },
                z = (0, T.registryContextType)();

            function P(e) {
                var t;
                return !(null === (t = s.linking.supportedChartStyles.value()) || void 0 === t ? void 0 : t.includes(e))
            }
            class R extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleChangeStyle = e => {
                        const {
                            favorites: t,
                            lastSelectedNotFavorite: n,
                            activeStyle: i
                        } = this.state;
                        this.setState({
                            activeStyle: e,
                            lastSelectedNotFavorite: t.includes(i) ? n : i
                        })
                    }, this._handleSelectStyle = e => {
                        const {
                            chartWidgetCollection: t
                        } = this.context;
                        e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e)
                    }, this._handleClickFavorite = e => {
                        this._isStyleFavorited(e) ? this._handleRemoveFavorite(e) : this._handleAddFavorite(e)
                    }, this._boundForceUpdate = () => {
                        this.forceUpdate()
                    }, this._handleQuickClick = e => {
                        this._handleSelectStyle(e), this._trackClick()
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired,
                        favoriteChartStylesService: o.any.isRequired
                    });
                    const {
                        chartWidgetCollection: n,
                        favoriteChartStylesService: i
                    } = t, a = n.activeChartStyle.value(), r = i.get(), s = (0, x.japaneseChartStyles)();
                    this.state = {
                        activeStyle: a,
                        favorites: r,
                        styles: (0, x.commonChartStyles)(),
                        japaneseStyles: s
                    }
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e,
                        favoriteChartStylesService: t
                    } = this.context;
                    e.activeChartStyle.subscribe(this._handleChangeStyle), t.getOnChange().subscribe(this, this._handleChangeSettings), s.linking.supportedChartStyles.subscribe(this._boundForceUpdate)
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e,
                        favoriteChartStylesService: t
                    } = this.context;
                    e.activeChartStyle.unsubscribe(this._handleChangeStyle), t.getOnChange().unsubscribe(this, this._handleChangeSettings), s.linking.supportedChartStyles.unsubscribe(this._boundForceUpdate)
                }
                render() {
                    const {
                        isShownQuicks: e,
                        displayMode: t = "full",
                        id: n
                    } = this.props, {
                        activeStyle: i,
                        favorites: o,
                        styles: r,
                        japaneseStyles: s,
                        lastSelectedNotFavorite: d
                    } = this.state, h = "small" !== t && e && 0 !== o.length, v = [...o];
                    v.includes(i) ? void 0 !== d && v.push(d) : v.push(i);
                    const p = h && v.length > 1;
                    return a.createElement(C.MatchMedia, {
                        rule: E.DialogBreakpoints.TabletSmall
                    }, (e => {
                        const t = r.map((t => this._renderPopupMenuItem(t, t === i, e))),
                            o = s.map((t => this._renderPopupMenuItem(t, t === i, e)));
                        return a.createElement(S, {
                            id: n
                        }, p && v.map(((e, t) => a.createElement(w, {
                            className: N.button,
                            icon: c.SERIES_ICONS[e],
                            isActive: h && i === e,
                            isDisabled: P(e),
                            key: t,
                            hint: (0, M.getTranslatedChartStyleName)(e),
                            isFirst: 0 === t,
                            isLast: t === v.length - 1,
                            onClick: h ? this._handleQuickClick : void 0,
                            onClickArg: e,
                            "data-value": l.STYLE_SHORT_NAMES[e]
                        }))), a.createElement(m.ToolWidgetMenu, {
                            arrow: Boolean(p),
                            content: p ? void 0 : a.createElement(S, null, a.createElement(u.Icon, {
                                icon: c.SERIES_ICONS[i]
                            })),
                            title: p ? A.barsStyle : (0, M.getTranslatedChartStyleName)(i),
                            className: N.menu,
                            isDrawer: e,
                            onClick: this._trackClick
                        }, t, !!o.length && a.createElement(_.PopupMenuSeparator, null), o))
                    }))
                }
                _renderPopupMenuItem(e, t, n) {
                    const {
                        isFavoritingAllowed: i
                    } = this.props, o = this._isStyleFavorited(e);
                    return a.createElement(h.PopupMenuItem, {
                        key: e,
                        theme: n ? k.multilineLabelWithIconAndToolboxTheme : void 0,
                        icon: c.SERIES_ICONS[e],
                        isActive: t,
                        isDisabled: P(e),
                        label: (0, M.getTranslatedChartStyleName)(e) || "",
                        onClick: this._handleSelectStyle,
                        onClickArg: e,
                        showToolboxOnHover: !o,
                        toolbox: i && a.createElement(d.FavoriteButton, {
                            isActive: t,
                            isFilled: o,
                            onClick: () => this._handleClickFavorite(e)
                        }),
                        "data-value": l.STYLE_SHORT_NAMES[e]
                    })
                }
                _handleChangeSettings(e) {
                    this.setState({
                        lastSelectedNotFavorite: void 0,
                        favorites: e
                    })
                }
                _isStyleFavorited(e) {
                    return -1 !== this.state.favorites.indexOf(e)
                }
                _handleAddFavorite(e) {
                    const {
                        favorites: t
                    } = this.state, {
                        favoriteChartStylesService: n
                    } = this.context;
                    n.set([...t, e])
                }
                _handleRemoveFavorite(e) {
                    const {
                        favorites: t
                    } = this.state, {
                        favoriteChartStylesService: n
                    } = this.context;
                    n.set(t.filter((t => t !== e)))
                }
                _trackClick() {
                    (0, I.trackButtonClick)("top toolbar", "chart style")
                }
            }
            R.contextType = z;
            var L = n(571821),
                B = n(345848),
                D = n(301393);
            const H = {
                    compare: r.t(null, void 0, n(190069)),
                    compareOrAddSymbol: r.t(null, void 0, n(220229))
                },
                W = (0, T.registryContextType)();
            class F extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._updateState = e => {
                        this.setState({
                            isActive: e
                        })
                    }, this._handleClick = () => {
                        var e;
                        (0, B.trackEvent)("GUI", "Chart Header Toolbar", "compare"), (0, I.trackButtonClick)("top toolbar", "compare"), null === (e = this._compareDialogRenderer) || void 0 === e || e.show()
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    }), this.state = {
                        isActive: !1
                    }, this._compareDialogRenderer = this.context.chartWidgetCollection.getCompareDialogRenderer()
                }
                componentDidMount() {
                    var e;
                    null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().subscribe(this._updateState)
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._compareDialogRenderer) || void 0 === e || e.visible().unsubscribe(this._updateState)
                }
                render() {
                    const {
                        isActive: e
                    } = this.state;
                    return a.createElement(L.ToolWidgetCollapsibleButton, { ...this.props,
                        icon: D,
                        isOpened: e,
                        onClick: this._handleClick,
                        title: H.compareOrAddSymbol,
                        collapseWhen: ["full", "medium", "small"]
                    })
                }
            }
            F.contextType = W;
            var O = n(159642),
                U = n(604286),
                V = n(470316),
                G = n(597268);
            const q = {
                    hint: r.t(null, void 0, n(811682))
                },
                $ = (0, U.hotKeySerialize)({
                    keys: [(0, V.humanReadableModifiers)(V.Modifiers.Shift, !1), "F"],
                    text: "{0} + {1}"
                }),
                K = (0, T.registryContextType)();
            class X extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            chartWidgetCollection: e
                        } = this.context;
                        e.startFullscreen(), (0, I.trackButtonClick)("top toolbar", "fullscreen mode")
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    })
                }
                render() {
                    const {
                        className: e,
                        id: t
                    } = this.props;
                    return a.createElement(O.ToolWidgetIconButton, {
                        id: t,
                        icon: G,
                        onClick: this._handleClick,
                        title: q.hint,
                        className: v(e),
                        "data-tooltip-hotkey": $
                    })
                }
            }
            X.contextType = K;
            var j = n(650151),
                Z = n(823348),
                Q = n(293689),
                Y = n(971417);
            const J = (0, n(272001).getLogger)("FavoritesInfo");

            function ee(e, t) {
                if (0 === e.length) return Promise.resolve([]);
                J.logNormal("Requesting favorites info");
                const n = [],
                    i = new Map,
                    a = new Map,
                    o = new Map;
                return e.forEach((e => {
                    switch (e.type) {
                        case "java":
                            o.set(e.studyId, e);
                            break;
                        case "pine":
                            (0, Y.isPublishedPineId)(e.pineId) ? i.set(e.pineId, e): a.set(e.pineId, e);
                            break;
                        default:
                            (0, j.assert)(!1, `unknown favorite type ${JSON.stringify(e)}`)
                    }
                })), 0 !== o.size && n.push(t.findAllJavaStudies().then((e => {
                    const t = new Map;
                    for (const n of e) !n.is_hidden_study && o.has(n.id) && t.set(n.id, {
                        name: n.description,
                        localizedName: n.description_localized,
                        studyMarketShittyObject: n
                    });
                    return t
                })).then((e => {
                    const t = te(o, e);
                    if (0 !== t.notFoundItems.length) {
                        const e = t.notFoundItems.map((e => e.studyId));
                        J.logWarn(`Cannot find java scripts: ${JSON.stringify(e)}`)
                    }
                    return t.items
                }))), n.push(function(e) {
                    const t = new Map;
                    if (0 === e.length) return Promise.resolve(t);
                    return Promise.resolve(Z.info(e, !0).promise()).then((e => {
                        if (void 0 !== e)
                            for (const n of e) t.set(n.scriptIdPart, {
                                name: n.scriptName,
                                agreeCount: n.agreeCount,
                                authorUsername: n.author.username,
                                studyMarketShittyObject: n
                            });
                        return t
                    }))
                }(Array.from(i.keys())).then((e => {
                    const t = te(i, e);
                    if (0 !== t.notFoundItems.length) {
                        const e = t.notFoundItems.map((e => e.pineId));
                        J.logWarn(`Cannot find pub scripts: ${JSON.stringify(e)}`)
                    }
                    return t.items
                }))), n.push(function(e) {
                    const t = new Map;
                    return new Promise((n => {
                        (function(e) {
                            if (0 === e.length) return Promise.resolve(e);
                            return Promise.resolve(function(e) {
                                return e.filter((e => (0, Y.isStandardPineId)(e) || (0, Y.isCustomPineId)(e)))
                            }(e))
                        })(e).then((e => {
                            if (0 === e.length) return n(t);
                            (0, Q.requestInfoForScripts)(e).then((i => {
                                const a = new Set(e);
                                for (const e of i) a.has(e.scriptIdPart) && t.set(e.scriptIdPart, {
                                    name: e.scriptName,
                                    studyMarketShittyObject: e
                                });
                                n(t)
                            }))
                        }))
                    }))
                }(Array.from(a.keys())).then((e => {
                    const t = te(a, e);
                    if (0 !== t.notFoundItems.length) {
                        const e = t.notFoundItems.map((e => e.pineId));
                        J.logWarn(`Cannot find pine scripts: ${JSON.stringify(e)}`)
                    }
                    return t.items
                }))), Promise.all(n).then((e => (J.logNormal("Requesting favorites info finished"), e.reduce(((e, t) => e.concat(t)), []))))
            }

            function te(e, t) {
                const n = {
                    items: [],
                    notFoundItems: []
                };
                return e.forEach(((e, i) => {
                    const a = t.get(i);
                    void 0 !== a ? n.items.push({
                        item: e,
                        info: a
                    }) : n.notFoundItems.push(e)
                })), n
            }
            var ne = n(289397),
                ie = n(480071),
                ae = n(821255),
                oe = n(928089),
                re = n(251954),
                se = n(748826),
                le = n(903258);

            function ce(e) {
                let t = r.t(e.scriptName || "", {
                    context: "study"
                }, n(168716));
                const i = e.extra.financialPeriod;
                return i && (t += ` · ${(0,le.financialPeriodToString)(i)}`), t
            }
            n(139681);
            var de = n(563481),
                ue = n(320443);
            const he = {
                    text: r.t(null, void 0, n(561142)),
                    hint: r.t(null, void 0, n(464426)),
                    favorites: r.t(null, void 0, n(933959))
                },
                me = (0, U.hotKeySerialize)({
                    keys: ["/"],
                    text: "{0}"
                }),
                ve = (0, T.registryContextType)();
            class pe extends a.PureComponent {
                constructor(e, t) {
                    var n;
                    super(e, t), this._promise = null, this._menu = a.createRef(), this._favoriteFundamentalsModel = se.FavoriteFundamentals.getInstance(), this._setActiveState = e => {
                        this.setState({
                            isActive: e
                        })
                    }, this._handleClick = () => {
                        const {
                            studyMarket: e
                        } = this.props;
                        this.setState({
                            isActive: !0
                        }, (() => {
                            e.visible().value() ? e.hide() : e.show()
                        })), this._trackClick()
                    }, this._handleSelectIndicator = e => {
                        e = (0, j.ensureDefined)(e), this._trackFavoriteAction("Favorite indicator from toolbar");
                        const {
                            chartWidgetCollection: t
                        } = this.context;
                        if ("java" === e.type) {
                            const t = (0, ne.tryFindStudyLineToolNameByStudyId)(e.studyId);
                            if (null !== t) return void ie.tool.setValue(t)
                        }
                        t.activeChartWidget.value().insertStudy(e, [])
                    }, this._handleFavoriteIndicatorsChange = () => {
                        const {
                            favoriteScriptsModel: e
                        } = this.context, t = [...(0, j.ensureDefined)(e).favorites()];
                        this.setState({
                            favorites: t
                        }), this._clearCache()
                    }, this._handleFavoriteFundamentalsChange = () => {
                        var e;
                        const t = new Set((null === (e = this._favoriteFundamentalsModel) || void 0 === e ? void 0 : e.favorites()) || []);
                        this.setState({
                            favoriteFundamentals: t
                        }), this._clearCache()
                    }, this._handleMouseEnter = () => {
                        this._prefetchFavorites()
                    }, this._handleWrapClick = () => {
                        this._prefetchFavorites()
                    }, this._handleChangeActiveWidget = () => {
                        this._clearCache()
                    }, this._clearCache = () => {
                        this._promise = null, this.setState({
                            infos: []
                        })
                    }, this._handleScriptRenamed = e => {
                        const {
                            favoriteScriptsModel: t
                        } = this.context;
                        void 0 !== t && t.isFav(e.scriptIdPart) && this._clearCache()
                    }, this._handleFavoriteMenuClick = () => {
                        this._trackClick(), this._trackFavoriteAction("Select favorite indicators dropdown")
                    }, (0, T.validateRegistry)(t, {
                        favoriteScriptsModel: o.any,
                        chartWidgetCollection: o.any.isRequired
                    });
                    const {
                        favoriteScriptsModel: i
                    } = t, r = void 0 !== i ? i.favorites() : [];
                    this.state = {
                        isActive: !1,
                        isLoading: !1,
                        favorites: r,
                        favoriteFundamentals: new Set(null === (n = this._favoriteFundamentalsModel) || void 0 === n ? void 0 : n.favorites()),
                        infos: []
                    }
                }
                componentDidMount() {
                    var e;
                    const {
                        studyMarket: t
                    } = this.props, {
                        favoriteScriptsModel: n,
                        chartWidgetCollection: i
                    } = this.context;
                    t.visible().subscribe(this._setActiveState), void 0 !== n && (n.favoritesChanged().subscribe(this, this._handleFavoriteIndicatorsChange), i.activeChartWidget.subscribe(this._handleChangeActiveWidget)), null === (e = this._favoriteFundamentalsModel) || void 0 === e || e.favoritesChanged().subscribe(this, this._handleFavoriteFundamentalsChange), re.on("TVScriptRenamed", this._handleScriptRenamed, null)
                }
                componentWillUnmount() {
                    var e;
                    const {
                        studyMarket: t
                    } = this.props, {
                        favoriteScriptsModel: n,
                        chartWidgetCollection: i
                    } = this.context;
                    t.visible().unsubscribe(this._setActiveState), void 0 !== n && (n.favoritesChanged().unsubscribe(this, this._handleFavoriteIndicatorsChange), i.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)), null === (e = this._favoriteFundamentalsModel) || void 0 === e || e.favoritesChanged().unsubscribe(this, this._handleFavoriteFundamentalsChange),
                        re.unsubscribe("TVScriptRenamed", this._handleScriptRenamed, null), this._promise = null
                }
                render() {
                    const {
                        isActive: e,
                        favorites: t,
                        favoriteFundamentals: i,
                        isLoading: o
                    } = this.state, {
                        className: s,
                        displayMode: l,
                        id: c
                    } = this.props, {
                        chartWidgetCollection: d
                    } = this.context;
                    return a.createElement(a.Fragment, null, a.createElement(S, {
                        id: c,
                        onMouseEnter: this._handleMouseEnter,
                        onClick: this._handleWrapClick
                    }, a.createElement(L.ToolWidgetCollapsibleButton, {
                        displayMode: l,
                        className: s,
                        icon: de,
                        isOpened: e,
                        onClick: this._handleClick,
                        text: he.text,
                        title: he.hint,
                        "data-role": "button",
                        "data-name": "open-indicators-dialog",
                        "data-tooltip-hotkey": me
                    }), Boolean(t.length > 0 || (null == i ? void 0 : i.size)) && a.createElement(C.MatchMedia, {
                        rule: "screen and (max-width: 430px)"
                    }, (e => a.createElement(m.ToolWidgetMenu, {
                        key: d.activeChartWidget.value().id(),
                        arrow: !0,
                        closeOnClickOutside: !0,
                        isDrawer: e,
                        drawerPosition: "Bottom",
                        title: he.favorites,
                        ref: this._menu,
                        onClick: this._handleFavoriteMenuClick,
                        "data-name": "show-favorite-indicators"
                    }, a.createElement("div", {
                        className: p()(ue.dropdown, e && ue.smallWidthWrapper)
                    }, a.createElement(oe.ToolWidgetMenuSummary, {
                        className: e && ue.smallWidthTitle
                    }, r.t(null, void 0, n(783127))), o && a.createElement(ae.ToolWidgetMenuSpinner, null), !o && a.createElement(a.Fragment, null, this.state.infos.length > 0 ? this.state.infos.map((t => a.createElement(h.PopupMenuItem, {
                        className: p()(e && ue.smallWidthMenuItem),
                        theme: e ? k.multilineLabelWithIconAndToolboxTheme : void 0,
                        key: "java" === t.item.type ? t.item.studyId : t.item.pineId,
                        onClick: this._handleSelectIndicator,
                        onClickArg: t.item,
                        label: a.createElement("span", {
                            className: p()(!e && ue.label, e && ue.smallWidthLabel, "apply-overflow-tooltip")
                        }, ge(t))
                    }))) : null !== this._promise && a.createElement(h.PopupMenuItem, {
                        isDisabled: !0,
                        label: r.t(null, void 0, n(223687))
                    }))))))))
                }
                _prefetchFavorites() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    if (null !== this._promise || !window.is_authenticated) return;
                    const t = e.activeChartWidget.value();
                    if (!t.hasModel()) return;
                    const n = t.model().model().studyMetaInfoRepository();
                    this.setState({
                        isLoading: !0
                    });
                    const i = this.state.favoriteFundamentals,
                        a = this._promise = Promise.all([ee(this.state.favorites, n), i ? Promise.resolve((0, Q.requestFundamentalScripts)()) : void 0]).then((e => {
                            if (a !== this._promise) return;
                            const [t, n] = e;
                            let i = [...t];
                            if (n) {
                                const e = n.filter((e => {
                                    var t;
                                    return null === (t = this.state.favoriteFundamentals) || void 0 === t ? void 0 : t.has(e.scriptIdPart)
                                })).map(this._mapFundamentalToFavoriteItemInfo);
                                i.push(...e)
                            }
                            i = [...i].sort(((e, t) => ge(e).localeCompare(ge(t)))), this.setState({
                                infos: i,
                                isLoading: !1
                            }, (() => {
                                this._menu.current && this._menu.current.update()
                            }))
                        }))
                }
                _trackClick() {
                    (0, I.trackButtonClick)("top toolbar", "indicators")
                }
                _trackFavoriteAction(e) {
                    (0, B.trackEvent)("GUI", "Chart Header Toolbar", e)
                }
                _mapFundamentalToFavoriteItemInfo(e) {
                    return {
                        item: {
                            type: "pine",
                            pineId: e.scriptIdPart
                        },
                        info: {
                            name: e.scriptName,
                            localizedName: ce(e),
                            studyMarketShittyObject: void 0
                        }
                    }
                }
            }

            function ge(e) {
                return e.info.localizedName || r.t(e.info.name, {
                    context: "study"
                }, n(168716))
            }
            pe.contextType = ve;
            var Se = n(991826),
                be = n(219606);

            function fe(e) {
                return a.createElement("div", {
                    className: v(be.value, {
                        [be.selected]: e.isSelected
                    })
                }, e.value, e.metric)
            }
            var ye = n(45968),
                we = n(416293),
                _e = n(569317),
                Ce = n(86464);
            class Ee extends a.PureComponent {
                constructor(e) {
                    super(e), this._timeMenu = null, this._setMenuRef = e => {
                        this._timeMenu = e
                    }, this._handleChangeInput = e => {
                        const {
                            value: t
                        } = e.currentTarget;
                        /^[0-9]*$/.test(t) && this.setState({
                            inputValue: t
                        })
                    }, this._handleSelectTime = e => {
                        this.setState({
                            selectedIntervalSuffix: e
                        }), this._closeMenu()
                    }, this._handleClickAdd = () => {
                        const {
                            inputValue: e,
                            selectedIntervalSuffix: t
                        } = this.state;
                        this.props.onAdd(e, t)
                    }, this._toggleMenu = () => {
                        this.state.isOpenedMenu ? this._closeMenu() : this._openMenu()
                    }, this._closeMenu = () => {
                        this.props.onCloseMenu(), this.setState({
                            isOpenedMenu: !1
                        })
                    }, this._openMenu = () => {
                        this.props.onOpenMenu(), this.setState({
                            isOpenedMenu: !0
                        })
                    }, this._getMenuPosition = () => {
                        const e = (0, j.ensureNotNull)(this._timeMenu).getBoundingClientRect();
                        return {
                            overrideWidth: e.width,
                            x: e.left,
                            y: e.bottom + 1
                        }
                    }, this.state = {
                        inputValue: "1",
                        isOpenedMenu: !1,
                        selectedIntervalSuffix: _e.INTERVALS[0].name
                    }
                }
                render() {
                    const {
                        inputValue: e,
                        isOpenedMenu: t,
                        menuWidth: i,
                        selectedIntervalSuffix: o
                    } = this.state;
                    return a.createElement("div", {
                        className: v(Ce.form, {
                            [Ce.interacting]: t
                        })
                    }, a.createElement("input", {
                        className: Ce.input,
                        maxLength: 7,
                        onChange: this._handleChangeInput,
                        value: e
                    }), a.createElement("div", {
                        className: Ce.menu,
                        onClick: this._toggleMenu,
                        ref: this._setMenuRef
                    }, _e.INTERVALS.find((e => e.name === o)).label, a.createElement(we.ToolWidgetCaret, {
                        dropped: t
                    })), a.createElement("div", {
                        className: Ce.add,
                        onClick: this._handleClickAdd
                    }, r.t(null, void 0, n(954777))), a.createElement(ye.PopupMenu, {
                        doNotCloseOn: this,
                        isOpened: t,
                        minWidth: i,
                        onClose: this._closeMenu,
                        position: this._getMenuPosition
                    }, _e.INTERVALS.map((e => a.createElement(h.PopupMenuItem, {
                        dontClosePopup: !0,
                        key: e.name,
                        label: e.label,
                        onClick: this._handleSelectTime,
                        onClickArg: e.name
                    })))))
                }
            }
            var ke = n(636268),
                Te = n(962624),
                xe = n(778785),
                Me = n(700937);

            function Ie(e) {
                const {
                    interval: t,
                    hint: n,
                    isActive: i,
                    isDisabled: o,
                    isFavorite: r,
                    isSignaling: s,
                    onClick: l,
                    onClickRemove: c,
                    onClickFavorite: u,
                    isSmallTablet: m
                } = e, v = (0, f.filterDataProps)(e), [g, S] = (0, Te.useHover)(), b = a.useCallback((() => c(t)), [c, t]), y = a.useCallback((() => u(t)), [u, t]), w = (0, a.useRef)(null);
                return (0, a.useEffect)((() => {
                    var e;
                    s && m && (null === (e = w.current) || void 0 === e || e.scrollIntoView())
                }), [s, m]), a.createElement("div", { ...S,
                    ref: w
                }, a.createElement(h.PopupMenuItem, { ...v,
                    className: p()(m && Me.smallWidthMenuItem),
                    theme: m ? k.multilineLabelWithIconAndToolboxTheme : void 0,
                    isActive: i,
                    isDisabled: o,
                    isHovered: s,
                    onClick: l,
                    onClickArg: t,
                    toolbox: function() {
                        const {
                            isRemovable: t,
                            isFavoritingAllowed: n
                        } = e, s = a.createElement(ke.RemoveButton, {
                            key: "remove",
                            isActive: i,
                            hidden: !xe.touch && !g,
                            onClick: b
                        }), l = a.createElement(d.FavoriteButton, {
                            key: "favorite",
                            isActive: i,
                            isFilled: r,
                            onClick: y
                        });
                        return [t && s, !o && n && l]
                    }(),
                    showToolboxOnHover: !r,
                    label: n
                }))
            }
            var Ne = n(568450);
            const Ae = {
                [Ne.ResolutionKind.Ticks]: r.t(null, {
                    context: "interval_group_name"
                }, n(130426)),
                [Ne.ResolutionKind.Seconds]: r.t(null, {
                    context: "interval_group_name"
                }, n(774973)),
                [Ne.ResolutionKind.Minutes]: r.t(null, {
                    context: "interval_group_name"
                }, n(140749)),
                [Ne.SpecialResolutionKind.Hours]: r.t(null, {
                    context: "interval_group_name"
                }, n(162346)),
                [Ne.ResolutionKind.Days]: r.t(null, {
                    context: "interval_group_name"
                }, n(274787)),
                [Ne.ResolutionKind.Weeks]: r.t(null, {
                    context: "interval_group_name"
                }, n(386614)),
                [Ne.ResolutionKind.Months]: r.t(null, {
                    context: "interval_group_name"
                }, n(394328)),
                [Ne.ResolutionKind.Range]: r.t(null, {
                    context: "interval_group_name"
                }, n(348801)),
                [Ne.ResolutionKind.Invalid]: ""
            };

            function ze(e, t = !1) {
                return {
                    id: e,
                    name: Ae[e],
                    items: [],
                    mayOmitSeparator: t
                }
            }
            var Pe = n(390704),
                Re = n(869403),
                Le = n.n(Re),
                Be = n(320116),
                De = n(224743),
                He = n(965057);
            const We = {
                    openDialog: r.t(null, void 0, n(979353)),
                    timeInterval: r.t(null, void 0, n(132916))
                },
                Fe = (0, U.hotKeySerialize)({
                    keys: [","],
                    text: r.t(null, void 0, n(814605))
                }),
                Oe = (0, T.registryContextType)(),
                Ue = new(Le()),
                Ve = a.lazy((async () => ({
                    default: (await Promise.all([n.e(12275), n.e(33335), n.e(83772), n.e(1428), n.e(20187), n.e(1011), n.e(52701), n.e(51907), n.e(67177), n.e(51416), n.e(74013)]).then(n.bind(n, 82613))).ToolWidgetIntervalsAddDialog
                })));
            class Ge extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._menu = a.createRef(), this._renderChildren = (e, t) => [...this._createMenuItems(e, t), ...this._createIntervalForm(t)], this._handleChangeInterval = e => {
                        const {
                            activeInterval: t,
                            lastNotQuicked: n
                        } = this.state, i = this._getQuicks();
                        this.setState({
                            activeInterval: (0, Se.normalizeIntervalString)(e),
                            lastNotQuicked: void 0 === t || i.includes(t) ? n : t
                        })
                    }, this._bindedForceUpdate = () => {
                        this.forceUpdate()
                    }, this._handleCloseMenu = () => {
                        this.setState({
                            isOpenedFormMenu: !1
                        })
                    }, this._handleOpenMenu = () => {
                        this.setState({
                            isOpenedFormMenu: !0
                        })
                    }, this._handleSelectInterval = e => {
                        void 0 !== e && e !== s.linking.interval.value() && this.context.chartWidgetCollection.setResolution(e), e && (0, B.trackEvent)("GUI", "Time Interval", e)
                    }, this._handleClickFavorite = e => {
                        e = (0, j.ensureDefined)(e), this._isIntervalFavorite(e) ? this._handleRemoveFavorite(e) : this._handleAddFavorite(e)
                    }, this._handleAddFavorite = e => {
                        const {
                            favorites: t
                        } = this.state;
                        this.context.favoriteIntervalsService.set([...t, e])
                    }, this._handleRemoveFavorite = e => {
                        const {
                            favorites: t
                        } = this.state;
                        this.context.favoriteIntervalsService.set(t.filter((t => t !== e)))
                    }, this._handleAddInterval = (e, t) => {
                        const {
                            intervalService: n
                        } = this.context, i = n.add(e, t);
                        i && this.setState({
                            lastAddedInterval: i
                        })
                    }, this._handleRemoveInterval = e => {
                        const {
                            intervalService: t
                        } = this.context;
                        e && (t.remove(e), this._handleRemoveFavorite(e))
                    }, this._getHandleSectionStateChange = e => t => {
                        const {
                            menuViewState: n
                        } = this.state, {
                            intervalsMenuViewStateService: i
                        } = this.context;
                        i.set({ ...n,
                            [e]: !t
                        })
                    }, this._handleOpenAddIntervalDialog = () => {
                        this.setState({
                            isAddIntervalDialogOpened: !0
                        })
                    }, this._handleCloseAddIntervalDialog = () => {
                        this.setState({
                            isAddIntervalDialogOpened: !1
                        })
                    }, this._handleGlobalClose = () => {
                        const {
                            isFake: e
                        } = this.props, {
                            isAddIntervalDialogOpened: t
                        } = this.state;
                        e || t || Ue.fire()
                    }, this._handeQuickClick = e => {
                        this._handleSelectInterval(e), this._trackClick()
                    }, (0, T.validateRegistry)(t, {
                        chartApiInstance: o.any.isRequired,
                        favoriteIntervalsService: o.any.isRequired,
                        intervalService: o.any.isRequired,
                        intervalsMenuViewStateService: o.any.isRequired
                    });
                    const {
                        chartApiInstance: n,
                        favoriteIntervalsService: r,
                        intervalService: l,
                        intervalsMenuViewStateService: c
                    } = t;
                    this._customIntervals = i.enabled("custom_resolutions");
                    const d = s.linking.interval.value(),
                        u = d && (0, Se.normalizeIntervalString)(d),
                        h = r.get(),
                        m = l.getCustomIntervals(),
                        v = c.get();
                    this._defaultIntervals = n.defaultResolutions().filter(Se.isIntervalEnabled).map(Se.normalizeIntervalString), this.state = {
                        isOpenedFormMenu: !1,
                        activeInterval: u,
                        favorites: h,
                        customs: m,
                        menuViewState: v,
                        isAddIntervalDialogOpened: !1
                    }
                }
                componentDidMount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: n
                    } = this.context;
                    e.getOnChange().subscribe(this, this._handleChangeFavorites), n.getOnChange().subscribe(this, this._handleChangeMenuViewState), t.getOnChange().subscribe(this, this._handleChangeCustoms), s.linking.interval.subscribe(this._handleChangeInterval), s.linking.intraday.subscribe(this._bindedForceUpdate), s.linking.seconds.subscribe(this._bindedForceUpdate), s.linking.ticks.subscribe(this._bindedForceUpdate), s.linking.range.subscribe(this._bindedForceUpdate), s.linking.supportedResolutions.subscribe(this._bindedForceUpdate), s.linking.dataFrequencyResolution.subscribe(this._bindedForceUpdate), De.globalCloseDelegate.subscribe(this, this._handleGlobalClose)
                }
                componentWillUnmount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: n
                    } = this.context;
                    e.getOnChange().unsubscribe(this, this._handleChangeFavorites), n.getOnChange().unsubscribe(this, this._handleChangeMenuViewState), t.getOnChange().unsubscribe(this, this._handleChangeCustoms), s.linking.interval.unsubscribe(this._handleChangeInterval), s.linking.intraday.unsubscribe(this._bindedForceUpdate), s.linking.seconds.unsubscribe(this._bindedForceUpdate), s.linking.ticks.unsubscribe(this._bindedForceUpdate), s.linking.range.unsubscribe(this._bindedForceUpdate), s.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate), s.linking.dataFrequencyResolution.unsubscribe(this._bindedForceUpdate), De.globalCloseDelegate.unsubscribe(this, this._handleGlobalClose)
                }
                componentDidUpdate(e, t) {
                    this.state.lastAddedInterval && setTimeout((() => this.setState({
                        lastAddedInterval: void 0
                    })), 400)
                }
                render() {
                    const {
                        isShownQuicks: e,
                        id: t
                    } = this.props, {
                        activeInterval: n,
                        customs: i,
                        lastNotQuicked: o,
                        isAddIntervalDialogOpened: r
                    } = this.state, s = this._getQuicks(), l = (0, Se.sortResolutions)([...s]);
                    void 0 !== n && l.includes(n) ? void 0 !== o && l.push(o) : void 0 !== n && l.push(n);
                    const c = (!(!e || 0 === s.length) || void 0) && l.length > 1,
                        d = {},
                        u = (0, Se.mergeResolutions)(this._defaultIntervals, i);
                    (void 0 !== n ? u.concat(n) : u).filter(Se.isAvailable).forEach((e => d[e] = !0));
                    const h = void 0 !== n ? (0, Se.getTranslatedResolutionModel)(n) : null;
                    return a.createElement(S, {
                        id: t
                    }, c && l.map(((e, t) => {
                        const i = (0, Se.getTranslatedResolutionModel)(e);
                        return a.createElement(w, {
                            key: t,
                            className: v(He.button, {
                                [He.first]: 0 === t,
                                [He.last]: t === l.length - 1
                            }),
                            text: a.createElement(fe, {
                                value: i.mayOmitMultiplier ? void 0 : i.multiplier,
                                metric: i.shortKind
                            }),
                            hint: i.hint,
                            isActive: n === e,
                            isDisabled: !d[e] && e !== o,
                            onClick: this._handeQuickClick,
                            onClickArg: e,
                            "data-value": e
                        })
                    })), a.createElement(C.MatchMedia, {
                        rule: E.DialogBreakpoints.TabletSmall
                    }, (e => a.createElement(a.Fragment, null, a.createElement(Be.CloseDelegateContext.Provider, {
                        value: Ue
                    }, a.createElement(m.ToolWidgetMenu, {
                        arrow: Boolean(c),
                        closeOnClickOutside: !0,
                        content: c || null === h ? void 0 : a.createElement(S, {
                            className: He.menuContent
                        }, a.createElement(fe, {
                            value: h.mayOmitMultiplier ? void 0 : h.multiplier,
                            metric: h.shortKind
                        })),
                        title: c || null === h ? We.timeInterval : h.hint,
                        hotKey: c ? Fe : void 0,
                        className: He.menu,
                        ref: this._menu,
                        isDrawer: e,
                        onClick: this._trackClick
                    }, a.createElement("div", {
                        className: He.dropdown
                    }, this._renderChildren(u, e)))), e && r && a.createElement(a.Suspense, {
                        fallback: null
                    }, a.createElement(Ve, {
                        onAdd: this._handleAddInterval,
                        onClose: this._handleCloseAddIntervalDialog,
                        onUnmount: this._handleCloseAddIntervalDialog
                    }))))))
                }
                _createMenuItems(e, t) {
                    const n = function(e) {
                        const t = ze(Ne.ResolutionKind.Ticks),
                            n = ze(Ne.ResolutionKind.Seconds),
                            i = ze(Ne.ResolutionKind.Minutes),
                            a = ze(Ne.SpecialResolutionKind.Hours),
                            o = ze(Ne.ResolutionKind.Days),
                            r = ze(Ne.ResolutionKind.Range);
                        return e.forEach((e => {
                            const s = Ne.Interval.parse(e);
                            s.isMinuteHours() ? a.items.push(e) : s.isMinutes() ? (0, Ne.isHour)(Number(s.multiplier())) ? a.items.push(e) : i.items.push(e) : s.isSeconds() ? n.items.push(e) : s.isDWM() ? o.items.push(e) : s.isRange() ? r.items.push(e) : s.isTicks() && t.items.push(e)
                        })), [t, n, i, a, o, r].filter((e => 0 !== e.items.length))
                    }(e).map(((e, n, i) => this._renderResolutionsGroup(e, 1 === i.length, t)));
                    return function(e) {
                        let t = !1;
                        return e.filter(((e, n, i) => {
                            let a = !0;
                            return e.type === _.PopupMenuSeparator && (0 !== n && n !== i.length - 1 || (a = !1), t && (a = !1)), t = e.type === _.PopupMenuSeparator, a
                        }))
                    }([].concat(...n))
                }
                _createIntervalForm(e) {
                    if (this._customIntervals) {
                        const t = e ? a.createElement("div", {
                            key: "add-dialog",
                            className: He.addCustomInterval,
                            onClick: this._handleOpenAddIntervalDialog
                        }, r.t(null, void 0, n(595798)) + "…") : a.createElement(Ee, {
                            key: "add-form",
                            onAdd: this._handleAddInterval,
                            onCloseMenu: this._handleCloseMenu,
                            onOpenMenu: this._handleOpenMenu
                        });
                        return [a.createElement(_.PopupMenuSeparator, {
                            key: "custom-interval-separator"
                        }), t]
                    }
                    return []
                }
                _renderResolutionsGroup(e, t = !1, n) {
                    const i = [],
                        o = e.items.map((e => this._renderPopupMenuItem(e, n)));
                    if (t) i.push(...o);
                    else if (n) {
                        const t = a.createElement("div", {
                            key: e.id
                        }, a.createElement("div", {
                            className: He.smallTabletSectionTitle
                        }, e.name), o);
                        i.push(t)
                    } else {
                        const {
                            intervalsMenuViewStateService: t
                        } = this.context, {
                            menuViewState: n
                        } = this.state;
                        if (!t.isAllowed(e.id)) return [];
                        const r = a.createElement(Pe.CollapsibleSection, {
                            key: e.id,
                            className: He.section,
                            summary: e.name,
                            open: !n[e.id],
                            onStateChange: this._getHandleSectionStateChange(e.id)
                        }, o);
                        i.push(r)
                    }
                    return (!e.mayOmitSeparator || e.items.length > 1) && (i.unshift(a.createElement(_.PopupMenuSeparator, {
                        key: `begin-${e.name}`
                    })), i.push(a.createElement(_.PopupMenuSeparator, {
                        key: `end-${e.name}`
                    }))), i
                }
                _handleChangeFavorites(e) {
                    this.setState({
                        lastNotQuicked: void 0,
                        favorites: e
                    })
                }
                _handleChangeCustoms(e) {
                    this.setState({
                        customs: e
                    })
                }
                _handleChangeMenuViewState(e) {
                    this.setState({
                        menuViewState: e
                    }, (() => {
                        this._menu.current && this._menu.current.update()
                    }))
                }
                _renderPopupMenuItem(e, t) {
                    const {
                        isFavoritingAllowed: n
                    } = this.props, {
                        activeInterval: i,
                        lastAddedInterval: o
                    } = this.state, r = e === i, s = (0, Se.isAvailable)(e), l = this._isIntervalFavorite(e), c = this._isIntervalDefault(e), d = (0, Se.getTranslatedResolutionModel)(e);
                    return a.createElement(Ie, {
                        key: e,
                        isSmallTablet: t,
                        interval: e,
                        hint: d.hint,
                        isSignaling: o === e,
                        isFavoritingAllowed: n,
                        isDisabled: !s,
                        isFavorite: l,
                        isRemovable: !c,
                        isActive: r,
                        onClick: this._handleSelectInterval,
                        onClickRemove: this._handleRemoveInterval,
                        onClickFavorite: this._handleClickFavorite,
                        "data-value": e
                    })
                }
                _isIntervalDefault(e) {
                    return this._defaultIntervals.includes(e)
                }
                _isIntervalFavorite(e) {
                    return this.state.favorites.includes(e)
                }
                _getQuicks(e) {
                    return this.props.isShownQuicks && "small" !== this.props.displayMode ? void 0 === e ? this.state.favorites : e : []
                }
                _trackClick() {
                    (0, I.trackButtonClick)("top toolbar", "interval")
                }
            }
            Ge.contextType = Oe;
            var qe = n(714402),
                $e = n(282436);
            const Ke = {
                    hint: r.t(null, void 0, n(355520))
                },
                Xe = (0, T.registryContextType)();
            class je extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            chartWidgetCollection: e,
                            windowMessageService: t,
                            isFundamental: n
                        } = this.context, i = e.activeChartWidget.value();
                        i.withModel(null, (() => {
                            t.post(parent, "openChartInPopup", {
                                symbol: i.model().mainSeries().actualSymbol(),
                                interval: i.model().mainSeries().interval(),
                                fundamental: n
                            })
                        }))
                    }, (0, T.validateRegistry)(t, {
                        isFundamental: o.any,
                        chartWidgetCollection: o.any.isRequired,
                        windowMessageService: o.any.isRequired
                    })
                }
                render() {
                    const {
                        className: e
                    } = this.props;
                    return a.createElement(O.ToolWidgetIconButton, {
                        className: v(e, qe.button),
                        icon: $e,
                        onClick: this._handleClick,
                        title: Ke.hint
                    })
                }
            }
            je.contextType = Xe;
            var Ze = n(648449);
            const Qe = {
                    hint: r.t(null, void 0, n(274207))
                },
                Ye = (0, T.registryContextType)();
            class Je extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            chartWidgetCollection: e
                        } = this.context, t = e.activeChartWidget.value();
                        (0, B.trackEvent)("GUI", "Chart Header Toolbar", "chart properties"), (0, I.trackButtonClick)("top toolbar", "chart settings"), t.showGeneralChartProperties()
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    })
                }
                render() {
                    return a.createElement(O.ToolWidgetIconButton, { ...this.props,
                        icon: Ze,
                        title: Qe.hint,
                        onClick: this._handleClick
                    })
                }
            }
            Je.contextType = Ye;
            var et = n(125226),
                tt = n(889500),
                nt = n(901910),
                it = n(462282),
                at = n(799786),
                ot = n(793993),
                rt = n(995683),
                st = n(320711),
                lt = n(826316),
                ct = n(868151),
                dt = n(612247),
                ut = n(947406);

            function ht(e) {
                const {
                    wasChanges: t,
                    isSaving: i,
                    className: o
                } = e;
                return a.createElement("span", {
                    className: v(ut.saveString, !t && !i && ut.hidden, o)
                }, i ? a.createElement(dt.Loader, {
                    className: ut.loader,
                    size: "small",
                    staticPosition: !0
                }) : r.t(null, void 0, n(185520)))
            }
            var mt = n(314802),
                vt = n(821190),
                pt = n(685392),
                gt = n(133055),
                St = n(808757),
                bt = n(192867),
                ft = n(398120),
                yt = n(636296),
                wt = n(280803),
                _t = n(12805),
                Ct = n(206001);
            const Et = i.enabled("widget"),
                kt = (0, et.isFeatureEnabled)("change_name_of_all_layouts_btn") ? r.t(null, void 0, n(715795)) : r.t(null, void 0, n(375789)),
                Tt = (0, rt.mergeThemes)(b.DEFAULT_TOOL_WIDGET_BUTTON_THEME, _t),
                xt = (0,
                    rt.mergeThemes)(h.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    shortcut: wt.shortcut,
                    withIcon: wt.withIcon
                }),
                Mt = r.t(null, void 0, n(180959)),
                It = r.t(null, void 0, n(11680)),
                Nt = [],
                At = (0, U.hotKeySerialize)({
                    keys: [(0, V.humanReadableModifiers)(V.Modifiers.Mod, !1), "S"],
                    text: "{0} + {1}"
                });
            class zt extends a.PureComponent {
                constructor(e) {
                    super(e), this._copyElRef = a.createRef(), this._handleCopyLinkClick = () => {
                        const e = window.location.href;
                        return (0, ot.getClipboard)().writeText(e).then((() => {
                            this._copyElRef.current && ((0, pt.showTooltip)(this._copyElRef.current, {
                                initialDelay: 0,
                                leaveOnMouseOut: !0
                            }), (0, pt.debounceHideTooltip)())
                        }))
                    }, this._handleCloneClick = () => {
                        var e, t;
                        null === (t = (e = this.props).onCloneChart) || void 0 === t || t.call(e), (0, I.trackButtonClick)("top toolbar", "copy", void 0, !0)
                    }, this._handleSaveClick = () => {
                        var e, t;
                        null === (t = (e = this.props).onSaveChart) || void 0 === t || t.call(e), this._trackClick()
                    }, this._handleSaveAsClick = () => {
                        var e, t;
                        null === (t = (e = this.props).onSaveAsChart) || void 0 === t || t.call(e), (0, I.trackButtonClick)("manage layout", "make a copy", void 0, !0)
                    }, this.state = {
                        isSaving: !1
                    }
                }
                componentDidUpdate(e, t) {
                    e.isProcessing && !this.props.isProcessing && (clearTimeout(this._timeout), this._timeout = void 0, this.setState({
                        isSaving: !1
                    })), !e.isProcessing && this.props.isProcessing && (this._timeout = setTimeout((() => {
                        this.setState({
                            isSaving: !0
                        })
                    }), 1e3))
                }
                componentWillUnmount() {
                    this._timeout && clearTimeout(this._timeout)
                }
                render() {
                    const {
                        id: e,
                        isReadOnly: t,
                        displayMode: i,
                        isProcessing: o,
                        title: s,
                        wasChanges: l,
                        hideMenu: c,
                        isTabletSmall: d,
                        onOpenMenu: h,
                        dataNameSaveMenu: p
                    } = this.props, g = !t && !c, b = !(l || !s || this.state.isSaving), f = a.createElement("div", {
                        className: wt.textWrap
                    }, a.createElement("span", {
                        className: wt.text
                    }, s || r.t(null, void 0, n(185520))), a.createElement(ht, {
                        isSaving: this.state.isSaving,
                        wasChanges: l
                    }));
                    return a.createElement(S, null, t ? a.createElement(S, null, a.createElement(L.ToolWidgetCollapsibleButton, {
                        id: e,
                        displayMode: i,
                        icon: a.createElement(u.Icon, {
                            icon: yt
                        }),
                        isDisabled: o,
                        onClick: this._handleCloneClick,
                        text: r.t(null, void 0, n(35216)),
                        title: Mt,
                        collapseWhen: Nt
                    })) : a.createElement(S, null, a.createElement(L.ToolWidgetCollapsibleButton, {
                        id: e,
                        className: v(wt.button, g && wt.buttonSmallPadding),
                        displayMode: i,
                        isDisabled: o,
                        onClick: b ? void 0 : this._handleSaveClick,
                        text: f,
                        title: b ? r.t(null, void 0, n(288368)) : r.t(null, void 0, n(587409)),
                        theme: Tt,
                        collapseWhen: Nt,
                        "data-tooltip-hotkey": Et || b ? "" : At
                    }), g && a.createElement(m.ToolWidgetMenu, {
                        "data-name": p,
                        className: "js-save-load-menu-open-button",
                        arrow: !0,
                        isDrawer: d,
                        drawerPosition: "Bottom",
                        title: r.t(null, void 0, n(658219)),
                        onClick: this._trackClick,
                        onOpen: h
                    }, this._renderMenuItems(Boolean(d)))))
                }
                _renderMenuItems(e) {
                    const {
                        wasChanges: t,
                        isProcessing: i,
                        chartId: o,
                        onSaveChartFromMenu: s,
                        onRenameChart: l,
                        onLoadChart: c,
                        onNewChart: d,
                        isAutoSaveEnabled: m,
                        autoSaveId: p,
                        sharingId: g,
                        onAutoSaveChanged: S,
                        isSharingEnabled: b,
                        onSharingChanged: f,
                        layoutItems: y,
                        onExportData: w,
                        isAuthenticated: C
                    } = this.props, E = e ? k.multilineLabelWithIconAndToolboxTheme : xt, T = e ? lt.menuItemSwitcherMobileTheme : Ct, x = e ? void 0 : (0, V.humanReadableHash)(V.Modifiers.Mod + 83), M = e ? void 0 : r.t(null, {
                        context: "hotkey"
                    }, n(214229)), I = [], N = C && y && y.length > 0 ? [a.createElement(vt.ToolTitle, {
                        key: "recently-used",
                        className: v(wt.toolTitle, e && wt.toolTitleMobile),
                        text: r.t(null, void 0, n(889424))
                    }), ...y.map((t => {
                        const n = Number(t.id) === o;
                        return a.createElement(h.PopupMenuItem, {
                            key: t.id,
                            className: v(wt.layoutItemWrap, n && wt.active),
                            labelRowClassName: v(wt.labelRow, e && wt.popupItemRowTabletSmall),
                            link: n ? void 0 : `/chart/${t.url}${window.location.search}`,
                            onClickArg: n,
                            label: a.createElement("div", {
                                className: wt.layoutItem
                            }, a.createElement("div", {
                                className: v(wt.layoutTitle, e && wt.layoutTitleMobile)
                            }, t.name), a.createElement("div", {
                                className: wt.layoutMeta
                            }, t.short_symbol, ", ", t.interval)),
                            trackRightClick: !0,
                            trackMouseWheelClick: !0
                        })
                    }))] : null; {
                        const l = o,
                            c = a.createElement(h.PopupMenuItem, {
                                key: "save",
                                isDisabled: Boolean(i || !t && o),
                                label: It,
                                onClick: s,
                                shortcut: x,
                                labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                                theme: E
                            }),
                            d = () => void 0 !== m && void 0 !== S && l ? a.createElement(st.MenuItemSwitcher, {
                                key: "auto-save",
                                checked: m,
                                onChange: S,
                                className: v(!e && wt.autoSaveWrapper),
                                id: p,
                                theme: T,
                                label: r.t(null, void 0, n(801556)),
                                value: "autoSaveSwitcher"
                            }) : null;
                        I.push(c), I.push(d())
                    }
                    if (void 0 !== o) {
                        if (void 0 !== b && void 0 !== f) {
                            const t = a.createElement("div", {
                                className: wt.sharingLabelWrap
                            }, a.createElement("span", null, r.t(null, void 0, n(327077))), !e && !(0, mt.isOnMobileAppPage)("any") && a.createElement(u.Icon, {
                                className: v(wt.infoIcon, "apply-common-tooltip"),
                                title: r.t(null, void 0, n(329313)),
                                icon: bt
                            }));
                            I.push(a.createElement(a.Fragment, {
                                key: "sharing"
                            }, a.createElement(st.MenuItemSwitcher, {
                                checked: b,
                                onChange: f,
                                className: v(!e && wt.sharingWrapper),
                                id: g,
                                theme: T,
                                label: t,
                                value: "sharingSwitcher"
                            }), b && a.createElement("div", {
                                ref: this._copyElRef,
                                className: v(wt.copyLink, e && wt.copyLinkMobile),
                                onClick: this._handleCopyLinkClick
                            }, r.t(null, void 0, n(607367)))))
                        }
                        I.push(a.createElement(h.PopupMenuItem, {
                            key: "rename",
                            icon: gt,
                            label: (0, ct.appendEllipsis)(r.t(null, void 0, n(435038))),
                            onClick: l,
                            labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                            theme: E,
                            "data-name": "save-load-menu-item-rename"
                        }), a.createElement(h.PopupMenuItem, {
                            key: "save-as",
                            icon: yt,
                            label: (0, ct.appendEllipsis)(Mt),
                            onClick: this._handleSaveAsClick,
                            labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                            theme: E,
                            "data-name": "save-load-menu-item-clone"
                        }))
                    }
                    return (0, mt.isOnMobileAppPage)("any") || I.push(a.createElement(h.PopupMenuItem, {
                        key: "export-chart-data",
                        icon: St,
                        label: (0, ct.appendEllipsis)(r.t(null, void 0, n(919686))),
                        onClick: w,
                        labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                        theme: E
                    })), I.push(a.createElement(_.PopupMenuSeparator, {
                        key: "new-chart-separator"
                    }), a.createElement(h.PopupMenuItem, {
                        key: "new-chart",
                        icon: ft,
                        label: r.t(null, void 0, n(759466)),
                        onClick: d,
                        labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                        theme: E
                    })), N && I.push(a.createElement(_.PopupMenuSeparator, {
                        key: "recent-layouts"
                    }), ...N), I.push(a.createElement(_.PopupMenuSeparator, {
                        key: "all-layouts-separator"
                    }), a.createElement(h.PopupMenuItem, {
                        key: "all-layouts",
                        className: "js-save-load-menu-item-load-chart",
                        label: (0, ct.appendEllipsis)(kt),
                        onClick: c,
                        labelRowClassName: v(e && wt.popupItemRowTabletSmall),
                        theme: E,
                        shortcut: M,
                        "data-name": "save-load-menu-item-load"
                    })), I
                }
                _trackClick() {
                    (0, I.trackButtonClick)("top toolbar", "manage layouts")
                }
            }
            const Pt = (0, T.registryContextType)(),
                Rt = (0, et.isFeatureEnabled)("change_name_of_all_layouts_btn");
            class Lt extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._exportDialogPromise = null, this._layoutsAbortController = null, this._requestRecentLayouts = () => {
                        var e;
                        null === (e = this._layoutsAbortController) || void 0 === e || e.abort(), this.state.isAuthenticated && (this._layoutsAbortController = new AbortController, (0, it.respectAbort)(this._layoutsAbortController.signal, (0, nt.getRecentLayouts)()).then((e => {
                            this._layoutsAbortController = null, this.setState({
                                recentLayouts: e
                            })
                        })).catch((e => {
                            if (!(0, it.isAbortError)(e)) throw e
                        })))
                    }, this._handleExportData = () => {
                        {
                            const e = this._exportDialogPromise = Promise.all([n.e(18619), n.e(81910), n.e(86256), n.e(12275), n.e(33335), n.e(91901), n.e(1428), n.e(20187), n.e(1011), n.e(52701), n.e(51907), n.e(67177), n.e(74935), n.e(745), n.e(49961), n.e(69623)]).then(n.bind(n, 493872)).then((t => {
                                this._exportDialogPromise === e && (t.showChartExportDialog(this.context.chartWidgetCollection), this._trackEvent("Export chart data"))
                            }))
                        }
                    }, this._syncState = e => {
                        this.setState(e)
                    }, this._onChangeHasChanges = e => {
                        this.state.wasChanges !== e && this.setState({
                            wasChanges: e
                        })
                    }, this._onChangeAutoSaveEnabled = e => {
                        this.setState({
                            isAutoSaveEnabled: e
                        })
                    }, this._onChangeSharingEnabled = e => {
                        this.setState({
                            isSharingEnabled: e
                        })
                    }, this._onChangeTitle = e => {
                        this.setState({
                            title: e
                        })
                    }, this._onChangeId = e => {
                        this.setState({
                            id: e
                        })
                    }, this._onChartAboutToBeSaved = () => {
                        this.setState({
                            isProcessing: !0
                        })
                    }, this._onChartSaved = () => {
                        this.setState({
                            isProcessing: !1
                        })
                    }, this._handleAutoSaveEnabled = e => {
                        (0, B.trackEvent)("Autosave", e ? "On" : "Off"), this.context.saveChartService.setAutoSaveEnabled(e)
                    }, this._handleSharingEnabled = e => {
                        {
                            const t = e ? "on" : "off";
                            (0, B.trackEvent)("GUI", `Turn sharing chart ${t}`), (0, j.ensureDefined)(this.context.sharingChartService).setSharingEnabled(e)
                        }
                    }, this._handleClickSave = () => {
                        this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackEvent("Save click")
                    }, this._handleOpenMenu = () => {
                        this._requestRecentLayouts()
                    }, this._handleClickSaveFromMenu = () => {
                        this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackEvent("Save From Menu")
                    }, this._handleClickClone = () => {
                        this.context.saveChartService.cloneChart()
                    }, this._handleClickSaveAs = () => {
                        this.context.saveChartService.saveChartAs(), this._trackEvent("Make a copy")
                    }, this._handleClickNew = () => {
                        (0, tt.openNewChart)(), this._trackEvent("New chart layout")
                    }, this._handleClickLoad = () => {
                        this.context.loadChartService.showLoadDialog();
                        const e = Rt ? "Load chart layout(2)" : "Load chart layout";
                        this._trackEvent(e)
                    }, this._handleHotkey = () => {
                        this.context.loadChartService.showLoadDialog()
                    }, this._handleClickRename = () => {
                        this.context.saveChartService.renameChart(), this._trackEvent("Rename")
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired,
                        chartChangesWatcher: o.any.isRequired,
                        saveChartService: o.any.isRequired,
                        sharingChartService: o.any.isRequired,
                        loadChartService: o.any.isRequired
                    });
                    const {
                        chartWidgetCollection: i,
                        chartChangesWatcher: a,
                        saveChartService: r,
                        sharingChartService: s
                    } = t;
                    this.state = {
                        isAuthenticated: window.is_authenticated,
                        isProcessing: !1,
                        id: i.metaInfo.id.value(),
                        title: i.metaInfo.name.value(),
                        wasChanges: a.hasChanges(),
                        isAutoSaveEnabled: r.autoSaveEnabled().value(),
                        isSharingEnabled: !!s && s.sharingEnabled().value(),
                        recentLayouts: [],
                        iconHovered: !1
                    }
                }
                componentDidMount() {
                    const {
                        chartSaver: e,
                        isFake: t,
                        stateSyncEmitter: i
                    } = this.props, {
                        chartWidgetCollection: a,
                        chartChangesWatcher: o,
                        saveChartService: s,
                        sharingChartService: l
                    } = this.context;
                    t ? i.on("change", this._syncState) : (o.getOnChange().subscribe(this, this._onChangeHasChanges), s.autoSaveEnabled().subscribe(this._onChangeAutoSaveEnabled), (0, j.ensureDefined)(l).sharingEnabled().subscribe(this._onChangeSharingEnabled), a.metaInfo.name.subscribe(this._onChangeTitle), a.metaInfo.id.subscribe(this._onChangeId), this._hotkeys = (0, at.createGroup)({
                        desc: "Save/Load"
                    }), this._hotkeys.add({
                        desc: r.t(null, void 0, n(975687)),
                        handler: this._handleHotkey,
                        hotkey: 190
                    }), e.chartSaved().subscribe(this, this._onChartSaved), e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.subscribe(this, this._onLoginStateChange))
                }
                componentDidUpdate(e, t) {
                    this.props.isFake || t !== this.state && this.props.stateSyncEmitter.emit("change", this.state)
                }
                componentWillUnmount() {
                    var e;
                    const {
                        chartSaver: t,
                        isFake: n,
                        stateSyncEmitter: i
                    } = this.props, {
                        chartWidgetCollection: a,
                        chartChangesWatcher: o,
                        saveChartService: r,
                        sharingChartService: s
                    } = this.context;
                    n ? i.off("change", this._syncState) : (o.getOnChange().unsubscribe(this, this._onChangeHasChanges), r.autoSaveEnabled().unsubscribe(this._onChangeAutoSaveEnabled), (0, j.ensureDefined)(s).sharingEnabled().unsubscribe(this._onChangeSharingEnabled), a.metaInfo.name.unsubscribe(this._onChangeTitle), a.metaInfo.id.unsubscribe(this._onChangeId), (0, j.ensureDefined)(this._hotkeys).destroy(), t.chartSaved().unsubscribe(this, this._onChartSaved), t.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved), window.loginStateChange.unsubscribe(this, this._onLoginStateChange), null === (e = this._layoutsAbortController) || void 0 === e || e.abort())
                }
                render() {
                    const {
                        isReadOnly: e,
                        displayMode: t,
                        id: n,
                        isFake: i
                    } = this.props, {
                        isProcessing: o,
                        isAuthenticated: r,
                        title: s,
                        id: l,
                        wasChanges: c,
                        isAutoSaveEnabled: d,
                        isSharingEnabled: u,
                        recentLayouts: h
                    } = this.state, m = {
                        displayMode: t,
                        isReadOnly: e,
                        isAuthenticated: r,
                        isProcessing: o,
                        wasChanges: c,
                        title: s,
                        id: n,
                        chartId: null !== l ? l : void 0,
                        dataNameSaveMenu: i ? void 0 : "save-load-menu",
                        onCloneChart: this._handleClickClone,
                        onSaveChart: this._handleClickSave,
                        onSaveChartFromMenu: this._handleClickSaveFromMenu,
                        onRenameChart: this._handleClickRename,
                        onSaveAsChart: this._handleClickSaveAs,
                        onLoadChart: this._handleClickLoad
                    };
                    return m.onNewChart = this._handleClickNew, m.onExportData = this._handleExportData, m.onAutoSaveChanged = this._handleAutoSaveEnabled, m.onSharingChanged = this._handleSharingEnabled, m.isAutoSaveEnabled = d, m.isSharingEnabled = u, m.layoutItems = h, m.onOpenMenu = this._handleOpenMenu, m.autoSaveId = i ? void 0 : "chart-auto-save", a.createElement(C.MatchMedia, {
                        rule: E.DialogBreakpoints.TabletSmall
                    }, (e => a.createElement(zt, { ...m,
                        isTabletSmall: e
                    })))
                }
                _onLoginStateChange() {
                    this.setState({
                        isAuthenticated: window.is_authenticated
                    })
                }
                _trackEvent(e) {
                    (0, B.trackEvent)("GUI", "Manage chart layout", e)
                }
            }
            Lt.contextType = Pt;
            var Bt = n(298023),
                Dt = n(653929),
                Ht = n(640027);

            function Wt(e) {
                const [t, n] = (0, a.useState)(!1), i = (0, Ht.useIsMounted)(), o = (0, a.useCallback)((async () => {
                    n(!0), await e.serverSnapshot(), i.current && n(!1)
                }), [e.serverSnapshot]);
                return a.createElement(b.ToolWidgetButton, {
                    id: e.id,
                    className: e.className,
                    isDisabled: t,
                    onClick: o,
                    title: e.tooltip,
                    icon: e.icon
                })
            }
            var Ft = n(272644);
            const Ot = (0, Bt.bindScreenshot)((function(e) {
                return (0, mt.isOnMobileAppPage)("any") ? a.createElement(Wt, { ...e,
                    icon: Ft
                }) : a.createElement(m.ToolWidgetMenu, {
                    content: a.createElement(b.ToolWidgetButton, {
                        id: e.id,
                        className: e.className,
                        title: e.tooltip,
                        icon: Ft
                    }),
                    drawerPosition: "Bottom",
                    drawerBreakpoint: E.DialogBreakpoints.TabletSmall,
                    arrow: !1,
                    onClick: function() {
                        (0, I.trackButtonClick)("top toolbar", "snapshot")
                    }
                }, a.createElement(Dt.ToolWidgetScreenshotContent, { ...e
                }))
            }));
            var Ut = n(474018),
                Vt = n(708538);
            class Gt extends a.PureComponent {
                constructor() {
                    super(...arguments), this._handleClick = e => {
                        e.stopPropagation();
                        const {
                            onApply: t,
                            item: n
                        } = this.props;
                        t(n)
                    }
                }
                render() {
                    const {
                        className: e,
                        item: t
                    } = this.props;
                    return a.createElement("div", {
                        className: v(e, Vt.item, "apply-common-tooltip"),
                        onClick: this._handleClick,
                        title: t.name
                    }, a.createElement("div", {
                        className: Vt.round
                    }, t.name.length > 0 ? t.name[0].toUpperCase() : " "))
                }
            }
            var qt = n(325445),
                $t = n(357043),
                Kt = n(58232),
                Xt = n(399812),
                jt = n(315865);
            const Zt = {
                    title: r.t(null, void 0, n(891900)),
                    tooltip: r.t(null, void 0, n(515812))
                },
                Qt = (0, T.registryContextType)();
            class Yt extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._updateState = e => {
                        this.setState({ ...e,
                            isActive: this.state.isActive
                        })
                    }, this._handleApplyTemplate = e => {
                        this._handleClose(), this._model.handleApplyTemplate(e)
                    }, this._handleRemoveTemplate = e => {
                        this._handleClose(), this._model.handleRemoveTemplate(e)
                    }, this._handleClose = () => {
                        this._handleToggleDropdown(!1)
                    }, this._handleToggleDropdown = e => {
                        const {
                            isActive: t
                        } = this.state, n = "boolean" == typeof e ? e : !t;
                        this.setState({
                            isActive: n
                        })
                    }, (0, T.validateRegistry)(t, {
                        favoriteStudyTemplatesService: o.any,
                        studyTemplates: o.any.isRequired,
                        templatesMenuViewStateService: o.any
                    });
                    const {
                        favoriteStudyTemplatesService: n,
                        studyTemplates: i
                    } = t;
                    this._model = new Kt.ToolWidgetTemplatesModel(i, n), this.state = { ...this._model.state().value(),
                        isActive: !1
                    }
                }
                componentDidMount() {
                    this._model.state().subscribe(this._updateState)
                }
                componentWillUnmount() {
                    this._model.state().unsubscribe(this._updateState), this._model.destroy()
                }
                render() {
                    const {
                        studyTemplatesList: e,
                        favorites: t
                    } = this.state, {
                        isShownQuicks: n,
                        className: i,
                        displayMode: o,
                        id: r
                    } = this.props;
                    return a.createElement($t.ViewStateContext.Provider, {
                        value: this.context.templatesMenuViewStateService || null
                    }, a.createElement(Jt, {
                        id: r,
                        className: i,
                        mode: o,
                        templates: e,
                        favorites: t,
                        onMenuOpen: this._model.handleDropdownOpen,
                        onTemplateFavorite: n ? this._model.handleFavorTemplate : void 0,
                        onTemplateSelect: this._handleApplyTemplate,
                        onTemplateRemove: this._handleRemoveTemplate,
                        onTemplateSave: this._model.handleSaveTemplate
                    }))
                }
            }

            function Jt(e) {
                const {
                    id: t,
                    className: n,
                    mode: i,
                    favorites: o,
                    templates: r,
                    isMenuOpen: s,
                    onTemplateSelect: l,
                    onTemplateSave: c,
                    onTemplateFavorite: d,
                    onTemplateRemove: u
                } = e, h = p()(n, jt.wrap, {
                    [jt.full]: "full" === i,
                    [jt.medium]: "medium" === i
                }), v = r.filter((e => o.includes(e.name))), g = "small" !== i && d && v.length > 0;
                return a.createElement(S, {
                    id: t,
                    className: h
                }, a.createElement(C.MatchMedia, {
                    rule: E.DialogBreakpoints.TabletSmall
                }, (t => a.createElement(m.ToolWidgetMenu, {
                    onOpen: e.onMenuOpen,
                    isDrawer: t,
                    drawerPosition: "Bottom",
                    arrow: !1,
                    content: a.createElement(L.ToolWidgetCollapsibleButton, {
                        className: p()(g && jt.buttonWithFavorites),
                        displayMode: i,
                        isOpened: s,
                        icon: Xt,
                        title: Zt.tooltip,
                        forceInteractive: !0,
                        collapseWhen: ["full", "medium", "small"]
                    }),
                    onClick: b
                }, a.createElement(qt.TemplatesMenuView, {
                    onTemplateSave: c,
                    onTemplateSelect: l,
                    onTemplateRemove: u,
                    onTemplateFavorite: d,
                    templates: r,
                    favorites: v,
                    isTabletSmall: t
                })))), g && a.createElement(en, {
                    favorites: v,
                    onTemplateSelect: function(e) {
                        l(e), b()
                    }
                }));

                function b() {
                    (0, I.trackButtonClick)("top toolbar", "indicator templates")
                }
            }

            function en(e) {
                return a.createElement(a.Fragment, null, e.favorites.map(((t, n, i) => a.createElement(Gt, {
                    key: t.name,
                    item: t,
                    onApply: e.onTemplateSelect,
                    className: p()({
                        [jt.first]: 0 === n,
                        [jt.last]: n === i.length - 1
                    })
                }))))
            }
            Yt.contextType = Qt;
            n(984919);
            var tn = n(93260),
                nn = n(635194),
                an = n(377665),
                on = n(796052);
            const rn = {
                    undoHint: r.t(null, void 0, n(780323)),
                    redoHint: r.t(null, void 0, n(370728))
                },
                sn = {
                    undoHotKey: (0, U.hotKeySerialize)({
                        keys: [(0, V.humanReadableModifiers)(V.Modifiers.Mod, !1), "Z"],
                        text: "{0} + {1}"
                    }),
                    redoHotKey: (0, U.hotKeySerialize)({
                        keys: [(0, V.humanReadableModifiers)(V.Modifiers.Mod, !1), "Y"],
                        text: "{0} + {1}"
                    })
                },
                ln = (0, rt.mergeThemes)(nn, tn),
                cn = (0, T.registryContextType)();
            class dn extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._batched = null, this._handleClickUndo = () => {
                        (0, B.trackEvent)("GUI", "Undo"), (0, I.trackButtonClick)("top toolbar", "undo");
                        const {
                            chartWidgetCollection: e
                        } = this.context;
                        e.undoHistory.undo()
                    }, this._handleClickRedo = () => {
                        (0, B.trackEvent)("GUI", "Redo"), (0, I.trackButtonClick)("top toolbar", "redo");
                        const {
                            chartWidgetCollection: e
                        } = this.context;
                        e.undoHistory.redo()
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    }), this.state = this._getStateFromUndoHistory()
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.undoHistory.redoStack().onChange().subscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().subscribe(this, this._onChangeStack)
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.undoHistory.redoStack().onChange().unsubscribe(this, this._onChangeStack), e.undoHistory.undoStack().onChange().unsubscribe(this, this._onChangeStack), this._batched = null
                }
                render() {
                    const {
                        id: e
                    } = this.props, {
                        isEnabledRedo: t,
                        isEnabledUndo: n,
                        redoStack: i,
                        undoStack: o
                    } = this.state;
                    return a.createElement(S, {
                        id: e
                    }, a.createElement(b.ToolWidgetButton, {
                        icon: an,
                        isDisabled: !n,
                        onClick: this._handleClickUndo,
                        title: n ? rn.undoHint.format({
                            hint: o
                        }) : void 0,
                        "data-tooltip-hotkey": n ? sn.undoHotKey : void 0,
                        theme: ln
                    }), a.createElement(b.ToolWidgetButton, {
                        icon: on,
                        isDisabled: !t,
                        onClick: this._handleClickRedo,
                        title: t ? rn.redoHint.format({
                            hint: i
                        }) : void 0,
                        "data-tooltip-hotkey": t ? sn.redoHotKey : void 0,
                        theme: ln
                    }))
                }
                _onChangeStack() {
                    null === this._batched && (this._batched = Promise.resolve().then((() => {
                        if (null === this._batched) return;
                        this._batched = null;
                        const e = this._getStateFromUndoHistory();
                        this.setState(e)
                    })))
                }
                _getStateFromUndoHistory() {
                    const {
                        chartWidgetCollection: e
                    } = this.context, t = e.undoHistory.undoStack(), n = e.undoHistory.redoStack(), i = n.head(), a = t.head();
                    return {
                        isEnabledRedo: !n.isEmpty(),
                        isEnabledUndo: !t.isEmpty(),
                        redoStack: i ? i.text().translatedText() : "",
                        undoStack: a ? a.text().translatedText() : ""
                    }
                }
            }
            dn.contextType = cn;
            var un = n(845937),
                hn = n(373884),
                mn = n(907429);
            const vn = {
                    hint: r.t(null, void 0, n(249211))
                },
                pn = (0, T.registryContextType)();
            class gn extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._onUpdateLayout = e => {
                        const {
                            chartWidgetCollection: t
                        } = this.context;
                        this.setState({
                            currentId: e || t.layout.value()
                        })
                    }, this._handleOpenLayout = () => {
                        (0, B.trackEvent)("GUI", "Chart Header Toolbar", "select layout"), (0, I.trackButtonClick)("top toolbar", "layout type")
                    }, (0, T.validateRegistry)(t, {
                        chartWidgetCollection: o.any.isRequired
                    }), this.state = {
                        currentId: "s"
                    }
                }
                componentDidMount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.layout.subscribe(this._onUpdateLayout, {
                        callWithLast: !0
                    })
                }
                componentWillUnmount() {
                    const {
                        chartWidgetCollection: e
                    } = this.context;
                    e.layout.unsubscribe(this._onUpdateLayout)
                }
                render() {
                    const {
                        chartWidgetCollection: e
                    } = this.context, {
                        className: t,
                        id: n
                    } = this.props, {
                        currentId: i
                    } = this.state;
                    return a.createElement(C.MatchMedia, {
                        rule: E.DialogBreakpoints.TabletSmall
                    }, (o => a.createElement(m.ToolWidgetMenu, {
                        id: n,
                        arrow: !1,
                        content: a.createElement(u.Icon, {
                            className: hn.icon,
                            icon: mn.icons[i]
                        }),
                        title: vn.hint,
                        className: v(t, hn.button),
                        isDrawer: o,
                        drawerPosition: "Bottom",
                        onOpen: this._handleOpenLayout
                    }, a.createElement(un.LayoutMenuContent, {
                        chartWidgetCollection: e,
                        isSmallWidth: o
                    }))))
                }
            }
            gn.contextType = pn;
            class Sn extends a.PureComponent {
                constructor() {
                    super(...arguments), this._wrapperElement = null, this._resizeObserver = null, this._update = () => {
                        this.forceUpdate()
                    }, this._setRef = e => {
                        this._wrapperElement = e
                    }, this._handleMeasure = ([e]) => {
                        this.props.width.setValue(e.contentRect.width)
                    }
                }
                componentDidMount() {
                    const {
                        element: e,
                        isFake: t,
                        width: n
                    } = this.props;
                    !t && this._wrapperElement ? (this._resizeObserver = new ResizeObserver(this._handleMeasure), this._wrapperElement.appendChild(e), this._resizeObserver.observe(this._wrapperElement)) : n.subscribe(this._update)
                }
                componentWillUnmount() {
                    const {
                        width: e,
                        isFake: t
                    } = this.props;
                    t && e.unsubscribe(this._update), this._resizeObserver && this._wrapperElement && this._resizeObserver.unobserve(this._wrapperElement)
                }
                render() {
                    const {
                        isFake: e = !1,
                        width: t
                    } = this.props;
                    return a.createElement(S, {
                        ref: this._setRef,
                        style: e ? {
                            width: t.value()
                        } : void 0,
                        "data-is-custom-header-element": !0
                    })
                }
            }

            function bn(e) {
                const {
                    displayMode: t,
                    params: n
                } = e;
                return a.createElement(m.ToolWidgetMenu, {
                    content: a.createElement(L.ToolWidgetCollapsibleButton, {
                        collapseWhen: void 0 !== n.icon ? void 0 : [],
                        displayMode: t,
                        icon: n.icon,
                        text: n.title,
                        title: n.tooltip,
                        "data-name": "dropdown",
                        "data-is-custom-header-element": !0
                    }),
                    drawerPosition: "Bottom",
                    drawerBreakpoint: E.DialogBreakpoints.TabletSmall,
                    arrow: !1
                }, n.items.map(((e, t) => a.createElement(h.PopupMenuItem, {
                    key: t,
                    label: e.title,
                    onClick: () => e.onSelect(),
                    "data-name": "dropdown-item"
                }))))
            }
            var fn = n(443741);

            function yn(e) {
                const {
                    className: t,
                    ...n
                } = e;
                return a.createElement(L.ToolWidgetCollapsibleButton, { ...n,
                    className: v(t, fn.customTradingViewStyleButton, fn.withoutIcon),
                    collapseWhen: [],
                    "data-name": "custom-tradingview-styled-button"
                })
            }

            function wn() {
                let e;
                return e = i.enabled("header_layouttoggle") ? gn : void 0, {
                    Bars: i.enabled("header_chart_type") ? R : void 0,
                    Compare: i.enabled("header_compare") ? F : void 0,
                    Custom: Sn,
                    CustomTradingViewStyledButton: yn,
                    Fullscreen: i.enabled("header_fullscreen_button") ? X : void 0,
                    Indicators: i.enabled("header_indicators") ? pe : void 0,
                    Intervals: i.enabled("header_resolutions") ? Ge : void 0,
                    OpenPopup: je,
                    Properties: i.enabled("header_settings") && i.enabled("show_chart_property_page") ? Je : void 0,
                    SaveLoad: i.enabled("header_saveload") ? Lt : void 0,
                    Screenshot: i.enabled("header_screenshot") ? Ot : void 0,
                    SymbolSearch: i.enabled("header_symbol_search") ? Ut.ToolWidgetSymbolSearchButton : void 0,
                    Templates: i.enabled("study_templates") ? Yt : void 0,
                    Dropdown: bn,
                    UndoRedo: i.enabled("header_undo_redo") ? dn : void 0,
                    Layout: e
                }
            }
        },
        813646: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetAlert: () => b
            });
            var i = n(50959),
                a = n(719036),
                o = n(821350),
                r = n(777754),
                s = n(571821),
                l = n(604286),
                c = n(470316),
                d = n(532787);
            const u = {
                    alert: r.t(null, void 0, n(474382)),
                    createAlert: r.t(null, void 0, n(125184))
                },
                h = (0, l.hotKeySerialize)({
                    keys: [(0, c.humanReadableModifiers)(c.Modifiers.Alt, !1), "A"],
                    text: "{0} + {1}"
                });

            function m(e) {
                return i.createElement(s.ToolWidgetCollapsibleButton, { ...e,
                    icon: d,
                    text: u.alert,
                    title: u.createAlert,
                    "data-tooltip-hotkey": h
                })
            }
            var v = n(345848),
                p = n(1574),
                g = n(231656);
            const S = (0, g.registryContextType)();
            class b extends i.PureComponent {
                constructor(e, t) {
                    super(e, t), this._handleClick = () => {
                        const {
                            chartWidgetCollection: e
                        } = this.context;
                        (0, v.trackEvent)("GUI", "CreateAlert", "TopToolbar"), (0, p.trackButtonClick)("top toolbar", "alert"), window.runOrSignIn((() => {
                            (0, o.invokeAlertEditorWithOnlineSeries)({
                                trackEvent: "chart",
                                actionSource: "top_toolbar",
                                dataSourceHub: e.activeChartWidget.value().model().model()
                            })
                        }), {
                            source: "Create alert in header",
                            sourceMeta: "Chart"
                        })
                    }, (0, g.validateRegistry)(t, {
                        chartWidgetCollection: a.any.isRequired
                    })
                }
                render() {
                    return i.createElement(m, { ...this.props,
                        onClick: this._handleClick
                    })
                }
            }
            b.contextType = S
        },
        845937: (e, t, n) => {
            "use strict";
            n.d(t, {
                LayoutMenuContent: () => C
            });
            var i = n(497754),
                a = n(50959),
                o = n(777754),
                r = n(93916),
                s = n(821190),
                l = n(83436),
                c = n(150754);

            function d(e) {
                const {
                    title: t,
                    children: n,
                    isSmallWidth: o,
                    separator: r
                } = e;
                return a.createElement("div", {
                    className: i(c.row, o && c.smallRow)
                }, a.createElement("div", {
                    className: c.rowInner
                }, a.createElement("div", {
                    className: i(c.rowLabel, o && c.smallRowLabel)
                }, t), a.createElement("div", {
                    className: c.rowButtons
                }, n)), r)
            }
            class u extends a.PureComponent {
                constructor() {
                    super(...arguments), this._handleClick = () => {
                        const {
                            layout: e,
                            onClick: t
                        } = this.props;
                        t(e)
                    }
                }
                render() {
                    const {
                        isActive: e,
                        icon: t,
                        isSmallWidth: n
                    } = this.props;
                    return a.createElement("div", {
                        className: i(c.layoutButtonWrap, n && c.smallWidth)
                    }, a.createElement("div", {
                        className: i(c.layoutButton, e && c.isActive, n && c.smallWidthLayoutButton),
                        onClick: this._handleClick
                    }, a.createElement(l.Icon, {
                        icon: t
                    })))
                }
            }
            var h = n(907429),
                m = n(320711),
                v = n(826316),
                p = n(591734),
                g = n(527941);

            function S(e) {
                const {
                    onClick: t,
                    label: n,
                    hint: o,
                    isChecked: r,
                    isLabelCentered: s
                } = e;
                return a.createElement("div", {
                    className: i(p.toggler, {
                        [p.checked]: r
                    }),
                    onClick: t
                }, a.createElement("div", {
                    className: i(p.label, {
                        [p.centered]: s
                    })
                }, n), a.createElement(l.Icon, {
                    className: "apply-common-tooltip",
                    title: o,
                    icon: g
                }))
            }
            class b extends a.PureComponent {
                constructor(e) {
                    super(e), this._onChange = () => {
                        this.setState({
                            isChecked: this.props.watchedValue.value()
                        })
                    }, this._handleClick = () => {
                        const {
                            onClick: e,
                            watchedValue: t
                        } = this.props;
                        e(t)
                    }, this.state = {
                        isChecked: this.props.watchedValue.value()
                    }
                }
                componentDidMount() {
                    this.props.watchedValue.subscribe(this._onChange)
                }
                componentWillUnmount() {
                    this.props.watchedValue.unsubscribe(this._onChange)
                }
                render() {
                    const {
                        label: e,
                        hint: t,
                        isLabelCentered: n,
                        isSwitch: i,
                        value: o
                    } = this.props, {
                        isChecked: r
                    } = this.state;
                    return i && o ? a.createElement(m.MenuItemSwitcher, {
                        theme: v.menuItemSwitcherMobileTheme,
                        label: e,
                        checked: r,
                        value: o,
                        onChange: this._handleClick
                    }) : a.createElement(S, {
                        label: e,
                        hint: t,
                        isChecked: r,
                        isLabelCentered: n,
                        onClick: this._handleClick
                    })
                }
            }
            var f = n(224743),
                y = n(373884);
            const w = [{
                    layouts: ["s"],
                    title: "1"
                }, {
                    layouts: ["2h", "2v"],
                    title: "2"
                }, {
                    layouts: ["3v", "3h", "3s", "2-1", "1-2", "3r"],
                    title: "3"
                }, {
                    layouts: ["4", "4h", "4v", "4s", "1-3", "2-2"],
                    title: "4"
                }, {
                    layouts: ["1-4", "5s", "2-3", "5h"],
                    title: "5"
                }, {
                    layouts: ["6", "6c", "6h"],
                    title: "6"
                }, {
                    layouts: ["7h"],
                    title: "7"
                }, {
                    layouts: ["8", "8c", "8h"],
                    title: "8"
                }],
                _ = {
                    layoutType: o.t(null, void 0, n(528024)),
                    syncGroupTitle: o.t(null, void 0, n(618008)),
                    syncCrosshairLabel: o.t(null, void 0, n(46720)),
                    syncCrosshairHint: o.t(null, void 0, n(185013)),
                    syncIntervalLabel: o.t(null, void 0, n(469466)),
                    syncIntervalHint: o.t(null, void 0, n(127453)),
                    syncDateRangeLabel: o.t(null, void 0, n(66174)),
                    syncDateRangeHint: o.t(null, void 0, n(942892)),
                    syncSymbolLabel: o.t(null, void 0, n(589053)),
                    syncSymbolHint: o.t(null, void 0, n(685685)),
                    syncTrackLabel: o.t(null, void 0, n(631976)),
                    syncTrackHint: o.t(null, void 0, n(607361))
                };
            class C extends a.PureComponent {
                constructor(e) {
                    super(e), this._handleToggleSync = e => {
                        const t = !e.value();
                        e.setValue(t)
                    }, this._handleClickLayout = e => {
                        (0, f.globalCloseMenu)(), this.props.chartWidgetCollection.layout.value() === e ? this.props.chartWidgetCollection.revertToInline() : this.props.chartWidgetCollection.setChartLayoutWithUndo(e)
                    }, this._onUpdateLayout = e => {
                        this.setState({
                            currentId: e || this.props.chartWidgetCollection.layout.value()
                        })
                    }, this.state = {
                        currentId: "s"
                    }
                }
                componentDidMount() {
                    this.props.chartWidgetCollection.layout.subscribe(this._onUpdateLayout, {
                        callWithLast: !0
                    })
                }
                componentWillUnmount() {
                    this.props.chartWidgetCollection.layout.unsubscribe(this._onUpdateLayout)
                }
                render() {
                    const {
                        isSmallWidth: e
                    } = this.props;
                    return a.createElement("div", {
                        className: y.dropdown
                    }, a.createElement("div", null, this._renderLayoutList(e)), a.createElement("div", null, e && a.createElement(r.PopupMenuSeparator, {
                        size: "normal"
                    })), a.createElement("div", null, e ? a.createElement(s.ToolTitle, {
                        text: _.syncGroupTitle,
                        className: y.syncCharts
                    }) : a.createElement("div", {
                        className: i(y.title, e && [y.tabletTitle, y.syncCharts])
                    }, _.syncGroupTitle), e ? this._renderSyncList() : this._renderSyncTable()))
                }
                _renderLayoutList(e) {
                    const {
                        currentId: t
                    } = this.state;
                    return a.createElement("div", null, e && a.createElement(s.ToolTitle, {
                        text: _.layoutType
                    }), w.map(((n, i) => a.createElement(d, {
                        key: n.title,
                        isSmallWidth: e,
                        title: n.title,
                        separator: i !== w.length - 1 && a.createElement(r.PopupMenuSeparator, null)
                    }, n.layouts.map((n => a.createElement(u, {
                        key: n,
                        layout: n,
                        icon: h.icons[n],
                        onClick: this._handleClickLayout,
                        isActive: n === t,
                        isSmallWidth: e
                    })))))))
                }
                _renderSyncList() {
                    return a.createElement("div", {
                        className: y.syncListWrapper
                    }, a.createElement(b, {
                        isSwitch: !0,
                        label: _.syncSymbolLabel,
                        onClick: this._handleToggleSync,
                        value: "syncSymbolLabel",
                        watchedValue: this.props.chartWidgetCollection.lock.symbol
                    }), a.createElement(b, {
                        isSwitch: !0,
                        label: _.syncIntervalLabel,
                        onClick: this._handleToggleSync,
                        value: "syncIntervalLabel",
                        watchedValue: this.props.chartWidgetCollection.lock.interval
                    }), a.createElement(b, {
                        isSwitch: !0,
                        label: _.syncCrosshairLabel,
                        watchedValue: this.props.chartWidgetCollection.lock.crosshair,
                        value: "syncCrosshairLabel",
                        onClick: this._handleToggleSync
                    }), a.createElement(b, {
                        isSwitch: !0,
                        label: _.syncTrackLabel,
                        watchedValue: this.props.chartWidgetCollection.lock.trackTime,
                        value: "syncTrackLabel",
                        onClick: this._handleToggleSync
                    }), a.createElement(b, {
                        isSwitch: !0,
                        label: _.syncDateRangeLabel,
                        onClick: this._handleToggleSync,
                        value: "syncDateRangeLabel",
                        watchedValue: this.props.chartWidgetCollection.lock.dateRange
                    }))
                }
                _renderSyncTable() {
                    return a.createElement("table", {
                        className: y.syncTable
                    }, a.createElement("tbody", null, a.createElement("tr", null, a.createElement("td", null, a.createElement(b, {
                        label: _.syncSymbolLabel,
                        hint: _.syncSymbolHint,
                        watchedValue: this.props.chartWidgetCollection.lock.symbol,
                        onClick: this._handleToggleSync
                    })), a.createElement("td", null, a.createElement(b, {
                        label: _.syncIntervalLabel,
                        hint: _.syncIntervalHint,
                        watchedValue: this.props.chartWidgetCollection.lock.interval,
                        onClick: this._handleToggleSync
                    }))), a.createElement("tr", null, a.createElement("td", null, a.createElement(b, {
                        label: _.syncCrosshairLabel,
                        hint: _.syncCrosshairHint,
                        watchedValue: this.props.chartWidgetCollection.lock.crosshair,
                        onClick: this._handleToggleSync
                    })), a.createElement("td", null, a.createElement(b, {
                        label: _.syncTrackLabel,
                        hint: _.syncTrackHint,
                        watchedValue: this.props.chartWidgetCollection.lock.trackTime,
                        onClick: this._handleToggleSync
                    }))), a.createElement("tr", null, a.createElement("td", {
                        colSpan: 2
                    }, a.createElement(b, {
                        label: _.syncDateRangeLabel,
                        hint: _.syncDateRangeHint,
                        watchedValue: this.props.chartWidgetCollection.lock.dateRange,
                        onClick: this._handleToggleSync,
                        isLabelCentered: !0
                    })))))
                }
            }
        },
        102117: (e, t, n) => {
            "use strict";
            n.d(t, {
                MAX_VIDEO_LENGTH: () => i,
                WARNING_TIME: () => a,
                LS_SHOW_INFO_KEY: () => o,
                VIDEO_PREPARING_DELAY: () => r
            });
            const i = 1200,
                a = 30,
                o = "video_ideas_show_info",
                r = 3
        },
        634822: (e, t, n) => {
            "use strict";
            n.d(t, {
                PublishButtonContext: () => me,
                PublishButtonManager: () => he
            });
            var i = n(50959),
                a = n(777754),
                o = n(368337),
                r = n(164993);
            class s extends i.PureComponent {
                render() {
                    return i.createElement("div", {
                        className: r.progress,
                        style: {
                            zIndex: 200
                        }
                    }, i.createElement("div", {
                        className: r.bar,
                        style: {
                            width: this.props.progress + "%"
                        }
                    }))
                }
            }
            const l = (0, o.makeOverlapable)(s);
            var c = n(679975),
                d = n(773792),
                u = n(49437),
                h = n(463087),
                m = n(125226),
                v = n(514262),
                p = n(890740),
                g = n(66974),
                S = n(548592),
                b = n(228387);
            const f = (0, g.isProd)() ? "https://video-ideas.tradingview.com" : "https://tradingview-video-ideas-staging.s3.amazonaws.com",
                y = (0, g.isProd)() ? "https://ideas-uploader.tradingview.com/api" : "https://video-ideas-uploader.xstaging.tv/api";
            let w, _, C, E, k, T, x, M, I, N, A;
            const z = {
                width: 640,
                frameRate: 25
            };
            async function P(e, t = !1, n = !1) {
                var i, a;
                try {
                    x = await
                    function(e, t) {
                        const n = t ? 3840 : 1920,
                            i = t ? 2160 : 1080;
                        return (0, b.getUserScreen)(n, i)
                    }(0, n)
                } catch (t) {
                    return void e("e_screen_access")
                }
                try {
                    if (null === (i = null === window || void 0 === window ? void 0 : window.TVD) || void 0 === i ? void 0 : i.getCurrentAudioDevice) {
                        const e = await (null === (a = window.TVD) || void 0 === a ? void 0 : a.getCurrentAudioDevice());
                        M = await (0, b.getUserAudio)({
                            deviceId: e
                        })
                    } else M = await (0, b.getUserAudio)()
                } catch (t) {
                    return void e("e_mic_access")
                }
                M.getAudioTracks().forEach((e => {
                        x.addTrack(e)
                    })), x.getTracks().forEach((t => {
                        t.addEventListener("ended", (() => {
                            e(new Error("Stream ended."))
                        }))
                    })),
                    function(e, t) {
                        T = [];
                        const n = window.MediaRecorder,
                            i = n.isTypeSupported("video/webm") ? "video/webm" : "video/mp4";
                        k = new n(e, {
                            mimeType: i,
                            audioBitsPerSecond: 128e3,
                            videoBitsPerSecond: t ? 1e7 : 5e6
                        }), k.ondataavailable = e => {
                            e.data && e.data.size > 0 && T.push(e.data)
                        }, k.onstop = L, k.start()
                    }(x, n), (0, S.toggleScreenRecordingState)(!0), e()
            }

            function R(e, t, n, i) {
                w = e, _ = t, C = n, E = i, k && k.stop(), M && M.getTracks().forEach((e => e.stop())), I && I.getTracks().forEach((e => e.stop())), x && x.getTracks().forEach((e => e.stop())), (0, S.toggleScreenRecordingState)(!1)
            }

            function L() {
                const e = new Blob(T);
                w(URL.createObjectURL(e));
                const t = new FormData;
                t.append("video", e, "video"), N = new XMLHttpRequest, N.upload.addEventListener("progress", (e => {
                    e.lengthComputable && _(e.loaded / e.total)
                })), N.onload = () => {
                    const e = JSON.parse(N.responseText);
                    C(e.filename)
                }, N.onerror = () => {
                    N.abort(), async function(e) {
                        const {
                            ShowDisconnectDialogImpl: t
                        } = await Promise.all([n.e(59302), n.e(8302)]).then(n.bind(n, 155339));
                        t(e)
                    }({
                        onConfirm: () => {
                            _(0), L()
                        },
                        onClose: () => {
                            E()
                        }
                    })
                }, N.open("POST", `${y}/upload`, !0), (0, g.isProd)() || N.setRequestHeader("X-UserId", String(window.user.id)), N.withCredentials = !0, N.send(t)
            }
            var B = n(223124),
                D = n(272001),
                H = n(168798),
                W = n(314802),
                F = n(102117),
                O = n(500745),
                U = n(826881),
                V = n(364489),
                G = n(540975),
                q = n(83436),
                $ = n(889561),
                K = n(20805);
            class X extends i.Component {
                constructor(e) {
                    super(e), this._video = null, this._getVideo = e => {
                        this._video = e, this._video && (this._video.addEventListener("error", (() => {
                            this.setState({
                                errorLoadVideo: !0
                            })
                        })), this._video.addEventListener("click", (() => {
                            this._video && (this._video.paused ? this._video.play() : this._video.pause())
                        })), this._onResize())
                    }, this._onPublish = () => {
                        if (this.props.onPublish && this._video) {
                            const e = this._video.duration;
                            this.props.onPublish(e === 1 / 0 ? 0 : e)
                        }
                    }, this._onDownload = () => {
                        const e = document.createElement("a");
                        e.href = this.props.videoUrl, e.download = "video-idea.webm", e.click()
                    }, this._onResize = () => {
                        this._video && (this._video.style.maxHeight = Math.round(window.innerHeight - 60 - 77 - 44 - 5) + "px")
                    }, this.state = {
                        errorLoadVideo: !1
                    }
                }
                componentDidUpdate() {
                    const {
                        videoUrl: e
                    } = this.props;
                    this._video && e && this._video.src !== e && (this._video.src = e, this._video.addEventListener("loadedmetadata", (() => {
                        this._video && (this._video.currentTime = 1e101, this._video.ontimeupdate = () => {
                            this._video && (this._video.currentTime = 0, this._video.ontimeupdate = () => {
                                this._video && (this._video.ontimeupdate = () => {}, this._video.play())
                            })
                        })
                    })))
                }
                componentDidMount() {
                    window.addEventListener("resize", this._onResize)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this._onResize)
                }
                render() {
                    const {
                        errorLoadVideo: e
                    } = this.state, t = "" === this.props.remoteVideoUrl;
                    return i.createElement(O.PopupDialog, {
                        isOpened: this.props.isOpened,
                        className: K.previewDialog,
                        fullscreen: !0
                    }, i.createElement(U.Header, {
                        onClose: this.props.onClose
                    }, a.t(null, void 0, n(460355))), i.createElement(U.Body, null, i.createElement(V.KeyboardDocumentListener, {
                        keyCode: 27,
                        handler: this.props.onClose
                    }), i.createElement("div", {
                        className: K.wrapper
                    }, e && i.createElement("div", {
                        className: K.error
                    }, i.createElement("div", {
                        className: K["error-block"]
                    }, i.createElement("div", {
                        className: K["error-title"]
                    }, i.createElement(q.Icon, {
                        className: K["error-title-icon"],
                        icon: $
                    }), i.createElement("h2", {
                        className: K["error-title-text"]
                    }, a.t(null, void 0, n(892071)))), i.createElement("p", {
                        className: K["error-title-description"]
                    }, a.t(null, void 0, n(949757))))), i.createElement("video", {
                        className: K.video,
                        ref: this._getVideo,
                        autoPlay: !0,
                        controls: !0,
                        controlsList: "nodownload"
                    })), i.createElement("div", {
                        className: K.previewButtons
                    }, i.createElement(G.Button, {
                        className: K.button,
                        appearance: "stroke",
                        intent: "default",
                        onClick: this.props.onClose
                    }, a.t(null, void 0, n(620036))), i.createElement(G.Button, {
                        className: K.button,
                        appearance: "stroke",
                        intent: "default",
                        onClick: this._onDownload
                    }, a.t(null, void 0, n(230453))), i.createElement(G.Button, {
                        className: K.button,
                        onClick: this._onPublish,
                        disabled: t
                    }, t ? a.t(null, void 0, n(887051)) : a.t(null, void 0, n(530882))))))
                }
            }
            var j = n(869746);
            class Z extends i.PureComponent {
                constructor(e) {
                    super(e), this._padding = 40, this._video = null, this._handleMouseMove = e => {
                        e.pageX < 1.7 * this._height + this._padding && e.pageY > window.innerHeight - this._height - this._padding ? this.setState({
                            hover: !0
                        }) : this.setState({
                            hover: !1
                        })
                    }, this._resize = () => {
                        this._height = Math.round(.25 * window.innerHeight)
                    }, this._getVideo = e => {
                        this._video = e, null !== this._video && (this._video.srcObject = this.props.src)
                    }, this.state = {
                        hover: !1
                    }
                }
                render() {
                    this._resize();
                    const e = {
                        height: this._height,
                        opacity: this.state.hover ? .1 : 1
                    };
                    return i.createElement("video", {
                        className: j.videoWindow,
                        style: e,
                        ref: this._getVideo,
                        autoPlay: !0,
                        muted: !0
                    })
                }
                componentDidMount() {
                    document.addEventListener("mousemove", this._handleMouseMove, !1)
                }
                componentWillUnmount() {
                    document.removeEventListener("mousemove", this._handleMouseMove, !1)
                }
            }
            const Q = (0, o.makeOverlapable)(Z);
            var Y = n(19299),
                J = n(821841),
                ee = n(779923),
                te = n(664224),
                ne = n(286293),
                ie = n(577206),
                ae = n(537838),
                oe = n(344919),
                re = n(497754),
                se = n(919346),
                le = n(495046);
            const ce = (0, D.getLogger)("Video.Ideas"),
                de = le.enabled("mobile_app_intercepts_load_idea_url"),
                ue = {
                    dialogTitle: a.t(null, void 0, n(613582)),
                    resizeError: a.t(null, void 0, n(178791))
                };
            class he extends i.PureComponent {
                constructor(e) {
                    super(e), this._timerInterval = 0, this._videoUrl = "", this._oldTime = 0, this._supportedPromise = null, this._resetRecordingState = () => {
                        this.setState({
                            state: "idle"
                        })
                    }, this._handlePublishProgressChange = e => {
                        this.setState({
                            simplePublishInProgress: e
                        })
                    }, this._startRecording = e => {
                        e.persist(), window.runOrSignIn((async () => {
                            (0, m.isFeatureEnabled)("disable_phone_verification_sms") || await (0, v.whenVerified)({
                                showDialog: !0,
                                source: "Publish video idea"
                            }), this._toggleRecording(e)
                        }), {
                            source: "publish-idea"
                        })
                    }, this._handlePublish = () => {
                        const {
                            state: e
                        } = this.state;
                        "idle" === e ? window.runOrSignIn((() => {
                            (0, h.publishChart)({
                                onWidget: (0, W.isOnMobileAppPage)("any") && !de
                            }, !1)
                        }), {
                            source: "publish-idea"
                        }) : this._toggleRecording()
                    }, this._toggleRecording = e => {
                        if (e && this.setState({
                                extendedOptions: e.shiftKey,
                                extraQuality: e.altKey
                            }), ["recording", "preparing", "pause"].includes(this.state.state)) R((e => {
                            this._videoUrl = e, this.setState({
                                state: "preview"
                            })
                        }), this._onUploadProgress, this._onUploadComplete, this._onCancelPublishing), this.state.cameraStream && (this.state.cameraStream.getVideoTracks().forEach((e => e.stop())), this.setState({
                            cameraStream: null
                        })), this.setState({
                            state: "processing",
                            camActive: !1
                        }), window.removeEventListener("resize", this._resizeHandler), clearInterval(this._timerInterval);
                        else if ("idle" === this.state.state) {
                            if (!this.state.supported) return void this.setState({
                                state: "idle",
                                screenError: a.t(null, void 0, n(241061))
                            });
                            this._showInfoDialog ? this.setState({
                                state: "info"
                            }) : this._connectAndStartRecording()
                        }
                    }, this._onRecord = e => {
                        if (e) return ["recording", "preparing"].includes(this.state.state) ? this._toggleRecording() : ["processing", "preview"].includes(this.state.state) ? ce.logDebug(e.toString()) : "e_mic_access" === e || "e_screen_access" === e ? this.setState({
                            state: "idle",
                            error: a.t(null, void 0, n(874765))
                        }) : this._resetState(), window.removeEventListener("beforeunload", this._beforeUnloadHandler), void window.removeEventListener("resize", this._resizeHandler);
                        this._oldTime = (new Date).getTime(), this._timerInterval = setInterval((() => {
                            "pause" === this.state.state ? this._oldTime = (new Date).getTime() : (this.setState((e => {
                                const t = Math.round(((new Date).getTime() - this._oldTime) / 1e3);
                                return this._oldTime = (new Date).getTime(), {
                                    timer: e.timer + t
                                }
                            })), this.state.timer >= 0 && "recording" !== this.state.state && this.setState({
                                state: "recording"
                            }), this.state.timer >= F.MAX_VIDEO_LENGTH && this._toggleRecording())
                        }), 1e3), this.setState({
                            state: "preparing"
                        }), setTimeout((() => window.addEventListener("resize", this._resizeHandler)), 2e3)
                    }, this._onCancelPublishing = () => {
                        ! function(e, t = !1) {
                            N && N.abort(), (0, p.fetch)(`${y}/remove`, {
                                body: JSON.stringify({
                                    filename: e,
                                    keepMp4: t
                                }),
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/json",
                                    "X-UserId": (0, g.isProd)() ? "" : String(window.user.id)
                                }
                            })
                        }(this.state.filename), this._resetState()
                    }, this._onPublish = e => {
                        const t = Math.max(0, Math.floor(e || 0) - F.VIDEO_PREPARING_DELAY);
                        var n;
                        (0, h.publishChart)({
                            videoFilename: (n = this.state.filename, f + "/" + n.charAt(0) + "/" + n.replace(".webm", ".mp4")),
                            videoDuration: t,
                            videoCam: this.state.camActive,
                            isPrivate: this.state.privateIdea
                        }, !1), this._videoUrl = "", this._resetState()
                    }, this._resetState = () => {
                        this.setState({
                            state: "idle",
                            filename: "",
                            uploadProgress: 0,
                            camActive: !1,
                            muted: !1,
                            resizeTrigger: !1
                        }), window.removeEventListener("beforeunload", this._beforeUnloadHandler), window.removeEventListener("resize", this._resizeHandler)
                    }, this._onCloseError = () => {
                        this.setState({
                            error: void 0
                        })
                    }, this._onOkLimitError = () => {
                        this.setState({
                            limitError: void 0,
                            privateIdea: !0
                        }), this._connectAndStartRecording()
                    }, this._onCloseScreenError = () => {
                        this.setState({
                            screenError: void 0,
                            privateIdea: !1
                        })
                    }, this._onCloseLimitError = () => {
                        this.setState({
                            limitError: void 0,
                            privateIdea: !1
                        })
                    }, this._connectAndStartRecording = () => {
                        this.setState({
                            state: "connecting",
                            timer: -F.VIDEO_PREPARING_DELAY - 1
                        }), this._ideasProvider.getPublishLimitInfo().then((e => {
                            !e.out || this.state.privateIdea ? (P(this._onRecord, this.state.extendedOptions, this.state.extraQuality), window.addEventListener("beforeunload", this._beforeUnloadHandler)) : this.setState({
                                state: "idle",
                                limitError: H.i18n.limitError.title
                            })
                        }))
                    }, this._toggleShowInfo = e => {
                        this.setState((e => ({
                            doNotShowAgain: !e.doNotShowAgain
                        })), (() => {
                            this.state.doNotShowAgain ? u.TVLocalStorage.setItem(F.LS_SHOW_INFO_KEY, e) : u.TVLocalStorage.removeItem(F.LS_SHOW_INFO_KEY)
                        }))
                    }, this._beforeUnloadHandler = e => {
                        e.returnValue = "Video is being recorded. Are you sure you want to leave this page?"
                    }, this._resizeHandler = () => {
                        clearInterval(this._timerInterval), R((e => {
                            this._videoUrl = e, this._resetState(), this.setState({
                                resizeTrigger: !0
                            })
                        }), (() => {}), (() => {}), (() => {}))
                    }, this._onOkResizeError = () => {
                        this.setState({
                            resizeTrigger: !1
                        })
                    }, this._checkSupport = async () => {
                        this._supportedPromise = (0, B.makeCancelable)(async function() {
                            return Promise.resolve("getDisplayMedia" in navigator || "mediaDevices" in navigator && "getDisplayMedia" in navigator.mediaDevices)
                        }()), this._supportedPromise.promise.then((e => {
                            this.setState({
                                supported: e
                            }), this._supportedPromise = null
                        }))
                    }, this._onUploadProgress = e => {
                        this.setState({
                            uploadProgress: Math.round(100 * e)
                        })
                    }, this._onUploadComplete = e => {
                        this.setState({
                            filename: e,
                            uploadProgress: 0
                        })
                    }, this._toggleMute = () => {
                        this.setState((e => {
                            var t;
                            return t = !e.muted, x && x.getAudioTracks().forEach((e => {
                                e.enabled = !t
                            })), {
                                muted: !e.muted
                            }
                        }))
                    }, this._toggleCam = async () => {
                        if (this.state.cameraStream) this.state.cameraStream.getVideoTracks().forEach((e => e.stop())), this.setState({
                            cameraStream: null
                        });
                        else {
                            const e = await async function() {
                                var e, t;
                                try {
                                    return (null === (e = window.TVD) || void 0 === e ? void 0 : e.getCurrentCameraDevice) && (A = await (null === (t = window.TVD) || void 0 === t ? void 0 : t.getCurrentCameraDevice())), I = await (0, b.getUserVideo)(A ? { ...z,
                                        deviceId: A
                                    } : z), I
                                } catch (e) {
                                    return null
                                }
                            }();
                            this.setState({
                                cameraStream: e
                            })
                        }
                        this.setState((e => ({
                            camActive: !e.camActive
                        })))
                    }, this._createStream = () => {
                        this.setState({
                            state: "create-stream"
                        })
                    }, this._togglePause = () => {
                        this.setState((e => {
                            const t = "pause" === e.state;
                            return function(e) {
                                k && (e ? k.pause() : k.resume())
                            }(!t), {
                                state: t ? "recording" : "pause"
                            }
                        }))
                    }, this.state = {
                        state: "idle",
                        timer: 0,
                        extendedOptions: !1,
                        extraQuality: !1,
                        privateIdea: !1,
                        supported: !1,
                        uploadProgress: 0,
                        filename: "",
                        muted: !1,
                        camActive: !1,
                        cameraStream: null,
                        resizeTrigger: !1,
                        doNotShowAgain: !1,
                        simplePublishInProgress: c.publishInProgress.value()
                    }, this._showInfoDialog = null === u.TVLocalStorage.getItem(F.LS_SHOW_INFO_KEY), this._ideasProvider = new d.IdeasProvider
                }
                componentDidMount() {
                    c.publishInProgress.subscribe(this._handlePublishProgressChange), this._checkSupport()
                }
                componentDidUpdate(e, t) {
                    const {
                        resizeTrigger: i,
                        error: o,
                        limitError: r,
                        screenError: s
                    } = this.state;
                    if (!t.resizeTrigger && i && (0, ee.showWarning)({
                            title: ue.dialogTitle,
                            text: ue.resizeError,
                            onClose: this._onOkResizeError
                        }), !t.error && o) {
                        const e = [{
                            name: "Learn more",
                            title: a.t(null, void 0, n(718429)),
                            appearance: "stroke",
                            intent: "default",
                            handler: () => {
                                (0, te.showSupportDialog)({
                                    solutionId: ne.solutionIds.VIDEO_DEVICE_ACCESS
                                })
                            }
                        }];
                        (0, ee.showWarning)({
                            title: ue.dialogTitle,
                            text: o,
                            actions: e,
                            onClose: this._onCloseError
                        })
                    }!t.limitError && r && (0, ee.showConfirm)({
                        title: ue.dialogTitle,
                        text: r,
                        mainButtonText: a.t(null, void 0, n(181429)),
                        onConfirm: this._onOkLimitError,
                        onClose: this._onCloseLimitError
                    }), !t.screenError && s && (0, ee.showWarning)({
                        title: ue.dialogTitle,
                        text: s,
                        onClose: this._onCloseScreenError
                    })
                }
                componentWillUnmount() {
                    c.publishInProgress.unsubscribe(this._handlePublishProgressChange), null !== this._supportedPromise && this._supportedPromise.cancel()
                }
                dialogContent() {
                    const e = a.t(null, void 0, n(156046)).split(/{house_rules_link}|{house_rules_link_close}/),
                        t = i.createElement(i.Fragment, null, e[0], i.createElement("a", {
                            href: "/?solution=43000591338"
                        }, e[1]), e[2]);
                    return {
                        icon: {
                            [se.StdTheme.Light]: ie,
                            [se.StdTheme.Dark]: ae
                        },
                        title: a.t(null, void 0, n(579256)),
                        content: i.createElement(i.Fragment, null, i.createElement("p", {
                            className: re(oe.text, oe.paragraph)
                        }, t), i.createElement("ul", {
                            className: re(oe.text, oe.list)
                        }, i.createElement("li", null, a.t(null, void 0, n(477121))), i.createElement("li", null, a.t(null, void 0, n(549539))), i.createElement("li", null, a.t(null, void 0, n(367908))), i.createElement("li", null, a.t(null, void 0, n(254979))))),
                        textButton: a.t(null, void 0, n(628773))
                    }
                }
                render() {
                    const {
                        state: e,
                        uploadProgress: t,
                        filename: n,
                        camActive: a,
                        cameraStream: o,
                        doNotShowAgain: r,
                        simplePublishInProgress: s,
                        timer: c,
                        muted: d
                    } = this.state;
                    return i.createElement(i.Fragment, null, i.createElement(me.Provider, {
                        value: {
                            state: e,
                            timer: c,
                            muted: d,
                            camActive: a,
                            cameraStream: o,
                            simplePublishInProgress: s,
                            handlePublish: this._handlePublish,
                            startRecording: this._startRecording,
                            toggleMuted: this._toggleMute,
                            toggleCam: this._toggleCam,
                            togglePause: this._togglePause,
                            createStream: this._createStream
                        }
                    }, this.props.children), i.createElement(J.WarningPopup, {
                        isOpened: "info" === e,
                        checkedCheckbox: r,
                        onOk: this._connectAndStartRecording,
                        onClose: this._resetRecordingState,
                        toggleCheckbox: this._toggleShowInfo,
                        dataDialogName: "publish-intro-dialog",
                        content: this.dialogContent()
                    }), i.createElement(Y.CreateStreamDialog, {
                        isOpened: "create-stream" === e,
                        onClose: this._resetRecordingState,
                        newWindow: !0
                    }), i.createElement(X, {
                        videoUrl: this._videoUrl,
                        remoteVideoUrl: n,
                        isOpened: "preview" === e,
                        onClose: this._onCancelPublishing,
                        onPublish: this._onPublish
                    }), i.createElement(l, {
                        isOpened: 0 !== t,
                        progress: t
                    }), i.createElement(Q, {
                        isOpened: a && null !== o,
                        src: o
                    }))
                }
            }
            const me = i.createContext(null)
        },
        925395: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetPublishButton: () => L
            });
            var i = n(50959),
                a = n(497754),
                o = n(650151),
                r = n(777754),
                s = n(768038),
                l = n(83436),
                c = n(392717);
            class d extends i.PureComponent {
                render() {
                    const {
                        isInteractive: e = !0,
                        intent: t = "blue",
                        variant: n = "square",
                        isToggleable: o = !1
                    } = this.props, r = a(this.props.className, this.props.tooltip && "apply-common-tooltip", c.button, c[`variant-${n}`], c[`color-${t}`], {
                        [c.interactive]: !this.props.isDisabled && e,
                        [c.toggleable]: o,
                        [c.disabled]: this.props.isDisabled,
                        [c.active]: this.props.isActive
                    }, {
                        [c.iconOnly]: !this.props.children && Boolean(this.props.icon)
                    });
                    return i.createElement("div", {
                        className: r,
                        onClick: this.props.isDisabled ? void 0 : this.props.onClick,
                        title: this.props.tooltip,
                        "data-tooltip-hotkey": this.props.hotkey
                    }, i.createElement("div", {
                        className: c.bg
                    }, this.props.icon && i.createElement(l.Icon, {
                        className: a(c.icon, this.props.children && c.withText),
                        icon: this.props.icon
                    }), this.props.children))
                }
            }
            var u = n(575296),
                h = n(898930),
                m = n(634993),
                v = n(28983),
                p = n(321475),
                g = n(1574),
                S = n(102117),
                b = n(634822);
            const f = e => {
                const t = e < 0 ? "-" : "";
                e = Math.abs(e);
                let n = Math.floor(e / 60),
                    i = e - 60 * n;
                return n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + n + ":" + i
            };
            var y = n(378025),
                w = n(106654),
                _ = n(997357),
                C = n(530648),
                E = n(876908),
                k = n(223953),
                T = n(541357),
                x = n(979436),
                M = n(874650),
                I = n(74428),
                N = n(664596),
                A = n(754442);
            const z = Boolean(window.initData.is_banned_from_ideas),
                P = {
                    publish: {
                        title: r.t(null, void 0, n(623951)),
                        description: r.t(null, void 0, n(899100))
                    },
                    record: {
                        title: r.t(null, void 0, n(639121)),
                        description: r.t(null, void 0, n(955624))
                    },
                    stream: {
                        title: r.t(null, void 0, n(94715)),
                        description: r.t(null, void 0, n(584456)),
                        isNew: !0
                    },
                    "publish-mind": {
                        title: r.t(null, void 0, n(379088)),
                        description: r.t(null, void 0, n(492052)),
                        isNew: !0
                    }
                };

            function R(e) {
                const {
                    id: t,
                    className: l
                } = e, {
                    state: c,
                    timer: R,
                    muted: L,
                    camActive: B,
                    cameraStream: D,
                    simplePublishInProgress: H,
                    handlePublish: W,
                    startRecording: F,
                    toggleMuted: O,
                    toggleCam: U,
                    togglePause: V,
                    createStream: G
                } = (0, o.ensureNotNull)((0, i.useContext)(b.PublishButtonContext)), [q, $] = (0, i.useState)(!1), K = ie(), X = "idle" === c ? r.t(null, void 0, n(792914)) : r.t(null, void 0, n(726892)), j = "idle" === c, Z = ["recording", "preparing", "pause"].includes(c), Q = (0, p.isMindsFeatureEnabledWithBackend)(), Y = !["info", "connecting"].includes(c), J = ["idle", "preview", "create-stream"].includes(c), ee = H || "idle" !== c;
                return i.createElement("div", {
                    id: t,
                    className: a(l, A.container, "idle" !== c && "create-stream" !== c && A.fixedWidth)
                }, i.createElement(u.ToolWidgetMenu, {
                    className: A.menuWrap,
                    arrow: !1,
                    content: i.createElement(d, {
                        className: a("publish-chart-button", A.button, A.fillButton, function() {
                            switch (c) {
                                case "recording":
                                case "pause":
                                    return A.recordingBtn;
                                case "connecting":
                                case "info":
                                case "processing":
                                    return A.connectingBtn;
                                case "preparing":
                                    return A.preparingBtn;
                                default:
                                    return A.publishBtn
                            }
                        }()),
                        variant: J || H ? "round" : "square",
                        intent: function() {
                            switch (c) {
                                case "recording":
                                case "pause":
                                    return "red";
                                case "connecting":
                                case "info":
                                case "processing":
                                    return "lightBlue";
                                default:
                                    return H ? "orange" : "blue"
                            }
                        }(),
                        tooltip: X,
                        icon: "recording" !== c && "pause" !== c || K ? void 0 : y,
                        isInteractive: Y,
                        isActive: q,
                        onClick: function() {
                            ee && W();
                            ae()
                        }
                    }, function() {
                        if (H) return r.t(null, void 0, n(227242));
                        switch (c) {
                            case "info":
                            case "connecting":
                                return r.t(null, void 0, n(220017));
                            case "preparing":
                                return i.createElement("div", {
                                    className: A.animate
                                }, -1 === R ? "Go" : -1 * R - 1);
                            case "recording":
                                return ie() ? i.createElement("div", {
                                    className: A.animate
                                }, S.MAX_VIDEO_LENGTH - R + "") : f(R);
                            case "processing":
                                return r.t(null, void 0, n(840356));
                            case "pause":
                                return f(R);
                            default:
                                return r.t(null, void 0, n(737523))
                        }
                    }()),
                    horizontalAttachEdge: (0, s.isRtl)() ? void 0 : h.HorizontalAttachEdge.Right,
                    horizontalDropDirection: (0, s.isRtl)() ? void 0 : h.HorizontalDropDirection.FromRightToLeft,
                    isDisabled: ee,
                    onClose: () => $(!1),
                    onOpen: () => $(!0)
                }, i.createElement(m.PopupMenuItem, {
                    "data-name": "publish",
                    className: A.menuItem,
                    label: ne("publish"),
                    icon: w,
                    onClick: W
                }), j && i.createElement(m.PopupMenuItem, {
                    "data-name": "record",
                    className: A.menuItem,
                    label: ne("record"),
                    icon: T,
                    onClick: function(e, t) {
                        F(t)
                    }
                }), Boolean(null === (te = window.user.permissions) || void 0 === te ? void 0 : te.can_create_streams) && !Z && i.createElement(m.PopupMenuItem, {
                    "data-name": "stream",
                    className: A.menuItem,
                    label: ne("stream"),
                    icon: M,
                    onClick: G,
                    isDisabled: z
                }), Q && i.createElement(m.PopupMenuItem, {
                    "data-name": "publish-mind",
                    className: A.menuItem,
                    label: ne("publish-mind"),
                    icon: C,
                    onClick: function() {
                        var e;
                        const t = null === (e = window.widgetbar) || void 0 === e ? void 0 : e.setPage("minds"),
                            n = null == t ? void 0 : t.widget("minds"),
                            i = null == n ? void 0 : n.widgetObject;
                        i ? i.openMindForm() : null == n || n.widgetStarted().subscribe(null, (e => {
                            var t;
                            return null === (t = e.widgetObject) || void 0 === t ? void 0 : t.openMindForm()
                        }), !0)
                    }
                })), i.createElement(d, {
                    className: a("publish-chart-button", A.button, A.tabletButton),
                    intent: H ? "orange" : "blue",
                    tooltip: X,
                    variant: "round",
                    icon: _,
                    onClick: function() {
                        W(), ae()
                    }
                }), Z && i.createElement(d, {
                    isToggleable: !0,
                    className: A.toggleableBtn,
                    isActive: "pause" === c,
                    tooltip: "pause" === c ? r.t(null, void 0, n(424838)) : r.t(null, void 0, n(106673)),
                    icon: "pause" === c ? N : I,
                    onClick: V
                }), Z && i.createElement(d, {
                    isToggleable: !0,
                    className: A.toggleableBtn,
                    isActive: !L,
                    tooltip: r.t(null, void 0, n(683144)),
                    icon: L ? E : k,
                    onClick: O
                }), Z && i.createElement(d, {
                    isToggleable: !0,
                    className: A.toggleableBtn,
                    isActive: B,
                    tooltip: r.t(null, void 0, n(734940)),
                    icon: B || D ? T : x,
                    onClick: U
                }));
                var te;

                function ne(e) {
                    const t = P[e];
                    return i.createElement("div", {
                        className: A.layoutItem
                    }, i.createElement("div", {
                        className: A.title
                    }, i.createElement("span", null, t.title), t.isNew && i.createElement(v.BadgeIndicator, {
                        type: "new",
                        className: A.badge
                    })), i.createElement("div", {
                        className: A.description
                    }, t.description))
                }

                function ie() {
                    return S.MAX_VIDEO_LENGTH - R < S.WARNING_TIME
                }

                function ae() {
                    (0,
                        g.trackButtonClick)("top toolbar", "publish")
                }
            }
            class L extends i.PureComponent {
                render() {
                    const {
                        id: e,
                        className: t
                    } = this.props;
                    return i.createElement(R, {
                        id: e,
                        className: t
                    })
                }
            }
        },
        493317: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetReplay: () => v
            });
            var i = n(777754),
                a = n(50959),
                o = n(719036),
                r = n(345848),
                s = n(571821),
                l = n(231656),
                c = n(1574),
                d = n(105281),
                u = n(704760);
            const h = {
                    text: i.t(null, void 0, n(254670)),
                    hint: i.t(null, void 0, n(976837))
                },
                m = (0, l.registryContextType)();
            class v extends a.PureComponent {
                constructor(e, t) {
                    super(e, t), this._replayUIController = null, this._handleClick = () => {
                        if ((0, c.trackButtonClick)("top toolbar", "bar replay"), !this._replayUIController) return (0, r.trackEvent)("Replay", "Open replay"), (0, d.trackReplaySnowplowEvent)("open_replay"), void this._loadUIController();
                        this._replayUIController.isReplayModeEnabled().value() ? (this._replayUIController.requestCloseReplay(), (0, r.trackEvent)("Replay", "Close replay from header button"), (0, d.trackReplaySnowplowEvent)("close_replay_from_header_button")) : (this._replayUIController.enableReplayMode(), (0, r.trackEvent)("Replay", "Open replay"), (0, d.trackReplaySnowplowEvent)("open_replay"))
                    }, (0, l.validateRegistry)(t, {
                        chartApiInstance: o.any.isRequired,
                        chartWidgetCollection: o.any.isRequired
                    }), this.state = {
                        isActive: !1
                    }
                }
                componentWillUnmount() {
                    null !== this._replayUIController && (this._replayUIController.onPropertiesChanged().unsubscribeAll(this), this._replayUIController.destroy(), this._replayUIController = null)
                }
                render() {
                    const {
                        isActive: e
                    } = this.state;
                    return a.createElement(s.ToolWidgetCollapsibleButton, { ...this.props,
                        icon: u,
                        text: h.text,
                        title: h.hint,
                        isActive: e,
                        onClick: this._handleClick
                    })
                }
                _loadUIController() {
                    const {
                        chartWidgetCollection: e,
                        chartApiInstance: t
                    } = this.context;
                    Promise.all([n.e(92250), n.e(88230), n.e(18619), n.e(7624), n.e(59333), n.e(12275), n.e(33335), n.e(83772), n.e(33287), n.e(6092), n.e(54819), n.e(68825), n.e(105), n.e(28385), n.e(43768), n.e(6086), n.e(93588), n.e(64228), n.e(35022), n.e(75514), n.e(47488), n.e(59255), n.e(42353), n.e(14108), n.e(1972), n.e(90897), n.e(87839), n.e(6932)]).then(n.bind(n, 812137)).then((({
                        ReplayUIController: n
                    }) => {
                        null === this._replayUIController && (this._replayUIController = new n(e, t), this._replayUIController.enableReplayMode(), this._replayUIController.onPropertiesChanged().subscribe(this, this._updateButtonState), this._updateButtonState())
                    }))
                }
                _updateButtonState() {
                    const e = this._replayUIController && this._replayUIController.isReplayModeEnabled().value();
                    this.setState({
                        isActive: Boolean(e)
                    })
                }
            }
            v.contextType = m
        },
        474018: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetSymbolSearchButton: () => M
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(777754),
                s = n(583912),
                l = n(345848),
                c = n(1574),
                d = n(470316),
                u = n(778785),
                h = n(793993),
                m = n(995683),
                v = n(495046),
                p = n(547e3),
                g = n(983731),
                S = n(61570),
                b = n(290382),
                f = n(889267),
                y = n(296652),
                w = n(894729),
                _ = n(795394),
                C = n(758893),
                E = n(110431);
            const k = (0, m.mergeThemes)(g.DEFAULT_TOOL_WIDGET_BUTTON_THEME, C),
                T = (0, m.mergeThemes)(k, E),
                x = !v.enabled("widget");
            class M extends i.PureComponent {
                constructor(e) {
                    super(e), this._openSymbolSearchDialog = async e => {
                        if ((0, d.modifiersFromEvent)(e) !== d.Modifiers.Alt) try {
                            (0,
                                l.trackEvent)("GUI", "SS", "main search"), (0, c.trackButtonClick)("top toolbar", "symbol search"), await (new b.SymbolSearchUI).show({
                                defaultValue: this._isSpread(this.state.symbol) ? this.state.symbol : this.state.shortName,
                                showSpreadActions: (0, p.canShowSpreadActions)() && this.props.isActionsVisible,
                                source: "searchBar",
                                footer: u.mobiletouch ? void 0 : i.createElement(S.SymbolSearchDialogFooter, null, r.t(null, void 0, n(520987)))
                            })
                        } catch (e) {} else(0, h.getClipboard)().writeText(this.state.symbol)
                    }, this._isSpread = e => {
                        const t = (0, f.tokenize)(e);
                        return (0, y.isSpread)(t)
                    }, this._onSymbolChanged = () => {
                        const e = s.linking.symbol.value();
                        e === this.state.symbol ? this.setState({
                            symbol: e,
                            shortName: I()
                        }) : this._updateQuotes(e)
                    }, this.state = {
                        symbol: s.linking.symbol.value(),
                        shortName: I()
                    }
                }
                componentDidMount() {
                    s.linking.symbol.subscribe(this._onSymbolChanged), s.linking.seriesShortSymbol.subscribe(this._onSymbolChanged), b.SymbolSearchUI.preload(), this._updateQuotes(s.linking.symbol.value())
                }
                componentWillUnmount() {
                    s.linking.symbol.unsubscribe(this._onSymbolChanged), s.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged)
                }
                render() {
                    const {
                        id: e,
                        className: t
                    } = this.props;
                    return i.createElement(g.ToolWidgetButton, {
                        id: e,
                        className: o()(t, v.enabled("uppercase_instrument_names") && C.uppercase, !1),
                        theme: x ? T : k,
                        icon: x ? i.createElement(w.SymbolLogo, {
                            size: "xxsmall",
                            className: E.logo,
                            logoId: this.state.logoId,
                            currencyLogoId: this.state.currencyLogoId,
                            baseCurrencyLogoId: this.state.baseCurrencyLogoId,
                            placeholder: this.state.shortName[0]
                        }) : void 0,
                        text: this.state.shortName,
                        title: r.t(null, void 0, n(882719)),
                        onClick: this._openSymbolSearchDialog
                    })
                }
                async _updateQuotes(e) {
                    if (!e) return;
                    const t = await (0, _.snapshoter)().getSnapshot(e, new Set(["logoid", "currency-logoid", "base-currency-logoid", "short_name"]));
                    if (e === s.linking.symbol.value() && ("error" === t.status || t.values.short_name !== this.state.shortName || t.values.logoid !== this.state.logoId || t.values["base-currency-logoid"] !== this.state.baseCurrencyLogoId || t.values["currency-logoid"] !== this.state.currencyLogoId))
                        if ("error" === t.status) this.setState({
                            symbol: e,
                            shortName: I(),
                            logoId: void 0,
                            baseCurrencyLogoId: void 0,
                            currencyLogoId: void 0
                        });
                        else {
                            const {
                                values: n
                            } = t;
                            this.setState({
                                symbol: e,
                                shortName: n.short_name || I(),
                                logoId: n.logoid,
                                baseCurrencyLogoId: n["base-currency-logoid"],
                                currencyLogoId: n["currency-logoid"]
                            })
                        }
                }
            }

            function I() {
                return s.linking.seriesShortSymbol.value() || s.linking.symbol.value() || ""
            }
        },
        357043: (e, t, n) => {
            "use strict";
            n.d(t, {
                ViewStateContext: () => i
            });
            const i = n(50959).createContext(null)
        },
        325445: (e, t, n) => {
            "use strict";
            n.d(t, {
                TemplatesMenuView: () => D
            });
            var i = n(50959),
                a = n(497754),
                o = n.n(a),
                r = n(777754),
                s = n(852668),
                l = n(636268),
                c = n(634993),
                d = n(962624),
                u = n(995683),
                h = n(379997),
                m = n(648813);

            function v(e) {
                return i.createElement("div", {
                    className: a(m.description, e.className)
                }, e.children)
            }
            var p = n(778785),
                g = n(523978);
            const S = (0, u.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    labelRow: g.labelRow,
                    toolbox: g.toolbox,
                    item: g.titleItem
                }),
                b = (0, u.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    labelRow: g.labelRow,
                    toolbox: g.toolbox,
                    item: g.titleItemTabletSmall
                }),
                f = (0,
                    u.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    item: g.item
                }),
                y = (0, u.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, {
                    item: g.itemTabletSmall
                });

            function w(e) {
                const {
                    item: t,
                    onApply: n,
                    onRemove: a,
                    onFavor: r,
                    favorite: u,
                    isFavoritingAllowed: m,
                    isTabletSmall: w
                } = e, [_, C] = (0, d.useHover)(), E = t.meta_info, k = E ? (0, h.descriptionString)(E.indicators) : void 0, T = w ? b : S, x = w ? y : f, M = (0, i.useCallback)((() => n(t)), [n, t]), I = (0, i.useCallback)((() => a(t)), [a, t]), N = (0, i.useCallback)((() => {
                    r && r(t)
                }), [r, t]);
                return i.createElement("div", { ...C,
                    className: g.wrap,
                    "data-name": t.name,
                    "data-id": t.id,
                    "data-is-default": Boolean(t.is_default)
                }, i.createElement(c.PopupMenuItem, {
                    theme: T,
                    label: t.name,
                    labelRowClassName: o()(w && g.itemLabelTabletSmall),
                    isHovered: _,
                    showToolboxOnHover: !u && !_,
                    onClick: M,
                    toolbox: i.createElement(i.Fragment, null, !t.is_default && i.createElement(l.RemoveButton, {
                        key: "remove",
                        hidden: !p.touch && !_,
                        onClick: I
                    }), Boolean(r) && m && i.createElement(s.FavoriteButton, {
                        key: "favorite",
                        isFilled: Boolean(u),
                        onClick: N
                    }))
                }), k && i.createElement(c.PopupMenuItem, {
                    theme: x,
                    label: i.createElement(v, {
                        className: o()(g.description, w && g.descriptionTabletSmall)
                    }, k),
                    onClick: M,
                    isHovered: _
                }))
            }
            var _ = n(83436),
                C = n(868151),
                E = n(53707),
                k = n(550444);
            const T = (0, u.mergeThemes)(c.DEFAULT_POPUP_MENU_ITEM_THEME, k),
                x = {
                    text: (0, C.appendEllipsis)(r.t(null, void 0, n(92093)))
                };

            function M(e) {
                const {
                    onClick: t,
                    isTabletSmall: n
                } = e;
                return i.createElement(c.PopupMenuItem, {
                    theme: T,
                    className: k.wrap,
                    label: i.createElement("div", {
                        className: k.titleWrap
                    }, i.createElement("div", {
                        className: o()(k.title, n && k.titleTabletSmall)
                    }, i.createElement(_.Icon, {
                        className: k.icon,
                        icon: E
                    }), i.createElement("div", {
                        className: k.text
                    }, x.text))),
                    onClick: t
                })
            }
            var I = n(821255),
                N = n(928089),
                A = n(390704),
                z = n(93916),
                P = n(56537),
                R = n(377318),
                L = n(357043),
                B = n(719366);

            function D(e) {
                const {
                    templates: t,
                    favorites: n,
                    onTemplateSave: a,
                    onTemplateRemove: r,
                    onTemplateSelect: s,
                    onTemplateFavorite: l,
                    isTabletSmall: c,
                    isLoading: d
                } = e, u = (0, i.useMemo)((() => t.filter((e => e.is_default))), [t]), h = (0, i.useMemo)((() => t.filter((e => !e.is_default))), [t]), m = (0, i.useMemo)((() => new Set(n.map((e => e.name)))), [n]), v = (0, i.useContext)(L.ViewStateContext), p = (0, i.useContext)(R.MenuContext), g = (0, P.useForceUpdate)();
                (0, i.useEffect)((() => {
                    if (null !== v) {
                        const e = {};
                        return v.getOnChange().subscribe(e, (() => {
                            g(), p && p.update()
                        })), () => v.getOnChange().unsubscribeAll(e)
                    }
                    return () => {}
                }), []);
                const S = e => i.createElement(w, {
                    key: e.name,
                    item: e,
                    isFavoritingAllowed: Boolean(l),
                    favorite: m.has(e.name),
                    onApply: s,
                    onFavor: l,
                    onRemove: r,
                    isTabletSmall: c
                });
                return i.createElement("div", {
                    className: o()(B.menu, c && B.menuSmallTablet)
                }, i.createElement(M, {
                    onClick: a,
                    isTabletSmall: c
                }), d && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(I.ToolWidgetMenuSpinner, null)), !d && (c ? i.createElement(H, {
                    defaults: u,
                    customs: h,
                    render: S
                }) : i.createElement(W, {
                    defaults: u,
                    customs: h,
                    render: S,
                    state: v
                })))
            }

            function H(e) {
                const {
                    defaults: t,
                    customs: a,
                    render: o
                } = e;
                return i.createElement(i.Fragment, null, a.length > 0 && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(N.ToolWidgetMenuSummary, {
                    className: B.menuItemHeaderTabletSmall
                }, r.t(null, void 0, n(438554))), a.map(o)), t.length > 0 && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(N.ToolWidgetMenuSummary, {
                    className: B.menuItemHeaderTabletSmall
                }, r.t(null, void 0, n(943399))), t.map(o)))
            }

            function W(e) {
                const {
                    defaults: t,
                    customs: a,
                    render: o,
                    state: s
                } = e;
                return i.createElement(i.Fragment, null, a.length > 0 && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(N.ToolWidgetMenuSummary, {
                    className: B.menuItemHeader
                }, r.t(null, void 0, n(438554))), a.map(o)), a.length > 0 && t.length > 0 && s && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(A.CollapsibleSection, {
                    summary: r.t(null, void 0, n(943399)),
                    open: !s.get().defaultsCollapsed,
                    onStateChange: e => s.set({
                        defaultsCollapsed: !e
                    })
                }, t.map(o))), 0 === a.length && t.length > 0 && i.createElement(i.Fragment, null, i.createElement(z.PopupMenuSeparator, null), i.createElement(N.ToolWidgetMenuSummary, {
                    className: B.menuItemHeader
                }, r.t(null, void 0, n(943399))), t.map(o)))
            }
        },
        58232: (e, t, n) => {
            "use strict";
            n.d(t, {
                ToolWidgetTemplatesModel: () => r
            });
            var i = n(495046),
                a = n(988411),
                o = n.n(a);
            class r {
                constructor(e, t) {
                    var n, a;
                    this._isFavoriteEnabled = i.enabled("items_favoriting"), this.handleFavorTemplate = e => {
                        if (!this._isFavoriteEnabled) return;
                        const {
                            name: t
                        } = e;
                        this._isTemplateFavorite(t) ? this._removeFavoriteTemplate(t) : this._addFavoriteTemplate(t)
                    }, this.handleDropdownOpen = () => {
                        this._setState({
                            isLoading: !0
                        }), this._studyTemplates.invalidate(), this._studyTemplates.refreshStudyTemplateList((() => this._setState({
                            isLoading: !1
                        })))
                    }, this.handleApplyTemplate = e => {
                        this._studyTemplates.applyTemplate(e.name)
                    }, this.handleRemoveTemplate = e => {
                        this._studyTemplates.deleteStudyTemplate(e.name)
                    }, this.handleSaveTemplate = () => {
                        this._studyTemplates.showSaveAsDialog()
                    }, this._studyTemplates = e, this._favoriteStudyTemplatesService = t;
                    const r = (null === (n = this._favoriteStudyTemplatesService) || void 0 === n ? void 0 : n.get()) || [],
                        s = this._studyTemplates.list();
                    this._state = new(o())({
                        isLoading: !1,
                        studyTemplatesList: s,
                        favorites: r
                    }), this._studyTemplates.getOnChange().subscribe(this, this._handleTemplatesChange), this._studyTemplates.refreshStudyTemplateList(), this._isFavoriteEnabled && (null === (a = this._favoriteStudyTemplatesService) || void 0 === a || a.getOnChange().subscribe(this, this._handleFavoritesChange))
                }
                destroy() {
                    var e;
                    this._studyTemplates.getOnChange().unsubscribe(this, this._handleTemplatesChange), this._isFavoriteEnabled && (null === (e = this._favoriteStudyTemplatesService) || void 0 === e || e.getOnChange().unsubscribe(this, this._handleFavoritesChange))
                }
                state() {
                    return this._state.readonly()
                }
                _setState(e) {
                    this._state.setValue({ ...this._state.value(),
                        ...e
                    })
                }
                _handleTemplatesChange() {
                    this._setState({
                        studyTemplatesList: this._studyTemplates.list()
                    })
                }
                _handleFavoritesChange(e) {
                    this._isFavoriteEnabled && this._setState({
                        favorites: e
                    })
                }
                _removeFavoriteTemplate(e) {
                    var t;
                    const {
                        favorites: n
                    } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set(n.filter((t => t !== e)))
                }
                _addFavoriteTemplate(e) {
                    var t;
                    const {
                        favorites: n
                    } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set([...n, e])
                }
                _isTemplateFavorite(e) {
                    const {
                        favorites: t
                    } = this._state.value();
                    return t.includes(e)
                }
            }
        },
        379997: (e, t, n) => {
            "use strict";
            n.d(t, {
                createStudyTemplateMetaInfo: () => o,
                descriptionString: () => r
            });
            var i = n(445706),
                a = n(562726);

            function o(e, t) {
                return {
                    indicators: e.orderedDataSources(!0).filter((e => (0, a.isStudy)(e) && !(0, i.isLollipopDataSource)(e))).map((e => ({
                        id: e.metaInfo().id,
                        description: e.title(!0, void 0, !0)
                    }))),
                    interval: t
                }
            }

            function r(e) {
                const t = new Map;
                return e.forEach((e => {
                    const [n, i] = t.get(e.id) || [e.description, 0];
                    t.set(e.id, [n, i + 1])
                })), Array.from(t.values()).map((([e, t]) => `${e}${t>1?` x ${t}`:""}`)).join(", ")
            }
        },
        231656: (e, t, n) => {
            "use strict";
            n.d(t, {
                validateRegistry: () => s,
                RegistryProvider: () => l,
                useRegistry: () => c,
                registryContextType: () => d
            });
            var i = n(50959),
                a = n(719036),
                o = n.n(a);
            const r = i.createContext({});

            function s(e, t) {
                o().checkPropTypes(t, e, "context", "RegistryContext")
            }

            function l(e) {
                const {
                    validation: t,
                    value: n
                } = e;
                return s(n, t), i.createElement(r.Provider, {
                    value: n
                }, e.children)
            }

            function c(e) {
                const t = (0, i.useContext)(r);
                return s(t, e), t
            }

            function d() {
                return r
            }
        },
        105281: (e, t, n) => {
            "use strict";
            n.d(t, {
                trackReplaySnowplowEvent: () => a
            });
            var i = n(776734);

            function a(e, t) {
                (0, i.getTracker)().then((n => null == n ? void 0 : n.trackBarReplayAnalytics(e, t)))
            }
        },
        133290: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                SERIES_ICONS: () => S
            });
            var i = n(149387),
                a = n(893316),
                o = n(173149),
                r = n(943031),
                s = n(647323),
                l = n(94670),
                c = n(539956),
                d = n(14083),
                u = n(45504),
                h = n(352867),
                m = n(241473),
                v = n(724464),
                p = n(671705),
                g = n(309450);
            const S = {
                3: l,
                0: c,
                1: d,
                8: u,
                9: h,
                2: m,
                10: v,
                12: p,
                13: g
            };
            S[4] = i, S[6] = a, S[7] = o, S[5] = r, S[11] = s
        },
        238066: (e, t, n) => {
            "use strict";
            n.d(t, {
                convertImageNameToUrl: () => o
            });
            var i = n(495046),
                a = n(66974);

            function o(e) {
                return i.enabled("charting_library_base") || (0, a.isProd)() ? "https://www.tradingview.com/x/" + e + "/" : window.location.protocol + "//" + window.location.host + "/x/" + e + "/"
            }
        },
        685392: (e, t, n) => {
            "use strict";
            n.d(t, {
                debounceHideTooltip: () => s,
                showTooltip: () => d
            });
            var i = n(12481),
                a = n(309103),
                o = n(183358),
                r = n(777754);
            const s = (0, i.default)(l, 1500);

            function l() {
                document.removeEventListener("scroll", l), document.removeEventListener("touchstart", l), document.removeEventListener("mouseout", l), (0, a.hide)()
            }
            const c = 400;

            function d(e, t = {}) {
                const {
                    initialDelay: i = c,
                    leaveOnMouseOut: s,
                    text: d = r.t(null, void 0, n(679732))
                } = t;
                (0, a.showOnElement)(e, {
                    below: !0,
                    tooltipDelay: i,
                    content: {
                        type: "html",
                        data: `${d} <span style="vertical-align: middle;">${o}</span>`
                    }
                }), document.addEventListener("scroll", l), document.addEventListener("touchstart", l), s || document.addEventListener("mouseout", l)
            }
        },
        19299: (e, t, n) => {
            "use strict";
            n.d(t, {
                CreateStreamDialog: () => l,
                useStreamCreator: () => r.useStreamCreator
            });
            var i = n(50959),
                a = n(640027),
                o = n(903535),
                r = n(784413);
            const s = i.lazy((async () => {
                    const {
                        CreateStreamDialogHandled: e
                    } = await Promise.all([n.e(4326), n.e(81037), n.e(88230), n.e(86256), n.e(59333), n.e(12275), n.e(33335), n.e(91901), n.e(83772), n.e(71140), n.e(85761), n.e(33287), n.e(64884), n.e(63737), n.e(37908), n.e(20187), n.e(13249), n.e(96246), n.e(51907), n.e(62040), n.e(83186), n.e(24091), n.e(47523), n.e(84704), n.e(12768), n.e(53484), n.e(16762), n.e(23084), n.e(77642), n.e(70216), n.e(60880), n.e(78706), n.e(92559), n.e(68985), n.e(21691), n.e(77450), n.e(43292)]).then(n.bind(n, 495971));
                    return {
                        default: e
                    }
                })),
                l = i.memo((e => {
                    const t = (0, a.useIsMounted)();
                    return ((0, o.useIsOpenedOnes)(e.isOpened) || e.isOpened) && t ? i.createElement(i.Suspense, {
                        fallback: null
                    }, i.createElement(s, { ...e
                    })) : null
                }))
        },
        784413: (e, t, n) => {
            "use strict";
            n.d(t, {
                useStreamCreator: () => o
            });
            var i = n(50959),
                a = n(827016);
            const o = () => {
                const [e, t] = (0, i.useState)(null);
                return (0, i.useEffect)((() => {
                    t(new a.StreamCreator)
                }), []), e
            }
        },
        821841: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                WarningPopup: () => C,
                renderWarningPopup: () => E
            });
            var i = n(50959),
                a = n(500962),
                o = n(777754),
                r = n(777491),
                s = n(829725),
                l = n(919346),
                c = n(631078),
                d = n(909740),
                u = n(514283),
                h = n(497754),
                m = n(207678),
                v = n(18182),
                p = n(364489),
                g = n(621640),
                S = n(500745),
                b = n(154266);

            function f(e) {
                const {
                    children: t,
                    width: n,
                    autofocus: a,
                    closeOnEsc: o,
                    isOpened: r = !0,
                    handleEsc: s
                } = e, l = i.createElement(i.Fragment, null, i.createElement(p.KeyboardDocumentListener, {
                    keyCode: 27,
                    handler: function(t) {
                        if (t.stopPropagation(), o && e.onClose) return void e.onClose();
                        s && s()
                    }
                }), t);
                return i.createElement(v.MatchMedia, {
                    rule: `screen and (max-width: ${m.breakpoints.phone}px)`
                }, (t => t ? i.createElement(S.PopupDialog, {
                    isOpened: r,
                    fullscreen: !0,
                    className: h(b.dialog, b.radius),
                    "data-dialog-name": e["data-dialog-name"],
                    autofocus: a
                }, l) : i.createElement(g.Modal, {
                    className: b.dialog,
                    width: n,
                    isOpened: r,
                    "data-dialog-name": e["data-dialog-name"],
                    autofocus: a
                }, l)))
            }
            var y = n(83436),
                w = n(182120),
                _ = n(540975);

            function C(e) {
                const {
                    isOpened: t,
                    isNeededCheckbox: a = !0,
                    isNeededOkButton: r = !0,
                    isNeedCancelButton: s = !0,
                    checkedCheckbox: h = !1,
                    valueCheckbox: m,
                    dataDialogName: v,
                    closeOnEsc: p = !0,
                    continueOnEsc: g,
                    toggleCheckbox: S,
                    handleEsc: C
                } = e, [E, k] = (0, i.useState)(h), {
                    title: T,
                    content: x,
                    textButton: M,
                    textCancelButton: I,
                    icon: N
                } = e.content, {
                    maxWidth: A
                } = e, z = (0, c.useWatchedValueReadonly)({
                    watchedValue: d.watchedTheme
                }) || l.StdTheme.Light;
                return (0, u.useFixedBody)(), i.createElement(f, {
                    width: A || 480,
                    "data-dialog-name": v,
                    closeOnEsc: p,
                    autofocus: !0,
                    onClose: e.onClose,
                    isOpened: t,
                    handleEsc: function() {
                        C && C();
                        g && P(!0)
                    }
                }, i.createElement("div", {
                    className: b.container
                }, i.createElement("div", {
                    className: b.header
                }, i.createElement(y.Icon, {
                    icon: N[z],
                    className: b.icon
                }), i.createElement("h2", {
                    className: b.title
                }, T)), i.createElement("div", {
                    className: b.content
                }, x), a && i.createElement(w.Checkbox, {
                    className: b.checkbox,
                    label: i.createElement("span", {
                        className: b.text
                    }, o.t(null, void 0, n(913898))),
                    onChange: function(e) {
                        k(!E), S && S(e)
                    },
                    checked: E,
                    value: m || void 0
                }), i.createElement("div", {
                    className: b.buttons
                }, s && i.createElement(_.Button, {
                    onClick: e.onClose,
                    className: b.button,
                    intent: "default",
                    appearance: "stroke"
                }, I || o.t(null, void 0, n(620036))), r && i.createElement(_.Button, {
                    onClick: () => P(E),
                    className: b.button
                }, M))));

                function P(t) {
                    e.onOk && e.onOk(t)
                }
            }
            async function E(e) {
                return new Promise(((t, n) => {
                    const o = (0, r.guid)(),
                        l = (0, s.getRootOverlapManager)(),
                        c = l.ensureWindow(o);
                    a.render(i.createElement(C, { ...e,
                        onClose: () => {
                            e.onClose && e.onClose(), a.unmountComponentAtNode(c), l.removeWindow(o), n()
                        },
                        onOk: n => {
                            e.onOk && e.onOk(n), a.unmountComponentAtNode(c), l.removeWindow(o), t(n)
                        }
                    }), c)
                }))
            }
        },
        748826: (e, t, n) => {
            "use strict";
            n.d(t, {
                FavoriteFundamentals: () => c
            });
            var i = n(62802),
                a = n(226722),
                o = n(869403),
                r = n.n(o);
            const s = "fundamentals.favorites";
            let l = null;
            class c {
                constructor() {
                    this._favorites = [], this._favoritesChanged = new(r()), a.TVXWindowEvents.on("FundFavoritesChanged", (e => {
                        const t = JSON.parse(e);
                        this._loadFromState(t || [])
                    })), i.onSync.subscribe(this, this._loadFavs), this._loadFavs()
                }
                isFav(e) {
                    return -1 !== this._findFavIndex(e)
                }
                toggleFavorite(e) {
                    this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e)
                }
                toggleFavoriteArray(e) {
                    const t = e.some((e => this.isFav(e)));
                    e.forEach((e => {
                        if (t) {
                            const t = this._findFavIndex(e); - 1 !== t && this._favorites.splice(t, 1)
                        } else this._favorites.push(e)
                    })), this._favoritesChanged.fire(), this._saveFavs()
                }
                addFavorite(e) {
                    this._favorites.push(e), this._favoritesChanged.fire(), this._saveFavs()
                }
                removeFavorite(e) {
                    const t = this._findFavIndex(e); - 1 !== t && (this._favorites.splice(t, 1), this._favoritesChanged.fire()), this._saveFavs()
                }
                favorites() {
                    return this._favorites
                }
                favoritesChanged() {
                    return this._favoritesChanged
                }
                static getInstance() {
                    return null === l && (l = new c), l
                }
                _loadFavs() {
                    const e = i.getJSON(s, []);
                    this._loadFromState(e)
                }
                _saveFavs() {
                    i.setJSON(s, this._favorites, {
                        forceFlush: !0
                    }), a.TVXWindowEvents.emit("FundFavoritesChanged", JSON.stringify(this._favorites))
                }
                _loadFromState(e) {
                    this._favorites = e, this._favoritesChanged.fire()
                }
                _findFavIndex(e) {
                    return this._favorites.indexOf(e)
                }
            }
        },
        889500: (e, t, n) => {
            "use strict";
            n.d(t, {
                openNewChart: () => m
            });
            var i = n(890740),
                a = n(656130),
                o = n(552279),
                r = n(229534),
                s = n(503595),
                l = n(314802),
                c = n(777754);
            const d = c.t(null, void 0, n(873088)),
                u = c.t(null, void 0, n(589117)),
                h = c.t(null, void 0, n(552988));

            function m(e = {}) {
                window.is_authenticated ? (0, s.asyncWindowOpen)(async function(e) {
                    let t, n;
                    try {
                        n = await (0, i.fetch)("/charts/", {
                            method: "POST",
                            body: JSON.stringify(e),
                            credentials: "include"
                        });
                        const a = n.headers.get("location");
                        if (n.ok && a) return (0, l.urlWithMobileAppParams)(a);
                        t = (await n.json()).code
                    } catch (e) {}
                    "count_limit" === t || "login_required" === t ? (0, o.reloginOrGoPro)({
                        feature: "savedChartsLimit"
                    }) : n || !1 !== navigator.onLine ? n && n.status >= 500 || "feature_disabled" === t ? (0, r.showErrorDialog)({
                        content: u
                    }) : (0, r.showErrorDialog)({
                        content: d
                    }) : (0, r.showErrorDialog)({
                        content: h
                    });
                    return
                }(e)) : window.open((0, a.generateChartUrl)(e), "_blank")
            }
        },
        139583: (e, t, n) => {
            "use strict";

            function i(e, t) {
                const n = document.createElement("a");
                n.style.display = "none", n.href = t, n.download = e, n.click()
            }
            n.d(t, {
                downloadFile: () => i
            })
        },
        527941: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'
        },
        597268: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"/></svg>'
        },
        74428: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.5 24a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19zm0 1a10.5 10.5 0 1 0 0-21 10.5 10.5 0 0 0 0 21zM11 10h1v9h-1v-9zm5 0h-1v9h1v-9z"/></svg>'
        },
        664596: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M23 14.5a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0zm1 0a10.5 10.5 0 1 1-21 0 10.5 10.5 0 0 1 21 0zM11.3 9.6l-.8-.6v11l.8-.6 6-4.5.53-.4-.53-.4-6-4.5zm4.87 4.9L11.5 18v-7l4.67 3.5z"/></svg>'
        },
        899280: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>'
        },
        100578: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
        },
        979436: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M2.35 24.35l19-19-.7-.7-19 19 .7.7zM6.5 7h9.67l-1 1H6.5A1.5 1.5 0 0 0 5 9.5v8.67l-1 1V9.5A2.5 2.5 0 0 1 6.5 7zm10 14H7.83l-1 1h9.67a2.5 2.5 0 0 0 2.5-2.5v-1.69l3.55 1.77A1 1 0 0 0 24 18.7v-8.38a1 1 0 0 0-1.45-.9L19 11.2V9.83l-1 1v1.98l.72-.36L23 10.3v8.38l-4.28-2.14-.72-.36v3.31a1.5 1.5 0 0 1-1.5 1.5z"/></svg>'
        },
        541357: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 9.5A2.5 2.5 0 0 1 6.5 7h10A2.5 2.5 0 0 1 19 9.5v1.7l3.55-1.78a1 1 0 0 1 1.45.89v8.38a1 1 0 0 1-1.45.9L19 17.8v1.69a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 19.5v-10zM6.5 8A1.5 1.5 0 0 0 5 9.5v10A1.5 1.5 0 0 0 6.5 21h10a1.5 1.5 0 0 0 1.5-1.5v-3.3l5 2.5v-8.4l-5 2.5V9.5A1.5 1.5 0 0 0 16.5 8h-10z"/></svg>'
        },
        532787: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8.5 6a3.5 3.5 0 0 0-2.926 5.422 8.527 8.527 0 0 1 4.848-4.848A3.482 3.482 0 0 0 8.5 6zM4 9.5c0 1.19.463 2.274 1.218 3.079A8.5 8.5 0 0 0 13.5 23h.5v-1h-.5a7.5 7.5 0 1 1 7.5-7.5v.5h1v-.5a8.53 8.53 0 0 0-.218-1.921 4.5 4.5 0 0 0-6.36-6.36 8.527 8.527 0 0 0-3.843-.001A4.5 4.5 0 0 0 4 9.5zm12.578-2.926a8.527 8.527 0 0 1 4.848 4.848 3.5 3.5 0 0 0-4.848-4.848zM13 14V9h1v6h-4v-1h3zm6 6h-4v1h4v4h1v-4h4v-1h-4v-4h-1v4z"/></svg>'
        },
        94670: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>'
        },
        539956: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>'
        },
        724464: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>'
        },
        14083: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>'
        },
        647323: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path d="M10.5 9v12M7 18.5h3.5M14 9.5h-3.5M19.5 3v12M16 6.5h3.5M23 14.5h-3.5M18.5 19.5h2a1 1 0 1 0 0-2h-2V22v-2.5zM21.5 22L20 19.5"/></g></svg>'
        },
        53707: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>'
        },
        309450: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z"/></svg>'
        },
        301393: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>'
        },
        45504: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>'
        },
        671705: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>'
        },
        352867: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>'
        },
        563481: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l4.8-4.8a1 1 0 0 1 1.4 0l2.7 2.7a1 1 0 0 0 1.3.1L23 5"/><path fill="currentColor" fill-rule="evenodd" d="M19 12a1 1 0 0 0-1 1v4h-3v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4h17V13a1 1 0 0 0-1-1h-3zm0 10h3v-9h-3v9zm-1 0v-4h-3v4h3zm-4-4.5V22h-3v-6h3v1.5zM10 22v-3H7v3h3z"/></svg>'
        },
        139681: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>'
        },
        943031: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 5h3v12h5V8h3v13h1V7h-5v9h-3V4h-5v18H7v-5H6v6h5z"/></svg>'
        },
        241473: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>'
        },
        173149: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18 24h3V12h-3v12zm-1-13h5v14h-5V11zm-4-8v7h3V3h-3zm-1-1h5v9h-5V2zM8 19h3v-7H8v7zm-1-8h5v9H7v-9z"/></svg>'
        },
        282436: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>'
        },
        893316: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"/><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"/><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"/><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"/><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"/><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"/></svg>'
        },
        648449: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>'
        },
        796052: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>'
        },
        149387: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18 5v5h3V5h-3zm-1-1h5v7h-5V4zm-4 13h3v-5h-3v5zm-1-6h5v7h-5v-7zM8 24h3v-5H8v5zm-1-6h5v7H7v-7z"/></svg>'
        },
        704760: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="none" stroke="currentColor" d="M13.5 20V9l-6 5.5 6 5.5zM21.5 20V9l-6 5.5 6 5.5z"/></svg>'
        },
        272644: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>'
        },
        399812: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M8 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM6 8c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8zm11-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V8zm-4 8H8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H8zm9 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-2 1c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3z"/></svg>'
        },
        377665: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>'
        },
        333765: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
        },
        183358: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#clip0)"><path fill="#FFDB5E" d="M13.651 7.972c0-.168-.04-.325-.107-.468-.447-1.442-2.54-1.337-5.516-1.407-.498-.012-.213-.6-.038-1.89.113-.838-.428-2.127-1.337-2.127-1.5 0-.057 1.183-1.383 4.108-.708 1.562-2.291.687-2.291 2.257v3.573c0 .61.06 1.198.919 1.295.833.093.646.687 1.847.687h6.015a1.112 1.112 0 0 0 1.11-1.111c0-.254-.088-.486-.232-.673.34-.19.573-.55.573-.966a1.1 1.1 0 0 0-.232-.672c.341-.19.576-.55.576-.967 0-.303-.123-.578-.32-.779a1.105 1.105 0 0 0 .416-.86z"/><path fill="#EE9547" d="M9.673 9.083h2.867c.39 0 .757-.209.956-.544a.292.292 0 0 0-.502-.298.53.53 0 0 1-.454.259H9.604a.528.528 0 0 1 0-1.056h1.962a.292.292 0 0 0 0-.583H9.603a1.112 1.112 0 0 0-1.11 1.111c0 .342.158.644.4.848a1.107 1.107 0 0 0-.332.791c0 .343.16.646.404.85a1.105 1.105 0 0 0 .14 1.693 1.102 1.102 0 0 0 .042 1.52c.208.208.49.325.785.326h1.828a1.117 1.117 0 0 0 .956-.544.292.292 0 0 0-.502-.298.531.531 0 0 1-.454.258H9.932a.528.528 0 0 1 0-1.055H12.1a1.117 1.117 0 0 0 .956-.544.292.292 0 1 0-.501-.298.526.526 0 0 1-.454.259H9.745a.529.529 0 0 1 0-1.056h2.697a1.116 1.116 0 0 0 .956-.544.292.292 0 0 0-.501-.298.525.525 0 0 1-.455.259h-2.77a.529.529 0 0 1 0-1.056z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z" transform="translate(2 2)"/></clipPath></defs></svg>'
        },
        192867: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'
        },
        876908: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4.35 23.35l19-19-.7-.7-19 19 .7.7zM14 4a4 4 0 0 1 3.7 2.47l-.8.8A3 3 0 0 0 11 8v5.17l-1 1V8a4 4 0 0 1 4-4zm0 14c-.62 0-1.19-.19-1.67-.5l-.71.71A4 4 0 0 0 18 15v-3.17l-1 1V15a3 3 0 0 1-3 3zm-7-3c0 .66.1 1.3.26 1.9l-.8.8A7.99 7.99 0 0 1 6 15v-3h1v3zm2.48 5.35l-.7.7A8 8 0 0 0 22 15v-3h-1v3a7 7 0 0 1-11.52 5.35z"/></svg>'
        },
        223953: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M14 4a4 4 0 0 0-4 4v7a4 4 0 1 0 8 0V8a4 4 0 0 0-4-4zm-3 4a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V8zm-4 7v-3H6v3a8 8 0 0 0 16 0v-3h-1v3a7 7 0 1 1-14 0z"/></svg>'
        },
        530648: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13 12V9h1v3h3v1h-3v3h-1v-3h-3v-1h3Z"/><path fill="currentColor" d="M12.24 4a5.42 5.42 0 0 0-5.41 5.71 4.72 4.72 0 1 0 2.1 9.21 6.8 6.8 0 0 0 10.15 0 4.72 4.72 0 1 0 2.09-9.2v-.3a4.02 4.02 0 0 0-5.12-3.86A5.4 5.4 0 0 0 12.25 4ZM7.82 9.43a4.42 4.42 0 0 1 7.72-2.96l.23.26.32-.12a3.02 3.02 0 0 1 4.03 3.43l-.12.56.57.04a3.72 3.72 0 1 1-1.5 7.23l-.33-.1-.22.26a5.81 5.81 0 0 1-9.04 0l-.22-.27-.33.11A3.7 3.7 0 0 1 4 14.36c0-1.95 1.5-3.55 3.41-3.7l.53-.05-.07-.53a4.47 4.47 0 0 1-.05-.64ZM20.68 20.19a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm-.9 1.9a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0Z"/></svg>'
        },
        636296: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>'
        },
        808757: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 18V5.5m-4 4l4-4l4 4"/></svg>'
        },
        323595: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>'
        },
        133055: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>'
        },
        239146: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'
        },
        648010: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'
        },
        398120: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.9 14.1V22h1.2v-7.9H23v-1.2h-7.9V5h-1.2v7.9H6v1.2h7.9z"/></svg>'
        },
        997357: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3 7.63C3 4.52 5.69 2 9 2s6 2.52 6 5.63c0 1.82-.93 3.64-2.4 4.69v2.43c0 .4-.35.75-.8.75H11v.74c0 .42-.34.76-.8.76H7.8a.77.77 0 0 1-.8-.76v-.74h-.8c-.44 0-.8-.34-.8-.75v-2.43A5.88 5.88 0 0 1 3 7.62Zm3.2 4.87v.75h5.6v-.75H6.2Zm5.87-.75a5.14 5.14 0 0 0 2.13-4.13c0-2.69-2.33-4.87-5.2-4.87S3.8 4.93 3.8 7.63c0 1.62.85 3.23 2.13 4.12h6.14ZM6.2 14v.75h5.6V14H6.2Zm1.6 1.5v.75h2.4v-.75H7.8ZM8.6 8v3h.8V8h3.2v-.75H9.4v-3h-.8v3H5.4V8h3.2Z"/></svg>'
        },
        106654: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M9.5 21H9h.5zm8 0H17h.5zm0-1.5h.5-.5zm.29-1.59A7.97 7.97 0 0 0 21 11.5h-1a6.97 6.97 0 0 1-2.79 5.59l.58.82zM21 11.5A7.5 7.5 0 0 0 13.5 4v1a6.5 6.5 0 0 1 6.5 6.5h1zM13.5 4A7.5 7.5 0 0 0 6 11.5h1A6.5 6.5 0 0 1 13.5 5V4zM6 11.5a7.98 7.98 0 0 0 3.21 6.41l.57-.82A6.98 6.98 0 0 1 7 11.5H6zM9 21a1 1 0 0 0 1 1v-1H9zm8 1a1 1 0 0 0 1-1h-1v1zm-6-.5V23h1v-1.5h-1zm0 1.5a1 1 0 0 0 .99 1v-1a.01.01 0 0 1 .01 0h-1zm.99 1h3.02v-1h-3.02v1zm3.02 0a1 1 0 0 0 .99-1h-1v1zm.99-1v-1.5h-1V23h1zm-6.5-3h8v-1h-8v1zM9 17.5v2h1v-2H9zm0 2V21h1v-1.5H9zm9 1.5v-1.5h-1V21h1zm0-1.5v-2h-1v2h1zM9 12h4.5v-1H9v1zm4.5 0H18v-1h-4.5v1zM10 22h1.5v-1H10v1zm1.5 0h4v-1h-4v1zm4 0H17v-1h-1.5v1zM13 11.5V16h1v-4.5h-1zM9.5 18h8v-1h-8v1zm4.5-6.5V7h-1v4.5h1z"/></svg>'
        },
        929414: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>'
        },
        884502: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>'
        },
        874650: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M24 14c0 3.12-1.43 5.9-3.67 7.74l.64.77a10.98 10.98 0 0 0 0-17.02l-.64.77A9.98 9.98 0 0 1 24 14zM4 14c0 3.12 1.43 5.9 3.67 7.74l-.64.77a10.98 10.98 0 0 1 0-17.02l.64.77A9.98 9.98 0 0 0 4 14zm2 0c0 2.5 1.14 4.72 2.93 6.2l.64-.78a6.99 6.99 0 0 1 0-10.84l-.64-.77A7.98 7.98 0 0 0 6 14zm16 0c0 2.5-1.14 4.72-2.93 6.2l-.64-.78a6.99 6.99 0 0 0 0-10.84l.64-.77A7.98 7.98 0 0 1 22 14zM9 14c0-1.56.71-2.95 1.83-3.87l.64.77a4 4 0 0 0 0 6.2l-.64.77A4.99 4.99 0 0 1 9 14zm8.17-3.87l-.64.77a4 4 0 0 1 0 6.2l.64.77a4.99 4.99 0 0 0 0-7.74zM14 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>'
        },
        537838: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path stroke="#D1D4DC" stroke-width="2" d="M17 13a4 4 0 014-4h28a4 4 0 014 4v27a4 4 0 01-4 4H21a4 4 0 01-4-4V13z"/><path fill="#1848CC" d="M29 18.817a1 1 0 011.535-.845l12.131 7.683a1 1 0 010 1.69l-12.131 7.683A1 1 0 0129 34.183V18.817z"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M25 55h24"/><circle fill="#D1D4DC" cx="19.5" cy="55" r="1.5"/><path stroke="#D1D4DC" stroke-linecap="round" stroke-width="2" d="M25 63h24"/><circle fill="#D1D4DC" cx="19.5" cy="63" r="1.5"/><path fill="#1E222D" stroke="#D1D4DC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46.926 35.286a1 1 0 00-1.547 1.25l9.3 14.367a2.812 2.812 0 104.348-3.516L46.926 35.286z"/></svg>'
        },
        577206: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path stroke="#1E222D" stroke-width="2" d="M17 13a4 4 0 014-4h28a4 4 0 014 4v27a4 4 0 01-4 4H21a4 4 0 01-4-4V13z"/><path fill="#2962FF" d="M29 18.817a1 1 0 011.535-.845l12.131 7.683a1 1 0 010 1.69l-12.131 7.683A1 1 0 0129 34.183V18.817z"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M25 55h24"/><circle fill="#1E222D" cx="19.5" cy="55" r="1.5"/><path stroke="#1E222D" stroke-linecap="round" stroke-width="2" d="M25 63h24"/><circle fill="#1E222D" cx="19.5" cy="63" r="1.5"/><path fill="#fff" stroke="#1E222D" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46.926 35.286a1 1 0 00-1.547 1.25l9.3 14.367a2.812 2.812 0 104.348-3.516L46.926 35.286z"/></svg>'
        },
        378025: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M23 14.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 4 14.5 9.5 9.5 0 0 1 13.5 5a9.5 9.5 0 0 1 9.5 9.5zm1 0a10.5 10.5 0 1 1-21 0 10.5 10.5 0 0 1 21 0zM10 11v7h7v-7h-7z"/></svg>'
        },
        889561: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="none"><path fill="#D1D4DC" fill-rule="evenodd" clip-rule="evenodd" d="M12.883 2.897A1 1 0 0113.877 2h44.416a1 1 0 01.995.897l6.912 67A1 1 0 0165.205 71h-8.203a1 1 0 01-.995-.897L55.269 63H29.681l.72 6.896A1 1 0 0129.413 71l-8.619.053a1 1 0 01-1-.9L19.067 63h-2.17l-.737 7.103a1 1 0 01-.994.897h-8.2a1 1 0 01-.994-1.103l6.91-67zM18.863 61l-4.985-48.26L8.076 69h6.189l.737-7.103a1 1 0 01.995-.897h2.866zM14.986 4H57.39l6.706 65h-6.194l-.738-7.103a1 1 0 00-.994-.897h-27.6a1 1 0 00-.994 1.104l.72 6.903-6.605.04-.725-7.148L14.986 4z"/><path fill="#F57C00" d="M38.628 16.398c.614-1.217 2.336-1.262 3.012-.078l13.49 23.633a1.71 1.71 0 01-1.486 2.558H28.24a1.71 1.71 0 01-1.527-2.48l11.916-23.633z"/><path fill="#D1D4DC" d="M41.05 34.074h-.965c-.482-3.092-.723-5.253-.723-6.484v-3.803h2.411v3.794c0 1.237-.24 3.401-.723 6.493zm-.408.686c.42 0 .776.149 1.066.446.297.296.446.655.446 1.076 0 .42-.149.779-.446 1.076-.29.296-.646.445-1.066.445-.42 0-.78-.149-1.076-.445a1.466 1.466 0 01-.445-1.076c0-.42.148-.78.445-1.076a1.466 1.466 0 011.076-.446z"/></svg>'
        },
        959941: e => {
            "use strict";
            e.exports = JSON.parse('{"us":{"title":"USA","screenerName":"america","screenerTimezone":"America/New_York","defaultExchange":"US","exchangesForHotlist":["AMEX","NASDAQ","NYSE","OTC","US"],"exchangesStocks":["NASDAQ","NYSE","NYSE ARCA","OTC"],"group":"North America"},"ae":{"title":"United Arab Emirates","screenerName":"uae","screenerTimezone":"Asia/Dubai","exchangesStocks":["DFM","ADX"],"group":"Middle East / Africa"},"ar":{"title":"Argentina","screenerName":"argentina","screenerTimezone":"America/Argentina/Buenos_Aires","exchangesForHotlist":["BCBA"],"exchangesStocks":["BYMA"],"defaultExchange":"BCBA","group":"Mexico and South America"},"at":{"title":"Austria"},"au":{"title":"Australia","screenerName":"australia","screenerTimezone":"Australia/Sydney","exchangesStocks":["ASX"],"group":"Asia / Pacific"},"be":{"title":"Belgium","screenerName":"belgium","screenerTimezone":"Europe/Brussels","exchangesForHotlist":["EURONEXT_BRU"],"exchangesStocks":["EURONEXTBRU"],"defaultExchange":"EURONEXT_BRU","group":"Europe"},"bh":{"title":"Bahrain","screenerName":"bahrain","screenerTimezone":"Asia/Bahrain","exchangesStocks":["BAHRAIN"],"group":"Middle East / Africa"},"br":{"title":"Brazil","screenerName":"brazil","screenerTimezone":"America/Sao_Paulo","exchangesStocks":["BMFBOVESPA"],"group":"Mexico and South America"},"ca":{"title":"Canada","screenerName":"canada","screenerTimezone":"America/Toronto","exchangesStocks":["TSX","TSXV","CSE","NEO"],"group":"North America"},"ch":{"title":"Switzerland","screenerName":"switzerland","screenerTimezone":"Europe/Zurich","exchangesStocks":["SIX","BX"],"group":"Europe"},"cl":{"title":"Chile","screenerName":"chile","screenerTimezone":"America/Santiago","exchangesStocks":["BCS"],"group":"Mexico and South America"},"cn":{"title":"China","tvLocale":"zh_CN","screenerName":"china","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["SSE","SZSE"],"group":"Asia / Pacific"},"co":{"title":"Colombia","screenerName":"colombia","screenerTimezone":"America/Bogota","exchangesStocks":["BVC"],"group":"Mexico and South America"},"cy":{"title":"Cyprus","screenerName":"cyprus","screenerTimezone":"Europe/Cyprus","exchangesStocks":["CSECY"],"exchangesForHotlist":["CSECY"],"group":"Europe"},"cz":{"title":"Czech Republic"},"de":{"title":"Germany","tvLocale":"de_DE","screenerName":"germany","screenerTimezone":"Europe/Berlin","defaultExchange":"XETR","exchangesStocks":["FWB","SWB","XETR","BER","DUS","HAM","HAN","MUN","TRADEGATE"],"group":"Europe"},"dk":{"title":"Denmark","screenerName":"denmark","screenerTimezone":"Europe/Copenhagen","exchangesStocks":["OMXCOP"],"group":"Europe"},"ee":{"title":"Estonia","screenerName":"estonia","screenerTimezone":"Europe/Tallinn","exchangesStocks":["OMXTSE"],"group":"Europe"},"eg":{"title":"Egypt","screenerName":"egypt","screenerTimezone":"Africa/Cairo","exchangesStocks":["EGX"],"group":"Middle East / Africa"},"es":{"title":"Spain","screenerName":"spain","screenerTimezone":"Europe/Madrid","exchangesStocks":["BME"],"group":"Europe"},"eu":{"title":"European Union","screenerName":"euronext","screenerTimezone":"Europe/Paris","exchangesForHotlist":[],"exchangesStocks":["EURONEXT"]},"fi":{"title":"Finland","screenerName":"finland","screenerTimezone":"Europe/Helsinki","exchangesStocks":["OMXHEX"],"group":"Europe"},"fr":{"title":"France","screenerName":"france","screenerTimezone":"Europe/Paris","exchangesForHotlist":["EURONEXT_PAR"],"exchangesStocks":["EURONEXTPAR"],"defaultExchange":"EURONEXT_PAR","group":"Europe"},"ge":{"title":"Georgia"},"gr":{"title":"Greece","screenerName":"greece","screenerTimezone":"Europe/Athens","exchangesStocks":["ATHEX"],"group":"Europe"},"hk":{"title":"Hong Kong","screenerName":"hongkong","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["HKEX"],"group":"Asia / Pacific"},"hu":{"title":"Hungary","screenerName":"hungary","screenerTimezone":"Europe/Budapest","exchangesStocks":["BET"],"exchangesForHotlist":["BET"],"defaultExchange":"BET","group":"Europe"},"id":{"title":"Indonesia","screenerName":"indonesia","screenerTimezone":"Asia/Jakarta","exchangesStocks":["IDX"],"group":"Asia / Pacific"},"ie":{"title":"Ireland"},"il":{"title":"Israel","screenerName":"israel","screenerTimezone":"Asia/Jerusalem","exchangesStocks":["TASE"],"group":"Middle East / Africa"},"in":{"title":"India","screenerName":"india","screenerTimezone":"Asia/Kolkata","exchangesStocks":["BSE","NSE"],"group":"Asia / Pacific"},"ir":{"title":"Iran"},"is":{"title":"Iceland","screenerName":"iceland","screenerTimezone":"Atlantic/Reykjavik","exchangesStocks":["OMXICE"],"group":"Europe"},"it":{"title":"Italy","screenerName":"italy","screenerTimezone":"Europe/Rome","exchangesForHotlist":["MIL"],"exchangesStocks":["MIL"],"group":"Europe"},"jp":{"title":"Japan","tvLocale":"ja","screenerName":"japan","screenerTimezone":"Asia/Tokyo","defaultExchange":"TSE","exchangesForHotlist":["NAG","TSE"],"exchangesStocks":["TSE","NAG","FSE","SAPSE"],"group":"Asia / Pacific"},"ke":{"title":"Kenya","screenerName":"kenya","screenerTimezone":"Africa/Nairobi","exchangesStocks":["NSEKE"],"group":"Middle East / Africa"},"kp":{"title":"Noth Korea"},"kr":{"title":"South Korea","tvLocale":"kr","screenerName":"korea","screenerTimezone":"Asia/Seoul","exchangesStocks":["KRX"],"group":"Asia / Pacific"},"kw":{"title":"Kuwait","screenerName":"kuwait","screenerTimezone":"Asia/Kuwait","exchangesStocks":["KSE"],"group":"Middle East / Africa"},"lk":{"title":"Sri Lanka","screenerName":"srilanka","screenerTimezone":"Asia/Colombo","exchangesStocks":["CSELK"],"group":"Asia / Pacific"},"lt":{"title":"Lithuania","screenerName":"lithuania","screenerTimezone":"Europe/Vilnius","exchangesStocks":["OMXVSE"],"group":"Europe"},"lv":{"title":"Latvia","screenerName":"latvia","screenerTimezone":"Europe/Riga","exchangesStocks":["OMXRSE"],"group":"Europe"},"lu":{"title":"Luxembourg","screenerName":"luxembourg","screenerTimezone":"Europe/Luxembourg","exchangesStocks":["LUXSE"],"exchangesForHotlist":["LUXSE"],"defaultExchange":"LUXSE","group":"Europe"},"mx":{"title":"Mexico","screenerName":"mexico","screenerTimezone":"America/Mexico_City","exchangesStocks":["BMV"],"group":"Mexico and South America"},"my":{"title":"Malaysia","tvLocale":"ms_MY","screenerName":"malaysia","screenerTimezone":"Asia/Singapore","exchangesStocks":["MYX"],"group":"Asia / Pacific"},"ng":{"title":"Nigeria","screenerName":"nigeria","screenerTimezone":"Africa/Lagos","exchangesStocks":["NSENG"],"group":"Middle East / Africa"},"nl":{"title":"Netherlands","screenerName":"netherlands","screenerTimezone":"Europe/Amsterdam","exchangesForHotlist":["EURONEXT_AMS"],"exchangesStocks":["EURONEXTAMS"],"defaultExchange":"EURONEXT_AMS","group":"Europe"},"no":{"title":"Norway","screenerName":"norway","screenerTimezone":"Europe/Oslo","exchangesForHotlist":["OSL"],"exchangesStocks":["EURONEXTOSE"],"defaultExchange":"OSL","group":"Europe"},"nz":{"title":"New Zealand","screenerName":"newzealand","screenerTimezone":"Pacific/Auckland","exchangesStocks":["NZX"],"group":"Asia / Pacific"},"pe":{"title":"Peru","screenerName":"peru","screenerTimezone":"America/Lima","exchangesStocks":["BVL"],"group":"Mexico and South America"},"ph":{"title":"Philippines","screenerName":"philippines","screenerTimezone":"Philippines/Manila","exchangesStocks":["PSE"],"group":"Asia / Pacific"},"pl":{"title":"Poland","screenerName":"poland","screenerTimezone":"Europe/Warsaw","exchangesStocks":["GPW","NEWCONNECT"],"group":"Europe"},"pt":{"title":"Portugal","screenerName":"portugal","screenerTimezone":"Europe/Lisbon","exchangesForHotlist":["EURONEXT_LIS"],"exchangesStocks":["EURONEXTLIS"],"defaultExchange":"EURONEXT_LIS","group":"Europe"},"qa":{"title":"Qatar","screenerName":"qatar","screenerTimezone":"Asia/Qatar","exchangesStocks":["QSE"],"group":"Middle East / Africa"},"ro":{"title":"Romania","screenerName":"romania","screenerTimezone":"Europe/Bucharest","exchangesStocks":["BVB"],"exchangesForHotlist":["BVB"],"defaultExchange":"BVB","group":"Europe"},"rs":{"title":"Serbia","screenerName":"serbia","screenerTimezone":"Europe/Belgrade","exchangesStocks":["BELEX"],"group":"Europe"},"ru":{"title":"Russia","screenerName":"russia","screenerTimezone":"Europe/Moscow","exchangesStocks":["MOEX"],"group":"Europe"},"sa":{"title":"Saudi Arabia","tvLocale":"ar_AE","screenerName":"ksa","screenerTimezone":"Asia/Riyadh","exchangesStocks":["TADAWUL"],"group":"Middle East / Africa"},"se":{"title":"Sweden","tvLocale":"sv_SE","screenerName":"sweden","screenerTimezone":"Europe/Stockholm","exchangesStocks":["NGM","OMXSTO"],"exchangesForHotlist":["NGM","OMXSTO"],"group":"Europe"},"sg":{"title":"Singapore","screenerName":"singapore","screenerTimezone":"Asia/Singapore","exchangesStocks":["SGX"],"group":"Asia / Pacific"},"sk":{"title":"Slovakia","screenerName":"slovakia","screenerTimezone":"Europe/Bratislava","exchangesStocks":["BSSE"],"group":"Europe"},"th":{"title":"Thailand","tvLocale":"th_TH","screenerName":"thailand","screenerTimezone":"Asia/Bangkok","exchangesStocks":["SET"],"group":"Asia / Pacific"},"tn":{"title":"Tunisia","screenerName":"tunisia","screenerTimezone":"Africa/Tunis","exchangesStocks":["BVMT"],"group":"Middle East / Africa"},"tr":{"title":"Turkey","screenerName":"turkey","screenerTimezone":"Europe/Istanbul","exchangesStocks":["BIST"],"group":"Europe"},"tw":{"title":"Taiwan","tvLocale":"zh_TW","screenerName":"taiwan","screenerTimezone":"Asia/Taipei","exchangesStocks":["TWSE","TPEX"],"group":"Asia / Pacific"},"uk":{"title":"United Kingdom","screenerName":"uk","screenerTimezone":"Europe/London","defaultExchange":"LSE","exchangesStocks":["LSE","LSIN"],"group":"Europe"},"ve":{"title":"Venezuela","screenerName":"venezuela","screenerTimezone":"America/Caracas","exchangesStocks":["BVCV"],"group":"Mexico and South America"},"vn":{"title":"Vietnam","tvLocale":"vi_VN","screenerName":"vietnam","screenerTimezone":"Asia/Ho_Chi_Minh","exchangesStocks":["HOSE","HNX","UPCOM"],"group":"Asia / Pacific"},"za":{"title":"South Africa","screenerName":"rsa","screenerTimezone":"Africa/Johannesburg","exchangesStocks":["JSE"],"group":"Middle East / Africa"},"ww":{"title":"Worldwide"}}')
        }
    }
]);
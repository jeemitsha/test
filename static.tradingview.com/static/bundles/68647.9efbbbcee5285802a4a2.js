(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [68647], {
        168647: (t, e, i) => {
            var n, s, r;
            r = "object" == typeof self && self.self == self && self || "object" == typeof i.g && i.g.global == i.g && i.g, n = [i(725977), i(823127), e], s = function(t, e, i) {
                r.Backbone = function(t, e, i, n) {
                    var s = t.Backbone,
                        r = [].slice;
                    e.VERSION = "1.2.1", e.$ = n, e.noConflict = function() {
                        return t.Backbone = s, this
                    }, e.emulateHTTP = !1, e.emulateJSON = !1;
                    var a = function(t, e, n) {
                            switch (t) {
                                case 1:
                                    return function() {
                                        return i[e](this[n])
                                    };
                                case 2:
                                    return function(t) {
                                        return i[e](this[n], t)
                                    };
                                case 3:
                                    return function(t, s) {
                                        return i[e](this[n], t, s)
                                    };
                                case 4:
                                    return function(t, s, r) {
                                        return i[e](this[n], t, s, r)
                                    };
                                default:
                                    return function() {
                                        var t = r.call(arguments);
                                        return t.unshift(this[n]), i[e].apply(i, t)
                                    }
                            }
                        },
                        o = function(t, e, n) {
                            i.each(e, (function(e, s) {
                                i[s] && (t.prototype[s] = a(e, s, n))
                            }))
                        },
                        h = e.Events = {},
                        u = /\s+/,
                        c = function(t, e, n, s, r) {
                            var a, o = 0;
                            if (n && "object" == typeof n) {
                                void 0 !== s && "context" in r && void 0 === r.context && (r.context = s);
                                for (a = i.keys(n); o < a.length; o++) e = t(e, a[o], n[a[o]], r)
                            } else if (n && u.test(n))
                                for (a = n.split(u); o < a.length; o++) e = t(e, a[o], s, r);
                            else e = t(e, n, s, r);
                            return e
                        };
                    h.on = function(t, e, i) {
                        return l(this, t, e, i)
                    };
                    var l = function(t, e, i, n, s) {
                        return t._events = c(d, t._events || {}, e, i, {
                            context: n,
                            ctx: t,
                            listening: s
                        }), s && ((t._listeners || (t._listeners = {}))[s.id] = s), t
                    };
                    h.listenTo = function(t, e, n) {
                        if (!t) return this;
                        var s = t._listenId || (t._listenId = i.uniqueId("l")),
                            r = this._listeningTo || (this._listeningTo = {}),
                            a = r[s];
                        if (!a) {
                            var o = this._listenId || (this._listenId = i.uniqueId("l"));
                            a = r[s] = {
                                obj: t,
                                objId: s,
                                id: o,
                                listeningTo: r,
                                count: 0
                            }
                        }
                        return l(t, e, n, this, a), this
                    };
                    var d = function(t, e, i, n) {
                        if (i) {
                            var s = t[e] || (t[e] = []),
                                r = n.context,
                                a = n.ctx,
                                o = n.listening;
                            o && o.count++, s.push({
                                callback: i,
                                context: r,
                                ctx: r || a,
                                listening: o
                            })
                        }
                        return t
                    };
                    h.off = function(t, e, i) {
                        return this._events ? (this._events = c(f, this._events, t, e, {
                            context: i,
                            listeners: this._listeners
                        }), this) : this
                    }, h.stopListening = function(t, e, n) {
                        var s = this._listeningTo;
                        if (!s) return this;
                        for (var r = t ? [t._listenId] : i.keys(s), a = 0; a < r.length; a++) {
                            var o = s[r[a]];
                            if (!o) break;
                            o.obj.off(e, n, this)
                        }
                        return i.isEmpty(s) && (this._listeningTo = void 0), this
                    };
                    var f = function(t, e, n, s) {
                        if (t) {
                            var r, a = 0,
                                o = s.context,
                                h = s.listeners;
                            if (e || n || o) {
                                for (var u = e ? [e] : i.keys(t); a < u.length; a++) {
                                    var c = t[e = u[a]];
                                    if (!c) break;
                                    for (var l = [], d = 0; d < c.length; d++) {
                                        var f = c[d];
                                        n && n !== f.callback && n !== f.callback._callback || o && o !== f.context ? l.push(f) : (r = f.listening) && 0 == --r.count && (delete h[r.id], delete r.listeningTo[r.objId])
                                    }
                                    l.length ? t[e] = l : delete t[e]
                                }
                                return i.size(t) ? t : void 0
                            }
                            for (var g = i.keys(h); a < g.length; a++) delete h[(r = h[g[a]]).id], delete r.listeningTo[r.objId]
                        }
                    };
                    h.once = function(t, e, n) {
                        var s = c(g, {}, t, e, i.bind(this.off, this));
                        return this.on(s, void 0, n)
                    }, h.listenToOnce = function(t, e, n) {
                        var s = c(g, {}, e, n, i.bind(this.stopListening, this, t));
                        return this.listenTo(t, s)
                    };
                    var g = function(t, e, n, s) {
                        if (n) {
                            var r = t[e] = i.once((function() {
                                s(e, r), n.apply(this, arguments)
                            }));
                            r._callback = n
                        }
                        return t
                    };
                    h.trigger = function(t) {
                        if (!this._events) return this;
                        for (var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0; n < e; n++) i[n] = arguments[n + 1];
                        return c(p, this._events, t, void 0, i), this
                    };
                    var p = function(t, e, i, n) {
                            if (t) {
                                var s = t[e],
                                    r = t.all;
                                s && r && (r = r.slice()), s && v(s, n), r && v(r, [e].concat(n))
                            }
                            return t
                        },
                        v = function(t, e) {
                            var i, n = -1,
                                s = t.length,
                                r = e[0],
                                a = e[1],
                                o = e[2];
                            switch (e.length) {
                                case 0:
                                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx);
                                    return;
                                case 1:
                                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r);
                                    return;
                                case 2:
                                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a);
                                    return;
                                case 3:
                                    for (; ++n < s;)(i = t[n]).callback.call(i.ctx, r, a, o);
                                    return;
                                default:
                                    for (; ++n < s;)(i = t[n]).callback.apply(i.ctx, e);
                                    return
                            }
                        };
                    h.bind = h.on, h.unbind = h.off, i.extend(e, h);
                    var m = e.Model = function(t, e) {
                        var n = t || {};
                        e || (e = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (n = this.parse(n, e) || {}), n = i.defaults({}, n, i.result(this, "defaults")), this.set(n, e), this.changed = {}, this.initialize.apply(this, arguments)
                    };
                    i.extend(m.prototype, h, {
                        changed: null,
                        validationError: null,
                        idAttribute: "id",
                        cidPrefix: "c",
                        initialize: function() {},
                        toJSON: function(t) {
                            return i.clone(this.attributes)
                        },
                        sync: function() {
                            return e.sync.apply(this, arguments)
                        },
                        get: function(t) {
                            return this.attributes[t]
                        },
                        escape: function(t) {
                            return i.escape(this.get(t))
                        },
                        has: function(t) {
                            return null != this.get(t)
                        },
                        matches: function(t) {
                            return !!i.iteratee(t, this)(this.attributes)
                        },
                        set: function(t, e, n) {
                            if (null == t) return this;
                            var s;
                            if ("object" == typeof t ? (s = t, n = e) : (s = {})[t] = e, n || (n = {}), !this._validate(s, n)) return !1;
                            var r = n.unset,
                                a = n.silent,
                                o = [],
                                h = this._changing;
                            this._changing = !0, h || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                            var u = this.attributes,
                                c = this.changed,
                                l = this._previousAttributes;
                            for (var d in this.idAttribute in s && (this.id = s[this.idAttribute]), s) e = s[d], i.isEqual(u[d], e) || o.push(d), i.isEqual(l[d], e) ? delete c[d] : c[d] = e, r ? delete u[d] : u[d] = e;
                            if (!a) {
                                o.length && (this._pending = n);
                                for (var f = 0; f < o.length; f++) this.trigger("change:" + o[f], this, u[o[f]], n)
                            }
                            if (h) return this;
                            if (!a)
                                for (; this._pending;) n = this._pending, this._pending = !1, this.trigger("change", this, n);
                            return this._pending = !1, this._changing = !1, this
                        },
                        unset: function(t, e) {
                            return this.set(t, void 0, i.extend({}, e, {
                                unset: !0
                            }))
                        },
                        clear: function(t) {
                            var e = {};
                            for (var n in this.attributes) e[n] = void 0;
                            return this.set(e, i.extend({}, t, {
                                unset: !0
                            }))
                        },
                        hasChanged: function(t) {
                            return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
                        },
                        changedAttributes: function(t) {
                            if (!t) return !!this.hasChanged() && i.clone(this.changed);
                            var e = this._changing ? this._previousAttributes : this.attributes,
                                n = {};
                            for (var s in t) {
                                var r = t[s];
                                i.isEqual(e[s], r) || (n[s] = r)
                            }
                            return !!i.size(n) && n
                        },
                        previous: function(t) {
                            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                        },
                        previousAttributes: function() {
                            return i.clone(this._previousAttributes)
                        },
                        fetch: function(t) {
                            t = i.extend({
                                parse: !0
                            }, t);
                            var e = this,
                                n = t.success;
                            return t.success = function(i) {
                                var s = t.parse ? e.parse(i, t) : i;
                                if (!e.set(s, t)) return !1;
                                n && n.call(t.context, e, i, t), e.trigger("sync", e, i, t)
                            }, U(this, t), this.sync("read", this, t)
                        },
                        save: function(t, e, n) {
                            var s;
                            null == t || "object" == typeof t ? (s = t, n = e) : (s = {})[t] = e;
                            var r = (n = i.extend({
                                validate: !0,
                                parse: !0
                            }, n)).wait;
                            if (s && !r) {
                                if (!this.set(s, n)) return !1
                            } else if (!this._validate(s, n)) return !1;
                            var a = this,
                                o = n.success,
                                h = this.attributes;
                            n.success = function(t) {
                                a.attributes = h;
                                var e = n.parse ? a.parse(t, n) : t;
                                if (r && (e = i.extend({}, s, e)), e && !a.set(e, n)) return !1;
                                o && o.call(n.context, a, t, n), a.trigger("sync", a, t, n)
                            }, U(this, n), s && r && (this.attributes = i.extend({}, h, s));
                            var u = this.isNew() ? "create" : n.patch ? "patch" : "update";
                            "patch" !== u || n.attrs || (n.attrs = s);
                            var c = this.sync(u, this, n);
                            return this.attributes = h, c
                        },
                        destroy: function(t) {
                            t = t ? i.clone(t) : {};
                            var e = this,
                                n = t.success,
                                s = t.wait,
                                r = function() {
                                    e.stopListening(), e.trigger("destroy", e, e.collection, t)
                                };
                            t.success = function(i) {
                                s && r(), n && n.call(t.context, e, i, t), e.isNew() || e.trigger("sync", e, i, t)
                            };
                            var a = !1;
                            return this.isNew() ? i.defer(t.success) : (U(this, t), a = this.sync("delete", this, t)), s || r(), a
                        },
                        url: function() {
                            var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || O();
                            if (this.isNew()) return t;
                            var e = this.get(this.idAttribute);
                            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
                        },
                        parse: function(t, e) {
                            return t
                        },
                        clone: function() {
                            return new this.constructor(this.attributes)
                        },
                        isNew: function() {
                            return !this.has(this.idAttribute)
                        },
                        isValid: function(t) {
                            return this._validate({}, i.defaults({
                                validate: !0
                            }, t))
                        },
                        _validate: function(t, e) {
                            if (!e.validate || !this.validate) return !0;
                            t = i.extend({}, this.attributes, t);
                            var n = this.validationError = this.validate(t, e) || null;
                            return !n || (this.trigger("invalid", this, n, i.extend(e, {
                                validationError: n
                            })), !1)
                        }
                    }), o(m, {
                        keys: 1,
                        values: 1,
                        pairs: 1,
                        invert: 1,
                        pick: 0,
                        omit: 0,
                        chain: 1,
                        isEmpty: 1
                    }, "attributes");
                    var _ = e.Collection = function(t, e) {
                            e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, i.extend({
                                silent: !0
                            }, e))
                        },
                        y = {
                            add: !0,
                            remove: !0,
                            merge: !0
                        },
                        b = {
                            add: !0,
                            remove: !1
                        };
                    i.extend(_.prototype, h, {
                        model: m,
                        initialize: function() {},
                        toJSON: function(t) {
                            return this.map((function(e) {
                                return e.toJSON(t)
                            }))
                        },
                        sync: function() {
                            return e.sync.apply(this, arguments)
                        },
                        add: function(t, e) {
                            return this.set(t, i.extend({
                                merge: !1
                            }, e, b))
                        },
                        remove: function(t, e) {
                            e = i.extend({}, e);
                            var n = !i.isArray(t);
                            t = n ? [t] : i.clone(t);
                            var s = this._removeModels(t, e);
                            return !e.silent && s && this.trigger("update", this, e), n ? s[0] : s
                        },
                        set: function(t, e) {
                            (e = i.defaults({}, e, y)).parse && !this._isModel(t) && (t = this.parse(t, e));
                            var n, s, r, a, o, h = !i.isArray(t);
                            t = h ? t ? [t] : [] : t.slice();
                            var u = e.at;
                            null != u && (u = +u), u < 0 && (u += this.length + 1);
                            for (var c = this.comparator && null == u && !1 !== e.sort, l = i.isString(this.comparator) ? this.comparator : null, d = [], f = [], g = {}, p = e.add, v = e.merge, m = e.remove, _ = !(c || !p || !m) && [], b = !1, x = 0; x < t.length; x++) {
                                if (r = t[x], a = this.get(r)) m && (g[a.cid] = !0), v && r !== a && (r = this._isModel(r) ? r.attributes : r, e.parse && (r = a.parse(r, e)), a.set(r, e), c && !o && a.hasChanged(l) && (o = !0)), t[x] = a;
                                else if (p) {
                                    if (!(s = t[x] = this._prepareModel(r, e))) continue;
                                    d.push(s), this._addReference(s, e)
                                }(s = a || s) && (n = this.modelId(s.attributes), !_ || !s.isNew() && g[n] || (_.push(s), b = b || !this.models[x] || s.cid !== this.models[x].cid), g[n] = !0)
                            }
                            if (m) {
                                for (x = 0; x < this.length; x++) g[(s = this.models[x]).cid] || f.push(s);
                                f.length && this._removeModels(f, e)
                            }
                            if (d.length || b)
                                if (c && (o = !0), this.length += d.length, null != u)
                                    for (x = 0; x < d.length; x++) this.models.splice(u + x, 0, d[x]);
                                else {
                                    _ && (this.models.length = 0);
                                    var w = _ || d;
                                    for (x = 0; x < w.length; x++) this.models.push(w[x])
                                }
                            if (o && this.sort({
                                    silent: !0
                                }), !e.silent) {
                                var E = null != u ? i.clone(e) : e;
                                for (x = 0; x < d.length; x++) null != u && (E.index = u + x), (s = d[x]).trigger("add", s, this, E);
                                (o || b) && this.trigger("sort", this, e), (d.length || f.length) && this.trigger("update", this, e)
                            }
                            return h ? t[0] : t
                        },
                        reset: function(t, e) {
                            e = e ? i.clone(e) : {};
                            for (var n = 0; n < this.models.length; n++) this._removeReference(this.models[n], e);
                            return e.previousModels = this.models, this._reset(), t = this.add(t, i.extend({
                                silent: !0
                            }, e)), e.silent || this.trigger("reset", this, e), t
                        },
                        push: function(t, e) {
                            return this.add(t, i.extend({
                                at: this.length
                            }, e))
                        },
                        pop: function(t) {
                            var e = this.at(this.length - 1);
                            return this.remove(e, t)
                        },
                        unshift: function(t, e) {
                            return this.add(t, i.extend({
                                at: 0
                            }, e))
                        },
                        shift: function(t) {
                            var e = this.at(0);
                            return this.remove(e, t)
                        },
                        slice: function() {
                            return r.apply(this.models, arguments)
                        },
                        get: function(t) {
                            if (null != t) {
                                var e = this.modelId(this._isModel(t) ? t.attributes : t);
                                return this._byId[t] || this._byId[e] || this._byId[t.cid]
                            }
                        },
                        at: function(t) {
                            return t < 0 && (t += this.length), this.models[t]
                        },
                        where: function(t, e) {
                            var n = i.matches(t);
                            return this[e ? "find" : "filter"]((function(t) {
                                return n(t.attributes)
                            }))
                        },
                        findWhere: function(t) {
                            return this.where(t, !0)
                        },
                        sort: function(t) {
                            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                            return t || (t = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
                        },
                        pluck: function(t) {
                            return i.invoke(this.models, "get", t)
                        },
                        fetch: function(t) {
                            var e = (t = i.extend({
                                    parse: !0
                                }, t)).success,
                                n = this;
                            return t.success = function(i) {
                                var s = t.reset ? "reset" : "set";
                                n[s](i, t), e && e.call(t.context, n, i, t), n.trigger("sync", n, i, t)
                            }, U(this, t), this.sync("read", this, t)
                        },
                        create: function(t, e) {
                            var n = (e = e ? i.clone(e) : {}).wait;
                            if (!(t = this._prepareModel(t, e))) return !1;
                            n || this.add(t, e);
                            var s = this,
                                r = e.success;
                            return e.success = function(t, e, i) {
                                n && s.add(t, i), r && r.call(i.context, t, e, i)
                            }, t.save(null, e), t
                        },
                        parse: function(t, e) {
                            return t
                        },
                        clone: function() {
                            return new this.constructor(this.models, {
                                model: this.model,
                                comparator: this.comparator
                            })
                        },
                        modelId: function(t) {
                            return t[this.model.prototype.idAttribute || "id"]
                        },
                        _reset: function() {
                            this.length = 0, this.models = [], this._byId = {}
                        },
                        _prepareModel: function(t, e) {
                            if (this._isModel(t)) return t.collection || (t.collection = this), t;
                            (e = e ? i.clone(e) : {}).collection = this;
                            var n = new this.model(t, e);
                            return n.validationError ? (this.trigger("invalid", this, n.validationError, e), !1) : n
                        },
                        _removeModels: function(t, e) {
                            for (var i = [], n = 0; n < t.length; n++) {
                                var s = this.get(t[n]);
                                if (s) {
                                    var r = this.indexOf(s);
                                    this.models.splice(r, 1), this.length--, e.silent || (e.index = r, s.trigger("remove", s, this, e)), i.push(s), this._removeReference(s, e)
                                }
                            }
                            return !!i.length && i
                        },
                        _isModel: function(t) {
                            return t instanceof m
                        },
                        _addReference: function(t, e) {
                            this._byId[t.cid] = t;
                            var i = this.modelId(t.attributes);
                            null != i && (this._byId[i] = t), t.on("all", this._onModelEvent, this)
                        },
                        _removeReference: function(t, e) {
                            delete this._byId[t.cid];
                            var i = this.modelId(t.attributes);
                            null != i && delete this._byId[i], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
                        },
                        _onModelEvent: function(t, e, i, n) {
                            if ("add" !== t && "remove" !== t || i === this) {
                                if ("destroy" === t && this.remove(e, n), "change" === t) {
                                    var s = this.modelId(e.previousAttributes()),
                                        r = this.modelId(e.attributes);
                                    s !== r && (null != s && delete this._byId[s], null != r && (this._byId[r] = e))
                                }
                                this.trigger.apply(this, arguments)
                            }
                        }
                    }), o(_, {
                        forEach: 3,
                        each: 3,
                        map: 3,
                        collect: 3,
                        reduce: 4,
                        foldl: 4,
                        inject: 4,
                        reduceRight: 4,
                        foldr: 4,
                        find: 3,
                        detect: 3,
                        filter: 3,
                        select: 3,
                        reject: 3,
                        every: 3,
                        all: 3,
                        some: 3,
                        any: 3,
                        include: 2,
                        contains: 2,
                        invoke: 0,
                        max: 3,
                        min: 3,
                        toArray: 1,
                        size: 1,
                        first: 3,
                        head: 3,
                        take: 3,
                        initial: 3,
                        rest: 3,
                        tail: 3,
                        drop: 3,
                        last: 3,
                        without: 0,
                        difference: 0,
                        indexOf: 3,
                        shuffle: 1,
                        lastIndexOf: 3,
                        isEmpty: 1,
                        chain: 1,
                        sample: 3,
                        partition: 3
                    }, "models");
                    var x = ["groupBy", "countBy", "sortBy", "indexBy"];
                    i.each(x, (function(t) {
                        i[t] && (_.prototype[t] = function(e, n) {
                            var s = i.isFunction(e) ? e : function(t) {
                                return t.get(e)
                            };
                            return i[t](this.models, s, n)
                        })
                    }));
                    var w = e.View = function(t) {
                            this.cid = i.uniqueId("view"), i.extend(this, i.pick(t, k)), this._ensureElement(), this.initialize.apply(this, arguments)
                        },
                        E = /^(\S+)\s*(.*)$/,
                        k = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                    i.extend(w.prototype, h, {
                        tagName: "div",
                        $: function(t) {
                            return this.$el.find(t)
                        },
                        initialize: function() {},
                        render: function() {
                            return this
                        },
                        remove: function() {
                            return this._removeElement(), this.stopListening(), this
                        },
                        _removeElement: function() {
                            this.$el.remove()
                        },
                        setElement: function(t) {
                            return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
                        },
                        _setElement: function(t) {
                            this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
                        },
                        delegateEvents: function(t) {
                            if (t || (t = i.result(this, "events")), !t) return this;
                            for (var e in this.undelegateEvents(), t) {
                                var n = t[e];
                                if (i.isFunction(n) || (n = this[n]), n) {
                                    var s = e.match(E);
                                    this.delegate(s[1], s[2], i.bind(n, this))
                                }
                            }
                            return this
                        },
                        delegate: function(t, e, i) {
                            return this.$el.on(t + ".delegateEvents" + this.cid, e, i), this
                        },
                        undelegateEvents: function() {
                            return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                        },
                        undelegate: function(t, e, i) {
                            return this.$el.off(t + ".delegateEvents" + this.cid, e, i), this
                        },
                        _createElement: function(t) {
                            return document.createElement(t)
                        },
                        _ensureElement: function() {
                            if (this.el) this.setElement(i.result(this, "el"));
                            else {
                                var t = i.extend({}, i.result(this, "attributes"));
                                this.id && (t.id = i.result(this, "id")), this.className && (t.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(t)
                            }
                        },
                        _setAttributes: function(t) {
                            this.$el.attr(t)
                        }
                    }), e.sync = function(t, n, s) {
                        var r = S[t];
                        i.defaults(s || (s = {}), {
                            emulateHTTP: e.emulateHTTP,
                            emulateJSON: e.emulateJSON
                        });
                        var a = {
                            type: r,
                            dataType: "json"
                        };
                        if (s.url || (a.url = i.result(n, "url") || O()), null != s.data || !n || "create" !== t && "update" !== t && "patch" !== t || (a.contentType = "application/json", a.data = JSON.stringify(s.attrs || n.toJSON(s))),
                            s.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                                model: a.data
                            } : {}), s.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                            a.type = "POST", s.emulateJSON && (a.data._method = r);
                            var o = s.beforeSend;
                            s.beforeSend = function(t) {
                                if (t.setRequestHeader("X-HTTP-Method-Override", r), o) return o.apply(this, arguments)
                            }
                        }
                        "GET" === a.type || s.emulateJSON || (a.processData = !1);
                        var h = s.error;
                        s.error = function(t, e, i) {
                            s.textStatus = e, s.errorThrown = i, h && h.call(s.context, t, e, i)
                        };
                        var u = s.xhr = e.ajax(i.extend(a, s));
                        return n.trigger("request", n, u, s), u
                    };
                    var S = {
                        create: "POST",
                        update: "PUT",
                        patch: "PATCH",
                        delete: "DELETE",
                        read: "GET"
                    };
                    e.ajax = function() {
                        return e.$.ajax.apply(e.$, arguments)
                    };
                    var I = e.Router = function(t) {
                            t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                        },
                        T = /\((.*?)\)/g,
                        P = /(\(\?)?:\w+/g,
                        H = /\*\w+/g,
                        $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                    i.extend(I.prototype, h, {
                        initialize: function() {},
                        route: function(t, n, s) {
                            i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(n) && (s = n, n = ""), s || (s = this[n]);
                            var r = this;
                            return e.history.route(t, (function(i) {
                                var a = r._extractParameters(t, i);
                                !1 !== r.execute(s, a, n) && (r.trigger.apply(r, ["route:" + n].concat(a)), r.trigger("route", n, a), e.history.trigger("route", r, n, a))
                            })), this
                        },
                        execute: function(t, e, i) {
                            t && t.apply(this, e)
                        },
                        navigate: function(t, i) {
                            return e.history.navigate(t, i), this
                        },
                        _bindRoutes: function() {
                            if (this.routes) {
                                this.routes = i.result(this, "routes");
                                for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                            }
                        },
                        _routeToRegExp: function(t) {
                            return t = t.replace($, "\\$&").replace(T, "(?:$1)?").replace(P, (function(t, e) {
                                return e ? t : "([^/?]+)"
                            })).replace(H, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                        },
                        _extractParameters: function(t, e) {
                            var n = t.exec(e).slice(1);
                            return i.map(n, (function(t, e) {
                                return e === n.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                            }))
                        }
                    });
                    var C = e.History = function() {
                            this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                        },
                        A = /^[#\/]|\s+$/g,
                        N = /^\/+|\/+$/g,
                        R = /#.*$/;
                    C.started = !1, i.extend(C.prototype, h, {
                        interval: 50,
                        atRoot: function() {
                            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
                        },
                        matchRoot: function() {
                            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
                        },
                        decodeFragment: function(t) {
                            return decodeURI(t.replace(/%25/g, "%2525"))
                        },
                        getSearch: function() {
                            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                            return t ? t[0] : ""
                        },
                        getHash: function(t) {
                            var e = (t || this).location.href.match(/#(.*)$/);
                            return e ? e[1] : ""
                        },
                        getPath: function() {
                            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                            return "/" === t.charAt(0) ? t.slice(1) : t
                        },
                        getFragment: function(t) {
                            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(A, "")
                        },
                        start: function(t) {
                            if (C.started) throw new Error("Backbone.history has already been started");
                            if (C.started = !0, this.options = i.extend({
                                    root: "/"
                                }, this.options, t), this.root = this.options.root,
                                this._wantsHashChange = !1 !== this.options.hashChange, this._hasHashChange = "onhashchange" in window, this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(N, "/"), this._wantsHashChange && this._wantsPushState) {
                                if (!this._hasPushState && !this.atRoot()) {
                                    var e = this.root.slice(0, -1) || "/";
                                    return this.location.replace(e + "#" + this.getPath()), !0
                                }
                                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                                    replace: !0
                                })
                            }
                            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                                var n = document.body,
                                    s = n.insertBefore(this.iframe, n.firstChild).contentWindow;
                                s.document.open(), s.document.close(), s.location.hash = "#" + this.fragment
                            }
                            var r = window.addEventListener || function(t, e) {
                                return attachEvent("on" + t, e)
                            };
                            if (this._usePushState ? r("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? r("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
                        },
                        stop: function() {
                            var t = window.removeEventListener || function(t, e) {
                                return detachEvent("on" + t, e)
                            };
                            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), C.started = !1
                        },
                        route: function(t, e) {
                            this.handlers.unshift({
                                route: t,
                                callback: e
                            })
                        },
                        checkUrl: function(t) {
                            var e = this.getFragment();
                            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e === this.fragment) return !1;
                            this.iframe && this.navigate(e), this.loadUrl()
                        },
                        loadUrl: function(t) {
                            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), i.any(this.handlers, (function(e) {
                                if (e.route.test(t)) return e.callback(t), !0
                            })))
                        },
                        navigate: function(t, e) {
                            if (!C.started) return !1;
                            e && !0 !== e || (e = {
                                trigger: !!e
                            }), t = this.getFragment(t || "");
                            var i = this.root;
                            "" !== t && "?" !== t.charAt(0) || (i = i.slice(0, -1) || "/");
                            var n = i + t;
                            if (t = this.decodeFragment(t.replace(R, "")), this.fragment !== t) {
                                if (this.fragment = t, this._usePushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                                else {
                                    if (!this._wantsHashChange) return this.location.assign(n);
                                    if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                                        var s = this.iframe.contentWindow;
                                        e.replace || (s.document.open(), s.document.close()), this._updateHash(s.location, t, e.replace)
                                    }
                                }
                                return e.trigger ? this.loadUrl(t) : void 0
                            }
                        },
                        _updateHash: function(t, e, i) {
                            if (i) {
                                var n = t.href.replace(/(javascript:|#).*$/, "");
                                t.replace(n + "#" + e)
                            } else t.hash = "#" + e
                        }
                    }), e.history = new C;
                    var j = function(t, e) {
                        var n, s = this;
                        n = t && i.has(t, "constructor") ? t.constructor : function() {
                            return s.apply(this, arguments)
                        }, i.extend(n, s, e);
                        var r = function() {
                            this.constructor = n
                        };
                        return r.prototype = s.prototype, n.prototype = new r, t && i.extend(n.prototype, t), n.__super__ = s.prototype, n
                    };
                    m.extend = _.extend = I.extend = w.extend = C.extend = j;
                    var O = function() {
                            throw new Error('A "url" property or function must be specified')
                        },
                        U = function(t, e) {
                            var i = e.error;
                            e.error = function(n) {
                                i && i.call(e.context, t, n, e), t.trigger("error", t, n, e)
                            }
                        };
                    return e
                }(r, i, t, e)
            }.apply(e, n), void 0 === s || (t.exports = s)
        }
    }
]);
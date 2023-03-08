"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [63742], {
        764250: (e, t, n) => {
            n.d(t, {
                ActionGroup: () => r
            });
            class o {
                constructor(e, t) {
                    this._group = e, this.hotkey = t.hotkey, this.handler = t.handler, this.desc = t.desc, this.element = t.element || null, t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1
                }
                destroy() {
                    this._group && (this._group.remove(this), this._group = null)
                }
            }
            class r {
                constructor(e, t) {
                    this._actions = [], this._manager = e, this.modal = !(!t || !t.modal), t && (this.desc = t.desc), t && t.isDisabled ? "function" == typeof t.isDisabled ? this.isDisabled = t.isDisabled : this.isDisabled = () => !0 : this.isDisabled = () => !1, this._manager.registerGroup(this)
                }
                add(e) {
                    const t = new o(this, e);
                    return this._actions.push(t), t
                }
                remove(e) {
                    for (let t = this._actions.length; t-- > 0;) this._actions[t] === e && this._actions.splice(t, 1)
                }
                handleHotkey(e, t) {
                    for (let n = this._actions.length; n-- > 0;) {
                        const o = this._actions[n];
                        if (o.hotkey === e && ((!o.element || t.target && o.element.contains(t.target)) && !o.isDisabled())) return o.handler(t), t.preventDefault(), this._callMatchedHotkeyHandler(e), !0
                    }
                    return !1
                }
                promote() {
                    this._manager.promoteGroup(this)
                }
                destroy() {
                    this._actions.length = 0, this._manager.unregisterGroup(this)
                }
                static setMatchedHotkeyHandler(e) {
                    r._matchedHotkeyHandler = e
                }
                _callMatchedHotkeyHandler(e) {
                    r._matchedHotkeyHandler && r._matchedHotkeyHandler(e)
                }
            }
        },
        486347: (e, t, n) => {
            n.d(t, {
                createGroup: () => c,
                pressedKeys: () => l,
                registerWindow: () => u,
                unregisterWindow: () => d
            });
            var o = n(591800),
                r = n(607423),
                i = n(91679);
            var a = n(764250);
            const s = new class {
                    constructor() {
                        this._groups = [], this._pressedKeys = new i.WatchedValue(0), this._keyDownListener = e => {
                            if (e.defaultPrevented) return;
                            const t = (0, o.hashFromEvent)(e);
                            if (this._pressedKeys.setValue(t), !(0, r.isNativeUIInteraction)(t, e.target))
                                for (let n = this._groups.length; n-- > 0;) {
                                    const o = this._groups[n];
                                    if (!o.isDisabled()) {
                                        if (o.handleHotkey(t, e)) return;
                                        if (o.modal) return
                                    }
                                }
                        }, this._keyUpListener = e => {
                            const t = (0, o.hashFromEvent)(e);
                            this._pressedKeys.setValue(t)
                        }, this._blurEvent = () => {
                            this._pressedKeys.setValue(0)
                        }, this._mouseEvent = e => {
                            var t;
                            const n = (0, o.modifiersFromEvent)(e),
                                r = 255 & (null !== (t = this._pressedKeys.value()) && void 0 !== t ? t : 0);
                            this._pressedKeys.setValue(n | r)
                        }
                    }
                    listen(e) {
                        e.addEventListener("keydown", this._keyDownListener), e.addEventListener("keyup", this._keyUpListener), e.addEventListener("blur", this._blurEvent), e.addEventListener("mousemove", this._mouseEvent)
                    }
                    unlisten(e) {
                        e.removeEventListener("keydown", this._keyDownListener), e.removeEventListener("keyup", this._keyUpListener), e.removeEventListener("blur", this._blurEvent), e.removeEventListener("mousemove", this._mouseEvent)
                    }
                    registerGroup(e) {
                        this._groups.push(e)
                    }
                    unregisterGroup(e) {
                        for (let t = this._groups.length; t--;) this._groups[t] === e && this._groups.splice(t, 1)
                    }
                    promoteGroup(e) {
                        let t = this._groups.length - 1;
                        for (let n = this._groups.length; n--;) {
                            if (this._groups[n] === e) return void(n !== t && (this._groups.splice(n, 1), this._groups.splice(t, 0, e)));
                            this._groups[n].modal && (t = n - 1)
                        }
                    }
                    pressedKeys() {
                        return this._pressedKeys
                    }
                },
                l = s.pressedKeys().readonly();

            function c(e) {
                return new a.ActionGroup(s, e)
            }

            function u(e) {
                s.listen(e)
            }

            function d(e) {
                s.unlisten(e)
            }
        },
        591800: (e, t, n) => {
            n.d(t, {
                isMacKeyboard: () => r,
                Modifiers: () => i,
                modifiersFromEvent: () => a,
                hashFromEvent: () => s,
                hashShiftPlusEnter: () => l,
                humanReadableModifiers: () => c,
                humanReadableHash: () => d
            });
            var o = n(167175);
            const r = o.isMac || o.isIOS;
            var i;

            function a(e) {
                let t = 0;
                return e.shiftKey && (t += 1024), e.altKey && (t += 512), e.ctrlKey && (t += 256), e.metaKey && (t += 2048), t
            }

            function s(e) {
                return a(e) | e.keyCode
            }! function(e) {
                e[e.None = 0] = "None", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] = "Shift", e[e.Mod = r ? 2048 : 256] = "Mod", e[e.Control = 256] = "Control", e[e.Meta = 2048] = "Meta"
            }(i || (i = {}));
            const l = 1037;

            function c(e, t = !r) {
                let n = "";
                return 256 & e && (n += r ? "^" : "Ctrl", t && (n += " + ")), 512 & e && (n += r ? "⌥" : "Alt", t && (n += " + ")), 1024 & e && (n += r ? "⇧" : "Shift", t && (n += " + ")), 2048 & e && (n += r ? "⌘" : "Win", t && (n += " + ")), n
            }
            const u = {
                9: "⇥",
                13: "↵",
                27: "Esc",
                8: r ? "⌫" : "Backspace",
                32: "Space",
                35: "End",
                36: "Home",
                37: "←",
                38: "↑",
                39: "→",
                40: "↓",
                45: "Ins",
                46: "Del",
                188: ",",
                191: "/"
            };
            for (let e = 1; e <= 16; e++) u[e + 111] = `F${e}`;

            function d(e) {
                let t = c(e);
                const n = 255 & e;
                return t += n in u ? u[n] : String.fromCharCode(n), t
            }
        },
        607423: (e, t, n) => {
            n.d(t, {
                isTextEditingField: () => r,
                isNativeUIInteraction: () => i
            });
            var o = n(591800);

            function r(e) {
                if ("INPUT" === e.tagName) {
                    const t = e.type;
                    return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
                }
                return "TEXTAREA" === e.tagName || e.isContentEditable
            }

            function i(e, t) {
                if (!t) return !1;
                const n = 255 & e;
                if (27 === n || n >>> 4 == 7) return !1;
                switch (e ^ n) {
                    case o.Modifiers.Alt:
                        return (38 === n || 40 === n) && "SELECT" === t.tagName || r(t);
                    case o.Modifiers.Alt + o.Modifiers.Shift:
                        return r(t);
                    case o.Modifiers.Mod:
                        if (67 === n || !o.isMacKeyboard && 45 === n) {
                            const e = t.ownerDocument && t.ownerDocument.getSelection();
                            if (e && !e.isCollapsed) return !0
                        }
                        return r(t);
                    case o.Modifiers.Mod + o.Modifiers.Shift:
                        return n >= 33 && n <= 40 && r(t);
                    case o.Modifiers.Shift:
                    case 0:
                        return !!(9 !== n || t.ownerDocument && t !== t.ownerDocument.body && t !== t.ownerDocument.documentElement) && ((13 === n || 32 === n || ! function(e) {
                            if ("BUTTON" === e.tagName) return !0;
                            if ("INPUT" === e.tagName) {
                                const t = e.type;
                                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
                            }
                            return !1
                        }(t)) && ("form" in t || t.isContentEditable))
                }
                return !1
            }
        },
        167175: (e, t, n) => {
            n.d(t, {
                mobiletouch: () => i,
                touch: () => a,
                isChrome: () => s,
                isFF: () => l,
                isEdge: () => c,
                isSafari: () => u,
                isMac: () => d,
                isWindows: () => g,
                isLinux: () => _,
                isAndroid: () => h,
                isBlackBerry: () => f,
                isIOS: () => p,
                isOperaMini: () => m,
                isIPad: () => w,
                isAnyMobile: () => y
            });
            const o = "undefined" != typeof window && "undefined" != typeof navigator,
                r = o && "ontouchstart" in window,
                i = o && r && "onorientationchange" in window,
                a = o && (r || !!navigator.maxTouchPoints),
                s = o && window.chrome && window.chrome.runtime,
                l = o && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                c = o && /\sEdge\/\d\d\b/.test(navigator.userAgent),
                u = o && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS"),
                d = o && /mac/i.test(navigator.platform),
                g = o && /Win32|Win64/i.test(navigator.platform),
                _ = o && /Linux/i.test(navigator.platform),
                h = o && /Android/i.test(navigator.userAgent),
                f = o && /BlackBerry/i.test(navigator.userAgent),
                p = o && /iPhone|iPad|iPod/.test(navigator.platform),
                m = o && /Opera Mini/i.test(navigator.userAgent),
                w = o && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform)),
                y = h || f || p || m
        },
        43464: (e, t, n) => {
            n.r(t), n.d(t, {
                cookieBannerDomain: () => g,
                oldBannerKey: () => _,
                bannerPrivacyPreferenceKey: () => h,
                cookieBannerDelegate: () => w,
                removeOldCookieBannerKey: () => y,
                checkCookiePolicy: () => b,
                checkCookiePolicyInLs: () => v,
                onAccept: () => k,
                setCookiePolicy: () => S,
                showCookiesNotification: () => E,
                initCookiesNotification: () => T
            });
            var o = n(49437),
                r = n(314802),
                i = (n(659863), n(76797)),
                a = n(114968),
                s = n(261030),
                l = n(634786),
                c = n(66974),
                u = n(891343);
            const d = window.location.hostname.split("."),
                g = (0, c.isLocal)() ? "" : "." + d.slice(1, d.length).join("."),
                _ = "cookieBanner",
                h = (0, c.isProd)() ? "cookiePrivacyPreferenceBannerProduction" : "cookiePrivacyPreferenceBannerLocal",
                f = "accepted",
                p = "ignored",
                m = "notApplicable",
                w = (0, i.createDeferredPromise)();

            function y() {
                return o.TVLocalStorage.removeItem(_)
            }

            function b(e) {
                return u.get(e) === f || u.get(e) === m
            }

            function v(e) {
                return o.TVLocalStorage.getItem(e) === f || o.TVLocalStorage.getItem(e) === m
            }

            function k() {
                S(f)
            }

            function S(e) {
                u.set(h, e, 3653, "/", g)
            }
            let x = !1;
            async function E() {
                if (x) return;
                x = !0;
                const e = await Promise.all([n.e(16437), n.e(18619), n.e(78707), n.e(96246), n.e(41770), n.e(21009), n.e(91217), n.e(37742), n.e(39089), n.e(63946), n.e(31092), n.e(75514), n.e(58180), n.e(13830), n.e(78632), n.e(38869)]).then(n.bind(n, 458107));
                await e.showCookiesNotification() && (k(), (0, l.trackCookies)("click", "accept_all")), x = !1
            }
            async function T() {
                const e = document.querySelector(".js-main-page-promo-container");
                if (!b(h) && !(0, r.isOnMobileAppPage)("any")) {
                    if (e || w.resolve(), u.get(h) === p) return s.cookieSettingsReady.resolve(), w.promise.then((() => E())); {
                        const e = await (0, a.userGeoInfo)();
                        if (e.is_in_european_union || (t = e.country_code, ["is", "li", "no", "gb"].includes(t))) return S(p), s.cookieSettingsReady.resolve(), w.promise.then((() => E()));
                        S(m), (0, s.setCookieSetting)(s.CookieSettings.Analytics, !0), (0, s.setCookieSetting)(s.CookieSettings.Advertising, !0)
                    }
                }
                var t;
                s.cookieSettingsReady.resolve()
            }
        },
        719718: (e, t, n) => {
            n.d(t, {
                createImage: () => r,
                marketingAnalyticsEnabled: () => i,
                yandexAnalyticsEnabled: () => a
            });
            var o = n(125226);

            function r(e) {
                const t = document.createElement("img");
                return t.src = e, t
            }

            function i() {
                return (0, o.isFeatureEnabled)("marketing-analytics")
            }

            function a() {
                return (0,
                    o.isFeatureEnabled)("yandex_metric_enabled")
            }
        },
        665343: (e, t, n) => {
            n.d(t, {
                TwitterEvent: () => o,
                trackTwitterEvent: () => a
            });
            var o, r = n(719718),
                i = n(261030);
            ! function(e) {
                e.SiteVisit = "o2eg2", e.TrialSignUp = "o1wjo", e.RegistrationCompleted = "o1wjq", e.PaidPlanAcquired = "o1wjr"
            }(o || (o = {}));

            function a(e) {
                (0, r.marketingAnalyticsEnabled)() && (0, i.getCookieSetting)(i.CookieSettings.Analytics) && (e => [`https://analytics.twitter.com/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`, `https://t.co/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"`])(e).map(r.createImage)
            }
        },
        691805: (e, t, n) => {
            n.d(t, {
                appendScript: () => r
            });
            var o = n(503031);

            function r(e) {
                const t = document.createElement("script");
                t.async = !0, t.src = e;
                const n = (0, o.getCspNonce)();
                return n && t.setAttribute("nonce", n), document.head.appendChild(t), t
            }
        },
        261030: (e, t, n) => {
            n.d(t, {
                CookieSettings: () => o,
                cookieSettingsChangeEvent: () => u,
                cookieSettingsReady: () => d,
                setCookieSetting: () => p,
                getCookieSetting: () => m
            });
            var o, r = n(251954),
                i = n(76797),
                a = n(49437),
                s = n(43464),
                l = n(66974),
                c = n(891343);
            ! function(e) {
                e.Analytics = "analytics", e.Advertising = "advertising"
            }(o || (o = {}));
            const u = "cookie_settings_changed",
                d = (0, i.createDeferredPromise)(),
                g = "cookiesSettings",
                _ = "localCookiesSettings",
                h = "cookiePrivacyPreferenceBanner",
                f = {
                    [o.Analytics]: !1,
                    [o.Advertising]: !1
                };

            function p(e, t) {
                f[e] = t, c.set((0, l.isProd)() ? g : _, JSON.stringify(f), 3653, "/", s.cookieBannerDomain), r.emit(u, e, t)
            }

            function m(e) {
                return f[e]
            }

            function w() {
                return a.TVLocalStorage.removeItem(h)
            }! function() {
                const e = c.get((0, l.isProd)() ? g : _),
                    t = a.TVLocalStorage.getItem(h),
                    n = a.TVLocalStorage.getItem(g);
                if (e) {
                    t && n && (w(), a.TVLocalStorage.removeItem(g)), (0, s.checkCookiePolicyInLs)(s.oldBannerKey) && (0, s.removeOldCookieBannerKey)();
                    try {
                        const t = JSON.parse(e);
                        f[o.Analytics] = (null == t ? void 0 : t[o.Analytics]) || !1, f[o.Advertising] = (null == t ? void 0 : t[o.Advertising]) || !1
                    } catch (e) {}
                } else if ((0, s.checkCookiePolicyInLs)(s.oldBannerKey) && (p(o.Analytics, !0), p(o.Advertising, !0), (0, s.onAccept)(), (0, s.removeOldCookieBannerKey)()), t && n) {
                    const e = JSON.parse(n);
                    (0, s.setCookiePolicy)(t), p(o.Analytics, null == e ? void 0 : e[o.Analytics]), p(o.Advertising, null == e ? void 0 : e[o.Advertising]), w(), a.TVLocalStorage.removeItem(g)
                }
            }()
        },
        503031: (e, t, n) => {
            function o() {
                const e = document.querySelector("script[nonce]");
                if (null !== e) return e.getAttribute("nonce") || e.nonce
            }
            n.d(t, {
                getCspNonce: () => o
            })
        },
        66974: (e, t, n) => {
            function o(e = location.host) {
                return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : e.match(/webcharts/) ? "staging_local" : (e.match(/^localhost(:\d+)?$/), "local")
            }

            function r() {
                return "local" === o()
            }

            function i() {
                return "battle" === o()
            }

            function a() {
                return !i()
            }
            n.r(t), n.d(t, {
                environment: () => o,
                isLocal: () => r,
                isProd: () => i,
                isDebug: () => a
            })
        },
        125226: (e, t, n) => {
            var o = n(49437).TVLocalStorage,
                r = n(869403),
                i = n(855385);
            n(638456);
            var a = new r;
            TradingView.FeatureToggle = {
                force_prefix: "forcefeaturetoggle.",
                onChanged: new r,
                enableFeature: function(e) {
                    o.setItem(this.force_prefix + e, "true"), a.fire(e)
                },
                disableFeature: function(e) {
                    o.setItem(this.force_prefix + e, "false"), a.fire(e)
                },
                resetFeature: function(e) {
                    o.removeItem(this.force_prefix + e), a.fire(e)
                },
                onFeaturesStateChanged: function() {
                    return a
                }
            }, TradingView.isFeatureEnabled = function(e) {
                var t = "featuretoggle_seed";

                function r(e) {
                    try {
                        var n = i(e + function() {
                            if (window.user && window.user.id) return window.user.id;
                            var e = o.getItem(t);
                            return null !== e || (e = Math.floor(1e6 * Math.random()), o.setItem(t, e)), e
                        }());
                        return new DataView(n).getUint32(0, !0) / 4294967296
                    } catch (e) {
                        return .5
                    }
                }

                function s(t) {
                    return !("local" !== window.environment || ! function(e) {
                        var t = ["tick_intervals", "broker_FXCM_token_v2", "broker_TRADESTATION_V3", "broker_TRADOVATE_dev", "black_friday_mainpage", "black_friday_popup", "datawindow", "trading-fast-renew-oauth-token", "switching_trial_year_to_month_disabled", "switching_year_to_month_disabled", "default_year_billing_cycle_switcher", "marketing-analytics", "google-ads", "visible_address_fields_by_default", "slow-support-warning", "hide-trading-floating-toolbar", "tvcoins_donations", "save-short-streams", "details_disable_bid_ask", "vat_disabled", "pro_plan_upgrades_disabled", "pro_plan_downgrades_disabled", "disable_recaptcha_on_signup", "braintree-trial-implementation", "braintree-gopro-in-order-dialog", "braintree-apple-pay", "braintree-apple-pay-trial", "braintree-3ds-enabled", "braintree-3ds-enabled-globaly", "braintree-3ds-allow-liability-shifted-transactions-only", "two_weeks_annual_discounts", "hide_gopro_popup_upgrade_button", "tradestation_use_sync_mapper", "yandex_metric_enabled", "broker_id_session", "remove_line_tools_from_content", "disable_retry_load_linetools_from_storage", "modular_broker_use_sync_mapper", "do_not_save_shared_line_tools_to_charts", "save_shared_line_tools", "chart_storage_with_broker_name", "do_not_invalidate_chart_on_changing_line_tools", "oanda-european-accounts-warning", "mobile_show_bottom_panel", "disable_save_settings", "desktop_version_notification_enabled", "favorites-in-broker-dropdown", "streams_stats_profile", "enable_toggle_streams_rtmp_url", "hide_ecomonic_events", "mobile_trading_web", "mobile_trading_ios", "mobile_trading_android", "hide_real_brokers_on_mobile", "disable_tradestation_country_block", "enable_trading_server_logger", "hide_ranges_label_colors", "disable_user_specific_encryption", "show_checkbox_of_house_rules_to_idea_and_script", "minds_widget_enabled", "disable_phone_verification_sms", "disable_sms_for_particular_countries", "no_overlap_mode_enabled", "collapse_pane_buttons_when_connected_to_broker", "enable_new_execution_style", "pushstream_connections_observer", "disable_pushstream_connections_for_anonymous_users", "use_new_paper_status_mapping", "use_staging_verifier", "ally_use_new_sso_url", "ibkr_use_new_init_session_api", "test_minds_connections", "enable_eventsource_pushstream_transport", "enable_eventsource_pushstream_mobile", "ftx_request_server_logger", "ibkr_request_server_logger", "check_ibkr_side_maintenance", "tradestation_request_server_logger", "trading_request_server_logger", "hide_tweet_drawingtool", "new_error_card_icons", "RU_SF_disable", "RU_VOR_disable", "enable_monaco_editor", "enable_new_custom_public_chats", "bottom_panel_track_events", "vertex-tax-included", "enable_place_order_context_in_instant_mode", "nyse_agreement", "websocket_send_locale", "multiple_SoS", "enable_edit_order_context_in_instant_mode", "show_data_problems_in_help_center", "enable_trading_in_replay", "chart_storage_hibernation_delay_60min", "chart_storage_hibernation_delay_10min", "chart_storage_hibernation_delay_5min", "widget-sheriff", "enable_sign_in_popup_with_evercookie", "center_alignment_replay_position", "start_replay_right_after_point_selection", "nse_attention_popup", "switching_raf_toast", "disable_public_chats_in_sidebar", "enable_share_idea_via_twitter", "enable_qty_calculator_in_replay", "alerts-restrict-offline-clear-requests"],
                            n = "[A-Z]+[a-zA-Z0-9_]+",
                            o = new RegExp(`broker_${n}_dev`, "g"),
                            r = new RegExp(`hide_${n}_on_ios`, "g"),
                            i = new RegExp(`hide_${n}_on_android`, "g"),
                            a = new RegExp(`hide_${n}_on_mobile_web`, "g");
                        return -1 === t.indexOf(e) && -1 === e.indexOf("-maintenance") && !1 === o.test(e) && !1 === r.test(e) && !1 === i.test(e) && !1 === a.test(e)
                    }(t)) || (!e[t] || -1 !== e[t]) && (!!("true" === o.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "true" === user.settings[TradingView.FeatureToggle.force_prefix + t]) || !("false" === o.getItem(TradingView.FeatureToggle.force_prefix + t) || window.is_authenticated && "undefined" != typeof user && user.settings && "false" === user.settings[TradingView.FeatureToggle.force_prefix + t]) && (!!e[t] && (1 === e[t] || r(t) <= e[t])))
                }
                return TradingView.onWidget() || Promise.all([n.e(79665), n.e(34604)]).then(n.bind(n, 779665)).then((t => {
                    t.pushStreamMultiplexer.on("featuretoggle", (function(t) {
                        var n = s(t.name);
                        e[t.name] = t.state, n !== s(t.name) && a.fire(t.name)
                    }))
                })), s
            }(window.featureToggleState || {}), t.FeatureToggle = TradingView.FeatureToggle, t.isFeatureEnabled = TradingView.isFeatureEnabled, t.onFeaturesStateChanged = TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)
        },
        251954: (e, t, n) => {
            n.r(t), n.d(t, {
                unsubscribe: () => l,
                on: () => c,
                subscribe: () => u,
                subscribeToAll: () => d,
                emit: () => g,
                emitOnce: () => _
            });
            var o = n(869403),
                r = n.n(o);
            const i = {},
                a = [],
                s = {};

            function l(e, t, n) {
                i[e].unsubscribe(n, t)
            }

            function c(e, t, n) {
                u(e, t, n)
            }

            function u(e, t, n, o) {
                i.hasOwnProperty(e) || (i[e] = new(r())), s[e] ? t.call(n) : i[e].subscribe(n, t, o)
            }

            function d(e) {
                a.push(e)
            }

            function g(e, ...t) {
                const n = [e].concat(t);
                a.forEach((e => {
                    e.apply(null, n)
                })), i.hasOwnProperty(e) && i[e].fire.apply(i[e], t)
            }

            function _(e) {
                s[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), s[e] = !0, g.apply(null, arguments)
            }
        },
        799786: (e, t, n) => {
            n.r(t), n.d(t, {
                Modifiers: () => i.Modifiers,
                pressedKeys: () => o.pressedKeys,
                createGroup: () => o.createGroup,
                registerWindow: () => o.registerWindow,
                unregisterWindow: () => o.unregisterWindow
            });
            var o = n(486347),
                r = n(764250),
                i = n(591800),
                a = n(345848);
            (0, o.registerWindow)(window), r.ActionGroup.setMatchedHotkeyHandler((e => {
                (0, a.trackEvent)("Keyboard Shortcuts", (0, i.humanReadableHash)(e))
            }))
        },
        588948: (e, t, n) => {
            n.d(t, {
                updateInitData: () => a,
                getInitData: () => s,
                getFreshInitData: () => l,
                deleteField: () => c
            });
            var o = n(650151);
            const r = (0, n(272001).getLogger)("Common.InitData"),
                i = window.initData || {};

            function a() {
                window.initData && window.initData !== i && (Object.assign(i, window.initData), window.initData = i);
                const e = document.querySelectorAll('script[type="application/prs.init-data+json"]');
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    try {
                        const e = JSON.parse((0, o.ensureNotNull)(n.textContent));
                        Object.assign(i, e)
                    } catch (e) {
                        r.logWarn(`Failed to parse initData element. ${e}`)
                    } finally {
                        (0, o.ensureNotNull)(n.parentNode).removeChild(n)
                    }
                }
            }

            function s() {
                return i
            }

            function l() {
                return a(), i
            }

            function c(e) {
                delete i[e]
            }
        },
        49437: (e, t, n) => {
            const {
                getLogger: o
            } = n(272001), r = o("TVLocalStorage");
            var i = function() {
                try {
                    this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true")
                } catch (e) {
                    delete this.isAvailable, delete this.localStorage
                }
                this._updateLength();
                try {
                    this._report()
                } catch (e) {}
            };
            i.prototype._report = function() {
                if (this.isAvailable) {
                    const e = 10,
                        t = [];
                    for (let e = 0; e < this.localStorage.length; e++) {
                        const n = this.key(e);
                        t.push({
                            key: n,
                            length: String(this.getItem(n)).length
                        })
                    }
                    t.sort(((e, t) => t.length - e.length));
                    const n = t.slice(0, e);
                    t.sort(((e, t) => t.key.length - e.key.length));
                    const o = t.slice(0, e);
                    r.logNormal(`Total amount of keys in Local Storage: ${this.length}`), r.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(n)}`), r.logNormal(`Top ${e} longest key names: ${JSON.stringify(o)}`);
                    try {
                        navigator.storage.estimate().then((e => {
                            r.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                        }))
                    } catch (e) {}
                }
            }, i.prototype.length = 0, i.prototype.isAvailable = !1, i.prototype.localStorage = {
                "tvlocalstorage.available": "false"
            }, i.prototype._updateLength = function() {
                if (this.isAvailable) this.length = this.localStorage.length;
                else {
                    var e, t = 0;
                    for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                    this.length = t
                }
            }, i.prototype.key = function(e) {
                return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
            }, i.prototype.getItem = function(e) {
                return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
            }, i.prototype.setItem = function(e, t) {
                this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
            }, i.prototype.removeItem = function(e) {
                this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
            }, i.prototype.clear = function() {
                this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
            };
            var a = function(e) {
                this.storage = e
            };
            a.prototype.getItem = function(e) {
                return Promise.resolve(this.storage.getItem(e))
            }, a.prototype.setItem = function(e, t) {
                return Promise.resolve(this.storage.setItem(e, t))
            }, window.TVLocalStorage = new i, window.TVLocalStorageAsync = new a(window.TVLocalStorage), e.exports = {
                TVLocalStorage: window.TVLocalStorage,
                TVLocalStorageAsync: window.TVLocalStorageAsync
            }
        },
        314802: (e, t, n) => {
            n.d(t, {
                isOnMobileAppPage: () => r,
                urlWithMobileAppParams: () => i
            });
            var o = n(891343);

            function r(e, t = !1) {
                const {
                    searchParams: n
                } = new URL(String(location));
                let r = "true" === n.get("mobileapp_new"),
                    i = "true" === n.get("mobileapp");
                if (!t) {
                    const e = o.get("tv_app") || "";
                    r || (r = ["android", "android_nps"].includes(e)), i || (i = "ios" === e)
                }
                return !("new" !== e && "any" !== e || !r) || !("new" === e || !i)
            }

            function i(e, t = !1) {
                if (r("new", t)) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (r("old", t)) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        659863: (e, t, n) => {
            n.r(t), n.d(t, {
                qaGlobals: () => o
            });
            const o = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        776734: (e, t, n) => {
            async function o() {
                if (!window.user || window.user.do_not_track) return null; {
                    const e = (await Promise.all([n.e(26904), n.e(24081)]).then(n.bind(n, 823623))).getTrackerInstance();
                    return e || null
                }
            }
            n.d(t, {
                getTracker: () => o
            })
        },
        634786: (e, t, n) => {
            n.d(t, {
                trackCookies: () => r
            });
            var o = n(776734);
            async function r(e, t) {
                var n;
                let r, i;
                r = "/" === window.location.pathname ? "index" : window.location.pathname.split("/")[1];
                const a = null !== (n = window.user.pro_plan) && void 0 !== n ? n : window.is_authenticated ? "free" : "visitor";
                window.is_authenticated && (i = window.user.id);
                const s = await (0, o.getTracker)();
                s && s.trackToastDialog("cookies", e, t, r, a, i)
            }
        },
        345848: (e, t, n) => {
            n.d(t, {
                trackEvent: () => l,
                disableTrackingEvents: () => c
            });
            var o = n(251954),
                r = n(495046);
            const i = (0, n(272001).getLogger)("Common.TrackEvent"),
                a = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let s = !1;
            const l = (e, t, n) => {
                if (s) return;
                if (r.enabled("charting_library_base")) return void((e, t, n) => {
                    t = t || e || n || "";
                    let r = "";
                    for (let e = 0; e < a.length; e++) {
                        const n = t.match(a[e]);
                        if (n && 3 === n.length) {
                            t = n[1], r = n[2];
                            break
                        }
                    }(0, o.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: n,
                        value: r
                    })
                })(e, t, n);
                let l = (e ? e + ":" : "") + t;
                n && (l += " " + n), i.logNormal(l), r.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: n
                })
            };

            function c() {
                s = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = l)
        },
        777754: (e, t, n) => {
            n.r(t), n.d(t, {
                t: () => o
            });
            n(984919);

            function o(e, t = {}, i) {
                if (null === e) return Array.isArray(i) ? (i[r(t.count)] || i[0]).format(t.replace || t) : "object" == typeof i ? o(null, t, i[n.g.language] || i.en) : o(i, t);
                if (i && e) {
                    const n = `${e}${t.context?`_${t.context}`:""}`;
                    if (i[n]) return o(null, t, i[n])
                }
                return "number" == typeof e ? e.toString() : "string" != typeof e ? "" : (t.plural && 1 != +t.count ? t.plural : e).format(t.replace || t)
            }
            const r = {
                ca_ES: (e = 1) => +(1 != e),
                cs: (e = 1) => +(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
                el: (e = 1) => +(1 != e),
                da_DK: (e = 1) => +(1 != e),
                en: (e = 1) => +(1 != e),
                et_EE: (e = 1) => +(1 != e),
                fa: (e = 1) => 0,
                hu_HU: (e = 1) => 0,
                id_ID: (e = 1) => 0,
                it: (e = 1) => +(1 != e),
                ms_MY: (e = 1) => 0,
                no: (e = 1) => +(1 != e),
                nl_NL: (e = 1) => +(1 != e),
                ro: (e = 1) => +(1 == e ? 0 : e % 100 > 19 || e % 100 == 0 && 0 != e ? 2 : 1),
                sk_SK: (e = 1) => +(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
                sv: (e = 1) => +(1 != e),
                zh: (e = 1) => 0,
                zh_TW: (e = 1) => 0,
                de: (e = 1) => +(1 != e),
                es: (e = 1) => +(1 != e),
                fr: (e = 1) => +(e > 1),
                he_IL: (e = 1) => +(1 == e ? 0 : 2 == e ? 1 : e > 10 && e % 10 == 0 ? 2 : 3),
                ko: (e = 1) => 0,
                ja: (e = 1) => 0,
                pl: (e = 1) => +(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                pt: (e = 1) => +(1 != e),
                tr: (e = 1) => +(1 != e),
                vi: (e = 1) => 0,
                ar: (e = 1) => +(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5),
                ru: (e = 1) => +(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                th: (e = 1) => 0
            }[n.g.language]
        },
        869403: (e, t, n) => {
            e = n.nmd(e);
            const o = n(272001).getLogger("Common.Delegate");

            function r() {
                this._listeners = []
            }

            function i(e) {
                return !e.singleshot
            }
            r.prototype.subscribe = function(e, t, n) {
                const o = {
                    object: e,
                    member: t,
                    singleshot: !!n,
                    skip: !1
                };
                this._listeners.push(o)
            }, r.prototype.unsubscribe = function(e, t) {
                for (let n = 0; n < this._listeners.length; ++n) {
                    const o = this._listeners[n];
                    if (o.object === e && o.member === t) {
                        o.skip = !0, this._listeners.splice(n, 1);
                        break
                    }
                }
            }, r.prototype.unsubscribeAll = function(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const n = this._listeners[t];
                    n.object === e && (n.skip = !0, this._listeners.splice(t, 1))
                }
            }, r.prototype.destroy = function() {
                delete this._listeners
            }, r.prototype.fire = function() {
                const e = this._listeners;
                this._listeners = this._listeners.filter(i);
                const t = e.length;
                for (let n = 0; n < t; ++n) {
                    const t = e[n];
                    if (!t.skip) try {
                        t.member.apply(t.object || null, arguments)
                    } catch (e) {
                        o.logError(e.stack || e.message)
                    }
                }
            }, "undefined" != typeof window && (window.Delegate = r), e && e.exports && (e.exports = r)
        },
        43329: (e, t, n) => {
            function o(e, t) {
                return e <= t
            }

            function r(e, t) {
                return e >= t
            }

            function i(e, t, n) {
                return Math.min(Math.max(e, t), n)
            }

            function a(e) {
                return e < 0 ? -1 : e > 0 ? 1 : 0
            }

            function s(e) {
                if (e < 0) return !1;
                if (e > 1e18) return !0;
                for (let t = e; t > 1; t /= 10)
                    if (t % 10 != 0) return !1;
                return !0
            }

            function l(e, t, n) {
                return t - e <= n
            }

            function c(e, t, n) {
                return Math.abs(e - t) < n
            }

            function u(e) {
                return e <= 0 ? NaN : Math.log(e) / Math.log(10)
            }

            function d(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function g(e, t = d) {
                if (e.length < 1) throw Error("array is empty");
                let n = e[0];
                for (let o = 0; o < e.length; ++o) t(e[o], n) < 0 && (n = e[o]);
                return n
            }

            function _(e, t = d) {
                if (e.length < 1) throw Error("array is empty");
                let n = e[0];
                for (let o = 0; o < e.length; ++o) t(e[o], n) > 0 && (n = e[o]);
                return n
            }

            function h(e) {
                const t = Math.ceil(e);
                return t % 2 != 0 ? t - 1 : t
            }

            function f(e) {
                return e > 0 ? Math.floor(e) : Math.ceil(e)
            }
            n.r(t), n.d(t, {
                lessThan: () => o,
                greaterThan: () => r,
                clamp: () => i,
                sign: () => a,
                isBaseDecimal: () => s,
                greaterOrEqual: () => l,
                equal: () => c,
                log10: () => u,
                defComparator: () => d,
                min: () => g,
                max: () => _,
                ceiledEven: () => h,
                toInt: () => f
            })
        },
        890740: (e, t, n) => {
            n.d(t, {
                fetch: () => r
            });
            const o = (0, n(272001).getLogger)("Fetch");

            function r(e, t, n = {}) {
                {
                    t = t || {},
                        function(e) {
                            return new URL(e, document.baseURI).origin === location.origin
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const r = window.fetch(e, t);
                    return r.then((r => {
                        if (!r.ok) {
                            let i = "";
                            t.method && (i += `${t.method.toUpperCase()} `), i += e, i += `. Status ${r.status}`, r.statusText && (i += `. ${r.statusText}`), r.headers.via && (i += `. Via: ${r.headers.via}`), n.logBodyOnError && "string" == typeof t.body && (i += `. Body: ${t.body.slice(0,1024)}`), o.logError(i)
                        }
                        return r
                    }), (n => {
                        if (n && "AbortError" === n.name) return;
                        let r = "";
                        t.method && (r += `${t.method.toUpperCase()} `), r += e, navigator.onLine ? r += `. ${n}` : r += ". User is offline.", o.logError(r)
                    })), r
                }
            }
        },
        272001: (e, t, n) => {
            n.r(t), n.d(t, {
                LOGLEVEL: () => i,
                getLogLevel: () => p,
                isHighRateEnabled: () => m,
                setLogLevel: () => w,
                getRawLogHistory: () => y,
                serializeLogHistoryEntry: () => b,
                getLogHistory: () => v,
                getLogger: () => S,
                loggingOn: () => E,
                loggingOff: () => T
            });
            const o = "undefined" != typeof window ? window : {};
            let r = !1;
            try {
                localStorage.getItem(""), r = !0
            } catch (e) {}
            var i;
            ! function(e) {
                e[e.ERROR = 1] = "ERROR", e[e.WARNING = 2] = "WARNING", e[e.INFO = 3] = "INFO", e[e.NORMAL = 4] = "NORMAL", e[e.DEBUG = 5] = "DEBUG"
            }(i || (i = {}));
            let a = 0;
            const s = "tv.logger.loglevel",
                l = "tv.logger.logHighRate",
                c = [];
            let u = null,
                d = null,
                g = null,
                _ = NaN,
                h = i.WARNING,
                f = !1;

            function p() {
                return h
            }

            function m() {
                return f
            }

            function w(e) {
                e = Math.max(i.ERROR, Math.min(i.DEBUG, e)), h = e, A()
            }

            function y(e, t) {
                let n = c.reduce(((e, t) => e.concat(t)), []);
                return n.sort(((e, t) => e.id - t.id)), void 0 !== t && (n = n.filter((e => e.subSystemId === t))),
                    "number" == typeof e && (n = n.slice(-e)), n
            }

            function b(e) {
                return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
            }

            function v(e, t) {
                return function(e, t) {
                    let n, o = 0,
                        r = 0;
                    for (n = e.length - 1; n >= 1 && (o += 8 * (1 + encodeURIComponent(e[n]).length), !(n - 1 > 0 && (r = 8 * (1 + encodeURIComponent(e[n - 1]).length), o + r > t))); n--);
                    return e.slice(n)
                }(y(e, t).map(b), 75497472)
            }

            function k(e, t, n, o) {
                if (t === d && o.id === g) return;
                const r = new Date;
                if (e <= i.NORMAL && function(e, t, n, o, r) {
                        "function" == typeof structuredClone && (t = structuredClone(t));
                        const i = {
                            id: a,
                            message: t,
                            subSystemId: o,
                            timestamp: Number(e)
                        };
                        a += 1, n.push(i), void 0 !== r && n.length > r && n.splice(0, 1)
                    }(r, t, n, o.id, o.maxCount), e <= h && (!o.highRate || m()) && (!u || o.id.match(u))) {
                    const n = r.toISOString() + ":" + o.id + ":" + t;
                    switch (e) {
                        case i.DEBUG:
                            console.debug(n);
                            break;
                        case i.INFO:
                        case i.NORMAL:
                            o.color ? console.log("%c" + n, "color: " + o.color) : console.log(n);
                            break;
                        case i.WARNING:
                            console.warn(n);
                            break;
                        case i.ERROR:
                            console.error(n)
                    }
                    d = t, g = o.id, _ && clearTimeout(_), _ = setTimeout((() => {
                        d = null, g = null, _ = NaN
                    }), 1e3)
                }
            }

            function S(e, t = {}) {
                const n = [];
                c.push(n);
                const o = Object.assign(t, {
                    id: e
                });

                function r(e) {
                    return t => k(e, String(t), n, o)
                }
                return {
                    logDebug: r(i.DEBUG),
                    logError: r(i.ERROR),
                    logInfo: r(i.INFO),
                    logNormal: r(i.NORMAL),
                    logWarn: r(i.WARNING)
                }
            }
            const x = S("logger"),
                E = o.lon = (e, t) => {
                    w(i.DEBUG), x.logNormal("Debug logging enabled"), f = Boolean(e), u = t || null, A()
                },
                T = o.loff = () => {
                    w(i.INFO), x.logInfo("Debug logging disabled")
                };

            function A() {
                try {
                    r && (localStorage.setItem(l, String(f)), localStorage.setItem(s, String(h)))
                } catch (e) {
                    x.logWarn(`Cannot save logger state (level: ${h}, high-rate: ${f}) to localStorage: ${e.message}`)
                }
            }! function() {
                f = !!r && "true" === localStorage.getItem(l);
                let e = parseInt(r && localStorage.getItem(s) || "");
                Number.isNaN(e) && (e = i.WARNING), w(e), x.logNormal(`Init with settings - level: ${h}, high-rate: ${f}`)
            }(), o.performance && o.performance.now ? x.logNormal(`Sync logger and perf times, now is ${o.performance.now()}`) : x.logWarn("Perf time is not available")
        },
        768038: (e, t, n) => {
            n.r(t), n.d(t, {
                isRtl: () => r,
                stripLTRMarks: () => s,
                startWithLTR: () => l,
                forceLTRStr: () => c,
                forceLTRStrSsr: () => u,
                forceRTLStr: () => d,
                getLTRScrollLeft: () => g,
                getLTRScrollLeftOffset: () => _,
                detectAutoDirection: () => p
            });
            var o = n(64531);
            const r = () => "rtl" === window.document.dir,
                i = "‬",
                a = new RegExp("‎|‪|‫|‬", "g");

            function s(e) {
                return "" !== e && r() && null != e ? e.replace(a, "") : e
            }

            function l(e) {
                return "" !== e && r() && null != e ? "‎" + e : e
            }

            function c(e) {
                return "" !== e && r() && null != e ? "‪" + e + i : e
            }

            function u(e) {
                return "‪" + e + i
            }

            function d(e) {
                return "" !== e && r() && null != e ? "‫" + e + i : e
            }

            function g(e) {
                return (0, o.getNormalizedScrollLeft)(e, "rtl")
            }

            function _(e, t) {
                const n = (0, o.detectScrollType)();
                if ("indeterminate" === n) return 0;
                switch (n) {
                    case "negative":
                        t = e.clientWidth - e.scrollWidth + t;
                        break;
                    case "reverse":
                        t = e.scrollWidth - e.clientWidth - t
                }
                return t
            }
            const h = /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,
                f = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;

            function p(e) {
                const t = h.exec(e);
                return t ? f.test(t[0]) ? "rtl" : "ltr" : ""
            }
        },
        114968: (e, t, n) => {
            n.d(t, {
                userGeoInfo: () => a
            });
            var o = n(890740);
            const r = (0, n(272001).getLogger)("User.GeoInfo");
            let i;

            function a() {
                if (void 0 !== i) return i;
                return i = (0, o.fetch)("/check_language/", {
                    method: "POST"
                }).then((e => {
                    if (e.ok) return e.json();
                    throw new Error(e.statusText)
                })).catch((e => (r.logWarn(e.message), {}))), i
            }
        },
        891343: (e, t, n) => {
            function o(e, t, n, o, r) {
                let i = "";
                if (o = o ? "; path=" + o : "", r = r ? "; domain=" + r : "", n) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + e.toUTCString()
                } else i = "";
                document.cookie = e + "=" + t + i + r + o
            }

            function r(e) {
                const t = e + "=",
                    n = document.cookie.split(";");
                for (let e = 0; e < n.length; e++) {
                    let o = n[e];
                    for (;
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                }
                return null
            }
            n.d(t, {
                set: () => o,
                get: () => r
            })
        },
        120149: (e, t, n) => {
            function o(e, ...t) {
                return e && "object" == typeof e ? (0 === t.length || t.forEach((t => {
                    null != t && "object" == typeof t && Object.keys(t).forEach((n => {
                        const i = e[n],
                            a = t[n];
                        if (a === e) return;
                        const s = Array.isArray(a);
                        if (a && (r(a) || s)) {
                            let t;
                            t = s ? i && Array.isArray(i) ? i : [] : i && r(i) ? i : {}, e[n] = o(t, a)
                        } else void 0 !== a && (e[n] = a)
                    }))
                })), e) : e
            }

            function r(e) {
                if (!e || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                const t = Object.getPrototypeOf(e);
                if (!t) return !0;
                const n = Object.hasOwnProperty.toString,
                    o = t.hasOwnProperty("constructor") && t.constructor;
                return "function" == typeof o && n.call(o) === n.call(Object)
            }
            n.d(t, {
                deepExtend: () => o
            })
        },
        76797: (e, t, n) => {
            function o() {
                let e, t;
                return {
                    promise: new Promise(((n, o) => {
                        e = n, t = o
                    })),
                    reject: t,
                    resolve: e
                }
            }
            n.d(t, {
                createDeferredPromise: () => o
            })
        },
        777491: (e, t, n) => {
            n.r(t), n.d(t, {
                guid: () => r,
                randomHash: () => i,
                randomHashN: () => a
            });
            const o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function r() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function i() {
                return a(12)
            }

            function a(e) {
                let t = "";
                for (let n = 0; n < e; ++n) {
                    const e = Math.floor(Math.random() * o.length);
                    t += o[e]
                }
                return t
            }
        },
        587080: (e, t, n) => {
            function o(e) {
                e.preventDefault()
            }
            n.d(t, {
                preventDefault: () => o,
                preventDefaultForContextMenu: () => i
            });
            const r = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];

            function i(e) {
                const t = e.target;
                t && !t.closest(r.join(", ")) && e.preventDefault()
            }
        },
        10571: (e, t, n) => {
            function o(e, t = !1) {
                "loading" !== document.readyState ? t ? setTimeout((() => e()), 1) : e() : document.addEventListener("DOMContentLoaded", (() => e()))
            }
            n.d(t, {
                whenDocumentReady: () => o,
                whenDocumentReadyPromise: () => r
            });
            const r = new Promise((e => {
                o(e)
            }))
        }
    }
]);
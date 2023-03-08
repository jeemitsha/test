"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [24081], {
        188526: (e, i, a) => {
            a.d(i, {
                getSettings: () => d
            });
            var t = a(251954),
                s = a(638456),
                r = a(314802),
                n = a(261030),
                c = a(326904),
                o = a(125226);
            const l = window.initData.snowplowSettings;
            let _, g = "web",
                m = "";

            function d() {
                if (_) return _
            }(0, s.isDesktopApp)() && (g = "pc", m = "_desktop"), (0, r.isOnMobileAppPage)("old") ? (g = "mob", m = "_ios") : (0, r.isOnMobileAppPage)("new") && (g = "mob", m = "_android"), l && l.params && l.enabled && (_ = {
                collectorId: l.collectorId,
                url: l.url,
                params: {
                    appId: l.params.appId + m,
                    platform: g,
                    discoverRootDomain: !0,
                    contexts: {
                        webPage: !0,
                        performanceTiming: !0
                    },
                    eventMethod: "get",
                    maxLocalStorageQueueSize: 30,
                    anonymousTracking: !(0, o.isFeatureEnabled)("snowplow_settings_override") && !(0, n.getCookieSetting)(n.CookieSettings.Analytics) && {
                        withSessionTracking: !0
                    },
                    sessionCookieTimeout: (0, n.getCookieSetting)(n.CookieSettings.Analytics) ? 1800 : 7776e3
                }
            }), t.subscribe(n.cookieSettingsChangeEvent, ((e, i) => {
                (0, o.isFeatureEnabled)("snowplow_settings_override") || e === n.CookieSettings.Analytics && (i ? (0, c.snowplowTracker)("disableAnonymousTracking") : (0, c.snowplowTracker)("enableAnonymousTracking", {
                    withSessionTracking: !0
                }))
            }), null)
        },
        688638: (e, i, a) => {
            a.d(i, {
                SnowplowTrackerBase: () => c
            });
            var t = a(326904);
            const s = {
                "-": "+",
                _: "/",
                ".": "="
            };

            function r(e) {
                return function(e) {
                    const i = new Uint8Array(e.length);
                    for (let a = 0; a < e.length; a++) {
                        const t = e.charCodeAt(a);
                        i[a] = t
                    }
                    return i
                }(atob(e.replace(/[-_.]/g, (e => s[e]))))
            }

            function n(e) {
                const i = r(e);
                return new TextDecoder("utf-8").decode(i)
            }
            class c {
                constructor(e, i) {
                    (0, t.snowplowTracker)("newTracker", e.collectorId, e.url, e.params), this._schemes = i, this._collectorId = e.collectorId, this._setDiscardBrace(!0)
                }
                trackPageView() {
                    var e;
                    const i = [],
                        a = null === (e = this._schemes.amp_pageview) || void 0 === e ? void 0 : e.schema,
                        s = new URLSearchParams(window.location.search).get("sp_amp_linker");
                    if (s && void 0 !== a) {
                        const [, , , e] = s.split("*");
                        i.push({
                            schema: a,
                            data: {
                                ampClientId: n(e),
                                domainUserid: "",
                                userId: ""
                            }
                        })
                    }(0, t.snowplowTracker)("trackPageView", null, i)
                }
                _setDiscardBrace(e) {
                    (0, t.snowplowTracker)("discardBrace", e)
                }
                _trackSelfDescribingEvent(e, i) {
                    const a = this._wrapSelfDescribingData(e, i);
                    (0, t.snowplowTracker)("trackSelfDescribingEvent", a)
                }
                _wrapSelfDescribingData(e, i) {
                    const a = this._schemes[e];
                    if (void 0 === a) throw new Error("SelfDescribingEvent must have a schema");
                    return {
                        schema: a.schema,
                        data: i
                    }
                }
            }
        },
        823623: (e, i, a) => {
            a.r(i), a.d(i, {
                getTrackerInstance: () => _,
                Tracker: () => g
            });
            var t = a(326904),
                s = a(139687),
                r = a(960254),
                n = a(125226),
                c = a(188526),
                o = a(688638);
            let l = null;

            function _() {
                if (null === l) {
                    const e = (0, c.getSettings)();
                    void 0 !== e && (e.userId = window.user.id, l = new g(e), window.loginStateChange.subscribe(l, (() => {
                        l && l.setUserId(window.user.id)
                    })))
                }
                return l
            }
            class g extends o.SnowplowTrackerBase {
                constructor(e) {
                    super(e, s), this.setUserId(e.userId)
                }
                setUserId(e) {
                    (0, t.snowplowTracker)("setUserId", e)
                }
                trackPermissionDialog(e, i, a) {
                    var t;
                    const s = {
                        feature_id: e,
                        dialog_action: i,
                        user_id: a,
                        user_plan: null !== (t = window.user.pro_plan) && void 0 !== t ? t : window.is_authenticated ? "free" : "visitor"
                    };
                    this._trackSelfDescribingEvent("permission_dialogs", s)
                }
                trackStudiesAnalytics(e, i, a, t, s = "") {
                    const r = {
                        study_name: e,
                        study_package: i,
                        study_action: a,
                        is_strategy: t,
                        pro_plan: s
                    };
                    this._trackSelfDescribingEvent("studies_analytics", r)
                }
                trackDrawingsAnalytics(e, i, a) {
                    if ((0, n.isFeatureEnabled)("disable_snowplow_platform_events")) return;
                    const t = {
                        symbol_name: e,
                        drawing_name: i,
                        drawing_action: a
                    };
                    this._trackSelfDescribingEvent("drawings_analytics", t)
                }
                trackChartApiDrawingCreation(e) {
                    const i = {
                        drawing_name: e
                    };
                    this._trackSelfDescribingEvent("chart_api_drawing_creation", i)
                }
                trackBarReplayAnalytics(e, i) {
                    const a = {
                        bar_replay_action: e,
                        bar_replay_action_data: null != i ? i : null,
                        enable_new_replay: !0
                    };
                    this._trackSelfDescribingEvent("bar_replay_analytics", a)
                }
                trackChartStyle(e) {
                    const i = {
                        style_name: e
                    };
                    this._trackSelfDescribingEvent("chart_styles", i)
                }
                trackChartSymbols(e, i, a, t) {
                    const s = {
                        symbol_name: e,
                        symbol_type: i,
                        layout_type: a,
                        chart_id: t
                    };
                    this._trackSelfDescribingEvent("chart_symbols", s)
                }
                trackShowDinoDialog(e, i) {
                    const a = {
                        dialog_type: e,
                        action: i
                    };
                    this._trackSelfDescribingEvent("dino_dialog", a)
                }
                trackRefunds(e, i, a, t) {
                    const s = {
                        action: e,
                        segment: i,
                        plan: a,
                        billing_cycle: t
                    };
                    this._trackSelfDescribingEvent("refunds", s)
                }
                trackSolutionWatch(e, i, a) {
                    const t = {
                        solution_id: e,
                        popular: i,
                        lang: a
                    };
                    this._trackSelfDescribingEvent("solutions_watch", t)
                }
                trackSolutionNodeWatch(e, i, a, t) {
                    const s = {
                        node_id: e,
                        node_type: i,
                        title: a,
                        lang: t
                    };
                    this._trackSelfDescribingEvent("solutions_nodes_watch", s)
                }
                trackSolutionSkip(e, i, a, t) {
                    const s = {
                        node_id: e,
                        node_type: i,
                        title: a,
                        lang: t
                    };
                    this._trackSelfDescribingEvent("solutions_skip", s)
                }
                trackSolutionSendTicket(e, i, a, t) {
                    const s = {
                        category_id: e,
                        folder_id: a,
                        solution_id: t,
                        lang: i
                    };
                    this._trackSelfDescribingEvent("solutions_send_ticket", s)
                }
                trackTrial(e, i, a, t) {
                    const s = {
                        product_id: e,
                        billing_cycle: i,
                        action: a,
                        merchant: t,
                        is_two_weeks_discounts: (0, n.isFeatureEnabled)("two_weeks_annual_discounts")
                    };
                    this._trackSelfDescribingEvent("trials", s)
                }
                trackNewsClick(e) {
                    this._trackSelfDescribingEvent("news_clicks", e)
                }
                trackNewsEvent(e) {
                    this._trackSelfDescribingEvent("news_events", e)
                }
                trackGoproVisits(e, i, a) {
                    const t = {
                        source: e,
                        feature: i,
                        outcome: a
                    };
                    this._trackSelfDescribingEvent("gopro_visits", t)
                }
                trackFollow(e, i, a, t, s) {
                    const r = {
                        follow_type: e,
                        action: i,
                        author_id: a,
                        symbol: t,
                        symbol_type: s
                    };
                    this._trackSelfDescribingEvent("follow", r)
                }
                trackFullFeaturedChartButton(e, i, a) {
                    const t = {
                        user_id: e,
                        page: i,
                        source: a
                    };
                    this._trackSelfDescribingEvent("full_featured_chart_button", t)
                }
                trackRefLinkAction(e, i, a) {
                    const t = {
                        ref: e,
                        action: i,
                        source: a
                    };
                    this._trackSelfDescribingEvent("referral_ref_link", t)
                }
                trackReferralVisit(e, i) {
                    const a = {
                        source: e,
                        feature: i
                    };
                    this._trackSelfDescribingEvent("referral_visits", a)
                }
                trackTradingBrokerConnnected(e, i, a) {
                    const t = {
                        broker_id: e,
                        account_type: i,
                        user_id: a
                    };
                    this._trackSelfDescribingEvent("trading_broker_connection_status", t)
                }
                trackTradingOrder(e) {
                    this._trackSelfDescribingEvent("trading_order_status", e)
                }
                trackTradingOrderWidget(e) {
                    this._trackSelfDescribingEvent("trading_order_widget", e)
                }
                trackPhoneVerificationDialog(e, i, a) {
                    this._trackSelfDescribingEvent("phone_verification_dialog", {
                        action: e,
                        feature_source: i,
                        page: a
                    })
                }
                trackCopyCodes(e) {
                    const i = {
                        type_2fa: e
                    };
                    this._trackSelfDescribingEvent("copy_reserve_codes", i)
                }
                trackTVCoinsDialogWatch(e, i) {
                    this._trackSelfDescribingEvent("tv_coins_dialog_watch", {
                        page: e,
                        tab: i
                    })
                }
                trackBurgerMenuClick(e) {
                    this._trackSelfDescribingEvent("burger_menu_click", {
                        source: e
                    })
                }
                trackChangeProPlan(e, i, a, t, s) {
                    const r = {
                        product_id: e,
                        from_product_id: i,
                        action: a,
                        days_left: null,
                        from_billing_cycle: t,
                        to_billing_cycle: s
                    };
                    this._trackSelfDescribingEvent("change_pro_plan", r)
                }
                trackUnsubscribeDialog(e, i, a, t) {
                    this._trackSelfDescribingEvent("unsubscribe_dialog", {
                        page: a,
                        action: t,
                        product_id: e,
                        billing_cycle: i
                    })
                }
                trackChat(e, i, a, t) {
                    const s = {
                        chatroom_id: e,
                        is_chatroom: i,
                        is_private: a,
                        locale: t
                    };
                    this._trackSelfDescribingEvent("chat", s)
                }
                trackBrokerBrandingBanner(e) {
                    this._trackSelfDescribingEvent("broker_brandig_banner", e)
                }
                trackBrokerProfileLinksClick(e) {
                    this._trackSelfDescribingEvent("broker_profile_links_click", e)
                }
                trackStreamsActions(e, i, a, t) {
                    this._trackSelfDescribingEvent("streams_actions", {
                        locale: e,
                        action: i,
                        stream_id: a,
                        extra: t
                    })
                }
                trackStreamsViewingDuration(e, i, a, t) {
                    this._trackSelfDescribingEvent("streams_viewing_duration", {
                        locale: e,
                        stream_time: i,
                        source: a,
                        stream_id: t
                    })
                }
                trackBrokerOpenAccount(e) {
                    this._trackSelfDescribingEvent("broker_open_account", e)
                }
                trackFinancialsDialog(e, i) {
                    this._trackSelfDescribingEvent("financials_dialog", {
                        symbol: e,
                        source: i
                    })
                }
                trackChangeSymbol(e, i) {
                    (0, n.isFeatureEnabled)("disable_snowplow_platform_events") || this._trackSelfDescribingEvent("change_symbol", {
                        symbol: e,
                        source: i
                    })
                }
                trackPaymentOrderDialogInitial(e, i, a) {
                    this._trackSelfDescribingEvent("payment_order_dialog_initial", {
                        step: e,
                        products: i,
                        billing_cycle: a
                    })
                }
                trackPaymentOrderDialogChanges(e, i) {
                    this._trackSelfDescribingEvent("payment_order_dialog_changes", {
                        value: i,
                        action: e
                    })
                }
                trackGoproCardsClicks(e, i) {
                    this._trackSelfDescribingEvent("gopro_cards_clicks", {
                        component: e,
                        value: i
                    })
                }
                trackSearchToolbar(e, i, a) {
                    this._trackSelfDescribingEvent("search_toolbar", {
                        search_type: e,
                        search_input: i,
                        search_result: a
                    })
                }
                trackAppLinkClick(e, i, a, t) {
                    this._trackSelfDescribingEvent("app_link", {
                        source: e,
                        medium: i,
                        campaign: a,
                        app_platform: t
                    })
                }
                trackAppBannerClick(e, i, a, t, s) {
                    this._trackSelfDescribingEvent("app_banner", {
                        source: e,
                        medium: i,
                        campaign: a,
                        action: t,
                        destination: s
                    })
                }
                trackScreenerHighLevel(e, i, a) {
                    this._trackSelfDescribingEvent("screener_high_level", {
                        event: e.event,
                        source: e.source,
                        location: e.location,
                        state: e.state,
                        value: e.value,
                        screener_type: i,
                        screener_source: a
                    })
                }
                trackScreenerClickEvent(e) {
                    this._trackSelfDescribingEvent("screener_new_clicks", {
                        screener_source: e.screener_source,
                        screener_type: e.screener_type,
                        button_id: e.button_id,
                        data_id: e.data_id
                    })
                }
                trackIdeaAction(e) {
                    this._trackSelfDescribingEvent("idea_events", {
                        picked_time: "",
                        author_plan: "",
                        author_reputation: "",
                        author_count_ideas: 0,
                        author_scripts: 0,
                        author_likes: 0,
                        author_followers: 0,
                        idea_lock: !1,
                        ...e
                    })
                }
                trackMarketHeatmapEvent(e) {
                    this._trackSelfDescribingEvent("market_heatmap_events", {
                        event_name: e.event_name,
                        market_type: e.market_type,
                        dataset: e.dataset,
                        color_parameter: e.color_parameter,
                        size_parameter: e.size_parameter,
                        is_monosize: e.is_monosize,
                        is_fullscreen: e.is_fullscreen,
                        group_by: e.group_by,
                        active_group: e.active_group,
                        multiplier: e.multiplier,
                        has_filters: e.has_filters
                    })
                }
                trackThreeDSecure(e) {
                    this._trackSelfDescribingEvent("three_d_secure", {
                        type: e.type,
                        issuing_bank: e.issuing_bank,
                        country_of_issuance: e.country_of_issuance,
                        liability_shifted: e.liability_shifted,
                        liability_shift_possible: e.liability_shift_possible,
                        status: e.status,
                        eci_flag: e.eci_flag,
                        three_d_secure_version: e.three_d_secure_version,
                        enrolled: e.enrolled,
                        amount: e.amount,
                        currency_code: e.currency_code,
                        pares_status: e.pares_status,
                        signature_verification: e.signature_verification
                    })
                }
                trackToastDialog(e, i, a, t, s, r) {
                    this._trackSelfDescribingEvent("toast_dialog", {
                        toast_type: e,
                        action: i,
                        title: a,
                        placement: t,
                        user_plan: s,
                        user_id: r,
                        symbol_type: ""
                    })
                }
                trackAdDialog(e, i, a, t, s) {
                    this._trackSelfDescribingEvent("ad_dialog", {
                        ad_unit: e,
                        placement: i,
                        action: a,
                        filled: t,
                        user_plan: s,
                        symbol_type: ""
                    })
                }
                trackToolbarButtonClick(e, i, a) {
                    if ((0, n.isFeatureEnabled)("disable_snowplow_platform_events") && !a) return;
                    const t = window.is_authenticated ? window.user.pro_plan || r.ProPlans.Free : "visitor";
                    this._trackSelfDescribingEvent("toolbar_button_click", {
                        area: e,
                        button: i,
                        user_plan: t
                    })
                }
                trackBottomToolbarButtonClick(e) {
                    if (!(0, n.isFeatureEnabled)("bottom_panel_track_events")) return;
                    const i = window.is_authenticated ? window.user.pro_plan || r.ProPlans.Free : "visitor";
                    this._trackSelfDescribingEvent("toolbar_button_click", {
                        area: "bottom panel",
                        button: e,
                        user_plan: i
                    })
                }
                trackSparksEvent(e, i) {
                    this._trackSelfDescribingEvent("sparks", {
                        slug_name: e,
                        action: i
                    })
                }
                trackLongerBillingCycleEvent() {
                    this._trackSelfDescribingEvent("longer_billing_cycle_offer", {
                        action: "open"
                    })
                }
                trackMarketDataSolutionEvent(e) {
                    this._trackSelfDescribingEvent("market_data_solution", {
                        symbol: e
                    })
                }
                trackEditorEvent(e) {
                    this._trackSelfDescribingEvent("pine_editor_events", e)
                }
                trackCareersLinkEvent(e) {
                    this._trackSelfDescribingEvent("careers_link_click", e)
                }
                trackFeaturedBrokerPlacementEvent(e) {
                    this._trackSelfDescribingEvent("featured_placement", e)
                }
                trackToolbarIndicators(e, i, a) {
                    this._trackSelfDescribingEvent("toolbar_indicators", {
                        tab: e,
                        bubble: i,
                        script_id: a,
                        feature_toggle: "recsys_off"
                    })
                }
                trackMindEvent(e) {
                    this._trackSelfDescribingEvent("mind_events", e)
                }
                trackSignupPopupDialogEvent(e, i, a) {
                    this._trackSelfDescribingEvent("signup_popup_dialog", {
                        action: e,
                        title: i,
                        source: a
                    })
                }
            }
        },
        960254: (e, i, a) => {
            var t, s, r;
            a.d(i, {
                    ProPlans: () => t,
                    BrokerPlans: () => s,
                    BrokerPlansIds: () => r
                }),
                function(e) {
                    e.Free = "free", e.Pro = "pro", e.ProTrial = "pro_trial", e.ProRealtime = "pro_realtime", e.ProRealtimeTrial = "pro_realtime_trial", e.ProPremium = "pro_premium", e.ProPremiumTrial = "pro_premium_trial"
                }(t || (t = {})),
                function(e) {
                    e.Platinum = "platinum", e.Gold = "gold", e.Silver = "silver", e.Free = "free"
                }(s || (s = {})),
                function(e) {
                    e[e.Platinum = 3] = "Platinum", e[e.Gold = 2] = "Gold", e[e.Silver = 1] = "Silver", e[e.Free = 0] = "Free"
                }(r || (r = {}))
        },
        139687: e => {
            e.exports = JSON.parse('{"permission_dialogs":{"schema":"iglu:com.tradingview/permission_dialogs/jsonschema/1-0-0"},"studies_analytics":{"schema":"iglu:com.tradingview/studies_analytics_v2/jsonschema/1-0-0"},"drawings_analytics":{"schema":"iglu:com.tradingview/drawings_analytics/jsonschema/1-0-0"},"bar_replay_analytics":{"schema":"iglu:com.tradingview/bar_replay_analytics/jsonschema/1-0-0"},"chart_api_drawing_creation":{"schema":"iglu:com.tradingview/chart_api_drawing_creation/jsonschema/1-0-0"},"chart_symbols":{"schema":"iglu:com.tradingview/chart_symbols/jsonschema/1-0-0"},"chart_styles":{"schema":"iglu:com.tradingview/chart_styles/jsonschema/1-0-0"},"dino_dialog":{"schema":"iglu:com.tradingview/dino_dialog/jsonschema/1-0-0"},"solutions_watch":{"schema":"iglu:com.tradingview/solutions_watch/jsonschema/1-0-0"},"solutions_send_ticket":{"schema":"iglu:com.tradingview/solutions_send_ticket/jsonschema/1-0-0"},"solutions_nodes_watch":{"schema":"iglu:com.tradingview/solutions_nodes_watch/jsonschema/1-0-0"},"solutions_skip":{"schema":"iglu:com.tradingview/solutions_skip/jsonschema/1-0-0"},"user_signup":{"schema":"iglu:com.tradingview/user_signup/jsonschema/1-0-0"},"trials":{"schema":"iglu:com.tradingview/trials/jsonschema/1-0-0"},"refund_transactions":{"schema":"iglu:com.tradingview/refund_transactions/jsonschema/1-0-0"},"billing":{"schema":"iglu:com.tradingview/billing/jsonschema/1-0-0"},"subscription_renewal":{"schema":"iglu:com.tradingview/subscription_renewal/jsonschema/1-0-0"},"subscription_removal":{"schema":"iglu:com.tradingview/subscription_removal/jsonschema/1-0-0"},"chargeback":{"schema":"iglu:com.tradingview/chargeback/jsonschema/1-0-0"},"news_clicks":{"schema":"iglu:com.tradingview/news_clicks/jsonschema/1-0-0"},"news_events":{"schema":"iglu:com.tradingview/news_events/jsonschema/1-0-0"},"gopro_visits":{"schema":"iglu:com.tradingview/gopro_visits/jsonschema/1-0-0"},"logins":{"schema":"iglu:com.tradingview/logins/jsonschema/1-0-0"},"referral_signup":{"schema":"iglu:com.tradingview/referral_signup/jsonschema/1-0-0"},"referral_income":{"schema":"iglu:com.tradingview/referral_income/jsonschema/1-0-0"},"referral_spending":{"schema":"iglu:com.tradingview/referral_spending/jsonschema/1-0-0"},"referral_ref_link":{"schema":"iglu:com.tradingview/referral_ref_link/jsonschema/1-0-0"},"referral_visits":{"schema":"iglu:com.tradingview/referral_visits/jsonschema/1-0-0"},"follow":{"schema":"iglu:com.tradingview/follow/jsonschema/1-0-0"},"full_featured_chart_button":{"schema":"iglu:com.tradingview/full_featured_chart_button/jsonschema/1-0-0"},"publish_ideas":{"schema":"iglu:com.tradingview/publish_ideas/jsonschema/1-0-0"},"idea_update_created":{"schema":"iglu:com.tradingview/idea_update_created/jsonschema/1-0-0"},"idea_posting_comments":{"schema":"iglu:com.tradingview/idea_posting_comments/jsonschema/1-0-0"},"publish_scripts":{"schema":"iglu:com.tradingview/publish_scripts/jsonschema/1-0-0"},"idea_likes":{"schema":"iglu:com.tradingview/idea_likes/jsonschema/1-0-0"},"trading_broker_connection_status":{"schema":"iglu:com.tradingview/trading_broker_connection_status/jsonschema/1-0-0"},"trading_order_status":{"schema":"iglu:com.tradingview/trading_order_status/jsonschema/1-0-0"},"trading_order_widget":{"schema":"iglu:com.tradingview/trading_order_widget/jsonschema/1-0-0"},"switch_year_to_month_after_fail":{"schema":"iglu:com.tradingview/switch_year_to_month_after_fail/jsonschema/1-0-0"},"switching_yearly_to_monthly":{"schema":"iglu:com.tradingview/switching_yearly_to_monthly/jsonschema/1-0-0"},"phone_verification_dialog":{"schema":"iglu:com.tradingview/phone_verification_dialog/jsonschema/1-0-0"},"copy_reserve_codes":{"schema":"iglu:com.tradingview/copy_reserve_codes/jsonschema/1-0-0"},"tv_coins_dialog_watch":{"schema":"iglu:com.tradingview/tv_coins_dialog_watch/jsonschema/1-0-0"},"set_script_permission":{"schema":"iglu:com.tradingview/set_script_permission/jsonschema/1-0-0"},"remove_script_permission":{"schema":"iglu:com.tradingview/remove_script_permission/jsonschema/1-0-0"},"change_pro_plan":{"schema":"iglu:com.tradingview/change_pro_plan/jsonschema/1-0-0"},"unsubscribe_feedback":{"schema":"iglu:com.tradingview/unsubscribe_feedback/jsonschema/1-0-0"},"unsubscribe_dialog":{"schema":"iglu:com.tradingview/unsubscribe_dialog/jsonschema/1-0-0"},"fail_on_duplicate_bt_payment_method":{"schema":"iglu:com.tradingview/fail_on_duplicate_bt_payment_method/jsonschema/1-0-0"},"trial_block_event":{"schema":"iglu:com.tradingview/trial_block_event/jsonschema/1-0-0"},"chat":{"schema":"iglu:com.tradingview/chat/jsonschema/1-0-0"},"broker_brandig_banner":{"schema":"iglu:com.tradingview/broker_brandig_banner/jsonschema/1-0-0"},"broker_profile_links_click":{"schema":"iglu:com.tradingview/broker_profile_links_click/jsonschema/1-0-0"},"streams_actions":{"schema":"iglu:com.tradingview/streams_actions/jsonschema/1-0-0"},"streams_settings_created":{"schema":"iglu:com.tradingview/streams_settings_created/jsonschema/1-0-0"},"streams_viewing_duration":{"schema":"iglu:com.tradingview/streams_viewing_duration/jsonschema/1-0-0"},"broker_open_account":{"schema":"iglu:com.tradingview/broker_open_account/jsonschema/1-0-0"},"financials_dialog":{"schema":"iglu:com.tradingview/financials_dialog/jsonschema/1-0-0"},"payment_order_dialog_initial":{"schema":"iglu:com.tradingview/payment_order_dialog_initial/jsonschema/1-0-0"},"payment_order_dialog_changes":{"schema":"iglu:com.tradingview/payment_order_dialog_changes/jsonschema/1-0-0"},"gopro_cards_clicks":{"schema":"iglu:com.tradingview/gopro_cards_clicks/jsonschema/1-0-0"},"search_toolbar":{"schema":"iglu:com.tradingview/search_toolbar/jsonschema/1-0-0"},"change_symbol":{"schema":"iglu:com.tradingview/change_symbol/jsonschema/1-0-0"},"burger_menu_click":{"schema":"iglu:com.tradingview/burger_menu_click/jsonschema/1-0-0"},"app_banner":{"schema":"iglu:com.tradingview/app_banner/jsonschema/1-0-0"},"app_link":{"schema":"iglu:com.tradingview/app_link/jsonschema/1-0-0"},"screener_high_level":{"schema":"iglu:com.tradingview/screener_high_level/jsonschema/1-0-0"},"screener_new_clicks":{"schema":"iglu:com.tradingview/screener_new_clicks/jsonschema/1-0-0"},"widget_tv_link_click":{"schema":"iglu:com.tradingview/widget_tv_link_click/jsonschema/1-0-0"},"page_unload":{"schema":"iglu:com.tradingview/page_unload/jsonschema/1-0-0"},"idea_events":{"schema":"iglu:com.tradingview/idea_events/jsonschema/1-0-0"},"market_heatmap_events":{"schema":"iglu:com.tradingview/market_heatmap_events/jsonschema/1-0-0"},"toast_dialog":{"schema":"iglu:com.tradingview/toast_dialog/jsonschema/1-0-0"},"ad_dialog":{"schema":"iglu:com.tradingview/ad_dialog/jsonschema/1-0-0"},"toolbar_button_click":{"schema":"iglu:com.tradingview/toolbar_button_click/jsonschema/1-0-0"},"amp_pageview":{"schema":"iglu:dev.amp.snowplow/amp_id/jsonschema/1-0-0"},"sparks":{"schema":"iglu:com.tradingview/sparks/jsonschema/1-0-0"},"longer_billing_cycle_offer":{"schema":"iglu:com.tradingview/longer_billing_cycle_offer/jsonschema/1-0-0"},"market_data_solution":{"schema":"iglu:com.tradingview/market_data_solution/jsonschema/1-0-0"},"pine_editor_events":{"schema":"iglu:com.tradingview/pine_editor_events/jsonschema/1-0-0"},"three_d_secure":{"schema":"iglu:com.tradingview/three_d_secure/jsonschema/1-0-0"},"careers_link_click":{"schema":"iglu:com.tradingview/careers_link_click/jsonschema/1-0-0"},"featured_placement":{"schema":"iglu:com.tradingview/featured_placement/jsonschema/1-0-0"},"toolbar_indicators":{"schema":"iglu:com.tradingview/toolbar_indicators/jsonschema/1-0-0"},"ui_events":{"schema":"iglu:com.tradingview/ui_events/jsonschema/1-0-0"},"mind_events":{"schema":"iglu:com.tradingview/mind_events/jsonschema/1-0-0"},"signup_popup_dialog":{"schema":"iglu:com.tradingview/signup_popup_dialog/jsonschema/1-0-0"}}')
        }
    }
]);
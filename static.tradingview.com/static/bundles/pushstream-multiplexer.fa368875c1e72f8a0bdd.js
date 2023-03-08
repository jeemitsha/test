(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [34604], {
        650151: (e, t) => {
            "use strict";

            function o(e, t) {
                if (void 0 === e) throw new Error("".concat(null != t ? t : "Value", " is undefined"));
                return e
            }

            function r(e, t) {
                if (null === e) throw new Error("".concat(null != t ? t : "Value", " is null"));
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ensureNever = t.ensure = t.ensureNotNull = t.ensureDefined = t.assert = void 0, t.assert = function(e, t) {
                if (!e) throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
            }, t.ensureDefined = o, t.ensureNotNull = r, t.ensure = function(e, t) {
                return r(o(e, t), t)
            }, t.ensureNever = function(e) {}
        },
        251954: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                unsubscribe: () => i,
                on: () => l,
                subscribe: () => c,
                subscribeToAll: () => u,
                emit: () => d,
                emitOnce: () => h
            });
            var r = o(869403),
                s = o.n(r);
            const n = {},
                _ = [],
                a = {};

            function i(e, t, o) {
                n[e].unsubscribe(o, t)
            }

            function l(e, t, o) {
                c(e, t, o)
            }

            function c(e, t, o, r) {
                n.hasOwnProperty(e) || (n[e] = new(s())), a[e] ? t.call(o) : n[e].subscribe(o, t, r)
            }

            function u(e) {
                _.push(e)
            }

            function d(e, ...t) {
                const o = [e].concat(t);
                _.forEach((e => {
                    e.apply(null, o)
                })), n.hasOwnProperty(e) && n[e].fire.apply(n[e], t)
            }

            function h(e) {
                a[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), a[e] = !0, d.apply(null, arguments)
            }
        },
        314802: (e, t, o) => {
            "use strict";
            o.d(t, {
                isOnMobileAppPage: () => s,
                urlWithMobileAppParams: () => n
            });
            var r = o(891343);

            function s(e, t = !1) {
                const {
                    searchParams: o
                } = new URL(String(location));
                let s = "true" === o.get("mobileapp_new"),
                    n = "true" === o.get("mobileapp");
                if (!t) {
                    const e = r.get("tv_app") || "";
                    s || (s = ["android", "android_nps"].includes(e)), n || (n = "ios" === e)
                }
                return !("new" !== e && "any" !== e || !s) || !("new" === e || !n)
            }

            function n(e, t = !1) {
                if (s("new", t)) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp_new", "true"), e = t.toString()
                }
                if (s("old", t)) {
                    const t = new URL(e, location.href);
                    t.searchParams.set("mobileapp", "true"), e = t.toString()
                }
                return e
            }
        },
        659863: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                qaGlobals: () => r
            });
            const r = new class {
                constructor(e, t) {
                    this._test = e[t] = {}
                }
                provide(e, t) {
                    this._test[e] = t
                }
            }(window, "qaGlobals")
        },
        345848: (e, t, o) => {
            "use strict";
            o.d(t, {
                trackEvent: () => i,
                disableTrackingEvents: () => l
            });
            var r = o(251954),
                s = o(495046);
            const n = (0, o(272001).getLogger)("Common.TrackEvent"),
                _ = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/];
            let a = !1;
            const i = (e, t, o) => {
                if (a) return;
                if (s.enabled("charting_library_base")) return void((e, t, o) => {
                    t = t || e || o || "";
                    let s = "";
                    for (let e = 0; e < _.length; e++) {
                        const o = t.match(_[e]);
                        if (o && 3 === o.length) {
                            t = o[1], s = o[2];
                            break
                        }
                    }(0, r.emit)(t.toLowerCase().replace(" ", "_"), {
                        category: e,
                        label: o,
                        value: s
                    })
                })(e, t, o);
                let i = (e ? e + ":" : "") + t;
                o && (i += " " + o), n.logNormal(i), s.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                    event_category: e,
                    event_label: o
                })
            };

            function l() {
                a = !0
            }
            "undefined" != typeof window && (window.TradingView = window.TradingView || {}, window.TradingView.trackEvent = i)
        },
        226722: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                TVXWindowEvents: () => _,
                getScopedTVXWindowEvents: () => a
            });
            o(984919);
            var r = o(272001),
                s = o(49437);
            const n = (0, r.getLogger)("XWindowEvents");
            var _;

            function a(e) {
                return {
                    on: (t, o) => _.on(`${e}.${t}`, o),
                    off: (t, o) => _.off(`${e}.${t}`, o),
                    emit: (t, o) => _.emit(`${e}.${t}`, o)
                }
            }! function(e) {
                const t = "tvxwevents.",
                    o = {};
                let r;
                window.BroadcastChannel ? (r = new BroadcastChannel("tvxwevents"), r.addEventListener("message", (function(e) {
                    const {
                        data: {
                            event: t,
                            value: r
                        }
                    } = e;
                    o[t] && o[t].forEach((e => {
                        e(r)
                    }))
                })), function() {
                    const e = [],
                        o = performance.now();
                    for (let o = 0; o < s.TVLocalStorage.length; o++) {
                        const r = s.TVLocalStorage.key(o);
                        r.startsWith(t) && e.push(r)
                    }
                    const r = s.TVLocalStorage.length;
                    for (const t of e) s.TVLocalStorage.removeItem(t);
                    const _ = performance.now() - o;
                    n.logNormal(`Total keys amount in local storage on operation start: ${r}`), n.logNormal(`Keys amount in local storage to be deleted: ${e.length}`), n.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`), n.logNormal(`Removing keys from local storage took ${_} ms`)
                }()) : window.addEventListener("storage", (function(e) {
                    const {
                        newValue: r,
                        key: n
                    } = e;
                    if (null === r || !n || !n.startsWith(t)) return;
                    const _ = n.substring(t.length);
                    o[_] && o[_].forEach((t => {
                        t(e.newValue)
                    }));
                    s.TVLocalStorage.removeItem(n)
                })), e.on = function(e, t) {
                    o[e] || (o[e] = []), o[e].push(t)
                }, e.off = function(e, t) {
                    if (!o[e]) return;
                    const r = o[e].indexOf(t); - 1 !== r && (1 === o[e].length ? delete o[e] : o[e].splice(r, 1))
                }, e.emit = function(e, o = Date.now()) {
                    try {
                        r ? r.postMessage({
                            event: e,
                            value: o
                        }) : s.TVLocalStorage.setItem(t + e, o.toString())
                    } catch (e) {
                        n.logError(e.message)
                    }
                }
            }(_ || (_ = {}))
        },
        495046: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                disable: () => u,
                enable: () => c,
                enabled: () => i,
                getAllFeatures: () => d,
                setEnabled: () => l
            });
            const r = JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"show_context_menu_in_crosshair_if_only_one_item":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"tv_production":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","adaptive_trading_sources","chart_style_hilo_last_price"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","adaptive_trading_sources"]}}');
            var s = o.t(r, 2);
            const n = new Map,
                _ = new Map,
                a = new Set;

            function i(e) {
                const t = n.get(e);
                if (void 0 !== t) return t;
                const o = _.get(e);
                return !!o && o.some(i)
            }

            function l(e, t) {
                n.set(String(e), Boolean(t))
            }

            function c(e) {
                l(e, !0)
            }

            function u(e) {
                l(e, !1)
            }

            function d() {
                const e = Object.create(null);
                for (const t of a) e[t] = i(t);
                return e
            }! function() {
                for (const [e, t] of Object.entries(s))
                    if (a.add(e), "subsets" in t)
                        for (const o of t.subsets) {
                            a.add(o);
                            let t = _.get(o);
                            void 0 === t && (t = [], _.set(o, t)), t.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(u), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(c)
            }()
        },
        758337: function(e, t, o) {
            var r;
            e = o.nmd(e);
            var s = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                n = function(e) {
                    return "object" == typeof e && null !== e
                };

            function _(e) {
                return "number" == typeof e && isFinite(e)
            }

            function a(e) {
                return null != e && e.constructor === Function
            }

            function i(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            "undefined" != typeof window ? (r = window.TradingView = window.TradingView || {}, window.isNumber = _, window.isFunction = a, window.inherit = i, window.isArray = s) : r = this.TradingView = this.TradingView || {}, r.isNaN = function(e) {
                return !(e <= 0 || e > 0)
            }, r.isAbsent = function(e) {
                return null == e
            }, r.isExistent = function(e) {
                return null != e
            }, Number.isNaN = Number.isNaN || function(e) {
                return e != e
            }, r.isSameType = function(e, t) {
                return Number.isNaN(e) || Number.isNaN(t) ? Number.isNaN(e) === Number.isNaN(t) : {}.toString.call(e) === {}.toString.call(t)
            }, r.isInteger = function(e) {
                return "number" == typeof e && e % 1 == 0
            }, r.isString = function(e) {
                return null != e && e.constructor === String
            }, r.isInherited = function(e, t) {
                if (null == e || null == e.prototype) throw new TypeError("isInherited: child should be a constructor function");
                if (null == t || null == t.prototype) throw new TypeError("isInherited: parent should be a constructor function");
                return e.prototype instanceof t || e.prototype === t.prototype
            }, r.clone = function(e) {
                if (!e || "object" != typeof e) return e;
                var t, o, s;
                for (o in t = "function" == typeof e.pop ? [] : {}, e) e.hasOwnProperty(o) && (s = e[o], t[o] = s && "object" == typeof s ? r.clone(s) : s);
                return t
            }, r.deepEquals = function(e, t, o) {
                if (o || (o = ""), e === t) return [!0, o];
                if (a(e) && (e = void 0), a(t) && (t = void 0), void 0 === e && void 0 !== t) return [!1, o];
                if (void 0 === t && void 0 !== e) return [!1, o];
                if (null === e && null !== t) return [!1, o];
                if (null === t && null !== e) return [!1, o];
                if ("object" != typeof e && "object" != typeof t) return [e === t, o];
                if (Array.isArray(e) && Array.isArray(t)) {
                    var n = e.length;
                    if (n !== t.length) return [!1, o];
                    for (var _ = 0; _ < n; _++) {
                        if (!(l = r.deepEquals(e[_], t[_], o + "[" + _ + "]"))[0]) return l
                    }
                    return [!0, o]
                }
                if (s(e) || s(t)) return [!1, o];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, o];
                for (var i in e) {
                    var l;
                    if (!(l = r.deepEquals(e[i], t[i], o + "[" + i + "]"))[0]) return l
                }
                return [!0, o]
            }, r.merge = function(e, t) {
                for (var o in t) null !== t[o] && "object" == typeof t[o] && e.hasOwnProperty(o) ? r.merge(e[o], t[o]) : e[o] = t[o];
                return e
            }, e && e.exports && (e.exports = {
                inherit: i,
                clone: r.clone,
                merge: r.merge,
                isNumber: _,
                isInteger: r.isInteger,
                isString: r.isString,
                isObject: n,
                isHashObject: function(e) {
                    return n(e) && -1 !== e.constructor.toString().indexOf("function Object")
                },
                isPromise: function(e) {
                    return n(e) && e.then
                },
                isNaN: r.isNaN,
                isAbsent: r.isAbsent,
                isExistent: r.isExistent,
                isSameType: r.isSameType,
                isArray: s,
                isFunction: a,
                parseBool: r.parseBool,
                deepEquals: r.deepEquals,
                notNull: function(e) {
                    return null !== e
                },
                notUndefined: function(e) {
                    return void 0 !== e
                },
                isEven: function(e) {
                    return e % 2 == 0
                },
                declareClassAsPureInterface: function(e, t) {
                    for (var o in e.prototype) "function" == typeof e.prototype[o] && e.prototype.hasOwnProperty(o) && (e.prototype[o] = function() {
                        throw new Error(t + "::" + o + " is an interface member declaration and must be overloaded in order to be called")
                    })
                },
                requireFullInterfaceImplementation: function(e, t, o, r) {
                    for (var s in o.prototype)
                        if ("function" == typeof o.prototype[s] && !e.prototype[s]) throw new Error("Interface implementation assertion failed: " + t + " does not implement " + r + "::" + s + " function")
                }
            })
        },
        984919: (e, t, o) => {
            "use strict";
            o.r(t);
            var r = o(758337);
            const s = /{(\w+)}/g,
                n = /{(\d+)}/g;
            String.prototype.format = function(...e) {
                const t = (0, r.isObject)(e[0]),
                    o = t ? s : n,
                    _ = t ? (t, o) => {
                        const r = e[0];
                        return void 0 !== r[o] ? r[o] : t
                    } : (t, o) => {
                        const r = parseInt(o, 10),
                            s = e[r];
                        return void 0 !== s ? s : t
                    };
                return this.replace(o, _)
            }
        },
        988411: (e, t, o) => {
            "use strict";
            e = o.nmd(e);
            var r = o(272001).getLogger("Common.WatchedValue");

            function s() {}

            function n(e) {
                if (!(this instanceof n)) return new n(e);
                arguments.length > 0 && (this._value = e), this._listeners = []
            }
            n.prototype.value = function() {
                return this._owner ? this._owner._value : this._value
            }, n.prototype.setValue = function(e, t) {
                var o = this._owner ? this._owner : this;
                if ("function" == typeof o.hook && (e = o.hook(e)), o.writeLock) return o._value;
                var s = o._value === e || Number.isNaN(o._value) && Number.isNaN(e);
                if (!t && s && o.hasOwnProperty("_value")) return e;
                o._value = e;
                for (var n = o._listeners.slice(), _ = 0, a = 0; a < n.length; a++) {
                    n[a].once && (o._listeners.splice(a - _, 1), _++);
                    try {
                        n[a].cb(e)
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                }
                return e
            }, n.prototype.deleteValue = function() {
                var e = this._owner ? this._owner : this;
                if (e.hasOwnProperty("_value")) {
                    if (e.writeLock) return e._value;
                    delete e._value;
                    for (var t = e._listeners.slice(), o = 0, s = 0; s < t.length; s++) {
                        t[s].once && (e._listeners.splice(s - o, 1), o++);
                        try {
                            t[s].cb()
                        } catch (e) {
                            r.logError(e.stack || e.message)
                        }
                    }
                }
            }, n.prototype.subscribe = function(e, t) {
                if ("function" != typeof e) throw new TypeError("callback must be a function");
                var o = !!t && !!t.once,
                    s = !!t && !!t.callWithLast,
                    n = this._owner ? this._owner : this;
                if (s && n.hasOwnProperty("_value")) {
                    try {
                        e(n._value)
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                    if (o) return
                }
                n._listeners.push({
                    cb: e,
                    owner: this,
                    once: !!t && !!t.once
                })
            }, n.prototype.unsubscribe = function(e) {
                var t = this._owner ? this._owner : this;
                void 0 === e && (e = null);
                for (var o = t._listeners, r = o.length; r--;) o[r].owner !== this && t !== this || o[r].cb !== e && null !== e || o.splice(r, 1)
            }, n.prototype.listeners = function() {
                return (this._owner ? this._owner : this)._listeners
            }, n.prototype.readonly = function() {
                if (this._readonlyInstance) return this._readonlyInstance;
                var e = this._readonlyInstance = new s;
                return e.subscribe = this.subscribe.bind(this), e.unsubscribe = this.unsubscribe.bind(this), e.value = this.value.bind(this), e.when = this.when.bind(this), e.spawn = function() {
                    return this.spawn.apply(this, arguments).readonly()
                }.bind(this), this.destroy && (e.destroy = this.destroy.bind(this)), e
            }, n.prototype.spawn = function(e) {
                var t = new n;
                return delete t._listeners, t._owner = this._owner || this, t.destroy = function() {
                    if ("function" == typeof e) try {
                        e()
                    } catch (e) {
                        r.logError(e.stack || e.message)
                    }
                    this.unsubscribe(), delete this._owner
                }, t
            }, n.prototype.when = function(e) {
                var t = this;
                if (this.value()) try {
                    e()
                } catch (e) {
                    r.logError(e.stack || e.message)
                } else {
                    var o = function(r) {
                        r && (t.unsubscribe(o), e())
                    };
                    t.subscribe(o)
                }
            }, n.prototype.opposite = function() {
                if (!this._opposite) {
                    var e = this,
                        t = new n(!this.value());
                    this.subscribe((function(e) {
                        t.setValue(!e)
                    })), t.subscribe((function(t) {
                        e.setValue(!t)
                    })), this._opposite = t
                }
                return this._opposite
            }, "undefined" != typeof window && (window.WatchedValue = n), e && e.exports && (e.exports = n)
        },
        890740: (e, t, o) => {
            "use strict";
            o.d(t, {
                fetch: () => s
            });
            const r = (0, o(272001).getLogger)("Fetch");

            function s(e, t, o = {}) {
                {
                    t = t || {},
                        function(e) {
                            return new URL(e, document.baseURI).origin === location.origin
                        }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers, window.locale && t.headers.set("X-Language", window.locale), t.headers.set("X-Requested-With", "XMLHttpRequest")), void 0 === t.credentials && (t.credentials = "same-origin");
                    const s = window.fetch(e, t);
                    return s.then((s => {
                        if (!s.ok) {
                            let n = "";
                            t.method && (n += `${t.method.toUpperCase()} `), n += e, n += `. Status ${s.status}`, s.statusText && (n += `. ${s.statusText}`), s.headers.via && (n += `. Via: ${s.headers.via}`), o.logBodyOnError && "string" == typeof t.body && (n += `. Body: ${t.body.slice(0,1024)}`), r.logError(n)
                        }
                        return s
                    }), (o => {
                        if (o && "AbortError" === o.name) return;
                        let s = "";
                        t.method && (s += `${t.method.toUpperCase()} `), s += e, navigator.onLine ? s += `. ${o}` : s += ". User is offline.", r.logError(s)
                    })), s
                }
            }
        },
        891343: (e, t, o) => {
            "use strict";

            function r(e, t, o, r, s) {
                let n = "";
                if (r = r ? "; path=" + r : "", s = s ? "; domain=" + s : "", o) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + e.toUTCString()
                } else n = "";
                document.cookie = e + "=" + t + n + s + r
            }

            function s(e) {
                const t = e + "=",
                    o = document.cookie.split(";");
                for (let e = 0; e < o.length; e++) {
                    let r = o[e];
                    for (;
                        " " === r.charAt(0);) r = r.substring(1, r.length);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return null
            }
            o.d(t, {
                set: () => r,
                get: () => s
            })
        },
        777491: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                guid: () => s,
                randomHash: () => n,
                randomHashN: () => _
            });
            const r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

            function s() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }))
            }

            function n() {
                return _(12)
            }

            function _(e) {
                let t = "";
                for (let o = 0; o < e; ++o) {
                    const e = Math.floor(Math.random() * r.length);
                    t += r[e]
                }
                return t
            }
        }
    }
]);
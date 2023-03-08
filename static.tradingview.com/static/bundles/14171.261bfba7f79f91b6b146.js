(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [14171, 58718], {
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
        91679: (e, t) => {
            "use strict";
            t.WatchedValue = void 0;
            var o = function() {
                function e(e, t) {
                    void 0 === t && (t = {}), this._listeners = [], void 0 !== e && (this._value = e), this._onDestroy = t.onDestroy
                }
                return e.prototype.destroy = function() {
                    this.unsubscribe(), delete this._value, delete this._readonlyInstance, this._onDestroy && this._onDestroy()
                }, e.prototype.value = function() {
                    return this._value
                }, e.prototype.setValue = function(e, t) {
                    var o = this._value === e || Number.isNaN(this._value) && Number.isNaN(e);
                    !t && o || (this._value = e, this._notifyListeners())
                }, e.prototype.subscribe = function(e, t) {
                    var o, r, i = this;
                    if (!(null === (o = null == t ? void 0 : t.signal) || void 0 === o ? void 0 : o.aborted)) {
                        if ((null == t ? void 0 : t.callWithLast) && void 0 !== this._value) {
                            try {
                                e(this._value)
                            } catch (e) {
                                t.onError && t.onError(e)
                            }
                            if (t.once) return
                        }(null == t ? void 0 : t.signal) && t.signal.addEventListener("abort", (function() {
                            i.unsubscribe(e)
                        }), {
                            once: !0
                        }), this._listeners.push({
                            callback: e,
                            signal: null == t ? void 0 : t.signal,
                            once: null !== (r = null == t ? void 0 : t.once) && void 0 !== r && r,
                            onError: null == t ? void 0 : t.onError
                        })
                    }
                }, e.prototype.unsubscribe = function(e) {
                    for (var t = this._listeners.length; t--;) {
                        e !== this._listeners[t].callback && void 0 !== e || this._listeners.splice(t, 1)
                    }
                }, e.prototype.readonly = function() {
                    return this._readonlyInstance || (this._readonlyInstance = new i(this)), this._readonlyInstance
                }, e.prototype.when = function(e, t) {
                    var o, r = this;
                    if (!e) return new Promise((function(e, t) {
                        if (void 0 === r._value) {
                            var o = function(t) {
                                void 0 !== t && (e(t), r.unsubscribe(o))
                            };
                            r.subscribe(o, {
                                onError: t
                            })
                        } else e(r._value)
                    }));
                    if (!(null === (o = null == t ? void 0 : t.signal) || void 0 === o ? void 0 : o.aborted))
                        if (void 0 === this._value) {
                            var i = function(t) {
                                void 0 !== t && (e(t), r.unsubscribe(i))
                            };
                            this.subscribe(i, t)
                        } else try {
                            e(this._value)
                        } catch (e) {
                            (null == t ? void 0 : t.onError) && t.onError(e)
                        }
                }, e.prototype._notifyListeners = function() {
                    for (var e, t, o = 0, r = this._listeners; o < r.length; o++) {
                        var i = r[o];
                        if ((i.once || (null === (e = i.signal) || void 0 === e ? void 0 : e.aborted)) && this.unsubscribe(i.callback), !(null === (t = i.signal) || void 0 === t ? void 0 : t.aborted)) try {
                            i.callback(this._value)
                        } catch (e) {
                            i.onError && i.onError(e)
                        }
                    }
                }, e
            }();
            t.WatchedValue = o;
            var r = "Using destroyed WatchedValueReadonly instance is not allowed",
                i = function() {
                    function e(e) {
                        this._owner = e
                    }
                    return e.prototype.value = function() {
                        var e;
                        if (!this._owner) throw new Error(r);
                        return null === (e = this._owner) || void 0 === e ? void 0 : e.value()
                    }, e.prototype.destroy = function() {
                        delete this._owner
                    }, e.prototype.subscribe = function(e, t) {
                        if (!this._owner) throw new Error(r);
                        this._owner.subscribe(e, t)
                    }, e.prototype.unsubscribe = function(e) {
                        if (!this._owner) throw new Error(r);
                        this._owner.unsubscribe(e)
                    }, e.prototype.when = function(e, t) {
                        if (!this._owner) throw new Error(r);
                        return void 0 !== e ? this._owner.when(e, t) : this._owner.when()
                    }, e
                }()
        },
        24654: e => {
            "use strict";
            e.exports = function(e) {
                for (var t = [], o = e.length, r = 0; r < o; r++) {
                    var i = e.charCodeAt(r);
                    if (i >= 55296 && i <= 56319 && o > r + 1) {
                        var n = e.charCodeAt(r + 1);
                        n >= 56320 && n <= 57343 && (i = 1024 * (i - 55296) + n - 56320 + 65536, r += 1)
                    }
                    i < 128 ? t.push(i) : i < 2048 ? (t.push(i >> 6 | 192), t.push(63 & i | 128)) : i < 55296 || i >= 57344 && i < 65536 ? (t.push(i >> 12 | 224), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128)) : i >= 65536 && i <= 1114111 ? (t.push(i >> 18 | 240), t.push(i >> 12 & 63 | 128), t.push(i >> 6 & 63 | 128), t.push(63 & i | 128)) : t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        9995: (e, t, o) => {
            var r = o(939340);
            e.exports = function(e) {
                return e = r(e ^= e >>> 16, 2246822507), e = r(e ^= e >>> 13, 3266489909), (e ^= e >>> 16) >>> 0
            }
        },
        939340: e => {
            "use strict";
            e.exports = Math.imul || function(e, t) {
                var o = 65535 & e,
                    r = 65535 & t;
                return o * r + ((e >>> 16 & 65535) * r + o * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }
        },
        855385: (e, t, o) => {
            var r = o(939340),
                i = o(9995),
                n = o(24654),
                a = new Uint32Array([3432918353, 461845907]);

            function s(e, t) {
                return e << t | e >>> 32 - t
            }
            e.exports = function(e, t) {
                if (t = t ? 0 | t : 0, "string" == typeof e && (e = n(e)), !(e instanceof ArrayBuffer)) throw new TypeError("Expected key to be ArrayBuffer or string");
                var o = new Uint32Array([t]);
                return function(e, t) {
                        for (var o = e.byteLength / 4 | 0, i = new Uint32Array(e, 0, o), n = 0; n < o; n++) i[n] = r(i[n], a[0]), i[n] = s(i[n], 15), i[n] = r(i[n], a[1]), t[0] = t[0] ^ i[n], t[0] = s(t[0], 13), t[0] = r(t[0], 5) + 3864292196
                    }(e, o),
                    function(e, t) {
                        var o = e.byteLength / 4 | 0,
                            i = e.byteLength % 4,
                            n = 0,
                            _ = new Uint8Array(e, 4 * o, i);
                        switch (i) {
                            case 3:
                                n ^= _[2] << 16;
                            case 2:
                                n ^= _[1] << 8;
                            case 1:
                                n ^= _[0] << 0, n = s(n = r(n, a[0]), 15), n = r(n, a[1]), t[0] = t[0] ^ n
                        }
                    }(e, o),
                    function(e, t) {
                        t[0] = t[0] ^ e.byteLength, t[0] = i(t[0])
                    }(e, o), o.buffer
            }
        },
        64531: (e, t) => {
            "use strict";
            var o, r = !("undefined" == typeof window || !window.document || !window.document.createElement);

            function i() {
                if (o) return o;
                if (!r || !window.document.body) return "indeterminate";
                var e = window.document.createElement("div");
                return e.appendChild(document.createTextNode("ABCD")), e.dir = "rtl", e.style.fontSize = "14px", e.style.width = "4px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.overflow = "scroll", document.body.appendChild(e), o = "reverse", e.scrollLeft > 0 ? o = "default" : (e.scrollLeft = 1, 0 === e.scrollLeft && (o = "negative")), document.body.removeChild(e), o
            }
            t.detectScrollType = i, t.getNormalizedScrollLeft = function(e, t) {
                var o = e.scrollLeft;
                if ("rtl" !== t) return o;
                var r = i();
                if ("indeterminate" === r) return Number.NaN;
                switch (r) {
                    case "negative":
                        return e.scrollWidth - e.clientWidth + o;
                    case "reverse":
                        return e.scrollWidth - e.clientWidth - o
                }
                return o
            }, t.setNormalizedScrollLeft = function(e, t, o) {
                if ("rtl" === o) {
                    var r = i();
                    if ("indeterminate" !== r) switch (r) {
                        case "negative":
                            e.scrollLeft = e.clientWidth - e.scrollWidth + t;
                            break;
                        case "reverse":
                            e.scrollLeft = e.scrollWidth - e.clientWidth - t;
                            break;
                        default:
                            e.scrollLeft = t
                    }
                } else e.scrollLeft = t
            }
        },
        778785: (e, t, o) => {
            "use strict";
            o.d(t, {
                mobiletouch: () => i,
                touch: () => n,
                setClasses: () => a
            });
            var r = o(167175);
            const i = r.mobiletouch,
                n = r.touch;

            function a() {
                document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
            }
        },
        638456: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                isMac: () => n,
                isWindows: () => a,
                isLinux: () => s,
                isDesktopApp: () => _,
                desktopAppVersion: () => c,
                appVersion: () => l,
                CheckMobile: () => d,
                onWidget: () => u,
                supportTouch: () => h,
                checkPageType: () => m,
                isChrome: () => p,
                isFF: () => f,
                isEdge: () => g,
                isSafari: () => b,
                className: () => v,
                onOrder: () => y,
                onGoPro: () => w,
                onMainPage: () => k
            });
            var r = o(167175);
            const i = window.TradingView = window.TradingView || {};

            function n() {
                return r.isMac
            }

            function a() {
                return r.isWindows
            }

            function s() {
                return r.isLinux
            }

            function _() {
                return /TVDesktop/i.test(navigator.userAgent)
            }

            function c() {
                const e = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
                return e && e[1]
            }

            function l() {
                const e = navigator.userAgent.match(/TradingView\/([^\s]+)/);
                return e && e[1]
            }
            const d = {
                Android: () => r.isAndroid,
                BlackBerry: () => r.isBlackBerry,
                iOS: () => r.isIOS,
                Opera: () => r.isOperaMini,
                isIPad: () => r.isIPad,
                any: () => r.isAnyMobile
            };

            function u() {
                const e = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?miniwidgetembed/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^embed(-static)?/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^chatwidgetembed/?$", "^ideaswidgetembed/?$", "^ideas-widget/?$", "^view-idea-widget/([0-9a-zA-Z]{8})/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$"],
                    t = window.location.pathname.replace(/^\//, "");
                let o;
                for (let r = e.length - 1; r >= 0; r--)
                    if (o = new RegExp(e[r]), o.test(t)) return !0;
                return !1
            }

            function h() {
                return r.mobiletouch || r.touch || r.isAnyMobile
            }

            function m(e) {
                return new URLSearchParams(window.location.search).get("page_type") === e
            }
            i.isMobile = d, i.onWidget = u;
            const p = r.isChrome,
                f = r.isFF,
                g = r.isEdge,
                b = r.isSafari;

            function v(e) {
                for (const [t, o] of Object.entries(i))
                    if (o === e) return t;
                return null
            }

            function y() {
                return "/order/" === window.location.pathname
            }

            function w() {
                return "/gopro/" === window.location.pathname
            }

            function k() {
                return "/" === window.location.pathname
            }
            i.className = v
        },
        495046: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, {
                disable: () => d,
                enable: () => l,
                enabled: () => _,
                getAllFeatures: () => u,
                setEnabled: () => c
            });
            const r = JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"show_context_menu_in_crosshair_if_only_one_item":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"tv_production":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","adaptive_trading_sources","chart_style_hilo_last_price"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","adaptive_trading_sources"]}}');
            var i = o.t(r, 2);
            const n = new Map,
                a = new Map,
                s = new Set;

            function _(e) {
                const t = n.get(e);
                if (void 0 !== t) return t;
                const o = a.get(e);
                return !!o && o.some(_)
            }

            function c(e, t) {
                n.set(String(e), Boolean(t))
            }

            function l(e) {
                c(e, !0)
            }

            function d(e) {
                c(e, !1)
            }

            function u() {
                const e = Object.create(null);
                for (const t of s) e[t] = _(t);
                return e
            }! function() {
                for (const [e, t] of Object.entries(i))
                    if (s.add(e), "subsets" in t)
                        for (const o of t.subsets) {
                            s.add(o);
                            let t = a.get(o);
                            void 0 === t && (t = [], a.set(o, t)), t.push(e)
                        }
                "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(d), "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(l)
            }()
        },
        758337: function(e, t, o) {
            var r;
            e = o.nmd(e);
            var i = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                n = function(e) {
                    return "object" == typeof e && null !== e
                };

            function a(e) {
                return "number" == typeof e && isFinite(e)
            }

            function s(e) {
                return null != e && e.constructor === Function
            }

            function _(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
            "undefined" != typeof window ? (r = window.TradingView = window.TradingView || {}, window.isNumber = a, window.isFunction = s, window.inherit = _, window.isArray = i) : r = this.TradingView = this.TradingView || {}, r.isNaN = function(e) {
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
                var t, o, i;
                for (o in t = "function" == typeof e.pop ? [] : {}, e) e.hasOwnProperty(o) && (i = e[o], t[o] = i && "object" == typeof i ? r.clone(i) : i);
                return t
            }, r.deepEquals = function(e, t, o) {
                if (o || (o = ""), e === t) return [!0, o];
                if (s(e) && (e = void 0), s(t) && (t = void 0), void 0 === e && void 0 !== t) return [!1, o];
                if (void 0 === t && void 0 !== e) return [!1, o];
                if (null === e && null !== t) return [!1, o];
                if (null === t && null !== e) return [!1, o];
                if ("object" != typeof e && "object" != typeof t) return [e === t, o];
                if (Array.isArray(e) && Array.isArray(t)) {
                    var n = e.length;
                    if (n !== t.length) return [!1, o];
                    for (var a = 0; a < n; a++) {
                        if (!(c = r.deepEquals(e[a], t[a], o + "[" + a + "]"))[0]) return c
                    }
                    return [!0, o]
                }
                if (i(e) || i(t)) return [!1, o];
                if (Object.keys(e).length !== Object.keys(t).length) return [!1, o];
                for (var _ in e) {
                    var c;
                    if (!(c = r.deepEquals(e[_], t[_], o + "[" + _ + "]"))[0]) return c
                }
                return [!0, o]
            }, r.merge = function(e, t) {
                for (var o in t) null !== t[o] && "object" == typeof t[o] && e.hasOwnProperty(o) ? r.merge(e[o], t[o]) : e[o] = t[o];
                return e
            }, e && e.exports && (e.exports = {
                inherit: _,
                clone: r.clone,
                merge: r.merge,
                isNumber: a,
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
                isArray: i,
                isFunction: s,
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
                    for (var i in o.prototype)
                        if ("function" == typeof o.prototype[i] && !e.prototype[i]) throw new Error("Interface implementation assertion failed: " + t + " does not implement " + r + "::" + i + " function")
                }
            })
        },
        984919: (e, t, o) => {
            "use strict";
            o.r(t);
            var r = o(758337);
            const i = /{(\w+)}/g,
                n = /{(\d+)}/g;
            String.prototype.format = function(...e) {
                const t = (0, r.isObject)(e[0]),
                    o = t ? i : n,
                    a = t ? (t, o) => {
                        const r = e[0];
                        return void 0 !== r[o] ? r[o] : t
                    } : (t, o) => {
                        const r = parseInt(o, 10),
                            i = e[r];
                        return void 0 !== i ? i : t
                    };
                return this.replace(o, a)
            }
        },
        563245: () => {
            try {
                ! function(e) {
                    "use strict";
                    var t, o, r = e.document,
                        i = e.Image,
                        n = e.globalStorage,
                        a = e.swfobject;
                    try {
                        var s = e.localStorage
                    } catch (e) {}
                    try {
                        var _ = e.sessionStorage
                    } catch (e) {}
                    var c = {
                            history: !1,
                            java: !1,
                            tests: 10,
                            baseurl: "",
                            lso: !0,
                            silverlight: !1,
                            domain: "",
                            authPath: !1,
                            pngCookieName: "png",
                            pngPath: "/ec/png",
                            etagCookieName: "etg",
                            etagPath: "/ec/etag",
                            cacheCookieName: "cachec",
                            cachePath: "/ec/cache",
                            staticurl: "/static/images/"
                        },
                        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    e._evercookie_flash_var = function(e) {
                        t = e;
                        var o = r.getElementById("myswf");
                        o && o.parentNode && o.parentNode.removeChild(o)
                    }, e.evercookie = e.Evercookie = function(d) {
                        d = d || {};
                        var u = {};
                        for (var h in c) {
                            var m = d[h];
                            u[h] = void 0 !== m ? m : c[h]
                        }
                        "function" == typeof u.domain && (u.domain = u.domain(e));
                        var p = u.history,
                            f = u.java,
                            g = u.tests,
                            b = u.baseurl,
                            v = u.staticurl,
                            y = u.domain,
                            w = this;
                        this._ec = {}, this.get = function(e, t, o) {
                            w._evercookie(e, t, void 0, void 0, o)
                        }, this.set = function(e, t) {
                            w._evercookie(e, (function() {}), t)
                        }, this._evercookie = function(i, n, a, s, _) {
                            if (void 0 === w._evercookie && (w = this), void 0 === s && (s = 0), 0 === s && (w.evercookie_database_storage(i, a), w.evercookie_indexdb_storage(i, a), w.evercookie_png(i, a), w.evercookie_etag(i, a), w.evercookie_cache(i, a), u.lso && w.evercookie_lso(i, a), u.silverlight && w.evercookie_silverlight(i, a), u.authPath && w.evercookie_auth(i, a), f && w.evercookie_java(i, a), w._ec.userData = w.evercookie_userdata(i, a), w._ec.cookieData = w.evercookie_cookie(i, a), w._ec.localData = w.evercookie_local_storage(i, a), w._ec.globalData = w.evercookie_global_storage(i, a), w._ec.sessionData = w.evercookie_session_storage(i, a), w._ec.windowData = w.evercookie_window(i, a), p && (w._ec.historyData = w.evercookie_history(i, a))), void 0 !== a)(void 0 === t || void 0 === o) && s++ < g && setTimeout((function() {
                                w._evercookie(i, n, a, s, _)
                            }), 300);
                            else if ((e.openDatabase && void 0 === w._ec.dbData || ("indexedDB" in e || (e.indexedDB = e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB)) && (void 0 === w._ec.idbData || "" === w._ec.idbData) || void 0 === t || void 0 === w._ec.etagData || void 0 === w._ec.cacheData || void 0 === w._ec.javaData || r.createElement("canvas").getContext && (void 0 === w._ec.pngData || "" === w._ec.pngData) || void 0 === o) && s++ < g) setTimeout((function() {
                                w._evercookie(i, n, a, s, _)
                            }), 300);
                            else {
                                w._ec.lsoData = w.getFromStr(i, t), t = void 0, w._ec.slData = w.getFromStr(i, o), o = void 0;
                                var c, l, d = w._ec,
                                    h = [],
                                    m = 0;
                                for (l in w._ec = {}, d) d[l] && "null" !== d[l] && "undefined" !== d[l] && (h[d[l]] = void 0 === h[d[l]] ? 1 : h[d[l]] + 1);
                                for (l in h) h[l] > m && (m = h[l], c = l);
                                void 0 === c || void 0 !== _ && 1 === _ || w.set(i, c), "function" == typeof n && n(c, d)
                            }
                        }, this.evercookie_window = function(t, o) {
                            try {
                                if (void 0 === o) return this.getFromStr(t, e.name);
                                e.name = function(e, t, o) {
                                    if (e.indexOf("&" + t + "=") > -1 || 0 === e.indexOf(t + "=")) {
                                        var r, i = e.indexOf("&" + t + "=");
                                        return -1 === i && (i = e.indexOf(t + "=")), -1 !== (r = e.indexOf("&", i + 1)) ? e.substr(0, i) + e.substr(r + (i ? 0 : 1)) + "&" + t + "=" + o : e.substr(0, i) + "&" + t + "=" + o
                                    }
                                    return e + "&" + t + "=" + o
                                }(e.name, t, o)
                            } catch (e) {}
                        }, this.evercookie_userdata = function(e, t) {
                            try {
                                var o = this.createElem("div", "userdata_el", 1);
                                if (o.style.behavior = "url(#default#userData)", void 0 === t) return o.load(e), o.getAttribute(e);
                                o.setAttribute(e, t), o.save(e)
                            } catch (e) {}
                        }, this.ajax = function(e) {
                            var t, o, r, i, n, a;
                            for (t = {
                                    "X-Requested-With": "XMLHttpRequest",
                                    Accept: "text/javascript, text/html, application/xml, text/xml, */*"
                                }, n = 0, a = (r = [function() {
                                    return new XMLHttpRequest
                                }, function() {
                                    return new ActiveXObject("Msxml2.XMLHTTP")
                                }, function() {
                                    return new ActiveXObject("Microsoft.XMLHTTP")
                                }]).length; n < a; n++) {
                                i = r[n];
                                try {
                                    i = i();
                                    break
                                } catch (e) {
                                    console.error(e)
                                }
                            }
                            for (o in i.onreadystatechange = function() {
                                    4 !== i.readyState || i.status >= 400 || e.success(i.responseText)
                                }, i.open("get", e.url, !0), t) i.setRequestHeader(o, t[o]);
                            try {
                                i.send()
                            } catch (e) {
                                console.error(e)
                            }
                        }, this.evercookie_cache = function(e, t) {
                            if (void 0 !== t) r.cookie = u.cacheCookieName + "=" + t + "; path=/; domain=" + y, w.ajax({
                                url: b + u.cachePath + "?name=" + e,
                                success: function(e) {}
                            });
                            else {
                                var o = this.getFromStr(u.cacheCookieName, r.cookie);
                                w._ec.cacheData = void 0, r.cookie = u.cacheCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + y, w.ajax({
                                    url: b + u.cachePath + "?name=" + e,
                                    success: function(e) {
                                        r.cookie = u.cacheCookieName + "=" + o + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + y, w._ec.cacheData = e
                                    }
                                })
                            }
                        }, this.evercookie_auth = function(e, t) {
                            var o, r;
                            void 0 !== t ? (o = "//" + t + "@" + location.host + b + u.authPath + "?name=" + e, (r = new i).style.visibility = "hidden", r.style.position = "absolute", r.src = o) : w.ajax({
                                url: b + u.authPath + "?name=" + e,
                                success: function(e) {
                                    w._ec.authData = e
                                }
                            })
                        }, this.evercookie_etag = function(e, t) {
                            if (void 0 !== t) r.cookie = u.etagCookieName + "=" + t + "; path=/; domain=" + y, w.ajax({
                                url: b + u.etagPath + "?name=" + e,
                                success: function(e) {}
                            });
                            else {
                                var o = this.getFromStr(u.etagCookieName, r.cookie);
                                w._ec.etagData = void 0, r.cookie = u.etagCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + y, w.ajax({
                                    url: b + u.etagPath + "?name=" + e,
                                    success: function(e) {
                                        r.cookie = u.etagCookieName + "=" + o + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + y, w._ec.etagData = e
                                    }
                                })
                            }
                        }, this.evercookie_java = function(e, t) {
                            var o = r.getElementById("ecAppletContainer");

                            function i(o) {
                                var i = r.getElementById(o);
                                void 0 !== t ? i.set(e, t) : w._ec.javaData = i.get(e)
                            }
                            "undefined" != typeof dtjava && (null != o && o.length || ((o = r.createElement("div")).setAttribute("id", "ecAppletContainer"), o.style.position = "absolute", o.style.top = "-3000px", o.style.left = "-3000px", o.style.width = "1px", o.style.height = "1px", r.body.appendChild(o)), "undefined" == typeof ecApplet ? dtjava.embed({
                                id: "ecApplet",
                                url: v + "evercookie.jnlp",
                                width: "1px",
                                height: "1px",
                                placeholder: "ecAppletContainer"
                            }, {}, {
                                onJavascriptReady: i
                            }) : i("ecApplet"))
                        }, this.evercookie_lso = function(e, t) {
                            var o = r.getElementById("swfcontainer"),
                                i = {},
                                n = {},
                                s = {};
                            null != o && o.length || ((o = r.createElement("div")).setAttribute("id", "swfcontainer"), r.body.appendChild(o)), void 0 !== t && (i.everdata = e + "=" + t), n.swliveconnect = "true", s.id = "myswf", s.name = "myswf", a.embedSWF(v + "evercookie.swf", "swfcontainer", "1", "1", "9.0.0", !1, i, n, s)
                        }, this.evercookie_png = function(e, t) {
                            var o, n, a, s = r.createElement("canvas");
                            s.style.visibility = "hidden", s.style.position = "absolute", s.width = 200, s.height = 1, s && s.getContext && ((o = new i).style.visibility = "hidden", o.style.position = "absolute", void 0 !== t ? r.cookie = u.pngCookieName + "=" + t + "; path=/; domain=" + y : (w._ec.pngData = void 0, n = s.getContext("2d"), a = this.getFromStr(u.pngCookieName, r.cookie), r.cookie = u.pngCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + y, o.onload = function() {
                                r.cookie = u.pngCookieName + "=" + a + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + y, w._ec.pngData = "", n.drawImage(o, 0, 0);
                                var e, t, i = n.getImageData(0, 0, 200, 1).data;
                                for (e = 0, t = i.length; e < t && 0 !== i[e] && (w._ec.pngData += String.fromCharCode(i[e]), 0 !== i[e + 1]) && (w._ec.pngData += String.fromCharCode(i[e + 1]), 0 !== i[e + 2]); e += 4) w._ec.pngData += String.fromCharCode(i[e + 2])
                            }), o.src = b + u.pngPath + "?name=" + e)
                        }, this.evercookie_local_storage = function(e, t) {
                            try {
                                if (s) {
                                    if (void 0 === t) return s.getItem(e);
                                    s.setItem(e, t)
                                }
                            } catch (e) {}
                        }, this.evercookie_database_storage = function(t, o) {
                            try {
                                if (e.openDatabase) {
                                    var r = e.openDatabase("sqlite_evercookie", "", "evercookie", 1048576);
                                    void 0 !== o ? r.transaction((function(e) {
                                        e.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], (function(e, t) {}), (function(e, t) {})), e.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [t, o], (function(e, t) {}), (function(e, t) {}))
                                    })) : r.transaction((function(e) {
                                        e.executeSql("SELECT value FROM cache WHERE name=?", [t], (function(e, t) {
                                            t.rows.length >= 1 ? w._ec.dbData = t.rows.item(0).value : w._ec.dbData = ""
                                        }), (function(e, t) {}))
                                    }))
                                }
                            } catch (e) {}
                        }, this.evercookie_indexdb_storage = function(t, o) {
                            try {
                                if ("indexedDB" in e || (indexedDB = e.indexedDB || e.mozIndexedDB || e.webkitIndexedDB || e.msIndexedDB, IDBTransaction = e.IDBTransaction || e.webkitIDBTransaction || e.msIDBTransaction,
                                        IDBKeyRange = e.IDBKeyRange || e.webkitIDBKeyRange || e.msIDBKeyRange), indexedDB) {
                                    var r = indexedDB.open("idb_evercookie", 1);
                                    r.onerror = function(e) {}, r.onupgradeneeded = function(e) {
                                        e.target.result.createObjectStore("evercookie", {
                                            keyPath: "name",
                                            unique: !1
                                        })
                                    }, r.onsuccess = void 0 !== o ? function(e) {
                                        var r = e.target.result;
                                        if (r.objectStoreNames.contains("evercookie")) r.transaction(["evercookie"], "readwrite").objectStore("evercookie").put({
                                            name: t,
                                            value: o
                                        });
                                        r.close()
                                    } : function(e) {
                                        var o = e.target.result;
                                        if (o.objectStoreNames.contains("evercookie")) {
                                            var r = o.transaction(["evercookie"]).objectStore("evercookie").get(t);
                                            r.onsuccess = function(e) {
                                                void 0 === r.result ? w._ec.idbData = void 0 : w._ec.idbData = r.result.value
                                            }
                                        } else w._ec.idbData = void 0;
                                        o.close()
                                    }
                                }
                            } catch (e) {}
                        }, this.evercookie_session_storage = function(e, t) {
                            try {
                                if (_) {
                                    if (void 0 === t) return _.getItem(e);
                                    _.setItem(e, t)
                                }
                            } catch (e) {}
                        }, this.evercookie_global_storage = function(e, t) {
                            if (n) {
                                var o = this.getHost();
                                try {
                                    if (void 0 === t) return n[o][e];
                                    n[o][e] = t
                                } catch (e) {}
                            }
                        }, this.evercookie_silverlight = function(e, t) {
                            var o, i = "4.0.50401.0",
                                n = "";
                            void 0 !== t && (n = '<param name="initParams" value="' + e + "=" + t + '" />'), o = '<object style="position:absolute;left:-500px;top:-500px" data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' + n + '<param name="source" value="' + (v + "evercookie.xap") + '"/><param name="onLoad" value="onSilverlightLoad"/><param name="onError" value="onSilverlightError"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="minRuntimeVersion" value="' + i + '"/><param name="autoUpgrade" value="false"/><a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=' + i + '" style="display:none">Get Microsoft Silverlight</a></object>';
                            try {
                                r.body.appendChild(o)
                            } catch (e) {}
                        }, this.encode = function(e) {
                            var t, o, r, i, n, a, s, _ = "",
                                c = 0;
                            for (e = this._utf8_encode(e); c < e.length;) i = (t = e.charCodeAt(c++)) >> 2, n = (3 & t) << 4 | (o = e.charCodeAt(c++)) >> 4, a = (15 & o) << 2 | (r = e.charCodeAt(c++)) >> 6, s = 63 & r, isNaN(o) ? a = s = 64 : isNaN(r) && (s = 64), _ = _ + l.charAt(i) + l.charAt(n) + l.charAt(a) + l.charAt(s);
                            return _
                        }, this.decode = function(e) {
                            var t, o, r, i, n, a, s = "",
                                _ = 0;
                            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); _ < e.length;) t = l.indexOf(e.charAt(_++)) << 2 | (i = l.indexOf(e.charAt(_++))) >> 4, o = (15 & i) << 4 | (n = l.indexOf(e.charAt(_++))) >> 2, r = (3 & n) << 6 | (a = l.indexOf(e.charAt(_++))), s += String.fromCharCode(t), 64 !== n && (s += String.fromCharCode(o)), 64 !== a && (s += String.fromCharCode(r));
                            return s = this._utf8_decode(s)
                        }, this._utf8_encode = function(e) {
                            for (var t, o = "", r = 0, i = (e = e.replace(/\r\n/g, "\n")).length; r < i; r++)(t = e.charCodeAt(r)) < 128 ? o += String.fromCharCode(t) : t > 127 && t < 2048 ? (o += String.fromCharCode(t >> 6 | 192), o += String.fromCharCode(63 & t | 128)) : (o += String.fromCharCode(t >> 12 | 224), o += String.fromCharCode(t >> 6 & 63 | 128), o += String.fromCharCode(63 & t | 128));
                            return o
                        }, this._utf8_decode = function(e) {
                            for (var t = "", o = 0, r = e.length, i = 0, n = 0, a = 0; o < r;)(i = e.charCodeAt(o)) < 128 ? (t += String.fromCharCode(i), o += 1) : i > 191 && i < 224 ? (n = e.charCodeAt(o + 1), t += String.fromCharCode((31 & i) << 6 | 63 & n), o += 2) : (n = e.charCodeAt(o + 1), a = e.charCodeAt(o + 2),
                                t += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | 63 & a), o += 3);
                            return t
                        }, this.evercookie_history = function(e, t) {
                            var o, r, i = (l + "-").split(""),
                                n = "http://www.google.com/evercookie/cache/" + this.getHost() + "/" + e,
                                a = "",
                                s = "",
                                _ = 1;
                            if (void 0 !== t) {
                                if (this.hasVisited(n)) return;
                                for (this.createIframe(n, "if"), n += "/", r = this.encode(t).split(""), o = 0; o < r.length; o++) n += r[o], this.createIframe(n, "if" + o);
                                n += "-", this.createIframe(n, "if_")
                            } else if (this.hasVisited(n)) {
                                for (n += "/";
                                    "-" !== a && 1 === _;)
                                    for (_ = 0, o = 0; o < i.length; o++)
                                        if (this.hasVisited(n + i[o])) {
                                            "-" !== (a = i[o]) && (s += a), n += a, _ = 1;
                                            break
                                        }
                                return this.decode(s)
                            }
                        }, this.createElem = function(e, t, o) {
                            var i;
                            return (i = void 0 !== t && r.getElementById(t) ? r.getElementById(t) : r.createElement(e)).style.visibility = "hidden", i.style.position = "absolute", t && i.setAttribute("id", t), o && r.body.appendChild(i), i
                        }, this.createIframe = function(e, t) {
                            var o = this.createElem("iframe", t, 1);
                            return o.setAttribute("src", e), o
                        };
                        var k = this.waitForSwf = function(e) {
                            void 0 === e ? e = 0 : e++, e < g && void 0 === a && setTimeout((function() {
                                k(e)
                            }), 300)
                        };
                        this.evercookie_cookie = function(e, t) {
                            if (void 0 === t) return this.getFromStr(e, r.cookie);
                            r.cookie = e + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + y, r.cookie = e + "=" + t + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + y
                        }, this.getFromStr = function(e, t) {
                            if ("string" == typeof t) {
                                var o, r, i = e + "=",
                                    n = t.split(/[;&]/);
                                for (o = 0; o < n.length; o++) {
                                    for (r = n[o];
                                        " " === r.charAt(0);) r = r.substring(1, r.length);
                                    if (0 === r.indexOf(i)) return r.substring(i.length, r.length)
                                }
                            }
                        }, this.getHost = function() {
                            return e.location.host.replace(/:\d+/, "")
                        }, this.toHex = function(e) {
                            for (var t, o = "", r = e.length, i = 0; i < r;) {
                                for (t = e.charCodeAt(i++).toString(16); t.length < 2;) t = "0" + t;
                                o += t
                            }
                            return o
                        }, this.fromHex = function(e) {
                            for (var t, o = "", r = e.length; r >= 0;) t = r - 2, o = String.fromCharCode("0x" + e.substring(t, r)) + o, r = t;
                            return o
                        }, this.hasVisited = function(e) {
                            -1 === this.no_color && (-1 === this._getRGB("http://samy-was-here-this-should-never-be-visited.com", -1) && (this.no_color = this._getRGB("http://samy-was-here-" + Math.floor(9999999 * Math.random()) + "rand.com")));
                            return 0 === e.indexOf("https:") || 0 === e.indexOf("http:") ? this._testURL(e, this.no_color) : this._testURL("http://" + e, this.no_color) || this._testURL("https://" + e, this.no_color) || this._testURL("http://www." + e, this.no_color) || this._testURL("https://www." + e, this.no_color)
                        };
                        var x, C, A = this.createElem("a", "_ec_rgb_link"),
                            N = "#_ec_rgb_link:visited{display:none;color:#FF0000}";
                        try {
                            x = 1, (C = r.createElement("style")).styleSheet ? C.styleSheet.innerHTML = N : C.innerHTML ? C.innerHTML = N : C.appendChild(r.createTextNode(N))
                        } catch (e) {
                            x = 0
                        }
                        this._getRGB = function(e, t) {
                            return t && 0 === x ? -1 : (A.href = e, A.innerHTML = e, r.body.appendChild(C), r.body.appendChild(A), r.defaultView ? r.defaultView.getComputedStyle(A, null).getPropertyValue("color") : A.currentStyle.color)
                        }, this._testURL = function(e, t) {
                            var o = this._getRGB(e);
                            return "rgb(255, 0, 0)" === o || "#ff0000" === o || t && o !== t ? 1 : 0
                        }
                    }
                }(window)
            } catch (e) {}
        }
    }
]);
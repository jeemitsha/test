"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [30362], {
        276141: (e, t, i) => {
            i.r(t), i.d(t, {
                clearOldSettings: () => a
            });
            var o = i(62802);

            function* n() {
                yield* function*() {
                    for (const e of ["markets.quotes.hide_description", "main_page_hotlist_stocks_market", "studyMarket.favorites.extra", "hint.colorThemeHeaderMenu", "hint.layoutMenu", "hint.helpMenu", "hint.newsTab", "hint.removeSaveButton", "hint.watchlistDotsMenu", "hint.menuSwitcher", "hint.anonymous_user_menu", "hint.symbolSearchHotkeyChanged", "hint.favoriteDrawingsFixedToolbar", "hint.intervalHotkeyChanged", "hint.themeSwitcher", "hint.watchlist.move_to_chart", "alerts.hide_inactive", "alerts.show_for_curren_symbol_only", "alerts.show_for_curren_resolution_only", "alerts.widget.selected_alert_id", "alerts.creating.send_true_sms", "site.feed_widgets", "tv-chart-changed-notification", "hotlist.active_tab", "trading.filter_brokers_by_locale", "trading.reviewDialogShowedOnLogin", "blackfriday.showPopup", "black_friday.shown_popup_2017", "black_friday.shown_popup_2018", "black_friday.shown_popup_2019", "black_friday.shown_popup_2020", "cyber_monday.shown_popup_2020", "replay.highlightShown", "replay.manager.autoplayDelay", "gui.replay.toolbar.position"]) o.remove(e), yield;
                    for (const e of o.keys()) e.startsWith("widgetbar.widget.news.") && o.remove(e), e.startsWith("study_") && "{}" === o.getValue(e) && o.remove(e), yield
                }(), yield* function*() {
                    for (const e of ["application-clipboard", "NaN", "opened-tabs", "symbol_page_overview_chart_type"]) localStorage.removeItem(e), yield
                }()
            }

            function a() {
                const e = n();

                function t() {
                    window.requestIdleCallback ? window.requestIdleCallback(i) : setTimeout(i, 0)
                }

                function i(i) {
                    do {
                        if (e.next().done) return
                    } while (i && i.timeRemaining() > 3);
                    t()
                }
                t()
            }
        }
    }
]);
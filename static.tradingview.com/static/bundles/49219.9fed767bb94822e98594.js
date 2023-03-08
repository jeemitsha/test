(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [49219], {
        249219: (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, {
                localeMarketsMap: () => u,
                getDefaultMarketForLocale: () => g,
                getDefaultStockMarket: () => p,
                getMarketsByScreenerType: () => m,
                getMarketFieldValuesByScreenerType: () => E,
                marketFilterValues: () => T,
                getMarketFromSymbol: () => x,
                getStocksByMarket: () => M,
                getExchangesByMarkets: () => b,
                getUnavailableWidgetMarkets: () => w,
                getUnavailableWidgetExchangesMap: () => C
            });
            var o = l(519073),
                n = l(202339);
            const i = l(959941),
                t = l(719096),
                r = {},
                s = new Map([
                    ["uae", l(777754).t(null, void 0, l(975308))]
                ]);
            for (const e of t) {
                const a = i[e];
                if (a.screenerName) {
                    const l = s.has(a.screenerName) ? s.get(a.screenerName) : (0, n.triesTranslateCountrieName)(a.title);
                    r[a.screenerName] = {
                        flag: a.flag || e,
                        title: l,
                        stocks: a.exchangesStocks || [],
                        timezone: a.screenerTimezone,
                        group: a.group,
                        country: e
                    }
                }
            }
            const u = {
                forex: "forex",
                cfd: "cfd",
                crypto: "crypto"
            };
            for (const e of t) {
                const a = i[e];
                a.screenerName && (u[a.tvLocale || e] = a.screenerName)
            }
            const c = l(161379),
                d = {
                    forex: {
                        icon: `<span class="tv-screener-market-select__item-forex">${l(890756)}</span>`,
                        title: l(777754).t(null, void 0, l(324241)),
                        stocks: []
                    }
                },
                v = {
                    crypto: {
                        icon: `<span class="tv-screener-market-select__item-bitcoin">${c}</span>`,
                        title: l(777754).t(null, void 0, l(637909)),
                        stocks: []
                    }
                },
                _ = "america";

            function g(e, a = "stock") {
                return "forex" === a ? "forex" : "crypto" === a ? "crypto" : u[e] || _
            }

            function p() {
                return _
            }

            function m(e) {
                return "stock" === e ? r : "forex" === e ? d : "crypto" === e ? v : r
            }
            const h = {
                    america: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 2e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_30d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_60d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_90d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        relative_volume_10d_calc: [0, 5, 10, 15, 20, 50, 75, 100],
                        premarket_volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        postmarket_volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        change_abs: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        change: [-50, -20, -10, 0, 10, 20, 50],
                        open: [10, 20, 50, 100],
                        close: [10, 20, 50, 100],
                        high: [10, 20, 50, 100],
                        low: [10, 20, 50, 100],
                        gap: [-50, -20, -10, 0, 10, 20, 50],
                        price_earnings_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        price_earnings_to_growth_ttm: [0, 1, 2, 3],
                        price_sales_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        return_on_assets: [-50, -30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30, 50],
                        return_on_equity: [-50, -30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30, 50],
                        debt_to_equity: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        current_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        quick_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        price_book_fq: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        price_book_ratio: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        price_free_cash_flow_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100],
                        beta_1_year: [-2, -1.5, -1, -.5, 0, .5, 1, 1.5, 2],
                        operating_margin: [-50, -20, -10, 0, 10, 20, 50],
                        earnings_per_share_basic_ttm: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 25e9, 5e10],
                        change_from_open: [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        goodwill: [5e7, 3e8, 2e9, 1e10, 2e11],
                        net_debt: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        total_debt: [5e7, 3e8, 2e9, 1e10, 2e11],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        return_on_invested_capital: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        after_tax_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        pre_tax_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        gross_margin: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        dividends_paid: [-2e11, -1e10, -2e9, -3e8, -5e7, 0],
                        dividend_yield_recent: [0, 5, 10, 15, 20, 25, 50, 100],
                        basic_eps_net_income: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        net_income: [-5e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        gross_profit: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        gross_profit_fq: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        number_of_shareholders: [100, 500, 1e3, 1e4, 1e5, 1e6],
                        float_shares_outstanding: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_assets: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11],
                        total_liabilities_fy: [5e7, 3e8, 2e9, 1e10, 2e11],
                        total_liabilities_fq: [5e7, 3e8, 2e9, 1e10, 2e11],
                        earnings_per_share_diluted_ttm: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        earnings_per_share_forecast_next_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        earnings_per_share_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        enterprise_value_ebitda_ttm: [-5e3, -1e3, 0, 1e3, 5e3],
                        enterprise_value_fq: [-2e11, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        eps_surprise_fq: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        eps_surprise_percent_fq: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        price_revenue_ttm: [0, 5, 10, 50, 100, 1e3, 5e3, 1e4],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 1e6],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        last_annual_revenue: [5e7, 3e8, 2e9, 1e10, 2e11],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        ChaikinMoneyFlow: [-1, -.9, -.8, -.7, -.6, -.5, -.4, -.3, -.2, -.1, 0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        MoneyFlow: [0, 5, 10, 15, 25, 50, 100],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 5e8, 75e7]
                    },
                    uk: {
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        current_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 75, 100],
                        total_shares_outstanding_fundamental: [5e6, 1e7, 5e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        dividends_paid: [-2e11, -15e10, -5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11]
                    },
                    india: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3, 1e4, 2e4],
                        quick_ratio: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 500],
                        change_from_open: [-20, -10, 0, 10, 20, 50],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 3e8, 5e8],
                        dividends_paid: [-5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 5e9, 1e10],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 2e5]
                    },
                    spain: {
                        market_cap_basic: [1e7, 3e7, 5e7, 1e8, 3e8, 5e8, 1e9, 1e10, 5e10],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10],
                        change: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        gap: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        quick_ratio: [0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 15e9],
                        "Volatility.W": [0, 5, 10, 15, 20],
                        "Volatility.M": [0, 5, 10, 15, 20],
                        "Volatility.D": [0, 5, 10, 15, 20],
                        Mom: [-15, -10, -5, 0, 5, 10, 15],
                        goodwill: [5e7, 3e8, 2e9, 1e10, 25e9],
                        revenue_per_employee: [1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        dividends_paid: [-5e9, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e10],
                        price_revenue_ttm: [0, 5, 10, 50, 100]
                    },
                    russia: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7, 5e8, 1e9],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7, 5e8, 1e9],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15, 20, 50],
                        change: [-30, -20, -15, -10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        gap: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        quick_ratio: [0, 1, 2, 3, 4, 5, 10, 15, 20],
                        price_free_cash_flow_ttm: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        change_from_open: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50],
                        goodwill: [1e7, 5e7, 3e8, 2e9, 1e10, 1e11],
                        revenue_per_employee: [1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 3e7],
                        dividends_paid: [-15e10, -5e10, -1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        gross_profit: [-1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e11],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5, 5e5],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20, 50, 100, 500, 1e3]
                    },
                    australia: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 15e10],
                        earnings_per_share_basic_ttm: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 2e10],
                        dividends_paid: [-5e9, -2e9, -3e8, -5e7, 0]
                    },
                    brazil: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15, 20, 50],
                        open: [10, 20, 50, 100, 200, 500, 1e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3],
                        earnings_per_share_basic_ttm: [-50, -20, -10, 0, 10, 20, 50],
                        change_from_open: [-20, -10, 0, 10, 20],
                        "Volatility.W": [0, 5, 10, 15, 20],
                        "Volatility.M": [0, 5, 10, 15, 20],
                        goodwill: [5e7, 3e8, 2e9, 1e10],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6],
                        dividends_paid: [-1e10, -2e9, -3e8, -1e8, -5e7, 0],
                        net_income: [-2e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 1e10, 2e10],
                        gross_profit: [-1e8, -5e7, 5e7, 3e8, 2e9, 1e10, 1e11],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 5e9, 1e10],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10, 1e11],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 2e11],
                        price_revenue_ttm: [0, 5, 10, 50, 100, 1e3],
                        number_of_employees: [100, 500, 1e3, 1e4, 1e5],
                        last_annual_eps: [-100, -50, -20, -10, 0, 10, 20]
                    },
                    japan: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12, 5e12],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        relative_volume_10d_calc: [0, 5, 10, 15, 20, 50],
                        change: [-30, -20, -10, 0, 10, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 1e4, 1e5],
                        gap: [-20, -10, 0, 10, 20],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 25e9, 5e10, 1e11, 2e11, 5e11],
                        change_from_open: [-20, -10, -5, 0, 5, 10, 20],
                        "Volatility.W": [0, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 5, 10, 15, 20, 30],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 5e7]
                    },
                    newzealand: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15],
                        open: [5, 10, 20, 50],
                        close: [5, 10, 20, 50],
                        high: [5, 10, 20, 50],
                        low: [5, 10, 20, 50],
                        current_ratio: [0, 5, 10, 15, 20, 25],
                        quick_ratio: [0, 5, 10, 15, 20, 25],
                        earnings_per_share_basic_ttm: [-10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10],
                        ebitda: [5e5, 1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 2e9, 5e9, 1e10, 2e10],
                        change_from_open: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        ATR: [.25, .5, .75, 1, 1.5, 2],
                        Mom: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        goodwill: [25e6, 5e7, 1e8, 25e7, 5e8, 2e9],
                        revenue_per_employee: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6],
                        dividends_paid: [-5e9, -2e9, -3e8, -5e7, 0],
                        basic_eps_net_income: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        net_income: [-5e10, -1e10, -2e9, -3e8, -5e7, 5e7, 3e8, 2e9, 5e9],
                        gross_profit: [0, 25e6, 5e7, 25e7, 5e8, 2e9, 1e10],
                        total_shares_outstanding_fundamental: [5e7, 3e8, 2e9, 1e10],
                        total_current_assets: [5e7, 3e8, 2e9, 1e10],
                        total_revenue: [0, 5e7, 3e8, 2e9, 1e10, 25e9],
                        earnings_per_share_diluted_ttm: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        earnings_per_share_forecast_next_fq: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        earnings_per_share_fq: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        price_revenue_ttm: [0, 5, 10, 50, 100],
                        number_of_employees: [100, 500, 1e3, 1e4, 5e4],
                        last_annual_eps: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7]
                    },
                    turkey: {
                        market_cap_basic: [5e6, 1e7, 5e7, 3e8, 2e9, 1e10, 3e10, 5e10],
                        relative_volume_10d_calc: [0, 1, 2, 3, 4, 5, 10, 15],
                        change: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
                        gap: [-20, -10, -5, 0, 5, 10, 20],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Value.Traded": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7]
                    },
                    switzerland: {
                        volume: [5e4, 1e5, 25e4, 5e5, 75e4, 1e6, 2e6, 5e6],
                        average_volume_10d_calc: [5e4, 1e5, 25e4, 5e5, 75e4, 1e6, 2e6, 5e6],
                        change: [-20, -15, -10, -5, 0, 5, 10, 15, 20]
                    },
                    hongkong: {
                        market_cap_basic: [5e7, 3e8, 2e9, 1e10, 5e10, 1e11, 2e11, 25e10, 5e11, 75e10, 1e12],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 1e8, 25e7]
                    },
                    taiwan: {
                        change: [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        "Volatility.W": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.M": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        "Volatility.D": [0, 1, 2, 3, 4, 5, 10, 15, 20, 30]
                    },
                    netherlands: {},
                    belgium: {},
                    portugal: {},
                    france: {},
                    mexico: {
                        market_cap_basic: [1e7, 5e7, 3e8, 2e9, 1e10, 2e11, 5e11, 1e12, 2e12],
                        change: [-30, -20, -15, -10, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
                        open: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        close: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        high: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3],
                        low: [10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3]
                    },
                    canada: {
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7]
                    },
                    colombia: {},
                    uae: {},
                    nigeria: {},
                    singapore: {},
                    germany: {
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 25e6]
                    },
                    peru: {},
                    poland: {
                        volume: [5e4, 1e5, 2e5, 5e5, 75e4, 1e6, 2e6]
                    },
                    italy: {},
                    argentina: {
                        volume: [5e4, 1e5, 2e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7]
                    },
                    israel: {},
                    egypt: {},
                    srilanka: {},
                    serbia: {},
                    chile: {},
                    china: {},
                    malaysia: {},
                    ksa: {},
                    bahrain: {},
                    qatar: {},
                    indonesia: {},
                    finland: {},
                    iceland: {},
                    denmark: {},
                    romania: {},
                    hungary: {},
                    sweden: {},
                    slovakia: {},
                    lithuania: {},
                    luxembourg: {},
                    estonia: {},
                    latvia: {},
                    vietnam: {},
                    rsa: {},
                    thailand: {},
                    tunisia: {},
                    korea: {},
                    kenya: {},
                    kuwait: {},
                    norway: {},
                    philippines: {},
                    greece: {},
                    venezuela: {},
                    cyprus: {}
                },
                S = {
                    forex: {
                        change_abs: [-50, -20, -10, 0, 10, 20, 50],
                        change: [-5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 5],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-5, -2.5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 2.5, 5],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100]
                    }
                },
                k = {
                    crypto: {
                        market_cap_calc: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        market_cap_diluted_calc: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10, 1e11],
                        total_shares_outstanding: [1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 5e9, 1e10, 5e10, 1e11],
                        total_shares_diluted: [1e6, 5e6, 1e7, 5e7, 1e8, 5e8, 1e9, 5e9, 1e10, 5e10, 1e11],
                        total_value_traded: [1e4, 1e5, 5e5, 1e6, 1e7, 3e8, 2e9, 1e10, 5e10],
                        volume: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7],
                        average_volume_10d_calc: [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7, 3e8, 5e8, 2e9],
                        relative_volume_10d_calc: [0, .5, 1, 1.5, 2, 2.5, 5],
                        change_abs: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        change: [-50, -20, -10, 0, 10, 20, 50],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-10, -5, -4, -3, -2, -1, -.5, 0, .5, 1, 2, 3, 4, 5, 10],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100],
                        "24h_vol|5": [5e4, 1e5, 5e5, 75e4, 1e6, 2e6, 5e6, 1e7, 2e7, 5e7]
                    }
                },
                f = {
                    cfd: {
                        volume: [1e3, 5e3, 1e4, 5e4, 1e5],
                        average_volume_10d_calc: [5e3, 1e4, 5e4, 1e5, 1e6, 1e7, 1e8, 1e9],
                        relative_volume_10d_calc: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1],
                        change_abs: [-50, -20, -10, 0, 10, 20, 50],
                        change: [-5, -1, -.5, -.4, -.3, -.2, -.1, 0, -.1, .2, .3, .4, .5, 1, 5],
                        bid: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        ask: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        open: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        close: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        high: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        low: [5, 10, 20, 50, 100, 500, 1e3, 5e3],
                        change_from_open: [-5, -4, -3, -2, -1, -.5, 0, .5, 1, 2, 3, 4, 5],
                        "Perf.W": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.1M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.3M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.6M": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.Y": [-50, -20, -10, 0, 10, 20, 50],
                        "Perf.YTD": [-50, -20, -10, 0, 10, 20, 50],
                        "Volatility.W": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.M": [0, 5, 10, 15, 20, 30, 50, 70],
                        "Volatility.D": [0, 5, 10, 15, 20, 30, 50, 70],
                        ADX: [10, 20, 30, 40, 50, 60, 70, 80, 90],
                        ATR: [.25, .5, .75, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
                        Mom: [-30, -20, -15, -10, -5, 0, 5, 10, 15, 20, 30],
                        CCI20: [-100, -50, -20, -10, 0, 10, 20, 50, 100]
                    }
                };

            function E(e) {
                switch (e) {
                    case "stock":
                    case "futures":
                        return h;
                    case "forex":
                        return S;
                    case "crypto":
                    case "crypto_mkt":
                        return k;
                    case "cfd":
                        return f
                }
                return h
            }
            const T = {
                    america: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: 1
                            }
                        },
                        earnings_this_week: {
                            earnings_release_next_date: l(777754).t(null, void 0, l(924267))
                        }
                    },
                    uk: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    india: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: 2
                            }
                        }
                    },
                    spain: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .1
                            }
                        }
                    },
                    russia: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    australia: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        }
                    },
                    brazil: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    japan: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    newzealand: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    turkey: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    switzerland: {
                        top_gainers: {
                            close: [.1, 1e4]
                        },
                        top_losers: {
                            close: [.1, 1e4]
                        }
                    },
                    hongkong: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    taiwan: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    netherlands: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    belgium: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    portugal: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    france: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    mexico: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    canada: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    singapore: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    germany: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    poland: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    israel: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    italy: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .5
                            }
                        }
                    },
                    argentina: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        },
                        unusual_volume: {
                            relative_volume_10d_calc: {
                                operator: "greater",
                                value: .2
                            }
                        }
                    },
                    forex: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        most_capitalized: null,
                        earnings_this_week: null,
                        volume_leaders: null,
                        most_volatile: {
                            "Volatility.D": {
                                operator: "greater",
                                value: 1
                            }
                        },
                        unusual_volume: null,
                        high_dividend: null
                    },
                    crypto: {
                        top_gainers: {
                            close: null
                        },
                        top_losers: {
                            close: null
                        },
                        most_capitalized: null,
                        earnings_this_week: null,
                        volume_leaders: null,
                        most_volatile: {
                            "Volatility.D": {
                                operator: "greater",
                                value: 1
                            }
                        },
                        unusual_volume: null,
                        high_dividend: null
                    },
                    china: {
                        top_gainers: {
                            close: [2, 1e4]
                        },
                        top_losers: {
                            close: [2, 1e4]
                        }
                    },
                    chile: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    bahrain: {
                        top_gainers: {
                            close: [.01, 1e4]
                        },
                        top_losers: {
                            close: [.01, 1e4]
                        }
                    },
                    malaysia: {
                        top_gainers: {
                            close: [.01, 1e4]
                        },
                        top_losers: {
                            close: [.01, 1e4]
                        }
                    },
                    serbia: {
                        top_gainers: {
                            close: [.1, 1e4]
                        },
                        top_losers: {
                            close: [.1, 1e4]
                        }
                    },
                    ksa: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    },
                    egypt: {
                        top_gainers: {
                            close: [1, 1e4]
                        },
                        top_losers: {
                            close: [1, 1e4]
                        }
                    }
                },
                A = {
                    bond: "cfd",
                    cfd: "cfd",
                    crypto: "crypto",
                    dr: "stock",
                    forex: "forex",
                    fund: "stock",
                    futures: "futures",
                    index: "index",
                    right: "stock",
                    stock: "stock",
                    structured: "stock",
                    warrant: "stock"
                },
                x = (e, a, l) => {
                    if (l && 0 !== l.length) {
                        if ((0, o.hasCryptoTypespec)(a, l)) return "crypto";
                        if (l.includes("government")) return "cfd";
                        if (l.includes("warrant") || l.includes("right") || l.includes("structured") || l.includes("bond") || l.includes("convertible") || l.includes("corporate")) return N(e)
                    }
                    const n = A[a];
                    return "stock" === n || "index" === n || "futures" === n ? N(e) : n || a
                },
                y = {
                    EURONEXT: "euronext"
                };

            function N(e) {
                return y[e] || u[(e => {
                    let a = "us";
                    for (const l of t) {
                        const o = i[l];
                        if (o.exchangesStocks && o.exchangesStocks.includes(e) || o.defaultExchange === e) {
                            a = o.tvLocale || l;
                            break
                        }
                    }
                    return a
                })(e)]
            }

            function M(e) {
                return r[e] && r[e].stocks || []
            }

            function b(e) {
                return e.reduce(((e, a) => e.concat(M(a))), [])
            }
            const z = ["luxembourg", "greece", "norway", "slovakia", "sweden", "philippines"];

            function w() {
                return z
            }
            const B = {
                india: ["NSE"]
            };

            function C() {
                return B
            }
        },
        202339: (e, a, l) => {
            "use strict";
            l.d(a, {
                triesTranslateCountrieName: () => n
            });
            var o = l(777754);

            function n(e) {
                return i.get(e) || e
            }
            const i = new Map([
                ["Africa", o.t(null, void 0, l(655312))],
                ["Americas", o.t(null, void 0, l(958290))],
                ["Asia", o.t(null, void 0, l(161768))],
                ["Europe", o.t(null, void 0, l(559592))],
                ["Pacific", o.t(null, void 0, l(632715))],
                ["Middle East", o.t(null, void 0, l(372560))],
                ["Afghanistan", o.t(null, void 0, l(488561))],
                ["Åland Islands", o.t(null, void 0, l(574177))],
                ["Albania", o.t(null, void 0, l(131898))],
                ["Algeria", o.t(null, void 0, l(181053))],
                ["American Samoa", o.t(null, void 0, l(655410))],
                ["Andorra", o.t(null, void 0, l(682079))],
                ["Angola", o.t(null, void 0, l(476342))],
                ["Anguilla", o.t(null, void 0, l(768063))],
                ["Antarctica", o.t(null, void 0, l(314840))],
                ["Antigua and Barbuda", o.t(null, void 0, l(349809))],
                ["Argentina", o.t(null, void 0, l(834742))],
                ["Armenia", o.t(null, void 0, l(384290))],
                ["Aruba", o.t(null, void 0, l(399659))],
                ["Australia", o.t(null, void 0, l(50132))],
                ["Austria", o.t(null, void 0, l(226505))],
                ["Azerbaijan", o.t(null, void 0, l(751361))],
                ["Bahamas", o.t(null, void 0, l(755169))],
                ["Bahrain", o.t(null, void 0, l(53260))],
                ["Bangladesh", o.t(null, void 0, l(61587))],
                ["Barbados", o.t(null, void 0, l(560803))],
                ["Belarus", o.t(null, void 0, l(909293))],
                ["Belgium", o.t(null, void 0, l(637653))],
                ["Belize", o.t(null, void 0, l(577138))],
                ["Benin", o.t(null, void 0, l(800662))],
                ["Bermuda", o.t(null, void 0, l(852424))],
                ["Bhutan", o.t(null, void 0, l(624751))],
                ["Bolivia", o.t(null, void 0, l(984615))],
                ["Bonaire, Sint Eustatius and Saba", o.t(null, void 0, l(661033))],
                ["Bosnia and Herzegovina", o.t(null, void 0, l(41448))],
                ["Botswana", o.t(null, void 0, l(746406))],
                ["Bouvet Island", o.t(null, void 0, l(896497))],
                ["Brazil", o.t(null, void 0, l(228867))],
                ["British Indian Ocean Territory", o.t(null, void 0, l(660635))],
                ["British Virgin Islands", o.t(null, void 0, l(667354))],
                ["Brunei", o.t(null, void 0, l(660484))],
                ["Bulgaria", o.t(null, void 0, l(801685))],
                ["Burkina Faso", o.t(null, void 0, l(713026))],
                ["Burundi", o.t(null, void 0, l(238912))],
                ["Cabo Verde", o.t(null, void 0, l(996415))],
                ["Cambodia", o.t(null, void 0, l(551054))],
                ["Cameroon", o.t(null, void 0, l(201132))],
                ["Canada", o.t(null, void 0, l(280206))],
                ["Cayman Islands", o.t(null, void 0, l(290207))],
                ["Central African Republic", o.t(null, void 0, l(145112))],
                ["Chad", o.t(null, void 0, l(137093))],
                ["Chile", o.t(null, void 0, l(141840))],
                ["China", o.t(null, void 0, l(420844))],
                ["Christmas Island", o.t(null, void 0, l(180144))],
                ["Cocos (Keeling) Islands", o.t(null, void 0, l(269358))],
                ["Colombia", o.t(null, void 0, l(731144))],
                ["Comoros", o.t(null, void 0, l(408646))],
                ["Congo", o.t(null, void 0, l(601406))],
                ["Congo (the Democratic Republic of the)", o.t(null, void 0, l(167291))],
                ["Cook Islands", o.t(null, void 0, l(453679))],
                ["Curacao", o.t(null, void 0, l(495937))],
                ["Costa Rica", o.t(null, void 0, l(708897))],
                ["Côte d'Ivoire", o.t(null, void 0, l(743648))],
                ["Croatia", o.t(null, void 0, l(663849))],
                ["Cuba", o.t(null, void 0, l(987240))],
                ["Curaçao", o.t(null, void 0, l(289599))],
                ["Cyprus", o.t(null, void 0, l(551017))],
                ["Czechia", o.t(null, void 0, l(471406))],
                ["Czech Republic", o.t(null, void 0, l(342054))],
                ["Denmark", o.t(null, void 0, l(64901))],
                ["Djibouti", o.t(null, void 0, l(439687))],
                ["Dominica", o.t(null, void 0, l(887461))],
                ["Dominican Republic", o.t(null, void 0, l(863314))],
                ["Ecuador", o.t(null, void 0, l(593004))],
                ["Egypt", o.t(null, void 0, l(205390))],
                ["El Salvador", o.t(null, void 0, l(444228))],
                ["Equatorial Guinea", o.t(null, void 0, l(802376))],
                ["Eritrea", o.t(null, void 0, l(33356))],
                ["Estonia", o.t(null, void 0, l(959823))],
                ["Falkland Islands", o.t(null, void 0, l(903181))],
                ["Eswatini", o.t(null, void 0, l(871985))],
                ["Ethiopia", o.t(null, void 0, l(698440))],
                ["European Union", o.t(null, void 0, l(600442))],
                ["Falkland Islands (Malvinas)", o.t(null, void 0, l(464588))],
                ["Faroe Islands", o.t(null, void 0, l(246844))],
                ["Fiji", o.t(null, void 0, l(979981))],
                ["Finland", o.t(null, void 0, l(936693))],
                ["France", o.t(null, void 0, l(696013))],
                ["French Guiana", o.t(null, void 0, l(345206))],
                ["French Polynesia", o.t(null, void 0, l(400778))],
                ["French Southern Territories", o.t(null, void 0, l(35328))],
                ["Gabon", o.t(null, void 0, l(281273))],
                ["Gambia", o.t(null, void 0, l(680793))],
                ["Georgia", o.t(null, void 0, l(118059))],
                ["Germany", o.t(null, void 0, l(159985))],
                ["Ghana", o.t(null, void 0, l(848856))],
                ["Gibraltar", o.t(null, void 0, l(423151))],
                ["Greece", o.t(null, void 0, l(480411))],
                ["Greenland", o.t(null, void 0, l(17026))],
                ["Grenada", o.t(null, void 0, l(882614))],
                ["Guadeloupe", o.t(null, void 0, l(72606))],
                ["Guam", o.t(null, void 0, l(967946))],
                ["Guatemala", o.t(null, void 0, l(673613))],
                ["Guernsey", o.t(null, void 0, l(639445))],
                ["Guinea", o.t(null, void 0, l(236877))],
                ["Guinea-Bissau", o.t(null, void 0, l(193786))],
                ["Guyana", o.t(null, void 0, l(431526))],
                ["Haiti", o.t(null, void 0, l(409073))],
                ["Heard Island and McDonald Islands", o.t(null, void 0, l(941177))],
                ["Holy See", o.t(null, void 0, l(609984))],
                ["Honduras", o.t(null, void 0, l(351863))],
                ["Hong Kong", o.t(null, void 0, l(532918))],
                ["Hungary", o.t(null, void 0, l(930646))],
                ["Iceland", o.t(null, void 0, l(664150))],
                ["India", o.t(null, void 0, l(16207))],
                ["Indonesia", o.t(null, void 0, l(609759))],
                ["Iraq", o.t(null, void 0, l(351834))],
                ["Ireland", o.t(null, void 0, l(328408))],
                ["Isle of Man", o.t(null, void 0, l(582452))],
                ["Israel", o.t(null, void 0, l(261935))],
                ["Italy", o.t(null, void 0, l(43246))],
                ["Jamaica", o.t(null, void 0, l(516243))],
                ["Japan", o.t(null, void 0, l(692443))],
                ["Jersey", o.t(null, void 0, l(119803))],
                ["Jordan", o.t(null, void 0, l(418556))],
                ["Kazakhstan", o.t(null, void 0, l(17904))],
                ["Kenya", o.t(null, void 0, l(89080))],
                ["Kiribati", o.t(null, void 0, l(593442))],
                ["Kosovo", o.t(null, void 0, l(695873))],
                ["Kuwait", o.t(null, void 0, l(872374))],
                ["Kyrgyzstan", o.t(null, void 0, l(357872))],
                ["Laos", o.t(null, void 0, l(446984))],
                ["Latvia", o.t(null, void 0, l(484045))],
                ["Lebanon", o.t(null, void 0, l(249647))],
                ["Lesotho", o.t(null, void 0, l(491338))],
                ["Liberia", o.t(null, void 0, l(244568))],
                ["Libya", o.t(null, void 0, l(687451))],
                ["Liechtenstein", o.t(null, void 0, l(148202))],
                ["Lithuania", o.t(null, void 0, l(529113))],
                ["Luxembourg", o.t(null, void 0, l(164352))],
                ["Macau", o.t(null, void 0, l(881206))],
                ["Macao", o.t(null, void 0, l(316450))],
                ["Madagascar", o.t(null, void 0, l(975621))],
                ["Malawi", o.t(null, void 0, l(652371))],
                ["Malaysia", o.t(null, void 0, l(622622))],
                ["Maldives", o.t(null, void 0, l(704255))],
                ["Mali", o.t(null, void 0, l(410127))],
                ["Malta", o.t(null, void 0, l(334190))],
                ["Marshall Islands", o.t(null, void 0, l(991727))],
                ["Martinique", o.t(null, void 0, l(65413))],
                ["Mauritania", o.t(null, void 0, l(335075))],
                ["Mauritius", o.t(null, void 0, l(902616))],
                ["Mayotte", o.t(null, void 0, l(36227))],
                ["Mexico", o.t(null, void 0, l(555087))],
                ["Micronesia (Federated States of)", o.t(null, void 0, l(178455))],
                ["Moldova", o.t(null, void 0, l(503427))],
                ["Monaco", o.t(null, void 0, l(904982))],
                ["Mongolia", o.t(null, void 0, l(927963))],
                ["Montenegro", o.t(null, void 0, l(990370))],
                ["Montserrat", o.t(null, void 0, l(153868))],
                ["Morocco", o.t(null, void 0, l(216641))],
                ["Mozambique", o.t(null, void 0, l(158266))],
                ["Myanmar", o.t(null, void 0, l(830146))],
                ["Namibia", o.t(null, void 0, l(714417))],
                ["Nauru", o.t(null, void 0, l(223060))],
                ["Nepal", o.t(null, void 0, l(128228))],
                ["Netherlands", o.t(null, void 0, l(353770))],
                ["New Caledonia", o.t(null, void 0, l(748447))],
                ["New Zealand", o.t(null, void 0, l(824143))],
                ["Nicaragua", o.t(null, void 0, l(972215))],
                ["Niger", o.t(null, void 0, l(374005))],
                ["Nigeria", o.t(null, void 0, l(62410))],
                ["Niue", o.t(null, void 0, l(136995))],
                ["Norfolk Island", o.t(null, void 0, l(99203))],
                ["North Macedonia", o.t(null, void 0, l(420385))],
                ["Northern Mariana Islands", o.t(null, void 0, l(498923))],
                ["Norway", o.t(null, void 0, l(145075))],
                ["Oman", o.t(null, void 0, l(552456))],
                ["Pakistan", o.t(null, void 0, l(49145))],
                ["Palau", o.t(null, void 0, l(986532))],
                ["Palestine, State of", o.t(null, void 0, l(103738))],
                ["Panama", o.t(null, void 0, l(747908))],
                ["Papua New Guinea", o.t(null, void 0, l(666802))],
                ["Paraguay", o.t(null, void 0, l(33773))],
                ["Peru", o.t(null, void 0, l(622979))],
                ["Philippines", o.t(null, void 0, l(226813))],
                ["Pitcairn", o.t(null, void 0, l(539338))],
                ["Poland", o.t(null, void 0, l(210119))],
                ["Portugal", o.t(null, void 0, l(123496))],
                ["Puerto Rico", o.t(null, void 0, l(651330))],
                ["Qatar", o.t(null, void 0, l(619056))],
                ["Réunion", o.t(null, void 0, l(102711))],
                ["Romania", o.t(null, void 0, l(385646))],
                ["Russia", o.t(null, void 0, l(230799))],
                ["Russian Federation", o.t(null, void 0, l(238201))],
                ["SINT MAARTEN (DUTCH PART)", o.t(null, void 0, l(262681))],
                ["Rwanda", o.t(null, void 0, l(242890))],
                ["Saint Barthélemy", o.t(null, void 0, l(2679))],
                ["Saint Helena, Ascension and Tristan da Cunha", o.t(null, void 0, l(499829))],
                ["Saint Kitts and Nevis", o.t(null, void 0, l(317639))],
                ["Saint Lucia", o.t(null, void 0, l(174215))],
                ["Saint Martin (French part)", o.t(null, void 0, l(566083))],
                ["Saint Pierre and Miquelon", o.t(null, void 0, l(779773))],
                ["Saint Vincent and the Grenadines", o.t(null, void 0, l(189466))],
                ["Samoa", o.t(null, void 0, l(855735))],
                ["San Marino", o.t(null, void 0, l(935297))],
                ["Sao Tome and Principe", o.t(null, void 0, l(767112))],
                ["Saudi Arabia", o.t(null, void 0, l(936261))],
                ["Senegal", o.t(null, void 0, l(415882))],
                ["Serbia", o.t(null, void 0, l(896573))],
                ["Seychelles", o.t(null, void 0, l(959609))],
                ["Sierra Leone", o.t(null, void 0, l(338217))],
                ["Singapore", o.t(null, void 0, l(156683))],
                ["Sint Maarten (Dutch part)", o.t(null, void 0, l(236150))],
                ["Slovakia", o.t(null, void 0, l(506262))],
                ["Slovenia", o.t(null, void 0, l(42141))],
                ["Solomon Islands", o.t(null, void 0, l(495446))],
                ["Somalia", o.t(null, void 0, l(334373))],
                ["South Africa", o.t(null, void 0, l(528900))],
                ["South Georgia and the South Sandwich Islands", o.t(null, void 0, l(638670))],
                ["South Korea", o.t(null, void 0, l(173160))],
                ["South Sudan", o.t(null, void 0, l(197758))],
                ["Spain", o.t(null, void 0, l(792334))],
                ["Sri Lanka", o.t(null, void 0, l(567835))],
                ["Sudan", o.t(null, void 0, l(162923))],
                ["Suriname", o.t(null, void 0, l(281528))],
                ["Svalbard and Jan Mayen", o.t(null, void 0, l(705904))],
                ["Sweden", o.t(null, void 0, l(182404))],
                ["Switzerland", o.t(null, void 0, l(440414))],
                ["Syria", o.t(null, void 0, l(443174))],
                ["Taiwan", o.t(null, void 0, l(460919))],
                ["Tajikistan", o.t(null, void 0, l(826553))],
                ["Tanzania", o.t(null, void 0, l(185494))],
                ["Thailand", o.t(null, void 0, l(433138))],
                ["Timor-Leste", o.t(null, void 0, l(655802))],
                ["Togo", o.t(null, void 0, l(574871))],
                ["Tokelau", o.t(null, void 0, l(520466))],
                ["Tonga", o.t(null, void 0, l(724580))],
                ["Trinidad and Tobago", o.t(null, void 0, l(333041))],
                ["Tunisia", o.t(null, void 0, l(420638))],
                ["Turkey", o.t(null, void 0, l(694398))],
                ["Turkmenistan", o.t(null, void 0, l(616831))],
                ["Turks and Caicos Islands", o.t(null, void 0, l(555526))],
                ["Tuvalu", o.t(null, void 0, l(626449))],
                ["U.S. Virgin Islands", o.t(null, void 0, l(728542))],
                ["UAE", o.t(null, void 0, l(975308))],
                ["USA", o.t(null, void 0, l(787935))],
                ["Uganda", o.t(null, void 0, l(308395))],
                ["Ukraine", o.t(null, void 0, l(263018))],
                ["United Arab Emirates", o.t(null, void 0, l(287916))],
                ["United Kingdom", o.t(null, void 0, l(606994))],
                ["United States", o.t(null, void 0, l(411176))],
                ["United States Minor Outlying Islands", o.t(null, void 0, l(431860))],
                ["Uruguay", o.t(null, void 0, l(124991))],
                ["USA", o.t(null, void 0, l(787935))],
                ["Uzbekistan", o.t(null, void 0, l(730902))],
                ["Vanuatu", o.t(null, void 0, l(863837))],
                ["Venezuela", o.t(null, void 0, l(739055))],
                ["Vietnam", o.t(null, void 0, l(450049))],
                ["Virgin Islands (British)", o.t(null, void 0, l(159002))],
                ["Virgin Islands (U.S.)", o.t(null, void 0, l(707897))],
                ["Wallis and Futuna", o.t(null, void 0, l(258159))],
                ["Western Sahara", o.t(null, void 0, l(419992))],
                ["Yemen", o.t(null, void 0, l(242175))],
                ["Zambia", o.t(null, void 0, l(239478))],
                ["Zimbabwe", o.t(null, void 0, l(58309))]
            ])
        },
        161379: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><g fill="none" fill-rule="evenodd"><path d="M9.5 8.5c1.105 0 2-.395 2-1.5s-.895-1.5-2-1.5h-3v3h3zm.5 4c1.38 0 2.5-.62 2.5-2s-1.12-2-2.5-2H6.5v4H10z"/><path stroke-linecap="square" d="M9.5 3.5V5m0 8v1.5m-2-1.5v1.5m-2-2H6m-.5-7H6m1.5-2V5"/><circle cx="9" cy="9" r="8.5"/></g></svg>'
        },
        890756: e => {
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="100%" height="100%"><g fill="none" fill-rule="evenodd" stroke="currentColor"><circle cx="9" cy="9" r="8.5"/><path stroke-linecap="square" d="M5.5 13.5v-9h4m-2 4H6m3.5 1l3 4m0-4l-3 4"/></g></svg>'
        },
        959941: e => {
            "use strict";
            e.exports = JSON.parse('{"us":{"title":"USA","screenerName":"america","screenerTimezone":"America/New_York","defaultExchange":"US","exchangesForHotlist":["AMEX","NASDAQ","NYSE","OTC","US"],"exchangesStocks":["NASDAQ","NYSE","NYSE ARCA","OTC"],"group":"North America"},"ae":{"title":"United Arab Emirates","screenerName":"uae","screenerTimezone":"Asia/Dubai","exchangesStocks":["DFM","ADX"],"group":"Middle East / Africa"},"ar":{"title":"Argentina","screenerName":"argentina","screenerTimezone":"America/Argentina/Buenos_Aires","exchangesForHotlist":["BCBA"],"exchangesStocks":["BYMA"],"defaultExchange":"BCBA","group":"Mexico and South America"},"at":{"title":"Austria"},"au":{"title":"Australia","screenerName":"australia","screenerTimezone":"Australia/Sydney","exchangesStocks":["ASX"],"group":"Asia / Pacific"},"be":{"title":"Belgium","screenerName":"belgium","screenerTimezone":"Europe/Brussels","exchangesForHotlist":["EURONEXT_BRU"],"exchangesStocks":["EURONEXTBRU"],"defaultExchange":"EURONEXT_BRU","group":"Europe"},"bh":{"title":"Bahrain","screenerName":"bahrain","screenerTimezone":"Asia/Bahrain","exchangesStocks":["BAHRAIN"],"group":"Middle East / Africa"},"br":{"title":"Brazil","screenerName":"brazil","screenerTimezone":"America/Sao_Paulo","exchangesStocks":["BMFBOVESPA"],"group":"Mexico and South America"},"ca":{"title":"Canada","screenerName":"canada","screenerTimezone":"America/Toronto","exchangesStocks":["TSX","TSXV","CSE","NEO"],"group":"North America"},"ch":{"title":"Switzerland","screenerName":"switzerland","screenerTimezone":"Europe/Zurich","exchangesStocks":["SIX","BX"],"group":"Europe"},"cl":{"title":"Chile","screenerName":"chile","screenerTimezone":"America/Santiago","exchangesStocks":["BCS"],"group":"Mexico and South America"},"cn":{"title":"China","tvLocale":"zh_CN","screenerName":"china","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["SSE","SZSE"],"group":"Asia / Pacific"},"co":{"title":"Colombia","screenerName":"colombia","screenerTimezone":"America/Bogota","exchangesStocks":["BVC"],"group":"Mexico and South America"},"cy":{"title":"Cyprus","screenerName":"cyprus","screenerTimezone":"Europe/Cyprus","exchangesStocks":["CSECY"],"exchangesForHotlist":["CSECY"],"group":"Europe"},"cz":{"title":"Czech Republic"},"de":{"title":"Germany","tvLocale":"de_DE","screenerName":"germany","screenerTimezone":"Europe/Berlin","defaultExchange":"XETR","exchangesStocks":["FWB","SWB","XETR","BER","DUS","HAM","HAN","MUN","TRADEGATE"],"group":"Europe"},"dk":{"title":"Denmark","screenerName":"denmark","screenerTimezone":"Europe/Copenhagen","exchangesStocks":["OMXCOP"],"group":"Europe"},"ee":{"title":"Estonia","screenerName":"estonia","screenerTimezone":"Europe/Tallinn","exchangesStocks":["OMXTSE"],"group":"Europe"},"eg":{"title":"Egypt","screenerName":"egypt","screenerTimezone":"Africa/Cairo","exchangesStocks":["EGX"],"group":"Middle East / Africa"},"es":{"title":"Spain","screenerName":"spain","screenerTimezone":"Europe/Madrid","exchangesStocks":["BME"],"group":"Europe"},"eu":{"title":"European Union","screenerName":"euronext","screenerTimezone":"Europe/Paris","exchangesForHotlist":[],"exchangesStocks":["EURONEXT"]},"fi":{"title":"Finland","screenerName":"finland","screenerTimezone":"Europe/Helsinki","exchangesStocks":["OMXHEX"],"group":"Europe"},"fr":{"title":"France","screenerName":"france","screenerTimezone":"Europe/Paris","exchangesForHotlist":["EURONEXT_PAR"],"exchangesStocks":["EURONEXTPAR"],"defaultExchange":"EURONEXT_PAR","group":"Europe"},"ge":{"title":"Georgia"},"gr":{"title":"Greece","screenerName":"greece","screenerTimezone":"Europe/Athens","exchangesStocks":["ATHEX"],"group":"Europe"},"hk":{"title":"Hong Kong","screenerName":"hongkong","screenerTimezone":"Asia/Hong_Kong","exchangesStocks":["HKEX"],"group":"Asia / Pacific"},"hu":{"title":"Hungary","screenerName":"hungary","screenerTimezone":"Europe/Budapest","exchangesStocks":["BET"],"exchangesForHotlist":["BET"],"defaultExchange":"BET","group":"Europe"},"id":{"title":"Indonesia","screenerName":"indonesia","screenerTimezone":"Asia/Jakarta","exchangesStocks":["IDX"],"group":"Asia / Pacific"},"ie":{"title":"Ireland"},"il":{"title":"Israel","screenerName":"israel","screenerTimezone":"Asia/Jerusalem","exchangesStocks":["TASE"],"group":"Middle East / Africa"},"in":{"title":"India","screenerName":"india","screenerTimezone":"Asia/Kolkata","exchangesStocks":["BSE","NSE"],"group":"Asia / Pacific"},"ir":{"title":"Iran"},"is":{"title":"Iceland","screenerName":"iceland","screenerTimezone":"Atlantic/Reykjavik","exchangesStocks":["OMXICE"],"group":"Europe"},"it":{"title":"Italy","screenerName":"italy","screenerTimezone":"Europe/Rome","exchangesForHotlist":["MIL"],"exchangesStocks":["MIL"],"group":"Europe"},"jp":{"title":"Japan","tvLocale":"ja","screenerName":"japan","screenerTimezone":"Asia/Tokyo","defaultExchange":"TSE","exchangesForHotlist":["NAG","TSE"],"exchangesStocks":["TSE","NAG","FSE","SAPSE"],"group":"Asia / Pacific"},"ke":{"title":"Kenya","screenerName":"kenya","screenerTimezone":"Africa/Nairobi","exchangesStocks":["NSEKE"],"group":"Middle East / Africa"},"kp":{"title":"Noth Korea"},"kr":{"title":"South Korea","tvLocale":"kr","screenerName":"korea","screenerTimezone":"Asia/Seoul","exchangesStocks":["KRX"],"group":"Asia / Pacific"},"kw":{"title":"Kuwait","screenerName":"kuwait","screenerTimezone":"Asia/Kuwait","exchangesStocks":["KSE"],"group":"Middle East / Africa"},"lk":{"title":"Sri Lanka","screenerName":"srilanka","screenerTimezone":"Asia/Colombo","exchangesStocks":["CSELK"],"group":"Asia / Pacific"},"lt":{"title":"Lithuania","screenerName":"lithuania","screenerTimezone":"Europe/Vilnius","exchangesStocks":["OMXVSE"],"group":"Europe"},"lv":{"title":"Latvia","screenerName":"latvia","screenerTimezone":"Europe/Riga","exchangesStocks":["OMXRSE"],"group":"Europe"},"lu":{"title":"Luxembourg","screenerName":"luxembourg","screenerTimezone":"Europe/Luxembourg","exchangesStocks":["LUXSE"],"exchangesForHotlist":["LUXSE"],"defaultExchange":"LUXSE","group":"Europe"},"mx":{"title":"Mexico","screenerName":"mexico","screenerTimezone":"America/Mexico_City","exchangesStocks":["BMV"],"group":"Mexico and South America"},"my":{"title":"Malaysia","tvLocale":"ms_MY","screenerName":"malaysia","screenerTimezone":"Asia/Singapore","exchangesStocks":["MYX"],"group":"Asia / Pacific"},"ng":{"title":"Nigeria","screenerName":"nigeria","screenerTimezone":"Africa/Lagos","exchangesStocks":["NSENG"],"group":"Middle East / Africa"},"nl":{"title":"Netherlands","screenerName":"netherlands","screenerTimezone":"Europe/Amsterdam","exchangesForHotlist":["EURONEXT_AMS"],"exchangesStocks":["EURONEXTAMS"],"defaultExchange":"EURONEXT_AMS","group":"Europe"},"no":{"title":"Norway","screenerName":"norway","screenerTimezone":"Europe/Oslo","exchangesForHotlist":["OSL"],"exchangesStocks":["EURONEXTOSE"],"defaultExchange":"OSL","group":"Europe"},"nz":{"title":"New Zealand","screenerName":"newzealand","screenerTimezone":"Pacific/Auckland","exchangesStocks":["NZX"],"group":"Asia / Pacific"},"pe":{"title":"Peru","screenerName":"peru","screenerTimezone":"America/Lima","exchangesStocks":["BVL"],"group":"Mexico and South America"},"ph":{"title":"Philippines","screenerName":"philippines","screenerTimezone":"Philippines/Manila","exchangesStocks":["PSE"],"group":"Asia / Pacific"},"pl":{"title":"Poland","screenerName":"poland","screenerTimezone":"Europe/Warsaw","exchangesStocks":["GPW","NEWCONNECT"],"group":"Europe"},"pt":{"title":"Portugal","screenerName":"portugal","screenerTimezone":"Europe/Lisbon","exchangesForHotlist":["EURONEXT_LIS"],"exchangesStocks":["EURONEXTLIS"],"defaultExchange":"EURONEXT_LIS","group":"Europe"},"qa":{"title":"Qatar","screenerName":"qatar","screenerTimezone":"Asia/Qatar","exchangesStocks":["QSE"],"group":"Middle East / Africa"},"ro":{"title":"Romania","screenerName":"romania","screenerTimezone":"Europe/Bucharest","exchangesStocks":["BVB"],"exchangesForHotlist":["BVB"],"defaultExchange":"BVB","group":"Europe"},"rs":{"title":"Serbia","screenerName":"serbia","screenerTimezone":"Europe/Belgrade","exchangesStocks":["BELEX"],"group":"Europe"},"ru":{"title":"Russia","screenerName":"russia","screenerTimezone":"Europe/Moscow","exchangesStocks":["MOEX"],"group":"Europe"},"sa":{"title":"Saudi Arabia","tvLocale":"ar_AE","screenerName":"ksa","screenerTimezone":"Asia/Riyadh","exchangesStocks":["TADAWUL"],"group":"Middle East / Africa"},"se":{"title":"Sweden","tvLocale":"sv_SE","screenerName":"sweden","screenerTimezone":"Europe/Stockholm","exchangesStocks":["NGM","OMXSTO"],"exchangesForHotlist":["NGM","OMXSTO"],"group":"Europe"},"sg":{"title":"Singapore","screenerName":"singapore","screenerTimezone":"Asia/Singapore","exchangesStocks":["SGX"],"group":"Asia / Pacific"},"sk":{"title":"Slovakia","screenerName":"slovakia","screenerTimezone":"Europe/Bratislava","exchangesStocks":["BSSE"],"group":"Europe"},"th":{"title":"Thailand","tvLocale":"th_TH","screenerName":"thailand","screenerTimezone":"Asia/Bangkok","exchangesStocks":["SET"],"group":"Asia / Pacific"},"tn":{"title":"Tunisia","screenerName":"tunisia","screenerTimezone":"Africa/Tunis","exchangesStocks":["BVMT"],"group":"Middle East / Africa"},"tr":{"title":"Turkey","screenerName":"turkey","screenerTimezone":"Europe/Istanbul","exchangesStocks":["BIST"],"group":"Europe"},"tw":{"title":"Taiwan","tvLocale":"zh_TW","screenerName":"taiwan","screenerTimezone":"Asia/Taipei","exchangesStocks":["TWSE","TPEX"],"group":"Asia / Pacific"},"uk":{"title":"United Kingdom","screenerName":"uk","screenerTimezone":"Europe/London","defaultExchange":"LSE","exchangesStocks":["LSE","LSIN"],"group":"Europe"},"ve":{"title":"Venezuela","screenerName":"venezuela","screenerTimezone":"America/Caracas","exchangesStocks":["BVCV"],"group":"Mexico and South America"},"vn":{"title":"Vietnam","tvLocale":"vi_VN","screenerName":"vietnam","screenerTimezone":"Asia/Ho_Chi_Minh","exchangesStocks":["HOSE","HNX","UPCOM"],"group":"Asia / Pacific"},"za":{"title":"South Africa","screenerName":"rsa","screenerTimezone":"Africa/Johannesburg","exchangesStocks":["JSE"],"group":"Middle East / Africa"},"ww":{"title":"Worldwide"}}')
        },
        719096: e => {
            "use strict";
            e.exports = JSON.parse('["us","ae","ar","au","be","bh","br","ca","ch","cl","cn","co","cy","de","dk","ee","eg","es","fi","fr","gr","hk","hu","id","il","in","is","it","jp","ke","kr","kw","lk","lt","lv","lu","mx","my","ng","nl","no","nz","pe","ph","pl","pt","qa","rs","ru","ro","sa","se","sg","sk","th","tn","tr","tw","uk","ve","vn","za"]')
        }
    }
]);
export const dynamic = 'force-dynamic'

﻿"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

interface Term {
  term: string
  english: string
  definition: string
  market: "a-share" | "us" | "both"
}

const glossaryTerms: Term[] = [
  { term: "股票", english: "Stock", definition: "公司所有权的凭证，持有股票即成为公司股东，享有分红权和投票权。在交易所公开交易的股票称为\"上市股票\"。", market: "both" },
  { term: "A股", english: "A-Share", definition: "在中国境内交易所上市、以人民币计价交易的股票。主要在上海证券交易所（上交所）和深圳证券交易所（深交所）交易。", market: "a-share" },
  { term: "美股", english: "US Stock", definition: "在美国交易所（纽交所NYSE、纳斯达克NASDAQ等）上市的股票，以美元计价交易。全球投资者均可参与。", market: "us" },
  { term: "IPO", english: "Initial Public Offering", definition: "首次公开募股。公司首次向公众出售股票，从私人公司转变为上市公司。募集资金直接进入公司账户用于发展。", market: "both" },
  { term: "市盈率", english: "PE Ratio (Price-to-Earnings)", definition: "股价除以每股收益(EPS)，是最常用的估值指标。PE越低理论上越\"便宜\"，但不同行业的合理PE水平差异很大。例如：科技股PE通常高于银行股。", market: "both" },
  { term: "市净率", english: "PB Ratio (Price-to-Book)", definition: "股价除以每股净资产。PB<1意味着股价低于公司净资产（理论上\"打折\"）。常用于评估银行、地产等重资产行业。", market: "both" },
  { term: "ROE", english: "Return on Equity", definition: "净资产收益率，衡量公司用股东的钱赚取利润的效率。ROE=净利润÷净资产。巴菲特偏爱ROE长期高于15%的公司。", market: "both" },
  { term: "EPS", english: "Earnings Per Share", definition: "每股收益，公司净利润除以总股数。EPS增长是股价上涨的最根本驱动力。", market: "both" },
  { term: "K线图", english: "Candlestick Chart", definition: "用蜡烛形状的图形表示每个时间周期的开盘价、收盘价、最高价和最低价(OHLC)。起源于日本米市交易，是最常用的图表类型。", market: "both" },
  { term: "MACD", english: "Moving Average Convergence Divergence", definition: "指数平滑异同移动平均线，由DIF线、DEA线和MACD柱组成。用于判断趋势方向和强弱变化。金叉(上穿)为买入信号，死叉(下穿)为卖出信号。", market: "both" },
  { term: "RSI", english: "Relative Strength Index", definition: "相对强弱指标，取值范围0-100。通常RSI>70为超买（可能回调），RSI<30为超卖（可能反弹）。需结合趋势使用，强势行情中RSI可长期维持超买。", market: "both" },
  { term: "均线", english: "Moving Average (MA)", definition: "移动平均线，将一定周期内的收盘价平均后连成的线。常用的有MA5(周线)、MA10、MA20(月线)、MA60(季线)、MA250(年线)。", market: "both" },
  { term: "支撑位", english: "Support Level", definition: "股价下跌时遇到买盘阻止继续下跌的价格区域。历史上多次在这个价位止跌反弹。支撑位一旦跌破可能转为阻力位。", market: "both" },
  { term: "阻力位", english: "Resistance Level", definition: "股价上涨时遇到卖盘阻止继续上涨的价格区域。历史上多次在这个价位受阻回落。阻力位一旦突破可能转为支撑位。", market: "both" },
  { term: "成交量", english: "Volume", definition: "一定时间内股票成交的数量。量价配合是技术分析的核心原则——\"量在价先\"，成交量放大通常预示着价格方向的确认。", market: "both" },
  { term: "T+1", english: "T+1 Settlement", definition: "A股市场的结算制度：今天(T日)买入的股票，最早明天(T+1日)才能卖出。这一制度限制了日内交易，让A股的短线策略与美股有所不同。", market: "a-share" },
  { term: "T+2", english: "T+2 Settlement", definition: "美股标准结算周期：交易后第二个工作日完成资金和证券的交割。2024年5月起缩短为T+1。不影响交易本身，但影响资金的可取用时间。", market: "us" },
  { term: "涨跌停", english: "Price Limit", definition: "A股的单日涨跌幅限制：主板±10%，创业板和科创板±20%，新股上市前5日无限制，ST股票±5%。超过限制价格无法继续交易。", market: "a-share" },
  { term: "熔断", english: "Circuit Breaker", definition: "当市场指数大幅下跌时自动暂停交易的保护机制。美股标普500跌7%停15分钟，跌13%再停15分钟，跌20%全天停市。", market: "us" },
  { term: "北向资金", english: "Northbound Funds", definition: "通过沪港通和深港通从香港买入A股的外资。被视为\"聪明钱\"，其净流入/流出常被用作市场情绪指标。", market: "a-share" },
  { term: "龙虎榜", english: "Dragon and Tiger List", definition: "A股每日公布的涨跌幅偏离值达7%的前五名股票及其买卖金额最大的前五名席位。可以观察机构和游资的动向。", market: "a-share" },
  { term: "打新", english: "IPO Subscription", definition: "申购新发行的股票。A股打新采用市值配售+抽签制度，中签后通常有\"打新收益\"（新股上市首日往往大涨）。但随着市场成熟，破发风险也在增加。", market: "a-share" },
  { term: "ST股", english: "Special Treatment Stock", definition: "A股中对财务状况或其他状况异常的股票进行特别处理，股票简称前加\"ST\"。*ST表示有退市风险。通常应避免投资ST股票。", market: "a-share" },
  { term: "PDT规则", english: "Pattern Day Trader Rule", definition: "美股规则：在5个交易日内进行4次或以上日内交易（当天买当天卖），账户必须维持至少$25,000的最低资产。主要限制小额账户的日内交易频率。", market: "us" },
  { term: "VIX", english: "Volatility Index (Fear Index)", definition: "芝加哥期权交易所波动率指数，衡量标普500指数期权的隐含波动率。VIX>30表示市场极度恐慌，VIX<15表示市场平静。", market: "us" },
  { term: "FOMC", english: "Federal Open Market Committee", definition: "美联储公开市场委员会，每年召开8次例行会议决定利率政策。会议声明和会后新闻发布会对全球金融市场有重大影响。", market: "us" },
  { term: "10-K", english: "Annual Report (Form 10-K)", definition: "美国上市公司向SEC提交的年度报告，包括经审计的财务报表、业务描述、风险因素和管理层讨论。比年报更详尽，是基本面分析的核心文件。", market: "us" },
  { term: "期权", english: "Options", definition: "一种金融衍生品，给予买方在特定日期或之前以特定价格买入（Call）或卖出（Put）标的资产的权利，而非义务。卖方有义务在买方行权时履约。", market: "us" },
  { term: "希腊字母", english: "The Greeks", definition: "衡量期权价格对各种因素敏感度的指标：Delta（方向）、Gamma（Delta变化速度）、Theta（时间衰减）、Vega（波动率敏感度）。", market: "us" },
  { term: "IV Crush", english: "Implied Volatility Crush", definition: "重大事件（如财报）后，期权隐含波动率急剧下降，导致期权价格暴跌。即使股价方向判断正确，买家仍可能亏损。这是期权交易中最常见的\"陷阱\"之一。", market: "us" },
  { term: "ETF", english: "Exchange Traded Fund", definition: "交易所交易基金，像股票一样在交易所买卖的基金。可以追踪指数、行业或特定策略。成本低、透明度高、分散化好。", market: "both" },
  { term: "做市商", english: "Market Maker", definition: "持续挂出买卖双边报价、为市场提供流动性的专业机构。通过买卖价差获利。做市商的存在保证了市场的连续交易。", market: "both" },
  { term: "止损", english: "Stop Loss", definition: "预设的卖出价格，当股价跌到该价位时自动卖出以控制亏损。是风险管理最基本的工具。\"截断亏损，让利润奔跑\"。", market: "both" },
  { term: "仓位管理", english: "Position Sizing", definition: "决定每笔交易投入多少资金的策略。常用的\"1-2%法则\"：单笔交易最大亏损不超过总资金的1-2%。有效的仓位管理比选股更重要。", market: "both" },
  { term: "风险收益比", english: "Risk/Reward Ratio", definition: "一笔交易中潜在亏损与潜在收益的比率。例如1:3意味着冒1元亏损的风险去博取3元的收益。职业交易者通常不参与风险收益比低于1:2的交易。", market: "both" },
  { term: "印花税", english: "Stamp Duty", definition: "A股在卖出股票时征收的交易税，税率为成交金额的0.1%（买入时不收）。2023年8月28日起减半征收（原为0.1%，现为0.05%），是A股交易成本的重要组成部分。", market: "a-share" },
  { term: "中概股", english: "China Concept Stock", definition: "在美国或香港上市的中国公司股票。通常指互联网和科技公司（如阿里巴巴、腾讯、百度等）。受中美监管政策影响较大。", market: "us" },
  { term: "股息率", english: "Dividend Yield", definition: "每股年度分红金额÷当前股价。高股息率的股票通常为成熟型公司，适合追求稳定现金流的投资者。银行股、能源股和公用事业股通常有较高的股息率。", market: "both" },
  { term: "金叉/死叉", english: "Golden Cross / Death Cross", definition: "金叉：短期均线上穿长期均线（如MA50上穿MA200），为看涨信号。死叉：短期均线下穿长期均线，为看跌信号。需注意均线交叉信号有滞后性。", market: "both" },
  { term: "布林带", english: "Bollinger Bands", definition: "由中轨（通常MA20）和上下两条标准差线组成的通道。股价触及上轨可能超买，触及下轨可能超卖。带宽缩窄（缩口）通常预示着即将出现大幅波动。", market: "both" },
  { term: "道指", english: "Dow Jones Industrial Average", definition: "道琼斯工业平均指数，由30家美国大型蓝筹公司组成，是历史最悠久的美股指数。采用价格加权而非市值加权。", market: "us" },
  { term: "标普500", english: "S&P 500", definition: "由500家美国大型上市公司组成的市值加权指数，广泛被视为美股市场的\"代表\"。相比道指覆盖更广、更能反映整体市场。", market: "us" },
  { term: "纳指", english: "NASDAQ Composite / NASDAQ 100", definition: "以科技股为主的美国股市指数。纳斯达克综合指数包含所有纳斯达克上市公司，纳斯达克100则包含前100大非金融公司。", market: "us" },
  { term: "上证综指", english: "Shanghai Composite Index", definition: "上海证券综合指数，包含所有在上海证券交易所上市的股票。是中国A股市场最受关注的基准指数，常被简称为\"大盘\"。", market: "a-share" },
  { term: "沪深300", english: "CSI 300 Index", definition: "由沪深两市市值最大、流动性最好的300只股票组成的指数，是A股最具代表性的蓝筹指数，也是众多基金的对标基准。", market: "a-share" },
  { term: "创业板", english: "ChiNext (Growth Enterprise Market)", definition: "深交所的创业板，定位为创新型、成长型企业服务。上市门槛低于主板，但股价波动大，涨跌停限制为±20%。", market: "a-share" },
  { term: "科创板", english: "STAR Market", definition: "上交所的科创板，聚焦\"硬科技\"企业（芯片、生物医药、高端装备等）。允许未盈利企业上市，涨跌停限制±20%。", market: "a-share" },
  { term: "量化交易", english: "Quantitative Trading", definition: "使用数学模型和计算机算法进行自动化交易的方法。可以基于统计套利、趋势跟踪、均值回归等策略。对个人投资者而言门槛较高。", market: "both" },
  { term: "高送转", english: "High Stock Dividend & Transfer", definition: "A股特有的概念，指上市公司大比例送股或转增股本（如10送10）。实际上只是把一块饼切成更多小块，不改变公司价值，但A股历史上常被炒作。", market: "a-share" },
]

export default function GlossaryPage() {
  const [search, setSearch] = useState("")
  const [marketFilter, setMarketFilter] = useState<"all" | "a-share" | "us" | "both">("all")

  const filtered = glossaryTerms.filter(t => {
    const matchesSearch = search === "" ||
      t.term.includes(search) ||
      t.english.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.includes(search)
    const matchesMarket = marketFilter === "all" || t.market === marketFilter
    return matchesSearch && matchesMarket
  })

  const marketLabels: Record<string, string> = {
    "all": "全部",
    "a-share": "A股",
    "us": "美股",
    "both": "通用",
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">词汇表</h1>
      <p className="text-muted-foreground mb-8">搜索股票市场中的术语，每个术语都关联相关课程内容。</p>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索术语..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "a-share", "us", "both"] as const).map(m => (
            <button
              key={m}
              onClick={() => setMarketFilter(m)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                marketFilter === m
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-accent"
              }`}
            >
              {marketLabels[m]}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-10">没有找到匹配的术语</p>
        )}
        {filtered.map((term) => (
          <Card key={term.term}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold flex items-center gap-2">
                    {term.term}
                    <span className="text-muted-foreground font-normal text-sm">({term.english})</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      term.market === "a-share" ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" :
                      term.market === "us" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
                      "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}>
                      {marketLabels[term.market]}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{term.definition}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        共 {glossaryTerms.length} 个术语，当前显示 {filtered.length} 个
      </div>
    </div>
  )
}

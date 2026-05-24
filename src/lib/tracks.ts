import type { TrackDef } from "@/types"

export const tracks: TrackDef[] = [
  {
    id: "shared",
    title: "共同基础",
    subtitle: "无论投资哪个市场都要掌握的核心知识",
    description: "在开始学习A股或美股之前，你需要掌握这些基础概念。完成所有基础阶段后，你可以选择学习A股或美股。",
    stages: [
      {
        id: "stage-0",
        trackId: "shared",
        title: "第0阶段：绝对基础",
        description: "理解股票的本质、交易所的运作方式、以及投资与交易的底层逻辑。这是你所有后续知识的基石。",
        modules: [
          {
            id: "s0-m1",
            title: "股票是什么",
            lessons: [
              { slug: "what-is-a-stock", title: "什么是股票？为什么公司要发行股票？" },
              { slug: "how-exchanges-work", title: "股票交易所是如何运作的" },
            ]
          },
          {
            id: "s0-m2",
            title: "交易入门",
            lessons: [
              { slug: "what-is-a-brokerage", title: "什么是券商？订单如何被执行" },
              { slug: "order-types", title: "订单类型：市价单、限价单、止损单" },
              { slug: "reading-a-quote", title: "如何看懂股票报价" },
            ]
          },
          {
            id: "s0-m3",
            title: "市场与指数",
            lessons: [
              { slug: "what-is-an-index", title: "什么是指数？它为什么重要？" },
              { slug: "investing-vs-trading", title: "投资 vs 交易：你到底在做什么？" },
              { slug: "case-study-moutai", title: "案例分析：如果在2012年买入贵州茅台 vs 2021年买入" },
            ]
          },
        ]
      },
      {
        id: "stage-1",
        trackId: "shared",
        title: "第1阶段：图表阅读",
        description: "掌握技术分析的核心工具——从K线到MACD，从支撑阻力到布林带。",
        modules: [
          {
            id: "s1-m1",
            title: "K线基础",
            lessons: [
              { slug: "candlestick-basics", title: "什么是K线图？OHLC数据解读" },
              { slug: "single-candle-patterns", title: "单根K线形态：十字星、锤子线、倒锤子、光头光脚" },
              { slug: "multi-candle-patterns", title: "多根K线组合：吞没形态、启明星、黄昏星" },
            ]
          },
          {
            id: "s1-m2",
            title: "趋势与支撑阻力",
            lessons: [
              { slug: "support-resistance", title: "支撑与阻力：如何识别关键价位" },
              { slug: "trend-lines", title: "趋势线：正确画法及突破识别" },
              { slug: "volume-analysis", title: "成交量：为什么量能决定趋势的真假" },
            ]
          },
          {
            id: "s1-m3",
            title: "技术指标",
            lessons: [
              { slug: "moving-averages", title: "移动平均线：MA5/MA10/MA20/MA60/MA250" },
              { slug: "macd", title: "MACD：背离信号与实战案例" },
              { slug: "rsi", title: "RSI：超买超卖与隐藏背离" },
              { slug: "bollinger-bands", title: "布林带：缩口交易与骑带策略" },
            ]
          },
          {
            id: "s1-m4",
            title: "综合案例",
            lessons: [
              { slug: "case-nvda-2023", title: "案例分析：英伟达(NVDA) 2023年突破——用所有指标走一遍" },
              { slug: "case-byd-2020", title: "案例分析：比亚迪(002594) 2020-2022年走势——同一框架分析A股" },
              { slug: "indicator-overload", title: "常见错误：同时使用7个指标为什么失败" },
            ]
          },
        ]
      },
      {
        id: "stage-2",
        trackId: "shared",
        title: "第2阶段：基本面分析框架",
        description: "学会阅读财报，理解估值指标，区分价值股与成长股。",
        modules: [
          {
            id: "s2-m1",
            title: "三大报表",
            lessons: [
              { slug: "fa-vs-ta", title: "基本面分析 vs 技术分析：什么时候用哪种" },
              { slug: "income-statement", title: "如何读懂利润表" },
              { slug: "balance-sheet", title: "如何读懂资产负债表" },
              { slug: "cash-flow-statement", title: "如何读懂现金流量表——为什么现金流比利润更重要" },
            ]
          },
          {
            id: "s2-m2",
            title: "关键指标",
            lessons: [
              { slug: "key-ratios", title: "每个交易者必须知道的指标：PE/PB/ROE/EPS/负债率/流动比率" },
              { slug: "growth-vs-value", title: "成长投资 vs 价值投资：真实公司案例对比" },
              { slug: "sector-comparison", title: "如何在同一行业内比较公司" },
            ]
          },
          {
            id: "s2-m3",
            title: "深度案例",
            lessons: [
              { slug: "case-evergrande", title: "案例分析：为什么恒大(3333.HK)PE看起来很便宜却是个陷阱" },
              { slug: "case-apple-buyback", title: "案例分析：苹果(AAPL)回购——看懂现金流才能理解真相" },
            ]
          },
        ]
      },
      {
        id: "stage-3",
        trackId: "shared",
        title: "第3阶段：风险管理（最重要）",
        description: "学会保护你的资金——这是区分业余和职业交易者的核心能力。",
        modules: [
          {
            id: "s3-m1",
            title: "交易心理",
            lessons: [
              { slug: "why-beginners-lose", title: "为什么大多数新手会亏钱：损失厌恶和报复性交易" },
              { slug: "position-sizing", title: "仓位管理：1-2%法则带真实资金案例" },
              { slug: "stop-loss", title: "止损：如何基于图表结构设置止损，而不是凭感觉" },
            ]
          },
          {
            id: "s3-m2",
            title: "交易纪律",
            lessons: [
              { slug: "risk-reward-ratio", title: "风险收益比：为什么低于1:2的交易永远不要做" },
              { slug: "diversification", title: "组合分散化：行业上限、单只股票上限" },
              { slug: "leverage-danger", title: "杠杆和融资对新手有多危险" },
              { slug: "trading-journal", title: "交易日志：记录什么、为什么重要" },
            ]
          },
          {
            id: "s3-m3",
            title: "血泪教训",
            lessons: [
              { slug: "case-2015-crash", title: "案例分析：2015年A股暴跌中忽视止损的交易者" },
              { slug: "case-gme-short", title: "案例分析：游戏驿站(GME)轧空——过度杠杆空头的下场" },
            ]
          },
        ]
      },
    ]
  },
  {
    id: "a-shares",
    title: "A股学习",
    subtitle: "中国A股市场完整学习路径",
    description: "从市场规则到交易策略，系统性掌握A股市场的所有核心知识。适合想要投资中国股市的学习者。",
    stages: [
      {
        id: "stage-a1",
        trackId: "a-shares",
        title: "A1：市场结构与规则",
        description: "了解中国三大交易所、板块差异、T+1制度、涨跌停等核心规则。",
        modules: [
          {
            id: "a1-m1",
            title: "交易所与板块",
            lessons: [
              { slug: "three-exchanges", title: "三大交易所：上交所、深交所、北交所" },
              { slug: "board-tiers", title: "板块层级：主板、创业板、科创板、北交所" },
              { slug: "trading-hours", title: "交易时间：早盘、午盘、休市规则" },
            ]
          },
          {
            id: "a1-m2",
            title: "交易规则",
            lessons: [
              { slug: "t-plus-1", title: "T+1结算规则：今天买的明天才能卖——如何影响策略" },
              { slug: "price-limits", title: "涨跌停限制：10%/20%/30%/5%分别适用于哪些股票" },
              { slug: "st-stocks", title: "ST和*ST股票是什么意思？为什么通常要避开？" },
              { slug: "short-selling-a", title: "A股做空限制：散户基本无法做空——这对市场意味着什么" },
            ]
          },
          {
            id: "a1-m3",
            title: "融资与新股",
            lessons: [
              { slug: "margin-trading-a", title: "融资融券：如何放大收益和亏损、强制平仓机制" },
              { slug: "ipo-subscription", title: "打新：抽签系统如何运作、资格要求" },
              { slug: "stock-connect", title: "沪港通与深港通：外国人能买什么？" },
            ]
          },
        ]
      },
      {
        id: "stage-a2",
        trackId: "a-shares",
        title: "A2：市场参与者与数据",
        description: "学习识别A股的主要玩家，理解北向资金、龙虎榜和盘口数据。",
        modules: [
          {
            id: "a2-m1",
            title: "市场结构",
            lessons: [
              { slug: "retail-vs-institutional-a", title: "A股散户 vs 机构比例——为什么A股散户主导" },
              { slug: "northbound-funds", title: "北向资金是什么？为什么聪明钱都在跟踪它" },
              { slug: "dragon-tiger-list", title: "龙虎榜：如何阅读、机构买入模式是什么样" },
            ]
          },
          {
            id: "a2-m2",
            title: "深度数据",
            lessons: [
              { slug: "margin-balance", title: "融资余额：融资上升对市场情绪的意义" },
              { slug: "short-interest-a", title: "A股融券数据的局限性" },
              { slug: "level-2-order-book", title: "Level 2盘口：大单、挂单堆叠、冰山订单" },
              { slug: "case-level2-accumulation", title: "案例分析：如何用Level 2数据发现主力吸筹" },
            ]
          },
        ]
      },
      {
        id: "stage-a3",
        trackId: "a-shares",
        title: "A3：政策与宏观",
        description: "理解为什么A股对政策特别敏感，学会解读政策信号。",
        modules: [
          {
            id: "a3-m1",
            title: "政策解读",
            lessons: [
              { slug: "policy-sensitivity", title: "为什么A股对政府政策特别敏感" },
              { slug: "policy-bodies", title: "关键政策部门：证监会、人民银行、发改委" },
              { slug: "reading-policy-signals", title: "如何解读政策信号：政府工作报告、党代会主题、两会" },
              { slug: "sector-rotation-policy", title: "政策驱动的板块轮动：哪些板块受益于哪些政策" },
            ]
          },
          {
            id: "a3-m2",
            title: "历史案例",
            lessons: [
              { slug: "case-2015-bull", title: "历史案例：2015年牛市——政府鼓励杠杆，然后崩盘" },
              { slug: "case-edu-crackdown", title: "历史案例：2021年教育行业整顿——监管风险课" },
              { slug: "us-china-tech", title: "中美关系如何影响A股科技板块" },
              { slug: "rmb-exchange-rate", title: "人民币汇率及其对出口股的影响" },
            ]
          },
        ]
      },
      {
        id: "stage-a4",
        trackId: "a-shares",
        title: "A4：A股板块深度",
        description: "逐个板块分析：核心公司、驱动因素、估值水平和典型走势。",
        modules: [
          {
            id: "a4-m1",
            title: "核心板块",
            lessons: [
              { slug: "new-energy-a", title: "新能源：电动车、光伏、风电、电池——比亚迪、宁德时代、隆基" },
              { slug: "semiconductors-a", title: "半导体：国产替代、周期分析——中芯国际、海光信息" },
              { slug: "consumer-a", title: "消费品：茅台、海天味业——为什么消费品享受高PE" },
              { slug: "healthcare-a", title: "医药医疗：成长股 vs 仿制药风险、CXO行业" },
            ]
          },
          {
            id: "a4-m2",
            title: "周期与金融板块",
            lessons: [
              { slug: "real-estate-a", title: "房地产：2021年后为何崩盘、现在如何分析开发商" },
              { slug: "banks-a", title: "银行与金融：低PE陷阱还是真正价值？" },
              { slug: "soe-a", title: "央国企：红利策略、政策支持、估值逻辑" },
              { slug: "tmt-a", title: "TMT：互联网巨头、内容平台" },
            ]
          },
        ]
      },
      {
        id: "stage-a5",
        trackId: "a-shares",
        title: "A5：A股交易策略",
        description: "实战交易策略：从趋势跟踪到涨停板分析，从波段操作到题材炒作识别。",
        modules: [
          {
            id: "a5-m1",
            title: "趋势与动量",
            lessons: [
              { slug: "trend-following-a", title: "A股趋势跟踪：识别和驾驭板块轮动" },
              { slug: "momentum-trading-a", title: "动量交易：日线量能突破策略" },
              { slug: "gap-strategies-a", title: "开盘缺口策略：跳空高开/低开的信号" },
            ]
          },
          {
            id: "a5-m2",
            title: "涨停与低吸",
            lessons: [
              { slug: "limit-up-board", title: "涨停板分析：哪些股票值得关注及原因" },
              { slug: "limit-up-chasing", title: "打板策略：机制、风险、为什么新手初期应避免" },
              { slug: "dip-buying-a", title: "低吸反弹策略：利用支撑位和超卖RSI" },
              { slug: "band-trading-a", title: "波段操作：震荡市中在支撑买入、阻力卖出" },
            ]
          },
          {
            id: "a5-m3",
            title: "综合策略与案例",
            lessons: [
              { slug: "fa-ta-combined-a", title: "基本面+技术面结合：在好公司中找到入场时机" },
              { slug: "case-catl", title: "案例分析：宁德时代(300750)——基本面买入逻辑+技术入场时机" },
              { slug: "case-pump-dump-a", title: "案例分析：题材股拉高出货——如何识别和避免" },
            ]
          },
        ]
      },
      {
        id: "stage-a6",
        trackId: "a-shares",
        title: "A6：开户与成本",
        description: "如何开设A股账户、选择券商和了解交易成本。",
        modules: [
          {
            id: "a6-m1",
            title: "入市实操",
            lessons: [
              { slug: "open-account-a", title: "如何开A股券商账户（完整流程）" },
              { slug: "choose-broker-a", title: "选券商：费率对比、APP质量、Level 2费用" },
              { slug: "costs-a", title: "交易成本：印花税0.1%（卖出时）、佣金、过户费" },
              { slug: "cost-math-a", title: "频繁交易的成本吞噬收益——真实数学案例" },
              { slug: "tax-a", title: "中国个人投资者股票收益税务处理" },
            ]
          },
        ]
      },
    ]
  },
  {
    id: "us-stocks",
    title: "美股学习",
    subtitle: "美国股市完整学习路径",
    description: "从市场规则到交易策略，再到期权基础和税务处理，系统性掌握美股市场。",
    stages: [
      {
        id: "stage-b1",
        trackId: "us-stocks",
        title: "B1：市场结构与规则",
        description: "了解美国各大交易所、T+2结算、盘外交易和做空机制。",
        modules: [
          {
            id: "b1-m1",
            title: "交易所与规则",
            lessons: [
              { slug: "nyse-nasdaq-otc", title: "纽交所 vs 纳斯达克 vs OTC市场" },
              { slug: "t-plus-2", title: "T+2结算：如何影响资金可用性" },
              { slug: "extended-hours", title: "盘外交易：盘前4AM-9:30AM、盘后4PM-8PM ET" },
              { slug: "pdt-rule", title: "日内交易者(PDT)规则：$25,000最低要求" },
            ]
          },
          {
            id: "b1-m2",
            title: "机制详解",
            lessons: [
              { slug: "short-selling-us", title: "做空机制：借股、保证金要求、轧空风险" },
              { slug: "stock-splits", title: "股票分拆与反向分拆：含义及对股价的影响" },
              { slug: "circuit-breakers", title: "熔断机制：标普500三级停牌(7%/13%/20%)" },
              { slug: "options-overview-b1", title: "期权市场概览（B5阶段详细展开）" },
              { slug: "etfs-b1", title: "ETF：与个股交易的不同之处" },
            ]
          },
        ]
      },
      {
        id: "stage-b2",
        trackId: "us-stocks",
        title: "B2：美国市场数据与指标",
        description: "掌握三大指数、VIX、国债收益率、经济报告等关键宏观指标。",
        modules: [
          {
            id: "b2-m1",
            title: "市场指标",
            lessons: [
              { slug: "three-indexes", title: "三大指数：道指/标普500/纳指100——各自衡量什么" },
              { slug: "vix", title: "VIX（恐慌指数）：如何解读、极端水平意味着什么" },
              { slug: "put-call-ratio", title: "Put/Call比率：用情绪指标做反向信号" },
              { slug: "advance-decline", title: "涨跌线：市场广度解读" },
              { slug: "sector-etfs", title: "板块ETF(XLK/XLE/XLF等)：追踪板块资金流向" },
            ]
          },
          {
            id: "b2-m2",
            title: "宏观驱动",
            lessons: [
              { slug: "treasury-yields", title: "美国国债收益率：为什么10年期收益率影响成长股" },
              { slug: "dollar-index", title: "美元指数(DXY)：与大宗商品和跨国公司的关系" },
              { slug: "economic-reports", title: "关键经济报告：非农/CPI/PCE/GDP——每个数据影响什么" },
              { slug: "federal-reserve", title: "美联储：FOMC会议、利率决策、点阵图——如何解读" },
            ]
          },
        ]
      },
      {
        id: "stage-b3",
        trackId: "us-stocks",
        title: "B3：财报季",
        description: "全面掌握财报分析：从EPS到SEC文件，从电话会议到财报交易策略。",
        modules: [
          {
            id: "b3-m1",
            title: "财报基础",
            lessons: [
              { slug: "earnings-report", title: "财报包含什么：EPS、营收、指引" },
              { slug: "beat-miss", title: "超预期 vs 不及预期 vs 符合预期——为什么超预期股价还会跌" },
              { slug: "find-earnings-dates", title: "如何查找财报日期和一致预期" },
              { slug: "implied-move", title: "隐含波动：期权如何定价预期财报波动" },
            ]
          },
          {
            id: "b3-m2",
            title: "策略与文件",
            lessons: [
              { slug: "pre-earnings-strategy", title: "财报前策略：参与预热 vs 避开事件" },
              { slug: "post-earnings-strategy", title: "财报后策略：回补跳空缺口、确认突破买入" },
              { slug: "earnings-call", title: "如何阅读财报电话会议记录——管理层语言信号" },
              { slug: "sec-filings", title: "SEC文件：10-K/10-Q/8-K/DEF14A——各自用途及高效浏览" },
            ]
          },
          {
            id: "b3-m3",
            title: "经典案例",
            lessons: [
              { slug: "case-meta-q4-2022", title: "案例分析：Meta(META) 2022Q4财报——盘后跌25%全解析" },
              { slug: "case-nvda-q1-2023", title: "案例分析：英伟达(NVDA) 2023Q1财报——指引上调、股价涨25%" },
            ]
          },
        ]
      },
      {
        id: "stage-b4",
        trackId: "us-stocks",
        title: "B4：美股板块深度",
        description: "逐个板块分析：行业动态、关键指标、估值标准和代表公司。",
        modules: [
          {
            id: "b4-m1",
            title: "科技与半导体",
            lessons: [
              { slug: "tech-ai-us", title: "科技与AI：云增长、AI资本开支周期、SaaS估值(ARR/NRR/Rule of 40)" },
              { slug: "semiconductors-us", title: "半导体：fab vs fabless、订单出货比、周期分析——台积电/英伟达/ASML/AMD" },
            ]
          },
          {
            id: "b4-m2",
            title: "消费与金融",
            lessons: [
              { slug: "consumer-us", title: "可选消费：同店销售、库存水平——亚马逊、特斯拉" },
              { slug: "healthcare-us", title: "医疗与生物技术：FDA审批流程、临床试验阶段、二元事件风险" },
              { slug: "energy-us", title: "能源：产油量数据、钻井数量、炼化利润——埃克森美孚、雪佛龙" },
              { slug: "financials-us", title: "金融：净息差、贷款增长、信贷质量——摩根大通、美银" },
            ]
          },
          {
            id: "b4-m3",
            title: "REITs与防御",
            lessons: [
              { slug: "reits-us", title: "REITs：FFO vs 净利润、资本化率、不同类型（零售/工业/住宅/数据中心）" },
              { slug: "consumer-staples-us", title: "必需消费品：防御特性、股息增长——宝洁、可口可乐" },
            ]
          },
        ]
      },
      {
        id: "stage-b5",
        trackId: "us-stocks",
        title: "B5：期权基础",
        description: "从零开始理解期权：看涨、看跌、希腊字母和基础策略。",
        modules: [
          {
            id: "b5-m1",
            title: "期权是什么",
            lessons: [
              { slug: "what-are-options", title: "什么是期权？为什么期权存在（对冲 vs 投机）" },
              { slug: "call-options", title: "看涨期权(Call)：买入权利、内在价值 vs 时间价值、收益图" },
              { slug: "put-options", title: "看跌期权(Put)：卖出权利、用Put做保险" },
            ]
          },
          {
            id: "b5-m2",
            title: "期权定价",
            lessons: [
              { slug: "strike-expiry-premium", title: "行权价、到期日、权利金——每个变量如何影响成本" },
              { slug: "the-greeks", title: "希腊字母：Delta/ Gamma/ Theta（新手最重要）/ Vega" },
              { slug: "itm-atm-otm", title: "实值 vs 平值 vs 虚值期权" },
              { slug: "implied-volatility", title: "隐含波动率：为什么财报前期权变贵、IV crush详解" },
            ]
          },
          {
            id: "b5-m3",
            title: "策略与案例",
            lessons: [
              { slug: "basic-strategies", title: "基础策略：备兑看涨、保护性看跌、现金担保看跌" },
              { slug: "naked-options-danger", title: "为什么裸卖期权对新手极其危险" },
              { slug: "case-iv-crush", title: "案例分析：财报前买入Call遭遇IV crush——数字详解" },
            ]
          },
        ]
      },
      {
        id: "stage-b6",
        trackId: "us-stocks",
        title: "B6：美股交易策略",
        description: "动量交易、财报动量、板块轮动、GARP策略和做空策略。",
        modules: [
          {
            id: "b6-m1",
            title: "动量与轮动",
            lessons: [
              { slug: "momentum-us", title: "动量交易：相对强度、52周新高突破、成交量确认" },
              { slug: "earnings-momentum-us", title: "财报动量：在强劲财报指引上调后买入优质公司" },
              { slug: "sector-rotation-us", title: "板块轮动策略：用ETF资金流跟踪机构资金" },
              { slug: "garp-us", title: "合理价格成长(GARP)：PE/增长率与图表时机结合" },
            ]
          },
          {
            id: "b6-m2",
            title: "波段与做空",
            lessons: [
              { slug: "swing-trading-us", title: "波段交易：3-10天持仓、使用日线图表形态" },
              { slug: "premarket-gap-us", title: "盘前跳空分析：如何解读大幅盘前变动及是否交易" },
              { slug: "short-selling-strategy-us", title: "做空策略：在下跌趋势中找弱势股、管理轧空风险" },
            ]
          },
          {
            id: "b6-m3",
            title: "实战案例",
            lessons: [
              { slug: "case-aapl-ma200", title: "案例分析：苹果(AAPL)200日均线反弹交易——入场、止损、目标全流程" },
              { slug: "case-gme-squeeze", title: "案例分析：GME 2021轧空——之前的数据是什么样" },
            ]
          },
        ]
      },
      {
        id: "stage-b7",
        trackId: "us-stocks",
        title: "B7：开户、成本与税务",
        description: "中国居民如何开美股账户、资金汇出、税务处理。",
        modules: [
          {
            id: "b7-m1",
            title: "开户与资金",
            lessons: [
              { slug: "open-account-us", title: "中国居民开户攻略：盈透/富途/老虎等券商对比" },
              { slug: "account-types-us", title: "账户类型：现金账户 vs 保证金账户" },
              { slug: "commissions-us", title: "佣金结构：大多数券商已零佣金，但其他费用存在" },
              { slug: "currency-conversion", title: "货币兑换成本：美元/人民币兑换注意事项" },
            ]
          },
          {
            id: "b7-m2",
            title: "税务与汇款",
            lessons: [
              { slug: "dividend-tax-us", title: "美国股息预扣税：非居民30%（或协定税率）" },
              { slug: "capital-gains-tax-us", title: "资本利得税：美国不对非居民外国人征收资本利得税（重要！）" },
              { slug: "fbar-fatca", title: "FBAR和FATCA申报：何时适用于中国居民" },
              { slug: "transfer-funds-us", title: "实操指南：从中国转账到美股券商账户" },
            ]
          },
        ]
      },
    ]
  },
]

export const sharedTrack = tracks[0]
export const aSharesTrack = tracks[1]
export const usStocksTrack = tracks[2]

export function getTrack(trackId: string): TrackDef | undefined {
  return tracks.find(t => t.id === trackId)
}

export function getStage(trackId: string, stageId: string) {
  const track = getTrack(trackId)
  return track?.stages.find(s => s.id === stageId)
}

export function getAllLessons(): Array<{ slug: string; title: string; trackId: string; stageId: string; moduleId: string; order: number }> {
  const lessons: Array<{ slug: string; title: string; trackId: string; stageId: string; moduleId: string; order: number }> = []
  let order = 0
  for (const track of tracks) {
    for (const stage of track.stages) {
      for (const mod of stage.modules) {
        for (const lesson of mod.lessons) {
          lessons.push({
            slug: lesson.slug,
            title: lesson.title,
            trackId: track.id,
            stageId: stage.id,
            moduleId: mod.id,
            order: order++,
          })
        }
      }
    }
  }
  return lessons
}

export function getLessonMeta(slug: string) {
  const all = getAllLessons()
  return all.find(l => l.slug === slug)
}

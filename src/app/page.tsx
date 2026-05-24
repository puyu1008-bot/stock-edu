import Link from "next/link"
import { BookOpen, BarChart3, Shield, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  { icon: BookOpen, title: "系统化课程", description: "从零基础到实战交易，两个完整学习路径：A股和美股。" },
  { icon: BarChart3, title: "真实案例分析", description: "每个概念都配有真实股票案例，用历史数据验证策略。" },
  { icon: Shield, title: "风险管理为先", description: "整个课程的第一个重点就是风险管理——保护你的资金。" },
  { icon: TrendingUp, title: "进度追踪", description: "记录学习进度，完成测验解锁下一阶段。" },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
            从零开始，<span className="text-primary">系统性学习</span>股票投资
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            覆盖A股和美股两个市场，从基础概念到实战策略。没有推销，没有速成秘籍——只有扎实的知识。
            理解每一笔交易背后的逻辑，学会用数据和纪律保护你的资金。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/tracks/a-shares" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 w-full h-12 sm:h-11 text-base">
                开始A股学习 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tracks/us-stocks" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 w-full h-12 sm:h-11 text-base">
                开始美股学习 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">为什么选择股市学堂？</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader className="pb-2">
                  <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 sm:py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">课程结构</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">📊 A股学习路径</CardTitle>
                <CardDescription>中国A股市场完整知识体系</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• A1: 市场结构与规则（T+1、涨跌停）</li>
                  <li>• A2: 市场参与者与数据（北向资金、龙虎榜）</li>
                  <li>• A3: 政策与宏观分析</li>
                  <li>• A4: 八大板块深度解析</li>
                  <li>• A5: 实战交易策略</li>
                  <li>• A6: 开户与交易成本</li>
                </ul>
                <Link href="/tracks/a-shares" className="mt-4 inline-block">
                  <Button variant="link" className="p-0 gap-1 h-auto">进入A股课程 <ArrowRight className="h-3 w-3" /></Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">🇺🇸 美股学习路径</CardTitle>
                <CardDescription>美国股市完整知识体系</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li>• B1: 市场结构与规则（纽交所、纳斯达克）</li>
                  <li>• B2: 市场数据与宏观指标</li>
                  <li>• B3: 财报季深度分析</li>
                  <li>• B4: 八大板块深度解析</li>
                  <li>• B5: 期权基础入门</li>
                  <li>• B6: 实战交易策略</li>
                  <li>• B7: 开户、成本与税务</li>
                </ul>
                <Link href="/tracks/us-stocks" className="mt-4 inline-block">
                  <Button variant="link" className="p-0 gap-1 h-auto">进入美股课程 <ArrowRight className="h-3 w-3" /></Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-sm sm:text-base text-muted-foreground">
              两个学习路径共享基础阶段（第0-3阶段），涵盖K线分析、技术指标、基本面和风险管理。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">准备好了吗？</h2>
          <p className="text-base text-muted-foreground mb-5 sm:mb-6">
            不需要任何金融背景。你只需要好奇心、耐心和对学习的承诺。
          </p>
          <Link href="/learning-path">
            <Button size="lg" className="gap-2 h-12 sm:h-11 text-base">查看完整学习路径</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

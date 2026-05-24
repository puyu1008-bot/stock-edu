export const dynamic = 'force-dynamic'

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { tracks } from "@/lib/tracks"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Flame, ArrowRight } from "lucide-react"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect("/login")
  }

  const stats = [
    { label: "总课程", value: "100+", icon: <BookOpen className="h-5 w-5" />, color: "text-blue-500" },
    { label: "连续学习", value: "0 天", icon: <Flame className="h-5 w-5" />, color: "text-orange-500" },
    { label: "学习进度", value: "刚刚开始", icon: <TrendingUp className="h-5 w-5" />, color: "text-green-500" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
      <div className="mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">你好，{session.user.name || "同学"} 👋</h1>
        <p className="text-muted-foreground text-sm sm:text-base">继续你的股票投资学习之旅</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-3 sm:pt-6 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-0">
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-lg sm:text-2xl font-bold mt-0.5 sm:mt-1">{stat.value}</p>
                </div>
                <div className={stat.color}>{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Paths */}
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">你的学习路径</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
        {tracks.filter(t => t.id !== "shared").map((track) => (
          <Card key={track.id}>
            <CardHeader>
              <CardTitle className="text-base sm:text-xl flex items-center gap-2">
                {track.id === "a-shares" ? "🇨🇳" : "🇺🇸"} {track.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">{track.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                {track.stages.slice(0, 3).map((stage) => (
                  <div key={stage.id} className="flex items-center gap-2 sm:gap-3">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/30 shrink-0" />
                    <span className="text-xs sm:text-sm flex-1 truncate">{stage.title}</span>
                  </div>
                ))}
                {track.stages.length > 3 && (
                  <p className="text-xs text-muted-foreground pl-5">
                    +{track.stages.length - 3} 个阶段
                  </p>
                )}
              </div>
              <Link href={`/tracks/${track.id}`}>
                <Button variant="outline" className="w-full gap-2 h-10 sm:h-9 text-sm">
                  开始学习 <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Link href="/learning-path">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base">查看完整学习路径</p>
                <p className="text-xs sm:text-sm text-muted-foreground">可视化路线图，了解每个阶段</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/glossary">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="p-4 sm:pt-6 flex items-center gap-3 sm:gap-4">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="font-medium text-sm sm:text-base">词汇表</p>
                <p className="text-xs sm:text-sm text-muted-foreground">搜索股票市场中遇到的任何术语</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

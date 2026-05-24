export const dynamic = 'force-dynamic'

import Link from "next/link"
import { tracks } from "@/lib/tracks"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lock, Circle, ChevronRight } from "lucide-react"

export default function LearningPathPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">完整学习路径</h1>
      <p className="text-muted-foreground mb-10">从零基础到实战交易，以下是你需要完成的所有阶段。</p>

      {/* Shared Foundation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-primary">🔰</span> 共同基础阶段
        </h2>
        <p className="text-muted-foreground mb-6">以下阶段必须按顺序完成，为A股和美股学习奠定基础。</p>
        <div className="space-y-4">
          {tracks[0].stages.map((stage, idx) => (
            <Card key={stage.id} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {idx + 1}
                      </span>
                      {stage.title}
                    </CardTitle>
                    <CardDescription className="mt-1">{stage.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stage.modules.map((mod) => (
                    <div key={mod.id} className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-2">{mod.title}</h4>
                      <div className="space-y-0.5">
                        {mod.lessons.map((lesson) => (
                          <Link
                            key={lesson.slug}
                            href={`/lessons/${lesson.slug}`}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground py-0.5"
                          >
                            <ChevronRight className="h-3 w-3 shrink-0" />
                            {lesson.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Track-specific paths */}
      {tracks.filter(t => t.id !== "shared").map((track) => (
        <div key={track.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            {track.id === "a-shares" ? "🇨🇳" : "🇺🇸"} {track.title}
          </h2>
          <p className="text-muted-foreground mb-6">{track.description}</p>
          <div className="space-y-4">
            {track.stages.map((stage, idx) => (
              <Card key={stage.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="flex items-center justify-center h-7 w-7 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                          {idx + 1}
                        </span>
                        {stage.title}
                      </CardTitle>
                      <CardDescription className="mt-1">{stage.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {stage.modules.map((mod) => (
                      <div key={mod.id} className="border rounded-lg p-3">
                        <h4 className="font-medium text-sm mb-2">{mod.title}</h4>
                        <div className="space-y-0.5">
                          {mod.lessons.map((lesson) => (
                            <Link
                              key={lesson.slug}
                              href={`/lessons/${lesson.slug}`}
                              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground py-0.5"
                            >
                              <ChevronRight className="h-3 w-3 shrink-0" />
                              {lesson.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Link href={`/tracks/${track.id}`}>
              <Button className="gap-2">进入 {track.title} 详情页</Button>
            </Link>
          </div>
        </div>
      ))}

      <div className="text-center py-8 text-muted-foreground text-sm">
        投资有风险，入市需谨慎。本网站仅供教育学习目的，不构成任何投资建议。
      </div>
    </div>
  )
}

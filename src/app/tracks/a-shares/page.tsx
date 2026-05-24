export const dynamic = 'force-dynamic'

﻿import Link from "next/link"
import { aSharesTrack } from "@/lib/tracks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, CheckCircle, ArrowRight, BookOpen } from "lucide-react"

const track = aSharesTrack

export default function ASharesTrackPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">{track.title}</h1>
        <p className="text-lg text-muted-foreground">{track.subtitle}</p>
        <p className="text-muted-foreground mt-2">{track.description}</p>
      </div>

      <div className="space-y-6">
        {track.stages.map((stage, idx) => (
          <Card key={stage.id} className={idx === 0 ? "border-primary/30" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{stage.title}</CardTitle>
                  <CardDescription className="mt-1">{stage.description}</CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{stage.modules.reduce((sum, m) => sum + m.lessons.length, 0)} 节课</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stage.modules.map((mod) => (
                  <div key={mod.id} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{mod.title}</h4>
                    <div className="space-y-1">
                      {mod.lessons.map((lesson) => (
                        <Link
                          key={lesson.slug}
                          href={`/lessons/${lesson.slug}`}
                          className="flex items-center gap-2 py-1.5 px-2 rounded hover:bg-accent text-sm transition-colors"
                        >
                          <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
                          <span className="text-muted-foreground hover:text-foreground">{lesson.title}</span>
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

      <div className="mt-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
        <h3 className="font-semibold mb-2">💡 学习建议</h3>
        <p className="text-sm text-muted-foreground">
          建议按顺序学习每个阶段，因为每个阶段的知识都是后续内容的基础。
          如果遇到不理解的概念，可以随时使用词汇表搜索相关术语。
        </p>
      </div>
    </div>
  )
}

import Link from "next/link"
import { usStocksTrack } from "@/lib/tracks"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"

const track = usStocksTrack

export default function USStocksTrackPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">{track.title}</h1>
        <p className="text-lg text-muted-foreground">{track.subtitle}</p>
        <p className="text-muted-foreground mt-2">{track.description}</p>
      </div>

      <div className="space-y-6">
        {track.stages.map((stage) => (
          <Card key={stage.id}>
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
          美股市场与A股有显著差异，包括交易机制、监管环境和市场参与者结构。
          即使你已经有A股经验，也建议完整学习美股路径，避免用A股的思维定式来操作美股。
        </p>
      </div>
    </div>
  )
}

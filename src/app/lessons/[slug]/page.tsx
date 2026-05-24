import { notFound } from "next/navigation"
import Link from "next/link"
import { getLessonContent } from "@/lib/content-registry"
import { getTrack, getStage, getAllLessons } from "@/lib/tracks"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { QuizWidget } from "@/components/quiz/quiz-widget"

interface LessonPageProps {
  params: { slug: string }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const content = await getLessonContent(params.slug)

  if (!content) {
    notFound()
  }

  const allLessons = getAllLessons()
  const currentIdx = allLessons.findIndex(l => l.slug === params.slug)
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null
  const track = getTrack(content.trackId)
  const stage = getStage(content.trackId, content.stageId)

  const calloutEmoji: Record<string, string> = {
    why: "💡",
    mistake: "⚠️",
    case: "📊",
    takeaway: "🔑",
  }

  const calloutTitles: Record<string, string> = {
    why: "实战意义",
    mistake: "新手常见错误",
    case: "案例分析",
    takeaway: "核心要点",
  }

  const calloutClasses: Record<string, string> = {
    why: "callout-why",
    mistake: "callout-mistake",
    case: "callout-case",
    takeaway: "callout-takeaway",
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          <Link href="/" className="hover:text-foreground shrink-0">首页</Link>
          <span className="shrink-0">/</span>
          <Link href={`/tracks/${content.trackId}`} className="hover:text-foreground truncate max-w-[120px] sm:max-w-none">
            {track?.title || content.trackId}
          </Link>
          {stage && (
            <>
              <span className="shrink-0">/</span>
              <span className="truncate max-w-[100px] sm:max-w-none">{stage.title}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
          {content.title}
        </h1>

        {/* Content */}
        <div className="lesson-content">
          {content.sections.map((section, idx) => (
            <div key={idx} className="mb-5 sm:mb-6">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}

          {/* Callouts */}
          {content.callouts.map((callout, idx) => (
            <div key={idx} className={calloutClasses[callout.type]}>
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="text-lg sm:text-xl shrink-0 mt-0.5" aria-hidden="true">
                  {calloutEmoji[callout.type]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base mb-1">
                    {callout.title || calloutTitles[callout.type]}
                  </p>
                  <p className="text-sm sm:text-base whitespace-pre-line break-words">
                    {callout.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz Section */}
        {content.quiz && content.quiz.length > 0 && (
          <Card className="mt-8 sm:mt-10">
            <CardContent className="p-4 sm:p-6 pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">📝 知识点测验</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                回答以下 {content.quiz.length} 道题目，答对 {Math.ceil(content.quiz.length * 0.6)} 题以上即可标记本课为已完成。
              </p>
              <QuizWidget questions={content.quiz} lessonSlug={content.slug} />
            </CardContent>
          </Card>
        )}

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-8 sm:mt-10 pt-6 border-t">
          {prevLesson ? (
            <Link href={`/lessons/${prevLesson.slug}`} className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto gap-2 h-12 sm:h-10">
                <ArrowLeft className="h-4 w-4 shrink-0" />
                <span className="truncate">
                  上一课
                </span>
              </Button>
            </Link>
          ) : <div className="hidden sm:block" />}
          {nextLesson && (
            <Link href={`/lessons/${nextLesson.slug}`} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2 h-12 sm:h-10">
                <span className="truncate">下一课</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const all = getAllLessons()
  return all.map(l => ({ slug: l.slug }))
}

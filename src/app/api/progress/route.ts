import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const progress = await db.progress.findMany({
    where: { userId: (session.user as any).id },
    include: { lesson: true },
  })

  return NextResponse.json(progress)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const { lessonId, completed, quizScore } = await req.json()

  if (!lessonId) {
    return NextResponse.json({ error: "缺少课程ID" }, { status: 400 })
  }

  const progress = await db.progress.upsert({
    where: {
      userId_lessonId: {
        userId: (session.user as any).id,
        lessonId,
      },
    },
    update: { completed, quizScore },
    create: {
      userId: (session.user as any).id,
      lessonId,
      completed,
      quizScore,
    },
  })

  return NextResponse.json(progress)
}

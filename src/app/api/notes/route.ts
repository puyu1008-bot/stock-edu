import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const lessonId = searchParams.get("lessonId")

  const notes = await db.note.findMany({
    where: {
      userId: (session.user as any).id,
      ...(lessonId ? { lessonId } : {}),
    },
    include: { lesson: true },
    orderBy: { updatedAt: "desc" },
  })

  return NextResponse.json(notes)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 })
  }

  const { lessonId, content } = await req.json()

  if (!lessonId || !content) {
    return NextResponse.json({ error: "缺少必要参数" }, { status: 400 })
  }

  const existing = await db.note.findFirst({
    where: {
      userId: (session.user as any).id,
      lessonId,
    },
  })

  if (existing) {
    const note = await db.note.update({
      where: { id: existing.id },
      data: { content },
    })
    return NextResponse.json(note)
  }

  const note = await db.note.create({
    data: {
      userId: (session.user as any).id,
      lessonId,
      content,
    },
  })

  return NextResponse.json(note)
}

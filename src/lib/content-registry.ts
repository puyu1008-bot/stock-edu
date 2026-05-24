import type { LessonContent } from "@/types"

const lessonContents: Map<string, () => Promise<LessonContent>> = new Map()

async function importModule(mod: any) {
  for (const key of Object.keys(mod)) {
    if (key === 'default') continue
    const val = mod[key]
    if (Array.isArray(val)) {
      for (const lesson of val) {
        if (lesson && lesson.slug) {
          lessonContents.set(lesson.slug, async () => lesson)
        }
      }
    } else if (val && val.slug) {
      lessonContents.set(val.slug, async () => val)
    }
  }
}

let loaded = false

async function loadAll() {
  if (loaded) return
  loaded = true
  
  try {
    const modules = await Promise.all([
      import("@/content/shared/stage-0/index"),
      import("@/content/shared/stage-0/module-2"),
      import("@/content/shared/stage-0/module-2b"),
      import("@/content/shared/stage-1/index"),
      import("@/content/shared/stage-1/part2"),
      import("@/lib/all-content"),
      import("@/content/shared/stages-2-3"),
      import("@/content/a-shares/all"),
      import("@/content/remaining"),
    ])
    
    for (const mod of modules) {
      await importModule(mod)
    }
  } catch (e) {
    console.error("Failed to load content:", e)
  }
}

export async function getLessonContent(slug: string): Promise<LessonContent | null> {
  await loadAll()
  const loader = lessonContents.get(slug)
  if (!loader) return null
  try { return await loader() } catch (e) { return null }
}

export function getAllLessonSlugs(): string[] {
  return Array.from(lessonContents.keys())
}

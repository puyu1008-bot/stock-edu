export interface LessonMeta {
  id: string
  trackId: string
  stageId: string
  moduleId: string
  slug: string
  title: string
  order: number
}

export interface StageDef {
  id: string
  trackId: string
  title: string
  description: string
  modules: ModuleDef[]
}

export interface ModuleDef {
  id: string
  title: string
  lessons: { slug: string; title: string }[]
}

export interface TrackDef {
  id: string
  title: string
  subtitle: string
  description: string
  stages: StageDef[]
}

export interface GlossaryTerm {
  term: string
  english: string
  definition: string
  market: "a-share" | "us" | "both"
  relatedTerms?: string[]
}

export interface CalloutData {
  type: "why" | "mistake" | "case" | "takeaway"
  title?: string
  content: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface LessonContent {
  slug: string
  title: string
  trackId: string
  stageId: string
  moduleId: string
  sections: LessonSection[]
  callouts: CalloutData[]
  quiz: QuizQuestion[]
}

export interface LessonSection {
  heading: string
  paragraphs: string[]
}

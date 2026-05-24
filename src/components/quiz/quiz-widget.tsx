"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface QuizWidgetProps {
  questions: QuizQuestion[]
  lessonSlug?: string
}

export function QuizWidget({ questions, lessonSlug }: QuizWidgetProps) {
  const [selected, setSelected] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  function handleSelect(qIdx: number, oIdx: number) {
    if (submitted) return
    setSelected(prev => ({ ...prev, [qIdx]: oIdx }))
  }

  function handleSubmit() {
    let correct = 0
    questions.forEach((q, idx) => {
      if (selected[idx] === q.correctIndex) correct++
    })
    setScore(correct)
    setSubmitted(true)
  }

  function handleRetry() {
    setSelected({})
    setSubmitted(false)
    setScore(0)
  }

  const passed = score >= Math.ceil(questions.length * 0.6)

  return (
    <div className="space-y-4 sm:space-y-6">
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="border rounded-lg p-3 sm:p-4">
          <p className="font-medium mb-3 text-base">{qIdx + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, oIdx) => {
              const isSelected = selected[qIdx] === oIdx
              const isCorrect = q.correctIndex === oIdx
              let bgClass = "hover:bg-accent"
              if (submitted) {
                if (isCorrect) bgClass = "bg-green-50 border-green-300 dark:bg-green-950"
                else if (isSelected && !isCorrect) bgClass = "bg-red-50 border-red-300 dark:bg-red-950"
              } else if (isSelected) {
                bgClass = "bg-primary/10 border-primary/30"
              }
              return (
                <label
                  key={oIdx}
                  className={`quiz-option ${bgClass}`}
                  onClick={() => handleSelect(qIdx, oIdx)}
                >
                  <input
                    type="radio"
                    name={`quiz-${qIdx}`}
                    checked={isSelected}
                    onChange={() => {}}
                    className="accent-primary h-5 w-5 shrink-0"
                    disabled={submitted}
                  />
                  <span className="text-base flex-1 leading-snug">{opt}</span>
                  {submitted && isCorrect && <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />}
                  {submitted && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                </label>
              )
            })}
          </div>
          {submitted && selected[qIdx] !== undefined && selected[qIdx] !== q.correctIndex && (
            <p className="mt-2 text-sm text-muted-foreground">
              💡 {q.explanation}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <Button
          onClick={handleSubmit}
          className="w-full h-12 text-base"
          disabled={Object.keys(selected).length < questions.length}
        >
          提交答案（已选 {Object.keys(selected).length}/{questions.length} 题）
        </Button>
      ) : (
        <div className={`p-4 rounded-lg border ${
          passed
            ? 'bg-green-50 border-green-200 dark:bg-green-950'
            : 'bg-amber-50 border-amber-200 dark:bg-amber-950'
        }`}>
          <p className="font-medium mb-2 text-base">
            {passed ? '🎉 恭喜！' : '📚 继续加油！'} 你答对了 {score}/{questions.length} 题
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-3">
            {passed
              ? '你已经掌握了本课的核心知识点，可以标记为已完成。'
              : `需要答对至少 ${Math.ceil(questions.length * 0.6)} 题才能通过。建议重新复习课程内容后再试。`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            {!passed && (
              <Button variant="outline" size="lg" onClick={handleRetry} className="h-12">
                重新答题
              </Button>
            )}
            {passed && (
              <Button size="lg" className="h-12" onClick={() => {
                if (lessonSlug) {
                  fetch('/api/progress', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ lessonId: lessonSlug, completed: true, quizScore: score }),
                  }).catch(console.error)
                }
              }}>
                标记为已完成
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

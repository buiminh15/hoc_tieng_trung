import { useMemo, useState } from 'react'
import type { ErrQ } from '../data/hsk21/types'
import { speak } from '../lib/tts'
import ConfirmDialog from './ConfirmDialog'
import { PenCircle, PenCross } from './PenMark'
import Stamp from './Stamp'

const ABC = ['A', 'B', 'C', 'D']

/**
 * Quiz tìm lỗi theo dạng đề HSK 6 (đọc hiểu phần 1).
 * - segment: một câu dài chia 4 đoạn, chọn đoạn có lỗi.
 * - sentence: 4 câu riêng, chọn câu có lỗi.
 * Chấm ngay, hiện câu đã sửa và lý do. Gọi onDone khi hết đề.
 */
export default function ErrorQuiz({ items, title, shuffle = false, onDone, onExit }: { items: ErrQ[]; title: string; shuffle?: boolean; onDone?: (score: number, total: number) => void; onExit: () => void }) {
  const [round, setRound] = useState(0)
  const qs = useMemo(() => (shuffle ? items.slice().sort(() => Math.random() - 0.5) : items), [items, shuffle, round])
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [reported, setReported] = useState(false)
  const [confirmExit, setConfirmExit] = useState(false)
  const [wrongList, setWrongList] = useState<number[]>([])
  const q = qs[i]

  if (!q) {
    if (!reported) { setReported(true); onDone?.(score, qs.length) }
    const pct = score / qs.length
    return (
      <div className="mx-auto max-w-lg space-y-5 rounded-xl bg-surface p-8 text-center shadow">
        <div className="flex justify-center"><Stamp text={pct >= 0.9 ? '优' : pct >= 0.7 ? '良' : '加'} size="lg" /></div>
        <p className="text-2xl font-bold">{score}/{qs.length} câu đúng</p>
        {wrongList.length > 0 && (
          <div className="text-left">
            <p className="mb-2 text-sm font-semibold text-slate-500">Điểm ngữ pháp cần xem lại</p>
            <ul className="space-y-1 text-sm">
              {wrongList.map(k => <li key={k} className="rounded-lg border bg-slate-50 px-3 py-1.5"><b>Câu {k + 1}</b> · {qs[k].topic} → <span className="hz">{qs[k].fix}</span></li>)}
            </ul>
          </div>
        )}
        <div className="flex gap-2">
          <button className="tile shadow flex-1 rounded-lg bg-accent p-2 font-bold text-white" onClick={() => { setRound(r => r + 1); setI(0); setScore(0); setPicked(null); setReported(false); setWrongList([]) }}>Làm lại</button>
          <button className="tile flex-1 rounded-lg border bg-surface p-2 font-semibold" onClick={onExit}>Quay lại</button>
        </div>
      </div>
    )
  }

  const answered = picked !== null
  const correct = answered && picked === q.answer
  const submit = (k: number) => {
    if (answered) return
    setPicked(k)
    if (k === q.answer) setScore(s => s + 1)
    else setWrongList(w => [...w, i])
  }
  const next = () => { setI(i + 1); setPicked(null) }

  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-xl bg-surface p-5 shadow sm:p-6">
      <ConfirmDialog open={confirmExit} danger title="Thoát bài làm?" message="Tiến độ bài làm hiện tại sẽ bị mất." confirmText="Thoát" cancelText="Làm tiếp" onCancel={() => setConfirmExit(false)} onConfirm={onExit} />
      <div className="flex justify-between text-sm text-slate-500"><button onClick={() => setConfirmExit(true)}>← Thoát</button><span>{title} · Câu {i + 1}/{qs.length} · Điểm {score}</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>

      <p className="text-sm font-semibold text-slate-500">{q.kind === 'segment' ? 'Chọn đoạn có lỗi ngữ pháp' : 'Chọn câu có lỗi ngữ pháp'}</p>

      {q.kind === 'segment' ? (
        <div className={`hz rounded-lg border bg-slate-50 p-4 text-xl leading-loose ${answered && !correct ? 'shake' : ''}`}>
          {q.parts.map((p, k) => {
            const isAns = answered && k === q.answer
            const isWrong = answered && k === picked && k !== q.answer
            return (
              <button key={k} type="button" disabled={answered} onClick={() => submit(k)}
                className={`relative mr-1 inline rounded px-1 text-left align-baseline underline decoration-2 underline-offset-8 transition-colors ${isAns ? 'pop bg-accent-soft2 decoration-accent' : isWrong ? 'bg-rose-100 decoration-seal line-through' : answered ? 'decoration-slate-200 opacity-60' : 'decoration-slate-400 hover:bg-accent-soft'}`}>
                <span className="mr-1 inline-grid size-6 place-items-center rounded-full border text-xs font-bold not-italic text-slate-500" style={{ fontFamily: 'var(--font-sans)' }}>{ABC[k]}</span>
                {p}
              </button>
            )
          })}
        </div>
      ) : (
        <div className={`grid gap-2 ${answered && !correct ? 'shake' : ''}`}>
          {q.parts.map((p, k) => {
            const isAns = answered && k === q.answer
            const isWrong = answered && k === picked && k !== q.answer
            return (
              <button key={k} type="button" disabled={answered} onClick={() => submit(k)}
                className={`tile flex items-start gap-3 rounded-lg border px-4 py-3 text-left ${isAns ? 'pop border-accent bg-accent-soft2' : isWrong ? 'border-seal/60 bg-rose-100' : answered ? 'bg-surface opacity-50' : 'bg-surface hover:bg-accent-soft'}`}>
                <span aria-hidden className="relative mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border text-sm font-bold text-slate-500">
                  {ABC[k]}
                  {isAns && <PenCircle />}
                  {isWrong && <PenCross />}
                </span>
                <span className="hz text-lg leading-relaxed">{p}</span>
              </button>
            )
          })}
        </div>
      )}

      {answered && (
        <div className="space-y-3">
          <p className={correct ? 'font-bold text-accent-fg' : 'font-bold text-seal'}>{correct ? 'Chính xác.' : `Đáp án: ${ABC[q.answer]}`}</p>
          <div className="rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-sm">
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-accent-fg">{q.topic}</div>
            <p>{q.why}</p>
            <p className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-slate-500">Sửa lại:</span>
              <button type="button" className="hz text-left text-lg font-bold underline decoration-gold decoration-2 underline-offset-4" onClick={() => speak(q.fix)}>{q.fix}</button>
            </p>
          </div>
          <button className="tile shadow w-full rounded-lg bg-accent p-2 font-bold text-white" autoFocus onClick={next}>{i + 1 === qs.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
    </div>
  )
}

import { useMemo, useState } from 'react'
import Choices from './Choices'
import OrderInput from './OrderInput'
import Stamp from './Stamp'
import type { Exercise } from '../data/grammar'
import { shuffle } from '../lib/questions'

interface Prepared { ex: Exercise; options?: string[]; tokens?: string[]; answer: string }

function prepare(ex: Exercise): Prepared {
  if (ex.type === 'choice') return { ex, options: shuffle(ex.options), answer: ex.answer }
  const answer = ex.parts.join('')
  let tokens = shuffle(ex.parts)
  for (let t = 0; t < 10 && tokens.join('') === answer; t++) tokens = shuffle(ex.parts)
  return { ex, tokens, answer }
}

/** Làm lần lượt từng câu, chấm ngay và giải thích. Gọi onDone khi hết đề. */
export default function GrammarQuiz({ items, onDone, onExit }: { items: Exercise[]; onDone?: (score: number, total: number) => void; onExit: () => void }) {
  const [round, setRound] = useState(0)
  const qs = useMemo(() => shuffle(items).map(prepare), [items, round])
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [text, setText] = useState('')
  const [reported, setReported] = useState(false)
  const q = qs[i]

  if (!q) {
    if (!reported) { setReported(true); onDone?.(score, qs.length) }
    const pct = score / qs.length
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-8 text-center shadow">
        <div className="flex justify-center"><Stamp text={pct >= 0.9 ? '优' : pct >= 0.7 ? '良' : '加'} size="lg" /></div>
        <p className="text-2xl font-bold">{score}/{qs.length} câu đúng</p>
        <div className="flex gap-2">
          <button className="tile shadow flex-1 rounded-lg bg-accent p-2 font-bold text-white" onClick={() => { setRound(r => r + 1); setI(0); setScore(0); setPicked(null); setText(''); setReported(false) }}>Làm lại</button>
          <button className="tile flex-1 rounded-lg border bg-surface p-2 font-semibold" onClick={onExit}>Quay lại</button>
        </div>
      </div>
    )
  }

  const answered = picked !== null
  const ok = (v: string) => (q.tokens ? v.split('|').map(k => q.tokens![+k]).join('') === q.answer : v === q.answer)
  const correct = answered && ok(picked!)
  const submit = (v: string) => { if (answered || !v) return; setPicked(v); if (ok(v)) setScore(s => s + 1) }
  const next = () => { setI(i + 1); setPicked(null); setText('') }
  const prompt = q.ex.type === 'choice' ? q.ex.q : q.ex.vi

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      <div className="flex justify-between text-sm text-slate-500"><button onClick={onExit}>← Thoát</button><span>Câu {i + 1}/{qs.length} · Điểm {score}</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div>
        <p className="text-lg font-semibold">{prompt}</p>
        {q.tokens && <p className="text-sm text-slate-500">Sắp xếp các từ thành câu đúng</p>}
      </div>
      {q.options ? (
        <Choices options={q.options} picked={picked} answer={q.answer} onPick={submit} />
      ) : (
        <form onSubmit={e => { e.preventDefault(); submit(text) }} className="space-y-2">
          <OrderInput tokens={q.tokens!} value={answered ? picked! : text} onChange={setText} disabled={answered} />
          {!answered && <button disabled={!text} className="tile w-full rounded-lg bg-slate-800 p-2 font-bold text-white disabled:opacity-40">Kiểm tra</button>}
        </form>
      )}
      {answered && (
        <div className="space-y-2">
          <p className={correct ? 'font-bold text-accent-fg' : 'font-bold text-seal'}>{correct ? 'Chính xác.' : `Đáp án: ${q.answer}`}</p>
          <p className="rounded-lg border-l-4 border-accent bg-accent-soft p-2 text-left text-sm">{q.ex.why}</p>
          <button className="tile shadow w-full rounded-lg bg-accent p-2 font-bold text-white" autoFocus onClick={next}>{i + 1 === qs.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
    </div>
  )
}

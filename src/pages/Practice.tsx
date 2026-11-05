import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { allLessons } from '../data/lessons'
import { MODES, MODE_INFO, availableModes, isCorrect, makeQuestions, promptClass, scopeFor, type Mode } from '../lib/questions'
import OrderInput from '../components/OrderInput'
import Choices from '../components/Choices'
import Stamp from '../components/Stamp'
import { speak } from '../lib/tts'

const GLYPH: Record<Mode, string> = { listen: '听', meaning: '义', reverse: '字', tone: '调', type: '拼', order: '句', dialog: '话', sentence: '耳' }

export default function Practice() {
  const [params, setParams] = useSearchParams()
  const mode = params.get('mode') as Mode | null
  const lesson = params.get('lesson')
  const avail = availableModes(scopeFor(lesson ? [lesson] : []))
  if (!mode) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Luyện tập</h1>
          <p className="mt-1 text-slate-500">Chọn phạm vi bài, rồi chọn dạng bài. Mỗi lượt 10 câu.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {[['', 'Tất cả bài'], ...allLessons.map(x => [`${x.book}-${x.lesson.id}`, `Q${x.book} · Bài ${x.lesson.id}`])].map(([k, l]) => (
            <button key={k} onClick={() => setParams(k ? { lesson: k } : {})} className={`rounded-full border px-4 py-1.5 font-semibold ${(lesson ?? '') === k ? 'border-accent bg-accent text-white' : 'bg-surface hover:bg-accent-soft'}`}>{l}</button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {MODES.map(k => {
            const on = avail.includes(k)
            return (
              <button key={k} disabled={!on} onClick={() => setParams(lesson ? { mode: k, lesson } : { mode: k })} className={`group flex items-center gap-4 rounded-lg border bg-surface p-4 text-left ${on ? 'tile shadow' : 'opacity-40'}`}>
                <span aria-hidden className="hz grid size-14 shrink-0 place-items-center rounded-md border-2 border-accent text-3xl font-black text-accent-fg transition-colors group-hover:bg-accent group-hover:text-white">{GLYPH[k]}</span>
                <span className="min-w-0">
                  <span className="block font-bold">{MODE_INFO[k].title.replace(/^\S+\s/, '')}</span>
                  <span className="block text-sm text-slate-500">{on ? MODE_INFO[k].desc : 'Chưa có đủ nội dung cho dạng này trong phạm vi đã chọn.'}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }
  return <Quiz key={mode + lesson} mode={mode} lesson={lesson} onExit={() => setParams(lesson ? { lesson } : {})} />
}

function Quiz({ mode, lesson, onExit }: { mode: Mode; lesson: string | null; onExit: () => void }) {
  const [round, setRound] = useState(0)
  const qs = useMemo(() => makeQuestions(mode, scopeFor(lesson ? [lesson] : [])), [mode, lesson, round])
  const [i, setI] = useState(0)
  const [score, setScore] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [text, setText] = useState('')
  const q = qs[i]

  if (!q) {
    return (
      <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-8 text-center shadow">
        <div className="flex justify-center"><Stamp text={score / qs.length >= 0.9 ? '优' : score / qs.length >= 0.7 ? '良' : '加'} size="lg" /></div>
        <p className="text-2xl font-bold">{score}/{qs.length} câu đúng</p>
        <div className="flex gap-2">
          <button className="flex-1 rounded bg-accent p-2 text-white" onClick={() => { setRound(r => r + 1); setI(0); setScore(0); setPicked(null) }}>Làm lại</button>
          <button className="flex-1 rounded border p-2" onClick={onExit}>Chọn dạng khác</button>
        </div>
      </div>
    )
  }
  const answered = picked !== null
  const correct = answered && isCorrect(q, picked!)
  function submit(v: string) {
    if (answered) return
    setPicked(v)
    const ok = isCorrect(q, v)
    if (ok) setScore(s => s + 1)
    if (q.speakText && ok) speak(q.speakText)
  }
  function next() { setI(i + 1); setPicked(null); setText('') }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      <div className="flex justify-between text-sm text-slate-500"><button onClick={onExit}>← Thoát</button><span>Câu {i + 1}/{qs.length} · Điểm {score}</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className="cursor-pointer" onClick={() => q.speakText && speak(q.speakText)}>
        <div className={promptClass(q)}>{q.prompt}</div>
        {q.sub && <div className="text-slate-500">{q.sub}</div>}
        {q.speakText && <button className="tile mt-2 rounded-lg border bg-surface px-4 py-1.5 font-semibold" onClick={e => { e.stopPropagation(); speak(q.speakText!) }}>🔊 Nghe lại</button>}
      </div>
      {q.options ? (
        <Choices options={q.options} picked={picked} answer={q.answer} onPick={submit} />
      ) : q.tokens ? (
        <form onSubmit={e => { e.preventDefault(); submit(text) }} className="space-y-2">
          <OrderInput tokens={q.tokens} value={answered ? picked! : text} onChange={setText} disabled={answered} />
          {!answered && <button disabled={!text} className="w-full rounded bg-slate-800 p-2 text-white disabled:opacity-40">Kiểm tra</button>}
        </form>
      ) : (
        <form onSubmit={e => { e.preventDefault(); submit(text) }} className="space-y-2">
          <input autoFocus disabled={answered} className="w-full rounded border p-3 text-center text-xl" placeholder="vd: nǐ hǎo hoặc ni3 hao3" value={text} onChange={e => setText(e.target.value)} />
          {!answered && <button className="w-full rounded bg-slate-800 p-2 text-white">Kiểm tra</button>}
        </form>
      )}
      {answered && (
        <div className="space-y-2">
          <p className={correct ? 'font-bold text-accent-fg' : 'font-bold text-seal'}>{correct ? 'Chính xác.' : `Đáp án: ${q.answer}`}</p>
          {q.reveal && <p className="text-sm text-slate-500">{q.reveal}</p>}
          <button className="w-full rounded bg-accent p-2 text-white" autoFocus onClick={next}>{i + 1 === qs.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
      <Link to={lesson ? `/books/${lesson.split('-')[0]}/lessons/${lesson.split('-')[1]}` : '/'} className="block text-sm text-slate-400">{lesson ? 'Xem lại bài học' : 'Về thư viện'}</Link>
    </div>
  )
}

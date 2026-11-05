import { useEffect, useMemo, useRef, useState } from 'react'
import { allLessons } from '../data/lessons'
import { MODES, MODE_INFO, availableModes, buildExam, displayAnswer, isCorrect, promptClass, scopeFor, shuffle, type Mode, type Q } from '../lib/questions'
import OrderInput from '../components/OrderInput'
import Choices from '../components/Choices'
import Stamp from '../components/Stamp'
import { addVocabToDeck } from '../lib/srs'
import { speak } from '../lib/tts'

interface Config { lessons: string[]; types: Mode[]; count: number; minutes: number }
interface Record_ { date: string; correct: number; total: number; secs: number; scope: string }

const HISTORY_KEY = 'exam-history'
const loadHistory = (): Record_[] => { try { return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]') } catch { return [] } }
const saveHistory = (r: Record_) => { try { localStorage.setItem(HISTORY_KEY, JSON.stringify([r, ...loadHistory()].slice(0, 10))) } catch { /* ignore */ } }

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

export default function Exam() {
  const [phase, setPhase] = useState<'setup' | 'run' | 'result'>('setup')
  const [cfg, setCfg] = useState<Config>({ lessons: [], types: [...MODES], count: 20, minutes: 0 })
  const [qs, setQs] = useState<Q[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [secs, setSecs] = useState(0)

  function start(c: Config) {
    setCfg(c)
    setQs(buildExam(c.types, scopeFor(c.lessons), c.count))
    setAnswers({})
    setPhase('run')
  }
  function finish(used: number) {
    const correct = qs.filter((q, i) => isCorrect(q, answers[i])).length
    const scope = cfg.lessons.length ? cfg.lessons.map(k => 'Q' + k.replace('-', '·B')).join(', ') : 'Tất cả bài'
    saveHistory({ date: new Date().toISOString(), correct, total: qs.length, secs: used, scope })
    setSecs(used)
    setPhase('result')
  }

  if (phase === 'setup') return <Setup initial={cfg} onStart={start} />
  if (phase === 'run') return <Run qs={qs} answers={answers} setAnswers={setAnswers} minutes={cfg.minutes} onFinish={finish} />
  return <Result qs={qs} answers={answers} secs={secs} onRetry={() => start(cfg)} onBack={() => setPhase('setup')} />
}

function Setup({ initial, onStart }: { initial: Config; onStart: (c: Config) => void }) {
  const [c, setC] = useState(initial)
  const history = useMemo(loadHistory, [])
  const scope = useMemo(() => scopeFor(c.lessons), [c.lessons])
  const pool = scope.words.length
  const avail = useMemo(() => availableModes(scope), [scope])
  const types = c.types.filter(t => avail.includes(t))
  const toggle = <T,>(arr: T[], v: T) => (arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v])
  const chip = (on: boolean) => `rounded-full border px-4 py-1.5 text-sm font-semibold ${on ? 'border-accent bg-accent text-white' : 'bg-surface hover:bg-accent-soft'}`
  const ok = types.length > 0

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Thi thử</h1>
        <p className="mt-1 max-w-xl text-slate-500">Đề trộn nhiều dạng câu hỏi, không báo đúng/sai khi đang làm. Nộp bài mới xem điểm và đáp án.</p>
      </div>
      <section className="space-y-6">
        <Step n={1} title="Phạm vi kiến thức" hint={`Kho câu hỏi: ${pool} từ vựng`}>
          <button className={chip(c.lessons.length === 0)} onClick={() => setC({ ...c, lessons: [] })}>Tất cả bài</button>
          {allLessons.map(x => {
            const k = `${x.book}-${x.lesson.id}`
            return <button key={k} className={chip(c.lessons.includes(k))} onClick={() => setC({ ...c, lessons: toggle(c.lessons, k) })}>Q{x.book} · Bài {x.lesson.id}</button>
          })}
        </Step>
        <Step n={2} title="Dạng câu hỏi" hint="Dạng bị mờ là chưa đủ nội dung trong phạm vi đã chọn">
          {MODES.map(m => <button key={m} disabled={!avail.includes(m)} className={chip(types.includes(m)) + ' disabled:opacity-40'} onClick={() => setC({ ...c, types: toggle(c.types, m) })}>{MODE_INFO[m].short}</button>)}
        </Step>
        <div className="grid gap-6 sm:grid-cols-2">
          <Step n={3} title="Số câu">
            {[10, 20, 30, 40].map(n => <button key={n} className={chip(c.count === n)} onClick={() => setC({ ...c, count: n })}>{n}</button>)}
          </Step>
          <Step n={4} title="Thời gian">
            {[[0, 'Không giới hạn'], [10, '10 phút'], [20, '20 phút'], [30, '30 phút']].map(([m, l]) => <button key={m} className={chip(c.minutes === m)} onClick={() => setC({ ...c, minutes: m as number })}>{l}</button>)}
          </Step>
        </div>
        <button disabled={!ok} onClick={() => onStart({ ...c, types })} className="tile shadow w-full rounded-lg bg-accent p-4 text-lg font-bold text-white disabled:opacity-40">Bắt đầu thi</button>
        {!ok && <p className="text-sm text-seal">Chọn ít nhất 1 dạng câu hỏi.</p>}
      </section>
      {history.length > 0 && (
        <section className="space-y-2">
          <h2 className="rule pt-3 text-xl font-extrabold">Lịch sử gần đây</h2>
          <ul className="divide-y text-sm">
            {history.map(h => {
              const pct = Math.round((h.correct / h.total) * 100)
              return (
                <li key={h.date} className="flex items-center gap-3 py-2">
                  <span className={`w-14 text-lg font-bold ${pct >= 80 ? 'text-accent-fg' : pct >= 60 ? 'text-gold' : 'text-rose-500'}`}>{pct}%</span>
                  <span className="flex-1">{h.correct}/{h.total} câu · {fmt(h.secs)}<br /><span className="text-slate-500">{h.scope}</span></span>
                  <span className="text-slate-500">{new Date(h.date).toLocaleDateString('vi-VN')}</span>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="rule mb-3 flex items-baseline gap-3 pt-2">
        <span className="hz text-2xl font-black text-accent-fg">{n}</span>
        <h2 className="font-extrabold">{title}</h2>
        {hint && <span className="text-xs text-slate-500">{hint}</span>}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function Run({ qs, answers, setAnswers, minutes, onFinish }: {
  qs: Q[]; answers: Record<number, string>; setAnswers: (f: (a: Record<number, string>) => Record<number, string>) => void
  minutes: number; onFinish: (usedSecs: number) => void
}) {
  const [i, setI] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const startRef = useRef(Date.now())
  const doneRef = useRef(false)
  const limit = minutes * 60
  const left = limit ? Math.max(limit - elapsed, 0) : 0
  const q = qs[i]
  const answered = Object.values(answers).filter(v => v !== '').length

  const submit = () => {
    if (doneRef.current) return
    doneRef.current = true
    onFinish(Math.round((Date.now() - startRef.current) / 1000))
  }
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.round((Date.now() - startRef.current) / 1000)), 500)
    return () => clearInterval(t)
  }, [])
  useEffect(() => { if (limit && elapsed >= limit) submit() })

  if (!q) return <p>Không tạo được đề.</p>
  const set = (v: string) => setAnswers(a => ({ ...a, [i]: v }))
  const confirmSubmit = () => {
    const miss = qs.length - answered
    if (window.confirm(miss ? `Còn ${miss} câu chưa trả lời. Vẫn nộp bài?` : 'Nộp bài?')) submit()
  }

  return (
    <div className="space-y-3">
      <div className="sticky top-14 z-10 flex items-center justify-between rounded-lg bg-surface p-3 shadow">
        <span className="text-sm">Đã làm <b>{answered}/{qs.length}</b></span>
        <span className={`text-lg font-extrabold tabular-nums ${limit && left <= 60 ? 'text-seal' : ''}`}>{limit ? `⏳ ${fmt(left)}` : `⏱ ${fmt(elapsed)}`}</span>
        <button onClick={confirmSubmit} className="tile rounded-md bg-accent px-4 py-1.5 font-bold text-white">Nộp bài</button>
      </div>
      <div className="space-y-4 rounded-xl bg-surface p-6 text-center shadow">
        <p className="text-sm text-slate-500">Câu {i + 1}/{qs.length} · {MODE_INFO[q.type].short}</p>
        <div className="cursor-pointer" onClick={() => q.speakText && speak(q.speakText)}>
          <div className={promptClass(q)}>{q.prompt}</div>
          {q.sub && <div className="text-slate-500">{q.sub}</div>}
          {q.speakText && <button className="tile mt-2 rounded-lg border bg-surface px-4 py-1.5 font-semibold" onClick={e => { e.stopPropagation(); speak(q.speakText!) }}>🔊 Nghe{q.type === 'listen' || q.type === 'tone' ? ' lại' : ''}</button>}
        </div>
        {q.options ? (
          <Choices options={q.options} picked={answers[i]} onPick={set} />
        ) : q.tokens ? (
          <OrderInput tokens={q.tokens} value={answers[i] ?? ''} onChange={set} />
        ) : (
          <input className="w-full rounded border p-3 text-center text-xl" placeholder="vd: nǐ hǎo hoặc ni3 hao3" value={answers[i] ?? ''} onChange={e => set(e.target.value)} />
        )}
        <div className="flex justify-between">
          <button disabled={i === 0} onClick={() => setI(i - 1)} className="rounded-lg px-4 py-2 font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30">← Trước</button>
          {i < qs.length - 1
            ? <button onClick={() => setI(i + 1)} className="tile shadow rounded-lg bg-slate-800 px-5 py-2 font-bold text-white">Sau →</button>
            : <button onClick={confirmSubmit} className="tile shadow rounded-lg bg-accent px-5 py-2 font-bold text-white">Nộp bài</button>}
        </div>
      </div>
      <div className="flex flex-wrap gap-1 rounded-xl bg-surface p-3 shadow">
        {qs.map((_, k) => (
          <button key={k} onClick={() => setI(k)} className={`h-9 w-9 rounded-md border text-sm font-semibold ${k === i ? 'border-accent bg-accent text-white' : answers[k] ? 'border-accent-soft2 bg-accent-soft2' : 'bg-surface'}`}>{k + 1}</button>
        ))}
      </div>
    </div>
  )
}

function Result({ qs, answers, secs, onRetry, onBack }: { qs: Q[]; answers: Record<number, string>; secs: number; onRetry: () => void; onBack: () => void }) {
  const [onlyWrong, setOnlyWrong] = useState(false)
  const [msg, setMsg] = useState('')
  const results = qs.map((q, i) => ({ q, i, a: answers[i], ok: isCorrect(q, answers[i]) }))
  const correct = results.filter(r => r.ok).length
  const pct = Math.round((correct / qs.length) * 100)
  const byType = MODES.map(m => {
    const rs = results.filter(r => r.q.type === m)
    return { m, total: rs.length, ok: rs.filter(r => r.ok).length }
  }).filter(x => x.total)
  const wrongVocab = shuffle([...new Map(results.filter(r => !r.ok && r.q.vocab).map(r => [r.q.vocab!.hanzi, r.q.vocab!])).values()])
  const shown = onlyWrong ? results.filter(r => !r.ok) : results

  async function addWrong() {
    setMsg('Đang thêm…')
    try {
      const n = await addVocabToDeck(wrongVocab)
      setMsg(`✅ Đã thêm ${n} từ vào bộ ôn tập${n < wrongVocab.length ? ` (${wrongVocab.length - n} từ đã có sẵn)` : ''}.`)
    } catch (e) { setMsg('Lỗi: ' + (e as Error).message) }
  }

  return (
    <div className="space-y-4">
      <section className="space-y-3 rounded-xl bg-surface p-6 text-center shadow">
        <div className="flex justify-center"><Stamp text={pct >= 90 ? '优' : pct >= 70 ? '良' : pct >= 50 ? '可' : '加'} size="lg" /></div>
        <p className="text-4xl font-bold">{pct}%</p>
        <p>{correct}/{qs.length} câu đúng · thời gian {fmt(secs)}</p>
        <p className="text-sm text-slate-500">{pct >= 90 ? 'Xuất sắc!' : pct >= 70 ? 'Khá tốt, ôn lại các câu sai nhé.' : pct >= 50 ? 'Tạm ổn, nên ôn lại bài trước khi thi lại.' : 'Cần ôn thêm: xem lại bài học và luyện tập.'}</p>
        <div className="flex flex-wrap justify-center gap-2">
          <button className="rounded bg-accent px-4 py-2 text-white" onClick={onRetry}>Thi lại (đề mới)</button>
          <button className="rounded border px-4 py-2" onClick={onBack}>Đổi cấu hình</button>
        </div>
      </section>
      <section className="space-y-2 rounded-xl bg-surface p-4 shadow">
        <h2 className="font-bold">Kết quả theo dạng câu hỏi</h2>
        {byType.map(x => (
          <div key={x.m} className="text-sm">
            <div className="flex justify-between"><span>{MODE_INFO[x.m].short}</span><span>{x.ok}/{x.total}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-accent" style={{ width: `${(x.ok / x.total) * 100}%` }} /></div>
          </div>
        ))}
      </section>
      {wrongVocab.length > 0 && (
        <section className="space-y-2 rounded-xl bg-surface p-4 shadow">
          <p>Có <b>{wrongVocab.length}</b> từ bạn làm sai. Thêm vào bộ ôn tập để luyện lại theo lịch FSRS?</p>
          <button className="rounded bg-accent px-3 py-2 text-white" onClick={addWrong}>＋ Thêm các từ sai vào bộ ôn tập</button>
          {msg && <p className="text-sm">{msg}</p>}
        </section>
      )}
      <section className="space-y-2 rounded-xl bg-surface p-4 shadow">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Xem lại đáp án</h2>
          <label className="text-sm"><input type="checkbox" checked={onlyWrong} onChange={e => setOnlyWrong(e.target.checked)} /> Chỉ câu sai</label>
        </div>
        <ul className="space-y-2">
          {shown.map(r => (
            <li key={r.i} className={`rounded-lg border-l-4 p-3 ${r.ok ? 'border-accent' : 'border-rose-500'}`}>
              <div className="flex items-start gap-2">
                <span className="text-sm text-slate-500">{r.i + 1}.</span>
                <div className="flex-1">
                  <div className="font-medium">{r.q.prompt}{r.q.sub && <span className="text-sm text-slate-500"> · {r.q.sub}</span>}</div>
                  <div className="text-sm">Bạn chọn: <b className={r.ok ? 'text-accent-fg' : 'text-rose-500'}>{displayAnswer(r.q, r.a) || '(bỏ trống)'}</b>{!r.ok && <> · Đáp án: <b>{r.q.answer}</b></>}</div>
                  {r.q.reveal && <div className="text-xs text-slate-500">{r.q.reveal}</div>}
                </div>
                {r.q.speakText && <button aria-label="Nghe" onClick={() => speak(r.q.speakText!)}>🔊</button>}
              </div>
            </li>
          ))}
          {shown.length === 0 && <li className="p-4 text-center text-slate-500">Không có câu sai nào. 🎉</li>}
        </ul>
      </section>
    </div>
  )
}

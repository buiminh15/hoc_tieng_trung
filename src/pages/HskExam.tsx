import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pinyin } from 'pinyin-pro'
import Stamp from '../components/Stamp'
import {
  EXAM_MINUTES, HSK_PARTS, PASS_SCORE, POINTS_PER_QUESTION, getHsk, labelOf, optionsFor, partOf,
  type HskExam as Exam, type HskPart,
} from '../data/hsk'
import { saveHsk } from '../lib/hskHistory'

const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`

export default function HskExam() {
  const { id } = useParams()
  const exam = getHsk(id ?? '')
  if (!exam) return <p>Không có đề này. <Link className="text-accent-fg underline" to="/hsk">Về danh sách đề</Link></p>
  return <Flow key={exam.id} exam={exam} />
}

function Flow({ exam }: { exam: Exam }) {
  const [phase, setPhase] = useState<'intro' | 'run' | 'result'>('intro')
  const [strict, setStrict] = useState(false)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [used, setUsed] = useState(0)

  if (phase === 'intro') return <Intro exam={exam} strict={strict} setStrict={setStrict} onStart={() => { setAnswers({}); setPhase('run') }} />
  if (phase === 'run') {
    return <Run exam={exam} strict={strict} answers={answers} setAnswers={setAnswers} onFinish={secs => {
      const sc = score(exam, answers)
      saveHsk({ exam: exam.id, date: new Date().toISOString(), listening: sc.listening, reading: sc.reading, secs })
      setUsed(secs)
      setPhase('result')
    }} />
  }
  return <Result exam={exam} answers={answers} secs={used} onRetry={() => { setAnswers({}); setPhase('intro') }} />
}

function score(exam: Exam, answers: Record<number, string>) {
  let listening = 0, reading = 0
  exam.answers.forEach((a, i) => {
    if (answers[i + 1] === a) (i < 20 ? (listening += POINTS_PER_QUESTION) : (reading += POINTS_PER_QUESTION))
  })
  return { listening, reading, total: listening + reading }
}

// ---------------------------------------------------------------- màn hình mở đầu

function Intro({ exam, strict, setStrict, onStart }: { exam: Exam; strict: boolean; setStrict: (v: boolean) => void; onStart: () => void }) {
  return (
    <div className="space-y-6">
      <div>
        <Link to="/hsk" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← Danh sách đề</Link>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">HSK 1 · {exam.title} <span className="text-lg font-semibold text-slate-500">{exam.code}</span></h1>
      </div>
      <section className="space-y-3">
        <h2 className="rule pt-3 text-lg font-extrabold">Cấu trúc đề</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {(['listening', 'reading'] as const).map(sec => (
            <div key={sec} className="rounded-lg border bg-surface p-4">
              <div className="font-extrabold">{sec === 'listening' ? '听力 Nghe · 20 câu' : '阅读 Đọc · 20 câu'}</div>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-500">
                {HSK_PARTS.filter(p => p.section === sec).map(p => (
                  <li key={p.id}><b className="text-slate-900">Câu {p.from}–{p.from + 4}</b> · {p.hint}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="rule pt-3 text-lg font-extrabold">Trước khi bắt đầu</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-500">
          <li>Thời gian {EXAM_MINUTES} phút, hết giờ tự nộp bài. Mỗi câu 5 điểm, từ {PASS_SCORE}/200 là đạt.</li>
          <li>Đề nằm ngay trong app, bên cạnh phiếu trả lời. Chọn đáp án trên phiếu, có thể đổi trước khi nộp.</li>
          <li>Bài nghe phát một lần, từ lúc chào đến "听力考试现在结束". Nên đeo tai nghe.</li>
        </ul>
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-surface p-3">
          <input type="checkbox" className="mt-1" checked={strict} onChange={e => setStrict(e.target.checked)} />
          <span><b>Chế độ thi thật</b><br /><span className="text-sm text-slate-500">Không tua được file nghe. Bỏ chọn nếu bạn muốn tua lại để luyện.</span></span>
        </label>
        <button onClick={onStart} className="tile shadow w-full rounded-lg bg-accent p-4 text-lg font-bold text-white">Bắt đầu làm bài</button>
      </section>
    </div>
  )
}

// ---------------------------------------------------------------- đang làm bài

function Run({ exam, strict, answers, setAnswers, onFinish }: {
  exam: Exam; strict: boolean; answers: Record<number, string>
  setAnswers: (f: (a: Record<number, string>) => Record<number, string>) => void; onFinish: (secs: number) => void
}) {
  const [partId, setPartId] = useState(HSK_PARTS[0].id)
  const [elapsed, setElapsed] = useState(0)
  const start = useRef(Date.now())
  const done = useRef(false)
  const limit = EXAM_MINUTES * 60
  const left = Math.max(limit - elapsed, 0)
  const partIdx = HSK_PARTS.findIndex(p => p.id === partId)
  const part = HSK_PARTS[partIdx]
  const paperPages = exam.paper[part.id]
  const answered = Object.keys(answers).length

  const finish = () => {
    if (done.current) return
    done.current = true
    onFinish(Math.round((Date.now() - start.current) / 1000))
  }
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.round((Date.now() - start.current) / 1000)), 500)
    return () => clearInterval(t)
  }, [])
  useEffect(() => { if (elapsed >= limit) finish() })
  const confirmFinish = () => {
    const miss = 40 - answered
    if (window.confirm(miss ? `Còn ${miss} câu chưa chọn. Vẫn nộp bài?` : 'Nộp bài?')) finish()
  }
  // Bấm lại đáp án đang chọn thì bỏ chọn
  const set = (q: number, v: string) => setAnswers(a => {
    const next = { ...a }
    if (a[q] === v) delete next[q]
    else next[q] = v
    return next
  })

  return (
    <div className="space-y-4">
      <div className="sticky top-14 z-10 flex items-center justify-between gap-3 rounded-lg bg-surface p-3 shadow">
        <span className="text-sm">Đã chọn <b>{answered}/40</b></span>
        <span className={`text-lg font-extrabold tabular-nums ${left <= 300 ? 'text-seal' : ''}`}>⏳ {fmt(left)}</span>
        <button onClick={confirmFinish} className="tile rounded-md bg-accent px-4 py-1.5 font-bold text-white">Nộp bài</button>
      </div>

      {part.section === 'listening' && <AudioBar src={exam.audio} strict={strict} />}

      <PartTabs partId={partId} onPick={setPartId} answers={answers} />

      <section className="page-in space-y-4" key={part.id}>
        <div>
          <h2 className="rule pt-3 text-xl font-extrabold">{part.section === 'listening' ? '听力' : '阅读'} · {part.title} <span className="text-sm font-normal text-slate-500">câu {part.from}–{part.from + 4}</span></h2>
          <p className="mt-1 text-sm text-slate-500">{part.hint}</p>
        </div>
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="space-y-3">
            {paperPages.map((src, i) => (
              <a key={src} href={src} target="_blank" rel="noreferrer" title="Bấm để mở ảnh lớn" className="block overflow-hidden rounded-lg border bg-white shadow">
                <img src={src} alt={`Trang đề ${part.title}${paperPages.length > 1 ? `, ảnh ${i + 1}` : ''}`} className="mx-auto w-full max-w-xl" loading={i ? 'lazy' : 'eager'} />
              </a>
            ))}
          </div>
          <div className="lg:sticky lg:top-36">
            <ul className="space-y-2">
              {Array.from({ length: 5 }, (_, k) => part.from + k).map(q => (
                <AnswerRow key={q} q={q} kind={part.kind} value={answers[q]} onPick={v => set(q, v)} />
              ))}
            </ul>
            {part.kind === 'af' && <p className="mt-2 text-xs text-slate-500">Có 6 lựa chọn cho 5 câu, nên có một chữ cái không dùng.</p>}
          </div>
        </div>
      </section>

      <div className="flex justify-between">
        <button disabled={partIdx === 0} onClick={() => setPartId(HSK_PARTS[partIdx - 1].id)} className="rounded-lg px-4 py-2 font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30">← Phần trước</button>
        {partIdx < HSK_PARTS.length - 1
          ? <button onClick={() => setPartId(HSK_PARTS[partIdx + 1].id)} className="tile shadow rounded-lg bg-slate-800 px-5 py-2 font-bold text-white">Phần sau →</button>
          : <button onClick={confirmFinish} className="tile shadow rounded-lg bg-accent px-5 py-2 font-bold text-white">Nộp bài</button>}
      </div>
    </div>
  )
}

function PartTabs({ partId, onPick, answers }: { partId: string; onPick: (id: string) => void; answers: Record<number, string> }) {
  const group = (sec: 'listening' | 'reading') => (
    <div className="min-w-0 flex-1">
      <div className="mb-1 text-xs font-bold text-slate-500">{sec === 'listening' ? '听力 Nghe' : '阅读 Đọc'}</div>
      <div className="grid grid-cols-4 gap-1.5">
        {HSK_PARTS.filter(p => p.section === sec).map(p => {
          const n = [0, 1, 2, 3, 4].filter(k => answers[p.from + k]).length
          const on = p.id === partId
          return (
            <button key={p.id} onClick={() => onPick(p.id)} aria-current={on} className={`rounded-md border px-1 py-2 text-center text-sm font-bold ${on ? 'border-accent bg-accent text-white' : n === 5 ? 'border-accent-soft2 bg-accent-soft2' : 'bg-surface hover:bg-accent-soft'}`}>
              {p.no}
              <span className={`block text-[0.65rem] font-normal ${on ? 'text-white/80' : 'text-slate-500'}`}>{n}/5</span>
            </button>
          )
        })}
      </div>
    </div>
  )
  return <div className="flex gap-4 overflow-x-auto rounded-lg border bg-surface p-3">{group('listening')}{group('reading')}</div>
}

function AnswerRow({ q, kind, value, onPick }: { q: number; kind: HskPart['kind']; value?: string; onPick: (v: string) => void }) {
  return (
    <li className="flex items-center gap-3 rounded-lg border bg-surface p-2.5 pl-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 font-bold tabular-nums">{q}</span>
      <div className="flex flex-1 flex-wrap gap-2" role="radiogroup" aria-label={`Câu ${q}`}>
        {optionsFor(kind).map(o => {
          const on = value === o
          const tf = kind === 'tf'
          return (
            <button key={o} role="radio" aria-checked={on} onClick={() => onPick(o)}
              className={`tile h-11 rounded-lg border text-lg font-bold ${tf ? 'min-w-20 flex-1 sm:flex-none sm:px-8' : 'min-w-11 px-3'} ${on ? (o === 'F' ? 'border-seal bg-seal text-white' : 'border-accent bg-accent text-white') : 'bg-surface hover:bg-accent-soft'}`}>
              {labelOf(o)}
            </button>
          )
        })}
      </div>
    </li>
  )
}

function AudioBar({ src, strict }: { src: string; strict: boolean }) {
  const ref = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [cur, setCur] = useState(0)
  const [dur, setDur] = useState(0)
  const [err, setErr] = useState(false)
  useEffect(() => () => ref.current?.pause(), [])
  const toggle = () => { const a = ref.current; if (!a) return; if (a.paused) a.play().catch(() => setErr(true)); else a.pause() }
  const skip = (d: number) => { const a = ref.current; if (a) a.currentTime = Math.max(0, Math.min(a.duration || 0, a.currentTime + d)) }
  return (
    <div className="flex items-center gap-3 rounded-lg border bg-surface p-3 shadow">
      <audio ref={ref} src={src} preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onTimeUpdate={e => setCur(e.currentTarget.currentTime)} onLoadedMetadata={e => setDur(e.currentTarget.duration)} onError={() => setErr(true)} />
      <button onClick={toggle} aria-label={playing ? 'Tạm dừng' : 'Phát'} className="tile grid size-12 shrink-0 place-items-center rounded-full bg-accent text-xl text-white">{playing ? '❚❚' : '▶'}</button>
      <div className="min-w-0 flex-1">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuemin={0} aria-valuemax={Math.round(dur)} aria-valuenow={Math.round(cur)} aria-label="Tiến độ bài nghe">
          <div className="h-full bg-accent" style={{ width: dur ? `${(cur / dur) * 100}%` : 0 }} />
        </div>
        <div className="mt-1 flex justify-between text-xs tabular-nums text-slate-500">
          <span>{fmt(cur)}</span><span>{err ? 'Không tải được file nghe' : `Bài nghe ${dur ? fmt(dur) : ''}`}</span>
        </div>
      </div>
      {!strict && (
        <div className="flex shrink-0 gap-1">
          <button onClick={() => skip(-10)} className="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-accent-soft">−10s</button>
          <button onClick={() => skip(10)} className="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-accent-soft">+10s</button>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------- kết quả

function Result({ exam, answers, secs, onRetry }: { exam: Exam; answers: Record<number, string>; secs: number; onRetry: () => void }) {
  const [onlyWrong, setOnlyWrong] = useState(false)
  const sc = useMemo(() => score(exam, answers), [exam, answers])
  const pass = sc.total >= PASS_SCORE
  const rows = exam.answers.map((a, i) => ({ q: i + 1, a, mine: answers[i + 1], ok: answers[i + 1] === a }))
  const shown = onlyWrong ? rows.filter(r => !r.ok) : rows
  const tr = (q: number) => exam.transcript.find(t => t.q === q)

  return (
    <div className="space-y-6">
      <section className="grid items-center gap-5 rounded-lg bg-surface p-6 shadow sm:grid-cols-[auto_1fr]">
        <div className="mx-auto"><Stamp text={pass ? '及格' : '加油'} size="lg" className="text-2xl!" /></div>
        <div className="text-center sm:text-left">
          <p className="text-sm text-slate-500">{exam.code} · thời gian làm {fmt(secs)}</p>
          <p className="text-5xl font-extrabold tabular-nums">{sc.total}<span className="text-2xl text-slate-500">/200</span></p>
          <p className={`font-semibold ${pass ? 'text-accent-fg' : 'text-seal'}`}>{pass ? `Đạt (từ ${PASS_SCORE} điểm)` : `Chưa đạt, cần ${PASS_SCORE - sc.total} điểm nữa`}</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="rule pt-3 text-lg font-extrabold">Điểm từng phần</h2>
        {[['听力 Nghe', sc.listening], ['阅读 Đọc', sc.reading]].map(([label, v]) => (
          <div key={label as string}>
            <div className="flex justify-between text-sm"><span>{label}</span><b>{v}/100</b></div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${v as number}%` }} /></div>
          </div>
        ))}
        <div className="grid grid-cols-4 gap-2 pt-1 text-center text-sm">
          {HSK_PARTS.map(p => {
            const ok = [0, 1, 2, 3, 4].filter(k => rows[p.from - 1 + k].ok).length
            return <div key={p.id} className="rounded-md border bg-surface py-2"><div className="text-xs text-slate-500">{p.section === 'listening' ? '听' : '读'} {p.no}</div><b className={ok >= 4 ? 'text-accent-fg' : ok <= 2 ? 'text-seal' : ''}>{ok}/5</b></div>
          })}
        </div>
      </section>

      <section className="space-y-2">
        <div className="rule flex items-center justify-between pt-3">
          <h2 className="text-lg font-extrabold">Xem lại đáp án</h2>
          <label className="text-sm"><input type="checkbox" checked={onlyWrong} onChange={e => setOnlyWrong(e.target.checked)} /> Chỉ câu sai</label>
        </div>
        <ul className="space-y-2">
          {shown.map(r => {
            const p = partOf(r.q)
            const t = r.q <= 20 ? tr(r.q) : undefined
            return (
              <li key={r.q} className={`rounded-lg border-l-4 bg-surface p-3 ${r.ok ? 'border-accent' : 'border-seal'}`}>
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 font-bold tabular-nums">{r.q}</span>
                  <span className="text-xs text-slate-500">{p.section === 'listening' ? '听力' : '阅读'} · {p.title}</span>
                  <span className="ml-auto text-sm">Bạn chọn <b className={r.ok ? 'text-accent-fg' : 'text-seal'}>{labelOf(r.mine)}</b>{!r.ok && <> · Đúng: <b>{labelOf(r.a)}</b></>}</span>
                </div>
                {t && (
                  <div className="mt-2 space-y-1 border-t pt-2 pl-12">
                    {t.lines.map((l, i) => (
                      <div key={i}><span className="hz text-lg font-bold">{l}</span><div className="text-xs text-accent-fg">{pinyin(l.replace(/^[男女]：/, ''))}</div></div>
                    ))}
                    {t.ask && <div className="text-sm"><span className="font-bold">问：</span><span className="hz">{t.ask}</span></div>}
                  </div>
                )}
              </li>
            )
          })}
          {shown.length === 0 && <li className="p-6 text-center text-slate-500">Không có câu nào sai. 🎉</li>}
        </ul>
      </section>

      <div className="flex flex-wrap gap-2">
        <button onClick={onRetry} className="tile shadow rounded-lg bg-accent px-5 py-2.5 font-bold text-white">Làm lại</button>
        <Link to="/hsk" className="tile rounded-lg border bg-surface px-5 py-2.5 font-semibold">Chọn đề khác</Link>
      </div>
    </div>
  )
}

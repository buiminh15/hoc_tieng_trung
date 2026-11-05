import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { toneExamples, tones } from '../data/lesson1'
import { MODE_INFO, availableModes, scopeFor } from '../lib/questions'
import { getLesson } from '../data/lessons'
import { getBook } from '../data/books'
import { lessonKey, useProgress } from '../lib/progress'
import type { Drill, Lesson as LessonT, PhonSection } from '../data/types'
import { speak, speakSyllable } from '../lib/tts'
import { addVocabToDeck } from '../lib/srs'
import { SpeakBtn, ToneShape } from '../components/Speak'
import StrokeWriter from '../components/StrokeWriter'
import Stamp from '../components/Stamp'
import Tabs from '../components/Tabs'
import { ExplainTab } from '../components/SelfExplain'
import PinyinChart from '../components/PinyinChart'
import WritePractice from '../components/WritePractice'

const TABS = [
  ['text', '课文 Bài khóa'],
  ['vocab', '生词 Từ mới'],
  ['phon', '语音 Ngữ âm'],
  ['notes', '注释 Ghi chú'],
  ['write', '写字 Tập viết'],
  ['explain', '讲解 Tự giải thích'],
  ['practice', '练习 Luyện tập'],
] as const
type Tab = (typeof TABS)[number][0]

const ZH_NUM = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

export default function LessonRoute() {
  const { bookId, id } = useParams()
  const book = Number(bookId)
  const lesson = getLesson(book, Number(id))
  if (!lesson) return <p>Không tìm thấy bài này. <Link className="text-accent-fg underline" to="/">Về thư viện</Link></p>
  return <LessonView key={`${book}-${lesson.id}`} book={book} lesson={lesson} />
}

function LessonView({ book, lesson }: { book: number; lesson: LessonT }) {
  const [params] = useSearchParams()
  const wanted = TABS.find(t => t[0] === params.get('tab'))?.[0]
  const [tab, setTab] = useState<Tab>(wanted ?? 'text')
  const tabs = TABS.filter(t => t[0] !== 'phon' || lesson.sections.length > 0)
  const idx = tabs.findIndex(t => t[0] === tab)
  return (
    <div className="space-y-4">
      <nav className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        <Link to="/" className="hover:underline">Thư viện</Link>›
        <Link to={`/books/${book}`} className="hover:underline">Quyển {book}</Link>›
        <span className="text-slate-900">Bài {lesson.id}</span>
      </nav>
      <header className="relative overflow-hidden rounded-lg p-5 text-white shadow sm:p-7" style={{ background: 'linear-gradient(145deg,#0d2b30,#124c47 70%,#176a5b)' }}>
        <span aria-hidden className="hz pointer-events-none absolute -right-4 -top-10 select-none text-[11rem] font-black leading-none text-white/[0.07]">{[...lesson.hanzi][0]}</span>
        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white/70">Quyển {book} · Bài {lesson.id}</p>
            <h1 className="hz mt-1 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{lesson.hanzi}</h1>
            <p className="mt-2 text-white/85"><span className="py font-semibold text-[#f0c560]">{lesson.pinyin}</span> · {lesson.title}</p>
          </div>
          <Stamp text={ZH_NUM[lesson.id] ?? String(lesson.id)} size="lg" className="border-[#ee6a58] text-[#ee6a58]" />
        </div>
      </header>
      <Tabs tabs={tabs} value={tab} onChange={setTab} />
      {tab === 'text' && <TextTab lesson={lesson} />}
      {tab === 'vocab' && <VocabTab lesson={lesson} />}
      {tab === 'phon' && <PhoneticsTab lesson={lesson} />}
      {tab === 'notes' && <NotesTab lesson={lesson} />}
      {tab === 'write' && <Card title="Tập viết chữ Hán"><WritePractice chars={lesson.writeChars} /></Card>}
      {tab === 'explain' && <ExplainTab book={book} lesson={lesson} />}
      {tab === 'practice' && <PracticeTab book={book} lesson={lesson} />}
      <div className="flex justify-between">
        <button disabled={idx === 0} className="rounded-lg px-4 py-2 font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30" onClick={() => setTab(tabs[idx - 1][0])}>← Trước</button>
        <button disabled={idx === tabs.length - 1} className="tile shadow rounded-lg bg-accent px-5 py-2 font-bold text-white disabled:opacity-30" onClick={() => setTab(tabs[idx + 1][0])}>Tiếp →</button>
      </div>
      {tab === 'practice' && <LessonFooter book={book} lesson={lesson} />}
    </div>
  )
}

const Card = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <section className="page-in space-y-4 pt-1">{title && <h2 className="rule pt-3 text-xl font-extrabold">{title}</h2>}{children}</section>
)

function TextTab({ lesson }: { lesson: LessonT }) {
  const [py, setPy] = useState(true)
  const [vi, setVi] = useState(true)
  return (
    <Card title="Hội thoại">
      <div className="flex gap-4 text-sm">
        <label><input type="checkbox" checked={py} onChange={e => setPy(e.target.checked)} /> Hiện pinyin</label>
        <label><input type="checkbox" checked={vi} onChange={e => setVi(e.target.checked)} /> Hiện nghĩa</label>
      </div>
      <div className="space-y-3">
        {lesson.dialogue.map((d, i) => {
          const right = d.who === 'B'
          return (
            <div key={i} className="space-y-2">
              {d.scene && <p className="pt-3 text-sm font-bold text-accent-fg">{d.scene}</p>}
              <button type="button" onClick={() => speak(d.hanzi)} className={`tile group flex w-full max-w-xl items-center gap-4 rounded-lg border p-4 text-left shadow ${right ? 'ml-auto flex-row-reverse bg-accent-soft' : 'bg-surface'}`}>
                <span className={`grid size-10 shrink-0 place-items-center rounded-full font-extrabold ${right ? 'bg-accent text-white' : 'bg-slate-100 text-slate-900'}`}>{d.who}</span>
                <span className={`min-w-0 flex-1 ${right ? 'text-right' : ''}`}>
                  {d.name && <span className="block text-xs font-semibold text-slate-500">{d.name}</span>}
                  <span className="hz block text-3xl font-bold leading-snug sm:text-4xl">{d.hanzi}</span>
                  {py && <span className="py block font-semibold text-accent-fg">{d.pinyin}</span>}
                  {vi && <span className="block text-sm text-slate-500">{d.vi}</span>}
                </span>
                <span className="text-lg opacity-40 transition-opacity group-hover:opacity-100">🔊</span>
              </button>
            </div>
          )
        })}
      </div>
      {lesson.dialogueTip && <p className="rounded-lg border-l-4 border-gold bg-amber-50 p-3 text-sm" dangerouslySetInnerHTML={{ __html: '💡 ' + lesson.dialogueTip }} />}
      <div className="flex flex-wrap gap-2">
        <button className="tile shadow rounded-lg bg-surface px-3 py-2 text-sm font-semibold" onClick={() => speak(lesson.slowSay ?? lesson.dialogue[0].hanzi, 0.6)}>🐢 Nghe chậm</button>
        <button className="tile shadow rounded-lg bg-surface px-3 py-2 text-sm font-semibold" onClick={() => speak(lesson.dialogue.map(d => d.hanzi).join(''), 0.8)}>▶ Nghe cả hội thoại</button>
      </div>
    </Card>
  )
}

function VocabTab({ lesson }: { lesson: LessonT }) {
  const [msg, setMsg] = useState('')
  const [focus, setFocus] = useState(lesson.vocab[0].hanzi)
  async function add() {
    setMsg('Đang thêm…')
    try {
      const n = await addVocabToDeck(lesson.vocab)
      setMsg(`✅ Đã thêm ${n} từ mới vào bộ ôn tập${n < lesson.vocab.length ? ` (${lesson.vocab.length - n} từ đã có)` : ''}. `)
    } catch (e) { setMsg('Lỗi: ' + (e as Error).message) }
  }
  return (
    <Card title={`Từ mới (${lesson.vocab.length})`}>
      <div className="flex flex-wrap items-center gap-2">
        <button className="tile shadow rounded-lg bg-accent px-4 py-2 font-bold text-white" onClick={add}>＋ Thêm tất cả vào bộ ôn tập (FSRS)</button>
        {msg && <span className="text-sm">{msg}{msg.startsWith('✅') && <Link to="/review" className="text-accent-fg underline">Ôn ngay</Link>}</span>}
      </div>
      <ul className="divide-y">
        {lesson.vocab.map((v, i) => (
          <li key={v.hanzi + i} className={`flex cursor-pointer items-center gap-3 p-2 ${focus === v.hanzi ? 'bg-accent-soft' : ''}`} onClick={() => { setFocus(v.hanzi); speak(v.hanzi) }}>
            <span className="w-5 text-sm text-slate-400">{i + 1}</span>
            <span className="w-20 text-3xl font-bold">{v.hanzi}</span>
            <span className="w-24 text-accent-fg">{v.pinyin}</span>
            <span className="flex-1 text-sm"><b>{v.meaning}</b><br /><span className="text-slate-500">{v.pos}{v.han_viet && ` · Hán Việt: ${v.han_viet}`}</span></span>
            <SpeakBtn text={v.hanzi} />
          </li>
        ))}
      </ul>
      <div>
        <p className="mb-1 text-sm text-slate-500">Thứ tự nét của "{focus}" (bấm vào chữ để xem lại):</p>
        <div className="flex flex-wrap gap-2">{[...focus].map((c, i) => <StrokeWriter key={focus + c + i} char={c} />)}</div>
      </div>
    </Card>
  )
}

function PhoneticsTab({ lesson }: { lesson: LessonT }) {
  const [i, setI] = useState(0)
  const sec = lesson.sections[i]
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {lesson.sections.map((s, k) => <button key={s.label} onClick={() => setI(k)} className={`rounded-full px-4 py-1 text-sm ${i === k ? 'bg-slate-800 text-white' : 'bg-surface shadow'}`}>{s.label}</button>)}
      </div>
      <Section key={i} sec={sec} />
    </div>
  )
}

function Section({ sec }: { sec: PhonSection }) {
  if (sec.kind === 'sounds') return <SoundList sec={sec} />
  if (sec.kind === 'chart') return <Card title={sec.title}>{sec.note && <p className="text-sm text-slate-500">{sec.note}</p>}<PinyinChart cols={sec.cols} rows={sec.rows} /></Card>
  if (sec.kind === 'tones') return <ToneSection />
  return (
    <Card title={sec.title}>
      <p>{sec.intro}</p>
      {sec.groups.map(g => (
        <div key={g.label}>
          <p className="mb-1 text-sm font-semibold text-slate-500">{g.label}</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {g.items.map(([h, p, m]) => (
              <button key={h} onClick={() => speak(h, 0.7)} className="tile rounded-lg border bg-surface p-2 text-center hover:bg-accent-soft">
                <div className="text-3xl font-bold">{h}</div><div className="text-accent-fg">{p}</div><div className="text-xs text-slate-500">{m}</div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </Card>
  )
}

function SoundList({ sec }: { sec: Extract<PhonSection, { kind: 'sounds' }> }) {
  const [cur, setCur] = useState(sec.list[0])
  const initialsSay: Record<string, string> = { b: 'bo', p: 'po', m: 'mo', f: 'fo', d: 'de', t: 'te', n: 'ne', l: 'le', g: 'ge', k: 'ke', h: 'he' }
  return (
    <Card title={sec.title}>
      <div className="flex flex-wrap gap-2">
        {sec.list.map(x => (
          <button key={x.s} onClick={() => { setCur(x); speakSyllable(x.say ?? initialsSay[x.s] ?? x.s) }}
            className={`h-14 min-w-14 rounded-lg border px-2 text-2xl font-bold ${cur.s === x.s ? 'bg-accent text-white' : 'bg-surface hover:bg-accent-soft'} ${x.aspirated ? 'ring-2 ring-gold' : ''}`}>{x.s}</button>
        ))}
      </div>
      <div className="rounded-lg bg-slate-50 p-3"><b className="text-2xl">{cur.s}</b><p className="mt-1">{cur.tip}</p></div>
      {sec.note && <p className="text-sm text-slate-500">{sec.note}</p>}
    </Card>
  )
}

function ToneSection() {
  return (
    <>
      <Card title="4 thanh điệu – bấm để nghe">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {tones.map(t => (
            <div key={t.n} className="tone-card space-y-1 rounded-lg border bg-surface p-3 text-center">
              <ToneShape path={t.path} />
              <div className="font-bold">{t.name} <span className="text-2xl text-accent-fg">{t.mark}</span></div>
              <div className="text-xs text-slate-500">{t.num} · {t.desc}</div>
              <button className="rounded bg-slate-100 px-2" onClick={() => speakSyllable('ma', t.n)}>🔊 m{t.mark}</button>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">Mẹo: tiếng Việt cũng có thanh điệu. Thanh 1 ≈ "ngang", thanh 2 ≈ "sắc", thanh 3 ≈ "hỏi", thanh 4 ≈ "huyền/nặng" (dứt hơn).</p>
      </Card>
      <Card title="Cùng âm tiết, khác thanh = khác nghĩa">
        {toneExamples.map(g => (
          <div key={g.syl} className="grid grid-cols-4 gap-2">
            {g.items.map(([h, p, m]) => (
              <button key={h} onClick={() => speak(h, 0.7)} className="tile rounded-lg border bg-surface p-2 text-center hover:bg-accent-soft">
                <div className="text-3xl font-bold">{h}</div><div className="text-accent-fg">{p}</div><div className="text-xs text-slate-500">{m}</div>
              </button>
            ))}
          </div>
        ))}
      </Card>
    </>
  )
}

function NotesTab({ lesson }: { lesson: LessonT }) {
  return (
    <div className="space-y-3">
      {lesson.notes.map((n, i) => (
        <Card key={n.title} title={`${i + 1}. ${n.title}`}>
          <p>{n.body}</p>
          {n.say && <button className="rounded border px-3 py-1" onClick={() => speak(n.say!, 0.6)}>🔊 {n.say}</button>}
        </Card>
      ))}
    </div>
  )
}

function DrillCard({ d }: { d: Drill }) {
  return (
    <Card title={d.title}>
      {d.hint && <p className="text-sm text-slate-500">{d.hint}</p>}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {d.items.map((it, i) => (
          <button key={i} onClick={() => it.h ? speak(it.h, 0.7) : it.syl && speakSyllable(it.syl)} className="tile rounded-lg border bg-surface p-2 text-center hover:bg-accent-soft">
            {it.h && <div className="text-2xl font-bold">{it.h}</div>}
            <div className="text-accent-fg">{it.p}</div>
            {it.m && <div className="text-xs text-slate-500">{it.m}</div>}
          </button>
        ))}
      </div>
    </Card>
  )
}

function LessonFooter({ book, lesson }: { book: number; lesson: LessonT }) {
  const key = lessonKey(book, lesson.id)
  const done = useProgress(s => s.done.includes(key))
  const toggle = useProgress(s => s.toggle)
  const stubs = getBook(book)?.lessons ?? []
  const prev = stubs.find(l => l.id === lesson.id - 1)
  const next = stubs.find(l => l.id === lesson.id + 1)
  const nextReady = next && getLesson(book, next.id)
  const prevReady = prev && getLesson(book, prev.id)
  return (
    <Card>
      <div className="flex items-center gap-4">
        <button onClick={() => toggle(key)} className={`flex-1 rounded-lg p-3 font-bold ${done ? 'bg-accent-soft2 text-accent-fg' : 'tile shadow bg-accent text-white'}`}>
          {done ? 'Đã học xong bài này (bấm để bỏ đánh dấu)' : 'Đánh dấu đã học xong bài này'}
        </button>
        {done && <Stamp key={String(done)} text="完" size="md" />}
      </div>
      <div className="flex justify-between gap-2 text-sm">
        {prevReady ? <Link to={`/books/${book}/lessons/${prev!.id}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">← Bài {prev!.id}: {prev!.hanzi}</Link> : <span />}
        {next && (nextReady
          ? <Link to={`/books/${book}/lessons/${next.id}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">Bài {next.id}: {next.hanzi} →</Link>
          : <span className="rounded border px-3 py-2 opacity-50">Bài {next.id}: {next.hanzi} (sắp có)</span>)}
      </div>
    </Card>
  )
}

function PracticeTab({ book, lesson }: { book: number; lesson: LessonT }) {
  const [open, setOpen] = useState<Record<string, boolean>>({})
  return (
    <div className="space-y-3">
      <Card title={`Trắc nghiệm Bài ${lesson.id}`}>
        <div className="grid gap-2 md:grid-cols-2">
          {availableModes(scopeFor([`${book}-${lesson.id}`])).map(k => (
            <Link key={k} to={`/practice?mode=${k}&lesson=${book}-${lesson.id}`} className="tile rounded-lg border bg-surface p-4 text-center font-semibold hover:bg-accent-soft">{MODE_INFO[k].title}</Link>
          ))}
        </div>
      </Card>
      {lesson.drills.map(d => <DrillCard key={d.title} d={d} />)}
      {lesson.qa?.map(g => (
        <Card key={g.title} title={g.title}>
          <ul className="space-y-2">
            {g.items.map(it => (
              <li key={it.q} className="rounded-lg border p-3">
                <div>{it.q}</div>
                <button className="mt-1 text-sm text-accent-fg underline" onClick={() => setOpen(o => ({ ...o, [it.q]: !o[it.q] }))}>{open[it.q] ? 'Ẩn gợi ý' : 'Xem gợi ý'}</button>
                {open[it.q] && <div className="mt-1 rounded bg-accent-soft p-2 text-sm">{it.hint}</div>}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

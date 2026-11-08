import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import GrammarQuiz from '../components/GrammarQuiz'
import Tabs from '../components/Tabs'
import { SpeakBtn } from '../components/Speak'
import { GRAMMAR, allExercises, getGrammar } from '../data/grammar'
import { speak } from '../lib/tts'

const KEY = 'grammar-best'
const load = (): Record<string, number> => { try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') } catch { return {} } }
const save = (id: string, pct: number) => { try { const b = load(); b[id] = Math.max(b[id] ?? 0, pct); localStorage.setItem(KEY, JSON.stringify(b)) } catch { /* ignore */ } }

export function GrammarList() {
  const [mixed, setMixed] = useState(false)
  const best = useMemo(load, [mixed])
  const all = useMemo(() => allExercises(), [])
  if (mixed) return <GrammarQuiz items={all.slice().sort(() => Math.random() - 0.5).slice(0, 20)} onDone={(s, t) => save('all', Math.round((s / t) * 100))} onExit={() => setMixed(false)} />
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Ngữ pháp HSK 1</h1>
        <p className="mt-1 max-w-xl text-slate-500">Học từng chủ đề, rồi làm bài tập có chấm điểm ngay. Nội dung theo tài liệu "Ngữ pháp HSK 1".</p>
      </div>
      <button onClick={() => setMixed(true)} className="tile shadow flex w-full items-center justify-between rounded-lg bg-accent p-4 text-left text-white">
        <span><b className="block text-lg">Ôn tổng hợp</b><span className="text-sm text-white/80">20 câu trộn từ mọi chủ đề{best.all ? ` · điểm cao nhất ${best.all}%` : ''}</span></span>
        <span className="hz text-4xl font-black">练</span>
      </button>
      <ul className="grid gap-4 sm:grid-cols-2">
        {GRAMMAR.map(t => (
          <li key={t.id}>
            <Link to={`/grammar/${t.id}`} className="tile group flex items-center gap-4 rounded-lg border bg-surface p-4 shadow">
              <span aria-hidden className="hz grid size-14 shrink-0 place-items-center rounded-md border-2 border-accent text-3xl font-black text-accent-fg transition-colors group-hover:bg-accent group-hover:text-white">{t.glyph}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold">{t.no}. {t.title}</span>
                <span className="block text-sm text-slate-500">{t.summary}</span>
                <span className="mt-1 block text-xs text-slate-500">{t.exercises.length} câu bài tập{best[t.id] !== undefined ? ` · cao nhất ${best[t.id]}%` : ''}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TABS = [['learn', 'Học'], ['practice', 'Bài tập']] as const

export function GrammarTopicPage() {
  const { id } = useParams()
  const topic = getGrammar(id ?? '')
  const [tab, setTab] = useState<(typeof TABS)[number][0]>('learn')
  const [quiz, setQuiz] = useState(false)
  if (!topic) return <p>Không có chủ đề này. <Link className="text-accent-fg underline" to="/grammar">Về danh sách</Link></p>
  const idx = GRAMMAR.findIndex(t => t.id === topic.id)
  const prev = GRAMMAR[idx - 1]
  const next = GRAMMAR[idx + 1]

  if (quiz) return <GrammarQuiz items={topic.exercises} onDone={(s, t) => save(topic.id, Math.round((s / t) * 100))} onExit={() => setQuiz(false)} />

  return (
    <div className="space-y-4" key={topic.id}>
      <div>
        <Link to="/grammar" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← Ngữ pháp</Link>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{topic.no}. {topic.title}</h1>
        <p className="text-slate-500">{topic.summary}</p>
      </div>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />

      {tab === 'learn' && (
        <div className="page-in space-y-8 pt-1">
          {topic.points.map(p => (
            <section key={p.title} className="space-y-3">
              <h2 className="rule pt-3 text-xl font-extrabold">{p.title}</h2>
              <p className="max-w-2xl">{p.body}</p>
              {p.table && (
                <div className="overflow-x-auto rounded-lg border bg-surface">
                  <table className="w-full text-left text-sm">
                    <thead><tr className="bg-accent-soft">{p.table.head.map(h => <th key={h} className="px-3 py-2 font-bold">{h}</th>)}</tr></thead>
                    <tbody>{p.table.rows.map((r, i) => (
                      <tr key={i} className="border-t">
                        {r.map((c, k) => {
                          const say = p.table!.head[2] === 'Ví dụ' && k === 2
                          return <td key={k} className={`px-3 py-2 ${say ? 'hz cursor-pointer text-base font-bold' : ''}`} onClick={say ? () => speak(c) : undefined}>{c}</td>
                        })}
                      </tr>
                    ))}</tbody>
                  </table>
                </div>
              )}
              {p.examples && (
                <ul className="space-y-2">
                  {p.examples.map(e => (
                    <li key={e.h} className="tile flex cursor-pointer items-center gap-3 rounded-lg border bg-surface p-3" onClick={() => speak(e.h)}>
                      <div className="min-w-0 flex-1">
                        <div className="hz text-2xl font-bold">{e.h}</div>
                        <div className="py text-sm font-semibold text-accent-fg">{e.p}</div>
                        <div className="text-sm text-slate-500">{e.vi}</div>
                      </div>
                      <SpeakBtn text={e.h} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <button onClick={() => setTab('practice')} className="tile shadow w-full rounded-lg bg-accent p-3 font-bold text-white">Làm bài tập chủ đề này</button>
        </div>
      )}

      {tab === 'practice' && (
        <div className="page-in space-y-4 pt-1">
          <p className="max-w-xl text-slate-500">{topic.exercises.length} câu gồm chọn đáp án và sắp xếp câu. Chọn xong biết đúng sai ngay và có giải thích.</p>
          <button onClick={() => setQuiz(true)} className="tile shadow w-full rounded-lg bg-accent p-4 text-lg font-bold text-white">Bắt đầu làm bài</button>
        </div>
      )}

      <div className="flex justify-between pt-2 text-sm">
        {prev ? <Link to={`/grammar/${prev.id}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">← {prev.title}</Link> : <span />}
        {next ? <Link to={`/grammar/${next.id}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">{next.title} →</Link> : <span />}
      </div>
    </div>
  )
}

/** Trắc nghiệm Từ vựng và Chữ Hán: chấm ngay từng câu. */
import { useMemo, useState } from 'react'
import Choices from '../../components/Choices'
import ScopePicker from '../../components/ScopePicker'
import { Header, PlayBar, Row, Summary } from '../../components/ExerciseKit'
import { primary, secondary } from '../../lib/exerciseStyles'
import { QUIZ_LABEL, mixedQuiz, quizOf, scopeOf, type QuizKind, type QuizQ } from '../../lib/exercises'
import { speak } from '../../lib/tts'

export default function Quiz({ title, desc, kinds }: { title: string; desc: string; kinds: QuizKind[] }) {
  const [scope, setScope] = useState('')
  const [kind, setKind] = useState<QuizKind | 'mixed'>('mixed')
  const [qs, setQs] = useState<QuizQ[] | null>(null)
  const [run, setRun] = useState(0)
  const counts = useMemo(() => { const s = scopeOf(scope); return Object.fromEntries(kinds.map(k => [k, quizOf(k, s).length])) as Record<QuizKind, number> }, [scope, kinds])
  const active = kinds.filter(k => counts[k] > 0)
  const chosen = kind !== 'mixed' && !counts[kind] ? 'mixed' : kind
  const start = (list: QuizQ[]) => { setQs(list); setRun(r => r + 1) }
  const fresh = () => start(mixedQuiz(chosen === 'mixed' ? active : [chosen], scopeOf(scope), 10))

  if (qs) return <Play key={run} qs={qs} onExit={() => setQs(null)} onNew={fresh} onRetry={start} />
  return (
    <div className="space-y-5">
      <Header title={title} desc={desc} />
      <ScopePicker scope={scope} onChange={setScope} />
      <Row label="Dạng bài" value={chosen} onChange={setKind} disabled={v => v !== 'mixed' && !counts[v]}
        options={[['mixed', 'Hỗn hợp'] as const, ...kinds.map(k => [k, `${QUIZ_LABEL[k]} (${counts[k]})`] as const)]} />
      <button className={primary + ' w-full text-lg'} disabled={!active.length} onClick={fresh}>Bắt đầu</button>
      {!active.length && <p className="text-sm text-seal">Phạm vi này chưa đủ từ để ra đề. Chọn phạm vi rộng hơn.</p>}
    </div>
  )
}

function Play({ qs, onExit, onNew, onRetry }: { qs: QuizQ[]; onExit: () => void; onNew: () => void; onRetry: (list: QuizQ[]) => void }) {
  const [i, setI] = useState(0)
  const [picks, setPicks] = useState<string[]>([])
  const q = qs[i]
  const score = picks.filter((p, k) => p === qs[k].answer).length

  if (!q) {
    const wrong = qs.filter((x, k) => picks[k] !== x.answer)
    return (
      <Summary title={`${score}/${qs.length} câu đúng`} ratio={score / qs.length} wrong={wrong.map(x => x.vocab)}
        rows={qs.map((x, k) => ({ vocab: x.vocab, main: `${x.vocab.hanzi} ${x.vocab.pinyin}`, sub: x.vocab.meaning, say: x.vocab.hanzi, bad: picks[k] !== x.answer, note: picks[k] !== x.answer ? `Bạn chọn: ${picks[k]} · Đáp án: ${x.answer}` : undefined }))}>
        <button className={primary} onClick={onNew}>Đề mới</button>
        {wrong.length > 0 && <button className={secondary} onClick={() => onRetry(wrong)}>Làm lại câu sai</button>}
        <button className={secondary} onClick={onExit}>Chọn bài khác</button>
      </Summary>
    )
  }

  const picked: string | undefined = picks[i]
  const answered = picked !== undefined
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      <PlayBar status={`Câu ${i + 1}/${qs.length} · ${QUIZ_LABEL[q.kind]} · Điểm ${score}`} onExit={onExit} />
      <div>
        <p className={`hz font-bold ${[...q.prompt].length <= 4 ? 'text-6xl' : 'text-2xl'}`}>{q.prompt}</p>
        {q.sub && <p className="mt-1 text-slate-500">{q.sub}</p>}
      </div>
      <Choices key={i} options={q.options} picked={picked ?? null} answer={q.answer} onPick={v => { if (!answered) setPicks([...picks, v]) }} />
      {answered && (
        <div className="space-y-2">
          <p className={picked === q.answer ? 'font-bold text-accent-fg' : 'font-bold text-seal'}>{picked === q.answer ? 'Chính xác.' : `Đáp án: ${q.answer}`}</p>
          <button className="w-full rounded-lg border-l-4 border-accent bg-accent-soft p-2 text-left text-sm" onClick={() => speak(q.say)}>🔊 {q.explain}</button>
          <button key={i} autoFocus className={primary + ' w-full'} onClick={() => setI(i + 1)}>{i + 1 === qs.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
    </div>
  )
}

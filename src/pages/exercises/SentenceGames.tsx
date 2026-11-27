/** Sắp xếp câu và Điền từ: dùng câu ví dụ trong bài học. */
import { useMemo, useState, type ReactNode } from 'react'
import ScopePicker from '../../components/ScopePicker'
import OrderInput from '../../components/OrderInput'
import Choices from '../../components/Choices'
import { Header, PlayBar, Row, Summary } from '../../components/ExerciseKit'
import { primary, secondary } from '../../lib/exerciseStyles'
import { clozeItems, scopeOf, sortItems, type Cloze, type SortItem } from '../../lib/exercises'
import { shuffle, type Scope } from '../../lib/questions'
import { speak } from '../../lib/tts'

function Setup<T>({ title, desc, counts, make, play }: { title: string; desc: string; counts: number[]; make: (s: Scope) => T[]; play: (items: T[], onNew: () => void, onExit: () => void) => ReactNode }) {
  const [scope, setScope] = useState('')
  const [count, setCount] = useState(counts[0])
  const [items, setItems] = useState<T[] | null>(null)
  const [run, setRun] = useState(0)
  const available = useMemo(() => make(scopeOf(scope)).length, [scope, make])
  const start = () => { setItems(make(scopeOf(scope)).slice(0, count)); setRun(r => r + 1) }
  if (items) return <div key={run}>{play(items, start, () => setItems(null))}</div>
  return (
    <div className="space-y-5">
      <Header title={title} desc={desc} />
      <ScopePicker scope={scope} onChange={setScope} />
      <Row label="Số câu" value={count} onChange={setCount} options={counts.map(n => [n, String(n)] as const)} />
      <button className={primary + ' w-full text-lg'} disabled={!available} onClick={start}>Bắt đầu</button>
      <p className="text-sm text-slate-500">Phạm vi này ra được {available} câu.</p>
    </div>
  )
}

function SortPlay({ items, onNew, onExit }: { items: SortItem[]; onNew: () => void; onExit: () => void }) {
  const qs = useMemo(() => items.map(it => {
    let tokens = shuffle(it.parts)
    for (let t = 0; t < 10 && tokens.join('') === it.parts.join(''); t++) tokens = shuffle(it.parts)
    return { ...it, tokens }
  }), [items])
  const [i, setI] = useState(0)
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [marks, setMarks] = useState<boolean[]>([])
  const q = qs[i]
  const score = marks.filter(Boolean).length

  if (!q) {
    return (
      <Summary title={`${score}/${qs.length} câu đúng`} ratio={score / qs.length} wrong={qs.filter((_, k) => !marks[k]).flatMap(x => x.vocab)}
        rows={qs.map((x, k) => ({ main: x.text, sub: `${x.pinyin} · ${x.vi}`, say: x.text, bad: !marks[k] }))}>
        <button className={primary} onClick={onNew}>Đề mới</button>
        <button className={secondary} onClick={onExit}>Đổi cấu hình</button>
      </Summary>
    )
  }
  const picked = value ? value.split('|').map(Number) : []
  const correct = picked.map(k => q.tokens[k]).join('') === q.parts.join('')
  const check = () => { setChecked(true); setMarks([...marks, correct]); if (correct) speak(q.text) }
  // Gợi ý: đặt sẵn cụm đầu tiên
  const hint = () => setValue(String(q.tokens.indexOf(q.parts[0])))
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      <PlayBar status={`Câu ${i + 1}/${qs.length} · Điểm ${score}`} onExit={onExit} />
      <p className="text-lg font-semibold">{q.vi}</p>
      <OrderInput tokens={q.tokens} value={value} onChange={setValue} disabled={checked} />
      {!checked ? (
        <div className="flex flex-wrap gap-2">
          <button className={secondary} onClick={hint}>Gợi ý</button>
          <button className={secondary} onClick={() => setValue('')}>Làm lại câu này</button>
          <button className={primary + ' flex-1'} disabled={picked.length !== q.tokens.length} onClick={check}>Kiểm tra</button>
        </div>
      ) : (
        <div className="space-y-2">
          <p className={correct ? 'font-bold text-accent-fg' : 'font-bold text-seal'}>{correct ? 'Chính xác.' : `Đáp án: ${q.text}`}</p>
          <button className="text-sm text-slate-500" onClick={() => speak(q.text)}>🔊 {q.pinyin}</button>
          <button autoFocus className={primary + ' w-full'} onClick={() => { setI(i + 1); setValue(''); setChecked(false) }}>{i + 1 === qs.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
    </div>
  )
}

function ClozePlay({ items, onNew, onExit }: { items: Cloze[]; onNew: () => void; onExit: () => void }) {
  const [i, setI] = useState(0)
  const [picks, setPicks] = useState<string[]>([])
  const q = items[i]
  const score = picks.filter((p, k) => p === items[k].vocab.hanzi).length

  if (!q) {
    return (
      <Summary title={`${score}/${items.length} câu đúng`} ratio={score / items.length} wrong={items.filter((x, k) => picks[k] !== x.vocab.hanzi).map(x => x.vocab)}
        rows={items.map((x, k) => ({ vocab: x.vocab, main: x.sentence.text, sub: `${x.vocab.hanzi} (${x.vocab.pinyin}): ${x.vocab.meaning} · ${x.sentence.vi}`, say: x.sentence.text, bad: picks[k] !== x.vocab.hanzi, note: picks[k] !== x.vocab.hanzi ? `Bạn chọn: ${picks[k]}` : undefined }))}>
        <button className={primary} onClick={onNew}>Đề mới</button>
        <button className={secondary} onClick={onExit}>Đổi cấu hình</button>
      </Summary>
    )
  }
  const picked: string | undefined = picks[i]
  const answered = picked !== undefined
  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      <PlayBar status={`Câu ${i + 1}/${items.length} · Điểm ${score}`} onExit={onExit} />
      <div>
        <p className="hz text-3xl font-bold">{answered ? q.sentence.text : q.blanked}</p>
        <p className="mt-1 text-slate-500">{q.sentence.vi}</p>
      </div>
      <Choices key={i} options={q.options} picked={picked ?? null} answer={q.vocab.hanzi} onPick={v => { if (!answered) { setPicks([...picks, v]); if (v === q.vocab.hanzi) speak(q.sentence.text) } }} />
      {answered && (
        <div className="space-y-2">
          <button className="text-sm text-slate-500" onClick={() => speak(q.sentence.text)}>🔊 {q.sentence.pinyin}</button>
          <p className="text-sm">{q.vocab.hanzi} ({q.vocab.pinyin}): {q.vocab.meaning}</p>
          <button key={i} autoFocus className={primary + ' w-full'} onClick={() => setI(i + 1)}>{i + 1 === items.length ? 'Xem kết quả' : 'Câu tiếp →'}</button>
        </div>
      )}
    </div>
  )
}

export const SortGame = () => <Setup title="Sắp xếp câu" desc="Đọc nghĩa tiếng Việt rồi ghép các cụm tiếng Trung theo đúng thứ tự." counts={[5, 8, 10]} make={sortItems} play={(items, onNew, onExit) => <SortPlay items={items} onNew={onNew} onExit={onExit} />} />

export const ClozeGame = () => <Setup title="Điền từ" desc="Câu ví dụ bị che một từ, chọn 1 trong 4 từ." counts={[5, 10, 15]} make={clozeItems} play={(items, onNew, onExit) => <ClozePlay items={items} onNew={onNew} onExit={onExit} />} />

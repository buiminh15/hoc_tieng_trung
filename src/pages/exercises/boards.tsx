/** Phần chơi của bốn trò dùng cặp. */
import { useEffect, useMemo, useRef, useState } from 'react'
import type { BoardProps } from './PairGame'
import { primary } from '../../lib/exerciseStyles'
import { shuffle } from '../../lib/questions'

const cell = 'min-h-16 w-full rounded-lg border p-3 font-bold transition-colors'
const addMiss = (m: Record<string, number>, k: string) => ({ ...m, [k]: (m[k] ?? 0) + 1 })

/** Hẹn giờ tự huỷ khi rời màn chơi. */
function useLater() {
  const ids = useRef<number[]>([])
  useEffect(() => () => ids.current.forEach(clearTimeout), [])
  return (fn: () => void, ms: number) => { ids.current.push(window.setTimeout(fn, ms)) }
}

export function PairsBoard({ pairs, say, setStatus, onDone }: BoardProps) {
  const rights = useMemo(() => shuffle(pairs), [pairs])
  const [sel, setSel] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [bad, setBad] = useState<string | null>(null)
  const [taps, setTaps] = useState(0)
  const [misses, setMisses] = useState<Record<string, number>>({})
  const later = useLater()
  useEffect(() => setStatus(`Đã nối ${done.length}/${pairs.length} · Lượt chạm ${taps}`), [done, taps, pairs.length, setStatus])

  function pickRight(left: string) {
    if (!sel) return
    const t = taps + 1
    setTaps(t)
    if (left === sel) {
      const d = [...done, left]
      setDone(d)
      setSel(null)
      if (d.length === pairs.length) later(() => onDone({ title: `Nối xong ${pairs.length} cặp sau ${t} lượt chạm`, ratio: pairs.length / t, misses }), 500)
    } else {
      setMisses(m => addMiss(m, sel))
      setBad(left)
      later(() => setBad(null), 400)
    }
  }
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-2">
        {pairs.map(p => (
          <button key={p.left} disabled={done.includes(p.left)} aria-pressed={sel === p.left} onClick={() => { setSel(p.left); say(p.left) }}
            className={`${cell} hz text-2xl ${done.includes(p.left) ? 'bg-accent-soft2 opacity-40' : sel === p.left ? 'border-accent bg-accent-soft2' : 'bg-surface hover:bg-accent-soft'}`}>{p.left}</button>
        ))}
      </div>
      <div className="space-y-2">
        {rights.map(p => (
          <button key={p.left} disabled={done.includes(p.left)} onClick={() => pickRight(p.left)}
            className={`${cell} ${done.includes(p.left) ? 'bg-accent-soft2 opacity-40' : bad === p.left ? 'shake border-seal bg-rose-100' : 'bg-surface hover:bg-accent-soft'}`}>{p.right}</button>
        ))}
      </div>
    </div>
  )
}

export function TfBoard({ pairs, timed, say, setStatus, onDone }: BoardProps) {
  // khoảng một nửa số câu hiện đáp án của từ khác
  const qs = useMemo(() => shuffle(pairs).map(p => {
    const other = shuffle(pairs.filter(x => x !== p))[0]
    const ok = !other || Math.random() < 0.5
    return { p, shown: ok ? p.right : other.right, ok }
  }), [pairs])
  const [i, setI] = useState(0)
  const [verdict, setVerdict] = useState<boolean | null>(null)
  const st = useRef({ score: 0, streak: 0, best: 0, misses: {} as Record<string, number> })
  const locked = useRef(false)
  const later = useLater()
  const q = qs[i]

  function answer(a: boolean | null) {
    if (locked.current) return
    locked.current = true
    const right = a === q.ok
    const s = st.current
    if (right) { s.score++; s.streak++; s.best = Math.max(s.best, s.streak) } else { s.streak = 0; s.misses = addMiss(s.misses, q.p.left) }
    setVerdict(right)
    later(() => {
      if (i + 1 === qs.length) return onDone({ title: `${s.score}/${qs.length} câu đúng · chuỗi dài nhất ${s.best}`, ratio: s.score / qs.length, misses: s.misses })
      locked.current = false
      setVerdict(null)
      setI(i + 1)
    }, right ? 700 : 1600)
  }
  const answerRef = useRef(answer)
  answerRef.current = answer

  useEffect(() => { say(q.p.left) }, [q, say])
  useEffect(() => setStatus(`Câu ${i + 1}/${qs.length} · Đúng ${st.current.score} · Chuỗi ${st.current.streak}`), [i, verdict, qs.length, setStatus])
  useEffect(() => {
    if (!timed || verdict !== null) return
    const t = setTimeout(() => answerRef.current(null), 3000)
    return () => clearTimeout(t)
  }, [i, timed, verdict])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') answerRef.current(true)
      if (e.key === 'ArrowRight') answerRef.current(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-surface p-6 text-center shadow">
      {timed && <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">{verdict === null && <div key={i} className="h-full bg-gold" style={{ animation: 'countdown 3s linear forwards' }} />}</div>}
      <p className="hz text-6xl font-bold">{q.p.left}</p>
      <p className="text-xl font-semibold">{q.shown}</p>
      <p role="status" className={`min-h-6 font-bold ${verdict ? 'text-accent-fg' : 'text-seal'}`}>{verdict === null ? '' : verdict ? 'Chính xác.' : `Chưa đúng: ${q.p.left} ↔ ${q.p.right}`}</p>
      <div className="grid grid-cols-2 gap-3">
        <button disabled={verdict !== null} className={primary + ' py-4 text-lg'} onClick={() => answer(true)}>✓ Đúng</button>
        <button disabled={verdict !== null} className="tile shadow rounded-lg bg-slate-800 py-4 text-lg font-bold text-white disabled:opacity-40" onClick={() => answer(false)}>✗ Sai</button>
      </div>
      <p className="text-xs text-slate-500">Phím ← là Đúng, → là Sai</p>
    </div>
  )
}

const START_LEN = 3

export function SequenceBoard({ pairs, say, setStatus, onDone }: BoardProps) {
  const [len, setLen] = useState(Math.min(START_LEN, pairs.length))
  const [showing, setShowing] = useState(0)
  const [input, setInput] = useState<string[]>([])
  const [failed, setFailed] = useState<string | null>(null)
  const [options, setOptions] = useState(() => shuffle(pairs.slice(0, len)))
  const later = useLater()
  const seq = pairs.slice(0, len)
  // chuỗi dài nhất đã nhớ được: vòng hiện tại nếu đã chạm đủ, nếu không là vòng trước
  const best = input.length === len ? len : len > START_LEN ? len - 1 : 0

  useEffect(() => {
    if (showing >= len) return
    say(pairs[showing].left)
    const t = setTimeout(() => setShowing(showing + 1), 1500)
    return () => clearTimeout(t)
  }, [showing, len, pairs, say])
  useEffect(() => setStatus(`Chuỗi ${len} từ · Dài nhất ${best}`), [len, best, setStatus])

  const finish = (misses: Record<string, number>) => onDone({ title: `Chuỗi dài nhất nhớ được: ${best} từ`, ratio: best / pairs.length, misses })

  function tap(left: string) {
    if (failed !== null || input.length >= len) return
    if (left !== seq[input.length].left) return setFailed(left)
    const next = [...input, left]
    setInput(next)
    if (next.length < len) return
    later(() => {
      if (len === pairs.length) return onDone({ title: `Chuỗi dài nhất nhớ được: ${len} từ`, ratio: 1, misses: {} })
      setLen(len + 1)
      setShowing(0)
      setInput([])
      setOptions(shuffle(pairs.slice(0, len + 1)))
    }, 700)
  }

  if (failed !== null) {
    return (
      <div className="mx-auto max-w-md space-y-3 rounded-xl bg-surface p-6 text-center shadow">
        <p className="font-bold text-seal">Sai ở vị trí {input.length + 1}: bạn chọn {failed}</p>
        <ol className="space-y-1">{seq.map((p, k) => <li key={p.left} className={k === input.length ? 'font-bold text-seal' : ''}>{k + 1}. <span className="hz text-xl">{p.left}</span> · {p.right}</li>)}</ol>
        <button autoFocus className={primary + ' w-full'} onClick={() => finish({ [seq[input.length].left]: 1 })}>Xem kết quả</button>
      </div>
    )
  }
  if (showing < len) {
    return (
      <div key={showing} className="page-in mx-auto max-w-md space-y-3 rounded-xl bg-surface p-10 text-center shadow">
        <p className="text-sm text-slate-500">Ghi nhớ thứ tự · {showing + 1}/{len}</p>
        <p className="hz text-6xl font-bold">{pairs[showing].left}</p>
        <p className="text-xl">{pairs[showing].right}</p>
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <p className="text-center font-semibold">Chạm các từ theo đúng thứ tự ({input.length}/{len})</p>
      <div className="grid grid-cols-3 gap-2">
        {options.map(p => {
          const at = input.indexOf(p.left)
          return <button key={p.left} disabled={at >= 0} onClick={() => tap(p.left)} className={`${cell} hz text-2xl ${at >= 0 ? 'bg-accent-soft2' : 'bg-surface hover:bg-accent-soft'}`}>{at >= 0 && <span className="mr-1 text-sm text-slate-500">{at + 1}.</span>}{p.left}</button>
        })}
      </div>
    </div>
  )
}

export function MatchBoard({ pairs, say, setStatus, onDone }: BoardProps) {
  const cards = useMemo(() => shuffle(pairs.flatMap(p => [{ id: p.left + '|L', key: p.left, text: p.left, han: true }, { id: p.left + '|R', key: p.left, text: p.right, han: false }])), [pairs])
  const [open, setOpen] = useState<string[]>([])
  const [matched, setMatched] = useState<string[]>([])
  const [turns, setTurns] = useState(0)
  const [misses, setMisses] = useState<Record<string, number>>({})
  const later = useLater()
  const recordKey = `match-best-${pairs.length}`
  const [record] = useState(() => { try { return Number(localStorage.getItem(recordKey)) || 0 } catch { return 0 } })
  useEffect(() => setStatus(`Lượt lật ${turns}${record ? ` · Kỷ lục ${record}` : ''}`), [turns, record, setStatus])

  function flip(c: (typeof cards)[number]) {
    if (open.length === 2 || open.includes(c.id) || matched.includes(c.key)) return
    if (c.han) say(c.text)
    const now = [...open, c.id]
    setOpen(now)
    if (now.length < 2) return
    const t = turns + 1
    setTurns(t)
    const first = cards.find(x => x.id === now[0])!
    if (first.key === c.key) {
      const m = [...matched, c.key]
      setMatched(m)
      setOpen([])
      if (m.length === pairs.length) {
        const isRecord = !record || t < record
        if (isRecord) try { localStorage.setItem(recordKey, String(t)) } catch { /* ignore */ }
        later(() => onDone({ title: `Hoàn thành sau ${t} lượt lật · ${isRecord ? 'kỷ lục mới!' : `kỷ lục ${record}`}`, ratio: pairs.length / t, misses }), 600)
      }
    } else {
      setMisses(prev => addMiss(addMiss(prev, first.key), c.key))
      later(() => setOpen([]), 1000)
    }
  }
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
      {cards.map(c => {
        const up = open.includes(c.id) || matched.includes(c.key)
        return (
          <button key={c.id} aria-label={up ? c.text : 'Thẻ úp'} onClick={() => flip(c)}
            className={`min-h-24 rounded-lg border p-2 font-bold ${up ? `pop ${matched.includes(c.key) ? 'bg-accent-soft2' : 'border-accent bg-surface'} ${c.han ? 'hz text-2xl' : 'text-sm'}` : 'hz bg-accent text-3xl text-white'}`}>{up ? c.text : '学'}</button>
        )
      })}
    </div>
  )
}

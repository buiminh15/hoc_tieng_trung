/** Khung chung cho Nối cặp, Đúng/Sai, Nhớ chuỗi, Lật thẻ: thiết lập → chơi → kết quả. */
import { useCallback, useMemo, useRef, useState, type ComponentType } from 'react'
import ScopePicker from '../../components/ScopePicker'
import { Header, PlayBar, Row, Summary } from '../../components/ExerciseKit'
import { primary, secondary } from '../../lib/exerciseStyles'
import { PAIR_KINDS, pairsOf, scopeOf, type Pair, type PairKind, type Source } from '../../lib/exercises'
import { shuffle } from '../../lib/questions'
import { speak } from '../../lib/tts'

const SOUND_KEY = 'exercise-sound'
const loadSound = () => { try { return localStorage.getItem(SOUND_KEY) !== '0' } catch { return true } }

export interface GameResultData { title: string; ratio: number; /** vế trái -> số lần nhầm */ misses: Record<string, number> }
export interface BoardProps {
  pairs: Pair[]
  timed: boolean
  say: (t: string) => void
  setStatus: (s: string) => void
  onDone: (r: GameResultData) => void
}

interface Props {
  title: string
  desc: string
  countLabel: string
  counts: number[]
  /** Có tuỳ chọn giới hạn 3 giây mỗi câu */
  timer?: boolean
  Board: ComponentType<BoardProps>
}

export default function PairGame({ title, desc, countLabel, counts, timer, Board }: Props) {
  const [source, setSource] = useState<Source>('vocab')
  const [kind, setKind] = useState<PairKind>('meaning')
  const [scope, setScope] = useState('')
  const [count, setCount] = useState(counts[0])
  const [timed, setTimed] = useState(false)
  const [sound, setSound] = useState(loadSound)
  const soundRef = useRef(sound)
  soundRef.current = sound
  const say = useCallback((t: string) => { if (soundRef.current) speak(t) }, [])
  const [deck, setDeck] = useState<Pair[] | null>(null)
  const [run, setRun] = useState(0)
  const [status, setStatus] = useState('')
  const [result, setResult] = useState<GameResultData | null>(null)
  const available = useMemo(() => pairsOf(source, kind, scopeOf(scope)).length, [source, kind, scope])
  const enough = available >= 4

  const play = (list: Pair[]) => { setDeck(list); setResult(null); setStatus(''); setRun(r => r + 1) }
  const fresh = () => play(pairsOf(source, kind, scopeOf(scope)).slice(0, count))
  const toggleSound = () => { setSound(!sound); try { localStorage.setItem(SOUND_KEY, sound ? '0' : '1') } catch { /* ignore */ } }
  const soundBtn = <button aria-pressed={sound} className="text-sm font-semibold text-slate-500 hover:text-slate-900" onClick={toggleSound}>{sound ? '🔊 Đọc to: bật' : '🔇 Đọc to: tắt'}</button>

  if (deck && result) {
    const wrong = deck.filter(p => result.misses[p.left])
    return (
      <Summary title={result.title} ratio={result.ratio} wrong={wrong.map(p => p.vocab)}
        rows={deck.map(p => ({ vocab: p.vocab, main: `${p.left} ↔ ${p.right}`, sub: `${p.vocab.pinyin} · ${p.vocab.meaning}`, say: p.left, bad: !!result.misses[p.left], note: result.misses[p.left] ? `Nhầm ${result.misses[p.left]} lần` : undefined }))}>
        <button className={primary} onClick={() => play(shuffle(deck))}>Chơi lại</button>
        <button className={secondary} onClick={fresh}>Chơi mới</button>
        <button className={secondary} onClick={() => setDeck(null)}>Đổi cấu hình</button>
      </Summary>
    )
  }
  if (deck) {
    return (
      <div className="space-y-4">
        <PlayBar status={status} onExit={() => setDeck(null)} />
        <div className="text-right">{soundBtn}</div>
        <Board key={run} pairs={deck} timed={timed} say={say} setStatus={setStatus} onDone={setResult} />
      </div>
    )
  }
  return (
    <div className="space-y-5">
      <Header title={title} desc={desc} />
      <Row label="Nguồn" value={source} onChange={v => { setSource(v); setKind(v === 'vocab' ? 'meaning' : 'hanviet') }} options={[['vocab', 'Từ vựng'], ['hanzi', 'Chữ Hán đơn']]} />
      <Row label="Kiểu cặp" value={kind} onChange={setKind} options={PAIR_KINDS[source]} />
      <ScopePicker scope={scope} onChange={setScope} />
      <Row label={countLabel} value={count} onChange={setCount} options={counts.map(n => [n, String(n)] as const)} />
      {timer && <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} /> Giới hạn 3 giây mỗi câu</label>}
      <div>{soundBtn}</div>
      <button className={primary + ' w-full text-lg'} disabled={!enough} onClick={fresh}>Bắt đầu</button>
      {!enough && <p className="text-sm text-seal">Phạm vi này chỉ có {available} cặp, cần ít nhất 4.</p>}
      {enough && available < count && <p className="text-sm text-slate-500">Phạm vi này chỉ có {available} cặp, ván sẽ dùng {available}.</p>}
    </div>
  )
}

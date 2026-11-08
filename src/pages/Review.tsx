import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { Grade } from 'ts-fsrs'
import { supabase, type Word } from '../lib/supabase'
import { Rating, review } from '../lib/srs'
import { speak } from '../lib/tts'
import StrokeWriter from '../components/StrokeWriter'
import AddLessonWords from '../components/AddLessonWords'
import { StuckTopics } from '../components/SelfExplain'

interface Due { word_id: string; fsrs: Record<string, unknown>; words: Word }

const GRADES: { r: Grade; label: string; key: string; cls: string }[] = [
  { r: Rating.Again, label: 'Quên', key: '1', cls: 'bg-seal text-white' },
  { r: Rating.Hard, label: 'Khó', key: '2', cls: 'bg-gold text-[#12202a]' },
  { r: Rating.Good, label: 'Tốt', key: '3', cls: 'bg-accent text-white' },
  { r: Rating.Easy, label: 'Dễ', key: '4', cls: 'bg-slate-800 text-white' },
]

export default function Review() {
  const qc = useQueryClient()
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)
  const { data: due = [], isLoading, error: loadErr } = useQuery({
    queryKey: ['due'],
    queryFn: async () => {
      const { data, error } = await supabase.from('cards').select('word_id, fsrs, words(*)')
        .lte('due', new Date().toISOString()).order('due').limit(50)
      if (error) throw error
      return data as unknown as Due[]
    },
  })
  const cur = due[0]
  useEffect(() => { setTotal(t => Math.max(t, due.length)) }, [due.length])

  async function rate(r: Grade) {
    if (!cur) return
    await review(cur.word_id, cur.fsrs, r)
    setShow(false)
    qc.invalidateQueries({ queryKey: ['due'] })
  }

  // Phím tắt: Space lật thẻ, 1-4 chấm mức nhớ
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!cur || e.metaKey || e.ctrlKey) return
      if (e.key === ' ' && !show) { e.preventDefault(); setShow(true) }
      const g = GRADES.find(x => x.key === e.key)
      if (g && show) rate(g.r)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (isLoading) return <p className="text-slate-500">Đang tải…</p>
  if (loadErr) return <p className="rounded-lg border-l-4 border-gold bg-amber-50 p-4">Không tải được dữ liệu: {(loadErr as Error).message}. Hãy thử đăng nhập lại.</p>
  if (!cur) return (
    <div>
    <div className="mx-auto max-w-md space-y-3 py-10 text-center">
      <h1 className="hz text-6xl font-black text-slate-400">空</h1>
      <p className="text-xl font-bold">Chưa có thẻ nào cần ôn.</p>
      <p className="text-slate-500">Trang này ôn lại từ vựng theo lịch ghi nhớ (FSRS). Thêm từ trước, từ mới thêm sẽ có thẻ ôn ngay.</p>
      <div className="flex justify-center"><AddLessonWords /></div>
    </div>
    <StuckTopics />
    </div>
  )
  const w = cur.words
  const done = Math.max(total - due.length, 0)

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="space-y-1.5">
        <div className="flex justify-between text-sm text-slate-500"><span>Ôn tập</span><span>Còn {due.length} thẻ</span></div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${total ? (done / total) * 100 : 0}%` }} /></div>
      </div>

      <div className="flip">
        <div className={`flip-inner ${show ? 'is-back' : ''}`}>
          <button type="button" onClick={() => setShow(true)} aria-hidden={show} tabIndex={show ? -1 : 0}
            className="flip-face shadow flex min-h-[24rem] flex-col items-center justify-center gap-5 rounded-lg bg-surface p-8 text-center">
            <span className="hz text-8xl font-black leading-none">{w.hanzi}</span>
            <span className="text-sm text-slate-500">Nhớ nghĩa và cách đọc, rồi bấm để lật (Space)</span>
          </button>
          <div className="flip-face flip-back shadow flex min-h-[24rem] flex-col items-center justify-center gap-3 rounded-lg bg-surface p-6 text-center" aria-hidden={!show}>
            <button type="button" className="hz text-5xl font-black" onClick={() => speak(w.hanzi)} aria-label="Nghe">{w.hanzi}</button>
            <div className="py text-2xl font-semibold text-accent-fg">{w.pinyin}</div>
            <div className="text-xl font-bold">{w.meaning}</div>
            {w.han_viet && <div className="text-sm text-slate-500">Hán Việt: {w.han_viet}</div>}
            {w.example && <div className="text-sm text-slate-500">{w.example}</div>}
            <div className="flex flex-wrap justify-center gap-2">
              {show && [...w.hanzi].slice(0, 4).map((c, i) => <StrokeWriter key={c + i} char={c} />)}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-4 gap-2 transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
        {GRADES.map(g => (
          <button key={g.key} disabled={!show} onClick={() => rate(g.r)} className={`tile shadow rounded-lg py-3 font-bold ${g.cls}`}>
            {g.label}<span className="block text-xs font-normal opacity-70">{g.key}</span>
          </button>
        ))}
      </div>
      <StuckTopics />
    </div>
  )
}

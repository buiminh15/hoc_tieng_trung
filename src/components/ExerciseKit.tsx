/** Mảnh giao diện dùng chung cho tab Bài tập. */
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Stamp from './Stamp'
import ConfirmDialog from './ConfirmDialog'
import { chip, secondary } from '../lib/exerciseStyles'
import { addVocabToDeck } from '../lib/srs'
import { speak } from '../lib/tts'
import type { Vocab } from '../data/types'

export function Row<T extends string | number>({ label, options, value, onChange, disabled }: { label: string; options: readonly (readonly [T, string])[]; value: T; onChange: (v: T) => void; disabled?: (v: T) => boolean }) {
  return (
    <div>
      <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</h2>
      <div className="flex flex-wrap gap-2">
        {options.map(([v, l]) => <button key={v} aria-pressed={value === v} disabled={disabled?.(v)} className={chip(value === v)} onClick={() => onChange(v)}>{l}</button>)}
      </div>
    </div>
  )
}

export function Header({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <Link to="/exercises" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← Bài tập</Link>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{title}</h1>
      <p className="text-slate-500">{desc}</p>
    </div>
  )
}

/** Dòng đầu khi đang chơi: nút thoát (có hỏi lại) và tiến độ. */
export function PlayBar({ status, onExit }: { status: ReactNode; onExit: () => void }) {
  const [confirm, setConfirm] = useState(false)
  return (
    <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
      <ConfirmDialog open={confirm} danger title="Thoát bài làm?" message="Tiến độ hiện tại sẽ bị mất." confirmText="Thoát" cancelText="Làm tiếp" onCancel={() => setConfirm(false)} onConfirm={onExit} />
      <button onClick={() => setConfirm(true)}>← Thoát</button>
      <span>{status}</span>
    </div>
  )
}

export function AddToDeck({ words, label }: { words: Vocab[]; label: string }) {
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)
  const list = [...new Map(words.map(w => [w.hanzi, w])).values()]
  if (!list.length) return null
  async function add() {
    setBusy(true)
    setMsg('Đang thêm…')
    try {
      const n = await addVocabToDeck(list)
      setMsg(`Đã thêm ${n} từ${n < list.length ? ` (${list.length - n} từ có sẵn)` : ''}.`)
    } catch (e) { setMsg('Lỗi: ' + (e as Error).message); setBusy(false) }
  }
  return (
    <div className="space-y-1">
      <button disabled={busy} className={secondary + ' text-sm disabled:opacity-40'} onClick={add}>＋ {label}</button>
      {msg && <p role="status" className="text-sm">{msg}</p>}
    </div>
  )
}

export interface ResultRow { vocab?: Vocab; main: string; sub?: string; say: string; bad?: boolean; note?: string }

export function Summary({ title, ratio, rows, wrong, children }: { title: string; ratio: number; rows: ResultRow[]; wrong: Vocab[]; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <section className="space-y-3 rounded-xl bg-surface p-6 text-center shadow">
        <div className="flex justify-center"><Stamp text={ratio >= 0.9 ? '优' : ratio >= 0.7 ? '良' : '加'} size="lg" /></div>
        <p className="text-2xl font-bold">{title}</p>
        <div className="flex flex-wrap justify-center gap-2">{children}</div>
        <AddToDeck words={wrong} label="Thêm tất cả từ làm sai vào ôn tập" />
      </section>
      <ul className="space-y-2">
        {rows.map((r, i) => (
          <li key={i} className={`flex items-center gap-3 rounded-lg border-l-4 bg-surface p-3 ${r.bad ? 'border-seal' : 'border-accent'}`}>
            <div className="min-w-0 flex-1">
              <div className="hz text-lg font-bold">{r.main}</div>
              {r.sub && <div className="text-sm text-slate-500">{r.sub}</div>}
              {r.note && <div className="text-sm text-seal">{r.note}</div>}
            </div>
            <button aria-label="Nghe" onClick={() => speak(r.say)}>🔊</button>
            {r.vocab && r.bad && <AddToDeck words={[r.vocab]} label="Ôn tập" />}
          </li>
        ))}
      </ul>
      <p className="text-center"><Link className="text-sm text-accent-fg underline" to="/exercises">Về danh sách bài tập</Link></p>
    </div>
  )
}


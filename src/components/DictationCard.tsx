import { useMemo, useState } from 'react'
import type { Dictation } from '../data/types'

const strip = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
const nfc = (s: string) => s.normalize('NFC').toLowerCase().trim()

type Verdict = 'ok' | 'notone' | 'bad' | 'empty'

/** Chấm một ô: đúng hẳn, đúng nhưng thiếu dấu thanh (chỉ khi bài không bắt buộc thanh), hoặc sai. */
export function grade(d: Dictation, i: number, input: string): Verdict {
  const it = d.items[i]
  const v = nfc(input)
  if (!v) return 'empty'
  const full = it.prompt.includes('＿') ? it.prompt.replace('＿', it.answer) : it.answer
  if (v === nfc(it.answer) || v === nfc(full) || it.accept?.includes(v)) return 'ok'
  if (!d.needTone && (strip(v) === strip(it.answer) || strip(v) === strip(full))) return 'notone'
  return 'bad'
}

/** Bài nghe chép: nghe file ghi âm, điền chỗ trống, chấm ngay và hiện đáp án. */
export default function DictationCard({ d }: { d: Dictation }) {
  const [vals, setVals] = useState<string[]>(() => d.items.map(() => ''))
  const [checked, setChecked] = useState(false)
  const verdicts = useMemo(() => vals.map((v, i) => grade(d, i, v)), [vals, d])
  const score = verdicts.filter(v => v === 'ok' || v === 'notone').length

  const reset = () => { setVals(d.items.map(() => '')); setChecked(false) }

  return (
    <section className="page-in space-y-4 pt-1">
      <h2 className="rule pt-3 text-xl font-extrabold">{d.title}</h2>
      <p className="max-w-2xl text-sm text-slate-500">{d.hint}</p>
      {d.clip && (
        <div className="rounded-lg border bg-surface p-3">
          <p className="mb-1 text-sm font-semibold">🎧 {d.clip.label}</p>
          <audio controls preload="none" src={d.clip.src} className="w-full" />
        </div>
      )}

      <ol className="grid gap-2 sm:grid-cols-2">
        {d.items.map((it, i) => {
          const v = verdicts[i]
          const show = checked && v !== 'empty'
          return (
            <li key={i} className={`flex items-center gap-2 rounded-lg border p-2 ${show ? (v === 'bad' ? 'border-seal/60 bg-rose-100' : 'border-accent bg-accent-soft') : 'bg-surface'}`}>
              <span className="w-6 shrink-0 text-center text-sm font-bold text-slate-500">{i + 1}</span>
              <span className={`py shrink-0 text-lg font-semibold ${it.prompt.length > 6 ? 'min-w-0 max-w-[55%]' : 'w-16'}`}>{it.prompt.replace('＿', '＿')}</span>
              <input
                value={vals[i]} onChange={e => { const n = vals.slice(); n[i] = e.target.value; setVals(n); setChecked(false) }}
                className="min-w-0 flex-1 rounded border px-2 py-1 text-lg" autoComplete="off" autoCapitalize="off" spellCheck={false}
                aria-label={`Câu ${i + 1}`}
              />
              {show && <span className="shrink-0 text-sm font-bold">{v === 'bad' ? '✗' : '✓'}</span>}
              {(checked && v === 'bad') && <span className="shrink-0 text-sm"><b className="py text-accent-fg">{it.answer}</b>{it.gloss && <span className="hz ml-1 text-slate-500">{it.gloss}</span>}</span>}
              {(checked && v === 'notone') && <span className="shrink-0 text-xs text-slate-500">nhớ dấu: <b className="py text-accent-fg">{it.answer}</b></span>}
            </li>
          )
        })}
      </ol>

      <div className="flex flex-wrap items-center gap-2">
        <button className="tile shadow rounded-lg bg-accent px-5 py-2 font-bold text-white" onClick={() => setChecked(true)}>Kiểm tra</button>
        <button className="tile rounded-lg border bg-surface px-4 py-2 font-semibold" onClick={() => { setVals(d.items.map(it => it.answer)); setChecked(true) }}>Hiện đáp án</button>
        <button className="tile rounded-lg border bg-surface px-4 py-2 font-semibold" onClick={reset}>Làm lại</button>
        {checked && <span className="ml-auto font-bold text-accent-fg">{score}/{d.items.length} đúng</span>}
      </div>
    </section>
  )
}

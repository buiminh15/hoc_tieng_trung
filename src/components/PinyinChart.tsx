import { useState } from 'react'
import { speakSyllable } from '../lib/tts'

export default function PinyinChart({ cols, rows }: { cols: string[]; rows: Record<string, string[]> }) {
  const [last, setLast] = useState('')
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-1 text-center text-sm">
        <thead><tr><th></th>{cols.map(c => <th key={c} className="rounded bg-accent-soft p-1.5 text-accent-fg">{c}</th>)}</tr></thead>
        <tbody>
          {Object.entries(rows).map(([ini, row]) => (
            <tr key={ini}>
              <th className="rounded bg-accent-soft p-1.5 text-accent-fg">{ini}</th>
              {row.map((s, i) => s
                ? <td key={i} onClick={() => { setLast(s); speakSyllable(s) }} className={`py cursor-pointer rounded border p-1.5 font-medium transition-colors duration-150 hover:bg-accent-soft active:scale-95 ${last === s ? 'border-accent bg-accent text-white' : 'bg-surface'}`}>{s}</td>
                : <td key={i} className="rounded bg-slate-100" />)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

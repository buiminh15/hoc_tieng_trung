import { allLessons } from '../data/lessons'
import { bookLabel } from '../data/books'

const BOOK_IDS = [...new Set(allLessons.map(x => x.book))]

export default function ScopePicker({ scope, onChange }: { scope: string; onChange: (s: string) => void }) {
  const curBook = scope.startsWith('b') ? Number(scope.slice(1)) : scope ? Number(scope.split('-')[0]) : null
  const lessonsOf = (b: number) => allLessons.filter(x => x.book === b)
  const seg = (on: boolean) => `whitespace-nowrap rounded-md px-3 py-1.5 font-semibold transition-colors ${on ? 'bg-accent text-white shadow' : 'text-slate-500 hover:bg-surface hover:text-slate-900'}`
  return (
    <div className="space-y-3 rounded-lg border bg-surface p-3">
      <div className="flex items-center gap-3">
        <span className="w-12 shrink-0 text-xs font-bold uppercase tracking-wide text-slate-500">Quyển</span>
        <div className="flex gap-1 overflow-x-auto rounded-lg bg-slate-50 p-1 text-sm">
          <button className={seg(curBook === null)} onClick={() => onChange('')}>Tất cả</button>
          {BOOK_IDS.map(b => (
            <button key={b} className={seg(curBook === b)} onClick={() => onChange(`b${b}`)}>{bookLabel(b).replace('Giáo trình chuẩn ', '')}</button>
          ))}
        </div>
      </div>
      {curBook !== null && (
        <div className="flex items-start gap-3">
          <span className="w-12 shrink-0 pt-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">Bài</span>
          <div className="flex flex-wrap gap-1.5 text-sm">
            <button onClick={() => onChange(`b${curBook}`)} className={`h-8 rounded-md border px-3 font-semibold ${scope === `b${curBook}` ? 'border-accent bg-accent text-white' : 'bg-surface hover:bg-accent-soft'}`}>Cả quyển</button>
            {lessonsOf(curBook).map(x => {
              const k = `${x.book}-${x.lesson.id}`
              return (
                <button key={k} title={`${x.lesson.hanzi} · ${x.lesson.title}`} onClick={() => onChange(k)}
                  className={`h-8 min-w-8 rounded-md border px-2 font-bold tabular-nums ${scope === k ? 'border-accent bg-accent text-white' : 'bg-surface hover:bg-accent-soft'}`}>{x.lesson.id}</button>
              )
            })}
          </div>
        </div>
      )}
      {scope && !scope.startsWith('b') && (() => {
        const x = allLessons.find(l => `${l.book}-${l.lesson.id}` === scope)
        return x && <p className="pl-[3.75rem] text-sm text-slate-500"><span className="hz font-bold text-slate-900">{x.lesson.hanzi}</span> · {x.lesson.title}</p>
      })()}
    </div>
  )
}

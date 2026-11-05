import { Link, useParams } from 'react-router-dom'
import Stamp from '../components/Stamp'
import { getBook } from '../data/books'
import { getLesson } from '../data/lessons'
import { lessonKey, useProgress } from '../lib/progress'

export default function Book() {
  const { bookId } = useParams()
  const book = getBook(Number(bookId))
  const done = useProgress(s => s.done)
  if (!book || !book.lessons.length) return <p>Không có quyển này. <Link className="text-accent-fg underline" to="/">Về giáo trình</Link></p>
  const learned = book.lessons.filter(l => done.includes(lessonKey(book.id, l.id))).length
  const current = book.lessons.find(l => getLesson(book.id, l.id) && !done.includes(lessonKey(book.id, l.id)))?.id

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← Giáo trình</Link>
        <div className="mt-1 flex items-end justify-between gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight">{book.title}</h1>
          <p className="pb-1 text-sm text-slate-500">{learned}/{book.lessons.length} bài đã học</p>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${(learned / book.lessons.length) * 100}%` }} /></div>
      </div>

      <ol className="relative ml-4 border-l-2 border-slate-200 pb-2">
        {book.lessons.map(l => {
          const ready = Boolean(getLesson(book.id, l.id))
          const isDone = done.includes(lessonKey(book.id, l.id))
          const isCur = current === l.id
          const node = (
            <span className={`absolute -left-[1.4rem] top-4 grid size-[2.15rem] place-items-center rounded-full border-2 text-sm font-bold ${isDone ? 'border-accent bg-accent text-white' : isCur ? 'border-gold bg-surface text-slate-900 ring-4 ring-gold/30' : ready ? 'border-slate-400 bg-surface' : 'border-dashed border-slate-200 bg-slate-50 text-slate-400'}`}>
              {isDone ? '✓' : l.id}
            </span>
          )
          const body = (
            <div className={`ml-8 flex items-center gap-3 rounded-lg px-3 py-3 ${ready ? 'hover:bg-accent-soft' : 'opacity-50'} ${isCur ? 'bg-surface shadow' : ''}`}>
              <div className="min-w-0 flex-1">
                <div className="hz truncate text-2xl font-bold">{l.hanzi}</div>
                <div className="py truncate text-sm font-semibold text-accent-fg">{l.pinyin}</div>
                <div className="truncate text-sm text-slate-500">{l.vi}</div>
              </div>
              {isDone && <Stamp text="完" size="sm" />}
              {isCur && <span className="shrink-0 rounded-full bg-gold/25 px-3 py-1 text-xs font-bold">Đang học</span>}
              {!ready && <span className="shrink-0 text-xs text-slate-500">Sắp có</span>}
            </div>
          )
          return (
            <li key={l.id} className="relative">
              {node}
              {ready ? <Link to={`/books/${book.id}/lessons/${l.id}`} className="block">{body}</Link> : body}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

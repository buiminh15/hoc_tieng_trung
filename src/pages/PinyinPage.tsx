import PinyinChart from '../components/PinyinChart'
import { allLessons } from '../data/lessons'

export default function PinyinPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Bảng pinyin</h1>
        <p className="mt-1 text-slate-500">Bấm vào từng âm tiết để nghe.</p>
      </div>
      {allLessons.flatMap(({ book, lesson: l }) => l.sections.filter(s => s.kind === 'chart').map(s => (
        s.kind === 'chart' && (
          <section key={book + '-' + l.id + s.title} className="space-y-3">
            <h2 className="rule pt-3 text-lg font-extrabold">{s.title.replace(/ – bấm ô để nghe/, '')} <span className="text-sm font-normal text-slate-500">· Quyển {book}, Bài {l.id}</span></h2>
            {s.note && <p className="text-sm text-slate-500">{s.note}</p>}
            <PinyinChart cols={s.cols} rows={s.rows} />
          </section>
        )
      )))}
    </div>
  )
}

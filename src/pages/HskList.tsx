import { Link } from 'react-router-dom'
import { EXAM_MINUTES, HSK_EXAMS, PASS_SCORE } from '../data/hsk'
import { bestOf } from '../lib/hskHistory'

export default function HskList() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Đề thi HSK cấp 1</h1>
        <p className="mt-1 max-w-xl text-slate-500">Làm đề theo đúng cấu trúc thi thật: 40 câu, {EXAM_MINUTES} phút, nghe 20 câu rồi đọc 20 câu. Từ {PASS_SCORE}/200 điểm là đạt.</p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HSK_EXAMS.map((e, i) => {
          const best = bestOf(e.id)
          return (
            <li key={e.id}>
              <Link to={`/hsk/${e.id}`} className="tile group relative flex min-h-44 flex-col justify-between overflow-hidden rounded-lg p-5 text-white shadow" style={{ background: 'linear-gradient(145deg,#0d2b30,#124c47 70%,#176a5b)' }}>
                <span aria-hidden className="hz pointer-events-none absolute -right-2 -top-8 select-none text-[10rem] font-black leading-none text-white/10">{'壹贰叁肆伍'[i]}</span>
                <div className="relative">
                  <div className="text-sm font-semibold text-white/70">{e.code}{e.note ? ` · ${e.note}` : ''}</div>
                  <div className="text-2xl font-extrabold">{e.title}</div>
                </div>
                <div className="relative text-sm text-white/80">
                  40 câu · {EXAM_MINUTES} phút
                  <div className="mt-1 font-semibold text-[#f0c560]">{best === null ? 'Chưa làm' : `Điểm cao nhất: ${best}/200 ${best >= PASS_SCORE ? '· Đạt' : ''}`}</div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

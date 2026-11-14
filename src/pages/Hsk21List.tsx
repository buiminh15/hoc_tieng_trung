import { Link } from 'react-router-dom'
import { BOOK_HANZI, BOOK_TITLE, DAYS, WEEKENDS, hasContent } from '../data/hsk21'
import { dayPercent, useHsk21 } from '../lib/hsk21Progress'

const WEEK_HZ = ['一', '二', '三']

export default function Hsk21List() {
  const seen = useHsk21(s => s.seen)
  const best = useHsk21(s => s.best)
  const ready = DAYS.filter(d => hasContent(d.day))
  const next = ready.find(d => dayPercent(d.day, { seen, best }) < 100) ?? ready[0]

  return (
    <div className="space-y-10">
      <section className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-500">Sách · 郑丽杰 · 外研社 · dành cho HSK 5–6</p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{BOOK_TITLE}</h1>
          <p className="hz text-xl text-accent-fg">{BOOK_HANZI}</p>
          <p className="max-w-2xl text-slate-500">
            Sách không dạy lại ngữ pháp từ đầu, mà xâu chuỗi những gì bạn đã biết thành một hệ thống, rồi chỉ ra chỗ đề HSK hay bẫy. Mỗi ngày đi theo đúng bốn bước của sách: xem trước, kiểm tra điểm kiến thức, bảng ghi nhớ của thầy, và đề mô phỏng HSK.
          </p>
          {next && (
            <Link to={`/hsk21/${next.day}`} className="tile shadow inline-block rounded-lg bg-accent px-6 py-3 font-bold text-white">
              {dayPercent(next.day, { seen, best }) === 0 ? `Bắt đầu ngày ${next.day}` : `Học tiếp ngày ${next.day}`}
            </Link>
          )}
        </div>
        <div aria-hidden className="hz mx-auto grid size-36 place-items-center rounded-lg text-7xl font-black text-[#f0c560] shadow" style={{ background: 'linear-gradient(145deg,#0d2b30,#124c47 70%,#176a5b)' }}>21</div>
      </section>

      {[1, 2, 3].map(w => (
        <section key={w}>
          <div className="rule mb-4 flex items-baseline justify-between pt-3">
            <h2 className="text-xl font-extrabold"><span className="hz mr-2 text-accent-fg">第{WEEK_HZ[w - 1]}周</span>Tuần {w}</h2>
            <span className="text-sm text-slate-500">{WEEKENDS[w - 1].title} · tr. {WEEKENDS[w - 1].pages}</span>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DAYS.filter(d => d.week === w).map(d => {
              const ok = hasContent(d.day)
              const pct = dayPercent(d.day, { seen, best })
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Ngày {d.day} · {d.weekday}</div>
                      <div className="hz mt-1 text-lg font-bold leading-snug">{d.hanzi}</div>
                      <div className="mt-0.5 text-sm text-slate-500">{d.title}</div>
                    </div>
                    <span aria-hidden className={`hz grid size-12 shrink-0 place-items-center rounded-md border-2 text-2xl font-black ${ok ? 'border-accent text-accent-fg group-hover:bg-accent group-hover:text-white' : 'border-slate-200 text-slate-400'}`}>{d.day}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {d.topics.slice(0, 4).map(t => <span key={t} className="rounded-full border bg-slate-50 px-2 py-0.5 text-xs text-slate-500">{t}</span>)}
                    {d.topics.length > 4 && <span className="px-1 text-xs text-slate-500">+{d.topics.length - 4}</span>}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>tr. {d.pages}</span>
                    {ok ? <span className="font-semibold text-accent-fg">{pct === 0 ? 'Chưa học' : pct === 100 ? 'Hoàn thành' : `${pct}%`}</span> : <span>Sắp có</span>}
                  </div>
                  {ok && <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${pct}%` }} /></div>}
                </>
              )
              return (
                <li key={d.day}>
                  {ok
                    ? <Link to={`/hsk21/${d.day}`} className="tile group block rounded-lg border bg-surface p-4 shadow transition-colors">{inner}</Link>
                    : <div className="block rounded-lg border-2 border-dashed border-slate-200 p-4 text-slate-500 opacity-80">{inner}</div>}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}

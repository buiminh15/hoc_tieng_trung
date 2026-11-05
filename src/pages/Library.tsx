import { Link } from 'react-router-dom'
import HeroWriter from '../components/HeroWriter'
import { books } from '../data/books'
import { allLessons, bookLessons } from '../data/lessons'
import { lessonKey, useProgress } from '../lib/progress'

const CHEF = ['壹', '贰', '叁', '肆', '伍', '陆']
const HERO_WORDS = [
  { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'xin chào' },
  { hanzi: '汉语', pinyin: 'Hànyǔ', vi: 'tiếng Hán' },
  { hanzi: '明天', pinyin: 'míngtiān', vi: 'ngày mai' },
  { hanzi: '银行', pinyin: 'yínháng', vi: 'ngân hàng' },
]

export default function Library() {
  const done = useProgress(s => s.done)
  const ready = allLessons.map(x => ({ ...x, key: lessonKey(x.book, x.lesson.id) }))
  const next = ready.find(x => !done.includes(x.key)) ?? ready[0]
  const learned = ready.filter(x => done.includes(x.key)).length

  return (
    <div className="space-y-12">
      <section className="grid items-center gap-8 pt-2 md:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          {next && (
            <>
              <p className="text-sm font-semibold text-slate-500">
                {learned === 0 ? 'Bắt đầu từ' : learned === ready.length ? 'Đã học hết bài hiện có. Ôn lại' : 'Học tiếp'} · Quyển {next.book}, Bài {next.lesson.id}
              </p>
              <h1 className="hz text-5xl font-black leading-tight tracking-tight sm:text-6xl">{next.lesson.hanzi}</h1>
              <p className="max-w-md text-lg text-slate-500">
                <span className="py font-semibold text-accent-fg">{next.lesson.pinyin}</span> · {next.lesson.title}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to={`/books/${next.book}/lessons/${next.lesson.id}`} className="tile shadow rounded-lg bg-accent px-6 py-3 font-bold text-white">
                  {learned === 0 ? 'Vào học' : 'Học bài này'}
                </Link>
                <Link to="/exam" className="rounded-lg px-4 py-3 font-semibold text-slate-500 hover:text-slate-900">Thi thử</Link>
              </div>
            </>
          )}
        </div>
        <div className="mx-auto"><HeroWriter words={HERO_WORDS} /></div>
      </section>

      <section>
        <div className="rule mb-5 flex items-baseline justify-between pt-3">
          <h2 className="text-xl font-extrabold">Giáo trình Hán ngữ</h2>
          <span className="text-sm text-slate-500">{learned}/{ready.length} bài đã học</span>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map(b => {
            const total = b.lessons.length
            const have = bookLessons[b.id]?.length ?? 0
            const got = b.lessons.filter(l => done.includes(lessonKey(b.id, l.id))).length
            if (!total) {
              return (
                <li key={b.id} className="relative flex min-h-40 flex-col justify-between rounded-lg border-2 border-dashed border-slate-200 p-4 text-slate-400">
                  <span className="hz text-5xl font-black opacity-40">{CHEF[b.id - 1]}</span>
                  <div><div className="font-bold">{b.title}</div><div className="text-sm">Sắp có</div></div>
                </li>
              )
            }
            return (
              <li key={b.id}>
                <Link to={`/books/${b.id}`} className="tile group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-lg p-4 text-white shadow" style={{ background: 'linear-gradient(145deg,#0d2b30,#124c47 70%,#176a5b)' }}>
                  <span aria-hidden className="hz pointer-events-none absolute -right-3 -top-6 select-none text-[9rem] font-black leading-none text-white/10 transition-transform duration-500 group-hover:scale-105">{CHEF[b.id - 1]}</span>
                  <span className="hz relative text-5xl font-black text-[#f0c560]">{CHEF[b.id - 1]}</span>
                  <div className="relative">
                    <div className="text-lg font-extrabold">{b.title}</div>
                    <div className="text-sm text-white/70">{total} bài · {have} bài có nội dung</div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20"><div className="bar h-full bg-[#f0c560]" style={{ width: `${(got / total) * 100}%` }} /></div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

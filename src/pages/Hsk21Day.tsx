import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ErrorQuiz from '../components/ErrorQuiz'
import Direction from '../components/Direction'
import { SpeakBtn } from '../components/Speak'
import Tabs from '../components/Tabs'
import { CONTENT, DAYS, getDay, type Board, type Ex, type Fix, type Pattern, type Role, type Section } from '../data/hsk21'
import { STEPS, dayPercent, useHsk21, type Step } from '../lib/hsk21Progress'
import { speak } from '../lib/tts'

/* ───────────────────────── Bộ hiển thị nhỏ dùng chung ───────────────────────── */

/** Câu ví dụ: phần trong [ ] được tô đậm bằng gạch chân vàng. */
function Hl({ text, className = '' }: { text: string; className?: string }) {
  const parts = text.split(/(\[[^\]]+\])/)
  return (
    <span className={className}>
      {parts.map((p, i) => p.startsWith('[') && p.endsWith(']')
        ? <mark key={i} className="rounded-sm bg-transparent px-0.5 text-inherit underline decoration-gold decoration-[3px] underline-offset-4">{p.slice(1, -1)}</mark>
        : <Fragment key={i}>{p}</Fragment>)}
    </span>
  )
}

/** Công thức: phần trong 〈 〉 thành ô tròn (vai trò ngữ pháp), chữ Hán còn lại in đậm. */
function Formula({ text, light = false }: { text: string; light?: boolean }) {
  const parts = text.split(/(〈[^〉]+〉)/)
  return (
    <span className="inline-flex flex-wrap items-center gap-x-1 gap-y-1.5 leading-none">
      {parts.map((p, i) => {
        if (p.startsWith('〈')) {
          return <span key={i} className={`hz inline-flex h-7 min-w-7 items-center justify-center rounded-full border-2 px-1.5 text-sm font-bold ${light ? 'border-[#f0c560] text-[#f0c560]' : 'border-accent text-accent-fg'}`}>{p.slice(1, -1)}</span>
        }
        return p.trim() ? <span key={i} className={`hz text-base font-bold ${light ? 'text-white' : ''}`}>{p}</span> : null
      })}
    </span>
  )
}

function ExampleItem({ e, compact = false }: { e: Ex; compact?: boolean }) {
  const plain = e.h.replace(/[[\]]/g, '')
  return (
    <li className={`tile flex cursor-pointer items-start gap-3 rounded-lg border bg-surface ${compact ? 'p-2.5' : 'p-3'}`} onClick={() => speak(plain)}>
      <div className="min-w-0 flex-1">
        {e.tag && <div className="mb-0.5 text-xs font-bold text-accent-fg">{e.tag}</div>}
        <Hl text={e.h} className={`hz block font-bold leading-relaxed ${compact ? 'text-lg' : 'text-xl'}`} />
        {e.p && <div className="py text-sm font-semibold text-accent-fg">{e.p}</div>}
        <div className="text-sm text-slate-500">{e.vi}</div>
        {e.note && <div className="mt-1 text-xs text-slate-500">↳ {e.note}</div>}
      </div>
      <SpeakBtn text={plain} />
    </li>
  )
}

/* ───────────────────────── Tổng quan ───────────────────────── */

const ROLE_STYLE: Record<Role, string> = {
  主: 'bg-accent-soft2 text-accent-fg border-accent',
  谓: 'bg-slate-800 text-white border-slate-800',
  宾: 'bg-amber-50 text-slate-900 border-gold',
  定: 'bg-slate-50 text-slate-500 border-slate-200 border-dashed',
  状: 'bg-slate-50 text-slate-500 border-slate-200 border-dashed',
  补: 'bg-rose-100 text-seal border-seal font-black',
}
const ROLE_VI: Record<Role, string> = { 主: 'chủ ngữ', 谓: 'vị ngữ', 宾: 'tân ngữ', 定: 'định ngữ', 状: 'trạng ngữ', 补: 'bổ ngữ' }

function Overview({ day, onGo }: { day: number; onGo: (s: Step, anchor?: string) => void }) {
  const c = CONTENT[day]
  const seen = useHsk21(s => s.seen[day] ?? [])
  const best = useHsk21(s => s.best)
  return (
    <div className="page-in space-y-8 pt-1">
      <blockquote className="rounded-lg border-l-4 border-gold bg-amber-50 p-4 text-[15px] leading-relaxed">
        <span className="hz mr-2 text-xl font-black text-gold">师</span>{c.intro}
      </blockquote>

      {c.anatomy && (
        <section className="space-y-3">
          <h2 className="rule pt-3 text-xl font-extrabold">{c.anatomyTitle}</h2>
          {c.anatomyLead && <p className="max-w-2xl text-slate-500">{c.anatomyLead}</p>}
          <div className="space-y-3 rounded-lg border bg-surface p-4">
            {c.anatomy.map(r => (
              <div key={r.label}>
                <div className="mb-1.5 text-xs font-semibold text-slate-500">{r.label}</div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {r.chunks.map(([t, role], i) => (
                    <span key={i} className={`hz inline-flex flex-col items-center rounded-md border px-2 py-1 leading-tight ${ROLE_STYLE[role]}`}>
                      <span className="text-lg font-bold">{t}</span>
                      <span className="text-[10px] font-semibold opacity-80" style={{ fontFamily: 'var(--font-sans)' }}>{role} {ROLE_VI[role]}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {[c.cheat, ...(c.cheatMore ?? [])].map(ch => ch && (
        <section key={ch.title} className="space-y-3">
          <h2 className="rule pt-3 text-xl font-extrabold">{ch.title}</h2>
          <p className="max-w-2xl text-slate-500">{ch.lead}</p>
          <div className="overflow-x-auto rounded-lg border bg-surface">
            <table className="w-full text-left text-sm">
              <thead><tr className="bg-accent-soft">{ch.head.map(h => <th key={h} className="px-3 py-2 font-bold">{h}</th>)}</tr></thead>
              <tbody>
                {ch.rows.map(r => (
                  <tr key={r.key} className="border-t align-middle">
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-3">
                        {r.glyph && <Direction k={r.glyph} className="h-14 w-20 rounded-md bg-slate-50" />}
                        {/[一-鿿]/.test(r.key) && r.key.length <= 6
                          ? <button type="button" className="hz text-2xl font-black text-accent-fg" onClick={() => speak(r.key)}>{r.key}</button>
                          : <span className="font-semibold">{r.key}</span>}
                      </div>
                    </td>
                    {r.cells.map((cell, k) => <td key={k} className={`px-3 py-2 ${k === 0 ? 'font-semibold' : ''}`}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="rule pt-3 text-xl font-extrabold">{c.focusTitle ?? 'Các điểm ngữ pháp hôm nay'}</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.sections.map((s, i) => {
            const first = s.groups[0].patterns[0]
            return (
              <li key={s.id}>
                <button onClick={() => onGo('learn', s.id)} className="tile flex h-full w-full flex-col gap-2 rounded-lg border bg-surface p-4 text-left shadow">
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Phần {i + 1}</span>
                  <span className="hz text-2xl font-black text-accent-fg">{s.hanzi}</span>
                  <span className="font-bold">{s.title}</span>
                  {s.groups.some(g => g.glyph) && <span className="flex gap-1">{s.groups.map(g => g.glyph && <Direction key={g.glyph} k={g.glyph} className="h-12 w-[4.5rem] rounded-md bg-slate-50" />)}</span>}
                  <Formula text={first.formula.split('　')[0]} />
                  <Hl text={first.examples[0].h} className="hz mt-auto text-lg" />
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="rule pt-3 text-xl font-extrabold">Lộ trình hôm nay</h2>
        <ol className="grid gap-2 sm:grid-cols-2">
          {[
            ['learn', 'Học', 'Xem trước từng mẫu câu với ví dụ có pinyin và nghĩa. Đọc để "cảm" ngữ pháp, không cần thuộc khái niệm.'],
            ['board', 'Bảng ghi nhớ', 'Nội dung thầy viết lên bảng: cấu trúc, phủ định, câu hỏi và các điểm thi hay bẫy. Sách khuyên chép lại một lần.'],
            ['cards', 'Thẻ nhớ', 'Lật thẻ ôn công thức và câu sai → câu đúng. Đánh dấu "nhớ rồi" để lần sau chỉ ôn thẻ còn lại.'],
            ['test', 'Kiểm tra', `${c.test.length} câu điểm kiến thức rồi ${c.exam.length} câu đề mô phỏng HSK. Chọn xong biết đúng sai và cách sửa ngay.${best[`${day}-exam`] ? ` Điểm cao nhất đề mô phỏng: ${best[`${day}-exam`]}%.` : ''}`],
          ].map(([k, t, d], i) => {
            const done = seen.includes(k as Step)
            return (
              <li key={k}>
                <button onClick={() => onGo(k as Step)} className="tile flex w-full items-start gap-3 rounded-lg border bg-surface p-3 text-left">
                  <span className={`grid size-8 shrink-0 place-items-center rounded-full border-2 text-sm font-bold ${done ? 'border-accent bg-accent text-white' : 'border-slate-200 text-slate-500'}`}>{done ? '✓' : i + 1}</span>
                  <span><b className="block">{t}</b><span className="text-sm text-slate-500">{d}</span></span>
                </button>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}

/* ───────────────────────── Học ───────────────────────── */

function PatternCard({ p, idx }: { p: Pattern; idx: number }) {
  const [open, setOpen] = useState(false)
  const SHOW = 3
  const shown = open ? p.examples : p.examples.slice(0, SHOW)
  const more = p.examples.length - SHOW
  return (
    <article className="space-y-3 rounded-lg border bg-surface p-4 shadow">
      <header className="space-y-1.5">
        <div className="flex items-start gap-3">
          <span className="hz grid size-8 shrink-0 place-items-center rounded-md bg-accent text-sm font-black text-white">{idx}</span>
          <div className="min-w-0 space-y-1.5">
            {p.title && <h3 className="font-bold leading-snug">{p.title}</h3>}
            <Formula text={p.formula} />
          </div>
        </div>
        <p className="text-sm text-slate-500">{p.note}</p>
        {p.verbs && (
          <div className="flex flex-wrap items-center gap-1 pt-0.5">
            <span className="text-xs font-semibold text-slate-500">Động từ hay gặp:</span>
            {p.verbs.map(v => <button key={v} type="button" onClick={() => speak(v.replace(/\s.*$/, ''))} className="hz rounded-full border bg-slate-50 px-2 py-0.5 text-sm font-bold hover:bg-accent-soft">{v}</button>)}
          </div>
        )}
      </header>
      <ul className="space-y-2">{shown.map(e => <ExampleItem key={e.h} e={e} compact />)}</ul>
      {more > 0 && <button className="text-sm font-semibold text-accent-fg hover:underline" onClick={() => setOpen(o => !o)}>{open ? 'Thu gọn' : `Xem thêm ${more} ví dụ`}</button>}
    </article>
  )
}

function SectionView({ s, no }: { s: Section; no: number }) {
  // Số thứ tự mẫu câu chạy liên tục qua các nhóm
  const offsets = s.groups.reduce<number[]>((acc, _g, i) => [...acc, (acc[i - 1] ?? 0) + (i === 0 ? 0 : s.groups[i - 1].patterns.length)], [])
  return (
    <section id={`sec-${s.id}`} className="scroll-mt-28 space-y-5">
      <header className="rule space-y-2 pt-4">
        <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Phần {no}</div>
        <h2 className="flex flex-wrap items-baseline gap-x-3"><span className="hz text-3xl font-black text-accent-fg">{s.hanzi}</span><span className="py text-sm font-semibold text-slate-500">{s.pinyin}</span><span className="text-xl font-extrabold">{s.title}</span></h2>
        <p className="max-w-2xl">{s.intro}</p>
        {s.table && s.table.rows.some(r => r.some(c => c.length > 10)) && (
          <div className="overflow-x-auto rounded-lg border bg-surface">
            <table className="w-full text-left text-[15px] leading-relaxed">
              <thead><tr className="bg-accent-soft">{s.table.head.map((h, i) => <th key={i} className="px-3 py-2 font-bold">{h}</th>)}</tr></thead>
              <tbody>{s.table.rows.map((r, i) => (
                <tr key={i} className="border-t align-top">{r.map((c, k) => <td key={k} className={`px-3 py-2 ${k === 0 ? 'whitespace-nowrap bg-accent-soft font-bold text-accent-fg' : 'cursor-pointer hover:bg-accent-soft'}`} onClick={k > 0 && c !== '—' ? () => speak(c.replace(/^[^：:]*[：:]/, '').replace(/、.*$/, '').replace(/[()（）]/g, '')) : undefined}>{c}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        )}
        {s.table && !s.table.rows.some(r => r.some(c => c.length > 10)) && (
          <div className="overflow-x-auto rounded-lg border bg-surface">
            <table className="hz w-full text-center text-lg font-bold">
              <thead><tr className="bg-accent-soft">{s.table.head.map((h, i) => <th key={i} className="px-3 py-2">{h}</th>)}</tr></thead>
              <tbody>{s.table.rows.map((r, i) => (
                <tr key={i} className="border-t">{r.map((c, k) => <td key={k} className={`px-3 py-2 ${k === 0 ? 'bg-accent-soft text-accent-fg' : 'cursor-pointer hover:bg-accent-soft'}`} onClick={k > 0 && c !== '—' ? () => speak(c.replace(/……/g, '')) : undefined}>{c}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        )}
      </header>
      {s.groups.map((g, gi) => (
        <div key={gi} className="space-y-3">
          {g.glyph
            ? <div className="flex items-center gap-4 rounded-lg border bg-surface p-3"><Direction k={g.glyph} className="h-16 w-24 rounded-md bg-slate-50" /><h3 className="hz text-2xl font-black text-accent-fg">{g.title}</h3></div>
            : g.title && <h3 className="flex items-center gap-2 text-lg font-extrabold"><span className="h-0.5 w-6 bg-gold" />{g.title}</h3>}
          <div className="grid gap-3 md:grid-cols-2">{g.patterns.map((p, pi) => <PatternCard key={p.formula + (p.title ?? '')} p={p} idx={offsets[gi] + pi + 1} />)}</div>
        </div>
      ))}
    </section>
  )
}

function Learn({ day, anchor }: { day: number; anchor?: string }) {
  const c = CONTENT[day]
  useEffect(() => {
    if (!anchor) return
    const el = document.getElementById(`sec-${anchor}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [anchor])
  return (
    <div className="page-in space-y-10 pt-1">
      <div className="sticky top-[61px] z-10 -mx-4 flex gap-2 overflow-x-auto border-b bg-slate-50/85 px-4 py-2 backdrop-blur-md">
        {c.sections.map((s, i) => <a key={s.id} href={`#sec-${s.id}`} onClick={e => { e.preventDefault(); document.getElementById(`sec-${s.id}`)?.scrollIntoView({ behavior: 'smooth' }) }} className="tile whitespace-nowrap rounded-full border bg-surface px-3 py-1 text-sm font-semibold hover:bg-accent-soft"><span className="hz mr-1 text-accent-fg">{s.hanzi}</span>{i + 1}. {s.title}</a>)}
      </div>
      {c.sections.map((s, i) => <SectionView key={s.id} s={s} no={i + 1} />)}
    </div>
  )
}

/* ───────────────────────── Bảng ghi nhớ ───────────────────────── */

function BoardView({ b, no }: { b: Board; no: number }) {
  return (
    <section className="board space-y-0 overflow-hidden rounded-xl shadow">
      <header className="flex items-center gap-3 border-b border-white/10 px-5 py-3">
        <span className="hz text-sm font-bold text-[#f0c560]">{'一二三四五六七八九十'[no - 1]}、</span>
        <span className="hz text-2xl font-black text-white">{b.hanzi}</span>
        <span className="text-sm font-semibold text-white/70">{b.title}</span>
        {b.glyph && <Direction k={b.glyph} onDark className="ml-auto h-12 w-[4.5rem]" />}
      </header>
      <div className="divide-y divide-white/10">
        {b.rows.map((r, ri) => (
          <div key={ri} className="grid gap-3 px-5 py-4 sm:grid-cols-[7rem_1fr]">
            <div className="text-sm font-bold uppercase tracking-wide text-[#f0c560]">{r.label}</div>
            <div className="space-y-3">
              {r.formulas && <div className="flex flex-col gap-2">{r.formulas.map(f => <Formula key={f} text={f} light />)}</div>}
              {r.text && <p className="text-[15px] leading-relaxed text-white/90">{r.text}</p>}
              {r.examples && <ul className="space-y-1.5">{r.examples.map((e, i) => <BoardEx key={i} e={e} />)}</ul>}
              {r.points && (
                <ol className="space-y-4">
                  {r.points.map((p, pi) => (
                    <li key={pi} className="space-y-2">
                      <p className="flex gap-2 text-[15px] leading-relaxed text-white/90"><span className="hz shrink-0 font-black text-[#f0c560]">{'①②③④⑤⑥⑦⑧'[pi]}</span><span>{p.text}</span></p>
                      {p.examples && <ul className="space-y-1.5 pl-6">{p.examples.map((e, i) => <BoardEx key={i} e={e} />)}</ul>}
                      {p.fixes && <ul className="space-y-1.5 pl-6">{p.fixes.map((f, i) => <BoardFix key={i} f={f} />)}</ul>}
                    </li>
                  ))}
                </ol>
              )}
              {r.ps && <aside className="ps relative mt-2 rounded-md bg-amber-50 p-3 pl-9 text-sm leading-relaxed text-slate-900"><span className="absolute left-3 top-2.5 font-black text-gold">PS.</span>{r.ps}</aside>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function BoardEx({ e }: { e: Ex }) {
  const plain = e.h.replace(/[[\]]/g, '')
  return (
    <li className="cursor-pointer rounded-md px-2 py-1 hover:bg-white/5" onClick={() => speak(plain)}>
      {e.tag && <span className="mr-2 rounded-full border border-white/30 px-1.5 text-xs text-white/70">{e.tag}</span>}
      <Hl text={e.h} className="hz text-lg font-bold text-white" />
      <span className="ml-2 text-sm text-white/60">{e.vi}</span>
      {e.note && <div className="pl-1 text-xs text-white/50">↳ {e.note}</div>}
    </li>
  )
}

function BoardFix({ f }: { f: Fix }) {
  return (
    <li className="rounded-md px-2 py-1">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
        <span className="hz text-lg text-white/50 line-through decoration-[#ee6a58] decoration-2">{f.wrong}</span>
        <span className="text-white/40">→</span>
        <button type="button" className="hz text-left text-lg font-bold text-[#f0c560]" onClick={() => speak(f.right)}>{f.right}</button>
      </div>
      {(f.why || f.ref) && <div className="text-xs text-white/60">{f.why}{f.ref && <span className="ml-2 rounded-full border border-white/30 px-1.5">{f.ref}</span>}</div>}
    </li>
  )
}

function Boards({ day }: { day: number }) {
  const c = CONTENT[day]
  return (
    <div className="page-in space-y-6 pt-1">
      <p className="max-w-2xl text-slate-500">Đây là phần thầy viết lên bảng trên lớp: cấu trúc, ý nghĩa, phủ định, câu hỏi và phân tích điểm thi. Sách khuyên chép lại một lần ra giấy; sau một thời gian bạn sẽ thấy khái niệm ngữ pháp không còn mơ hồ. Bấm vào câu để nghe.</p>
      {c.boards.map((b, i) => <BoardView key={b.id} b={b} no={i + 1} />)}
    </div>
  )
}

/* ───────────────────────── Thẻ nhớ ───────────────────────── */

interface Card { id: string; kind: 'formula' | 'fix'; front: ReactNode; back: ReactNode; speak: string }

function buildCards(day: number): Card[] {
  const c = CONTENT[day]
  const out: Card[] = []
  c.sections.forEach(s => s.groups.forEach(g => g.patterns.forEach((p, i) => {
    const e = p.examples[0]
    out.push({
      id: `f-${s.id}-${g.title ?? ''}-${i}`, kind: 'formula', speak: e.h.replace(/[[\]]/g, ''),
      front: <><div className="text-xs font-bold uppercase tracking-wide text-slate-500">{s.title}{p.title ? ` · ${p.title}` : ''}</div><Formula text={p.formula} /><div className="text-sm text-slate-500">Nghĩ một ví dụ rồi lật.</div></>,
      back: <><Hl text={e.h} className="hz text-2xl font-bold" />{e.p && <div className="py text-sm font-semibold text-accent-fg">{e.p}</div>}<div className="text-sm text-slate-500">{e.vi}</div><div className="mt-2 text-sm">{p.note}</div></>,
    })
  })))
  c.boards.forEach(b => b.rows.forEach(r => r.points?.forEach((p, pi) => p.fixes?.forEach((f, fi) => {
    out.push({
      id: `x-${b.id}-${pi}-${fi}`, kind: 'fix', speak: f.right,
      front: <><div className="text-xs font-bold uppercase tracking-wide text-seal">Tìm lỗi · {b.title}</div><div className="hz text-2xl font-bold">{f.wrong}</div><div className="text-sm text-slate-500">Câu này sai ở đâu? Sửa thế nào?</div></>,
      back: <><div className="hz text-2xl font-bold text-accent-fg">{f.right}</div><div className="mt-2 text-sm">{f.why ?? p.text}</div></>,
    })
  }))))
  return out
}

function Cards({ day }: { day: number }) {
  const all = useMemo(() => buildCards(day), [day])
  const known = useHsk21(s => s.known[day] ?? [])
  const setKnown = useHsk21(s => s.setKnown)
  const resetKnown = useHsk21(s => s.resetKnown)
  const [onlyNew, setOnlyNew] = useState(true)
  const [seed, setSeed] = useState(0)
  const deck = useMemo(() => {
    const d = (onlyNew ? all.filter(c => !known.includes(c.id)) : all).slice()
    for (let i = d.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [d[i], d[j]] = [d[j], d[i]] }
    return d
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [all, onlyNew, seed])
  const [i, setI] = useState(0)
  const [back, setBack] = useState(false)
  useEffect(() => { setI(0); setBack(false) }, [deck])
  const card = deck[i]

  const go = (d: number) => { setBack(false); setI(k => Math.min(Math.max(k + d, 0), deck.length)) }
  const mark = (on: boolean) => { if (card) setKnown(day, card.id, on); go(1) }

  return (
    <div className="page-in space-y-4 pt-1">
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="text-slate-500">{all.length} thẻ · đã nhớ {known.length}</span>
        <div className="flex gap-2">
          <button className={`tile rounded-full border px-3 py-1 font-semibold ${onlyNew ? 'bg-accent text-white' : 'bg-surface'}`} onClick={() => setOnlyNew(o => !o)}>{onlyNew ? 'Chỉ thẻ chưa nhớ' : 'Tất cả thẻ'}</button>
          <button className="tile rounded-full border bg-surface px-3 py-1 font-semibold" onClick={() => setSeed(s => s + 1)}>Xáo lại</button>
          {known.length > 0 && <button className="tile rounded-full border bg-surface px-3 py-1 font-semibold" onClick={() => resetKnown(day)}>Học lại từ đầu</button>}
        </div>
      </div>

      {!card ? (
        <div className="rounded-xl border bg-surface p-8 text-center shadow">
          <p className="hz text-5xl font-black text-accent-fg">好</p>
          <p className="mt-2 font-bold">{deck.length === 0 ? 'Bạn đã nhớ hết thẻ của ngày này.' : 'Hết lượt.'}</p>
          <div className="mt-4 flex justify-center gap-2">
            <button className="tile rounded-lg border bg-surface px-4 py-2 font-semibold" onClick={() => setSeed(s => s + 1)}>Ôn lại lượt nữa</button>
            {onlyNew && deck.length === 0 && <button className="tile rounded-lg bg-accent px-4 py-2 font-bold text-white" onClick={() => setOnlyNew(false)}>Ôn tất cả</button>}
          </div>
        </div>
      ) : (
        <>
          <div className="text-center text-xs text-slate-500">Thẻ {i + 1}/{deck.length} · bấm thẻ để lật · phím Space lật, ← → chuyển</div>
          <div className="flip mx-auto max-w-xl" onKeyDown={e => { if (e.key === ' ') { e.preventDefault(); setBack(b => !b) } if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }} tabIndex={0}>
            <div className={`flip-inner cursor-pointer ${back ? 'is-back' : ''}`} onClick={() => setBack(b => !b)}>
              <div className="flip-face flex min-h-64 flex-col justify-center gap-3 rounded-xl border bg-surface p-6 text-center shadow">{card.front}</div>
              <div className="flip-face flip-back flex min-h-64 flex-col justify-center gap-2 rounded-xl border-2 border-accent bg-surface p-6 text-center shadow">
                {card.back}
                <SpeakBtn text={card.speak} className="mx-auto mt-1" />
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-xl gap-2">
            <button className="tile rounded-lg border bg-surface px-3 py-2 font-semibold" onClick={() => go(-1)} disabled={i === 0}>←</button>
            <button className="tile flex-1 rounded-lg border bg-surface p-2 font-semibold" onClick={() => mark(false)}>Chưa nhớ</button>
            <button className="tile shadow flex-1 rounded-lg bg-accent p-2 font-bold text-white" onClick={() => mark(true)}>Nhớ rồi ✓</button>
            <button className="tile rounded-lg border bg-surface px-3 py-2 font-semibold" onClick={() => go(1)}>→</button>
          </div>
        </>
      )}
    </div>
  )
}

/* ───────────────────────── Kiểm tra ───────────────────────── */

function Tests({ day, onQuiz }: { day: number; onQuiz: (k: 'test' | 'exam' | null) => void }) {
  const c = CONTENT[day]
  const best = useHsk21(s => s.best)
  const items: ['test' | 'exam', string, string, string, number][] = [
    ['test', '知识点测试', 'Kiểm tra điểm kiến thức', 'Mỗi câu dài chia 4 đoạn A–D, tìm đoạn có lỗi. Làm ngay sau khi xem trước, chưa cần đọc bảng ghi nhớ.', c.test.length],
    ['exam', '新HSK仿真试题', 'Đề mô phỏng HSK', 'Dạng đề thật HSK 6 đọc hiểu phần 1: 4 câu, chọn câu có lỗi ngữ pháp. Trước khi chọn, hãy tự nhủ câu đó đang kiểm tra điểm ngữ pháp nào.', c.exam.length],
  ]
  return (
    <div className="page-in space-y-4 pt-1">
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(([k, hz, t, d, n]) => {
          const b = best[`${day}-${k}`]
          return (
            <li key={k}>
              <button onClick={() => onQuiz(k)} className="tile flex h-full w-full flex-col gap-2 rounded-lg border bg-surface p-5 text-left shadow">
                <span className="hz text-sm font-bold text-accent-fg">{hz}</span>
                <span className="text-xl font-extrabold">{t}</span>
                <span className="text-sm text-slate-500">{d}</span>
                <span className="mt-auto flex items-center justify-between pt-2 text-sm"><span className="text-slate-500">{n} câu</span><span className="font-semibold text-accent-fg">{b === undefined ? 'Bắt đầu →' : `Cao nhất ${b}% →`}</span></span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* ───────────────────────── Trang ngày ───────────────────────── */

export default function Hsk21Day() {
  const { day: dayStr } = useParams()
  const day = Number(dayStr)
  const meta = getDay(day)
  const content = CONTENT[day]
  const [params, setParams] = useSearchParams()
  const tab = (params.get('tab') as Step | null) ?? 'map'
  const [anchor, setAnchor] = useState<string | undefined>()
  const [quiz, setQuiz] = useState<'test' | 'exam' | null>(null)
  const markSeen = useHsk21(s => s.markSeen)
  const saveBest = useHsk21(s => s.saveBest)
  const seen = useHsk21(s => s.seen)
  const best = useHsk21(s => s.best)

  useEffect(() => { if (content) markSeen(day, tab) }, [day, tab, content, markSeen])

  if (!meta || !content) return <p>Chưa có nội dung ngày này. <Link className="text-accent-fg underline" to="/hsk21">Về mục lục</Link></p>

  const setTab = (t: Step, a?: string) => { setAnchor(a); setParams(t === 'map' ? {} : { tab: t }); window.scrollTo({ top: 0 }) }
  const idx = DAYS.findIndex(d => d.day === day)
  const prev = DAYS[idx - 1]
  const next = DAYS[idx + 1]
  const pct = dayPercent(day, { seen, best })

  if (quiz) {
    return <ErrorQuiz key={quiz} items={quiz === 'test' ? content.test : content.exam} title={quiz === 'test' ? 'Điểm kiến thức' : 'Đề mô phỏng'} shuffle={quiz === 'exam'} onDone={(s, t) => saveBest(day, quiz, Math.round((s / t) * 100))} onExit={() => setQuiz(null)} />
  }

  return (
    <div className="space-y-4" key={day}>
      <div>
        <Link to="/hsk21" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← 21 ngày</Link>
        <div className="mt-1 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-500">Tuần {meta.week} · {meta.weekday} · Ngày {meta.day}/15 · tr. {meta.pages}</div>
            <h1 className="hz mt-0.5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{meta.hanzi}</h1>
            <p className="text-lg text-slate-500">{meta.title}</p>
          </div>
          <div className="min-w-40 text-right text-sm">
            <div className="font-semibold text-accent-fg">{pct}% hoàn thành</div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="bar h-full bg-accent" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
      </div>

      <Tabs tabs={STEPS} value={tab} onChange={t => setTab(t)} />

      {tab === 'map' && <Overview day={day} onGo={setTab} />}
      {tab === 'learn' && <Learn day={day} anchor={anchor} />}
      {tab === 'board' && <Boards day={day} />}
      {tab === 'cards' && <Cards day={day} />}
      {tab === 'test' && <Tests day={day} onQuiz={setQuiz} />}

      <div className="flex items-center justify-between gap-2 pt-4 text-sm">
        {(() => { const k = STEPS.findIndex(s => s[0] === tab); const n = STEPS[k + 1]; return n
          ? <button onClick={() => setTab(n[0])} className="tile shadow rounded-lg bg-accent px-4 py-2 font-bold text-white">Bước tiếp: {n[1]} →</button>
          : <span />
        })()}
        <div className="flex gap-2">
          {prev && CONTENT[prev.day] && <Link to={`/hsk21/${prev.day}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">← Ngày {prev.day}</Link>}
          {next && (CONTENT[next.day]
            ? <Link to={`/hsk21/${next.day}`} className="tile rounded-lg border bg-surface px-3 py-2 hover:bg-accent-soft">Ngày {next.day} →</Link>
            : <span className="rounded-lg border border-dashed px-3 py-2 text-slate-500">Ngày {next.day}: sắp có</span>)}
        </div>
      </div>
    </div>
  )
}

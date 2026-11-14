import { bookLabel } from '../data/books'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { findTopic, sampleNote, topicsOf, type Topic } from '../data/selfExplain'
import type { Lesson } from '../data/types'
import { hintFor, loadLesson, loadStuck, saveContent, saveRating, type Rating, type Saved } from '../lib/selfExplain'
import { speak } from '../lib/tts'

/** Đủ để mở đáp án mẫu: đã viết ít nhất một câu (khoảng 4 từ trở lên). */
const wroteEnough = (text: string) => text.trim().split(/\s+/).filter(Boolean).length >= 4

export function ExplainTab({ book, lesson }: { book: number; lesson: Lesson }) {
  const lessonKey = `${book}-${lesson.id}`
  const topics = topicsOf(book, lesson.id)
  const qc = useQueryClient()
  const { data: saved, error } = useQuery({ queryKey: ['explain', lessonKey], queryFn: () => loadLesson(lessonKey) })

  const refresh = () => {
    qc.invalidateQueries({ queryKey: ['explain', lessonKey] })
    qc.invalidateQueries({ queryKey: ['explain-stuck'] })
  }
  const content = useMutation({ mutationFn: (v: { id: string; text: string }) => saveContent(lessonKey, v.id, v.text), onSuccess: refresh })
  const rate = useMutation({ mutationFn: (v: { id: string; rating: Rating; text: string }) => saveRating(lessonKey, v.id, v.rating, v.text), onSuccess: refresh })

  if (!topics.length) return <p className="text-slate-500">Bài này chưa có chủ đề tự giải thích.</p>

  return (
    <section className="page-in space-y-4 pt-1">
      <h2 className="rule pt-3 text-xl font-extrabold">Tự giải thích</h2>
      <p className="max-w-xl text-slate-500">Viết lại điểm chính bằng lời của bạn, như đang giải thích cho một người bạn chưa học bài này. Chỗ nào viết không ra là chỗ chưa hiểu.</p>
      {error && <p className="rounded-lg border-l-4 border-gold bg-amber-50 p-3 text-sm">Không tải được bài đã lưu: {(error as Error).message}. {hintFor((error as Error).message)}</p>}
      {topics.map((t, i) => (
        <TopicCard
          key={t.id}
          n={i + 1}
          topic={t}
          lesson={lesson}
          saved={saved?.find(s => s.topic_id === t.id)}
          loaded={saved !== undefined}
          saving={content.isPending || rate.isPending}
          onSaveText={text => content.mutate({ id: t.id, text })}
          onRate={(rating, text) => rate.mutate({ id: t.id, rating, text })}
          failed={content.isError || rate.isError ? ((content.error ?? rate.error) as Error).message : ''}
        />
      ))}
    </section>
  )
}

function TopicCard({ n, topic, lesson, saved, loaded, saving, failed, onSaveText, onRate }: {
  n: number; topic: Topic; lesson: Lesson; saved?: Saved; loaded: boolean; saving: boolean; failed: string
  onSaveText: (text: string) => void; onRate: (r: Rating, text: string) => void
}) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const touched = useRef(false)
  // nạp bài đã lưu một lần, không ghi đè khi bạn đang gõ
  useEffect(() => {
    if (loaded && !touched.current) setText(saved?.content ?? '')
  }, [loaded, saved?.content])

  const ready = wroteEnough(text)
  const note = sampleNote(lesson, topic)
  const rating = saved?.rating ?? null
  const dirty = text !== (saved?.content ?? '')
  const btn = 'tile rounded-lg border px-4 py-2 text-sm font-semibold disabled:opacity-40'

  return (
    <article className="space-y-3 rounded-lg border bg-surface p-4">
      <h3 className="font-extrabold">{n}. {topic.prompt}</h3>
      <textarea
        rows={4}
        value={text}
        onChange={e => { touched.current = true; setText(e.target.value) }}
        onBlur={() => { if (dirty) onSaveText(text) }}
        placeholder="Viết lời giải thích của bạn ở đây…"
        className="w-full rounded border p-3"
        aria-label={topic.prompt}
      />
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" disabled={!ready} onClick={() => setOpen(o => !o)} className={`${btn} bg-surface`}>{open ? 'Ẩn đáp án mẫu' : 'Xem đáp án mẫu'}</button>
        <button type="button" onClick={() => onRate('fluent', text)} className={`${btn} ${rating === 'fluent' ? 'border-accent bg-accent text-white' : 'bg-surface'}`}>Tôi nói trôi chảy</button>
        <button type="button" onClick={() => onRate('stuck', text)} className={`${btn} ${rating === 'stuck' ? 'border-seal bg-seal text-white' : 'bg-surface'}`}>Tôi còn bí chỗ này</button>
        <span className="ml-auto text-xs text-slate-500" aria-live="polite">
          {failed ? 'Chưa lưu được' : saving ? 'Đang lưu…' : dirty ? 'Chưa lưu (bấm ra ngoài ô để lưu)' : text ? 'Đã lưu' : ''}
        </span>
      </div>
      {!ready && <p className="text-xs text-slate-500">Viết ít nhất một câu (khoảng 4 từ trở lên) để mở đáp án mẫu.</p>}
      {rating === 'stuck' && <p className="text-xs font-semibold text-seal">Đã đánh dấu để ôn lại ở trang Ôn tập.</p>}
      {failed && <p className="rounded-lg border-l-4 border-gold bg-amber-50 p-2 text-xs">{failed}. {hintFor(failed)}</p>}
      {open && (
        <div className="space-y-2 rounded-lg border-l-4 border-accent bg-accent-soft p-3 text-sm">
          <p className="font-bold">Đáp án mẫu · {note?.title ?? topic.note}</p>
          <p>{note?.body ?? 'Chưa có đáp án mẫu cho chủ đề này.'}</p>
          {note?.say && <button type="button" onClick={() => speak(note.say!, 0.7)} className="tile rounded-lg border bg-surface px-3 py-1 font-semibold">🔊 {note.say}</button>}
        </div>
      )}
    </article>
  )
}

/** Khu "Chỗ tôi còn bí" ở trang Ôn tập: các chủ đề đã đánh dấu bí. */
export function StuckTopics() {
  const { data, error, isLoading } = useQuery({ queryKey: ['explain-stuck'], queryFn: loadStuck })
  const rows = (data ?? []).map(r => ({ r, f: findTopic(r.lesson_key, r.topic_id) })).filter(x => x.f)

  return (
    <section className="mx-auto max-w-md space-y-2 pt-6 text-left">
      <h2 className="rule pt-3 text-lg font-extrabold">Chỗ tôi còn bí</h2>
      {isLoading && <p className="text-sm text-slate-500">Đang tải…</p>}
      {error && <p className="text-sm text-slate-500">Chưa tải được danh sách. {hintFor((error as Error).message)}</p>}
      {!isLoading && !error && rows.length === 0 && (
        <p className="text-sm text-slate-500">Chưa có chủ đề nào đánh dấu bí. Ở tab Tự giải thích của mỗi bài, bấm "Tôi còn bí chỗ này" để thêm vào đây.</p>
      )}
      <ul className="divide-y">
        {rows.map(({ r, f }) => (
          <li key={r.lesson_key + r.topic_id} className="flex items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <div className="font-semibold">{f!.topic.prompt}</div>
              <div className="text-xs text-slate-500">{bookLabel(f!.book)}, Bài {f!.lesson.id}: <span className="hz">{f!.lesson.hanzi}</span></div>
            </div>
            <Link to={`/books/${f!.book}/lessons/${f!.lesson.id}?tab=explain`} className="tile shrink-0 rounded-lg border bg-surface px-3 py-1.5 text-sm font-semibold hover:bg-accent-soft">Làm lại</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

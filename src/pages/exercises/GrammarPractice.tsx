/** Bài tập ngữ pháp theo chủ đề, dùng lại GrammarQuiz. */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import GrammarQuiz from '../../components/GrammarQuiz'
import { Header, Row } from '../../components/ExerciseKit'
import { primary } from '../../lib/exerciseStyles'
import { GRAMMAR, allExercises, type Exercise } from '../../data/grammar'
import { shuffle } from '../../lib/questions'

export default function GrammarPractice() {
  const [topic, setTopic] = useState('')
  const [type, setType] = useState<'mixed' | Exercise['type']>('mixed')
  const [items, setItems] = useState<Exercise[] | null>(null)
  const inTopic: Exercise[] = topic ? GRAMMAR.find(t => t.id === topic)!.exercises : allExercises()
  const n = (t: Exercise['type']) => inTopic.filter(e => e.type === t).length
  const chosen = type !== 'mixed' && !n(type) ? 'mixed' : type
  const pool = inTopic.filter(e => chosen === 'mixed' || e.type === chosen)

  if (items) return <GrammarQuiz items={items} onExit={() => setItems(null)} />
  return (
    <div className="space-y-5">
      <Header title="Ngữ pháp" desc="Mỗi lượt tối đa 10 câu, chấm ngay và có giải thích. Nội dung theo tài liệu ngữ pháp HSK 1." />
      <Row label="Chủ đề" value={topic} onChange={setTopic} options={[['', 'Tất cả'] as const, ...GRAMMAR.map(t => [t.id, `${t.no}. ${t.title}`] as const)]} />
      <Row label="Dạng bài" value={chosen} onChange={setType} disabled={v => v !== 'mixed' && !n(v)}
        options={[['mixed', 'Hỗn hợp'], ['choice', `Chọn đáp án (${n('choice')})`], ['order', `Sắp xếp câu (${n('order')})`]]} />
      <button className={primary + ' w-full text-lg'} disabled={!pool.length} onClick={() => setItems(shuffle(pool).slice(0, 10))}>Bắt đầu</button>
      <p className="text-sm text-slate-500">Muốn xem lại lý thuyết? <Link className="text-accent-fg underline" to="/grammar">Mở trang Ngữ pháp</Link></p>
    </div>
  )
}

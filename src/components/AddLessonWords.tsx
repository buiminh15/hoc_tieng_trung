import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { allVocab } from '../data/lessons'
import { addVocabToDeck } from '../lib/srs'

/** Nút thêm từ mới của các bài đã học vào bộ ôn tập, dùng ở các trang đang trống. */
export default function AddLessonWords() {
  const qc = useQueryClient()
  const [msg, setMsg] = useState('')
  const vocab = allVocab()
  async function add() {
    setMsg('Đang thêm…')
    try {
      const n = await addVocabToDeck(vocab)
      setMsg(`✅ Đã thêm ${n} từ.`)
      qc.invalidateQueries()
    } catch (e) { setMsg('Lỗi: ' + (e as Error).message) }
  }
  return (
    <div className="space-y-2">
      <button className="tile shadow rounded-lg bg-accent px-4 py-2 font-bold text-white" onClick={add}>＋ Thêm {vocab.length} từ mới của các bài đã học</button>
      {msg && <p className="text-sm">{msg}</p>}
    </div>
  )
}

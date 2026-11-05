import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { pinyin } from 'pinyin-pro'
import { supabase, type Word } from '../lib/supabase'
import { createCardFor } from '../lib/srs'
import { speak } from '../lib/tts'
import AddLessonWords from '../components/AddLessonWords'

const empty = { hanzi: '', pinyin: '', meaning: '', han_viet: '', hsk_level: '', example: '' }

export default function Words() {
  const qc = useQueryClient()
  const [f, setF] = useState(empty)
  const { data: words = [] } = useQuery({
    queryKey: ['words'],
    queryFn: async () => {
      const { data, error } = await supabase.from('words').select('*').order('created_at', { ascending: false })
      if (error) throw error
      return data as Word[]
    },
  })
  const add = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.from('words').insert({
        hanzi: f.hanzi,
        pinyin: f.pinyin || pinyin(f.hanzi),
        meaning: f.meaning,
        han_viet: f.han_viet || null,
        hsk_level: f.hsk_level ? +f.hsk_level : null,
        example: f.example || null,
      }).select().single()
      if (error) throw error
      await createCardFor(data.id)
    },
    onSuccess: () => {
      setF(empty)
      qc.invalidateQueries({ queryKey: ['words'] })
      qc.invalidateQueries({ queryKey: ['due'] })
    },
    onError: (e) => alert(e.message),
  })
  const del = useMutation({
    mutationFn: async (id: string) => { await supabase.from('words').delete().eq('id', id) },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['words'] }),
  })
  const input = (k: keyof typeof f, ph: string) => (
    <input className="rounded border p-2" placeholder={ph} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} />
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Từ vựng</h1>
        <p className="mt-1 text-slate-500">Sổ từ của bạn. Mỗi từ thêm vào đều có thẻ ôn tập riêng.</p>
      </div>
      <form className="space-y-3" onSubmit={e => { e.preventDefault(); add.mutate() }}>
        <h2 className="rule pt-3 text-lg font-extrabold">Thêm từ mới</h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {input('hanzi', 'Hán tự *')}
          <input className="rounded border p-2" placeholder={`Pinyin (tự động: ${f.hanzi ? pinyin(f.hanzi) : ''})`} value={f.pinyin} onChange={e => setF({ ...f, pinyin: e.target.value })} />
          {input('meaning', 'Nghĩa *')}
          {input('han_viet', 'Hán Việt')}
          {input('hsk_level', 'HSK (1-9)')}
          {input('example', 'Ví dụ')}
        </div>
        <button className="tile shadow rounded-lg bg-accent px-5 py-2 font-bold text-white disabled:opacity-50" disabled={!f.hanzi || !f.meaning}>Thêm từ</button>
      </form>
      <section>
        <h2 className="rule pb-1 pt-3 text-lg font-extrabold">Danh sách <span className="text-sm font-normal text-slate-500">({words.length})</span></h2>
        <ul className="divide-y">
          {words.map(w => (
            <li key={w.id} className="group flex items-center gap-3 py-3">
              <button onClick={() => speak(w.hanzi)} aria-label="Nghe" className="grid size-9 place-items-center rounded-full text-lg hover:bg-accent-soft">🔊</button>
              <span className="hz w-24 text-3xl font-bold">{w.hanzi}</span>
              <span className="py w-28 font-semibold text-accent-fg">{w.pinyin}</span>
              <span className="flex-1">{w.meaning}{w.han_viet && <i className="text-slate-500"> ({w.han_viet})</i>}</span>
              {w.hsk_level && <span className="rounded-full bg-gold/25 px-2.5 py-0.5 text-xs font-bold">HSK {w.hsk_level}</span>}
              <button aria-label="Xoá" className="px-2 text-slate-400 opacity-0 transition-opacity hover:text-seal focus:opacity-100 group-hover:opacity-100" onClick={() => confirm('Xoá?') && del.mutate(w.id)}>✕</button>
            </li>
          ))}
          {!words.length && (
            <li className="space-y-3 py-10 text-center text-slate-500">
              <p>Chưa có từ nào. Thêm từ ở form trên, hoặc lấy từ trong bài học.</p>
              <div className="flex justify-center"><AddLessonWords /></div>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

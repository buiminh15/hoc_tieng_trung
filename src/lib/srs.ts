import { createEmptyCard, fsrs, Rating, type Card, type Grade } from 'ts-fsrs'
import { supabase } from './supabase'

const scheduler = fsrs()
export { Rating }

function revive(raw: Record<string, unknown>): Card {
  return {
    ...raw,
    due: new Date(raw.due as string),
    last_review: raw.last_review ? new Date(raw.last_review as string) : undefined,
  } as Card
}

export async function createCardFor(wordId: string) {
  const card = createEmptyCard()
  await supabase.from('cards').upsert({ word_id: wordId, due: card.due, fsrs: card })
}

/** Thêm danh sách từ vào bộ từ vựng + tạo thẻ ôn (bỏ qua từ đã có). Trả về số từ mới. */
export async function addVocabToDeck(list: { hanzi: string; pinyin: string; meaning: string; han_viet: string; hsk?: number }[]) {
  const { data: words, error } = await supabase.from('words').upsert(
    list.map(v => ({ hanzi: v.hanzi, pinyin: v.pinyin, meaning: v.meaning, han_viet: v.han_viet || null, hsk_level: v.hsk ?? 1, tags: ['lesson'] })),
    { onConflict: 'user_id,hanzi', ignoreDuplicates: true },
  ).select('id')
  if (error) throw error
  const created = words ?? []
  const empty = createEmptyCard()
  if (created.length) {
    const { error: e2 } = await supabase.from('cards').upsert(
      created.map(w => ({ word_id: w.id, due: empty.due, fsrs: empty })),
      { onConflict: 'word_id', ignoreDuplicates: true },
    )
    if (e2) throw e2
  }
  return created.length
}

export async function review(wordId: string, raw: Record<string, unknown>, rating: Grade) {
  const { card } = scheduler.next(revive(raw), new Date(), rating)
  await supabase.from('cards').update({ due: card.due, fsrs: card, updated_at: new Date() }).eq('word_id', wordId)
  await supabase.from('review_logs').insert({ word_id: wordId, rating })
}

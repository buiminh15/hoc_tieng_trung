import { supabase } from './supabase'

export type Rating = 'fluent' | 'stuck'
export interface Saved { topic_id: string; content: string; rating: Rating | null }

const KEY = 'user_id,lesson_key,topic_id'

/** Gợi ý theo loại lỗi Supabase trả về. */
export function hintFor(message: string): string {
  if (/row-level security/i.test(message)) return 'Chưa có phiên đăng nhập hợp lệ. Hãy đăng nhập lại rồi thử lại.'
  if (/relation|does not exist|schema cache/i.test(message)) return 'Có vẻ bảng chưa được tạo. Chạy file supabase/self_explain.sql trong Supabase (SQL Editor).'
  return ''
}

/** Id người dùng hiện tại; chưa đăng nhập thì báo lỗi. */
async function userId(): Promise<string> {
  const { data } = await supabase.auth.getSession()
  if (!data.session?.user) throw new Error('Chưa đăng nhập')
  return data.session.user.id
}

/** Bài viết và đánh giá đã lưu của một bài. */
export async function loadLesson(lessonKey: string): Promise<Saved[]> {
  const { data, error } = await supabase.from('self_explanations').select('topic_id, content, rating').eq('lesson_key', lessonKey)
  if (error) throw error
  return (data ?? []) as Saved[]
}

/** Lưu lời giải thích. Không đụng tới đánh giá đã có. */
export async function saveContent(lessonKey: string, topicId: string, content: string) {
  const { error } = await supabase.from('self_explanations').upsert(
    { user_id: await userId(), lesson_key: lessonKey, topic_id: topicId, content, updated_at: new Date().toISOString() },
    { onConflict: KEY },
  )
  if (error) throw error
}

/** Lưu đánh giá cùng lời giải thích hiện tại. */
export async function saveRating(lessonKey: string, topicId: string, rating: Rating, content: string) {
  const { error } = await supabase.from('self_explanations').upsert(
    { user_id: await userId(), lesson_key: lessonKey, topic_id: topicId, content, rating, updated_at: new Date().toISOString() },
    { onConflict: KEY },
  )
  if (error) throw error
}

/** Các chủ đề đã đánh dấu "còn bí", mới nhất trước. */
export async function loadStuck(): Promise<{ lesson_key: string; topic_id: string }[]> {
  const { data, error } = await supabase.from('self_explanations').select('lesson_key, topic_id').eq('rating', 'stuck').order('updated_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

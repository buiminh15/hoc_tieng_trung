import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
)

export interface Word {
  id: string
  hanzi: string
  pinyin: string
  meaning: string
  han_viet: string | null
  hsk_level: number | null
  example: string | null
}

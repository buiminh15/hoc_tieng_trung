export interface Vocab {
  hanzi: string
  pinyin: string
  pos: string
  meaning: string
  han_viet: string
}

export interface Sound { s: string; tip: string; aspirated?: boolean; say?: string }

export type PhonSection =
  | { kind: 'sounds'; label: string; title: string; list: Sound[]; note?: string }
  | { kind: 'chart'; label: string; title: string; cols: string[]; rows: Record<string, string[]>; note?: string }
  | { kind: 'tones'; label: string }
  | { kind: 'examples'; label: string; title: string; intro: string; groups: { label: string; items: [string, string, string][] }[] }

/** Mục đọc luyện: bấm để nghe. Có h (chữ Hán) thì đọc chữ Hán, không thì đọc âm tiết syl. */
export interface DrillItem { h?: string; p: string; m?: string; syl?: string }
export interface Drill { title: string; hint?: string; items: DrillItem[] }

export interface QA { title: string; items: { q: string; hint: string }[] }

/** Câu mẫu để ra đề: parts là các thành phần khi sắp xếp câu. */
export interface Sentence { parts: string[]; pinyin: string; vi: string }

export interface Note { title: string; body: string; say?: string }

export interface LessonCore {
  id: number
  title: string
  hanzi: string
  pinyin: string
  vi: string
  dialogue: { who: string; hanzi: string; pinyin: string; vi: string; scene?: string; name?: string; split?: boolean }[]
  vocab: Vocab[]
}

export interface Lesson extends LessonCore {
  intro: string
  sections: PhonSection[]
  notes: Note[]
  writeChars: string[]
  drills: Drill[]
  qa?: QA[]
  sentences?: Sentence[]
  dialogueTip?: string
  slowSay?: string
}

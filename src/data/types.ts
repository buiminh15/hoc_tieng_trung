export interface Vocab {
  hanzi: string
  pinyin: string
  pos: string
  meaning: string
  han_viet: string
  /** Cấu tạo chữ (bộ thủ), lấy từ bài giảng PowerPoint */
  parts?: string
}

export interface Sound { s: string; tip: string; aspirated?: boolean; say?: string; /** Mô tả kỹ thuật (vị trí, cách phát âm) */ tech?: string; /** File ghi âm giọng thật */ audio?: string }

export interface StrokeRule { title: string; body: string; example: string; img: string }

/** Đoạn ghi âm giọng thật kèm nhãn, hiện thành trình phát ở đầu mục. */
export interface Clip { label: string; src: string }

export type PhonSection =
  | { kind: 'sounds'; label: string; title: string; list: Sound[]; note?: string; clip?: Clip }
  | { kind: 'chart'; label: string; title: string; cols: string[]; rows: Record<string, string[]>; note?: string; clip?: Clip }
  | { kind: 'tones'; label: string; clip?: Clip }
  | { kind: 'examples'; label: string; title: string; intro: string; groups: { label: string; items: [string, string, string][] }[]; clip?: Clip }

/** Mục đọc luyện: bấm để nghe. Có h (chữ Hán) thì đọc chữ Hán, không thì đọc âm tiết syl. */
export interface DrillItem { h?: string; p: string; m?: string; syl?: string }
export interface Drill { title: string; hint?: string; items: DrillItem[]; clip?: Clip }

/** Bài nghe chép (sách bài tập): nghe file, điền phần còn thiếu, chấm ngay. `accept` là các cách viết khác cũng được tính đúng. */
export interface Dictation {
  title: string
  hint: string
  clip: Clip
  /** true: chỉ chấp nhận khi có thanh điệu (gõ dấu hoặc gõ số 1-4) */
  needTone?: boolean
  items: { prompt: string; answer: string; accept?: string[]; gloss?: string }[]
}

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
  /** Quy tắc viết chữ Hán (hiện ở tab Tập viết) */
  strokeRules?: StrokeRule[]
  strokesImg?: string
  /** File ghi âm đọc cả bài khóa (giọng thật) */
  dialogueAudio?: string
  /** Nhiều đoạn ghi âm cho bài khóa gồm nhiều hội thoại nhỏ */
  dialogueClips?: Clip[]
  /** Bài nghe chép lấy từ sách bài tập */
  dictations?: Dictation[]
}

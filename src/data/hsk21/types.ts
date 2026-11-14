/**
 * Kiểu dữ liệu cho sách "21 ngày chinh phục ngữ pháp HSK cao cấp" (21天征服新HSK高级语法, 郑丽杰, 外研社).
 * Mỗi ngày có 4 phần theo đúng sách: xem trước (课前预习参考) → kiểm tra điểm kiến thức (知识点测试)
 * → bảng ghi nhớ của thầy (学习要点) → đề mô phỏng HSK (新HSK仿真试题).
 *
 * Quy ước đánh dấu trong câu ví dụ: phần nằm trong [ ] là phần cần chú ý (bổ ngữ, từ phủ định…), app sẽ tô đậm.
 * Quy ước công thức: phần trong 〈 〉 là vai trò ngữ pháp (〈动〉, 〈宾〉…), app vẽ thành ô tròn.
 */

export interface Ex { h: string; p?: string; vi: string; note?: string; tag?: string }

/** Sơ đồ hướng đi (người nói ở đâu, động tác đi về đâu) cho các bổ ngữ xu hướng. */
export type GlyphKey = 'shangLai' | 'shangQu' | 'xiaLai' | 'xiaQu' | 'chuLai' | 'chuQu' | 'guoLai' | 'guoQu' | 'qiLai'

/** Một mẫu câu: công thức + giải thích + ví dụ. `verbs` là các động từ thường đi kèm, hiện thành thẻ nhỏ. */
export interface Pattern { formula: string; title?: string; note: string; examples: Ex[]; verbs?: string[] }
export interface Group { title?: string; glyph?: GlyphKey; patterns: Pattern[] }

/** Một điểm ngữ pháp lớn trong ngày (vd: bổ ngữ kết quả). */
export interface Section {
  id: string
  hanzi: string
  pinyin: string
  title: string
  intro: string
  table?: { head: string[]; rows: string[][] }
  groups: Group[]
}

/** Câu sai → câu đúng. `ref` trỏ về câu kiểm tra tương ứng trong sách, vd "Kiểm tra 1 · A". */
export interface Fix { wrong: string; right: string; why?: string; ref?: string }
export interface Point { text: string; examples?: Ex[]; fixes?: Fix[] }
export interface BoardRow { label: string; formulas?: string[]; text?: string; examples?: Ex[]; points?: Point[]; ps?: string }
/** Bảng ghi nhớ (板书) của một điểm ngữ pháp. */
export interface Board { id: string; hanzi: string; title: string; glyph?: GlyphKey; rows: BoardRow[] }

/**
 * Câu hỏi tìm lỗi.
 * - segment: một câu dài chia 4 đoạn A–D, chọn đoạn sai (知识点测试).
 * - sentence: 4 câu A–D, chọn câu có lỗi ngữ pháp (新HSK仿真试题, dạng đọc hiểu phần 1 HSK 6).
 */
export interface ErrQ { kind: 'segment' | 'sentence'; parts: string[]; answer: number; why: string; fix: string; topic: string }

export type Role = '定' | '主' | '状' | '谓' | '补' | '宾'
export interface AnatomyRow { label: string; chunks: [string, Role][] }

/** Bảng tra nhanh trên trang Tổng quan: mỗi hàng một tổ hợp, cột đầu có thể kèm sơ đồ. */
export interface Cheat { title: string; lead: string; head: string[]; rows: { key: string; glyph?: GlyphKey; cells: string[] }[] }

export interface DayContent {
  intro: string
  /** Tiêu đề khối "các điểm ngữ pháp hôm nay" (mặc định: "Các điểm ngữ pháp hôm nay") */
  focusTitle?: string
  anatomyTitle?: string
  anatomyLead?: string
  anatomy?: AnatomyRow[]
  cheat?: Cheat
  /** Thêm các bảng tra nhanh khác (hiện sau `cheat`). */
  cheatMore?: Cheat[]
  sections: Section[]
  boards: Board[]
  test: ErrQ[]
  exam: ErrQ[]
}

export interface DayMeta { day: number; week: number; weekday: string; hanzi: string; title: string; topics: string[]; pages: string }

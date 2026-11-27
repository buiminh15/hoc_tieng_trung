/** Sinh dữ liệu cho tab Bài tập (các dạng bài mô tả trong bai_tap.md, chuyển sang tiếng Trung). */
import { shuffle, scopeFor, type Scope } from './questions'
import { keysOf } from './scope'
import type { Vocab } from '../data/types'

export const scopeOf = (s: string): Scope => scopeFor(keysOf(s))

const uniq = <T,>(a: T[]) => [...new Set(a)]
const uniqBy = <T,>(a: T[], key: (x: T) => string) => { const seen = new Set<string>(); return a.filter(x => (seen.has(key(x)) ? false : (seen.add(key(x)), true))) }
const flatPy = (p: string) => p.toLowerCase().replace(/[\s'’]+/g, '')
/** Bỏ chú thích trong ngoặc, vd "xuéxí (xué)" -> "xuéxí", để đáp án không bị lộ. */
const cleanPy = (p: string) => p.replace(/\s*[(（][^)）]*[)）]/g, '').trim()
const isHan = (s: string) => /^[一-鿿]+$/.test(s)
const noPunct = (s: string) => s.replace(/\p{P}/gu, '')

const segmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl ? new Intl.Segmenter('zh-CN', { granularity: 'word' }) : null
const segment = (s: string) => (segmenter ? [...segmenter.segment(s)].map(x => x.segment).filter(x => x.trim()) : [])

export interface Sent { text: string; vi: string; pinyin: string; parts?: string[] }
/** Câu ví dụ: câu mẫu của bài + các câu trong bài khoá. */
export function sentencesOf({ lessons }: Scope): Sent[] {
  return uniqBy(lessons.flatMap(l => [
    ...(l.sentences ?? []).map((s): Sent => ({ text: s.parts.join(''), vi: s.vi, pinyin: s.pinyin, parts: s.parts })),
    ...l.dialogue.map((d): Sent => ({ text: d.hanzi, vi: d.vi, pinyin: d.pinyin })),
  ]), s => noPunct(s.text))
}

/* ---------- Trắc nghiệm (Từ vựng, Chữ Hán) ---------- */

export type QuizKind = 'meaning' | 'reading' | 'blank' | 'compound' | 'hanviet'

export const QUIZ_LABEL: Record<QuizKind, string> = {
  meaning: 'Chọn nghĩa', reading: 'Chọn cách đọc', blank: 'Điền chỗ trống', compound: 'Ghép từ', hanviet: 'Chọn chữ theo Hán Việt',
}

export interface QuizQ {
  kind: QuizKind
  prompt: string
  sub?: string
  options: string[]
  answer: string
  vocab: Vocab
  explain: string
  say: string
}

/** Chọn 3 đáp án nhiễu khác nhau và khác đáp án đúng. Thiếu thì trả null. */
function withDistractors(answer: string, pool: string[]): string[] | null {
  const wrong = shuffle(uniq(pool.filter(x => x && x !== answer))).slice(0, 3)
  return wrong.length === 3 ? shuffle([answer, ...wrong]) : null
}

export interface Cloze { vocab: Vocab; sentence: Sent; blanked: string; options: string[] }

/** Che một từ vựng trong câu ví dụ. Từ phải là một đơn vị tách được (hoặc dài từ 2 chữ). */
export function clozeItems(scope: Scope): Cloze[] {
  const words = scope.words.filter(w => isHan(w.hanzi))
  const used = new Set<string>()
  const out: Cloze[] = []
  for (const s of shuffle(sentencesOf(scope))) {
    const hits = words.filter(w => !used.has(w.hanzi) && noPunct(s.text) !== w.hanzi && s.text.split(w.hanzi).length === 2)
    if (!hits.length) continue
    const tokens = new Set([...segment(s.text), ...(s.parts ?? [])])
    const w = shuffle(hits.filter(x => tokens.has(x.hanzi) || x.hanzi.length > 1))[0]
    if (!w) continue
    // đáp án nhiễu: ưu tiên cùng từ loại, không nằm sẵn trong câu
    const others = shuffle(scope.words.filter(x => x.hanzi !== w.hanzi && x.meaning !== w.meaning && !s.text.includes(x.hanzi)))
    const wrong = uniq([...others.filter(x => x.pos === w.pos), ...others].map(x => x.hanzi)).slice(0, 3)
    if (wrong.length < 3) continue
    used.add(w.hanzi)
    out.push({ vocab: w, sentence: s, blanked: s.text.replace(w.hanzi, '＿＿'), options: shuffle([w.hanzi, ...wrong]) })
  }
  return out
}

export function quizOf(kind: QuizKind, scope: Scope): QuizQ[] {
  const words = shuffle(scope.words)
  const info = (w: Vocab) => `${w.hanzi} ${w.pinyin} – ${w.meaning}`
  const out: QuizQ[] = []
  const push = (w: Vocab, prompt: string, answer: string, pool: string[], sub?: string, explain = info(w)) => {
    const options = withDistractors(answer, pool)
    if (options) out.push({ kind, prompt, sub, answer, options, vocab: w, explain, say: w.hanzi })
  }

  if (kind === 'meaning') {
    const pool = words.map(w => w.meaning)
    for (const w of words) push(w, w.hanzi, w.meaning, pool)
  } else if (kind === 'reading') {
    const byLen = new Map<number, Vocab[]>()
    for (const w of words) {
      const n = [...w.hanzi].length
      if (!byLen.has(n)) byLen.set(n, [])
      byLen.get(n)!.push(w)
    }
    for (const w of words) push(w, w.hanzi, cleanPy(w.pinyin), byLen.get([...w.hanzi].length)!.map(x => cleanPy(x.pinyin)).filter(p => flatPy(p) !== flatPy(cleanPy(w.pinyin))), 'Chọn pinyin đúng')
  } else if (kind === 'blank') {
    for (const c of clozeItems(scope)) out.push({ kind, prompt: c.blanked, sub: c.sentence.vi, options: c.options, answer: c.vocab.hanzi, vocab: c.vocab, explain: `${info(c.vocab)} · ${c.sentence.text} ${c.sentence.pinyin}`, say: c.sentence.text })
  } else if (kind === 'compound') {
    const known = new Set(scopeFor([]).words.map(w => w.hanzi))
    const chars = uniq(words.flatMap(w => (isHan(w.hanzi) ? [...w.hanzi] : [])))
    for (const w of words) {
      const cs = [...w.hanzi]
      if (!isHan(w.hanzi) || cs.length < 2 || cs.length > 3) continue
      const i = Math.floor(Math.random() * cs.length)
      const fill = (c: string) => cs.map((x, k) => (k === i ? c : x)).join('')
      // bỏ đáp án nhiễu cũng tạo ra một từ có trong giáo trình
      push(w, fill('□'), cs[i], chars.filter(c => !cs.includes(c) && !known.has(fill(c))), w.meaning)
    }
  } else {
    const chars = words.filter(w => [...w.hanzi].length === 1 && w.han_viet)
    for (const w of chars) push(w, w.han_viet, w.hanzi, chars.filter(x => x.han_viet.toLowerCase() !== w.han_viet.toLowerCase()).map(x => x.hanzi), `Chọn chữ Hán · ${w.meaning}`, `${info(w)}${w.parts ? ` · ${w.parts}` : ''}`)
  }
  return out
}

/** Trộn nhiều dạng, mỗi từ chỉ xuất hiện một lần. */
export function mixedQuiz(kinds: QuizKind[], scope: Scope, count: number): QuizQ[] {
  const lists = kinds.map(k => quizOf(k, scope))
  const used = new Set<string>()
  const out: QuizQ[] = []
  let moved = true
  while (out.length < count && moved) {
    moved = false
    for (const list of lists) {
      if (out.length >= count) break
      let q = list.shift()
      while (q && used.has(q.vocab.hanzi)) q = list.shift()
      if (q) { used.add(q.vocab.hanzi); out.push(q); moved = true }
    }
  }
  return shuffle(out)
}

/* ---------- Các trò chơi dùng cặp (Nối cặp, Đúng/Sai, Nhớ chuỗi, Lật thẻ) ---------- */

export type Source = 'vocab' | 'hanzi'
export type PairKind = 'pinyin' | 'meaning' | 'hanviet' | 'mixed'
export interface Pair { left: string; right: string; vocab: Vocab }

export const PAIR_KINDS: Record<Source, [PairKind, string][]> = {
  vocab: [['pinyin', 'Chữ Hán ↔ pinyin'], ['meaning', 'Từ ↔ nghĩa Việt'], ['mixed', 'Trộn cả hai']],
  hanzi: [['hanviet', 'Chữ ↔ Hán Việt'], ['pinyin', 'Chữ ↔ pinyin'], ['mixed', 'Trộn cả hai']],
}

/** Bộ cặp đã xáo; hai vế không trùng nhau giữa các cặp nên đáp án luôn duy nhất. */
export function pairsOf(source: Source, kind: PairKind, scope: Scope): Pair[] {
  const base: PairKind = source === 'hanzi' ? 'hanviet' : 'meaning'
  const words = source === 'hanzi' ? scope.words.filter(w => [...w.hanzi].length === 1) : scope.words
  const seen = new Set<string>()
  const out: Pair[] = []
  for (const w of shuffle(words)) {
    const k = kind === 'mixed' ? (Math.random() < 0.5 ? 'pinyin' : base) : kind
    const right = k === 'pinyin' ? cleanPy(w.pinyin) : k === 'hanviet' ? w.han_viet : w.meaning
    const key = k === 'pinyin' ? flatPy(right) : right.toLowerCase()
    if (!right || seen.has(key)) continue
    seen.add(key)
    out.push({ left: w.hanzi, right, vocab: w })
  }
  return out
}

/* ---------- Sắp xếp câu ---------- */

export interface SortItem { parts: string[]; text: string; vi: string; pinyin: string; vocab: Vocab[] }

/** Câu chia được thành 3–7 cụm không trùng nhau. */
export function sortItems(scope: Scope): SortItem[] {
  const out: SortItem[] = []
  for (const s of sentencesOf(scope)) {
    const parts = s.parts && s.parts.length >= 3 ? s.parts.map(noPunct).filter(Boolean) : segment(noPunct(s.text))
    if (parts.length < 3 || parts.length > 7 || new Set(parts).size !== parts.length) continue
    out.push({ parts, text: s.text, vi: s.vi, pinyin: s.pinyin, vocab: scope.words.filter(w => parts.includes(w.hanzi)) })
  }
  return shuffle(out)
}

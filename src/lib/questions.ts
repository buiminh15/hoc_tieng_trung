import { toneExamples, tones } from '../data/lesson1'
import { allLessons } from '../data/lessons'
import type { Lesson, Vocab } from '../data/types'

export type Mode = 'listen' | 'meaning' | 'reverse' | 'tone' | 'type' | 'order' | 'dialog' | 'sentence'

export const MODE_INFO: Record<Mode, { title: string; desc: string; short: string }> = {
  listen: { title: '🎧 Nghe – chọn chữ Hán', desc: 'Nghe phát âm, chọn đúng chữ Hán.', short: 'Nghe – chữ Hán' },
  meaning: { title: '📖 Chữ Hán – chọn nghĩa', desc: 'Nhìn chữ Hán, chọn nghĩa tiếng Việt.', short: 'Chữ Hán – nghĩa' },
  reverse: { title: '🔁 Nghĩa – chọn chữ Hán', desc: 'Đọc nghĩa tiếng Việt, chọn đúng chữ Hán.', short: 'Nghĩa – chữ Hán' },
  tone: { title: '🎵 Nghe – chọn thanh điệu', desc: 'Nghe 1 âm tiết, chọn thanh 1/2/3/4.', short: 'Thanh điệu' },
  type: { title: '⌨️ Gõ pinyin', desc: 'Gõ pinyin (có dấu hoặc số: ni3 hao3).', short: 'Gõ pinyin' },
  order: { title: '🧩 Sắp xếp câu', desc: 'Sắp các từ thành câu đúng theo nghĩa tiếng Việt.', short: 'Sắp xếp câu' },
  dialog: { title: '💬 Điền hội thoại', desc: 'Chọn câu còn thiếu để hoàn thành đoạn hội thoại.', short: 'Hội thoại' },
  sentence: { title: '👂 Nghe câu – chọn nghĩa', desc: 'Nghe cả câu và chọn nghĩa tiếng Việt đúng.', short: 'Nghe câu' },
}
export const MODES = Object.keys(MODE_INFO) as Mode[]

export interface Q {
  type: Mode
  prompt: string
  speakText?: string
  sub?: string
  options?: string[]
  /** Dạng sắp xếp câu: các mảnh đã xáo trộn. Giá trị trả lời là chuỗi chỉ số "2|0|1". */
  tokens?: string[]
  answer: string
  check?: (v: string) => boolean
  reveal?: string
  vocab?: Vocab
}

export const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)
const uniqBy = <T,>(a: T[], key: (x: T) => string) => { const seen = new Set<string>(); return a.filter(x => (seen.has(key(x)) ? false : (seen.add(key(x)), true))) }

export const toneOf = (s: string) => {
  const n = s.normalize('NFD')
  if (n.includes('̄')) return 1
  if (n.includes('́')) return 2
  if (n.includes('̌')) return 3
  if (n.includes('̀')) return 4
  return 0
}

// "ni3 hao3" | "nǐ hǎo" -> "nǐhǎo" chuẩn hoá để so sánh
const NUM: Record<string, string[]> = { a: ['ā', 'á', 'ǎ', 'à'], e: ['ē', 'é', 'ě', 'è'], i: ['ī', 'í', 'ǐ', 'ì'], o: ['ō', 'ó', 'ǒ', 'ò'], u: ['ū', 'ú', 'ǔ', 'ù'], ü: ['ǖ', 'ǘ', 'ǚ', 'ǜ'] }
export function normalize(inp: string) {
  return inp.trim().toLowerCase().replace(/v/g, 'ü').replace(/([a-zü]+)([1-4])/g, (_m, base: string, t: string) => {
    const pos = base.includes('a') ? base.indexOf('a') : base.includes('e') ? base.indexOf('e') : base.includes('ou') ? base.indexOf('o') : [...base].findLastIndex(c => 'aeiouü'.includes(c))
    return base.slice(0, pos) + NUM[base[pos]][+t - 1] + base.slice(pos + 1)
  }).replace(/[\s'’]+/g, '')
}
const flat = (p: string) => p.toLowerCase().replace(/[\s'’]+/g, '')

/** Phạm vi ra đề: từ vựng + các bài được chọn. keys dạng "quyển-bài"; rỗng = tất cả bài đã soạn. */
export interface Scope { words: Vocab[]; lessons: Lesson[] }
export function scopeFor(keys: string[]): Scope {
  const ls = (keys.length ? allLessons.filter(x => keys.includes(`${x.book}-${x.lesson.id}`)) : allLessons).map(x => x.lesson)
  return { lessons: ls, words: uniqBy(ls.flatMap(l => l.vocab), v => v.hanzi) }
}

const sentenceText = (parts: string[]) => parts.join('')

export function makeQuestions(mode: Mode, scope: Scope, count = 10): Q[] {
  const { words, lessons } = scope
  const others = (w: Vocab, same: (x: Vocab) => boolean = () => true) => shuffle(words.filter(x => x !== w && same(x)))
  const sentences = uniqBy(lessons.flatMap(l => l.sentences ?? []), s => sentenceText(s.parts))

  if (mode === 'listen') {
    return shuffle(words).slice(0, count).map(w => ({
      type: mode, vocab: w, prompt: '🔊 Nghe và chọn chữ Hán', speakText: w.hanzi, answer: w.hanzi,
      // loại các chữ đồng âm (vd 他/她) khỏi đáp án nhiễu để câu hỏi không mơ hồ
      options: shuffle([w.hanzi, ...others(w, x => x.pinyin !== w.pinyin).slice(0, 3).map(x => x.hanzi)]),
      reveal: `${w.hanzi} ${w.pinyin} – ${w.meaning}`,
    }))
  }
  if (mode === 'meaning') {
    return shuffle(words).slice(0, count).map(w => ({
      type: mode, vocab: w, prompt: w.hanzi, sub: w.pinyin, speakText: w.hanzi, answer: w.meaning,
      options: shuffle([w.meaning, ...others(w).slice(0, 3).map(x => x.meaning)]),
    }))
  }
  if (mode === 'reverse') {
    return shuffle(words).slice(0, count).map(w => ({
      type: mode, vocab: w, prompt: w.meaning, sub: 'Chọn chữ Hán đúng', answer: w.hanzi,
      options: shuffle([w.hanzi, ...others(w, x => x.meaning !== w.meaning).slice(0, 3).map(x => x.hanzi)]),
      reveal: `${w.hanzi} ${w.pinyin}`,
    }))
  }
  if (mode === 'tone') {
    const fromVocab = words.filter(w => [...w.hanzi].length === 1 && toneOf(w.pinyin) > 0).map(w => [w.hanzi, w.pinyin, w.meaning] as [string, string, string])
    const base = words.some(w => allLessons[0].lesson.vocab.includes(w)) ? toneExamples.flatMap(g => g.items) : []
    const items = uniqBy([...base, ...fromVocab], x => x[0])
    return shuffle(items).slice(0, count).map(([h, p, m]) => ({
      type: mode, prompt: '🔊 Nghe và chọn thanh điệu', speakText: h, answer: `Thanh ${toneOf(p)}`,
      options: tones.map(t => `Thanh ${t.n}`), reveal: `${h} ${p} – ${m}`,
    }))
  }
  if (mode === 'type') {
    return shuffle(words).slice(0, count).map(w => ({
      type: mode, vocab: w, prompt: w.hanzi, sub: w.meaning, speakText: w.hanzi, answer: w.pinyin,
      check: v => normalize(v) === normalize(flat(w.pinyin)),
    }))
  }
  if (mode === 'order') {
    return shuffle(sentences.filter(s => s.parts.length >= 2)).slice(0, count).map(s => {
      const answer = sentenceText(s.parts)
      let tokens = shuffle(s.parts)
      // tránh trường hợp thứ tự xáo trùng đúng đáp án
      for (let t = 0; t < 10 && sentenceText(tokens) === answer; t++) tokens = shuffle(s.parts)
      return {
        type: mode, prompt: s.vi, sub: 'Sắp xếp các từ thành câu đúng', tokens, answer,
        check: (v: string) => v !== '' && v.split('|').map(i => tokens[+i]).join('') === answer,
        reveal: `${answer} · ${s.pinyin}`,
      }
    })
  }
  if (mode === 'sentence') {
    return shuffle(sentences).slice(0, count).map(s => {
      const wrong = shuffle(sentences.filter(x => x.vi !== s.vi)).slice(0, 3).map(x => x.vi)
      return {
        type: mode, prompt: '🔊 Nghe câu và chọn nghĩa', speakText: sentenceText(s.parts), answer: s.vi,
        options: shuffle([s.vi, ...wrong]), reveal: `${sentenceText(s.parts)} · ${s.pinyin}`,
      }
    }).filter(q => q.options.length >= 3)
  }
  // dialog: mỗi cặp (A hỏi, B đáp) cho 2 câu: tìm câu đáp / tìm câu hỏi
  const lines = uniqBy(lessons.flatMap(l => l.dialogue), d => d.hanzi)
  const qs: Q[] = []
  for (const l of lessons) {
    // tách thành từng đoạn hội thoại theo scene, rồi ghép cặp (hỏi, đáp) trong mỗi đoạn
    const groups: (typeof l.dialogue)[] = []
    for (const d of l.dialogue) {
      if (d.scene || d.split || groups.length === 0) groups.push([])
      groups[groups.length - 1].push(d)
    }
    for (const g of groups) for (let i = 0; i + 1 < g.length; i += 2) {
      const a = g[i], b = g[i + 1]
      const mk = (shown: typeof a, hidden: typeof a, ask: string): Q | null => {
        const wrong = shuffle(lines.filter(x => x.hanzi !== hidden.hanzi && x.hanzi !== shown.hanzi)).slice(0, 3).map(x => x.hanzi)
        if (wrong.length < 2) return null
        return {
          type: 'dialog', prompt: `${shown.who}: ${shown.hanzi}`, sub: ask, speakText: shown.hanzi, answer: hidden.hanzi,
          options: shuffle([hidden.hanzi, ...wrong]), reveal: `${a.who}: ${a.hanzi} ${a.pinyin} · ${b.who}: ${b.hanzi} ${b.pinyin}`,
        }
      }
      const q1 = mk(a, b, 'Người kia đáp thế nào? Chọn câu phù hợp')
      const q2 = mk(b, a, 'Câu nào đứng trước câu này? Chọn câu phù hợp')
      if (q1) qs.push(q1)
      if (q2 && a.hanzi !== b.hanzi) qs.push(q2)
    }
  }
  return shuffle(qs).slice(0, count)
}

export const isCorrect = (q: Q, v: string | undefined) => v !== undefined && v !== '' && (q.check ? q.check(v) : v === q.answer)

/** Dạng nào có đủ nội dung để ra đề trong phạm vi này. */
export const availableModes = (scope: Scope) => MODES.filter(m => makeQuestions(m, scope, 1).length > 0)

/** Ghép đề: chia đều cho các dạng, thiếu thì bù từ dạng còn câu; giữ nhóm theo từng dạng. */
export function buildExam(types: Mode[], scope: Scope, count: number): Q[] {
  const lists = types.map(t => makeQuestions(t, scope, count))
  const taken = lists.map(() => 0)
  let total = 0
  while (total < count) {
    let moved = false
    for (let k = 0; k < lists.length && total < count; k++) {
      if (taken[k] < lists[k].length) { taken[k]++; total++; moved = true }
    }
    if (!moved) break
  }
  return lists.flatMap((l, k) => l.slice(0, taken[k]))
}

export const promptClass = (q: Q) => (q.type === 'dialog' ? 'text-4xl font-bold' : [...q.prompt].length <= 3 ? 'text-7xl font-bold' : 'text-lg')

/** Hiển thị câu trả lời của người dùng (dạng sắp xếp câu lưu chỉ số nên cần đổi lại thành chữ). */
export const displayAnswer = (q: Q, a: string | undefined) => (a && q.tokens ? a.split('|').map(i => q.tokens![+i]).join(' ') : a)

import { chart, chartCols, finals, initials, lesson1 as core1, notes as notes1 } from './lesson1'
import { lesson2 } from './lesson2'
import { lesson3 } from './lesson3'
import { lesson4 } from './lesson4'
import { lesson5 } from './lesson5'
import { lesson6 } from './lesson6'
import { lesson7 } from './lesson7'
import { lesson8 } from './lesson8'
import { lesson9 } from './lesson9'
import { lesson10 } from './lesson10'
import { lesson11 } from './lesson11'
import { lesson12 } from './lesson12'
import { lesson13 } from './lesson13'
import { lesson14 } from './lesson14'
import { lesson15 } from './lesson15'
import { lesson16 } from './lesson16'
import { lesson17 } from './lesson17'
import type { Lesson } from './types'

const initialPairs = (rows: string[][]) => rows.flat().map(s => ({ p: s, syl: s }))

export const lesson1: Lesson = {
  ...core1,
  intro: 'Làm quen thanh mẫu, vận mẫu, ghép vần và 4 thanh điệu; câu chào đầu tiên 你好.',
  dialogueTip: 'Viết <b>nǐ hǎo</b> nhưng khi nói đọc thành <b>ní hǎo</b> (hai thanh 3 liền nhau: âm đầu đọc thành thanh 2).',
  slowSay: '你好',
  sections: [
    { kind: 'sounds', label: 'Thanh mẫu', title: 'Thanh mẫu (phụ âm đầu) – bấm để nghe', list: initials, note: 'Viền cam = âm bật hơi. Các cặp dễ nhầm: b/p, d/t, g/k (không bật hơi / bật hơi).' },
    { kind: 'sounds', label: 'Vận mẫu', title: 'Vận mẫu (vần) – bấm để nghe', list: finals.map(f => ({ ...f, say: f.s === 'ü' ? 'yu' : f.s === 'i' ? 'yi' : f.s === 'u' ? 'wu' : f.s })) },
    { kind: 'chart', label: 'Ghép vần', title: 'Bảng ghép vần – bấm ô để nghe', cols: chartCols, rows: chart, note: 'Ô trống = không có âm tiết này. Hàng cuối: i, u, ü đứng một mình viết thành yi, wu, yu.' },
    { kind: 'tones', label: 'Thanh điệu' },
  ],
  notes: notes1.map(n => (n.title.startsWith('Biến điệu') ? { ...n, say: '你好' } : n)),
  sentences: [{ parts: ['你', '好'], pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' }],
  writeChars: ['一', '八', '五', '不', '大', '口', '白', '女', '你', '好', '马'],
  drills: [
    {
      title: 'Biến điệu thanh 3 (变调)', hint: 'Hai thanh 3 liền nhau: âm đầu đọc thành thanh 2.',
      items: [
        { h: '你好', p: 'nǐ hǎo', m: 'xin chào' }, { h: '美好', p: 'měihǎo', m: 'tốt đẹp' }, { h: '五百', p: 'wǔ bǎi', m: 'năm trăm' },
        { h: '北海', p: 'Běihǎi', m: 'Bắc Hải' }, { h: '给你', p: 'gěi nǐ', m: 'đưa cho bạn' }, { h: '语法', p: 'yǔfǎ', m: 'ngữ pháp' },
        { h: '可以', p: 'kěyǐ', m: 'có thể' }, { h: '辅导', p: 'fǔdǎo', m: 'kèm cặp' },
      ],
    },
    {
      title: 'Phân biệt thanh mẫu (b/p, d/t, g/k)', hint: 'Nghe và đọc theo, chú ý không bật hơi / bật hơi.',
      items: initialPairs([
        ['ba', 'pa', 'da', 'ta', 'ga', 'ka'], ['bu', 'pu', 'du', 'tu', 'gu', 'ku'],
        ['bai', 'pai', 'dai', 'tai', 'gai', 'kai'], ['bao', 'pao', 'dou', 'tou', 'gao', 'kao'],
      ]),
    },
  ],
}

/** Nội dung bài đã soạn, theo quyển. Thêm bài mới: tạo file dữ liệu rồi thêm vào đây. */
export const bookLessons: Record<number, Lesson[]> = {
  1: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11, lesson12, lesson13, lesson14, lesson15],
  2: [lesson16, lesson17],
}

export const getLesson = (book: number, id: number) => bookLessons[book]?.find(l => l.id === id)

/** Tất cả bài đã soạn (kèm số quyển). */
export const allLessons = Object.entries(bookLessons).flatMap(([b, ls]) => ls.map(lesson => ({ book: Number(b), lesson })))
export const allVocab = () => allLessons.flatMap(x => x.lesson.vocab)

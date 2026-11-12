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
import { lesson18 } from './lesson18'
import { lesson19 } from './lesson19'
import { lesson20 } from './lesson20'
import { lesson21 } from './lesson21'
import { lesson22 } from './lesson22'
import { lesson23 } from './lesson23'
import { lesson24 } from './lesson24'
import { lesson25 } from './lesson25'
import { lesson26 } from './lesson26'
import { lesson27 } from './lesson27'
import { lesson28 } from './lesson28'
import { lesson29 } from './lesson29'
import { lesson30 } from './lesson30'
import type { Lesson } from './types'

const INIT_TECH: Record<string, [string, string]> = {
  'b': ['Âm môi, tắc, trong, không bật hơi. Hai môi khép chặt, khoang miệng chứa đầy hơi rồi hai môi bật mở nhanh, dây thanh không rung.', '爸爸 bàba'],
  'p': ['Âm môi, tắc, trong, BẬT HƠI. Vị trí như b nhưng bật hơi mạnh, dây thanh không rung.', '跑 pǎo'],
  'm': ['Âm môi mũi, không bật hơi. Hai môi khép, ngạc mềm và lưỡi con hạ xuống nên hơi thoát qua khoang mũi. Dây thanh rung.', '妈妈 māma'],
  'f': ['Âm môi răng, xát, trong. Răng trên chạm môi dưới, hơi ma sát thoát ra. Dây thanh không rung.', '飞 fēi'],
  'd': ['Âm đầu lưỡi, tắc, trong, không bật hơi. Đầu lưỡi chạm chân răng trên, giữ hơi rồi hạ lưỡi thật nhanh. Dây thanh không rung.', '弟弟 dìdi'],
  't': ['Âm đầu lưỡi, tắc, trong, BẬT HƠI. Vị trí như d nhưng đẩy hơi mạnh ra. Dây thanh không rung.', '天 tiān'],
  'n': ['Âm đầu lưỡi, mũi. Đầu lưỡi chạm lợi trên, ngạc mềm và lưỡi con hạ xuống, khoang mũi mở. Dây thanh rung.', '奶奶 nǎinai'],
  'l': ['Âm bên, đầu lưỡi. Đầu lưỡi chạm lợi trên, lùi về sau nhiều hơn n, hơi thoát ra hai bên lưỡi. Dây thanh rung.', '梨 lí'],
  'g': ['Âm cuống lưỡi, tắc, trong, không bật hơi. Cuống lưỡi nâng sát ngạc mềm, trữ hơi rồi hạ nhanh. Dây thanh không rung.', '哥哥 gēge'],
  'k': ['Âm cuống lưỡi, tắc, trong, BẬT HƠI. Vị trí như g, đẩy hơi mạnh ra. Dây thanh không rung.', '口 kǒu'],
  'h': ['Âm cuống lưỡi, xát, trong. Cuống lưỡi tiến gần ngạc mềm, hơi ma sát thoát ra từ khoang giữa. Dây thanh không rung.', '花 huā'],
}
const FIN_TECH: Record<string, [string, string]> = {
  'a': ['Miệng mở rộng, lưỡi đặt thấp, không tròn môi.', '阿姨 āyí'],
  'o': ['Miệng mở vừa, lưỡi hơi cao và lùi về sau, tròn môi.', '噢 ō'],
  'e': ['Miệng mở vừa, lưỡi hơi cao và lùi về sau, môi KHÔNG tròn.', '饿 è'],
  'i': ['Miệng hé, môi dẹt, lưỡi ở vị trí cao, tiến về phía trước.', '一 yī'],
  'u': ['Miệng hé, môi tròn, lưỡi ở vị trí cao, nghiêng về phía sau.', '不 bù'],
  'ü': ['Vị trí lưỡi như i nhưng tròn môi; độ mở miệng gần như khi phát âm u.', '绿 lǜ'],
  'ai': ['Miệng mở rộng, đọc giống "ai" tiếng Việt.', '来 lái'],
  'ei': ['Khẩu hình hơi dẹt, đọc gần giống "ây".', '内 nèi'],
  'ao': ['Miệng mở rộng, đọc gần giống "ao".', '宝贝 bǎobèi'],
  'ou': ['Miệng ngậm hơi tròn, đọc gần giống "âu".', '狗 gǒu'],
}

const initialPairs = (rows: string[][]) => rows.flat().map(s => ({ p: s, syl: s }))

export const lesson1: Lesson = {
  ...core1,
  intro: 'Làm quen thanh mẫu, vận mẫu, ghép vần và 4 thanh điệu; câu chào đầu tiên 你好.',
  dialogueTip: 'Viết <b>nǐ hǎo</b> nhưng khi nói đọc thành <b>ní hǎo</b> (hai thanh 3 liền nhau: âm đầu đọc thành thanh 2).',
  slowSay: '你好',
  sections: [
    { kind: 'sounds', label: 'Thanh mẫu', title: 'Thanh mẫu (phụ âm đầu) – bấm để nghe', list: initials.map(x => ({ ...x, audio: `/audio/ppt/${x.s}.mp3`, tech: INIT_TECH[x.s][0] + ' Ví dụ: ' + INIT_TECH[x.s][1] + '.' })), note: 'Viền cam = âm bật hơi. Các cặp dễ nhầm: b/p, d/t, g/k (không bật hơi / bật hơi).' },
    { kind: 'sounds', label: 'Vận mẫu', title: 'Vận mẫu (vần) – bấm để nghe', list: finals.map(f => ({ ...f, say: f.s === 'ü' ? 'yu' : f.s === 'i' ? 'yi' : f.s === 'u' ? 'wu' : f.s, audio: `/audio/ppt/${f.s === 'ü' ? 'v' : f.s}.mp3`, tech: FIN_TECH[f.s][0] + ' Ví dụ: ' + FIN_TECH[f.s][1] + '.' })) },
    { kind: 'chart', label: 'Tổng quan thanh mẫu', title: 'Tổng quan các thanh mẫu theo vị trí phát âm – bấm ô để nghe', cols: ['1', '2', '3', '4'], rows: { 'Âm môi (b p m)': ['ba', 'pa', 'ma', ''], 'Âm môi răng (f)': ['fa', '', '', ''], 'Âm tròn môi (w)': ['wa', '', '', ''], 'Đầu lưỡi trước (z c s)': ['za', 'ca', 'sa', ''], 'Đầu lưỡi giữa (d t n l)': ['da', 'ta', 'na', 'la'], 'Đầu lưỡi sau (zh ch sh r)': ['zhe', 'che', 'she', 're'], 'Mặt lưỡi (j q x)': ['ji', 'qi', 'xi', ''], 'Cuống lưỡi (g k h y)': ['ge', 'ke', 'he', 'yi'] }, note: 'Bài này học kỹ b p m f d t n l g k h; các nhóm còn lại (j q x, z c s, zh ch sh r) sẽ học ở Bài 3, 4, 5. y và w là cách viết của i và u khi đứng đầu âm tiết.' },
    { kind: 'chart', label: 'Ghép vần', title: 'Bảng ghép vần – bấm ô để nghe', cols: chartCols, rows: chart, note: 'Ô trống = không có âm tiết này. Hàng cuối: i, u, ü đứng một mình viết thành yi, wu, yu.' },
    { kind: 'tones', label: 'Thanh điệu' },
  ],
  notes: notes1.map(n => (n.title.startsWith('Biến điệu') ? { ...n, say: '你好' } : n)),
  sentences: [{ parts: ['你', '好'], pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' }],
  strokesImg: '/img/rules/strokes.png',
  strokeRules: [
    { title: 'Ngang trước sổ sau', body: 'Nét ngang viết trước, nét sổ viết sau.', example: '十', img: '/img/rules/rule1.gif' },
    { title: 'Phẩy trước mác sau', body: 'Nét xiên trái (丿) viết trước, nét xiên phải (乀) viết sau.', example: '八', img: '/img/rules/rule2.gif' },
    { title: 'Trên trước dưới sau', body: 'Các nét ở trên viết trước các nét ở dưới; mỗi nét viết từ trái sang phải.', example: '二, 三', img: '/img/rules/rule3.gif' },
    { title: 'Trái trước phải sau', body: 'Các nét bên trái viết trước, nét bên phải viết sau.', example: '州', img: '/img/rules/rule4.gif' },
    { title: 'Ngoài trước trong sau', body: 'Viết khung ngoài trước, rồi mới viết phần bên trong.', example: '风', img: '/img/rules/rule5.gif' },
    { title: 'Vào trước đóng sau', body: 'Viết khung ngoài và phần bên trong trước, nét đóng khung viết cuối cùng.', example: '回, 国', img: '/img/rules/rule6.gif' },
    { title: 'Giữa trước hai bên sau', body: 'Áp dụng khi hai bên đối xứng: nét giữa viết trước, rồi bên trái, rồi bên phải. (Hai bên giống nhau mà không đối xứng thì theo quy tắc "trái trước phải sau".)', example: '水', img: '/img/rules/rule7.gif' },
    { title: 'Bộ 辶 và 廴 viết sau cùng', body: 'Hai bộ này nằm ở dưới hoặc bên trái nhưng luôn viết sau cùng.', example: '这, 过', img: '/img/rules/rule8.gif' },
  ],
  writeChars: ['一', '八', '五', '不', '大', '口', '白', '女', '你', '好', '马'],
  drills: [
    {
      title: 'Cụm từ mở rộng (từ bài giảng)', hint: 'Ghép từ vừa học. Chú ý 不 + thanh 4 đọc bú.',
      items: [
        { h: '你好吗', p: 'nǐ hǎo ma', m: 'Bạn khỏe không?' }, { h: '白马', p: 'bái mǎ', m: 'ngựa trắng' }, { h: '大马', p: 'dà mǎ', m: 'ngựa to' }, { h: '好马', p: 'hǎo mǎ', m: 'ngựa tốt' },
        { h: '不好', p: 'bù hǎo', m: 'không tốt' }, { h: '不大', p: 'bú dà', m: 'không lớn' },
      ],
    },
    {
      title: 'Phân biệt vận mẫu', hint: 'Nghe và đọc theo từng hàng.',
      items: ['ba', 'bo', 'he', 'fo', 'pa', 'po', 'ne', 'mo', 'bai', 'bei', 'pao', 'pou', 'mai', 'mei', 'hao', 'hou', 'gai', 'gei', 'kao', 'kou'].map(s => ({ p: s, syl: s })),
    },
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
  2: [lesson16, lesson17, lesson18, lesson19, lesson20, lesson21, lesson22, lesson23, lesson24, lesson25, lesson26, lesson27, lesson28, lesson29, lesson30],
}

export const getLesson = (book: number, id: number) => bookLessons[book]?.find(l => l.id === id)

/** Tất cả bài đã soạn (kèm số quyển). */
export const allLessons = Object.entries(bookLessons).flatMap(([b, ls]) => ls.map(lesson => ({ book: Number(b), lesson })))
export const allVocab = () => allLessons.flatMap(x => x.lesson.vocab)

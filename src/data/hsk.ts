export type AnswerKind = 'tf' | 'abc' | 'af'

export interface HskPart {
  id: string
  section: 'listening' | 'reading'
  /** Số thứ tự phần trong từng kỹ năng (1–4) */
  no: number
  from: number
  kind: AnswerKind
  title: string
  hint: string
}

/** Cấu trúc đề HSK cấp 1: 40 câu, mỗi phần 5 câu. */
export const HSK_PARTS: HskPart[] = [
  { id: 'L1', section: 'listening', no: 1, from: 1, kind: 'tf', title: 'Nghe 1', hint: 'Nghe một từ hoặc cụm từ, xem hình rồi chọn ✓ (đúng) hoặc ✗ (sai).' },
  { id: 'L2', section: 'listening', no: 2, from: 6, kind: 'abc', title: 'Nghe 2', hint: 'Nghe một câu, chọn hình đúng trong A, B, C.' },
  { id: 'L3', section: 'listening', no: 3, from: 11, kind: 'af', title: 'Nghe 3', hint: 'Nghe đoạn hội thoại ngắn, chọn hình phù hợp trong A–F.' },
  { id: 'L4', section: 'listening', no: 4, from: 16, kind: 'abc', title: 'Nghe 4', hint: 'Nghe câu và câu hỏi, chọn đáp án A, B hoặc C.' },
  { id: 'R1', section: 'reading', no: 1, from: 21, kind: 'tf', title: 'Đọc 1', hint: 'Xem hình và từ, chọn ✓ (đúng) hoặc ✗ (sai).' },
  { id: 'R2', section: 'reading', no: 2, from: 26, kind: 'af', title: 'Đọc 2', hint: 'Nối câu với hình phù hợp trong A–F.' },
  { id: 'R3', section: 'reading', no: 3, from: 31, kind: 'af', title: 'Đọc 3', hint: 'Nối câu hỏi với câu trả lời phù hợp trong A–F.' },
  { id: 'R4', section: 'reading', no: 4, from: 36, kind: 'af', title: 'Đọc 4', hint: 'Chọn từ phù hợp trong A–F điền vào chỗ trống.' },
]

export interface TranscriptItem {
  q: number
  /** Các câu nói (hội thoại có tiền tố 男/女) */
  lines: string[]
  /** Câu hỏi (chỉ phần Nghe 4) */
  ask?: string
}

export interface HskExam {
  id: string
  code: string
  title: string
  note?: string
  audio: string
  /** Ảnh trang đề giấy theo từng phần (id phần → danh sách ảnh). */
  paper: Record<string, string[]>
  /** 40 đáp án: 'T' đúng, 'F' sai, hoặc chữ cái A–F */
  answers: string[]
  transcript: TranscriptItem[]
}

const pages = (dir: string, map: Record<string, number[]>) =>
  Object.fromEntries(Object.entries(map).map(([k, v]) => [k, v.map(n => `/hsk/${dir}/p${n}.jpg`)]))

/** Mỗi chuỗi 5 ký tự = đáp án của một phần (T đúng, F sai, hoặc chữ cái). */
const ans = (rows: string[]) => rows.flatMap(r => r.split(''))

const P1 = { L1: [2], L2: [3, 4], L3: [5], L4: [6], R1: [7], R2: [8], R3: [9], R4: [10] }

export const HSK_EXAMS: HskExam[] = [
  {
    id: '1',
    code: 'H10000',
    title: 'Đề số 1',
    note: 'Đề mẫu (样卷) của Hanban',
    audio: '/audio/hsk1/H10000.mp3',
    paper: pages('h10000', { L1: [3], L2: [4, 5], L3: [6], L4: [7], R1: [8], R2: [9], R3: [10], R4: [11] }),
    answers: ans(['FTTFF', 'ACBCB', 'DEBAF', 'BCAAC', 'FTTTF', 'FCDBA', 'EBCDA', 'FBACE']),
    transcript: [
      { q: 1, lines: ['坐出租车'] }, { q: 2, lines: ['明天见'] }, { q: 3, lines: ['十二点'] }, { q: 4, lines: ['喝水'] }, { q: 5, lines: ['打电话'] },
      { q: 6, lines: ['你的衣服很漂亮。'] }, { q: 7, lines: ['他们在工作。'] }, { q: 8, lines: ['我朋友是老师。'] }, { q: 9, lines: ['李小姐，请坐。'] }, { q: 10, lines: ['我儿子在大学读书。'] },
      { q: 11, lines: ['男：这个椅子多少钱？', '女：七十块。'] },
      { q: 12, lines: ['女：他会开车吗？', '男：会。他开车三年多了。'] },
      { q: 13, lines: ['男：你去哪儿了？', '女：我去买了些东西。'] },
      { q: 14, lines: ['女：今天我请你吃饭。', '男：太好了，我想吃中国菜。'] },
      { q: 15, lines: ['男：他们是谁？', '女：他们三个都是我的学生。'] },
      { q: 16, lines: ['明天是二月二十五日，星期三。'], ask: '明天是星期几？' },
      { q: 17, lines: ['我会说汉语，我能写一些汉字。'], ask: '他会什么？' },
      { q: 18, lines: ['下个月，我和王老师去北京。'], ask: '他和谁去北京？' },
      { q: 19, lines: ['我有一个女儿，今年四岁了。'], ask: '女儿几岁了？' },
      { q: 20, lines: ['昨天下雨了，很冷。'], ask: '昨天天气怎么样？' },
    ],
  },
  {
    id: '2',
    code: 'H10901',
    title: 'Đề số 2',
    audio: '/audio/hsk1/H10901.mp3',
    paper: pages('h10901', P1),
    answers: ans(['TFFFT', 'AACAC', 'DBAEF', 'BBCCB', 'TTFFT', 'DFCAB', 'CDABE', 'FBEAC']),
    transcript: [
      { q: 1, lines: ['打电话'] }, { q: 2, lines: ['我和儿子'] }, { q: 3, lines: ['开车'] }, { q: 4, lines: ['吃米饭'] }, { q: 5, lines: ['下雨了'] },
      { q: 6, lines: ['今天天气很冷。'] }, { q: 7, lines: ['现在是十点十分。'] }, { q: 8, lines: ['她后面有几个人。'] }, { q: 9, lines: ['我今年12岁了。'] }, { q: 10, lines: ['他下个月去中国。'] },
      { q: 11, lines: ['男：你看见我的小猫了吗？', '女：在那儿，在椅子上。'] },
      { q: 12, lines: ['女：我们中午去买，好吗？', '男：你看，我没钱了。'] },
      { q: 13, lines: ['男：你住在哪儿？', '女：我和妈妈都住在一零二。'] },
      { q: 14, lines: ['女：这个汉字怎么读？', '男：对不起，我不会。'] },
      { q: 15, lines: ['男：谢谢你们！', '女：不客气。再见。'] },
      { q: 16, lines: ['我的电脑在他的桌子上。'], ask: '那是谁的电脑？' },
      { q: 17, lines: ['今天星期四，我们明天去看电影。'], ask: '我们什么时候去看电影？' },
      { q: 18, lines: ['他是老师，他有50个学生。'], ask: '他有多少个学生？' },
      { q: 19, lines: ['小姐，你好，你这儿有杯子吗？'], ask: '他想买什么？' },
      { q: 20, lines: ['这是你的朋友吗？很漂亮。'], ask: '朋友怎么样？' },
    ],
  },
  {
    id: '3',
    code: 'H10902',
    title: 'Đề số 3',
    audio: '/audio/hsk1/H10902.mp3',
    paper: pages('h10902', P1),
    answers: ans(['FFFTT', 'BACAB', 'EFDBA', 'CACCB', 'FTFTT', 'ABCDF', 'CEBDA', 'BEAFC']),
    transcript: [
      { q: 1, lines: ['她的猫'] }, { q: 2, lines: ['吃东西'] }, { q: 3, lines: ['在商店里'] }, { q: 4, lines: ['再见'] }, { q: 5, lines: ['请喝茶'] },
      { q: 6, lines: ['儿子爱吃米饭。'] }, { q: 7, lines: ['我喜欢这个电脑。'] }, { q: 8, lines: ['我看见她买衣服了。'] }, { q: 9, lines: ['苹果在桌子上。'] }, { q: 10, lines: ['北京一年中有三个月很冷。'] },
      { q: 11, lines: ['男：上午去医院看同学的时候，你没买些水果？', '女：我买了不少。'] },
      { q: 12, lines: ['女：你是哪年来中国的？', '男：我？今年，2009年。'] },
      { q: 13, lines: ['男：你的大狗叫什么名字？', '女：叫多多。多多是我的好朋友。'] },
      { q: 14, lines: ['女：李老师的女儿今年二十岁了？', '男：是。她很漂亮。'] },
      { q: 15, lines: ['男：现在几点了？', '女：十点十分。'] },
      { q: 16, lines: ['你好，这个杯子十八块钱。'], ask: '那个杯子多少钱？' },
      { q: 17, lines: ['中午我不回家吃饭了，和朋友在饭店吃。'], ask: '我在哪儿吃午饭？' },
      { q: 18, lines: ['喂？是王先生吗？'], ask: '他在做什么？' },
      { q: 19, lines: ['明天星期一，我去学校。'], ask: '今天星期几？' },
      { q: 20, lines: ['他不想坐火车，我们坐飞机去。'], ask: '他们怎么去？' },
    ],
  },
]

export const getHsk = (id: string) => HSK_EXAMS.find(e => e.id === id)

export const POINTS_PER_QUESTION = 5
export const PASS_SCORE = 120
export const EXAM_MINUTES = 40

export const optionsFor = (kind: AnswerKind) => (kind === 'tf' ? ['T', 'F'] : kind === 'abc' ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D', 'E', 'F'])
export const labelOf = (v: string | undefined) => (v === 'T' ? '✓' : v === 'F' ? '✗' : v ?? '–')
export const partOf = (q: number) => HSK_PARTS.find(p => q >= p.from && q < p.from + 5)!

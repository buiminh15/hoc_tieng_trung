import type { LessonCore } from './types'


export const initials = [
  { s: 'b', tip: 'Giống "p" trong "pa" (tiếng Việt), môi khép rồi bật ra, KHÔNG bật hơi.', aspirated: false },
  { s: 'p', tip: 'Vị trí như b nhưng BẬT HƠI mạnh. Thử: cầm tờ giấy trước miệng, đọc p thì giấy bay, đọc b thì giấy đứng yên.', aspirated: true },
  { s: 'm', tip: 'Giống "m" tiếng Việt.', aspirated: false },
  { s: 'f', tip: 'Giống "ph" tiếng Việt: răng trên chạm môi dưới.', aspirated: false },
  { s: 'd', tip: 'Giống "t" tiếng Việt, đầu lưỡi chạm lợi trên, KHÔNG bật hơi.', aspirated: false },
  { s: 't', tip: 'Vị trí như d nhưng BẬT HƠI, gần giống "th".', aspirated: true },
  { s: 'n', tip: 'Giống "n" tiếng Việt.', aspirated: false },
  { s: 'l', tip: 'Giống "l" tiếng Việt.', aspirated: false },
  { s: 'g', tip: 'Giống "c/k" tiếng Việt, cuống lưỡi chạm ngạc mềm, KHÔNG bật hơi.', aspirated: false },
  { s: 'k', tip: 'Vị trí như g nhưng BẬT HƠI, gần giống "kh".', aspirated: true },
  { s: 'h', tip: 'Âm xát cuống lưỡi, gần giống "kh/h" nhẹ.', aspirated: false },
]

export const finals = [
  { s: 'a', tip: 'Miệng mở to nhất, lưỡi thấp, môi không tròn: "a".' },
  { s: 'o', tip: 'Môi tròn, miệng mở vừa: giống "ô".' },
  { s: 'e', tip: 'Miệng mở vừa, môi không tròn, lưỡi lùi sau: giống "ơ" kéo về cổ họng.' },
  { s: 'i', tip: 'Môi dẹt, miệng hẹp: "i".' },
  { s: 'u', tip: 'Môi tròn nhỏ, lưỡi lùi sau: "u".' },
  { s: 'ü', tip: 'Lưỡi như phát "i" nhưng tròn môi như "u": giống "uy" kéo dài. Viết thành "yu" khi đứng một mình.' },
  { s: 'ai', tip: 'Đọc "ai" như tiếng Việt.' },
  { s: 'ei', tip: 'Đọc gần như "ây".' },
  { s: 'ao', tip: 'Đọc gần như "ao".' },
  { s: 'ou', tip: 'Đọc gần như "âu".' },
]

// Bảng ghép vần (sách trang 2-3). '' = không có âm tiết.
export const chartCols = ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ao', 'ou']
export const chart: Record<string, string[]> = {
  b: ['ba', 'bo', '', 'bi', 'bu', '', 'bai', 'bei', 'bao', ''],
  p: ['pa', 'po', '', 'pi', 'pu', '', 'pai', 'pei', 'pao', 'pou'],
  m: ['ma', 'mo', 'me', 'mi', 'mu', '', 'mai', 'mei', 'mao', 'mou'],
  f: ['fa', 'fo', '', '', 'fu', '', '', 'fei', '', 'fou'],
  d: ['da', '', 'de', 'di', 'du', '', 'dai', 'dei', 'dao', 'dou'],
  t: ['ta', '', 'te', 'ti', 'tu', '', 'tai', '', 'tao', 'tou'],
  n: ['na', '', 'ne', 'ni', 'nu', 'nü', 'nai', 'nei', 'nao', 'nou'],
  l: ['la', '', 'le', 'li', 'lu', 'lü', 'lai', 'lei', 'lao', 'lou'],
  g: ['ga', '', 'ge', '', 'gu', '', 'gai', 'gei', 'gao', 'gou'],
  k: ['ka', '', 'ke', '', 'ku', '', 'kai', 'kei', 'kao', 'kou'],
  h: ['ha', '', 'he', '', 'hu', '', 'hai', 'hei', 'hao', 'hou'],
  '∅': ['', '', '', 'yi', 'wu', 'yu', '', '', '', ''],
}

export const tones = [
  { n: 1, name: 'Thanh 1', mark: 'ā', num: '55', desc: 'Cao và bằng (như hát nốt cao kéo dài)', path: '5,10 95,10' },
  { n: 2, name: 'Thanh 2', mark: 'á', num: '35', desc: 'Đi lên (như hỏi "hả?")', path: '5,70 95,10' },
  { n: 3, name: 'Thanh 3', mark: 'ǎ', num: '214', desc: 'Xuống thấp rồi lên (như "hỏi" kéo dài)', path: '5,40 35,90 95,40' },
  { n: 4, name: 'Thanh 4', mark: 'à', num: '51', desc: 'Rơi từ cao xuống thấp (dứt khoát như "nặng")', path: '5,10 95,90' },
]

// Ví dụ 4 thanh trong sách (trang 8-9): ba, ma, yi
export const toneExamples = [
  { syl: 'ba', items: [['八', 'bā', 'tám'], ['拔', 'bá', 'nhổ, rút'], ['靶', 'bǎ', 'bia bắn'], ['爸', 'bà', 'bố']] },
  { syl: 'ma', items: [['妈', 'mā', 'mẹ'], ['麻', 'má', 'tê, vừng'], ['马', 'mǎ', 'ngựa'], ['骂', 'mà', 'mắng']] },
  { syl: 'yi', items: [['一', 'yī', 'một'], ['移', 'yí', 'di chuyển'], ['椅', 'yǐ', 'ghế'], ['亿', 'yì', 'trăm triệu']] },
]

export const notes = [
  {
    title: 'Cấu tạo âm tiết tiếng Hán',
    body: 'Mỗi âm tiết = Thanh mẫu (phụ âm đầu) + Vận mẫu (phần còn lại) + Thanh điệu. Ví dụ: hǎo = h + ao + thanh 3. Tiếng phổ thông có khoảng 400 âm tiết (chưa tính thanh điệu).',
  },
  {
    title: 'Quy tắc viết: i, u, ü đứng một mình',
    body: 'Khi i, u, ü tự thành âm tiết thì viết thành yi, wu, yu. Ví dụ: 一 yī, 五 wǔ, 鱼 yú.',
  },
  {
    title: 'Quy tắc đặt dấu thanh',
    body: 'Dấu đặt trên nguyên âm chính. Có "i" mang dấu thì bỏ dấu chấm trên i: nǐ, bǐ. Có từ hai nguyên âm trở lên thì đặt dấu lên nguyên âm có độ mở miệng lớn nhất (a > o, e > i, u, ü): hǎo, mèi, lóu.',
  },
  {
    title: 'Biến điệu: hai thanh 3 đứng liền',
    body: 'Khi hai âm tiết thanh 3 đi liền nhau, âm đầu đọc thành thanh 2. Viết vẫn là nǐ hǎo nhưng đọc là ní hǎo.',
  },
  {
    title: 'Âm tiết và chữ Hán',
    body: 'Mỗi âm tiết có thể viết bằng một hoặc nhiều chữ Hán khác nhau (đồng âm khác nghĩa). Ví dụ bā: 八 (tám), 拔 (nhổ). Vì vậy thanh điệu và chữ Hán rất quan trọng để phân biệt nghĩa.',
  },
]

export const lesson1: LessonCore = {
  id: 1,
  title: 'Xin chào',
  hanzi: '你好',
  pinyin: 'Nǐ hǎo',
  vi: 'Xin chào',
  dialogue: [
    { who: 'A', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' },
    { who: 'B', hanzi: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Xin chào!' },
  ],
  vocab: [
    { hanzi: '你', parts: '亻 (bộ nhân đứng) + 尔 (nhĩ)', pinyin: 'nǐ', pos: 'đại từ', meaning: 'bạn, anh, chị (ngôi 2 số ít)', han_viet: 'nễ' },
    { hanzi: '好', parts: '女 (bộ nữ) + 子 (bộ tử)', pinyin: 'hǎo', pos: 'tính từ', meaning: 'tốt, khỏe', han_viet: 'hảo' },
    { hanzi: '你好', pinyin: 'nǐ hǎo', pos: 'cụm', meaning: 'xin chào', han_viet: 'nễ hảo' },
    { hanzi: '一', pinyin: 'yī', pos: 'số từ', meaning: 'một', han_viet: 'nhất' },
    { hanzi: '五', pinyin: 'wǔ', pos: 'số từ', meaning: 'năm', han_viet: 'ngũ' },
    { hanzi: '八', pinyin: 'bā', pos: 'số từ', meaning: 'tám', han_viet: 'bát' },
    { hanzi: '大', pinyin: 'dà', pos: 'tính từ', meaning: 'to, lớn', han_viet: 'đại' },
    { hanzi: '不', pinyin: 'bù', pos: 'phó từ', meaning: 'không', han_viet: 'bất' },
    { hanzi: '口', pinyin: 'kǒu', pos: 'danh/lượng từ', meaning: 'miệng; (lượng từ cho thành viên gia đình)', han_viet: 'khẩu' },
    { hanzi: '白', pinyin: 'bái', pos: 'tính từ', meaning: 'trắng', han_viet: 'bạch' },
    { hanzi: '女', pinyin: 'nǚ', pos: 'tính từ', meaning: 'nữ, phụ nữ', han_viet: 'nữ' },
    { hanzi: '马', pinyin: 'mǎ', pos: 'danh từ', meaning: 'ngựa', han_viet: 'mã' },
  ],
}

import type { DayContent, DayMeta } from './types'
import { day1 } from './day1'
import { day2 } from './day2'
import { day3 } from './day3'
import { day4 } from './day4'

export * from './types'

export const BOOK_TITLE = '21 ngày chinh phục ngữ pháp HSK cao cấp'
export const BOOK_HANZI = '21天征服新HSK高级语法'

/** Mục lục lấy từ sách (3 tuần × 5 ngày). Số trang là trang sách. */
export const DAYS: DayMeta[] = [
  { day: 1, week: 1, weekday: 'Thứ Hai', hanzi: '结果补语 介宾补语 趋向补语', title: 'Bổ ngữ kết quả · giới-tân · xu hướng', topics: ['Bổ ngữ kết quả', 'Bổ ngữ giới-tân', 'Bổ ngữ xu hướng'], pages: '2–16' },
  { day: 2, week: 1, weekday: 'Thứ Ba', hanzi: '趋向补语的引申用法', title: 'Nghĩa mở rộng của bổ ngữ xu hướng', topics: ['上来 · 上去', '下来 · 下去', '出来 · 出去', '过来 · 过去', '起来'], pages: '17–30' },
  { day: 3, week: 1, weekday: 'Thứ Tư', hanzi: '数量补语 "得"与程度/情态/可能补语', title: 'Bổ ngữ số lượng · 得 với bổ ngữ mức độ, tình thái, khả năng', topics: ['Bổ ngữ số lượng', '得 + mức độ / tình thái', '得 + khả năng'], pages: '31–45' },
  { day: 4, week: 1, weekday: 'Thứ Năm', hanzi: '状语 定语 常用量词', title: 'Trạng ngữ · định ngữ · lượng từ thường dùng', topics: ['Trạng ngữ', 'Định ngữ', 'Lượng từ'], pages: '46–59' },
  { day: 5, week: 1, weekday: 'Thứ Sáu', hanzi: '副词及其否定形式', title: 'Phó từ và dạng phủ định', topics: ['Phó từ làm trạng ngữ', '不 · 没(有)', 'Phó từ + phủ định'], pages: '60–74' },
  { day: 6, week: 2, weekday: 'Thứ Hai', hanzi: '副词辨析', title: 'Phân biệt phó từ', topics: ['再 / 又 / 还 / 也', '才 / 都 / 就', '到底 / 究竟 / 毕竟 / 终究 / 终于', '曾经 / 已经', '正在 / 正 / 在', '将(要) / 快(要) / 就(要)'], pages: '94–111' },
  { day: 7, week: 2, weekday: 'Thứ Ba', hanzi: '介词（一）', title: 'Giới từ (1)', topics: ['Giới từ thường dùng', '在 + phương vị từ', '从 / 自 / 自从 / 由 / 于'], pages: '112–124' },
  { day: 8, week: 2, weekday: 'Thứ Tư', hanzi: '介词（二）', title: 'Giới từ (2)', topics: ['对 / 对于 / 对……来说 / 关于 / 至于', '对 / 跟 / 给', '对 / 朝 / 向 / 往', '为了 / 为 / 以', '根据 / 据 / 按 / 按照 / 照', '凭 / 靠', '经过 / 通过'], pages: '125–144' },
  { day: 9, week: 2, weekday: 'Thứ Năm', hanzi: '助词"了"、"过"、"着"', title: 'Trợ từ 了, 过, 着', topics: ['了', '过', '着'], pages: '145–160' },
  { day: 10, week: 2, weekday: 'Thứ Sáu', hanzi: '"的"的常见用法 "是"字句 "有"字句', title: 'Cách dùng 的 · câu chữ 是 · câu chữ 有', topics: ['Kết cấu 的', 'Câu chữ 是', 'Câu chữ 有'], pages: '161–172' },
  { day: 11, week: 3, weekday: 'Thứ Hai', hanzi: '"把"字句 被动句 受 使 令 让', title: 'Câu chữ 把 · câu bị động · 受 使 令 让', topics: ['Câu chữ 把', 'Câu bị động', '受 · 使 · 令 · 让'], pages: '194–210' },
  { day: 12, week: 3, weekday: 'Thứ Ba', hanzi: '比较句', title: 'Câu so sánh', topics: ['Các kiểu câu so sánh'], pages: '211–224' },
  { day: 13, week: 3, weekday: 'Thứ Tư', hanzi: '复句（一）', title: 'Câu phức (1)', topics: ['Đẳng lập', 'Tăng tiến', 'Nối tiếp', 'Lựa chọn', 'Chuyển ngoặt'], pages: '225–245' },
  { day: 14, week: 3, weekday: 'Thứ Năm', hanzi: '复句（二）', title: 'Câu phức (2)', topics: ['Nhân quả', 'Mục đích', 'Điều kiện', 'Giả thiết', 'Nhượng bộ', 'Ý hợp'], pages: '246–264' },
  { day: 15, week: 3, weekday: 'Thứ Sáu', hanzi: '句子成分残缺 并列缺省 搭配不当', title: 'Thiếu thành phần câu · thiếu vế đẳng lập · kết hợp sai', topics: ['Thiếu thành phần', 'Thiếu vế đẳng lập', 'Kết hợp từ sai'], pages: '265–279' },
]

export const WEEKENDS = [
  { week: 1, title: 'Ôn tập cuối tuần 1', pages: '75–93' },
  { week: 2, title: 'Ôn tập cuối tuần 2', pages: '173–193' },
  { week: 3, title: 'Ôn tập cuối tuần 3', pages: '280–299' },
]

/** Nội dung đã số hoá. Ngày chưa có trong map thì hiện "Sắp có". */
export const CONTENT: Record<number, DayContent> = { 1: day1, 2: day2, 3: day3, 4: day4 }

export const getDay = (day: number) => DAYS.find(d => d.day === day)
export const hasContent = (day: number) => day in CONTENT

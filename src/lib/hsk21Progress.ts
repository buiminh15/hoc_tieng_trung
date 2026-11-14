import { create } from 'zustand'

const KEY = 'hsk21'

export type Step = 'map' | 'learn' | 'board' | 'cards' | 'test'
export const STEPS: readonly (readonly [Step, string])[] = [['map', 'Tổng quan'], ['learn', 'Học'], ['board', 'Bảng ghi nhớ'], ['cards', 'Thẻ nhớ'], ['test', 'Kiểm tra']] as const

interface State {
  /** Các bước đã mở theo ngày, vd { 1: ['map', 'learn'] } */
  seen: Record<number, Step[]>
  /** Điểm cao nhất (%) theo khoá "ngày-test" / "ngày-exam" */
  best: Record<string, number>
  /** Thẻ nhớ đã đánh dấu "nhớ rồi" theo ngày */
  known: Record<number, string[]>
  markSeen: (day: number, step: Step) => void
  saveBest: (day: number, kind: 'test' | 'exam', pct: number) => void
  setKnown: (day: number, id: string, on: boolean) => void
  resetKnown: (day: number) => void
}

function load(): Pick<State, 'seen' | 'best' | 'known'> {
  try { return { seen: {}, best: {}, known: {}, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') } } catch { return { seen: {}, best: {}, known: {} } }
}
function persist(s: Pick<State, 'seen' | 'best' | 'known'>) {
  try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* ignore */ }
}

/** Tiến độ sách "21 ngày", lưu trong trình duyệt. */
export const useHsk21 = create<State>((set, get) => ({
  ...load(),
  markSeen: (day, step) => {
    const cur = get().seen[day] ?? []
    if (cur.includes(step)) return
    const seen = { ...get().seen, [day]: [...cur, step] }
    persist({ seen, best: get().best, known: get().known }); set({ seen })
  },
  saveBest: (day, kind, pct) => {
    const k = `${day}-${kind}`
    const best = { ...get().best, [k]: Math.max(get().best[k] ?? 0, pct) }
    persist({ seen: get().seen, best, known: get().known }); set({ best })
  },
  setKnown: (day, id, on) => {
    const cur = get().known[day] ?? []
    const next = on ? (cur.includes(id) ? cur : [...cur, id]) : cur.filter(x => x !== id)
    const known = { ...get().known, [day]: next }
    persist({ seen: get().seen, best: get().best, known }); set({ known })
  },
  resetKnown: day => {
    const known = { ...get().known, [day]: [] }
    persist({ seen: get().seen, best: get().best, known }); set({ known })
  },
}))

/** Tiến độ một ngày tính theo % (5 bước + 2 bài kiểm tra đạt từ 70%). */
export function dayPercent(day: number, s: Pick<State, 'seen' | 'best'>) {
  const steps = (s.seen[day] ?? []).length
  const tests = ['test', 'exam'].filter(k => (s.best[`${day}-${k}`] ?? 0) >= 70).length
  return Math.round(((steps + tests) / 7) * 100)
}

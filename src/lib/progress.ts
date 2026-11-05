import { create } from 'zustand'

const KEY = 'done-lessons'

function load(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') } catch { return [] }
}

/** Tiến độ "đã học" theo từng bài, lưu trong trình duyệt. Khoá dạng "quyển-bài", vd "1-2". */
export const useProgress = create<{ done: string[]; toggle: (k: string) => void }>((set, get) => ({
  done: load(),
  toggle: k => {
    const done = get().done.includes(k) ? get().done.filter(x => x !== k) : [...get().done, k]
    try { localStorage.setItem(KEY, JSON.stringify(done)) } catch { /* ignore */ }
    set({ done })
  },
}))

export const lessonKey = (book: number, id: number) => `${book}-${id}`

export interface HskAttempt { exam: string; date: string; listening: number; reading: number; secs: number }

const KEY = 'hsk-history'

export function loadHsk(): HskAttempt[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') } catch { return [] }
}

export function saveHsk(a: HskAttempt) {
  try { localStorage.setItem(KEY, JSON.stringify([a, ...loadHsk()].slice(0, 30))) } catch { /* ignore */ }
}

export const bestOf = (examId: string) => {
  const rows = loadHsk().filter(a => a.exam === examId)
  return rows.length ? Math.max(...rows.map(a => a.listening + a.reading)) : null
}

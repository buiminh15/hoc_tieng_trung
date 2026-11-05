import { create } from 'zustand'

type Theme = 'light' | 'dark'

function initial(): Theme {
  try {
    const s = localStorage.getItem('theme')
    if (s === 'light' || s === 'dark') return s
  } catch { /* ignore */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function apply(t: Theme) {
  document.documentElement.classList.toggle('dark', t === 'dark')
  try { localStorage.setItem('theme', t) } catch { /* ignore */ }
}

export const useTheme = create<{ theme: Theme; toggle: () => void }>((set, get) => ({
  theme: initial(),
  toggle: () => {
    const t: Theme = get().theme === 'dark' ? 'light' : 'dark'
    apply(t)
    set({ theme: t })
  },
}))

apply(useTheme.getState().theme)

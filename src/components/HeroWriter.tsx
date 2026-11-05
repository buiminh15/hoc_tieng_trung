import { useEffect, useRef, useState } from 'react'
import HanziWriter from 'hanzi-writer'
import { speak } from '../lib/tts'
import { useTheme } from '../lib/theme'

export interface HeroWord { hanzi: string; pinyin: string; vi: string }

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

/** Chữ Hán tự viết từng nét, lần lượt từng từ. Chuyển động duy nhất của trang đầu. */
export default function HeroWriter({ words }: { words: HeroWord[] }) {
  const [i, setI] = useState(0)
  const dark = useTheme(s => s.theme === 'dark')
  const host = useRef<HTMLDivElement>(null)
  const word = words[i % words.length]

  useEffect(() => {
    const el = host.current
    if (!el) return
    el.innerHTML = ''
    let alive = true
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const writers = [...word.hanzi].map(ch => {
      const d = document.createElement('div')
      el.appendChild(d)
      return HanziWriter.create(d, ch, {
        width: 150, height: 150, padding: 8,
        strokeColor: dark ? '#e7f0ec' : '#12202a',
        outlineColor: dark ? '#26404b' : '#c9d7d0',
        strokeAnimationSpeed: 1.1, delayBetweenStrokes: 140,
        showOutline: true,
      })
    })
    ;(async () => {
      if (reduce) { writers.forEach(w => w.showCharacter()); return }
      await sleep(350)
      for (const w of writers) {
        if (!alive) return
        await new Promise<void>(res => w.animateCharacter({ onComplete: () => res() }))
      }
      await sleep(2600)
      if (alive) setI(n => n + 1)
    })()
    return () => { alive = false; el.innerHTML = '' }
  }, [word.hanzi, dark])

  return (
    <button type="button" onClick={() => speak(word.hanzi)} className="group block text-left" aria-label={`Nghe ${word.hanzi}`}>
      <div ref={host} className="flex gap-1" />
      <div className="mt-2 flex items-baseline gap-3">
        <span className="py text-xl font-semibold text-accent-fg">{word.pinyin}</span>
        <span className="text-sm text-slate-500">{word.vi}</span>
        <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">🔊</span>
      </div>
    </button>
  )
}

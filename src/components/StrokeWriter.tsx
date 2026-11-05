import { useEffect, useRef } from 'react'
import HanziWriter from 'hanzi-writer'
import { useTheme } from '../lib/theme'

export default function StrokeWriter({ char }: { char: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const dark = useTheme(s => s.theme === 'dark')
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.innerHTML = ''
    const w = HanziWriter.create(el, char, {
      width: 120, height: 120, padding: 5,
      strokeColor: dark ? '#e2e8f0' : '#555',
      outlineColor: dark ? '#475569' : '#ddd',
    })
    w.animateCharacter()
    el.onclick = () => w.animateCharacter()
    return () => { el.innerHTML = '' }
  }, [char, dark])
  return <div ref={ref} className="cursor-pointer rounded border bg-surface" title="Click để xem lại" />
}

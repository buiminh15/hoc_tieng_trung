import { useEffect, useRef, useState } from 'react'
import HanziWriter from 'hanzi-writer'
import { useTheme } from '../lib/theme'
import { speak } from '../lib/tts'

/** Tập viết: chọn chữ, xem mẫu hoặc tự viết từng nét (có kiểm tra). */
export default function WritePractice({ chars }: { chars: string[] }) {
  const [ch, setCh] = useState(chars[0])
  const [msg, setMsg] = useState('')
  const [mode, setMode] = useState<'quiz' | 'demo'>('quiz')
  const ref = useRef<HTMLDivElement>(null)
  const writer = useRef<HanziWriter | null>(null)
  const dark = useTheme(s => s.theme === 'dark')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.innerHTML = ''
    const w = HanziWriter.create(el, ch, {
      width: 240, height: 240, padding: 10,
      showOutline: true,
      strokeColor: dark ? '#e2e8f0' : '#333',
      outlineColor: dark ? '#3b4b52' : '#ddd',
      drawingColor: dark ? '#5fd0c0' : '#0f766e',
      highlightColor: dark ? '#5fd0c0' : '#0f766e',
      showHintAfterMisses: 2,
    })
    writer.current = w
    setMsg('')
    if (mode === 'demo') w.animateCharacter()
    else w.quiz({ onComplete: s => setMsg(`✅ Hoàn thành! Sai ${s.totalMistakes} lần.`) })
    return () => { el.innerHTML = ''; writer.current = null }
  }, [ch, mode, dark])

  function restart(m: 'quiz' | 'demo') {
    if (m === mode) {
      const w = writer.current
      if (!w) return
      setMsg('')
      if (m === 'demo') w.animateCharacter()
      else w.quiz({ onComplete: s => setMsg(`✅ Hoàn thành! Sai ${s.totalMistakes} lần.`) })
    } else setMode(m)
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {chars.map(c => (
          <button key={c} onClick={() => setCh(c)} className={`h-12 w-12 rounded-lg border text-2xl ${c === ch ? 'bg-accent text-white' : 'bg-surface hover:bg-accent-soft'}`}>{c}</button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <div ref={ref} className="rounded-lg border bg-surface" style={{ touchAction: 'none' }} />
        <div className="flex flex-wrap justify-center gap-2">
          <button className="tile shadow rounded-lg bg-accent px-4 py-1.5 font-bold text-white" onClick={() => restart('quiz')}>✍️ Tự viết (làm lại)</button>
          <button className="tile rounded-lg border bg-surface px-4 py-1.5 font-semibold" onClick={() => restart('demo')}>👀 Xem mẫu</button>
          <button className="tile rounded-lg border bg-surface px-4 py-1.5 font-semibold" onClick={() => speak(ch)}>🔊 Nghe</button>
        </div>
        <p className="text-sm text-slate-500">{msg || 'Dùng chuột hoặc ngón tay viết từng nét theo đúng thứ tự. Sai 2 lần sẽ có gợi ý.'}</p>
      </div>
    </div>
  )
}

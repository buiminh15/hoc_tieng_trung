import { speak } from '../lib/tts'

export function SpeakBtn({ text, className = '' }: { text: string; className?: string }) {
  return (
    <button type="button" aria-label="Nghe" className={`rounded-full p-1 text-lg hover:bg-slate-100 ${className}`} onClick={e => { e.stopPropagation(); speak(text); e.currentTarget.classList.remove('ring'); void e.currentTarget.offsetWidth; e.currentTarget.classList.add('ring') }}>
      🔊
    </button>
  )
}

/** Đường cao độ của thanh điệu: tự vẽ lại khi rê chuột hoặc bấm vào thẻ. */
export function ToneShape({ path }: { path: string; active?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className="mx-auto h-20 w-20 rounded-md bg-slate-50">
      {[10, 30, 50, 70, 90].map(y => <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="var(--color-slate-200)" strokeDasharray="3" />)}
      <polyline className="tone-line" points={path} fill="none" stroke="var(--color-accent-fg)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" pathLength={160} />
    </svg>
  )
}

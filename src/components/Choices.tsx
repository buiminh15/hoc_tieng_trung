import { useEffect } from 'react'
import { PenCircle, PenCross } from './PenMark'

const NUM = ['①', '②', '③', '④', '⑤', '⑥']
const hasHan = (s: string) => /[一-鿿]/.test(s)

/**
 * Các lựa chọn trắc nghiệm dạng hàng ①②③④, phím 1-4 để chọn.
 * Có `answer` (chế độ luyện tập): sau khi chọn sẽ chấm bằng bút đỏ (vòng tròn ở đáp án đúng, gạch chéo ở lựa chọn sai).
 * Không có `answer` (chế độ thi): chỉ đánh dấu lựa chọn hiện tại.
 */
export default function Choices({ options, picked, answer, onPick }: { options: string[]; picked?: string | null; answer?: string; onPick: (v: string) => void }) {
  const graded = answer !== undefined && picked != null
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.target instanceof HTMLInputElement) return
      const i = Number(e.key) - 1
      if (i >= 0 && i < options.length && !graded) onPick(options[i])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [options, graded, onPick])

  const wrong = graded && picked !== answer
  return (
    <div className={`grid gap-2 text-left ${wrong ? 'shake' : ''}`} key={options.join('|')}>
      {options.map((o, i) => {
        const isAns = graded && o === answer
        const isWrongPick = graded && o === picked && o !== answer
        const sel = !graded && picked === o
        return (
          <button key={o} type="button" disabled={graded} onClick={() => onPick(o)}
            className={`tile flex items-center gap-4 rounded-lg border px-4 py-3 text-lg ${isAns ? 'pop border-accent bg-accent-soft2' : isWrongPick ? 'border-seal/60 bg-rose-100' : sel ? 'border-accent bg-accent-soft2' : graded ? 'bg-surface opacity-50' : 'bg-surface hover:bg-accent-soft'}`}>
            <span aria-hidden className="relative grid size-8 shrink-0 place-items-center text-xl text-slate-500">
              {NUM[i]}
              {isAns && <PenCircle />}
              {isWrongPick && <PenCross />}
            </span>
            <span className={hasHan(o) ? 'hz text-2xl font-bold' : ''}>{o}</span>
            {isAns && <span className="sr-only"> (đáp án đúng)</span>}
            {isWrongPick && <span className="sr-only"> (bạn chọn, sai)</span>}
          </button>
        )
      })}
    </div>
  )
}

import { useEffect, useRef } from 'react'

type Props = {
  open: boolean
  title: string
  message?: string
  confirmText?: string
  cancelText?: string
  danger?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({ open, title, message, confirmText = 'Đồng ý', cancelText = 'Ở lại', danger, onConfirm, onCancel }: Props) {
  const cancelRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    cancelRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onCancel])

  if (!open) return null
  return (
    <div className="dialog-backdrop fixed inset-0 z-50 grid place-items-center bg-black/40 p-4 backdrop-blur-sm" onClick={onCancel}>
      <div role="alertdialog" aria-modal="true" aria-labelledby="cd-title" className="dialog-card w-full max-w-sm space-y-4 rounded-xl border bg-surface p-6 text-center shadow-xl" onClick={e => e.stopPropagation()}>
        <h2 id="cd-title" className="text-lg font-bold">{title}</h2>
        {message && <p className="text-sm text-slate-500">{message}</p>}
        <div className="flex gap-2">
          <button ref={cancelRef} className="tile flex-1 rounded-lg border bg-surface p-2 font-semibold" onClick={onCancel}>{cancelText}</button>
          <button className={`tile shadow flex-1 rounded-lg p-2 font-bold text-white ${danger ? 'bg-seal' : 'bg-accent'}`} onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  )
}

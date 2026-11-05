/** Sắp xếp câu: bấm từ ở ngân hàng để thêm vào câu, bấm từ trong câu để bỏ ra. value = chỉ số các từ đã chọn, nối bằng "|". */
export default function OrderInput({ tokens, value, onChange, disabled }: { tokens: string[]; value: string; onChange: (v: string) => void; disabled?: boolean }) {
  const picked = value ? value.split('|').map(Number) : []
  const free = tokens.map((t, i) => ({ t, i })).filter(x => !picked.includes(x.i))
  const set = (p: number[]) => onChange(p.join('|'))
  return (
    <div className="space-y-3">
      <div className="flex min-h-16 flex-wrap items-center justify-center gap-2 rounded-lg border-2 border-dashed p-2">
        {picked.length === 0 && <span className="text-sm text-slate-400">Bấm các từ bên dưới để ghép câu</span>}
        {picked.map((i, k) => (
          <button key={k} disabled={disabled} onClick={() => set(picked.filter((_, j) => j !== k))} className="rounded-lg bg-accent-soft2 px-3 py-2 text-2xl font-bold">{tokens[i]}</button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {free.map(({ t, i }) => (
          <button key={i} disabled={disabled} onClick={() => set([...picked, i])} className="rounded-lg border bg-surface px-3 py-2 text-2xl font-bold hover:bg-accent-soft">{t}</button>
        ))}
      </div>
      {picked.length > 0 && !disabled && <button className="text-sm text-slate-500 underline" onClick={() => set([])}>Xoá hết</button>}
    </div>
  )
}

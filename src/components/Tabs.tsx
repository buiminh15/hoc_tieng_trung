import { useLayoutEffect, useRef, useState } from 'react'

/** Thanh tab có gạch chân mực trượt sang tab đang chọn. */
export default function Tabs<T extends string>({ tabs, value, onChange }: { tabs: readonly (readonly [T, string])[]; value: T; onChange: (v: T) => void }) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [bar, setBar] = useState({ left: 0, width: 0 })
  useLayoutEffect(() => {
    const el = refs.current[value]
    if (el) setBar({ left: el.offsetLeft, width: el.offsetWidth })
  }, [value, tabs])
  return (
    <div role="tablist" className="relative flex overflow-x-auto border-b-2 border-slate-200">
      {tabs.map(([k, label]) => (
        <button key={k} ref={el => { refs.current[k] = el }} role="tab" aria-selected={value === k} onClick={() => onChange(k)}
          className={`whitespace-nowrap px-4 py-3 text-sm font-semibold ${value === k ? 'text-accent-fg' : 'text-slate-500 hover:text-slate-900'}`}>
          {label}
        </button>
      ))}
      <span aria-hidden className="absolute -bottom-0.5 h-0.5 bg-accent transition-all duration-300 ease-out" style={{ left: bar.left, width: bar.width }} />
    </div>
  )
}

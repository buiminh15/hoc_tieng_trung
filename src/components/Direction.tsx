import type { GlyphKey } from '../data/hsk21/types'

/**
 * Sơ đồ hướng đi của bổ ngữ xu hướng, vẽ theo hình que của sách:
 * người nói (nét đậm, màu ngọc) đứng ở đâu, người/vật di chuyển (nét mảnh) đi theo mũi tên nào.
 * 来 = đi về phía người nói, 去 = rời xa người nói.
 */

const LABEL: Record<GlyphKey, string> = {
  shangLai: '上来: đi từ dưới lên, người nói ở trên',
  shangQu: '上去: đi từ dưới lên, người nói ở dưới',
  xiaLai: '下来: đi từ trên xuống, người nói ở dưới',
  xiaQu: '下去: đi từ trên xuống, người nói ở trên',
  chuLai: '出来: đi từ trong ra, hướng về người nói',
  chuQu: '出去: đi từ trong ra, rời xa người nói',
  guoLai: '过来: sang chỗ người nói',
  guoQu: '过去: rời chỗ người nói sang nơi khác',
  qiLai: '起来: đứng lên',
}

interface Colors { ink: string; speaker: string; arrow: string }

function Person({ x, y, speaker, sit, c }: { x: number; y: number; speaker?: boolean; sit?: boolean; c: Colors }) {
  const col = speaker ? c.speaker : c.ink
  const w = speaker ? 2.6 : 1.8
  return (
    <g stroke={col} strokeWidth={w} strokeLinecap="round" fill="none">
      {sit ? (
        <>
          <circle cx={x} cy={y - 7} r={3.2} fill={speaker ? col : 'none'} />
          <path d={`M${x} ${y - 3.5}V${y + 4}M${x - 4} ${y}H${x + 4}M${x} ${y + 4}H${x + 8}V${y + 11}`} />
        </>
      ) : (
        <>
          <circle cx={x} cy={y - 10} r={3.2} fill={speaker ? col : 'none'} />
          <path d={`M${x} ${y - 6.8}V${y + 4}M${x - 4.5} ${y - 3}H${x + 4.5}M${x} ${y + 4}L${x - 3.5} ${y + 11}M${x} ${y + 4}L${x + 3.5} ${y + 11}`} />
        </>
      )}
      {speaker && <text x={x} y={y + 21} textAnchor="middle" fontSize="8" fill={col} stroke="none" fontWeight="700">tôi</text>}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2, c }: { x1: number; y1: number; x2: number; y2: number; c: Colors }) {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const hx = (r: number, d: number) => x2 - r * Math.cos(a + d)
  const hy = (r: number, d: number) => y2 - r * Math.sin(a + d)
  return (
    <g stroke={c.arrow} fill={c.arrow} strokeWidth={2.4} strokeLinecap="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polygon points={`${x2},${y2} ${hx(7, 0.45)},${hy(7, 0.45)} ${hx(7, -0.45)},${hy(7, -0.45)}`} stroke="none" />
    </g>
  )
}

const HI = { x: 90, y: 28 }
const LO = { x: 30, y: 56 }

export default function Direction({ k, onDark = false, className = '' }: { k: GlyphKey; onDark?: boolean; className?: string }) {
  const c: Colors = onDark
    ? { ink: 'rgb(255 255 255 / 0.7)', speaker: '#55d6be', arrow: '#f0c560' }
    : { ink: 'var(--color-slate-500)', speaker: 'var(--color-accent-fg)', arrow: 'var(--color-gold)' }
  const box = <rect x={6} y={8} width={46} height={68} rx={3} fill="none" stroke={c.ink} strokeWidth={1.4} strokeDasharray="4 3" />
  return (
    <svg viewBox="0 0 120 84" role="img" aria-label={LABEL[k]} className={`shrink-0 ${className}`}>
      {k === 'shangLai' && (<><Person {...LO} c={c} /><Person {...HI} speaker c={c} /><Arrow x1={42} y1={50} x2={76} y2={34} c={c} /></>)}
      {k === 'shangQu' && (<><Person {...LO} speaker c={c} /><Person {...HI} c={c} /><Arrow x1={42} y1={50} x2={76} y2={34} c={c} /></>)}
      {k === 'xiaLai' && (<><Person {...LO} speaker c={c} /><Person {...HI} c={c} /><Arrow x1={78} y1={36} x2={44} y2={52} c={c} /></>)}
      {k === 'xiaQu' && (<><Person {...LO} c={c} /><Person {...HI} speaker c={c} /><Arrow x1={78} y1={36} x2={44} y2={52} c={c} /></>)}
      {k === 'guoLai' && (<><Person x={18} y={44} c={c} /><Person x={102} y={44} speaker c={c} /><Arrow x1={32} y1={42} x2={86} y2={42} c={c} /></>)}
      {k === 'guoQu' && (<><Person x={18} y={44} speaker c={c} /><Person x={102} y={44} c={c} /><Arrow x1={32} y1={42} x2={86} y2={42} c={c} /></>)}
      {k === 'chuLai' && (<>{box}<Person x={29} y={46} c={c} /><Person x={102} y={46} speaker c={c} /><Arrow x1={56} y1={44} x2={86} y2={44} c={c} /></>)}
      {k === 'chuQu' && (<>{box}<Person x={29} y={46} speaker c={c} /><Person x={102} y={46} c={c} /><Arrow x1={56} y1={44} x2={86} y2={44} c={c} /></>)}
      {k === 'qiLai' && (<><Person x={28} y={58} sit c={c} /><Person x={92} y={32} c={c} /><Arrow x1={44} y1={54} x2={78} y2={40} c={c} /></>)}
    </svg>
  )
}

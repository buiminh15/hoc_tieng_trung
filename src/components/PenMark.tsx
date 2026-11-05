/** Dấu chấm bài bằng bút đỏ: vòng tròn khi đúng, gạch chéo khi sai (phân biệt bằng hình dạng, không chỉ bằng màu). */
export function PenCircle() {
  return (
    <svg viewBox="0 0 44 44" className="pen" aria-hidden>
      <path d="M23 4C33 4 41 12 40 22C39 33 30 41 20 40C10 39 3 31 4 21C5 11 13 4 25 6" />
    </svg>
  )
}

export function PenCross() {
  return (
    <svg viewBox="0 0 44 44" className="pen" aria-hidden>
      <path d="M8 8C16 16 28 30 37 38" />
      <path className="pen-2" d="M37 7C29 16 17 29 8 38" />
    </svg>
  )
}

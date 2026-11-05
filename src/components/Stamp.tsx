/** Con dấu đỏ vuông, đóng xuống với hiệu ứng khi vừa xuất hiện. */
export default function Stamp({ text, size = 'md', className = '' }: { text: string; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const dim = size === 'lg' ? 'size-20 text-4xl' : size === 'sm' ? 'size-9 text-lg' : 'size-14 text-2xl'
  return (
    <span aria-hidden className={`stamp hz inline-grid shrink-0 place-items-center border-2 border-seal font-black leading-none text-seal ${dim} ${className}`} style={{ borderRadius: 4 }}>
      {text}
    </span>
  )
}

import { pinyin } from 'pinyin-pro'

const hasSpeech = typeof speechSynthesis !== 'undefined'

function pickVoice() {
  if (!hasSpeech) return undefined
  const vs = speechSynthesis.getVoices()
  return vs.find(v => v.lang.replace('_', '-').toLowerCase() === 'zh-cn') ?? vs.find(v => v.lang.toLowerCase().startsWith('zh'))
}
// Chrome nạp danh sách giọng bất đồng bộ
if (hasSpeech) speechSynthesis.getVoices()

let audio: HTMLAudioElement | null = null
/** Dự phòng khi máy không có giọng Trung: phát âm thanh TTS trực tuyến (cần mạng). */
function speakOnline(text: string, rate: number) {
  audio?.pause()
  audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=${encodeURIComponent(text)}`)
  audio.playbackRate = rate < 0.8 ? 0.8 : 1
  audio.play().catch(() => alert('Không phát được âm thanh. Máy chưa có giọng đọc tiếng Trung và không tải được âm thanh trực tuyến (mở trang /sound để chẩn đoán).'))
}

export function speak(text: string, rate = 0.85) {
  const v = pickVoice()
  if (!hasSpeech || !v) return speakOnline(text, rate)
  const u = new SpeechSynthesisUtterance(text)
  u.lang = v.lang
  u.voice = v
  u.rate = rate
  // Chrome đôi khi bỏ qua speak() gọi ngay sau cancel()
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel()
    setTimeout(() => speechSynthesis.speak(u), 60)
  } else speechSynthesis.speak(u)
}

// Bản đồ "âm tiết có số thanh" -> 1 chữ Hán đọc đúng âm tiết đó (để TTS đọc được pinyin rời)
let map: Map<string, string> | null = null
function build() {
  map = new Map()
  for (let c = 0x4e00; c <= 0x9fa5; c++) {
    const ch = String.fromCharCode(c)
    const p = pinyin(ch, { toneType: 'num', type: 'array' })[0]
    if (p && !map.has(p)) map.set(p, ch)
  }
}

/** Đọc một âm tiết pinyin không dấu (vd "ba", "nü"), mặc định ưu tiên thanh 1. */
export function speakSyllable(syl: string, tone?: number) {
  if (!map) build()
  const base = syl.replace('v', 'ü')
  const order = tone !== undefined ? [tone] : [1, 4, 2, 3, 0]
  for (const t of order) {
    const ch = map!.get(base + (t === 0 ? '0' : t)) ?? (t === 0 ? map!.get(base) : undefined)
    if (ch) return speak(ch, 0.7)
  }
  speak(syl, 0.7)
}

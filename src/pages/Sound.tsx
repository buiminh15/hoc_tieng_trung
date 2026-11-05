import { useEffect, useState } from 'react'

export default function Sound() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [log, setLog] = useState('')
  useEffect(() => {
    const load = () => setVoices(speechSynthesis.getVoices())
    load()
    speechSynthesis.addEventListener('voiceschanged', load)
    return () => speechSynthesis.removeEventListener('voiceschanged', load)
  }, [])
  const zh = voices.filter(v => v.lang.toLowerCase().startsWith('zh'))

  function test(v: SpeechSynthesisVoice) {
    const u = new SpeechSynthesisUtterance('你好，我是小明')
    u.voice = v
    u.lang = v.lang
    u.onstart = () => setLog(`▶ đang đọc bằng ${v.name}`)
    u.onerror = e => setLog(`❌ lỗi: ${e.error}`)
    u.onend = () => setLog(l => l + ' (xong)')
    speechSynthesis.cancel()
    speechSynthesis.speak(u)
  }
  function testOnline() {
    const a = new Audio('https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=' + encodeURIComponent('你好'))
    a.onerror = () => setLog('❌ Âm thanh trực tuyến: không tải được (bị chặn hoặc không có mạng)')
    a.play().then(() => setLog('▶ Âm thanh trực tuyến đang phát')).catch(e => setLog('❌ Âm thanh trực tuyến: ' + e.message))
  }

  return (
    <div className="space-y-3 rounded-xl bg-surface p-4 shadow">
      <h1 className="text-lg font-bold">Kiểm tra âm thanh</h1>
      <p className="text-sm text-slate-500">Trình duyệt: {navigator.userAgent}</p>
      <p>Tổng số giọng trình duyệt thấy: <b>{voices.length}</b> · giọng tiếng Trung: <b>{zh.length}</b></p>
      {zh.length === 0 && <p className="rounded bg-amber-50 p-3 text-sm">Trình duyệt này chưa thấy giọng tiếng Trung nào. Thử mở bằng <b>Microsoft Edge</b> (thường có sẵn giọng Trung), hoặc khởi động lại hẳn trình duyệt/máy sau khi cài ngôn ngữ.</p>}
      <ul className="space-y-1">
        {zh.map(v => (
          <li key={v.name} className="flex items-center gap-2">
            <button className="rounded bg-accent px-3 py-1 text-white" onClick={() => test(v)}>🔊 Thử</button>
            <span>{v.name} <span className="text-slate-500">({v.lang})</span></span>
          </li>
        ))}
      </ul>
      <button className="rounded border px-3 py-1" onClick={testOnline}>Thử âm thanh trực tuyến (dự phòng)</button>
      {log && <p className="text-sm">{log}</p>}
      <details className="text-sm text-slate-500"><summary>Tất cả giọng ({voices.length})</summary>{voices.map(v => <div key={v.name + v.lang}>{v.name} – {v.lang}</div>)}</details>
    </div>
  )
}

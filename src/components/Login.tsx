import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function submit(signUp: boolean) {
    const creds = { email, password }
    const { error } = signUp
      ? await supabase.auth.signUp(creds)
      : await supabase.auth.signInWithPassword(creds)
    setMsg(error ? error.message : signUp ? 'Đã đăng ký, kiểm tra email nếu cần xác nhận' : '')
  }

  return (
    <div className="mx-auto mt-24 max-w-sm space-y-3 rounded-xl bg-surface p-6 shadow">
      <h1 className="text-xl font-bold">学中文 – Đăng nhập</h1>
      <input className="w-full rounded border p-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full rounded border p-2" type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
      <div className="flex gap-2">
        <button className="tile shadow flex-1 rounded-lg bg-accent p-2 font-bold text-white" onClick={() => submit(false)}>Đăng nhập</button>
        <button className="tile flex-1 rounded-lg border bg-surface p-2 font-semibold" onClick={() => submit(true)}>Đăng ký</button>
      </div>
      {msg && <p className="text-sm text-rose-500">{msg}</p>}
    </div>
  )
}

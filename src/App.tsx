import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import Login from './components/Login'
import Words from './pages/Words'
import Review from './pages/Review'
import Library from './pages/Library'
import Book from './pages/Book'
import Lesson from './pages/Lesson'
import PinyinPage from './pages/PinyinPage'
import Practice from './pages/Practice'
import Exam from './pages/Exam'
import HskList from './pages/HskList'
import { GrammarList, GrammarTopicPage } from './pages/Grammar'
import HskExam from './pages/HskExam'
import Sound from './pages/Sound'
import { useTheme } from './lib/theme'

export default function App() {
  const [session, setSession] = useState<Session | null | undefined>(undefined)
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => data.subscription.unsubscribe()
  }, [])

  if (session === undefined) return null
  if (!session) return <Login />

  const nav: [string, string, boolean][] = [
    ['/', 'Giáo trình', pathname === '/' || pathname.startsWith('/books')],
    ['/grammar', 'Ngữ pháp', pathname.startsWith('/grammar')],
    ['/practice', 'Luyện tập', pathname.startsWith('/practice')],
    ['/exam', 'Thi thử', pathname.startsWith('/exam')],
    ['/hsk', 'Đề HSK', pathname.startsWith('/hsk')],
    ['/pinyin', 'Pinyin', pathname.startsWith('/pinyin')],
    ['/review', 'Ôn tập', pathname.startsWith('/review')],
    ['/words', 'Từ vựng', pathname.startsWith('/words')],
  ]
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-slate-50/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-4xl items-center gap-1 px-4 sm:gap-2">
          <NavLink to="/" className="mr-2 flex items-center gap-2 py-2.5" aria-label="Trang đầu">
            <span className="hz grid size-9 place-items-center rounded-md bg-accent text-xl font-black text-white shadow">学</span>
            <span className="hz hidden text-lg font-bold tracking-wide sm:inline">中文</span>
          </NavLink>
          <div className="flex flex-1 overflow-x-auto">
            {nav.map(([to, label, on]) => (
              <NavLink key={to} to={to} className={`relative whitespace-nowrap px-3 py-4 text-sm font-semibold ${on ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>
                {label}
                {on && <span aria-hidden className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" />}
              </NavLink>
            ))}
          </div>
          <button className="grid size-9 place-items-center rounded-full text-lg hover:bg-slate-100" title="Đổi giao diện sáng/tối" aria-label="Đổi giao diện sáng/tối" onClick={toggle}>{theme === 'dark' ? '☀️' : '🌙'}</button>
          <button className="text-sm text-slate-500 hover:text-slate-900" onClick={() => supabase.auth.signOut()}>Thoát</button>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl space-y-4 px-4 pb-20 pt-6">
      <div key={pathname} className="page-in">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/books/:bookId" element={<Book />} />
        <Route path="/books/:bookId/lessons/:id" element={<Lesson />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/grammar" element={<GrammarList />} />
        <Route path="/grammar/:id" element={<GrammarTopicPage />} />
        <Route path="/hsk" element={<HskList />} />
        <Route path="/hsk/:id" element={<HskExam />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/pinyin" element={<PinyinPage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/words" element={<Words />} />
      </Routes>
      </div>
      </main>
    </div>
  )
}

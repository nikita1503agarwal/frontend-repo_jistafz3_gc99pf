import { useState } from 'react'

function Header({ onRefresh }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onRefresh(query.trim())
  }

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 ring-1 ring-blue-400/30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400"><path d="M12 2c.943 0 1.707.764 1.707 1.707v1.778a5.333 5.333 0 0 1 3.809 3.809h1.777A1.707 1.707 0 1 1 21 12c0 .943-.764 1.707-1.707 1.707h-1.777a5.333 5.333 0 0 1-3.809 3.809v1.777A1.707 1.707 0 1 1 12 21a1.707 1.707 0 0 1-1.707-1.707v-1.777A5.333 5.333 0 0 1 6.484 13.707H4.707A1.707 1.707 0 1 1 3 12c0-.943.764-1.707 1.707-1.707h1.777A5.333 5.333 0 0 1 10.293 6.484V4.707C10.293 3.764 11.057 2 12 2z"/></svg>
          </span>
          <div>
            <h1 className="text-white font-semibold text-lg">Омск ночью</h1>
            <p className="text-blue-200/70 text-xs">Зима, фонари, снег — фотогалерея и полезная информация</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Найти локации (собор, набережная, пр.)"
            className="px-3 py-2 w-72 rounded-lg bg-slate-800/70 text-blue-100 placeholder-blue-200/50 outline-none ring-1 ring-white/10 focus:ring-blue-400/40"
          />
          <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">Искать</button>
        </form>
      </div>
    </header>
  )
}

export default Header

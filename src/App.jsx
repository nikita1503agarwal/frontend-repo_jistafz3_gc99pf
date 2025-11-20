import { useState } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import SimInfo from './components/SimInfo'

function App() {
  const [filter, setFilter] = useState('')

  const handleRefresh = (q) => {
    setFilter(q || '')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Header onRefresh={handleRefresh} />

      <main className="relative">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ночные фото Омска</h2>
            <p className="text-blue-200/80 mt-2">Зима, фонари, снег — подборка изображений из открытых источников (Wikimedia Commons). Нажмите на карточку, чтобы открыть страницу источника и атрибуцию.</p>
          </div>

          <Gallery filter={filter} />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <SimInfo />
        </section>

        <footer className="border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-blue-300/70 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            <p>Источник фото: Wikimedia Commons API. При переходе на страницу изображения смотрите лицензию и авторов.</p>
            <a href="/test" className="hover:text-blue-200">Проверка соединения</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

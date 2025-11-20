import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery({ filter }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    const fetchData = async () => {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(`${backend}/api/omsk/photos`)
        const data = await res.json()
        let arr = data.items || []
        if (filter) {
          const q = filter.toLowerCase()
          arr = arr.filter(x => (x.title || '').toLowerCase().includes(q))
        }
        if (active) setItems(arr)
      } catch (e) {
        setError('Не удалось загрузить изображения. Попробуйте позже.')
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchData()
    return () => { active = false }
  }, [filter])

  if (loading) {
    return (
      <div className="py-20 text-center text-blue-200">Загрузка фотографий...</div>
    )
  }

  if (error) {
    return <div className="py-20 text-center text-red-300">{error}</div>
  }

  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <a key={item.id} href={item.page_url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-slate-800/40 hover:ring-blue-400/30 transition-all">
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.title} className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="w-full h-56 bg-slate-700" />
          )}
          <div className="p-3 sm:p-4">
            <h3 className="text-white text-sm line-clamp-2">{item.title}</h3>
            <p className="text-[11px] text-blue-200/70 mt-1">Источник: Wikimedia Commons</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Gallery

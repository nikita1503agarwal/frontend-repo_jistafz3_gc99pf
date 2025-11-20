import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SimInfo() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${backend}/api/sim-info`)
        const d = await res.json()
        setData(d)
      } catch (e) {
        setData({ error: 'Не удалось загрузить информацию' })
      }
    }
    run()
  }, [])

  if (!data) return <div className="text-blue-200">Загрузка информации...</div>
  if (data.error) return <div className="text-red-300">{data.error}</div>

  return (
    <div className="bg-slate-800/40 ring-1 ring-white/10 rounded-2xl p-6">
      <h2 className="text-white text-xl font-semibold mb-4">SIM-карты в Омске</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-blue-200 font-medium mb-2">Операторы</h3>
          <ul className="space-y-2 text-blue-100/90 text-sm">
            {data.operators.map(op => (
              <li key={op.name} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <div>
                  <p className="font-medium text-white">{op.name}</p>
                  <p className="text-blue-200/80">{op.notes}</p>
                  <a className="text-blue-400 hover:text-blue-300 text-sm" href={op.website} target="_blank" rel="noreferrer">Сайт</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-blue-200 font-medium mb-2">Где купить</h3>
          <ul className="space-y-2 text-blue-100/90 text-sm">
            {data.where_to_buy.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-blue-200 font-medium mb-3 mt-5">Требования</h3>
          <ul className="space-y-2 text-blue-100/90 text-sm">
            {data.requirements.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-blue-300/70 text-xs mt-4">{data.disclaimer}</p>
        </div>
      </div>
    </div>
  )
}

export default SimInfo

import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'
import { generarStats } from '../engine/statsGenerator'

const NOMBRES_TEMPORALES = ['ENERGY', 'COURAGE', 'MAGIC', 'CHAOS']

function StatsScreen({ onComplete }) {
  const [stats] = useState(() => generarStats(NOMBRES_TEMPORALES))
  useEffect(() => {
    const espera = setTimeout(onComplete, 3000)
    return () => clearTimeout(espera)
  }, [onComplete])

  return (
    <div>
      <h1>ANALYSIS COMPLETE</h1>
      {stats.map((stat) => (
        <p key={stat.nombre}>
          {stat.nombre} <ProgressBar valor={stat.valor} />
        </p>
      ))}
    </div>
  )
}

export default StatsScreen
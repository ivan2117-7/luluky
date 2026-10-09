import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { generarStats } from '../engine/statsGenerator'

const NOMBRES_TEMPORALES = ['ENERGY', 'COURAGE', 'MAGIC', 'CHAOS']

function StatsScreen() {
  const [stats] = useState(() => generarStats(NOMBRES_TEMPORALES))

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
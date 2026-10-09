import { useState } from 'react'
import StartScreen from './components/StartScreen'
import ScanScreen from './components/ScanScreen'
import AnalyzeScreen from './components/AnalyzeScreen'
import StatsScreen from './components/StatsScreen'


function App() {
  const [estado, setEstado] = useState('READY')

  return (
    <div>
      {estado === 'READY' && (
        <StartScreen onStart={() => setEstado('SCANNING')} />
      )}

      {estado === 'SCANNING' && (
        <ScanScreen onComplete={() => setEstado('ANALYZING')} />
      )}
       {estado === 'ANALYZING' && (
        <AnalyzeScreen onComplete={() => setEstado('SHOWING_STATS')} />
      )}

       {estado === 'SHOWING_STATS' && <StatsScreen />}
    </div>
  )
}

export default App

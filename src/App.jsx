import { useState } from 'react'
import StartScreen from './components/StartScreen'
import ScanScreen from './components/ScanScreen'

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
        {estado === 'ANALYZING' && <h1>ANALYZING</h1>}
    </div>
  )
}

export default App

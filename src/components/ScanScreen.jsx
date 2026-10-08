import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar'


function ScanScreen({ onComplete }) {
  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setProgreso((actual) => (actual >= 100 ? 100 : actual + 10))
    }, 300)

    return () => clearInterval(intervalo)
  }, []) 

useEffect(() => {
    if (progreso < 100) return

    const espera = setTimeout(onComplete, 600)
    return () => clearTimeout(espera)
  }, [progreso, onComplete])
  

  return (
    <div>
      <h1>SCANNING SUBJECT</h1>
      <ProgressBar valor={progreso} />
    </div>
  )
}

export default ScanScreen
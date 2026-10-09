import { useEffect } from 'react'

function AnalyzeScreen({ onComplete }) {
  useEffect(() => {
    const espera = setTimeout(onComplete, 2000)
    return () => clearTimeout(espera)
  }, [onComplete])

  return (
    <div>
      <h1>ANALYZING...</h1>
    </div>
  )
}

export default AnalyzeScreen
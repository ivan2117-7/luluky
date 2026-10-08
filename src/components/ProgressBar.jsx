function ProgressBar({ valor }) {
  const total = 10
  const llenos = Math.round((valor / 100) * total)
  const barra = '█'.repeat(llenos) + '░'.repeat(total - llenos)

  return <p>{barra} {valor}%</p>
}

export default ProgressBar

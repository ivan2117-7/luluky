function StartScreen({ onStart }) {
  return (
    <div>
      <h1>READY</h1>
      <button onClick={onStart}>START</button>
    </div>
  )
}

export default StartScreen
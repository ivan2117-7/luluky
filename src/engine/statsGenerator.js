export function generarValor(minimo = 80, maximo = 100) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
}

export function generarStats(nombres) {
  return nombres.map((nombre) => ({ nombre, valor: generarValor() }))
}
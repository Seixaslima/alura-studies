export function tempoParaSegundo(tempo: string) {
  const [hora = 0, minuto = 0, segundo = 0] = tempo.split(":")
  const horaEmSegundo = Number(hora) * 3600;
  const minutoEmSegundo = Number(minuto) * 60
  return Number(segundo) + minutoEmSegundo + horaEmSegundo
}
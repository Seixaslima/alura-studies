import styles from './Relogio.module.scss'
interface IRelogio {
  tempo: number
}
export default function Relogio({ tempo }: IRelogio) {
  const minutos = Math.floor(tempo / 60);
  const segundo = tempo % 60;

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
  const [segundoDesena, segundoUnidade] = String(segundo).padStart(2, '0')

  return (
    <>
      <span className={styles.relogioNumero} >{minutoDezena}</span>
      <span className={styles.relogioNumero} >{minutoUnidade}</span>
      <span className={styles.relogioDivisao} >:</span>
      <span className={styles.relogioNumero} >{segundoDesena}</span>
      <span className={styles.relogioNumero} >{segundoUnidade}</span>
    </>
  )
}
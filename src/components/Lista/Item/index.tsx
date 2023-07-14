import { ITarefa } from 'interfaces/ITarefa'
import styles from './Item.module.scss'

interface IItem extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  { tarefa, tempo, selecionado, completado, id, selecionaTarefa }: IItem) {

  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""} ${completado ? styles.itemCompletado : ""}`}
      onClick={() => !completado && selecionaTarefa({ tarefa, tempo, selecionado, completado, id })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={styles.concluido} aria-label='Tarefa concluida'></span>}
    </li>
  )
}
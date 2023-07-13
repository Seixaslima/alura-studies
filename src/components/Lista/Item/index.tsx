import { ITarefa } from 'interfaces/ITarefa'
import styles from './Item.module.scss'

interface IItem extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  { tarefa, tempo, selecionado, completado, id, selecionaTarefa }: IItem) {
  console.log("Tarefa Atual: ", { tarefa, tempo, selecionado, completado, id });
  return (
    <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""}`} onClick={() => selecionaTarefa({ tarefa, tempo, selecionado, completado, id })}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
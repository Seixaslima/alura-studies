import { ITarefa } from 'interfaces/ITarefa'
import styles from '../Lista.module.scss'

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
  console.log("Tarefa Atual: ", { tarefa, tempo, selecionado, completado, id });
  return (
    <li className={styles.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
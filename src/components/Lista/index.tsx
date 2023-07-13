import Item from './Item'
import styles from './Lista.module.scss'
import { ITarefa } from 'interfaces/ITarefa'

interface ILista {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: ILista) {

  return (
    <aside className={styles.listaTarefas}>
      <h3>Estudos do dia</h3>
      <ul>
        {tarefas.map(item => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  )
}
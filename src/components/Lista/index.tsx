import Item from './Item'
import styles from './Lista.module.scss'

export default function Lista() {
  const tarefas = [{
    tarefa: "React",
    tempo: "02:00:00"
  },
  {
    tarefa: "javascript",
    tempo: "01:00:00"
  },
  {
    tarefa: "typescript",
    tempo: "03:00:00"
  }]
  return (
    <aside className={styles.listaTarefas}>
      <h3>Estudos do dia</h3>
      <ul>
        {tarefas.map((item, contador) => (
          <Item key={contador} {...item} />
        ))}
      </ul>
    </aside>
  )
}
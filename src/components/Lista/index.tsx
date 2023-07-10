

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
    <aside>
      <h3>Estudos do dia</h3>
      <ul>
        {tarefas.map((item, contador) => (
          <li key={contador}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
import { useState } from 'react'
import Formulario from "components/Formulario";
import Lista from "components/Lista";
import styles from './App.module.scss'
import Cronometro from "components/Cronometro";
import { ITarefa } from 'interfaces/ITarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAtuais => tarefasAtuais.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefaSelecionada.id === tarefa.id
      }
    )))
  }



  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;

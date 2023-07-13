import { useState } from 'react'
import Formulario from "components/Formulario";
import Lista from "components/Lista";
import styles from './App.module.scss'
import Cronometro from "components/Cronometro";
import { ITarefa } from 'interfaces/ITarefa';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;

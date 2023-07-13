import Formulario from "components/Formulario";
import Lista from "components/Lista";
import styles from './App.module.scss'
import Cronometro from "components/Cronometro";


function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;

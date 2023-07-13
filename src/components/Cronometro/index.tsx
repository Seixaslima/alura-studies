import Botao from "components/Botao";
import { useState } from 'react'
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { ITarefa } from "interfaces/ITarefa";
import { tempoParaSegundo } from "common/util/time";

interface ICronometro {
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: ICronometro) {
  const [tempo, setTempo] = useState(0)

  if (selecionado?.tempo) {
    setTempo(tempoParaSegundo(selecionado.tempo))
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o Cronometro</p>
      Tempo: {tempo}
      <div className={styles.relogioWrapper}>

        <Relogio />
      </div>
      <Botao>
        Começar!
      </Botao>
    </div>
  )
}
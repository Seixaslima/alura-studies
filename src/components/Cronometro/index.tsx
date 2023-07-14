import Botao from "components/Botao";
import { useEffect, useState } from 'react'
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import { ITarefa } from "interfaces/ITarefa";
import { tempoParaSegundo } from "common/util/time";

interface ICronometro {
  selecionado: ITarefa | undefined
  completado: () => void
}

export default function Cronometro({ selecionado, completado }: ICronometro) {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundo(selecionado.tempo))
    }
  }, [selecionado])

  function regressiva(contador: number) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      completado()
    }, 1000)
  }

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o Cronometro</p>
      <div className={styles.relogioWrapper}>

        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)}>
        Começar!
      </Botao>
    </div>
  )
}
import { Component, ReactNode } from 'react';
import styles from './Botao.module.scss'

interface IBotao {
  children: ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

function Botao({ children, type = "button", onClick }: IBotao) {

  return (
    <button type={type} className={styles.botao} onClick={onClick}>
      {children}
    </button>
  )

}

export default Botao

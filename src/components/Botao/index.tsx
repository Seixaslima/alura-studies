import { Component, ReactNode } from 'react';
import styles from './Botao.module.scss'

class Botao extends Component<{ children: ReactNode, type?: "button" | "submit" | "reset" | undefined }> {
  render() {
    const { type = "button", children } = this.props
    return (
      <button type={type} className={styles.botao}>
        {children}
      </button>
    )
  }
}

export default Botao

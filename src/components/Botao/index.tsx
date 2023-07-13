import { Component, ReactNode } from 'react';
import styles from './Botao.module.scss'

class Botao extends Component<{children:ReactNode}> {
  render() {
    return (
      <button className={styles.botao}>
        {this.props.children}
      </button>
    )
  }
}

export default Botao

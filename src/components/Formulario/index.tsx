import Botao from 'components/Botao'
import React, { Component } from 'react'
import styles from './Formulario.module.scss'

export default class Formulario extends Component {
  render() {
    return (
      <form className={styles.novaTarefa}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor=""> Tempo</label>
          <input type="time"
            step='1'
            name='tempo'
            id='tempo'
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao>
          Adicionar
        </Botao>
      </form>
    )
  }
}

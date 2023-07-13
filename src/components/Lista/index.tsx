import { useState } from 'react'
import Item from './Item'
import styles from './Lista.module.scss'
import { ITarefa } from 'interfaces/ITarefa'

export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {

  return (
    <aside className={styles.listaTarefas}>
      <h3>Estudos do dia</h3>
      <ul>
        {tarefas.map((item, contador) => (
          <Item key={contador} {...item} />
        ))}
      </ul>
    </aside>
  )
}
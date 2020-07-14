import React from 'react'
import styles from './todoItem.module.css'

export const TodoItem = ({ text, done, setDone }) => (
	<li className={styles.container}>
		<input type='checkbox' checked={done} onChange={setDone} />
		<h1>{text}</h1>
	</li>
)

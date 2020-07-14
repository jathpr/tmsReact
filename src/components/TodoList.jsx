import React from 'react'
import { TodoItem } from 'components/TodoItem'
// import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, setDone }) => (
	<ul>
		{todos.map(({ text, id, done }) => (
			<TodoItem key={id} text={text} done={done} setDone={() => setDone(id)} />
		))}
	</ul>
)

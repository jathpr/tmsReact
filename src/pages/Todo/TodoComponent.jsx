import React, { useEffect } from 'react'
import { TodoList } from '../../components/TodoList'
import { AddTodo } from '../../components/AddTodo'
import { SelectTab as NewTab } from '../../components/SelectTab'

export const TodoComponent = ({ todos, addTodo, getTodos, setDone, tab, setTab }) => {
	useEffect(() => {
		getTodos()
	}, [])

	return (
		<>
			<header>ToDo List</header>
			<TodoList todos={todos} setDone={setDone} />
			<AddTodo addTodo={addTodo} />
			<NewTab setTab={setTab} tab={tab} />
		</>
	)
}

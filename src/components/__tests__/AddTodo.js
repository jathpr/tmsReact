import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { AddTodo } from '../AddTodo'
import renderer from 'react-test-renderer'

test('shows AddTodo', () => {
	const testMessage = 'Add'
	render(<AddTodo />)

	// query* functions will return the element or null if it cannot be found
	// get* functions will return the element or throw an error if it cannot be found
	expect(screen.queryByText(testMessage)).not.toBeNull()

	fireEvent.change(screen.getByDisplayValue(''), {
		target: { value: 'chuck' },
	})

	expect(screen.getByDisplayValue('chuck')).toBeDefined()
})

it('AddTodo renders correctly', () => {
	const tree = renderer.create(<AddTodo />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('AddTodo renders correctly', () => {
	const tree = renderer.create(<AddTodo />).toJSON()
	expect(tree).toMatchInlineSnapshot(`
		Array [
		  <input
		    onChange={[Function]}
		    value=""
		  />,
		  <button
		    onClick={[Function]}
		  >
		    Add
		  </button>,
		]
	`)
})

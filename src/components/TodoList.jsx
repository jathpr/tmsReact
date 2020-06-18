import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, setDone }) => {
  return (
    <ul>
      {todos.map(({ text, id, done }) => (
        <TodoItem key={id} text={text} done={done} setDone={() => setDone(id)} />
      ))}
    </ul>
  );
};

import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addTodo({ text: input, done: false })}>Add</button>
    </>
  );
};

import React from 'react';
import styles from './todoItem.module.css';

export const TodoItem = ({ text, done, setDone }) => {
  return (
    <li className={styles.container}>
      <input type="checkbox" checked={done} onChange={setDone}></input>
      <h1>{text}</h1>
    </li>
  );
};

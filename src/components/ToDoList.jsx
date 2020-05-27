import React from 'react';
import { ToDoItem } from './ToDoItem';
import { List } from 'antd';

function ToDoList({ items, onDone, onRemove }) {
  return (
    <List>
      {items.map((item) => {
        if (!item.active) return null;
        return <ToDoItem key={item.id} item={item} onDone={onDone} onRemove={onRemove}></ToDoItem>;
      })}
    </List>
  );
}

export { ToDoList };

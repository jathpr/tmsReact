import React from 'react';
import { toggleDone, toggleRemove, getNewId } from './utils';
import { ToDoList } from './ToDoList';
import { AddItem } from './AddItem';
import { Menu } from './Menu';
import { RenderList } from './RenderList';

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: 'Купить молоко', done: false, active: true },
        { id: 1, name: 'Купить хлеб', done: true, active: true },
        { id: 2, name: 'Купить масло', done: false, active: false },
      ],
    };
  }

  handleDone = (id) => {
    this.setState((oldState) => ({ list: toggleDone(oldState.list, id) }));
  };

  handleRemove = (id) => {
    this.setState((oldState) => {
      const newList = oldState.list.map((el) => {
        if (el.id !== id) return el;
        return { ...el, active: !el.active };
      });
      return { list: newList };
      return { list: toggleRemove(oldState.list, id) };
    });
  };

  handleAdd = (name) => {
    this.setState((state) => {
      const newId = getNewId(state.list);
      const newTask = { id: newId, name, done: false, active: true };
      return { list: [...state.list, newTask] };
    });
  };

  render() {
    const { list: items } = this.state;

    return (
      <>
        <Menu />
        <RenderList items={items} onDone={this.handleDone} onRemove={this.handleRemove} />
        <AddItem onAdd={this.handleAdd} />
      </>
    );
  }
}

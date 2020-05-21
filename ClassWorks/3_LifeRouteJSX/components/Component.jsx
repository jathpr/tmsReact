import React from 'react';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], newTask: '' };
  }

  handleAddTask = () => {
    this.setState((state) => ({ tasks: [...state.tasks, state.newTask] }));
  };

  handleInput = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.tasks.map((task) => (
            <li>{task}</li>
          ))}
        </ul>
        <input value={this.newTask} onChange={this.handleInput}></input>
        <button onClick={this.handleAddTask}>Add task</button>
      </>
    );
  }
}

export { Component };

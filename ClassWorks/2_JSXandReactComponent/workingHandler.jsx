import React from 'react';

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dodo',
    };
    this.handleAddDo = this.handleAddDo.bind(this);
  }

  handleAddDo() {
    this.setState((state) => ({
      name: state.name + 'do',
    }));
  }

  render() {
    return (
      <>
        <div>Hello {this.state.name}</div>
        <button onClick={this.handleAddDo}>Add "do" to name</button>
      </>
    );
  }
}

import React from 'react';

export class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSetName() {
    this.setState({ name: 'Dodo' });
  }

  render() {
    return (
      <>
        <div>Hello {this.state.name}</div>
        <button onClick={this.handleSetName}>Set name</button>
      </>
    );
  }
}

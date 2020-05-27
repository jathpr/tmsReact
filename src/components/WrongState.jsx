import React from 'react';

export class WrongState extends React.Component {
  state = {
    counter: 1,
  };

  incrementCounter = () => this.setState({ counter: this.state.counter + 1 });
  // incrementCounter = () => this.setState((state) => ({ counter: state.counter + 1 }));

  massIncrement = () => {
    // this code will lead to not what you expect
    this.incrementCounter();
    this.incrementCounter();
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.massIncrement}>Add 2</button>
      </div>
    );
  }
}

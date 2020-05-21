import React from 'react';

export class LifeCycles extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    // this.state = {date: }
  }

  componentDidMount() {
    console.log('Bye');
  }

  render() {
    console.log('LifeCycles -> render -> render');

    return <div>Hello</div>;
  }
}

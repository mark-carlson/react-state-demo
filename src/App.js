import React from 'react';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('btn clicked!');
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Click counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );

  }
}

export default App;

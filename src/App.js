import React from 'react';

import './App.css';


class App extends React.Component {
  state = { // ES7 Property Initializer
    counter: 0
  }

  handleClick = () => { // Changed this to a fat arrow function so we don't have to bind this
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

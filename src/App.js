import React, { useState } from 'react';

import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => { 
    console.log('btn clicked!');
    setCounter(counter + 1);
  }

    return (
      <div className="App">
        <h1>Click counter: {counter}</h1>
        <button onClick={handleClick}>Click me!</button>
      </div>
    );


}

export default App;

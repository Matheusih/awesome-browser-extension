import React, { useContext } from 'react';
import './App.css';
import { AppContext } from './providers/app.provider';

function App() {
  const { counter, incrementCounter, decrementCounter } = useContext(AppContext);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>
          +
        </button >
        <button onClick={decrementCounter}>
          -
        </button>
      </header>
    </div>
  );
}

export default App;

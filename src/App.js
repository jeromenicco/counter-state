import React from 'react';
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src='https://www.netclipart.com/pp/m/410-4103890_crosshair-png-aim-fortnite-kill-icon-png.png'
          className="App-logo" 
          alt="logo" 
        />
        <Counter />
      </header>
    </div>
  );
}

export default App;

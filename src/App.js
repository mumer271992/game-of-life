import React from 'react';

import './App.css';
import Game from './components/Game/GameHOC';

function App() {
  return (
    <div className="App">
      <h1>Conway's game of life simple version</h1>
      <Game />
    </div>
  );
}

export default App;

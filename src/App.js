import React from 'react';
import List from './List';
import './App.css';
import Stage from './Stage'

function App(props) {
  return (
    <main className="App">
      <div className="participant-list">
        <List cards={props.store.participants} />
      </div>

      <div className="stage">
        <Stage participants={props.store.participants} />
      </div>

      <div className="chatLog">

      </div>


    </main>
  );
}

export default App;
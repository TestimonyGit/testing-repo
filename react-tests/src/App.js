import React from 'react';
import './App.css';
import Button from './Button';

function App() {
  let buttonText = 'button text';
  return (
    <div className="App">
      <Button buttonText={buttonText}></Button>
    </div>
  );
}

export default App;

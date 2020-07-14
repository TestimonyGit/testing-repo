import React from 'react';
import './button.css';

function Button({buttonText}) {
  function changeData() {
    console.log('data');
    buttonText = '';
  }

  return (
    <button 
      onClick={changeData}
      className="button">
      {buttonText}
    </button>
  );
}

export default Button;
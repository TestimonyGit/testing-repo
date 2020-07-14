import React from 'react';
import './opened-tab-input.css';

function OpenedTabInput({selectedTab}) {
  return (
    <input val={selectedTab}></input>
  );
}

export default OpenedTabInput;
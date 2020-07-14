import React, {useState} from 'react';
import './app.css';
import Button from './button';
import OpenedTabInput from './opened-tab-input';

function App() {
  const [selectedTab, setSelectedTab] = useState('none');
  return (
    <div className="App">
      {selectedTab}
      <OpenedTabInput selectedTab={selectedTab}></OpenedTabInput>
      <Button buttonText={selectedTab}></Button>
    </div>
  );
}

export default App;

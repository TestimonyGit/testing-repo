import React from 'react';
import Child from './child';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataForChild: 'dataForChild'
    }
  }

  changeData() {
    this.setState({dataForChild: 'dataChanged'})
  }

  render() {
    return (
      <div className="app">
        <h1>Application with classes instead of hooks</h1>
        <h1>Data in a parent - {this.state.dataForChild}</h1>
        <Child 
          value={this.state.dataForChild}
          onClick={() => this.changeData()}
        ></Child>
      </div>
    )
  }
}

// State component. Passes functions to change states, passes state as props.

export default App;
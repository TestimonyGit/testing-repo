import React from 'react';
import Child from './child';
import Input from './input';
import Text from './text';

class App extends React.Component {
  constructor(props) {
    console.log('Constructing');
    super(props);
    this.state = {
      dataForChild: 'dataForChild',
      inputValue: 'initial value',
      customers: ['Diana', 'Jeff', 'Joe', 'Bob']
    }
  }

  changeData() {
    console.log('Changing data');
    this.setState({...this.state, dataForChild: 'dataChanged'})
  }

  changeInputData(value) {
    console.log(value);
    console.log('Changing input data');
    this.setState({...this.state, inputValue: value})
  }

  render() {
    console.log('rendering App');
    const customers = this.state.customers.map(customer => <Text text={customer}></Text>)
    return (
      <div className="app">
        <h1>Application with classes instead of hooks</h1>
        <h1>Data in a parent - {this.state.dataForChild}</h1>
        {customers}
        <Child 
          value={this.state.dataForChild}
          onClick={() => this.changeData()}
        ></Child>
        <Input 
          value={this.state.inputValue}
          onChange={() => this.changeInputData()}
        ></Input>
      </div>
    )
  }
}

// State component. Passes functions to change states, passes state as props.

export default App;
import React from 'react';

class Child extends React.Component {
  render() {
    console.log('rendering Child');
    return (
      <input 
        className="child"
        value={this.props.value}
        onChange={() => this.props.onChange()} 
      >
      </input>
    )
  }
}

// Props component (stateless). Listeners are passed from parent state component

export default Child;
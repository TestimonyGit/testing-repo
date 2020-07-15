import React from 'react';

class Child extends React.Component {
  render() {
    console.log('rendering Child');
    return (
      <input 
        className="child"
        value={this.props.value}
        onChange={event => this.props.onChange(event)} 
      >
      </input>
    )
  }
}

// Props component (stateless). Listeners are passed from parent state component

export default Child;
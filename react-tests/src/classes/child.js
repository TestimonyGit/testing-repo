import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <button 
        className="child" 
        onClick={() => this.props.onClick()} 
      >
        {this.props.value}
      </button>
    )
  }
}

// Props component (stateless). Listeners are passed from parent state component

export default Child;
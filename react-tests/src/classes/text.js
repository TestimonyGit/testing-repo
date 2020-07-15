import React from 'react';
import './text.css';

class Text extends React.Component {
  render() {
    return (
      <h4 
        className="text">
        {this.props.children}
      </h4>
    )
  }
}

export default Text;
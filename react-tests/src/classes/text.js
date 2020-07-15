import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <h4>
        {this.props.children}
      </h4>
    )
  }
}

export default Text;
import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default Text;
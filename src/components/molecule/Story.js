import React, { Component } from 'react';

class Story extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.subtitle}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Story;

import React, { Component } from 'react';

class Story extends Component {
  state = {};
  render() {
    return (
      <div className="div--story">
        <img src="" alt="" />
        <p>image</p>
        <div className="div__text--story">
          <p>{this.props.title}</p>
          <p>{this.props.subtitle}</p>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Story;

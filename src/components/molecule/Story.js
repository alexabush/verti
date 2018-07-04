import React, { Component } from 'react';

class Story extends Component {
  state = {};
  render() {
    return (
      <div className="story__container">
        <div className="div__img--story">
          <img className="img" src={this.props.image} alt="" />
        </div>
        <div className="div__text--story">
          <h2 className="story__h2">{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
          <p className="story__text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Story;

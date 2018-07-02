import React, { Component } from 'react';

class FooterText extends Component {
  state = {};
  render() {
    const linkLis = this.props.links.map(text => {
      return (
        <li>
           <a href="#">{text}</a>;
        </li>
      );
    });
    return (
      <div>
        <p>{this.props.title}</p>
        <ul>{linkLis}</ul>
      </div>
    );
  }
}

export default FooterText;

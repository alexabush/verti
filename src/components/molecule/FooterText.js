import React, { Component } from 'react';

class FooterText extends Component {
  state = {};
  render() {
    const linkLis = this.props.links.map(text => {
      return (
        <li className="footerText__li">
          <a className="footerText__a" href="#">
            {text}
          </a>;
        </li>
      );
    });
    return (
      <div className="footerText__container">
        <h3 className="footerText__title">{this.props.title}</h3>
        <ul>{linkLis}</ul>
      </div>
    );
  }
}

export default FooterText;

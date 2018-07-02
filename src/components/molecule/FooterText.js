import React, { Component } from 'react';

class FooterText extends Component {
  state = {};
  render() {
    const linkLis = this.props.links.map(text => {
      return (
        <li className="footer__FooterText--li">
          <a className="footer__FooterText--a" href="#">
            {text}
          </a>;
        </li>
      );
    });
    return (
      <div className="footer__FooterText--div">
        <p>{this.props.title}</p>
        <ul>{linkLis}</ul>
      </div>
    );
  }
}

export default FooterText;

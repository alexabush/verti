import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="div--header">
        <div className="div__text--header">
          <h1 className="h1--header">Hi. This is Verti.</h1>
          <h2 className="h2--header">
            It's a free responsive site template by HTML5 UP
          </h2>
        </div>
        <div className="div__buttons--header">
          <button className="header__button header__button--1">
            Ok let's go
          </button>
          <button className="header__button header__button--2">
            More info
          </button>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header__div">
        <div className="header-heading__div">
          <h1 className="header-heading__h1">Hi. This is Verti.</h1>
          <h2 className="header-heading__h2">
            It's a free responsive site template by HTML5UP
          </h2>
        </div>
        <div className="header-buttons__div">
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

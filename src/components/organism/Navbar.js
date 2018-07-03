import React, { Component } from 'react';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="navbar__div--logo">
          <div className="navbar__div--header">
            <h1 className="navbar__h1">Verti</h1>
          </div>
          <p className="navbar__p--subheader">by HTML5 UP</p>
        </div>

        <ul className="navbar__ul--links">
          <li className="navbar__li">Welcome</li>
          <li className="navbar__li">Dropdown</li>
          <li className="navbar__li">Left Sidebar</li>
          <li className="navbar__li">Right Sidebar</li>
          <li className="navbar__li">No Sidebar</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-logo__div">
          <p>by HTML5 UP</p>
        </div>
        <ul className="nav-bar-links__ul">
          <li className="nav-bar-link__li">Welcome</li>
          <li className="nav-bar-link__li">Dropdown</li>
          <li className="nav-bar-link__li">Left Sidebar</li>
          <li className="nav-bar-link__li">Right Sidebar</li>
          <li className="nav-bar-link__li">No Sidebar</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

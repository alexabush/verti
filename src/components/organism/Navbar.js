import React, { Component } from 'react';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <p>by HTML5 UP</p>
        </div>
        <ul>
          <li>Welcome</li>
          <li>Dropdown</li>
          <li>Left Sidebar</li>
          <li>Right Sidebar</li>
          <li>No Sidebar</li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

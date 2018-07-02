import React, { Component } from 'react';

class Copy extends Component {
  state = {};
  render() {
    return (
      <div className="copy__div">
        <div className="copy-images__div">
          <h3>Interesting stuff</h3>
          <div>
            <p>photos</p>
          </div>
          <button>More</button>
        </div>
        <div className="copy-text__div">
          <h2>So what's this all about?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            repellat nulla, nesciunt minima placeat ea sed quia at.
            Reprehenderit cumque minus provident asperiores amet nemo natus,
            perspiciatis sit impedit iure.
          </p>
          <button className="copy-text__button">Continue Reading</button>
        </div>
      </div>
    );
  }
}

export default Copy;

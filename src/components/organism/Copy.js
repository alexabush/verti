import React, { Component } from 'react';
import grasslandsImg from '../../static/GrasslandsMountains.jpg';

class Copy extends Component {
  state = {};
  render() {
    return (
      <div className="copy__container">
        <div className="copy__images-container">
          <h3>Interesting stuff</h3>
          <div className="images__container">
            <div className="img__container">
              <img className="img" src={grasslandsImg} alt="" />
            </div>
            <div className="img__container">
              <img className="img" src={grasslandsImg} alt="" />
            </div>
            <div className="img__container">
              <img className="img" src={grasslandsImg} alt="" />
            </div>
            <div className="img__container">
              <img className="img" src={grasslandsImg} alt="" />
            </div>
          </div>
          <button className="button button--blue copy__button">More</button>
        </div>
        <div className="copy__text-container">
          <h2>So what's this all about?</h2>
          <p className="copy__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            repellat nulla, nesciunt minima placeat ea sed quia at.
          </p>
          <p className="copy__text">
            Reprehenderit cumque minus provident asperiores amet nemo natus,
            perspiciatis sit impedit iure.
          </p>
          <p className="copy__text">
            Reprehenderit cumque minus provident asperiores amet nemo natus,
            perspiciatis sit impedit iure.
          </p>
          <button className="button button--blue copy__button">
            Continue Reading
          </button>
        </div>
      </div>
    );
  }
}

export default Copy;

import React, { Component } from 'react';
import Story from '../molecule/Story';
import grasslandsImg from '../../static/GrasslandsMountains.jpg';

class Stories extends Component {
  state = {
    stories: [
      {
        title: 'Some nice plants',
        subtitle: 'nice',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo temporibus magnam repellendus optio asperiores, in illum.',
        image: grasslandsImg
      },
      {
        title: 'cool mountain',
        subtitle: 'so fresh',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo temporibus magnam repellendus optio asperiores, in illum.'
      },
      {
        title: 'a city or something',
        subtitle: 'oh lights and stuff',
        text:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo temporibus magnam repellendus optio asperiores, in illum.'
      }
    ]
  };
  render() {
    //modify so it takes only first 3
    const storyLis = this.state.stories.map(
      ({ title, subtitle, text, image }) => {
        return (
          <Story image={image} title={title} subtitle={subtitle} text={text} />
        );
      }
    );
    return (
      <div className="div--stories">
        <ul className="ul--stories">{storyLis}</ul>
      </div>
    );
  }
}

export default Stories;

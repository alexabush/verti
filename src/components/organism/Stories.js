import React, { Component } from 'react';
import Story from '../molecule/Story';
class Stories extends Component {
  state = {
    stories: [
      { title: 'Some nice plants', subtitle: 'nice', text: 'lorem' },
      { title: 'cool mountain', subtitle: 'so fresh', text: 'lorem' },
      {
        title: 'a city or something',
        subtitle: 'oh lights and stuff',
        text: 'lomre'
      }
    ]
  };
  render() {
    //modify so it takes only first 3
    const storyLis = this.state.stories.map(({ title, subtitle, text }) => {
      return <Story title={title} subtitle={subtitle} text={text} />;
    });
    return (
      <div className="div--stories">
        <ul className="ul--stories">{storyLis}</ul>
      </div>
    );
  }
}

export default Stories;

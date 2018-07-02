import React, { Component } from 'react';
import FooterText from '../molecule/FooterText';

class Footers extends Component {
  state = {
    textBlocks: [
      {
        title: 'Random Stuff',
        links: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'At eligendi quae aperiam vero doloremque quos deleniti voluptatem,saepe optio similique nostrum delectus nulla ratione iste.',
          'adipisicing neque facere magnam eius molestias'
        ]
      },
      {
        title: 'Random Stuff',
        links: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'At eligendi quae aperiam vero doloremque quos deleniti voluptatem,saepe optio similique nostrum delectus nulla ratione iste.',
          'adipisicing neque facere magnam eius molestias'
        ]
      },
      {
        title: 'Random Stuff',
        links: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          'At eligendi quae aperiam vero doloremque quos deleniti voluptatem,saepe optio similique nostrum delectus nulla ratione iste.',
          'adipisicing neque facere magnam eius molestias'
        ]
      }
    ]
  };
  render() {
    //modify so it takes only first 3
    const footerTextLis = this.state.textBlocks.map(({ title, links }) => {
      return <FooterText title={title} links={links} />;
    });
    return (
      <div className="footer__div">
        <ul className="footer__ul">{footerTextLis}</ul>
      </div>
    );
  }
}

export default Footers;

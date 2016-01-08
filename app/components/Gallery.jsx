import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Lightbox from 'react-images';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const IMAGE_NAMES = ['cat', 'cats', 'chameleon', 'dog', 'ducks', 'goat',
 'ostrich', 'pigeon', 'pigs', 'seagulls', 'wasp', 'yawn'];
const IMAGES = IMAGE_NAMES.map(img => {
  return {
    src: `./images/800-${img}.jpg`,
    thumbnail: `./images/thumbnail-${img}.jpg`,
    srcset: [
    `./images/1024-${img}.jpg 1024w`,
    `./images/800-${img}.jpg 800w`,
    `./images/500-${img}.jpg 500w`,
    `./images/320-${img}.jpg 320w`,
    ],
    caption: capitalizeFirstLetter(img)
  };
});

/*
isOpen={this.state.lightboxIsOpen}
onClickPrev={this.gotoPrevious}
onClickNext={this.gotoNext}
onClose={this.closeLightbox}
*/

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  closeLightbox() {

  }

  gotoPrevious() {

  }

  gotoNext() {

  }

  render() {
    return (
      <div>
        <Jumbotron>
          <p>Na chate môže byť ubytovaných až 9 hostí. Týždenné a víkendové
          pobyty sú uprednostnené. Po príchode je chata plne k dispozícii.
          Domáci miláčikovia sú vítaní.</p>
        </Jumbotron>
        <Lightbox
          images={[{ src: require('../img/img1.png') }, { src: require('../img/img4.png') }]}
          isOpen={true}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

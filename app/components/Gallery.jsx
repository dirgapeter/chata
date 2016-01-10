import React from 'react';
import { Well, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import Lightbox from 'react-images';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  renderGallery() {
    if (!this.props.images) {
      return;
    }
    let gallery = this.props.images.map((obj, i) => {
      return (
        <Col key={`col-row-${i}`} xs={6} sm={3}>
          <Thumbnail src={obj.thumbnail} href="#/" onClick={(event) => this.openLightbox(i, event)}/>
        </Col>
      );
    });

    return (
      <div>
        {gallery}
      </div>
    );
  }

  render() {
    return (
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Well>
            <p>Obývateľné su dve podlažia s celkovou kapacitou pre 9 osôb.
            Cez veľkú terasu sa vchádza do vstupnej chodbičky, odkiaľ vedú dvere
            do samostatného WC a priestrannej kúpeľne. Ďalej sa na prízemí
            nachádza veľká hala s krbom a kuchyňa. Z haly vedú pohodlné schody
            na prvé poschodie, kde sú dve izby a WC s umývadlom. Na druhom
            poschodí sú ďalšie dve izby. Vykurovanie je riešené krbom a
            elektrickými konvektormi. Na pozemku pri chate je altánok
            s posedením a grilom.</p>
          </Well>
        </Col>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
          theme={this.props.theme}
        />
      </Row>
    );
  }
}

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  images: React.PropTypes.array,
  heading: React.PropTypes.string,
  subheading: React.PropTypes.string,
  sepia: React.PropTypes.bool,
};

const IMAGE_NAMES = ['3', '5', '8', '6',
  '10', '11', '14', '16',
  '13', '18', '20', '19',
  '17', '23', '21', '22',
  '24', '26', '27', '29',
  '31', '34', '36', '38'];

const IMAGES = IMAGE_NAMES.map(img => {
  return {
    src: require(`../img/img${img}/img${img}.jpg`),
    thumbnail: require(`../img/img${img}/thumb.jpg`)
  };
});

Gallery.defaultProps = { images: IMAGES };

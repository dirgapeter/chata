import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap';

export default class GeoLocation extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <p>Na chate môže byť ubytovaných až 9 hostí. Týždenné a víkendové pobyty sú uprednostnené. Po príchode je chata plne k dispozícii. Domáci miláčikovia sú vítaní.</p>
        </Jumbotron>
        <Image className="center-block" src="https://maps.googleapis.com/maps/api/staticmap?autoscale=2&size=600x400&maptype=satellite&key=AIzaSyCTpKtxz_BFNcYKkHXPFGLFLfvd9yG4wLo&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0000ff%7C48.876149,+19.559930" alt="Chata v Krpáčove na 48.876149, 19.559930" responsive/>
        &nbsp;
      </div>
    );
  }
}

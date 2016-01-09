import React from 'react';
import { Image, Jumbotron, Col } from 'react-bootstrap';

export default class GeoLocation extends React.Component {
  render() {
    return (
      <Col md={12} sm={12} xs={12}>
        <Jumbotron>
          <p>Chata sa nachádza na južných svahoch Nízkych Tatier, v obľúbenej
          rekreačnej oblasti Krpáčovo, len pár kilometrov vzdialenej od
          rekreačnej oblasti Tále a Chopok-juh. Je sitovaná v lese, na peknom
          slnečnom pozemku s dobrým prístupom v zime.</p>
        </Jumbotron>
        <Image className="center-block" src="https://maps.googleapis.com/maps/api/staticmap?autoscale=2&size=600x400&maptype=satellite&key=AIzaSyCTpKtxz_BFNcYKkHXPFGLFLfvd9yG4wLo&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x0000ff%7C48.876149,+19.559930" alt="Chata v Krpáčove na 48.876149, 19.559930" responsive/>
        &nbsp;
      </Col>
    );
  }
}

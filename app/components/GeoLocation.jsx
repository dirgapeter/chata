import React from 'react';
import { Image, Well, Row, Col } from 'react-bootstrap';

export default class GeoLocation extends React.Component {
  render() {
    return (
      <Row id="location">
        <Col md={12} sm={12} xs={12}>
          <Well>
            <p>Chata sa nachádza na južných svahoch Nízkych Tatier, v obľúbenej
            rekreačnej oblasti Krpáčovo, len pár kilometrov vzdialenej od
            rekreačnej oblasti Tále a Chopok-juh. Je situovaná v lese, na peknom
            slnečnom pozemku s dobrým prístupom v zime.</p>
          </Well>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Image className="center-block" src={require('../img/poloha.png')} alt="Chata v Krpáčove na 48.876149, 19.559930" responsive/>
          &nbsp;
        </Col>
      </Row>
    );
  }
}

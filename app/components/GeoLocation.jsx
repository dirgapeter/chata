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
            rekreačnej oblasti Tále a Chopok-juh. Cesta zo smeru od Podbrezovej
             (Lopeja) je aj v zime dobre udržiavaná. Cesta z Tálov je užsia a
            v zime je potrebné vačšinou použiť reťaze.</p>
          </Well>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Image className="center-block" src={require('../img/poloha.png')} alt="Chata v Krpáčove na 48.876149, 19.559930" responsive/>
          &nbsp;
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Well>
            <p>Chata je situovaná v lese, na peknom slnečnom pozemku s dobrým
            prístupom v zime. GPS poloha je 48.876149, 19.559930. Dá sa k nej
            dostať autom tak, že sa odbočí z hlavnej cesty (Dolná Lehota-Lopej)
            na hotel Polianka a hneď prvá odbočka doľava na poľnú cestu. Potom po
            poľnej ceste smerom spať k hlavnej ceste a prvá odbočka vpravo až
            k chate.</p>
          </Well>
        </Col>
      </Row>
    );
  }
}

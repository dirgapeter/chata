import React from 'react';
import { Well, Row, Col, Image } from 'react-bootstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <Row>
        <Col md={6} sm={6} xs={12}>
          <Well>
            <p>Chata sa nachádza na južných svahoch Nízkych Tatier, v obľúbenej rekreačnej oblasti Krpáčovo, len pár kilometrov vzdialenej od rekreačnej oblasti Tále a Chopok-juh. Je situovaná v lese, na peknom slnečnom pozemku s dobrým prístupom v zime.</p>
          </Well>
        </Col>
        <Col md={6} sm={6} xs={12}>
          <Image className="center-block" src={require('../img/img1.png')} />
          &nbsp;
        </Col>
        <Col md={3} sm={3} xs={6}>
          <Image className="center-block" src={require('../img/img7.png')} />
          &nbsp;
        </Col>
        <Col md={3} sm={3} xs={6}>
          <Image className="center-block" src={require('../img/img6.png')} />
          &nbsp;
        </Col>
        <Col md={6} sm={6} xs={12}>
          <Well>
            <p>Obývateľné su dve podlažia s celkovou kapacitou pre 9 osôb. Cez veľkú terasu sa vchádza do vstupnej chodbičky, odkiaľ vedú dvere do samostatného WC a priestrannej kúpeľne. Ďalej sa na prízemí nachádza veľká hala s krbom a kuchyňa. Z haly vedú pohodlné schody na prvé poschodie, kde sú dve izby a WC s umývadlom. Na druhom poschodí sú ďalšie dve izby. Vykurovanie je riešené krbom a elektrickými konvektormi. Na pozemku pri chate je altánok s posedením a grilom.</p>
          </Well>
        </Col>
        <Col md={6} sm={6} xs={12}>
          <Well>
            <p>Priamo v oblasti Krpáčova je lyžiarsky vlek s umelým zasnežovaním, neďaleko od chaty je obľúbený hotel Polianka s reštauráciou, kolibou pri jazere aj wellness zariadením. Ďalšie lyžiarske stredisko a golfové ihrisko je v 5 km vzdialených Táloch. Približne 5 minút od chaty je jazero a všade okolo prekrásna príroda, skrátka výborné miesto na oddych.</p>
          </Well>
        </Col>
        <Col md={3} sm={3} xs={6}>
          <Image className="center-block" src={require('../img/img5.png')} />
          &nbsp;
        </Col>
        <Col md={3} sm={3} xs={6}>
          <Image className="center-block" src={require('../img/img4.png')} />
          &nbsp;
        </Col>
      </Row>
    );
  }
}

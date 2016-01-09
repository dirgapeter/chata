import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <Col md={12} sm={12} xs={12}>
        <Jumbotron>
          <p>Chata sa nachádza na južných svahoch Nízkych Tatier, v obľúbenej rekreačnej oblasti Krpáčovo, len pár kilometrov vzdialenej od rekreačnej oblasti Tále a Chopok-juh. Je sitovaná v lese, na peknom slnečnom pozemku s dobrým prístupom v zime.</p>
          <p>Obývateľné su dve podlažia s celkovou kapacitou pre 9 osôb. Cez veľkú terasu sa vchádza do vstupnej chodbičky, odkiaľ vedú dvere do samostatného WC a priestrannej kúpeľne. Ďalej sa na prízemí nachádza veľká hala s krbom a kuchyňa. Z haly vedú pohodlné schody na prvé poschodie, kde sú dve izby a WC s umývadlom. Na druhom poschodí sú ďalšie dve izby. Vykurovanie je riešené krbom a elektrickými konvektormi. Na pozemku pri chate je altánok s posedením a grilom.</p>
          <p>Priamo v oblasti Krpáčova je lyžiarsky vlek s umelým zasnežovaním, neďaleko od chaty je obľúbený hotel Polianka s reštauráciou, kolibou pri jazere aj wellness zariadením. Ďalšie lyžiarske stredisko a golfové ihrisko je v 5 km vzdialených Táloch. Približne 5 minút od chaty je jazero a všade okolo prekrásna príroda, skrátka výborné miesto na oddych.</p>
        </Jumbotron>
      </Col>
    );
  }
}

import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';

export default class Prices extends React.Component {
  render() {
    const data = require('../data/prices.json');

    return (
      <div>
        <Jumbotron>
          <p>Na chate môže byť ubytovaných až 9 hostí. Týždenné a víkendové pobyty sú uprednostnené. Po príchode je chata plne k dispozícii. Domáci miláčikovia sú vítaní.</p>
        </Jumbotron>
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th colSpan="2">Obdobie</th>
              <th className="text-center">Cena osoba/noc</th>
              <th className="text-center">Min. cena chata/noc</th>
            </tr>
          </thead>
          <tbody>
          {data.prices.map((price, i) =>
            <tr key={`price-row-${i}`}>
              <td>{price.name}</td>
              <td>{price.dates}</td>
              <td className="text-center">{price.pricePerPerson}</td>
              <td className="text-center">{price.pricePerCottage}</td>
            </tr>
          )}
          </tbody>
        </Table>
        <Table striped bordered responsive>
          <tbody>
          {data.others.map((other, i) =>
            <tr key={`other-row-${i}`}>
              <td colSpan="2">{other.name}</td>
              <td className="text-center" colSpan="2">{other.text}</td>
            </tr>
          )}
          </tbody>
        </Table>
      </div>
    );
  }
}

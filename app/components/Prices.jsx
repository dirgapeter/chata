import React from 'react';
import { Well, Table, Row, Col, Image, Alert } from 'react-bootstrap';
import PricesActions from '../actions/PricesActions.jsx';
import PricesStore from '../stores/PricesStore.jsx';
import PricesUtils from '../utils/PricesUtils.jsx';
import Loader from './Loader.jsx';

export default class Prices extends React.Component {
  constructor() {
    super();

    this.storedChanged = this.storeChanged.bind(this);
    this.state = PricesStore.getState();
  }

  componentDidMount() {
    PricesStore.listen(this.storedChanged);
    PricesUtils.getPrices();
  }

  componentWillUnmount() {
    PricesStore.unlisten(this.storedChanged);
  }

  storeChanged(state) {
    this.setState(state);
  }

  render() {
    const prices = this.state.prices;
    const error = this.state.error;

    let alert;
    if (error) {
      alert = <Alert bsStyle="danger">{error}</Alert>;
    }

    let loader;
    if (!prices && !error) {
      loader = <Loader />;
    }

    let pricesRender;
    if (prices) {
      pricesRender = prices.prices.map((price, i) =>
        <tr key={`price-row-${i}`}>
          <td>{price.name}</td>
          <td>{price.dates}</td>
          <td className="text-center">{price.pricePerPerson}</td>
          <td className="text-center">{price.pricePerCottage}</td>
        </tr>
      );
    }

    let othersRender;
    if (prices) {
      othersRender = prices.others.map((other, i) =>
        <tr key={`other-row-${i}`}>
          <td colSpan="2">{other.name}</td>
          <td className="text-center" colSpan="2">{other.text}</td>
        </tr>
      );
    }

    return (
      <Row id="prices">
        <Col md={12} sm={12} xs={12}>
          <Well>
            <p>Na chate môže byť ubytovaných až 11 hostí. Týždenné a víkendové
            pobyty sú uprednostnené. Po príchode je chata plne k dispozícii.
            Domáci miláčikovia sú vítaní.</p>
          </Well>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th colSpan="2">Obdobie</th>
                <th className="text-center">Cena osoba/noc</th>
                <th className="text-center">Min. cena chata/noc</th>
              </tr>
            </thead>
            <tbody>
            {pricesRender}
            </tbody>
          </Table>
          <Table striped bordered responsive>
            <tbody>
            {othersRender}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

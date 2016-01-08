import React from 'react';
import { Glyphicon, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={6} xs={12} className="text-sm-right text-xs-center">
          <span><Glyphicon glyph="phone" />&nbsp;+421 (902) 980 419</span>
        </Col>
        <Col sm={6} xs={12} className="text-sm-left text-xs-center">
          <span><Glyphicon glyph="envelope" />&nbsp;<a href="mailto:info@chata-v-krpacove.sk">info@chata-v-krpacove.sk</a></span>
        </Col>
      </Row>
    );
  }
}

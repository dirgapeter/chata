import React from 'react';
import { Glyphicon, Jumbotron } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <span><Glyphicon glyph="phone" />&nbsp;+421 (902) 980 419</span>
        &nbsp;
        <span><Glyphicon glyph="envelope" />&nbsp;<a href="mailto:info@chata-v-krpacove.sk">info@chata-v-krpacove.sk</a></span>
      </Jumbotron>
    );
  }
}

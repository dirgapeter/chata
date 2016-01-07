var React = require("react");
import { Glyphicon, Button } from 'react-bootstrap';

var Footer = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <Glyphicon glyph="phone" />+421 (902) 980 419 | <Glyphicon glyph="envelope" /> <a href="mailto:info@chata-v-krpacove.sk">info@chata-v-krpacove.sk</a>
      </div>
    );
  }
});

module.exports = Footer;

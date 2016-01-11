import React from 'react';
import Spinner from 'spin.js';

export default class Loader extends React.Component {
  componentDidMount() {
    this.spinner = new Spinner().spin(this.refs.container);
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return (
      <div className="loader">
        <span ref="container" />
      </div>
    );
  }
}

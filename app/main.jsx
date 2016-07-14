import 'bootstrap/dist/css/bootstrap.min.css';
import './main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App.jsx';
import Prices from './components/Prices.jsx';
import Homepage from './components/Homepage.jsx';
import Gallery from './components/Gallery.jsx';
import Calendar from './components/Calendar.jsx';
import GeoLocation from './components/GeoLocation.jsx';

const history = createHashHistory({
  queryKey: false
});

const routerInstance = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage}/>
      <Route path="gallery" component={Gallery} />
      <Route path="location" component={GeoLocation} />
      <Route path="calendar" component={Calendar} />
      <Route path="prices" component={Prices} />
    </Route>
  </Router>
);

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

ReactDOM.render(routerInstance, document.getElementById('app'));

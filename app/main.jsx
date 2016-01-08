import 'bootstrap/dist/css/bootstrap.min.css';
import './main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createHashHistory';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App.jsx';
import Prices from './components/Prices.jsx';
import Homepage from './components/Homepage.jsx';
import Gallery from './components/Gallery.jsx';
import Calendar from './components/Calendar.jsx';
import GeoLocation from './components/GeoLocation.jsx';
import CalendarUtils from './utils/CalendarUtils.jsx';
import moment from 'moment';

const history = createHistory({
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

//  'Google client loaded' handler
window.handleGoogleClientLoad = function() {
  CalendarUtils.authorize();
};

ReactDOM.render(routerInstance, document.getElementById('app'));

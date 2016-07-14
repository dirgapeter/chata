import AppAlt from '../alt/AppAlt.jsx';
import PricesActions from '../actions/PricesActions.jsx';
import PricesUtils from '../utils/PricesUtils.jsx';

class PricesStore {
  constructor() {
    this.bindActions(PricesActions);

    this.state = {
      prices: null,
      error: null
    };
  }

  prices(state) {
    this.setState(state);
  }

  error(err) {
    this.setState({
      prices: null,
      error: err
    });
  }
}

export default AppAlt.createStore(PricesStore, 'PricesStore');

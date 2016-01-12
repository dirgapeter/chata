import PricesActions from '../actions/PricesActions.jsx';

let pricesUtils = null;

class PricesUtils {
  getPrices() {
    setTimeout(function() {
      const data = require('../data/prices.json');

      PricesActions.prices({
        prices: data,
        error: null
      });
    });
  }
};

pricesUtils = new PricesUtils();
export default pricesUtils;

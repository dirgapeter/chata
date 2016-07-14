import PricesActions from '../actions/PricesActions.jsx';
import request from 'browser-request';

let pricesUtils = null;

class PricesUtils {
  getPrices() {
    request({ method: 'GET', url: 'prices.json', json: true },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = body;
          PricesActions.prices({
            prices: data,
            error: null
          });
        }
      }
    );
  }
};

pricesUtils = new PricesUtils();
export default pricesUtils;

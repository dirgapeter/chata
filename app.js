angular.module('chata-v-krpacove', ['ngRoute', 'ngAnimate']);

angular.module('chata-v-krpacove')
  .run(function (logging) {
    logging.init('main');
    logging.setLogLevel(log4javascript.Level.ALL);
    logging.setLogAppender(new log4javascript.BrowserConsoleAppender());
  });

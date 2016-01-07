angular.module('chata-v-krpacove', ['ngRoute', 'ngAnimate']);

var init = function() {
  window.initGapi();
}

angular.module('chata-v-krpacove').config(function ($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partial/home/home.html'}).
    when('/home', {templateUrl: 'partial/home/home.html'}).
    when('/gallery', {templateUrl: 'partial/gallery/gallery.html'}).
    when('/calendar', {templateUrl: 'partial/calendar/calendar.html'}).
    when('/location', {templateUrl: 'partial/location/location.html'}).
    when('/prices', {templateUrl: 'partial/prices/prices.html'}).
    when('/error', {templateUrl: 'partial/error/error.html'}).
    otherwise({redirectTo: '/home'}
  );
});

angular.module('chata-v-krpacove')
  .run(function (logging) {
    logging.init('main');
    logging.setLogLevel(log4javascript.Level.ALL);
    logging.setLogAppender(new log4javascript.BrowserConsoleAppender());
  })
  .run(function ($rootScope, $window, googleCalendar) {
    googleCalendar.configure({
      "clientId": "291736564496-ati72tg64j9ud425ta1t1k4a2lhco5sv.apps.googleusercontent.com",
      "scope": ['https://www.googleapis.com/auth/calendar.readonly']
    });

    $window.initGapi = function() {
      $rootScope.$apply($rootScope.initGapi);
    };

    $rootScope.initGapi = function() {
      googleCalendar.login();
    }
  });

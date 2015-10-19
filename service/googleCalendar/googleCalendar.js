/* jslint -W117*/
angular.module('chata-v-krpacove').factory('googleCalendar',function(messaging, events) {
//#region internal properties
  var calendarName = '';
  var calendarId = '';

  // defaults for calling the Google+ OAuth2 Service
  var defaults = {
    // Google App Client Id
    clientId: '',
    // google api access privileges required by app
    scope: ['https://www.googleapis.com/auth/calendar.readonly'],
    // type of response requested
    //responseType: 'token'
  };
  // authentication results
  //var accessResults = {};
//#endregion

//#region internal methods
  /**
   * public method that populates the internal default object with the passed
   * in object's properties
   * @param config - object instance which contains configuration properties
   * required to authenticate with Google+
   */
  var configure = function (config) {
    for (var prop in config) {
      if (config.hasOwnProperty(prop)) {
        defaults[prop] = config[prop];
      }
    }
  };

  /**
   * public method to request the user be redirected to the Google+ Authentication page
   */
  var login = function () {
    var parameters = {
      client_id: defaults.clientId,
      scope: defaults.scope,
      immediate: true
    };
    gapi.auth.authorize(parameters, handleResponse);
  };

  /**
   * internal method used to parse the Google+ Authentication results and validate
   * the returned token. Method also redirects the user to the one of the given
   * Urls provided in login based on success or failure.
   */
  var handleResponse = function (authResult) {
    if (authResult && !authResult.error) {
      messaging.publish(events.message._LOG_DEBUG_, ["handleResponse ok"]);
    } else {
      messaging.publish(events.message._GPLUS_FAILED_);
    }
  };

  var getCalendarByName = function(name, create){
    calendarName = name;
    gapi.client.load('calendar', 'v3', handleCalendarClientLoaded);
  };

  messaging.subscribe(events.message._GET_CALENDAR_, getCalendarByName);

  var handleCalendarClientLoaded = function() {
    messaging.publish(events.message._SERVER_REQUEST_STARTED_);
    var request = gapi.client.calendar.calendarList.list();
    request.execute(handleGetCalendarList);
  };

  var handleGetCalendarList = function(resp) {
    if(resp && resp.items && resp.items.length > 0){
      angular.forEach(resp.items, function(item){
        if(item.summary === calendarName){
          calendarId = item.id;
        }
      });
    }

    if (calendarId){
      getGoogleCalendarById(calendarId);
    }
    else {
      getCalendarFailed();
    }
  };

  var getGoogleCalendarById = function(id){
    var request = gapi.client.calendar.events.list({'calendarId': id});
    request.execute(handleGetGoogleCalendarById);
  };

  var handleGetGoogleCalendarById = function(resp){
    if(resp && resp.items && resp.items.length > 0){
      resp.id = calendarId;
      messaging.publish(events.message._SERVER_REQUEST_ENDED_);
      messaging.publish(events.message._GET_CALENDAR_COMPLETE_, [resp]);
    }
    else {
      getCalendarFailed();
    }
  };

  var getCalendarFailed = function(){
    messaging.publish(events.message._SERVER_REQUEST_ENDED_);
    messaging.publish(events.message._GET_CALENDAR_FAILED_);
  };

	var googleCalendar = {
    configure: configure,
    login: login
  };

	return googleCalendar;
});

import CalendarActions from '../actions/CalendarActions.jsx';
import moment from 'moment';

let utils = null;

class CalendarUtils {
  constructor() {
    this.clientId = '291736564496-ati72tg64j9ud425ta1t1k4a2lhco5sv.apps.googleusercontent.com';
    this.scope = 'https://www.googleapis.com/auth/calendar.readonly';
    this.calendarId = 'tc6gi26fg4hu4f08utc558v554@group.calendar.google.com';
  }

  authorize() {
      gapi.auth.authorize(
        {
          'client_id': this.clientId,
          'scope': this.scope,
          'immediate': true
        }, utils.handleAuthResult);
  }

  handleAuthResult(authResult) {
      if (authResult && !authResult.error) {
          //Indicate that the auth check is complete:
          //CalendarActions.receiveCalendarAuthCheckResult(true);

          //Load the calendar API ...
          gapi.client.load('calendar', 'v3', function(){
            utils.getCalendarEvents(moment());
            //CalendarActions.today();
              //  Then load the list of calendars

              //utils.getCalendarList();
              //utils.getCalendarEvents(moment());
              //  Get the latest calendar information if we have a calendar selected:
              /*
              let settings = SettingsStore.getSettings();
              if(settings.calendarid != "") {
                utils.getCalendarEvents(settings.calendarid);
              }
              */
          });
      } else {
          // We're not authorized yet.  We should
          // allow the user to authorize
          //CalendarActions.recieveCalendarAuthCheckResult(false);
      }
  }

  /* Call the google API to get the list of calendars */
   getCalendarList(){

       //  Create the request
       let request = gapi.client.calendar.calendarList.list();

       //  Execute the request and get the response
       request.execute(function(resp) {
           let cals = resp.items;
           if (cals.length > 0) {
               //  Call the action to receive the data:
               console.log("Calling CalendarActions.list");
               //CalendarActions.list(cals);
           }
           else {
               console.log("There was a problem getting the list of calendars");
           }
       });
   }

   /* Call the google API to get the list of events for a calendarid */
   getCalendarEvents(date) {
       //  Set the min/max times for event display:
       const dateMin = date.clone().add(-1, "M").startOf('month');
       const dateMax = date.clone().add(1, "M").endOf('month');

       //  Create the request
       let requestParams = {
         'calendarId': utils.calendarId, /* Can be 'primary' or a given calendarid */
         'timeMin': dateMin.toISOString(),
         'timeMax': dateMax.toISOString(),
         'showDeleted': false,
         'singleEvents': true,
         'orderBy': 'startTime'
       };

       console.log("Requesting calendar events: ", requestParams);
       let request = gapi.client.calendar.events.list(requestParams);

       //  Execute the request and get the response
       request.execute(function(resp) {
           //  If we get a code == 403 here, should we attempt to re-authenticate or something?
           if(resp.code == 403) {
               console.log("Got a strange response: ", resp, " - Trying to re-authenticate");
               utils.authorize();
           } else {
               //  Call the action to receive the data
               CalendarActions.calendar({
                 date: date,
                 calendar: resp
               });
           }
       });
   }
};

utils = new CalendarUtils();
export default utils;

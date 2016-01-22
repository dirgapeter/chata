import CalendarActions from '../actions/CalendarActions.jsx';
import request from 'browser-request';

let calendarUtils = null;

class CalendarUtils {
  getCalendarEvents(date) {
    request({ method: 'GET', url: require('../data/calendar.json'), json: true },
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = body;
          CalendarActions.calendar({
            date: date,
            calendar: data,
            error: null
          });
        }
      }
    );
  }
};

calendarUtils = new CalendarUtils();
export default calendarUtils;

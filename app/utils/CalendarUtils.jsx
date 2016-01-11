import CalendarActions from '../actions/CalendarActions.jsx';

let utils = null;

class CalendarUtils {
  getCalendarEvents(date) {
    setTimeout(function() {
      const data = require('../data/calendar.json');

      CalendarActions.calendar({
        date: date,
        calendar: data,
        error: null
      });
    });
  }
};

utils = new CalendarUtils();
export default utils;

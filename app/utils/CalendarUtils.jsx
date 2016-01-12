import CalendarActions from '../actions/CalendarActions.jsx';

let calendarUtils = null;

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

calendarUtils = new CalendarUtils();
export default calendarUtils;

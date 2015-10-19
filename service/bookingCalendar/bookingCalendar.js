/* jslint -W117 */
angular.module('chata-v-krpacove').factory('bookingCalendar', function (messaging, events) {
  var bookingCalendar = {};
  var bookingCalendarId = '';
  var bookingCalendarName = 'Chata';

  var reduceBrewingCalendar = function (calendar) {
    var today = moment();
    var formattedDate = today.format('YYYY-MM-DD');
    // filter calendar item for those still in the future
    var result = _.filter(calendar.items, function (event) {
      if (event.end.date > formattedDate) {
        return event;
      }
    });
    // sort by start date
    result = _.sortBy(result, function (event) {
      return event.start.date;
    });
    return result;
  };

  var getBookingCalendar = function () {
    messaging.publish(events.message._GET_CALENDAR_, [bookingCalendarName, true]);
  };

  messaging.subscribe(events.message._GET_BOOKING_CALENDAR_, getBookingCalendar);

  var onHandleGetCalendarComplete = function (calendar) {
    bookingCalendar = calendar;
    bookingCalendarId = calendar.id;

    if (calendar.items.length > 0) {
      var result = reduceBrewingCalendar(bookingCalendar);
      messaging.publish(events.message._GET_BOOKING_CALENDAR_COMPLETE_, [result]);
    }
  };

  messaging.subscribe(events.message._GET_CALENDAR_COMPLETE_, onHandleGetCalendarComplete);

  var init = function () {
    bookingCalendar = {};
    bookingCalendarId = '';
    bookingCalendarName = 'Chata';
  };

  var bookingCalendar = {
    init: init,
    reduceBrewingCalendar: reduceBrewingCalendar,
    getBookingCalender: getBookingCalender,
    onHandleGetCalendarComplete: onHandleGetCalendarComplete,
  };

  return bookingCalendar;
});

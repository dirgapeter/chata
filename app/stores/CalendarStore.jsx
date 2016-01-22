import AppAlt from '../alt/AppAlt.jsx';
import CalendarActions from '../actions/CalendarActions.jsx';
import moment from 'moment';
import CalendarUtils from '../utils/CalendarUtils.jsx';

class CalendarStore {
   constructor() {
     moment.locale('sk');

     this.bindActions(CalendarActions);

     this.state = {
       date: moment(),
       calendar: null,
       error: null
     };
   }

   calendar(newState) {
     this.setState(newState);
   }

   error(err) {
     this.setState({
       calendar: null,
       error: err
     });
   }

   nextMonth() {
     let date = this.state.date;
     date.add(1, 'M');
     CalendarUtils.getCalendarEvents(date);
   }

   previousMonth() {
     let date = this.state.date;
     date.add(-1, 'M');
     CalendarUtils.getCalendarEvents(date);
   }

   today() {
     moment.locale('sk');
     let date = moment();
     CalendarUtils.getCalendarEvents(date);
   }
}

export default AppAlt.createStore(CalendarStore, 'CalendarStore');

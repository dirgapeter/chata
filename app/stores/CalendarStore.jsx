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
       calendar: [],
       error: null
     };
   }

   calendar(newState) {
     console.log('CalendarStore.calendar ', newState.date.format(), newState.calendar);
     this.setState(newState);
   }

   error(err) {
     this.setState({
       error: err
     });
   }

   nextMonth() {
     let date = this.state.date;
     date.add(1, 'M');
     console.log('CalendarStore.next ', date.format());
     CalendarUtils.getCalendarEvents(date);
   }

   previousMonth() {
     let date = this.state.date;
     date.add(-1, 'M');
     console.log('CalendarStore.next ', date.format());
     CalendarUtils.getCalendarEvents(date);
   }

   today() {
     moment.locale('sk');
     let date = moment();
     console.log('CalendarStore.today ', date.format());
     CalendarUtils.getCalendarEvents(date);
   }
}

export default AppAlt.createStore(CalendarStore, 'CalendarStore');

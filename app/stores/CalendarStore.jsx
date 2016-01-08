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
       calendar: []
     };
   }

   calendar(newState) {
     console.log('CalendarStore.calendar ', newState.date.format(), newState.calendar);
     this.setState(newState);
   }

   error() {
   }

   next() {
     let date = this.state.date;
     date.add(1, 'M');
     console.log('CalendarStore.next ', date.format());
     CalendarUtils.getCalendarEvents(date);
   }

   previous() {
     let date = this.state.date;
     date.add(-1, 'M');
     console.log('CalendarStore.next ', date.format());
     CalendarUtils.getCalendarEvents(date);
   }

   today() {
     moment.locale('sk');
     let now = moment();
     console.log('CalendarStore.today ', now.format());
     CalendarUtils.getCalendarEvents(now);
   }
}

export default AppAlt.createStore(CalendarStore, 'CalendarStore');

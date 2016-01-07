//import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import CalendarStore from '../stores/CalendarStore.jsx';
import moment from 'moment';
import { Glyphicon, Button } from 'react-bootstrap';
import CalendarActions from '../actions/CalendarActions.jsx';

class CalendarEventItem extends React.Component {
  render() {
    //  Format the display:
    var eventStart = "All day";
    var eventEnd = "";

    if(this.props.eventinfo.start.dateTime != null)
    {
      eventStart = Moment(this.props.eventinfo.start.dateTime).format("h:mma");
      eventEnd = " - " + Moment(this.props.eventinfo.end.dateTime).format("h:mma");
    }

    var summary = this.props.eventinfo.summary;

  	return <tr><td>{eventStart}{eventEnd}</td><td>{summary}</td></tr>;
  }
}

class CalendarEventMoreInfo extends React.Component {
  render() {
    //  Get the description or a default & cut it down to size
    var description = this.props.eventinfo.description || "";
    var description = description.substring(0, 100);

  	return <tr><td style={{"border": "none"}} className="event-moreinfo" colSpan="2">{description}</td></tr>;
  }
}

function createDateObjects(date, weekOffset = 0) {
  moment.locale('sk');
  const startOfMonth = date.startOf('month');

  let diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  const prevMonthDays = [...Array(diff).keys()].map(n => ({
    day: startOfMonth.clone().subtract(diff - n, 'days'),
    classNames: 'prevMonth'
  }));

  const currentMonthDays = [...Array(date.daysInMonth()).keys()].map(n => ({
      day: moment([date.year(), date.month(), n + 1])
  }));

  const daysAddedInLastWeek = (prevMonthDays.length + currentMonthDays.length) % 7;
  const nextDays = (daysAddedInLastWeek === 0 ? 0 : 7 - daysAddedInLastWeek);

  const nextMonthDays = [...Array(nextDays).keys()].map((n) => ({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(n + 1, 'days'),
      classNames: 'nextMonth'
  }));

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}

export default class Calendar extends React.Component {
  static propTypes = {
    weekOffset: React.PropTypes.number/*.isRequired*/,
    date: React.PropTypes.object/*.isRequired*/,
    renderDay: React.PropTypes.func,
    onNextMonth: React.PropTypes.func/*.isRequired*/,
    onPrevMonth: React.PropTypes.func/*.isRequired*/,
    onPickDate: React.PropTypes.func
  };

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('D')
  };

  constructor(props) {
    super(props);

    this.props = this.defaultProps;

    this.storedChanged = this.storeChanged.bind(this);
    this.onPrevMonth = this.onPrevMonth.bind(this);
    this.onNextMonth = this.onNextMonth.bind(this);
    this.onToday = this.onToday.bind(this);

    this.state = CalendarStore.getState();
  }

  componentDidMount() {
    console.log("componentDidMount");
    CalendarStore.listen(this.storedChanged);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    CalendarStore.unlisten(this.storedChanged);
  }

  storeChanged(state) {
    console.log("storeChanged");
    this.setState(state);
  }

  onPrevMonth() {
    console.log("onPrevMonth");
    CalendarActions.previous();
  }

  onNextMonth() {
    console.log("onNextMonth");
    CalendarActions.next();
  }

  onToday() {
    console.log("onToday");
    CalendarActions.today();
  }

  render() {
    console.log("Calendar.render");
    moment.locale('sk');

    const date = this.state.date;
    const calendar = this.state.calendar;
    const { weekOffset, renderDay } = this.props;

  	return (
      <div className='Calendar'>
        <div className='Calendar-header'>
          <div className='Calendar-header-currentDate'>{date.format('MMMM YYYY')}</div>
          <button onClick={this.onPrevMonth}>&laquo;</button>
          <button onClick={this.onToday}>Dnes</button>
          <button onClick={this.onNextMonth}>&raquo;</button>
        </div>
        <div className='Calendar-grid'>
          {createDateObjects(date, weekOffset).map((day, i) =>
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
            >
              {renderDay(day.day)}
            </div>
          )}
        </div>
      </div>);

          /*
          if (this.state.errorMessage) {
            return (
              <div>Something is wrong</div>
            );
          }
          */
      /*
          if (!this.props.calendars.length) {
            return (
              <div>
                <img src="/my-cool-spinner.gif" />
              </div>
            )
          }
      */
          //  First, see if we have events
          /*
          if(calendar == null || calendar.items == null || calendar.items.length == 0) {
            return (<div id="calendar-empty">No calendar events left for today</div>);
          }
          */

          //  If we do, display them:
          //let formattedStatus = calendar.summary + ' last updated ' + moment(calendar.updated).format("h:mma");

    /*
        <div>
          <div id="calendar-status" className="dashboard-status">{formattedStatus}</div>
          <table id="calendar" className="table">
            <tbody>
              {calendar.items.map((eventinfo) => {
                return [<CalendarEventItem key={eventinfo.id} eventinfo={eventinfo}/>, <CalendarEventMoreInfo key={"mi"+eventinfo.id} eventinfo={eventinfo}/>];
              })}
            </tbody>
          </table>
        </div>;
      */
  }
}

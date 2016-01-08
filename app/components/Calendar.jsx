import React from 'react';
import CalendarStore from '../stores/CalendarStore.jsx';
import moment from 'moment';
import { Glyphicon, Button } from 'react-bootstrap';
import CalendarActions from '../actions/CalendarActions.jsx';

export default class Calendar extends React.Component {
  static propTypes = {
    weekOffset: React.PropTypes.number/*.isRequired*/,
    renderDay: React.PropTypes.func,
    onNextMonth: React.PropTypes.func/*.isRequired*/,
    onPrevMonth: React.PropTypes.func/*.isRequired*/,
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
    console.log('componentDidMount');
    CalendarStore.listen(this.storedChanged);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    CalendarStore.unlisten(this.storedChanged);
  }

  storeChanged(state) {
    console.log('storeChanged');
    this.setState(state);
  }

  onPrevMonth() {
    console.log('onPrevMonth');
    CalendarActions.previous();
  }

  onNextMonth() {
    console.log('onNextMonth');
    CalendarActions.next();
  }

  onToday() {
    console.log('onToday');
    CalendarActions.today();
  }

  keys(end) {
    let index = -1;
    let result = Array(end);

    while (++index < end) {
      result[index] = index;
    }

    return result;
  }

  createDateObjects(date, weekOffset = 0) {
    moment.locale('sk');
    const startOfMonth = date.startOf('month');

    let diff = startOfMonth.weekday() - weekOffset;
    if (diff < 0) {
      diff += 7;
    }

    //  const prevMonthDays = [...Array(diff).keys()].map(n => ({
    const prevMonthDays = this.keys(diff).map(n => ({
      day: startOfMonth.clone().subtract(diff - n, 'days'),
      classNames: 'prevMonth'
    }));

    //const currentMonthDays = [...Array(date.daysInMonth()).keys()].map(n => ({
    const currentMonthDays = this.keys(date.daysInMonth()).map(n => ({
      day: moment([date.year(), date.month(), n + 1]),
      classNames: 'currMonth'
    }));

    const daysAddedInLastWeek = (prevMonthDays.length + currentMonthDays.length) % 7;
    const nextDays = (daysAddedInLastWeek === 0 ? 0 : 7 - daysAddedInLastWeek);

    //const nextMonthDays = [...Array(nextDays).keys()].map(n => ({
    const nextMonthDays = this.keys(nextDays).map(n => ({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(n + 1, 'days'),
      classNames: 'nextMonth'
    }));

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }

  render() {
    console.log('Calendar.render');
    moment.locale('sk');

    const date = this.state.date;
    const calendar = this.state.calendar;
    const { weekOffset, renderDay } = this.props;

    return (
        <div className="Calendar">
                  <div className="Calendar-header">
                      <div className="Calendar-header-currentDate">{date.format('MMMM YYYY')}</div>
                      <button onClick={this.onPrevMonth}>«</button>
                      <button onClick={this.onToday}>Dnes</button>
                      <button onClick={this.onNextMonth}>»</button>
                  </div>
                  <div className="Calendar-grid">
                      {this.createDateObjects(date, weekOffset).map((day, i) =>
              <div
                key={`day-${i}`}
                className={`Calendar-grid-item ${day.classNames || ''}`}
              >
                              {renderDay(day.day)}
                          </div>
            )}
                  </div>
              </div>);
  }
}

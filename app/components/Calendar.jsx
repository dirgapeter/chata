import React from 'react';
import CalendarStore from '../stores/CalendarStore.jsx';
import moment from 'moment';
import { Glyphicon, Table, Well, Label, Button, Row, Col, Alert } from 'react-bootstrap';
import CalendarActions from '../actions/CalendarActions.jsx';

class Week extends React.Component {
  render() {
    const calendar = this.props.calendar;
    const month = this.props.month;
    let days = [];
    let date = this.props.date;

    for (let i = 0; i < 7; i++) {
      let busy = calendar.items ? calendar.items.findIndex((event, i) => {
        if (date.isSameOrAfter(event.start.date) && date.isBefore(event.end.date)) {
          return true;
        }
        return false;
      }) !== -1 : false;

      let day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(moment(), 'day'),
        date: date,
        isBusy: busy
      };
      days.push(
        <td
          key={day.date.toString()}
          className={'text-center day' + (day.isToday ? ' today' : '') + (day.isCurrentMonth ? '' : ' different-month') + (day.isBusy ? ' busy' : '')}
        >
        {day.number}
        </td>
      );
      date = date.clone();
      date.add(1, 'd');
    }

    return (
      <tr className="week" key={days[0].toString()}>
      {days}
      </tr>
    );
  }
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

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
    CalendarActions.previousMonth();
  }

  onNextMonth() {
    console.log('onNextMonth');
    CalendarActions.nextMonth();
  }

  onToday() {
    console.log('onToday');
    CalendarActions.today();
  }
  renderWeeks() {
    let weeks = [];
    let done = false;
    let date = this.state.date.clone().startOf('month').weekday(0);
    let monthIndex = date.month();
    let count = 0;

    while (!done) {
      weeks.push(
        <Week key={date.toString()} date={date.clone()} month={this.state.date} calendar={this.state.calendar}/>
      );
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  render() {
    console.log('Calendar.render');

    const date = this.state.date;
    const calendar = this.state.calendar;
    const error = this.state.error;

    let alert;
    if (error) {
      alert = <Alert bsStyle="danger">{error}</Alert>;
    }

    return (
      <Row id="calendar">
        {alert}
        <Col md={12} sm={12} xs={12}>
          <Well>
            <p>Na chate môže byť ubytovaných až 9 hostí. Týždenné a víkendové
            pobyty sú uprednostnené. Po príchode je chata plne k dispozícii.
            Domáci miláčikovia sú vítaní.</p>
          </Well>
        </Col>
        <Col md={12} sm={12} xs={12}>
          <Table bordered responsive>
            <thead>
              <tr>
                <th colSpan="7">
                  <div className="pull-left">
                    <Button bsStyle="primary">{date.format('MMMM YYYY')}</Button>
                  </div>
                  <div className="pull-right">
                    <Button bsStyle="primary" onClick={this.onPrevMonth}><Glyphicon glyph="chevron-left" /></Button>
                    <Button bsStyle="default" onClick={this.onToday}>Dnes</Button>
                    <Button bsStyle="primary" onClick={this.onNextMonth}><Glyphicon glyph="chevron-right" /></Button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.renderWeeks()}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

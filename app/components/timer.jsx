import React from 'react';
import Clock from 'Clock';
import TimerControls from 'TimerControls';
import TimerCounting from 'TimerCounting';

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = null;
  },
  handleSetTimer: function () {
    this.setState({
      count: 0,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  render: function () {
    var { count, timerStatus } = this.state;
    var renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return (
          <TimerCounting timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        );
      } else {
        return (
          <TimerControls onSetTimer={this.handleSetTimer}/>
        );
      }
    };
    return (
      <div>
        <h1 className="page-title">Timer app</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;

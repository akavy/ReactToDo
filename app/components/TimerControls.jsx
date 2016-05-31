import React from 'react';

var TimerControls = React.createClass({
  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onSetTimer: React.PropTypes.func.isRequired
  },
  onSubmit: function (event) {
    event.preventDefault();
    this.props.onSetTimer();
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TimerControls;

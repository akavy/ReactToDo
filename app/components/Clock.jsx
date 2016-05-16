import React from 'react';

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function (secs) {
    var splitSecs = secs % 60;
    var splitMins = Math.floor(secs / 60);

    if (splitMins < 10) {
      splitMins = '0' + splitMins;
    }
    if (splitSecs < 10) {
      splitSecs = '0' + splitSecs;
    }

    return splitMins + ':' + splitSecs;
  },
  render: function () {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;

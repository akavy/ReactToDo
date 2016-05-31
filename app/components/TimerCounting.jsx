import React from 'react';

var TimerCounting = React.createClass({
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var { timerStatus } = this.props;
    var renderPauseStartButton = () => {
      if (timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (timerStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Restart</button>
      }
    };

    return (
      <div className="controls">
        {renderPauseStartButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = TimerCounting;

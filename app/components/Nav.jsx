import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer from Akavy</li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Adapted by JD</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

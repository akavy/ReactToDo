import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <div>
        <Nav/>
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;

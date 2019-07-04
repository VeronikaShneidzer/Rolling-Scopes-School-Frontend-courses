import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./style.css";

class Rules extends Component {
  render() {
    return (
      <div className="wrapper rules">
        <div className="content">
          <h1>Match match game</h1>
          <h3>How to play:</h3>
          <p>Memory is a counter game where the object is to find pairs.</p>
          <p>Whe the game begins, all pictures are hidden.</p>
          <h3>To play:</h3>
          <div className="list">
            <ol>
              <li>Select two cards to try to match the pictures;</li>
              <li>If you match the pictures you can go again;</li>
              <li>If they don"t match it is the computer turn them;</li>
              <li>The player that finds all pairs wins.</li>
            </ol>
          </div>
          <Link to='/settings' className="close-rules-button">Let's go!</Link>
        </div>
      </div>
    );
  }
}

export default Rules;

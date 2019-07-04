import React, { Component } from "react";

import "./style.css";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.whenStart = new Date().getTime();
    this.time = "";
  }

  componentDidMount() {
    this.timerCounter = setInterval(
      () => this.tick(),
      0
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerCounter);
  }

  tick() {
    let date = new Date().getTime();
    let distance = date - this.whenStart;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.time = days + ":" +
                ((hours < 10) ? "0" + hours : hours) + ":" +
                ((minutes < 10) ? "0" + minutes : minutes) + ":" +
                ((seconds < 10) ? "0" + seconds : seconds);

    this.props.setTimeInState(distance);
  }

  render() {
    return (
      <div className="timer">{this.time}</div>
    );
  }
}

export default Timer;
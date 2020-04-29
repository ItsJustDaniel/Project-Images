import React from "react";
import "./Timer.css";

class Timer extends React.Component {
  Clockify() {
    let minutes = Math.floor(this.props.Timer / 60);
    let seconds = this.props.Timer - minutes * 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${minutes}:${seconds}`;
  }
  render() {
    return (
      <div id="timer-container">
        <h2 id="timer-label">{this.props.TimerLabel}</h2>
        <div id="time-left">{this.Clockify()}</div>
      </div>
    );
  }
}

export default Timer;

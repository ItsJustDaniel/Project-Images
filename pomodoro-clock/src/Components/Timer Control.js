import React from "react";
import "./Timer Control.css";

class TimerControl extends React.Component {
  render() {
    return (
      <div>
        <audio
          id="beep"
          src="https://onlineclock.net/audio/options/default.mp3"
        ></audio>
        <button id="start_stop" onClick={this.props.play}>
          <i className="play icon"></i>
        </button>
        <button id="reset" onClick={this.props.reset}>
          <i
            className="undo
 icon"
          ></i>
        </button>
      </div>
    );
  }
}

export default TimerControl;

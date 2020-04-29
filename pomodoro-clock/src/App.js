import React from "react";
import "./App.css";
import BreakLength from "./Components/Break Length";
import SessionLength from "./Components/Session Length";
import Timer from "./Components/Timer";
import TimerControl from "./Components/Timer Control";

class App extends React.Component {
  //parts of a pomodoro-clock
  // The buttons to change the break length and Session length and their labels
  // a component to display the timer-label and the time-left
  // a button to start, stop and reset timer
  state = {
    BreakLength: 5,
    SessionLength: 25,
    Timer: 1500,
    TimerLabel: "Session",
    is_playing: false,
    intervalId: "",
    is_Session_Length: true,
    Timeout: true,
  };

  onBreakIncrement = () => {
    if (this.state.BreakLength < 60) {
      this.setState({ BreakLength: this.state.BreakLength + 1 });
    }
  };

  onBreakDecrement = () => {
    if (this.state.BreakLength > 1) {
      this.setState({ BreakLength: this.state.BreakLength - 1 });
    }
  };

  onSessionIncrement = () => {
    if (this.state.SessionLength < 60) {
      this.setState({
        SessionLength: this.state.SessionLength + 1,
        Timer: this.state.Timer + 60,
      });
    }
  };

  onSessionDecrement = () => {
    if (this.state.SessionLength > 1) {
      this.setState({
        SessionLength: this.state.SessionLength - 1,
        Timer: this.state.Timer - 60,
      });
    }
  };

  play = () => {
    console.log("hi");
    this.setState(
      (state) => {
        const is_playing = state.is_playing;
        return {
          is_playing: !is_playing,
        };
      },
      () => {
        console.log(this.state.is_playing);
        if (this.state.is_playing) {
          this.setState({ intervalId: setInterval(this.countDown, 1000) });
        } else {
          clearInterval(this.state.intervalId);
        }
      }
    );
  };

  countDown = () => {
    let x = document.getElementById("beep");
    if (this.state.Timer > 0) {
      this.setState({ Timer: this.state.Timer - 1, Timeout: true }, () => {
        console.log(this.state.Timer);
      });
    }
    if (this.state.Timer <= 0 && this.state.Timeout === true) {
      x.play();
      this.setState({ Timeout: false });
      setTimeout(this.timerEnd, 2700);
    }
    if (x.currentTime >= 2) {
      x.pause();
      x.currentTime = 0;
    }
  };
  timerEnd = () => {
    console.log("geloo");
    if (this.state.is_Session_Length) {
      this.setState({
        Timer: this.state.BreakLength * 60,
        TimerLabel: "Break",
        is_Session_Length: !this.state.is_Session_Length,
      });
    } else {
      this.setState({
        Timer: this.state.SessionLength * 60,
        TimerLabel: "Session",
        is_Session_Length: !this.state.is_Session_Length,
      });
    }
  };
  reset = () => {
    clearInterval(this.state.intervalId);

    let x = document.getElementById("beep");
    x.pause();
    x.currentTime = 0;

    this.setState({
      BreakLength: 5,
      SessionLength: 25,
      Timer: 1500,
      TimerLabel: "Session",
      is_playing: false,
      intervalId: "",
      is_Session_Length: true,
    });
  };

  render() {
    return (
      <div id="root-container">
        <div id="pomodoro-clock">
          <h1>Pomodoro Clock</h1>
          <div id="length-container">
            <BreakLength
              onBreakIncrement={this.onBreakIncrement}
              onBreakDecrement={this.onBreakDecrement}
              BreakLength={this.state.BreakLength}
            />
            <SessionLength
              onSessionIncrement={this.onSessionIncrement}
              onSessionDecrement={this.onSessionDecrement}
              SessionLength={this.state.SessionLength}
            />
          </div>

          <Timer
            SessionLength={this.state.SessionLength}
            BreakLength={this.state.BreakLength}
            Timer={this.state.Timer}
            TimerLabel={this.state.TimerLabel}
          />

          <TimerControl play={this.play} reset={this.reset} />
        </div>
      </div>
    );
  }
}

export default App;

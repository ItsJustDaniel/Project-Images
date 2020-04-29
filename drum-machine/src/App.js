import React from "react";

const bankOne = [
  {
    num: 0,
    id: "Heater 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    num: 1,
    id: "Heater 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    num: 2,
    id: "Heater 3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    num: 3,
    id: "Heater 4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    num: 4,
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    num: 5,
    id: "Open HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    num: 6,
    id: "Kick n' Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    num: 7,
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    num: 8,
    id: "Closed HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.state = {
      info: "",
    };
  }

  playAudio(e, num) {
    let x = document.getElementById(e);
    if (x.paused) {
      x.play();
    } else {
      x.currentTime = 0;
    }
    this.setState({
      info: bankOne[num].id,
    });
  }

  handleClick(e, i) {
    console.log(i);
    this.playAudio(e.target.value, i);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    switch (e.keyCode) {
      case 81:
        this.playAudio("Q", 0);
        break;
      case 87:
        this.playAudio("W", 1);
        break;
      case 69:
        this.playAudio("E", 2);
        break;
      case 65:
        this.playAudio("A", 3);
        break;
      case 83:
        this.playAudio("S", 4);
        break;
      case 68:
        this.playAudio("D", 5);
        break;
      case 90:
        this.playAudio("Z", 6);
        break;
      case 88:
        this.playAudio("X", 7);
        break;
      case 67:
        this.playAudio("C", 8);
        break;
    }
  }

  render() {
    console.log("hi");
    return (
      <div id="container">
        <h1> Drum Machine </h1>
        <div id="drum-machine">
          <div id="drum-container">
            <div id="drumButs">
              <button
                id={bankOne[0].id}
                onClick={(e) => this.handleClick(e, 0)}
                value="Q"
                className="drum-pad"
                key="0"
              >
                <audio id="Q" src={bankOne[0].url} className="clip"></audio>Q
              </button>
              <button
                id={bankOne[1].id}
                onClick={(e) => this.handleClick(e, 1)}
                value="W"
                className="drum-pad"
                key="1"
              >
                <audio id="W" src={bankOne[1].url} className="clip"></audio>W
              </button>
              <button
                id={bankOne[2].id}
                onClick={(e) => this.handleClick(e, 2)}
                value="E"
                className="drum-pad"
                key="2"
              >
                <audio id="E" src={bankOne[2].url} className="clip"></audio>E
              </button>
              <button
                id={bankOne[3].id}
                onClick={(e) => this.handleClick(e, 3)}
                value="A"
                className="drum-pad"
                key="3"
              >
                <audio id="A" src={bankOne[3].url} className="clip"></audio>A
              </button>
              <button
                id={bankOne[4].id}
                onClick={(e) => this.handleClick(e, 4)}
                value="S"
                className="drum-pad"
                key="4"
              >
                <audio id="S" src={bankOne[4].url} className="clip"></audio>S
              </button>
              <button
                id={bankOne[5].id}
                onClick={(e) => this.handleClick(e, 5)}
                value="D"
                className="drum-pad"
                key="5"
              >
                <audio id="D" src={bankOne[5].url} className="clip"></audio>D
              </button>
              <button
                id={bankOne[6].id}
                onClick={(e) => this.handleClick(e, 6)}
                value="Z"
                className="drum-pad"
                key="6"
              >
                <audio id="Z" src={bankOne[6].url} className="clip"></audio>Z
              </button>
              <button
                id={bankOne[7].id}
                onClick={(e) => this.handleClick(e, 7)}
                value="X"
                className="drum-pad"
                key="7"
              >
                <audio id="X" src={bankOne[7].url} className="clip"></audio>X
              </button>
              <button
                id={bankOne[8].id}
                onClick={(e) => this.handleClick(e, 8)}
                value="C"
                className="drum-pad"
                key="8"
              >
                <audio id="C" src={bankOne[8].url} className="clip"></audio>C
              </button>
            </div>
          </div>
          <div id="display">
            <h1 id="info">{this.state.info}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

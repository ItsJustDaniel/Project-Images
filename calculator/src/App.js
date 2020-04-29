import React from "react";
import "./App.css";
import Buttons from "./components/buttons";
import Display from "./components/display";

class App extends React.Component {
  state = {
    input: "0",
    inputArr: [],
    buttonId: [
      "clear",
      "divide",
      "multiply",
      "nine",
      "eight",
      "seven",
      "subtract",
      "six",
      "five",
      "four",
      "add",
      "three",
      "two",
      "one",
      "equals",
      "zero",
      "decimal",
    ],
    buttonValue: [
      "AC",
      " / ",
      " x ",
      "9",
      "8",
      "7",
      " - ",
      "6",
      "5",
      "4",
      " + ",
      "3",
      "2",
      "1",
      "=",
      "0",
      ".",
    ],
  };
  onButtonClick = (e) => {
    const regex = /([.]{2,})|(?<=[.]\d+)[.]{1,}/g;
    const input = this.state.input;
    const inputArr = this.state.inputArr;
    const value = e.target.value;

    if (this.state.input === "0") {
      this.setState({ input: value });
    } else if (regex.test(input + value)) {
      console.log("hello");
    } else {
      this.setState(
        {
          input: input + value,
          inputArr: inputArr.concat(value),
        },
        () => {
          console.log(inputArr);
        }
      );
    }

    if (value === "=") {
      this.setState({
        input: String(eval(input)),
        inputArr: [String(eval(input))],
      });
    } else if (e.target.value === " x ") {
      this.setState({
        input: input + " * ",
        inputArr: this.state.inputArr.concat(" * "),
      });
    } else if (e.target.value === "AC") {
      this.setState({ input: "0", inputArr: [] });
    } else if (
      (inputArr[inputArr.length - 1] === " + " ||
        inputArr[inputArr.length - 1] === " - " ||
        inputArr[inputArr.length - 1] === " / " ||
        inputArr[inputArr.length - 1] === " * ") &&
      (value === " + " || value === " / " || value === " * ")
    ) {
      this.setState({
        input: input
          .split("")
          .filter((i) => {
            console.log(i);
            return (
              i !== "+" && i !== "-" && i !== "/" && i !== "*" && i !== " "
            );
          })
          .join("")
          .concat(value),
      });
    }
  };
  render() {
    const input = this.state.input;
    const buttonId = this.state.buttonId.slice();
    const buttonValue = this.state.buttonValue.slice();

    return (
      <div className="App" id="root-container">
        <div id="calculator">
          <Display input={input} />
          <Buttons
            value={buttonValue}
            id={buttonId}
            onButtonClick={this.onButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;

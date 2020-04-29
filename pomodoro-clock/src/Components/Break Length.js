import React from "react";
import "./Break Length.css";

const BreakLength = props => {
  return (
    <div id="break-container">
      <h3 id="break-label">Break Length</h3>
      <div id="break-buttons">
        <button id="break-increment" onClick={props.onBreakIncrement}>
          <i className="fas fa-arrow-up"></i>
        </button>

        <h4 id="break-length">{props.BreakLength}</h4>
        <button id="break-decrement" onClick={props.onBreakDecrement}>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default BreakLength;

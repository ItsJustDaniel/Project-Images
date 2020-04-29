import React from "react";
import "./Session Length.css";

const SessionLength = props => {
  return (
    <div>
      <h3 id="session-label">Session Length</h3>
      <div id="session-buttons">
        <button id="session-increment" onClick={props.onSessionIncrement}>
          <i className="fas fa-arrow-up"></i>
        </button>
        <h4 id="session-length">{props.SessionLength}</h4>

        <button id="session-decrement" onClick={props.onSessionDecrement}>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default SessionLength;

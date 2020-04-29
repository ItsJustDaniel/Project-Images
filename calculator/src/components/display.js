import React from "react";
import "./display.css";

const Display = (props) => {
  return (
    <div id="display">
      <h3>{props.input}</h3>
    </div>
  );
};

export default Display;

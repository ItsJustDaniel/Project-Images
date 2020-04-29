import React from "react";
import "./buttons.css";

const Butttons = (props) => {
  const buttons = props.id.map((id, i) => {
    return (
      <button
        id={id}
        key={i}
        value={props.value[i]}
        onClick={props.onButtonClick}
        className="buttons"
      >
        {props.value[i]}
      </button>
    );
  });

  return <div id="buttons-container">{buttons}</div>;
};

export default Butttons;

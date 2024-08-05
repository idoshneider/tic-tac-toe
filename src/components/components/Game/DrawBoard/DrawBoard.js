import React from "react";
import "./DrawBoard.css";

const Drawboard = (props) => {
  return (
    <div className="board" style={{ width: props.widthSize }}>
      {props.buttonArr.map((value, index) => {
        return (
          <button
            key={index}
            id={index}
            className={`${props.buttonArr[index]} box`}
            onClick={() => props.handleNextSymbolClick(index)}
          >
            {props.buttonArr[index]}
          </button>
        );
      })}
    </div>
  );
};

export default Drawboard;

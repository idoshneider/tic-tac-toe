import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="buttonContainer">
      {props.location !== undefined ? (
        <Link to={props.location}>
          <button
            className={props.className}
            onClick={props.handleClearTableClick}
          >
            {props.text}
          </button>
        </Link>
      ) : (
        <button
          className={props.className}
          onClick={props.handleClearTableClick}
        >
          {props.text}
        </button>
      )}
    </div>
  );
};

export default Button;

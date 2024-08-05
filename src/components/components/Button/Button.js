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
      ) : props.className === "clear" ? (
        <button
          className={props.className}
          onClick={props.handleClearTableClick}
        >
          {props.text}
        </button>
      ) : 
       props.className === "random" ?
       <button className={props.className} onClick={props.handleRandomClick}>
          {props.text}
        </button>
        :
      (
        <button className={props.className} onClick={props.handlePreviousClick}>
          {props.text}
        </button>
      )}
    </div>
  );
};

export default Button;

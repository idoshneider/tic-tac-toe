import React from "react";
import "./ScoreBoard.css";

const Scoreboard = (props) => {
  return (
    <>
      <div className="score">
        <p className="xScore">
          {props.nameX} : {props.xScore}
        </p>
        <p className="oScore">
          {props.nameO} : {props.oScore}
        </p>
      </div>
      <div className="scoreBoard">
        {props.winner !== "" ? (
          <>
            <h1 className="gameover">Game Over</h1>
            <h3 className="winner">
              {props.symbol === "X"
                ? `winner is ${props.nameO}`
                : `winner is ${props.nameX}`}
            </h3>
          </>
        ) : props.gameOver ? (
          <>
            <h1 className="gameover">Game Over</h1>{" "}
            <h3 className="draw">draw</h3>
          </>
        ) : (
          <>
            <div className="timer">{"timer: " + props.timer}</div>
            <div className="divturn">
              <h3 className="turn">Turn:</h3>
              <h3 className={`is-${props.symbol}`}>
                {props.symbol === "X"
                  ? `${props.nameX} (${props.symbol})`
                  : `${props.nameO} (${props.symbol})`}
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Scoreboard;

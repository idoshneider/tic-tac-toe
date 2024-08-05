import "./game.css";
import DrawBoard from "../DrawBoard/DrawBoard";
import Createinput from "../CreateInput/CreateInput";
import Scoreboard from "../ScoreBoard/ScoreBoard.js";
import Button from "../../Button/Button";
import Clock from "../Clock/Clock";
import NameX from "../Names/NameX/NameX";
import NameO from "../Names/NameO/NameO";
// import Clock from 'react-live-clock';
import { useDispatch, useSelector } from "react-redux";
import handleClearTableClick from "../../Button/ClickHandlers/HandleClickClearTable";
import buildArr from "../CreateInput/InputHandler/BuildArr";
import handleNextSymbolClick from "../DrawBoard/BoardClickHandler/HandleClickNextSymbol";
import SetSize from "../../../../redux/actions/SizeActions/SetSIze";
import OnSetNamesPress from "../Names/OnSetNamesPress";
import handlePreviousClick from "../../Button/ClickHandlers/HandlePreviousClick";
import handleRandomClick from "../../Button/ClickHandlers/HandleRandomClick";
// import SetNames from "../../../../actions/ActionsNames/SetNameX";
import { useState } from "react";
function Game() {
  const widthSize = useSelector((state) => state.numsize),
    symbol = useSelector((state) => state.symbol),
    gameOver = useSelector((state) => state.gameOver),
    winner = useSelector((state) => state.winner),
    buttonArr = useSelector((state) => state.buttonArr),
    nameX = useSelector((state) => state.nameX),
    nameO = useSelector((state) => state.nameO),
    xScore = useSelector((state) => state.xScore),
    oScore = useSelector((state) => state.oScore),
    timer = useSelector((state) => state.timer),
    [stateNameX, SetStateNameX] = useState(""),
    [stateNameO, SetStateNameO] = useState(""),
    dispatch = useDispatch(),
    onSetSizeChange = (event) => {
      Number(event.target.value) >= 3
        ? dispatch(SetSize(Number(event.target.value)))
        : dispatch(SetSize(3));
      //(a > b && a > c)
    },
    onSetNameXChange = (event) => SetStateNameX(event.target.value),
    onSetNameOChange = (event) => SetStateNameO(event.target.value);
  return (
    <div className="game">
      <Clock/>
      <Scoreboard
        gameOver={gameOver}
        symbol={symbol}
        winner={winner}
        nameX={nameX}
        nameO={nameO}
        xScore={xScore}
        oScore={oScore}
        timer={timer}
      />
      <DrawBoard
        buttonArr={buttonArr}
        handleNextSymbolClick={handleNextSymbolClick}
        widthSize={(widthSize + 1) * 83}
      />
      <div className="inputs">
        <NameX
          onSetNameXChange={onSetNameXChange}
          OnSetNamesPress={OnSetNamesPress}
          stateNameX={stateNameX}
          stateNameO={stateNameO}
        />
        <Createinput buildArr={buildArr} onSetSizeChange={onSetSizeChange} />
        <NameO
          onSetNameOChange={onSetNameOChange}
          OnSetNamesPress={OnSetNamesPress}
          stateNameX={stateNameX}
          stateNameO={stateNameO}
        />
      </div>
      <Button
        className={"clear"}
        handleClearTableClick={handleClearTableClick}
        text={"Clear"}
      />
      <Button
        className={"homeBtn"}
        handleClearTableClick={handleClearTableClick}
        text={"Home"}
        location={"/"}
      />
      <div className="rowContainer">
        <Button
          className={"previous"}
          handlePreviousClick={handlePreviousClick}
          text={"Previous Move"}
        />
        <Button
          className={"random"}
          handleRandomClick={handleRandomClick}
          text={"I Dare You"}
        />
      </div>
    </div>
  );
}
export default Game;

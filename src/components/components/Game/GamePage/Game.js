import "./game.css";
import DrawBoard from "../DrawBoard/DrawBoard";
import Createinput from "../CreateInput/CreateInput";
import Scoreboard from "../ScoreBoard/ScoreBoard.js";
import Button from "../../Button/Button";
import Clock from "../Clock/Clock";
// import Clock from 'react-live-clock';
import { useDispatch, useSelector } from "react-redux";
import handleClearTableClick from "../../Button/ClickHandlers/HandleClickClearTable";
import buildArr from "../CreateInput/InputHandler/BuildArr";
import handleNextSymbolClick from "../DrawBoard/BoardClickHandler/HandleClickNextSymbol";
import SetSize from "../../../../actions/SizeActions/SetSIze";

function Game() {
  const widthSize = useSelector((state) => state.numsize),
    symbol = useSelector((state) => state.symbol),
    gameOver = useSelector((state) => state.gameOver),
    winner = useSelector((state) => state.winner),
    buttonArr = useSelector((state) => state.buttonArr),
    dispatch = useDispatch(),
    onSetSizeChange = (event) =>
      Number(event.target.value) >= 3
        ? dispatch(SetSize(Number(event.target.value)))
        : dispatch(SetSize(3));
  return (
    <div className="game">
      <Clock />
      <Scoreboard gameOver={gameOver} symbol={symbol} winner={winner} />
      <DrawBoard
        buttonArr={buttonArr}
        handleNextSymbolClick={handleNextSymbolClick}
        widthSize={(widthSize + 1) * 83}
      />
      <Createinput buildArr={buildArr} onSetSizeChange={onSetSizeChange} />
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
    </div>
  );
}
export default Game;

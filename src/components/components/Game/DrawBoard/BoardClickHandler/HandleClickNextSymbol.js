import InsertToBtnArr from "../../../../../redux/actions/ActionsBtnArr/InsertToBtnArr";
import PushToHistory from "../../../../../redux/actions/HistoryActions/PushToHistory";
import WriteGameOver from "../../../../../redux/actions/ScoreBoardActions/WriteGameOver";
import { IsWin } from "../../Utilities/IsWIn";
import store from "../../../../../index";
import DrawSymbol from "../../../../../redux/actions/SYmbolActions/DrawSymbol";
import SetWinner from "../../../../../redux/actions/ScoreBoardActions/SetWinner";
import IncrementScore from "../../../../../redux/actions/PlayersScore/IncrementScore";

const handleNextSymbolClick = (index) => {
  let gameOver = store.getState().gameOver;
  let history = store.getState().history;
  let symbol = store.getState().symbol;
  let buttonArr = store.getState().buttonArr;
  let size = store.getState().size;
  // let nameX = store.getState().nameX;
  // let nameO = store.getState().nameO;
  if (!gameOver) {
    if (history.length === 0) {
      store.dispatch(PushToHistory(symbol,index));
      store.dispatch(InsertToBtnArr(symbol, index));
      store.dispatch(DrawSymbol("O"));
    } else if (history[history.length - 1][0] === "X" && buttonArr[index] === "") {
      store.dispatch(PushToHistory(symbol,index));
      store.dispatch(InsertToBtnArr(symbol, index));
      store.dispatch(DrawSymbol("X"));
    } else {
      if (buttonArr[index] === "") {
        store.dispatch(PushToHistory(symbol,index));
        store.dispatch(InsertToBtnArr(symbol, index));
        store.dispatch(DrawSymbol("O"));
      }
    }
    if (history.length > size) {
      if (IsWin(buttonArr, size)) {
        store.dispatch(SetWinner(symbol));
        store.dispatch(WriteGameOver());
        store.dispatch(IncrementScore(symbol));
      } else if (history.length === buttonArr.length) {
        store.dispatch(WriteGameOver());
      }
    }
  }
};
export default handleNextSymbolClick;

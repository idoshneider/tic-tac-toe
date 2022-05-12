import InsertToBtnArr from "../../../../../actions/ActionsBtnArr/InsertToBtnArr";
import PushToHistory from "../../../../../actions/HistoryActions/PushToHistory";
import WriteGameOver from "../../../../../actions/ScoreBoardActions/WriteGameOver";
import { IsWin } from "../../Utilities/IsWIn";
import store from "../../../../../index";
import DrawSymbol from "../../../../../actions/SYmbolActions/DrawSymbol";
import SetWinner from "../../../../../actions/ScoreBoardActions/SetWinner";

const handleNextSymbolClick = (index) => {
  let gameOver = store.getState().gameOver;
  let history = store.getState().history;
  let symbol = store.getState().symbol;
  let buttonArr = store.getState().buttonArr;
  let size = store.getState().size;
  if (!gameOver) {
    if (history.length === 0) {
      store.dispatch(PushToHistory(symbol));
      store.dispatch(InsertToBtnArr(symbol, index));
      store.dispatch(DrawSymbol("O"));
    } else if (history[history.length - 1] === "X" && buttonArr[index] === "") {
      store.dispatch(PushToHistory(symbol));
      store.dispatch(InsertToBtnArr(symbol, index));
      store.dispatch(DrawSymbol("X"));
    } else {
      if (buttonArr[index] === "") {
        store.dispatch(PushToHistory(symbol));
        store.dispatch(InsertToBtnArr(symbol, index));
        store.dispatch(DrawSymbol("O"));
      }
    }
    if (history.length > size) {
      if (IsWin(buttonArr, size)) {
        store.dispatch(SetWinner(symbol));
        store.dispatch(WriteGameOver());
      } else if (history.length === buttonArr.length) {
        store.dispatch(WriteGameOver());
      }
    }
  }
};
export default handleNextSymbolClick;

import store from "../../../..";
import PreviousMove from "../../../../redux/actions/HistoryActions/PreviousMove";
import DecrementScore from "../../../../redux/actions/PlayersScore/DecrementScore";
import DrawSymbol from "../../../../redux/actions/SYmbolActions/DrawSymbol";
import WriteNothing from "../../../../redux/actions/WriteNothing";

const handlePreviousClick = () => {
  let history = store.getState().history;
  //   let symbol = store.getState().symbol;
  if (history.length !== 0) {
    store.dispatch(PreviousMove(history[history.length - 1][1]));
    store.getState().symbol === "X"
      ? store.dispatch(DrawSymbol("O"))
      : store.dispatch(DrawSymbol("X"));
    if (store.getState().winner !== "") {
      store.dispatch(DecrementScore(store.getState().symbol));
    }
    store.dispatch(WriteNothing());
  }
};
export default handlePreviousClick;

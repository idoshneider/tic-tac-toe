import ClearBtnArr from "../../../../actions/ActionsBtnArr/ClearBtnArr";
import SetNames from "../../../../actions/ActionsNames/SetNames";
import ClearHistory from "../../../../actions/HistoryActions/ClearHistory";
import DrawSymbol from "../../../../actions/SYmbolActions/DrawSymbol";
import WriteNothing from "../../../../actions/WriteNothing";
import store from "../../../../index";
const handleClearTableClick = (event) => {
  store.dispatch(DrawSymbol("O"));
  store.dispatch(ClearBtnArr());
  store.dispatch(DrawSymbol("X"));
  store.dispatch(WriteNothing());
  store.dispatch(ClearHistory());
  if (event.key === "Enter") {
    let nameX = store.getState().nameX;
    let nameO = store.getState().nameO;
    event.target.value = "";
    store.dispatch(SetNames(nameX, nameO));
  }
};
export default handleClearTableClick;

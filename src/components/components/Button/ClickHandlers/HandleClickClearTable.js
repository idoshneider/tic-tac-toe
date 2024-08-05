import ClearBtnArr from "../../../../redux/actions/ActionsBtnArr/ClearBtnArr";
// import SetNames from "../../../../actions/ActionsNames/SetNames";
import ClearHistory from "../../../../redux/actions/HistoryActions/ClearHistory";
import DrawSymbol from "../../../../redux/actions/SYmbolActions/DrawSymbol";
import WriteNothing from "../../../../redux/actions/WriteNothing";
import store from "../../../../index";
import ResetTimer from "../../../../redux/actions/timer/ResetTimer";
const handleClearTableClick = (event) => {
  store.dispatch(DrawSymbol("O"));
  store.dispatch(ClearBtnArr());
  store.dispatch(DrawSymbol("X"));
  store.dispatch(WriteNothing());
  store.dispatch(ClearHistory());
  store.dispatch(ResetTimer());

  if (event.key === "Enter") {
    // let nameX = store.getState().nameX;
    // let nameO = store.getState().nameO;
    event.target.value = "";
    // store.dispatch(SetNameX(nameX));
    // store.dispatch(SetNameO(nameO));

  }
};
export default handleClearTableClick;

import ClearBtnArr from "../../../../actions/ActionsBtnArr/ClearBtnArr"
import ClearHistory from "../../../../actions/HistoryActions/ClearHistory"
import DrawSymbol from "../../../../actions/SYmbolActions/DrawSymbol"
import WriteNothing from "../../../../actions/WriteNothing"
import store from "../../../../index"
const handleClearTableClick = () =>{
    store.dispatch(DrawSymbol('O'));
    store.dispatch(ClearBtnArr());
    store.dispatch(DrawSymbol('X'));
    store.dispatch(WriteNothing());
    store.dispatch(ClearHistory())
  }
export default handleClearTableClick;
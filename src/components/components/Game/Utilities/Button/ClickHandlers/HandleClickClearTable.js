import ClearBtnArr from "../../../../../../actions/ActionsBtnArr/ClearBtnArr";
import ClearHistory from "../../../../../../actions/HistoryActions/ClearHistory";
import DrawO from "../../../../../../actions/SYmbolActions/DrawO";
import DrawX from "../../../../../../actions/SYmbolActions/DrawX";
import WriteNothing from "../../../../../../actions/WriteNothing";
import store from "../../../../../../index"
const handleClearTableClick = () =>{
    store.dispatch(DrawO());
    store.dispatch(ClearBtnArr());
    store.dispatch(DrawX());
    store.dispatch(WriteNothing());
    store.dispatch(ClearHistory())
  }
export default handleClearTableClick;
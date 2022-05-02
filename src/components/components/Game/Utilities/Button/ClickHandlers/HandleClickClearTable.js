import ClearBtnArr from "../../../../../../actions/ActionsBtnArr/ClearBtnArr";
import ClearHistory from "../../../../../../actions/HistoryActions/ClearHistory";
import DrawX from "../../../../../../actions/SYmbolActions/DrawX";
import WriteNothing from "../../../../../../actions/WriteNothing";
import store from "../../../../../../index"
const HandleClickClearTable = () =>{
    store.dispatch(ClearBtnArr());
    store.dispatch(DrawX());
    store.dispatch(WriteNothing());
    store.dispatch(ClearHistory())
  }
export default HandleClickClearTable;
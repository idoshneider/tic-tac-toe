import ClearBtnArr from "../../../../../../actions/ClearBtnArr";
import ClearHistory from "../../../../../../actions/ClearHistory";
import DrawX from "../../../../../../actions/DrawX";
import WriteNothing from "../../../../../../actions/WriteNothing";
import store from "../../../../../../index"
const HandleClickClearTable = () =>{
    store.dispatch(ClearBtnArr());
    store.dispatch(DrawX());
    store.dispatch(WriteNothing());
    store.dispatch(ClearHistory())
  }
export default HandleClickClearTable;
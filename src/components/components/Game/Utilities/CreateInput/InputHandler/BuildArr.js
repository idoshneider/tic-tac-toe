import BuildBtnArr from "../../../../../../actions/BuildBtnArr";
import SetNumSize from "../../../../../../actions/SetNumSize";
import HandleClickClearTable from "../../Button/ClickHandlers/HandleClickClearTable";
import store from "../../../../../../index"
import { createStore } from "redux";
import UpdateSize from "../../../../../../reducers/UpdateSize";
const BuildArr = (event) =>{
    if(event.key === 'Enter'){
       let size = store.getState().size
       store.dispatch(SetNumSize(size));
       store.dispatch(BuildBtnArr(size*size));
       event.target.value = '';
       HandleClickClearTable();
    }
  }
export default BuildArr;
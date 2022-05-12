import BuildBtnArr from "../../../../../actions/ActionsBtnArr/BuildBtnArr";
import SetNumSize from "../../../../../actions/SizeActions/SetNumSize";
import HandleClickClearTable from "../../../Button/ClickHandlers/HandleClickClearTable";
import store from "../../../../../index";
const BuildArr = (event) => {
  if (event.key === "Enter") {
    let size = store.getState().size;
    store.dispatch(SetNumSize(size));
    store.dispatch(BuildBtnArr(size * size));
    event.target.value = "";
    HandleClickClearTable(event);
  }
};
export default BuildArr;

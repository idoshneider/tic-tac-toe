
import store from "../../../..";
import SetNameX from "../../../../redux/actions/ActionsNames/SetNameX";
import SetNameO from "../../../../redux/actions/ActionsNames/SetNameO";
import handleClearTableClick from "../../Button/ClickHandlers/HandleClickClearTable";
import ResetScore from "../../../../redux/actions/PlayersScore/ResetScore";
const OnSetNamesPress = (event,stateNameX,stateNameO) => {
  if (event.key === "Enter") {
    store.dispatch(SetNameX(stateNameX));
    store.dispatch(SetNameO(stateNameO));
    store.dispatch(ResetScore())
    handleClearTableClick(event);
  }
};
export default OnSetNamesPress;

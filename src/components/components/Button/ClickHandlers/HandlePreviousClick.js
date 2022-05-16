import store from "../../../..";
import PreviousMove from "../../../../redux/actions/HistoryActions/PreviousMove";
import DrawSymbol from "../../../../redux/actions/SYmbolActions/DrawSymbol";
import WriteNothing from "../../../../redux/actions/WriteNothing";

const handlePreviousClick = () => {
        let history = store.getState().history;
        let symbol = store.getState().symbol;
        store.dispatch(PreviousMove(history[history.length-1][1]))
        if(symbol === 'X'){
            store.dispatch(DrawSymbol('O'))
        }
        else{
            store.dispatch(DrawSymbol('X'))
        }
        store.dispatch(WriteNothing());
        
  
    }
export default handlePreviousClick;
  
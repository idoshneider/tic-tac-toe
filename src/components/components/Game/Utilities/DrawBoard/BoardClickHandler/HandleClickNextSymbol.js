import DrawO from "../../../../../../actions/SYmbolActions/DrawO";
import InsertToBtnArr from "../../../../../../actions/ActionsBtnArr/InsertToBtnArr";
import Owon from "../../../../../../actions/ScoreBoardActions/Owon";
import PushToHistory from "../../../../../../actions/HistoryActions/PushToHistory";
import WriteGameOver from "../../../../../../actions/ScoreBoardActions/WriteGameOver";
import { IsWin } from "../../IsWIn";
import store from "../../../../../../index"
import DrawX from "../../../../../../actions/SYmbolActions/DrawX";
import Xwon from "../../../../../../actions/ScoreBoardActions/Xwon";

    const handleNextSymbolClick = (index) =>{
        let gameOver = store.getState().gameOver;
        let history = store.getState().history;
        let symbol = store.getState().symbol;
        let buttonArr = store.getState().buttonArr;
        let size = store.getState().size;
        if(!gameOver){
          if(history.length === 0){
            store.dispatch(PushToHistory(symbol));
            store.dispatch(InsertToBtnArr(symbol,index));
            store.dispatch(DrawO());
          }
          else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
            store.dispatch(PushToHistory(symbol));
            store.dispatch(InsertToBtnArr(symbol,index));
  
            if(history.length > size ){
              if(IsWin(buttonArr,size) === "winner is O"){
                store.dispatch(Owon());
              }
              if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
                store.dispatch(WriteGameOver());
              }
            }
            store.dispatch(DrawX());
            }
          else{
            if(buttonArr[index] ===''){
              store.dispatch(PushToHistory(symbol));
              store.dispatch(InsertToBtnArr(symbol,index));
  
              if(history.length > size){
                if(IsWin(buttonArr,size) === "winner is X"){
                  store.dispatch(Xwon());
                }
                if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
                  store.dispatch(WriteGameOver());
                }
              }
            store.dispatch(DrawO());
                  }
          }
        }
        else{
          store.dispatch(WriteGameOver());
        }
      }
    export default handleNextSymbolClick;
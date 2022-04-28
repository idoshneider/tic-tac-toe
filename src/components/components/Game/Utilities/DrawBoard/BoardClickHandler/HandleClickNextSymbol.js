import DrawO from "../../../../../../actions/DrawO";
import InsertToBtnArr from "../../../../../../actions/InsertToBtnArr";
import Owon from "../../../../../../actions/Owon";
import PushToHistory from "../../../../../../actions/PushToHistory";
import WriteGameOver from "../../../../../../actions/WriteGameOver";
import { IsWin } from "../../IsWIn";
import store from "../../../../../../index"
import DrawX from "../../../../../../actions/DrawX";
import Xwon from "../../../../../../actions/Xwon";

    const HandleClickNextSymbol = (index) =>{
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
  
            if(history.length > 4 ){
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
  
              if(history.length > 4){
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
    export default HandleClickNextSymbol;
import DrawX from "../../../actions/DrawX"
import DrawO from "../../../actions/DrawO"
import WriteGameOver from "../../../actions/WriteGameOver";
import Xwon from "../../../actions/Xwon";
import Owon from "../../../actions/Owon";
import {IsWin} from "./IsWIn"
// export const NextSymbol = (btnid,dispatch,draw,buttonArr,size,winner,history,SetHistory) =>{
//     let index = Number(btnid);
//     let flagGameOver;
//     if(history.length < buttonArr.length && winner ===''){
//        flagGameOver = false;
//     }
//     else{
//        flagGameOver = true;
//     }

//     if(!flagGameOver){
//       if(history.length === 0){
//         history.push(draw);
//         SetHistory(history);
//         buttonArr[index] = draw;
//         dispatch(DrawO());
//       }
//       else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
//         history.push(draw);
//         SetHistory(history);
//         buttonArr[index] = draw;
//         if(history.length > 4 ){
//           if(IsWin(buttonArr,size) === "winner is O"){
//             dispatch(Owon());
//           }
//           if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
//             flagGameOver = true;
//             dispatch(WriteGameOver());
//           }
//         }
//         dispatch(DrawX());
//         }
//       else{
//         if(buttonArr[index] ===''){
//           history.push(draw);
//           SetHistory(history);
//           buttonArr[index] = draw;
//           if(history.length > 4){
//             if(IsWin(buttonArr,size) === "winner is X"){
//               dispatch(Xwon());
//             }
//             if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
//               flagGameOver = true;
//               dispatch(WriteGameOver());
//             }
//           }
//         dispatch(DrawO());
//               }
//       }
//     }
//     else{
//       dispatch(WriteGameOver());
//     }
//   }
export const HandleClickNextSymbol = (dispatch,btnid,sym,setSym,draw,buttonArr,size,winner,history,SetHistory,setOver,setWinner,whowin) =>{
  let index = Number(btnid);
  let flagGameOver;
  if(history.length < buttonArr.length && whowin ===''){
     flagGameOver = false;
  }
  else{
     flagGameOver = true;
  }

  if(!flagGameOver){
    if(history.length === 0){
      history.push(sym);
      SetHistory(history);
      buttonArr[index] = sym;
      setSym("O");
    }
    else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
      history.push(sym);
      SetHistory(history);
      buttonArr[index] = sym;
      if(history.length > 4 ){
        if(IsWin(buttonArr,size) === "winner is O"){
          setWinner("winner is O")
        }
        if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
          flagGameOver = true;
          setOver("Game Over")
        }
      }
      setSym("X")
      }
    else{
      if(buttonArr[index] ===''){
        history.push(sym);
        SetHistory(history);
        buttonArr[index] = sym;
        if(history.length > 4){
          if(IsWin(buttonArr,size) === "winner is X"){
            setWinner("winner is X")
          }
          if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
            flagGameOver = true;
            setOver("Game Over")
          }
        }
      setSym("O")
            }
    }
  }
  else{
    setOver("Game Over")
    flagGameOver = true;
  }
}
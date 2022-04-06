// import DrawX from "../../actions/DrawX"
// import WriteNothing from "../../actions/WriteNothing"
// export const ClearTable = (dispatch,buttonArr,history,SetHistory,SetButtonArr) =>{
//     dispatch(WriteNothing());
//     dispatch(DrawX());
//     for (let k = 0; k < buttonArr.length; k++) {
//       buttonArr[k] = '';
//     }
//     SetButtonArr(buttonArr);
//     dispatch(WriteNothing());
//     dispatch(DrawX());
//     history = [];
//     SetHistory(history);

//   }
export const HandleClickClearTable = (dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner) =>{
  setWinner("");
  setSym("X");
  for (let k = 0; k < buttonArr.length; k++) {
    buttonArr[k] = '';
  }
  SetButtonArr(buttonArr);
  setSym("X");
  setOver("");
  history = [];
  SetHistory(history);

}
import DrawX from "./actions/DrawX";
import DrawO from "./actions/DrawO";
import WriteGameOver from "./actions/WriteGameOver";
import WriteNothing from "./actions/WriteNothing";
import Xwon from "./actions/Xwon";
import Owon from "./actions/Owon";
var history = [];
var index;
var flagGameOver = false;
var flag;
export const IsWin = (buttonArr,size) => {
    var prev = buttonArr[0]; //rows
    ///////
    for (let i = 0; i < size; i++) {
      flag = true;
      for (var j = i * size; j < i*size+size;j++) {
            if(prev !== buttonArr[j] || prev === ''){
              flag = false;
              
            }
            prev = buttonArr[j];
        }
        
        if(flag){
          return "winner is " + prev;
          
        }
        prev = buttonArr[j+1];
        
      } 
      ////////
      prev = buttonArr[0]; //columns
      for (let i = 0; i < size; i++) {
        flag = true;
        for (var j = i; j <= size*(size-1) + i;j+=size) {
              if(prev !== buttonArr[j] || prev === ''){
                flag = false;
                
              }
              prev = buttonArr[j];
          }
          
          if(flag){
            return "winner is " + prev;
            
          }
          prev = buttonArr[i+1];
          
        }
        //////////
      prev = buttonArr[0];
      flag = true;
      for(let i =0; i<buttonArr.length;i+=size+1){
        if(prev !== buttonArr[i] || prev === ''){
          flag = false;
        }
        prev = buttonArr[i];
      }
      if(flag){
        return "winner is " + prev;
      }
      /////////
      prev = buttonArr[size-1];
      flag = true;
      for(let i =size-1; i <= buttonArr.length-size; i+=size-1){
        if(prev !== buttonArr[i] || prev === ''){
          flag = false;
        }
        prev = buttonArr[i];
      }
      if(flag){
        return "winner is " + prev;
      }

      return '';

    }
export const NextSymbol = (btnid,dispatch,draw,buttonArr,size) =>{
    index = Number(btnid);
    if(!flagGameOver){
      if(history.length === 0){
        history.push(draw);
        buttonArr[index] = draw;
        dispatch(DrawO());
      }
      else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
        history.push(draw);
        buttonArr[index] = draw;
        if(history.length > 4 ){
          if(IsWin(buttonArr,size) === "winner is O"){
            dispatch(Owon());
          }
          if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
            flagGameOver = true;
            dispatch(WriteGameOver());
          }
        }
        dispatch(DrawX());
        }
      else{
        if(buttonArr[index] ===''){
          history.push(draw);
          buttonArr[index] = draw;
          if(history.length > 4){
            if(IsWin(buttonArr,size) === "winner is X"){
              dispatch(Xwon());
            }
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              flagGameOver = true;
              dispatch(WriteGameOver());
            }
          }
        dispatch(DrawO());
              }
      }
    }
    else{
      dispatch(WriteGameOver());
    }
  }

export const ClearTable = (dispatch,buttonArr) =>{
    dispatch(WriteNothing());
    dispatch(DrawX());
    dispatch(WriteGameOver());
    for (let k = 0; k < buttonArr.length; k++) {
      buttonArr[k] = '';
    }

    dispatch(WriteNothing());
    dispatch(DrawX());
    history = [];
    flagGameOver = false;
  }



    
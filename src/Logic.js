import DrawX from "./actions/DrawX";
import DrawO from "./actions/DrawO";
var history = [];
var index;
var flagGameOver = false;
var defaultColor;
//a
var elem;
var winner = ''
var flag;
export const IsWin = (buttonArr,size) => { //line by line**********************************************************************************
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
    elem = document.getElementById(btnid)
    if(!flagGameOver){
      if(history.length === 0){
        defaultColor = elem.style.backgroundColor
        elem.style.backgroundColor = '#AF40FF'
        history.push(draw);
        index = Number(btnid)
        buttonArr[index] = draw;
        dispatch(DrawO());
      }
      else if(history[history.length - 1] === 'X' && elem.innerHTML === ''){
        elem.style.backgroundColor = '#00DDEB'
        history.push(draw);
        index = Number(btnid);
        buttonArr[index] = draw;
        if(history.length > 4 ){
          document.getElementById("winner").innerHTML = IsWin(buttonArr,size);
          if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
            flagGameOver = true;
            document.getElementById("gameover").innerHTML = "Game Over";
          }
        }
        dispatch(DrawX());
        }
      else{
        if(elem.innerHTML ===''){
          elem.style.backgroundColor = '#AF40FF'
          history.push(draw);
          index = Number(btnid);
          buttonArr[index] = draw;
          if(history.length > 4){
            document.getElementById("winner").innerHTML = IsWin(buttonArr,size);
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              flagGameOver = true;
              document.getElementById("gameover").innerHTML = "Game Over";
        }
          } 
        dispatch(DrawO());
              }
      }
    }
    else{
        document.getElementById("gameover").innerHTML = "Game Over";
    }
  }

export const ClearTable = (dispatch,buttonArr) =>{
    for (let i = 0; i < buttonArr.length; i++) {
      document.getElementsByClassName("placeMark")[i].innerHTML = '';
      buttonArr[i] = '';
      document.getElementsByClassName("placeMark")[i].style.backgroundColor = defaultColor;
    }
    document.getElementById('winner').innerHTML = '';
    document.getElementById('gameover').innerHTML = '';
    history = [];
    flagGameOver = false;
    dispatch(DrawX());
  }



    

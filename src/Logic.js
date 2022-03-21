import DrawX from "./actions/DrawX";
import DrawO from "./actions/DrawO";
var history = [];
var index;
var flagGameOver = false;
var defaultColor;
var elem;
export function IsWin(buttonArr){
    if(buttonArr[0] === buttonArr[1] && buttonArr[1] === buttonArr[2] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('1').style.backgroundColor = '#008000'
        document.getElementById('2').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
    }
    else if(buttonArr[3] === buttonArr[4] && buttonArr[4] === buttonArr[5] && buttonArr[3] !== ''){
        document.getElementById('3').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('5').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[3];
    }
    else if(buttonArr[6] === buttonArr[7] && buttonArr[7] === buttonArr[8] && buttonArr[6] !== ''){
        document.getElementById('6').style.backgroundColor = '#008000'
        document.getElementById('7').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[6];
    }
    else if(buttonArr[0] === buttonArr[3] && buttonArr[3] === buttonArr[6] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('3').style.backgroundColor = '#008000'
        document.getElementById('6').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
    }
    else if(buttonArr[1] === buttonArr[4] && buttonArr[4]=== buttonArr[7] && buttonArr[1 ] !== ''){
        document.getElementById('1').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('7').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[1];
    }
    else if(buttonArr[2] === buttonArr[5] && buttonArr[5] === buttonArr[8] && buttonArr[2] !== ''){
        document.getElementById('2').style.backgroundColor = '#008000'
        document.getElementById('5').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[2];
    }
    else if(buttonArr[0] === buttonArr[4] && buttonArr[4] === buttonArr[8] && buttonArr[0] !== ''){
        document.getElementById('0').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('8').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[0];
        
    }
    else if(buttonArr[2] === buttonArr[4] && buttonArr[4] === buttonArr[6] && buttonArr[2] !== ''){
        document.getElementById('2').style.backgroundColor = '#008000'
        document.getElementById('4').style.backgroundColor = '#008000'
        document.getElementById('6').style.backgroundColor = '#008000'
        return "winner is " + buttonArr[2];
    }
    else{
        return '';
    }
}
export function NextSymbol(btnid,dispatch,draw,buttonArr){
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
          document.getElementById("winner").innerHTML = IsWin(buttonArr);
          if(IsWin(buttonArr) !== '' || history.length === 9){
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
            document.getElementById("winner").innerHTML = IsWin(buttonArr);
            if(IsWin(buttonArr) !== '' || history.length === 9){
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

export function ClearTable(dispatch,buttonArr){
    for (let i = 0; i < 9; i++) {
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



    
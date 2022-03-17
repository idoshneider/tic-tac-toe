import DrawX from "./actions/DrawX";
import DrawO from "./actions/DrawO";
var history = [];
var buttonArr = Array(9).fill('');
var index;
var flagGameOver = false;
var defaultColor;
export function IsWin(){
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
export function NextSymbol(btnid,dispatch,draw){
    if(!flagGameOver){
      if(history.length === 0){
        document.getElementById(btnid).innerHTML = draw;
        defaultColor = document.getElementById(btnid).style.backgroundColor
        document.getElementById(btnid).style.backgroundColor = '#AF40FF'
        history.push(draw);
        index = Number(btnid)
        buttonArr[index] = draw;
        dispatch(DrawO());
      }
      else if(history[history.length - 1] === 'X' && document.getElementById(btnid).innerHTML === ''){
        document.getElementById(btnid).innerHTML = draw;
        document.getElementById(btnid).style.backgroundColor = '#00DDEB'
        history.push(draw);
        index = Number(btnid);
        buttonArr[index] = draw;
        if(history.length > 4 ){
          document.getElementById("winner").innerHTML = IsWin();
          if(IsWin(buttonArr) !== '' || history.length === 9){
            flagGameOver = true;
            document.getElementById("gameover").innerHTML = "Game Over";
            document.getElementById("turn").innerHTML = '';
          }
        }
        dispatch(DrawX());
        }
      else{
        if(document.getElementById(btnid).innerHTML ===''){
          document.getElementById(btnid).innerHTML = draw;
          document.getElementById(btnid).style.backgroundColor = '#AF40FF'
          history.push(draw);
          index = Number(btnid);
          buttonArr[index] = draw;
          if(history.length > 4){
            document.getElementById("winner").innerHTML = IsWin();
            if(IsWin(buttonArr) !== '' || history.length === 9){
              flagGameOver = true;
              document.getElementById("gameover").innerHTML = "Game Over";
              document.getElementById("turn").innerHTML = '';

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

export function ClearTable(dispatch){
    for (let i = 0; i < 9; i++) {
      // document.getElementById(i.toString()).innerHTML = '';
      // document.getElementById(i.toString()).style.backgroundColor = defaultColor;
      document.getElementsByClassName("placeMark")[i].innerHTML = '';
      document.getElementsByClassName("placeMark")[i].style.backgroundColor = defaultColor;
    }
    document.getElementById('winner').innerHTML = '';
    document.getElementById('gameover').innerHTML = '';
    history = [];
    buttonArr = Array(9).fill('');
    flagGameOver = false;
    dispatch(DrawX());
  }



    
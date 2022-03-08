import React from "react";
import './game.css'
import { useSelector, useDispatch} from "react-redux";
import store from ".";
import DrawX from "./actions/DrawX";
import DrawO from "./actions/DrawO";
import { IsWin } from "./Logic";
import {
 Link
} from "react-router-dom";
var history = [];
var buttonArr = Array(9).fill('');
var index;
var flagGameOver = false;
var defaultColor;
function Game (){
    const draw = useSelector(state => state.draw) ;   
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    return( 
    <div className="game">
      <h1 id="gameover">{null}</h1>
      <h3 id="winner">{null}</h3>
      <div className="board">
        <button className="placeMark" id = "0" onClick={() => WhatSymbol("0",dispatch,draw)}></button>
        <button className="placeMark" id = "1" onClick={() => WhatSymbol("1",dispatch,draw)}></button>
        <button className="placeMark" id = "2" onClick={() => WhatSymbol("2",dispatch,draw)}></button>
        <button className="placeMark" id = "3" onClick={() => WhatSymbol("3",dispatch,draw)}></button>
        <button className="placeMark" id = "4" onClick={() => WhatSymbol("4",dispatch,draw)}></button>
        <button className="placeMark" id = "5" onClick={() => WhatSymbol("5",dispatch,draw)}></button>
        <button className="placeMark" id = "6" onClick={() => WhatSymbol("6",dispatch,draw)}></button>
        <button className="placeMark" id = "7" onClick={() => WhatSymbol("7",dispatch,draw)}></button>
        <button className="placeMark" id = "8" onClick={() => WhatSymbol("8",dispatch,draw)}></button>
     </div>
          <div>
            <button className="clear" onClick={() => ClearTable(dispatch,defaultColor)}>Clear</button>
            <Link to="/">
              <button className='homeBtn' onClick={() => ClearTable(dispatch,defaultColor)} >
                Home
              </button>
            </Link>
          </div> 
    </div>
    )
  }
  function WhatSymbol(btnid,dispatch,draw){
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
        defaultColor = document.getElementById(btnid).style.backgroundColor
        document.getElementById(btnid).style.backgroundColor = '#00DDEB'
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
        if(document.getElementById(btnid).innerHTML ===''){
          document.getElementById(btnid).innerHTML = draw;
          defaultColor = document.getElementById(btnid).style.backgroundColor;
          document.getElementById(btnid).style.backgroundColor = '#AF40FF'
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
  function ClearTable(dispatch,defaultColor){
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
export default Game;
//import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
//import { useSelector, useDispatch} from "react-redux";
import DrawBoard from "../Utilities/DrawBoard/DrawBoard";
import Createinput from "../Utilities/CreateInput/CreateInput";
import Scoreboard from "../Utilities/ScoreBoard/ScoreBoard.js";
import Button from "../Utilities/Button/Button.js";
// import { HandleClickNextSymbol } from "../Utilities/NextSymbol.js";
import {IsWin} from "../Utilities/IsWIn"
import Clock from 'react-live-clock';
function Game (){
    let [size,SetSize] = useState(3);
    let [numsize,SetNumSize] = useState(3);
    //let draw = useSelector(state => state.draw);
    let [symbol,SetSymbol] = useState('X');
    //let gameover = useSelector(state => state.gameover);
    let [gameOver,SetGameOver] = useState(false);
    //let winner = useSelector(state => state.winner);
    let [winner,SetWinner] = useState("");
    let [history,SetHistory] = useState([]);
    let [buttonArr,SetButtonArr] = useState(Array(9).fill(''));
    //let dispatch = useDispatch();
    //store.subscribe(() => console.log(store.getState()));
    
    const HandleClickClearTable = () =>{
      SetWinner("");
      for (let k = 0; k < buttonArr.length; k++) {
        buttonArr[k] = '';
      }
      SetButtonArr(buttonArr);
      SetSymbol("X");
      SetGameOver(false);
      history = [];
      SetHistory(history);
    }

    const BuildArr = (event) =>{
      if(event.key === 'Enter'){
         numsize = size;
         if(numsize >= 3){
           SetNumSize(size);
           buttonArr = Array(Math.pow(numsize, 2)).fill('');
           SetButtonArr(buttonArr);
         }
         else{
          // numsize = 3;
          SetSize(3);
          SetNumSize(3);
          buttonArr = Array(Math.pow(3, 2)).fill('');
          SetButtonArr(buttonArr);
         }
         event.target.value = '';
         HandleClickClearTable();
      }
    }

    const HandleClickNextSymbol = (btnid) =>{
      let index = Number(btnid);
      if(!gameOver){
        if(history.length === 0){
          history.push(symbol);
          SetHistory(history);
          buttonArr[index] = symbol;
          SetSymbol("O");
        }
        else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
          history.push(symbol);
          SetHistory(history);
          buttonArr[index] = symbol;
          if(history.length > 4 ){
            if(IsWin(buttonArr,size) === "winner is O"){
              SetWinner("winner is O");
            }
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              // flagGameOver = true;
              SetGameOver(true);
            }
          }
          SetSymbol("X");
          }
        else{
          if(buttonArr[index] ===''){
            history.push(symbol);
            SetHistory(history);
            buttonArr[index] = symbol;
            if(history.length > 4){
              if(IsWin(buttonArr,size) === "winner is X"){
                SetWinner("winner is X");
              }
              if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
                // flagGameOver = true;
                SetGameOver(true);
              }
            }
          SetSymbol("O");
                }
        }
      }
      else{
        SetGameOver(true);
        // flagGameOver = true;
      }
    }

    return( 
      <div className="game">
        <div className='time'>
          <Clock format={'HH:mm:ss'} ticking = {true} timezone = {'israel'} />
        </div>
        <div className="scoreBoard">
            <Scoreboard gameOver={gameOver} symbol={symbol} winner={winner}></Scoreboard>
        </div>
        
        <div className="board" style={{width:(numsize + 1)*83}}>
            <DrawBoard buttonArr={buttonArr} HandleClickNextSymbol={HandleClickNextSymbol}></DrawBoard>
        </div>

        <div className="input">
            <Createinput SetSize={SetSize} buildArr={BuildArr}></Createinput>
        </div> 

        <div className="button1">
            <Button clsName={'clear'} action={HandleClickClearTable}></Button>
            <Button clsName={'homeBtn'}></Button>
        </div>
    </div>
    )
  }
export default Game;
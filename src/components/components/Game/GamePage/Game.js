//import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
//a
import DrawBoard from "../Utilities/DrawBoard/DrawBoard";
import Createinput from "../Utilities/CreateInput/CreateInput";
import Scoreboard from "../Utilities/ScoreBoard/ScoreBoard.js";
import Button from "../Utilities/Button/Button.js";
// import { HandleClickNextSymbol } from "../Utilities/NextSymbol.js";
import {IsWin} from "../Utilities/IsWIn"
import Clock from 'react-live-clock';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../../../../index"
import DrawX from "../../../../actions/DrawX";
import DrawO from "../../../../actions/DrawO";
import WriteNothing from "../../../../actions/WriteNothing"
import WriteGameOver from "../../../../actions/WriteGameOver"
import Owon from "../../../../actions/Owon"
import Xwon from "../../../../actions/Xwon"
import SetSize from "../../../../actions/SetSIze";
function Game (){
    // let [size,SetSize] = useState(3);
    let size = useSelector(state => state.size);
    let [numsize,SetNumSize] = useState(3);
    // let [symbol,SetSymbol] = useState('X');SetGameOver
    let symbol = useSelector(state => state.symbol);
    // let [gameOver,SetGameOver] = useState(false);
    let gameOver = useSelector(state => state.gameOver);
    let winner = useSelector(state => state.winner);
    // let [winner,SetWinner] = useState("");
    let [history,SetHistory] = useState([]);
    let [buttonArr,SetButtonArr] = useState(Array(9).fill(''));
    let dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));

    const HandleClickClearTable = () =>{
      // SetWinner("");
      for (let k = 0; k < buttonArr.length; k++) {
        buttonArr[k] = '';
      }
      SetButtonArr(buttonArr);
      // SetSymbol("X");
      dispatch(DrawX());
      // SetGameOver(false);
      dispatch(WriteNothing());
      history = [];
      SetHistory(history);
    }

    const BuildArr = (event) =>{
      if(event.key === 'Enter'){
        //  numsize = size;
        //  if(numsize >= 3){
        //    SetNumSize(size);
        //    buttonArr = Array(Math.pow(numsize, 2)).fill('');
        //    SetButtonArr(buttonArr);
        //  }
        //  else{
        //   // numsize = 3;
        //   // SetSize(3);
        //   dispatch(SetSize(3));
        //   SetNumSize(3);
        //   buttonArr = Array(Math.pow(3, 2)).fill('');
        //   SetButtonArr(buttonArr);
        //  }
         SetNumSize(size);
         buttonArr = Array(Math.pow(size,2)).fill('');
         SetButtonArr(buttonArr)
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
          // SetSymbol("O");
          dispatch(DrawO());
        }
        else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
          history.push(symbol);
          SetHistory(history);
          buttonArr[index] = symbol;
          if(history.length > 4 ){
            if(IsWin(buttonArr,numsize) === "winner is O"){
              // SetWinner("winner is O");
              dispatch(Owon());
            }
            if(IsWin(buttonArr,numsize) !== '' || history.length === buttonArr.length){
              // flagGameOver = true;
              // SetGameOver(true);
              dispatch(WriteGameOver())
            }
          }
          // SetSymbol("X");
          dispatch(DrawX());
          }
        else{
          if(buttonArr[index] ===''){
            history.push(symbol);
            SetHistory(history);
            buttonArr[index] = symbol;
            if(history.length > 4){
              if(IsWin(buttonArr,numsize) === "winner is X"){
                // SetWinner("winner is X");
                dispatch(Xwon());
              }
              if(IsWin(buttonArr,numsize) !== '' || history.length === buttonArr.length){
                // flagGameOver = true;
                // SetGameOver(true);
                dispatch(WriteGameOver())
              }
            }
          // SetSymbol("O");
          dispatch(DrawO());
                }
        }
      }
      else{
        // SetGameOver(true);
        dispatch(WriteGameOver())
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
            <Createinput buildArr={BuildArr}></Createinput>
        </div> 

        <div className="button1">
            <Button clsName={'clear'} action={HandleClickClearTable}></Button>
            <Button clsName={'homeBtn'} action={HandleClickClearTable}></Button>
        </div>
    </div>
    )
  }
export default Game;
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
import PushToHistory from "../../../../actions/PushToHistory";
import ClearHistory from "../../../../actions/ClearHistory";
import ClearBtnArr from "../../../../actions/ClearBtnArr";
import BuildBtnArr from "../../../../actions/BuildBtnArr";
import InsertToBtnArr from "../../../../actions/InsertToBtnArr";
import SetNumSize from "../../../../actions/SetNumSize";
function Game (){
    let size = useSelector(state => state.size);
    // let [numsize,SetNumSize] = useState(size);
    let numsize = useSelector(state => state.numsize);
    let symbol = useSelector(state => state.symbol);
    let gameOver = useSelector(state => state.gameOver);
    let winner = useSelector(state => state.winner);
    let history = useSelector(state => state.history);
    let buttonArr = useSelector(state => state.buttonArr);
    let dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));

    const HandleClickClearTable = () =>{
      dispatch(ClearBtnArr());
      dispatch(DrawX());
      dispatch(WriteNothing());
      dispatch(ClearHistory())
    }

    const BuildArr = (event) =>{
      if(event.key === 'Enter'){
         dispatch(SetNumSize(size));
         dispatch(BuildBtnArr(size*size));
         event.target.value = '';
         HandleClickClearTable();
      }
    }

    const HandleClickNextSymbol = (index) =>{
      if(!gameOver){
        if(history.length === 0){
          dispatch(PushToHistory(symbol));
          dispatch(InsertToBtnArr(symbol,index));
          dispatch(DrawO());
        }
        else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
          dispatch(PushToHistory(symbol));
          dispatch(InsertToBtnArr(symbol,index));

          if(history.length > 4 ){
            if(IsWin(buttonArr,size) === "winner is O"){
              dispatch(Owon());
            }
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              dispatch(WriteGameOver());
            }
          }
          dispatch(DrawX());
          }
        else{
          if(buttonArr[index] ===''){
            dispatch(PushToHistory(symbol));
            dispatch(InsertToBtnArr(symbol,index));

            if(history.length > 4){
              if(IsWin(buttonArr,size) === "winner is X"){
                dispatch(Xwon());
              }
              if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
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
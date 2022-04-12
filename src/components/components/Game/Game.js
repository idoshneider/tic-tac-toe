//import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
//import { useSelector, useDispatch} from "react-redux";
import DrawBoard from "./Utilities/DrawBoard/DrawBoard";
import Createinput, { CreateInput } from "./Utilities/CreateInput/CreateInput";
import Scoreboard from "./Utilities/ScoreBoard/ScoreBoard.js";
import Button from "./Utilities/Button/Button.js";
// import { HandleClickNextSymbol } from "../Utilities/NextSymbol.js";
import {IsWin} from "./Utilities/IsWIn"
import Clock from 'react-live-clock';
function Game (){
    let [size,setSize] = useState(3);
    let [numsize,setNumSize] = useState(3);
    //let draw = useSelector(state => state.draw);
    let [symbol,setSymbol] = useState('X');
    //let gameover = useSelector(state => state.gameover);
    let [gameOver,setGameOver] = useState(false);
    //let winner = useSelector(state => state.winner);
    let [winner,setWinner] = useState("")
    let [history,SetHistory] = useState([]);
    let [buttonArr,SetButtonArr] = useState(Array(9).fill(''));
    //let dispatch = useDispatch();
    //store.subscribe(() => console.log(store.getState()));
    const HandleClickClearTable = () =>{
      setWinner("");
      for (let k = 0; k < buttonArr.length; k++) {
        buttonArr[k] = '';
      }
      SetButtonArr(buttonArr);
      setSymbol("X");
      setGameOver(false);
      history = [];
      SetHistory(history);
    
    }
    const buildArr = (event) =>{ //get size,numsize,dispatch,buttonarr,event? export cleartable
      if(event.key === 'Enter'){
         numsize = size;
         if(numsize >= 3){
           setNumSize(size)
           buttonArr = Array(Math.pow(numsize, 2)).fill('')
           SetButtonArr(buttonArr);
         }
         else{
          // numsize = 3;
          setSize(3);
          setNumSize(3)
          buttonArr = Array(Math.pow(3, 2)).fill('')
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
          setSymbol("O");
        }
        else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
          history.push(symbol);
          SetHistory(history);
          buttonArr[index] = symbol;
          if(history.length > 4 ){
            if(IsWin(buttonArr,size) === "winner is O"){
              setWinner("winner is O");
            }
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              // flagGameOver = true;
              setGameOver(true);
            }
          }
          setSymbol("X");
          }
        else{
          if(buttonArr[index] ===''){
            history.push(symbol);
            SetHistory(history);
            buttonArr[index] = symbol;
            if(history.length > 4){
              if(IsWin(buttonArr,size) === "winner is X"){
                setWinner("winner is X");
              }
              if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
                // flagGameOver = true;
                setGameOver(true);
              }
            }
          setSymbol("O");
                }
        }
      }
      else{
        setGameOver(true);
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
            <Createinput setSize={setSize} buildArr={buildArr}></Createinput>
        </div> 

        <div className="button1">
            <Button clsName={'clear'} action={HandleClickClearTable}></Button>
            <Button clsName={'homeBtn'}></Button>
        </div>
    </div>
    )
  }
export default Game;
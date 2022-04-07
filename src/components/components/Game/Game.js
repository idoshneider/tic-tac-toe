import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
import { useSelector, useDispatch} from "react-redux";
import DrawBoard from "./DrawBoard";
import Createinput, { CreateInput } from "./CreateInput";
import Scoreboard from "./ScoreBoard/ScoreBoard.js";
import Button from "./Button/Button.js";
// import { HandleClickNextSymbol } from "../Utilities/NextSymbol.js";
import {IsWin} from "../Utilities/IsWIn"
function Game (){
    let [size,setSize] = useState(3);
    let [numsize,setNumSize] = useState(3);
    let draw = useSelector(state => state.draw);
    let [sym,setSym] = useState('X');
    let gameover = useSelector(state => state.gameover);
    let [over,setOver] = useState('');
    let winner = useSelector(state => state.winner);
    let [whowin,setWinner] = useState("")
    let [history,SetHistory] = useState([]);
    let [buttonArr,SetButtonArr] = useState(Array(9).fill(''));
    let dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    const HandleClickClearTable = () =>{
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
    const buildArr = (event) =>{ //get size,numsize,dispatch,buttonarr,event? export cleartable
      if(event.key === 'Enter'){
         numsize = size;
         if(numsize >= 3){
           setNumSize(size)
           buttonArr = Array(Math.pow(numsize, 2)).fill('')
           SetButtonArr(buttonArr);
         }
         else{
          numsize = 3;
          setSize(3);
          setNumSize(3)
          buttonArr = Array(Math.pow(numsize, 2)).fill('')
          SetButtonArr(buttonArr);
         }
         event.target.value = '';
         HandleClickClearTable();
      }
    }


    const HandleClickNextSymbol = (btnid) =>{
      let index = Number(btnid);
      let flagGameOver;
      if(history.length < buttonArr.length && whowin ===''){
         flagGameOver = false;
      }
      else{
         flagGameOver = true;
      }
    
      if(!flagGameOver){
        if(history.length === 0){
          history.push(sym);
          SetHistory(history);
          buttonArr[index] = sym;
          setSym("O");
        }
        else if(history[history.length - 1] === 'X' && buttonArr[index] === ''){
          history.push(sym);
          SetHistory(history);
          buttonArr[index] = sym;
          if(history.length > 4 ){
            if(IsWin(buttonArr,size) === "winner is O"){
              setWinner("winner is O")
            }
            if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
              flagGameOver = true;
              setOver("Game Over")
            }
          }
          setSym("X")
          }
        else{
          if(buttonArr[index] ===''){
            history.push(sym);
            SetHistory(history);
            buttonArr[index] = sym;
            if(history.length > 4){
              if(IsWin(buttonArr,size) === "winner is X"){
                setWinner("winner is X")
              }
              if(IsWin(buttonArr,size) !== '' || history.length === buttonArr.length){
                flagGameOver = true;
                setOver("Game Over")
              }
            }
          setSym("O")
                }
        }
      }
      else{
        setOver("Game Over")
        flagGameOver = true;
      }
    }

    return( 
      <div className="game">
        {
          <Scoreboard over={over} sym={sym} whowin={whowin}></Scoreboard>
        }
        <div className="board" style={{width:(numsize + 1)*83}}>
        {            
          <DrawBoard buttonArr={buttonArr} HandleClickNextSymbol={HandleClickNextSymbol}></DrawBoard>

        }
      </div>
            <div>
              <Createinput setSize={setSize} buildArr={buildArr}></Createinput>
              <Button clsName={'clear'} action={HandleClickClearTable}></Button>
              <Button clsName={'homeBtn'}></Button>
            </div> 
    </div>
    )
  }
export default Game;
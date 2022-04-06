import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
import { useSelector, useDispatch} from "react-redux";
import { CreateClearButton } from "../Utilities/CreateClearButton";
import { CreateHomeButton } from "../Utilities/CreateHomeButton";
import { DrawBoard } from "../../components/Utilities/DrawBoard";
import buildArr from "../Utilities/buildArr.js";
import { CreateInput } from "../Utilities/CreateInput";
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
    return( 
      <div className="game">
        <h1 id="gameover">
          {/* {gameover} */}
          {over}
        </h1>
        <h3 id="turn">
          {/* Turn: {draw} */}
          Turn: {sym}
        </h3>
        <h3 id="winner">
          {/* {winner} */}
          {whowin}
        </h3>
        <div className="board" style={{width:(numsize + 1)*83}}>
        {            
        // DrawBoard(dispatch,draw,buttonArr,size,winner,history,SetHistory)
           DrawBoard(dispatch,sym,setSym,draw,buttonArr,size,winner,history,SetHistory,setOver,setWinner,whowin)

        }
      </div>
            <div>
              {CreateInput(setSize,buttonArr,history,SetHistory,SetButtonArr,size,numsize,setNumSize,dispatch,buildArr,sym,setSym,setOver,setWinner)}
              {/* {CreateClearButton(dispatch,buttonArr,history,SetHistory,SetButtonArr)} */}
              {CreateClearButton(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner)}
              {/* {CreateHomeButton(dispatch,buttonArr,history,SetHistory,SetButtonArr)} */}
              {CreateHomeButton(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner)}
            </div> 
    </div>
    )
  }
export default Game;
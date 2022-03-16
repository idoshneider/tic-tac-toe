import React from "react";
import './game.css';
import { useSelector, useDispatch} from "react-redux";
import store from ".";
import {
 Link
} from "react-router-dom";
import { NextSymbol } from "./Logic";
import { ClearTable } from "./Logic";
function Game (){
    const draw = useSelector(state => state.draw) ;   
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    return( 
    <div className="game">
      <h1 id="gameover">{null}</h1>
      <h3 id="winner">{null}</h3>
      <div className="board">
        <button className="placeMark" id = "0" onClick={() => NextSymbol("0",dispatch,draw)}></button>
        <button className="placeMark" id = "1" onClick={() => NextSymbol("1",dispatch,draw)}></button>
        <button className="placeMark" id = "2" onClick={() => NextSymbol("2",dispatch,draw)}></button>
        <button className="placeMark" id = "3" onClick={() => NextSymbol("3",dispatch,draw)}></button>
        <button className="placeMark" id = "4" onClick={() => NextSymbol("4",dispatch,draw)}></button>
        <button className="placeMark" id = "5" onClick={() => NextSymbol("5",dispatch,draw)}></button>
        <button className="placeMark" id = "6" onClick={() => NextSymbol("6",dispatch,draw)}></button>
        <button className="placeMark" id = "7" onClick={() => NextSymbol("7",dispatch,draw)}></button>
        <button className="placeMark" id = "8" onClick={() => NextSymbol("8",dispatch,draw)}></button>
     </div>
          <div>
            <button className="clear" onClick={() => ClearTable(dispatch)}>Clear</button>
            <Link to="/">
              <button className='homeBtn' onClick={() => ClearTable(dispatch)} >
                Home
              </button>
            </Link>
          </div> 
    </div>
    )
  }
export default Game;

import store from ".";
import React from "react";
import './game.css';
import {useSelector, useDispatch} from "react-redux";

import {
 Link
} from "react-router-dom";
import { NextSymbol } from "./Logic";
import { ClearTable } from "./Logic";
function Game (){
    const arr = Array(9).fill('');
    const draw = useSelector(state => state.draw) ;   
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    return( 
    <div className="game">
      <h1 id="gameover">{null}</h1>
      <h3 id="winner">{null}</h3>
      <div className="board">
        {arr.map((value,index) =>{
          return <button className="placeMark" id={index} onClick={()=> NextSymbol(index,dispatch,draw)} key ={index}>{value}</button>
        })}
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

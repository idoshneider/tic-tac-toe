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
    var arr = Array(9).fill('');
    return( 
    <div className="game">
      <h1 id="gameover">{null}</h1>
      <h3 id="winner">{null}</h3>
      <div className="board">
        {
          arr.map((value,index) =>{
            return <button key={index} id={index} className='placeMark' onClick={() => NextSymbol(index,dispatch,draw)}></button>
          }
          )}
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

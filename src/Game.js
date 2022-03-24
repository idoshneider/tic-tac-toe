import React from "react";
import {useState} from 'react' ;
import './game.css';
import { useSelector, useDispatch} from "react-redux";
import store from ".";
import {
 Link
} from "react-router-dom";
import { NextSymbol } from "./Logic";
import { ClearTable } from "./Logic";
// var buttonArr = Array(9).fill('');
var buttonArr = Array(9).fill('');
var numsize =3;
function Game (){
    const [size = 3,setSize] = useState('');
    let draw = useSelector(state => state.draw) ;   
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    const buildArr = (event) =>{
      if(event.key === 'Enter'){
         numsize = Number(size);
         buttonArr = Array(Math.pow(numsize,2)).fill('');
         setSize('');
      }
      
    }
    return( 
      <div className="game">
        <h1 id="gameover">
          {null}
        </h1>
        <h3 id="turn">
          Turn: {draw}
        </h3>
        <h3 id="winner">
          {null}
        </h3>
        <div className="board" style={{width:(numsize+1)*80}}>
          {
            buttonArr.map((value,index) =>{
              return <button key={index} id={index} className='placeMark' onClick={() => NextSymbol(index,dispatch,draw,buttonArr,numsize)}>
                        {buttonArr[index]}
                    </button>
            }
            )}
      </div>
            <div>
            <input 
              value = {size}
              onChange = {(event) => setSize(event.target.value)}
              onKeyPress = {buildArr}
              className='searchbar'
              type='text'
              placeholder='Enter Size'
              />
              <button className="clear" onClick={() => ClearTable(dispatch,buttonArr)}>
                Clear
              </button>
              <Link to="/">
                <button className='homeBtn' onClick={() => ClearTable(dispatch,buttonArr)} >
                  Home
                </button>
              </Link>
            </div> 
    </div>
    )
  }
export default Game;
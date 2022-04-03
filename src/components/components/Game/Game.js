import store from "../../../index.js";
import React from "react";
import {useState} from 'react' ;
import './game.css';
//a
import { useSelector, useDispatch} from "react-redux";
import {
 Link
} from "react-router-dom";
import { NextSymbol } from "../../../Logic";
import { ClearTable } from "../../../Logic";
import WriteNothing from "../../../actions/WriteNothing";
var buttonArr = Array(9).fill('');
var numsize = 3;
function Game (){
    const [size,setSize] = useState(3);
    let draw = useSelector(state => state.draw);
    let gameover = useSelector(state => state.gameover);
    let winner = useSelector(state => state.winner);
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    const buildArr = (event) =>{
      if(event.key === 'Enter'){
         numsize = size;
         if(size >= 3){
           buttonArr = Array(Math.pow(size, 2)).fill('')
         }
         else{
          numsize = 3;
          buttonArr = Array(Math.pow(numsize, 2)).fill('')
         }
         event.target.value = '';
         ClearTable(dispatch, buttonArr);
      }
      
    } 

    return( 
      <div className="game">
        <h1 id="gameover">
          {gameover}
        </h1>
        <h3 id="turn">
          Turn: {draw}
        </h3>
        <h3 id="winner">
          {winner}
        </h3>
        <div className="board" style={{width:(numsize + 1)*83}}>
          {
            // buttonArr.map((value,index) =>{
            //   return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => NextSymbol(index,dispatch,draw,buttonArr,numsize)}>
            //             {buttonArr[index]}
            //         </button>
            // }
            // )
            drawBoard(dispatch,draw,buttonArr,size)
          }
      </div>
            <div>
            {/* <input 
              value = {size}
              onChange = {(event) => setSize(event.target.value)}
              onKeyPress = {buildArr}
              className='searchbar'
              type='text'
              placeholder='Enter Size (size 3 and bigger)'
              /> */}
              {CreateInput(size,setSize,buildArr)}
                {/* <button className="clear" onClick={() => ClearTable(dispatch,buttonArr)}>
                  Clear
                </button> */}
              {CreateClearButton(dispatch,buttonArr)}
              {/* <Link to="/">
                <button className='homeBtn' onClick={() => ClearTable(dispatch,buttonArr)} >
                  Home
                </button>
              </Link> */}
              {createHomeButton(dispatch,buttonArr)}
            </div> 
    </div>
    )
  }

function CreateInput(size,setSize,buildArr){
  return (<input 
    onChange = {(event) => setSize(Number(event.target.value))}
    onKeyPress = {buildArr}
    className='searchbar'
    type='text'
    placeholder='Enter Size (size 3 and bigger)'
    />)
}
function CreateClearButton(dispatch,buttonArr){
  return (<button className="clear" onClick={() => ClearTable(dispatch,buttonArr)}>
                  Clear
                </button>)
}
function createHomeButton(dispatch,buttonArr){
  return (
    <Link to="/">
      <button className='homeBtn' onClick={() => ClearTable(dispatch,buttonArr)} >
        Home
      </button>
    </Link>
    )
}
function drawBoard(dispatch,draw,buttonArr,size){
 return (buttonArr.map((value,index) =>{
    return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => NextSymbol(index,dispatch,draw,buttonArr,size)}>
              {buttonArr[index]}
          </button>
  }
  )
 )
}

export default Game;
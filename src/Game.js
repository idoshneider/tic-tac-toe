import store from "./index";
import React from "react";
import {useState} from 'react' ;
import './game.css';
//a
import { useSelector, useDispatch} from "react-redux";
import {
 Link
} from "react-router-dom";
import { NextSymbol } from "./Logic";
import { ClearTable } from "./Logic";
import WriteNothing from "./actions/WriteNothing";
// var buttonArr = Array(9).fill('');
var buttonArr = Array(9).fill('');
var numsize =3;
function Game (){
    const [size = 3,setSize] = useState('');
    let draw = useSelector(state => state.draw) ;
    let gameover = useSelector(state => state.gameover)   
    let winner = useSelector(state =>state.winner)
    const dispatch = useDispatch();
    store.subscribe(() => console.log(store.getState()));
    const buildArr = (event) =>{
      if(event.key === 'Enter'){
         dispatch(WriteNothing())
         numsize = Number(size);
         if(numsize >=3){
           buttonArr = Array(Math.pow(numsize,2)).fill('');
         }
         else{
          numsize = 3;
          buttonArr = Array(Math.pow(numsize,2)).fill('');
         }
         setSize('');
         ClearTable(dispatch,buttonArr);
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
        <div className="board" style={{width:(numsize+1)*80}}>
          {
            buttonArr.map((value,index) =>{
              return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => NextSymbol(index,dispatch,draw,buttonArr,numsize)}>
                        {value}
                    </button>
                    // return <Box value={value]} onCli></Box>
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
              placeholder='Enter Size (size 3 and bigger)'
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
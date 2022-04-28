import React from "react";
import {useState} from 'react' ;
import './game.css';

import DrawBoard from "../Utilities/DrawBoard/DrawBoard";
import Createinput from "../Utilities/CreateInput/CreateInput";
import Scoreboard from "../Utilities/ScoreBoard/ScoreBoard.js";
import Button from "../Utilities/Button/Button.js";

import Clock from 'react-live-clock';
import { useSelector } from "react-redux";
import store from "../../../../index"
import HandleClickClearTable from "../Utilities/Button/ClickHandlers/HandleClickClearTable";
import buildArr from "../../../../components/components/Game/Utilities/CreateInput/InputHandler/BuildArr"
import HandleClickNextSymbol from "../Utilities/DrawBoard/BoardClickHandler/HandleClickNextSymbol";

function Game (){
    let numsize = useSelector(state => state.numsize);
    let symbol = useSelector(state => state.symbol);
    let gameOver = useSelector(state => state.gameOver);
    let winner = useSelector(state => state.winner);
    let buttonArr = useSelector(state => state.buttonArr);
    store.subscribe(() => console.log(store.getState()));

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
            <Createinput buildArr={buildArr}></Createinput>
        </div> 

        <div className="button1">
            <Button clsName={'clear'} action={HandleClickClearTable}></Button>
            <Button clsName={'homeBtn'} action={HandleClickClearTable}></Button>
        </div>
    </div>
    )
  }
export default Game;
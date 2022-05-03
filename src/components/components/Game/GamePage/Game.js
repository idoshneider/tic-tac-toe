import './game.css';

import DrawBoard from "../Utilities/DrawBoard/DrawBoard";
import Createinput from "../Utilities/CreateInput/CreateInput";
import Scoreboard from "../Utilities/ScoreBoard/ScoreBoard.js";
import Button from "../Utilities/Button/Button.js";

import Clock from 'react-live-clock';
import { useDispatch, useSelector } from "react-redux";
import handleClearTableClick from "../Utilities/Button/ClickHandlers/HandleClickClearTable";
import buildArr from "../../../../components/components/Game/Utilities/CreateInput/InputHandler/BuildArr"
import handleNextSymbolClick from "../Utilities/DrawBoard/BoardClickHandler/HandleClickNextSymbol";
import SetSize from '../../../../actions/SizeActions/SetSIze';

function Game (){
    const widthSize = useSelector(state => state.numsize);
    const symbol = useSelector(state => state.symbol);
    const gameOver = useSelector(state => state.gameOver);
    const winner = useSelector(state => state.winner);
    const buttonArr = useSelector(state => state.buttonArr);
    const dispatch = useDispatch()
    const onSetSizeChange = (event) => dispatch(SetSize((Number(event.target.value))))

    return( 
      <div className="game">
        <div className='time'>
            <Clock format={'HH:mm:ss'} ticking = {true} timezone = {'israel'} />
        </div>

            <Scoreboard gameOver={gameOver} symbol={symbol} winner={winner}></Scoreboard>
            <DrawBoard buttonArr={buttonArr} handleNextSymbolClick={handleNextSymbolClick} widthSize={widthSize}></DrawBoard>
            <Createinput buildArr={buildArr} onSetSizeChange={onSetSizeChange}></Createinput>
            <Button clsName={'clear'} handleClearTableClick={handleClearTableClick} text={'Clear'}></Button>
            <Button clsName={'homeBtn'} handleClearTableClick={handleClearTableClick} text={'Home'} location={'/'}></Button>
    </div>
    )
  }
export default Game;
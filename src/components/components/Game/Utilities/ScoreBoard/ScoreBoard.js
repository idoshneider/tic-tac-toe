import React from 'react';
import "./ScoreBoard.css"

const Scoreboard = ({gameOver,symbol,winner}) => {
    let strTurn = "is" + symbol;
    return (
        <>
        {
          winner !== '' ? 
            <>
              <h1 className='gameover'>Game Over</h1> <h3 className='winner'>{winner}</h3>
            </> 
          : gameOver ? 
            <> 
              <h1 className='gameover'>Game Over</h1> <h3 className='draw'>draw</h3> 
            </>
          : <div className='divturn'>
              <h3 className='turn'>Turn: </h3>
              <h3 className={strTurn}>{symbol}</h3>
            </div>
        }
        </>
    );
}

export default Scoreboard;

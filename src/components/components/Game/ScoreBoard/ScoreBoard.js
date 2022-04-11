import React from 'react';
import "./ScoreBoard.css"

const Scoreboard = ({over,sym,whowin}) => {
    let strTurn = "is" + sym;
    return (
        <>
        {
          whowin !== '' ? 
            <>
              <h1 className='gameover'>Game Over</h1> <h3 className='winner'>{whowin}</h3>
            </> 
          : over ? 
            <> 
              <h1 className='gameover'>Game Over</h1> <h3 className='draw'>draw</h3> 
            </>
          : <div className='divturn'>
              <h3 className='turn'>Turn: </h3>
              <h3 className={strTurn}>{sym}</h3>
            </div>
        }
        </>
    );
}

export default Scoreboard;

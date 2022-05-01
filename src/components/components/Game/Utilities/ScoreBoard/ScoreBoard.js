import React from 'react';
import "./ScoreBoard.css"

const Scoreboard = (props) => {
    let strTurn = "is" + props.symbol;
    return (
        <>
        {
          props.winner !== '' ? 
            <>
              <h1 className='gameover'>Game Over</h1> <h3 className='winner'>{props.winner}</h3>
            </> 
          : props.gameOver ? 
            <> 
              <h1 className='gameover'>Game Over</h1> <h3 className='draw'>draw</h3> 
            </>
            : <div className='divturn'>
                <h3 className='turn'>Turn: </h3>
                <h3 className={strTurn}>{props.symbol}</h3>
              </div>
        }
        </>
    );
}

export default Scoreboard;

import React from 'react';
import "./ScoreBoard.css"

const Scoreboard = (props) => {
    return (
      <div className="scoreBoard">

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
                <h3 className={`is-${props.symbol}`}>{props.symbol}</h3>
              </div>
        }
        </div>
    );
}

export default Scoreboard;

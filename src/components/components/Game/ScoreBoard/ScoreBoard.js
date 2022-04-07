import React from 'react';

const Scoreboard = ({over,sym,whowin}) => {
    return (
        <>
        <h1 id="gameover">
          {/* {gameover} */}
          {over}
        </h1>
        <h3 id="turn">
          {/* Turn: {draw} */}
          Turn: {sym}
        </h3>
        <h3 id="winner">
          {/* {winner} */}
          {whowin}
        </h3>
        </>
    );
}

export default Scoreboard;

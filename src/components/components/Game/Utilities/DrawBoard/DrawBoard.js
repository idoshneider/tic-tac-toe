
import React from 'react';
import "./DrawBoard.css"

const Drawboard = (props) => {
    return (
        <div className="board" style={{width:(props.widthSize + 1)*83}}>

            {
                props.buttonArr.map((value,index) =>{
                    return <button style={{width:85,height:93}} key={index} id={index} className={props.buttonArr[index]} onClick={() => props.handleNextSymbolClick(index)}>
                              {props.buttonArr[index]}
                          </button>
                  }
                  )
            }
        </div>
    );
}

export default Drawboard;


   
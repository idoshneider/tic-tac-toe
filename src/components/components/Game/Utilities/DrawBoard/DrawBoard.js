
import React from 'react';
import "./DrawBoard.css"

const Drawboard = (props) => {
    return (
        <>
            {
                props.buttonArr.map((value,index) =>{
                    return <button style={{width:85,height:93}} key={index} id={index} className={props.buttonArr[index]} onClick={() => props.action(index)}>
                              {props.buttonArr[index]}
                          </button>
                  }
                  )
            }
        </>
    );
}

export default Drawboard;


   

import React from 'react';

const Drawboard = ({buttonArr,HandleClickNextSymbol}) => {
    return (
        <>
            {
                buttonArr.map((value,index) =>{
                    return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => HandleClickNextSymbol(index)}>
                              {buttonArr[index]}
                          </button>
                  }
                  )
            }
        </>
    );
}

export default Drawboard;


   
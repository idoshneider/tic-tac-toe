import { HandleClickNextSymbol } from "./NextSymbol"

// export function DrawBoard(dispatch,draw,buttonArr,size,winner,history,SetHistory){ //get dispactch,draw,buttonarr,size export nextsymbol
//     return (
//             buttonArr.map((value,index) =>{
//        return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => NextSymbol(index,dispatch,draw,buttonArr,size,winner,history,SetHistory)}>
//                  {buttonArr[index]}
//              </button>
//      }
//      )
//     )}
export function DrawBoard(dispatch,sym,setSym,draw,buttonArr,size,winner,history,SetHistory,setOver,setWinner,whowin){ //get dispactch,draw,buttonarr,size export nextsymbol
    return (
            buttonArr.map((value,index) =>{
       return <button style={{width:85,height:93}} key={index} id={index} className={buttonArr[index]} onClick={() => HandleClickNextSymbol(dispatch,index,sym,setSym,draw,buttonArr,size,winner,history,SetHistory,setOver,setWinner,whowin)}>
                 {buttonArr[index]}
             </button>
     }
     )
    )}
   
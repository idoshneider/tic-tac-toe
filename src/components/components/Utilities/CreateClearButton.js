import { HandleClickClearTable } from "./ClearTable";
// export function CreateClearButton(dispatch,buttonArr,history,SetHistory,SetButtonArr){ //get dispatch,buttonarr export cleartable
//   return (<button className="clear" onClick={() => ClearTable(dispatch,buttonArr,history,SetHistory,SetButtonArr)}>
//                   Clear
//                 </button>)
// }

export function CreateClearButton(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner){ //get dispatch,buttonarr export cleartable
    return (<button className="clear" onClick={() => HandleClickClearTable(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner)}>
                    Clear
                  </button>)
  }
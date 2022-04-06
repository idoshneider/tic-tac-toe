import { Link } from "react-router-dom";
import { HandleClickClearTable } from "../Utilities/ClearTable";

// export function CreateHomeButton(dispatch,buttonArr,history,SetHistory,SetButtonArr){ //get dispatch,buttonarr export cleartable
//   return (
//     <Link to="/">
//       <button className='homeBtn' onClick={() => ClearTable(dispatch,buttonArr,history,SetHistory,SetButtonArr)} >
//         Home
//       </button>
//     </Link>
//     )
// }

export function CreateHomeButton(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner){ //get dispatch,buttonarr export cleartable
    return (
      <Link to="/">
        <button className='homeBtn' onClick={() => HandleClickClearTable(dispatch,buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner)} >
          Home
        </button>
      </Link>
      )
  }
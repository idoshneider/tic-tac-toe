import { HandleClickClearTable } from "../Utilities/ClearTable";

const buildArr = (event,buttonArr,history,SetHistory,SetButtonArr,size,numsize,setNumSize,dispatch,sym,setSym,setOver,setWinner,setSize) =>{ //get size,numsize,dispatch,buttonarr,event? export cleartable
    if(event.key === 'Enter'){
       numsize = size;
       if(numsize >= 3){
         setNumSize(size)
         buttonArr = Array(Math.pow(numsize, 2)).fill('')
         SetButtonArr(buttonArr);
       }
       else{
        numsize = 3;
        setSize(3);
        setNumSize(3)
        buttonArr = Array(Math.pow(numsize, 2)).fill('')
        SetButtonArr(buttonArr);
       }
       event.target.value = '';
       HandleClickClearTable(dispatch, buttonArr,history,SetHistory,SetButtonArr,sym,setSym,setOver,setWinner);
    }
  }
  export default buildArr;
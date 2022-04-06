export function CreateInput(setSize,buttonArr,history,SetHistory,SetButtonArr,size,numsize,setNumSize,dispatch,buildArr,sym,setSym,setOver,setWinner){ //get setsize export buildarr
    return (<input 
      onChange = {(event) => setSize(Number(event.target.value))}
      onKeyPress = {(event) => buildArr(event,buttonArr,history,SetHistory,SetButtonArr,size,numsize,setNumSize,dispatch,sym,setSym,setOver,setWinner,setSize)}
      className='searchbar'
      type='{text}'
      placeholder='Enter Size (size 3 and bigger)'
      />)
  }
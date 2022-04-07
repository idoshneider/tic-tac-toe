
import React from 'react';

const Createinput = ({setSize,buildArr}) => {
  return (
    <input 
      onChange = {(event) => setSize(Number(event.target.value))}
      onKeyPress = {(event) => buildArr(event)}
      className='searchbar'
      type='{text}'
      placeholder='Enter Size (size 3 and bigger)'
      />)
  ;
}

export default Createinput;

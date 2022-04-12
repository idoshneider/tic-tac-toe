
import React from 'react';
import "./CreateInput.css"

const Createinput = ({SetSize,buildArr}) => {
  return (
    <input 
      onChange = {(event) => SetSize(Number(event.target.value))}
      onKeyPress = {(event) => buildArr(event)}
      className='searchbar'
      type='number'
      placeholder='Enter Size (size 3 and bigger)'
      />)
  ;
}

export default Createinput;


import React from 'react';
import { useDispatch } from 'react-redux';
import SetSize from '../../../../../actions/SetSIze';
import "./CreateInput.css"

const Createinput = (props) => {
  let dispatch = useDispatch();
  let x;
  return (
    <input 
      onChange = {(event) => x=dispatch(SetSize((Number(event.target.value))))}
      onKeyPress = {(event) => props.buildArr(event)}
      className='searchbar'
      type='number'
      placeholder='Enter Size (size 3 and bigger)'
      />)
  ;
}

export default Createinput;

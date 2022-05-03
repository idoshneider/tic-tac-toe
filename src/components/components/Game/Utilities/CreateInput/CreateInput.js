
import React from 'react';
import { useDispatch } from 'react-redux';
import SetSize from '../../../../../actions/SizeActions/SetSIze';
import "./CreateInput.css"

const Createinput = (props) => {
  return (
    <div className="input">

      <input 
        onChange = {props.onSetSizeChange}
        onKeyPress = {(event) => props.buildArr(event)}
        className='searchbar'
        type='number'
        placeholder='Enter Size (size 3 and bigger)'
        
        />
    </div>
)
  ;
}

export default Createinput;

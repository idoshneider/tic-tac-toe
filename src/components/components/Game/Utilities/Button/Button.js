import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css"

const Button = (props) => {
    return (
        <>
        {
            props.clsName === 'clear' ? <button className={props.clsName} onClick={props.action}>Clear</button>
            :props.clsName==='homeBtn' ?
                 <Link to="/">
                    <button className={props.clsName} onClick={props.action}>Home</button>
                 </Link>
                : 
                    <Link to="/Game">
                        <button className={props.clsName}>Start</button>
                    </Link>
        }
            
        </>
    );
}

export default Button;

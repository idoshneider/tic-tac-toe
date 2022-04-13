import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css"

const Button = ({clsName,action}) => {
    return (
        <>
        {
            clsName === 'clear' ? <button className={clsName} onClick={action}>Clear</button>
            :clsName==='homeBtn' ?
                 <Link to="/">
                    <button className={clsName}>Home</button>
                 </Link>
                : 
                    <Link to="/Game">
                        <button className={clsName}>Start</button>
                    </Link>
        }
            
        </>
    );
}

export default Button;

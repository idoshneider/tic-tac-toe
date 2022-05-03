import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css"

const Button = (props) => {
    return (
        <div className="button1">
                 <Link to={props.location}>
                    <button className={props.clsName} onClick={props.handleClearTableClick}>{props.text}</button>
                 </Link>
        </div>
    );
}

export default Button;

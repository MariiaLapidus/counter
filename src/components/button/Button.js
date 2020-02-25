import React, {Component} from 'react';
import './Button.css'
function Button(props) {
    const  handlerClick = () => {
        props.myHandler()
    }

    return (
        <div>
            <button  className="button" onClick={handlerClick}>{props.caption}</button>
        </div>
    );
}


export default Button;
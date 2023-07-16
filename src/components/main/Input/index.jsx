import React from "react";
import "./style.css";

const Input = ({ placeHolder, type }) => {
    return(
        <input className="input" type={type} placeholder={placeHolder} />
    )
}

export default Input
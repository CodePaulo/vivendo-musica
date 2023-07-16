import React from "react";
import "./style.css";

const Button = ({ value }) => {
    return(
        <button className="button">{value}</button>
    )
}

export default Button
import React from "react";
import "./style.css";

const Title = ({ title }) => {
    return(
        <div className="title">
            <span/>
            <h2>{title}</h2>
            <span/>
        </div>
    )
}

export default Title
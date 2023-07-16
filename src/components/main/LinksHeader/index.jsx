import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LinksHeader = ({ pag, value, selected, option, handleOptions }) => {
    return(
        <Link 
            to={pag}
            className={`Link ${selected && 'Link-selected'}`}
            onClick={() => handleOptions(option)}
        >
            <span>{value}</span>
        </Link>
    )
}

export default LinksHeader
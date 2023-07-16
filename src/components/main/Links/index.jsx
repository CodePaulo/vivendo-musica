import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Links = ({ destiny, text, plusClass, handle }) => {
    return(
        <Link 
            to={destiny}
            className={`link ${plusClass}`}
        >
            <span>{text}</span>
        </Link>
    )
}

export default Links
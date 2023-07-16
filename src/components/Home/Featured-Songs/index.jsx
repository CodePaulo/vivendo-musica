import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const FeatureSongs = ({ title, artist, to }) => {
    return(
        <Link to={to} className="feature-songs">
            <h3>{title}</h3>
            <h4>{artist}</h4>
        </Link>
    )
}

export default FeatureSongs
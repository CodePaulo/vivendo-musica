import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ()=>{
    return(
        <div className="search">
            <input type="text" name="search" id="search" placeholder="Procurar" />
            <div className="icon-search">
                <span className="border"></span>
                <FontAwesomeIcon icon={faSearch} className="icon"/>
            </div>
        </div>
    )
}

export default Search
import React, { useContext } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MenuContext from "../../../Context/MenuContext";

const SideMenu = ()=>{
    const menuContext = useContext(MenuContext)

    return(
        <div className="side_menu_open" onClick={() => menuContext[1](true)}>
            <FontAwesomeIcon 
                icon={faBars}
                className="icon"
            />
        </div>
    )
}

export default SideMenu
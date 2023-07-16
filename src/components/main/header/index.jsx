import React, { useContext } from "react";
import "./style.css";
import Profile from "../profile";
import Search from "../search";
import SideMenu from "../SideMenu";
import LinksHeader from "../LinksHeader";
import NavHeaderContext from "../../../Context/NavHeaderContext";
import DataUserContext from "../../../Context/DataUserContext";

const Header = () => {
    const [optionSelected, handleOptions] = useContext(NavHeaderContext)
    const dataUser = useContext(DataUserContext)
    
    return(
        <header className="header">
            <div className="options">
                <SideMenu />
                <Search />
                <Profile img={dataUser.pictureProfile} shadow={true} />
            </div>
            <nav className="nav">
                <LinksHeader
                    pag="/"
                    value="Home" 
                    selected={optionSelected === "" ? true : false} 
                    option={""}
                    handleOptions={handleOptions}
                />
                <LinksHeader
                    pag="/experiencias-dos-usuarios-com-as-musicas" 
                    value="Experiências dos úsuarios com as músicas" 
                    selected={optionSelected === "experiencias-dos-usuarios-com-as-musicas" ? true : false}
                    option={"experiencias-dos-usuarios-com-as-musicas"}
                    handleOptions={handleOptions}
                />
                <LinksHeader
                    pag="/musicas"
                    value="Músicas"
                    selected={optionSelected === "musicas" ? true : false} 
                    option={"musicas"}
                    handleOptions={handleOptions}
                />
            </nav>
            <div className="border"></div>
        </header>
    )
}

export default Header
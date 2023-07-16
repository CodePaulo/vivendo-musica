import React, { useContext } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEdit, faMusic, faBusinessTime, faIdCard, faHeart } from '@fortawesome/free-solid-svg-icons';
import MenuContext from "../../../Context/MenuContext";
import ProfileNav from "../ProfileNav";
import Links from "../Links";

const Nav = () => {
    const [openMenu, handleMenu] = useContext(MenuContext)
    return(
        <nav className={`lateral-menu ${openMenu && 'openMenu'}`}>
            <div className="contain-close-menu" onClick={() => handleMenu(false)}>
                <FontAwesomeIcon icon={faClose} className="icon" />
            </div>

            <ProfileNav />

            <div className="useful-links">
                <div className="useful-link">
                    <FontAwesomeIcon icon={faBusinessTime} className="icon" />
                    <Links destiny={"#"} text={"Histórico de Pesquisa"} />
                </div>
                <div className="useful-link">
                    <FontAwesomeIcon icon={faIdCard} className="icon" />
                    <Links destiny={"#"} text={"Perfil"} />
                </div>
                <div className="useful-link">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                    <Links destiny={"#"} text={"Meus Posts"} />
                </div>
                <div className="useful-link">
                    <FontAwesomeIcon icon={faEdit} className="icon" />
                    <Links destiny={"#"} text={"Enviar Letra de Música"} />
                </div>
                <div className="useful-link">
                    <FontAwesomeIcon icon={faMusic} className="icon" />
                    <Links destiny={"#"} text={"Categorias"} />
                </div>
            </div>

            <div className="categories">
                <li><Links destiny={"#"} text={"Gospel"} /></li>
                <li><Links destiny={"#"} text={"Rock"} /></li>
                <li><Links destiny={"#"} text={"Música POP"} /></li>
                <li><Links destiny={"#"} text={"Gospel"} /></li>
                <li><Links destiny={"#"} text={"Rock"} /></li>
                <li><Links destiny={"#"} text={"Música POP"} /></li>
                <li><Links destiny={"#"} text={"Gospel"} /></li>
                <li><Links destiny={"#"} text={"Rock"} /></li>
                <li><Links destiny={"#"} text={"Música POP"} /></li>
                <li><Links destiny={"#"} text={"Gospel"} /></li>
                <li><Links destiny={"#"} text={"Rock"} /></li>
                <li><Links destiny={"#"} text={"Música POP"} /></li>
                <li><Links destiny={"#"} text={"Gospel"} /></li>
                <li><Links destiny={"#"} text={"Rock"} /></li>
                <li><Links destiny={"#"} text={"Música POP"} /></li>
            </div>

        </nav>
    )
}

export default Nav
import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="contain-contact">
                <p>Nos siga nas redes sociais!</p>
                <div className="contain-social-midia">
                    <div className="social-midia">
                        <FontAwesomeIcon icon={faCalendarMinus} className="icon" />
                        <span>@VivendoMusica.com.br</span>
                    </div>
                    <div className="social-midia">
                        <FontAwesomeIcon icon={faCalendarMinus} className="icon" />
                        <span>(18) 99659-3078</span>
                    </div>
                    <div className="social-midia">
                        <FontAwesomeIcon icon={faCalendarMinus} className="icon" />
                        <span>@VivendoMusica.com.br</span>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="phrase">
                <p>"Música é vida interior, e quem tem vida interior jamais padecerá de solidão."</p>
                <p>-Artur da Távola</p>
            </div>
        </footer>
    )
}

export default Footer
import React from "react";
import "./style.css";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';

const FeaturedArtist = ({ img, title, to }) => {
    return(
        <Link to={to} className="featured-artist">
            <div className="profile-home">
                {
                    img ?
                    <div className="contain-img">
                        <img src={img} alt={`Imagem do artista ${title}`} />
                    </div> :
                    <FontAwesomeIcon icon={faUsersBetweenLines} className="icon" />
                }
                <h3 className="title">{title}</h3>
            </div>
        </Link>
    )
}

export default FeaturedArtist
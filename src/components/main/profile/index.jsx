import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ img, shadow })=>{
    return(
        <div className={`profile ${shadow && 'shadow'}`}>
            {
                img ? 
                <img src={img} alt="Foto do perfil" /> : 
                <FontAwesomeIcon icon={faUser} className="icon"/>
            }
        </div>
    )
}

export default Profile
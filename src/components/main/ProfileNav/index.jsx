import React, { useContext } from "react";
import "./style.css";
import Profile from "../profile";
import DataUserContext from "../../../Context/DataUserContext";

const ProfileNav = () => {
    const userData = useContext(DataUserContext)
    return(
        <div className="contain-profile">
            <Profile img={userData.pictureProfile} />
            <div className="description">
                <p>{userData.name}</p>
                <p>{
                    userData.timeLogin === "" ?
                    "Não possui nenhum úsuario logado" :
                    `Login realizado hàs ${userData.timeLogin}`    
                }</p>
            </div>
        </div>
    )
}

export default ProfileNav
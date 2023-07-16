import React from "react";
import "./style.css";
import Profile from "../../main/profile"

const ExperienceBox = ({ content, pictureProfile, title, nameUser, amountComents }) => {
    return(
        <div className="experience-box">
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="contain-profile-experience">
                <Profile img={pictureProfile} />
                <div className="descritive">
                    <p>{title}</p>
                    <div>
                        <span>{nameUser}</span>
                        <span>{` - ${amountComents}`} {amountComents === 1 ? "Comentário" : "Comentários"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceBox
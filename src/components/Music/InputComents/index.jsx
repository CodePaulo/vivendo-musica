import React, { useContext } from "react";
import "./style.css";
import Profile from "../../main/profile";
import Button from "../../main/Button";
import Input from "../../main/Input";
import DataUserContext from "../../../Context/DataUserContext";

const InputComents = () => {
    const userData = useContext(DataUserContext)
    return(
        <div className="input-coment">
            <Profile img={userData.pictureProfile} />
            <Input placeHolder={"Adicione um comentário..."} type={"text"} />
            <Button value={"Comentar"} />
        </div>
    )
}

export default InputComents
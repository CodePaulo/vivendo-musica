import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Profile from "../../main/profile";
import Button from "../../main/Button";
import Input from "../../main/Input";

const Coment = ({ name, profilePicture, timeComent, coment, amountComents, responses }) => {
    const [hiddenResponses, setHiddenResponses] = useState(amountComents > 1)
    const handleHiddenResponses = () => setHiddenResponses(!hiddenResponses)

    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => setShowAll(!showAll)

    const [textHegiht, setBoxHeight] = useState(0)
    const boxRef = useRef(null);
    useEffect(() => {
        const boxElement = boxRef.current;
        if (boxElement) {
          const boxHeight = boxElement.offsetHeight;
          setBoxHeight(boxHeight)
        }
    }, []);    

    return(
        <div className="contains-coment">
            <Profile img={profilePicture} />
            <div className="contains-profile">
                <div className="descryptive">
                    <p className="title">{name}</p>
                    <p className="time-coment">{timeComent}</p>
                </div>
                <div ref={boxRef} className="coment" style={{display: showAll ? "block" : "-webkit-box"}}>
                    {coment}
                </div>
                {textHegiht > 37 && 
                <p className="showMore" onClick={() => toggleShowAll()} >
                    {showAll ? "Ocultar" : "Mostrar Mais"}
                </p>}
                {responses &&
                <div className="addResponse">
                    <div className="amount-responses">
                        {amountComents === 1 ? `${amountComents} Reposta` : `${amountComents} Repostas`}
                    </div>
                    <Button value={"Responder"} />
                    <Input placeHolder={"Adicione uma resposta..."} type={"text"} />
                </div>}
                {responses &&
                <React.Fragment>
                    <div>{hiddenResponses ? responses[0] : responses}</div>
                    {amountComents > 1 &&
                    <div className="moreResponses" onClick={() => handleHiddenResponses()}>
                        <span></span>
                        <p>{hiddenResponses ? "Mostrar mais..." : "Ocultar"}</p>
                        <span></span>
                    </div>}
                </React.Fragment>}
            </div>
        </div>
    )
}

export default Coment
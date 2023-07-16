import React, { useContext } from "react";
import "./style.css";
import OptionsPagMusicContext from "../../../Context/OptionsPagMusicContext";

const options = ["Todas","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const Filter = () => {
    const ContextOptionsPagMusic = useContext(OptionsPagMusicContext)
    return(
        <div className="filter">
            {options.map(option => (
                <p
                    key={option}
                    className={`option ${ContextOptionsPagMusic.option === option && "option-selected"}`}
                    onClick={() => ContextOptionsPagMusic.handleOptions(option)}
                >{option}</p>
            ))}
        </div>
    )
}

export default Filter
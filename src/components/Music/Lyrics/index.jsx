import React from "react";
import "./style.css";

const Lyrics = ({ originalLyrics, translationLyrics }) => {
    return(
        <div className="contains-lyrics">
            <div className="contains-title">
                <span className="title-original">Original</span>
                <div className="circle-title"></div>
                <span className="title-translation">Tradução</span>
            </div>
            <div className="lyrics">
                <div className="lyrics-original" style={{ whiteSpace: 'pre-wrap' }}>{originalLyrics}</div>
                <div className="lyrics-translation" style={{ whiteSpace: 'pre-wrap' }}>{translationLyrics}</div>
            </div>
        </div>
    )
}

export default Lyrics
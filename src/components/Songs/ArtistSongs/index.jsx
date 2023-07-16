import React, { useContext } from "react";
import "./style.css";
import Search from "../../main/search"
import List from "./List";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import ArtistContext from "../../../Context/ArtistContext";

const ArtitstSongs = () => {
    const ContextArtist = useContext(ArtistContext)

    return(
        <div className={`songs ${ContextArtist.artist === "" && "close-songs"}`}>
            <FontAwesomeIcon
                icon={faWindowClose}
                className="icon-close-songs"
                onClick={() => ContextArtist.handleArtist("")}
            />
            <div className="title-songs">{ContextArtist.artist}</div>
            <Search />
            <div className="border-songs"></div>
            <List />
        </div>
    )
}

export default ArtitstSongs
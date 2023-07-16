import React, { useContext } from "react";
import "./style.css";
import OptionsPagMusicContext from "../../../Context/OptionsPagMusicContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import ArtistContext from "../../../Context/ArtistContext";
import getAllArtists from "../../../API/allArtists";

const ArtistFilter = () => {
    const ContextOptionsPagMusic = useContext(OptionsPagMusicContext)
    const validArtists = (
        ContextOptionsPagMusic.option === "Todas"
        ?
        getAllArtists()
        :
        getAllArtists().filter(artist => artist.name.substr(0, 1) === ContextOptionsPagMusic.option)
    )
    const ContextArtist = useContext(ArtistContext)

    return(
        <div className="artist-filter" >
            {validArtists.map(artist => (
                <div key={artist.id} className="artist">
                    <div className="picture" onClick={() => ContextArtist.handleArtist(artist.name)}>
                        {
                            artist.img
                            ?
                            <img src={artist.img} alt="" />
                            :
                            <FontAwesomeIcon icon={faUsersBetweenLines} className="icon" />
                        }
                    </div>
                    <h2>{artist.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default ArtistFilter
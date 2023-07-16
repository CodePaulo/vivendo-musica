import React, { useState } from "react";
import "./style.css";
import Body from "../../components/main/Body";
import Filter from "../../components/Songs/Filter";
import ArtistFilter from "../../components/Songs/ArtistFilter";
import ArtistSongs from "../../components/Songs/ArtistSongs";
import OptionsPagMusicContext from "../../Context/OptionsPagMusicContext";
import ArtistContext from "../../Context/ArtistContext";

const Songs = () => {
    const [selectedOption, setSelectedOption] = useState("Todas")
    const handleOptions = option => setSelectedOption(option)

    const [selectedArtist, setSelectedArtist] = useState("")
    const handleArtist = artist => setSelectedArtist(artist)

    return(
        <Body>
            <OptionsPagMusicContext.Provider value={{option: selectedOption, handleOptions}}>
                <Filter />
                <ArtistContext.Provider value={{artist: selectedArtist, handleArtist}}>
                    <ArtistFilter />
                    <ArtistSongs />
                </ArtistContext.Provider>
            </OptionsPagMusicContext.Provider>
        </Body>
    )
}

export default Songs
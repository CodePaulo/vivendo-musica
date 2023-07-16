import React, { useContext } from "react";
import "./style.css";
import Body from "../../components/main/Body";
import Profile from "../../components/main/profile"
import NavHeaderContext from "../../Context/NavHeaderContext";
import NavVideoMusicContext from "../../Context/NavVideoMusicContext";
import { Link } from "react-router-dom";

const Music = ({ artist, nameMusic, urlVideo, path, Element }) => {
    useContext(NavHeaderContext)[1]("musicas")
    const urlActual = window.location.href
    
    return(
        <Body>
            <NavVideoMusicContext.Provider value={urlActual} >
                <div className="contains-all-lyrics">
                    <div className="contains-profile-music">
                        <div className="box-fixed">
                            <div className="profile-music">
                                <Profile />
                                <div className="title-music">
                                    <h1>{nameMusic}</h1>
                                    <h2>- {artist}</h2>
                                </div>
                            </div>
                            <div className="video">
                                <iframe src={urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="nav-music">
                                <Link
                                    to={`${path}/letra`}
                                    className={`link ${urlActual.includes("letra") ? "link-selected" : ""}`}
                                >Letra</Link>
                                <div className="border-nav-music"></div>
                                <Link
                                    to={`${path}/experiencias`}
                                    className={`link ${urlActual.includes("experiencias") ? "link-selected" : ""}`}
                                >Histórias dos Úsuarios</Link>
                                <div className="border-nav-music"></div>
                                <Link
                                    to={`${path}/historia`}
                                    className={`link ${urlActual.includes("historia") ? "link-selected" : ""}`}
                                >História</Link>
                            </div>
                        </div>
                    </div>
                    {Element}
                </div>
            </NavVideoMusicContext.Provider>
        </Body>
    )
}

export default Music
import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import allMusic from "../../../../API/allMusic";

const List = () => {
    const [closeList, setCloseList] = useState([false, 0])
    const handleList = status => setCloseList(status)

    return(
        <div className="list">
            {allMusic().map(album => (
                <div key={album.id}>
                    <div
                        className="album-title"
                        onClick={() => handleList([!closeList[0], 0])}
                    >
                        <p>{`${album.nameAlbum} - ${album.year}`}</p>
                        <FontAwesomeIcon icon={faSortDown} className="album-icon" />
                    </div>
                    <ul
                        className={`${closeList[0] && closeList[1] === 0 && "close-list"}`}
                    >
                        {album.musics.map(music => (
                            <Link key={music.id / 0.333} to={"/linkin-park/given-up/letra"} className="link-music" >
                                <li>{music.nameMusic}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default List
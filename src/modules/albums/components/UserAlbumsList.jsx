import React from 'react';
import {Link, useLocation} from "react-router-dom";

const AlbumsList = ({list}) => {

    const {pathname} = useLocation();

    return (
        <ul>
            {list.map(album => (<li key={album.id}>
                <Link to={`/photos/${album.id}`}>{album.title}</Link>
            </li>))}
        </ul>
    )
};

export default AlbumsList;

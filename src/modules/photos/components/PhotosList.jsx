import React from 'react';
import {Link, useLocation} from "react-router-dom";

const PhotosList = ({list}) => {

    const {pathname} = useLocation();

    return (
        <ul>
            {list.map(photo => (<li key={photo.id}>
                <p>{photo.title}</p>
                <img src={photo.url} alt={photo.title} />
            </li>))}
        </ul>
    )
};

export default PhotosList;

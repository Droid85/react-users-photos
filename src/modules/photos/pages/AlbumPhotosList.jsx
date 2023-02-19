import React from 'react';
import {usePhotos} from "../hooks/usePhotos";
import {useCustomNavigate} from '../hooks/useCustomNavigate';
import PhotosList from "../components/PhotosList";
import {useParams} from "react-router-dom";

const AlbumPhotosListPage = () => {
    const navigate = useCustomNavigate();
    const {id} = useParams();

    const {list} = usePhotos(id);

    const handlGoBack = () => {
        navigate.navigateToPage();
    }

    return <div>
        <h2>Album Photos List Page</h2>
        <PhotosList list={list}/>
        <button onClick={handlGoBack}>Go Back</button>
    </div>
};

export default AlbumPhotosListPage;

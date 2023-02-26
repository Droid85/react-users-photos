import React from 'react';
import {useAlbum} from "../hooks/useAlbum";
import {useCustomNavigate} from '../hooks/useCustomNavigate';
import UserAlbumsList from "../components/UserAlbumsList";
import {useParams} from "react-router-dom";

const UserAlbumsListPage = () => {
    const navigate = useCustomNavigate();
    const {id} = useParams();

    const {list} = useAlbum(id);

    const handlGoBack = () => {
        navigate.navigateToPage();
    }

    return <div>
        <h2>User Albums List Page</h2>
        {<UserAlbumsList list={list}/>}
        <button onClick={handlGoBack}>Go Back</button>
    </div>
};

export default UserAlbumsListPage;
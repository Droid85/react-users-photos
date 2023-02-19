import React from 'react';
import {useAlbums} from "../hooks/useAlbums";
import {useCustomNavigate} from '../hooks/useCustomNavigate';
import UserAlbumsList from "../components/UserAlbumsList";

const UsersAlbumsListPage = () => {
    const navigate = useCustomNavigate();

    const {list} = useAlbums();

    const handlGoBack = () => {
        navigate.navigateToPage();
    }

    return <div>
        <h2>Users Albums List Page</h2>
        <UserAlbumsList list={list}/>
        <button onClick={handlGoBack}>Go Back</button>
    </div>
};

export default UsersAlbumsListPage;

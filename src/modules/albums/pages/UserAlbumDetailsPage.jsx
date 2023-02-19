import React from 'react';
import useUserAlbumDetails from "../hooks/useUserAlbumDetails";
import {useNavigate, useParams} from "react-router-dom";
import {useCustomNavigate} from '../hooks/useCustomNavigate';

const UserAlbumDetailsPage = (props) => {
    const {id} = useParams();
    const {details} = useUserAlbumDetails(id);
    const navigate = useCustomNavigate();

    const onBackButtonClick = () => {
        navigate.goBack();
    }

    return (<div>
        <h2>User Album Photos Page</h2>
        <div className="user_block">
            Name: {details.title}
        </div>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>)
};

export default UserAlbumDetailsPage;

import React, {useEffect} from 'react';
import useUserDetails from "../hooks/useUserDetails";
import {useLocation, useHistory, useParams, Link} from "react-router-dom";
import {removeUser} from "../../../store/actions/users-actions";
import {useDispatch} from 'react-redux';
import {useUsersNavigate} from "../hooks/useUsersNavigate";
import "./UserDetailsPage.css";

const UserDetailsPage = (props) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const {id} = useParams()

    const {details} = useUserDetails(id)

    const navigate = useUsersNavigate();

    const onBackButtonClick = () => {
        navigate.navigateToPage()
    }

    const handleDeletUser = () => {
        dispatch(removeUser(details.id));
        navigate.navigateToPage();
    }

    return (<div>
        <h2>User Details Page</h2>
        <div className="user_block">
            Name: {details.name}
            <Link to={`${pathname}/albums`} className="button link">Albums</Link>
        </div>
        <div className="buttons-block">
            <Link to={`${pathname}/edit`} className="button link">Edit</Link>
            <button onClick={handleDeletUser} className="button">Delete user</button>
        </div>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>)
};

export default UserDetailsPage;
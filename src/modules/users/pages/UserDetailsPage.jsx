import React from 'react';
import useUserDetails from "../hooks/useUserDetails";
import {useLocation, useNavigate, useParams, Link} from "react-router-dom";
import {removeUser} from "../../../store/actions/users-actions";
import {useDispatch} from 'react-redux';
import "./UserDetailsPage.css";

const useCustomNavigate = (navigateTo = '/users') => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const navigateToPage = () => navigate(navigateTo)

    return {goBack, navigateToPage}
}

const withRouter = (Component) => {
    function ComponentWithRouterProps(props) {
        const location = useLocation()
        const navigate = useNavigate()
        const params = useParams()
        return (
            <Component
                {...props}
                routerInfo={{location, navigate, params}}
            />
        )
    }
    return ComponentWithRouterProps
}

const UserDetailsPage = (props) => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const {id} = useParams()

    const {details} = useUserDetails(id)

    const navigate = useCustomNavigate()

    const onBackButtonClick = () => {
        navigate.goBack()
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

export default withRouter(UserDetailsPage);
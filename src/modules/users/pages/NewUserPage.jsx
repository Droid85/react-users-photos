import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createUser} from "../../../store/actions/users-actions";
import {useUsersNavigate} from '../hooks/useUsersNavigate';
import {useHistory} from "react-router-dom";

const NewUserPage = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useUsersNavigate();

    const handleNewName = (e) => {
        setName(e.target.value)
    }

    const handleAddUserData = (e) => {
        e.preventDefault();
        dispatch(createUser({name}));
        navigate.navigateToPage();
    }

    const onBackButtonClick = () => {
        navigate.navigateToPage();
    }

    return <div>
        <h2>Add new user Page</h2>
        <form>
            <input type="text" placeholder="User name" onChange={handleNewName} />
            <input type="submit" onClick={handleAddUserData} />
        </form>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>
};

export default NewUserPage;
import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {createUser} from "../../../store/actions/users-actions";

const NewUserPage = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const {id} = useParams();

    const useCustomNavigate = (navigateTo = '/') => {
        const navigate = useNavigate()
        const goBack = () => navigate(-1)

        return {goBack}
    }

    const navigate = useCustomNavigate()

    const handleNewName = (e) => {
        setName(e.target.value)
    }

    const handleAddUserData = (e) => {
        e.preventDefault();
        dispatch(createUser({name}));
        navigate.goBack();
    }

    const onBackButtonClick = () => {
        navigate.goBack()
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

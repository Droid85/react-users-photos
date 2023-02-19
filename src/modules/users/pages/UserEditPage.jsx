import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {renameUser} from "../../../store/actions/users-actions";
import {useDispatch} from 'react-redux';

const UserEditPage = () => {
    const [name, setName] = useState('');

    const {id} = useParams();

    const useCustomNavigate = (navigateTo = '/') => {
        const navigate = useNavigate()
        const goBack = () => navigate(-1)

        return {goBack}
    }

    const navigate = useCustomNavigate()
    const dispatch = useDispatch();

    const handleEditName = (e) => {
        setName(e.target.value)
    }

    const handleEditUserData = (e) => {
        e.preventDefault();
        dispatch(renameUser(id, name))
    }

    const onBackButtonClick = () => {
        navigate.goBack()
    }

    return <div>
        <h2>User Edit Page</h2>
        <p>{name}</p>
        <form>
            <input type="text" placeholder="User name" onChange={handleEditName} />
            <input type="submit" onClick={handleEditUserData} />
        </form>
        <button onClick={onBackButtonClick} className="button back_button">Go Back</button>
    </div>
};

export default UserEditPage;

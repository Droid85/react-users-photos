import {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsersList, refreshUsers} from "../../../store/actions/users-actions";

export const useUsers = () => {
    const users = useSelector(state => state.users.users);
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    function fetchUsers() {
        dispatch(fetchUsersList())
    }

    useEffect(() => {
        let refreshData = JSON.parse(sessionStorage.getItem('users'));

        if (refreshData && refreshData.length) {
            dispatch(refreshUsers(refreshData))
        } else {
            fetchUsers();
            setList(users);
        }
    }, []);

    useEffect(() => {
        setList(users);

        if (users.length) {
            sessionStorage.setItem('users', JSON.stringify(users));
        }
    }, [users]);

    return {list}
}
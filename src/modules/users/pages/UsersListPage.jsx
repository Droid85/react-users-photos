import React from 'react';
import {useUsers} from "../hooks/useUsers";
import UsersList from "../components/UsersList";
import {useLocation, Link} from "react-router-dom";

const UsersListPage = () => {
    const {list} = useUsers();
    const {pathname} = useLocation();

    return <div>
        <h2>Users List Page</h2>
        <UsersList list={list}/>
        <Link to={`${pathname}/add-user`} className="button link">Add user</Link>
    </div>
};

export default UsersListPage;

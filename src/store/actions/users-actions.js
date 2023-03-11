import {deleteUser, updateUser, getUserList, addUser} from '../../modules/users/services/usersService';

export const ACTION_SET_USERS = 'ACTION_SET_USERS';
export const ACTION_CREATE_USER = 'ACTION_CREATE_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_RENAME_USER = 'ACTION_RENAME_USER';
export const ACTION_REFRESH_USERS = 'ACTION_REFRESH_USERS';

export const fetchUsersList = () => (dispatch) => {
    getUserList()
        .then(data => dispatch({
            type: ACTION_SET_USERS,
            payload: data
        }))
}

export const createUser = (newUser) => (dispatch) => {
    addUser(newUser)

    dispatch({
        type: ACTION_CREATE_USER,
        payload: newUser
    })
}

export const removeUser = (id) => (dispatch) => {
    deleteUser(id)

    dispatch({
        type: ACTION_DELETE_USER,
        payload: id
    })
}

export const renameUser = (newUserData) => (dispatch, getState) => {
    const {users} = getState()
    const user = users.users.find(user => user.id === newUserData.id)

    const newUser = {...user, id: +newUserData.id, name: newUserData.name, email: newUserData.email}

    updateUser(newUser)

    dispatch({
        type: ACTION_RENAME_USER,
        payload: newUser
    })
}

export const refreshUsers = (usersData) => (dispatch) => {
    dispatch({
        type: ACTION_REFRESH_USERS,
        payload: usersData
    })
}
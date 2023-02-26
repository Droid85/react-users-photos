import {ACTION_DELETE_USER, ACTION_RENAME_USER, ACTION_CREATE_USER, ACTION_SET_USERS, ACTION_REFRESH_USERS} from '../actions/users-actions';

const initialState = {
    users: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            }
        case ACTION_RENAME_USER:
            return {
                users: state.users.map(user => user.id === payload.id ? payload : user)
            }
        case ACTION_CREATE_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    payload
                ]
            }
        case ACTION_SET_USERS:
            return {users: payload}
        case ACTION_REFRESH_USERS:
            return {users: payload}
        default: return state
    }
}

export default rootReducer;
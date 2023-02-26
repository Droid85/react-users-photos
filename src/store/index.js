import {createStore, applyMiddleware, combineReducers} from "redux";
import usersReducer from './reducers/users-reducer';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
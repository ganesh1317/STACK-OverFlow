import { combineReducers } from "redux";
import authReducer from './auth'
import currentUserReducer from './currentUser'


export const setCurrentUser = (data) => {
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data
    }
}
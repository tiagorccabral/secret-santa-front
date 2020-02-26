import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    games: gameReducer,
    errors: errorReducer
})
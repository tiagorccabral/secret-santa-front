import axios from 'axios';
import {toast} from "react-toastify";

import {apiEndPoint, setAuthToken} from "../utils/globals";
// import setAuthToken from '../utils/setAuthToken';
import {clearErrors} from "./errorActions";
import {GET_ERRORS, REGISTER_USER_SUCCESS, SET_CURRENT_USER} from "./types";

// Register user
export const registerUser = ({userData, history}) => dispatch => {
    dispatch(clearErrors());
    const data = {user: userData};
    axios.post(`${apiEndPoint}/users`, data)
        .then(res => {
            history.push('/login');
            dispatch({
                type: REGISTER_USER_SUCCESS
            });
            toast.success("Conta criada com sucesso!");
        })
        .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
                toast.error("Ocorreu um erro!");
            }
        );
};


// Login - Get User Token
export const loginUser = ({userData}) => dispatch => {
    const data = {user: userData};
    axios.post(`${apiEndPoint}/login`, data)
        .then(res => {
            // Save to localStorage
            const {jwt} = res.data;

            // Set token to ls
            localStorage.setItem('jwtToken', jwt);
            localStorage.setItem('userData', JSON.stringify(res.data.user));

            // Set token to auth header
            setAuthToken(jwt);

            // Set current user
            dispatch(setCurrentUser(res.data.user));
            toast.success("Login realizado com sucesso!")
        })
        .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
                toast.error("Ocorreu um erro!");
            }
        );
};

// Logout user
export const logoutUser = () => {
    return (dispatch) => {
        // remove Token from localStorage
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userData');
        // remove auth token for future requests
        setAuthToken(false) // Por passar false, o token ira ser removido das requests
        // set current user to {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
        toast.success("Logout realizado com sucesso!")
    }
};


// Set logged in user
export const setCurrentUser = (decodedUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedUser
    }
};

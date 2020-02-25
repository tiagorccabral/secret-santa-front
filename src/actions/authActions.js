import axios from 'axios';
import {toast} from "react-toastify";

import {apiEndPoint} from "../utils/globals";
// import setAuthToken from '../utils/setAuthToken';

import {GET_ERRORS, CLEAR_ERRORS, REGISTER_USER_SUCCESS} from "./types";

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

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};


//
// // Login - Get User Token
// export const loginUser = (userData) => {
//     return (dispatch) => {
//         axios.post('/api/users/login', userData)
//             .then(res => {
//                 // Save to localStorage
//                 const { token } = res.data;
//
//                 // Set token to ls
//                 localStorage.setItem('jwtToken', token);
//
//                 // Set token to auth header
//                 setAuthToken(token);
//
//                 // Decode token to get user data
//                 const decoded =  jwt_decode(token);
//
//                 // Set current user
//                 dispatch(setCurrentUser(decoded));
//
//             })
//             .catch(err => dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response.data
//                 })
//             );
//     }
// };
//
// // Set logged in user
// export const setCurrentUser = (decodedUser) => {
//     return {
//         type: SET_CURRENT_USER,
//         payload: decodedUser
//     }
// };
//
// // Logout user
// export const logoutUser = () => {
//     return (dispatch) => {
//         // remove Token from localStorage
//         localStorage.removeItem('jwtToken');
//         // remove auth token for future requests
//         setAuthToken(false) // Por passar false, o token ira ser removido das requests
//         // set current user to {} which will set isAuthenticated to false
//         dispatch(setCurrentUser({}));
//     }
// };

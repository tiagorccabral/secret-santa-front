import {clearErrors} from "./errorActions";
import axios from "axios";
import {toast} from "react-toastify";
import {apiEndPoint, apiRequest} from "../utils/globals";
import {GET_ALL_USERS_SUCCESS, GET_ERRORS} from "./types";
import {setCurrentUser} from "./authActions";

export const editUser = ({userData, history}) => dispatch => {
    dispatch(clearErrors());
    const data = {user: userData};
    apiRequest.patch(`${apiEndPoint}/users/${data.user.id}`, data)
        .then(res => {
            localStorage.setItem('userData', JSON.stringify(res.data.data));
            dispatch(setCurrentUser(res.data.data));
            toast.success("Dados de perfil atualizados!");
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

export const getAllUsers = () => dispatch => {
    dispatch(clearErrors());
    apiRequest.get(`/users`)
        .then(res => {
            dispatch({
                type: GET_ALL_USERS_SUCCESS,
                payload: res.data.data
            })
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
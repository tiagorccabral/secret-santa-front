import {clearErrors} from "./errorActions";
import axios from "axios";
import {apiEndPoint} from "../utils/globals";
import {GET_ERRORS} from "./types";
import {toast} from "react-toastify";
import {setCurrentUser} from "./authActions";

export const editUser = ({userData, history}) => dispatch => {
    dispatch(clearErrors());
    const data = {user: userData};
    console.log(data);
    axios.patch(`${apiEndPoint}/users/${data.user.id}`, data)
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
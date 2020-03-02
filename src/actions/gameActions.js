import {clearErrors} from "./errorActions";
import {apiEndPoint, apiRequest} from "../utils/globals";
import {toast} from "react-toastify";
import {CREATE_GAME_SUCCESS, GET_ALL_ACTIVE_GAMES_SUCCESS, SHOW_GAME_SUCCESS, GET_ERRORS} from "./types";

export const getAllActiveGames = () => dispatch => {
    dispatch(clearErrors());
    apiRequest.get(`/games`)
        .then(res => {
            dispatch({
                type: GET_ALL_ACTIVE_GAMES_SUCCESS,
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

export const createGame = ({gameData, history}) => dispatch => {
    dispatch(clearErrors());
    const data = {game: gameData};
    apiRequest.post(`${apiEndPoint}/games`, data)
        .then(res => {
            dispatch({
                type: CREATE_GAME_SUCCESS,
                payload: res.data.data
            });
            toast.success("Jogo criado com sucesso!");
            history.push("/meu-perfil")
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

export const getGameInformation = ({gameID}) => dispatch => {
    dispatch(clearErrors());
    apiRequest.get(`${apiEndPoint}/games/${gameID}`)
        .then(res => {
            dispatch({
                type: SHOW_GAME_SUCCESS,
                payload: res.data.data
            });
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
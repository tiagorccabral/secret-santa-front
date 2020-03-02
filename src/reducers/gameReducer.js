import {GET_ALL_ACTIVE_GAMES_SUCCESS, SHOW_GAME_SUCCESS} from '../actions/types';

const initialState = {
    activeGames: [],
    selectedGame: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ACTIVE_GAMES_SUCCESS:
            return {
                ...state,
                activeGames: action.payload
            };
        case SHOW_GAME_SUCCESS:
            return {
                ...state,
                selectedGame: action.payload
            };
        default:
            return state;
    }
}

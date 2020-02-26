import {isEmpty} from "../utils/validation";
import {GET_ALL_ACTIVE_GAMES_SUCCESS} from '../actions/types';

const initialState = {
    activeGames: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ACTIVE_GAMES_SUCCESS:
            return {
                ...state,
                activeGames: action.payload
            };
        default:
            return state;
    }
}

import {
    GET_ROUND,
    GET_PLAYER1,
    GET_PLAYER2,
    WINNER,
    RANKING,
    CLEAN_STATE,
    FIGHTS,
} from '../types';

const initialState = {
    round: 0,
    player1: null,
    player2: null,
    winner: null,
    ranking: [],
    fights: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ROUND:
            return {
                ...state,
                round: action.payload,
            };

        case GET_PLAYER1:
            return {
                ...state,
                player1: action.payload,
            };

        case GET_PLAYER2:
            return {
                ...state,
                player2: action.payload,
            };

        case RANKING:
            return {
                ...state,
                ranking: [...state.ranking, action.payload].sort(
                    (a, b) => b.points - a.points
                ),
            };

        case WINNER:
            return {
                ...state,
                winner: action.payload,
            };

        case FIGHTS:
            return {
                ...state,
                fights: [...state.fights, action.payload],
            };

        case CLEAN_STATE:
            return {
                ...state,
                player1: null,
                player2: null,
                round: 0,
                winner: null,
            };

        default:
            return state;
    }
};

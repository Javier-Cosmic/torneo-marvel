import {
    GET_ROUND,
    GET_PLAYER1,
    GET_PLAYER2
} from '../types';

const initialState = {
    round: 0,
    player1: null,
    player2: null
}

export default (state = initialState, action) => {
    
    switch (action.type) {

        case GET_ROUND:
            return{
                ...state,
                round: action.payload
            }

        case GET_PLAYER1:
            return{
                ...state,
                player1: action.payload
            }

        case GET_PLAYER2:
            return{
                ...state,
                player2: action.payload
            }
    
        default:
            return state;
    }
}
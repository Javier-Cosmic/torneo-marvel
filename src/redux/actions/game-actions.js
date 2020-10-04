import {
    GET_ROUND,
    GET_PLAYER1,
    GET_PLAYER2
} from '../types';

export const getRound = (n) => {
    return{
        type: GET_ROUND,
        payload: n
    }
}

export const getPlayer1 = (character) => {
    return{
        type: GET_PLAYER1,
        payload: character
    }
}

export const getPlayer2 = (character) => {
    return{
        type: GET_PLAYER2,
        payload: character
    }
}
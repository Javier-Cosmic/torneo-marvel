import {
    GET_ROUND,
    GET_PLAYER1,
    GET_PLAYER2,
    RANKING,
    CLEAN_STATE, 
    WINNER, FIGHTS
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

export const rankingPlayers = (win) => {
    return{
        type: RANKING,
        payload: win
    }
}

export const saveWinner = (winner) => {
    return{
        type: WINNER,
        payload: winner
    }
}

export const saveFights = (info) => {
    return{
        type: FIGHTS,
        payload: info
    }
}

export const cleanState = () => {
    return{
        type: CLEAN_STATE
    }
}

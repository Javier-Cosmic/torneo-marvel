import {
    LOADING,
    LOAD_CHARACTER, 
    LOAD_COMIC, 
    SHOW_CHARACTER,
    SHOW_COMIC
} from '../types';

export const loading = (boolean) => {
    return{
        type: LOADING,
        payload: boolean
    }
}

export const loadCharacter = () => {
    return{
        type: LOAD_CHARACTER
    }
}

export const showCharacter = (data) => {
    return{
        type: SHOW_CHARACTER,
        payload: data
    }
}

export const loadComic = (id) => {
    return{
        type: LOAD_COMIC,
        payload: id
    }
}

export const showComic = (data) => {
    return{
        type: SHOW_COMIC,
        payload: data
    }
}


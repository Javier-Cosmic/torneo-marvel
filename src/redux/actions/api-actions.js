import {
    LOADING,
    LOAD_CHARACTER, 
    SHOW_CHARACTER,
    LOAD_COMIC, 
    SHOW_COMIC,
    LOAD_SERIE,
    SHOW_SERIE,
    LOAD_EVENT,
    SHOW_EVENT
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

export const loadSerie = (id) => {
    return{
        type: LOAD_SERIE,
        payload: id
    }
}

export const showSerie = (data) => {
    return{
        type: SHOW_SERIE,
        payload: data
    }
}

export const loadEvent = (id) => {
    return{
        type: LOAD_EVENT,
        payload: id
    }
}

export const showEvent = (data) => {
    return{
        type: SHOW_EVENT,
        payload: data
    }
}



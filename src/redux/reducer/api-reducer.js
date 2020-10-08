import {
    LOADING,
    SHOW_CHARACTER,
    SHOW_COMIC,
    SHOW_SERIE,
    SHOW_EVENT
} from '../types';

const initialState = {
    characters: [],
    loading: false,
    comics: [],
    series: [],
    events: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case LOADING:
            return{
                ...state,
                loading: action.payload
            }

        case SHOW_CHARACTER:
            return{
                ...state,
                characters: action.payload,
                loading: false,
            }

        case SHOW_COMIC:
            return{
                ...state,
                comics: action.payload,
                loading: false
            }

        case SHOW_SERIE:
            return{
                ...state,
                series: action.payload,
                loading: false
            }

        case SHOW_EVENT:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
    
        default:
            return state;
    }
}
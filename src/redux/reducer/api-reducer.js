import {
    LOADING,
    SHOW_CHARACTER,
    SHOW_COMIC
} from '../types';

const initialState = {
    characters: [],
    loading: false,
    comics: []
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
    
        default:
            return state;
    }
}
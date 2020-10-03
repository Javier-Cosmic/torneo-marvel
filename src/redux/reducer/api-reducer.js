import {SHOW_CHARACTER} from '../types';

const initialState = {
    characters: []
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SHOW_CHARACTER:
            return{
                ...state,
                characters: action.payload
            }
    
        default:
            return state;
    }
}
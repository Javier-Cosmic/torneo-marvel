import {combineReducers} from 'redux';
import apiReducer from './api-reducer';
import gameReducer from './game-reducer';

export default combineReducers({
    api_reducer: apiReducer,
    game_reducer: gameReducer
});
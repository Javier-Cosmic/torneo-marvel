import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
    LOADING,
    LOAD_CHARACTER, 
    SHOW_CHARACTER,
    LOAD_COMIC,
    SHOW_COMIC
} from '../types';

const url = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_PUBLIC_KEY

function* getCharacters(){

    
    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, url+'?orderBy=-modified&limit=100'+key);

        yield put({ type: SHOW_CHARACTER, payload: result.data.data.results})
        
    } catch (error) {
        console.log(error);
    }
}

function* getComics({ payload }){

    
    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, url+`/${payload}/comics?`+key);

        yield put({ type: SHOW_COMIC, payload: result.data.data.results })

    } catch (error) {
        console.log(error)
    }
}

export default function* api(){

    yield takeLatest(LOAD_CHARACTER, getCharacters);
    yield takeLatest(LOAD_COMIC, getComics);
}
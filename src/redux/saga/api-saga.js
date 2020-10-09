import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
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

const url = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_KEY
const ts = 'ts=1&';

function* getCharacters(){

    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, `${url}?${ts}orderBy=-modified&limit=100&${key}`);

        yield put({ type: SHOW_CHARACTER, payload: result.data.data.results})
        
    } catch (error) {
        console.log(error);
    }
}

function* getComics({ payload }){

    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, `${url}/${payload}/comics?&${ts+key}`);

        yield put({ type: SHOW_COMIC, payload: result.data.data.results })

    } catch (error) {
        console.log(error)
    }
}

function* getSeries({ payload }){
    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, `${url}/${payload}/series?&${ts+key}`);

        yield put({ type: SHOW_SERIE, payload: result.data.data.results })

    } catch (error) {
        console.log(error)
    }
}

function* getEvents({ payload }){
    try {
        yield put({ type: LOADING, payload: true })
        const result = yield call(axios.get, `${url}/${payload}/events?&${ts+key}`);

        yield put({ type: SHOW_EVENT, payload: result.data.data.results })
        
    } catch (error) {
        console.log(error)
    }
}

export default function* api(){

    yield takeLatest(LOAD_CHARACTER, getCharacters);
    yield takeLatest(LOAD_COMIC, getComics);
    yield takeLatest(LOAD_SERIE, getSeries);
    yield takeLatest(LOAD_EVENT, getEvents);
}
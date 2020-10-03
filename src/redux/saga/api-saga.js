import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {LOAD_CHARACTER, SHOW_CHARACTER} from '../types';

function* getCharacters(){
    console.log('hola desde saga')
}

export default function* api(){

    yield takeLatest(LOAD_CHARACTER, getCharacters);
}
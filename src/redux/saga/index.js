import {all} from 'redux-saga/effects';
import api from './api-saga';

export default function* rootSaga(){
    yield all([
        api()
    ])
}
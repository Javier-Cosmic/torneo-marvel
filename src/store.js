import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        )
    );

sagaMiddleware.run(rootSaga);

export default store;

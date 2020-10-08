import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './redux/saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'ranking',
    whitelist: ['game_reducer'],
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
    // reducer,
    persistedReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
    )
);

const persistor = persistStore(store)


sagaMiddleware.run(rootSaga);

export {store, persistor};

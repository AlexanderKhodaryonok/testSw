import { combineReducers, createStore, applyMiddleware } from 'redux';
import heroesReducer from './heroesReducer/heroesReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../sagas/watcherSaga';

const rootReducer = combineReducers({
    heroesReducer: heroesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watcherSaga);

export default store;
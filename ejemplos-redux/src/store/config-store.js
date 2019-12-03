import { createStore, combineReducers } from 'redux';
// import contador from './contador/index';
import contador from './contador';
import cv from './cv';

export default function configStore() {
    const appReducer = combineReducers({contador, cv});
    return createStore(appReducer);
}

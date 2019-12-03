import { createStore } from 'redux';
// import contador from './contador/index';
import contador from './contador';

export default function configStore() {
    return createStore(contador);
}

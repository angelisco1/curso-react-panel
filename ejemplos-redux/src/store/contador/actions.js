import * as ActionTypes from './actions-types';

// Actions Creators
export function increment() {
    // Action
    return {
        type: ActionTypes.INCREMENT
    }
}

export function decrement() {
    return {
        type: ActionTypes.DECREMENT
    }  
}

export function reset(val) {
    return {
        type: ActionTypes.RESET,
        payload: Number(val)
    }
}
import * as ActionTypes from './action-types';

export function changeDato(field, value) {
    return {
        type: ActionTypes.CHANGE_DATO,
        payload: {
            field,
            value
        }
    }
}

export function addSkill(skill) {
    return {
        type: ActionTypes.ADD_SKILL,
        payload: skill
    }
}
import * as ActionTypes from './action-types';

const initialState = {
    nombre: 'Angel',
    apellidos: 'Villalba',
    email: 'angel@gmail.com',
    skills: [
        {id: 0, skill: 'JS'},
        {id: 1, skill: 'React'}
    ],
    nextId: 2
}

function changeDato(state, payload) {
    const {field, value} = payload;
    const newState = {...state, [field]: value}
    return newState;
}

function addSkill(state, skill) {
    const newSkills = [
        ...state.skills,
        {id: state.nextId, skill}
    ]
    const newState = {
        ...state,
        skills: newSkills,
        nextId: state.nextId + 1
    }
    return newState;
}

export default function cv(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.CHANGE_DATO:
            return changeDato(state, action.payload);
        case ActionTypes.ADD_SKILL:
            return addSkill(state, action.payload);
        default:
            return state;
    }
}
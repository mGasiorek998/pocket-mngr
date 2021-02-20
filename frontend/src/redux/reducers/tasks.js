import {
    GET_TASKS,
    ADD_TASK,
} from '../actions/types.js';

const initState = {
    tasks: [],
}

const tasksReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload,
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        default:
            return state;
    }
}

export default tasksReducer;
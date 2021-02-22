import {
    GET_TASKS,
    ADD_TASK,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
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
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== payload),
            }
        case CHANGE_TASK_STATUS:
            // Remove edited task from state:
            state.tasks = state.tasks.filter(task => task.id !== payload.id)
            return {
                ...state,
                tasks: [...state.tasks, payload]
            }
        default:
            return state;
    }
}

export default tasksReducer;
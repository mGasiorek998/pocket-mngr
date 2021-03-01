import {
    GET_TASKS,
    ADD_TASK,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
    EDIT_TASK,
    GET_TASK_BY_ID
} from '../actions/types.js';

const initState = {
    task: null,
    tasks: [],
}

const tasksReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload,
            }
        case GET_TASK_BY_ID:
            return {
                ...state,
                task: payload
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
        case EDIT_TASK:
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
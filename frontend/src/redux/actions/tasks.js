import axios from 'axios';
import {
    GET_TASKS,
    ADD_TASK,
} from './types';

/**
 * Fetch from server all user's tasks
 */
export const getAllTasks = () => async dispatch => {
    try {
        const response = await axios.get('/api/tasks');
        dispatch({
            type: GET_TASKS,
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    }
}

// ADD TASK
export const addTask = (task) => async dispatch => {
    try {
        const response = await axios.post('/api/tasks/', task);
        dispatch({
            type: ADD_TASK,
            payload: response.data
        })
    } catch (err) {
        console.log(err);
    }
}
// EDIT TASK

// DELETE TASK

// CHANGE TASK'S STATUS


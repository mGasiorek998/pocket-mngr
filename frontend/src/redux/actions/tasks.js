import axios from 'axios';
import {
    GET_TASKS,
    ADD_TASK,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
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

/**
 * addes task to database
 * @param {Object} task - task object to add to database
 */
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

/**
 * removes task from database
 * @param {number} id - Task's id to delete
 */
export const deleteTask = (id) => async dispatch => {
    try {
        await axios.delete(`/api/tasks/${id}/`);
        dispatch({
            type: DELETE_TASK,
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
}

/**
 * changes task's status
 * @param {number} id - Task's id to change
 */
export const changeTaskStatus = (id) => async dispatch => {
    try {
        // Get the chosen task: 
        const response = await axios.get(`/api/tasks/${id}`);
        let task = response.data;
        task.status += 1;

        // Edit and Get the edited task:
        const changedTask = await axios.put(`/api/tasks/${id}/`, task);

        dispatch({
            type: CHANGE_TASK_STATUS,
            payload: changedTask.data
        })

    } catch (err) {
        console.log(err);
    }
}

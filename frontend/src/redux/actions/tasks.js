import axios from 'axios';
import {
    GET_TASKS,
    ADD_TASK,
    CHANGE_TASK_STATUS,
    DELETE_TASK,
    EDIT_TASK,
    GET_TASK_BY_ID
} from './types';

const DIFFICULTIES_BY_NAME = {
    'easy': 0,
    'medium': 1,
    'hard': 2,
    'very hard': 3
}

const DIFFICULTIES_BY_ID = {
    0: 'Easy',
    1: 'Medium',
    2: 'Hard',
    3: 'Very Hard'
}

/**
 * Changes difficulty value to coresponding id
 * @param {string} value - difficulty value
 * @example
 * mapDifficultyValuesToIds('medium') -> 1
 */

export const mapDifficultyNamesToIds = value => DIFFICULTIES_BY_NAME[value.toLowerCase()];

/**
 * converts diff_id to its value 
 * @param {number} diff_id - difficulty id
 * @example
 * mapDifficultyIdToValue(1) -> Medium
 */
export const mapDifficultyIdsToNames = (diff_id) => DIFFICULTIES_BY_ID[diff_id];



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
 * Fetch from server task by id
 * @param {number} id - tasks ID
 */
export const getTaskById = id => async dispatch => {
    try {
        // Get the task form server:
        const response = await axios.get(`/api/tasks/${id}`);
        let task = response.data;

        //Change difficulty id to its name:
        task['difficulty'] = mapDifficultyIdsToNames(task.difficulty)

        dispatch({
            type: GET_TASK_BY_ID,
            payload: task
        })
    } catch (err) {
        console.log(err);
    }
}

/**
 * addes task to database
 * @param {Object} task - task object to add to database
 */
export const addTask = task => async dispatch => {
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

/**
 * edits task 
 * @param {Object} task - task object to save to database
 * @param {number} id - task id which to edit
 */
export const editTask = (task, id) => async dispatch => {
    try {
        const resposne = await axios.put(`/api/tasks/${id}/`, task);

        dispatch({
            type: EDIT_TASK,
            payload: resposne.data
        });

    } catch (err) {
        console.log(err);
    }
}



/**
 * removes task from database
 * @param {number} id - Task's id to delete
 */
export const deleteTask = id => async dispatch => {
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
export const changeTaskStatus = id => async dispatch => {
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

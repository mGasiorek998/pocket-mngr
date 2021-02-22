import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import styles from './AddTaskModal.module.css';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { addTask } from '../../redux/actions/tasks';

/**
 * Modal with form for adding a task
 */

const DIFFICULTIES = {
    'easy': 0,
    'medium': 1,
    'hard': 2,
    'very hard': 3
}
/**
 * Changes difficulty value to coresponding id
 * @param {string} value - difficulty value
 * @example
 * mapDifficultyValuesToIds('medium') -> 1
 */

const mapDifficultyValuesToIds = value => DIFFICULTIES[value.toLowerCase()];

const AddTaskModal = ({ close, isShown }) => {

    // useForm for handling user's input:
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    /**
     * Submit added task to server and display it to the UI as "NEW"
     * @param {Object} task - Task object created form user input
     */
    const submitTask = (task, e) => {
        task['difficulty'] = mapDifficultyValuesToIds(task.difficulty);
        dispatch(addTask(task)); // send task to the sever


        e.target.reset(); // rest Form inputs
        close(); // close modal
    }

    return (
        <Modal show={isShown}>
            <div className={styles.addTaskForm}>
                <form onSubmit={handleSubmit(submitTask)}>
                    <input
                        placeholder='title'
                        name='title'
                        ref={register}
                    />
                    <textarea
                        placeholder='decription'
                        name='description'
                        ref={register}
                    />
                    <input
                        placeholder='difficulty'
                        name='difficulty'
                        ref={register}
                    />
                    <Button name='add' />
                </form>
            </div>
        </Modal>
    )
}

export default AddTaskModal

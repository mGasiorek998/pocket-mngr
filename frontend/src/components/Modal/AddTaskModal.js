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

const AddTaskModal = () => {

    // useForm for handling user's input:
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    /**
     * Submit added task to server and display it to the UI as "NEW"
     * @param {Object} task - Task created form user input
     */
    const submitTask = (task) => {
        dispatch(addTask(task));
    }

    return (
        <Modal>
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

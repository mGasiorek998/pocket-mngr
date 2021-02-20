import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './AddTaskModal.module.css';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';

/**
 * Modal with form for adding a task
 */

const AddTaskModal = () => {

    // useForm for handling user's input:
    const { register, handleSubmit } = useForm();

    /**
     * Submit added task to server and display it to the UI as "NEW"
     * @param {Object} task - Task created form user input
     */
    const submitTask = (task) => {
        console.log(task);
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
                        name='descrp'
                        ref={register}
                    />
                    <input
                        placeholder='difficulty'
                        name='diff'
                        ref={register}
                    />
                    <Button name='add' />
                </form>
            </div>
        </Modal>
    )
}

export default AddTaskModal

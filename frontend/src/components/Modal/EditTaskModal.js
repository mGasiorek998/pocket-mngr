import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import styles from './AddTaskModal.module.css';

import Modal from './Modal';
import Button from '../Button/Button';
import { editTask, mapDifficultyNamesToIds } from '../../redux/actions/tasks';

/**
 * Modal with form for editing a task
 */


const EditTaskModal = ({ isShown, close }) => {

    // get the task that should be updated from redux state:
    const task = useSelector(state => state.tasks.task);
    const dispatch = useDispatch();

    // show form with inputs filed with task values by default
    const { register, handleSubmit, reset } = useForm({
        defaultValues: useMemo(() => task, [task])
    });


    useEffect(() => {
        reset(task);
    }, [task]);

    /**
     * handles submitting data to server
     * @param {Object} data - inputs from form
     */
    const submitTask = data => {
        data['difficulty'] = mapDifficultyNamesToIds(data.difficulty);
        dispatch(editTask(data, task.id));
        close();
    }

    // if task is not loaded don't show anything it to the UI
    if (!task) {
        return null
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
                    <Button name='save' />
                </form>
            </div>
        </Modal>
    )
}

EditTaskModal.PropTypes = {
    /**
     * Function to dispaly modal to screen
     */
    isShown: PropTypes.func.isRequired,

    /**
     * Function close modal after submiting a form
     */
    close: PropTypes.func.isRequired
}

export default EditTaskModal

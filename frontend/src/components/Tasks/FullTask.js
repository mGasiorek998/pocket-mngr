import React from 'react'
import PropTypes from 'prop-types';

import styles from './Task.module.css';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';

import { useSelector } from 'react-redux';

/**
 * Component to show task with full description
 */

const FullTask = ({ close, isShown, changeStatus }) => {

    //Get the task to show from redux state:
    const taskToShow = useSelector(state => state.tasks.task);

    //If task is not loadend return null
    if (!taskToShow) {
        return null;
    }

    /**
     *  Function to handle status change and closing the modal
     */
    const handleChangeStatus = () => {
        changeStatus(taskToShow.id);
        close();
    }

    return (
        <Modal show={isShown}>
            <div className={`${styles.task} ${styles.fullTask} `}>
                <div className={styles.taskContent}>
                    <div className={styles.taskHeader}>
                        <h2>{taskToShow.title}</h2>
                    </div>
                    <div className={styles.taskDescp}>
                        <p>{taskToShow.description}</p>
                    </div>
                    <div className={styles.taskDiff}>
                        <p>Difficulty: <span>{taskToShow.difficulty}</span></p>
                    </div>
                    <div className={styles.taskButtons}>
                        <Button name='finish' onClick={handleChangeStatus} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

FullTask.PropTypes = {
    /**
     * Function to close modal with full Task
     */
    close: PropTypes.func.isRequired,

    /**
     * Boolean which decides whether or not display a full task
     */
    isShown: PropTypes.bool.isRequired,

    /**
     * Function to change Task status to the next one (inProgress -> Finished)
     */
    changeStatus: PropTypes.func.isRequired,

}

export default FullTask

import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './ManagerPage.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Segment from '../Segment/Segment';
import Task from '../Tasks/Task';
import Button from '../Button/Button';
import AddTaskModal from '../Modal/AddTaskModal';
import { changeTaskStatus, deleteTask, getAllTasks } from '../../redux/actions/tasks';


/**
 * Component to show all the tasks with their current status
 */


const ManagerPage = () => {
    // State for showin modal: 
    const [showModal, setShowModal] = useState(false);

    // Tasks array from redux:
    const tasks = useSelector(state => state.tasks.tasks) // Get tasks from redux state
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch all tasks when component is mounted:
        dispatch(getAllTasks());
    }, [])

    /**
     * Display modal after clicking the add Task button:
     */
    const handleAddTaskButtonClick = () => setShowModal(true);

    /**
     * Closes add task modal
     */
    const closeModal = () => setShowModal(false);

    /**
     * changes status for chosen task
     * @param {number} taskId - id of task to change status
     */
    const changeTaskStatusHandler = taskId => {
        dispatch(changeTaskStatus(taskId));
    }

    /**
     * removes task by id
     * @param {number} taskId - id of task to remove
     */
    const deleteTaskHandler = taskId => {
        dispatch(deleteTask(taskId));
    }


    // Dispaly backdrop if modal is shown:
    let backdrop;

    if (showModal) {
        backdrop = <Backdrop click={closeModal} />
    }

    return (
        <div className={styles.manager}>
            {backdrop}
            <AddTaskModal close={closeModal} isShown={showModal} />

            <div className={styles.managerSegment}>
                <Segment header='NEW'>
                    {
                        tasks.map(({ id, title, description, difficulty, status }) => (
                            status == 0 ? // If status is 0 than it will be shown as NEW
                                <div className={styles.managerSegmentItem}>
                                    <Task
                                        id={id}
                                        key={id}
                                        title={title}
                                        descp={description}
                                        diff={difficulty}
                                        status={status}
                                        changeStatus={changeTaskStatusHandler}
                                        onDelete={deleteTaskHandler}
                                    />
                                </div>
                                : null
                        ))
                    }
                </Segment>
            </div>
            <div className={styles.managerSegment}>
                <Segment header='IN PROGRESS'>
                    {
                        tasks.map(({ id, title, description, difficulty, status }) => (
                            status == 1 ? // If status is 0 than it will be shown as IN PROGRESS
                                <div className={styles.managerSegmentItem}>
                                    <Task
                                        id={id}
                                        key={id}
                                        title={title}
                                        descp={description}
                                        diff={difficulty}
                                        status={status}
                                        changeStatus={changeTaskStatusHandler}
                                        onDelete={deleteTaskHandler}
                                    />
                                </div>
                                : null
                        ))
                    }
                </Segment>
            </div>
            <div className={styles.managerSegment}>
                <Segment header='FINISHED'>
                    {
                        tasks.map(({ id, title, description, difficulty, status }) => (
                            status == 2 ? // If status is 2 than it will be shown as FINISHED
                                <div className={styles.managerSegmentItem}>
                                    <Task
                                        id={id}
                                        key={id}
                                        title={title}
                                        descp={description}
                                        diff={difficulty}
                                        status={status}
                                        changeStatus={changeTaskStatusHandler}
                                        onDelete={deleteTaskHandler}
                                    />
                                </div>
                                : null
                        ))
                    }
                </Segment>
            </div>
            <div className={styles.managerAddButton}  >
                <Button name='+' onClick={handleAddTaskButtonClick} />
            </div>
        </div>
    )
}

export default ManagerPage

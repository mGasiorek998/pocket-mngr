import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './ManagerPage.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Segment from '../Segment/Segment';
import Task from '../Tasks/Task';
import Button from '../Button/Button';
import AddTaskModal from '../Modal/AddTaskModal';
import { changeTaskStatus, deleteTask, getAllTasks, getTaskById } from '../../redux/actions/tasks';
import EditTaskModal from '../Modal/EditTaskModal';
import FullTask from '../Tasks/FullTask';


/**
 * Component to show all the tasks with their current status
 */


const ManagerPage = () => {

    // State for showing modal: 
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showFullTaskModal, setShowFullTaskModal] = useState(false);


    // Tasks array from redux:
    const tasks = useSelector(state => state.tasks.tasks)
    const dispatch = useDispatch();

    /**
     * Display modal after clicking the add Task button:
     */
    const handleAddTaskButtonClick = () => setShowAddTaskModal(true);


    /**
     * Closes any modal
     */
    const closeModal = () => {
        setShowAddTaskModal(false);
        setShowEditTaskModal(false);
        setShowFullTaskModal(false);
    }

    /**
     * changes status for chosen task
     * @param {number} id - id of task to change status
     */
    const changeTaskStatusHandler = id => {
        dispatch(changeTaskStatus(id));
    }

    /**
     * removes task by id
     * @param {number} id - id of task to remove
     */
    const deleteTaskHandler = id => {
        dispatch(deleteTask(id));
    }

    /**
     * handles showing edit task modal and gettin the task that should be updated from server by id
     * @param {number} id - id of task to remove
     */
    const handleEditTaskButtonClick = id => {
        setShowEditTaskModal(true);
        dispatch(getTaskById(id));
    }

    /**
     * Handles 'more' button click
     * Displays a FullTask and gets task by Id from server
     * @param {number} id - task to show id
     */
    const handleShowMoreTaskButtonClick = id => {
        setShowFullTaskModal(true);
        dispatch(getTaskById(id));
    }


    // Dispaly backdrop if modal is shown:
    let backdrop;

    if (showAddTaskModal || showEditTaskModal || showFullTaskModal) {
        backdrop = <Backdrop click={closeModal} />
    }

    return (
        <div className={styles.manager}>
            {backdrop}

            <AddTaskModal
                close={closeModal}
                isShown={showAddTaskModal}
            />

            <EditTaskModal
                close={closeModal}
                isShown={showEditTaskModal}
            />

            <FullTask
                close={closeModal}
                isShown={showFullTaskModal}
                changeStatus={changeTaskStatusHandler}
            />

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
                                        onEdit={handleEditTaskButtonClick}
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
                                        onShowMore={handleShowMoreTaskButtonClick}
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

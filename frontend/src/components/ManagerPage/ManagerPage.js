import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './ManagerPage.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Segment from '../Segment/Segment';
import Task from '../Tasks/Task';
import Button from '../Button/Button';
import AddTaskModal from '../Modal/AddTaskModal';
import { getAllTasks } from '../../redux/actions/tasks';


/**
 * Component to show all the tasks with their current status
 */


const ManagerPage = () => {

    const [showModal, setShowModal] = useState(false);


    const tasks = useSelector(state => state.tasks.tasks) // Get tasks from redux state
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch all tasks
        dispatch(getAllTasks());
    }, [])

    //Display add task modal to UI
    const handleAddTaskButtonClick = () => {
        setShowModal(true);
    }

    let backdrop;
    let modal;

    if (showModal) {
        backdrop = <Backdrop />
        modal = <AddTaskModal />
    }

    return (
        <div className={styles.manager}>
            {backdrop}
            {modal}

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
                                        diff={difficulty} />
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

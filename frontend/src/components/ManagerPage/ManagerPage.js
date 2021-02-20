import React, { useState } from 'react'

import styles from './ManagerPage.module.css';

import Backdrop from '../Backdrop/Backdrop';
import Segment from '../Segment/Segment';
import Task from '../Tasks/Task';
import Button from '../Button/Button';
import AddTaskModal from '../Modal/AddTaskModal';

/**
 * Component to show all the tasks with their current status
 */


const ManagerPage = () => {

    const [showModal, setShowModal] = useState(false);


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
                    <Task title="CLEAN UP YOUR ROOM" descp="test test test test test test test test test test test test test testtest" diff="Very hard" />

                </Segment>
            </div>
            <div className={styles.managerSegment}>
                <Segment header='IN PROGRESS'>
                    <Task title="CLEAN UP YOUR ROOM" descp="test test test test test test test test test test test test test testtest" diff="Very hard" />
                </Segment>
            </div>
            <div className={styles.managerSegment}>
                <Segment header='FINISHED'>
                    <Task title="CLEAN UP YOUR ROOM" descp="test test test test test test test test test test test test test testtest" diff="Very hard" />
                </Segment>
            </div>
            <div className={styles.managerAddButton}  >
                <Button name='+' onClick={handleAddTaskButtonClick} />
            </div>
        </div>
    )
}

export default ManagerPage

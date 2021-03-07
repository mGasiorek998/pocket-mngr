import React, { useState } from 'react'
import styles from './ManagerPage.module.css';

import { useSelector, useDispatch } from 'react-redux';

import Backdrop from '../Backdrop/Backdrop';
import Task from '../Tasks/Task';
import Button from '../Button/Button';
import AddTaskModal from '../Modal/AddTaskModal';
import { changeTaskStatus, deleteTask, getTaskById } from '../../redux/actions/tasks';
import EditTaskModal from '../Modal/EditTaskModal';
import FullTask from '../Tasks/FullTask';

const ManagerPageSmallDevice = () => {

    // State for showing modal:
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showFullTaskModal, setShowFullTaskModal] = useState(false);

    const [radioInput, setRadioInput] = useState(0);
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    /**
     * Sets up state with checked radio button value
     * @param {Objetc} e - event object
     */
    const handleChangeRadioInput = e => setRadioInput(e.target.value);


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
        <div>
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

            <section
                className={styles.radioButtons}
                onChange={handleChangeRadioInput}>
                <label>
                    <input
                        type='radio'
                        value="0"
                        name="status"
                    />
                    New
            </label>

                <label>
                    <input
                        type='radio'
                        value="1"
                        name="status"
                    /> In Progress
            </label>

                <label>
                    <input
                        type='radio'
                        value="2"
                        name="status"
                    /> Finished
            </label>
            </section>

            <section>
                {
                    tasks.map(({ id, title, description, difficulty, status }) => (
                        status == radioInput ? // If status is 0 than it will be shown as NEW
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
                                    onShowMore={handleShowMoreTaskButtonClick}
                                />
                            </div>
                            : null
                    ))
                }
            </section>
            <div className={styles.managerAddButton}  >
                <Button name='+' onClick={handleAddTaskButtonClick} />
            </div>
        </div>
    )
}

export default ManagerPageSmallDevice;

import React from 'react'
import PropTypes from 'prop-types'

import styles from './Task.module.css';

import Button from '../Button/Button';

import { mapDifficultyIdsToNames } from '../../redux/actions/tasks';

/**
 * Component for showing task
 */

// Enum that contains difficulties ID and their value
const DIFFICULTIES = {
    0: 'Easy',
    1: 'Medium',
    2: 'Hard',
    3: 'Very Hard'
}


const mapDifficultyIdToValue = (diff_id) => DIFFICULTIES[diff_id];

const Task = ({ id, title, descp, diff, status, changeStatus, onDelete, onEdit }) => {


    // Show only first 50 characters from the task's description
    let shortDesp;

    if (descp.length > 50) { // if description is longer than 50 chars add '...' at the end to show that there is more
        shortDesp = `${descp.substring(0, 50).trim()}...`
    } else { // when description is less than 50 chars display full description
        shortDesp = descp;
    }


    // Display a correct set of buttons based on Task status:
    let leftButton;
    let rightButton;

    switch (status) {
        case 0:
            leftButton = <Button
                name='edit'
                isEmpty
                onClick={() => onEdit(id)} />

            rightButton = <Button name='assign' onClick={() => changeStatus(id)} />
            break;
        case 1:
            leftButton = <Button name='more' isEmpty />
            rightButton = <Button name='finish' onClick={() => changeStatus(id)} />
            break;
        case 2:
            rightButton = <Button name='delete' onClick={() => onDelete(id)} />
            break;
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <div className={styles.taskHeader}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.taskDescp}>
                    <p>{shortDesp}</p>
                </div>
                <div className={styles.taskDiff}>
                    <p>Difficulty: <span>{mapDifficultyIdsToNames(diff)}</span></p>
                </div>
                <div className={styles.taskButtons}>
                    {leftButton}
                    {rightButton}
                </div>
            </div>
        </div>
    )
}

Task.PropTypes = {
    /**
     * Task's id
     */
    id: PropTypes.number.isRequired,
    /**
     * Task's title
     */
    title: PropTypes.string.isRequired,

    /**
     * Task's decription
     */
    descp: PropTypes.string.isRequired,

    /**
     * Task's difficulty (0 -> Easy, 1 -> Medium, 2 -> Hard, 3 -> Very Hard)
     */
    diff: PropTypes.number.isRequired,

    /**
     * Task's status (0 -> New, 1 -> In Progress, 2 -> Finished)
     */
    status: PropTypes.number.isRequired,

    /**
     * Function for handling status change of the chosen task:
     */
    changeStatus: PropTypes.func.isRequired,

    /**
     * Function for deleting chosen task:
     */
    onDelete: PropTypes.func
}

export default Task

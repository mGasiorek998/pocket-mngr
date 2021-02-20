import React from 'react'
import PropTypes from 'prop-types'
import styles from './Task.module.css';

import Button from '../Button/Button';

/**
 * Component for showing task
 */

const Task = ({ title, descp, diff }) => {


    // Show only first 50 characters from the task's description
    let shortDesp;

    if (descp.length > 50) { // if description is longer than 50 chars add '...' at the end to show that there is more
        shortDesp = `${descp.substring(0, 50).trim()}...`
    } else { // when description is less than 50 chars display full description
        shortDesp = descp;
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
                    <p>Difficulty: <span>{diff}</span></p>
                </div>
                <div className={styles.taskButtons}>
                    <Button name='edit' isEmpty />
                    <Button name='assign' />
                </div>
            </div>
        </div>
    )
}

Task.PropTypes = {
    /**
     * Task's title
     */
    title: PropTypes.string.isRequired,

    /**
     * Task's decription
     */
    descp: PropTypes.string.isRequired,

    /**
     * Task's difficulty (Easy, Medium, Hard, Very Hard)
     */
    diff: PropTypes.string.isRequired,
}

export default Task

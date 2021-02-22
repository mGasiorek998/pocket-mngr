import React from 'react'
import PropTypes from 'prop-types';

import styles from './Segment.module.css';

/**
 * Component showing segment (Tasks with the same status in one column) for Manager Page
 */

const Segment = ({ header, children }) => {
    return (
        <section>
            <div className={styles.header}>
                <h2>{header}</h2>
            </div>
            <div className={styles.segmentContent}>
                {children}
            </div>
        </section>
    )
}

Segment.PropTypes = {
    /**
     * Header for the segment (Status)
     */
    header: PropTypes.string.isRequired,

    /**
     * Segment's content (column of tasks)
     */
    children: PropTypes.children,
}

export default Segment

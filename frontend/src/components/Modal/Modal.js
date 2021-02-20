import React from 'react'
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

/**
 * Component to display a Modal to the screen
 */

const Modal = ({ children }) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    )
}

Modal.PropTypes = {
    /**
     * Modal content
     */
    children: PropTypes.children
}

export default Modal

import React from 'react'
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

/**
 * Component to display a Modal to the screen
 */

const Modal = ({ children, show }) => {

    return (
        <div
            className={styles.modal}
            style={{
                transform: show ? 'translate(-50%, -50%)' : 'translate(-50%, -1vh)',
                visibility: show ? 'visible' : 'hidden',
            }}
        >
            <div>
                {children}
            </div>
        </div>
    )
}

Modal.PropTypes = {
    /**
     * Modal content
     */
    children: PropTypes.children,

    /**
     * Display modal with animation:
     */
    show: PropTypes.func,
}

export default Modal

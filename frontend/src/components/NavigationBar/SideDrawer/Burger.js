import React from 'react'
import PropTypes from 'prop-types';

import styles from './Burger.module.css';

/**
 * Burger for Mobile View
 */

const Burger = ({ click }) => {
    return (
        <button className={styles.burger} onClick={click}>
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
        </button>
    )
}

Burger.PropTypes = {
    /**
        Function to display side drawer for mobile view
     */
    click: PropTypes.func.isRequired,
}

export default Burger

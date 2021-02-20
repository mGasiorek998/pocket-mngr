import React from 'react'
import PropTypes from 'prop-types';

import styles from './Backdrop.module.css';

/** 
 * Component for showing darker overlay to UI
*/

const Backdrop = ({ click }) => {
    return (
        <div className={styles.backdrop} onClick={click}>

        </div>
    )
}

Backdrop.PropTypes = {
    /**
     * Function to execiute when backdrop is clicked
     */
    click: PropTypes.func.isRequired
}

export default Backdrop


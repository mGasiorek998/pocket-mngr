import React from 'react'

import styles from './Burger.module.css';

const Burger = ({ click }) => {
    return (
        <button className={styles.burger} onClick={click}>
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
        </button>
    )
}

export default Burger

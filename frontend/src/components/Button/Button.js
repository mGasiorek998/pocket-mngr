import React from 'react'
import styles from './Button.module.css';

const Button = ({ name, isEmpty, ...rest }) => {

    return (
        <button className={
            isEmpty ? `${styles.button} ${styles.empty}` : styles.button}
            {...rest}
        > {name}</button>
    )
}

export default Button

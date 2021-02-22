import React from 'react'
import PropTypes from 'prop-types';

import styles from './SideDrawer.module.css'

import { MENU_LINKS } from '../Toolbar/Toolbar';
import { NavLink } from 'react-router-dom';

/**
 * Side drawer containg all navigation links for mobile view
 */

const SideDrawer = ({ isShown, onClickClose }) => {
    return (
        <nav className={isShown ? `${styles.sideDrawer} ${styles.shown}` : styles.sideDrawer}>

            <ul>
                {
                    /**
                    * Display nav links from MENU_LINKS array
                    */
                    MENU_LINKS.map(({ title, url }, idx) => (
                        <li key={idx} onClick={onClickClose}>
                            <NavLink to={url} >{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

SideDrawer.PropTypes = {
    /**
     * Bool to toggle the side drawer
     */
    isShown: PropTypes.bool,
}

export default SideDrawer;

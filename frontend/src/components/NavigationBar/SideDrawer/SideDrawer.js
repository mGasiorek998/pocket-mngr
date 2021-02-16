import React from 'react'

import styles from './SideDrawer.module.css'

import { MENU_LINKS } from '../Toolbar/Toolbar';
import { NavLink } from 'react-router-dom';

const SideDrawer = ({ isShown }) => {
    return (
        <nav className={isShown ? `${styles.sideDrawer} ${styles.shown}` : styles.sideDrawer}>

            <ul>
                {
                    /**
                        *@param title - Navigation link title
                        *@param url - Navligation link url 
                        *@param idx - index of MENU_LINKS arr element
                    */
                    MENU_LINKS.map(({ title, url }, idx) => (
                        <li key={idx}>
                            <NavLink to={url}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default SideDrawer;

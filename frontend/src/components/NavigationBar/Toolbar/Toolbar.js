import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './Toolbar.module.css';

import Burger from '../SideDrawer/Burger';

export const MENU_LINKS = [
    {
        title: 'dashboard',
        url: '/dashboard',
    },
    {
        title: 'manager',
        url: '/manager',
    },
    {
        title: 'logout',
        url: '/logout',
    }
];


const Toolbar = ({ drawerToggleHandler }) => {
    return (
        <header className={styles.toolbar}>
            <nav className={styles.toolbarNav}>
                <div className={styles.toolbarLogo}>
                    <div><Link to='/'>PocketMngr</Link></div>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.toolbarNavLinks}>
                    <ul>
                        {
                            MENU_LINKS.map(({ title, url }, idx) => (
                                <li key={title}>
                                    <NavLink to={url}>{title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.toolbarBurger}>
                    <Burger click={drawerToggleHandler} />
                </div>
            </nav>
        </header>
    )
}

export default Toolbar

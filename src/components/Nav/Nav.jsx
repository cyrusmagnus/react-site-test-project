import React from 'react';
import navList from '../../helpers/navList.js';
import {NavLink} from "react-router-dom";
import styles from './Nav.module.scss';
const Nav = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navList.map((nav) =>(
                    <li className={styles.nav__item} key={nav.id}>
                        <NavLink to={nav.link}
                             className={({isActive}) => {
                                 return isActive ? styles.nav__linkActive : styles.nav__link;
                             }
                        }>
                            {nav.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;

import React, { useContext } from 'react';
import navList from '../../helpers/navList.js';
import { MenuContext } from '../../context/navState';
import styles from './SideMenu.module.scss';
import Button from "../Button/Button.jsx";
import {NavLink} from "react-router-dom";

export const SideMenu = () => {
    const { isMenuOpen } = useContext(MenuContext);
    return (
            <nav  className={!isMenuOpen ? styles.nav : styles.nav__active}>
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
                <Button title={'Заказать звонок'} paddingSide={20} paddingVertical={10}/>
            </nav>
        )
};

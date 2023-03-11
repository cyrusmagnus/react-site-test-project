import React, { useContext } from 'react';
import styles from './MenuIcon.module.scss';
import { MenuContext } from '../../context/navState.js';
const MenuIcon = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <div
            className={styles.icon}

        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default MenuIcon;

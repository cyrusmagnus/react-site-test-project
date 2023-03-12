import React, { useContext, useRef } from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HamburgerButton from './../HamburgerButton/HamburgerButton';
import { SideMenu } from './../SideMenu/SideMenu';

import styles from './Header.module.scss';
import Button from "../Button/Button.jsx";

const Header = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header className={styles.header} ref={node}>
            <div className={styles.header__icon}>
                <HamburgerButton/>
                <Logo title={'Компания'}/>
            </div>
            <div className={styles.header__navigation}>
                <Nav/>
                <Button title={'Заказать звонок'} paddingSide={20} paddingVertical={10}/>
            </div>
            <SideMenu />
        </header>
    );
};

export default Header;

import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import MenuIcon from '../MenuIcon/MenuIcon';
// import Button from "../Button/Button";

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <MenuIcon/>
            <Logo title={'Дурка'}/>
            <Nav/>

        </header>
    );
};

export default Header;

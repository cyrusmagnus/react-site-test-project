import React from 'react';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
// import Button from "../Button/Button";

import styles from './Header.module.scss';
const Header = () => {
    return (
        <header className={styles.header}>
            <Logo title={'логотип'}/>
            <Nav/>

        </header>
    );
};

export default Header;

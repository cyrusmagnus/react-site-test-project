import React from 'react';
import navList from './navList';
import styles from './Nav.module.scss';
import Button from "../Button/Button";
const Nav = () => {

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navList.map((item) =>(
                    <li className={styles.nav__item} key={item.id}>
                        <a className={styles.nav__link} href={item.title}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <Button title={'Заказать звонок'} paddingSide={10} paddingVertical={20}/>
        </nav>
    );
};

export default Nav;

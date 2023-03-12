import React from 'react';
import {NavLink} from "react-router-dom";
import svgIcons from './../../assets/img/icons.svg';
import styles from './Logo.module.scss';

const Logo = (props) => {
    const {title = ''} = props;

    return (
        <NavLink  className={styles.logo} to="/">
            <svg className={styles.logo__icon} width={24} height={24}>
                <use xlinkHref={`${svgIcons}#logo`}/>
            </svg>
            <span className={styles.logo__title}>{title}</span>
        </NavLink>
    );
};

export default Logo;

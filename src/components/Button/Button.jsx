import React from 'react';
import styles from './Button.module.scss';
// import './style.css';
const Button = (props) => {
    const {variant = 'default', paddingSide = 20, paddingVertical = 30, title = ''} = props;

    return (
        <button
            // className={'button'}
            className={variant !== 'invert' ? styles.button : styles.button__invert}
            style={{padding:`${paddingSide}px ${paddingVertical}px`}}
        >
            {title}
        </button>
    );
};

export default Button;

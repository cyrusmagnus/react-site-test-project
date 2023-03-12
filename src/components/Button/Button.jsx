import React from 'react';
import styles from './Button.module.scss';
const Button = (props) => {
    const {variant = 'default', paddingSide = 20, paddingVertical = 30, title = ''} = props;

    return (
        <button
            className={variant !== 'invert' ? styles.button : styles.button__invert}
            style={
                {padding: `${paddingVertical}px ${paddingSide}px`}
            }
        >
            {title}
        </button>

    );
};

export default Button;

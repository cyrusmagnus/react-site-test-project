import React from 'react';
import styles from './Button.module.scss';
const Button = (props) => {
    const {variant = 'default', paddingSide = 20, paddingVertical = 30, title = ''} = props;

    return (
        <button
            className={variant !== 'invert' ? styles.button : styles.button__invert}
            // onMouseEnter={(event) => {
            //     return event.target.classList.add(`${styles.hover}`);
            // }}
            // onMouseLeave={(event) => {
            //     return event.target.classList.remove(`${styles.hover}`);
            // }}
            style={
                {padding: `${paddingSide}px ${paddingVertical}px`}
            }
            // className={styles.button}
        >
            {title}
        </button>

    );
};

export default Button;

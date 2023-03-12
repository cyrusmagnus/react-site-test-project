import React from 'react';
import Button from '../../components/Button/Button.jsx';

import imgHero from './../../assets/img/heroimage/2.jpg';

import styles from './Heroimage.module.scss';

const Heroimage = (props) => {
    const {} = props;

    return (
        <section className={styles.heroimage}>
            <div className={styles.heroimage__content}>
                <h1 className={'header-1'}>Заголовок 1</h1>
                <p>
                    With Quickly, you can get more productive
                    work done in far less time than ever before.
                </p>
                <div>
                    <Button />
                    <a href={'#'}></a>
                </div>
            </div>vh
            <div className={styles.heroimage__image}>
                {/*<img src={imgHero}/>*/}
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Heroimage;

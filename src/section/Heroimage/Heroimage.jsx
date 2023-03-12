import React from 'react';
import Button from '../../components/Button/Button.jsx';

import imgHero from './../../assets/img/heroimage/2.jpg';

const Heroimage = (props) => {

    const {} = props;

    return (
        <section>
            <div>
                <span>The new way to work online</span>
                <h1>Get the important work done faster</h1>
                <p>
                    With Quickly, you can get more productive
                    work done in far less time than ever before.
                </p>
                <div>
                    <Button />
                    <a href={'#'}></a>
                </div>
            </div>
            <div>
                <img src={imgHero}/>
                <div>

                </div>
            </div>
        </section>
    );
};

export default Heroimage;

import React from 'react';
import background from '../../../assets/images/backgrounds/background.jpg'
import cl from '../Home.module.scss'

const HomeMain = () => {
    return (
        <div className={cl.wrapper}>
            <img className={cl.img} src={background} alt=""/>
        </div>
    );
};

export default HomeMain;
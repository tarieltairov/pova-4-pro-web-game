import React from 'react';
import cl from './Prize.module.scss';
import bg from '../../assets/videos/prize_2.mp4' 

const Prize = () => {
    return (
        <div className={cl.prize_page}>
            <video 
            src={bg} 
            autoPlay
            loop
            muted
            ></video>
        </div>
    );
};

export default Prize;
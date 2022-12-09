import React from 'react';
import bg from '../../../assets/videos/prize_2.mp4'
import cl from '../Home.module.scss'

const HomeVideo = () => {
    return (
        <div className={cl.video_flex} >
            <video
                className={cl.video}
                src={bg}
                autoPlay
                loop
                muted
            ></video>
        </div>
    );
};

export default HomeVideo;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './Home.module.scss'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className={cl.home_page}>
            <button className={cl.play_btn} onClick={()=>navigate('/game')}>ИГРАТЬ</button>
        </div>
    );
};

export default Home;
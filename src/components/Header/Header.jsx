import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import cl from './Header.module.scss';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={cl.header_container}>
            <nav>
                <div
                    className={location.pathname === '/tecno' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/tecno')}
                >ГЛАВНАЯ</div>
                <div
                    className={location.pathname === '/tecno/info' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/tecno/info')}
                >TECNO</div>
                <div
                    className={location.pathname === '/tecno/game' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/tecno/game')}
                >ИГРАТЬ</div>
                
            </nav>
        </div>
    );
};

export default Header;
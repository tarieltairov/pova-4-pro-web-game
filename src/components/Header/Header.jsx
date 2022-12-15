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
                    className={location.pathname === '/' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/')}
                >ГЛАВНАЯ</div>
                <div
                    className={location.pathname === '/tehno' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/tecno')}
                >TECNO</div>
                <div
                    className={location.pathname === '/game' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/game')}
                >ИГРАТЬ</div>
                
            </nav>
        </div>
    );
};

export default Header;
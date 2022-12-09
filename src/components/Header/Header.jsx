import React from 'react';
import cl from './Header.module.scss';
import { useLocation, useNavigate } from "react-router-dom";

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
                    className={location.pathname === '/prize' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/prize')}
                >О ПРИЗЕ</div>
                <div
                    className={location.pathname === '/game' ? cl.active_item : cl.nav_item}
                    onClick={() => navigate('/game')}
                >ИГРАТЬ</div>
                
            </nav>
        </div>
    );
};

export default Header;
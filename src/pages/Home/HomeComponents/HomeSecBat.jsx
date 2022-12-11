import React from 'react';
import cl from '../Home.module.scss';

const HomeSecBat = () => {
    return (
        <div className={cl.battery_security_block}>
            <h1>Технология безопасности аккумулятора STS Больше мощности и безопасное использование</h1>
            <p>Технология STS предотвращает внутренние короткие замыкания, вызванные прямым контактом между алюминиевой фольгой и анодом.</p>
        </div>
    );
};

export default HomeSecBat;
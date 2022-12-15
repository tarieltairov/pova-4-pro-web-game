import React from 'react';
import background from '../../../assets/images/phone.jpg';

const HomeCamera = () => {
    return (
        <div style={{marginBottom: '200px', marginTop: '200px', padding: '20px'}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{ color: "white",  textAlign: "center", marginBottom: '20px' }}>Камера 50 Мп с AI Изображение высокой четкости</h1>
                <p style={{ color: "white",  textAlign: "center" }}>Запечатлейте на память лучшие моменты жизни. Камера 50 Мп с AI поможет сделать красивые фото и выделит якрие детали и подарит вам идеальные снимки.</p>
            </div>
            <img style={{ width: '100%' }} src={background} alt="phone" />
        </div>
    );
};

export default HomeCamera;
import React from 'react';
import background from '../../../assets/images/phone.jpg'
const HomeCamera = () => {
    return (
        <div style={{marginBottom: '200px', marginTop: '200px'}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h3 style={{ color: "white", width: 400, textAlign: "center" }}>Камера 50 Мп с AI Изображение высокой четкости</h3>
                <p style={{ color: "white", maxWidth: 411, textAlign: "center" }}>Запечатлейте на память лучшие моменты жизни. Камера 50 Мп с AI поможет сделать красивые фото и выделит якрие детали и подарит вам идеальные снимки.</p>
            </div>
            <img style={{ width: '100%' }} src={background} alt="phone" />
        </div>
    );
};

export default HomeCamera;
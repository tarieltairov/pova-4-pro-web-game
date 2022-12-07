import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allyFire } from '../../../store/slices/logicSlices';
import cl from './ResultModal.module.scss';

const ResultModal = ({ setOpenResModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { shootCount } = useSelector(state => state.logic);

    const closeModal = () => {
        // dispatch(allyFire(shootCount));   потом раскоментить
        
        setOpenResModal(false)
    };

    return (
        <div className={cl.modal}>
            <h4>Ваше достижение</h4>

            <p>Ваш счёт: {shootCount} баллов</p>
            <p className={cl.rating_label}>Общий рейтинг</p>

            <div className={cl.rating_block}>
                <div className={cl.user_rating}>1. userName</div>
                <div className={cl.user_rating}>2. userName</div>
                <div className={cl.user_rating}>3. userName</div>
                <div className={cl.user_rating}>4. userName</div>
                
                <div className={cl.user_rating}>2. userName</div>
                <div className={cl.user_rating}>3. userName</div>
                <div className={cl.user_rating}>4. userName</div>
                
                <div className={cl.user_rating}>2. userName</div>
                <div className={cl.user_rating}>3. userName</div>
                <div className={cl.user_rating}>4. userName</div>
            </div>

            <div className={cl.btns_block}>
                <button className={cl.redirect_btn} onClick={() => navigate('/')}>На главную</button>
                <button className={cl.close_btn} onClick={() => closeModal()}>Закрыть</button>
            </div>
        </div>
    );
};

export default ResultModal;
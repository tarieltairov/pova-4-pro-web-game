import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closedResModal } from '../../../store/slices/logicSlices';
import Loader from '../../Loader/Loader';
import cl from './ResultModal.module.scss';

const ResultModal = ({ setOpenResModal, setMakeDied, setSequence, setOpenStartModal}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { shootCount, rating, loading, user } = useSelector(state => state.logic);

    const closeModal = () => {
        dispatch(closedResModal());
        setOpenResModal(false);
        setMakeDied(null);
        setSequence(1);
        setOpenStartModal(true);
    };

    return (
        <div className={cl.modal}>
            {loading && <Loader />}
            <h4>Игра завершена!</h4>

            <p>Ваш счёт: {shootCount} баллов</p>
            <p className={cl.rating_label}>Общий рейтинг</p>

            <div className={cl.rating_block}>
                {rating?.map((item, index) => (
                    <div className={item.id === user.id ? cl.current_user_rating : cl.user_rating} key={item.id}>
                        <p>{index+1}  {item.name}</p>
                        <p>{item.record}</p>
                    </div>
                ))}
            </div>

            <div className={cl.btns_block}>
                <button className={cl.redirect_btn} onClick={() => navigate('/')}>На главную</button>
                <button className={cl.close_btn} onClick={() => closeModal()}>Закрыть</button>
            </div>
        </div>
    );
};

export default ResultModal;
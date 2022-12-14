import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/slices/logicSlices';
import { WebSocketContext } from '../../../webSocket';
import Loader from '../../Loader/Loader';
import cl from './CreateUserModal.module.scss';

const CreateUserModal = ({ setOpenCreateModal }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.logic);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const ws = useContext(WebSocketContext);

    const createAndStart = () => {
        if (userName.length === 0 || email.length === 0) {
            alert('Заполните поля');
        } else {
            const newUser = {
                email,
                name: userName,
            };
            dispatch(setUser(newUser));
            ws.sendEmail({email, name: userName});
            ws.startGameEvent();
            setOpenCreateModal(false);
            setUserName('');
        }
    };
    
    return (
        <div className={cl.modal}>
            <h4>Создание нового игрока</h4>
            {loading && <Loader />}
            <input type="text" placeholder='Введите ваше имя' onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)} />
            <button onClick={createAndStart}>Начать</button>
        </div>
    );
};

export default CreateUserModal;
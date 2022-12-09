import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../store/actions/logicActions';
import { startedGame } from '../../../store/slices/logicSlices';
import Loader from '../../Loader/Loader';
import cl from './CreateUserModal.module.scss';

const CreateUserModal = ({ setOpenCreateModal }) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const { loading } = useSelector((state) => state.logic)

    const createAndStart = () => {
        dispatch(createUser(userName));
        dispatch(startedGame());
        setUserName('');
        setOpenCreateModal(false);
    };

    return (
        <div className={cl.modal}>
            <h4>Создание нового игрока</h4>
            {loading && <Loader />}

            <input type="text" placeholder='Введите ваше имя' onChange={(e) => setUserName(e.target.value)} />

            <button onClick={createAndStart}>Начать</button>
        </div>
    );
};

export default CreateUserModal;
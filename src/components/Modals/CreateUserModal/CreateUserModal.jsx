import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../../store/actions/logicActions';
import { startedGame } from '../../../store/slices/logicSlices';
import Loader from '../../Loader/Loader';
import cl from './CreateUserModal.module.scss';

const CreateUserModal = ({ setOpenCreateModal, setFakeUserName }) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const { loading } = useSelector((state) => state.logic);

    const createAndStart = () => {
        if (userName.length === 0) {
            alert('Введите имя');
        } else {
            dispatch(createUser(userName)).then(() => {
                setFakeUserName(userName);
                dispatch(startedGame());
                setOpenCreateModal(false);
                setUserName('');
            });
        }
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
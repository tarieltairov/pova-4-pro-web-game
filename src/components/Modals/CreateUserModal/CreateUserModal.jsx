import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, startedGame } from '../../../store/slices/logicSlices';
import cl from './CreateUserModal.module.scss';

const CreateUserModal = ({setOpenCreateModal}) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');

    const createAndStart = (e)=>{
        dispatch(createUser(userName));
        dispatch(startedGame());
        setUserName('');
        setOpenCreateModal(false);
    };

    return (
        <div className={cl.modal}>
            <h4>Создание нового игрока</h4>

            <input type="text" placeholder='Введите ваше имя' onChange={(e)=>setUserName(e.target.value)}/>

            <button onClick={createAndStart}>Начать</button>
        </div>
    );
};

export default CreateUserModal;
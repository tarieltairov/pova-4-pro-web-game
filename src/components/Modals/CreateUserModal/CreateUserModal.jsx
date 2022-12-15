import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../../../webSocket';
import Loader from '../../Loader/Loader';
import cl from './CreateUserModal.module.scss';

const CreateUserModal = ({ setOpenCreateModal }) => {
    const { loading } = useSelector((state) => state.logic);
    const ws = useContext(WebSocketContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const createAndStart = (data) => {
        ws.sendEmail(data);
        ws.startGameEvent();
        setOpenCreateModal(false);
    };

    return (
        <div className={cl.modal}>
            <h4>Создание нового игрока</h4>
            {loading && <Loader />}

            <form onSubmit={handleSubmit(createAndStart)}>
                <input
                    {...register("name", {
                        required: "Поле имя обязательно к заполнению!",
                    })}
                    type="text"
                    placeholder='Введите ваше имя'
                />
                {errors?.name && <span>{errors?.name?.message}</span>}

                <input
                    {...register("email", {
                        required: "Поле email обязательно к заполнению!",
                        pattern:
                            /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    })}
                    type="text"
                    placeholder='Введите ваш email'
                />
                {errors?.email && <span>{errors?.email?.message || 'Не правильный формат почты'}</span>}
                <button type="submit">Начать</button>
            </form>
        </div>
    );
};

export default CreateUserModal;
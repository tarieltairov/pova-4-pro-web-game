import React, { useEffect, useState } from 'react';
import cl from './Game.module.scss'
import classNames from 'classnames';
import fireSound from '../../assets/audio/fire.mp3'
import metalSound from '../../assets/audio/metal.mp3'
import { useDispatch, useSelector } from 'react-redux';
import { allyFire, emptyFire, endGame, removeTarget } from '../../store/slices/logicSlices';
import CreateUserModal from '../../components/Modals/CreateUserModal/CreateUserModal';



const Game = () => {
    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);

    useEffect(()=>{
        if(targets.length===0){
            dispatch(endGame());
            setMakeDied(null);
        };
    },[targets]);

    const playFireSound = () => {
        const audio = new Audio(fireSound);
        audio.play();
    };

    const targetHitFireSound = () => {
        const audio = new Audio(metalSound);
        audio.play();
    };

    const short = async(role, count, id) => {
        if (role === "black") {
            dispatch(emptyFire(count));
        } else {
            dispatch(allyFire(count));
        };
        setMakeDied(id);
        targetHitFireSound();
        setTimeout(() => {
            dispatch(removeTarget(id));
        }, 500);
    };


    return (
        <div className={cl.game_page} onClick={() => game && playFireSound()}>

            {!game && <button className={cl.start_btn} onClick={() => setOpenCreateModal(true)}>Начать игру</button>}

            {game &&
                <>
                    <div className={cl.glasses}>Очки: {shootCount}</div>
                    <div className={cl.user}>Вы: {user || 'user'}</div>
                    {targets?.map(item => (
                        <img
                            key={item?.target_id}
                            src={item.url}
                            className={classNames(item.role === 'black' ? cl.enemy_target : cl.target, item.className, item.target_id === makeDied && item.die)}
                            id={item.className}
                            onClick={() => short(item.role, item.glass, item.target_id).then(()=>{
                                console.log(targets.length)
                            })}
                        />
                    ))}
                </>
            }

            {openCreateModal && <CreateUserModal setOpenCreateModal={setOpenCreateModal} />}
        </div>
    );
};

export default Game;
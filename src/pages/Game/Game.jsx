import React, { useEffect, useState } from 'react';
import cl from './Game.module.scss'
import classNames from 'classnames';
import fireSound from '../../assets/audio/fire.mp3'
import metalSound from '../../assets/audio/metal.mp3'
import { useDispatch, useSelector } from 'react-redux';
import { allyFire, emptyFire, endGame, removeTarget } from '../../store/slices/logicSlices';
import CreateUserModal from '../../components/Modals/CreateUserModal/CreateUserModal';
import ResultModal from '../../components/Modals/ResultModal/ResultModal';
import CountDown from '../../components/CountDown';
import { getRating, sendRecord } from '../../store/actions/logicActions';

const Game = () => {
    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openResModal, setOpenResModal] = useState(false);

    useEffect(() => {
        if (targets.length === 0) {
            dispatch(sendRecord({ user: user.id, record: shootCount })).then(() => {
                dispatch(getRating())
            })
            dispatch(endGame());
        }
        if (game === 'completed') {
            setOpenResModal(true);
        };
    }, [targets, game, dispatch]);

    const playFireSound = () => {
        const audio = new Audio(fireSound);
        audio.play();
    };

    const targetHitFireSound = () => {
        const audio = new Audio(metalSound);
        audio.play();
    };

    const short = (role, count, id) => {
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
    console.log('targets', targets);

    return (
        <>
            <div className={cl.game_page} >
                <div className={cl.game_page_phone} onClick={() => game === "started" && playFireSound()}>

               
                {game === 'notStarted' && <button className={cl.start_btn} onClick={() => setOpenCreateModal(true)}>Начать игру</button>}

                {game === "started" &&
                    <>
                        <div className={cl.glasses}>Очки: {shootCount}</div>
                        <div className={cl.user}>Вы: {user.name || 'user'}</div>
                        <CountDown />
                        {targets?.map(item => (
                            <img
                                key={item?.target_id}
                                src={item.url}
                                className={classNames(item.role === 'black' ? cl.enemy_target : cl.target,
                                    item.className, item.target_id === makeDied && item.die)}
                                id={item.className}
                                onClick={() => short(item.role, item.glass, item.target_id)}
                                alt="target"
                            />
                        ))}
                    </>
                }

                {openCreateModal && <CreateUserModal setOpenCreateModal={setOpenCreateModal} />}
                {openResModal && <ResultModal setOpenResModal={setOpenResModal} setMakeDied={setMakeDied} />}

                {/* <div className={cl.for_frame} onClick={()=>console.log('re')}></div> */}
                </div>
            </div>
        </>
    );
};

export default Game;
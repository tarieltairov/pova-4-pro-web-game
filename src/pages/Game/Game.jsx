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
import StartModal from '../../components/Modals/StartModal/StartModal';


const audio3 = new Audio(metalSound);

const Game = () => {
    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openResModal, setOpenResModal] = useState(false);
    const [openStartModal, setOpenStartModal] = useState(true);
    const [sequence, setSequence] = useState(1);

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
        const audio2 = new Audio(fireSound);
        audio2.play();
    };

    const targetHitFireSound = () => {
        audio3.play();
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
            setSequence(prev => prev + 1)
        }, 500);
    };

    return (
        <div className={cl.game_page} >
            <div className={cl.game_page_phone} onClick={() => game === "started" && playFireSound()}>


                {openStartModal && game === 'notStarted' &&
                    <StartModal
                        setOpenCreateModal={setOpenCreateModal}
                        setOpenStartModal={setOpenStartModal}
                    />}


                {game === "started" &&
                    <>
                        <div className={cl.glasses}>Очки: {shootCount}</div>
                        <div className={cl.user}>Вы: {user.name || 'user'}</div>
                        <CountDown />
                        {targets?.map(item => {
                            if (item.target_id === sequence) {
                                return (
                                    <img
                                        key={item?.target_id}
                                        src={item.url}
                                        className={classNames(item.role === 'black' ?
                                            cl.enemy_target : cl.target,
                                            item.className, item.target_id === makeDied && item.die)}
                                        id={item.className}
                                        onClick={() => short(item.role, item.glass, item.target_id)}
                                        alt="target"
                                    />
                                )
                            }

                        })}
                    </>
                }

                {openCreateModal && <CreateUserModal setOpenCreateModal={setOpenCreateModal} />}
                {openResModal &&
                    <ResultModal
                        setOpenResModal={setOpenResModal}
                        setMakeDied={setMakeDied}
                        setSequence={setSequence}
                        setOpenStartModal={setOpenStartModal}
                    />}

                {/* <div className={cl.for_frame} onClick={()=>console.log('re')}></div> */}
            </div>
        </div>
    );
};

export default Game;
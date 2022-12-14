import React, { useContext, useEffect, useState } from 'react';
import cl from './Game.module.scss'
import classNames from 'classnames';
import fireSound from '../../assets/audio/fire.mp3'
import metalSound from '../../assets/audio/metal.mp3'
import { useDispatch, useSelector } from 'react-redux';
import { removeTarget } from '../../store/slices/logicSlices';
import CreateUserModal from '../../components/Modals/CreateUserModal/CreateUserModal';
import ResultModal from '../../components/Modals/ResultModal/ResultModal';
import CountDown from '../../components/CountDown';
import { getRating } from '../../store/actions/logicActions';
import StartModal from '../../components/Modals/StartModal/StartModal';
import { WebSocketContext } from '../../webSocket';

const audio3 = new Audio(metalSound);

const Game = () => {
    const ws = useContext(WebSocketContext);

    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openResModal, setOpenResModal] = useState(false);
    const [openStartModal, setOpenStartModal] = useState(true);

    useEffect(() => {
        if (game === 'completed') {
            dispatch(getRating()).then(() => {
                setOpenResModal(true);
            });
        };
    }, [game, dispatch]);


    const playFireSound = () => {
        const audio2 = new Audio(fireSound);
        audio2.play();
    };

    const targetHitFireSound = () => {
        audio3.play();
    };

    const getTarget = (e) => {
        const frame = e.target;
        frame.style.display = "none";
        const starter = document.elementFromPoint(e.clientX, e.clientY);
        const currentTargetIndex = Number(starter.id);
        frame.style.display = "block";

        if (!isNaN(currentTargetIndex)) {
            const currentTarget = targets.filter((_, index) => index === currentTargetIndex)[0]
            
            let forShootTarget = {
                target: currentTarget?.target,
                enemy: currentTarget?.enemy,
                position: currentTarget?.position, //только тогда когда 2 мишени
            };
            if (targets.length === 1) {
                delete forShootTarget.position;
            }
            ws.sendShootTarget(forShootTarget)
            targetHitFireSound();
            dispatch(removeTarget(currentTargetIndex))
        } else {
            playFireSound();
        }

    };


    return (
        <div id='background' className={cl.game_page}>

            {game === "started" &&
                <>
                    <div className={cl.glasses}>Очки: <span>{shootCount || 0}</span></div>
                    <div className={cl.user}>Вы: <span>{user.name || 'user'}</span></div>

                    <CountDown minutes={1} />

                    {targets?.map((item, index) => (
                        <img
                            id={index}
                            key={index}
                            src={item.url}
                            className={
                                classNames(item.enemy === true ?
                                    cl.enemy_target : cl.target,
                                    cl[item.position], index === makeDied && cl.die)
                            }
                            alt="target"
                        />
                    ))}
                </>
            }

            {openStartModal && game === 'notStarted' &&
                <StartModal
                    setOpenCreateModal={setOpenCreateModal}
                    setOpenStartModal={setOpenStartModal}
                />}

            {openCreateModal &&
                <CreateUserModal
                    setOpenCreateModal={setOpenCreateModal}
                />}

            {openResModal &&
                <ResultModal
                    setOpenResModal={setOpenResModal}
                    setMakeDied={setMakeDied}
                    setOpenStartModal={setOpenStartModal}
                />}

            {game === 'started' && <div id='frame' className={cl.frame} onClick={(e) => getTarget(e)}></div>}
        </div>
    );
};

export default Game;
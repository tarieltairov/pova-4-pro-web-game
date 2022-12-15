import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTarget } from '../../store/slices/logicSlices';
import { getRating } from '../../store/actions/logicActions';
import { WebSocketContext } from '../../webSocket';
import { toast } from 'react-toastify';
import fireSound from '../../assets/audio/fire.mp3'
import metalSound from '../../assets/audio/metal.mp3'
import CreateUserModal from '../../components/Modals/CreateUserModal/CreateUserModal';
import ResultModal from '../../components/Modals/ResultModal/ResultModal';
import StartModal from '../../components/Modals/StartModal/StartModal';
import CountDown from '../../components/CountDown';
import cl from './Game.module.scss';
import classNames from 'classnames';

const Game = () => {
    const dispatch = useDispatch();
    const { shootCount, game, user, targets } = useSelector(state => state.logic);
    const [makeDied, setMakeDied] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openResModal, setOpenResModal] = useState(false);
    const [openStartModal, setOpenStartModal] = useState(true);
    const [isMobile, setIsMobile] = useState(false)
    const ws = useContext(WebSocketContext);

    useEffect(() => {
        if (game === 'completed') {
            dispatch(getRating()).then(() => {
                setOpenResModal(true);
            });
        };
    }, [game, dispatch]);

    useEffect(() => {
        setIsMobile(navigator?.userAgentData?.mobile);
    }, []);

    useEffect(() => {
        if (isMobile && game === "started") {
            toast.success('Поверните телефон');
        }
        if(isMobile && game === "completed"){
            toast.success('Поверните телефон обратно');
        }
    }, [isMobile, game]);

    const playFireSound = () => {
        const audio2 = new Audio(fireSound);
        audio2.play();
    };

    const targetHitFireSound = () => {
        const audio3 = new Audio(metalSound);
        audio3.play();
    };

    const getTarget = (e) => {
        const frame = e.target;
        frame.style.display = "none";
        const starter = document.elementFromPoint(e.clientX, e.clientY);
        const currentTargetIndex = Number(starter.id);
        frame.style.display = "block";

        const currentTarget = targets.filter((_, index) => index === currentTargetIndex)[0];
        const notCurrentTarget = targets.filter((_, index) => index !== currentTargetIndex)[0];

        if (!isNaN(currentTargetIndex)) {
            let forShootTarget = {
                target: currentTarget?.target,
                enemy: currentTarget?.enemy,
                position: notCurrentTarget?.position, //только тогда когда 2 мишени
            };
            if (targets.length === 1) {
                delete forShootTarget.position;
            }
            ws.sendShootTarget(forShootTarget);
            targetHitFireSound();
            dispatch(removeTarget(currentTargetIndex));
        } else {
            playFireSound();
        }
    };

    return (
        <div id='background' className={cl.game_page}>

            {game === "started" &&
            <>
                <div className={isMobile ? cl.mobileTablets:  cl.tablets}>
                    <div className={cl.glasses}>Очки: <span>{shootCount || 0}</span></div>
                    <CountDown minutes={1} />
                    <div className={cl.user}>Вы: <span>{user.name || 'user'}</span></div>
                </div>

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
                    isMobile={isMobile}
                    setOpenCreateModal={setOpenCreateModal}
                    setOpenStartModal={setOpenStartModal}
                />}

            {openCreateModal &&
                <CreateUserModal
                    isMobile={isMobile}
                    setOpenCreateModal={setOpenCreateModal}
                />}

            {openResModal &&
                <ResultModal
                    isMobile={isMobile}
                    setOpenResModal={setOpenResModal}
                    setMakeDied={setMakeDied}
                    setOpenStartModal={setOpenStartModal}
                />}

            {game === 'started' && <div id='frame' className={cl.frame} onClick={(e) => getTarget(e)}></div>}
        </div>
    );
};

export default Game;